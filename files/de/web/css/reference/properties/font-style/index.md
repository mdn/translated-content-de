---
title: font-style
slug: Web/CSS/Reference/Properties/font-style
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart in einem normalen, kursiven oder schrägen Schnitt aus ihrer {{cssxref("font-family")}} gestylt werden soll.

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

**Kursive** Schriftarten sind in der Regel kursive Natur und nutzen normalerweise weniger horizontalen Platz als ihre ungestylten Pendants, während **schräge** Schriftarten in der Regel nur geneigte Versionen des regulären Schnitts sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schnitte durch das künstliche Neigen der Glyphen des regulären Schnitts simuliert (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als ein einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben, das optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursiven Versionen des Schnitts verfügbar sind, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schrägen Versionen des Schnitts verfügbar sind, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle)
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn ein oder mehrere schräge Schnitte in der gewählten Schriftfamilie verfügbar sind, wird derjenige gewählt, der dem angegebenen Winkel am nächsten kommt. Wenn keine schrägen Schnitte verfügbar sind, wird der Browser eine schräge Version der Schriftart synthetisieren, indem ein normaler Schnitt um den angegebenen Betrag geneigt wird. Gültige Werte sind Gradwerte von `-90deg` bis `90deg` inklusive. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte werden zum Zeilenende hin geneigt, während negative Werte zum Zeilenanfang hin geneigt werden.

    Im Allgemeinen werden größere Winkel bevorzugt, wenn ein angeforderter Winkel von 14 Grad oder mehr angegeben wird; andernfalls werden kleinere Winkel bevorzugt (siehe den [font matching Abschnitt der Spezifikation](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriften

Variable Schriften können eine feine Steuerung über den Grad bieten, bis zu dem eine schräge Schriftart geneigt ist. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable-Schriften wird die `"slnt"` Variation verwendet, um unterschiedliche Neigungswinkel für schräg zu implementieren, und die `"ital"` Variation mit einem Wert von 1 wird verwendet, um kursiv zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu verändern.

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

Große Textabschnitte, die mit einem `font-style` Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Einschränkungen wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

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
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
