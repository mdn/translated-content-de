---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um ein scrollendes Textfeld einzufügen. Sie können durch seine Attribute steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text im Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder Hexadezimalwert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Scrollrichtung im Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Abstand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollen soll. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixeln fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert unter 60 ignoriert wird und der Wert 60 stattdessen verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay` Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Abstand in Pixeln oder Prozentwert fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder Prozentwert fest.

## Ereignishandler

- `onbounce` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scrollposition erreicht hat. Kann nur ausgelöst werden, wenn das behavior-Attribut auf `alternate` gesetzt ist.
- `onfinish` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee die durch das loop-Attribut festgelegte Anzahl von Scrollbewegungen abgeschlossen hat. Kann nur ausgelöst werden, wenn das loop-Attribut auf eine Zahl größer als 0 gesetzt ist.
- `onstart` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee mit dem Scrollen beginnt.

## Methoden

- `start()` {{deprecated_inline}}
  - : Startet das Scrollen des Marquees.
- `stop()` {{deprecated_inline}}
  - : Stoppt das Scrollen des Marquees.

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
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLMarqueeElement")}}
