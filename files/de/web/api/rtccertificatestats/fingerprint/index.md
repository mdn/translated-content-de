---
title: "RTCCertificateStats: fingerprint-Eigenschaft"
short-title: fingerprint
slug: Web/API/RTCCertificateStats/fingerprint
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`fingerprint`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der den Fingerprint-Wert des zugehörigen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) enthält.

## Wert

Ein String, der den Fingerprint des zugehörigen Zertifikats enthält.

Dies ist ein hexadezimaler Kleinbuchstaben-String, der mit der in der [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)-Eigenschaft angegebenen Hash-Funktion berechnet wird. Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
