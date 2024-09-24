---
title: "RTCCertificateStats: Fingerprint-Eigenschaft"
short-title: Fingerprint
slug: Web/API/RTCCertificateStats/fingerprint
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`fingerprint`**-Eigenschaft des {{domxref("RTCCertificateStats")}}-Wörterbuchs ist eine Zeichenkette, die den Fingerprint-Wert des zugehörigen {{domxref("RTCCertificate")}} enthält.

## Wert

Eine Zeichenkette, die den Fingerprint des zugehörigen Zertifikats enthält.

Dies ist eine hexadezimale Kleinbuchstaben-Zeichenkette, die mit der im {{domxref("RTCCertificateStats.fingerprintAlgorithm","fingerprintAlgorithm")}}-Eigenschaft angegebenen Hash-Funktion berechnet wird. Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
