---
title: "RTCInboundRtpStreamStats: mid-Eigenschaft"
short-title: mid
slug: Web/API/RTCInboundRtpStreamStats/mid
l10n:
  sourceCommit: 628d5bca4cf61fa37448a0b5c61b0f675f228e90
---

{{APIRef("WebRTC")}}

Die **`mid`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String, der die zwischen den lokalen und entfernten Peers ausgehandelten Medien-ID enthält.
Diese identifiziert eindeutig die Paarung von Quelle und Ziel für den Stream des Transceivers.

## Wert

Der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser Wert ist null, in welchem Fall diese Statistik-Eigenschaft nicht vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
