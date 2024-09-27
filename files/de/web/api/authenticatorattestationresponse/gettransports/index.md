---
title: "AuthenticatorAttestationResponse: getTransports()-Methode"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getTransports()`**-Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt ein Array von Strings zurück, das die verschiedenen Transports beschreibt, die vom Authentifikator genutzt werden können.

Solche Transports können USB, NFC, BLE, intern (zutreffend, wenn der Authentifikator nicht vom Gerät entfernt werden kann) oder ein hybrider Ansatz sein. Websites sollten dieses Array nicht interpretieren, sondern es zusammen mit den restlichen Anmeldeinformationen speichern. In einem nachfolgenden Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) sollten die in `publicKey.allowCredentials` angegebenen `transports`-Werte auf den gespeicherten Array-Wert gesetzt werden. Dies gibt dem Browser einen Hinweis darauf, welche Arten von Authentifikatoren bei der Erstellung eines Assertions für diese Anmeldeinformationen versucht werden sollen.

## Syntax

```js-nolint
getTransports()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Strings, das die verschiedenen, vom Authentifikator unterstützten Transports in lexikografischer Reihenfolge darstellt. Werte können enthalten:

- `"ble"`: Der Authentifikator kann über [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) verwendet werden.
- `"hybrid"`: Der Authentifikator kann über eine Kombination von (oft separaten) Daten- und Proximitätstransportmechanismen verwendet werden. Dies unterstützt beispielsweise die Authentifizierung auf einem Desktop-Computer mithilfe eines Smartphones.
- `"internal"`: Der Authentifikator ist speziell an das Client-Gerät gebunden (kann nicht entfernt werden).
- `"nfc"`: Der Authentifikator kann über [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) verwendet werden.
- `"usb"`: Der Authentifikator kann über USB kontaktiert werden.

## Beispiele

Siehe [Erstellen eines Public-Key-Credentials mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
