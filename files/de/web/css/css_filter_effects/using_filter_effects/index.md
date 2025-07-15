---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Haben Sie schon einmal über ein Schwarz-Weiß- oder Sepia-Bild geschwebt und das farbige Bild erschien sofort? Haben Sie schon einmal ein Hintergrundbild mit einem kleinen, verschwommenen Abschnitt gesehen, der den darüber liegenden Text besser lesbar macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, die es Ihnen ermöglichen, die oben beschriebenen visuellen Effekte anzuwenden, ohne Photoshop oder zusätzliche HTTP-Anfragen zu verwenden. Die einzige erforderliche Software ist der Browser des Benutzers. Außerdem sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten responsiv und animierbar.

Das CSS-Filtereffekte-Modul bietet die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}, die verwendet werden können, um die Darstellung von Text, Bildern, Hintergründen und Rändern oder jedem Element, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den {{cssxref("&lt;filter-function&gt;")}} Datentyp, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebung hinzufügen können. Mit Hilfe der Filterfunktionen können Sie nicht nur das Aussehen eines Elements ändern, sondern auch einen SVG-Filter referenzieren, den Sie erstellt haben.

## Eigenschaften der Filtereffekte

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mithilfe der {{cssxref("filter")}} Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich des Inhalts, der Ränder und der Auffüllung des Elements.

- Mithilfe der {{cssxref("backdrop-filter")}} Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (das "Backdrop" des Elements) anwenden. Die `backdrop-filter` Eigenschaft wird häufig verwendet, um den Vordergrundinhalt besser lesbar zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf dessen Inhalt.

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/filter#functions) Funktionen sowie die Möglichkeit, eine nahezu endlose Palette von Effekten zu definieren, indem SVG-Filter über einen `url()` Verweis angewendet werden.

Die folgende Tabelle enthält die 10 Filterfunktionen zusammen mit ihren Werttypen, dem minimalen gültigen Wert, sofern zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min. Wert | Max. Effekt | Interpolationswert   | Standardwert (kein Effekt)              |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | --------- | ----------- | -------------------- | --------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`       |             | `0`                  | `blur(0)`                               |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       |             | `1`                  | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`       |             | `1`                  | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |           |             | `0 0 0 currentcolor` | `drop-shadow(0 0 0 currentcolor)`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |           |             | `0`                  | `hue-rotate(0deg)`                      |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                  | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                  | `saturate(100%)`                        |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `sepia(0%)`                             |

Der Mindestwert ist für Filterfunktionen angegeben, die einen Mindestwert haben. Die Angabe eines Werts kleiner als der Mindestwert macht die gesamte Eigenschaftserklärung ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Die Angabe eines Werts, der größer ist als der aufgeführte Maximalwert, ist gültig, erhöht jedoch den Effekt nicht über den aufgeführten Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element wird genauso aussehen wie bei Einstellung des maximalen Effektwerts. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwenden_von_sepia-filtereffekten) denselben Effekt wie `sepia(100%)`, der maximale Wert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte bieten eine Orientierung zwischen dem minimal zulässigen Wert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine Liste von Filterfunktionen, die einen oder mehrere `<filter-function>`s, das Standardkeyword `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als einen `url()` Wert enthalten kann.

### Anwenden von Sepia-Filtereffekten

Wenn Sie über das Sepia-Bild unten schweben, wird das farbige Bild sofort sichtbar.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter` Eigenschaft als [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) durch Einstellung von `filter: none` entfernt.

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

In dem {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tabulatorreihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl sie normalerweise auf Bilder angewendet werden, können die `filter` und `backdrop-filter` Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein glühender Effekt hinzugefügt, indem ein [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter mit einer `3px` Unschärfe und `0` Versatz verwendet wird.

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

### Anwenden mehrerer Filter

Obwohl das Sepia-`filter` Beispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter festlegen. Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter an – [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) – über die `backdrop-filter` Eigenschaft. Das Backdrop, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat einen Farbwechsel und eine Unschärfe angewendet bekommen.

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
  color: #ffffff;
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

### Anwenden wiederholter Filter

Da Filter in Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>` Wert.

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
  filter: drop-shadow(2px 2px 0 hsl(300deg 100% 50%))
    drop-shadow(-2px -2px 0 hsl(210deg 100% 50%))
    drop-shadow(2px 2px 0 hsl(120deg 100% 50%))
    drop-shadow(-2px -2px 0 hsl(30deg 100% 50%));
}
img + img {
  filter: none;
}
```

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein gezeichnetes SVG angewendet. Das gleiche SVG, bei dem der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Festlegen der Reihenfolge der Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter` oder `backdrop-filter` Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern zugewiesen. Diese Filtereffekte werden in der Reihenfolge angewandt, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Drehung des Farbtons auf die Überschrift der Stufe eins angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewandt werden.

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

Die gleichen Filter werden auf beide Textzeilen angewandt, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes geändert, bevor der Schatten angewendet wird, so dass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text hinzugefügt und dann wird der Farbton sowohl des Textes als auch des Schatten geändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. Die dritte Zeile bleibt also `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen in `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, jedoch nicht dieselben Werte für Sättigung und Helligkeit beibehalten werden.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) sein kann, der in einer internen oder externen SVG-Datei eingebettet ist.

Ein einzelnes SVG kann verwendet werden, um mehrere Filter zu definieren, jeder mit einer `id`:

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
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Unschärfe auf ein Bild anwenden

Genauso wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion eine gaußsche Unschärfe auf die Elemente anwendet, auf die sie angewandt wird, kann auch das SVG {{SVGElement("feGaussianBlur")}} Filterelement verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, angegeben als {{cssxref("&lt;length&gt;")}} in CSS und als pixeläquivalenter {{cssxref("&lt;number&gt;")}} in SVG, den Wert der Standardabweichung der gaußschen Funktion. Mit anderen Worten, er definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfewerte zu erstellen. Um eine gleichwertige Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

```html hidden
<table cellpadding="5">
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

Der SVG `url()` Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elementattributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) oder als Teil des Wertes der CSS-Eigenschaften `filter` und `backdrop-filter` aufgenommen werden.

```css
.filter {
  filter: blur(3.5px);
}
.svgFilter {
  filter: url(#blur);
}
```

{{EmbedLiveSample('blur_example','100%','550')}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
