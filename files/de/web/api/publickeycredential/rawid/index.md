---
title: "PublicKeyCredential: rawId-Eigenschaft"
short-title: rawId
slug: Web/API/PublicKeyCredential/rawId
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`rawId`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt, das den Bezeichner der Anmeldedaten enthält.

Die [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id)-Eigenschaft ist eine {{Glossary("Base64", "base64url-kodierte")}} Version dieses Bezeichners.

> [!NOTE]
> Diese Eigenschaft darf nur in Top-Level-Kontexten verwendet werden und steht beispielsweise in einem {{HTMLElement("iframe")}} nicht zur Verfügung.

## Wert

Ein {{jsxref("ArrayBuffer")}}, der den Bezeichner der Anmeldedaten enthält. Dieser Bezeichner soll weltweit einzigartig sein und ist für das aktuelle `PublicKeyCredential` und seine zugehörige [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) bestimmt.

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
