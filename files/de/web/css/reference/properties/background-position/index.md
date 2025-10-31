---
title: background-position
slug: Web/CSS/Reference/Properties/background-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position ist relativ zur durch {{cssxref("background-origin")}} festgelegten Positionsebene.

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

Die `background-position` Eigenschaft wird als ein oder mehrere `<position>` Werte angegeben, getrennt durch Kommas.

### Werte

- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine X/Y-Koordinate, um ein Element relativ zu den Kanten eines Elementrahmens zu platzieren. Sie kann mithilfe von ein bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position. Wird nur ein Wert angegeben, wird der zweite Wert als `center` angenommen. Bei drei oder vier Werten sind die Längen-Prozent-Werte Offsets für den vorangehenden Schlüsselwort-Wert.

    **1-Wert-Syntax:** Der Wert kann sein:
    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt eine Kante an, gegen die das Element platziert werden soll. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zur linken Kante an, wobei die Y-Koordinate auf 50% gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>`-Werte sind, definiert der erste X und der zweite Y.
    - Beachten Sie: Wenn ein Wert `top` oder `bottom` ist, darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, darf der andere Wert nicht `left` oder `right` sein. Dies bedeutet z.B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Bei der Paarung von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie umsortieren kann; die Werte `top left` und `left top` ergeben dasselbe Ergebnis. Bei der Paarung von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y. Beispielsweise ist der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwortwerte und der dritte ist der Offset für den vorherigen Wert:
    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, wird X definiert. Wenn `top` oder `bottom` angegeben sind, wird Y definiert und der andere Schlüsselwortwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn er der zweite Wert ist, ist der Offset für den ersten Wert. Wenn er der dritte Wert ist, ist er der Offset für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Offset für den Schlüsselwortwert, der ihm vorausgeht. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist nicht gültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwortwerte, die X und Y definieren. Die zweiten und vierten Werte sind Offsets für die vorhergehenden X- und Y-Schlüsselwertwerte:
    - Die ersten und dritten Werte entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben ist, definiert dies Y und der andere Schlüsselwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Offset für das erste Schlüsselwort. Der vierte Wert ist der Offset für das zweite Schlüsselwort.

### Bezüglich Prozentsätze

Der prozentuale Offset der angegebenen Hintergrundbildposition ist relativ zum Container. Ein Wert von 0% bedeutet, dass der linke (oder obere) Rand des Hintergrundbilds mit dem entsprechenden linken (oder oberen) Rand des Containers übereinstimmt oder die 0%-Marke des Bildes auf der 0%-Marke des Containers liegt. Ein Wert von 100% bedeutet, dass der _rechte_ (oder _untere_) Rand des Hintergrundbilds mit dem _rechten_ (oder _unteren_) Rand des Containers übereinstimmt oder die 100%-Marke des Bildes auf der 100%-Marke des Containers liegt. Somit zentriert ein Wert von 50% horizontal oder vertikal das Hintergrundbild, da die 50% des Bildes an der 50%-Marke des Containers liegen. Ähnlich bedeutet `background-position: 25% 75%`, dass die Stelle auf dem Bild, die 25% von links und 75% von oben entfernt ist, an der Stelle des Containers platziert wird, die 25% von der linken Kante und 75% von der oberen Kante des Containers entfernt ist.

Im Wesentlichen wird die Dimension des Hintergrundbildes von der entsprechenden Dimension des Containers _abgezogen_ und dann ein Prozentsatz des resultierenden Wertes als direkter Offset vom linken (oder oberen) Rand verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Verwenden wir die X-Achse als Beispiel, nehmen wir an, wir haben ein Bild, das 300px breit ist und wir verwenden es in einem Container, der 100px breit ist, mit `background-size` auf auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

So dass wir mit Positionsprozenten von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kanten-Offset-Werte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten für unser Beispiel ist die **linke Kante** des **Bildes** von der **linken Kante** des **Containers** durch folgende Werte versetzt:

- \+ 50px (die linke Bildkante wird in die Mitte des 100-Pixel-breiten Containers gesetzt)
- 0px (linke Bildkante deckungsgleich mit der linken Containerkante)
- \-100px (linke Bildkante 100px links des Containers, in diesem Beispiel ist der mittlere 100px-Bildbereich zentriert im Container)
- \-200px (linke Bildkante 200px links des Containers, in diesem Beispiel ist die rechte Bildkante deckungsgleich mit der rechten Containerkante)
- \-250px (linke Bildkante 250px links des Containers, in diesem Beispiel wird die rechte Kante des 300px breiten Bildes in die Mitte des Containers gesetzt)

Es sei erwähnt, dass wenn Ihre `background-size` gleich der Containergröße für eine gegebene Achse ist, ein _prozentualer_ Positionswert für diese Achse keine Wirkung hat, da der "Container-Bild-Unterschied" null sein wird. Sie müssen mit absoluten Werten versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Platzierung von Hintergrundbildern

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element zu erstellen, das ein Sternbild enthält. In jedem Beispiel befindet sich der Stern an einer anderen Position. Im dritten Beispiel wird erläutert, wie Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angegeben werden.

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
