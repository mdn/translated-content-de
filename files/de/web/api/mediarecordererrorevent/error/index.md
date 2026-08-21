---
title: "MediaRecorderErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/MediaRecorderErrorEvent/error
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("MediaStream Recording")}}{{Non-standard_Header}}

Die **`error`**-Eigenschaft, die nur lesbar ist, des [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Interfaces ist ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das Details über die Ausnahme bereitstellt, die von einer [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Instanz ausgelöst wurde.

Wenn ein `MediaRecorderErrorEvent` auftritt, können Sie durch Überprüfung der `error`-Eigenschaft innerhalb des `MediaRecorderErrorEvent`, das vom `MediaRecorder`'s [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler, [`onerror`](/de/docs/Web/API/MediaRecorder/error_event), empfangen wird, in gewissem Maße bestimmen, was schiefgelaufen ist.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException), der den vom Ereignis dargestellten Fehler beschreibt. Der Wert der [`name`](/de/docs/Web/API/DOMException/name)-Eigenschaft des Fehlers kann jede Ausnahme sein, die während der Handhabung der Medienaufnahme sinnvoll ist, einschließlich der im Standard speziell identifizierten. Die hier dargestellten Beschreibungen sind generisch; spezifischere Beschreibungen für verschiedene Szenarien, in denen sie auftreten können, finden Sie in den entsprechenden Methodenreferenzen.

- `InvalidStateError`
  - : Eine Operation wurde in einem Kontext versucht, in dem sie nicht zulässig ist, oder eine Anfrage wurde an ein Objekt gestellt, das gelöscht oder entfernt wurde.
- `NotSupportedError`
  - : Ein `MediaRecorder` konnte nicht erstellt werden, weil die angegebenen Optionen nicht gültig waren. Das `message`-Attribut sollte zusätzliche Informationen liefern, falls vorhanden.
- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass die Aufnahme nicht erlaubt ist. Dies kann beispielsweise der Fall sein, wenn Quellen über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden und der Benutzer die Erlaubnis zur Nutzung eines Eingabegeräts verweigert hat.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im Stream, der aufgenommen wird, hat sich geändert. Sie können keine Tracks hinzufügen oder entfernen, während Medien aufgenommen werden.
- `UnknownError`
  - : Es ist ein nicht sicherheitsbezogener Fehler aufgetreten, der nicht anderweitig kategorisiert werden kann. Die Aufnahme stoppt, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorder` wechselt zu `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet, und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

### Grundlegendes Beispiel zur Fehlerbehandlung

Diese Funktion erstellt und gibt einen `MediaRecorder` für einen gegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der so konfiguriert ist, dass Daten in einen Array gepuffert und auf Fehler überwacht werden.

```js
function recordStream(stream) {
  let recorder = null;
  let bufferList = [];

  try {
    recorder = new MediaRecorder(stream);
  } catch (err) {
    /* exception while trying to create the recorder; handle that */
  }

  recorder.ondataavailable = (event) => {
    bufferList.push(event.data);
  };

  recorder.onerror = (event) => {
    console.error(`Error: ${event.error}`);
  };

  recorder.start(100); /* 100ms time slices per buffer */
  return recorder;
}
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation und wird nicht mehr als Standard verfolgt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
