---
title: white-space
slug: Web/CSS/white-space
l10n:
  sourceCommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{CSSRef}}

Die **`white-space`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements behandelt wird.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

Diese Eigenschaft legt zwei Dinge fest:

- Ob und wie Leerraum [kollabiert](#kollabieren_von_leerraum).
- Ob und wie Zeilen umbrochen werden.

> [!NOTE]
> Um Wörter _innerhalb_ ihrer selbst zu trennen, verwenden Sie stattdessen {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, oder {{CSSxRef("hyphens")}}.

## Syntax

```css
/* Single keyword values */
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* white-space-collapse and text-wrap-mode shorthand values */
white-space: wrap;
white-space: collapse;
white-space: preserve nowrap;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### Werte

Die Werte der `white-space`-Eigenschaft können als ein einzelnes Schlüsselwort aus der unten stehenden Liste oder als zwei Werte angegeben werden, die Kurzformen für die {{CSSxRef("white-space-collapse")}}- und {{cssxref("text-wrap-mode")}}-Eigenschaften darstellen.

- `normal`
  - : Folgen von Leerzeichen werden [kollabiert](#kollabieren_von_leerraum). Neue Zeilenzeichen im Quelltext werden genauso wie andere Leerzeichen behandelt. Zeilen werden nach Bedarf umbrochen, um Zeilenboxen zu füllen.
- `pre`
  - : Folgen von Leerzeichen bleiben erhalten. Zeilen werden nur an neuen Zeilenzeichen im Quelltext und an {{HTMLElement("br")}}-Elementen umbrochen.
- `pre-wrap`
  - : Folgen von Leerzeichen bleiben erhalten. Zeilen werden an neuen Zeilenzeichen, an {{HTMLElement("br")}} und nach Bedarf umbrochen, um Zeilenboxen zu füllen.
- `pre-line`
  - : Folgen von Leerzeichen werden [kollabiert](#kollabieren_von_leerraum). Zeilen werden an neuen Zeilenzeichen, an {{HTMLElement("br")}} und nach Bedarf umbrochen, um Zeilenboxen zu füllen.

Die folgende Tabelle fasst das Verhalten der verschiedenen `white-space`-Schlüsselwortwerte zusammen:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Neue Zeilen</th>
      <th>Leerzeichen und Tabs</th>
      <th>Textumbruch</th>
      <th>Ende-der-Zeile-Leerzeichen</th>
      <th>Andere Leerzeichentrenner am Zeilenende</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Kollabieren</td>
      <td>Kollabieren</td>
      <td>Umbruch</td>
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
      <td>Kollabieren</td>
      <td>Umbruch</td>
      <td>Entfernen</td>
      <td>Hängen</td>
    </tr>
  </tbody>
</table>

Ein Tabulator entspricht standardmäßig 8 Leerzeichen und kann mit der [`tab-size`](/de/docs/Web/CSS/tab-size)-Eigenschaft konfiguriert werden. Bei den Werten `normal`, `nowrap` und `pre-line` wird jeder Tabulator in ein Leerzeichen (U+0020) umgewandelt.

> [!NOTE]
> Es wird zwischen **Leerzeichen** und **anderen Leerzeichentrennern** unterschieden. Diese werden wie folgt definiert:
>
> - Leerzeichen
>   - : Leerzeichen (U+0020), Tabs (U+0009) und Segmentumbrüche (wie neue Zeilen).
> - andere Leerzeichentrenner
>   - : Alle anderen in Unicode definierten Leerzeichentrenner, außer denen, die bereits als Leerzeichen definiert sind.
>
> Wo Leerraum gesagt wird zu _hängen_, kann dies die Größe der Box beeinflussen, wenn diese für intrinsische Größenmessung gemessen wird.

## Kollabieren von Leerraum

Die {{cssxref("white-space-collapse")}}-Eigenschaftsseite erklärt den [Browser-Algorithmus zum Kollabieren von Leerraum](/de/docs/Web/CSS/white-space-collapse#collapsing_of_white_space).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegendes Beispiel

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

Die `white-space` CSS-Eigenschaft kann verwendet werden, um mehrere Zeilen in einem {{SVGElement("text")}}-Element zu erstellen, das standardmäßig nicht umbrecht.

#### HTML

Der Text innerhalb des `<text>`-Elements muss in mehrere Zeilen aufgeteilt werden, damit die neuen Zeilen erkannt werden. Nach der ersten Zeile müssen die Leerzeichen entfernt werden.

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

- Eigenschaften, die definieren, wie Wörter _innerhalb_ ihrer selbst getrennt werden: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- [`tab-size`](/de/docs/Web/CSS/tab-size)
