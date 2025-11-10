---
title: Verwenden von Filtereffekten
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 65d5ff8aba07cb61bbed5d476947ddda300d323f
---

Haben Sie schon einmal über ein Schwarzweiß- oder Sepiabild geschwebt und das Vollfarbenbild kam sofort zum Vorschein? Sind Sie schon einmal auf ein Hintergrundbild gestoßen, das einen kleinen unscharfen Bereich aufweist, wodurch der darüber liegende Text besser lesbar wird? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filter Effects](/de/docs/Web/CSS/Guides/Filter_effects)-Modul in CSS bietet Eigenschaften und Funktionen, die es Ihnen ermöglichen, die oben beschriebenen visuellen Effekte anzuwenden, ohne Photoshop oder zusätzliche HTTP-Anfragen zu verwenden. Die einzige erforderliche Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte, im Gegensatz zu voreingestellten Bildeffekten, reaktionsschnell und animierbar.

Das CSS-Filtereffekte-Modul bietet die {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften, die Sie verwenden können, um das Rendering von Texten, Bildern, Hintergründen und Rahmen oder jedes Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den {{cssxref("&lt;filter-function&gt;")}}-Datentyp, mit dem Sie grafische Effekte wie Unschärfen oder Farbverschiebungen hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Aussehen eines Elements ändern, sondern auch einen SVG-Filter referenzieren, den Sie erstellen.

## Filtereffekte-Eigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}}-Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich des Inhalts, der Ränder und des Innenabstands des Elements.

- Mit der {{cssxref("backdrop-filter")}}-Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn das größere Gebiet, auf dem der Inhalt platziert ist, nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf den Inhalt des Elements.

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions)-Funktionen sowie die Möglichkeit, eine nahezu endlose Vielzahl von Effekten zu definieren, indem SVG-Filter über einen `url()`-Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Wertetypen, dem minimal gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für [Interpolation](/de/docs/Glossary/Interpolation) verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min-Wert | Max. Effekt | Standardwert (kein Effekt) |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ----------- | -------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`      |             | `0`                        |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      |             | `1` oder `100%`            |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`      |             | `1` oder `100%`            |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |          |             | `0 0 0 currentColor`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`      | `0` oder `0%`              |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |          |             | `0deg`                     |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`      | `0` oder `0%`              |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`      | `1` oder `100%`            |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`      | `100%`                     |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`      | `0%`                       |

Der minimale erlaubte Wert ist für Filterfunktionen enthalten, die einen Mindestwert haben. Die Angabe eines Wertes, der kleiner als der Mindestwert ist, macht die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Die Angabe eines Wertes, der größer als der angegebene Maximalwert ist, ist gültig, erhöht jedoch nicht den Effekt über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus, wie wenn der maximale Effektwert festgelegt ist. Zum Beispiel erzeugt das Setzen von `sepia(400%)` im [Sepia-Beispiel](#anwenden_des_sepia-filtereffekts) den gleichen Effekt wie `sepia(100%)`, der Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, bieten sie die Anfangswerte für Interpolation und ein Beispiel dafür, wie der Wert festgelegt werden kann. Diese Standardwerte bieten eine Orientierung zwischen dem minimal erlaubten Wert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine Filterfunktionsliste, die einen oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwenden des Sepia-Filtereffekts

Wenn Sie über das Sepiabild unten schweben, sehen Sie, wie das Vollfarbenbild sofort zum Vorschein kommt.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia)-Filterfunktion festgelegt wird. Der Filter wird durch Setzen von `filter: none` auf [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) entfernt.

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

Im {{HTMLElement("img")}}-Element wird [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tab-Reihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die `filter`- und `backdrop-filter`-Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt mit einem [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter mit `3px` Unschärfe und `0` Versatz hinzugefügt.

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

Während das Sepia-`filter`-Beispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter festlegen. Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat eine Farbverschiebung und eine Unschärfe erhalten.

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

### Anwenden wiederholter Filter

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)-Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein Linien-gezeichnetes SVG angewendet. Dasselbe SVG, bei dem der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Angeben der Reihenfolge der Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter`- oder `backdrop-filter`-Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern zur Verfügung gestellt. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl ein `magenta`-Schlagschatten als auch eine `180grad`-Farbrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Dieselben Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text angewendet und dann der Farbton sowohl des Textes als auch des Schattens verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. So bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)`-Filter ändert den Text in den ersten beiden Zeilen in `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/Reference/Values/color_value#interpolation), was der Grund ist, warum der Farbton wie erwartet geändert wurde, während die gleichen Werte für Sättigung und Helligkeit nicht beibehalten wurden.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) sein kann, der in einer internen oder externen SVG-Datei eingebettet ist.

Ein einzelnes SVG kann verwendet werden, um mehrere Filter zu definieren, von denen jeder eine `id` hat:

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

Die `id` des Filters wird in der `url()` sowohl für Inline- als auch für externe SVGs referenziert:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild verwischen

Genauso wie die {{cssxref("filter-function/blur", "blur()")}}-Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG-{{SVGElement("feGaussianBlur")}}-Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärfe-Radiuswert, angegeben als {{cssxref("&lt;length&gt;")}} in CSS und als pixeläquivalenter {{cssxref("&lt;number&gt;")}} in SVG, den Wert der Standardabweichung für die Gaußfunktion. Mit anderen Worten, er definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter)-Attribut {{SVGAttr("stdDeviation")}} akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfewerte zu erzeugen. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG-`url()`-Filterwert kann als Wert des SVG-[`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Element-`filter`-Attributs oder als Teil der Wert der CSS-`filter`- und `backdrop-filter`-Eigenschaften einbezogen werden.

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
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
