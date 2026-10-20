---
title: Filtereffekte verwenden
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Haben Sie schon einmal den Mauszeiger über ein Schwarz-Weiß- oder Sepiabild bewegt und dabei gesehen, wie sofort das farbige Bild erschien? Oder sind Sie schon einmal auf ein Hintergrundbild gestoßen, bei dem ein kleiner unscharfer Bereich den darüberliegenden Text besser lesbar macht? Früher erforderten solche Änderungen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile von CSS-Filtereffekten

Das CSS-Modul [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) stellt Eigenschaften und Funktionen bereit, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können – ohne Photoshop oder zusätzliche HTTP-Anfragen. Die einzige benötigte Software ist der Browser der Benutzer. Anders als vorgefertigte Bildeffekte sind CSS-Filtereffekte zudem responsiv und animierbar.

Das CSS-Modul für Filtereffekte stellt die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} bereit. Damit können Sie die Darstellung von Text, Bildern, Hintergründen und Rahmen sowie jedes Elements beeinflussen, auf das Sie diese Eigenschaften anwenden. Das Modul definiert außerdem den Datentyp {{cssxref("filter-function")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebungen hinzufügen können. Mit Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements verändern, sondern auch über einen selbst erstellten Filter auf einen SVG-Filter verweisen.

## Eigenschaften für Filtereffekte

Mit den folgenden beiden Filtereigenschaften des CSS-Moduls für Filtereffekte können Sie auf ein Element keinen, einen oder mehrere grafische Effekte anwenden:

- Mit der Eigenschaft {{cssxref("filter")}} können Sie Effekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor es gerendert wird. Die Filtereffekte wirken direkt auf das Element, einschließlich seines Inhalts, seiner Rahmen und seines Innenabstands.

- Mit der Eigenschaft {{cssxref("backdrop-filter")}} können Sie grafische Effekte auf den Bereich hinter einem Element anwenden. `backdrop-filter` wird häufig verwendet, um Inhalte im Vordergrund besser lesbar zu machen – insbesondere dann, wenn der Bereich, auf dem sie platziert sind, sonst nicht genügend Kontrast bietet. Die Filtereffekte wirken nur auf den Hintergrund des Elements, nicht auf seinen Inhalt.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern. Diese werden in der angegebenen Reihenfolge angewendet.

## Filterfunktionen

Das CSS-Modul für Filtereffekte stellt zehn {{cssxref("filter-function")}}-Funktionen bereit. Darüber hinaus können Sie mithilfe von SVG-Filtern, die über eine `url()`-Referenz eingebunden werden, nahezu unbegrenzt viele Effekte definieren.

Die folgende Tabelle führt die zehn Filterfunktionen zusammen mit ihren Werttypen, dem gegebenenfalls gültigen Mindestwert, dem größten Wert, der noch einen Unterschied im Effekt bewirkt, und dem für die {{Glossary("Interpolation", "Interpolation")}} verwendeten Anfangswert auf.

| Filterfunktion                                              | Parametertyp                                                         | Mindestwert | Maximaler Effekt | Standardwert (kein Effekt) |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | ----------- | ---------------- | -------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`         |                  | `0`                        |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         |                  | `1` oder `100%`            |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`         |                  | `1` oder `100%`            |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |             |                  | `0 0 0 currentColor`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`           | `0` oder `0%`              |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("angle")}}                                                 |             |                  | `0deg`                     |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`           | `0` oder `0%`              |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`           | `1` oder `100%`            |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         |                  | `100%`                     |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`           | `0%`                       |

Für Filterfunktionen mit einem Mindestwert ist dieser in der Tabelle angegeben. Wenn Sie für eine Filterfunktion einen Wert unterhalb des Mindestwerts angeben, wird die gesamte Eigenschaftsdeklaration ungültig – nicht nur die betreffende Filterfunktion in der Liste.

Der Wert für den maximalen Effekt darf überschritten werden. Ein größerer Wert ist gültig, verstärkt den Effekt aber nicht über das angegebene Maximum hinaus. Das Element sieht also genauso aus wie bei Verwendung des Werts für den maximalen Effekt. Wenn Sie beispielsweise im [Sepia-Beispiel](#sepia-filtereffekt_anwenden) `sepia(400%)` festlegen, erzielen Sie denselben Effekt wie mit dem Maximalwert `sepia(100%)`.

Der Standardwert erzeugt keinen Effekt. Diese Werte dienen jedoch als Anfangswerte für die Interpolation und zeigen, wie der jeweilige Wert angegeben werden kann. Außerdem bieten sie einen Anhaltspunkt für den Bereich zwischen dem zulässigen Mindestwert und dem Wert für den maximalen Effekt.

## Filtereffekte anwenden

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Liste, die eine oder mehrere `<filter-function>`-Funktionen, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#svg-filter_verwenden) als `url()`-Wert enthalten kann.

### Sepia-Filtereffekt anwenden

Wenn Sie den Mauszeiger über das folgende Sepiabild bewegen, erscheint sofort das farbige Bild.

Für das Bild wird ein Sepiaeffekt festgelegt, indem die [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia)-Filterfunktion als Wert der Eigenschaft `filter` angegeben wird. Bei {{cssxref(":hover")}} und {{cssxref(":focus")}} wird der Filter durch `filter: none` entfernt.

```html
<img tabindex="0" alt="Four trans-people, circa 1912" src="activists.jpg" />
```

```css
img {
  filter: sepia(100%);
}
img:hover,
img:focus {
  filter: none;
}
```

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt. Dadurch kann das Bild den Fokus erhalten, ohne die Tabulatorreihenfolge für Personen zu verändern, die eine Tastatur verwenden, denn `<img>` ist kein interaktives Element.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Filtereffekte auf andere Elemente anwenden

Die Eigenschaften `filter` und `backdrop-filter` werden zwar meist auf Bilder angewendet, können aber für jedes Element oder Pseudoelement verwendet werden.

In diesem Beispiel wird mit einem [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter ein Leuchteffekt erzeugt. Der Filter verwendet eine Unschärfe von `3px` und einen Versatz von `0`.

```css
h1 {
  color: midnightblue;
  filter: drop-shadow(0 0 3px magenta);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1>Glow created with CSS filter</h1>
```

{{EmbedLiveSample('Applying_filter_effects_to_other_elements','100%','80')}}

### Mehrere Filter anwenden

Im Sepia-Beispiel für `filter` wurde nur eine Filterfunktion verwendet. Sie können jedoch mehrere Filter angeben. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet über die Eigenschaft `backdrop-filter` zwei Filter an: [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur). Auf den Bereich hinter dem {{HTMLElement("p")}}-Element werden eine Farbverschiebung und eine Unschärfe angewendet.

```css
.container {
  background: url("/shared-assets/images/examples/listen_to_black_women.jpg")
    no-repeat left / contain goldenrod;
}
p {
  backdrop-filter: hue-rotate(240deg) blur(5px);
  background-color: rgb(255 255 255 / 10%);
  text-shadow: 2px 2px black;
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: white;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

{{EmbedLiveSample('Applying_multiple_filters','100%','300')}}

### Filter wiederholt anwenden

Da Filter nacheinander angewendet werden, können Sie dieselbe Filterfunktion mehrfach verwenden. In diesem Beispiel wird der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter viermal mit jeweils einem anderen `<shadow>`-Wert verwendet.

```html
<img src="mandala.svg" alt="Colorful mandala" role="img" />
<img src="mandala.svg" alt="Plain mandala" role="img" />
```

```css hidden
img {
  width: 49%;
}
```

```css
img {
  filter: drop-shadow(2px 2px 0 magenta) drop-shadow(-2px -2px 0 royalblue)
    drop-shadow(2px 2px 0 lime) drop-shadow(-2px -2px 0 darkorange);
}
img + img {
  filter: none;
}
```

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine aus Linien gezeichnete SVG-Grafik angewendet. Zum Vergleich ist dieselbe SVG-Grafik enthalten, bei der der Filter mit `filter: none` entfernt wurde.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Reihenfolge der Filterfunktionen festlegen

Beim Erstellen von Filtereffekten erhält die Eigenschaft `filter` oder `backdrop-filter` eine durch Leerzeichen getrennte Liste von Filtern. Die Filtereffekte werden in der Reihenfolge angewendet, in der sie aufgeführt sind.

In diesem Beispiel werden sowohl ein `magenta`-farbener Schlagschatten als auch eine Farbtondrehung um `180deg` auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt, wie sich unterschiedliche Reihenfolgen dieser Filter auswirken.

```css
h1 {
  color: midnightblue;
}
#hueFirst {
  filter: hue-rotate(180deg) drop-shadow(3px 3px magenta);
}
#shadowFirst {
  filter: drop-shadow(3px 3px magenta) hue-rotate(180deg);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1 id="hueFirst">Hue change happens before drop shadow.</h1>
<h1 id="shadowFirst">Drop shadow applied before hue change.</h1>
<h1>No filter effects applied.</h1>
```

{{EmbedLiveSample('Applying_a_filter_to_an_element','100%','280')}}

Auf beide Textzeilen werden dieselben Filter angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten hinzugefügt wird. Deshalb ist der Schatten `magenta`. In der zweiten Zeile wird zunächst dem dunkelblauen Text ein Schlagschatten hinzugefügt; danach wird der Farbton sowohl des Textes als auch des Schattens verändert.

Auf die dritte Zeile wird zum Vergleich kein Filtereffekt angewendet. Sie behält daher die Farbe `midnightblue` beziehungsweise `#191970`. Der Filter `hue-rotate(180deg)` ändert die Textfarbe in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` dem Wert `hsl(60deg 100% 7.3%)` entspricht. Die [Farbdrehung findet im sRGB-Farbraum statt](/de/docs/Web/CSS/Reference/Values/color_value#interpolation). Deshalb ändert sich der Farbton wie erwartet, während Sättigung und Helligkeit nicht dieselben Werte behalten.

## SVG-Filter verwenden

Neben den zehn definierten {{cssxref("filter-function")}}-Funktionen unterstützen CSS-Filtereffekte auch `url()`. Dessen Parameter ist ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter), der in einer internen oder externen SVG-Datei enthalten sein kann.

In einer einzigen SVG-Grafik können mehrere Filter mit jeweils einer eigenen `id` definiert werden:

```html
<svg role="none">
  <defs>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="1" edgeMode="duplicate" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur stdDeviation="3" edgeMode="duplicate" />
    </filter>
    <filter id="hue-rotate90">
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
  </defs>
</svg>
```

Auf die `id` des Filters wird bei Inline-SVGs und externen SVGs in `url()` verwiesen:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild weichzeichnen

Wie die Filterfunktion {{cssxref("filter-function/blur", "blur()")}} kann auch das SVG-Filterelement {{SVGElement("feGaussianBlur")}} Inhalte mit einem gaußschen Weichzeichner versehen.

In beiden Fällen bestimmt der Unschärferadius die Standardabweichung der gaußschen Funktion. In CSS wird er als {{cssxref("&lt;length&gt;")}} angegeben, in SVG als {{cssxref("&lt;number&gt;")}}, dessen Wert Pixeln entspricht. Anders ausgedrückt bestimmt er, wie viele Pixel auf dem Bildschirm ineinander übergehen: Ein größerer Wert erzeugt mehr Unschärfe.

Das Attribut {{SVGAttr("stdDeviation")}} des [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter)-Elements akzeptiert bis zu zwei Werte und ermöglicht so komplexere Unschärfeeffekte. Um eine vergleichbare Unschärfe zu erzeugen, geben wir für `stdDeviation` einen Wert an:

```html hidden
<table>
  <thead>
    <tr>
      <th>CSS example</th>
      <th>SVG example</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag"
          class="svgFilter" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

Der SVG-Filterwert `url()` kann als Wert des Attributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) des SVG-Elements [`<image>`](/de/docs/Web/SVG/Reference/Element/image) oder als Teil des Werts der CSS-Eigenschaften `filter` und `backdrop-filter` verwendet werden.

```css hidden
th,
td {
  padding: 5px;
}
```

```css
.filter {
  filter: blur(3.5px);
}
.svgFilter {
  filter: url("#blur");
}
```

{{EmbedLiveSample('blur_example','100%','550')}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG-Element {{SVGElement("filter")}} und SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
