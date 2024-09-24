---
title: "AudioScheduledSourceNode: ended-Ereignis"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web Audio API")}}

Das `ended`-Ereignis der {{domxref("AudioScheduledSourceNode")}}-Schnittstelle wird ausgelöst, wenn der Quellknoten die Wiedergabe beendet hat.

Dieses Ereignis tritt auf, wenn eine {{domxref("AudioScheduledSourceNode")}} die Wiedergabe beendet hat, entweder weil die vorher festgelegte Stoppzeit erreicht wurde, die Gesamtdauer der Audiodaten abgespielt wurde oder weil der gesamte Puffer abgespielt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Benutzen Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

In diesem einfachen Beispiel wird ein Ereignislistener für das `ended`-Ereignis eingerichtet, um einen "Start"-Button in der Benutzeroberfläche zu aktivieren, wenn der Knoten die Wiedergabe beendet:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

Sie können auch den Ereignis-Handler mit der `onended`-Eigenschaft einrichten:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

Ein Beispiel für die Nutzung des ended-Ereignisses finden Sie in unserem [audio-buffer Beispiel auf GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- [audioprocess](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- [complete](/de/docs/Web/API/OfflineAudioContext/complete_event)

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}}-Ereignis
- Das MediaStreamTrack {{domxref("MediaStreamTrack.ended_event", 'ended')}}-Ereignis
