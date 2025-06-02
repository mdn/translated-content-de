---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollbaren Textbereich einzufügen. Sie können mit seinen Attributen steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML-Element `<marquee>` ist veraltet und seine Verwendung wird dringend abgeraten. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erzeugen müssen, sollten Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) mit [CSS-Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) anstelle von `<marquee>`-Elementen verwenden, um Inhalte sanft zu animieren. Zusätzlich sollten Sie die CSS-{{cssxref("@media")}}-Abfrage [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) einbeziehen, um die Animation basierend auf Benutzerpräferenzen zu stoppen, wodurch die Benutzererfahrung und Zugänglichkeit verbessert wird.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Bestimmt, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe über einen Farbnamen oder einen Hexadezimalwert fest.
- `direction` {{Deprecated_Inline}}
  - : Bestimmt die Richtung des Scrollens innerhalb des Marquees. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwerten fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt die Anzahl der Male fest, die der Marquee scrollt. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass der Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixeln fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jedem Scrollvorgang in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und der Wert 60 anstelle davon verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Rand in Pixeln oder Prozentwerten fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder Prozentwerten fest.

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
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
