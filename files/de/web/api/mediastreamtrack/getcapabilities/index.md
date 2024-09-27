---
title: "MediaStreamTrack: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt ein `MediaTrackCapabilities`-Objekt zurück, das die Werte oder den Wertebereich für jede einschränkbare Eigenschaft spezifiziert, basierend auf der Plattform und dem [Benutzeragenten](/de/docs/Glossary/user_agent).

Sobald Sie wissen, welche Fähigkeiten der Browser hat, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track so konfiguriert wird, dass er idealen oder akzeptablen Einstellungen entspricht. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details zur Arbeit mit einschränkbaren Eigenschaften.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das den Wert oder den Wertebereich angibt, der für jede der vom Benutzeragenten unterstützten einschränkbaren Eigenschaften unterstützt wird. Es enthält die folgenden Mitglieder:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das berichtet, ob die Quelle eine automatische Verstärkungsregelung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Kanalanzahl oder den Bereich der Kanalanzahlen enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das berichtet, ob die Quelle eine Echounterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Latenz oder den Bereich der Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das berichtet, ob die Quelle eine Rauschunterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastrate oder den Bereich der Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Stichprobengröße oder den Bereich der Stichprobengrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das das Video-Bildseitenverhältnis (Breite in Pixeln geteilt durch Höhe in Pixeln) oder den Bereich von Bildseitenverhältnissen enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kameramodus enthält. Eine Kamera kann mehrere Modi melden, beispielsweise "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Bildrate oder den Bereich von Bildraten enthält, die akzeptabel sind.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videohöhe oder den Bereich der Höhen in Pixeln enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videobreite oder den Bereich der Breiten in Pixeln enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder eine Liste der Modi enthält, die der Benutzeragent verwenden kann, um die Auflösung des Videotracks abzuleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), das ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
