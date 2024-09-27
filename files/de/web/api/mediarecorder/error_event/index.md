---
title: "MediaRecorder: Fehlerereignis"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt: zum Beispiel, weil die Aufnahme nicht erlaubt war oder ein nicht unterstützter Codec verwendet wurde.

Dieses Ereignis ist nicht anullierbar und wird nicht weitergeleitet.

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

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das Informationen über den aufgetretenen Fehler enthält.

## Beschreibung

### Auslöser

Eine Funktion, die immer dann aufgerufen wird, wenn während der Lebensdauer des Recorders ein Fehler auftritt. Zusätzlich zu anderen allgemeinen Fehlern, die auftreten können, sind die folgenden Fehler speziell beim Verwenden der MediaStream Recording API möglich; um festzustellen, welcher aufgetreten ist, überprüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass er Aufnahmen nicht zulässt. Dies kann zum Beispiel der Fall sein, wenn Quellen mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten werden und der Benutzer die Erlaubnis zur Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Spuren im aufgezeichneten Stream hat sich geändert. Sie können keine Spuren hinzufügen oder entfernen, während Medien aufgezeichnet werden.
- `UnknownError`
  - : Ein nicht sicherheitsbezogener Fehler ist aufgetreten, der ansonsten nicht kategorisiert werden kann. Die Aufnahme stoppt, der `MediaRecorder`-`state` (/de/docs/Web/API/MediaRecorder/state) wird `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) Ereignis wird an den `MediaRecorder` gesendet mit den restlichen empfangenen Daten, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event) Ereignis gesendet.

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Lauschen auf `error`-Ereignisse:

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

Dasselbe, aber unter Verwendung der `onerror`-Ereignis-Handler-Eigenschaft:

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
