---
title: writing-mode
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: d68cfd06575158736a37dcacc970cf909d009469
---

{{CSSRef}}

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung sich Blöcke fortbewegen. Wenn sie für ein gesamtes Dokument festgelegt wird, sollte sie auf dem Root-Element gesetzt werden (dem `html`-Element für HTML-Dokumente).

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

Diese Eigenschaft gibt die _Blockfließrichtung_ an, also die Richtung, in der Block-Containerelemente gestapelt werden, und die Richtung, in der Inline-Inhalte in einem Blockcontainer fließen. Sie bestimmt somit auch die Reihenfolge der Blockinhalte.

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

Die Eigenschaft `writing-mode` wird als einer der unten aufgeführten Werte angegeben. Die Fließrichtung in horizontalen Schriften wird auch durch die [Richtung der Schrift](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Bei `ltr`-Schriften fließt der Inhalt horizontal von links nach rechts. Bei `rtl`-Schriften fließt der Inhalt horizontal von rechts nach links. Die nächste horizontale Zeile wird unter der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Bei `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert. Bei `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Bei `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert. Bei `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Bei `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten. Bei `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben. Alle Zeichen, selbst jene in vertikalen Schriften, sind seitlich nach rechts ausgerichtet.
- `sideways-lr`
  - : Bei `ltr`-Schriften fließt der Inhalt vertikal von unten nach oben. Bei `rtl`-Schriften fließt der Inhalt vertikal von oben nach unten. Alle Zeichen, selbst jene in vertikalen Schriften, sind seitlich nach links ausgerichtet.
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

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung mehrerer Schreibmodi

Dieses Beispiel zeigt alle Schreibmodi mit Text in verschiedenen Sprachen.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Zeile und einer Spalte, die Text in verschiedenen Schriften mit diesem Schreibmodus zeigt.

```html
<table>
  <caption>
    Using multiple writing modes
  </caption>
  <tr>
    <th>Value</th>
    <th>Vertical script</th>
    <th>Horizontal (LTR) script</th>
    <th>Horizontal (RTL) script</th>
    <th>Mixed script</th>
  </tr>
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

### Verwendung von writing-mode mit transforms

Wenn Ihr Browser `sideways-lr` nicht unterstützt, kann eine Möglichkeit darin bestehen, {{cssxref("transform")}} zu verwenden, um einen ähnlichen Effekt abhängig von der Schreibrichtung zu erzielen.
Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, daher ist keine Transformation für von links nach rechts lesende Schriften erforderlich.
In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erzielen, aber Schriftzeichen sind möglicherweise nicht dafür ausgelegt, gedreht zu werden, sodass unerwartete Positionierungs- oder Darstellungsprobleme auftreten können.

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
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- SVG {{SVGAttr("writing-mode")}} Attribut
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Stilisierung von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
