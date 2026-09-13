---
title: "RTCError: sctpCauseCode-Eigenschaft"
short-title: sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`sctpCauseCode`** schreibgeschützte Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces stellt den {{Glossary("SCTP", "SCTP")}}-Ursachencode bereit, der erklärt, warum die SCTP-Verhandlung fehlgeschlagen ist, falls der `RTCError` einen SCTP-Fehler darstellt.

## Wert

Eine positive ganze Zahl, die den SCTP-Ursachencode angibt, der erklärt, warum der Fehler aufgetreten ist.
Diese Eigenschaft darf nur gesetzt werden, wenn [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) `sctp-failure` ist, und ist andernfalls `null`.

Die Standard-SCTP-Fehlerursachencodes, nummeriert 1-13, sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
