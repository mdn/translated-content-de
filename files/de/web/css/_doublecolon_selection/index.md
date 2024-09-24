---
title: "::Auswahl"
slug: Web/CSS/::selection
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Das **`::selection`** CSS-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den Teil eines Dokuments an, der vom Benutzer markiert wurde (beispielsweise durch Klicken und Ziehen der Maus über Text).

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

**Überschreiben Sie die Stile des ausgewählten Texts nicht aus rein ästhetischen Gründen** — Benutzer können sie an ihre Bedürfnisse anpassen. Für Menschen mit kognitiven Beeinträchtigungen oder geringer technischer Kenntnisse können unerwartete Änderungen an Auswahlstilen das Verständnis der Funktionalität beeinträchtigen.

Wenn überschrieben, ist es wichtig sicherzustellen, dass das **Kontrastverhältnis** zwischen dem Text und den Hintergrundfarben der Auswahl hoch genug ist, damit Menschen mit Sehbehinderungen es lesen können.

Das Farbkontrastverhältnis wird gefunden, indem die Leuchtdichte des ausgewählten Texts und der ausgewählten Text-Hintergrundfarben verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, muss Textinhalt ein Kontrastverhältnis von **4.5:1** aufweisen, oder 3:1 für größere Texte wie Überschriften. (WCAG definiert großen Text als zwischen `18.66px` und `24px` und [fett](/de/docs/Web/CSS/font-weight), oder `24px` oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN-Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Beispiele

### HTML

```html
Dieser Text hat spezielle Stile, wenn Sie ihn markieren.
<p>Versuchen Sie auch, Text in diesem Absatz auszuwählen.</p>
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
/* Macht den ausgewählten Text gold auf rotem Hintergrund */
::selection {
  color: gold;
  background-color: red;
}

/* Macht den ausgewählten Text in einem Absatz weiß auf blauem Hintergrund */
p::selection {
  color: white;
  background-color: blue;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("pointer-events")}} - Steuern, welche Ereignisse auf dem Element aktiv sind
