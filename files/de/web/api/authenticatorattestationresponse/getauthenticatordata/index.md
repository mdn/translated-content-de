---
title: "AuthenticatorAttestationResponse: getAuthenticatorData()-Methode"
short-title: getAuthenticatorData()
slug: Web/API/AuthenticatorAttestationResponse/getAuthenticatorData
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getAuthenticatorData()`**-Methode der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authenticator-Daten enthält, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.

Dies ist eine Komfortfunktion, die erstellt wurde, um einfachen Zugriff auf die Authenticator-Daten zu ermöglichen, ohne zusätzlichen Parsing-Code schreiben zu müssen, um sie aus dem `attestationObject` zu extrahieren.

## Syntax

```js-nolint
getAuthenticatorData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} mit einer {{jsxref("ArrayBuffer.byteLength", "byteLength")}} von mindestens 37 Bytes, das die in [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) erklärte Datenstruktur enthält.

Dies entspricht den Authenticator-Daten, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Credentials](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
