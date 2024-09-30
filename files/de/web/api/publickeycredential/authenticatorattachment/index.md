---
title: "PublicKeyCredential: authenticatorAttachment-Eigenschaft"
short-title: authenticatorAttachment
slug: Web/API/PublicKeyCredential/authenticatorAttachment
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`authenticatorAttachment`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein String, der die allgemeine Kategorie des Authentifikators angibt, der während des zugehörigen Aufrufes von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet wird.

## Wert

Ein String, welcher einer der folgenden Werte sein wird:

- `"platform"`
  - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (als **Plattform-Authenticator** bezeichnet), daher wird WebAuthn mit ihm über ein für diese Plattform verfügbares Transportmittel kommunizieren, wie zum Beispiel eine plattformspezifische API. Ein öffentlicher Schlüssel, der an einen Plattform-Authenticator gebunden ist, wird als **Plattform-Anmeldedaten** bezeichnet.
- `"cross-platform"`
  - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn läuft (als **Roaming-Authenticator** bezeichnet, da er zwischen verschiedenen Geräten wechseln kann), daher wird WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC kommunizieren. Ein öffentlicher Schlüssel, der an einen Roaming-Authenticator gebunden ist, wird als **Roaming-Anmeldedaten** bezeichnet.

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
