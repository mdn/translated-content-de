---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLMarqueeElement`** Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("marquee")}}-Elementen.

Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, lautet der Standardwert `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert fest.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens im Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, lautet der Standardwert `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixel oder Prozentwert fest.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, lautet der Standardwert -1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixel fest. Der Standardwert ist 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `trueSpeed` ist `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrollDelay`-Werte unter 60 ignoriert. Wenn `trueSpeed` auf `true` gesetzt ist, werden diese Werte nicht ignoriert.
- `HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand fest.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixel oder Prozentwert fest.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Startet das Scrollen des Marquees.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stoppt das Scrollen des Marquees.

## Ereignisse

- `bounce` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scrollposition erreicht hat. Es kann nur ausgelöst werden, wenn das Verhalten-Attribut auf `alternate` gesetzt ist.
- `finish` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee die festgelegte Scrollmenge entsprechend dem loop-Attribut abgeschlossen hat. Es kann nur ausgelöst werden, wenn das loop-Attribut auf einen Wert größer als 0 gesetzt ist.
- `start` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee mit dem Scrollen beginnt.

## Beispiele

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("marquee")}}
