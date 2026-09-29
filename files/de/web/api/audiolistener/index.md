---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{ APIRef("Web Audio API") }}

Die Schnittstelle `AudioListener` repräsentiert die Position und Ausrichtung der einzigen Person, die der Audioszene zuhört, und wird bei der [räumlichen Audiowiedergabe](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) verwendet. Alle [`PannerNode`](/de/docs/Web/API/PannerNode)-Instanzen positionieren Audio räumlich in Bezug auf den `AudioListener`, der im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist.

Beachten Sie, dass es pro Kontext nur einen Listener gibt und dass dieser kein [`AudioNode`](/de/docs/Web/API/AudioNode) ist.

![Die Position sowie der Aufwärts- und der Vorwärtsvektor eines AudioListener. Die beiden Vektoren stehen im 90°-Winkel zueinander.](webaudiolistenerreduced.png)

## Instanzeigenschaften

> [!NOTE]
> Die Positions-, Vorwärts- und Aufwärtswerte werden mit unterschiedlicher Syntax abgerufen und gesetzt. Zum Abrufen greifen Sie beispielsweise auf `AudioListener.positionX` zu; zum Setzen derselben Eigenschaft verwenden Sie `AudioListener.positionX.value`.

- [`AudioListener.positionX`](/de/docs/Web/API/AudioListener/positionX) {{ReadOnlyInline}}
  - : Repräsentiert die horizontale Position des Listeners in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionY`](/de/docs/Web/API/AudioListener/positionY) {{ReadOnlyInline}}
  - : Repräsentiert die vertikale Position des Listeners in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.positionZ`](/de/docs/Web/API/AudioListener/positionZ) {{ReadOnlyInline}}
  - : Repräsentiert die Position des Listeners in Längsrichtung (vor und zurück) in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX) {{ReadOnlyInline}}
  - : Repräsentiert die horizontale Komponente der Vorwärtsrichtung des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardY`](/de/docs/Web/API/AudioListener/forwardY) {{ReadOnlyInline}}
  - : Repräsentiert die vertikale Komponente der Vorwärtsrichtung des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.forwardZ`](/de/docs/Web/API/AudioListener/forwardZ) {{ReadOnlyInline}}
  - : Repräsentiert die Komponente der Vorwärtsrichtung des Listeners in Längsrichtung (vor und zurück) im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist -1.
- [`AudioListener.upX`](/de/docs/Web/API/AudioListener/upX) {{ReadOnlyInline}}
  - : Repräsentiert die horizontale Komponente der Richtung zum Scheitelpunkt des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist 0.
- [`AudioListener.upY`](/de/docs/Web/API/AudioListener/upY) {{ReadOnlyInline}}
  - : Repräsentiert die vertikale Komponente der Richtung zum Scheitelpunkt des Listeners im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist 1.
- [`AudioListener.upZ`](/de/docs/Web/API/AudioListener/upZ) {{ReadOnlyInline}}
  - : Repräsentiert die Komponente der Richtung zum Scheitelpunkt des Listeners in Längsrichtung (vor und zurück) im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtsvektoren sind linear unabhängig voneinander. Der Standardwert ist 0.

## Instanzmethoden

- [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation) {{deprecated_inline}}
  - : Legt die Ausrichtung des Listeners fest.
- [`AudioListener.setPosition()`](/de/docs/Web/API/AudioListener/setPosition) {{deprecated_inline}}
  - : Legt die Position des Listeners fest.

> [!NOTE]
> Obwohl diese Methoden veraltet sind, bieten sie in Firefox derzeit die einzige Möglichkeit, Ausrichtung und Position festzulegen (siehe [Firefox-Bug 1283029](https://bugzil.la/1283029)).

## Veraltete Funktionen

Die Methoden `setOrientation()` und `setPosition()` wurden durch das Setzen der Werte entsprechender Eigenschaften ersetzt. Beispielsweise lässt sich `setPosition(x, y, z)` durch das Setzen von `positionX.value`, `positionY.value` und `positionZ.value` auf die jeweiligen Werte umsetzen.

## Beispiel

Beispielcode finden Sie unter [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
