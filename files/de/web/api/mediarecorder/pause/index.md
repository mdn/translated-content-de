---
title: "MediaRecorder: pause() Methode"
short-title: pause()
slug: Web/API/MediaRecorder/pause
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("MediaStream Recording")}}

Die **`pause()`**-Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces wird verwendet, um die Aufnahme von Mediastreams zu pausieren.

Wenn die `pause()`-Methode eines `MediaRecorder`-Objekts aufgerufen wird, stellt der Browser eine Aufgabe in die Warteschlange, die die folgenden Schritte ausführt:

1. Wenn [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) "inactive" ist, lösen Sie einen DOM-`InvalidState`-Fehler aus und beenden Sie diese Schritte. Wenn nicht, fahren Sie mit dem nächsten Schritt fort.
2. Setzen Sie [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) auf "paused".
3. Stoppen Sie das Sammeln von Daten in das aktuelle [`Blob`](/de/docs/Web/API/Blob), aber halten Sie es verfügbar, sodass die Aufnahme später fortgesetzt werden kann.
4. Lösen Sie ein [`pause`](/de/docs/Web/API/MediaRecorder/pause_event)-Ereignis aus.

## Syntax

```js-nolint
pause()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `MediaRecorder` derzeit `"inactive"` ist; Sie können die Aufnahme nicht pausieren, wenn der `MediaRecorder` nicht aktiv ist. Wenn Sie `pause()` aufrufen, während bereits pausiert ist, tut die Methode stillschweigend nichts.

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
