---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Das `AudioListener`-Interface repräsentiert die Position und Ausrichtung der einzigartigen Person, die der Audio-Szene zuhört, und wird bei der [Audioräumlichen Darstellung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) verwendet. Alle [`PannerNode`](/de/docs/Web/API/PannerNode)s räumlich darstellen in Bezug auf den `AudioListener`, der im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist.

Es ist wichtig zu beachten, dass es pro Kontext nur einen Listener gibt und dieser kein [`AudioNode`](/de/docs/Web/API/AudioNode) ist.

![Wir sehen die Position sowie die oberen und vorderen Vektoren eines AudioListeners, wobei die oberen und vorderen Vektoren im Winkel von 90° zueinander stehen.](webaudiolistenerreduced.png)

## Instanz-Eigenschaften

> [!NOTE]
> Der Wert der Position, nach vorne und oben, wird mit unterschiedlichen Syntaxmethoden gesetzt und abgerufen. Das Abrufen erfolgt durch den Zugriff auf z.B. `AudioListener.positionX`, während das Setzen derselben Eigenschaft mit `AudioListener.positionX.value` erfolgt. Aus diesem Grund sind diese Werte nicht als schreibgeschützt markiert, so wie sie in der IDL der Spezifikation erscheinen.

- [`AudioListener.positionX`](/de/docs/Web/API/AudioListener/positionX)
  - : Repräsentiert die horizontale Position des Listeners in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionY`](/de/docs/Web/API/AudioListener/positionY)
  - : Repräsentiert die vertikale Position des Listeners in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionZ`](/de/docs/Web/API/AudioListener/positionZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des Listeners in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX)
  - : Repräsentiert die horizontale Position der Vorwärtsrichtung des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardY`](/de/docs/Web/API/AudioListener/forwardY)
  - : Repräsentiert die vertikale Position der Vorwärtsrichtung des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardZ`](/de/docs/Web/API/AudioListener/forwardZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position der Vorwärtsrichtung des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist -1.
- [`AudioListener.upX`](/de/docs/Web/API/AudioListener/upX)
  - : Repräsentiert die horizontale Position des oberen Teils des Kopfes des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.upY`](/de/docs/Web/API/AudioListener/upY)
  - : Repräsentiert die vertikale Position des oberen Teils des Kopfes des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist 1.
- [`AudioListener.upZ`](/de/docs/Web/API/AudioListener/upZ)
  - : Repräsentiert die longitudinale (vor und zurück) Position des oberen Teils des Kopfes des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und oberen Werte sind linear unabhängig voneinander. Der Standardwert ist 0.

## Instanz-Methoden

- [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation) {{deprecated_inline}}
  - : Legt die Ausrichtung des Listeners fest.
- [`AudioListener.setPosition()`](/de/docs/Web/API/AudioListener/setPosition) {{deprecated_inline}}
  - : Legt die Position des Listeners fest.

> [!NOTE]
> Obwohl diese Methoden als veraltet gelten, sind sie derzeit die einzige Möglichkeit, die Ausrichtung und Position in Firefox festzulegen (siehe [Firefox Bug 1283029](https://bugzilla.mozilla.org/show_bug.cgi?id=1283029)).

## Veraltete Funktionen

Die Methoden `setOrientation()` und `setPosition()` wurden durch das Setzen ihrer entsprechenden Eigenschaftswerte ersetzt. Zum Beispiel kann `setPosition(x, y, z)` durch das Setzen von `positionX.value`, `positionY.value` und `positionZ.value` erreicht werden.

## Beispiel

Sehen Sie sich [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
