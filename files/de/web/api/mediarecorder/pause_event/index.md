---
title: "MediaRecorder: pause Ereignis"
short-title: pause
slug: Web/API/MediaRecorder/pause_event
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Das **`pause`** Ereignis der {{domxref("MediaRecorder")}} Schnittstelle wird ausgelöst, wenn {{domxref("MediaRecorder.pause()")}} aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

```js
pause.onclick = () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // Aufnahme pausiert
  } else if (mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // Aufnahme fortsetzen
  }
};

mediaRecorder.onpause = () => {
  // Tun Sie etwas als Reaktion darauf,
  // dass die Aufnahme pausiert wird
};

mediaRecorder.onresume = () => {
  // Tun Sie etwas als Reaktion darauf,
  // dass die Aufnahme fortgesetzt wird
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia")}}
