---
title: Schreibmodus
slug: Web/CSS/writing-mode
l10n:
  sourceCommit: 0f4b28bdc51e89cd25d132b9db12e3e903a9c5aa
---

{{CSSRef}}

Die **`writing-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung sich Blöcke bewegen. Wenn sie für ein gesamtes Dokument gesetzt wird, sollte sie auf dem Wurzelelement (`html` Element für HTML-Dokumente) gesetzt werden.

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

Diese Eigenschaft gibt die _Blockflussrichtung_ an, also die Richtung, in der Container auf Blockebene gestapelt werden, und die Richtung, in der Inhalte auf Inline-Ebene innerhalb eines Blockcontainers fließen. Somit bestimmt sie auch die Ordnung der Inhalte auf Blockebene.

## Syntax

```css
/* Schlüsselwortwerte */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Globale Werte */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

Die `writing-mode` Eigenschaft wird als einer der unten aufgeführten Werte angegeben. Die Flussrichtung in horizontalen Skripten wird auch von der [Direktionalität dieses Skripts](https://www.w3.org/International/questions/qa-scripts.en) beeinflusst, entweder von links nach rechts (`ltr`, wie Englisch und die meisten anderen Sprachen) oder von rechts nach links (`rtl`, wie Hebräisch oder Arabisch).

### Werte

- `horizontal-tb`
  - : Für `ltr` Skripte fließt der Inhalt horizontal von links nach rechts. Für `rtl` Skripte fließt der Inhalt horizontal von rechts nach links. Die nächste horizontale Linie wird unterhalb der vorherigen Linie positioniert.
- `vertical-rl`
  - : Für `ltr` Skripte fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Linie wird links von der vorherigen Linie positioniert. Für `rtl` Skripte fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Linie wird rechts von der vorherigen Linie positioniert.
- `vertical-lr`
  - : Für `ltr` Skripte fließt der Inhalt vertikal von oben nach unten, und die nächste vertikale Linie wird rechts von der vorherigen Linie positioniert. Für `rtl` Skripte fließt der Inhalt vertikal von unten nach oben, und die nächste vertikale Linie wird links von der vorherigen Linie positioniert.
- `sideways-rl`
  - : Für `ltr` Skripte fließt der Inhalt vertikal von oben nach unten. Für `rtl` Skripte fließt der Inhalt vertikal von unten nach oben. Alle Glyphen, selbst in vertikalen Skripten, sind seitwärts nach rechts ausgerichtet.
- `sideways-lr`
  - : Für `ltr` Skripte fließt der Inhalt vertikal von unten nach oben. Für `rtl` Skripte fließt der Inhalt vertikal von oben nach unten. Alle Glyphen, selbst in vertikalen Skripten, sind seitwärts nach links ausgerichtet.
- `lr`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `lr-tb`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `rl`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `horizontal-tb`.
- `tb`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-lr`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `vertical-lr`.
- `tb-rl`
  - : Veraltet außer in SVG1 Dokumenten. Für CSS verwenden Sie stattdessen `vertical-rl`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mehrere Schreibmodi verwenden

Dieses Beispiel zeigt alle Schreibmodi anhand von Text in verschiedenen Sprachen.

#### HTML

Das HTML ist eine {{HTMLElement("table")}} mit jedem Schreibmodus in einer Zeile und einer Spalte, die Text in verschiedenen Schriften mit diesem Schreibmodus zeigt.

```html
<table>
  <caption>
    Mehrere Schreibmodi verwenden
  </caption>
  <tr>
    <th>Wert</th>
    <th>Vertikale Schrift</th>
    <th>Horizontale (LTR) Schrift</th>
    <th>Horizontale (RTL) Schrift</th>
    <th>Gemischte Schrift</th>
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
  Ihr Browser unterstützt die Werte <code>sideways-lr</code> oder
  <code>sideways-rl</code> nicht.
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

Die CSS, die die Richtung des Inhalts anpasst, sieht folgendermaßen aus:

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

### Schreibmodus mit Transformationen verwenden

Wenn Ihr Browser `sideways-lr` nicht unterstützt, ist ein Workaround, {{cssxref("transform")}} zu verwenden, um einen ähnlichen Effekt je nach Schreibrichtung zu erzielen. Der Effekt von `vertical-rl` ist derselbe wie bei `sideways-lr`, sodass für links nach rechts Skripte keine Transformation erforderlich ist. In einigen Fällen reicht es aus, den Text um 180 Grad zu drehen, um den Effekt von `sideways-lr` zu erreichen, aber Schriftsymbole sind möglicherweise nicht für eine Drehung ausgelegt, sodass dies unerwartete Positionierungen oder Darstellungen hervorrufen kann.

#### HTML

```html
<table>
  <caption>
    Schreibmodus mit Transformationen verwenden
  </caption>
  <thead>
    <tr>
      <th>Vertikal LR</th>
      <th>Vertikal LR mit Transformation</th>
      <th>Seitwärts LR</th>
      <th>Nur drehen</th>
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
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
