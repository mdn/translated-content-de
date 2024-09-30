---
title: "MediaRecorderErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/MediaRecorderErrorEvent/error
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`error`**-Eigenschaft (nur lesbar) des [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent)-Interfaces ist ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das Details über die vom [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Instanz ausgelöste Ausnahme bereitstellt.

Wenn ein `MediaRecorderErrorEvent` auftritt, können Sie bis zu einem gewissen Grad feststellen, was schiefgelaufen ist, indem Sie die `error`-Eigenschaft im `MediaRecorderErrorEvent` untersuchen, das vom [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler des `MediaRecorder`, [`onerror`](/de/docs/Web/API/MediaRecorder/error_event), empfangen wird.

## Wert

Eine [`DOMException`](/de/docs/Web/API/DOMException), die den durch das Ereignis dargestellten Fehler beschreibt. Der Wert der `name`-Eigenschaft des Fehlers kann jede Ausnahme sein, die im Zusammenhang mit der Medienaufnahme sinnvoll ist, einschließlich derer, die in der Spezifikation ausdrücklich identifiziert sind. Die hier beschriebenen sind allgemein gehalten; spezifischere für verschiedene Szenarien, in denen sie auftreten können, finden Sie in den entsprechenden Methodenreferenzen.

- `InvalidStateError`
  - : Es wurde versucht, eine Operation in einem Kontext auszuführen, in dem sie nicht erlaubt ist, oder es wurde eine Anfrage an ein Objekt gestellt, das gelöscht oder entfernt wurde.
- `NotSupportedError`
  - : Ein `MediaRecorder` konnte nicht erstellt werden, da die angegebenen Optionen ungültig waren. Das `message`-Attribut sollte zusätzliche Informationen liefern, falls vorhanden.
- `SecurityError`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream) ist so konfiguriert, dass die Aufnahme nicht erlaubt ist. Dies kann beispielsweise der Fall sein bei Quellen, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurden, wenn der Benutzer die Berechtigung zur Nutzung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Spuren im Stream, der aufgenommen wird, hat sich geändert. Es ist nicht möglich, Spuren hinzuzufügen oder zu entfernen, während Medien aufgenommen werden.
- `UnknownError`
  - : Ein nicht sicherheitsbezogener Fehler, der andernfalls nicht kategorisiert werden kann, ist aufgetreten. Die Aufnahme stoppt, der `state` des `MediaRecorder` wird `inactive`, ein letztes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet und schließlich wird ein [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis gesendet.

## Beispiele

### Einfaches Fehlerbehandlungsbeispiel

Diese Funktion erstellt und gibt einen `MediaRecorder` für einen bestimmten [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der so konfiguriert ist, dass Daten in einem Array gepuffert und auf Fehler überwacht werden.

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
