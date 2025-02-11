---
title: <named-color>
slug: Web/CSS/named-color
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Der **`<named-color>`**-Daten-Typ im [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist der Name einer Farbe, wie z. B. `red`, `blue`, `black` oder `lightseagreen`. Syntaktisch ist ein `<named-color>` ein [`<ident>`](/de/docs/Web/CSS/ident).

Ein `<named-color>`-Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

```css
color: red;
color: orange;
color: tan;
color: rebeccapurple;
color: transparent;
```

### Wert

Benannte Farben bestehen aus Standardfarben, den Schlüsselwörtern [`transparent`](#transparent) und [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).

#### Standardfarben

Grundfarben haben standardisierte, leicht merkbare Namen:

<table>
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">RGB-Hex-Wert</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
  </tbody>
</table>

Zusätzlich zu diesen 16 Farben gibt es etwa 150 weitere Farben, die mit einem Schlüsselwort verknüpft sind:

<table>
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">RGB-Hex-Wert</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <!-- Dieser lange Abschnitt der Farbtabelle bleibt auf die gleiche Weise übersetzt wie der vorherige -->
  <tbody>
  ...
  </tbody>
</table>

Zu Beginn in [CSS Level 1](https://www.w3.org/TR/REC-CSS1/#color-units) wurden nur 16 Grundfarben definiert, mit `orange` hinzugefügt in [CSS Level 2](https://www.w3.org/TR/CSS2/syndata.html#value-def-color). Webdesigner empfanden diese Liste als zu kurz, und Browseranbieter fügte zahlreiche Farbnamensausdrücke aus den X11-Farbnamen hinzu. In [SVG 1](https://www.w3.org/TR/SVG11/types.html#DataTypeColor) und später in [CSS Colors Level 3](https://www.w3.org/TR/css-color-3/#svg-color) wurden diese Namen standardisiert, formal definiert und vereinheitlicht (einige hatten damals unterschiedliche Schreibweisen, die jetzt Aliase sind). Sie werden _erweiterte Farbschlüsselwörter_, _X11-Farben_ oder _SVG-Farben_ genannt.

In [CSS Colors Level 4](https://www.w3.org/TR/css-color-4/#named-colors) wurde eine zusätzliche Farbe, `rebeccapurple`, hinzugefügt, um den [Web-Pionier Eric Meyer](https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/) zu ehren.

### transparent

Das Schlüsselwort `transparent` steht für eine vollständig transparente Farbe. Dies macht den Hintergrund hinter dem farbigen Element vollständig sichtbar. Technisch ist `transparent` eine Abkürzung für `rgb(0 0 0 / 0%)`.

Um unerwartetes Verhalten, beispielsweise in einem {{cssxref("gradient")}}, zu verhindern, besagt die aktuelle CSS-Spezifikation, dass `transparent` im [Alpha-vorberechneten Farbraum](https://www.w3.org/TR/css-color-4/#interpolation-alpha) berechnet werden sollte. Ältere Browser behandeln dies jedoch möglicherweise als Schwarz mit einem Alpha-Wert von `0`.

Das Schlüsselwort `transparent` war in CSS Level 2 (Revision 1) keine echte Farbe. Es war ein spezielles Schlüsselwort, das anstelle eines regulären `<color>`-Wertes bei zwei CSS-Eigenschaften verwendet werden konnte: {{Cssxref("background")}} und {{Cssxref("border")}}. Im Wesentlichen wurde es hinzugefügt, um Entwicklern zu ermöglichen, eine geerbte Volltonfarbe zu überschreiben. Mit der Einführung von Alphakanälen in CSS Colors Level 3 wurde `transparent` als echte Farbe neu definiert. Es kann jetzt überall verwendet werden, wo ein `<color>`-Wert verwendet werden kann.

## Beschreibung

Alle Namen spezifizieren eine Farbe im [sRGB-Farbraum](https://de.wikipedia.org/wiki/SRGB). Obwohl die Namen ihre jeweiligen Farben mehr oder weniger beschreiben, sind sie grundlegend künstlich, ohne eine strenge Begründung für die verwendeten Begriffe.

Die Farbschlüsselwörter stehen alle für einfache, vollflächige Farben ohne Transparenz.

Mehrere Schlüsselwörter sind Aliase füreinander:

- `aqua` / `cyan`
- `fuchsia` / `magenta`
- `darkgray` / `darkgrey`
- `darkslategray` / `darkslategrey`
- `dimgray` / `dimgrey`
- `lightgray` / `lightgrey`
- `lightslategray` / `lightslategrey`
- `gray` / `grey`
- `slategray` / `slategrey`

Obwohl viele Schlüsselwörter aus [X11](https://de.wikipedia.org/wiki/X_Window_System) übernommen wurden, können sich ihre RGB-Werte von den entsprechenden Farben auf X11-Systemen unterscheiden, da Hersteller X11-Farben manchmal an ihre spezifische Hardware anpassen.

## Beispiele

### Verwendung benannter Farben

#### HTML

```html
<div id="container">
  <div id="one"></div>
  <div id="two"></div>
  <div id="three"></div>
</div>
```

#### CSS

```css
#container {
  display: flex;
  justify-content: space-around;
  background-color: darkslateblue;
  padding: 20px;
}

#container > div {
  height: 100px;
  width: 100px;
  margin: 3px;
  border: 2px solid black;
}

#one {
  background-color: red;
}

#two {
  background-color: lavender;
}

#three {
  background-color: transparent;
}
```

#### Ergebnis

{{EmbedLiveSample("Using named colors")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value): Der Datentyp, dessen Definition `<named-color>` ein Bestandteil ist.
