---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können mit seinen Attributen steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe über einen Farbnamen oder einen Hexadezimalwert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens innerhalb des Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixel oder Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt die Anzahl der Male fest, die das Marquee scrollen wird. Wenn kein Wert angegeben ist, ist der Standardwert -1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Menge des Scrollens bei jedem Intervall in Pixel fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jedem Scrollen in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass ein Wert unter 60 ignoriert wird und der Wert 60 stattdessen verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand in Pixel oder Prozentwert fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixel oder Prozentwert fest.

## Ereignis-Handler

- `onbounce` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scrollposition erreicht hat. Es kann nur ausgelöst werden, wenn das behavior-Attribut auf `alternate` gesetzt ist.
- `onfinish` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee die im loop-Attribut festgelegte Menge des Scrollens abgeschlossen hat. Es kann nur ausgelöst werden, wenn das loop-Attribut auf eine Zahl gesetzt ist, die größer als 0 ist.
- `onstart` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee zu scrollen beginnt.

## Methoden

- `start()` {{deprecated_inline}}
  - : Startet das Scrollen des Marquee.
- `stop()` {{deprecated_inline}}
  - : Stoppt das Scrollen des Marquee.

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

### Ergebnis

{{EmbedLiveSample("Examples", 600, 450)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
