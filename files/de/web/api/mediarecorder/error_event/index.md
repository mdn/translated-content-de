---
title: "MediaRecorder: error-Ereignis"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("MediaStream Recording")}}

Das **`error`**-Ereignis der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle wird ausgelöst, wenn ein Fehler auftritt, beispielsweise weil die Aufzeichnung nicht erlaubt war oder mit einem nicht unterstützten Codec versucht wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Beschreibung

### Auslöser

Die Funktion wird aufgerufen, wenn während der Lebensdauer des Recorders ein Fehler auftritt. Neben anderen allgemeinen Fehlern können bei der Verwendung der MediaStream Recording API insbesondere die folgenden Fehler auftreten. Um festzustellen, welcher Fehler aufgetreten ist, prüfen Sie den Wert von [`MediaRecorderErrorEvent.error.name`](/de/docs/Web/API/DOMException/name).

- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass eine Aufzeichnung nicht zulässig ist. Dies kann beispielsweise bei Quellen der Fall sein, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurden, wenn der Benutzer die Berechtigung zur Verwendung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im aufgezeichneten Stream hat sich geändert. Während der Aufzeichnung von Medien können Sie keine Tracks hinzufügen oder entfernen.
- `UnknownError`
  - : Ein Fehler, der nicht mit der Sicherheit zusammenhängt und sich keiner anderen Kategorie zuordnen lässt, ist aufgetreten. Die Aufzeichnung wird beendet, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorder` wechselt zu `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis mit den verbleibenden empfangenen Daten wird an den `MediaRecorder` gesendet und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

So verwenden Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf `error`-Ereignisse zu reagieren:

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

Dasselbe mit der Event-Handler-Eigenschaft `onerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onerror` hinzugefügte Ereignis-Listener ersetzt werden):

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
