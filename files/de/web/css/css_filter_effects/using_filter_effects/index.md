---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Haben Sie jemals über ein Schwarz-Weiß- oder Sepia-Bild geschwebt und das vollfarbige Bild erschien sofort? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, der den Text darüber leserlicher macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte-Modul](/de/docs/Web/CSS/CSS_filter_effects) in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop verwenden oder zusätzliche HTTP-Anfragen senden zu müssen. Die einzige benötigte Software ist der Browser des Benutzers. Zudem sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten responsiv und animierbar.

Das Modul für CSS-Filtereffekte bietet die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}, die Sie verwenden können, um das Rendering von Text, Bildern, Hintergründen und Rändern oder jedem Element, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebung hinzufügen können. Durch die Nutzung der Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch auf einen SVG-Filter verweisen, den Sie erstellen.

## Filtereffekteigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der Eigenschaft {{cssxref("filter")}} können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element, einschließlich dessen Inhalt, Ränder und Auffüllung, angewendet.

- Mit der Eigenschaft {{cssxref("backdrop-filter")}} können Sie grafische Effekte auf den Bereich hinter einem Element anwenden (das "Backdrop" des Elements). Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt leserlicher zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, sonst nicht genügend Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements und nicht auf den Inhalt des Elements angewendet.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions) Funktionen sowie die Möglichkeit, eine fast endlose Reihe von Effekten mithilfe von SVG-Filtern zu definieren, die über eine `url()`-Referenz angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Werttypen, dem minimal gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

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

Der Mindestwert ist für Filterfunktionen enthalten, die einen Mindestwert haben. Das Einschließen eines Werts, der kleiner ist als der Mindestwert für eine Filterfunktion, macht die gesamte Eigenschaftendeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Das Einschließen eines Werts, der größer ist als der angegebene Maximalwert, ist gültig, erhöht jedoch den Effekt nicht über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus, wie wenn der maximale Effektwert eingestellt wird. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwendung_des_sepia-filtereffekts) denselben Effekt wie `sepia(100%)`, der maximale Wert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte bieten einen Anhaltspunkt zwischen dem erlaubten Mindestwert und dem maximalen Effektwert.

## Anwendung von Filtereffekten

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Liste von Filterfunktionen, die einen oder mehrere `<filter-function>`-Bereiche, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()`-Wert enthalten können.

### Anwendung des Sepia-Filtereffekts

Wenn Sie über das unten stehende Sepia-Bild fahren, sehen Sie das vollfarbige Bild sofort ins Blickfeld kommen.

Das Bild wird auf Sepia eingestellt, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tab-Reihenfolge für Tastaturbenutzer zu ändern, weil `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwendung von Filtereffekten auf andere Elemente

Während im Allgemeinen auf Bilder angewendet, können die Eigenschaften `filter` und `backdrop-filter` auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt mithilfe eines [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filters mit einer Unschärfe von `3px` und einem Offset von `0` hinzugefügt.

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

Während das Sepia-`filter`-Beispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter einstellen. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat eine Farbverschiebung und eine Unschärfe angewendet bekommen.

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

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehrmals verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine liniengezeichnete SVG angewendet. Dieselbe SVG, bei der der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Festlegen der Reihenfolge der Filterfunktionen

Bei der Erstellung von Filtereffekten wird der Eigenschaft `filter` oder `backdrop-filter` eine durch Leerzeichen getrennte Liste von Filtern gegeben. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbtonrotation auf die Überschrift der Ebene eins angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlichen Reihenfolgen angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text hinzugefügt und dann der Farbton sowohl des Textes als auch des Schattens verändert.

Für die dritte Zeile wird kein Filtereffekt angewendet, um den Originaleffekt zum Vergleich zu zeigen. Daher bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Der hexadezimale RGB-Farbwert `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht beibehalten wurden.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützt CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet sein kann.

Eine einzelne SVG kann verwendet werden, um mehrere Filter zu definieren, von denen jeder eine `id` hat:

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

Die `id` des Filters wird in der `url()` für sowohl inline als auch externe SVGs referenziert:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild verwischen

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG {{SVGElement("feGaussianBlur")}} Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen bestimmt der Unschärferadiuswert, angegeben als {{cssxref("&lt;length&gt;")}} in CSS und als pixeläquivalentes {{cssxref("&lt;number&gt;")}} in SVG, den Wert der Standardabweichung für die Gaußfunktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander überblenden; ein größerer Wert erzeugt mehr Unschärfe.

Das {{SVGElement("filter")}} {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, wodurch komplexere Unschärfewerte erstellt werden können. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG `url()`-Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elements [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) Attributs oder als Teil des Werts der CSS `filter` und `backdrop-filter` Eigenschaften einbezogen werden.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
