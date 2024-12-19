---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart im normalen, kursiven oder schrägen Stil aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind im Allgemeinen kursiv gestaltet und nutzen in der Regel weniger horizontalen Platz als ihre ungestylten Gegenstücke, während **schräge** Schriftarten meist einfach geneigte Versionen der regulären Schriftart sind. Wenn der spezifische Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schriftarten durch künstliches Neigen der Glyphen der regulären Schriftart simuliert (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als einzelnes Schlüsselwort festgelegt, das aus der unten stehenden Werteliste ausgewählt wird und optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursive Version der Schriftart verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Schriftart verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine als `oblique` klassifizierte Schriftart aus und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn ein oder mehrere schräge Schriftarten in der gewählten Schriftfamilie verfügbar sind, wird diejenige ausgewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine schrägen Schriftarten verfügbar sind, synthetisiert der Browser eine schräge Version der Schriftart, indem er eine normale Schriftart um den angegebenen Betrag neigt. Gültige Werte sind Gradwerte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen werden bei einer angeforderten Neigung von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Font Matching Abschnitt der Spezifikation](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten bieten eine feine Kontrolle über den Grad, in dem eine schräge Schriftart geneigt wird. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable Fonts wird die `"slnt"` Variation verwendet, um verschiedene Neigungswinkel für oblique zu implementieren, und die `"ital"` Variation mit einem Wert von 1 wird verwendet, um Kursivwerte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

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

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-style` Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer zu lesen sein.

- [MDN Verständnis für WCAG, Richtlinie 1.4 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis für WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
