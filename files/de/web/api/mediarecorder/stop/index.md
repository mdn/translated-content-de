---
title: "MediaRecorder: Methode stop()"
short-title: stop()
slug: Web/API/MediaRecorder/stop
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`stop()`**-Methode der {{domxref("MediaRecorder")}}-Schnittstelle wird verwendet, um die Medienaufnahme zu stoppen.

Wenn die `stop()`-Methode aufgerufen wird, stellt der Benutzeragent eine Aufgabe in die Warteschlange, die die folgenden Schritte durchführt:

1. Ist der {{domxref("MediaRecorder.state")}} „inactive“, wird ein DOM-`InvalidState`-Fehler ausgelöst und diese Schritte werden beendet. Wenn der {{domxref("MediaRecorder.state")}} nicht „inactive“ ist, fahren Sie mit dem nächsten Schritt fort.
2. Setzen Sie den {{domxref("MediaRecorder.state")}} auf „inactive“ und stoppen Sie die Aufzeichnung der Medien.
3. Lösen Sie ein `dataavailable`-Ereignis aus, das das gesammelte Daten-Blob enthält.
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

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `MediaRecorder` derzeit „inactive“ ist; Sie können die Aufnahme nicht stoppen, wenn der `MediaRecorder` nicht aktiv ist.

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

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web-Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia")}}
