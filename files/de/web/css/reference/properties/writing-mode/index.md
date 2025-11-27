---
title: writing-mode
slug: Web/CSS/Reference/Properties/writing-mode
l10n:
  sourceCommit: dd7de10dc91e9f2df29b80fec20da303439b6215
---

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden sowie die Richtung, in der sich Blöcke fortbewegen. Wenn sie für ein gesamtes Dokument festgelegt wird, sollte sie auf dem Wurzelelement (dem `html`-Element für HTML-Dokumente) gesetzt werden.

{{InteractiveExample("CSS Demo: writing-mode")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: sideways-rl;
```

```css interactive-example-choice
writing-mode: sideways-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
}
```

Diese Eigenschaft gibt die _Ausrichtungsrichtung von Blöcken_ an, also die Richtung, in der Block-Container gestapelt werden, sowie die Richtung, in der Inline-Inhalte innerhalb eines Block-Containers fließen. Somit bestimmt sie auch die Anordnung von Block-Inhalten.

## Syntax

```css
/* Keyword values */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
writing-mode: sideways-rl;
writing-mode: sideways-lr;

/* Global values */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

Die `writing-mode`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Flussrichtung in horizontalen Skripten wird auch von der [Direktionalität dieses Skripts](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Bei `ltr`-Skripten fließt der Inhalt horizontal von links nach rechts. Bei `rtl`-Skripten fließt der Inhalt horizontal von rechts nach links. Die nächste horizontale Zeile ist unter der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Bei `ltr`-Skripten fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile ist links von der vorherigen Zeile positioniert. Bei `rtl`-Skripten fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile ist rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Bei `ltr`-Skripten fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile ist rechts von der vorherigen Zeile positioniert. Bei `rtl`-Skripten fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile ist links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Bei `ltr`-Skripten fließt der Inhalt vertikal von oben nach unten. Bei `rtl`-Skripten fließt der Inhalt vertikal von unten nach oben. Alle Glyphen, auch die in vertikalen Skripten, sind seitwärts nach rechts ausgerichtet.
- `sideways-lr`
  - : Bei `ltr`-Skripten fließt der Inhalt vertikal von unten nach oben. Bei `rtl`-Skripten fließt der Inhalt vertikal von oben nach unten. Alle Glyphen, auch die in vertikalen Skripten, sind seitwärts nach links ausgerichtet.
- `lr`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `lr-tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-lr` {{Deprecated_Inline}}
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-rl`.

## Formelle Definition

{{CSSInfo}}

## Formelle Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung mehrerer Schreibrichtungen

Dieses Beispiel demonstriert alle Schreibrichtungen, wobei jede mit Text in verschiedenen Sprachen gezeigt wird.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jeder Schreibrichtung in einer Zeile und einer Spalte, die Text in verschiedenen Skripten unter Verwendung dieser Schreibrichtung anzeigt.

```html
<table>
  <caption>
    Using multiple writing modes
  </caption>
  <thead>
    <tr>
      <th>Value</th>
      <th>Vertical script</th>
      <th>Horizontal (LTR) script</th>
      <th>Horizontal (RTL) script</th>
      <th>Mixed script</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text1">
      <th>horizontal-tb</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text2">
      <th>vertical-lr</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text3">
      <th>vertical-rl</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text4">
      <th>sideways-lr</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text5">
      <th>sideways-rl</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
  </tbody>
</table>
<p class="notice">
  Your browser does not support the <code>sideways-lr</code> or
  <code>sideways-rl</code> values.
</p>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}

.experimental {
  display: none;
}

.notice {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

@supports (writing-mode: sideways-lr) {
  .experimental {
    display: table-row;
  }
  .notice {
    display: none;
  }
}
```

Das CSS, das die Direktionalität des Inhalts anpasst, sieht folgendermaßen aus:

```css
.text1 td {
  writing-mode: horizontal-tb;
}

.text2 td {
  writing-mode: vertical-lr;
}

.text3 td {
  writing-mode: vertical-rl;
}

.text4 td {
  writing-mode: sideways-lr;
}

.text5 td {
  writing-mode: sideways-rl;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_multiple_writing_modes", 400, 700)}}

### Verwendung von writing-mode mit Transformationen

Wenn Ihr Browser `sideways-lr` nicht unterstützt, besteht ein Workaround darin, {{cssxref("transform")}} zu verwenden, um je nach Schreibrichtung einen ähnlichen Effekt zu erzielen. Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, sodass keine Transformation für von links nach rechts ausgerichtete Skripte erforderlich ist. In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erzielen, aber Schriftarten-Glyphen sind möglicherweise nicht für das Drehen entworfen, sodass dies zu unerwarteten Positionierungen oder Darstellungen führen kann.

#### HTML

```html
<table>
  <caption>
    Using writing-mode with transforms
  </caption>
  <thead>
    <tr>
      <th>Vertical LR</th>
      <th>Vertical LR with transform</th>
      <th>Sideways LR</th>
      <th>Only rotate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="vertical-lr">我家没有电脑。</span>
        <span class="vertical-lr">Example text</span>
      </td>
      <td>
        <span class="vertical-lr rotated">我家没有电脑。</span>
        <span class="vertical-lr rotated">Example text</span>
      </td>
      <td>
        <span class="sideways-lr">我家没有电脑。</span>
        <span class="sideways-lr">Example text</span>
      </td>
      <td>
        <span class="only-rotate">我家没有电脑。</span>
        <span class="only-rotate">Example text</span>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.vertical-lr {
  writing-mode: vertical-lr;
}

.rotated {
  transform: rotate(180deg);
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.only-rotate {
  inline-size: fit-content;
  transform: rotate(-90deg);
}
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}
span {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_writing-mode_with_transforms", 400, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [CSS Schreibrichtungen](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- SVG {{SVGAttr("writing-mode")}} Attribut
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling vertikalen Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
