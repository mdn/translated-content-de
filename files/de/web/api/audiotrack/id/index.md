---
title: "AudioTrack: id-Eigenschaft"
short-title: id
slug: Web/API/AudioTrack/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält einen String, der den durch den **{{domxref("AudioTrack")}}** dargestellten Track eindeutig identifiziert.

Diese ID kann mit der Methode {{domxref("AudioTrackList.getTrackById()")}} verwendet werden, um einen bestimmten Track innerhalb der Medien zu lokalisieren, die mit einem Medienelement verbunden sind. Die Track-ID kann auch als Fragment einer URL verwendet werden, die den spezifischen Track lädt (falls die Medien Medienschnipsel unterstützen).

## Wert

Ein String, der den Track identifiziert und geeignet ist, um beim Aufrufen von {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} auf einem {{domxref("AudioTrackList")}} wie demjenigen, das durch die {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}}-Eigenschaft eines Medienelements angegeben ist, verwendet zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
