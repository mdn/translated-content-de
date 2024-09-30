---
title: "MediaRecorder: state-Eigenschaft"
short-title: state
slug: Web/API/MediaRecorder/state
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`state`**-Schreibgeschützte Eigenschaft des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den aktuellen Zustand des aktuellen `MediaRecorder`-Objekts zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `inactive`
  - : Es erfolgt keine Aufnahme — sie wurde entweder noch nicht gestartet oder sie wurde gestartet und dann gestoppt.
- `recording`
  - : Die Aufnahme wurde gestartet und der [User-Agent](/de/docs/Glossary/user_agent) erfasst Daten.
- `paused`
  - : Die Aufnahme wurde gestartet, dann angehalten, aber noch nicht gestoppt oder fortgesetzt.

## Beispiele

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  // Will return "recording"
  console.log("recorder started");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)
