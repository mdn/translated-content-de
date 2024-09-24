---
title: "AuthenticatorAttestationResponse: getAuthenticatorData()-Methode"
short-title: getAuthenticatorData()
slug: Web/API/AuthenticatorAttestationResponse/getAuthenticatorData
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getAuthenticatorData()`**-Methode des {{domxref("AuthenticatorAttestationResponse")}}-Interfaces gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authenticator-Daten enthält, die in der {{domxref("AuthenticatorAttestationResponse.attestationObject")}}-Eigenschaft enthalten sind.

Dies ist eine Komfortfunktion, die erstellt wurde, um einfachen Zugriff auf die Authenticator-Daten zu ermöglichen, ohne zusätzlichen Parsing-Code schreiben zu müssen, um diese aus dem `attestationObject` zu extrahieren.

## Syntax

```js-nolint
getAuthenticatorData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, die die im [Authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärten Datenstrukturen enthält.

Dies entspricht den Authenticator-Daten, die in der {{domxref("AuthenticatorAttestationResponse.attestationObject")}}-Eigenschaft enthalten sind.

## Beispiele

Sehen Sie sich [Erstellen eines Public Key-Zertifikats mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
