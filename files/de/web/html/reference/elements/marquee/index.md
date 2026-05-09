---
title: "`<marquee>` HTML Marquee-Element"
short-title: <marquee>
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht, indem Sie seine Attribute verwenden.

Das HTML `<marquee>`-Element ist veraltet, und seine Verwendung wird ausdrücklich nicht empfohlen. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erzeugen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) verwenden, um Inhalte fließend zu animieren. Zudem schließen Sie die {{cssxref("@media/prefers-reduced-motion")}} CSS-{{cssxref("@media")}}-Abfrage ein, um die Animation basierend auf den Benutzereinstellungen zu stoppen und somit die Benutzererfahrung und Zugänglichkeit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens innerhalb des Marquees fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt die Höhe in Pixel oder Prozent fest.
- `hspace` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt die Menge des Scrollens bei jedem Intervall in Pixel fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass Werte kleiner als 60 ignoriert werden und der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt den vertikalen Rand in Pixel oder Prozent fest.
- `width` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt die Breite in Pixel oder Prozent fest.

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

- CSS {{cssxref("transform")}}-Eigenschaft
- CSS {{cssxref("translate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)-Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
