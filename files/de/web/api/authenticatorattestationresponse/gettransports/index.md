---
title: "AuthenticatorAttestationResponse: getTransports() Methode"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
l10n:
  sourceCommit: 83561d0e130a961b56166c7091ab7f515d996fd3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getTransports()`** Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt ein Array von Strings zurück, das die verschiedenen Transporte beschreibt, die vom Authentifikator verwendet werden können.

Solche Transporte können USB, NFC, BLE, intern (zutreffend, wenn der Authentifikator nicht vom Gerät entfernt werden kann) oder ein hybrider Ansatz sein. Websites sollten dieses Array nicht interpretieren, sondern es zusammen mit den restlichen Anmeldeinformationen speichern. Bei einem nachfolgenden [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf sollte der in `publicKey.allowCredentials` angegebene `transports`-Wert auf den gespeicherten Array-Wert gesetzt werden. Dies gibt dem Browser einen Hinweis darauf, welche Arten von Authentifikatoren versucht werden sollen, wenn eine Assertion für diese Anmeldeinformation gemacht wird.

## Syntax

```js-nolint
getTransports()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Strings, das die verschiedenen vom Authentifikator unterstützten Transporte in lexikographischer Reihenfolge darstellt.
Zu den Werten können gehören:

- `ble`
  - : Der Authentifikator kann über [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) verwendet werden.
- `"hybrid"`
  - : Der Authentifikator kann über eine Kombination von (oft getrennten) Datentransport- und Näherungsmechanismen verwendet werden. Dies unterstützt beispielsweise die Authentifizierung auf einem Desktop-Computer mithilfe eines Smartphones.
- `"internal"`
  - : Der Authentifikator ist speziell an das Client-Gerät gebunden (kann nicht entfernt werden).
- `"nfc"`
  - : Der Authentifikator kann über [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) verwendet werden.
- `"usb"`
  - : Der Authentifikator kann über USB kontaktiert werden.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselanmeldedatensatzes mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
