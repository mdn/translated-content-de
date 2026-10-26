---
title: "MediaRecorder: pause-Ereignis"
short-title: pause
slug: Web/API/MediaRecorder/pause_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("MediaStream Recording")}}

Das **`pause`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.pause()`](/de/docs/Web/API/MediaRecorder/pause) aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pause", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpause = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
pause.onclick = () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // recording paused
  } else if (mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // resume recording
  }
};

mediaRecorder.onpause = () => {
  // do something in response to
  // recording being paused
};

mediaRecorder.onresume = () => {
  // do something in response to
  // recording being resumed
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo zur Visualisierung mit MediaRecorder, getUserMedia und der Web Audio API von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)).
- [simpl.info-Demo zu MediaStream Recording](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
