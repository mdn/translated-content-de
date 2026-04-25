---
title: "`font-style` CSS-Attribut-Descriptor"
short-title: font-style
slug: Web/CSS/Reference/At-rules/@font-face/font-style
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-style`** [CSS](/de/docs/Web/CSS) Descriptor ermöglicht es Autoren, Schriftstile für die im {{cssxref("@font-face")}} Attribut angegebenen Schriften festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den verschiedenen Stilen dieser Schriftfamilie entsprechen, und dann den `font-style` Descriptor verwenden, um den Stil des Schriftschnitts explizit zu spezifizieren. Die Werte für diesen CSS-Attribut-Descriptor sind dieselben wie die der entsprechenden {{cssxref("font-style")}} Eigenschaft.

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
  - : Wählt eine als `oblique` klassifizierte Schrift aus und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine als `oblique` klassifizierte Schrift aus und gibt zusätzlich einen Bereich der zulässigen Winkel für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn der `font-style` `oblique` ist; für `font-style: normal` oder `italic` ist kein zweiter Wert erlaubt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren eines kursiven Schriftstils

Als Beispiel nehmen wir die Garamond-Schriftfamilie. In ihrer normalen Form erhalten wir folgendes Ergebnis:

```css
@font-face {
  font-family: "garamond";
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen, die in der nicht formatierten Version vorhanden sind, ist jedoch künstlich um einige Grad geneigt.

![artificially sloped garamond](garamondartificialstyle.jpg)

Wenn jedoch eine echte kursivierte Version der Schriftfamilie existiert, können wir sie im `src` Descriptor einschließen und den Schriftstil als kursiv spezifizieren, damit klar ist, dass die Schrift kursiviert ist. Echte Kursive verwenden unterschiedliche Glyphen und unterscheiden sich ein wenig von ihren aufrechten Gegenstücken, da sie einige einzigartige Merkmale aufweisen und im Allgemeinen eine abgerundete und kalligrafische Qualität haben. Diese Schriften werden speziell von Schriftgestaltern erstellt und sind **nicht** künstlich geneigt.

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
