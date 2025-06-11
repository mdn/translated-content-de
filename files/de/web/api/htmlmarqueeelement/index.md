---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Das **`HTMLMarqueeElement`**-Interface stellt Methoden zur Verfügung, um {{HTMLElement("marquee")}}-Elemente zu manipulieren.

Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquee-Elements gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe über den Farbnamen oder den hexadezimalen Wert fest.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Legt die Scroll-Richtung innerhalb des Marquee-Elements fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder als Prozentsatz fest.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee-Element scrollen wird. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee-Element kontinuierlich scrollt.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge pro Intervall in Pixeln fest. Der Standardwert ist 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und statt dessen der Wert 60 verwendet wird, es sei denn, `trueSpeed` ist `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrollDelay`-Werte unter 60 ignoriert. Wenn `trueSpeed` auf `true` gesetzt ist, werden diese Werte nicht ignoriert.
- `HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand fest.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder als Prozentsatz fest.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Startet das Scrollen des Marquee-Elements.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stoppt das Scrollen des Marquee-Elements.

## Ereignisse

- `bounce` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee-Element das Ende seiner Scrollposition erreicht hat. Kann nur ausgelöst werden, wenn das Verhalten-Attribut auf `alternate` gesetzt ist.
- `finish` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee-Element das eingestellte Scrollvolumen des Loop-Attributs abgeschlossen hat. Kann nur ausgelöst werden, wenn das Loop-Attribut auf eine Zahl größer als 0 gesetzt ist.
- `start` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee-Element mit dem Scrollen beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("marquee")}}
