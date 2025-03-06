---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Stärke (oder Fettschrift) der Schriftart fest. Die verfügbaren Gewichte hängen von der derzeit festgelegten {{cssxref("font-family")}} ab.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

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

Die `font-weight`-Eigenschaft wird entweder mit einem `<font-weight-absolute>`-Wert oder einem relativen Gewichts-Wert spezifiziert, wie unten aufgeführt.

### Werte

- `normal`

  - : Normales Schriftgewicht. Entspricht `400`.

- `bold`

  - : Fettgedrucktes Schriftgewicht. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, einschließlich beider Werte. Höhere Zahlen stehen für Gewichte, die fetter oder ebenso fett wie niedrigere Zahlen sind. Dies ermöglicht eine feine Steuerung für [variable Schriften](#variable_schriften). Für nicht variable Schriften wird, wenn das exakt spezifizierte Gewicht nicht verfügbar ist, ein [Ersatzgewicht](#ersatzgewichte)-Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen gängigen Gewichtsnamen, wie im Abschnitt [Mapping gängiger Gewichtsnamen](#mapping_gängiger_gewichtsnamen) unten beschrieben.

- `lighter`

  - : Ein relatives Schriftgewicht, das leichter als das Elternelement ist. Beachten Sie, dass nur vier Schriftgewichte für die relative Gewichtskalkulation berücksichtigt werden; siehe den Abschnitt [Bedeutung der relativen Gewichte](#bedeutung_der_relativen_gewichte) unten.

- `bolder`
  - : Ein relatives Schriftgewicht, das schwerer als das Elternelement ist. Beachten Sie, dass nur vier Schriftgewichte für die relative Gewichtskalkulation berücksichtigt werden; siehe den Abschnitt [Bedeutung der relativen Gewichte](#bedeutung_der_relativen_gewichte) unten.

### Ersatzgewichte

Wenn das exakte angegebene Gewicht nicht verfügbar ist, wird die folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` liegt, einschließlich:

  - Suchen Sie in aufsteigender Reihenfolge nach verfügbaren Gewichten zwischen dem Ziel und `500`.
  - Wenn kein Treffer gefunden wird, suchen Sie in absteigender Reihenfolge nach verfügbaren Gewichten, die kleiner als das Ziel sind.
  - Wenn kein Treffer gefunden wird, suchen Sie in aufsteigender Reihenfolge nach verfügbaren Gewichten, die größer als `500` sind.

- Wenn ein Gewicht kleiner als `400` angegeben ist, suchen Sie in absteigender Reihenfolge nach verfügbaren Gewichten, die kleiner als das Ziel sind. Wenn kein Treffer gefunden wird, suchen Sie in aufsteigender Reihenfolge nach verfügbaren Gewichten, die größer als das Ziel sind.

- Wenn ein Gewicht größer als `500` angegeben ist, suchen Sie in aufsteigender Reihenfolge nach verfügbaren Gewichten, die größer als das Ziel sind. Wenn kein Treffer gefunden wird, suchen Sie in absteigender Reihenfolge nach verfügbaren Gewichten, die kleiner als das Ziel sind.

> [!NOTE]
> Der Ersatzgewichts-Algorithmus wird nur für die Darstellung verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung der relativen Gewichte

Wenn `lighter` oder `bolder` angegeben wird, zeigt die folgende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei relativen Gewichten nur vier Schriftgewichte berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftfamilie mehr Gewichte verfügbar hat, werden diese bei der Berechnung des relativen Gewichts ignoriert.

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

### Mapping gängiger Gewichtsnamen

Die numerischen Werte von `100` bis `900` entsprechen in etwa den folgenden gängigen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Gängiger Gewichtname                                                                                                                   |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Hairline)                                                                                                                        |
| 200  | Extra Leicht (Ultra Leicht)                                                                                                            |
| 300  | Leicht                                                                                                                                 |
| 400  | Normal (Regulär)                                                                                                                       |
| 500  | Mittel                                                                                                                                 |
| 600  | Halb Fett (Demi Fett)                                                                                                                  |
| 700  | Fett                                                                                                                                   |
| 800  | Extra Fett (Ultra Fett)                                                                                                                |
| 900  | Schwarz (Schwer)                                                                                                                       |
| 950  | [Extra Schwarz (Ultra Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriften

Während viele Schriften ein bestimmtes Gewicht haben, das einem der Nummern im [Mapping gängiger Gewichtsnamen](#mapping_gängiger_gewichtsnamen) entspricht, unterstützen die meisten variablen Schriften eine Bandbreite an Gewichten, die eine viel feinere Abstufung bietet und Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht gibt.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um verschiedene Breiten zu implementieren.

Dieses Demo wird mit `font-weight: 500;` geladen. Ändern Sie den Wert der `font-weight`-Eigenschaft im `.sample`-Selektor, um das Gewicht des Textes zu ändern (z.B. 200, 700). Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
  font:
    1.5rem "MutatorSans",
    sans-serif;
}
```

{{EmbedLiveSample("font-weight-example", "", "200px")}}

## Barrierefreiheit

Personen mit eingeschränkter Sehkraft können Schwierigkeiten beim Lesen von Texten mit einem `font-weight`-Wert von `100` (Dünn/Hairline) oder `200` (Extra Leicht) haben, insbesondere wenn die Schrift eine [geringe Kontrastfarbgebung](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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
- [Lernen: Grundlagen der Text- und Schriftformatierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
