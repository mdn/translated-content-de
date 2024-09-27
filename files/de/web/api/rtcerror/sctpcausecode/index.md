---
title: "RTCError: sctpCauseCode-Eigenschaft"
short-title: sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sctpCauseCode`**-Eigenschaft in einem
[`RTCError`](/de/docs/Web/API/RTCError)-Objekt liefert den [SCTP](/de/docs/Glossary/SCTP)-Fehlercode, der erklärt,
warum die SCTP-Verhandlung fehlgeschlagen ist, falls der `RTCError` einen SCTP-Fehler darstellt.

## Wert

Ein `unsigned long integer`-Wert, der den SCTP-Fehlercode angibt, der erklärt, warum der Fehler aufgetreten ist. Diese Eigenschaft ist `null`, wenn der Fehler kein SCTP-Fehler ist und seine
[`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft auf
`sctp-failure` gesetzt ist.

Die standardmäßigen SCTP-Fehlercodes, nummeriert von 1 bis 13, sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
