---
title: "PublicKeyCredential: id-Eigenschaft"
short-title: id
slug: Web/API/PublicKeyCredential/id
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`id`**-Eigenschaft des {{domxref("PublicKeyCredential")}}-Interfaces ist eine schreibgeschützte Zeichenkette, die von {{domxref("Credential")}} geerbt wird und den Bezeichner der aktuellen `PublicKeyCredential`-Instanz darstellt.

Diese Eigenschaft ist eine [base64url-codierte](/de/docs/Glossary/Base64) Version von {{domxref("PublicKeyCredential.rawId")}}.

> [!NOTE]
> Diese Eigenschaft kann nur in obersten Kontextebenen verwendet werden und steht beispielsweise in einem {{HTMLElement("iframe")}} nicht zur Verfügung.

## Wert

Eine Zeichenkette, die die [base64url-codierte](/de/docs/Glossary/Base64) Version von {{domxref("PublicKeyCredential.rawId")}} darstellt.

## Beispiele

```js
const publicKey = {
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* To be changed for each user */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey })
  .then((newCredentialInfo) => {
    const id = newCredentialInfo.id;
    // Do something with the id

    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Credential.id")}}
