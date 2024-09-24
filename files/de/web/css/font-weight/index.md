---
title: font-weight
slug: Web/CSS/font-weight
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Stärke (oder Fettdruck) der Schrift fest. Die verfügbaren Stärken hängen von der derzeit gesetzten {{cssxref("font-family")}} ab.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## Syntax

```css
/* <font-weight-absolute> Schlüsselwortwerte */
font-weight: normal;
font-weight: bold;

/* <font-weight-absolute> numerische Werte [1,1000] */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* bold */
font-weight: 800;
font-weight: 900;

/* Schlüsselwortwerte relativ zum Elternteil */
font-weight: lighter;
font-weight: bolder;

/* Globale Werte */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: revert-layer;
font-weight: unset;
```

Die `font-weight` Eigenschaft wird entweder mit einem `<font-weight-absolute>` Wert oder einem relativen Gewichtswert angegeben, wie unten aufgeführt.

### Werte

- `normal`

  - : Normale Schriftstärke. Entspricht `400`.

- `bold`

  - : Fette Schriftstärke. Entspricht `700`.

- `<number>`

  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, beide inklusive. Höhere Zahlen stehen für stärkere (oder ebenso starke) Gewichte als niedrigere Zahlen. Dies ermöglicht eine feingranulare Kontrolle für [variable Schriftarten](#variable_schriftarten). Für nicht variable Schriftarten wird ein [Ersatzgewicht](#ersatzgewichte) Algorithmus verwendet, falls das genau angegebene Gewicht nicht verfügbar ist — numerische Werte, die durch 100 teilbar sind, entsprechen den gebräuchlichen Gewichtsnamen, wie im Abschnitt [Zuordnung gebräuchlicher Gewichtsnamen](#zuordnung_gebräuchlicher_gewichtsnamen) unten beschrieben.

- `lighter`

  - : Eine relative Schriftstärke, die leichter ist als das Elternelement. Beachten Sie, dass für die Berechnung des relativen Gewichts nur vier Schriftgewichte berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

- `bolder`
  - : Eine relative Schriftstärke, die schwerer ist als das Elternelement. Beachten Sie, dass für die Berechnung des relativen Gewichts nur vier Schriftgewichte berücksichtigt werden; siehe den Abschnitt [Bedeutung relativer Gewichte](#bedeutung_relativer_gewichte) unten.

### Ersatzgewichte

Wenn das genaue angegebene Gewicht nicht verfügbar ist, wird die folgende Regel verwendet, um das tatsächlich gerenderte Gewicht zu bestimmen:

- Wenn das angegebene Zielgewicht zwischen `400` und `500` inklusive liegt:

  - Suchen Sie nach verfügbaren Gewichten zwischen dem Ziel und `500` in aufsteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge.
  - Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten über `500` in aufsteigender Reihenfolge.

- Wenn ein Gewicht kleiner als `400` angegeben ist, suchen Sie nach verfügbaren Gewichten unterhalb des Ziels in absteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge.

- Wenn ein Gewicht größer als `500` angegeben ist, suchen Sie nach verfügbaren Gewichten über dem Ziel in aufsteigender Reihenfolge. Wenn keine Übereinstimmung gefunden wird, suchen Sie nach verfügbaren Gewichten unter dem Ziel in absteigender Reihenfolge.

> [!NOTE]
> Der Ersatzgewicht-Algorithmus wird nur zum Rendern verwendet. Der berechnete Wert der Eigenschaft bleibt der angegebene Wert.

### Bedeutung relativer Gewichte

Wenn `lighter` oder `bolder` angegeben ist, zeigt die folgende Tabelle, wie das absolute Schriftgewicht des Elements bestimmt wird.

Beachten Sie, dass bei der Verwendung relativer Gewichte nur vier Schriftgewichte berücksichtigt werden — dünn (100), normal (400), fett (700) und schwer (900). Wenn eine Schriftfamilie mehr Gewichtungen zur Verfügung hat, werden diese für die Berechnung relativ zum Gewicht ignoriert.

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

### Zuordnung gebräuchlicher Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden gebräuchlichen Gewichtsnamen (siehe die [OpenType-Spezifikation](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Wert | Gebräuchlicher Gewichtsnamen                                                                                                       |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Dünn (Haarlinie)                                                                                                                   |
| 200  | Extra Leicht (Ultra Leicht)                                                                                                        |
| 300  | Leicht                                                                                                                             |
| 400  | Normal (Regulär)                                                                                                                   |
| 500  | Mittel                                                                                                                             |
| 600  | Halbfett (Demi Bold)                                                                                                               |
| 700  | Fett                                                                                                                               |
| 800  | Extra Fett (Ultra Fett)                                                                                                            |
| 900  | Schwarz (Schwer)                                                                                                                   |
| 950  | [Extra Schwarz (Ultra Schwarz)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable Schriftarten

Während viele Schriften ein bestimmtes Gewicht haben, das einem der Zahlen in der [Zuordnung gebräuchlicher Gewichtsnamen](#zuordnung_gebräuchlicher_gewichtsnamen) entspricht, unterstützen die meisten variablen Schriftarten eine Bandbreite von Gewichtungen, die weit feinere Granularität bietet und Designern und Entwicklern mehr Kontrolle über das gewählte Gewicht gibt.

Für TrueType oder OpenType variable Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Breiten zu implementieren.

Dieses Demo lädt mit `font-weight: 500;` gesetzt. Ändern Sie den Wert der `font-weight` Eigenschaft, um die Stärke des Textes zu ändern.

{{EmbedGHLiveSample("css-examples/variable-fonts/font-weight.html", '100%', 860)}}

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) zu lesen, insbesondere wenn die Schrift eine [niedrige Kontrastfarbratio](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Schriftstärken

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
/* Setzen Sie den Text des Absatzes auf fett. */
p {
  font-weight: bold;
}

/* Setzen Sie den Text im div auf zwei Schritte schwerer als
   normal, aber leichter als ein Standard-Fett. */
div {
  font-weight: 600;
}

/* Setzen Sie den Text im span auf einen Schritt leichter
   als sein Elternteil. */
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
- [Grundlegende Text- und Schriftstilierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
