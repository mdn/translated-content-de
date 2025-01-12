---
title: writing-mode
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: 5737bdacb64e73b4c020387d8dd82f312192c946
---

{{CSSRef}}

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden, sowie die Richtung, in der sich Blöcke entwickeln. Wenn sie für ein gesamtes Dokument festgelegt wird, sollte sie im Stamm-Element (`html` Element für HTML-Dokumente) gesetzt werden.

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

Diese Eigenschaft gibt die _Blockflussrichtung_ an, d.h. die Richtung, in die Blockcontainer gestapelt werden und die Richtung, in die Inline-Inhalte innerhalb eines Blockcontainers fließen. Somit bestimmt sie auch die Anordnung von Block-Inhalten.

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

Die `writing-mode` Eigenschaft wird mit einem der unten aufgeführten Werte angegeben. Die Flussrichtung bei horizontalen Schriftarten wird auch von der [Richtung dieser Schriftart](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Bei `ltr` Skripten fließen die Inhalte horizontal von links nach rechts. Bei `rtl` Skripten fließen die Inhalte horizontal von rechts nach links. Die nächste horizontale Zeile wird unterhalb der vorherigen Zeile positioniert.
- `vertical-rl`
  - : Bei `ltr` Skripten fließen die Inhalte vertikal von oben nach unten, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert. Bei `rtl` Skripten fließen die Inhalte vertikal von unten nach oben, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert.
- `vertical-lr`
  - : Bei `ltr` Skripten fließen die Inhalte vertikal von oben nach unten, und die nächste vertikale Zeile wird rechts von der vorherigen Zeile positioniert. Bei `rtl` Skripten fließen die Inhalte vertikal von unten nach oben, und die nächste vertikale Zeile wird links von der vorherigen Zeile positioniert.
- `sideways-rl`
  - : Bei `ltr` Skripten fließen die Inhalte vertikal von oben nach unten. Bei `rtl` Skripten fließen die Inhalte vertikal von unten nach oben. Alle Schriftzeichen, selbst bei vertikalen Skripten, sind seitlich nach rechts ausgerichtet.
- `sideways-lr`
  - : Bei `ltr` Skripten fließen die Inhalte vertikal von unten nach oben. Bei `rtl` Skripten fließen die Inhalte vertikal von oben nach unten. Alle Schriftzeichen, selbst bei vertikalen Skripten, sind seitlich nach links ausgerichtet.
- `lr` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `lr-tb` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `rl` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `tb` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-lr` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-rl` {{Deprecated_Inline}}
  - : Veraltet, außer bei SVG1-Dokumenten. Für CSS verwenden Sie stattdessen `vertical-rl`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mehrere Schreibmodi verwenden

Dieses Beispiel demonstriert alle Schreibmodi, die jeweils mit Text in verschiedenen Sprachen gezeigt werden.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Reihe, wobei eine Spalte Text in verschiedenen Schriften mit diesem Schreibmodus zeigt.

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

Das CSS, das die Richtung der Inhalte anpasst, sieht so aus:

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

### Verwendung des Schreibmodus mit Transformierungen

Wenn Ihr Browser `sideways-lr` nicht unterstützt, können Sie {{cssxref("transform")}} verwenden, um einen ähnlichen Effekt je nach Skriptrichtung zu erzielen.
Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, sodass keine Transformation für links-nach-rechts-Skripten erforderlich ist.
In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erreichen, aber Schriftzeichen sind möglicherweise nicht darauf ausgelegt, gedreht zu werden, sodass dies zu unerwarteten Positionierungen oder Darstellungen führen kann.

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
- [Styling vertikalen Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/) auf W3.org (2022)
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
