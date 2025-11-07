---
title: font-style
slug: Web/CSS/Reference/At-rules/@font-face/font-style
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-style`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, Schriftstile für die im {{cssxref("@font-face")}} At-Regel angegebenen Schriften zu spezifizieren.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-style` Deskriptor verwenden, um den Stil des Schriftschnitts explizit anzugeben. Die Werte für diesen CSS-Deskriptor sind die gleichen wie die der entsprechenden {{cssxref("font-style")}} Eigenschaft.

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
```

### Werte

- `normal`
  - : Wählt die normale Version der Schriftfamilie aus.
- `italic`
  - : Gibt an, dass der Schriftschnitt eine kursivierte Version der normalen Schrift ist.
- `oblique`
  - : Gibt an, dass der Schriftschnitt eine künstlich geneigte Version der normalen Schrift ist.
- `oblique` mit Winkel
  - : Wählt eine Schrift, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine Schrift, die als `oblique` klassifiziert ist, und gibt zusätzlich einen zulässigen Winkelbereich für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung eines kursiven Schriftstils

Betrachten Sie als Beispiel die Schriftfamilie Garamond; in ihrer normalen Form erhalten wir folgendes Ergebnis:

```css
@font-face {
  font-family: "garamond";
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

Die kursive Version dieses Textes verwendet dieselben Glyphen wie die ungestylte Version, jedoch sind sie künstlich um einige Grad geneigt.

![artificially sloped garamond](garamondartificialstyle.jpg)

Andererseits, wenn eine echte kursive Version der Schriftfamilie existiert, können wir sie im `src` Deskriptor aufnehmen und den Schriftstil als kursiv angeben, um deutlich zu machen, dass die Schrift kursiv ist. Echte Kursivschrift verwendet unterschiedliche Glyphen und unterscheidet sich ein wenig von ihren aufrechten Gegenstücken, da sie einige einzigartige Merkmale aufweist und im Allgemeinen eine abgerundete und kalligraphische Qualität besitzt. Diese Schriften werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

```css
@font-face {
  font-family: "garamond";
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![italic garamond](garamonditalic.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
