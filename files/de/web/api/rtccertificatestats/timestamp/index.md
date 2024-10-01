---
title: "RTCCertificateStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCCertificateStats/timestamp
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebenen Aktivitäten aufgezeichnet wurden, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von {{Glossary("Fingerprinting", "Fingerprinting")}}-Schutz in Form einer reduzierten Taktpräzision oder Genauigkeit nicht völlig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
