---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie der Text, der durch das [`<ruby>`](/de/docs/Web/HTML/Element/ruby)-HTML-Element gerendert wird, wird die Zeilenhöhe erhöht, wenn nicht genügend Platz für Hervorhebungszeichen vorhanden ist.

{{InteractiveExample("CSS Demo: text-emphasis-position")}}

```css interactive-example-choice
text-emphasis-position: auto;
```

```css interactive-example-choice
text-emphasis-position: over right;
```

```css interactive-example-choice
text-emphasis-position: under right;
```

```css interactive-example-choice
text-emphasis-position: auto;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over left;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over right;
writing-mode: vertical-rl;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled double-circle #ffb703;
}
```

## Syntax

```css
/* Initial value */
text-emphasis-position: auto;

/* Keyword values */
text-emphasis-position: over;
text-emphasis-position: under;

text-emphasis-position: over right;
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Global values */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Werte

Die Eigenschaft akzeptiert ein oder zwei Werte:

- Wenn nur ein Wert angegeben ist, kann es `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Bei zwei angegebenen Werten muss einer `over` oder `under` und einer `right` oder `left` sein. Ihre Reihenfolge spielt keine Rolle.

Die Werte umfassen:

- `auto`
  - : Zeichnet Markierungen über den Text im horizontalen Schreibmodus und rechts vom Text im vertikalen Schreibmodus.
- `over`
  - : Zeichnet Markierungen über den Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Markierungen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Markierungen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Markierungen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist die bevorzugte Position beispielsweise `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die untenstehende informative Tabelle fasst die bevorzugten Hervorhebungszeichenpositionen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Hervorhebungs- und Ruby-Position
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Sprache</th>
      <th colspan="2" scope="col">Bevorzugte Position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontal</th>
      <th>Vertikal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanisch</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen im horizontalen japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Klarheit in Blau dargestellt) oberhalb eines Fragments von japanischem Text angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen im vertikalen japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem Fragment von japanischem Text angewendet"
        />
      </td>
    </tr>
    <tr>
      <td>Koreanisch</td>
    </tr>
    <tr>
      <td>Mongolisch</td>
    </tr>
    <tr>
      <td>Chinesisch</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen im horizontalen vereinfachten chinesischen Text."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Klarheit in Blau dargestellt) unterhalb eines Fragments von chinesischem Text angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht gesetzt werden und wird daher auch nicht zurückgesetzt, wenn die {{cssxref("text-emphasis")}}-Kurzschreibweise verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen von Hervorhebungszeichenpositionen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dies wird die Klasse des `<section>`-Elements ändern, was wiederum die Position der Hervorhebungszeichen im Text aktualisieren wird.

#### HTML

```html hidden
<p class="unsupported">The <code>auto</code> value is not supported in your browser.</p>
<label for="position">Emphasis position:</position>
<select id="position">
  <option value="auto">auto</option>
  <option value="over-right">over right</option>
  <option value="over-left">over left</option>
  <option value="under-right">under right</option>
  <option value="under-left">under left</option>
  <option value="preferred">preferred</option>
</select>
```

```html
<section id="setting" class="auto">
  <p class="horizontal" lang="zh">你好世界</p>
  <!-- Hello World in Chinese -->
  <p class="vertical" lang="ja">世界、こんにちは。</p>
  <!-- Hello World in Japanese -->
</section>
```

#### CSS

```css hidden
.unsupported {
  color: red;
}
@supports (text-emphasis-position: auto) {
  .unsupported {
    display: none;
  }
}
.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
section {
  display: flex;
  justify-content: space-around;
}
```

```css
section p {
  text-emphasis: filled circle tomato;
  text-emphasis-position: auto;
}
.over-right p,
.preferred p [lang="ja"] {
  text-emphasis-position: over right;
}
.over-left p {
  text-emphasis-position: over left;
}
.under-right p,
.preferred p [lang="zh"] {
  text-emphasis-position: under right;
}
.under-left p {
  text-emphasis-position: under left;
}
.preferred p [lang="ja"] {
}
```

```js hidden
const position = document.querySelector("#position");
const setting = document.querySelector("#setting");
const updateClass = () => {
  const currentClass = setting.classList;
  setting.classList.replace(currentClass, position.value);
};
position.addEventListener("change", updateClass);
```

#### Ergebnis

Verwenden Sie das Dropdown-Menü "Hervorhebungsposition", um den Ort der Hervorhebungszeichen auszuwählen. Die `bevorzugte` Option im Dropdown verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erläutert.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Bevorzugung von Ruby gegenüber Hervorhebungszeichen

Einige Editoren bevorzugen es, Hervorhebungszeichen auszublenden, wenn sie mit Ruby kollidieren. In HTML kann dies mit der folgenden Stilregel getan werden:

```css
ruby {
  text-emphasis: none;
}
```

### Bevorzugung von Hervorhebungszeichen gegenüber Ruby

Andere Editoren bevorzugen es, Ruby auszublenden, wenn es mit Hervorhebungszeichen kollidiert. In HTML kann dies mit dem folgenden Muster getan werden:

```css
em {
  text-emphasis: dot; /* Set text-emphasis for <em> elements */
}

em rt {
  display: none; /* Hide ruby inside <em> elements */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-underline-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis")}} Kurzschreibweise
- {{cssxref("writing-mode")}}
