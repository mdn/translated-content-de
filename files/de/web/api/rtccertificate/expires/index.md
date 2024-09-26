---
title: "RTCCertificate: expires-Eigenschaft"
short-title: expires
slug: Web/API/RTCCertificate/expires
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`expires`**-Eigenschaft der {{domxref("RTCCertificate")}}-Schnittstelle gibt das Ablaufdatum des Zertifikats zurück.

Standardmäßig wird ein neues Zertifikat mit `expires` konfiguriert, das auf einen Wert von 2592000000 Millisekunden, also 30 Tagen, eingestellt ist. Die Ablaufzeit kann maximal 31536000000 Millisekunden, oder 365 Tage, betragen. Es ist auch nützlich zu beachten, dass Browser die Ablaufzeit von Zertifikaten weiter einschränken können, wenn sie dies wünschen.

## Wert

Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Zertifikats enthält.

## Beispiele

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then((cert) => {
  const pc = new RTCPeerConnection({ certificates: [cert] });
  console.log(cert.expires); // 2592000000 (30 Tage, der Standard)
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}