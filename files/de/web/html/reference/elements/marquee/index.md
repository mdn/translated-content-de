---
title: "`<marquee>` HTML marquee-Element"
short-title: <marquee>
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können mit seinen Attributen steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML-Element `<marquee>` ist veraltet und seine Verwendung wird dringend abgeraten. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erstellen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) verwenden, um Inhalte geschmeidig zu animieren. Zusätzlich sollten Sie die CSS-Abfrage {{cssxref("@media/prefers-reduced-motion")}} mit {{cssxref("@media")}} einbinden, um die Animation basierend auf den Benutzereinstellungen zu stoppen und dadurch die Benutzererfahrung und Barrierefreiheit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquees gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe über den Farbnamen oder den hexadezimalen Wert fest.
- `direction` {{Deprecated_Inline}}
  - : Bestimmt die Richtung des Scrollens innerhalb des Marquees. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder Prozentwerten fest.
- `hspace` {{Deprecated_Inline}}
  - : Bestimmt den horizontalen Rand.
- `loop` {{Deprecated_Inline}}
  - : Legt fest, wie oft das Marquee scrollen wird. Wenn kein Wert angegeben ist, ist der Standardwert -1, was bedeutet, das Marquee wird ununterbrochen scrollen.
- `scrollamount` {{Deprecated_Inline}}
  - : Bestimmt die Menge des Scrollens bei jedem Intervall in Pixeln. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Bestimmt das Intervall zwischen jeder Scrollbewegung in Millisekunden. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte kleiner als 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Bestimmt den vertikalen Rand in Pixeln oder Prozentwerten.
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

- CSS {{cssxref("transform")}}-Eigenschaft
- CSS {{cssxref("translate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
