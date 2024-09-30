---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Stil aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind in der Regel geschwungen und benötigen normalerweise weniger horizontalen Raum als ihre ungestylten Gegenstücke, während **schräge** Schriftarten meistens einfach geneigte Versionen der regulären Form sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schriftarten simuliert, indem die Glyphen der regulären Schrift künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste der Werte ausgewählt wird und optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine Kursivversion der Schrift verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine davon verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Schrift verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine davon verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und spezifiziert zusätzlich einen Winkel für die Neigung des Textes. Wenn eine oder mehrere schräge Versionen in der gewählten Schriftfamilie verfügbar sind, wird diejenige ausgewählt, die dem angegebenen Winkel am nächsten kommt. Wenn keine schrägen Schriftarten verfügbar sind, synthetisiert der Browser eine schräge Version der Schrift durch Neigung einer normalen Schrift um den angegebenen Betrag. Gültige Werte sind Gradwerte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen werden für einen angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt, ansonsten werden kleinere Winkel bevorzugt (siehe den [font matching Abschnitt](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

### Variable Fonts

Variable Schriftarten können eine feine Steuerung über den Grad der Neigung einer schrägen Schrift ermöglichen. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable-Schriftarten wird die `"slnt"` Variation verwendet, um unterschiedliche Neigungswinkel für schräge Schriftarten zu implementieren, und die `"ital"` Variation mit einem Wert von 1 wird verwendet, um kursive Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

> [!NOTE]
> Damit das folgende Beispiel funktioniert, benötigen Sie einen Browser, der die CSS Fonts Level 4 Syntax unterstützt, in der `font-style: oblique` einen `<angle>` akzeptieren kann. Die Demo lädt mit `font-style: oblique 23deg;`. Ändern Sie den Wert, um die Neigung des Textes zu sehen.

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

## Barrierefreiheit

Große Textabschnitte mit einem `font-style` Wert von `italic` können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Grundlegende Text- und Schriftartgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
