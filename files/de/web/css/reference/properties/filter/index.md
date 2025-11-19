---
title: filter
slug: Web/CSS/Reference/Properties/filter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`filter`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet grafische Effekte wie Unschärfe oder Farbverschiebung auf ein Element an. Filter werden häufig verwendet, um die Darstellung von Bildern, Hintergründen und Rändern zu ändern.

Es stehen mehrere [Funktionen](#funktionen) zur Verfügung, wie `blur()` und `contrast()`, die helfen, vordefinierte Effekte zu erzielen.

{{InteractiveExample("CSS Demo: filter")}}

```css interactive-example-choice
filter: url("/shared-assets/images/examples/shadow.svg#element-id");
```

```css interactive-example-choice
filter: blur(5px);
```

```css interactive-example-choice
filter: contrast(200%);
```

```css interactive-example-choice
filter: grayscale(80%);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: drop-shadow(16px 16px 20px red) invert(75%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <img
      id="example-element"
      src="/shared-assets/images/examples/firefox-logo.svg"
      width="200" />
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: white;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-element {
  flex: 1;
  padding: 30px;
}
```

## Syntax

```css
/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* Multiple filters */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

### Referenzierung eines SVG-Filters

Sie können `url()` verwenden, um auf ein [SVG filter-Element](/de/docs/Web/SVG/Reference/Element/filter) zu verweisen. Für einen Verweis auf ein SVG {{SVGElement("filter")}}-Element verwenden Sie die folgende Syntax:

```css
filter: url("file.svg#filter-element-id");
```

### Funktionen

Die `filter`-Eigenschaft wird als `none` oder eine oder mehrere der unten aufgeführten Funktionen angegeben. Wenn der Parameter einer Funktion ungültig ist, gibt die Funktion `none` zurück. Sofern nicht anders angegeben, akzeptieren die Funktionen, die einen Wert mit Prozentzeichen ausdrücken (wie in `34%`), auch den Wert als Dezimalzahl (wie in `0.34`).

Wenn die `filter`-Eigenschaftswerte mehrere Funktionen enthalten, werden die Filter in der angegebenen Reihenfolge angewendet.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Wendet eine Gaußsche Unschärfe auf das Eingabebild an.

    ```css
    filter: blur(5px);
    ```

- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Wendet einen linearen Multiplikator auf das Eingabebild an, wodurch es heller oder dunkler erscheint. Die Werte sind lineare Multiplikatoren für den Effekt, wobei `0%` ein vollständig schwarzes Bild erzeugt, `100%` keinen Effekt hat und Werte über `100%` das Bild aufhellen.

    ```css
    filter: brightness(2);
    ```

- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Passt den Kontrast des Eingabebildes an. Ein Wert von `0%` macht das Bild grau, `100%` hat keinen Effekt, und Werte über `100%` erzeugen einen stärkeren Kontrast.

    ```css
    filter: contrast(200%);
    ```

- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet den Parameter `<shadow>` als Schlagschatten an, der den Konturen des Bildes folgt. Die Schatten-Syntax ist ähnlich wie `<box-shadow>` (definiert im [CSS Hintergrund- und Randmodul](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)), mit der Ausnahme, dass das Schlüsselwort `inset` und der Parameter `spread` nicht erlaubt sind. Wie bei allen `filter`-Eigenschaftswerten werden alle Filter nach dem `drop-shadow()` auf den Schatten angewendet.

    ```css
    filter: drop-shadow(16px 16px 10px black);
    ```

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Wandelt das Bild in Graustufen um. Ein Wert von `100%` ist vollständig in Graustufen. Der Anfangswert von `0%` belässt das Eingabebild unverändert. Werte zwischen `0%` und `100%` erzeugen lineare Multiplikatoren für den Effekt.

    ```css
    filter: grayscale(100%);
    ```

- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Wendet eine Farbton-Drehung an. Der `<angle>`-Wert definiert die Anzahl der Grad um den Farbkreishue, bei dem die Eingabemuster angepasst werden. Ein Wert von `0deg` lässt das Eingabebild unverändert.

    ```css
    filter: hue-rotate(90deg);
    ```

- {{cssxref("filter-function/invert", "invert()")}}
  - : Invertiert die Muster im Eingabebild. Ein Wert von `100%` invertiert das Bild vollständig. Ein Wert von `0%` macht keine Änderungen. Werte zwischen `0%` und `100%` haben lineare Multiplikatoren für den Effekt.

    ```css
    filter: invert(100%);
    ```

- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Wendet Transparenz an. `0%` macht das Bild vollständig transparent und `100%` lässt das Bild unverändert.

    ```css
    filter: opacity(50%);
    ```

- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Sättigt das Bild, wobei `0%` vollständig entsättigt ist, `100%` das Bild unverändert lässt, und Werte über `100%` die Sättigung erhöhen.

    ```css
    filter: saturate(200%);
    ```

- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Wandelt das Bild in Sepia um, wobei ein Wert von `100%` das Bild vollständig in Sepia umwandelt und `0%` keine Änderung bewirkt.

    ```css
    filter: sepia(100%);
    ```

### Funktionen kombinieren

Sie können beliebig viele Funktionen kombinieren, um die Darstellung zu manipulieren. Die Filter werden in der angegebenen Reihenfolge angewendet. Im folgenden Beispiel werden der Kontrast und die Helligkeit des Bildes verbessert:

```css
filter: contrast(175%) brightness(103%);
```

### Interpolation

Bei Animation, wenn sowohl die Anfangs- als auch die Endfilter eine Funktionsliste der gleichen Länge ohne {{cssxref("url_value", "&lt;url&gt;")}} in der gleichen Reihenfolge haben, wird jede ihrer Filterfunktionen nach den spezifischen Regeln der Filterfunktion {{Glossary("interpolation", "interpoliert")}}.

Wenn die Filterlisten unterschiedliche Längen haben, werden die fehlenden äquivalenten Filterfunktionen aus der längeren Liste am Ende der kürzeren Liste hinzugefügt. Die hinzugefügten Funktionen verwenden ihre anfänglichen, nicht modifizierten Filterwerte. Alle aufgeführten Filter werden dann gemäß den spezifischen Regeln der Filterfunktion interpoliert. Andernfalls wird diskrete Interpolation verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwendbare Filterfunktionen

Die `filter`-Eigenschaft wird auf das zweite Bild angewendet und macht sowohl das Bild als auch seinen Rand grau und unscharf.

```css
img {
  border: 5px solid yellow;
}
/* Gray the second image by 40% and blur by 5px */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="Original image is sharp" />
<img src="pencil.jpg" alt="The image and border are blurred and muted" />
```

{{EmbedLiveSample('Applying_filter_functions','100%','229px')}}

### Wiederholung von Filterfunktionen

Filterfunktionen werden in der Reihenfolge ihrer Erscheinung angewendet. Die gleiche Filterfunktion kann wiederholt werden.

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg)
    drop-shadow(5px 5px 0 red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"></path>
  <g fill="blue">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('Repeating_filter_functions','100%','229px')}}

Die Filter werden in Reihenfolge angewendet. Deshalb sind die Schlagschatten nicht in der gleichen Farbe: Der Farbton des ersten Schattens wird durch die `hue-rotate()`-Funktion verändert, der des zweiten jedoch nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("backdrop-filter")}}
- {{cssxref("mask")}}
- SVG {{SVGAttr("filter")}} Attribut
- CSS [Compositing und Blending](/de/docs/Web/CSS/Guides/Compositing_and_blending) Modul, einschließlich der CSS {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} Eigenschaften.
- [SVG](/de/docs/Web/SVG), einschließlich des SVG {{SVGElement("filter")}} Elements und des SVG {{SVGAttr("filter")}} Attributs.
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
