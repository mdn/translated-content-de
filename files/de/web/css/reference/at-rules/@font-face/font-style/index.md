---
title: "`font-style`-CSS-At-Rule-Deskriptor"
short-title: font-style
slug: Web/CSS/Reference/At-rules/@font-face/font-style
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Der [CSS](/de/docs/Web/CSS)-Deskriptor **`font-style`** ermöglicht es Autoren, Schriftstile für die in der At-Regel {{cssxref("@font-face")}} angegebenen Schriftarten festzulegen.

Für eine bestimmte Schriftfamilie können Autoren verschiedene Schriftschnitte herunterladen, die den unterschiedlichen Stilen derselben Schriftfamilie entsprechen, und dann den Deskriptor `font-style` verwenden, um den Stil des Schriftschnitts explizit festzulegen. Die Werte für diesen CSS-Deskriptor entsprechen denen der zugehörigen Eigenschaft {{cssxref("font-style")}}.

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
  - : Legt fest, dass der Schriftschnitt eine kursive Version der normalen Schrift ist.
- `oblique`
  - : Legt fest, dass der Schriftschnitt eine künstlich geneigte Version der normalen Schrift ist.
- `oblique` mit Winkel
  - : Wählt eine als `oblique` klassifizierte Schrift aus und gibt zusätzlich einen Winkel für die Neigung des Textes an.
- `oblique` mit Winkelbereich
  - : Wählt eine als `oblique` klassifizierte Schrift aus und gibt zusätzlich einen Bereich zulässiger Winkel für die Neigung des Textes an. Beachten Sie, dass ein Bereich nur unterstützt wird, wenn `font-style` den Wert `oblique` hat; für `font-style: normal` oder `italic` ist kein zweiter Wert zulässig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen kursiven Schriftstil angeben

Betrachten Sie als Beispiel die Schriftfamilie Garamond in ihrer normalen Form. Wir erhalten das folgende Ergebnis:

```css
@font-face {
  font-family: "garamond";
  src: url("garamond.woff2");
}
```

![Garamond ohne Stil](garamondunstyled.jpg)

Die kursivierte Version dieses Textes verwendet dieselben Glyphen wie die nicht formatierte Version, sie werden jedoch künstlich um einige Grad geneigt.

![künstlich geneigte Garamond](garamondartificialstyle.jpg)

Wenn hingegen eine echte kursive Version der Schriftfamilie vorhanden ist, können wir sie in den Deskriptor `src` aufnehmen und den Schriftstil als kursiv angeben, sodass deutlich wird, dass die Schrift kursiv ist. Echte Kursivschriften verwenden andere Glyphen und unterscheiden sich etwas von ihren aufrechten Entsprechungen; sie weisen einige einzigartige Merkmale auf und besitzen im Allgemeinen eine abgerundete und kalligrafische Qualität. Diese Schriftarten werden speziell von Schriftdesignern erstellt und sind **nicht** künstlich geneigt.

```css
@font-face {
  font-family: "garamond";
  src: url("garamond-italic.woff2");
  font-style: italic;
}
```

![kursive Garamond](garamonditalic.jpg)

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
