---
title: "MediaStreamTrack: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: f093b1f6c77c5f8fd86965af97d91f49d6b758d6
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen `MediaStreamTrack` basierend auf der Plattform und dem {{Glossary("user_agent", "User-Agent")}} beschreibt.

Sobald Sie wissen, welche Fähigkeiten der Browser hat, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track so konfiguriert wird, dass er idealen oder akzeptablen Einstellungen entspricht. Weitere Einzelheiten zur Arbeit mit einschränkbaren Eigenschaften finden Sie unter [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das den akzeptierten Wert oder Wertebereich für jede der einschränkbaren Eigenschaften des User-Agents angibt. Beachten Sie, dass nicht jede Eigenschaft bei jedem Track vorhanden ist, die verfügbaren Mitglieder hängen davon ab, ob der Track Audio oder Video ist. Dies kann die folgenden Mitglieder enthalten:

Für sowohl Audio- als auch Videotracks:

- `deviceId`
  - : Ein String, der das Aufnahmegerät identifiziert.
- `groupId`
  - : Ein String, der verwandte Geräte gruppiert.

> [!NOTE]
> Aus historischen Gründen sind diese beiden Eigenschaften Strings statt eines Arrays von Strings wie alle anderen Fähigkeiten.

Nur für Audiotracks:

- `autoGainControl`
  - : Ein Array von Booleans. Wenn die Quelle keine automatische Verstärkungsregelung durchführen kann, wird ein einzelnes `false` gemeldet. Wenn die automatische Verstärkungsregelung nicht deaktiviert werden kann, wird ein einzelnes `true` gemeldet. Wenn das Skript die Funktion steuern kann, meldet die Quelle sowohl `true` als auch `false`.
- `channelCount`
  - : Ein Bereichsobjekt mit einer `min`- und einer `max`-Eigenschaft (beide enthalten eine nicht-negative Ganzzahl), die die unterstützte Anzahl von Kanälen beschreibt.
- `echoCancellation`
  - : Ein Array von Booleans oder Strings, das angibt, ob Echounterdrückung unterstützt wird. Wenn die Quelle keine Echounterdrückung durchführen kann, wird ein einzelnes `false` gemeldet. Kann die Quelle Echounterdrückung durchführen, beginnt das Array mit `true`. Kann das Skript die Funktion steuern, beginnt das Array mit `true, false`. Zusätzliche Werte `"all"` und/oder `"remote-only"` sind enthalten, wenn die Quelle die Steuerung erlaubt, welche Audioquellen unterdrückt werden.
- `latency`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die die erwartete Latenz in Sekunden beschreibt, vom Start des Tons bis die Daten verfügbar werden.
- `noiseSuppression`
  - : Ein Array von Booleans, das angibt, ob Rauschunterdrückung verfügbar ist. Wenn die Quelle keine Rauschunterdrückung durchführen kann, wird ein einzelnes `false` gemeldet. Kann Rauschunterdrückung nicht deaktiviert werden, wird ein einzelnes `true` gemeldet. Kann das Skript die Funktion steuern, meldet die Quelle sowohl `true` als auch `false`.
- `sampleRate`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Bereich für die Audio-Sample-Rate beschreibt.
- `sampleSize`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Bereich für die lineare Sample-Größe in Bits beschreibt.

Nur für Videotracks:

- `aspectRatio`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die den unterstützten Bereich des Video-Seitenverhältnisses beschreibt (Breite geteilt durch Höhe).
- `facingMode`
  - : Ein Array von Strings, das die Kameraausrichtung angibt. Siehe [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) für unterstützte Werte. Bei einigen Geräten können mehr als ein Modus gemeldet werden; zum Beispiel bei einer High-End-Telepräsenzlösung mit mehreren Kameras, die auf den Benutzer gerichtet sind, kann eine Kamera links vom Benutzer sowohl `"left"` als auch `"user"` melden.
- `frameRate`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine Zahl), die den unterstützten Bereich für Bilder pro Sekunde beschreibt.
- `height`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Höhenbereich in Pixeln beschreibt.
- `width`
  - : Ein Bereichsobjekt, das eine `min`- und eine `max`-Eigenschaft enthält (beide enthalten eine nicht-negative Ganzzahl), die den unterstützten Breitenbereich in Pixeln beschreibt.
- `resizeMode`
  - : Ein Array von Strings, das angibt, wie der User-Agent die gewünschte Auflösung von der Kameraauflösung ableiten kann. Siehe [`MediaTrackConstraints.resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) für unterstützte Werte. Der Wert `"none"` ist immer enthalten.

Für mehr Informationen darüber, was jede Eigenschaft bedeutet, siehe [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints).

## Beispiele

Das folgende Beispiel führt dazu, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wurde, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreiben:

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

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), das ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
