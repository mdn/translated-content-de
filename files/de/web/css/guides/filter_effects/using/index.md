---
title: Verwendung von Filtereffekten
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Haben Sie jemals einen Schwarz-Weiß- oder Sepiabild angeklickt, und das Vollfarbbild erschien sofort? Sind Sie jemals auf ein Hintergrundbild mit einem kleinen unscharfen Abschnitt gestoßen, der den Text darüber lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anfragen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul in CSS bietet Eigenschaften und Funktionen, die es ermöglichen, die oben beschriebenen visuellen Effekte anzuwenden, ohne Photoshop oder zusätzliche HTTP-Anfragen nutzen zu müssen. Die erforderliche Software ist lediglich der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul stellt die {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften bereit, die Sie verwenden können, um die Darstellung von Text, Bildern, Hintergründen und Rändern oder jedem Element, auf das Sie diese Eigenschaften anwenden, zu beeinflussen. Dieses Modul definiert auch den {{cssxref("&lt;filter-function&gt;")}} Datentyp, der es ermöglicht, grafische Effekte wie Weichzeichnen oder Farbverschiebung hinzuzufügen. Mit den Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements verändern, sondern auch einen SVG-Filter über einen selbst erstellten Filter referenzieren.

## Filtereffekt-Eigenschaften

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, einem Element null, einen oder mehrere grafische Effekte hinzuzufügen:

- Mit der {{cssxref("filter")}}-Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte des Elements, Rand und Füllung.

- Mit der {{cssxref("backdrop-filter")}}-Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den "Hintergrund" des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird oft verwendet, um den Vordergrundinhalt lesbarer zu machen, insbesondere wenn der größere Bereich, auf dem der Inhalt platziert ist, sonst nicht genug Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements angewendet und nicht auf den Inhalt des Elements.

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/Reference/Properties/filter#functions) Funktionen sowie die Möglichkeit, eine fast endlose Reihe von Effekten unter Verwendung von SVG-Filtern, die über einen `url()`-Verweis angewendet werden, zu definieren.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Werttypen, dem minimal gültigen Wert, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für die {{Glossary("Interpolation", "Interpolation")}} verwendet wird.

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

Der Mindestwert, der erlaubt ist, wird für Filterfunktionen angegeben, die einen Mindestwert haben. Ein Wert, der unter dem Mindestwert liegt, führt zur Ungültigkeit der gesamten Eigenschaftsdeklaration, nicht nur der betreffenden Filterfunktion in der durch Komma getrennten Liste.

Der maximale Effektwert kann überschritten werden. Ein Wert größer als der angegebene Maximalwert ist gültig, erhöht den Effekt jedoch nicht über den maximalen Wert hinaus. Mit anderen Worten, der Effekt auf das Element sieht genauso aus, als wenn der maximale Effektwert eingestellt ist. Beispielsweise ergibt `sepia(400%)` im [Sepia-Beispiel](#anwendung_des_sepia-filtereffekts) denselben Effekt wie `sepia(100%)`, der Maximalwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Während diese Werte keinen Effekt erzeugen, stellen sie die anfänglichen Interpolationswerte bereit und bieten ein Beispiel, wie der Wert eingestellt werden kann. Diese Standardwerte bieten einen Maßstab zwischen dem zulässigen Mindestwert und dem maximalen Effektwert.

## Anwendung von Filtereffekten

Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine Liste von Filterfunktionen, die einen oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwendung_von_svg-filtern) als `url()`-Wert enthalten können.

### Anwendung des Sepia-Filtereffekts

Wenn Sie über das Sepiabild unten fahren, wird das Vollfarbbild sofort sichtbar.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter`-Eigenschaft als die [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) entfernt, indem `filter: none` gesetzt wird.

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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tab-Reihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 550)}}

### Anwendung von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewendet werden, können die `filter`- und `backdrop-filter`-Eigenschaften auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt mithilfe eines [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filters mit `3px` Unschärfe und `0` Versatz hinzugefügt.

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

Während das Sepia-Filter-Beispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter festlegen. Die `filter`- und `backdrop-filter`-Eigenschaften akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}} -Element, hat eine Farbverschiebung und eine Unschärfe.

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

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehrmals verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>`-Wert.

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

Im ersten Mandala-Beispiel werden einem liniengezogenen SVG vier Schlagschatten hinzugefügt. Dasselbe SVG, bei dem der Filter mit `filter: none` entfernt wurde, ist zum Vergleich enthalten.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Festlegen der Reihenfolge von Filterfunktionen

Beim Erstellen von Filtereffekten wird der `filter`- oder `backdrop-filter`-Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern zugewiesen. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta`-Schlagschatten als auch `180deg`-Farbrotation auf die Überschrift der ersten Ebene angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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

Die gleichen Filter werden auf beide Zeilen angewendet, jedoch in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Texts geändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten zum dunkelblauen Text hinzugefügt, und dann wird der Farbton sowohl des Texts als auch des Schattens geändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den Originaleffekt zum Vergleich zu zeigen. Somit bleibt die dritte Zeile als `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen zu `#252500`.

> [!NOTE]
> Die hexadezimale RGB-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` gleich `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/Reference/Values/color_value#interpolation), weshalb der Farbton wie erwartet geändert wurde, jedoch ohne die gleichen Werte für Sättigung und Helligkeit beizubehalten.

## Verwendung von SVG-Filtern

Zusätzlich zu den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()` mit dem Parameter, wobei es sich um einen [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter) handeln kann, der in einer internen oder externen SVG-Datei eingebettet ist.

Ein einzelnes SVG kann verwendet werden, um mehrere Filter zu definieren, wobei jeder eine `id` hat:

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

### Unschärfe eines Bildes

Genauso wie die {{cssxref("filter-function/blur", "blur()")}} Filterfunktion einen Gaußschen Weichzeichner auf die angewendeten Elemente anwendet, kann das SVG-{{SVGElement("feGaussianBlur")}}-Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, der als {{cssxref("&lt;length&gt;")}} in CSS und als Pixeläquivalent {{cssxref("&lt;number&gt;")}} in SVG angegeben wird, den Wert der Standardabweichung der Gaußschen Funktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Reference/Element/filter)'s {{SVGAttr("stdDeviation")}} Attribut akzeptiert bis zu zwei Werte, die es ermöglichen, komplexere Unschärfewerte zu erstellen. Um eine äquivalente Unschärfe zu erzeugen, verwenden wir einen Wert für `stdDeviation`:

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

Der SVG-`url()`-Filterwert kann als Wert des SVG-[`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elements [`filter`](/de/docs/Web/SVG/Reference/Attribute/filter)-Attributs oder als Teil des Wertes der CSS-`filter`- und `backdrop-filter`-Eigenschaften aufgenommen werden.

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
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
