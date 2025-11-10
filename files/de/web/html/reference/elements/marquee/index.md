---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Bereich mit Text einzufügen. Sie können steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht, indem Sie seine Attribute verwenden.

Das HTML-`<marquee>`-Element ist veraltet und seine Verwendung wird stark abgeraten. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erstellen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) verwenden, um Inhalte fließend zu animieren. Außerdem sollten Sie die CSS-{{cssxref("@media")}}-Abfrage [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) einbinden, um die Animation basierend auf den Benutzereinstellungen zu stoppen und so die Benutzerfreundlichkeit und Barrierefreiheit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder Hexadezimalwert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens im Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Rand fest.
- `loop` {{Deprecated_Inline}}
  - : Legt die Anzahl der Male fest, die das Marquee scrollen wird. Wenn kein Wert angegeben ist, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Anzahl der Pixel fest, die pro Intervall gescrollt werden. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jedem Bildlauf in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
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
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)-Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
