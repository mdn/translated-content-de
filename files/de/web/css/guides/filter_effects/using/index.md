---
title: Verwendung von Filtereffekten
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Haben Sie jemals über ein schwarz-weißes oder sepiafarbenes Bild geschwebt, und das Vollfarbenbild erschien sofort? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, das den darüber liegenden Text lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffektmodul](/de/docs/Web/CSS/Guides/Filter_effects) in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop oder zusätzliche HTTP-Anfragen verwenden zu müssen. Die einzige erforderliche Software ist der Browser des Nutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffektmodul bietet die {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften, die Sie verwenden können, um das Rendering von Text, Bildern, Hintergründen und Rahmen oder eines beliebigen Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("filter-function")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebung hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch auf einen SVG-Filter verweisen, den Sie erstellen.

## Filtereffekteigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffektmoduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der Eigenschaft {{cssxref("filter")}} können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte des Elements, der Rahmen und der Innenabstände.

- Mit der Eigenschaft {{cssxref("backdrop-filter")}} können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter` Eigenschaft wird oft verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf den Inhalt des Elements.

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der deklarierten Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffektmodul bietet 10 {{cssxref("filter-function")}} Funktionen sowie die Möglichkeit, eine fast endlose Anzahl von Effekten mithilfe von SVG-Filtern zu definieren, die über einen `url()`-Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Wertetypen, dem minimalen gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min-Wert | Max-Effekt | Standardwert (kein Effekt) |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ---------- | -------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `0`                        |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      |            | `1` oder `100%`            |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `1` oder `100%`            |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |          |            | `0 0 0 currentColor`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0` oder `0%`              |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("angle")}}                                                 |          |            | `0deg`                     |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0` oder `0%`              |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1` oder `100%`            |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `100%`                     |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0%`                       |

Der minimal erlaubte Wert wird für Filterfunktionen angegeben, die einen Minimalwert haben. Wenn ein Wert angegeben wird, der unter dem Mindestwert liegt, macht dies die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Ein Wert, der den angegebenen Maximalwert überschreitet, ist gültig, erhöht jedoch den Effekt nicht über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element wird gleich aussehen wie mit dem eingestellten Maximalwert. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwendung_des_sepia-filtereffekts) denselben Effekt wie `sepia(100%)`, der Höchstwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, liefern sie die anfänglichen Interpolationswerte und bieten ein Beispiel dafür, wie der Wert festgelegt werden kann. Diese Standardwerte bieten eine Skala zwischen dem zulässigen Mindestwert und dem maximalen Effektwert.

## Anwendung von Filtereffekten

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine Liste von Filterfunktionen, die einen oder mehrere `<filter-function>` enthalten, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwendung_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwendung des Sepia-Filtereffekts

Wenn Sie über das sepiafarbene Bild unten fahren, sehen Sie das Vollfarbenbild sofort erscheinen.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird auf {{cssxref(":hover")}} und {{cssxref(":focus")}} entfernt, indem `filter: none` festgelegt wird.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus für Tastaturnutzer zu ermöglichen, ohne die Tabulatorreihenfolge zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwendung von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die `filter` und `backdrop-filter` Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Leuchteffekt mithilfe eines [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filters mit einer `3px` Unschärfe und `0` Versatz hinzugefügt.

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

### Anwendung mehrerer Filter

Während das Sepia-Filterbeispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter festlegen. Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der deklarierten Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter an — [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur) — über die `backdrop-filter`-Eigenschaft. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} Element, hat eine Farbverschiebung und eine Unschärfe erhalten.

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

### Anwendung wiederholter Filter

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filter vier Mal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein liniengezeichnetes SVG angewendet. Dasselbe SVG, mit entferntem Filter durch `filter: none`, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Reihenfolge der Filterfunktionen angeben

Bei der Erstellung von Filtereffekten wird der `filter` oder `backdrop-filter`-Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern bereitgestellt. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbtonrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in verschiedenen Reihenfolgen angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten dem dunkelblauen Text hinzugefügt, und dann wird der Farbton sowohl des Textes als auch des Schattens verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. Die dritte Zeile bleibt also `midnightblue` oder `#191970`. Der `hue-rotate(180deg)`-Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/Reference/Values/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht gleich geblieben sind.

## Verwendung von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet sein kann.

Ein einzelnes SVG kann verwendet werden, um mehrere Filter zu definieren, jeweils mit einer `id`:

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

Die `id` des Filters wird im `url()` sowohl für Inline- als auch externe SVGs referenziert:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild verwischen

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann auch das SVG {{SVGElement("feGaussianBlur")}} Filterelement verwendet werden, um Inhalt zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als pixeläquivalenter {{cssxref("&lt;number&gt;")}} in SVG angegeben wird, den Wert der Standardabweichung zur gaußschen Funktion. Mit anderen Worten bestimmt er die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) Attribut {{SVGAttr("stdDeviation")}} akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfewerte zu erstellen. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG `url()`-Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elementattributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) oder als Teil des Wertes der CSS-`filter` und `backdrop-filter` Eigenschaften enthalten sein.

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
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
