---
title: "RTCCertificate: Eigenschaft expires"
short-title: expires
slug: Web/API/RTCCertificate/expires
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`expires`**-Eigenschaft der [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Schnittstelle liefert das Ablaufdatum des Zertifikats.

Standardmäßig wird ein neues Zertifikat mit `expires` auf einen Wert von 2592000000 Millisekunden, oder 30 Tagen, konfiguriert. Die Ablaufzeit kann 31536000000 Millisekunden, oder 365 Tage, nicht überschreiten. Es ist auch nützlich zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, falls sie dies möchten.

## Wert

Ein Timestamp, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Zertifikats enthält.

## Beispiele

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then((cert) => {
  const pc = new RTCPeerConnection({ certificates: [cert] });
  console.log(cert.expires); // 2592000000 (30 days, the default)
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
