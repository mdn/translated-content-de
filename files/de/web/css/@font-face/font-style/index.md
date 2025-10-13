---
title: font-style
slug: Web/CSS/@font-face/font-style
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der **`font-style`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, Schriftstile für die Schriften zu spezifizieren, die in der {{cssxref("@font-face")}} At-Regel angegeben sind.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den `font-style` Deskriptor verwenden, um den Stil des Schriftschnitts explizit zu spezifizieren. Die Werte für diesen CSS-Deskriptor sind dieselben wie die der entsprechenden {{cssxref("font-style")}} Eigenschaft.

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
  - : Wählt eine Schrift, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Bereich zulässiger Winkel für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen kursiven Schriftstil angeben

Betrachten Sie als Beispiel die Garamond Schriftfamilie. In ihrer normalen Form erhalten wir folgendes Ergebnis:

```css
@font-face {
  font-family: "garamond";
  src: url("garamond.ttf");
}
```

![ungestyltes Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen, die in der ungestylten Version vorhanden sind, aber sie sind künstlich um einige Grad geneigt.

![künstlich geneigtes Garamond](garamondartificialstyle.jpg)

Wenn jedoch eine echte kursivierte Version der Schriftfamilie existiert, können wir diese im `src` Deskriptor einfügen und den Schriftstil als kursiv angeben, damit klar ist, dass die Schrift kursive Merkmale aufweist. Echte Kursivschriften verwenden andere Glyphen und unterscheiden sich ein wenig von ihren aufrechten Gegenstücken, indem sie einige einzigartige Merkmale aufweisen und im Allgemeinen eine gerundete und kalligrafische Qualität haben. Diese Schriften werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

```css
@font-face {
  font-family: "garamond";
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![kursives Garamond](garamonditalic.jpg)

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
