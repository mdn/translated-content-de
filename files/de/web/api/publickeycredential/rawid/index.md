---
title: "PublicKeyCredential: rawId-Eigenschaft"
short-title: rawId
slug: Web/API/PublicKeyCredential/rawId
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`rawId`**-Eigenschaft des
[`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt,
das die Kennung der Anmeldeinformationen enthält.

Die [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id)-Eigenschaft ist eine {{Glossary("Base64", "base64url kodierte")}} Version dieser Kennung.

> [!NOTE]
> Diese Eigenschaft kann nur in obersten Kontexten verwendet werden und ist zum Beispiel in einem {{HTMLElement("iframe")}} nicht verfügbar.

## Wert

Ein {{jsxref("ArrayBuffer")}}, der die Kennung der Anmeldeinformationen enthält. Diese Kennung soll global eindeutig sein und ist für die aktuelle `PublicKeyCredential` und ihre zugehörige
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
