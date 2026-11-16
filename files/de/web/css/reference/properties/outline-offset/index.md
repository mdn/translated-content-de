---
title: "`outline-offset` CSS property"
short-title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
l10n:
  sourceCommit: f382f345d642cdf970530cf1db6bde8c4da33398
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`outline-offset`** legt den Abstand zwischen einer [outline](/de/docs/Web/CSS/Reference/Properties/outline) und der Kante oder dem Rahmen eines Elements fest.

{{InteractiveExample("CSS Demo: outline-offset")}}

```css interactive-example-choice
outline-offset: 4px;
```

```css interactive-example-choice
outline-offset: 0.6rem;
```

```css interactive-example-choice
outline-offset: 12px;
outline: 5px dashed blue;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 2px solid crimson;
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Abstands zwischen dem Element und seiner outline. Ein negativer Wert platziert die outline innerhalb des Elements. Bei einem Wert von `0` liegt die outline direkt am Element, ohne Abstand dazwischen.

## Beschreibung

Eine outline ist eine Linie, die außerhalb der Rahmenkante um ein Element gezeichnet wird. Der Bereich zwischen einem Element und seiner outline ist transparent. Er zeigt also den Hintergrund des übergeordneten Elements.

## Barrierefreiheit

Wenn eine outline als Fokusindikator verwendet wird, muss für das in [Erfolgskriterium 1.4.11: Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) festgelegte Kontrastverhältnis von 3:1 die {{cssxref("outline-color")}} mit der Hintergrundfarbe verglichen werden. `outline-offset` erzeugt einen transparenten Abstand zwischen der Kante des Elements und seiner outline. Die versetzte outline wird entweder über dem Bereich hinter dem Element oder – bei einem negativen Abstand – über dem Hintergrund des Elements selbst gezeichnet. Dadurch kann sich die Farbe ändern, anhand derer das Kontrastverhältnis berechnet wird.

Wenn Sie eine outline als Fokusindikator verwenden, testen Sie sie bei fokussiertem Element innerhalb eines Containers, der überstehenden Inhalt abschneidet, sowie innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}}. Ein positiver Abstand kann die outline über die Grenzen eines solchen übergeordneten Elements hinausschieben, sodass ein Teil des Indikators abgeschnitten wird. [Erfolgskriterium 2.4.11: Fokus nicht verdeckt (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) verlangt, dass die fokussierte Komponente nicht vollständig verdeckt ist. [Erfolgskriterium 2.4.13: Fokusdarstellung](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) legt eine Mindestfläche für den Indikator selbst fest.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Outline-Abstand in Pixeln festlegen

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_outline_offset_in_pixels')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
