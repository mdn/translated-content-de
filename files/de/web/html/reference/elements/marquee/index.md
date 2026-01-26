---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht, indem Sie seine Attribute verwenden.

Das HTML-Element `<marquee>` ist veraltet und seine Verwendung wird stark abgeraten. Wenn Sie den Effekt eines scrollenden Textes oder kontinuierlicher Elemente erstellen müssen, erwägen Sie stattdessen die Verwendung von [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) mit [CSS-Transformierungen](/de/docs/Web/CSS/Guides/Transforms/Using), um Inhalte nahtlos zu animieren. Zusätzlich sollten Sie die {{cssxref("@media/prefers-reduced-motion")}} CSS {{cssxref("@media")}} Abfrage integrieren, um die Animation basierend auf den Benutzerpräferenzen zu stoppen und so die Benutzererfahrung und Zugänglichkeit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder Hexadezimalwert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens innerhalb des Marquees fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixel oder Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, ist der Standardwert -1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixeln fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jedem Scrollschritt in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand in Pixeln oder Prozentwert fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder Prozentwert fest.

## Beispiele

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  class="outlined">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

```css
.outlined {
  border: solid;
}
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

- CSS {{cssxref("transform")}} Eigenschaft
- CSS {{cssxref("translate")}} Eigenschaft
- [CSS-Transformierungen](/de/docs/Web/CSS/Guides/Transforms) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
