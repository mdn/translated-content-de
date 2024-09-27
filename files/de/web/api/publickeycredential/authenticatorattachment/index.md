---
title: "PublicKeyCredential: authenticatorAttachment-Eigenschaft"
short-title: authenticatorAttachment
slug: Web/API/PublicKeyCredential/authenticatorAttachment
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`authenticatorAttachment`**-Schreibgeschützte Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein String, der die allgemeine Kategorie des Authentifikators angibt, der während des zugehörigen Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet wird.

## Wert

Ein String, der einer der folgenden Werte sein wird:

- `"platform"`
  - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (genannt ein **Plattform-Authentifikator**), daher wird WebAuthn mit ihm mittels eines für diese Plattform verfügbaren Transports kommunizieren, wie beispielsweise einer plattformspezifischen API. Ein öffentlicher Schlüssel-Datensatz, der an einen Plattform-Authentifikator gebunden ist, wird als **Plattform-Anmeldeinformation** bezeichnet.
- `"cross-platform"`
  - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn läuft (genannt ein **Roaming-Authentifikator**, da er zwischen verschiedenen Geräten wechseln kann), daher wird WebAuthn mit ihm mittels eines plattformübergreifenden Transportprotokolls wie Bluetooth oder NFC kommunizieren. Ein öffentlicher Schlüssel-Datensatz, der an einen Roaming-Authentifikator gebunden ist, wird als **Roaming-Anmeldeinformation** bezeichnet.

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
    const attachment = pubKeyCredential.authenticatorAttachment;
    // Do something with authenticatorAttachment
  })
  .catch((err) => {
    // Deal with any error
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
