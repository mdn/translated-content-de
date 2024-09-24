---
title: "PublicKeyCredential: authenticatorAttachment-Eigenschaft"
short-title: authenticatorAttachment
slug: Web/API/PublicKeyCredential/authenticatorAttachment
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`authenticatorAttachment`**-Eigenschaft der {{domxref("PublicKeyCredential")}}-Schnittstelle ist ein String, der die allgemeine Kategorie des Authentifikators angibt, der während des zugehörigen Aufrufs von {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} oder {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} verwendet wurde.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"platform"`
  - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **Plattform-Authentifikator**), daher wird WebAuthn mit ihm über ein für diese Plattform verfügbares Transportmittel kommunizieren, wie z.B. eine plattformspezifische API. Ein öffentliches Schlüssel-Zertifikat, das an einen Plattform-Authentifikator gebunden ist, wird als **Plattform-Zertifikat** bezeichnet.
- `"cross-platform"`
  - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **Roaming-Authentifikator**, da er zwischen verschiedenen Geräten wandern kann), daher wird WebAuthn über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC mit ihm kommunizieren. Ein öffentliches Schlüssel-Zertifikat, das an einen Roaming-Authentifikator gebunden ist, wird als **Roaming-Zertifikat** bezeichnet.

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

## Kompatibilität der Browser

{{Compat}}
