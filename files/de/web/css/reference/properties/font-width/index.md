---
title: "`font-width` CSS property"
short-title: font-width
slug: Web/CSS/Reference/Properties/font-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

> [!NOTE]
> Die `font-width`-Eigenschaft ist die moderne Ersatzlösung für {{cssxref("font-stretch")}}, welches ein veralteter Alias ist. Obwohl `font-width` der bevorzugte Name in der Spezifikation ist, hat `font-stretch` derzeit eine breitere Browser-Unterstützung. Überprüfen Sie das [Fallback-Beispiel](#bereitstellung_eines_font-stretch-fallbacks) und die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Details.

Die **`font-width`** [CSS](/de/docs/Web/CSS) Eigenschaft wählt ein normales, komprimiertes oder erweitertes Schriftbild aus einer Schriftart aus.

{{InteractiveExample("CSS Demo: font-width")}}

```css interactive-example-choice
font-width: condensed;
```

```css interactive-example-choice
font-width: expanded;
```

```css interactive-example-choice
font-width: ultra-expanded;
```

```css interactive-example-choice
font-width: 50%;
```

```css interactive-example-choice
font-width: 100%;
```

```css interactive-example-choice
font-width: 150%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
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
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "League";
  font-style: normal;
  font-weight: normal;
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## Syntax

```css
/* Keyword values */
font-width: normal;
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;

/* Percentage values */
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Global values */
font-width: inherit;
font-width: initial;
font-width: revert;
font-width: revert-layer;
font-width: unset;
```

Diese Eigenschaft kann als einzelnes Schlüsselwort oder als {{cssxref("&lt;percentage&gt;")}} Wert angegeben werden.

### Werte

- `normal`
  - : Gibt ein normalerweise komprimiertes Schriftbild an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt ein stärker komprimiertes Schriftbild als normal an, wobei `ultra-condensed` das komprimierteste ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt ein stärker erweitertes Schriftbild als normal an, wobei `ultra-expanded` das am meisten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung zwischen den Schlüsselwort-Werten und den Prozentzahlen:

| Schlüsselwort     | Prozentsatz |
| ----------------- | ----------- |
| `ultra-condensed` | 50%         |
| `extra-condensed` | 62.5%       |
| `condensed`       | 75%         |
| `semi-condensed`  | 87.5%       |
| `normal`          | 100%        |
| `semi-expanded`   | 112.5%      |
| `expanded`        | 125%        |
| `extra-expanded`  | 150%        |
| `ultra-expanded`  | 200%        |

## Beschreibung

Einige Schriftfamilien bieten zusätzliche Schriftbilder, bei denen die Zeichen schmaler als das normale Schriftbild (_komprimierte_ Schriftbilder) oder breiter als das normale Schriftbild (_erweiterte_ Schriftbilder) sind.

Sie können `font-width` verwenden, um ein komprimiertes oder erweitertes Schriftbild aus solchen Schriftarten auszuwählen. Wenn die von Ihnen verwendete Schriftart keine komprimierten oder erweiterten Schriftbilder anbietet, hat diese Eigenschaft keine Wirkung.

### Auswahl des Schriftbildes

Das für einen gegebenen Wert von `font-width` ausgewählte Schriftbild hängt von den von der Schrift unterstützten Bildern ab. Wenn die Schriftart ein Gesicht, das exakt mit dem angegebenen Wert übereinstimmt, nicht bereitstellt, dann ordnen Werte unter 100% einem komprimierten Schriftbild zu, und Werte größer oder gleich 100% einem erweiterten Schriftbild.

Die folgende Tabelle zeigt die Auswirkung der Einstellung unterschiedlicher Prozentsätze von `font-width` auf zwei verschiedene Schriftarten:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
}

body {
  font-family: system-ui;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tbody th {
  text-align: right;
}

th,
td {
  padding: 0.25rem;
  font-weight: normal;
  text-align: center;
}

td {
  border: solid;
  border-width: 1px;
  font-size: 5rem;
}

.inconsolata {
  font-family: "Inconsolata", sans-serif;
}

.anek-malayalam {
  font-family: "Anek Malayalam", sans-serif;
}

td:nth-child(2) {
  font-width: 50%;
}
td:nth-child(3) {
  font-width: 62.5%;
}
td:nth-child(4) {
  font-width: 75%;
}
td:nth-child(5) {
  font-width: 87.5%;
}
td:nth-child(6) {
  font-width: 100%;
}
td:nth-child(7) {
  font-width: 112.5%;
}
td:nth-child(8) {
  font-width: 125%;
}
td:nth-child(9) {
  font-width: 150%;
}
td:nth-child(10) {
  font-width: 200%;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr class="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr class="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('Font face selection', "100%", "250px")}}

Das folgende Bildschirmfoto zeigt, wie die obige Tabelle dargestellt wird, falls Ihr Browser die `font-width`-Eigenschaft nicht unterstützt:

![Eine Vergleichstabelle mit zwei Reihen, in der der Kleinbuchstabe e in verschiedenen Breiten (50 %, 62,5 %, 75 %, 87,5 %, 100 %, 112,5 %, 125 %, 150 %, 200 %) gerendert wird. Die oberste Reihe ist mit Inconsolata und die untere Reihe mit Anek Malayalam beschriftet. Beide Schriftarten sind serifenlos, und die Buchstaben von Inconsolata sind leicht breiter im Vergleich zu denen von Anek Malayalam.](font-face-selection.png)

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) ist eine variable Schriftart, die eine kontinuierliche Palette von Breiten von 50 % bis 200 % bietet. <!-- Dynamisch von Google Fonts mit Abfrage abgerufener woff2 Verweis: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) ist eine variable Google-Schriftart, die Breiten von 75 % bis 125 % unterstützt. Werte unterhalb und oberhalb dieses Bereichs wählen die am besten passende Schrift aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax("font-width")}}

## Beispiele

### Festlegen von Schriftbreitenprozenten

```html
<p class="condensed">an elephantine lizard</p>
<p class="normal">an elephantine lizard</p>
<p class="expanded">an elephantine lizard</p>
```

```css
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "LeagueMonoVariable";
  font-style: normal;
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-width: 50%;
}

.normal {
  font-width: 100%;
}

.expanded {
  font-width: 200%;
}
```

{{EmbedLiveSample("Setting font width percentages", "100%", 200)}}

### Bereitstellung eines font-stretch-Fallbacks

Da `font-width` noch keine breite Browser-Unterstützung hat, möchten Sie möglicherweise die veraltete {{cssxref("font-stretch")}}-Eigenschaft als Fallback hinzufügen. Setzen Sie `font-stretch` vor `font-width`, damit unterstützende Browser die moderne Eigenschaft verwenden:

```css
p {
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster automatisieren, indem Sie das [postcss-preset-env](https://preset-env.cssdb.org/) Plugin für PostCSS verwenden, das die [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) Transformation enthält, um `font-width`-Eigenschaften automatisch in `font-stretch` zu konvertieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-width")}} Deskriptor für {{cssxref("@font-face")}}
- Veraltete {{cssxref("font-stretch")}} Alias Eigenschaft mit besserer Browser-Unterstützung
- {{cssxref("font-style")}} Eigenschaft
- {{cssxref("font-weight")}} Eigenschaft
- SVG {{SVGAttr("font-width")}} Attribut
- SVG {{SVGAttr("font-stretch")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts) Modul
