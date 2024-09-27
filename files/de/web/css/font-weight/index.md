---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Gewicht (oder die Fettdruckstärke) der Schriftart fest. Die verfügbaren Gewichte hängen von der aktuell gesetzten {{cssxref("font-family")}} ab.

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

Die Eigenschaft `font-weight` wird entweder mit einem `<font-weight-absolute>`-Wert oder einem relativen Gewichtswert, wie unten aufgeführt, angegeben.

### Werte

- `normal`

  - : Normales Schriftgewicht. Entspricht `400`.

- `bold`

  - : Fettgedrucktes Schriftgewicht. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, beide Werte eingeschlossen. Höhere Zahlen stehen für Gewichte, die fetter als (oder genauso fett wie) niedrigere Zahlen sind. Dies ermöglicht eine feinkörnige Kontrolle für [variable Schriftarten](#variable_schriftarten). Für nicht variable Schriftarten wird, falls das genau angegebene Gewicht nicht verfügbar ist, ein [Fallback-Gewicht](#fallback-gewichte)-Algorithmus verwendet — numerische Werte, die durch 100 teilbar sind, entsprechen gebräuchlichen Gewichtsnamen, wie im Abschnitt [Zuordnung der allgemeinen Gewichtsnamen](#zuordnung_der_allgemeinen_gewichtsnamen) unten beschrieben.

- `lighter`

  - : Ein relatives Schriftgewicht leichter als das des übergeordneten Elements. Beachten Sie, dass nur vier Schriftgewichte für die Berechnung relativer Gewichte berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

- `bolder`
  - : Ein relatives Schriftgewicht schwerer als das des übergeordneten Elements. Beachten Sie, dass nur vier Schriftgewichte für die Berechnung relativer Gewichte berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

### Fallback-Gewichte

Wenn das genaue angegebene Gewicht nicht verfügbar ist, wird die folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` einschließlich liegt:

  - Suchen Sie nach verfügbaren Gewichten zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten über `500` in aufsteigender Reihenfolge.

- Wenn ein Gewicht unter `400` angegeben ist, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge.

- Wenn ein Gewicht über `500` angegeben ist, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.

> [!NOTE]
> Der Fallback-Gewichtsalgorithmus wird nur für das Rendering verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung relativer Gewichte

Wenn `lighter` oder `bolder` angegeben ist, zeigt die unten stehende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Gewichte nur vier Schriftgewichte berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftfamilie mehr Gewichtungen zur Verfügung hat, werden sie für die Zwecke der Berechnung relativer Gewichte ignoriert.

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

### Zuordnung der allgemeinen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden gebräuchlichen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Allgemeiner Gewichtname                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Haarlinie)                                                                                                                       |
| 200  | Extra-Leicht (Ultra-Leicht)                                                                                                            |
| 300  | Leicht                                                                                                                                 |
| 400  | Normal (Regulär)                                                                                                                       |
| 500  | Mittel                                                                                                                                 |
| 600  | Halb-fett (Demi-fett)                                                                                                                  |
| 700  | Fett                                                                                                                                   |
| 800  | Extra-Fett (Ultra-Fett)                                                                                                                |
| 900  | Schwarz (Schwer)                                                                                                                       |
| 950  | [Extra-Schwarz (Ultra-Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriftarten

Während viele Schriftarten ein bestimmtes Gewicht haben, das einem der Zahlen in [Zuordnung der allgemeinen Gewichtsnamen](#zuordnung_der_allgemeinen_gewichtsnamen) entspricht, unterstützen die meisten variablen Schriftarten einen Bereich von Gewichten, die eine viel feinere Granularität bieten und Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht geben.

Für TrueType- oder OpenType-Variable-Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Breiten zu implementieren.

Dieses Demo lädt mit `font-weight: 500;` eingestellt. Ändern Sie den Wert der `font-weight`-Eigenschaft, um zu sehen, wie sich das Gewicht des Textes ändert.

{{EmbedGHLiveSample("css-examples/variable-fonts/font-weight.html", '100%', 860)}}

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Haarlinie) oder `200` (Extra-Leicht) gesetzt ist, besonders wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgewichte setzen

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
- [Grundlegende Text- und Schriftartgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
