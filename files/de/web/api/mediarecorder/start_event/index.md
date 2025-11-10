---
title: "MediaRecorder: start-Ereignis"
short-title: start
slug: Web/API/MediaRecorder/start_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

Das **`start`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) aufgerufen wird. Zu diesem Zeitpunkt werden die Daten in ein [`Blob`](/de/docs/Web/API/Blob) gesammelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("start", (event) => { })

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
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
