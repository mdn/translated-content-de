---
title: "`text-emphasis-position` CSS property"
short-title: text-emphasis-position
slug: Web/CSS/Reference/Properties/text-emphasis-position
l10n:
  sourceCommit: 09a34cfd2a50cad3d6b520027cbab56f05d4d731
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-emphasis-position`** legt fest, wo Betonungszeichen gezeichnet werden. Ähnlich wie beim Text, der durch das HTML-Element [`<ruby>`](/de/docs/Web/HTML/Reference/Elements/ruby) gerendert wird, wird die Zeilenhöhe erhöht, wenn nicht genügend Platz für Betonungszeichen vorhanden ist.

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

- Wenn nur ein Wert angegeben wird, kann er `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Wenn zwei Werte angegeben werden, müssen sie jeweils einen der Werte `over` oder `under` sowie einen der Werte `right` oder `left` enthalten. Ihre Reihenfolge spielt keine Rolle.

Die Werte umfassen:

- `auto`
  - : Zeichnet Markierungen über dem Text im horizontalen Schreibmodus und rechts vom Text im vertikalen Schreibmodus.
- `over`
  - : Zeichnet Markierungen über dem Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Markierungen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Markierungen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Markierungen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Betonungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise `over right` die bevorzugte Position. Im Chinesischen hingegen ist `under right` die bevorzugte Position. Die folgende informative Tabelle fasst die bevorzugten Positionen für Betonungszeichen im Chinesischen, Mongolischen und Japanischen zusammen:

<table>
  <caption>
    Bevorzugte Position für Betonungszeichen und ruby
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
          alt="Betonungszeichen erscheinen über jedem betonten Zeichen in horizontalem japanischem Text."
          src="text-emphasis-ja.png"
          title="Betonung (zur besseren Erkennbarkeit blau dargestellt), die über einem Ausschnitt japanischen Textes angewendet wird"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Betonungszeichen erscheinen rechts von jedem betonten Zeichen in vertikalem japanischem Text."
          src="text-emphasis-v.gif"
          title="Betonung, die rechts von einem Ausschnitt japanischen Textes angewendet wird"
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
          alt="Betonungszeichen erscheinen unter jedem betonten Zeichen in horizontalem vereinfachtem chinesischem Text."
          src="text-emphasis-zh.gif"
          title="Betonung (zur besseren Erkennbarkeit blau dargestellt), die unter einem Ausschnitt chinesischen Textes angewendet wird"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `text-emphasis-position` kann nicht mit der Kurzform-Eigenschaft {{cssxref("text-emphasis")}} festgelegt und daher auch nicht zurückgesetzt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionen für Betonungszeichen hinzufügen

Verwenden Sie das Dropdown-Menü, um die Position der Betonungszeichen zu ändern. Dadurch wird die Klasse des `<section>`-Elements geändert, wodurch wiederum die Position der Betonungszeichen im Text aktualisiert wird.

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

Verwenden Sie das Dropdown-Menü „Betonungsposition“, um den Ort der Betonungszeichen auszuwählen. Die Option `preferred` im Dropdown-Menü verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erläutert.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### ruby gegenüber Betonungszeichen bevorzugen

Einige Editoren ziehen es vor, Betonungszeichen auszublenden, wenn sie mit ruby in Konflikt stehen. In HTML kann dies mit der folgenden Stilregel erfolgen:

```css
ruby {
  text-emphasis: none;
}
```

### Betonungszeichen gegenüber ruby bevorzugen

Andere Editoren ziehen es vor, ruby auszublenden, wenn es mit Betonungszeichen in Konflikt steht. In HTML kann dies mit dem folgenden Muster erfolgen:

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
- Kurzform-Eigenschaft {{cssxref("text-emphasis")}}
- {{cssxref("writing-mode")}}
