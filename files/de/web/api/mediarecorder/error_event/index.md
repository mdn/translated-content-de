---
title: "MediaRecorder: error Ereignis"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt, z. B. weil die Aufnahme nicht erlaubt war oder mit einem nicht unterstützten Codec versucht wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Beschreibung

### Auslöser

Eine Funktion, die aufgerufen wird, wenn während der Lebensdauer des Recorders ein Fehler auftritt. Zusätzlich zu anderen allgemeinen Fehlern, die auftreten können, sind die folgenden Fehler speziell bei der Verwendung der MediaStream Recording API möglich; um festzustellen, welcher Fehler aufgetreten ist, prüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass Aufnahmen nicht erlaubt sind. Dies kann beispielsweise bei Quellen der Fall sein, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurden, wenn der Benutzer die Erlaubnis zur Verwendung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im Stream, der aufgezeichnet wird, hat sich geändert. Sie können keine Tracks hinzufügen oder entfernen, während Medien aufgenommen werden.
- `UnknownError`
  - : Es ist ein nicht sicherheitsrelevanter Fehler aufgetreten, der anderweitig nicht kategorisiert werden kann. Die Aufnahme stoppt, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorders` wird `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` mit den verbleibenden aufgenommenen Daten gesendet, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf `error`-Ereignisse zu hören:

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.addEventListener("error", (event) => {
    console.error(`error recording stream: ${event.error.name}`);
  });
  recorder.start();
}

record();
```

Das Gleiche, aber unter Verwendung der `onerror`-Ereignishandler-Eigenschaft:

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.onerror = (event) => {
    console.error(`error recording stream: ${event.error.name}`);
  };
  recorder.start();
}

record();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
