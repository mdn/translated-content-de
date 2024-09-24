---
title: font-style
slug: Web/CSS/font-style
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-style`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob eine Schriftart mit einer normalen, kursiven oder schrägen Schriftform aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Kursive** Schriftformen sind in der Regel kursiv und verwenden normalerweise weniger horizontalen Platz als ihre ungestylten Gegenstücke, während **schräge** Schriftformen meist einfach geneigte Versionen der regulären Form sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräge Schriftformen simuliert, indem die Glyphen der regulären Form künstlich geneigt werden (nutzen Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Globale Werte */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: revert-layer;
font-style: unset;
```

Die `font-style`-Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben, das optional einen Winkel enthalten kann, wenn das Schlüsselwort `oblique` ist.

### Werte

- `normal`
  - : Wählt eine Schriftart, die als `normal` innerhalb einer {{Cssxref("font-family")}} klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursive Version der Form verfügbar ist, wird eine, die als `oblique` klassifiziert ist, stattdessen verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Form verfügbar ist, wird eine, die als `italic` klassifiziert ist, stattdessen verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` [`<angle>`](/de/docs/Web/CSS/angle)

  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn eine oder mehrere schräge Schriftformen in der gewählten Schriftfamilie verfügbar sind, wird diejenige gewählt, die am ehesten dem angegebenen Winkel entspricht. Wenn keine schrägen Formen verfügbar sind, wird der Browser eine schräge Version der Schriftart synthetisieren, indem eine normale Form um den angegebenen Betrag geneigt wird. Gültige Werte sind Gradangaben von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind zum Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen werden für einen gewünschten Winkel von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Abschnitt zur Schriftübereinstimmung](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

### Variable Schriftarten

Variable Schriftarten bieten eine feine Kontrolle über das Maß, in dem eine schräge Schriftform geneigt ist. Sie können dies mit dem `<angle>`-Modifikator für das `oblique`-Schlüsselwort auswählen.

Für TrueType- oder OpenType-Variable-Schriftarten wird die `"slnt"`-Variation zur Umsetzung von verschiedenen Neigungswinkeln für schräg verwendet, und die `"ital"`-Variation mit einem Wert von 1 wird zur Umsetzung kursiver Werte verwendet. Siehe {{cssxref("font-variation-settings")}}.

> [!NOTE]
> Damit das untenstehende Beispiel funktioniert, benötigen Sie einen Browser, der die CSS Fonts Level 4-Syntax unterstützt, in der `font-style: oblique` einen `<angle>` akzeptieren kann. Das Demo lädt mit `font-style: oblique 23deg;`. Ändern Sie den Wert, um die Neigung des Textes zu sehen.

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-style`-Wert von `italic` gesetzt sind, können für Personen mit kognitiven Beeinträchtigungen wie Dyslexie schwer lesbar sein.

- [MDN Erklärung zu WCAG, Leitlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
- [Grundlegende Text- und Schriftstilierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
