---
title: "MediaRecorder: error Ereignis"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}

Das **`error`** Ereignis des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces wird ausgelöst, wenn ein Fehler auftritt: zum Beispiel, weil die Aufnahme nicht erlaubt war oder mit einem nicht unterstützten Codec versucht wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("event", (event) => {});

onevent = (event) => {};
```

## Ereignistyp

Ein [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der Informationen über den aufgetretenen Fehler enthält.

## Beschreibung

### Auslöser

Eine Funktion, die immer dann aufgerufen wird, wenn während der Lebensdauer des Rekorders ein Fehler auftritt. Neben anderen allgemeinen Fehlern, die auftreten können, sind folgende Fehler beim Einsatz der MediaStream Recording-API speziell möglich; um festzustellen, welcher aufgetreten ist, überprüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass die Aufnahme nicht erlaubt ist. Dies kann beispielsweise der Fall sein, wenn Quellen mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen werden und der Benutzer die Berechtigung zur Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im aufgenommenen Stream hat sich geändert. Sie können keine Tracks hinzufügen oder entfernen, während Medien aufgenommen werden.
- `UnknownError`
  - : Ein nicht sicherheitsrelevanter Fehler ist aufgetreten, der sonst nicht kategorisiert werden kann. Die Aufnahme wird gestoppt, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorder` wird zu `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event) Ereignis gesendet.

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um `error` Ereignisse abzuhören:

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

Das Gleiche, aber mit der `onerror` Ereignis-Handler-Eigenschaft:

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
