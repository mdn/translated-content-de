---
title: "MediaElementAudioSourceNode: mediaElement-Eigenschaft"
short-title: mediaElement
slug: Web/API/MediaElementAudioSourceNode/mediaElement
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`mediaElement`**-Eigenschaft des [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)-Interfaces gibt das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) an, das den Audiotrack enthält, von dem der Knoten Audio empfängt.

Dieser Stream wurde beim Erstellen des Knotens angegeben, entweder über den [`MediaElementAudioSourceNode()`](/de/docs/Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode)-Konstruktor oder die [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)-Methode.

## Wert

Ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), das das Element darstellt, welches die Audioquelle für den Knoten enthält.

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
