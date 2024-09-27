---
title: "RTCCertificateStats: fingerprintAlgorithm-Eigenschaft"
short-title: fingerprintAlgorithm
slug: Web/API/RTCCertificateStats/fingerprintAlgorithm
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebRTC")}}

Die **`fingerprintAlgorithm`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der den Namen der Hash-Funktion enthält, die zur Erzeugung des [`fingerprint`](/de/docs/Web/API/RTCCertificateStats/fingerprint)-Werts im zugehörigen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) verwendet wird.

## Wert

Ein String, der den Namen der Hash-Funktion enthält, die zum Erstellen des Fingerprints des zugehörigen Zertifikats verwendet wird.

Zulässige Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`. <!-- from [RFC4572, Section 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
