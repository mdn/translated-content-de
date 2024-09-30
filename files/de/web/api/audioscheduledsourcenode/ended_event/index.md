---
title: "AudioScheduledSourceNode: ended-Ereignis"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web Audio API")}}

Das `ended`-Ereignis der [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Schnittstelle wird ausgelöst, wenn der Quellknoten aufgehört hat zu spielen.

Dieses Ereignis tritt auf, wenn ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) aufgehört hat zu spielen, entweder weil eine vorher festgelegte Stoppzeit erreicht wurde, die volle Dauer des Audios abgespielt wurde oder weil der gesamte Puffer abgespielt wurde.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem einfachen Beispiel wird ein Ereignislistener für das `ended`-Ereignis eingerichtet, um eine "Start"-Schaltfläche in der Benutzeroberfläche zu aktivieren, wenn der Knoten aufhört zu spielen:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

Sie können den Ereignishandler auch mit der `onended`-Eigenschaft einrichten:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

Ein Beispiel für das verwendete ended-Ereignis finden Sie in unserem [Beispiel mit Audio-Puffer auf GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- [audioprocess](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- [complete](/de/docs/Web/API/OfflineAudioContext/complete_event)

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis für HTMLMediaElement
- Das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis für MediaStreamTrack
