---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("WebRTC")}}

Die **`generateCertificate()`** statische Funktion der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt ein X.509-Zertifikat und den dazugehörigen privaten Schlüssel und gibt ein Promise zurück, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es erstellt wurde.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) Algorithmus-Identifikator-String oder Objekt. Siehe [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) für Details zum Format des Objekts.

> [!NOTE] > `generateCertificate()` ist eine statische Methode und wird daher immer auf der Schnittstelle `RTCPeerConnection` selbst aufgerufen, nicht auf einer Instanz davon.

### Rückgabewert

Ein Promise, das zu einem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) Objekt aufgelöst wird, das einen neuen Schlüssel basierend auf den angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmus-Einstellungen angibt, die vom Browser nicht unterstützt werden oder die nicht mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden dürfen.

Andere Fehler können auftreten; zum Beispiel, wenn der angegebene `keygenAlgorithm` nicht erfolgreich in ein [`RTCCertificateExpiration`](/de/docs/Web/API/RTCCertificateExpiration) Wörterbuch umgewandelt werden kann, wird der Fehler, der während dieser Umwandlung auftritt, ausgelöst.

## Beschreibung

Wenn ein String angegeben wird, muss es ein mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatibler Algorithmusname-String sein.
Alternativ können Sie spezifische Details für die Konfiguration des Algorithmus angeben, indem Sie ein Objekt bereitstellen, das auf einer der Unterklassen der [`Algorithm`](/de/docs/Web/API/CryptoKey/algorithm) Klasse der Web Crypto API basiert.

### Standardkonfigurationen

Alle Browser sind verpflichtet, die folgenden zwei Konfigurationen zu unterstützen.
Es ist durchaus möglich, dass die _Standard_-Einstellungen eines Browsers unterschiedlich sind, aber diese werden immer unterstützt.

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

### Zertifikat-Ablaufzeit

Standardmäßig wird das neue Zertifikat mit `expires` auf einen Wert von 2592000000 Millisekunden oder 30 Tagen konfiguriert.
Die Ablaufzeit darf 31536000000 Millisekunden oder 365 Tage nicht überschreiten.
Es ist auch wichtig zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie dies wünschen.

## Beispiele

### Festlegen von Algorithmen-Details

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

### Algorithmus durch Namen angeben

Das folgende Beispiel gibt einen String an, der ein [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) Zertifikat anfordert.

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
- {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel-Kryptographie")}}
- [`Crypto`](/de/docs/Web/API/Crypto)
