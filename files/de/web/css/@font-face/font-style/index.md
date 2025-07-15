---
title: font-style
slug: Web/CSS/@font-face/font-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-style`** CSS-Deskriptor ermöglicht es Autoren, Schriftstile für die im {{cssxref("@font-face")}}-At-Regel angegebenen Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen. Danach können sie den Deskriptor `font-style` verwenden, um den Stil des Schriftschnitts explizit festzulegen. Die Werte für diesen CSS-Deskriptor sind dieselben wie die der entsprechenden {{cssxref("font-style")}}-Eigenschaft.

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
  - : Wählt eine Schrift aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine Schrift aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Bereich erlaubter Winkel für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine kursive Schriftart festlegen

Nehmen wir als Beispiel die Garamond-Schriftfamilie in ihrer normalen Form, erhalten wir folgendes Ergebnis:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen, die in der unstilisierten Version vorhanden sind, aber sie sind künstlich um einige Grad geneigt.

![artificially sloped garamond](garamondartificialstyle.jpg)

Wenn hingegen eine echte kursivierte Version der Schriftfamilie existiert, können wir sie im `src`-Deskriptor einfügen und den Schriftstil als kursiv festlegen, damit klar ist, dass die Schrift kursiviert ist. Echte Kursivschrift verwendet unterschiedliche Glyphen und unterscheidet sich etwas von ihren aufrechten Gegenstücken, da sie einige einzigartige Merkmale haben und im Allgemeinen eine abgerundete und kalligrafische Qualität aufweisen. Diese Schriftarten werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

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
