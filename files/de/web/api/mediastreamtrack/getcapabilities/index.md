---
title: "MediaStreamTrack: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen `MediaStreamTrack` basierend auf der Plattform und dem {{Glossary("user_agent", "User-Agent")}} beschreibt.

Sobald Sie wissen, welche Fähigkeiten der Browser hat, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track konfiguriert wird, um ideale oder akzeptable Einstellungen zu erfüllen. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details, wie mit einschränkbaren Eigenschaften gearbeitet wird.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das die akzeptierte Werte oder den Wertebereich unterstützt, der für jede der einschränkbaren Eigenschaften des User-Agents gilt. Beachten Sie, dass nicht jede Eigenschaft auf jedem Track erscheint; die verfügbaren Mitglieder hängen davon ab, ob der Track Audio oder Video ist. Dies kann die folgenden Mitglieder enthalten:

Für sowohl Audio- als auch Video-Tracks:

- `deviceId`
  - : Ein String, der das Aufnahmengerät identifiziert.
- `groupId`
  - : Ein String, der verwandte Geräte gruppiert.

> [!NOTE]
> Aus historischen Gründen sind diese beiden Eigenschaften Strings anstelle eines Arrays von Strings wie alle anderen Fähigkeiten.

Nur für Audio-Tracks:

- `autoGainControl`
  - : Ein Array von Booleans. Wenn die Quelle keine automatische Verstärkungsregelung durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die automatische Verstärkungsregelung nicht ausgeschaltet werden kann, wird ein einzelnes `true` gemeldet. Wenn das Skript das Feature steuern kann, meldet die Quelle sowohl `true` als auch `false`.
- `channelCount`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die die unterstützte Anzahl von Kanälen beschreibt.
- `echoCancellation`
  - : Ein Array von Booleans oder Strings, das anzeigt, ob Echokompensation unterstützt wird. Wenn die Quelle keine Echokompensation durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die Quelle Echokompensation durchführen kann, beginnt das Array mit `true`. Wenn das Skript das Feature steuern kann, beginnt das Array mit `true, false`. Zusätzlich, wenn die Quelle die Kontrolle darüber erlaubt, welche Audioquellen kompensiert werden, enthält das Array auch die Werte `"all"` und/oder `"remote-only"`.
- `latency`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die die erwartete Verzögerung in Sekunden beschreibt, vom Zeitpunkt, an dem der Klang beginnt, bis die Daten verfügbar werden.
- `noiseSuppression`
  - : Ein Array von Booleans, das angibt, ob Rauschunterdrückung verfügbar ist. Wenn die Quelle keine Rauschunterdrückung durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die Rauschunterdrückung nicht ausgeschaltet werden kann, wird ein einzelnes `true` gemeldet. Wenn das Skript das Feature steuern kann, meldet die Quelle sowohl `true` als auch `false`.
- `sampleRate`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Bereich der Audio-Samplerate beschreibt.
- `sampleSize`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten linearen Abtastgrößenbereich in Bits beschreibt.

Nur für Video-Tracks:

- `aspectRatio`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die den unterstützten Seitenverhältnisbereich des Videos beschreibt (Breite geteilt durch Höhe).
- `facingMode`
  - : Ein Array von Strings, das die Kameraorientierung angibt. Siehe [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) für unterstützte Werte. Auf einigen Geräten können mehr als ein Modus der Kameraausrichtung gemeldet werden; zum Beispiel, in einer hochwertigen Telepräsenzlösung mit mehreren Kameras, die den Benutzer anblicken, kann eine Kamera links vom Benutzer sowohl `"left"` als auch `"user"` melden.
- `frameRate`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die den unterstützten Bereich von Frames pro Sekunde beschreibt.
- `height`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Höhenbereich in Pixeln beschreibt.
- `width`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Breitenbereich in Pixeln beschreibt.
- `resizeMode`
  - : Ein Array von Strings, das angibt, wie der User-Agent die gewünschte Auflösung von der Kameraauflösung ableiten kann. Siehe [`MediaTrackConstraints.resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) für unterstützte Werte. Der Wert `"none"` ist immer enthalten.

Für weitere Informationen darüber, was jede Eigenschaft bedeutet, siehe [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints).

## Beispiele

Der folgende Ausschnitt wird dazu führen, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wurde, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitenobjekt sieht so aus:

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

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), das auch ein `MediaTrackCapabilities`-Objekt zurückgibt.
