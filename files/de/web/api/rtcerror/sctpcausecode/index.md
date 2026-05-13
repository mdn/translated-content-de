---
title: "RTCError: sctpCauseCode-Eigenschaft"
short-title: sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sctpCauseCode`**-Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces liefert den {{Glossary("SCTP", "SCTP")}}-Fehlercode, der erklärt, warum die SCTP-Aushandlung fehlgeschlagen ist, falls der `RTCError` einen SCTP-Fehler darstellt.

## Wert

Eine positive Ganzzahl, die den SCTP-Fehlercode angibt, der erklärt, warum der Fehler aufgetreten ist. Diese Eigenschaft darf nur gesetzt werden, wenn [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) `sctp-failure` ist, und ist andernfalls `null`.

Die standardmäßigen SCTP-Fehlercodes, nummeriert von 1-13, sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
