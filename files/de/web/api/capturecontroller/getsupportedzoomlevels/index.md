---
title: "CaptureController: Methode getSupportedZoomLevels()"
short-title: getSupportedZoomLevels()
slug: Web/API/CaptureController/getSupportedZoomLevels
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getSupportedZoomLevels()`**-Methode der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle gibt die verschiedenen Zoomstufen zurück, die die erfasste Anzeigefläche unterstützt.

## Syntax

```js-nolint
getSupportedZoomLevels()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zahlen, das die verschiedenen Zoomstufen darstellt, die die erfasste Anzeigefläche unterstützt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der erfasste [`MediaStream`](/de/docs/Web/API/MediaStream), der durch den ursprünglich aufgerufenen [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufruf zurückgegeben wurde, erfasst nicht mehr, z. B. weil die zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte durch Aufruf von [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) gestoppt wurden.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der erfasste Oberflächentyp ist nicht ein Browser-Tab.

## Beispiele

### Grundlegende Nutzung von `getSupportedZoomLevels()`

In unserem Live-Demo, gezeigt in [Using the Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), rufen wir die unterstützten Zoomstufen der erfassten Anzeigefläche ab, indem wir `getSupportedZoomLevels()` ausführen und das resultierende Array in einer Variable namens `zoomLevels` speichern:

```js
const zoomLevels = controller.getSupportedZoomLevels();
```

Dies wird später in einer Funktion namens `updateZoomButtonState()` verwendet. Das Problem, das dadurch gelöst wird, ist, dass, wenn Sie versuchen, unter das minimale unterstützte Zoom-Niveau herauszuzoomen oder über das maximale unterstützte Zoom-Niveau hineinzuzoomen, [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel)/[`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel) einen `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

> [!NOTE]
> Es ist allgemein eine bewährte Praxis, `decreaseZoomLevel()` und `increaseZoomLevel()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufzurufen, da das Zoom-Niveau asynchron von einer anderen Entität als der Anwendung geändert werden könnte, was zu einem Fehler führen könnte. Beispielsweise könnte der Benutzer direkt mit der erfassten Oberfläche interagieren, um ein- oder herauszuzoomen.

Die `updateZoomButtonState()`-Funktion vermeidet dieses Problem, indem sie zuerst sicherstellt, dass die "Zoom out" und "Zoom in" Schaltflächen aktiviert sind. Dann führt sie zwei Überprüfungen durch:

- Wenn das aktuelle Zoom-Niveau dem minimal unterstützten Zoom-Niveau entspricht (das im ersten Wert des `zoomLevels`-Arrays gespeichert ist), deaktivieren wir die "Zoom out" Schaltfläche, damit der Benutzer nicht weiter herauszoomen kann.
- Wenn das aktuelle Zoom-Niveau dem maximal unterstützten Zoom-Niveau entspricht (das im letzten Wert des `zoomLevels`-Arrays gespeichert ist), deaktivieren wir die "Zoom in" Schaltfläche, damit der Benutzer nicht weiter hineinzoomen kann.

```js
function updateZoomButtonState() {
  decBtn.disabled = false;
  incBtn.disabled = false;
  if (controller.zoomLevel === zoomLevels[0]) {
    decBtn.disabled = true;
  } else if (controller.zoomLevel === zoomLevels[zoomLevels.length - 1]) {
    incBtn.disabled = true;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Using the Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
