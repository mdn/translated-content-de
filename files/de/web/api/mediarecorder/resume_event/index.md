---
title: "MediaRecorder: resume-Ereignis"
short-title: resume
slug: Web/API/MediaRecorder/resume_event
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Das **`resume`**-Ereignis des {{domxref("MediaRecorder")}}-Interfaces wird ausgelöst, wenn {{domxref("MediaRecorder.resume()")}} aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resume", (event) => {});

onresume = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

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

mediaRecorder.onpause = () => {
  // tun Sie etwas als Reaktion darauf,
  // dass die Aufnahme pausiert wurde
};

mediaRecorder.onresume = () => {
  // tun Sie etwas als Reaktion darauf,
  // dass die Aufnahme fortgesetzt wurde
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia")}}
