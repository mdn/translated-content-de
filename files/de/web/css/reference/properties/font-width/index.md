---
title: "`font-width` CSS property"
short-title: font-width
slug: Web/CSS/Reference/Properties/font-width
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

> [!NOTE]
> Die Eigenschaft `font-width` ist der moderne Ersatz für {{cssxref("font-stretch")}}, einen älteren Alias. Obwohl `font-width` der in der Spezifikation bevorzugte Name ist, wird `font-stretch` derzeit von mehr Browsern unterstützt. Weitere Informationen finden Sie im [Beispiel mit Fallback](#`font-stretch`_als_fallback_verwenden) und in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität).

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-width`** wählt einen Schriftstil mit normaler, schmalerer oder breiterer Zeichenbreite aus einer Schriftart aus.

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

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `normal`
  - : Gibt einen Schriftstil mit normaler Zeichenbreite an.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Gibt einen Schriftstil mit schmaleren Zeichen als normal an, wobei `ultra-condensed` am schmalsten ist.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Gibt einen Schriftstil mit breiteren Zeichen als normal an, wobei `ultra-expanded` am breitesten ist.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 50 % und 200 % (einschließlich). Negative Werte sind für diese Eigenschaft nicht zulässig.

### Zuordnung von Schlüsselwörtern zu Zahlenwerten

Die folgende Tabelle zeigt, welchen Prozentwerten die Schlüsselwörter entsprechen:

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

Einige Schriftfamilien bieten zusätzliche Schriftstile, deren Zeichen schmaler als beim normalen Stil (_condensed_) oder breiter als beim normalen Stil (_expanded_) sind.

Mit `font-width` können Sie bei solchen Schriftarten einen schmaleren oder breiteren Stil auswählen. Wenn die verwendete Schriftart keine entsprechenden Stile bietet, hat diese Eigenschaft keine Wirkung.

### Auswahl des Schriftstils

Welcher Stil für einen bestimmten `font-width`-Wert ausgewählt wird, hängt von den verfügbaren Stilen der jeweiligen Schriftart ab. Wenn die Schriftart keinen Stil bietet, der genau dem angegebenen Wert entspricht, werden Werte unter 100 % einem schmaleren Stil und Werte ab 100 % einem breiteren Stil zugeordnet.

Die folgende Tabelle veranschaulicht, wie sich unterschiedliche Prozentwerte für `font-width` bei zwei Schriftarten auswirken:

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

Der folgende Screenshot zeigt, wie die obige Tabelle dargestellt wird, falls Ihr Browser die Eigenschaft `font-width` nicht unterstützt:

![Vergleichstabelle mit zwei Zeilen, die den Kleinbuchstaben e in unterschiedlichen Breiten (50 %, 62,5 %, 75 %, 87,5 %, 100 %, 112,5 %, 125 %, 150 %, 200 %) zeigt. Die obere Zeile ist mit Inconsolata beschriftet, die untere mit Anek Malayalam. Beide Schriftarten sind serifenlos; die Buchstaben von Inconsolata sind etwas breiter als die von Anek Malayalam.](font-face-selection.png)

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) ist eine variable Schriftart, die einen kontinuierlichen Bereich von 50 % bis 200 % abdeckt. <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) ist eine variable Schriftart von Google, die Breiten von 75 % bis 125 % unterstützt. Für Werte außerhalb dieses Bereichs wird der jeweils nächstliegende Schriftstil ausgewählt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax("font-width")}}

## Beispiele

### Prozentwerte für die Schriftbreite festlegen

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

### `font-stretch` als Fallback verwenden

Da `font-width` noch nicht von vielen Browsern unterstützt wird, können Sie die ältere Eigenschaft {{cssxref("font-stretch")}} als Fallback angeben. Platzieren Sie `font-stretch` vor `font-width`, damit Browser, die die moderne Eigenschaft unterstützen, diese verwenden:

```css
p {
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Sie können dieses Fallback-Muster mit dem Plug-in [postcss-preset-env](https://preset-env.cssdb.org/) für PostCSS automatisieren. Es enthält die Transformation [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property), die `font-width`-Eigenschaften automatisch in `font-stretch` umwandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Deskriptor {{cssxref("@font-face/font-width")}} für {{cssxref("@font-face")}}
- Ältere Alias-Eigenschaft {{cssxref("font-stretch")}} mit breiterer Browser-Unterstützung
- Eigenschaft {{cssxref("font-style")}}
- Eigenschaft {{cssxref("font-weight")}}
- SVG-Attribut {{SVGAttr("font-width")}}
- SVG-Attribut {{SVGAttr("font-stretch")}}
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- Modul [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts)
