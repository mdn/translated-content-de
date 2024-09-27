---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("WebRTC")}}

Die **`generateCertificate()`** statische Funktion der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt ein X.509-Zertifikat und den zugehörigen privaten Schlüssel und gibt ein Promise zurück, das auf das neue [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert wurde.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) [`AlgorithmIdentifier`](/de/docs/Web/API/AlgorithmIdentifier)-String oder ein [`Algorithm`](/de/docs/Web/API/Algorithm)-subklassiertes Objekt, das einen Algorithmus angibt, der bei der Erstellung des Zertifikatschlüssels verwendet werden soll.

> **Note:** `generateCertificate()` ist eine statische Methode, daher wird sie immer auf der `RTCPeerConnection`-Schnittstelle selbst aufgerufen, nicht auf einer ihrer Instanzen.

### Rückgabewert

Ein Promise, das zu einem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Objekt aufgelöst wird und einen neuen Schlüssel basierend auf den angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmuseinstellungen angibt, die der Browser nicht unterstützt oder nicht für die Verwendung mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zulässt.

Es können andere Fehler auftreten; zum Beispiel, wenn der angegebene `keygenAlgorithm` nicht erfolgreich in ein [`RTCCertificateExpiration`](/de/docs/Web/API/RTCCertificateExpiration)-Wörterbuch konvertiert werden kann, wird der Fehler, der während dieser Konvertierung auftritt, ausgelöst.

## Beschreibung

Wenn ein String angegeben wird, muss es sich um einen mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatiblen Algorithmusnamen handeln. Alternativ können Sie spezifische Details zur Konfiguration des Algorithmus angeben, indem Sie ein Objekt basierend auf einer der Unterklassen der [`Algorithm`](/de/docs/Web/API/Algorithm)-Klasse der Web Crypto API bereitstellen.

### Standardkonfigurationen

Alle Browser müssen die folgenden zwei Konfigurationen unterstützen. Es ist durchaus möglich, dass die _Standard_-Einstellungen eines Browsers unterschiedlich sein können, aber diese werden immer unterstützt.

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

### Ablaufzeit des Zertifikats

Standardmäßig wird das neue Zertifikat mit `expires` auf einen Wert von 2592000000 Millisekunden oder 30 Tage konfiguriert. Die Ablaufzeit darf 31536000000 Millisekunden oder 365 Tage nicht überschreiten. Es ist auch nützlich zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie dies wünschen.

## Beispiele

### Angabe von Algorithmen-Details

Dieses Beispiel fordert ein neues RSASSA-PKCS1-v1_5 Zertifikat mit einem SHA-256 Hash und einer Modul-Länge von 2048 an.

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

### Angabe eines Algorithmus nach Namen

Das untenstehende Beispiel spezifiziert einen String, der ein [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)-Zertifikat anfordert.

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
- [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Web-Sicherheit](/de/docs/Web/Security)
- [Symmetrische Verschlüsselung](/de/docs/Glossary/Symmetric-key_cryptography)
- [`Crypto`](/de/docs/Web/API/Crypto)
