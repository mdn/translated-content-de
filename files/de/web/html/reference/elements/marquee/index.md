---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Mit seinen Attributen können Sie steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML `<marquee>`-Element ist veraltet und seine Verwendung wird stark abgeraten. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erzeugen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) verwenden, um Inhalte reibungslos zu animieren. Zusätzlich sollten Sie die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) CSS {{cssxref("@media")}} Abfrage einschließen, um die Animation basierend auf den Benutzerpräferenzen zu stoppen und so die Benutzererfahrung und Barrierefreiheit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Setzt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert.
- `direction` {{Deprecated_Inline}}
  - : Bestimmt die Scrollrichtung innerhalb des Marquees. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Setzt die Höhe in Pixeln oder Prozentwerten.
- `hspace` {{Deprecated_Inline}}
  - : Setzt den horizontalen Rand.
- `loop` {{Deprecated_Inline}}
  - : Bestimmt, wie oft das Marquee scrollt. Wenn kein Wert angegeben ist, liegt der Standardwert bei −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Bestimmt die Scrollmenge bei jedem Intervall in Pixeln. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Setzt das Intervall zwischen jedem Scrollvorgang in Millisekunden. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und der Wert 60 verwendet wird, es sei denn `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Setzt den vertikalen Rand in Pixeln oder Prozentwerten.
- `width` {{Deprecated_Inline}}
  - : Setzt die Breite in Pixeln oder Prozentwerten.

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

## Technische Übersicht

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
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
