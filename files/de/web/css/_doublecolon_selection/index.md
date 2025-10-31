---
title: ::selection
slug: Web/CSS/::selection
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`::selection`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den Teil eines Dokuments an, der vom Benutzer hervorgehoben wurde (zum Beispiel durch Klicken und Ziehen der Maus über Text).

Das `::selection` Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudo-Elementen gemeinsam ist. Für weitere Details, wie diese Vererbung funktioniert, siehe den Abschnitt [Hervorhebungs-Pseudo-Elemente Vererbung](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

{{InteractiveExample("CSS Demo: ::selection", "tabbed-shorter")}}

```css interactive-example
p::selection {
  color: red;
  background-color: yellow;
}
```

```html interactive-example
<p>
  Select a fragment of this paragraph, to see how its appearance is affected.
</p>
```

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

**Überschreiben Sie ausgewählte Textstile nicht aus rein ästhetischen Gründen** — Benutzer können sie an ihre Bedürfnisse anpassen. Für Menschen mit kognitiven Schwierigkeiten oder geringerer technischer Versiertheit können unerwartete Änderungen der Auswahlstile ihr Verständnis der Funktionalität beeinträchtigen.

Wenn überschrieben, ist es wichtig sicherzustellen, dass das **Kontrastverhältnis** zwischen Text und Hintergrundfarben der Auswahl hoch genug ist, damit Menschen mit Sehbehinderungen es lesen können.

Das Kontrastverhältnis der Farben wird ermittelt, indem die Helligkeit des ausgewählten Textes mit der Hintergrundfarbe des ausgewählten Textes verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, muss der Textinhalt ein Kontrastverhältnis von **4.5:1** aufweisen oder 3:1 für größere Texte wie Überschriften. (WCAG definiert großen Text als zwischen `18.66px` und `24px` und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight), oder `24px` oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- {{cssxref("pointer-events")}} - Kontrolle darüber, welche Ereignisse auf dem Element aktiv sind
