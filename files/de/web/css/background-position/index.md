---
title: background-position
slug: Web/CSS/background-position
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} definiert wird.

{{EmbedInteractiveExample("pages/css/background-position.html")}}

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

  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine x/y-Koordinate, um ein Element relativ zu den Kanten des Box-Elements zu platzieren. Es kann mit einem bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, stellt der erste Wert die horizontale Position dar und der zweite die vertikale Position. Wenn nur ein Wert angegeben ist, wird der zweite Wert als `center` angenommen. Bei drei oder vier Werten sind die Längen-Prozentwerte Versätze für die vorausgegangenen Schlüsselwortwerte.

    **1-Wert Syntax:** Der Wert kann sein:

    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies spezifiziert eine Kante, an der das Element platziert wird. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies spezifiziert die X-Koordinate relativ zur linken Kante, mit der Y-Koordinate auf 50% gesetzt.

    **2-Wert Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:

    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, dann definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, dann definiert dies Y und der andere Wert X.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, dann definiert dieser Wert Y relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, dann definiert dieser Wert X relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>` Werte sind, dann definiert der erste X und der zweite Y.
    - Beachten Sie: Wenn ein Wert `top` oder `bottom` ist, dann darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, dann darf der andere Wert nicht `left` oder `right` sein. Dies bedeutet z.B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Beim Pairen von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie umordnen kann; die Werte `top left` und `left top` ergeben dasselbe Ergebnis. Beim Pairen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y. So ist z.B. der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X und Y Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert Syntax:** Zwei Werte sind Schlüsselwortwerte, und der dritte ist der Versatz für den vorhergehenden Wert:

    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, dann definiert dies X. Wenn `top` oder `bottom` angegeben ist, dann definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn er der zweite Wert ist, ist der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Länge- oder Prozentwert ist ein Versatz für den vorausgegangenen Schlüsselwortwert. Die Kombination eines Schlüsselwortes mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist nicht gültig.

    **4-Wert Syntax:** Der erste und dritte Wert sind Schlüsselwortwerte, die X und Y definieren. Der zweite und vierte Wert sind Versätze für die vorausgegangenen X- und Y-Schlüsselwortwerte:

    - Der erste und dritte Wert entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, dann definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben ist, dann definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Der zweite und vierte Wert sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Bezüglich Prozentsätze

Der prozentuale Versatz der angegebenen Position des Hintergrundbildes ist relativ zum Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Marke des Bildes wird auf der 0%-Marke des Containers sein. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Marke des Bildes wird auf die 100%-Marke des Containers sein. Ein Wert von 50% horizontal oder vertikal zentriert das Hintergrundbild, da das 50% des Bildes bei der 50%-Marke des Containers liegen wird. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben entfernt ist, an der Stelle des Containers platziert wird, die 25% von links und 75% von oben des Containers entfernt ist.

Im Wesentlichen passiert folgendes: Die Dimension des Hintergrundbildes wird von der entsprechenden Container-Dimension _subtrahiert_ und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Verwenden Sie die X-Achse als Beispiel, sagen wir, wir haben ein Bild, das 300px breit ist und wir es in einem Container verwenden, der 100px breit ist, wobei `background-size` auf auto gesetzt ist:

```plain
100px - 300px = -200px (container & image difference)
```

So dass wir mit Positionsprozenten von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kanten-Versatzwerte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

So ist mit diesen resultierenden Werten für unser Beispiel der **linke Rand** des **Bildes** von der **linken Kante** des **Containers** abgesetzt um:

- \+ 50px (was den linken Bildrand in die Mitte des 100-Pixel-breiten Containers setzt)
- 0px (linker Bildrand deckungsgleich mit dem linken Container-Rand)
- \-100px (linker Bildrand 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px Bildbereich im Container zentriert ist)
- \-200px (linker Bildrand 200px links vom Container, in diesem Beispiel bedeutet das, dass der rechte Bildrand deckungsgleich mit dem rechten Container-Rand ist)
- \-250px (linker Bildrand 250px links vom Container, in diesem Beispiel wird der rechte Rand des 300px-breiten Bildes in der Mitte des Containers platziert)

Es ist erwähnenswert, dass wenn Ihre `background-size` gleich der Containergröße für eine gegebene Achse ist, dann wird eine _prozentual_ Position für diese Achse keinen Effekt haben, da der "Container-Bild-Unterschied" null sein wird. Sie müssen dann mit absoluten Werten versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder positionieren

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element mit einem Sternbild zu erstellen. In jedem Beispiel ist der Stern an einer anderen Position. Das dritte Beispiel zeigt, wie man Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angibt.

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
