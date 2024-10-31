---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie der Text, der durch das [`<ruby>`](/de/docs/Web/HTML/Element/ruby) HTML-Element gerendert wird, wird die Zeilenhöhe erhöht, wenn nicht genügend Platz für Hervorhebungszeichen vorhanden ist.

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

- Wenn nur ein Wert angegeben ist, kann dieser `auto`, `over` oder `under` sein. Wenn nur `over` oder `under` verwendet wird, wird `right` als Standardposition angenommen.
- Wenn zwei Werte angegeben werden, müssen sie einen von `over` oder `under` und einen von `right` oder `left` enthalten. Ihre Reihenfolge spielt keine Rolle.

Die Werte sind:

- `auto`
  - : Zeichnet Zeichen über dem Text im horizontalen Schreibmodus und rechts vom Text im vertikalen Schreibmodus.
- `over`
  - : Zeichnet Zeichen über dem Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Zeichen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Zeichen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Zeichen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position der Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise die bevorzugte Position `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die informative Tabelle unten fasst die bevorzugten Positionen der Hervorhebungszeichen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position von Hervorhebungszeichen und Ruby
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
          alt="Hervorhebungszeichen erscheinen über jedem betonten Zeichen im horizontalen japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Klarheit in Blau dargestellt) oberhalb eines japanischen Textsegments angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem betonten Zeichen im vertikalen japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem japanischen Textsegment angewendet"
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
          alt="Hervorhebungszeichen erscheinen unter jedem betonten Zeichen im horizontalen vereinfachten chinesischen Text."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Klarheit in Blau dargestellt) unterhalb eines chinesischen Textsegments angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht gesetzt und daher auch nicht zurückgesetzt werden, indem die {{cssxref("text-emphasis")}} Kurzform verwendet wird.

## Offizielle Definition

{{CSSInfo}}

## Offizieller Syntax

{{csssyntax}}

## Beispiele

### Positionen von Hervorhebungszeichen hinzufügen

Verwenden Sie das Dropdown-Menü, um die Position der Hervorhebungszeichen zu ändern. Dies ändert die Klasse auf dem `<section>` Element, was wiederum die Position der Hervorhebungszeichen im Text aktualisiert.

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

Verwenden Sie das Dropdown-Menü "Emphasis position", um den Ort der Hervorhebungszeichen auszuwählen. Die Option `preferred` im Dropdown verwendet die bevorzugten Positionen, wie im Abschnitt [Beschreibung](#beschreibung) erklärt.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Bevorzugen von Ruby über Hervorhebungszeichen

Einige Editoren bevorzugen es, Hervorhebungszeichen auszublenden, wenn sie mit Ruby in Konflikt stehen. In HTML kann dies mit der folgenden Stilregel geschehen:

```css
ruby {
  text-emphasis: none;
}
```

### Bevorzugen von Hervorhebungszeichen über Ruby

Andere Editoren bevorzugen es, Ruby auszublenden, wenn es mit Hervorhebungszeichen in Konflikt steht. In HTML kann dies mit dem folgenden Muster geschehen:

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
- {{cssxref("text-emphasis")}} Kurzform-Eigenschaft
- {{cssxref("writing-mode")}}
