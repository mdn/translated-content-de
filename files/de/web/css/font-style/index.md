---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart in einer normalen, kursiven oder künstlerisch geneigten Form aus ihrer {{cssxref("font-family")}} dargestellt werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind allgemein von Natur aus kursiv und verwenden in der Regel weniger horizontalen Platz als ihre ungestylten Gegenstücke, während **künstlerisch geneigte** Schriftarten normalerweise nur geneigte Versionen der regulären Schrift sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch künstlerisch geneigte Schriftarten simuliert, indem die Glyphen der regulären Schrift künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als ein einzelnes Schlüsselwort von der unten aufgeführten Liste von Werten angegeben, die optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursive Version der Schrift verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine künstlerisch geneigte Version der Schrift verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn eine oder mehrere künstlerisch geneigte Schriftarten in der gewählten Schriftfamilie verfügbar sind, wird die gewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine künstlerisch geneigten Schriftarten verfügbar sind, wird der Browser eine künstlerisch geneigte Version der Schrift synthetisieren, indem ein normaler Schnitt um den angegebenen Betrag geneigt wird. Gültige Werte sind Winkelwerte von `-90deg` bis `90deg`, einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind am Ende der Zeile geneigt, während negative Werte zum Anfang hin geneigt sind.

    Im Allgemeinen werden für einen angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Abschnitt zur Schriftabstimmung](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

### Variable Fonts

Variable Fonts können eine feine Kontrolle über den Grad der Neigung einer künstlerisch geneigten Schrift bieten. Sie können dies mit dem `<angle>`-Modifikator für das `oblique`-Schlüsselwort auswählen.

Für TrueType oder OpenType Variable Schriften wird die `"slnt"` Variation verwendet, um unterschiedliche Neigungswinkel für oblique zu implementieren, und die `"ital"` Variation mit einem Wert von 1, um kursiv Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den unten stehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu ändern.

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

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-style` Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer zu lesen sein.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
