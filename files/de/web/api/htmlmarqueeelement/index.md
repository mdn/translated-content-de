---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLMarqueeElement`**-Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("marquee")}}-Elementen.

Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe fest, entweder durch den Farbnamen oder den hexadezimalen Wert.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens innerhalb des Marquees fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixel oder prozentualem Wert fest.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Legt die Anzahl der Schleifen fest, in denen das Marquee scrollen wird. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixel fest. Der Standardwert ist 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `trueSpeed` ist `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrollDelay`-Werte unter 60 ignoriert. Wenn `trueSpeed` `true` ist, werden diese Werte nicht ignoriert.
- `HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand fest.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixel oder prozentualem Wert fest.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Startet das Scrollen des Marquees.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stoppt das Scrollen des Marquees.

## Ereignisse

- `bounce` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scrollposition erreicht hat. Es kann nur ausgelöst werden, wenn das Attribut behavior auf `alternate` gesetzt ist.
- `finish` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee die Menge des Scrollens abgeschlossen hat, die durch das Attribut loop festgelegt ist. Es kann nur ausgelöst werden, wenn das Attribut loop auf eine Zahl gesetzt ist, die größer als 0 ist.
- `start` {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn das Marquee beginnt zu scrollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("marquee")}}
