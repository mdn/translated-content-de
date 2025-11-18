---
title: Verwenden von Filtereffekten
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Haben Sie jemals über ein Schwarz-Weiß- oder Sepia-Bild geschwebt und das vollfarbige Bild erschien sofort? Haben Sie jemals ein Hintergrundbild mit einem kleinen verschwommenen Bereich gesehen, das den Text darüber lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filter Effects](/de/docs/Web/CSS/Guides/Filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop verwenden oder zusätzliche HTTP-Anfragen senden zu müssen. Die einzige erforderliche Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul stellt die {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften bereit, die Sie verwenden können, um die Darstellung von Text, Bildern, Hintergründen und Rändern oder jedem Element zu beeinflussen, auf das Sie diese Eigenschaften anwenden. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebung hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch auf einen SVG-Filter verweisen, den Sie erstellen.

## Filtereffekteigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}} Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor es gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich des Inhalts, der Ränder und des Abstands des Elements.

- Mit der {{cssxref("backdrop-filter")}} Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (das "Backdrop" des Elements) anwenden. Die `backdrop-filter` Eigenschaft wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genügend Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet, nicht auf den Inhalt des Elements.

Die `filter` und `backdrop-filter` Eigenschaften nehmen eine durch Leerzeichen getrennte Liste von Filtern an, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions) Funktionen sowie die Möglichkeit, fast endlose Effekte durch SVG-Filter zu definieren, die über einen `url()` Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen mit ihren Wertetypen, dem minimal gültigen Wert, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für {{Glossary("Interpolation", "Interpolation")}} verwendet wird, auf.

| Filterfunktion                                              | Parametertyp                                                         | Min Wert | Max Effekt | Standardwert (kein Effekt) |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | -------- | ---------- | -------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `0`                        |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      |            | `1` oder `100%`            |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`      |            | `1` oder `100%`            |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |          |            | `0 0 0 currentColor`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0` oder `0%`              |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |          |            | `0deg`                     |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0` oder `0%`              |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `1` oder `100%`            |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `100%`                     |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`      | `100%`     | `0%`                       |

Der minimale Wert wird für Filterfunktionen angegeben, die einen minimalen Wert haben. Wenn ein Wert niedriger als der Mindestwert für eine Filterfunktion angegeben wird, wird die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der kommagetrennten Liste.

Der maximale Effektwert kann überschritten werden. Das Einfügen eines Wertes, der größer ist als der angegebene Höchstwert, ist gültig, erhöht jedoch nicht den Effekt über den angegebenen Höchstwert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus, als wenn der maximale Effektwert eingestellt ist. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwenden_des_sepia-filtereffekts) denselben Effekt wie `sepia(100%)`, der maximale Wert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, stellen sie die anfänglichen Interpolationswerte bereit und bieten ein Beispiel dafür, wie der Wert festgelegt werden kann. Diese Standardwerte bieten eine Messlatte zwischen dem erlaubten Mindestwert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine Liste mit Filterfunktionen, die einen oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()` Wert enthalten kann.

### Anwenden des Sepia-Filtereffekts

Wenn Sie über das Sepiabild unten schweben, wird das vollfarbige Bild sofort sichtbar.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter` Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird beim [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}} Element wird [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um die Fokussierung ohne Ändern der Tabulatorreihenfolge für Tastaturbenutzer zu ermöglichen, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die `filter` und `backdrop-filter` Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt unter Verwendung eines [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filters mit einer `3px` Unschärfe und `0` Versetzung hinzugefügt.

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

Während das Sepia `filter` Beispiel nur eine einzige Filterfunktion enthielt, können Sie mehrere Filter einstellen. Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter an — [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur) — über die `backdrop-filter` Eigenschaft. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} Element, hat eine Farbverschiebung und eine Unschärfe angewendet.

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

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wird der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>` Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine liniengezeichnete SVG angewendet. Die gleiche SVG, mit dem Filter `filter: none` entfernt, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Spezifizieren der Reihenfolge von Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter` oder `backdrop-filter` Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern zur Verfügung gestellt. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl ein `magenta` Schlagschatten als auch eine `180deg` Farbtondrehung auf die Überschrift ersten Grades angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird zuerst der Farbton des Texts verändert, bevor der Schatten aufgetragen wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text aufgetragen und dann der Farbton von sowohl Text als auch Schatten verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den Originaleffekt im Vergleich zu zeigen. So bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale rgb-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/Reference/Values/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht beibehalten werden.

## Verwenden von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) ist, der in einer internen oder externen SVG-Datei eingebettet sein kann.

Ein einzelnes SVG kann dazu verwendet werden, mehrere Filter zu definieren, von denen jeder eine `id` hat:

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

Die `id` des Filters wird im `url()` für sowohl inline als auch externe SVGs referenziert:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Eine Bildverwirrung

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die darauf angewendeten Elemente anwendet, kann auch das SVG {{SVGElement("feGaussianBlur")}} Filterelement zum Verwirren von Inhalten verwendet werden.

In beiden Fällen definiert der Unschärferadiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als pixelequivalenter {{cssxref("&lt;number&gt;")}} in SVG angegeben ist, den Wert der Standardabweichung der Gaußschen Funktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander verschwimmen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, die die Erstellung komplexerer Unschärfewerte ermöglichen. Um eine äquivalente Unschärfe zu erstellen, fügen wir einen Wert für `stdDeviation` ein:

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

Der SVG `url()` Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elements [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) Attribut oder als Teil des Werts der CSS `filter` und `backdrop-filter` Eigenschaften eingeschlossen werden.

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
