---
title: "MediaRecorderErrorEvent: Fehler-Eigenschaft"
short-title: Fehler
slug: Web/API/MediaRecorderErrorEvent/error
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`error`**-schreibgeschützte Eigenschaft der {{domxref("MediaRecorderErrorEvent")}}-Schnittstelle ist ein {{domxref("DOMException")}}-Objekt, das Details über die Ausnahme bereitstellt, die von einer {{domxref("MediaRecorder")}}-Instanz ausgelöst wurde.

Wenn ein `MediaRecorderErrorEvent` auftritt, können Sie bis zu einem gewissen Grad feststellen, was schiefgelaufen ist, indem Sie die `error`-Eigenschaft innerhalb des vom `MediaRecorder` empfangenen `MediaRecorderErrorEvent`-Ereignishandlers, {{domxref("MediaRecorder/error_event", "error")}}-Ereignishandler, {{domxref("MediaRecorder/error_event", "onerror")}}, untersuchen.

## Wert

Ein {{domxref("DOMException")}}, das den durch das Ereignis dargestellten Fehler beschreibt. Der Wert der {{domxref("DOMException.name", "name")}}-Eigenschaft des Fehlers kann jede Ausnahme sein, die im Umgang mit Medienaufnahmen sinnvoll ist, einschließlich dieser, die durch die Spezifikation spezifisch identifiziert werden. Die hier beschriebenen sind generisch; spezifischere finden Sie in den entsprechenden Methodenreferenzen zu verschiedenen Szenarien, in denen sie auftreten können.

- `InvalidStateError`
  - : Ein Vorgang wurde in einem Kontext versucht, in dem er nicht zulässig ist, oder eine Anfrage wurde an ein Objekt gestellt, das gelöscht oder entfernt wurde.
- `NotSupportedError`
  - : Ein `MediaRecorder` konnte nicht erstellt werden, da die angegebenen Optionen ungültig waren. Die `message`-Attribut sollte zusätzliche Informationen bereitstellen, falls vorhanden.
- `SecurityError`
  - : Der {{domxref("MediaStream")}} ist so konfiguriert, dass Aufnehmen nicht zulässig ist. Dies kann der Fall sein, z. B. bei Quellen, die mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erhalten wurden, wenn der Benutzer die Erlaubnis zur Verwendung eines Eingabegeräts verweigert.
- `InvalidModificationError`
  - : Die Anzahl der Spuren im Stream, der aufgenommen wird, hat sich geändert. Sie können während der Medienaufnahme keine Spuren hinzufügen oder entfernen.
- `UnknownError`
  - : Ein nicht sicherheitsbezogener Fehler, der nicht anderweitig kategorisiert werden kann, ist aufgetreten. Die Aufnahme stoppt, der {{domxref("MediaRecorder")}}-{{domxref("MediaRecorder.state", "state")}} wird `inactive`, ein letztes {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis wird an den `MediaRecorder` mit den verbleibenden empfangenen Daten gesendet, und schließlich wird ein {{domxref("MediaRecorder/stop_event", "stop")}}-Ereignis gesendet.

## Beispiele

### Grundlegendes Beispiel zur Fehlerbehandlung

Diese Funktion erstellt und gibt einen `MediaRecorder` für einen gegebenen {{domxref("MediaStream")}} zurück, der so konfiguriert ist, dass Daten in einem Array gepuffert und auf Fehler überwacht werden.

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

Dieses Merkmal ist nicht mehr Teil einer Spezifikation und nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
