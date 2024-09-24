---
title: "MediaElementAudioSourceNode: mediaElement-Eigenschaft"
short-title: mediaElement
slug: Web/API/MediaElementAudioSourceNode/mediaElement
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`mediaElement`**-Eigenschaft des {{domxref("MediaElementAudioSourceNode")}}-Interfaces gibt das {{domxref("HTMLMediaElement")}} an, das den Audiotrack enthält, von dem der Knoten Audio empfängt.

Dieser Stream wurde beim ersten Erstellen des Knotens angegeben, entweder durch den {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode", "MediaElementAudioSourceNode()")}}-Konstruktor oder die {{domxref("AudioContext.createMediaElementSource()")}}-Methode.

## Wert

Ein {{domxref("HTMLMediaElement")}}, das das Element darstellt, das die Audioquelle für den Knoten enthält.

## Beispiele

```js
const audioCtx = new window.AudioContext();
const audioElem = document.querySelector("audio");

let options = {
  mediaElement: audioElem,
};

let source = new MediaElementAudioSourceNode(audioCtx, options);
console.log(source.mediaElement);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
