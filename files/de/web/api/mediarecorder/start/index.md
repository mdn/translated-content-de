---
title: "MediaRecorder: start()-Methode"
short-title: start()
slug: Web/API/MediaRecorder/start
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Die **`start()`**-Methode des {{domxref("MediaRecorder")}}-Interfaces beginnt mit der Aufzeichnung von Medien in einem oder mehreren {{domxref("Blob")}}-Objekten.

Sie können die gesamte Dauer des Mediums in einem einzigen `Blob` aufzeichnen (oder bis Sie {{domxref("MediaRecorder.requestData", "requestData()")}} aufrufen), oder Sie können die Anzahl der Millisekunden angeben, die jeweils aufgezeichnet werden sollen. Dann wird jedes Mal, wenn diese Menge an Medien aufgezeichnet wurde, ein Ereignis ausgelöst, um Sie auf die aufgezeichneten Medien reagieren zu lassen, während ein neues `Blob` erstellt wird, um den nächsten Abschnitt des Mediums aufzuzeichnen.

Angenommen, der {{domxref("MediaRecorder.state", "Zustand")}} des `MediaRecorders` ist `inactive`, setzt `start()` den `Zustand` auf `recording` und beginnt dann, Medien aus dem Input-Stream aufzunehmen. Ein `Blob` wird erstellt und die Daten werden darin gesammelt, bis der Zeitraum der Scheibe abgelaufen ist oder die Quellmedien enden. Jedes Mal, wenn ein `Blob` bis zu diesem Punkt gefüllt wird (die Dauer der Scheibe oder das Ende der Medien, wenn keine Scheibendauer angegeben wurde), wird ein {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis mit den aufgezeichneten Daten an den `MediaRecorder` gesendet. Wenn die Quelle noch läuft, wird ein neues `Blob` erstellt und die Aufzeichnung wird darin fortgesetzt, und so weiter.

Wenn der Quellstream endet, wird der `Zustand` auf `inactive` gesetzt und das Datensammeln gestoppt. Ein abschließendes {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis wird an den `MediaRecorder` gesendet, gefolgt von einem {{domxref("MediaRecorder/stop_event", "stop")}}-Ereignis.

> [!NOTE]
> Wenn der Browser nicht in der Lage ist, mit der Aufnahme zu beginnen oder die Aufnahme fortzusetzen, wird ein {{domxref("MediaRecorder.error_event", "error")}}-Ereignis ausgelöst, gefolgt von einem {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis, das das gesammelte `Blob` enthält, gefolgt vom {{domxref("MediaRecorder/stop_event", "stop")}}-Ereignis.

## Syntax

```js-nolint
start()
start(timeslice)
```

### Parameter

- `timeslice` {{optional_inline}}

  - : Die Anzahl der Millisekunden, die in jedes {{domxref("Blob")}} aufgezeichnet werden sollen. Wenn dieser Parameter nicht enthalten ist, wird die gesamte Mediendauer in einem einzigen `Blob` aufgezeichnet, es sei denn, die {{domxref("MediaRecorder.requestData", "requestData()")}}-Methode wird aufgerufen, um das `Blob` zu erhalten und die Erstellung eines neuen `Blobs` auszulösen, in das die Medien weiterhin aufgezeichnet werden.

    > [!NOTE]
    > Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben vor der Erstellung des nächsten Blobs etwas länger sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Fehler, die sofort erkannt werden können, werden als DOM-Ausnahmen geworfen. Alle anderen Fehler werden über {{domxref("MediaRecorder.error_event", "error")}}-Ereignisse an das `MediaRecorder`-Objekt gemeldet. Sie können den {{domxref("MediaRecorder.error_event", "onerror")}}-Ereignishandler implementieren, um auf diese Fehler zu reagieren.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `MediaRecorder` nicht im `inactive`-Zustand ist; Sie können keine Medien aufzeichnen, wenn sie bereits aufgezeichnet werden. Siehe die {{domxref("MediaRecorder.state", "Zustands")}}-Eigenschaft.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - Der Medienstream, den Sie aufzuzeichnen versuchen, inaktiv ist.
    - Einer oder mehrere der Tracks des Streams in einem Format vorliegen, das mit der aktuellen Konfiguration nicht aufgezeichnet werden kann.
    - Die Parameter `videoKeyFrameIntervalDuration` und `videoKeyFrameIntervalCount` beide beim Erstellen des `MediaRecorders` angegeben werden.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("MediaStream")}} so konfiguriert ist, dass die Aufnahme nicht gestattet ist. Dies kann der Fall sein, wenn z.B. Quellen mithilfe von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} bezogen werden und der Benutzer die Erlaubnis zur Nutzung eines Eingabegeräts verweigert. Diese Ausnahme kann auch als {{domxref("MediaRecorder.error_event", "error")}}-Ereignis übermittelt werden, wenn sich die Sicherheitsoptionen für die Quellmedien nach Beginn der Aufzeichnung ändern.

## Beispiele

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("recorder started");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
