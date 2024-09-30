---
title: "RTCRtpStreamStats: trackId-Eigenschaft"
short-title: trackId
slug: Web/API/RTCRtpStreamStats/trackId
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`trackId`**-Eigenschaft des [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs ist ein String, der das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt eindeutig identifiziert. Dieses Objekt enthält die Statistiken zur Spur des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für die in diesem Objekt Statistiken bereitgestellt werden.

## Wert

Ein String, der das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt eindeutig identifiziert, das die Statistiken für die Spur bereitstellt, für die Statistiken durch diesen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gesammelt werden.

> [!NOTE]
> Dieser Wert ist _nicht_ derselbe wie der Wert von
> [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
