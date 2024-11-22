---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{APIRef("WebRTC")}}

Die statische Funktion **`generateCertificate()`** des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel. Sie gibt ein Promise zurück, das auf das neue [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) auflöst, sobald es generiert wurde.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) [`AlgorithmIdentifier`](/de/docs/Web/API/AlgorithmIdentifier)-String oder ein [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm)-unterklassiertes Objekt, das einen Algorithmus angibt, der bei der Erstellung des Schlüssels für das Zertifikat verwendet werden soll.

> **Note:** `generateCertificate()` ist eine statische Methode und wird daher immer auf das `RTCPeerConnection`-Interface selbst aufgerufen, nicht auf eine Instanz davon.

### Rückgabewert

Ein Promise, das auf ein neues [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Objekt auflöst, das einen neuen Schlüssel basierend auf den angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmenparameter spezifiziert, die der Browser nicht unterstützt oder deren Verwendung mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) nicht erlaubt ist.

Andere Fehler können auftreten; zum Beispiel, wenn das angegebene `keygenAlgorithm` nicht erfolgreich in ein [`RTCCertificateExpiration`](/de/docs/Web/API/RTCCertificateExpiration)-Wörterbuch umgewandelt werden kann, wird der während dieser Umwandlung auftretende Fehler ausgelöst.

## Beschreibung

Wenn ein String angegeben wird, muss es sich um einen mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatiblen Algorithmusnamen-String handeln. Alternativ können Sie bestimmte Details zur Konfiguration des Algorithmus angeben, indem Sie ein Objekt basierend auf einer der Unterklassen der [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm)-Klasse der Web Crypto API bereitstellen.

### Standardkonfigurationen

Alle Browser müssen die folgenden zwei Konfigurationen unterstützen. Es ist völlig möglich, dass die _Standard_-Einstellungen eines Browsers unterschiedlich sind, aber diese werden immer unterstützt.

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

Standardmäßig wird das neue Zertifikat mit einem `expires`-Wert von 2592000000 Millisekunden oder 30 Tagen konfiguriert. Die Ablaufzeit darf 31536000000 Millisekunden oder 365 Tage nicht überschreiten. Es ist auch nützlich zu wissen, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie dies wünschen.

## Beispiele

### Details des Algorithmus angeben

Dieses Beispiel fordert ein neues RSASSA-PKCS1-v1_5-Zertifikat mit einem SHA-256-Hash und einer Moduluslänge von 2048 an.

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

### Einen Algorithmus nach Namen angeben

Das folgende Beispiel gibt einen String an, der ein [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)-Zertifikat anfordert.

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
- {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptographie")}}
- [`Crypto`](/de/docs/Web/API/Crypto)
