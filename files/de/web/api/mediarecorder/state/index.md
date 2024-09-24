---
title: "MediaRecorder: state-Eigenschaft"
short-title: state
slug: Web/API/MediaRecorder/state
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte Eigenschaft **`state`** des {{domxref("MediaRecorder")}}-Interfaces gibt den aktuellen Zustand des aktuellen `MediaRecorder`-Objekts zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `inactive`
  - : Die Aufnahme erfolgt nicht — sie wurde entweder noch nicht gestartet oder sie wurde gestartet und dann gestoppt.
- `recording`
  - : Die Aufnahme wurde gestartet und der {{glossary("user agent")}} erfasst Daten.
- `paused`
  - : Die Aufnahme wurde gestartet, dann pausiert, aber noch nicht gestoppt oder fortgesetzt.

## Beispiele

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  // Wird "recording" zurückgeben
  console.log("recorder gestartet");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelldatei auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia()")}}
