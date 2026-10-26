---
title: "MediaRecorder: start-Ereignis"
short-title: start
slug: Web/API/MediaRecorder/start_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("MediaStream Recording")}}

Das **`start`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufgerufen wird. Ab diesem Zeitpunkt werden Daten in einem [`Blob`](/de/docs/Web/API/Blob) gesammelt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("start", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("recorder started");
};

mediaRecorder.onstart = () => {
  // do something in response to
  // recording being started
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): Demo zur Visualisierung mit MediaRecorder, getUserMedia und der Web Audio API, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)).
- [simpl.info-Demo zur MediaStream-Aufzeichnung](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
