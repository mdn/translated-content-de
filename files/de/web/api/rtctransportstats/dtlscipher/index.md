---
title: "RTCTransportStats: Eigenschaft dtlsCipher"
short-title: dtlsCipher
slug: Web/API/RTCTransportStats/dtlsCipher
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die **`dtlsCipher`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Dictionary ist ein String, der den beschreibenden Namen der für den DTLS-Transport verwendeten Cipher Suite angibt.

Zulässige Namen sind in der Spalte „Description“ des Abschnitts [TLS Cipher Suites](https://www.iana.org/assignments/tls-parameters#table-tls-parameters-4) in der _IANA cipher suite registry_ definiert.
Zum Beispiel `"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"`.

## Wert

Ein String, der den Namen der DTLS-Cipher angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
