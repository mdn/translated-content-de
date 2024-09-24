---
title: "RTCError: Eigenschaft sctpCauseCode"
short-title: sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sctpCauseCode`**-Eigenschaft in einem
{{domxref("RTCError")}}-Objekt liefert den {{Glossary("SCTP")}}-Ursachencode, der erklärt,
warum die SCTP-Verhandlung fehlgeschlagen ist, falls der `RTCError` einen SCTP-Fehler darstellt.

## Wert

Ein ganzzahliger, unsignierter Wert, der den SCTP-Ursachencode angibt, der erklärt, warum der Fehler
aufgetreten ist. Diese Eigenschaft ist `null`, wenn es sich nicht um einen SCTP-Fehler handelt, wobei seine
{{domxref("RTCError.errorDetail", "errorDetail")}}-Eigenschaft auf
`sctp-failure` gesetzt ist.

Die standardmäßigen SCTP-Fehlerursachencodes, nummeriert von 1-13, sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
