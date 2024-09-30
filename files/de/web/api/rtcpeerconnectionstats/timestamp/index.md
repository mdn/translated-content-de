---
title: "RTCPeerConnectionStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCPeerConnectionStats/timestamp
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Dictionaries ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte mit einer Genauigkeit von wenigen Millisekunden angegeben werden, kann jedoch möglicherweise nicht ganz präzise sein, entweder aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Taktgenauigkeit oder -präzision.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
