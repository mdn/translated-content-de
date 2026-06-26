---
title: "RTCCertificateStats: fingerprintAlgorithm-Eigenschaft"
short-title: fingerprintAlgorithm
slug: Web/API/RTCCertificateStats/fingerprintAlgorithm
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebRTC")}}

Die **`fingerprintAlgorithm`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der den Namen der Hash-Funktion enthält, die verwendet wird, um den [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)-Wert im zugehörigen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) zu erzeugen.

## Wert

Ein String, der den Namen der Hash-Funktion enthält, die verwendet wird, um den Fingerabdruck des zugehörigen Zertifikates zu erstellen.

Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`. <!-- from [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5) -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
