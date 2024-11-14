---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Stil aus ihrer {{cssxref("font-family")}} formatiert werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind typischerweise kursiv geformt und verwenden in der Regel weniger horizontalen Raum als ihre unformatierten Gegenstücke, während **schräge** Schriftarten normalerweise nur geneigte Versionen der regulären Schriftart sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursiv als auch schräg künstlich simuliert, indem die Glyphen der regulären Schriftart geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als ein einzelnes Stichwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird und optional einen Winkel enthalten kann, wenn das Stichwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart aus, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart aus, die als `italic` klassifiziert ist. Wenn keine kursiven Versionen der Schriftart verfügbar sind, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine verfügbar sind, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist. Wenn keine schrägen Versionen der Schriftart verfügbar sind, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine verfügbar sind, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn in der gewählten Schriftfamilie ein oder mehrere schräge Schriftarten verfügbar sind, wird diejenige ausgewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine schräge Schriftarten verfügbar sind, erstellt der Browser eine geneigte Version der Schriftart, indem er eine normale Schriftart um den angegebenen Betrag neigt. Gültige Werte sind Grad-Werte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Zeilenende geneigt, während negative Werte zum Zeilenanfang geneigt sind.

    Im Allgemeinen gilt, dass bei einem angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt werden; andernfalls werden kleinere Winkel bevorzugt (siehe den Abschnitt zur [Schriftauswahl im Spezifikationsdokument](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Fonts

Variable Schriftarten können eine feine Kontrolle über den Grad der Neigung einer schräge Schriftart bieten. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Stichwort auswählen.

Bei TrueType- oder OpenType-Variablen-Schriftarten wird die `"slnt"` Variation verwendet, um unterschiedliche Neigungswinkel für schräge Schriftarten zu implementieren, und die `"ital"` Variation mit einem Wert von 1 wird verwendet, um kursiv Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu verändern.

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

- [MDN Verständnis WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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
- [Grundlegende Text- und Schriftformatierungen](/de/docs/Learn/CSS/Styling_text/Fundamentals)
