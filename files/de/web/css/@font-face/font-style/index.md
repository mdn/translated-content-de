---
title: font-style
slug: Web/CSS/@font-face/font-style
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

{{CSSRef}}

Der **`font-style`**-CSS-Deskriptor ermöglicht es Autoren, Schriftstile für die in der {{cssxref("@font-face")}}-At-Regel angegebenen Schriften zu definieren.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-style`-Deskriptor verwenden, um den Stil des Schriftschnitts explizit festzulegen. Die Werte für diesen CSS-Deskriptor sind die gleichen wie die der entsprechenden {{cssxref("font-style")}}-Eigenschaft.

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
  - : Wählt eine als `oblique` klassifizierte Schrift und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine als `oblique` klassifizierte Schrift und gibt zusätzlich einen Bereich zulässiger Winkel für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert zulässig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen kursiven Schriftstil angeben

Als Beispiel nehmen wir die Garamond-Schriftfamilie, in ihrer normalen Form erhalten wir das folgende Ergebnis:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen, die in der ungestylten Version vorhanden sind, aber sie sind künstlich um ein paar Grad geneigt.

![artificially sloped garamond](garamondartificialstyle.jpg)

Wenn jedoch eine echte kursivierte Version der Schriftfamilie existiert, können wir sie im `src`-Deskriptor einfügen und den Schriftstil als kursiv angeben, um klarzustellen, dass die Schrift kursiviert ist. Echte Kursive verwenden unterschiedliche Glyphen und unterscheiden sich ein wenig von ihren aufrechten Gegenstücken, haben einige einzigartige Merkmale und weisen allgemein eine abgerundete und kalligrafische Qualität auf. Diese Schriften werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

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
