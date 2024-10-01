---
title: Verwendung von Filtereffekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Haben Sie schon einmal über ein schwarz-weißes oder sepiafarbenes Bild geschwebt und das farbenfrohe Bild erschien sofort? Sind Sie jemals auf ein Hintergrundbild gestoßen, das einen leicht unscharfen Abschnitt hat, der den darüber liegenden Text besser lesbar macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anfragen zu senden. Die einzige erforderliche Software ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul stellt die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} bereit, die Sie verwenden können, um das Rendering von Text, Bildern, Hintergründen und Rahmen oder jedes Elements, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den Datentyp {{cssxref("&lt;filter-function&gt;")}}, mit dem Sie grafische Effekte wie Unschärfe oder Farbanpassung hinzufügen können. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements verändern, sondern auch auf einen SVG-Filter verweisen, indem Sie einen von Ihnen erstellten Filter verwenden.

## Eigenschaften der Filtereffekte

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}} Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich des Inhalts, der Ränder und der Auffüllung des Elements.

- Mit der {{cssxref("backdrop-filter")}} Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (dem „Hintergrund“ des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird häufig verwendet, um den Vordergrundinhalt besser lesbar zu machen, insbesondere wenn der größere Bereich, auf dem sich der Inhalt befindet, ansonsten nicht genügend Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet, nicht auf den Inhalt des Elements.

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/filter#functions)-Funktionen sowie die Möglichkeit, eine nahezu endlose Reihe von Effekten mithilfe von SVG-Filtern zu definieren, die über einen `url()`-Verweis angewendet werden.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Werttypen, dem minimal gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

| Filterfunktion                                              | Parameter-Typ                                                        | Mindestwert | Max-Effekt | Interpolationswert   | Standardwert (kein Effekt)              |
| ----------------------------------------------------------- | -------------------------------------------------------------------- | ----------- | ---------- | -------------------- | --------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                        | `0`         |            | `0`                  | `blur(0)`                               |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         |            | `1`                  | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                        | `0`         |            | `1`                  | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                           |             |            | `0 0 0 currentcolor` | `drop-shadow(0 0 0 currentcolor)`       |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`     | `0`                  | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                         |             |            | `0`                  | `hue-rotate(0deg)`                      |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`     | `0`                  | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`     | `1`                  | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`     | `1`                  | `saturate(100%)`                        |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`         | `100%`     | `0`                  | `sepia(0%)`                             |

Der erlaubte Mindestwert ist für Filterfunktionen angegeben, die einen Mindestwert haben. Wenn ein Wert unterhalb des Mindestwerts für eine beliebige Filterfunktion angegeben wird, wird die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der durch Komma getrennten Liste.

Der maximale Effektwert kann überschritten werden. Wenn ein Wert größer als der angegebene Maximalwert enthalten ist, ist dies gültig, erhöht jedoch nicht den Effekt über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element wird gleich aussehen wie bei Einstellung des maximalen Effektwerts. Zum Beispiel erzeugt `sepia(400%)` im [Sepia-Beispiel](#anwenden_des_sepia-filtereffekts) den gleichen Effekt wie `sepia(100%)`, dem Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, bieten sie die anfänglichen Interpolationswerte und ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte geben eine Messlatte zwischen dem erlaubten Mindestwert und dem maximalen Effektwert an.

## Anwenden von Filtereffekten

Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine Filterfunktionsliste, die eine oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwendung_von_svg-filtern) als `url()` Wert enthalten kann.

### Anwenden des Sepia-Filtereffekts

Wenn Sie über das folgende Sepia-Bild schweben, wird das farbenfrohe Bild sofort angezeigt.

Das Bild wird auf Sepia eingestellt, indem der Wert der `filter` Eigenschaft als [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}} Element ist [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tab-Reihenfolge für Tastaturnutzer zu verändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 300)}}

### Anwenden von Filtereffekten auf andere Elemente

Während sie im Allgemeinen auf Bilder angewendet werden, können die `filter`- und `backdrop-filter`-Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt hinzugefügt, indem ein [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter mit einem `3px` Unschärfe und `0` Versatz verwendet wird.

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

Während das Sepia `filter`-Beispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter einstellen. Die `filter` und `backdrop-filter` Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter` Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} Element, hat eine Farbverschiebung und eine Unschärfe appliziert.

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

{{EmbedLiveSample('Applying_multiple_filters','100%','280')}}

### Anwenden wiederholter Filter

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehrmals verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter vier Mal angewandt, jedes Mal mit einem anderen `<shadow>` Wert.

```html
<img src="mandala.svg" alt="Colorful mandala" role="img" />
<img src="mandala.svg" alt="Plain mandala" role="img" />
```

```css hidden
img {
  width: 49%;
}
```

```css nolint
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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf eine liniengezeichnete SVG angewendet. Die gleiche SVG, bei der der Filter mit `filter: none` entfernt wird, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Spezifizierung der Filterfunktionsreihenfolge

Beim Erstellen von Filtereffekten wird der `filter` oder `backdrop-filter` Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern bereitgestellt. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl ein `magenta` Schlagschatten als auch eine `180deg` Farbrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlichen Reihenfolgen angewendet werden.

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

Die gleichen Filter werden auf beide Textzeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes verändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text hinzugefügt, und dann wird der Farbton sowohl des Textes als auch des Schattens verändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den ursprünglichen Effekt im Vergleich zu zeigen. Daher bleibt die dritte Zeile `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter verändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Der hexadezimale rgb-Farbwert `#191970` entspricht `hsl(240deg 63,5% 26,9%)`, während `#252500` `hsl(60deg 100% 7,3%)` ist. Die [Farbrotation findet im sRGB-Farbraum statt](/de/docs/Web/CSS/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, während die Werte für Sättigung und Helligkeit nicht beibehalten werden.

## Verwendung von SVG-Filtern

Neben den 10 definierten {{cssxref("filter-function")}}s unterstützt die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Element/filter) ist, der in eine interne oder externe SVG-Datei eingebettet sein kann.

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

Die `id` des Filters wird in der `url()` sowohl für Inline- als auch externe SVGs referenziert:

```css
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Unscharf machen eines Bildes

Ähnlich wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG {{SVGElement("feGaussianBlur")}} Filterelement auch verwendet werden, um Inhalte unscharf zu machen.

In beiden Fällen gibt der Unschärferadius, der in CSS als {{cssxref("&lt;length&gt;")}} und in SVG als pixelläquivalenter {{cssxref("&lt;number&gt;")}} angegeben wird, den Wert der Standardabweichung zur Gaußschen Funktion an. Mit anderen Worten, er definiert die Anzahl von Pixeln auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Element/filter)'s {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, die die Erstellung komplexerer Unschärfewerte ermöglichen. Um eine gleichwertige Unschärfe zu erzeugen, fügen wir einen Wert für `stdDeviation` ein:

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

Der SVG `url()` Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Element/image) Elements' [`filter`](/de/docs/Web/SVG/Attribute/filter) Attributs oder als Teil des Werts der CSS `filter` und `backdrop-filter` Eigenschaften enthalten sein.

```css
.filter {
  filter: blur(3.5px);
}
.svgFilter {
  filter: url(#blur);
}
```

{{EmbedLiveSample('blur_example','100%','280')}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
