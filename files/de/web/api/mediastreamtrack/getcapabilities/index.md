---
title: "MediaStreamTrack: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`** Methode der
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Schnittstelle gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede begrenzbare Eigenschaft des zugehörigen `MediaStreamTrack` beschreibt, basierend auf der Plattform und dem {{Glossary("user_agent", "User-Agent")}}.

Sobald Sie wissen, was die Fähigkeiten des Browsers sind, kann Ihr Skript
[`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track so konfiguriert wird, dass er ideale oder akzeptable Einstellungen erfüllt. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details, wie man mit begrenzbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities` Objekt, das den akzeptierten Wert oder den Wertebereich für jede begrenzbare Eigenschaft des User-Agents angibt. Dies kann die folgenden Mitglieder enthalten:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle automatisch die Verstärkung des Eingangssignals steuern kann. Wenn die Funktion von einem Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) Objekt, das die Kanalanzahl oder den Kanalanzahlbereich enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle Echo-Unterdrückung bereitstellen kann. Wenn die Funktion von einem Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) Objekt, das die Latenz oder den Latenzbereich enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle Rauschunterdrückung bereitstellen kann. Wenn die Funktion von einem Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) Objekt, das die Abtastrate oder den Abtastratebereich enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) Objekt, das die Abtastgröße oder den Abtastgrößenbereich enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) Objekt, das das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} (Breite in Pixeln geteilt durch Höhe in Pixeln) oder den Seitenverhältnisbereich enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das den Kameramodus enthält. Eine Kamera kann mehrere Modus-Werte melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) Objekt, das die Bildrate oder den Bildratenbereich angibt, der akzeptabel ist.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) Objekt, das die Videohöhe oder den Höhenbereich in Pixeln enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) Objekt, das die Videobreite oder den Breitenbereich in Pixeln enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das den Modus oder eine Liste von Modi enthält, die der User-Agent verwenden kann, um die Auflösung des Videotracks abzuleiten.

## Beispiele

Das folgende Fragment führt dazu, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt ist, werden `MediaTrackCapabilities` Objekte in die Konsole protokolliert, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitenobjekt sieht folgendermaßen aus:

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

Der genaue Inhalt des Objekts hängt vom Browser und der Medien-Hardware ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), das ebenfalls ein `MediaTrackCapabilities` Objekt zurückgibt.
