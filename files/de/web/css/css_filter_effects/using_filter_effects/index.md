---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Haben Sie jemals über ein schwarz-weißes oder sepiafarbenes Bild geschwebt, und das vollfarbige Bild kam sofort zum Vorschein? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, das den darüberliegenden Text lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop oder zusätzliche HTTP-Anfragen zu verwenden. Die einzige benötigte Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten responsiv und animierbar.

Das CSS-Filtereffekte-Modul bietet die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}, die Sie verwenden können, um die Darstellung von Text, Bildern, Hintergründen und Rahmen oder jedes Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, mit dem Sie grafische Effekte wie Weichzeichner oder Farbverschiebungen hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Aussehen eines Elements verändern, sondern auch einen SVG-Filter unter Verwendung eines von Ihnen erstellten Filters referenzieren.

## Filtereffekteigenschaften

Die folgenden beiden Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, einem Element null, einen oder mehrere grafische Effekte zuzuweisen:

- Mit der {{cssxref("filter")}}-Eigenschaft können Sie Filtereffekte wie Weichzeichner, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte, Rahmen und des Abstands des Elements.

- Mit der {{cssxref("backdrop-filter")}}-Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet, nicht auf den Inhalt des Elements.

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/filter#functions)-Funktionen sowie die Möglichkeit, eine nahezu endlose Reihe von Effekten unter Verwendung von SVG-Filtern mit einer `url()`-Referenz zu definieren.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Wertetypen, dem minimalen gültigen Wert, wenn anwendbar, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min-Wert | Max-Effekt | Interpolationswert   | Standardwert (kein Effekt)              |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ---------- | -------------------- | --------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `0`                  | `blur(0)`                               |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      |            | `1`                  | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `1`                  | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |          |            | `0 0 0 currentcolor` | `drop-shadow(0 0 0 currentcolor)`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |          |            | `0`                  | `hue-rotate(0deg)`                      |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1`                  | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1`                  | `saturate(100%)`                        |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0`                  | `sepia(0%)`                             |

Der Mindestwert für Filterfunktionen, die einen Mindestwert haben, ist enthalten. Ein kleinerer Wert als der Mindestwert für eine Filterfunktion macht die gesamte Eigenschaften-Deklaration ungültig, nicht nur die störende Filterfunktion in der mit Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Ein größerer Wert als der angegebene Maximalwert ist gültig, erhöht jedoch den Effekt über den angegebenen Maximalwert hinaus nicht. Mit anderen Worten, der Effekt auf das Element sieht genauso aus wie bei Einstellung des maximalen Effektwerts. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwenden_eines_sepia-filtereffekts) denselben Effekt wie `sepia(100%)`, der Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, bieten sie die initialen Interpolationswerte und ein Beispiel dafür, wie der Wert festgelegt werden kann. Diese Standardwerte dienen als Maßstab zwischen dem zulässigen Mindestwert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine Filterfunktionsliste, die eine oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwenden eines Sepia-Filtereffekts

Wenn Sie über das sepiafarbene Bild unten schweben, wird das vollfarbige Bild sofort sichtbar.

Das Bild wird sepia, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/filter-function/sepia)-Filterfunktion angegeben wird. Der Filter wird auf [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um Fokus zu ermöglichen, ohne die Tabulatordreihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl normalerweise auf Bilder angewendet, können die `filter`- und `backdrop-filter`-Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt hinzugefügt, indem ein [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow)-Filter mit einem `3px` Weichzeichnen und `0` Versatz verwendet wird.

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

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat eine Farbverschiebung und eine Unschärfe.

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

### Anwenden wiederholter Filter

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow)-Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine zeichnungsbasierte SVG angewendet. Dieselbe SVG, bei der der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Festlegen der Filterfunktionsreihenfolge

Beim Erstellen von Filtereffekten erhält die `filter`- oder `backdrop-filter`-Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta`-Schlagschatten als auch `180deg`-Farbtondrehung auf die Überschrift der Ebene eins angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes geändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text angewendet, und dann wird der Farbton sowohl des Textes als auch des Schattens geändert.

Keine Filtereffekte werden auf die dritte Zeile angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. Die dritte Zeile bleibt daher als `midnightblue` oder `#191970`. Der `hue-rotate(180deg)`-Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, jedoch nicht mit denselben Werten für Sättigung und Helligkeit beibehalten wurde.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützt CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet werden kann.

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

Die `id` des Filters wird in der `url()` sowohl für eingebettete als auch externe SVGs referenziert:

```css
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Unschärfe eines Bildes

Genauso wie die {{cssxref("filter-function/blur", "blur()")}}-Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG-{{SVGElement("feGaussianBlur")}}-Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Weichzeichnungsradiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als Pixeläquivalent {{cssxref("&lt;number&gt;")}} in SVG angegeben wird, den Wert der Standardabweichung für die Gaußsche Funktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter)-Attribut {{SVGAttr("stdDeviation")}} akzeptiert bis zu zwei Werte, was komplexere Unschärfe-Werte ermöglicht. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG-`url()`-Filterwert kann als Wert des SVG-[`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elementattributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) oder als Teil des Wertes der CSS-`filter`- und `backdrop-filter`-Eigenschaften eingeschlossen werden.

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
- SVG-{{SVGElement("filter")}}-Element, SVG-{{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
