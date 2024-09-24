---
title: "MediaRecorder: Methode requestData()"
short-title: requestData()
slug: Web/API/MediaRecorder/requestData
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`requestData()`**-Methode des {{domxref("MediaRecorder")}}-Interfaces wird verwendet, um ein {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis zu erzeugen, das ein {{domxref("Blob")}}-Objekt der erfassten Medien enthält, wie sie zum Zeitpunkt des Aufrufs der Methode waren. Dies kann dann nach Belieben erfasst und bearbeitet werden.

Wenn die Methode `requestData()` aufgerufen wird, reiht der Browser eine Aufgabe ein, die die folgenden Schritte ausführt:

1. Wenn {{domxref("MediaRecorder.state")}} "inactive" ist, lösen Sie einen DOM-`InvalidState`-Fehler aus und beenden diese Schritte. Ist {{domxref("MediaRecorder.state")}} nicht "inactive", fahren Sie mit dem nächsten Schritt fort.
2. Erzeugen Sie ein {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}}-Ereignis, das ein {{domxref("Blob")}} der aktuell erfassten Daten enthält (das Blob steht unter dem `data`-Attribut des Ereignisses zur Verfügung).
3. Erstellen Sie ein neues Blob und platzieren Sie die anschließend erfassten Daten darin.

## Syntax

```js-nolint
requestData()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `MediaRecorder` derzeit `"inactive"` ist; Sie können die Aufnahme nicht erfassen, wenn der `MediaRecorder` nicht aktiv ist.

## Beispiele

```js
captureMedia.onclick = () => {
  mediaRecorder.requestData();
  // macht einen Schnappschuss der bisher erfassten Daten verfügbar
  // ondataavailable wird ausgelöst, dann setzt die Erfassung
  // in einem neuen Blob fort
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia()")}}
