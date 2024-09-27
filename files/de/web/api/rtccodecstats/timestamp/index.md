---
title: "RTCCodecStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCCodecStats/timestamp
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte innerhalb von wenigen Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystembeschränkungen oder wegen [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Taktpräzision oder Genauigkeit möglicherweise nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
