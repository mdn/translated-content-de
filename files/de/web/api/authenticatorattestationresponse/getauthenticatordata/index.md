---
title: "AuthenticatorAttestationResponse: getAuthenticatorData()-Methode"
short-title: getAuthenticatorData()
slug: Web/API/AuthenticatorAttestationResponse/getAuthenticatorData
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getAuthenticatorData()`**-Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt einen {{jsxref("ArrayBuffer")}} zurück, der die Authenticator-Daten enthält, die sich in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft befinden.

Dies ist eine Komfortfunktion, die geschaffen wurde, um einfachen Zugriff auf die Authenticator-Daten zu ermöglichen, ohne dass zusätzlicher Parsing-Code geschrieben werden muss, um sie aus dem `attestationObject` zu extrahieren.

## Syntax

```js-nolint
getAuthenticatorData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength")}} von mindestens 37 Bytes, welches die in [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärten Datenstrukturen enthält.

Dies entspricht den Authenticator-Daten, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.

## Beispiele

Siehe [Erstellen eines Public-Key-Zertifikats](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
