---
title: ::selection
slug: Web/CSS/::selection
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Das **`::selection`** CSS-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den Teil eines Dokuments an, der vom Benutzer hervorgehoben wurde (z. B. durch Klicken und Ziehen der Maus über Text).

Das `::selection` Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudo-Elementen gemeinsam ist. Für weitere Informationen, wie diese Vererbung funktioniert, siehe den Abschnitt [Highlight pseudo-elements inheritance](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

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

**Überschreiben Sie nicht die Hervorhebung von Textstilen aus rein ästhetischen Gründen** — Benutzer können sie an ihre Bedürfnisse anpassen. Für Personen, die kognitive Beeinträchtigungen erfahren oder weniger technikaffin sind, können unerwartete Änderungen der Auswahlstile das Verständnis der Funktionalität beeinträchtigen.

Wenn überschrieben wird, ist es wichtig sicherzustellen, dass das **Kontrastverhältnis** zwischen Text- und Hintergrundfarben der Auswahl hoch genug ist, damit Personen mit sehbehindernden Bedingungen ihn lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Leuchtkraft des ausgewählten Textes und der Hintergrundfarben des ausgewählten Textes verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, muss Textinhalt ein Kontrastverhältnis von **4,5:1** haben, oder 3:1 für größeren Text wie Überschriften. (WCAG definiert großen Text als zwischen `18.66px` und `24px` und [fett](/de/docs/Web/CSS/font-weight), oder `24px` oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Guideline 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- {{cssxref("pointer-events")}} - Kontrolle, welche Ereignisse auf dem Element aktiv sind
