const mongoose = require('mongoose');

const twitterSchema = new mongoose.Schema({
    UserName: String,
    Country: String,
    phoneNumber: Number,
    Tweet: [String],
    Timestamp: String,
    email: String,
    IP_Address: String
  }, { collection: 'Twitter_data' });
  
  const cryptocurrencySchema = new mongoose.Schema({
    
  Transaction_ID: String,
  Timestamp: Number,
  Sender_Address: String,
  Recipient_Address: String,
  Amount: Number,
  Transaction_Fee: Number,
  Block_Number: Number,
  Inputs: String,
  Outputs: String,
  Signature: String,
  ScriptPubKey: String,
  ScriptSig: String,
  Confirmations: Number,
  IP_Address: String
  }, { collection: 'Cryptocurrency_data' });
  
  
  const immigrationSchema = new mongoose.Schema({
    Name: String,
    ID_Number: Number,
    phoneNumber: Number,
    Flight_Number: String,
    Departure_Country: String,
    Arrival_Country: String,
    Date_and_Time_of_Departure: String,
    Date_and_Time_of_Arrival: String,
    Reason_for_Travel: String
  }, {collection: 'Immigration'});
  
  const sanctionedSchema = new mongoose.Schema({
    name: String,
    aliases: [String],
    country_of_origin: String,
    email: String,
    Leader: String,
    date_of_sanction: String,
    reason_for_sanction: String,
    activities: String,
    affiliations: [String],
    sanctioning_authority: String,
    status: String,
  }, { collection: 'Sanctioned_list' });
  
  const bankSchema = new mongoose.Schema({
    account_number: Number,
    first_name: String,
    last_name: String,
    Name: String,
    email: String,
    SenderID: Number,
    gender: String,
    phoneNumber: Number,
    Country: String,
    receiver: Number,
    receiver1: Number,
    receiver2: Number,
    receiver3: Number,
    receiver4: Number
  }, { collection: 'Bank_information' });
  
  const callSchema = new mongoose.Schema({
    CallerID: Number,
    CallerName: String,
    ReceiverID: Number,
    ReceiverName: String,
    TimeStamp: String,
    Caller_country: String,
    Receiver_Country: String,
    CallDuration: Number
  }, { collection: 'Call_records' });
  
  const facebookSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    Country: String,
    phoneNumber: Number,
    Post: String
  }, { collection: 'Facebook_data' });
  
  const importExportSchema = new mongoose.Schema({
    HSCode: Number,
    Commodity: String,
    value: Number,
    Origin_Country: String,
    year: Number,
    Supplier_Entity: String,
    Contact_phone_number: Number
  }, {collection: 'Import_Export_data'});
  

module.exports = {
  Twitter: mongoose.model('Twitter', twitterSchema),
  Sanctioned: mongoose.model('Sanctioned', sanctionedSchema),
   Immigration : mongoose.model('Immigration', immigrationSchema),
   Bank : mongoose.model('Bank', bankSchema),
   Call : mongoose.model('Call', callSchema),
   Facebook : mongoose.model('Facebook', facebookSchema),
   ImportExport : mongoose.model('ImportExport', importExportSchema),
   Cryptocurrency : mongoose.model('Cryptocurrency', cryptocurrencySchema)
};