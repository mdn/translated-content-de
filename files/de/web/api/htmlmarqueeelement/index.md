---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLMarqueeElement`**-Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("marquee")}}-Elementen.

Sie erbt Eigenschaften und Methoden von der {{DOMxRef("HTMLElement")}}-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Bestimmt, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert fest.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Bestimmt die Richtung des Scrollens innerhalb des Marquees. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwert fest.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Setzt den horizontalen Rand.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Bestimmt, wie oft das Marquee scrollen soll. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee ununterbrochen scrollen wird.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Bestimmt die Menge des Scrollens in jedem Intervall in Pixeln. Der Standardwert ist 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Bestimmt das Intervall zwischen jedem Scrollen in Millisekunden. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und der Wert 60 stattdessen verwendet wird, es sei denn, `trueSpeed` ist `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrollDelay`-Werte unter 60 ignoriert. Wenn `trueSpeed` auf `true` gesetzt ist, werden diese Werte nicht ignoriert.
- `HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Setzt den vertikalen Rand.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder Prozentwert fest.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Startet das Scrollen des Marquees.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stoppt das Scrollen des Marquees.

## Ereignisse

- `bounce` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scroll-Position erreicht hat. Es kann nur ausgelöst werden, wenn das Attribute `behavior` auf `alternate` gesetzt ist.
- `finish` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee die Anzahl durch das Attribut `loop` festgelegter Scrollvorgänge abgeschlossen hat. Es kann nur ausgelöst werden, wenn das `loop`-Attribut auf eine Zahl größer als 0 gesetzt ist.
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
