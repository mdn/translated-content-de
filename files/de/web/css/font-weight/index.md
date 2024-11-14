---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Gewicht (oder die Fettschrift) der Schriftart fest. Die verfügbaren Gewichte hängen von der aktuell gesetzten {{cssxref("font-family")}} ab.

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

Die `font-weight` Eigenschaft wird entweder mit einem `<font-weight-absolute>` Wert oder einem relativen Gewichtswert angegeben, wie unten aufgeführt.

### Werte

- `normal`

  - : Normales Schriftgewicht. Entspricht `400`.

- `bold`

  - : Fettschrift. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich beider Werte. Höhere Zahlen repräsentieren Gewichte, die kräftiger sind als (oder genauso kräftig wie) niedrigere Zahlen. Dies ermöglicht eine feine Kontrolle über [variable Schriftarten](#variable_schriftarten). Bei nicht variablen Schriftarten wird, falls das genau angegebene Gewicht nicht verfügbar ist, ein [Fallback-Gewicht](#fallback-gewichte) Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen den gebräuchlichen Gewichtsnamen, wie im Abschnitt [Mapping von häufigen Gewichtsnamen](#mapping_von_häufigen_gewichtsnamen) unten beschrieben.

- `lighter`

  - : Ein relatives Schriftgewicht leichter als das Elternelement. Beachten Sie, dass nur vier Schriftgewichte für die Berechnung relativem Gewicht berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

- `bolder`
  - : Ein relatives Schriftgewicht schwerer als das Elternelement. Beachten Sie, dass nur vier Schriftgewichte für die Berechnung relativem Gewicht berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

### Fallback-Gewichte

Wenn das genaue angegebene Gewicht nicht verfügbar ist, wird die folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` (einschließlich) liegt:

  - Suchen Sie nach verfügbaren Gewichten zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten über `500` in aufsteigender Reihenfolge.

- Wenn ein Gewicht kleiner als `400` angegeben wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten größer als das Ziel in aufsteigender Reihenfolge.

- Wenn ein Gewicht größer als `500` angegeben wird, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten kleiner als das Ziel in absteigender Reihenfolge.

> [!NOTE]
> Der Fallback-Gewicht-Algorithmus wird nur für die Darstellung verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung relativer Gewichte

Wenn `lighter` oder `bolder` angegeben ist, zeigt die folgende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Gewichte nur vier Schriftgewichte berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Falls eine Schriftfamilie mehr Gewichte verfügbar hat, werden diese für die Berechnung relativen Gewichts ignoriert.

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

### Mapping von häufigen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden häufigen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Häufiger Gewichtname                                                                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 100  | Dünn (Hairline)                                                                                                                      |
| 200  | Extra Licht (Ultra Light)                                                                                                            |
| 300  | Licht                                                                                                                                |
| 400  | Normal (Regulär)                                                                                                                     |
| 500  | Mittel                                                                                                                               |
| 600  | Halbfett (Demi Bold)                                                                                                                 |
| 700  | Fett                                                                                                                                 |
| 800  | Extra Fett (Ultra Bold)                                                                                                              |
| 900  | Schwarz (Schwer)                                                                                                                     |
| 950  | [Extra Schwarz (Ultra Black)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriftarten

Während viele Schriftarten ein bestimmtes Gewicht haben, das einem der Zahlen im [Mapping von häufigen Gewichtsnamen](#mapping_von_häufigen_gewichtsnamen) entspricht, unterstützen die meisten variablen Schriftarten einen Bereich von Gewichten, der viel feinere Granularität bietet, was Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht verleiht.

Für TrueType oder OpenType variable Schriftarten wird die "wght" Variation verwendet, um unterschiedliche Breiten zu implementieren.

Diese Demo lädt mit `font-weight: 500;` eingestellt. Ändern Sie den Wert der `font-weight` Eigenschaft im `.sample` Selektor, um das Gewicht des Textes zu ändern (z.B. 200, 700). Klicken Sie auf "Play" in den unten stehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Personen mit Sehbehinderung können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Hairline) oder `200` (Extra Licht) gesetzt ist, insbesondere wenn die Schriftart ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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
- [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
