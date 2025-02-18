---
title: "RTCOutboundRtpStreamStats: mid-Eigenschaft"
short-title: mid
slug: Web/API/RTCOutboundRtpStreamStats/mid
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`mid`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der die zwischen den lokalen und den entfernten Peers ausgehandelte Medien-ID enthält.
Diese identifiziert eindeutig die Zuordnung von Quelle und Ziel für den Stream des Transceivers.

## Wert

Der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser Wert ist null. In diesem Fall ist diese Statistik-Eigenschaft nicht vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
