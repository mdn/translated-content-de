---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt das Gewicht (oder die Fettstärke) der Schriftart. Die verfügbaren Gewichte hängen von der aktuell gesetzten {{cssxref("font-family")}} ab.

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

Die `font-weight` Eigenschaft wird entweder mit einem `<font-weight-absolute>` Wert oder einem relativen Gewichts-Wert angegeben, wie unten aufgeführt.

### Werte

- `normal`

  - : Normales Schriftgewicht. Entspricht `400`.

- `bold`

  - : Fettschrift-Gewicht. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich beider Werte. Höhere Zahlen repräsentieren schwerere Gewichte als (oder genauso schwer wie) niedrigere Zahlen. Dies ermöglicht eine feingliedrige Kontrolle für [variable Fonts](#variable_fonts). Für nicht-variable Fonts wird, wenn das exakt angegebene Gewicht nicht verfügbar ist, ein [Ersatzgewicht](#ersatzgewichte) Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen gebräuchlichen Gewichtsnamen, wie unten in der Sektion [Übliche Gewichtsnamen-Abbildung](#übliche_gewichtsnamen-abbildung) beschrieben.

- `lighter`

  - : Ein relatives Schriftgewicht, das leichter als das des Elternelements ist. Beachten Sie, dass für relative Gewichtbestimmung nur vier Schriftgewichte berücksichtigt werden; siehe die Sektion [Bedeutung relativer Gewichtungen](#bedeutung_relativer_gewichtungen) unten.

- `bolder`
  - : Ein relatives Schriftgewicht, das schwerer als das des Elternelements ist. Beachten Sie, dass für relative Gewichtbestimmung nur vier Schriftgewichte berücksichtigt werden; siehe die Sektion [Bedeutung relativer Gewichtungen](#bedeutung_relativer_gewichtungen) unten.

### Ersatzgewichte

Wenn das exakte angegebene Gewicht nicht verfügbar ist, wird folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` einschließlich liegt:

  - Suche nach verfügbaren Gewichten zwischen dem Ziel und `500`, in aufsteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suche nach verfügbaren Gewichten kleiner als das Ziel, in absteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suche nach verfügbaren Gewichten größer als `500`, in aufsteigender Reihenfolge.

- Wenn ein Gewicht kleiner als `400` angegeben ist, suche nach verfügbaren Gewichten kleiner als das Ziel, in absteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suche nach verfügbaren Gewichten größer als das Ziel, in aufsteigender Reihenfolge.

- Wenn ein Gewicht größer als `500` angegeben ist, suche nach verfügbaren Gewichten größer als das Ziel, in aufsteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suche nach verfügbaren Gewichten kleiner als das Ziel, in absteigender Reihenfolge.

> [!NOTE]
> Der Ersatzgewicht-Algorithmus wird nur für das Rendering verwendet. Der berechnete Wert der Eigenschaft ist immer noch der angegebene Wert.

### Bedeutung relativer Gewichtungen

Wenn `lighter` oder `bolder` angegeben ist, zeigt die untenstehende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Gewichte nur vier Schriftgewichte berücksichtigt werden — thin (100), normal (400), bold (700), und heavy (900). Wenn eine Schriftfamilie mehr Gewichte verfügbar hat, werden diese für die Berechnung relativer Gewichtungen ignoriert.

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

### Übliche Gewichtsnamen-Abbildung

Die numerischen Werte von `100` bis `900` entsprechen ungefähr den folgenden gebräuchlichen Gewichtsnamen (siehe die [OpenType Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Üblicher Gewichtname                                                                                                                   |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Haarlinie)                                                                                                                       |
| 200  | Extra Leicht (Ultra Leicht)                                                                                                            |
| 300  | Leicht                                                                                                                                 |
| 400  | Normal (Regulär)                                                                                                                       |
| 500  | Mittel                                                                                                                                 |
| 600  | Halb Fett (Demi Fett)                                                                                                                  |
| 700  | Fett                                                                                                                                   |
| 800  | Extra Fett (Ultra Fett)                                                                                                                |
| 900  | Schwarz (Schwer)                                                                                                                       |
| 950  | [Extra Schwarz (Ultra Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Fonts

Während viele Schriftarten ein bestimmtes Gewicht haben, das einem der Zahlen in der [Üblichen Gewichtsnamen-Abbildung](#übliche_gewichtsnamen-abbildung) entspricht, unterstützen die meisten variablen Fonts eine Reihe von Gewichten, die eine viel feinere Granularität bieten und es Designern und Entwicklern ermöglichen, das ausgewählte Gewicht genauer zu kontrollieren.

Für TrueType- oder OpenType-Variable-Schriftarten wird die "wght" Variation verwendet, um unterschiedliche Breiten zu implementieren.

Dieses Demo wird mit `font-weight: 500;` geladen. Ändern Sie den Wert der `font-weight` Eigenschaft im `.sample` Selektor, um das Gewicht des Textes zu ändern (z.B. 200, 700). Klicken Sie auf "Play" in den untenstehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Personen mit eingeschränktem Sehvermögen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgewichte einstellen

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
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS Fonts](/de/docs/Web/CSS/CSS_fonts) Modul
