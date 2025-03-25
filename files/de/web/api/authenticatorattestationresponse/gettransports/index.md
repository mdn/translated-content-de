---
title: "AuthenticatorAttestationResponse: Methode getTransports()"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getTransports()`** Methode der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Schnittstelle gibt ein Array von Zeichenfolgen zurück, das die verschiedenen Transporte beschreibt, die vom Authenticator verwendet werden können.

Solche Transporte können USB, NFC, BLE, intern (anwendbar, wenn der Authenticator nicht vom Gerät entfernt werden kann) oder ein hybrider Ansatz sein. Webseiten sollten dieses Array nicht interpretieren, sondern es zusammen mit den restlichen Anmeldeinformationen speichern. Bei einem nachfolgenden Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) sollten die in `publicKey.allowCredentials` angegebenen `transports`-Werte auf den gespeicherten Array-Wert gesetzt werden. Dies gibt dem Browser einen Hinweis, welche Arten von Authentication zu versuchen sind, wenn eine Assertion für diese Anmeldeinformation gemacht wird.

## Syntax

```js-nolint
getTransports()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenfolgen, die die verschiedenen Transporte darstellen, die vom Authenticator unterstützt werden, in lexikographischer Reihenfolge.
Die Werte können umfassen:

- `ble`
  - : Der Authenticator kann über [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) verwendet werden.
- `"hybrid"`
  - : Der Authenticator kann über eine Kombination von (oft separaten) Datentransport- und Näherungsmechanismen verwendet werden. Dies unterstützt beispielsweise die Authentifizierung auf einem Desktop-Computer mithilfe eines Smartphones.
- `"internal"`
  - : Der Authenticator ist speziell an das Client-Gerät gebunden (kann nicht entfernt werden).
- `"nfc"`
  - : Der Authenticator kann über [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) verwendet werden.
- `"usb"`
  - : Der Authenticator kann über USB kontaktiert werden.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselanmeldungs-Datensatzes](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
