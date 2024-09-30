---
title: "RTCCodecStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCCodecStats/timestamp
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten im Objekt abgetastet wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit Beginn des 1. Januar 1970, UTC.

Der Wert sollte auf einige Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutzmaßnahmen in Form von verringerter Uhrenpräzision oder Genauigkeit nicht völlig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
