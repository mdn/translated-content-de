---
title: "`font-style` CSS property"
short-title: font-style
slug: Web/CSS/Reference/Properties/font-style
l10n:
  sourceCommit: 1551c09756bad6ad2772ce8ed6a934ae4e309642
---

Die **`font-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Schriftart mit einem normalen, kursiven oder schrägen Stil aus ihrer {{cssxref("font-family")}} gestaltet werden soll.

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

**Kursive** Schriftarten sind im Allgemeinen kursiv gestaltet und verwenden normalerweise weniger horizontalen Raum als ihre ungestalteten Gegenstücke, während **schräge** Schriftarten in der Regel einfach geneigte Versionen der regulären Schriftart sind. Wenn der angegebene Stil nicht verfügbar ist, werden sowohl kursiv als auch schräg durch künstliches Neigen der Glyphen des regulären Stils simuliert (verwenden Sie {{cssxref("font-synthesis")}}, um dieses Verhalten zu steuern).

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben. Das `oblique`-Schlüsselwort kann optional von einem `<angle>` gefolgt werden:

- `normal`
  - : Wählt eine Schriftart, die innerhalb einer {{Cssxref("font-family")}} als `normal` klassifiziert ist.
- `italic`
  - : Wählt eine Schriftart, die als `italic` klassifiziert ist. Wenn keine kursive Version der Schriftart verfügbar ist, wird stattdessen eine als `oblique` klassifizierte verwendet. Wenn keine der beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique`
  - : Wählt eine Schriftart, die als `oblique` klassifiziert ist. Wenn keine schräge Version der Schriftart verfügbar ist, wird stattdessen eine als `italic` klassifizierte verwendet. Wenn keine der beiden verfügbar ist, wird der Stil künstlich simuliert.
- `oblique` {{cssxref("angle")}}
  - : Wählt eine als `oblique` klassifizierte Schriftart aus und gibt zusätzlich einen Winkel für die Neigung des Textes an. Wenn in der gewählten Schriftfamilie eine oder mehrere schräge Schriftarten verfügbar sind, wird diejenige gewählt, die am ehesten dem angegebenen Winkel entspricht. Sind keine schrägen Schriftarten verfügbar, erzeugt der Browser eine schrägen Version der Schriftart, indem er eine normale Schrift um den angegebenen Betrag neigt. Gültige Werte sind Gradwerte von `-90deg` bis `90deg` einschließlich. Wenn kein Winkel angegeben ist, wird ein Winkel von 14 Grad verwendet. Positive Werte sind ans Ende der Zeile geneigt, während negative Werte zum Anfang geneigt sind.

    Im Allgemeinen, für einen angeforderten Winkel von 14 Grad oder mehr, werden größere Winkel bevorzugt; andernfalls werden kleinere Winkel bevorzugt (siehe den [Schriftanpassungsabschnitt](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) der Spezifikation für den genauen Algorithmus).

Das [CSS Fonts](/de/docs/Web/CSS/Guides/Fonts) Modul definiert auch `left` und `right` Werte, um eine kursive oder schräge Schriftart mit einer bestimmten Neigungsrichtung zu wählen; diese Werte werden jedoch in keinem Browser unterstützt.

### Variable Schriftarten

Variable Schriftarten können eine feine Kontrolle über das Ausmaß bieten, in dem eine schräge Schriftart geneigt ist. Dies können Sie mit dem `<angle>` Modifier des `oblique`-Schlüsselworts wählen.

Für TrueType- oder OpenType-Variable-Schriftarten wird die `"slnt"`-Variation verwendet, um unterschiedliche Neigungswinkel für Oblique zu implementieren, und die `"ital"`-Variation mit einem Wert von 1 wird verwendet, um kursiv Werte zu implementieren. Siehe {{cssxref("font-variation-settings")}}.

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den Winkelwert, um die Neigung des Textes zu sehen.

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

Große Textabschnitte, die mit einem `font-style` Wert von `italic` gesetzt sind, können für Menschen mit kognitiven Problemen wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis für WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis für WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

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
- [Lernen: Grundlegendes zu Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
