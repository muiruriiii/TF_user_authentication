const { Bank, Twitter, Sanctioned, Call, Facebook, Immigration, ImportExport, Cryptocurrency } = require('./models');

async function determineSearchType(searchTerm) {
    if (await Bank.exists({ email: searchTerm }) ||
        await Twitter.exists({ email: searchTerm }) ||
        await Sanctioned.exists({ email: searchTerm }) ||
        await Facebook.exists({ Email: searchTerm })) {
      return 'email';
    }
    if (
        await Bank.exists({ $or: [{ first_name: { $regex: new RegExp(searchTerm, 'i')} }, { last_name: { $regex: new RegExp(searchTerm, 'i')} }, {Name: { $regex: new RegExp(searchTerm, 'i')} }] }) ||
        await Twitter.exists({ UserName: { $regex: new RegExp(searchTerm, 'i')} }) ||
        await Sanctioned.exists({ name: { $regex: new RegExp(searchTerm, 'i')} }) ||
        await Facebook.exists({ Username: { $regex: new RegExp(searchTerm, 'i')} }) ||
        await Call.exists({ $or: [{ CallerName: { $regex: new RegExp(searchTerm, 'i')} }, { ReceiverName: { $regex: new RegExp(searchTerm, 'i')} }] }) ||
        await Twitter.exists ({ Name: { $regex: new RegExp(searchTerm, 'i')} })
    ) {
      return 'name';
    }
    if (await Bank.exists({ account_number: parseInt(searchTerm, 10) })) {
      return 'account_number';
    }
    if (await Bank.exists({ SenderID: parseInt(searchTerm, 10) })) {
      return 'SenderID';
    }
    if (await Twitter.exists({ IP_Address: parseInt(searchTerm, 10) }) ||
        await Cryptocurrency.exists({ IP_Address: parseInt(searchTerm, 10) })
    ) {
      return 'IP_Address';
    }
    if (await Bank.exists({ phoneNumber: searchTerm }) ||
        await Twitter.exists({ phoneNumber: searchTerm }) ||
        await Call.exists({ $or: [{ CallerID: searchTerm }, { ReceiverID: searchTerm }] }) ||
        await Facebook.exists({ phoneNumber: searchTerm }) ||
        await ImportExport.exists({ Contact_phone_number: searchTerm }) ||
        await Immigration.exists({ phoneNumber: searchTerm })) {
      return 'phone';
    }
  
    return 'other';
  }

module.exports = {
  determineSearchType
};