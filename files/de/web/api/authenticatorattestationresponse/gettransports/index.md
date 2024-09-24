---
title: "AuthenticatorAttestationResponse: getTransports()-Methode"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getTransports()`**-Methode der {{domxref("AuthenticatorAttestationResponse")}}-Schnittstelle gibt ein Array von Zeichenketten zurück, das die verschiedenen Transporte beschreibt, die vom Authentifikator genutzt werden können.

Solche Transporte können USB, NFC, BLE, intern (anwendbar, wenn der Authentifikator nicht vom Gerät entfernt werden kann) oder ein hybrider Ansatz sein. Websites sollten dieses Array nicht interpretieren, sondern es zusammen mit den restlichen Anmeldeinformationen speichern. In einem nachfolgenden {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}-Aufruf sollte der `transports`-Wert, der in `publicKey.allowCredentials` angegeben ist, auf den gespeicherten Array-Wert gesetzt werden. Dies gibt dem Browser einen Hinweis darauf, welche Arten von Authentifikatoren bei der Erstellung einer Assertion für diese Anmeldeinformationen versucht werden sollen.

## Syntax

```js-nolint
getTransports()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenketten, die die verschiedenen vom Authentifikator unterstützten Transporte in lexikographischer Reihenfolge darstellen. Werte können umfassen:

- `"ble"`: Der Authentifikator kann über [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) verwendet werden.
- `"hybrid"`: Der Authentifikator kann über eine Kombination aus (oft separaten) Datentransport- und Näherungsmechanismen verwendet werden. Dies unterstützt beispielsweise die Authentifizierung auf einem Desktop-Computer mit einem Smartphone.
- `"internal"`: Der Authentifikator ist speziell an das Client-Gerät gebunden (kann nicht entfernt werden).
- `"nfc"`: Der Authentifikator kann über [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) verwendet werden.
- `"usb"`: Der Authentifikator kann über USB kontaktiert werden.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Anmeldedatensatzes mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
