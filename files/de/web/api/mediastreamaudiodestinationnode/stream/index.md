---
title: "MediaStreamAudioDestinationNode: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamAudioDestinationNode/stream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{ APIRef("Web Audio API") }}

Die `stream`-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces repräsentiert einen [`MediaStream`](/de/docs/Web/API/MediaStream), der einen einzelnen Audio-`MediaStreamTrack` mit der gleichen Anzahl von Kanälen wie der Knoten selbst enthält.

Sie können diese Eigenschaft verwenden, um einen Stream aus dem Audiograf zu extrahieren und ihn in eine andere Struktur einzuspeisen, wie z.B. in einen [Media Recorder](/de/docs/Web/API/MediaStream_Recording_API).

## Wert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der einen einzelnen Audiotrack enthält. Der Audiotrack ist ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist.

## Beispiele

Siehe [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination#examples) für Beispielcode, der einen `MediaStreamAudioDestinationNode` erstellt und dessen `stream`-Eigenschaft als Quelle für aufzuzeichnendes Audio verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
