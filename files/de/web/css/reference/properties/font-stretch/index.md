---
title: font-stretch
slug: Web/CSS/Reference/Properties/font-stretch
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{deprecated_header}}

> [!NOTE]
> Die `font-stretch`-Eigenschaft [wurde nun in den Spezifikationen in `font-width` umbenannt](https://drafts.csswg.org/css-fonts/#font-stretch-desc). Der Name `font-stretch` wurde als Alias für die `font-width`-Eigenschaft beibehalten.
> Der neue Name `font-width` wird noch von keinem Browser unterstützt.

Die **`font-stretch`** [CSS](/de/docs/Web/CSS)-Eigenschaft wählt eine normale, komprimierte oder erweiterte Form einer Schriftart aus.

{{InteractiveExample("CSS Demo: font-stretch")}}

```css interactive-example-choice
font-stretch: condensed;
```

```css interactive-example-choice
font-stretch: expanded;
```

```css interactive-example-choice
font-stretch: ultra-expanded;
```

```css interactive-example-choice
font-stretch: 50%;
```

```css interactive-example-choice
font-stretch: 100%;
```

```css interactive-example-choice
font-stretch: 150%;
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
  font-stretch: 50% 200%; /* Required by Chrome - allow 50% to 200% */
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## Syntax

```css
/* <font-stretch-css3> keyword values */
font-stretch: normal;
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Percentage values */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
```

Diese Eigenschaft kann entweder als einzelnes `<font-stretch-css3>`-Schlüsselwort oder als einzelner {{cssxref("&lt;percentage&gt;")}}-Wert angegeben werden.

### Werte

- `normal`
  - : Gibt eine normale Schriftart an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt eine im Vergleich zur normalen Schriftart komprimiertere Schrift an, wobei `ultra-condensed` die kompakteste ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt eine im Vergleich zur normalen Schriftart erweiterte Schrift an, wobei `ultra-expanded` die am stärksten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50% und 200% (einschließlich). Negative Werte sind für diese Eigenschaft nicht erlaubt.

### Zuordnung von Schlüsselwort zu numerischem Wert

Die folgende Tabelle zeigt die Zuordnung zwischen den `<font-stretch-css3>`-Schlüsselwortwerten und den numerischen Prozentsätzen:

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

Einige Schriftfamilien bieten zusätzliche Formen an, bei denen die Zeichen schmaler als die normale Schrift (_condensed_ Formen) oder breiter als die normale Schrift (_expanded_ Formen) sind.

Sie können `font-stretch` verwenden, um eine komprimierte oder erweiterte Form aus solchen Schriftarten auszuwählen. Wenn die verwendete Schriftart keine komprimierten oder erweiterten Formen bietet, hat diese Eigenschaft keine Auswirkung.

### Auswahl der Schriftart

Die ausgewählte Form für einen gegebenen Wert von `font-stretch` hängt von den unterstützten Formen der jeweiligen Schriftart ab. Wenn die Schrift keine Form bietet, die genau zum angegebenen Wert passt, werden Werte unter 100% mit einer schmaleren Form und Werte ab 100% mit einer breiteren Form zugeordnet.

Die folgende Tabelle zeigt die Wirkung der Angabe verschiedener Prozentsatzwerte von `font-stretch` auf zwei verschiedene Schriftarten:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
  font-stretch: 50% 200%;
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
  font-stretch: 75% 125%;
}

td {
  border: solid;
  border-width: 1px;
}

#inconsolata td {
  font:
    90px "Inconsolata",
    sans-serif;
}
#anek-malayalam td {
  font:
    90px "Anek Malayalam",
    sans-serif;
}
#inconsolata td:nth-child(2),
#anek-malayalam td:nth-child(2) {
  font-stretch: 50%;
}
#inconsolata td:nth-child(3),
#anek-malayalam td:nth-child(3) {
  font-stretch: 62.5%;
}
#inconsolata td:nth-child(4),
#anek-malayalam td:nth-child(4) {
  font-stretch: 75%;
}
#inconsolata td:nth-child(5),
#anek-malayalam td:nth-child(5) {
  font-stretch: 87.5%;
}
#inconsolata td:nth-child(6),
#anek-malayalam td:nth-child(6) {
  font-stretch: 100%;
}
#inconsolata td:nth-child(7),
#anek-malayalam td:nth-child(7) {
  font-stretch: 112.5%;
}
#inconsolata td:nth-child(8),
#anek-malayalam td:nth-child(8) {
  font-stretch: 125%;
}
#inconsolata td:nth-child(9),
#anek-malayalam td:nth-child(9) {
  font-stretch: 150%;
}
#inconsolata td:nth-child(10),
#anek-malayalam td:nth-child(10) {
  font-stretch: 200%;
}
```

```html hidden
<table class="standard-table">
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
    <tr id="inconsolata">
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
    <tr id="anek-malayalam">
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

{{EmbedLiveSample('Font_face_selection', "100%", "300px")}}

- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) ist eine variable Google-Schrift, die Breiten von 75% bis 125% unterstützt. Werte unterhalb und oberhalb dieses Bereichs wählen die am besten passende Schriftart aus.
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) ist eine variable Schriftart, die einen kontinuierlichen Bereich von Breiten von 50% bis 200% bietet. <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax("font-width")}}

## Beispiele

### Prozentsätze für Schriftstreckung festlegen

```html
<p class="condensed">an elephantine lizard</p>
<p class="normal">an elephantine lizard</p>
<p class="expanded">an elephantine lizard</p>
```

```css
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-family: "LeagueMonoVariable";
  font-style: normal;
  font-stretch: 1% 500%; /* Required by Chrome */
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- SVG {{SVGAttr("font-stretch")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts) Modul
