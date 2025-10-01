---
title: font-style
slug: Web/CSS/@font-face/font-style
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`font-style`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, Schriftstile für die Schriftarten anzugeben, die in der {{cssxref("@font-face")}} At-Regel festgelegt sind.

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
  - : Wählt die normale Version der Schriftfamilie.
- `italic`
  - : Gibt an, dass der Schriftschnitt eine kursivierte Version der normalen Schrift ist.
- `oblique`
  - : Gibt an, dass der Schriftschnitt eine künstlich geneigte Version der normalen Schrift ist.
- `oblique` mit Winkel
  - : Wählt eine Schrift aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine Schrift aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen erlaubten Winkelbereich für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine kursive Schriftart angeben

Als Beispiel betrachten wir die Garamond-Schriftfamilie. In ihrer normalen Form erhalten wir das folgende Ergebnis:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet die gleichen Glyphen, die in der ungestylten Version vorhanden sind, jedoch sind sie künstlich um einige Grad geneigt.

![artificially sloped garamond](garamondartificialstyle.jpg)

Andererseits, wenn eine echte kursivierte Version der Schriftfamilie existiert, können wir sie im `src`-Deskriptor einschließen und den Schriftstil als kursiv angeben, um klarzustellen, dass die Schrift kursiv ist. Echte Kursive verwenden unterschiedliche Glyphen und unterscheiden sich ein wenig von ihren aufrechten Gegenstücken, da sie einige einzigartige Merkmale haben und im Allgemeinen eine abgerundete und kalligrafische Qualität aufweisen. Diese Schriftarten werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

```css
@font-face {
  font-family: garamond;
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
