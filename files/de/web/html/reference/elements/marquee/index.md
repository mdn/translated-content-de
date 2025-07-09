---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

Das **`<marquee>`**-Element in [HTML](/de/docs/Web/HTML) wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können mit seinen Attributen steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML-Element `<marquee>` ist veraltet, und seine Verwendung wird dringend abgeraten. Wenn Sie den Effekt von scrollendem Text oder fortlaufenden Elementen erzeugen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) verwenden, um Inhalte glatt zu animieren. Darüber hinaus sollten Sie die CSS-{{cssxref("@media")}}-Abfrage [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) einbeziehen, um die Animation basierend auf Benutzerpräferenzen zu stoppen und so die Benutzererfahrung sowie die Barrierefreiheit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Definiert, wie der Text in der Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben wird, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Setzt die Hintergrundfarbe durch Farbnamen oder Hexadezimalwert.
- `direction` {{Deprecated_Inline}}
  - : Legt die Scrollrichtung innerhalb der Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Bestimmt, wie oft die Marquee scrollen wird. Wenn kein Wert angegeben wird, ist der Standardwert −1, was bedeutet, dass die Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Setzt die Menge des Scrollens bei jedem Intervall in Pixeln. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert unter 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
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

- CSS-{{cssxref("transform")}}-Eigenschaft
- CSS-{{cssxref("translate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
