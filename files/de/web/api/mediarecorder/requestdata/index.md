---
title: "MediaRecorder: requestData()-Methode"
short-title: requestData()
slug: Web/API/MediaRecorder/requestData
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`requestData()`**-Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces wird verwendet, um ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis auszulösen, das ein [`Blob`](/de/docs/Web/API/Blob)-Objekt der aufgenommenen Medien enthält, so wie es war, als die Methode aufgerufen wurde. Dies kann dann erfasst und nach Wunsch manipuliert werden.

Wenn die `requestData()`-Methode aufgerufen wird, stellt der Browser eine Warteschlange mit Aufgaben auf, die die folgenden Schritte ausführt:

1. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) "inactive" ist, wird ein DOM-`InvalidState`-Fehler ausgelöst und diese Schritte werden beendet. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) nicht "inactive" ist, wird mit dem nächsten Schritt fortgefahren.
2. Ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird ausgelöst, das ein [`Blob`](/de/docs/Web/API/Blob) der derzeit aufgenommenen Daten enthält (das Blob ist im `data`-Attribut des Ereignisses verfügbar).
3. Ein neues Blob wird erstellt und darauffolgende aufgenommene Daten werden hineingelegt.

## Syntax

```js-nolint
requestData()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `MediaRecorder` aktuell `"inactive"` ist; Sie können die Aufnahme nicht erfassen, wenn der `MediaRecorder` nicht aktiv ist.

## Beispiele

```js
captureMedia.onclick = () => {
  mediaRecorder.requestData();
  // makes snapshot available of data so far
  // ondataavailable fires, then capturing continues
  // in new Blob
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
