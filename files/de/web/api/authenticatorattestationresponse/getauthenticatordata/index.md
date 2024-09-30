---
title: "AuthenticatorAttestationResponse: getAuthenticatorData() Methode"
short-title: getAuthenticatorData()
slug: Web/API/AuthenticatorAttestationResponse/getAuthenticatorData
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getAuthenticatorData()`** Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Interfaces gibt einen {{jsxref("ArrayBuffer")}} zurück, der die Authentifikator-Daten enthält, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) Eigenschaft enthalten sind.

Dies ist eine Komfortfunktion, die entwickelt wurde, um einfachen Zugriff auf die Authentifikator-Daten zu ermöglichen, ohne zusätzlichen Parsing-Code schreiben zu müssen, um sie aus dem `attestationObject` zu extrahieren.

## Syntax

```js-nolint
getAuthenticatorData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, der die in [Authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärte Datenstruktur enthält.

Dies wird äquivalent zu den Authentifikator-Daten sein, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) Eigenschaft enthalten sind.

## Beispiele

Siehe [Erstellen eines public key credentials mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
