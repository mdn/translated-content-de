---
title: font-style
slug: Web/CSS/@font-face/font-style
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

{{CSSRef}}

Der CSS-Deskriptor **`font-style`** ermöglicht es Autoren, Schriftstile für die im {{cssxref("@font-face")}}-At-Regel spezifizierten Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen. Anschließend kann der `font-style`-Deskriptor verwendet werden, um den Stil des Schriftschnitts explizit festzulegen. Die Werte für diesen CSS-Deskriptor sind dieselben wie die der entsprechenden {{cssxref("font-style")}}-Eigenschaft.

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
  - : Wählt eine Schrift aus, die als `oblique` klassifiziert ist, und gibt zusätzlich einen Bereich für zulässige Winkel der Textneigung an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Angabe eines kursiven Schriftstils

Als Beispiel betrachten wir die Garamond-Schriftfamilie, in ihrer normalen Form erhalten wir folgendes Ergebnis:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![ungestylte Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen wie die ungestylte Version, aber sie sind künstlich um einige Grad geneigt.

![künstlich geneigte Garamond](garamondartificialstyle.jpg)

Wenn jedoch eine echte kursivierte Version der Schriftfamilie existiert, können wir sie im `src`-Deskriptor einbinden und den Schriftstil als kursiv angeben, um klarzustellen, dass die Schrift kursiviert ist. Echte Kursivschriften verwenden andere Glyphen und unterscheiden sich ein wenig von ihren aufrechten Gegenstücken, haben einige einzigartige Merkmale und weisen im Allgemeinen eine abgerundete und kalligrafische Qualität auf. Diese Schriften werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![kursiv Garamond](garamonditalic.jpg)

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
