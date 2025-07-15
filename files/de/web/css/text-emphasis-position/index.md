---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie der Text, der vom HTML-Element [`<ruby>`](/de/docs/Web/HTML/Reference/Elements/ruby) gerendert wird, wird, falls nicht genügend Platz für Hervorhebungszeichen vorhanden ist, die Linienhöhe erhöht.

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

Die Eigenschaft akzeptiert einen oder zwei Werte:

- Wenn nur ein Wert angegeben wird, kann dieser `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Wenn zwei Werte angegeben werden, müssen diese entweder `over` oder `under` und entweder `right` oder `left` enthalten. Ihre Reihenfolge spielt keine Rolle.

Die Werte umfassen:

- `auto`
  - : Zeichnet Zeichen über den Text im horizontalen Schreibmodus und rechts vom Text im vertikalen Schreibmodus.
- `over`
  - : Zeichnet Zeichen über den Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Zeichen unter den Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Zeichen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Zeichen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise die bevorzugte Position `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die folgende Tabelle fasst die bevorzugten Positionen von Hervorhebungszeichen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position von Hervorhebungs- und Ruby-Zeichen
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
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt) über einem Abschnitt des japanischen Textes angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen im vertikalen japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem Abschnitt des japanischen Textes angewendet"
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
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt) unter einem Abschnitt des chinesischen Textes angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht festgelegt werden und wird daher auch nicht zurückgesetzt, wenn die {{cssxref("text-emphasis")}} Abkürzungseigenschaft verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hervorhebungspositionsmarken hinzufügen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dadurch wird die Klasse des `<section>` Elements geändert, was wiederum die Position der Hervorhebungszeichen im Text aktualisiert.

#### HTML

```html hidden
<p class="unsupported">
  The <code>auto</code> value is not supported in your browser.
</p>
<label for="position">Emphasis position:</label>
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

Verwenden Sie das "Hervorhebungsposition"-Dropdown, um den Standort der Hervorhebungszeichen auszuwählen. Die `bevorzugt`-Option im Dropdown verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erklärt.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Ruby vor Hervorhebungszeichen bevorzugen

Einige Editoren ziehen es vor, Hervorhebungszeichen auszublenden, wenn sie mit Ruby kollidieren. Im HTML kann dies mit der folgenden Stilregel geschehen:

```css
ruby {
  text-emphasis: none;
}
```

### Hervorhebungszeichen vor Ruby bevorzugen

Andere Editoren ziehen es vor, Ruby auszublenden, wenn es mit Hervorhebungszeichen kollidiert. Im HTML kann dies mit dem folgenden Muster geschehen:

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
- {{cssxref("text-emphasis")}} Abkürzungseigenschaft
- {{cssxref("writing-mode")}}
