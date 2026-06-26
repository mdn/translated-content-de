---
title: "RTCCertificateStats: fingerprint-Eigenschaft"
short-title: fingerprint
slug: Web/API/RTCCertificateStats/fingerprint
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebRTC")}}

Die **`fingerprint`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Dictionaries ist ein String, der den Fingerabdruckwert des zugehörigen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) enthält.

## Wert

Ein String, der den Fingerabdruck des zugehörigen Zertifikats enthält.

Dies ist ein Kleinbuchstaben-Hex-String, der unter Verwendung der in der [`fingerprintAlgorithm`](/de/docs/Web/API/RTCCertificateStats/fingerprintAlgorithm)-Eigenschaft angegebenen Hash-Funktion berechnet wird. Das Format ist präzise definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
