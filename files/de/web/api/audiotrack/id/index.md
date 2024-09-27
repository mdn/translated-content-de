---
title: "AudioTrack: id-Eigenschaft"
short-title: id
slug: Web/API/AudioTrack/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält eine Zeichenfolge, die die Spur, die durch den **[`AudioTrack`](/de/docs/Web/API/AudioTrack)** repräsentiert wird, eindeutig identifiziert.

Diese ID kann mit der Methode [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) verwendet werden, um eine bestimmte Spur innerhalb der mit einem Medienelement verbundenen Medien zu finden. Die Spur-ID kann auch als Fragment einer URL verwendet werden, das die spezifische Spur lädt (falls die Medien Medienfragmente unterstützen).

## Wert

Eine Zeichenfolge, die die Spur identifiziert, geeignet zur Verwendung beim Aufrufen von [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) auf einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) wie derjenigen, die durch die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft eines Medienelements angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
