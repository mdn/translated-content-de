---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Gewicht (oder die Fettung) der Schriftart fest. Die verfügbaren Gewichtungen hängen von der aktuell eingestellten {{cssxref("font-family")}} ab.

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

Die `font-weight` Eigenschaft wird entweder mit einem `<font-weight-absolute>` Wert oder einem relativen Gewichts-Wert, wie unten aufgeführt, angegeben.

### Werte

- `normal`

  - : Normales Schriftgewicht. Entspricht `400`.

- `bold`

  - : Fettgedrucktes Schriftgewicht. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich beider Werte. Höhere Zahlen repräsentieren Gewichte, die fetter als (oder genauso fett wie) niedrigere Zahlen sind. Dies ermöglicht eine feine Steuerung für [variable Schriftarten](#variable_schriftarten). Bei nicht variablen Schriftarten wird, falls das genau angegebene Gewicht nicht verfügbar ist, ein [Fallback-Gewichts-Algorithmus](#fallback-gewichte) verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen den in der unten beschriebenen [Allgemeine Gewichtungsnamen-Zuordnung](#allgemeine_gewichtungsnamen-zuordnung) Abschnitt aufgeführten allgemeinen Gewichtsnamen.

- `lighter`

  - : Ein relativer Schriftgewichtswert, der leichter als das Elternelement ist. Beachten Sie, dass für die Berechnung relativer Gewichte nur vier Schriftgewichte in Betracht gezogen werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

- `bolder`
  - : Ein relativer Schriftgewichtswert, der schwerer als das Elternelement ist. Beachten Sie, dass für die Berechnung relativer Gewichte nur vier Schriftgewichte in Betracht gezogen werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

### Fallback-Gewichte

Wenn das angegebene Gewicht nicht verfügbar ist, wird die folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` liegt:

  - Suche nach verfügbaren Gewichten zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn kein Treffer gefunden wird, suche nach verfügbaren Gewichten unter dem Ziel in absteigender Reihenfolge.
  - Wenn kein Treffer gefunden wird, suche nach verfügbaren Gewichten über `500` in aufsteigender Reihenfolge.

- Wenn ein Gewicht unter `400` angegeben wird, suche nach verfügbaren Gewichten unter dem Ziel in absteigender Reihenfolge. Wird kein Treffer gefunden, suche nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge.

- Wenn ein Gewicht über `500` angegeben wird, suche nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge. Wird kein Treffer gefunden, suche nach verfügbaren Gewichten unter dem Ziel in absteigender Reihenfolge.

> [!NOTE]
> Der Fallback-Gewichts-Algorithmus wird nur für die Darstellung verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung relativer Gewichte

Wenn `lighter` oder `bolder` angegeben wird, zeigt die nachstehende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei relativen Gewichten nur vier Schriftgewichte berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftfamilie mehr verfügbare Gewichte hat, werden diese für die Berechnung relativer Gewichte ignoriert.

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

### Allgemeine Gewichtungsnamen-Zuordnung

Die numerischen Werte von `100` bis `900` entsprechen grob den folgenden allgemeinen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Allgemeiner Gewichtungsname                                                                                                            |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Haarlinie)                                                                                                                       |
| 200  | Extra Leicht (Ultra Leicht)                                                                                                            |
| 300  | Leicht                                                                                                                                 |
| 400  | Normal (Regulär)                                                                                                                       |
| 500  | Mittel                                                                                                                                 |
| 600  | Halbfett (Demi Fett)                                                                                                                   |
| 700  | Fett                                                                                                                                   |
| 800  | Extra Fett (Ultra Fett)                                                                                                                |
| 900  | Schwarz (Schwer)                                                                                                                       |
| 950  | [Extra Schwarz (Ultra Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriftarten

Während viele Schriftarten ein bestimmtes Gewicht haben, das einem der Zahlen in [Allgemeine Gewichtungsnamen-Zuordnung](#allgemeine_gewichtungsnamen-zuordnung) entspricht, unterstützen die meisten variablen Schriftarten einen Bereich von Gewichten, die eine viel feinere Granularität bieten, was Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht gibt.

Für TrueType- oder OpenType-variablen Schriftarten wird die "wght" Variation verwendet, um variierende Breiten zu implementieren.

Dieses Demo lädt mit `font-weight: 500;` eingestellt. Ändern Sie den Wert der `font-weight` Eigenschaft im `.sample` Selektor, um die Gewichtung des Textes zu ändern (z.B. 200, 700). Klicken Sie auf "Abspielen" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) eingestellt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgewichte festlegen

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
- SVG {{SVGAttr("font-weight")}} Attribut
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
