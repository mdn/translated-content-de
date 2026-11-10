---
title: "`text-emphasis-position` CSS property"
short-title: text-emphasis-position
slug: Web/CSS/Reference/Properties/text-emphasis-position
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-emphasis-position`** legt fest, wo Hervorhebungszeichen dargestellt werden. Ähnlich wie bei Text, der mit dem HTML-Element [`<ruby>`](/de/docs/Web/HTML/Reference/Elements/ruby) dargestellt wird, erhöht sich die Zeilenhöhe, wenn nicht genügend Platz für die Hervorhebungszeichen vorhanden ist.

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

- Wird nur ein Wert angegeben, kann dieser `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, gilt `right` als Standardposition.
- Werden zwei Werte angegeben, müssen sie einen der Werte `over` oder `under` und einen der Werte `right` oder `left` enthalten. Die Reihenfolge spielt keine Rolle.

Die Werte sind:

- `auto`
  - : Stellt die Zeichen bei horizontaler Schreibrichtung über dem Text und bei vertikaler Schreibrichtung rechts vom Text dar.
- `over`
  - : Stellt die Zeichen bei horizontaler Schreibrichtung über dem Text dar.
- `under`
  - : Stellt die Zeichen bei horizontaler Schreibrichtung unter dem Text dar.
- `right`
  - : Stellt die Zeichen bei vertikaler Schreibrichtung rechts vom Text dar.
- `left`
  - : Stellt die Zeichen bei vertikaler Schreibrichtung links vom Text dar.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise `over right` die bevorzugte Position. Im Chinesischen ist dagegen `under right` die bevorzugte Position. Die folgende Tabelle fasst die bevorzugten Positionen von Hervorhebungszeichen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position von Hervorhebungszeichen und Ruby-Text
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Sprache</th>
      <th colspan="2" scope="col">Bevorzugte Position</th>
      <th colspan="2" rowspan="2" scope="col">Abbildung</th>
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
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen in horizontal geschriebenem japanischem Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur besseren Erkennbarkeit blau dargestellt) über einem japanischen Textabschnitt"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts neben jedem hervorgehobenen Zeichen in vertikal geschriebenem japanischem Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts neben einem japanischen Textabschnitt"
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
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen in horizontal geschriebenem vereinfachtem Chinesisch."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur besseren Erkennbarkeit blau dargestellt) unter einem chinesischen Textabschnitt"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `text-emphasis-position` kann nicht über die Kurzschreibweise {{cssxref("text-emphasis")}} festgelegt werden und wird daher durch sie auch nicht zurückgesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionen von Hervorhebungszeichen festlegen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dadurch ändert sich die Klasse des `<section>`-Elements, wodurch wiederum die Position der Hervorhebungszeichen im Text aktualisiert wird.

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

Verwenden Sie das Dropdown-Menü „Emphasis position“, um die Position der Hervorhebungszeichen auszuwählen. Die Option `preferred` verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erläutert.

{{EmbedLiveSample("adding_emphasis_mark_positions", 450, 250)}}

### Ruby-Text gegenüber Hervorhebungszeichen bevorzugen

Manche Redaktionen ziehen es vor, Hervorhebungszeichen auszublenden, wenn sie mit Ruby-Text kollidieren. In HTML lässt sich dies mit der folgenden Stilregel erreichen:

```css
ruby {
  text-emphasis: none;
}
```

### Hervorhebungszeichen gegenüber Ruby-Text bevorzugen

Andere Redaktionen ziehen es vor, Ruby-Text auszublenden, wenn er mit Hervorhebungszeichen kollidiert. In HTML lässt sich dies mit dem folgenden Muster erreichen:

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
- {{cssxref("text-emphasis")}}-Kurzschreibweise
- {{cssxref("writing-mode")}}
