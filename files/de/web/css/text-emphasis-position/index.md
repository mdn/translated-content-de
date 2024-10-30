---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: 8750e1271fe4f3d7b1ef3990dd3d4e1a9f209a09
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich dem Text, der durch das HTML-Element [`<ruby>`](/de/docs/Web/HTML/Element/ruby) gerendert wird, wird die Zeilenhöhe erhöht, wenn nicht genügend Platz für Hervorhebungszeichen vorhanden ist.

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

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

- Wenn nur ein Wert angegeben wird, kann es `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Wenn zwei Werte angegeben werden, müssen sie eines von `over` oder `under` und eines von `right` oder `left` enthalten. Ihre Reihenfolge spielt keine Rolle.

Die Werte umfassen:

- `auto` {{Experimental_Inline}}
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

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise die bevorzugte Position `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die informative Tabelle unten fasst die bevorzugten Hervorhebungszeichenpositionen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Hervorhebungszeichen- und Ruby-Position
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
      <td rowspan="3">über</td>
      <td rowspan="3">rechts</td>
      <td rowspan="3">
        <img
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen in horizontalem japanischem Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Klarheit in Blau gezeigt) oberhalb eines Fragments von japanischem Text angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen in vertikalem japanischem Text."
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
      <td>unter</td>
      <td>rechts</td>
      <td>
        <img
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen in horizontalem vereinfachtem Chinesisch."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Klarheit in Blau gezeigt) unterhalb eines Fragments von chinesischem Text angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht festgelegt und daher auch nicht zurückgesetzt werden, indem Sie die {{cssxref("text-emphasis")}} Kurzschreibweise verwenden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen von Hervorhebungszeichenpositionen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dies ändert die Klasse auf dem `<section>`-Element, was wiederum die Position der Hervorhebungszeichen im Text aktualisiert.

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

Verwenden Sie das Dropdown-Menü "Emphasis position", um den Ort der Hervorhebungszeichen zu wählen. Die Option `preferred` im Dropdown verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erklärt.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Bevorzugen von Ruby über Hervorhebungszeichen

Einige Redakteure bevorzugen es, Hervorhebungszeichen auszublenden, wenn sie mit Ruby in Konflikt geraten. In HTML kann dies mit der folgenden Stilregel erreicht werden:

```css
ruby {
  text-emphasis: none;
}
```

### Bevorzugen von Hervorhebungszeichen über Ruby

Andere Redakteure bevorzugen es, Ruby auszublenden, wenn es mit Hervorhebungszeichen in Konflikt gerät. In HTML kann dies mit dem folgenden Muster erreicht werden:

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
