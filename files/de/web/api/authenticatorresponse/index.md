---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`AuthenticatorResponse`**-Interface der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Basisinterface für Interfaces, die eine kryptografische Vertrauensbasis für ein Schlüsselpaar bereitstellen. Die abgeleiteten Interfaces enthalten Informationen aus dem Browser wie den Ursprung der Herausforderung und können entweder von {{domxref("PublicKeyCredential.response")}} zurückgegeben werden.

## Auf AuthenticatorResponse basierende Interfaces

Unten ist eine Liste von Interfaces, die auf dem AuthenticatorResponse-Interface basieren.

- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("AuthenticatorAttestationResponse")}}

## Instanzeigenschaften

- {{domxref("AuthenticatorResponse.clientDataJSON")}}
  - : Ein [JSON](/de/docs/Learn/JavaScript/Objects/JSON)-String in einem {{jsxref("ArrayBuffer")}}, der die Clientdaten darstellt, die an {{domxref("CredentialsContainer.create()")}} oder {{domxref("CredentialsContainer.get()")}} übergeben wurden.

## Instanzmethoden

Keine.

## Beispiele

### Abrufen eines AuthenticatorAssertionResponse

```js
const options = {
  challenge: new Uint8Array([
    /* Bytes, die vom Server gesendet wurden */
  ]),
};

navigator.credentials
  .get({ publicKey: options })
  .then((credentialInfoAssertion) => {
    const assertionResponse = credentialInfoAssertion.response;
    // assertion response zurück an den Server senden
    // um mit der Kontrolle des Credentials fortzufahren
  })
  .catch((err) => console.error(err));
```

### Abrufen eines AuthenticatorAttestationResponse

```js
const publicKey = {
  challenge: new Uint8Array([
    21, 31, 105 /* 29 weitere zufällige Bytes, die vom Server generiert wurden */,
  ]),
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe",
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
    const attestationResponse = newCredentialInfo.response;
  })
  .catch((err) => console.error(err));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AuthenticatorAttestationResponse")}}
- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("PublicKeyCredential.response")}}
