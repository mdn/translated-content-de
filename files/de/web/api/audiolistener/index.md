---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `AudioListener`-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die die Audio-Szene anhört, und wird bei der [Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) verwendet. Alle [`PannerNode`](/de/docs/Web/API/PannerNode)s räumlich mit Bezug auf den `AudioListener`, der im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist.

Es ist wichtig zu beachten, dass es pro Kontext nur einen Zuhörer gibt und dass dieser kein [`AudioNode`](/de/docs/Web/API/AudioNode) ist.

![Wir sehen die Position, die Auf- und die Vordervektoren eines AudioListeners, wobei die Auf- und Vordervektoren in einem Winkel von 90° zueinander stehen.](webaudiolistenerreduced.png)

## Instanz-Eigenschaften

> [!NOTE]
> Die Werte für Position, Vorwärts und Auf wird mit unterschiedlichen Syntaxen gesetzt und abgerufen. Der Abruf erfolgt über den Zugriff auf z. B. `AudioListener.positionX`, während das Setzen derselben Eigenschaft mit `AudioListener.positionX.value` erfolgt. Deshalb sind diese Werte nicht als schreibgeschützt markiert, wie sie in der Spezifikation des IDL erscheinen.

- [`AudioListener.positionX`](/de/docs/Web/API/AudioListener/positionX)
  - : Repräsentiert die horizontale Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionY`](/de/docs/Web/API/AudioListener/positionY)
  - : Repräsentiert die vertikale Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionZ`](/de/docs/Web/API/AudioListener/positionZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX)
  - : Repräsentiert die horizontale Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardY`](/de/docs/Web/API/AudioListener/forwardY)
  - : Repräsentiert die vertikale Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardZ`](/de/docs/Web/API/AudioListener/forwardZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist -1.
- [`AudioListener.upX`](/de/docs/Web/API/AudioListener/upX)
  - : Repräsentiert die horizontale Position des oberen Teils des Kopfes des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.upY`](/de/docs/Web/API/AudioListener/upY)
  - : Repräsentiert die vertikale Position des oberen Teils des Kopfes des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist 1.
- [`AudioListener.upZ`](/de/docs/Web/API/AudioListener/upZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des oberen Teils des Kopfes des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Auf-Werte sind linear unabhängig voneinander. Der Standardwert ist 0.

## Instanz-Methoden

- [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation) {{deprecated_inline}}
  - : Setzt die Ausrichtung des Zuhörers.
- [`AudioListener.setPosition()`](/de/docs/Web/API/AudioListener/setPosition) {{deprecated_inline}}
  - : Setzt die Position des Zuhörers.

> [!NOTE]
> Obwohl diese Methoden veraltet sind, sind sie derzeit die einzige Möglichkeit, die Ausrichtung und Position in Firefox zu setzen (siehe [Firefox Bug 1283029](https://bugzilla.mozilla.org/show_bug.cgi?id=1283029)).

## Veraltete Funktionen

Die Methoden `setOrientation()` und `setPosition()` wurden durch das Setzen ihrer entsprechenden Eigenschaftswerte ersetzt. Zum Beispiel kann `setPosition(x, y, z)` erreicht werden, indem `positionX.value`, `positionY.value` und `positionZ.value` entsprechend gesetzt werden.

## Beispiel

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
