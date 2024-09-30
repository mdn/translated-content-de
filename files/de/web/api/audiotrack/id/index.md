---
title: "AudioTrack: id-Eigenschaft"
short-title: id
slug: Web/API/AudioTrack/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält einen String, der die Schnittstelle darstellt,
**[`AudioTrack`](/de/docs/Web/API/AudioTrack)** eindeutig identifiziert.

Diese ID kann mit der Methode [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) verwendet werden, um einen bestimmten Track innerhalb
der mit einem Media-Element verbundenen Medien zu lokalisieren. Die Track-ID kann auch als Fragment einer URL verwendet werden, die den spezifischen Track lädt
(wenn das Medium Medienfragmente unterstützt).

## Wert

Ein String, der den Track identifiziert und sich für die Verwendung beim Aufruf von
[`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) eignet, auf einer
[`AudioTrackList`](/de/docs/Web/API/AudioTrackList), wie sie durch die Eigenschaft
[`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) eines Media-Elements spezifiziert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
