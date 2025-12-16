---
title: font-style
slug: Web/CSS/Reference/Properties/font-style
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Schnitt aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

{{InteractiveExample("CSS Demo: font-style")}}

```css interactive-example-choice
font-style: normal;
```

```css interactive-example-choice
font-style: italic;
```

```css interactive-example-choice
font-style: oblique;
```

```css interactive-example-choice
font-style: oblique 40deg;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

**Kursive** Schriftarten sind in der Regel geschwungen und verwenden im Allgemeinen weniger horizontalen Raum als ihre ungestylten Gegenstücke, während **schräge** Schnitte normalerweise einfach geneigte Versionen der regulären Schrift sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schnitte simuliert, indem die Glyphen der regulären Schrift künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: revert-layer;
font-style: unset;
```

Die `font-style`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste ausgewählt wird und optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schrift, die in einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schrift, die als `italic` klassifiziert ist. Wenn keine kursive Version der Schrift verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schrift, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Schrift verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` {{cssxref("angle")}}
  - : Wählt eine als `oblique` klassifizierte Schrift und gibt zusätzlich einen Winkel für die Schräglage des Textes an. Wenn eine oder mehrere schräge Schnitte in der gewählten Schriftfamilie verfügbar sind, wird derjenige ausgewählt, der am ehesten dem angegebenen Winkel entspricht. Wenn keine schrägen Schnitte verfügbar sind, erzeugt der Browser eine geneigte Version der Schrift, indem er eine normale Schrift um den angegebenen Betrag neigt. Gültige Werte sind Gradwerte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind in Richtung Ende der Zeile geneigt, während negative Werte in Richtung Anfang geneigt sind.

    Im Allgemeinen werden bei einem angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den Musterabschnitt der [Spezifikation](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten können eine genaue Kontrolle über das Ausmaß bieten, in dem ein schräger Schnitt geneigt wird. Dies kann mit dem `<angle>`-Modifikator für das Schlüsselwort `oblique` ausgewählt werden.

Für TrueType- oder OpenType-Variable-Schriften wird die `"slnt"`-Variation verwendet, um unterschiedliche Schrägwinkel für Schrägschrift umzusetzen, und die `"ital"`-Variation mit einem Wert von 1 wird verwendet, um Kursivwerte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu sehen.

```html live-sample___oblique-example
<p class="sample">
  ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
  waddling like an elephantine lizard up Holborn Hill.
</p>
```

```css live-sample___oblique-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "AmstelvarAlpha";
  font-style: normal;
}

.sample {
  font:
    2rem "AmstelvarAlpha",
    sans-serif;
  /* font-variation-settings: "slnt" 12; */
  font-style: oblique 23deg;
}
```

{{EmbedLiveSample("oblique-example", "", "200px")}}

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-style`-Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Bedenken wie Dyslexie schwer lesbar sein.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftartenstile

```html hidden
<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('Font_styles') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-family")}}
- {{cssxref("font-weight")}}
- SVG {{SVGAttr("font-style")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
