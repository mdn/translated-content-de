---
title: "MediaRecorder: Fehlerereignis"
short-title: Fehler
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der {{domxref("MediaRecorder")}}-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt: beispielsweise, weil die Aufnahme nicht erlaubt war oder mit einem nicht unterstützten Codec versucht wurde.

Dieses Ereignis ist nicht abzubrechen und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("event", (event) => {});

onevent = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaRecorderErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, {{domxref("Event")}}_.

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMException")}}, das Informationen über den aufgetretenen Fehler enthält.

## Beschreibung

### Auslöser

Eine Funktion, die aufgerufen wird, wann immer ein Fehler während der Lebensdauer des Recorders auftritt. Zusätzlich zu anderen allgemeinen Fehlern, die auftreten könnten, sind die folgenden Fehler speziell möglich, wenn die MediaStream Recording API verwendet wird; um festzustellen, welcher aufgetreten ist, überprüfen Sie den Wert von {{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}}.

- `SecurityError`
  - : Der {{domxref("MediaStream")}} ist so konfiguriert, dass die Aufnahme nicht erlaubt ist. Dies kann beispielsweise der Fall sein, wenn Quellen mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} bezogen werden und der Benutzer die Erlaubnis zur Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Spuren im Stream, der aufgenommen wird, hat sich geändert. Sie können während der Aufnahme keine Spuren hinzufügen oder entfernen.
- `UnknownError`
  - : Ein nicht sicherheitsrelevanter Fehler ist aufgetreten, der nicht anders kategorisiert werden kann. Die Aufnahme stoppt, der {{domxref("MediaRecorder.state", "state")}} des `MediaRecorder` wird `inactive`, ein letztes {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis wird an den `MediaRecorder` mit den restlichen empfangenen Daten gesendet, und schließlich wird ein {{domxref("MediaRecorder/stop_event", "stop")}}-Ereignis gesendet.

## Beispiele

Verwendung von {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um `error`-Ereignisse zu hören:

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

Dasselbe, aber mit der `onerror`-Ereignishandler-Eigenschaft:

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
