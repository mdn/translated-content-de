---
title: "PublicKeyCredential: rawId-Eigenschaft"
short-title: rawId
slug: Web/API/PublicKeyCredential/rawId
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`rawId`** schreibgeschützte Eigenschaft des
[`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt,
das den Identifikator der Anmeldeinformationen enthält.

Die [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id)-Eigenschaft ist eine [base64url-kodierte](/de/docs/Glossary/Base64) Version dieses Identifikators.

> [!NOTE]
> Diese Eigenschaft kann nur in obersten Kontexten verwendet werden und wird
> zum Beispiel in einem {{HTMLElement("iframe")}} nicht verfügbar sein.

## Wert

Ein {{jsxref("ArrayBuffer")}}, das den Identifikator der Anmeldeinformationen enthält. Dieser
Identifikator soll global eindeutig sein und ist für das aktuelle
`PublicKeyCredential` und dessen zugehörige
[`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) bestimmt.

## Beispiele

```js
const options = {
  challenge: new Uint8Array(26) /* from the server */,
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
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const rawId = pubKeyCredential.rawId;
    // Do something with rawId
  })
  .catch((err) => {
    // Deal with any error
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
