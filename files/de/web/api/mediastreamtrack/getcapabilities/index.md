---
title: "MediaStreamTrack: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: c26d4cc8e9b10c504587531c49fa82b7b646be18
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`** Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Schnittstelle gibt ein Objekt zurück, das die akzeptierten Werte oder Wertbereiche für jede begrenzbare Eigenschaft des zugehörigen `MediaStreamTrack` auf der Grundlage der Plattform und des {{Glossary("user_agent", "User-Agent")}} beschreibt.

Sobald Sie wissen, welche Fähigkeiten der Browser hat, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track konfiguriert wird, um ideale oder akzeptable Einstellungen zu erfüllen. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details zum Arbeiten mit begrenzbaren Eigenschaften.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities` Objekt, das die akzeptierten Werte oder Wertbereiche angibt, die für jede der durch den User-Agent begrenzbaren Eigenschaften unterstützt werden. Beachten Sie, dass nicht jede Eigenschaft auf jedem Track erscheint; die verfügbaren Mitglieder hängen davon ab, ob der Track Audio oder Video ist. Dies kann die folgenden Mitglieder enthalten:

Für sowohl Audio- als auch Videotracks:

- `deviceId`
  - : Ein String, der das Aufzeichnungsgerät identifiziert.
- `groupId`
  - : Ein String, der verwandte Geräte gruppiert.

> [!NOTE]
> Aus historischen Gründen sind diese beiden Eigenschaften Strings anstelle eines Arrays von Strings wie alle anderen Fähigkeiten.

Nur für Audiotracks:

- `autoGainControl`
  - : Ein Array von Booleans. Wenn die Quelle keine automatische Verstärkungsregelung durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die automatische Verstärkungsregelung nicht ausgeschaltet werden kann, wird ein einzelnes `true` gemeldet. Wenn das Skript die Funktion steuern kann, meldet die Quelle sowohl `true` als auch `false`.
- `channelCount`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die die unterstützte Anzahl von Kanälen beschreibt.
- `echoCancellation`
  - : Ein Array von Booleans oder Strings, das angibt, ob Echokompensation unterstützt wird. Wenn die Quelle keine Echokompensation durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die Quelle Echokompensation durchführen kann, beginnt das Array mit `true`. Wenn das Skript die Funktion steuern kann, beginnt das Array mit `true, false`. Zusätzlich, wenn die Quelle erlaubt, welche Audioquellen kompensiert werden sollen, enthält das Array auch die Werte `"all"` und/oder `"remote-only"`.
- `latency`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine Zahl), die die erwartete Latenzzeit in Sekunden von dem Zeitpunkt, an dem der Ton startet, bis die Daten verfügbar werden, beschreibt.
- `noiseSuppression`
  - : Ein Array von Booleans, das angibt, ob Geräuschunterdrückung verfügbar ist. Wenn die Quelle keine Geräuschunterdrückung durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die Geräuschunterdrückung nicht ausgeschaltet werden kann, wird ein einzelnes `true` gemeldet. Wenn das Skript die Funktion steuern kann, meldet die Quelle sowohl `true` als auch `false`.
- `sampleRate`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Bereich der Abtastrate beschreibt.
- `sampleSize`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten linearen Abtastgrößenbereich in Bits beschreibt.

Nur für Videotracks:

- `aspectRatio`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine Zahl), die den unterstützten Bereich des Seitenverhältnisses (Breite geteilt durch Höhe) beschreibt.
- `facingMode`
  - : Ein Array von Strings, das die Kamerarichtung angibt. Siehe [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) für unterstützte Werte. Auf einigen Geräten können mehr als ein Modus gemeldet werden; zum Beispiel kann eine Kamera links vom Benutzer in einer High-End-Telepräsenzlösung mit mehreren Kameras, die den Benutzer fokussieren, sowohl `"left"` als auch `"user"` melden.
- `frameRate`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine Zahl), die den unterstützten Bereich der Bilder pro Sekunde beschreibt.
- `height`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Höhenbereich in Pixel beschreibt.
- `width`
  - : Ein Objekt, das einen Bereich enthält, mit einer `min` und einer `max` Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Breitenbereich in Pixel beschreibt.
- `resizeMode`
  - : Ein Array von Strings, das angibt, wie der User-Agent die gewünschte Auflösung von der Kameraauflösung ableiten kann. Siehe [`MediaTrackConstraints.resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) für unterstützte Werte. Der Wert `"none"` ist immer enthalten.

Für weitere Informationen, was jede Eigenschaft bedeutet, siehe [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints).

## Beispiele

Der folgende Code-Schnipsel führt dazu, dass der Benutzer gefragt wird, ob er der lokalen Kamera und dem Mikrofon Zugriff gewähren möchte. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities` Objekte in die Konsole geloggt, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeiten-Objekt sieht so aus:

```json
{
  "autoGainControl": [true, false],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [true, false],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [true, false]
}
```

Der genaue Inhalt des Objekts hängt vom Browser und der Medienhardware ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), welches ebenfalls ein `MediaTrackCapabilities` Objekt zurückgibt.
