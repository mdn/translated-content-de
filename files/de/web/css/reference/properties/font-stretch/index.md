---
title: "`font-stretch` CSS property"
short-title: font-stretch
slug: Web/CSS/Reference/Properties/font-stretch
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

> [!NOTE]
> Die Eigenschaft `font-stretch` wurde in der [CSS-Fonts-Spezifikation](https://drafts.csswg.org/css-fonts/#font-stretch-prop) in {{cssxref("font-width")}} umbenannt. Um die Kompatibilität zu erhalten, bleibt `font-stretch` in der Spezifikation als veralteter Alias für die Eigenschaft `font-width` bestehen.

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-stretch`** wählt aus einer Schriftfamilie eine normale, schmale oder breite Schriftvariante aus.

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

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `normal`
  - : Gibt eine Schriftvariante mit normaler Breite an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt eine schmalere Schriftvariante als die normale an. `ultra-condensed` ist dabei die schmalste Variante.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt eine breitere Schriftvariante als die normale an. `ultra-expanded` ist dabei die breiteste Variante.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diese Eigenschaft nicht zulässig.

### Zuordnung von Schlüsselwörtern zu Zahlenwerten

Die folgende Tabelle zeigt, welche Prozentwerte den Schlüsselwörtern entsprechen:

| Schlüsselwort     | Prozentwert |
| ----------------- | ----------- |
| `ultra-condensed` | 50 %        |
| `extra-condensed` | 62,5 %      |
| `condensed`       | 75 %        |
| `semi-condensed`  | 87,5 %      |
| `normal`          | 100 %       |
| `semi-expanded`   | 112,5 %     |
| `expanded`        | 125 %       |
| `extra-expanded`  | 150 %       |
| `ultra-expanded`  | 200 %       |

## Beschreibung

Manche Schriftfamilien bieten zusätzliche Varianten an, deren Zeichen schmaler als bei der normalen Variante sind (_schmale_ Varianten) oder breiter als bei der normalen Variante (_breite_ Varianten).

Mit `font-stretch` können Sie eine schmale oder breite Variante einer solchen Schrift auswählen. Wenn die verwendete Schrift keine schmalen oder breiten Varianten bietet, hat diese Eigenschaft keine Wirkung.

### Auswahl der Schriftvariante

Welche Variante für einen bestimmten Wert von `font-stretch` ausgewählt wird, hängt von den Varianten ab, die die jeweilige Schrift unterstützt. Wenn die Schrift keine Variante bietet, die genau dem angegebenen Wert entspricht, werden Werte unter `100%` einer schmalen Variante und Werte ab `100%` einer breiten Variante zugeordnet.

Die folgende Tabelle zeigt, wie sich unterschiedliche Prozentwerte für `font-stretch` auf zwei verschiedene Schriften auswirken:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://mdn.github.io/shared-assets/fonts/inconsolata/Inconsolata-VF.woff2")
    format("woff2");
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://mdn.github.io/shared-assets/fonts/anek-malayalam/AnekMalayalam-VF.woff2")
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

{{EmbedLiveSample('Font face selection', "100%", "250px")}}

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) ist eine variable Schrift mit einem durchgehenden Breitenbereich von 50 % bis 200 %. <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) ist eine variable Google-Schrift, die Breiten von 75 % bis 125 % unterstützt. Bei Werten außerhalb dieses Bereichs wird die jeweils nächstliegende Schriftvariante ausgewählt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax("font-stretch")}}

## Beispiele

### Prozentwerte für `font-stretch` festlegen

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

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Deskriptor {{cssxref("@font-face/font-stretch")}} für {{cssxref("@font-face")}}
- Die moderne Eigenschaft {{cssxref("font-width")}}, die `font-stretch` ersetzt
- Eigenschaft {{cssxref("font-style")}}
- Eigenschaft {{cssxref("font-weight")}}
- SVG-Attribut {{SVGAttr("font-stretch")}}
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- Modul [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)
