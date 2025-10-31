---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Haben Sie jemals über ein schwarz-weißes oder sepia-farbenes Bild gehovt und das vollfarbige Bild erschien sofort? Haben Sie jemals ein Hintergrundbild mit einem kleinen, verschwommenen Bereich gesehen, der den Text darüber besser lesbar macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop oder zusätzliche HTTP-Anfragen zu benutzen. Die einzige erforderliche Software ist der Browser des Benutzers. Im Gegensatz zu vorab festgelegten Bildeffekten sind CSS-Filtereffekte außerdem responsiv und animierbar.

Das CSS-Filtereffekte-Modul bietet die {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften, die Sie verwenden können, um das Rendering von Text, Bildern, Hintergründen und Rahmen oder jedem Element, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, der es Ihnen ermöglicht, grafische Effekte wie Unschärfe oder Farbverschiebung hinzuzufügen. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch ein SVG-Filter mithilfe eines von Ihnen erstellten Filters referenzieren.

## Filtereffekteigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, eine oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}} Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte, Rahmen und Abstände des Elements.

- Mit der {{cssxref("backdrop-filter")}} Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genügend Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements und nicht auf dessen Inhalt angewendet.

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions) Funktionen sowie die Möglichkeit, eine fast unendliche Vielzahl von Effekten zu definieren, indem SVG-Filter über eine `url()`-Referenz angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Werttypen, dem minimal zulässigen Wert, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min Wert | Max Effekt | Interpolationswert   | Standardwert (kein Effekt)              |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ---------- | -------------------- | --------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `0`                  | `blur(0)`                               |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      |            | `1`                  | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `1`                  | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |          |            | `0 0 0 currentColor` | `drop-shadow(0 0 0 currentColor)`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |          |            | `0`                  | `hue-rotate(0deg)`                      |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1`                  | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1`                  | `saturate(100%)`                        |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `sepia(0%)`                             |

Der minimale erlaubte Wert ist für Filterfunktionen enthalten, die einen Minimalwert haben. Ein Wert unter dem Mindestwert für jede Filterfunktion macht die gesamte Eigenschaftsdeklaration ungültig, nicht nur die betroffene Filterfunktion in der komma-separierten Liste.

Der maximale Effektwert kann überschritten werden. Ein Wert größer als der aufgelistete Maximalwert ist gültig, erhöht jedoch nicht den Effekt über den aufgelisteten Maximalwert. Mit anderen Worten, der Effekt auf das Element sieht genauso aus wie bei Einstellung des maximalen Effektwerts. Zum Beispiel ergibt `sepia(400%)` im [sepia Beispiel](#anwendung_des_sepia-filtereffekts) den gleichen Effekt wie `sepia(100%)`, der Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und ein Beispiel, wie der Wert festgelegt werden kann. Diese Standardwerte bieten eine Skala zwischen dem minimal erlaubten Wert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine Filterfunktionsliste, die eine oder mehrere `<filter-function>`s, das Standard-Keyword `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwendung des Sepia-Filtereffekts

Wenn Sie über das Sepia-Bild unten schweben, sehen Sie sofort das vollfarbige Bild.

Das Bild wird auf sepia eingestellt, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}} Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus ohne Änderung der Tab-Reihenfolge für Tastaturnutzer zu ermöglichen, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Während generell auf Bilder angewandt, können die `filter`- und `backdrop-filter`-Eigenschaften auf jedes Element oder Pseudo-Element angewandt werden.

In diesem Beispiel wird ein Leuchteffekt hinzugefügt, indem ein [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter mit einer `3px` Unschärfe und `0` Versatz verwendet wird.

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

Während das Sepia-`filter`-Beispiel nur eine einzelne Filterfunktion beinhaltete, können Sie mehrere Filter festlegen. Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} Element, hat eine Farbverschiebung und eine Unschärfe angewendet.

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

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehrmals verwenden. In diesem Beispiel wird der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein Linien-SVG angewendet. Dasselbe SVG, dessen Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Angeben der Reihenfolge der Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter`- oder `backdrop-filter`-Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern bereitgestellt. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbrotation auf die Überschrift der Stufe eins angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes geändert, bevor der Schatten hinzugefügt wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten dem dunkelblauen Text hinzugefügt, und dann wird der Farbton sowohl des Textes als auch des Schattens geändert.

Kein Filtereffekt wird auf die dritte Zeile angewendet, um den ursprünglichen Effekt zum Vergleich zu zeigen. Die dritte Zeile bleibt also `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht gleich geblieben sind.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet sein kann.

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

Die `id` des Filters wird in der `url()` sowohl für inline als auch für externe SVGs referenziert:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Verwischen eines Bildes

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion eine Gaußsche Unschärfe auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG {{SVGElement("feGaussianBlur")}} Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als Pixeläquivalent {{cssxref("&lt;number&gt;")}} in SVG spezifiziert wird, den Standardabweichungswert der Gaußfunktion. Mit anderen Worten, er definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) `s {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte zur Erstellung komplexerer Unschärfewerte. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG `url()` Filterwert kann als Wert des das SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elementes [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) Attributs oder als Teil des Wertes der CSS `filter`- und `backdrop-filter`-Eigenschaften einbezogen werden.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
