---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Das **`HTMLMarqueeElement`**-Interface bietet Methoden zur Manipulation von `<marquee>`-Elementen.

Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Bestimmt, wie der Text innerhalb des Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder hexadezimale Werte fest.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Bestimmt die Scroll-Richtung innerhalb des Marquee. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Bestimmt die Höhe in Pixeln oder Prozentwert.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Bestimmt den horizontalen Rand.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Bestimmt, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Bestimmt die Scrollmenge bei jedem Intervall in Pixeln. Der Standardwert ist 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Bestimmt das Intervall zwischen jedem Scrollvorgang in Millisekunden. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und der Wert 60 verwendet wird, es sei denn, `trueSpeed` ist `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrollDelay`-Werte unter 60 ignoriert. Wenn `trueSpeed` `true` ist, werden diese Werte nicht ignoriert.
- `"HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Bestimmt den vertikalen Rand.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Bestimmt die Breite in Pixeln oder Prozentwert.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Startet das Scrollen des Marquee.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stoppt das Scrollen des Marquee.

## Ereignisse

- `bounce` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scroll-Position erreicht hat. Es kann nur ausgelöst werden, wenn das `behavior`-Attribut auf `alternate` gesetzt ist.
- `finish` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee den im `loop`-Attribut festgelegten Scroll-Wert erreicht hat. Es kann nur ausgelöst werden, wenn das `loop`-Attribut auf eine Zahl größer als 0 gesetzt ist.
- `start` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee zu scrollen beginnt.

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
