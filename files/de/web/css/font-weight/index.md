---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Stärke (oder Fetten) der Schriftart fest. Die verfügbaren Stärken hängen von der aktuell gesetzten {{cssxref("font-family")}} ab.

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

Die `font-weight`-Eigenschaft wird entweder mit einem `<font-weight-absolute>` Wert oder einem relativen Gewichtswert angegeben, wie unten aufgeführt.

### Werte

- `normal`

  - : Normale Schriftstärke. Entspricht `400`.

- `bold`

  - : Fette Schriftstärke. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich beider Werte. Höhere Zahlen stehen für Stärken, die kräftiger sind als (oder genauso kräftig wie) niedrigere Zahlen. Dies ermöglicht eine Feinsteuerung für [variable Schriften](#variable_schriften). Für nicht-variable Schriften wird, falls das genau angegebene Gewicht nicht verfügbar ist, ein [Ersatzgewicht](#ersatzgewichte) Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen gebräuchlichen Gewichtsnamen, wie im Abschnitt [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) unten beschrieben.

- `lighter`

  - : Eine relative Schriftstärke leichter als das übergeordnete Element. Beachten Sie, dass nur vier Schriftstärken für die Berechnung des relativen Gewichts berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

- `bolder`
  - : Eine relative Schriftstärke schwerer als das übergeordnete Element. Beachten Sie, dass nur vier Schriftstärken für die Berechnung des relativen Gewichts berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

### Ersatzgewichte

Wenn das angegebene Gewicht nicht verfügbar ist, wird die folgende Regel zur Bestimmung des tatsächlich angezeigten Gewichts verwendet:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` einschließlich liegt:

  - Suchen Sie nach verfügbaren Gewichten zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn kein Treffer gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.
  - Wenn kein Treffer gefunden wird, suchen Sie nach verfügbaren Gewichten über `500` in aufsteigender Reihenfolge.

- Wenn ein Gewicht unter `400` angegeben wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge. Wenn kein Treffer gefunden wird, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge.

- Wenn ein Gewicht über `500` angegeben wird, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge. Wenn kein Treffer gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.

> [!NOTE]
> Der Ersatzzweckalgorithmus wird nur für die Darstellung verwendet. Der berechnete Wert der Eigenschaft ist immer noch der angegebene Wert.

### Bedeutung relativer Gewichte

Wenn `lighter` oder `bolder` angegeben ist, zeigt das folgende Diagramm, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Gewichte nur vier Schriftstärken berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftfamilie mehr Gewichtsoptionen hat, werden diese bei der Berechnung des relativen Gewichts ignoriert.

<table class="standard-table">
  <thead>
    <tr>
      <th>Vererbter Wert</th>
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

### Allgemeine Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen in etwa den folgenden gebräuchlichen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Allgemeiner Gewichtname                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Haarlinie)                                                                                                                       |
| 200  | Extra Light (Ultra Light)                                                                                                              |
| 300  | Light                                                                                                                                  |
| 400  | Normal (Regulär)                                                                                                                       |
| 500  | Medium                                                                                                                                 |
| 600  | Semi Bold (Demi Bold)                                                                                                                  |
| 700  | Fett                                                                                                                                   |
| 800  | Extra Bold (Ultra Bold)                                                                                                                |
| 900  | Schwarz (Schwer)                                                                                                                       |
| 950  | [Extra Schwarz (Ultra Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriften

Während viele Schriften ein bestimmtes Gewicht haben, das einer der Zahlen in [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) entspricht, unterstützen die meisten variablen Schriften einen Gewichtsbereich, der eine viel feinere Granularität bietet und Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht gibt.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

Dieses Demo lädt mit `font-weight: 500;` eingestellt. Ändern Sie den Wert der `font-weight`-Eigenschaft im `.sample`-Selektor, um das Gewicht des Textes zu ändern (z. B. 200, 700). Klicken Sie auf "Play" in den unten stehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Personen mit eingeschränktem Sehvermögen können Schwierigkeiten haben, Text zu lesen, der auf einen `font-weight`-Wert von `100` (Thin/Haarline) oder `200` (Extra Light) gesetzt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastfarbverhältnis](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftstärken einstellen

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
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
