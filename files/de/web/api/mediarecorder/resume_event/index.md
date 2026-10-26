---
title: "MediaRecorder: resume-Ereignis"
short-title: resume
slug: Web/API/MediaRecorder/resume_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("MediaStream Recording")}}

Das **`resume`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.resume()`](/de/docs/Web/API/MediaRecorder/resume) aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resume", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onresume = (event) => { }
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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo zur Visualisierung mit MediaRecorder, getUserMedia und Web Audio API von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)).
- [simpl.info-Demo zu MediaStream Recording](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
