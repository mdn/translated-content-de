---
title: "::selection"
slug: Web/CSS/::selection
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Das **`::selection`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den Teil eines Dokuments an, der vom Benutzer hervorgehoben wurde (zum Beispiel durch Klicken und Ziehen der Maus über Text).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-selection.html", "tabbed-shorter")}}

## Zulässige Eigenschaften

Nur bestimmte CSS-Eigenschaften können mit `::selection` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} und die damit verbundenen Eigenschaften
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} und {{CSSxRef("-webkit-text-stroke-width")}}

Insbesondere wird {{CSSxRef("background-image")}} ignoriert.

## Syntax

```css
::selection {
  /* ... */
}
```

## Barrierefreiheit

**Ändern Sie nicht die Stile des ausgewählten Textes aus rein ästhetischen Gründen** — Benutzer können sie an ihre Bedürfnisse anpassen. Für Menschen mit kognitiven Beeinträchtigungen oder geringerer technischer Bildung können unerwartete Änderungen der Auswahldarstellung das Verständnis der Funktionalität beeinträchtigen.

Wenn Änderungen vorgenommen werden, ist es wichtig sicherzustellen, dass das **Kontrastverhältnis** zwischen dem Text und den Hintergrundfarben der Auswahl hoch genug ist, damit Menschen mit Sehbeeinträchtigungen es lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtdichte des ausgewählten Textes und der Hintergrundfarben des ausgewählten Textes ermittelt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, muss der Textinhalt ein Kontrastverhältnis von **4.5:1** aufweisen oder 3:1 für größeren Text wie Überschriften. (WCAG definiert großen Text als zwischen `18.66px` und `24px` und [fett](/de/docs/Web/CSS/font-weight), oder `24px` oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erklärung zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Beispiele

### HTML

```html
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* Make selected text gold on a red background */
::selection {
  color: gold;
  background-color: red;
}

/* Make selected text in a paragraph white on a blue background */
p::selection {
  color: white;
  background-color: blue;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("pointer-events")}} - steuern, welche Ereignisse auf dem Element aktiv sind
