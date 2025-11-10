---
title: "AudioScheduledSourceNode: ended Ereignis"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Das `ended` Ereignis der [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Schnittstelle wird ausgelöst, wenn der Quellknoten das Abspielen beendet hat.

Dieses Ereignis tritt auf, wenn ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) das Abspielen beendet hat, entweder weil eine vorherbestimmte Stoppzeit erreicht wurde, die vollständige Dauer des Audios durchgeführt wurde oder weil der gesamte Puffer abgespielt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem einfachen Beispiel wird ein Ereignis-Listener für das `ended` Ereignis eingerichtet, um eine "Start"-Schaltfläche in der Benutzeroberfläche zu aktivieren, wenn der Knoten das Abspielen stoppt:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

Sie können den Ereignishandler auch mit der `onended` Eigenschaft einrichten:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

Für ein Beispiel zur Verwendung des ended Ereignisses, sehen Sie sich unser [Audio-Puffer-Beispiel auf GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/) an.

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
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis
- Das MediaStreamTrack [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event) Ereignis
