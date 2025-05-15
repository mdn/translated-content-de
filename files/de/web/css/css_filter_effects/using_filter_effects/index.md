---
title: Verwenden von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: c05ef6211441aedb359d4020518ac152aa92db9e
---

{{CSSRef}}

Haben Sie jemals über ein Schwarz-Weiß- oder Sepia-Bild geschwebt und plötzlich erschien das Vollfarbbild? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, der den darüberliegenden Text lesbarer macht? Diese Manipulationen erforderten früher Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filter effects](/de/docs/Web/CSS/CSS_filter_effects)-Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anfragen zu senden. Die einzige erforderliche Software ist der Browser des Benutzers. Außerdem sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffektmodul stellt die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} bereit, die Sie verwenden können, um die Darstellung von Text, Bildern, Hintergründen und Rahmen oder eines beliebigen Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, der es Ihnen ermöglicht, grafische Effekte wie Verwischen oder Farbverschiebung hinzuzufügen. Mit den Filterfunktionen können Sie nicht nur das Aussehen eines Elements verändern, sondern auch einen SVG-Filter verwenden, den Sie erstellen.

## Filtereffekteigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffektmoduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der Eigenschaft {{cssxref("filter")}} können Sie Filtereffekte wie Weichzeichnen, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte des Elements, der Rahmen und der Polsterung.

- Mit der Eigenschaft {{cssxref("backdrop-filter")}} können Sie grafische Effekte auf den Bereich hinter einem Element (das "Backdrop" des Elements) anwenden. Die Eigenschaft `backdrop-filter` wird häufig verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf den Inhalt des Elements.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffektmodul bietet 10 Funktionen für [`<filter-function>`](/de/docs/Web/CSS/filter#functions) sowie die Möglichkeit, eine nahezu endlose Reihe von Effekten mithilfe von SVG-Filtern zu definieren, die über einen `url()`-Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Werttypen, dem minimalen gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

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

Der minimale erlaubte Wert ist für Filterfunktionen angegeben, die einen Minimalwert haben. Wenn Sie einen Wert kleiner als der Minimalwert für eine Filterfunktion angeben, wird die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Kommas getrennten Liste.

Der maximale Effektwert kann überschritten werden. Das Angeben eines Wertes größer als der angegebene Höchstwert ist gültig, aber es erhöht den Effekt nicht über den gelisteten maximalen Wert hinaus. Mit anderen Worten, der Effekt auf das Element wird genauso aussehen, wie wenn der maximale Effektwert gesetzt ist. Zum Beispiel wird das Setzen von `sepia(400%)` im [sepia Beispiel](#anwenden_des_sepia-filtereffekts) denselben Effekt wie `sepia(100%)` erzielen, dem Höchstwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte bieten eine Messlatte zwischen dem minimal erlaubten Wert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Liste von Filterfunktionen, die einen oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwendung_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwenden des Sepia-Filtereffekts

Wenn Sie über das Sepia-Bild unten schweben, sehen Sie, dass das Vollfarbbild sofort sichtbar wird.

Das Bild ist so eingestellt, dass es sepia ist, indem der Wert der Eigenschaft `filter` als [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) durch das Setzen von `filter: none` entfernt.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus ohne Änderung der Tabulatorreihenfolge für Tastaturbenutzer zu ermöglichen, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl sie generell auf Bilder angewendet werden, können die Eigenschaften `filter` und `backdrop-filter` auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird mit einem [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter mit `3px` Unschärfe und `0` Versatz ein Glüh-Effekt hinzugefügt.

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

Das Sepia-`filter`-Beispiel enthielt nur eine einzelne Filterfunktion, Sie können jedoch mehrere Filter festlegen. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter an — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die Eigenschaft `backdrop-filter`. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat eine Farbverschiebung und Unschärfe.

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

Da Filter in sequentieller Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein zeichengezeichnetes SVG angewendet. Dasselbe SVG, mit dem Filter, der mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Angeben der Filterfunktionsreihenfolge

Beim Erstellen von Filtereffekten erhält die Eigenschaft `filter` oder `backdrop-filter` eine durch Leerzeichen getrennte Liste von Filtern. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbrotation auf die Überschrift der ersten Ebene angewandt. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Dieselben Filter werden auf beide Textzeilen angewandt, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten dem dunkelblauen Text hinzugefügt und dann wird der Farbton von sowohl Text als auch Schatten verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt als Vergleich zu zeigen. Daher bleibt die dritte Zeile als `midnightblue` oder `#191970`. Der `hue-rotate(180deg)`-Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale rgb-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation findet im sRGB-Farbraum statt](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht beibehalten wurden.

## Verwendung von SVG-Filtern

Neben den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) sein kann, der in einer internen oder externen SVG-Datei eingebettet ist.

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

Die `id` des Filters wird im `url()` für sowohl Inline- als auch externe SVGs referenziert:

```css
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Ein Bild verschwimmen lassen

Genau wie die {{cssxref("filter-function/blur", "blur()")}}-Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann auch das SVG-{{SVGElement("feGaussianBlur")}}-Filterelement verwendet werden, um Inhalte weich zu zeichnen.

In beiden Fällen definiert der Weichzeichnungsradiuswert, der in CSS als {{cssxref("&lt;length&gt;")}} und in SVG als {{cssxref("&lt;number&gt;")}} im Pixeläquivalent angegeben wird, den Standardabweichungswert der Gaußschen Funktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das {{SVGAttr("stdDeviation")}}-Attribut des [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter) akzeptiert bis zu zwei Werte, die komplexere Unschärfewerte ermöglichen. Um eine äquivalente Unschärfe zu erzeugen, fügen wir einen Wert für `stdDeviation` ein:

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

Der SVG-`url()`-Filterwert kann entweder als Wert des SVG-Element-Attributs [`<image>`](/de/docs/Web/SVG/Reference/Element/image) [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter) oder als Teil des Wertes der CSS-Eigenschaften `filter` und `backdrop-filter` aufgenommen werden.

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
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
