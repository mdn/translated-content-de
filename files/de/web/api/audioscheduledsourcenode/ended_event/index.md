---
title: "AudioScheduledSourceNode: ended Ereignis"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web Audio API")}}

Das `ended` Ereignis der [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Schnittstelle wird ausgelöst, wenn der Quellknoten das Abspielen beendet hat.

Dieses Ereignis tritt ein, wenn ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) das Abspielen beendet hat, entweder weil es eine vorbestimmte Stoppzeit erreicht hat, die gesamte Dauer des Audios abgespielt wurde oder weil der gesamte Puffer abgespielt wurde.

Dieses Ereignis kann nicht abgebrochen werden und tritt nicht in die Baumstruktur nach oben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem einfachen Beispiel wird ein Ereignislistener für das `ended` Ereignis eingerichtet, um eine "Start"-Schaltfläche in der Benutzeroberfläche zu aktivieren, wenn der Knoten das Abspielen beendet:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

Sie können den Ereignishandler auch über die `onended` Eigenschaft einrichten:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

Ein Beispiel für die Nutzung des ended Ereignisses finden Sie in unserem [audio-buffer Beispiel auf GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

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
