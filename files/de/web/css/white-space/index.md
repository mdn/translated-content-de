---
title: white-space
slug: Web/CSS/white-space
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{CSSRef}}

Die **`white-space`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie [Leerzeichen](/de/docs/Glossary/whitespace) innerhalb eines Elements behandelt werden.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

Diese Eigenschaft spezifiziert zwei Dinge:

- Ob und wie Leerzeichen [zusammengefasst](#zusammenfassen_von_leerzeichen) werden.
- Ob und wie Zeilen umbrechen.

> [!NOTE]
> Um Wörter _innerhalb_ der Wörter zu trennen, verwenden Sie stattdessen {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} oder {{CSSxRef("hyphens")}}.

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

Die Werte der `white-space` Eigenschaft können als einzelnes Schlüsselwort aus der unten stehenden Werteliste oder als zwei Werte angegeben werden, die eine Kurzform für die Eigenschaften {{CSSxRef("white-space-collapse")}} und {{cssxref("text-wrap")}} darstellen.

- `normal`
  - : Sequenzen von Leerzeichen werden [zusammengefasst](#zusammenfassen_von_leerzeichen). Neue Zeilenzeichen in der Quelle werden wie andere Leerzeichen behandelt. Zeilen brechen bei Bedarf, um Zeilenboxen zu füllen.
- `nowrap`
  - : [Fasst](#zusammenfassen_von_leerzeichen) Leerzeichen wie der Wert `normal` zusammen, unterdrückt jedoch Zeilenumbrüche (Textumbruch) innerhalb der Quelle.
- `pre`
  - : Sequenzen von Leerzeichen werden beibehalten. Zeilen werden nur bei neuen Zeilenzeichen in der Quelle und bei {{HTMLElement("br")}}-Elementen umbrochen.
- `pre-wrap`
  - : Sequenzen von Leerzeichen werden beibehalten. Zeilen werden an neuen Zeilenzeichen, bei {{HTMLElement("br")}} und bei Bedarf umgebrochen, um Zeilenboxen zu füllen.
- `pre-line`
  - : Sequenzen von Leerzeichen werden [zusammengefasst](#zusammenfassen_von_leerzeichen). Zeilen werden an neuen Zeilenzeichen, bei {{HTMLElement("br")}} und bei Bedarf umbrochen, um Zeilenboxen zu füllen.
- `break-spaces`

  - : Das Verhalten ist identisch mit dem von `pre-wrap`, außer dass:

    - Jede Sequenz von beibehaltenen Leerzeichen nimmt immer Platz ein, einschließlich am Ende der Zeile.
    - Es gibt eine Gelegenheit zum Zeilenumbruch nach jedem beibehaltenen Leerzeichenzeichen, einschließlich zwischen Leerzeichenzeichen.
    - Solche beibehaltenen Leerzeichen nehmen Platz ein und hängen nicht, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

Die folgende Tabelle fasst das Verhalten der verschiedenen `white-space` Schlüsselwortwerte zusammen:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Neue Zeilen</th>
      <th>Leerzeichen und Tabs</th>
      <th>Textumbruch</th>
      <th>Leerzeichen am Zeilenende</th>
      <th>Andere Leerzeichentrenner am Zeilenende</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Zusammenfassen</td>
      <td>Zusammenfassen</td>
      <td>Umbrechen</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>Zusammenfassen</td>
      <td>Zusammenfassen</td>
      <td>Nicht umbrechen</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Nicht umbrechen</td>
      <td>Beibehalten</td>
      <td>Nicht umbrechen</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Umbrechen</td>
      <td>Hängen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Beibehalten</td>
      <td>Zusammenfassen</td>
      <td>Umbrechen</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
    <tr>
      <th><code>break-spaces</code></th>
      <td>Beibehalten</td>
      <td>Beibehalten</td>
      <td>Umbrechen</td>
      <td>Umbrechen</td>
      <td>Umbrechen</td>
    </tr>
  </tbody>
</table>

Ein Tabulator entspricht standardmäßig 8 Leerzeichen und kann über die Eigenschaft [`tab-size`](/de/docs/Web/CSS/tab-size) konfiguriert werden. Im Fall von `normal`, `nowrap` und `pre-line` wird jeder Tabulator in ein Leerzeichen (U+0020) Zeichen umgewandelt.

> [!NOTE]
> Es wird zwischen **Leerzeichen** und **anderen Leerzeichentrennern** unterschieden. Diese sind wie folgt definiert:
>
> - Leerzeichen
>   - : Leerzeichen (U+0020), Tabs (U+0009) und Segmentumbrüche (wie neue Zeilen).
> - andere Leerzeichentrenner
>   - : Alle anderen in Unicode definierten Leerzeichentrenner, mit Ausnahme der bereits als Leerzeichen definierten.
>
> Wo Leerzeichen als _hängend_ bezeichnet werden, kann dies die Größe der Box beeinflussen, wenn sie für die intrinsische Größenbestimmung gemessen wird.

## Zusammenfassen von Leerzeichen

Die {{cssxref("white-space-collapse")}} Eigenschaftenseite erklärt den [Browser-Algorithmus zum Zusammenfassen von Leerzeichen](/de/docs/Web/CSS/white-space-collapse#collapsing_of_white_space).

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

### Zeilenumbrüche innerhalb von \<pre> Elementen

```css
pre {
  white-space: pre-wrap;
}
```

### Im Einsatz

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

### Mehrere Zeilen in einem SVG-Text-Element

Die CSS-Eigenschaft `white-space` kann verwendet werden, um mehrere Zeilen in einem {{SVGElement("text")}} Element zu erstellen, das standardmäßig nicht umbricht.

#### HTML

Der Text innerhalb des `<text>`-Elements muss in mehrere Zeilen aufgeteilt werden, damit die neuen Zeilen erkannt werden. Nach der ersten Zeile müssen die restlichen Leerzeichen entfernt werden.

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

- Eigenschaften, die definieren, wie Wörter _innerhalb_ der Wörter brechen: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- [`tab-size`](/de/docs/Web/CSS/tab-size)
