---
title: "MediaRecorder: error Event"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt: zum Beispiel, weil die Aufnahme nicht erlaubt ist oder ein nicht unterstützter Codec verwendet wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

Eine Funktion, die aufgerufen wird, wenn während der Lebensdauer des Recorders ein Fehler auftritt. Neben anderen allgemeinen Fehlern, die auftreten können, sind folgende Fehler beim Verwenden der MediaStream Recording API speziell möglich; um festzustellen, welcher aufgetreten ist, prüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass Aufnahmen nicht erlaubt sind. Dies kann zum Beispiel der Fall sein, wenn Quellen mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen wurden und der Benutzer die Erlaubnis zur Verwendung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im Stream, der aufgenommen wird, hat sich geändert. Sie können während der Medienaufnahme keine Tracks hinzufügen oder entfernen.
- `UnknownError`
  - : Ein nicht sicherheitsrelevanter Fehler ist aufgetreten, der nicht anders kategorisiert werden kann. Die Aufnahme stoppt, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorder` wird `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um `error`-Ereignisse zu überwachen:

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

Das gleiche, aber unter Verwendung der `onerror`-Ereignis-Handler-Eigenschaft:

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
