---
title: "AuthenticatorAttestationResponse: getTransports() Methode"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
l10n:
  sourceCommit: c229b8f8375f5238a85303170a1f2211a0ebccf6
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getTransports()`** Methode der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Schnittstelle gibt ein Array von Zeichenfolgen zurück, das die verschiedenen Transports beschreibt, die vom Authenticator verwendet werden können.

Solche Transports können USB, NFC, BLE, intern (zutreffend, wenn der Authenticator nicht vom Gerät entfernt werden kann) oder ein hybrider Ansatz sein. Websites sollten dieses Array nicht interpretieren, sondern es zusammen mit den restlichen Anmeldedaten speichern. Bei einem nachfolgenden Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) sollte der `transports` Wert innerhalb von `publicKey.allowCredentials` auf den gespeicherten Array-Wert gesetzt werden. Dies gibt dem Browser einen Hinweis darauf, welche Arten von Authenticatoren er ausprobieren soll, wenn eine Bestätigung für diesen Anmeldedatensatz vorgenommen wird.

## Syntax

```js-nolint
getTransports()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenfolgen, das die verschiedenen vom Authenticator unterstützten Transports in lexikographischer Reihenfolge darstellt.
Die Werte können umfassen:

- `"ble"`
  - : Der Authenticator kann über [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) verwendet werden.
- `"hybrid"`
  - : Der Authenticator kann über eine Kombination von (oft getrennten) Datentransport- und Näherungsmechanismen verwendet werden. Dies unterstützt beispielsweise die Authentifizierung auf einem Desktop-Computer mit einem Smartphone.
- `"internal"`
  - : Der Authenticator ist spezifisch an das Client-Gerät gebunden (kann nicht entfernt werden).
- `"nfc"`
  - : Der Authenticator kann über [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) verwendet werden.
- `"usb"`
  - : Der Authenticator kann über USB kontaktiert werden.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselanmeldedatensatzes](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
