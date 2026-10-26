---
title: "MediaRecorder: stop-Ereignis"
short-title: stop
slug: Web/API/MediaRecorder/stop_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("MediaStream Recording")}}

Das **`stop`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop) aufgerufen wird oder wenn der aufgezeichnete Medienstrom endet. In beiden Fällen geht dem `stop`-Ereignis ein `dataavailable`-Ereignis voraus. Dadurch steht Ihnen das bis zu diesem Zeitpunkt aufgezeichnete [`Blob`](/de/docs/Web/API/Blob) zur Verwendung in Ihrer Anwendung zur Verfügung.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("stop", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo zur Visualisierung mit MediaRecorder, getUserMedia und der Web Audio API von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)).
- [simpl.info-Demo zur MediaStream-Aufzeichnung](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
