---
title: writing-mode
slug: Web/CSS/Reference/Properties/writing-mode
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden, sowie die Richtung, in der sich Blöcke bewegen. Wenn sie für ein gesamtes Dokument festgelegt wird, sollte sie auf dem Root-Element (dem `html`-Element für HTML-Dokumente) eingestellt werden.

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
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

Diese Eigenschaft spezifiziert die _Blockflussrichtung_, also die Richtung, in der Container auf Blockebene gestapelt werden, und die Richtung, in der Inhalte auf Inline-Ebene innerhalb eines Blockcontainers fließen. Daher bestimmt sie auch die Reihenfolge der Inhalte auf Blockebene.

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

Die `writing-mode` Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Fließrichtung in horizontalen Schriften wird auch von der [Richtung dieser Schrift](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder links-nach-rechts (`ltr`, wie im Englischen und den meisten anderen Sprachen) oder rechts-nach-links (`rtl`, wie im Hebräischen oder Arabischen).

### Werte

- `horizontal-tb`
  - : Für `ltr`-Schriften fließen Inhalte horizontal von links nach rechts. Für `rtl`-Schriften fließen Inhalte horizontal von rechts nach links. Die nächste horizontale Linie wird unter der vorherigen Linie positioniert.
- `vertical-rl`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten, und die nächste vertikale Linie wird links von der vorherigen Linie positioniert. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben, und die nächste vertikale Linie wird rechts von der vorherigen Linie positioniert.
- `vertical-lr`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten, und die nächste vertikale Linie wird rechts von der vorherigen Linie positioniert. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben, und die nächste vertikale Linie wird links von der vorherigen Linie positioniert.
- `sideways-rl`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben. Alle Glyphen, selbst in vertikalen Schriften, sind seitwärts nach rechts ausgerichtet.
- `sideways-lr`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von unten nach oben. Für `rtl`-Schriften fließen Inhalte vertikal von oben nach unten. Alle Glyphen, selbst in vertikalen Schriften, sind seitwärts nach links ausgerichtet.
- `lr`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `horizontal-tb` verwendet werden.
- `lr-tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `horizontal-tb` verwendet werden.
- `rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `horizontal-tb` verwendet werden.
- `tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `vertical-lr` verwendet werden.
- `tb-lr` {{Deprecated_Inline}}
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `vertical-lr` verwendet werden.
- `tb-rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS sollte `vertical-rl` verwendet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung mehrerer Schreibmodi

Dieses Beispiel zeigt alle Schreibmodi und zeigt jeden mit Text in verschiedenen Sprachen.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Zeile mit einer Spalte, die Text in verschiedenen Schriften zeigt, die diesen Schreibmodus verwenden.

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

Das CSS, das die Richtung des Inhalts anpasst, sieht folgendermaßen aus:

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

Wenn Ihr Browser `sideways-lr` nicht unterstützt, gibt es eine Möglichkeit, mit {{cssxref("transform")}} einen ähnlichen Effekt zu erzielen, abhängig von der Schreibrichtung. Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, daher ist keine Transformation für links-nach-rechts-Schriften erforderlich. In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erzielen, jedoch sind Schriftglykene möglicherweise nicht dafür ausgelegt, gedreht zu werden, was zu unerwarteten Positionierungen oder Darstellungen führen kann.

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
- [CSS-logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS-Schreibmodul](/de/docs/Web/CSS/CSS_writing_modes) Modul
- SVG {{SVGAttr("writing-mode")}} Attribut
- [Vertikale Formularelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Vertikalen Text gestalten (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
