---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Schnittstelle `AudioListener` repräsentiert die Position und Ausrichtung der einzigartigen Person, die die Audioszene hört, und wird in der [Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) verwendet. Alle {{domxref("PannerNode")}}s räumlich in Bezug auf den `AudioListener`, der im Attribut {{domxref("BaseAudioContext.listener")}} gespeichert ist.

Es ist wichtig zu beachten, dass es pro Kontext nur einen Zuhörer gibt und dass er kein {{domxref("AudioNode")}} ist.

![Wir sehen die Position sowie die Aufwärts- und Frontgeraden eines AudioListeners, wobei die Aufwärts- und Frontgeraden in einem 90°-Winkel zueinander stehen.](webaudiolistenerreduced.png)

## Instanzeigenschaften

> [!NOTE]
> Die Position, Vorwärts- und Aufwärtswerte werden mit unterschiedlichen Syntaxen festgelegt und abgerufen. Der Abruf erfolgt durch Zugriff, zum Beispiel auf `AudioListener.positionX`, während die Festlegung derselben Eigenschaft mit `AudioListener.positionX.value` erfolgt. Aus diesem Grund sind diese Werte nicht als "nur lesbar" markiert, so wie sie in der IDL der Spezifikation erscheinen.

- {{domxref("AudioListener.positionX")}}
  - : Repräsentiert die horizontale Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- {{domxref("AudioListener.positionY")}}
  - : Repräsentiert die vertikale Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- {{domxref("AudioListener.positionZ")}}
  - : Repräsentiert die longitudinale (vor und zurück) Position des Zuhörers in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0.
- {{domxref("AudioListener.forwardX")}}
  - : Repräsentiert die horizontale Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist 0.
- {{domxref("AudioListener.forwardY")}}
  - : Repräsentiert die vertikale Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist 0.
- {{domxref("AudioListener.forwardZ")}}
  - : Repräsentiert die longitudinale (vor und zurück) Position der Vorwärtsrichtung des Zuhörers im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist -1.
- {{domxref("AudioListener.upX")}}
  - : Repräsentiert die horizontale Position des oberen Teils des Zuhörerkopfs im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist 0.
- {{domxref("AudioListener.upY")}}
  - : Repräsentiert die vertikale Position des oberen Teils des Zuhörerkopfs im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist 1.
- {{domxref("AudioListener.upZ")}}
  - : Repräsentiert die longitudinale (vor und zurück) Position des oberen Teils des Zuhörerkopfs im selben kartesischen Koordinatensystem wie die Positionswerte (`positionX`, `positionY` und `positionZ`). Die Vorwärts- und Aufwärtswerte sind linear voneinander unabhängig. Der Standardwert ist 0.

## Instanzmethoden

- {{domxref("AudioListener.setOrientation()")}} {{deprecated_inline}}
  - : Setzt die Ausrichtung des Zuhörers.
- {{domxref("AudioListener.setPosition()")}} {{deprecated_inline}}
  - : Setzt die Position des Zuhörers.

> [!NOTE]
> Obwohl diese Methoden veraltet sind, sind sie derzeit der einzige Weg, die Ausrichtung und Position in Firefox einzustellen (siehe [Firefox Fehler 1283029](https://bugzilla.mozilla.org/show_bug.cgi?id=1283029)).

## Veraltete Funktionen

Die Methoden `setOrientation()` und `setPosition()` wurden durch das Festlegen ihrer äquivalenten Eigenschaftswerte ersetzt. Zum Beispiel kann `setPosition(x, y, z)` durch das Festlegen von `positionX.value`, `positionY.value` und `positionZ.value` erreicht werden.

## Beispiel

Sehen Sie [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
