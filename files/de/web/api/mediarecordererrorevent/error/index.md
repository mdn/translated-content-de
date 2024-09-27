---
title: "MediaRecorderErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/MediaRecorderErrorEvent/error
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`error`**-Eigenschaft der [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Schnittstelle ist ein schreibgeschütztes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das Details über die Ausnahme bereitstellt, die von einer [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Instanz ausgelöst wurde.

Wenn ein `MediaRecorderErrorEvent` auftritt, können Sie durch die Untersuchung der `error`-Eigenschaft innerhalb des von der [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignisbehandlung des `MediaRecorders` empfangenen `MediaRecorderErrorEvent`s feststellen, was schiefgelaufen ist, bis zu einem gewissen Grad.

## Wert

Eine [`DOMException`](/de/docs/Web/API/DOMException), die den durch das Ereignis dargestellten Fehler beschreibt. Der Wert der [`name`](/de/docs/Web/API/DOMException/name)-Eigenschaft des Fehlers kann jede Ausnahme sein, die während der Medienaufzeichnung sinnvoll ist, einschließlich derer, die speziell durch die Spezifikation identifiziert wurden. Die Beschreibungen hier sind generisch; Sie finden spezifischere zu verschiedenen Szenarien, in denen sie auftreten können, in den entsprechenden Methodenreferenzen.

- `InvalidStateError`
  - : Es wurde versucht, eine Operation in einem Kontext durchzuführen, in dem sie nicht erlaubt ist, oder es wurde eine Anfrage an ein Objekt gestellt, das gelöscht oder entfernt wurde.
- `NotSupportedError`
  - : Ein `MediaRecorder` konnte nicht erstellt werden, weil die angegebenen Optionen ungültig waren. Das `message`-Attribut sollte zusätzliche Informationen liefern, falls vorhanden.
- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass er die Aufnahme nicht zulässt. Dies kann beispielsweise der Fall sein, wenn mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogene Quellen verwendet werden, wenn der Benutzer die Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Tracks im Stream, der aufgezeichnet wird, hat sich geändert. Sie können während der Medienaufzeichnung keine Tracks hinzufügen oder entfernen.
- `UnknownError`
  - : Ein nicht sicherheitsbezogener Fehler ist aufgetreten, der anderweitig nicht kategorisiert werden kann. Die Aufnahme stoppt, der Status des `MediaRecorders` wird zu `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet und schließlich ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

### Grundlegendes Beispiel zur Fehlerbehandlung

Diese Funktion erstellt und gibt einen `MediaRecorder` für einen gegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der so konfiguriert ist, dass Daten in ein Array gepuffert und auf Fehler überwacht werden.

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

Dieses Feature ist nicht mehr Teil einer Spezifikation und nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
