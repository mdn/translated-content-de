---
title: "AudioScheduledSourceNode: ended-Ereignis"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Web Audio API")}}

Das `ended`-Ereignis der Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) wird ausgelöst, wenn der Quellknoten die Wiedergabe beendet hat.

Dies geschieht, wenn ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) die Wiedergabe beendet hat – entweder weil ein vorab festgelegter Stoppzeitpunkt erreicht wurde, die gesamte Audiodauer abgespielt wurde oder der gesamte Buffer abgespielt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("ended", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem einfachen Beispiel wird ein Event-Listener für das `ended`-Ereignis eingerichtet, der eine „Start“-Schaltfläche in der Benutzeroberfläche aktiviert, sobald der Knoten die Wiedergabe beendet:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

Sie können den Event-Handler auch über die Eigenschaft `onended` einrichten. Beachten Sie jedoch, dass dadurch andere über `onended` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

Ein Anwendungsbeispiel für das `ended`-Ereignis finden Sie in unserem [Audio-Buffer-Beispiel auf GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

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
- Das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis von HTMLMediaElement
- Das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis von MediaStreamTrack
