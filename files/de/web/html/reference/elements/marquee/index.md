---
title: "`<marquee>` HTML-Marquee-Element"
short-title: <marquee>
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können mit seinen Attributen steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML-Element `<marquee>` ist veraltet und seine Verwendung wird dringend abgeraten. Wenn Sie den Effekt von scrollendem Text oder kontinuierlichen Elementen erzeugen müssen, sollten Sie stattdessen [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) verwenden, um Inhalte sanft zu animieren. Zusätzlich sollten Sie die {{cssxref("@media/prefers-reduced-motion")}} CSS {{cssxref("@media")}} Abfrage verwenden, um basierend auf den Benutzereinstellungen die Animation zu stoppen, wodurch die Benutzererfahrung und Zugänglichkeit verbessert werden.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Bestimmt, wie der Text innerhalb des Marquees scrollt. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben wird, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Setzt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert.
- `direction` {{Deprecated_Inline}}
  - : Legt die Richtung des Scrollens innerhalb des Marquees fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bestimmt die Höhe in Pixel oder Prozentangabe.
- `hspace` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Setzt den horizontalen Rand
- `loop` {{Deprecated_Inline}}
  - : Gibt an, wie oft das Marquee scrollt. Wenn kein Wert angegeben wird, ist der Standardwert −1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bestimmt die Scrollmenge bei jedem Intervall in Pixel. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass jeder Wert kleiner als 60 ignoriert wird und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Setzt den vertikalen Rand in Pixel oder Prozentangabe.
- `width` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bestimmt die Breite in Pixel oder Prozentangabe.

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
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
