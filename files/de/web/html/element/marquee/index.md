---
title: "<marquee>: Das Marquee-Element"
slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: 1ebd589beda22afac79cde3cb8601061d1ce3798
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<marquee>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um einen scrollenden Textbereich einzufügen. Sie können durch seine Attribute steuern, was passiert, wenn der Text die Ränder seines Inhaltsbereichs erreicht.

Das HTML `<marquee>`-Element ist veraltet und seine Verwendung wird dringend abgeraten. Wenn Sie dennoch den Effekt eines scrollenden Textes oder kontinuierlicher Elemente erzeugen müssen, ziehen Sie in Betracht, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) anstelle der `<marquee>`-Elemente zu verwenden, um Inhalte fließend zu animieren. Fügen Sie außerdem die CSS-{{cssxref("@media")}}-Abfrage [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) hinzu, um die Animation basierend auf den Benutzereinstellungen zu stoppen und dadurch die Benutzererfahrung und Zugänglichkeit zu verbessern.

## Attribute

- `behavior` {{Deprecated_Inline}}
  - : Legt fest, wie der Text innerhalb des Marquee gescrollt wird. Mögliche Werte sind `scroll`, `slide` und `alternate`. Wenn kein Wert angegeben ist, ist der Standardwert `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Legt die Hintergrundfarbe durch Farbnamen oder hexadezimalen Wert fest.
- `direction` {{Deprecated_Inline}}
  - : Legt die Scrollrichtung innerhalb des Marquee fest. Mögliche Werte sind `left`, `right`, `up` und `down`. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `height` {{Deprecated_Inline}}
  - : Legt die Höhe in Pixeln oder als Prozentwert fest.
- `hspace` {{Deprecated_Inline}}
  - : Legt den horizontalen Abstand fest
- `loop` {{Deprecated_Inline}}
  - : Legt die Anzahl der Durchläufe des Marquee fest. Wenn kein Wert angegeben ist, ist der Standardwert -1, was bedeutet, dass das Marquee kontinuierlich scrollt.
- `scrollamount` {{Deprecated_Inline}}
  - : Legt die Scrollmenge bei jedem Intervall in Pixeln fest. Der Standardwert ist 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Legt das Intervall zwischen jeder Scrollbewegung in Millisekunden fest. Der Standardwert ist 85. Beachten Sie, dass Werte kleiner als 60 ignoriert werden und stattdessen der Wert 60 verwendet wird, es sei denn, `truespeed` ist angegeben.
- `truespeed` {{Deprecated_Inline}}
  - : Standardmäßig werden `scrolldelay`-Werte unter 60 ignoriert. Wenn `truespeed` vorhanden ist, werden diese Werte nicht ignoriert.
- `vspace` {{Deprecated_Inline}}
  - : Legt den vertikalen Abstand in Pixeln oder als Prozentwert fest.
- `width` {{Deprecated_Inline}}
  - : Legt die Breite in Pixeln oder als Prozentwert fest.

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

- CSS {{cssxref("transform")}} property
- CSS {{cssxref("translate")}} property
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement)
