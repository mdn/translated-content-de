---
title: "MediaRecorder: stop()-Methode"
short-title: stop()
slug: Web/API/MediaRecorder/stop
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`stop()`**-Methode der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird verwendet, um die Medienaufnahme zu stoppen.

Wenn die `stop()`-Methode aufgerufen wird, reiht der UA eine Aufgabe ein, die die folgenden Schritte ausführt:

1. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) "inactive" ist, wird ein DOM `InvalidState`-Fehler ausgelöst und diese Schritte werden beendet. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) nicht "inactive" ist, fahren Sie mit dem nächsten Schritt fort.
2. Setzen Sie [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) auf "inactive" und beenden Sie die Medienaufnahme.
3. Lösen Sie ein `dataavailable`-Ereignis aus, das das Blob der gesammelten Daten enthält.
4. Lösen Sie ein `stop`-Ereignis aus.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `MediaRecorder` momentan `"inactive"` ist; Sie können die Aufnahme nicht stoppen, wenn der `MediaRecorder` nicht aktiv ist.

## Beispiele

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log("recorder stopped, data available");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
