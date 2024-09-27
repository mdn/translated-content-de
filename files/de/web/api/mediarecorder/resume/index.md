---
title: "MediaRecorder: resume() Methode"
short-title: resume()
slug: Web/API/MediaRecorder/resume
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`resume()`**-Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces wird verwendet, um die Medienaufnahme fortzusetzen, wenn sie zuvor pausiert wurde.

Wenn der [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) bereits "recording" ist, hat ein Aufruf von `resume()` keine Wirkung.

Wenn die `resume()`-Methode aufgerufen wird, reiht der Browser einen Task ein, der die folgenden Schritte ausführt:

1. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) "inactive" ist, wird eine `InvalidStateError`-Ausnahme des DOM ausgelöst und diese Schritte beendet. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) nicht "inactive" ist, fahren Sie mit dem nächsten Schritt fort.
2. Setzen Sie [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) auf "recording".
3. Fahren Sie fort, Daten in das aktuelle [`Blob`](/de/docs/Web/API/Blob) zu sammeln.
4. Lösen Sie ein `resume`-Ereignis aus.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `MediaRecorder` derzeit `"inactive"` ist.

## Beispiele

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Visualisierungs-Demo der Web Audio API, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
