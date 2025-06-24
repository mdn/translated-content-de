---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Schriftschnitt aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

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
  font-family: Amstelvar;
}
```

**Kursive** Schriftschnitte sind im Allgemeinen kursiv gestaltet und verwenden normalerweise weniger horizontalen Raum als ihre ungestylten Gegenstücke, während **schräge** Schriftschnitte normalerweise nur gekippte Versionen des regulären Schriftschnitts sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schriftschnitte simuliert, indem die Glyphen des regulären Schriftschnitts künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style`-Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben, die optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` lautet.

### Werte

- `normal`
  - : Wählt eine Schriftart, die als `normal` innerhalb einer {{cssxref("font-family")}} klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursive Version des Schriftschnitts verfügbar ist, wird eine als `oblique` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schräge Version des Schriftschnitts verfügbar ist, wird eine als `italic` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn in der gewählten Schriftfamilie eine oder mehrere schräge Schriftschnitte verfügbar sind, wird diejenige gewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine schrägen Schriftschnitte verfügbar sind, wird der Browser eine schräge Version der Schrift durch Neigen eines normalen Schriftschnitts um den angegebenen Betrag synthetisieren. Gültige Werte sind Gradwerte von `-90deg` bis einschließlich `90deg`. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind am Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen wird bei einem angeforderten Winkel von 14 Grad oder höher größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Schriftschriftauswahl-Abschnitt](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten können eine feine Steuerung über den Grad bieten, zu dem ein schräger Schnitttyp geneigt ist. Sie können dies mit dem `<angle>`-Modifikator für das Schlüsselwort `oblique` auswählen.

Für TrueType- oder OpenType-Variable-Schriftarten wird die Variante `"slnt"` verwendet, um unterschiedliche Neigungswinkel für schräge Typen zu implementieren, und die Variante `"ital"` mit einem Wert von 1 wird verwendet, um kursive Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Abspielen" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu ändern.

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

Große Texteabschnitte, die mit einem `font-style`-Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Bedenken wie Dyslexie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftschnitte

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
- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
