---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`font-style`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt fest, ob eine Schriftart mit einer normalen, kursiven oder schrägen Schrift von ihrer {{cssxref("font-family")}} gestylt werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind in der Regel kursiv in ihrer Natur und nutzen üblicherweise weniger horizontalen Raum als ihre ungestylten Gegenstücke, während **schräge** Schriften typischerweise einfach geneigte Versionen des regulären Schriftschnitts sind. Wenn der spezifizierte Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schriftarten durch künstliches Neigen der Glyphen des regulären Schriftschnitts simuliert (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style`-Eigenschaft wird als einzelnes Schlüsselwort spezifiziert, das aus der nachstehenden Werteliste gewählt wird und optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart aus, die als `normal` innerhalb einer {{Cssxref("font-family")}} klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart aus, die als `italic` klassifiziert ist. Wenn keine kursive Version der Schriftart verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Schriftart verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn eine oder mehrere Schriftschnitte in der gewählten Schriftfamilie verfügbar sind, wird derjenige gewählt, der am ehesten dem angegebenen Winkel entspricht. Wenn keine schrägen Schriftschnitte verfügbar sind, wird der Browser eine schräge Version der Schriftart synthetisieren, indem er einen normalen Schriftschnitt um den angegebenen Betrag neigt. Gültige Werte sind Gradangaben von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben wird, wird ein Winkel von 14 Grad verwendet. Positive Werte neigen sich zum Ende der Zeile hin, während negative Werte sich zum Anfang neigen.

    Im Allgemeinen, für einen angeforderten Winkel von 14 Grad oder mehr, werden größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Schrift-Matching-Bereich des Specs](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten ermöglichen eine feine Kontrolle über den Grad, in dem eine schräge Schriftart geneigt wird. Sie können dies mit dem `<angle>`-Modifier für das `oblique`-Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable Schriftarten wird die `"slnt"`-Variation verwendet, um unterschiedliche Neigungswinkel für die Schräge zu implementieren, und die `"ital"`-Variation mit einem Wert von 1 wird verwendet, um Kursivwerte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den unten stehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu sehen.

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

Große Textabschnitte, die mit einem `font-style`-Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer lesbar sein.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
