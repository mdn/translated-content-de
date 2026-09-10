---
title: "`font-style` CSS property"
short-title: font-style
slug: Web/CSS/Reference/Properties/font-style
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-style`** legt fest, ob eine Schriftart aus ihrer {{cssxref("font-family")}} mit einem normalen, kursiven oder schräggestellten Schnitt dargestellt werden soll.

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
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

**Kursive** Schriftschnitte sind im Allgemeinen von Schreibschrift geprägt und benötigen üblicherweise weniger horizontalen Platz als ihre nicht formatierten Gegenstücke, während **schräggestellte** Schnitte üblicherweise lediglich geneigte Versionen des regulären Schnitts sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursive als auch schräggestellte Schnitte simuliert, indem die Glyphen des regulären Schnitts künstlich geneigt werden (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben. Auf das Schlüsselwort `oblique` kann optional ein `<angle>` folgen:

- `normal`
  - : Wählt eine Schriftart aus, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart aus, die als `italic` klassifiziert ist. Wenn keine kursive Version des Schriftschnitts verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart aus, die als `oblique` klassifiziert ist. Wenn keine schräggestellte Version des Schriftschnitts verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine von beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` {{cssxref("angle")}}
  - : Wählt eine als `oblique` klassifizierte Schriftart aus und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn in der ausgewählten Schriftfamilie ein oder mehrere schräggestellte Schnitte verfügbar sind, wird derjenige ausgewählt, der dem angegebenen Winkel am nächsten kommt. Wenn keine schräggestellten Schnitte verfügbar sind, synthetisiert der Browser eine schräggestellte Version der Schriftart, indem er einen normalen Schnitt um den angegebenen Betrag neigt. Gültige Werte sind Gradwerte von `-90deg` bis einschließlich `90deg`. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte werden zum Zeilenende hin geneigt, während negative Werte zum Zeilenanfang hin geneigt werden.

    Im Allgemeinen werden bei einem angeforderten Winkel von 14 Grad oder mehr größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den Abschnitt zur [Schriftabgleichung](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

Das Modul [CSS fonts](/de/docs/Web/CSS/Guides/Fonts) definiert außerdem die Werte `left` und `right`, um einen kursiven oder schräggestellten Schnitt mit einer bestimmten Neigungsrichtung auszuwählen; diese Werte werden jedoch von keinem Browser unterstützt.

### Variable Schriftarten

Variable Schriftarten können eine präzise Steuerung des Grades bieten, in dem ein schräggestellter Schnitt geneigt ist. Sie können dies mit dem Modifikator `<angle>` für das Schlüsselwort `oblique` auswählen.

Bei variablen TrueType- oder OpenType-Schriftarten wird die Variation `"slnt"` verwendet, um unterschiedliche Neigungswinkel für `oblique` zu implementieren, und die Variation `"ital"` mit dem Wert 1 wird verwendet, um `italic`-Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie in den untenstehenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um zu sehen, wie sich die Neigung des Textes ändert.

```html live-sample___oblique-example
<p class="sample">
  ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
  waddling like an elephantine lizard up Holborn Hill.
</p>
```

```css live-sample___oblique-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2");
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

Große Textabschnitte mit einem `font-style`-Wert von `italic` können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C: WCAG 2.2 verstehen](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

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
- SVG-Attribut {{SVGAttr("font-style")}}
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
