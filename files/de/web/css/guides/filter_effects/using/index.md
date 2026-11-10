---
title: Filtereffekte verwenden
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Haben Sie schon einmal den Mauszeiger über ein Schwarz-Weiß- oder Sepiabild bewegt, woraufhin sofort das farbige Bild sichtbar wurde? Oder sind Sie schon einmal auf ein Hintergrundbild mit einem kleinen unscharfen Bereich gestoßen, der den darüberliegenden Text besser lesbar macht? Früher waren für solche Änderungen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen erforderlich.

## Vorteile von CSS-Filtereffekten

Das Modul [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) in CSS stellt Eigenschaften und Funktionen bereit, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anfragen zu senden. Die einzige benötigte Software ist der Browser der Nutzerin oder des Nutzers. Anders als vorgefertigte Bildeffekte sind CSS-Filtereffekte zudem responsiv und animierbar.

Das CSS-Modul für Filtereffekte stellt die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} bereit. Mit ihnen können Sie die Darstellung von Text, Bildern, Hintergründen und Rahmen sowie jedes anderen Elements beeinflussen, auf das Sie diese Eigenschaften anwenden. Das Modul definiert außerdem den Datentyp {{cssxref("filter-function")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebungen hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch einen von Ihnen erstellten SVG-Filter referenzieren.

## Eigenschaften für Filtereffekte

Mit den folgenden beiden Eigenschaften des CSS-Moduls für Filtereffekte können Sie auf ein Element keinen, einen oder mehrere grafische Effekte anwenden:

- Mit der Eigenschaft {{cssxref("filter")}} können Sie Effekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor es gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich seines Inhalts, seiner Rahmen und seines Innenabstands.

- Mit der Eigenschaft {{cssxref("backdrop-filter")}} können Sie grafische Effekte auf den Bereich hinter einem Element anwenden. `backdrop-filter` wird häufig verwendet, um Inhalte im Vordergrund besser lesbar zu machen, insbesondere wenn der Bereich, auf dem sie liegen, sonst nicht genügend Kontrast bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet, nicht auf seinen Inhalt.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Modul für Filtereffekte stellt 10 {{cssxref("filter-function")}}-Funktionen bereit. Darüber hinaus können Sie mithilfe von SVG-Filtern, die über eine `url()`-Referenz eingebunden werden, nahezu unbegrenzt viele weitere Effekte definieren.

Die folgende Tabelle zeigt die 10 Filterfunktionen mit ihren Werttypen, dem gegebenenfalls zulässigen Mindestwert, dem Höchstwert für den Effekt und dem für die {{Glossary("Interpolation", "Interpolation")}} verwendeten Anfangswert.

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

Für Filterfunktionen mit einem Mindestwert ist dieser in der Tabelle angegeben. Wird für eine Filterfunktion ein Wert unterhalb des Mindestwerts angegeben, ist die gesamte Eigenschaftsdeklaration ungültig – nicht nur die betreffende Filterfunktion in der durch Kommas getrennten Liste.

Der Wert für den maximalen Effekt darf überschritten werden. Ein höherer Wert ist gültig, verstärkt den Effekt aber nicht über das angegebene Maximum hinaus. Das Element sieht dann genauso aus wie mit dem Wert für den maximalen Effekt. Beispielsweise führt `sepia(400%)` im [Sepia-Beispiel](#sepia-filtereffekt_anwenden) zum selben Ergebnis wie der Maximalwert `sepia(100%)`.

Der Standardwert erzeugt keinen Effekt. Diese Werte dienen jedoch als Anfangswerte für die Interpolation und zeigen, wie ein Wert angegeben werden kann. Außerdem bieten sie einen Anhaltspunkt für den Bereich zwischen dem zulässigen Mindestwert und dem Wert für den maximalen Effekt.

## Filtereffekte anwenden

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Liste mit einer oder mehreren `<filter-function>`-Funktionen, das Schlüsselwort `none` oder einen [SVG-Filter](#svg-filter_verwenden) als `url()`-Wert.

### Sepia-Filtereffekt anwenden

Wenn Sie den Mauszeiger über das Sepiabild unten bewegen, wird sofort das farbige Bild sichtbar.

Der Sepiaeffekt wird erzeugt, indem für die Eigenschaft `filter` die Filterfunktion [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia) angegeben wird. Bei {{cssxref(":hover")}} und {{cssxref(":focus")}} wird der Filter durch `filter: none` entfernt.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt. So kann das Bild den Fokus erhalten, ohne die Tab-Reihenfolge für Tastaturnutzer zu verändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Filtereffekte auf andere Elemente anwenden

Die Eigenschaften `filter` und `backdrop-filter` werden zwar meist auf Bilder angewendet, können aber für jedes Element oder Pseudoelement verwendet werden.

In diesem Beispiel wird mit einem [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter, einer Unschärfe von `3px` und einem Versatz von `0` ein Leuchteffekt erzeugt.

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

Das Sepia-Beispiel mit `filter` enthält nur eine Filterfunktion, Sie können aber auch mehrere Filter angeben. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

In diesem Beispiel werden über die Eigenschaft `backdrop-filter` zwei Filter angewendet: [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur). Auf den Bereich hinter dem {{HTMLElement("p")}}-Element werden eine Farbverschiebung und eine Unschärfe angewendet.

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

Da Filter nacheinander angewendet werden, können Sie dieselbe Filterfunktion mehrfach verwenden. In diesem Beispiel wird der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter viermal verwendet, jeweils mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein SVG mit einer Linienzeichnung angewendet. Zum Vergleich ist dasselbe SVG enthalten, bei dem der Filter mit `filter: none` entfernt wurde.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Reihenfolge der Filterfunktionen festlegen

Beim Erstellen von Filtereffekten wird für die Eigenschaft `filter` oder `backdrop-filter` eine durch Leerzeichen getrennte Liste von Filtern angegeben. Die Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden auf die Überschrift der ersten Ebene sowohl ein `magenta`-farbener Schlagschatten als auch eine Farbtondrehung um `180deg` angewendet. Das Beispiel zeigt, wie sich die unterschiedliche Reihenfolge dieser Filter auswirkt.

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

{{EmbedLiveSample('specifying_filter_function_order','100%','280')}}

Auf beide Textzeilen werden dieselben Filter angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Texts geändert, bevor der Schatten angewendet wird. Deshalb ist der Schatten `magenta`. In der zweiten Zeile wird zunächst dem dunkelblauen Text ein Schlagschatten hinzugefügt. Danach wird der Farbton sowohl des Texts als auch des Schattens geändert.

Auf die dritte Zeile wird zum Vergleich kein Filtereffekt angewendet. Sie behält daher die Farbe `midnightblue` beziehungsweise `#191970`. Der Filter `hue-rotate(180deg)` ändert die Textfarbe der ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` entspricht. Die [Farbdrehung findet im sRGB-Farbraum statt](/de/docs/Web/CSS/Reference/Values/color_value#interpolation). Deshalb ändert sich der Farbton wie erwartet, während die Werte für Sättigung und Helligkeit nicht erhalten bleiben.

## SVG-Filter verwenden

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}-Funktionen unterstützen CSS-Filtereffekte `url()` mit einem [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) als Parameter. Dieser kann in eine interne oder externe SVG-Datei eingebettet sein.

In einem einzigen SVG können mehrere Filter definiert werden, jeweils mit einer eigenen `id`:

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

Auf die `id` des Filters wird sowohl bei eingebetteten als auch bei externen SVGs in `url()` verwiesen:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild weichzeichnen

Ebenso wie die Filterfunktion {{cssxref("filter-function/blur", "blur()")}} einen Gaußschen Weichzeichner auf die betreffenden Elemente anwendet, kann auch das SVG-Filterelement {{SVGElement("feGaussianBlur")}} zum Weichzeichnen von Inhalten verwendet werden.

In beiden Fällen legt der Wert für den Unschärferadius die Standardabweichung der Gaußfunktion fest. In CSS wird er als {{cssxref("&lt;length&gt;")}} angegeben, in SVG als {{cssxref("&lt;number&gt;")}} mit einem Pixel entsprechenden Wert. Anders ausgedrückt bestimmt er, wie viele Pixel auf dem Bildschirm ineinander übergehen: Ein größerer Wert erzeugt mehr Unschärfe.

Das Attribut {{SVGAttr("stdDeviation")}} von [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) akzeptiert bis zu zwei Werte und ermöglicht damit komplexere Unschärfeeffekte. Um eine vergleichbare Unschärfe zu erzeugen, geben wir für `stdDeviation` einen Wert an:

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

Der SVG-Filterwert `url()` kann als Wert des Attributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) eines SVG-[`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elements oder als Teil des Werts der CSS-Eigenschaften `filter` und `backdrop-filter` verwendet werden.

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

{{EmbedLiveSample('blurring_an_image','100%','550')}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG-Element {{SVGElement("filter")}}, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
