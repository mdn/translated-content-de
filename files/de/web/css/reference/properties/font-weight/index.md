---
title: font-weight
slug: Web/CSS/Reference/Properties/font-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-weight`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Stärke (oder Fettdruck) der Schrift fest. Die verfügbaren Stärken hängen von der derzeit gesetzten {{cssxref("font-family")}} ab.

{{InteractiveExample("CSS Demo: font-weight")}}

```css interactive-example-choice
font-weight: normal;
```

```css interactive-example-choice
font-weight: bold;
```

```css interactive-example-choice
font-weight: lighter;
```

```css interactive-example-choice
font-weight: bolder;
```

```css interactive-example-choice
font-weight: 100;
```

```css interactive-example-choice
font-weight: 900;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

## Syntax

```css
/* <font-weight-absolute> keyword values */
font-weight: normal;
font-weight: bold;

/* <font-weight-absolute> numeric values [1,1000] */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* bold */
font-weight: 800;
font-weight: 900;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: revert-layer;
font-weight: unset;
```

Die `font-weight`-Eigenschaft wird entweder durch einen `<font-weight-absolute>` Wert oder einen relativen Stärkewert festgelegt, wie unten aufgeführt.

### Werte

- `normal`
  - : Normale Schriftstärke. Entspricht `400`.

- `bold`
  - : Fette Schriftstärke. Entspricht `700`.

- `<number>`
  - : Ein Wert vom Typ {{cssxref("&lt;number&gt;")}} zwischen 1 und 1000, beide Werte eingeschlossen. Höhere Zahlen repräsentieren Stärken, die fetter sind als (oder genauso fett wie) niedrigere Zahlen. Dies ermöglicht eine feinkörnige Steuerung für [variable Schriften](#variable_schriften). Für nicht-variable Schriftarten wird, wenn die exakt angegebene Stärke nicht verfügbar ist, ein [Fallback-Stärke](#fallback-stärken)-Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen gängigen Stärkenamen, wie im Abschnitt über die [gemeinsame Zuordnung von Stärkenamen](#gemeinsame_zuordnung_von_stärkenamen) unten beschrieben.

- `lighter`
  - : Eine relative Schriftstärke, die leichter ist als das Elternelement. Beachten Sie, dass für die Berechnung der relativen Stärke nur vier Schriftstärken berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Stärken](#bedeutung_relativer_stärken) unten.

- `bolder`
  - : Eine relative Schriftstärke, die schwerer ist als das Elternelement. Beachten Sie, dass für die Berechnung der relativen Stärke nur vier Schriftstärken berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Stärken](#bedeutung_relativer_stärken) unten.

### Fallback-Stärken

Wenn die exakte angegebene Stärke nicht verfügbar ist, wird folgende Regel angewendet, um die tatsächlich angezeigte Stärke zu bestimmen:

- Wenn die Zielstärke zwischen `400` und `500` liegt, einschließlich:
  - Suchen Sie nach verfügbaren Stärken zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Stärken kleiner als das Ziel in absteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Stärken größer als `500` in aufsteigender Reihenfolge.

- Wenn eine Stärke kleiner als `400` angegeben wird, suchen Sie nach verfügbaren Stärken, die kleiner als das Ziel sind, in absteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Stärken, die größer als das Ziel sind, in aufsteigender Reihenfolge.

- Wenn eine Stärke größer als `500` angegeben wird, suchen Sie nach verfügbaren Stärken, die größer als das Ziel sind, in aufsteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Stärken, die kleiner als das Ziel sind, in absteigender Reihenfolge.

> [!NOTE]
> Der Fallback-Stärken-Algorithmus wird nur für die Anzeige verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung relativer Stärken

Wenn `lighter` oder `bolder` angegeben wird, zeigt die untenstehende Tabelle, wie die absolute Schriftstärke des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Stärken nur vier Schriftstärken berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftartfamilie mehr Stärken zur Verfügung hat, werden sie für die Berechnung der relativen Stärke ignoriert.

<table class="standard-table">
  <thead>
    <tr>
      <th>Geerbter Wert</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### Gemeinsame Zuordnung von Stärkenamen

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden gängigen Stärkenamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert  | Gängiger Stärkename                                                                                                                |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 100   | Dünn (Haarlinie)                                                                                                                   |
| 200   | Extralicht (Ultraleicht)                                                                                                           |
| 300   | Licht                                                                                                                              |
| 400   | Normal (Regulär)                                                                                                                   |
| 500   | Mittel                                                                                                                             |
| 600   | Halbfett (Demi Bold)                                                                                                               |
| 700   | Fett                                                                                                                               |
| 800   | Extrafett (Ultrabold)                                                                                                              |
| 900   | Schwarz (Schwer)                                                                                                                   |
| 950   | [Extrablack (Ultra Black)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks)  |

### Variable Schriften

Während viele Schriftarten eine bestimmte Stärke haben, die einer der Nummern in der [gemeinsamen Zuordnung von Stärkenamen](#gemeinsame_zuordnung_von_stärkenamen) entspricht, unterstützen die meisten variablen Schriftarten einen Bereich von Stärken, die eine viel feinere Granularität bieten, was Designern und Entwicklern mehr Kontrolle über die gewählte Stärke gibt.

Für TrueType- oder OpenType-variablen Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Breiten umzusetzen.

Diese Demo lädt mit `font-weight: 500;` gesetzt. Ändern Sie den Wert der `font-weight`-Eigenschaft im `.sample` Selektor, um die Stärke des Textes zu sehen (z.B. 200, 700). Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___font-weight-example
<p class="sample">
  ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
  waddling like an elephantine lizard up Holborn Hill.
</p>
```

```css live-sample___font-weight-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/MutatorSans.ttf");
  font-family: "MutatorSans";
  font-style: normal;
  font-weight: 1 1000;
}

.sample {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  font-family: "MutatorSans", sans-serif;
}
```

{{EmbedLiveSample("font-weight-example", "", "200px")}}

## Barrierefreiheit

Menschen mit Sehbehinderungen könnten Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Haarlinie) oder `200` (Extralicht) gesetzt ist, besonders wenn die Schrift ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis der WCAG, Erläuterungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Schriftstärken

#### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, "and what
  is the use of a book," thought Alice "without pictures or conversations?"
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

#### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps heavier than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Set span text to be one step lighter
   than its parent. */
span {
  font-weight: lighter;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_font_weights","400","300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-family")}}
- {{cssxref("font-style")}}
- SVG-Attribut {{SVGAttr("font-weight")}}
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
