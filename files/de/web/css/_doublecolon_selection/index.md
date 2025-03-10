---
title: ::selection
slug: Web/CSS/::selection
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Das **`::selection`** CSS-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den Teil eines Dokuments an, der vom Benutzer hervorgehoben wurde (z. B. durch Klicken und Ziehen der Maus über Text).

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

**Überschreiben Sie nicht die Auswahlstile aus rein ästhetischen Gründen** — Benutzer können diese an ihre Bedürfnisse anpassen. Für Personen mit kognitiven Einschränkungen oder geringerer technologischer Kompetenz können unerwartete Änderungen der Auswahldarstellungen das Verständnis der Funktionalität beeinträchtigen.

Wenn überschrieben, ist es wichtig sicherzustellen, dass das **Kontrastverhältnis** zwischen den Text- und Hintergrundfarben der Auswahl hoch genug ist, damit Menschen mit Sehbehinderungen es lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Leuchtkraft des ausgewählten Textes und der Hintergrundfarben des ausgewählten Textes verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, muss Textinhalt ein Kontrastverhältnis von **4,5:1** aufweisen, oder 3:1 für größeren Text wie Überschriften. (WCAG definiert großen Text als zwischen `18.66px` und `24px` und [fett](/de/docs/Web/CSS/font-weight), oder `24px` oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

- {{cssxref("pointer-events")}} - steuern, welche Ereignisse auf dem Element aktiv sind
