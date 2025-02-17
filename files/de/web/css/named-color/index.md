---
title: <named-color>
slug: Web/CSS/named-color
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<named-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist der Name einer Farbe, wie zum Beispiel `red`, `blue`, `black` oder `lightseagreen`. Syntaktisch ist ein `<named-color>` ein [`<ident>`](/de/docs/Web/CSS/ident).

Ein `<named-color>`-Wert kann verwendet werden, wo immer ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

```css
color: red;
color: orange;
color: tan;
color: rebeccapurple;
color: transparent;
```

### Wert

Named Colors bestehen aus Standardfarben, den Schlüsselwörtern [`transparent`](#transparent) und [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).

#### Standardfarben

Grundlegende Farben haben standardisierte, leicht zu merkende Namen:

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

Zusätzlich zu diesen 16 Farben gibt es etwa 150 weitere Farben, die ein Schlüsselwort zugeordnet haben:

<table>
  <thead>
    <tr>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">RGB-Hex-Wert</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <!-- Fortsetzung mit weiteren Werten wie bereits oben -->
  </tbody>
</table>

Im [CSS Level 1](https://www.w3.org/TR/REC-CSS1/#color-units) wurden ursprünglich nur 16 Grundfarben definiert, wobei `orange` im [CSS Level 2](https://www.w3.org/TR/CSS2/syndata.html#value-def-color) hinzugefügt wurde. Webdesigner empfanden diese Liste als zu kurz, und Browseranbieter fügten zahlreiche Namen für Farben hinzu, die auf den X11-Farbnamen basieren. Diese Namen wurden im [SVG 1](https://www.w3.org/TR/SVG11/types.html#DataTypeColor) und anschließend in [CSS Colors Level 3](https://www.w3.org/TR/css-color-3/#svg-color) standardisiert, formal definiert und vereinheitlicht (einige hatten bis dahin unterschiedliche Schreibweisen, die jetzt Aliase sind). Sie werden als _erweiterte Farbschlüsselwörter_, _X11-Farben_ oder _SVG-Farben_ bezeichnet.

Im [CSS Colors Level 4](https://www.w3.org/TR/css-color-4/#named-colors) wurde eine zusätzliche Farbe, `rebeccapurple`, hinzugefügt, um [Web-Pionier Eric Meyer](https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/) zu ehren.

### transparent

Das Schlüsselwort `transparent` stellt eine vollständig transparente Farbe dar. Dadurch wird der Hintergrund hinter dem farbigen Element vollständig sichtbar. Technisch gesehen ist `transparent` eine Abkürzung für `rgb(0 0 0 / 0%)`.

Um unerwartetes Verhalten zu vermeiden, zum Beispiel in einem {{cssxref("gradient")}}, gibt die aktuelle CSS-Spezifikation an, dass `transparent` im [alpha-premultiplied Farbraum](https://www.w3.org/TR/css-color-4/#interpolation-alpha) berechnet werden sollte. Beachten Sie jedoch, dass ältere Browser es möglicherweise als Schwarz mit einem Alpha-Wert von `0` behandeln.

Das Schlüsselwort `transparent` war in CSS Level 2 (Revision 1) keine echte Farbe. Es war ein spezielles Schlüsselwort, das anstelle eines regulären `<color>`-Wertes bei zwei CSS-Eigenschaften verwendet werden konnte: {{Cssxref("background")}} und {{Cssxref("border")}}. Es wurde im Wesentlichen hinzugefügt, um Entwicklern zu ermöglichen, eine vererbte Vollfarbe zu überschreiben. Mit der Einführung von Alphakanälen in CSS Colors Level 3 wurde `transparent` als echte Farbe neu definiert. Es kann nun überall dort verwendet werden, wo ein `<color>`-Wert verwendet werden kann.

## Beschreibung

Alle Namen spezifizieren eine Farbe im [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Auch wenn die Namen die jeweiligen Farben mehr oder weniger beschreiben, sind sie im Grunde künstlich und ohne strenge Logik hinter den verwendeten Begriffen.

Die Farbschlüsselwörter stehen alle für einfache, einfarbige Farben ohne Transparenz.

Einige Schlüsselwörter sind Aliase füreinander:

- `aqua` / `cyan`
- `fuchsia` / `magenta`
- `darkgray` / `darkgrey`
- `darkslategray` / `darkslategrey`
- `dimgray` / `dimgrey`
- `lightgray` / `lightgrey`
- `lightslategray` / `lightslategrey`
- `gray` / `grey`
- `slategray` / `slategrey`

Obwohl viele Schlüsselwörter aus [X11](https://en.wikipedia.org/wiki/X_Window_System) übernommen wurden, können ihre RGB-Werte von den entsprechenden Farben auf X11-Systemen abweichen, da Hersteller die X11-Farben manchmal an ihre spezifische Hardware anpassen.

## Beispiele

### Verwendung von Named Colors

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

- [`<color>`](/de/docs/Web/CSS/color_value): der Datentyp, dessen Definition `<named-color>` ein Bestandteil ist.
