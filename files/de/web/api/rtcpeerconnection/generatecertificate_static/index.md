---
title: "RTCPeerConnection: generateCertificate() statische Methode"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("WebRTC")}}

Die **`generateCertificate()`** statische Funktion der {{domxref("RTCPeerConnection")}}-Schnittstelle erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel und gibt ein Promise zurück, das beim Erzeugen des neuen {{domxref("RTCCertificate")}} gelöst wird.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameter

- `keygenAlgorithm`
  - : Ein [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) {{domxref("AlgorithmIdentifier")}}-String oder ein Objekt, das eine Unterklasse von {{domxref("Algorithm")}} ist und einen Algorithmus angibt, der beim Erstellen des Zertifikatschlüssels verwendet werden soll.

> **Note:** `generateCertificate()` ist eine statische Methode und wird daher immer auf der `RTCPeerConnection`-Schnittstelle selbst aufgerufen, nicht auf einer Instanz davon.

### Rückgabewert

Ein Promise, das mit einem neuen {{domxref("RTCCertificate")}}-Objekt gelöst wird, das einen neuen Schlüssel auf Basis der angegebenen Optionen enthält.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die normalisierte Form von `keygenAlgorithm` einen Algorithmus oder Algorithmen-Einstellungen angibt, die der Browser nicht unterstützt oder die er nicht für die Verwendung mit einer {{domxref("RTCPeerConnection")}} zulässt.

Andere Fehler können auftreten; zum Beispiel, wenn der angegebene `keygenAlgorithm` nicht erfolgreich in ein {{domxref("RTCCertificateExpiration")}}-Wörterbuch konvertiert werden kann, wird der Fehler, der bei dieser Konvertierung auftritt, ausgelöst.

## Beschreibung

Wenn ein String angegeben wird, muss es sich um einen mit der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) kompatiblen Algorithmusnamen handeln.
Alternativ können Sie spezifische Details für die Konfiguration des Algorithmus angeben, indem Sie ein Objekt übergeben, das auf einer der Unterklassen der Web Crypto API-{{domxref("Algorithm")}}-Klasse basiert.

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

### Zertifikatsablaufzeit

Standardmäßig wird das neue Zertifikat so konfiguriert, dass `expires` auf einen Wert von 2592000000 Millisekunden oder 30 Tagen gesetzt ist.
Die Ablaufzeit kann 31536000000 Millisekunden oder 365 Tage nicht überschreiten.
Es sei auch darauf hingewiesen, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie dies wünschen.

## Beispiele

### Algorithmusdetails angeben

Dieses Beispiel fordert ein neues RSASSA-PKCS1-v1_5-Zertifikat an, das einen SHA-256-Hash und eine Modulus-Länge von 2048 verwendet.

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
- [Websicherheit](/de/docs/Web/Security)
- {{Glossary("Symmetric-key cryptography")}}
- {{DOMxRef("Crypto")}}
