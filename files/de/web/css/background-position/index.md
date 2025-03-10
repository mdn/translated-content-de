---
title: background-position
slug: Web/CSS/background-position
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position ist relativ zur von {{cssxref("background-origin")}} festgelegten Positionsebene.

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

Die `background-position` Eigenschaft wird als ein oder mehrere `<position>`-Werte, getrennt durch Kommas, angegeben.

### Werte

- `<position>`

  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine X/Y-Koordinate, um ein Element relativ zu den Rändern der Box eines Elements zu platzieren. Sie kann mit ein bis vier Werten definiert werden. Wenn zwei nicht-schlüsselwortartige Werte angegeben werden, stellt der erste Wert die horizontale Position und der zweite die vertikale Position dar. Wenn nur ein Wert angegeben wird, wird der zweite Wert als `center` angenommen. Wenn drei oder vier Werte verwendet werden, sind die Längenprozentsätze Offsets für die vorausgehenden Schlüsselwortwerte.

    **1-Wert-Syntax:** Der Wert kann sein:

    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt eine Kante an, gegen die das Element platziert wird. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zum linken Rand an, wobei die Y-Koordinate auf 50% gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:

    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>` Werte sind, dann definiert der erste X und der zweite Y.
    - Beachten Sie: Wenn ein Wert `top` oder `bottom` ist, dann darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, dann darf der andere Wert nicht `left` oder `right` sein. Das bedeutet z.B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Beim Paaren von Schlüsselwörtern spielt die Platzierung keine Rolle, da der Browser sie umordnen kann; die Werte `top left` und `left top` haben dasselbe Ergebnis. Beim Paaren von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y, sodass zum Beispiel der Wert `right 20px` gültig ist, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwortwerte und der dritte ist der Offset für den vorhergehenden Wert:

    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, definiert dies X. Wenn `top` oder `bottom` angegeben sind, definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn er der zweite Wert ist, ist der Offset für den ersten Wert. Wenn er der dritte Wert ist, ist er der Offset für den zweiten Wert.
    - Der einzelne Längen- oder Prozentsatzwert ist ein Offset für den vorangegangenen Schlüsselwortwert. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist nicht gültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwortwerte, die X und Y definieren. Die zweiten und vierten Werte sind Offsets für die vorhergehenden X- und Y-Schlüsselwortwerte:

    - Die ersten und dritten Werte entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben ist, definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Offset für das erste Schlüsselwort. Der vierte Wert ist der Offset für das zweite Schlüsselwort.

### Bezüglich Prozentsätze

Der prozentuale Offset der angegebenen Position des Hintergrundbildes bezieht sich auf den Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Markierung des Bildes wird auf der 0%-Markierung des Containers liegen. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Markierung des Bildes wird auf der 100%-Markierung des Containers liegen. Ein Wert von 50% zentriert das Hintergrundbild horizontal oder vertikal, da die 50%-Markierung des Bildes mit der 50%-Markierung des Containers übereinstimmt. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von der linken und 75% von der oberen Kante entfernt ist, an dem Punkt des Containers platziert wird, der 25% von der linken und 75% von der oberen Kante des Containers entfernt ist.

Im Wesentlichen passiert Folgendes: Die Dimension des Hintergrundbildes wird von der entsprechenden Container-Dimension _subtrahiert_, und dann wird ein Prozentsatz des resultierenden Wertes als direkter Offset von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Am Beispiel der X-Achse: Angenommen, wir haben ein Bild, das 300px breit ist, und verwenden es in einem Container, der 100px breit ist, wobei `background-size` auf auto gesetzt ist:

```plain
100px - 300px = -200px (container & image difference)
```

So dass wir mit den Positionsprozentsätzen von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kanten-Offset-Werte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten in unserem Beispiel ist die **linke Kante** des **Bildes** von der **linken Kante** des **Containers** um folgende Werte versetzt:

- \+ 50px (was die linke Bildkante in die Mitte des 100-Pixel-breiten Containers bringt)
- 0px (linke Bildkante fällt mit der linken Containerkante zusammen)
- \-100px (linke Bildkante 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px-Bildbereich im Container zentriert ist)
- \-200px (linke Bildkante 200px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Bildkante mit der rechten Containerkante übereinstimmt)
- \-250px (linke Bildkante 250px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Kante des 300px-breiten Bildes in der Mitte des Containers liegt)

Es ist erwähnenswert, dass wenn Ihre `background-size` gleich der Containergröße für eine gegebene Achse ist, dann eine _prozentuale_ Position für diese Achse keinen Effekt hat, weil der "Container-Bild-Unterschied" null sein wird. Sie müssen mit absoluten Werten verschieben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Hintergrundbildern

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element zu erstellen, das ein Sternenbild enthält. In jedem Beispiel ist der Stern an einer anderen Position. Das dritte Beispiel zeigt, wie Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angegeben werden.

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
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
