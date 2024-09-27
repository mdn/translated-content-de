---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Schnitt aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftarten sind im Allgemeinen kursiv gehalten und verwenden normalerweise weniger horizontalen Platz als ihre ungestalteten Gegenstücke, während **schräge** Schnitte in der Regel nur geneigte Versionen des normalen Schnitts sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schnitte simuliert, indem die Glyphen des normalen Schnitts künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Die `font-style` Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben, das optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart aus, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart aus, die als `italic` klassifiziert ist. Wenn keine kursiv-Version des Schnitts verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist. Wenn keine schräge Version des Schnitts verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist und zusätzlich einen Winkel für die Neigung des Textes angibt. Wenn eine oder mehrere schräge Schnitte in der gewählten Schriftfamilie verfügbar sind, wird derjenige ausgewählt, der am besten zum angegebenen Winkel passt. Wenn keine schrägen Schnitte verfügbar sind, wird der Browser eine schräge Version der Schriftart synthetisieren, indem er einen normalen Schnitt um den angegebenen Betrag neigt. Gültige Werte sind Gradangaben von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen sind bei einem angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Schriftanpassungsabschnitt der Spezifikation](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) für den genauen Algorithmus).

### Variable Schriften

Variable Schriften können eine feine Steuerung über den Grad ermöglichen, zu dem ein schräger Schnitt geneigt wird. Sie können dies mit dem `<angle>` Modifikator für das `oblique` Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable Schriften wird die `"slnt"` Variation verwendet, um verschiedene Neigungswinkel für schräg zu implementieren, und die `"ital"` Variation mit einem Wert von 1 wird verwendet, um kursive Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

> [!NOTE]
> Damit das untenstehende Beispiel funktioniert, benötigen Sie einen Browser, der die CSS Fonts Level 4 Syntax unterstützt, bei der `font-style: oblique` einen `<angle>` akzeptieren kann. Die Demo lädt mit `font-style: oblique 23deg;`. Ändern Sie den Wert, um die Neigung des Textes zu sehen.

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-style` Wert von `italic` gesetzt sind, können für Personen mit kognitiven Bedenken wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis der WCAG, Erklärung zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis der WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Grundlegendes Text- und Schriftstyling](/de/docs/Learn/CSS/Styling_text/Fundamentals)
