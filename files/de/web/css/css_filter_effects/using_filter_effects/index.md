---
title: Verwenden von Filter-Effekten
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Haben Sie jemals über ein Schwarz-Weiß- oder Sepia-Bild geschwebt und das vollständige Farbbild erschien sofort? Haben Sie jemals ein Hintergrundbild mit einem kleinen unscharfen Bereich gesehen, der den darüber liegenden Text lesbarer macht? In der Vergangenheit erforderten diese Manipulationen Bildbearbeitungssoftware, Zeit und zusätzliche HTTP-Anforderungen.

## Vorteile der Verwendung von CSS-Filtereffekten

Das [Filtereffekte-Modul](/de/docs/Web/CSS/CSS_filter_effects) in CSS bietet Eigenschaften und Funktionen, mit denen Sie die oben beschriebenen visuellen Effekte anwenden können, ohne Photoshop zu verwenden oder zusätzliche HTTP-Anforderungen zu senden. Die einzige Software, die benötigt wird, ist der Browser des Benutzers. Darüber hinaus sind CSS-Filtereffekte im Gegensatz zu voreingestellten Bildeffekten reaktionsfähig und animierbar.

Das CSS-Filtereffekte-Modul bietet die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}, die Sie verwenden können, um das Rendering von Texten, Bildern, Hintergründen und Rahmen oder jedem Element zu beeinflussen, auf das Sie diese Eigenschaften anwenden. Dieses Modul definiert auch den {{cssxref("&lt;filter-function&gt;")}} Datentyp, mit dem Sie grafische Effekte wie Unschärfe oder Farbverschiebung hinzufügen können. Durch die Verwendung der Filterfunktionen können Sie nicht nur das Erscheinungsbild eines Elements ändern, sondern auch einen SVG-Filter mit einem von Ihnen erstellten Filter referenzieren.

## Eigenschaften von Filtereffekten

Die folgenden zwei Filtereigenschaften des CSS-Filtereffekte-Moduls ermöglichen es Ihnen, null, einen oder mehrere grafische Effekte auf ein Element anzuwenden:

- Mit der {{cssxref("filter")}}-Eigenschaft können Sie Filtereffekte wie Unschärfe, Schlagschatten und Sepia auf ein Element anwenden, bevor das Element gerendert wird. Die Filtereffekte werden direkt auf das Element angewendet, einschließlich der Inhalte des Elements, der Rahmen und der Polsterung.

- Mit der {{cssxref("backdrop-filter")}}-Eigenschaft können Sie grafische Effekte auf den Bereich hinter einem Element (den „Hintergrund“ des Elements) anwenden. Die `backdrop-filter`-Eigenschaft wird oft verwendet, um den Vordergrundinhalt lesbarer zu machen, besonders wenn der größere Bereich, auf dem der Inhalt platziert ist, ansonsten nicht genügend Kontrast für den Inhalt bietet. Die Filtereffekte werden nur auf den Hintergrund des Elements und nicht auf den Inhalt des Elements angewendet.

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

## Filterfunktionen

Das CSS-Filtereffekte-Modul bietet 10 [`<filter-function>`](/de/docs/Web/CSS/filter#functions) Funktionen sowie die Möglichkeit, eine nahezu unbegrenzte Reihe von Effekten mithilfe von über eine `url()`-Referenz angewendeten SVG-Filtern zu definieren.

Die folgende Tabelle listet die 10 Filterfunktionen auf, zusammen mit ihren Wertetypen, dem minimalen gültigen Wert, falls zutreffend, dem größten Wert, der einen Effekt erzeugt, und dem Anfangswert, der für [Interpolation](/de/docs/Glossary/Interpolation) verwendet wird.

| Filterfunktion                                              | Parametertyp                                                      | Min. Wert | Max. Effekt | Interpolationswert     | Standardwert (kein Effekt)            |
| ----------------------------------------------------------- | ----------------------------------------------------------------- | --------- | ----------- | ---------------------- | ------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                      | `0`       |             | `0`                    | `blur(0)`                             |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       |             | `1`                    | `brightness(1)` oder `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                      | `0`       |             | `1`                    | `contrast(1)` oder `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                        |           |             | `0 0 0 currentcolor`   | `drop-shadow(0 0 0 currentcolor)`     |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                    | `grayscale(0)` oder `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                       |           |             | `0`                    | `hue-rotate(0deg)`                    |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                    | `invert(0)` oder `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                    | `opacity(1)` oder `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `1`                    | `saturate(100%)`                      |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} | `0`       | `100%`      | `0`                    | `sepia(0%)`                           |

Der minimale zulässige Wert wird für Filterfunktionen angegeben, die einen Mindestwert haben. Wenn ein Wert kleiner als der Mindestwert für eine beliebige Filterfunktion angegeben wird, wird die gesamte Eigenschaftsdeklaration ungültig, nicht nur die fehlerhafte Filterfunktion in der kommagetrennten Liste.

Der maximale Effektwert kann überschritten werden. Die Angabe eines Wertes, der größer ist als der angegebene Maximalwert, ist gültig, erhöht den Effekt jedoch nicht über den angegebenen Maximalwert hinaus. Mit anderen Worten, der Effekt auf das Element sieht so aus, wie wenn der maximale Effektwert festgelegt wäre. Zum Beispiel erzeugt das Setzen von `sepia(400%)` im [Sepia-Beispiel](#anwenden_eines_sepia-filter-effekts) denselben Effekt wie `sepia(100%)`, der Höchstwert.

Der Standardwert ist ein Wert, der keinen Effekt erzeugt. Obwohl diese Werte keinen Effekt erzeugen, liefern sie die anfänglichen Interpolationswerte und bieten ein Beispiel dafür, wie der Wert gesetzt werden kann. Diese Standardwerte bieten einen Anhaltspunkt zwischen dem minimal zulässigen Wert und dem maximalen Effektwert.

## Anwenden von Filtereffekten

Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine Filter-Funktionsliste, die einen oder mehrere `<filter-function>`s, das Standard-Schlüsselwort `none` oder einen [SVG-Filter](#verwendung_von_svg-filtern) als `url()`-Wert enthalten kann.

### Anwenden eines Sepia-Filter-Effekts

Wenn Sie über das Sepia-Bild unten schweben, wird das vollständige Farbbild sofort angezeigt.

Das Bild wird auf Sepia gesetzt, indem der Wert der `filter`-Eigenschaft als [`sepia()`](/de/docs/Web/CSS/filter-function/sepia) Filterfunktion angegeben wird. Der Filter wird bei [`:hover`](/de/docs/Web/CSS/:hover) und [`:focus`](/de/docs/Web/CSS/:focus) entfernt, indem `filter: none` gesetzt wird.

```html
<img tabindex="0" alt="Vier trans-Personen, etwa 1912" src="activists.jpg" />
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

Im {{HTMLElement("img")}}-Element ist [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) auf `0` gesetzt, um den Fokus zu ermöglichen, ohne die Tab-Reihenfolge für Tastaturnutzer zu ändern, da `<img>` kein interaktives Element ist.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 300)}}

### Anwenden von Filtereffekten auf andere Elemente

Obwohl sie im Allgemeinen auf Bilder angewandt werden, können die Eigenschaften `filter` und `backdrop-filter` auf jedes Element oder Pseudo-Element angewendet werden.

In diesem Beispiel wird ein Glüheffekt mithilfe eines [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filters mit einer `3px` Unschärfe und `0` Versatz hinzugefügt.

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
<h1>Mit CSS-Filter erstellter Glüheffekt</h1>
```

{{EmbedLiveSample('Applying_filter_effects_to_other_elements','100%','80')}}

### Anwenden mehrerer Filter

Während das Sepia-Filterbeispiel nur eine einzelne Filterfunktion enthielt, können Sie mehrere Filter festlegen. Die Eigenschaften `filter` und `backdrop-filter` akzeptieren eine durch Leerzeichen getrennte Liste von Filtern, die in der angegebenen Reihenfolge angewendet werden.

Dieses Beispiel wendet zwei Filter — [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate) und [`blur()`](/de/docs/Web/CSS/filter-function/blur) — über die `backdrop-filter`-Eigenschaft an. Der Hintergrund, der Bereich hinter dem {{HTMLElement("p")}}-Element, hat eine Farbverschiebung und einen Unschärfeeffekt.

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
    Text auf Bildern kann unleserlich und unzugänglich sein, selbst mit einem Schlagschatten.
  </p>
</div>
```

{{EmbedLiveSample('Applying_multiple_filters','100%','280')}}

### Wiederholte Filter anwenden

Da Filter in der Reihenfolge angewendet werden, können Sie Filterfunktionen mehr als einmal verwenden. In diesem Beispiel wurde der [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow) Filter viermal verwendet, jedes Mal mit einem anderen `<shadow>` Wert.

```html
<img src="mandala.svg" alt="Farbiges Mandala" role="img" />
<img src="mandala.svg" alt="Einfaches Mandala" role="img" />
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

Im ersten Mandala-Beispiel werden vier Schlagschatten auf ein liniengezeichnetes SVG angewendet. Dasselbe SVG, bei dem der Filter mit `filter: none` entfernt wird, wird zum Vergleich hinzugefügt.

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### Reihenfolge der Filterfunktionen festlegen

Beim Erstellen von Filtereffekten wird der `filter` oder `backdrop-filter` Eigenschaft eine durch Leerzeichen getrennte Liste von Filtern angegeben. Diese Filtereffekte werden in der Reihenfolge angewendet, in der sie erscheinen.

In diesem Beispiel werden sowohl `magenta` Schlagschatten als auch `180deg` Farbton-Rotation auf die erste Ebene der Überschrift angewendet. Das Beispiel zeigt den Effekt, wenn diese Filter in unterschiedlicher Reihenfolge angewendet werden.

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
<h1 id="hueFirst">Farbtonänderung erfolgt vor dem Schlagschatten.</h1>
<h1 id="shadowFirst">Schlagschatten wird vor der Farbtonänderung angewendet.</h1>
<h1>Keine Filtereffekte angewendet.</h1>
```

{{EmbedLiveSample('Applying_a_filter_to_an_element','100%','280')}}

Dieselben Filter werden auf beide Textzeilen angewendet, aber in unterschiedlicher Reihenfolge. In der ersten Zeile wird der Farbton des Textes geändert, bevor der Schatten angewendet wird, sodass der Schatten `magenta` ist. In der zweiten Zeile wird der Schlagschatten auf den dunkelblauen Text hinzugefügt, und dann wird der Farbton sowohl des Textes als auch des Schattens geändert.

Auf die dritte Zeile wird kein Filtereffekt angewendet, um den Originaleffekt als Vergleich zu zeigen. Die dritte Zeile bleibt also `midnightblue` oder `#191970`. Der `hue-rotate(180deg)` Filter ändert den Text in den ersten beiden Zeilen in `#252500`.

> [!NOTE]
> Die hexadezimale rgb-Farbe `#191970` entspricht `hsl(240deg 63.5% 26.9%)`, während `#252500` `hsl(60deg 100% 7.3%)` ist. Die [Farbrotation erfolgt im sRGB-Farbraum](/de/docs/Web/CSS/color_value#interpolation), deshalb wurde der Farbton wie erwartet geändert, während die Werte für Sättigung und Helligkeit nicht gleich geblieben sind.

## Verwendung von SVG-Filtern

Neben den 10 definierten {{cssxref("filter-function")}}s unterstützen die CSS-Filtereffekte `url()`, wobei der Parameter ein [SVG-Filter](/de/docs/Web/SVG/Element/filter) sein kann, der in einer internen oder externen SVG-Datei eingebettet ist.

Ein einzelnes SVG kann verwendet werden, um mehrere Filter mit jeweils einem `id` zu definieren:

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

### Ein Bild verwischen

Genauso wie die {{cssxref("filter-function/blur", "blur()")}}-Filterfunktion eine Gaußsche Unschärfe auf die Elemente anwendet, auf die sie angewendet wird, kann das SVG {{SVGElement("feGaussianBlur")}}-Filterelement auch verwendet werden, um Inhalte zu verwischen.

In beiden Fällen definiert der Unschärferadiuswert, der in CSS als {{cssxref("&lt;length&gt;")}} und in SVG als Pixeläquivalent {{cssxref("&lt;number&gt;")}} angegeben wird, den Wert der Standardabweichung für die Gaußsche Funktion. Mit anderen Worten, es definiert die Anzahl der Pixel auf dem Bildschirm, die ineinander übergehen; ein größerer Wert erzeugt mehr Unschärfe.

Das [`<filter>`](/de/docs/Web/SVG/Element/filter)'s {{SVGAttr("stdDeviation")}}-Attribut akzeptiert bis zu zwei Werte, was die Erstellung komplexerer Unschärfewerte ermöglicht. Um eine äquivalente Unschärfe zu erzeugen, geben wir einen Wert für `stdDeviation` an:

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>CSS-Beispiel</th>
      <th>SVG-Beispiel</th>
      <th>Originalbild</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride-Flagge" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride-Flagge"
          class="svgFilter" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride-Flagge" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<svg role="img" aria-label="Flagge">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

Der SVG `url()` Filterwert kann als Wert des SVG [`<image>`](/de/docs/Web/SVG/Element/image) Elements' [`filter`](/de/docs/Web/SVG/Attribute/filter) Attributs oder als Teil des Werts der CSS `filter` und `backdrop-filter` Eigenschaften eingeschlossen werden.

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
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)