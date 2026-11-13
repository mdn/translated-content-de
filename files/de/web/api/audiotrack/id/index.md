---
title: "AudioTrack: id-Eigenschaft"
short-title: id
slug: Web/API/AudioTrack/id
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`id`** des Interfaces [`AudioTrack`](/de/docs/Web/API/AudioTrack) enthält einen String, der den durch **[`AudioTrack`](/de/docs/Web/API/AudioTrack)** repräsentierten Track eindeutig identifiziert.

Diese ID kann mit der Methode [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) verwendet werden, um einen bestimmten Track innerhalb der mit einem Media-Element verknüpften Medien zu finden. Die Track-ID kann auch als Fragment einer URL verwendet werden, die den betreffenden Track lädt (sofern das Medium Medienfragmente unterstützt).

## Wert

Ein String, der den Track identifiziert und sich für einen Aufruf von [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) auf einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) eignet, beispielsweise auf der Liste, die durch die Eigenschaft [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) eines Media-Elements angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
