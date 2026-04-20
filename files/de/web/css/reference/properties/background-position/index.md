---
title: "`background-position` CSS property"
short-title: background-position
slug: Web/CSS/Reference/Properties/background-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`background-position`**- [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsschicht, die durch {{cssxref("background-origin")}} festgelegt wird.

{{InteractiveExample("CSS Demo: background-position")}}

```css interactive-example-choice
background-position: top;
```

```css interactive-example-choice
background-position: left;
```

```css interactive-example-choice
background-position: center;
```

```css interactive-example-choice
background-position: 25% 75%;
```

```css interactive-example-choice
background-position: bottom 50px right 100px;
```

```css interactive-example-choice
background-position: right 35% bottom 45%;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position:
  0 0,
  center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: revert-layer;
background-position: unset;
```

Die `background-position`-Eigenschaft wird als ein oder mehrere `<position>`-Werte angegeben, getrennt durch Kommas.

### Werte

- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine x/y-Koordinate, um ein Element relativ zu den Rändern eines Elementrahmens zu platzieren. Es kann mit einem bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite die vertikale Position. Wenn nur ein Wert angegeben wird, wird der zweite Wert als `center` angenommen. Wenn drei oder vier Werte verwendet werden, sind die Längen-Prozent-Werte Offsets für die vorhergehenden Schlüsselwort-Werte.

    **1-Wert-Syntax:** Der Wert kann sein:
    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt eine Kante an, gegen die das Element platziert werden soll. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zur linken Kante an, wobei die Y-Koordinate auf 50% gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, dann definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, dann definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, dann definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, dann definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>`- oder `<percentage>`-Werte sind, dann definiert der erste X und der zweite Y.
    - Beachten Sie, dass: Wenn ein Wert `top` oder `bottom` ist, dann darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, dann darf der andere Wert nicht `left` oder `right` sein. Das bedeutet zum Beispiel, dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Bei der Kombination von Schlüsselworten ist die Platzierung nicht wichtig, da der Browser sie neu anordnen kann; die Werte `top left` und `left top` ergeben dasselbe Ergebnis. Bei der Kombination von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y, also zum Beispiel ist der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwort-Werte, und der dritte ist das Offset für den vorhergehenden Wert:
    - Der erste Wert ist einer der Schlüsselwort-Werte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, dann definiert dies X. Wenn `top` oder `bottom` angegeben sind, dann definiert dies Y und der andere Schlüsselwort-Wert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Wert, wenn er der zweite Wert ist, ist das Offset für den ersten Wert. Wenn er der dritte Wert ist, ist es das Offset für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Offset für den vorhergehenden Schlüsselwort-Wert. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Werten ist nicht gültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwort-Werte, die X und Y definieren. Die zweiten und vierten Werte sind Offsets für die vorhergehenden X- und Y-Schlüsselwort-Werte:
    - Die ersten und dritten Werte entsprechen einem der Schlüsselwort-Werte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` als erster Wert angegeben ist, dann definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` als erster Wert angegeben ist, dann definiert dies Y und der andere Schlüsselwort-Wert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Werte. Der zweite Wert ist das Offset für den ersten Schlüsselwort-Wert. Der vierte Wert ist das Offset für den zweiten Schlüsselwort-Wert.

### Bezüglich Prozentzahlen

Der prozentuale Offset der angegebenen Position des Hintergrundbildes ist relativ zum Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Markierung des Bildes auf der 0%-Markierung des Containers liegt. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Markierung des Bildes auf der 100%-Markierung des Containers liegt. Ein Wert von 50% zentriert das Hintergrundbild horizontal oder vertikal, da die 50% des Bildes auf der 50%-Markierung des Containers liegen. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben entfernt ist, an dem Punkt des Containers platziert wird, der 25% von der linken und 75% von der oberen Kante des Containers entfernt ist.

Im Wesentlichen geschieht Folgendes: Die Dimension des Hintergrundbildes wird von der entsprechenden Container-Dimension _subtrahiert_, und dann wird ein Prozentsatz des resultierenden Wertes als direkter Offset von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Verwenden wir die X-Achse als Beispiel: Angenommen, wir haben ein Bild, das 300px breit ist, und verwenden es in einem Container, der 100px breit ist, mit `background-size` auf auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

So erhalten wir mit Positionsprozentzahlen von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kanten-Offset-Werte:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten für unser Beispiel ist der **linke Rand** des **Bildes** vom **linken Rand** des **Containers** um folgenden Wert versetzt:

- \+ 50px (was den linken Bildrand in die Mitte des 100-Pixel-breiten Containers bringt)
- 0px (linker Bildrand fällt mit dem linken Containerrand zusammen)
- \-100px (linker Bildrand 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px-Bildbereich im Container zentriert ist)
- \-200px (linker Bildrand 200px links vom Container, in diesem Beispiel bedeutet das, dass der rechte Bildrand mit dem rechten Containerrand zusammenfällt)
- \-250px (linker Bildrand 250px links vom Container, in diesem Beispiel bringt das den rechten Rand des 300px breiten Bildes in die Mitte des Containers)

Es ist erwähnenswert, dass wenn Ihre `background-size` gleich der Größe des Containers für eine gegebene Achse ist, dann wird eine _prozentuale_ Position für diese Achse keinen Einfluss haben, da der "Container-Bild-Unterschied" null sein wird. Sie müssen mit absoluten Werten verschieben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder positionieren

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}}-Eigenschaft, um ein gelbes, rechteckiges Element mit einem Sternbild zu erstellen. In jedem Beispiel befindet sich der Stern in einer unterschiedlichen Position. Das dritte Beispiel zeigt, wie Sie Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angeben.

#### HTML

```html
<div class="example-one">Example One</div>
<div class="example-two">Example Two</div>
<div class="example-three">Example Three</div>
```

#### CSS

```css
/* Shared among all <div>s */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* These examples use the `background` shorthand property */
.example-one {
  background: url("star-transparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.example-two {
  background: url("star-transparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* Multiple background images: Each image is matched with the
   corresponding position, from first specified to last. */
.example-three {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-position:
    0px 0px,
    right 3em bottom 2em;
}
```

#### Ergebnis

{{EmbedLiveSample('Positioning_background_images', 420, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
