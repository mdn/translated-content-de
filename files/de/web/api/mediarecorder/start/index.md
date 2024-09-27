---
title: "MediaRecorder: start()-Methode"
short-title: start()
slug: Web/API/MediaRecorder/start
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("MediaStream Recording")}}

Die **`start()`**-Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces beginnt mit der Aufnahme von Medien in ein oder mehrere [`Blob`](/de/docs/Web/API/Blob)-Objekte.

Sie können die gesamte Dauer des Mediums in einem einzigen `Blob` aufnehmen (oder bis Sie [`requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen), oder Sie können die Anzahl der Millisekunden angeben, die gleichzeitig aufgezeichnet werden sollen. Jedes Mal, wenn diese Menge an Medien aufgezeichnet wurde, wird ein Ereignis ausgelöst, das es Ihnen ermöglicht, auf die aufgezeichneten Medien zu reagieren, während ein neues `Blob` erstellt wird, um den nächsten Abschnitt des Mediums aufzuzeichnen.

Angenommen, der [`state`](/de/docs/Web/API/MediaRecorder/state) des `MediaRecorders` ist `inactive`, setzt `start()` den `state` auf `recording` und beginnt dann, Medien aus dem Eingabestrom zu erfassen. Ein `Blob` wird erstellt und die Daten darin gesammelt, bis der Zeitabschnitt abläuft oder das Quellmedium endet. Jedes Mal, wenn ein `Blob` bis zu diesem Punkt gefüllt ist (der Zeitabschnittsdauer oder das Ende des Mediums, wenn keine Abschnittsdauer angegeben wurde), wird ein [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis an den `MediaRecorder` mit den aufgenommenen Daten gesendet. Wenn die Quelle noch abgespielt wird, wird ein neues `Blob` erstellt und die Aufnahme geht darin weiter, und so weiter.

Wenn der Quellstrom endet, wird der `state` auf `inactive` gesetzt und die Datenerfassung stoppt. Ein abschließendes [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis wird an den `MediaRecorder` gesendet, gefolgt von einem [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis.

> [!NOTE]
> Wenn der Browser nicht in der Lage ist, die Aufnahme zu starten oder fortzusetzen, wird ein [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis ausgelöst, gefolgt von einem [`dataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event)-Ereignis, das das gesammelte `Blob` enthält, gefolgt von dem [`stop`](/de/docs/Web/API/MediaRecorder/stop_event)-Ereignis.

## Syntax

```js-nolint
start()
start(timeslice)
```

### Parameter

- `timeslice` {{optional_inline}}

  - : Die Anzahl der Millisekunden, die in jedes [`Blob`](/de/docs/Web/API/Blob) aufgenommen werden sollen. Wenn dieser Parameter nicht enthalten ist, wird die gesamte Mediendauer in einem einzigen `Blob` aufgezeichnet, es sei denn, die Methode [`requestData()`](/de/docs/Web/API/MediaRecorder/requestData) wird aufgerufen, um das `Blob` zu erhalten und die Erstellung eines neuen `Blob` auszulösen, in das das Medium weiter aufgenommen wird.

    > [!NOTE]
    > Wie andere Zeitwerte in Web-APIs ist `timeslice` nicht genau und die tatsächlichen Intervalle können aufgrund anderer anstehender Aufgaben vor der Erstellung des nächsten Blobs etwas länger sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Fehler, die sofort erkannt werden können, werden als DOM-Ausnahmen geworfen. Alle anderen Fehler werden über [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignisse gemeldet, die an das `MediaRecorder`-Objekt gesendet werden. Sie können den [`onerror`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignishandler implementieren, um auf diese Fehler zu reagieren.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn sich der `MediaRecorder` nicht im `inactive`-Zustand befindet; Sie können die Medienaufnahme nicht starten, wenn bereits aufgenommen wird. Siehe die [`state`](/de/docs/Web/API/MediaRecorder/state)-Eigenschaft.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Der Mediastream, den Sie aufzuzeichnen versuchen, inaktiv ist.
    - Eine oder mehrere Spuren des Streams in einem Format sind, das mit der aktuellen Konfiguration nicht aufgezeichnet werden kann.
    - Die Parameter `videoKeyFrameIntervalDuration` und `videoKeyFrameIntervalCount` beide bei der Erstellung des `MediaRecorder` angegeben sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der [`MediaStream`](/de/docs/Web/API/MediaStream) so konfiguriert ist, dass er die Aufnahme nicht zulässt. Dies kann z.B. der Fall sein, wenn Quellen mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten werden, wenn der Benutzer die Erlaubnis zur Verwendung eines Eingabegeräts verweigert. Diese Ausnahme kann auch als [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignis übermittelt werden, wenn sich die Sicherheitsoptionen für das Quellmedium nach Beginn der Aufnahme ändern.

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
