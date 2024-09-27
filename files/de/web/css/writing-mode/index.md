---
title: writing-mode
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: 0f4b28bdc51e89cd25d132b9db12e3e903a9c5aa
---

{{CSSRef}}

Die **`writing-mode`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung sich Blöcke entwickeln. Wenn sie für ein gesamtes Dokument festgelegt wird, sollte sie auf dem Wurzelelement gesetzt werden (`html`-Element für HTML-Dokumente).

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

Diese Eigenschaft spezifiziert die _Blockflussrichtung_, also die Richtung, in der Block-Container gestapelt werden, und die Richtung, in der Inline-Inhalte innerhalb eines Block-Containers fließen. Somit bestimmt sie auch die Reihenfolge der Blockinhalte.

## Syntax

```css
/* Keyword values */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Global values */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

Die `writing-mode`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Flussrichtung bei horizontalen Schriften wird auch von der [Richtungsabhängigkeit dieser Schrift](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Für `ltr`-Schriften fließen Inhalte horizontal von links nach rechts. Für `rtl`-Schriften fließen Inhalte horizontal von rechts nach links. Die nächste horizontale Zeile wird unter der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von oben nach unten. Für `rtl`-Schriften fließen Inhalte vertikal von unten nach oben. Alle Glyphen, auch die in vertikalen Schriften, werden nach rechts seitlich gesetzt.
- `sideways-lr`
  - : Für `ltr`-Schriften fließen Inhalte vertikal von unten nach oben. Für `rtl`-Schriften fließen Inhalte vertikal von oben nach unten. Alle Glyphen, auch die in vertikalen Schriften, werden nach links seitlich gesetzt.
- `lr`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `lr-tb`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `rl`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `tb`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-lr`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-rl`
  - : Veraltet außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-rl`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung mehrerer Schreibmodi

Dieses Beispiel zeigt alle Schreibmodi und zeigt jeden mit Text in verschiedenen Sprachen.

#### HTML

Das HTML ist eine {{HTMLElement("table")}}, wobei jede Schreibrichtung in einer Zeile mit einer Spalte gezeigt wird, die Text in verschiedenen Schriften unter Verwendung dieses Schreibmodus zeigt.

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

Das CSS, das die Richtungsabhängigkeit des Inhalts anpasst, sieht so aus:

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

### Verwendung von writing-mode mit transformationen

Wenn Ihr Browser `sideways-lr` nicht unterstützt, kann ein Workaround die Verwendung von {{cssxref("transform")}} sein, um einen ähnlichen Effekt je nach Schriftflussrichtung zu erzielen. Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, sodass keine Transformation für von links nach rechts lesbare Schriften erforderlich ist. In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erreichen, aber Schriftzeichen sind möglicherweise nicht für die Drehung ausgelegt, sodass unerwartete Positionierungen oder Darstellungen auftreten können.

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

- SVG [`writing-mode`](/de/docs/Web/SVG/Attribute/writing-mode) Attribut
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [Logische CSS-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Formatierung vertikaler Texte (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
