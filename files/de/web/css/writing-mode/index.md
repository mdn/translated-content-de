---
title: writing-mode
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: 3344de5f35ac61024cb699883754090ed29b6f96
---

{{CSSRef}}

Die **`writing-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung sich Blöcke fortbewegen. Wird diese Eigenschaft für ein gesamtes Dokument festgelegt, sollte sie auf dem Wurzelelement (dem `html`-Element für HTML-Dokumente) gesetzt werden.

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

Diese Eigenschaft gibt die _Blockflussrichtung_ an, also die Richtung, in der Block-Container gestapelt werden, und die Richtung, in der inline-Level-Inhalte innerhalb eines Block-Containers fließen. Dadurch wird auch die Reihenfolge von Block-Level-Inhalten bestimmt.

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

Die `writing-mode`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Flussrichtung in horizontalen Schriften wird auch von der [Richtungsläufigkeit dieser Schrift](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Für `ltr`-Schriften fließt der Inhalt horizontal von links nach rechts. Für `rtl`-Schriften fließt der Inhalt horizontal von rechts nach links. Die nächste horizontale Zeile wird unterhalb der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Für `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert. Für `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Für `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert. Für `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Für `ltr`-Schriften fließt der Inhalt vertikal von oben nach unten. Für `rtl`-Schriften fließt der Inhalt vertikal von unten nach oben. Alle Glyphen, selbst in vertikalen Schriften, sind seitlich nach rechts ausgerichtet.
- `sideways-lr`
  - : Für `ltr`-Schriften fließt der Inhalt vertikal von unten nach oben. Für `rtl`-Schriften fließt der Inhalt vertikal von oben nach unten. Alle Glyphen, selbst in vertikalen Schriften, sind seitlich nach links ausgerichtet.
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

Dieses Beispiel zeigt alle Schreibmodi, wobei jeder Modus mit Text in verschiedenen Sprachen dargestellt wird.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Zeile und einer Spalte, in der Text in verschiedenen Schriftsystemen unter Verwendung dieses Schreibmodus angezeigt wird.

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

Das CSS, das die Richtung der Inhalte anpasst, sieht folgendermaßen aus:

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

Falls Ihr Browser `sideways-lr` nicht unterstützt, können Sie durch Verwendung von {{cssxref("transform")}} einen ähnlichen Effekt je nach Schriftverkehrsrichtung erzielen. Der Effekt von `vertical-rl` ist der gleiche wie bei `sideways-lr`, daher ist keine Transformation für von links nach rechts gerichtete Schriften erforderlich. In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erzielen, aber Schriftzeichen sind möglicherweise nicht darauf ausgelegt, gedreht zu werden, was zu unerwarteten Positionierungen oder Darstellungen führen kann.

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

- SVG-[`writing-mode`](/de/docs/Web/SVG/Attribute/writing-mode) Attribut
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Gestaltung von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
- [CSS Schreibmodul](/de/docs/Web/CSS/CSS_writing_modes)
- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
