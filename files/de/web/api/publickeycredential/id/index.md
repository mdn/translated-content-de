---
title: "PublicKeyCredential: id Eigenschaft"
short-title: id
slug: Web/API/PublicKeyCredential/id
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`id`** der
[`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle ist ein String, geerbt
von [`Credential`](/de/docs/Web/API/Credential), der den Bezeichner der aktuellen
`PublicKeyCredential`-Instanz darstellt.

Diese Eigenschaft ist eine in {{Glossary("Base64", "base64url kodierte")}} Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).

> [!NOTE]
> Diese Eigenschaft darf nur in Top-Level-Kontexten verwendet werden und
> wird z. B. nicht in einem {{HTMLElement("iframe")}} verfügbar sein.

## Wert

Ein String, der die in {{Glossary("Base64", "base64url kodierte")}} Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) ist.

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

- [`Credential.id`](/de/docs/Web/API/Credential/id)
