const fs = require("fs");
const Kuda = require("./index");

const publicKey = fs.readFileSync("./keys/kuda.public.xml"); // or path to your kuda public key
const privateKey = fs.readFileSync("./keys/kuda.private.xml"); // or path to your kuda kuda private key
const clientKey = "9sna4VTS8dNZeLcCl2gX"; // name of private key file without the .xml suffix (extension)

const kuda = Kuda({
  publicKey,
  privateKey,
  clientKey
});


// account creation

const shortid = require("shortid"); // this libarary will generate random id for you. You can install with `yarn add shortid` or `npm i shortid`. You can use any other random key generatring library of your choice

// 1 - Get bank list
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

//2 - Send money from Kuda bank to the bank account supported
/*
kuda(
  {
    serviceType: "SINGLE_FUND_TRANSFER",
    requestRef: Math.floor(Math.random() * 1000000000000 + 1),
    data: {
      beneficiarybankCode: "999044",
      beneficiaryAccount: "00000000000",
      beneficiaryName: "Kuassi Kumako",
      amount: "350000",
      narration: "test purpose",
      nameEnquirySessionID: "",
      trackingReference: "vAcc-" + shortid.generate(),
      senderName: "",
    },
  },
  data => {

    console.log(JSON.stringify(data, null, 2));
  }
);
*/


// 3- Check transfer status
/*
kuda(
  {
    serviceType: "TRANSACTION_STATUS_QUERY",
    requestRef: Math.floor(Math.random() * 1000000000000 + 1),
    data: {
      isThirdPartyBankTransfer: false,
      transactionRequestReference: "178259486112", // I use a refenrence I got while testing SINGLE_FUND_TRANSFER service
    },
  },
  data => {

    console.log(JSON.stringify(data, null, 2));
  }
);
*/
