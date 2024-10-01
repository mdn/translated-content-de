---
title: "RTCDataChannelStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCDataChannelStats/timestamp
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde. Die Angabe erfolgt in Millisekunden, die seit Beginn des 1. Januar 1970, UTC, vergangen sind.

Der Wert sollte bis auf einige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund des {{Glossary("Fingerprinting", "Fingerprinting")}}-Schutzes in Form von verringerter Präzision oder Genauigkeit der Uhr nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
