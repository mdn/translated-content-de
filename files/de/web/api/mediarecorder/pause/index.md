---
title: "MediaRecorder: pause() Methode"
short-title: pause()
slug: Web/API/MediaRecorder/pause
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("MediaStream Recording")}}

Die **`pause()`** Methode der {{domxref("MediaRecorder")}} Schnittstelle wird verwendet,
um die Aufnahme von Medienströmen zu unterbrechen.

Wenn die `pause()` Methode eines `MediaRecorder` Objekts aufgerufen wird, stellt der
Browser eine Aufgabe in die Warteschlange, die die folgenden Schritte ausführt:

1. Wenn {{domxref("MediaRecorder.state")}} "inactive" ist, wird ein DOM
   `InvalidState` Fehler ausgelöst und diese Schritte beendet. Falls nicht, fahren Sie mit dem
   nächsten Schritt fort.
2. Setzen Sie {{domxref("MediaRecorder.state")}} auf "paused".
3. Beenden Sie das Sammeln von Daten in das aktuelle {{domxref("Blob")}}, halten Sie es aber verfügbar, damit
   die Aufnahme später fortgesetzt werden kann.
4. Lösen Sie ein {{domxref("MediaRecorder/pause_event", "pause")}} Ereignis aus.

## Syntax

```js-nolint
pause()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `MediaRecorder` derzeit `"inactive"` ist; Sie können die Aufnahme nicht unterbrechen, wenn der `MediaRecorder` nicht aktiv ist. Wenn Sie `pause()` aufrufen, während bereits pausiert ist, führt die Methode stillschweigend nichts aus.

## Beispiele

```js
pause.onclick = () => {
  mediaRecorder.pause();
  console.log("recording paused");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia")}}
