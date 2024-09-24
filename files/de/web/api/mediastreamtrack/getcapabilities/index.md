---
title: "MediaStreamTrack: getCapabilities()-Methode"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode der {{domxref("MediaStreamTrack")}}-Schnittstelle gibt ein `MediaTrackCapabilities`-Objekt zurück, das die Werte oder den Bereich von Werten angibt, die jede einschränkbare Eigenschaft basierend auf der Plattform und dem {{Glossary("user agent")}} haben kann.

Sobald Sie wissen, welche Fähigkeiten der Browser hat, kann Ihr Skript {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} verwenden, um zu verlangen, dass die Spur so konfiguriert wird, dass sie den idealen oder akzeptablen Einstellungen entspricht. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Einzelheiten darüber, wie man mit einschränkbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das die Werte oder den Bereich von Werten angibt, die für jede der einschränkbaren Eigenschaften, die der Benutzeragent unterstützt, unterstützt werden, und die folgenden Mitglieder enthält:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle automatische Verstärkungsregelung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, meldet die Quelle sowohl true als auch false als mögliche Werte.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Kanalanzahl oder den Bereich von Kanalanzahlen enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Echounterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, meldet die Quelle sowohl true als auch false als mögliche Werte.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Latenz oder den Bereich von Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Rauschunterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, meldet die Quelle sowohl true als auch false als mögliche Werte.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastrate oder den Bereich von Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastgröße oder den Bereich von Abtastgrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das das Video-{{glossary("aspect ratio")}} (Verhältnis von Breite in Pixel zu Höhe in Pixel) oder den Bereich von Seitenverhältnissen enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kameramodus enthält. Eine Kamera kann mehrere Ausrichtungen melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Bildrate oder den Bereich von Bildraten enthält, die akzeptabel sind.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videohöhe oder den Bereich von Höhen in Pixeln enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videobreite oder den Bereich von Breiten in Pixeln enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder eine Reihe von Modi enthält, die der Benutzeragent verwenden kann, um die Auflösung der Videospur abzuleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("InputDeviceInfo.getCapabilities()")}}, das ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
