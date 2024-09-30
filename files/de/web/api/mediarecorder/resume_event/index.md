---
title: "MediaRecorder: resume-Ereignis"
short-title: resume
slug: Web/API/MediaRecorder/resume_event
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Das **`resume`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.resume()`](/de/docs/Web/API/MediaRecorder/resume) aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("resume", (event) => {});

onresume = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
pause.onclick = () => {
  if (MediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // recording paused
  } else if (MediaRecorder.state === "paused") {
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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
