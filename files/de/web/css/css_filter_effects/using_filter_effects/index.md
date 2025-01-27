---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: 5d5f7a8f52ad9b21eb4b8f6dd9d0afce23d1bdf6
---

{{CSSRef}}

Haben Sie jemals ein schwarz-weißes oder sepiafarbenes Bild gesehen, bei dem das Vollfarbbild sofort sichtbar wurde, wenn Sie darüber schwebten? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, der den Text darüber besser lesbar macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, die es Ihnen ermöglichen, die oben beschriebenen visuellen Effekte anzuwenden, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anfragen zu senden. Die einzige erforderliche Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte, im Gegensatz zu voreingestellten Bildeffekten, reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul bietet die {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften, die Sie verwenden können, um die Darstellung von Text, Bildern, Hintergründen und Rahmen oder eines beliebigen Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den {{cssxref("&lt;filter-function&gt;")}} Datentyp, der es Ihnen ermöglicht, grafische Effekte wie Unschärfe oder Farbverschiebung hinzuzufügen. Mit Hilfe der Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements verändern, sondern auch einen SVG-Filter mit einem von Ihnen erstellten Filter referenzieren.

## Filtereffekt-Eigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}} Eigenschaft können Sie Filtereffekte wie Unschärfe, Schattenwurf und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte, Rahmen und Abstände des Elements.

- Mit der {{cssxref("backdrop-filter")}} Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter` Eigenschaft wird häufig verwendet, um den Vordergrundinhalt besser lesbar zu machen, insbesondere wenn der größere Bereich, auf den der Inhalt platziert ist, ansonsten nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf den Inhalt des Elements.

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/filter#functions) Funktionen sowie die Möglichkeit, eine nahezu endlose Reihe von Effekten mit SVG-Filtern zu definieren, die über einen `url()`-Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Wertetypen, dem minimal gültigen Wert, soweit zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

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

Der minimale erlaubte Wert ist für Filterfunktionen enthalten, die einen minimalen Wert haben. Wenn ein Wert kleiner als der minimale Wert für eine beliebige Filterfunktion angegeben wird, macht dies die gesamte Eigenschaftsdeklaration ungültig, nicht nur die beanstandete Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Die Aufnahme eines Werts, der größer ist als der aufgeführte maximale Wert, ist gültig, erhöht jedoch den Effekt nicht über den aufgeführten maximalen Wert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus, wie wenn der maximale Effektwert gesetzt wäre. Beispielsweise erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwendung_eines_sepia-filtereffekts) den gleichen Effekt wie `sepia(100%)`, der maximale Wert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, stellen sie die anfänglichen Interpolationswerte bereit und bieten ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte bieten eine Einschätzung zwischen dem minimal erlaubten Wert und dem maximalen Effektwert.

## Anwendung von Filtereffekten

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine Liste von Filterfunktionen, die eine oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()`-Wert enthalten können.

### Anwendung eines Sepia-Filtereffekts

Wenn Sie über das Sepia-Bild unten fahren, erscheint das Vollfarbbild sofort.

Das Bild wird sepiafarbig dargestellt, indem der Wert der `filter` Eigenschaft als [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird durch Setzen von `filter: none` beim [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) entfernt.

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

Im {{HTMLElement("img")}} Element ist [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tabulatorreihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwendung von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die `filter` und `backdrop-filter` Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt hinzugefügt, indem ein [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter mit einer `3px` Unschärfe und `0` Versatz verwendet wird.

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

Während das Sepia-`filter` Beispiel nur eine einzige Filterfunktion enthielt, können Sie mehrere Filter einstellen. Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

In diesem Beispiel werden zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter` Eigenschaft angewendet. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} Element, hat eine Farbverschiebung und eine Unschärfe angewendet.

```css
.container {
  background: url(image.jpg) no-repeat left / contain goldenrod;
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
<div
  class="container"
  style="background-image: url('https://mdn.github.io/shared-assets/images/examples/listen_to_black_women.jpg');">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

{{EmbedLiveSample('Applying_multiple_filters','100%','300')}}

### Anwendung wiederholter Filter

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>` Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine aus Linien gezeichnete SVG angewendet. Die gleiche SVG wird mit dem Filter `filter: none` entfernt, zum Vergleich eingefügt.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Festlegen der Reihenfolge der Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter` oder `backdrop-filter` Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern zugewiesen. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlichen Reihenfolgen angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes geändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten dem dunkelblauen Text hinzugefügt, und dann werden der Farbton sowohl des Textes als auch des Schattens verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. Daher bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbdrehung erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, jedoch nicht die gleichen Werte für Sättigung und Helligkeit beibehalten hat.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützt CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet sein kann.

Ein einziges SVG kann verwendet werden, um mehrere Filter zu definieren, von denen jeder eine `id` hat:

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

Die `id` des Filters wird in der `url()` sowohl für inline als auch externe SVGs referenziert:

```css
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild verwischen

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG {{SVGElement("feGaussianBlur")}} Filterelement ebenfalls verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als pixeläquivalenter {{cssxref("&lt;number&gt;")}} in SVG angegeben wird, den Wert der Standardabweichung der Gaußschen Funktion. Mit anderen Worten, er definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Element/filter)'s {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, wodurch komplexere Unschärfewerte erstellt werden können. Um eine äquivalente Unschärfe zu erstellen, fügen wir einen Wert für `stdDeviation` ein:

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

Der SVG `url()` Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Element/image) Elements [`filter`](/de/docs/Web/SVG/Attribute/filter) Attribut oder als Teil des Wertes der CSS `filter` und `backdrop-filter` Eigenschaften enthalten sein.

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
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
