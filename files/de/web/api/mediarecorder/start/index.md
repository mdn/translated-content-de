---
title: "MediaRecorder: start() Methode"
short-title: start()
slug: Web/API/MediaRecorder/start
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("MediaStream Recording")}}

Die **`start()`**-Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces beginnt mit der Aufnahme von Medien in ein oder mehrere [`Blob`](/de/docs/Web/API/Blob)-Objekte.

Sie können die gesamte Dauer des Mediums in einem einzelnen `Blob` aufzeichnen (oder bis Sie [`requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen), oder Sie können die Anzahl der Millisekunden angeben, die jeweils aufgezeichnet werden sollen. Jedes Mal, wenn dieser Zeitraum von Medien aufgezeichnet wurde, wird ein Ereignis ausgelöst, das es Ihnen ermöglicht, die aufgenommenen Medien zu verarbeiten, während ein neues `Blob` erstellt wird, um den nächsten Abschnitt des Mediums aufzuzeichnen.

Angenommen, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorders` ist `inactive`, dann setzt `start()` den `state` auf `recording` und beginnt mit der Erfassung von Medien aus dem Eingabestream. Ein `Blob` wird erstellt und die Daten werden darin gesammelt, bis der Zeitabschnitt endet oder das Quellmedium endet. Jedes Mal, wenn ein `Blob` bis zu diesem Punkt gefüllt ist (die Zeitabschnittsdauer oder das Ende des Mediums, wenn keine Zeitabschnittsdauer angegeben wurde), wird ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis an den `MediaRecorder` mit den aufgezeichneten Daten gesendet. Wenn die Quelle noch abgespielt wird, wird ein neues `Blob` erstellt und die Aufnahme wird darin fortgesetzt, und so weiter.

Wenn der Quellstream endet, wird `state` auf `inactive` gesetzt und die Datenerfassung stoppt. Ein endgültiges [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` gesendet, gefolgt von einem [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis.

> [!NOTE]
> Wenn der Browser nicht in der Lage ist, die Aufnahme zu starten oder fortzusetzen, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis ausgelöst, gefolgt von einem [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis, das das gesammelte `Blob` enthält, gefolgt vom [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis.

## Syntax

```js-nolint
start()
start(timeslice)
```

### Parameter

- `timeslice` {{optional_inline}}

  - : Die Anzahl der Millisekunden, die in jedes [`Blob`](/de/docs/Web/API/Blob) aufgezeichnet werden sollen. Wenn dieser Parameter nicht angegeben wird, wird die gesamte Dauer des Mediums in einem einzelnen `Blob` aufgezeichnet, es sei denn, die Methode [`requestData()`](/de/docs/Web/API/MediaRecorder/requestData) wird aufgerufen, um das `Blob` zu erhalten und die Erstellung eines neuen `Blob`, in das die Medien weiterhin aufgezeichnet werden, auszulösen.

    > [!NOTE]
    > Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht exakt und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben vor der Erstellung des nächsten Blob geringfügig länger sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Fehler, die sofort erkannt werden können, werden als DOM-Ausnahmen ausgelöst. Alle anderen Fehler werden durch [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignisse gemeldet, die an das `MediaRecorder`-Objekt gesendet werden. Sie können den [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler implementieren, um auf diese Fehler zu reagieren.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `MediaRecorder` nicht im `inactive`-Zustand ist; Sie können die Medienaufnahme nicht starten, wenn sie bereits aufgezeichnet werden. Siehe die [`state`](/de/docs/Web/API/MediaRecorder/state)-Eigenschaft.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Medienstream, den Sie aufzeichnen möchten, inaktiv ist.
    - Einer oder mehrere der Tracks des Streams in einem Format vorliegen, das mit der aktuellen Konfiguration nicht aufgezeichnet werden kann.
    - Der Parameter `videoKeyFrameIntervalDuration` und `videoKeyFrameIntervalCount` beim Erstellen des `MediaRecorders` beide angegeben sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`MediaStream`](/de/docs/Web/API/MediaStream) so konfiguriert ist, dass die Aufnahme nicht erlaubt ist. Dies kann zum Beispiel der Fall sein bei Quellen, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden, wenn der Benutzer die Erlaubnis zur Nutzung eines Eingabegeräts verweigert. Diese Ausnahme kann auch als [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis geliefert werden, wenn sich die Sicherheitsoptionen für die Quellmedien nach Beginn der Aufnahme ändern.

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
