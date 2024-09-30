---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht, indem Sie dessen Attribute verwenden.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text im Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, wird standardmäßig `scroll` verwendet.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe fest, entweder durch Farbnamen oder hexadezimale Werte.
- `direction` {{Deprecated_Inline}}
  - : Legt die Scrollrichtung innerhalb des Marquees fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, wird standardmäßig `left` verwendet.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwerten fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, wird der Standardwert −1 verwendet, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixeln fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scroll-Bewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass alle Werte unter 60 ignoriert werden und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand in Pixeln oder Prozentwerten fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder Prozentwerten fest.

## Ereignishandler

- `onbounce` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee das Ende seiner Scrollposition erreicht hat. Es kann nur ausgelöst werden, wenn das `behavior`-Attribut auf `alternate` gesetzt ist.
- `onfinish` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee die im `loop`-Attribut festgelegte Anzahl von Scrolls abgeschlossen hat. Es kann nur ausgelöst werden, wenn das `loop`-Attribut auf eine Zahl größer als 0 gesetzt ist.
- `onstart` {{deprecated_inline}}
  - : Wird ausgelöst, wenn das Marquee zu scrollen beginnt.

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
