---
title: "MediaRecorder: resume()-Methode"
short-title: resume()
slug: Web/API/MediaRecorder/resume
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`resume()`**-Methode der Schnittstelle {{domxref("MediaRecorder")}} wird verwendet, um die Medienaufnahme fortzusetzen, wenn sie zuvor pausiert wurde.

Wenn der {{domxref("MediaRecorder.state")}} bereits "recording" ist, hat das Aufrufen von `resume()` keine Auswirkung.

Wenn die `resume()`-Methode aufgerufen wird, stellt der Browser eine Aufgabe in die Warteschlange, die die folgenden Schritte ausführt:

1. Wenn {{domxref("MediaRecorder.state")}} "inactive" ist, wird eine DOM-`InvalidStateError`-Exception ausgelöst und diese Schritte werden beendet. Wenn {{domxref("MediaRecorder.state")}} nicht "inactive" ist, gehen Sie zum nächsten Schritt über.
2. Setzen Sie {{domxref("MediaRecorder.state")}} auf "recording".
3. Fahren Sie fort, Daten in das aktuelle {{domxref("Blob")}} zu sammeln.
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

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der `MediaRecorder` derzeit "inactive" ist.

## Beispiele

```js
pause.onclick = () => {
  if (MediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // Aufnahme pausiert
  } else if (MediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // Aufnahme fortgesetzt
  }
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
- {{domxref("Navigator.getUserMedia")}}
