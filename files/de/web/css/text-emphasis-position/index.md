---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie der vom [`<ruby>`](/de/docs/Web/HTML/Reference/Elements/ruby)-HTML-Element gerenderte Text wird die Zeilenhöhe erhöht, wenn nicht genügend Platz für Hervorhebungszeichen vorhanden ist.

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

- Wenn nur ein Wert angegeben wird, kann es sich um `auto`, `over` oder `under` handeln. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Wenn zwei Werte angegeben werden, müssen sie entweder `over` oder `under` und entweder `right` oder `left` enthalten. Die Reihenfolge spielt keine Rolle.

Die Werte umfassen:

- `auto`
  - : Zeichnet Zeichen über den Text im horizontalen Schreibmodus und rechts vom Text im vertikalen Schreibmodus.
- `over`
  - : Zeichnet Zeichen über den Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Zeichen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Zeichen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Zeichen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen zum Beispiel ist die bevorzugte Position `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die informative Tabelle unten fasst die bevorzugten Positionen für Hervorhebungszeichen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position für Hervorhebungszeichen und Ruby
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
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen in horizontalem japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt) oberhalb eines Japanischen Textfragments"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen in vertikalem japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem Japanischen Textfragment"
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
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen in horizontalem vereinfachtem Chinesisch."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt) unterhalb eines Chinesischen Textfragments"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht gesetzt werden und wird daher auch nicht mit der {{cssxref("text-emphasis")}} Kurzschreibweise zurückgesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionen von Hervorhebungszeichen hinzufügen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dies wird die Klasse auf dem `<section>`-Element ändern, was wiederum die Position der Hervorhebungszeichen im Text aktualisieren wird.

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

Verwenden Sie das Dropdown-Menü "Emphasis position", um den Ort der Hervorhebungszeichen auszuwählen. Die Option `preferred` im Dropdown verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erklärt.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Ruby gegenüber Hervorhebungszeichen bevorzugen

Einige Editoren ziehen es vor, Hervorhebungszeichen zu verstecken, wenn sie mit Ruby kollidieren. In HTML kann dies mit der folgenden Stilregel erfolgen:

```css
ruby {
  text-emphasis: none;
}
```

### Hervorhebungszeichen gegenüber Ruby bevorzugen

Andere Editoren ziehen es vor, Ruby zu verstecken, wenn es mit Hervorhebungszeichen kollidiert. In HTML kann dies mit dem folgenden Muster erfolgen:

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
