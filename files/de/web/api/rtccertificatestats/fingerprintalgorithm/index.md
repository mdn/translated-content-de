---
title: "RTCCertificateStats: fingerprintAlgorithm-Eigenschaft"
short-title: fingerprintAlgorithm
slug: Web/API/RTCCertificateStats/fingerprintAlgorithm
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebRTC")}}

Die **`fingerprintAlgorithm`** Eigenschaft des {{domxref("RTCCertificateStats")}} Wörterbuchs ist ein String, der den Namen der Hash-Funktion enthält, die verwendet wird, um den {{domxref("RTCCertificateStats.fingerprint", "Fingerabdruck")}} Wert im zugehörigen {{domxref("RTCCertificate")}} zu erzeugen.

## Wert

Ein String, der den Namen der Hash-Funktion enthält, die verwendet wurde, um den Fingerabdruck des zugehörigen Zertifikats zu erstellen.

Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`. <!-- aus [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
