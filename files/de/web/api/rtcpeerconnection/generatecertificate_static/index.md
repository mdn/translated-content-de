---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("WebRTC")}}

Die **`generateCertificate()`** statische Funktion der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel und gibt ein Versprechen zurück, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert wurde.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) [`AlgorithmIdentifier`](/de/docs/Web/API/AlgorithmIdentifier)-String oder ein [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm)-unterklassenbasiertes Objekt, das einen Algorithmus angibt, der bei der Erstellung des Zertifikatschlüssels verwendet werden soll.

> **Hinweis:** `generateCertificate()` ist eine statische Methode, daher wird sie immer auf der `RTCPeerConnection`-Schnittstelle selbst aufgerufen, nicht auf einer Instanz davon.

### Rückgabewert

Ein Versprechen, das zu einem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Objekt aufgelöst wird und einen neuen Schlüssel basierend auf den angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmen-Einstellungen angibt, die der Browser nicht unterstützt oder nicht mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erlaubt.

Es können weitere Fehler auftreten; beispielsweise, wenn der angegebene `keygenAlgorithm` nicht erfolgreich in ein [`RTCCertificateExpiration`](/de/docs/Web/API/RTCCertificateExpiration)-Wörterbuch konvertiert werden kann, wird der Fehler, der während dieser Umwandlung auftritt, ausgelöst.

## Beschreibung

Wenn ein String angegeben wird, muss es ein mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatibler Algorithmusname sein. Alternativ können Sie spezifische Details für die Konfiguration des Algorithmus angeben, indem Sie ein auf einer der Unterklassen der [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm)-Klasse basierendes Objekt bereitstellen.

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

Standardmäßig wird das neue Zertifikat mit `expires` auf einen Wert von 2592000000 Millisekunden oder 30 Tagen konfiguriert. Die Ablaufzeit darf 31536000000 Millisekunden oder 365 Tage nicht überschreiten. Es ist auch nützlich zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie möchten.

## Beispiele

### Angabe von Algorithmen-Details

Dieses Beispiel fordert ein neues RSASSA-PKCS1-v1_5-Zertifikat unter Verwendung eines SHA-256-Hash und einer Moduluslänge von 2048 an.

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

### Angabe eines Algorithmus durch Namen

Das untenstehende Beispiel gibt einen String an, der ein [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)-Zertifikat anfordert.

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
- {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptografie")}}
- [`Crypto`](/de/docs/Web/API/Crypto)
