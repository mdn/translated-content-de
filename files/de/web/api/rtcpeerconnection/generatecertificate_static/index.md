---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("WebRTC")}}

Die **`generateCertificate()`** statische Funktion des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel. Sie gibt ein Promise zurück, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert wurde.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein Algorithmus-Bezeichner-String oder Objekt der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API). Siehe [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) für Details zum Format des Objekts.

> **Note:** `generateCertificate()` ist eine statische Methode, daher wird sie immer auf dem `RTCPeerConnection` Interface selbst aufgerufen, nicht auf einer Instanz davon.

### Rückgabewert

Ein Promise, das auf ein neues [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Objekt aufgelöst wird, welches einen neuen Schlüssel basierend auf den angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmen-Einstellungen spezifiziert, die der Browser nicht unterstützt oder nicht zur Verwendung mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erlaubt.

Andere Fehler können auftreten; zum Beispiel, wenn der angegebene `keygenAlgorithm` nicht erfolgreich in ein [`RTCCertificateExpiration`](/de/docs/Web/API/RTCCertificateExpiration) Wörterbuch konvertiert werden kann, wird der Fehler, der während dieser Konvertierung auftritt, ausgelöst.

## Beschreibung

Falls ein String angegeben wird, muss es ein zum [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatibler Algorithmus-Name-String sein. Alternativ können Sie spezifische Details für die Konfiguration des Algorithmus bereitstellen, indem Sie ein Objekt spezifizieren, welches auf einer der Unterklassen der [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm) Klasse der Web Crypto API basiert.

### Standardkonfigurationen

Alle Browser müssen die folgenden zwei Konfigurationen unterstützen. Es ist durchaus möglich, dass die _Standard_-Einstellungen eines Browsers unterschiedlich sind, aber diese werden immer unterstützt.

#### RSASSA-PKCS1-v1_5

```js
let stdRSACertificate = {
  name: "RSASSA-PKCS1-v1_5",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
  hash: "SHA-256",
};
```

#### ECDSA

```js
let stdECDSACertificate = {
  name: "ECDSA",
  namedCurve: "P-256",
};
```

### Zertifikatsablaufzeit

Standardmäßig wird das neue Zertifikat mit `expires` auf einen Wert von 2592000000 Millisekunden oder 30 Tagen konfiguriert. Die Ablaufzeit darf 31536000000 Millisekunden oder 365 Tage nicht überschreiten. Es ist auch nützlich zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken dürfen, wenn sie dies möchten.

## Beispiele

### Spezifizierung von Algorithmen-Details

Dieses Beispiel fordert ein neues RSASSA-PKCS1-v1_5 Zertifikat mit einem SHA-256 Hash und einer Moduluslänge von 2048 an.

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then((cert) => {
  const pc = new RTCPeerConnection({ certificates: [cert] });
});
```

### Spezifizierung eines Algorithmus durch Namen

Das Beispiel unten spezifiziert einen String, der ein [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) Zertifikat anfordert.

```js
RTCPeerConnection.generateCertificate("ECDSA");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Web-Sicherheit](/de/docs/Web/Security)
- {{Glossary("Symmetric-key_cryptography", "Symmetrische Verschlüsselung")}}
- [`Crypto`](/de/docs/Web/API/Crypto)
