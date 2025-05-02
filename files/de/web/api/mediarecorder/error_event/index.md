---
title: "MediaRecorder: error-Event"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt: beispielsweise weil die Aufnahme nicht erlaubt war oder ein nicht unterstützter Codec verwendet wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das Informationen über den aufgetretenen Fehler enthält.

## Beschreibung

### Auslöser

Eine Funktion, die immer dann aufgerufen wird, wenn während der Lebensdauer des Aufnahmegeräts ein Fehler auftritt. Zusätzlich zu anderen allgemeinen Fehlern, die auftreten können, sind die folgenden Fehler speziell möglich, wenn die MediaStream Recording API verwendet wird; um festzustellen, welcher aufgetreten ist, überprüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass Aufnahmen nicht erlaubt sind. Dies kann zum Beispiel der Fall sein, wenn Quellen, die mithilfe von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden, verwendet werden, wenn der Benutzer die Berechtigung zur Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im Stream, der aufgenommen wird, hat sich geändert. Sie können während der Medienaufnahme keine Tracks hinzufügen oder entfernen.
- `UnknownError`
  - : Ein nicht sicherheitsbezogener Fehler ist aufgetreten, der sonst nicht kategorisiert werden kann. Die Aufnahme stoppt, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorder` wird `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird mit den verbleibenden empfangenen Daten an den `MediaRecorder` gesendet, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Abhören von `error`-Ereignissen:

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

Das Gleiche, aber mit der `onerror`-Ereignishandler-Eigenschaft:

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
