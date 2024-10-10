---
title: "MediaStreamTrack: getCapabilities()-Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 11135cdbc0715d066b3aa43c98cef25f91285445
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gibt ein Objekt zurück, das die akzeptierten Werte oder Wertbereiche für jede einschränkbare Eigenschaft des zugehörigen `MediaStreamTrack` beschreibt, basierend auf der Plattform und dem {{Glossary("user_agent", "User-Agent")}}.

Sobald Sie wissen, was die Fähigkeiten des Browsers sind, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um für die Anpassung des Tracks an ideale oder akzeptable Einstellungen zu bitten. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details dazu, wie mit einschränkbaren Eigenschaften gearbeitet wird.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das die akzeptierten Werte oder Wertbereiche angibt, die für jede der einschränkbaren Eigenschaften des User-Agents unterstützt werden. Dies kann die folgenden Mitglieder enthalten:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle das Eingangssignal automatisch steuern kann. Wenn das Feature durch ein Skript gesteuert werden kann, meldet die Quelle sowohl true als auch false als mögliche Werte.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Anzahl der Kanäle oder den Bereich der Kanäle enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Echounterdrückung bieten kann. Wenn das Feature durch ein Skript gesteuert werden kann, meldet die Quelle sowohl `true` als auch `false` als mögliche Werte.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das die Latenz oder den Bereich der Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Rauschunterdrückung bieten kann. Wenn das Feature durch ein Skript gesteuert werden kann, meldet die Quelle sowohl `true` als auch `false` als mögliche Werte.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Abtastrate oder den Bereich der Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Abtastgröße oder den Bereich der Abtastgrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} (Breite in Pixeln geteilt durch Höhe in Pixeln) oder den Bereich der Seitenverhältnisse enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kameramodus enthält. Eine Kamera kann mehrere Ausrichtungen melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das die Bildrate oder den Bereich akzeptabler Bildraten enthält.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Videohöhe oder den Bereich, in Pixeln genannt, enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Videobreite oder den Bereich, in Pixeln genannt, enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder ein Array von Modi enthält, die der User-Agent verwenden kann, um die Auflösung der Videospur abzuleiten.

## Beispiele

Der folgende Codeausschnitt führt dazu, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities`-Objekte im Konsolenprotokoll angezeigt, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitenobjekt sieht so aus:

```js
{
  "autoGainControl": [
    true,
    false
  ],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [
    true,
    false
  ],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [
    true,
    false
  ]
}
```

Der genaue Inhalt des Objekts hängt vom Browser und der Medienhardware ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), die ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
