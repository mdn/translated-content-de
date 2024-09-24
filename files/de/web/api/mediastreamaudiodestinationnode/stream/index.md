---
title: "MediaStreamAudioDestinationNode: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaStreamAudioDestinationNode/stream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{ APIRef("Web Audio API") }}

Die `stream`-Eigenschaft der {{ domxref("AudioContext") }}-Schnittstelle repräsentiert einen {{domxref("MediaStream")}}, der einen einzelnen Audio-{{domxref("MediaStreamTrack")}} enthält und die gleiche Anzahl von Kanälen wie der Knoten selbst hat.

Sie können diese Eigenschaft verwenden, um einen Stream aus dem Audio-Graph zu erhalten und ihn in eine andere Struktur einzuspeisen, wie zum Beispiel einen [Media Recorder](/de/docs/Web/API/MediaStream_Recording_API).

## Wert

Ein {{domxref("MediaStream")}}, der eine einzelne Audiospur enthält. Die Audiospur ist ein {{domxref("MediaStreamTrack")}}, dessen {{domxref("MediaStreamTrack.kind", "kind")}} `audio` ist.

## Beispiele

Siehe [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination#examples) für Beispielcode, der einen `MediaStreamAudioDestinationNode` erstellt und dessen `stream`-Eigenschaft als Quelle für aufzuzeichnenden Ton verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
