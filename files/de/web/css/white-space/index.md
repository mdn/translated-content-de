---
title: white-space
slug: Web/CSS/white-space
l10n:
  sourceCommit: 68068add18d8cffe31067357cb516c84efba715e
---

Die **`white-space`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie {{Glossary("whitespace", "Leerzeichen")}} innerhalb eines Elements behandelt werden.

{{InteractiveExample("CSS Demo: white-space")}}

```css interactive-example-choice
white-space: normal;
```

```css interactive-example-choice
white-space: pre;
```

```css interactive-example-choice
white-space: pre-wrap;
```

```css interactive-example-choice
white-space: pre-line;
```

```css interactive-example-choice
white-space: wrap;
```

```css interactive-example-choice
white-space: collapse;
```

```css interactive-example-choice
white-space: preserve nowrap;
```

<!-- cSpell:ignore stept -->

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <p>
      But ere she from the church-door stepped She smiled and told us why: 'It
      was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and
      smiled, and passed it off Ere from the door she stept—
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 16rem;
}

#example-element p {
  border: 1px solid #c5c5c5;
  padding: 0.75rem;
  text-align: left;
}
```

Diese Eigenschaft legt zwei Dinge fest:

- Ob und wie Leerzeichen [zusammengefasst](#zusammenfassen_von_leerzeichen) werden.
- Ob und wie Zeilen umbrochen werden.

> [!NOTE]
> Um Wörter _innerhalb_ von sich selbst zu trennen, verwenden Sie stattdessen {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} oder {{CSSxRef("hyphens")}}.

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("white-space-collapse")}}
- {{cssxref("text-wrap-mode")}}

> [!NOTE]
> Die Spezifikation definiert eine dritte zusammensetzende Eigenschaft: `white-space-trim`, die in keinem Browser bisher implementiert ist.

## Syntax

```css
/* Single keyword values */
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* white-space-collapse and text-wrap-mode shorthand values */
white-space: nowrap;
white-space: wrap;
white-space: break-spaces;
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

Die Werte der `white-space` Eigenschaft können als ein oder zwei Schlüsselwörter spezifiziert werden, die die Werte für die Eigenschaften {{CSSxRef("white-space-collapse")}} und {{cssxref("text-wrap-mode")}} repräsentieren, oder die folgenden speziellen Schlüsselwörter:

- `normal`
  - : Folgen von Leerzeichen werden [zusammengefasst](#zusammenfassen_von_leerzeichen). Neue Zeilenzeichen in der Quelle werden wie andere Leerzeichen behandelt. Zeilen werden bei Bedarf umbrochen, um Linienboxen zu füllen. Entspricht `collapse wrap`.
- `pre`
  - : Folgen von Leerzeichen werden beibehalten. Zeilen werden nur an neuen Zeilenzeichen in der Quelle und an {{HTMLElement("br")}}-Elementen umbrochen. Entspricht `preserve nowrap`.
- `pre-wrap`
  - : Folgen von Leerzeichen werden beibehalten. Zeilen werden an neuen Zeilenzeichen, bei {{HTMLElement("br")}}, und bei Bedarf, um Linienboxen zu füllen, umbrochen. Entspricht `preserve wrap`.
- `pre-line`
  - : Folgen von Leerzeichen werden [zusammengefasst](#zusammenfassen_von_leerzeichen). Zeilen werden an neuen Zeilenzeichen, bei {{HTMLElement("br")}}, und bei Bedarf, um Linienboxen zu füllen, umbrochen. Entspricht `preserve-breaks wrap`.

> [!NOTE]
> Die `white-space` Eigenschaft als Kurzform ist eine relativ neue Funktion (siehe [Browser-Kompatibilität](#browser-kompatibilität)). Ursprünglich hatte sie sechs Schlüsselwortwerte; jetzt wird der Wert `nowrap` stattdessen als Wert für {{cssxref("text-wrap-mode")}} interpretiert, während der Wert `break-spaces` als Wert für {{cssxref("white-space-collapse")}} interpretiert wird. Die obigen vier Schlüsselwörter sind noch spezifisch für `white-space`, haben aber eine Langform-Entsprechung. Die Änderung, `white-space` zu einer Kurzform zu machen, erweitert die akzeptablen Werte auf noch mehr Schlüsselwörter und Kombinationen, wie `wrap` und `collapse`.

Die folgende Tabelle fasst das Verhalten dieser vier `white-space` Schlüsselwortwerte zusammen:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Neue Zeilen</th>
      <th>Leerzeichen und Tabs</th>
      <th>Textumbruch</th>
      <th>End-der-Zeile-Leerzeichen</th>
      <th>End-der-Zeile-andere-Leerzeichen-Trenner</th>
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
  </tbody>
</table>

Ein Tabulator entspricht standardmäßig 8 Leerzeichen und kann mithilfe der [`tab-size`](/de/docs/Web/CSS/tab-size) Eigenschaft konfiguriert werden. Im Fall der Werte `normal`, `nowrap` und `pre-line` wird jeder Tabulator in ein Leerzeichen (U+0020) Zeichen umgewandelt.

> [!NOTE]
> Es wird zwischen **Leerzeichen** und **anderen Leerzeichentrennern** unterschieden. Diese sind wie folgt definiert:
>
> - Leerzeichen
>   - : Leerzeichen (U+0020), Tabs (U+0009) und Segmentbrüche (wie Zeilenumbrüche).
> - andere Leerzeichentrenner
>   - : Alle anderen in Unicode definierten Leerzeichentrenner, abgesehen von denen, die bereits als Leerzeichen definiert sind.
>
> Wo Leerzeichen gesagt wird, dass sie _hängen_, kann dies die Größe der Box beim Messen für die intrinsische Größe beeinflussen.

## Zusammenfassen von Leerzeichen

Die Seite {{cssxref("white-space-collapse")}} erklärt den [Browser-Algorithmus zur Zusammenfassung von Leerzeichen](/de/docs/Web/CSS/white-space-collapse#collapsing_of_white_space).

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

### Zeilenumbrüche innerhalb \<pre>-Elementen

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

### Mehrere Zeilen in SVG-Text-Element

Die `white-space` CSS-Eigenschaft kann verwendet werden, um mehrere Zeilen in einem {{SVGElement("text")}}-Element zu erstellen, das standardmäßig keinen Umbruch hat.

#### HTML

Der Text innerhalb des `<text>`-Elements muss auf mehrere Zeilen aufgeteilt werden, damit die neuen Zeilen erkannt werden. Nach der ersten Zeile muss der Rest leerzeichenfrei sein.

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

- Eigenschaften, die definieren, wie Wörter _innerhalb_ von sich selbst brechen: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- [`tab-size`](/de/docs/Web/CSS/tab-size)
