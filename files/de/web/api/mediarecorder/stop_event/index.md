---
title: "MediaRecorder: stop Ereignis"
short-title: stop
slug: Web/API/MediaRecorder/stop_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

Das **`stop`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird oder wenn der aufgenommene Medienstrom endet. In jedem Fall wird das `stop`-Ereignis von einem `dataavailable`-Ereignis vorangestellt, wodurch der bis zu diesem Zeitpunkt aufgenommene [`Blob`](/de/docs/Web/API/Blob) für Sie in Ihrer Anwendung verfügbar wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("stop", (event) => { })

onstop = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
mediaRecorder.onstop = (e) => {
  console.log("data available after MediaRecorder.stop() called.");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("recorder stopped");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
