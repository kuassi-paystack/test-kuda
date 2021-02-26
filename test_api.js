const fs = require("fs");
const Kuda = require("./index");

/*
const publicKey = fs.readFileSync("./keys/kuda.public.xml"); // or path to your kuda public key
const privateKey = fs.readFileSync("./keys/kuda.private.xml"); // or path to your kuda kuda private key
const clientKey = "9sna4VTS8dNZeLcCl2gX"; // name of private key file without the .xml suffix (extension)
//*/

//*
const publicKey = fs.readFileSync("./keys/prod_public.xml"); // or path to your kuda public key
const privateKey = fs.readFileSync("./keys/prod_private.xml"); // or path to your kuda kuda private key
const clientKey = "gb4DEJ9Uak3w5L8uW70r"; // name of private key file without the .xml suffix (extension)
//*/

const kuda = Kuda({
  publicKey,
  privateKey,
  clientKey
});


// account creation

const shortid = require("shortid"); // this libarary will generate random id for you. You can install with `yarn add shortid` or `npm i shortid`. You can use any other random key generatring library of your choice

/* 1 - Get bank list
kuda(
  {
    serviceType: "BANK_LIST",
    requestRef: Math.floor(Math.random() * 1000000000000 + 1),
  },
  data => {
    // data => decrypted response from Kuda API

    console.log(JSON.stringify(data, null, 2));
  }
);
//*/

//2 - Send money from Kuda bank to the bank account supported
/*
kuda(
  {
    serviceType: "SINGLE_FUND_TRANSFER",
    requestRef: Math.floor(Math.random() * 1000000000000 + 1),
    data: {
      beneficiarybankCode: "000013",
      beneficiaryAccount: "0037514410",
      beneficiaryName: "Paystack",
      amount: "101",
      narration: "Test with Femi",
      nameEnquirySessionID: "",
      trackingReference: "vAcc-" + shortid.generate(),
      senderName: "Kuassi Kumako",
    },
  },
  data => {

    console.log(JSON.stringify(data, null, 2));
  }
);
//*/


// 3- Check transfer status
//*
kuda(
  {
    serviceType: "TRANSACTION_STATUS_QUERY",
    requestRef: Math.floor(Math.random() * 1000000000000 + 1),
    data: {
      isThirdPartyBankTransfer: true,
      transactionRequestReference: "243451572336",
    },
  },
  data => {

    console.log(JSON.stringify(data, null, 2));
  }
);
//*/
