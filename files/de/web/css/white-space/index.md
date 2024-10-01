---
title: white-space
slug: Web/CSS/white-space
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{CSSRef}}

Die **`white-space`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie {{Glossary("whitespace", "white space")}} innerhalb eines Elements behandelt wird.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

Die Eigenschaft spezifiziert zwei Dinge:

- Ob und wie white space [zusammengefasst](#zusammenfassen_von_white_space) wird.
- Ob und wie Zeilen umbrechen.

> [!NOTE]
> Um Wörter _innerhalb sich selbst_ zu brechen, verwenden Sie stattdessen {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} oder {{CSSxRef("hyphens")}}.

## Syntax

```css
/* Single keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* white-space-collapse and text-wrap shorthand values */
white-space: collapse balance;
white-space: preserve nowrap;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### Werte

Die Werte der `white-space`-Eigenschaft können als ein einziges Schlüsselwort aus der untenstehenden Liste angegeben werden, oder als zwei Werte, die eine Kurzform für die Eigenschaften {{CSSxRef("white-space-collapse")}} und {{cssxref("text-wrap")}} darstellen.

- `normal`
  - : Sequenzen von white space werden [zusammengefasst](#zusammenfassen_von_white_space). Neue Zeilenzeichen im Quelltext werden wie andere Leerzeichen behandelt. Zeilen werden nach Bedarf gebrochen, um Zeilenboxen zu füllen.
- `nowrap`
  - : Fasst white space wie der `normal`-Wert zusammen, unterdrückt jedoch Zeilenumbrüche (Textumbruch) innerhalb des Quelltexts.
- `pre`
  - : Sequenzen von white space werden beibehalten. Zeilen werden nur bei neuen Zeilenzeichen im Quelltext und bei {{HTMLElement("br")}}-Elementen gebrochen.
- `pre-wrap`
  - : Sequenzen von white space werden beibehalten. Zeilen werden bei neuen Zeilenzeichen, bei {{HTMLElement("br")}} und nach Bedarf gebrochen, um Zeilenboxen zu füllen.
- `pre-line`
  - : Sequenzen von white space werden [zusammengefasst](#zusammenfassen_von_white_space). Zeilen werden bei neuen Zeilenzeichen, bei {{HTMLElement("br")}} und nach Bedarf gebrochen, um Zeilenboxen zu füllen.
- `break-spaces`

  - : Das Verhalten ist identisch mit `pre-wrap`, außer dass:

    - Jede Sequenz von beibehaltenem white space nimmt immer Platz ein, einschließlich am Ende der Zeile.
    - Eine Möglichkeit zum Zeilenumbruch besteht nach jedem beibehaltenen white space-Zeichen, auch zwischen white space-Zeichen.
    - Solche beibehaltenen Leerzeichen nehmen Platz ein und hängen nicht, was die intrinsische Größe der Box beeinflusst ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

Die folgende Tabelle fasst das Verhalten der verschiedenen `white-space`-Schlüsselwortwerte zusammen:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Neue Zeilen</th>
      <th>Leerzeichen und Tabs</th>
      <th>Textumbruch</th>
      <th>Leerzeichen am Zeilenende</th>
      <th>Andere Leerzeichen am Zeilenende</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Zusammenfassen</td>
      <td>Zusammenfassen</td>
      <td>Umbruch</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>Zusammenfassen</td>
      <td>Zusammenfassen</td>
      <td>Kein Umbruch</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Kein Umbruch</td>
      <td>Beibehalten</td>
      <td>Kein Umbruch</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Umbruch</td>
      <td>Hängen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Beibehalten</td>
      <td>Zusammenfassen</td>
      <td>Umbruch</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>break-spaces</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Umbruch</td>
      <td>Umbruch</td>
      <td>Umbruch</td>
    </tr>
  </tbody>
</table>

Ein Tabulator entspricht standardmäßig 8 Leerzeichen und kann mit der [`tab-size`](/de/docs/Web/CSS/tab-size)-Eigenschaft konfiguriert werden. Im Fall der Werte `normal`, `nowrap` und `pre-line` wird jeder Tabulator in ein Leerzeichen (U+0020) umgewandelt.

> [!NOTE]
> Es wird ein Unterschied zwischen **Leerzeichen** und **anderen Leerzeichentrennzeichen** gemacht. Diese werden wie folgt definiert:
>
> - Leerzeichen
>   - : Leerzeichen (U+0020), Tabs (U+0009) und Segmentumbrüche (wie z.B. neue Zeilen).
> - Andere Leerzeichentrennzeichen
>   - : Alle anderen in Unicode definierten Leerzeichentrennzeichen, außer denen, die bereits als Leerzeichen definiert sind.
>
> Wo white space als _hängend_ bezeichnet wird, kann dies die Größe der Box beeinflussen, wenn sie zur intrinsischen Größenbestimmung gemessen wird.

## Zusammenfassen von white space

Die Seite zur Eigenschaft {{cssxref("white-space-collapse")}} erklärt den [Browser-Algorithmus zum Zusammenfassen von white space](/de/docs/Web/CSS/white-space-collapse#collapsing_of_white_space).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

```css
code {
  white-space: pre;
}
```

### Zeilenumbrüche innerhalb von \<pre>-Elementen

```css
pre {
  white-space: pre-wrap;
}
```

### In Aktion

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 350px;
  padding: 16px;
}

#css-code {
  background-color: rgb(220 220 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
  width: 100px;
}

#results {
  background-color: rgb(230 230 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.style.setProperty("white-space", e.target.value);
});
```

{{EmbedLiveSample("In_action", "100%", 450)}}

### Steuerung des Zeilenumbruchs in Tabellen

#### HTML

```html
<table>
  <tr>
    <td></td>
    <td>Very long content that splits</td>
    <td class="nw">Very long content that don't split</td>
  </tr>
  <tr>
    <td class="nw">white-space:</td>
    <td>normal</td>
    <td>nowrap</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
  text-align: center;
}
.nw {
  white-space: nowrap;
}
```

#### Ergebnis

{{EmbedLiveSample('Controlling line wrapping in tables', "100%", "100%")}}

### Mehrere Zeilen im SVG-Text-Element

Die `white-space`-CSS-Eigenschaft kann verwendet werden, um mehrere Zeilen in einem {{SVGElement("text")}}-Element zu erstellen, das standardmäßig nicht umbricht.

#### HTML

Der Text innerhalb des `<text>`-Elements muss in mehrere Zeilen aufgeteilt werden, damit die neuen Zeilen erkannt werden. Nach der ersten Zeile muss der restliche white space entfernt werden.

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20" x="10">Here is an English paragraph
that is broken into multiple lines
in the source code so that it can
be more easily read and edited
in a text editor.
  </text>
</svg>
```

#### CSS

```css
text {
  white-space: break-spaces;
}
```

#### Ergebnis

{{EmbedLiveSample("multiple_lines_in_svg_text_element", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die definieren, wie Wörter _innerhalb sich selbst_ brechen: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- [`tab-size`](/de/docs/Web/CSS/tab-size)
