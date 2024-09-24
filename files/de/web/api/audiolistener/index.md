---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{ APIRef("Web Audio API") }}

Die `AudioListener`-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die die Audioszene hört, und wird in der [Audio-Raumklangberechnung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) verwendet. Alle [`PannerNode`](/de/docs/Web/API/PannerNode)s räumlich berechnen sich in Bezug auf den `AudioListener`, der im [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Attribut gespeichert ist.

Es ist wichtig zu beachten, dass es pro Kontext nur einen Listener gibt und dass dieser kein [`AudioNode`](/de/docs/Web/API/AudioNode) ist.

![Wir sehen die Position, die Aufwärts- und Frontvektoren eines AudioListeners, wobei die Aufwärts- und Frontvektoren einen Winkel von 90° haben.](webaudiolistenerreduced.png)

## Instanz-Eigenschaften

> [!NOTE]
> Die Position, die Vorwärts- und die Aufwärtswerte werden mit unterschiedlichen Syntaxen gesetzt und abgerufen. Der Abruf erfolgt durch Zugreifen auf z. B. `AudioListener.positionX`, während das Setzen derselben Eigenschaft mit `AudioListener.positionX.value` erfolgt. Aus diesem Grund sind diese Werte nicht als schreibgeschützt markiert, wie es im IDL der Spezifikation erscheint.

- [`AudioListener.positionX`](/de/docs/Web/API/AudioListener/positionX)
  - : Repräsentiert die horizontale Position des Hörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionY`](/de/docs/Web/API/AudioListener/positionY)
  - : Repräsentiert die vertikale Position des Hörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionZ`](/de/docs/Web/API/AudioListener/positionZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des Hörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX)
  - : Repräsentiert die horizontale Richtungsposition des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardY`](/de/docs/Web/API/AudioListener/forwardY)
  - : Repräsentiert die vertikale Richtungsposition des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardZ`](/de/docs/Web/API/AudioListener/forwardZ)
  - : Repräsentiert die longitudinale (vor und zurück) Richtungsposition des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist -1.
- [`AudioListener.upX`](/de/docs/Web/API/AudioListener/upX)
  - : Repräsentiert die horizontale Position des oberen Teils des Kopfes des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.upY`](/de/docs/Web/API/AudioListener/upY)
  - : Repräsentiert die vertikale Position des oberen Teils des Kopfes des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist 1.
- [`AudioListener.upZ`](/de/docs/Web/API/AudioListener/upZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des oberen Teils des Kopfes des Hörers im gleichen kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear unabhängig voneinander. Der Standardwert ist 0.

## Instanz-Methoden

- [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation) {{deprecated_inline}}
  - : Legt die Ausrichtung des Hörers fest.
- [`AudioListener.setPosition()`](/de/docs/Web/API/AudioListener/setPosition) {{deprecated_inline}}
  - : Legt die Position des Hörers fest.

> [!NOTE]
> Obwohl diese Methoden veraltet sind, sind sie derzeit die einzige Möglichkeit, die Ausrichtung und Position in Firefox festzulegen (siehe [Firefox-Bug 1283029](https://bugzil.la/1283029)).

## Veraltete Funktionen

Die Methoden `setOrientation()` und `setPosition()` wurden durch das Setzen ihrer äquivalenten Eigenschaftswerte ersetzt. Zum Beispiel kann `setPosition(x, y, z)` durch das Setzen von `positionX.value`, `positionY.value` und `positionZ.value` erreicht werden.

## Beispiel

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
