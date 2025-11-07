---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Haben Sie schon einmal über ein Schwarz-Weiß- oder Sepia-Bild gefahren und das vollfarbige Bild erschien sofort? Sind Sie je auf ein Hintergrundbild mit einem kleinen unscharfen Abschnitt gestoßen, der den Text darauf lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filter Effekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anfragen zu senden. Die einzige erforderliche Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul stellt die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} bereit, mit denen Sie die Darstellung von Text, Bildern, Hintergründen und Rahmen oder eines beliebigen Elements, auf das Sie diese Eigenschaften anwenden, beeinflussen können. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, mit dem Sie grafische Effekte wie Unschärfen oder Farbverschiebungen hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Aussehen eines Elements ändern, sondern auch einen SVG-Filter mit einem von Ihnen erstellten Filterreferenzieren.

## Eigenschaften der Filtereffekte

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}}-Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte, Rahmen und des Innenabstands des Elements.

- Mit der {{cssxref("backdrop-filter")}}-Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den „Hintergrund“ des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert wird, ansonsten nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet, nicht auf den Inhalt des Elements.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 Funktionen für [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions) sowie die Möglichkeit, eine fast endlose Reihe von Effekten mit SVG-Filtern zu definieren, die über einen `url()` Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit den Wertetypen, dem minimalen gültigen Wert, dem größten Wert, der einen Effekt erzeugt, und dem Initialwert, der für das {{Glossary("Interpolation", "Interpolieren")}} verwendet wird.

| Filterfunktion                                              | Parametertyp                                                         | Min. Wert | Max. Effekt | Interpolationswert   | Standardwert (kein Effekt)              |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | --------- | ----------- | -------------------- | --------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`       |             | `0`                  | `blur(0)`                               |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       |             | `1`                  | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`       |             | `1`                  | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |           |             | `0 0 0 currentColor` | `drop-shadow(0 0 0 currentColor)`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |           |             | `0`                  | `hue-rotate(0deg)`                      |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                  | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                  | `saturate(100%)`                        |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                  | `sepia(0%)`                             |

Der Mindestwert ist für Filterfunktionen angegeben, die einen Mindestwert haben. Die Angabe eines Wertes kleiner als der Mindestwert für eine der Filterfunktionen macht die gesamte Eigenschaftserklärung ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der Maximalwert kann überschritten werden. Die Angabe eines Wertes größer als der angegebene Maximalwert ist gültig, erhöht jedoch nicht den Effekt über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus wie bei Einstellung des Maximalwertes. Zum Beispiel erzeugt die Einstellung `sepia(400%)` im [Sepia-Beispiel](#anwendung_des_sepia-filtereffekts) den gleichen Effekt wie `sepia(100%)`, der Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und geben ein Beispiel dafür, wie der Wert festgelegt werden kann. Diese Standardwerte bieten eine Messlatte zwischen dem Mindestwert und dem maximalen Effektwert.

## Anwendung von Filtereffekten

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Liste von Filterfunktionen, die eine oder mehrere `<filter-function>`s, das Standardstichwort `none` oder einen [SVG-Filter](#verwenden_von_svg-filtern) als `url()` Wert enthalten kann.

### Anwendung des Sepia-Filtereffekts

Wenn Sie über das Sepia-Bild unten fahren, sehen Sie das vollfarbige Bild sofort erscheinen.

Das Bild wird durch Angabe des Wertes der `filter`-Eigenschaft als [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia) Filterfunktion auf Sepia gesetzt. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) entfernt, indem `filter: none` festgelegt wird.

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

Im {{HTMLElement("img")}} Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus ohne Änderung der Tab-Reihenfolge für Tastaturbenutzer zu ermöglichen, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwendung von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die Eigenschaften `filter` und `backdrop-filter` auf jedes Element oder Pseudoelement angewendet werden.

In diesem Beispiel wird ein Leuchteffekt mit einem [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filter mit einem `3px` Unschärfe und `0` Versatz hinzugefügt.

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

Während das Sepia-Filterbeispiel nur eine einzige Filterfunktion enthielt, können Sie mehrere Filter einstellen. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter —[`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, das Gebiet hinter dem {{HTMLElement("p")}} Element, erhält eine Farbverschiebung und eine Unschärfe.

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

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filter viermal verwendet, jeweils mit einem anderen `<shadow>` Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine Linienzeichnung-SVG angewendet. Das gleiche SVG, bei dem der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Bestimmen der Reihenfolge der Filterfunktionen

Beim Erstellen von Filtereffekten wird der Eigenschaft `filter` oder `backdrop-filter` eine durch Leerzeichen getrennte Liste von Filtern zugewiesen. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbtonrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in verschiedener Reihenfolge angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in einer anderen Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten dem dunkelblauen Text hinzugefügt und dann werden sowohl der Farbton des Textes als auch der Schatten verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt zum Vergleich zu zeigen. So bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/Reference/Values/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, jedoch nicht die gleichen Werte für Sättigung und Helligkeit beibehält.

## Verwenden von SVG-Filtern

Neben den 10 definierten {{cssxref("filter-function")}}s, unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) sein kann, der in einer internen oder externen SVG-Datei eingebettet ist.

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

Genau wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die anwendet, auf die sie angewendet wird, kann auch das SVG-Element {{SVGElement("feGaussianBlur")}} verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadius-Wert, der als {{cssxref("&lt;length&gt;")}} in CSS und als Pixel-äquivalentes {{cssxref("&lt;number&gt;")}} in SVG angegeben wird, den Wert der Standardabweichung zur Gauß-Funktion. Mit anderen Worten, er definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander überblenden; ein größerer Wert erzeugt mehr Unschärfe.

Das Attribut {{SVGAttr("stdDeviation")}} des [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) akzeptiert bis zu zwei Werte, die die Erstellung komplexerer Unschärfewerter ermöglichen. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

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

Der SVG-`url()`-Filterwert kann als Wert des Attributs [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) des SVG [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elements oder als Teil des Werts der CSS-`filter`- und `backdrop-filter`-Eigenschaften enthalten sein.

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
- [CSS Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
