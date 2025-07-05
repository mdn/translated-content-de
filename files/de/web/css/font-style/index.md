---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schrift mit einer normalen, kursiven oder schrägen Type aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

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
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar, serif;
}
```

**Kursive** Schriftarten sind im Allgemeinen geschwungen, verwenden normalerweise weniger horizontalen Platz als ihre nicht gestylten Gegenstücke, während **schräge** Type normalerweise nur geneigte Versionen der regulären Type sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Type simuliert, indem die Glyphen der regulären Type künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Werte-Liste angegeben, die optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart aus, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart aus, die als `italic` klassifiziert ist. Wenn keine kursive Version der Type verfügbar ist, wird eine als `oblique` klassifizierte verwendet. Wenn keine der beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Type verfügbar ist, wird eine als `italic` klassifizierte verwendet. Wenn keine der beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn eine oder mehrere schräge Typen in der gewählten Schriftfamilie verfügbar sind, wird diejenige gewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine schrägen Type verfügbar sind, wird der Browser eine schräge Version der Schriftart synthetisieren, indem er eine normale Type um den angegebenen Betrag neigt. Gültige Werte sind Winkelwerte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen, für einen angeforderten Winkel von 14 Grad oder mehr, werden größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Abschnitt zur Schriftabstimmung im Standard](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten können eine feine Kontrolle über den Grad bieten, in dem eine schräge Type geneigt wird. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable-Schriftarten wird die `"slnt"` Variation verwendet, um unterschiedliche Neigungswinkel für oblique zu implementieren, und die `"ital"` Variation mit einem Wert von 1, um kursive Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

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
  /*font-variation-settings: "slnt" 12;*/
  font-style: oblique 23deg;
}
```

{{EmbedLiveSample("oblique-example", "", "200px")}}

## Zugänglichkeit

Große Textabschnitte, die auf einen `font-style` Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftstile

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
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
