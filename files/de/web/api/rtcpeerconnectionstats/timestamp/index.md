---
title: "RTCPeerConnectionStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCPeerConnectionStats/timestamp
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCPeerConnectionStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt abgerufen wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden, die seit dem Beginn des 1. Januar 1970, UTC, verstrichen sind.

Der Wert sollte auf ein paar Millisekunden genau sein, könnte aber aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutzmaßnahmen in Form von verringerter Uhrenpräzision oder -genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
