---
title: font-stretch
slug: Web/CSS/Reference/Properties/font-stretch
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> Die `font-stretch` Eigenschaft wurde im [CSS-Schriften-Spezifikation](https://drafts.csswg.org/css-fonts/#font-stretch-prop) in {{cssxref("font-width")}} umbenannt. Um die Kompatibilität zu wahren, bleibt die Spezifikation `font-stretch` als ein veraltetes Alias für die `font-width` Eigenschaft bestehen.

Die **`font-stretch`** [CSS](/de/docs/Web/CSS) Eigenschaft wählt eine normale, komprimierte oder erweiterte Darstellung aus einer Schriftart.

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
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## Syntax

```css
/* Keyword values */
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

Diese Eigenschaft kann als ein einzelnes Schlüsselwort oder als ein {{cssxref("&lt;percentage&gt;")}} Wert angegeben werden.

### Werte

- `normal`
  - : Gibt eine normalerweise komprimierte Schriftart an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt eine mehr komprimierte Schriftart als normal an, wobei `ultra-condensed` die am stärksten komprimierte ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt eine mehr erweiterte Schriftart als normal an, wobei `ultra-expanded` die am meisten erweiterte ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert zwischen 50% und 200% (inklusive). Negative Werte sind für diese Eigenschaft nicht erlaubt.

### Zuordnung von Schlüsselwörtern zu numerischen Werten

Die folgende Tabelle zeigt die Zuordnung zwischen den Schlüsselwortwerten und numerischen Prozentsätzen:

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

Einige Schriftfamilien bieten zusätzliche Darstellungen an, in denen die Zeichen schmaler als die normale Darstellung sind (_komprimierte_ Darstellungen) oder breiter als die normale Darstellung (_erweiterte_ Darstellungen).

Sie können `font-stretch` verwenden, um eine komprimierte oder erweiterte Darstellung aus solchen Schriften auszuwählen. Wenn die von Ihnen verwendete Schrift keine komprimierten oder erweiterten Darstellungen bietet, hat diese Eigenschaft keine Wirkung.

### Auswahl der Schriftart

Die für einen bestimmten Wert von `font-stretch` ausgewählte Darstellung hängt von den von der betreffenden Schrift unterstützten Darstellungen ab. Wenn die Schrift keine Darstellung bietet, die genau dem angegebenen Wert entspricht, werden Werte kleiner als `100%` einer komprimierten Darstellung zugeordnet, und Werte größer oder gleich `100%` einer erweiterten Darstellung.

Die folgende Tabelle demonstriert die Wirkung der Einstellung verschiedener Prozentwerte von `font-stretch` auf zwei verschiedene Schriften:

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
  font-stretch: 50%;
}
td:nth-child(3) {
  font-stretch: 62.5%;
}
td:nth-child(4) {
  font-stretch: 75%;
}
td:nth-child(5) {
  font-stretch: 87.5%;
}
td:nth-child(6) {
  font-stretch: 100%;
}
td:nth-child(7) {
  font-stretch: 112.5%;
}
td:nth-child(8) {
  font-stretch: 125%;
}
td:nth-child(9) {
  font-stretch: 150%;
}
td:nth-child(10) {
  font-stretch: 200%;
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

{{EmbedLiveSample('Auswahl der Schriftart', "100%", "250px")}}

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) ist eine variable Schriftart, die einen kontinuierlichen Bereich von Breiten von 50% bis 200% bietet. <!-- Hinweis: Dynamisch erhaltenes woff2 von Google-Schriften über Anfrage: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) ist eine variable Google-Schrift, die Breiten von 75% bis 125% unterstützt. Werte unterhalb und oberhalb dieses Bereichs wählen die am nächsten passende Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax("font-stretch")}}

## Beispiele

### Festlegen von Schriftdehnungsprozentsätzen

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
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

{{EmbedLiveSample("Festlegen von Schriftdehnungsprozentsätzen", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-stretch")}} Deskriptor für {{cssxref("@font-face")}}
- Moderne {{cssxref("font-width")}} Eigenschaft, ersetzt `font-stretch`
- {{cssxref("font-style")}} Eigenschaft
- {{cssxref("font-weight")}} Eigenschaft
- SVG {{SVGAttr("font-stretch")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts) Modul
