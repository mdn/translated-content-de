---
title: writing-mode
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: 0f4b28bdc51e89cd25d132b9db12e3e903a9c5aa
---

{{CSSRef}}

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden und in welcher Richtung sich Blöcke fortbewegen. Wenn diese Eigenschaft für ein gesamtes Dokument gesetzt wird, sollte sie auf dem Wurzelelement festgelegt werden (dem `html`-Element für HTML-Dokumente).

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

Diese Eigenschaft legt die _Blockflussrichtung_ fest, also die Richtung, in der Container auf Blockebene gestapelt werden und der Inhalt auf Inline-Ebene innerhalb eines Blockcontainers fließt. Somit bestimmt sie auch die Reihenfolge des Inhalts auf Blockebene.

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

Die `writing-mode` Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Flussrichtung bei horizontalen Schriften wird auch durch die [Richtung dieser Schrift](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Für `ltr` Schriften fließt der Inhalt horizontal von links nach rechts. Für `rtl` Schriften fließt der Inhalt horizontal von rechts nach links. Die nächste horizontale Zeile wird unterhalb der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Für `ltr` Schriften fließt der Inhalt vertikal von oben nach unten und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert. Für `rtl` Schriften fließt der Inhalt vertikal von unten nach oben und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Für `ltr` Schriften fließt der Inhalt vertikal von oben nach unten und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert. Für `rtl` Schriften fließt der Inhalt vertikal von unten nach oben und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Für `ltr` Schriften fließt der Inhalt vertikal von oben nach unten. Für `rtl` Schriften fließt der Inhalt vertikal von unten nach oben. Alle Glyphen, selbst in vertikalen Schriften, sind seitlich nach rechts ausgerichtet.
- `sideways-lr`
  - : Für `ltr` Schriften fließt der Inhalt vertikal von unten nach oben. Für `rtl` Schriften fließt der Inhalt vertikal von oben nach unten. Alle Glyphen, selbst in vertikalen Schriften, sind seitlich nach links ausgerichtet.
- `lr`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `lr-tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `tb`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-lr`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-rl`
  - : Veraltet, außer für SVG1-Dokumente. Für CSS verwenden Sie stattdessen `vertical-rl`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung mehrerer Schreibmodi

Dieses Beispiel zeigt alle Schreibmodi, wobei jeder mit Text in verschiedenen Sprachen dargestellt wird.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Zeile, mit einer Spalte, die Text in verschiedenen Schriften zeigt, die diesen Schreibmodus verwenden.

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

Das CSS, das die Richtungsbestimmung des Inhalts anpasst, sieht so aus:

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

Wenn Ihr Browser `sideways-lr` nicht unterstützt, besteht eine Möglichkeit darin, {{cssxref("transform")}} zu verwenden, um einen ähnlichen Effekt abhängig von der Schreibrichtung zu erzielen. Der Effekt von `vertical-rl` entspricht `sideways-lr`, sodass keine Transformation für von links nach rechts gerichtete Schriften erforderlich ist. In einigen Fällen reicht es, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erzielen, aber Schriftarten-Glyphen sind möglicherweise nicht für eine Drehung ausgelegt, was zu unerwarteten Positionierungen oder Darstellungen führen kann.

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
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Vertikalen Text formatieren (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Erstellen vertikaler Steuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
