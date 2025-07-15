---
title: background-position
slug: Web/CSS/background-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsschicht, die von {{cssxref("background-origin")}} festgelegt wird.

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

Die Eigenschaft `background-position` wird als ein oder mehrere `<position>` Werte angegeben, die durch Kommata getrennt sind.

### Werte

- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine x/y-Koordinate, um ein Element relativ zu den Kanten eines Element-Box zu platzieren. Sie kann mit einem bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite die vertikale. Wenn nur ein Wert angegeben ist, wird davon ausgegangen, dass der zweite Wert `center` ist. Werden drei oder vier Werte verwendet, sind die Längen-Prozentwerte Versatzwerte für die vorangehenden Schlüsselwort-Werte.

    **1-Wert-Syntax:** Der Wert kann sein:
    - Der Schlüsselwort-Wert `center`, der das Bild zentriert.
    - Einer der Schlüsselwort-Werte `top`, `left`, `bottom` oder `right`. Dies spezifiziert eine Kante, gegen die das Element platziert wird. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies spezifiziert die X-Koordinate relativ zur linken Kante, wobei die Y-Koordinate auf 50% gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:
    - Einer der Schlüsselwort-Werte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, dann definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, dann definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>` Werte sind, dann definiert der erste X und der zweite Y.
    - Hinweis: Wenn ein Wert `top` oder `bottom` ist, darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, darf der andere Wert nicht `left` oder `right` sein. Das bedeutet zum Beispiel, dass `top top` und `left right` nicht gültig sind.
    - Ordnung: Bei der Paarung von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie umsortieren kann; die Werte `top left` und `left top` ergeben das gleiche Ergebnis. Bei der Paarung von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y. Zum Beispiel ist der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwort-Werte und der dritte ist der Versatz für den vorhergehenden Wert:
    - Der erste Wert ist einer der Schlüsselwort-Werte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben ist, definiert dies X. Wenn `top` oder `bottom` gegeben sind, definiert dies Y und der andere Schlüsselwort-Wert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn es der zweite Wert ist, ist der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Versatz für den Schlüsselwort-Wert, der ihm vorausgeht. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist nicht gültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwort-Werte, die X und Y definieren. Die zweiten und vierten Werte sind Versätze für die vorangehenden X- und Y-Schlüsselwort-Werte:
    - Die ersten und dritten Werte entsprechen einem der Schlüsselwörter `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert gegeben ist, definiert dies Y und der andere Schlüsselwort-Wert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Bezüglich Prozentangaben

Der prozentuale Versatz der angegebenen Position des Hintergrundbildes bezieht sich auf den Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Marke des Bildes wird auf der 0%-Marke des Containers sein. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Marke des Bildes wird auf der 100%-Marke des Containers sein. Somit zentriert ein Wert von 50% horizontal oder vertikal das Hintergrundbild, da die 50%-Marke des Bildes an der 50%-Marke des Containers liegt. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben liegt, an dem Punkt des Containers platziert wird, der 25% von links und 75% von oben des Containers liegt.

Grundsätzlich passiert folgendes: Die Dimension des Hintergrundbildes wird von der entsprechenden Dimension des Containers _abgezogen_, und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz von der linken (oder oberen) Kante genutzt.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Verwenden wir die X-Achse als Beispiel: Angenommen, wir haben ein Bild, das 300px breit ist und wir verwenden es in einem Container, der 100px breit ist, mit `background-size` auf Auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

So dass wir mit Positionsprozentsätzen von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kantenabstands-Werte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

So dass bei diesen resultierenden Werten in unserem Beispiel die **linke Kante** des **Bildes** um den folgenden Wert von der **linken Kante** des **Containers** versetzt wird:

- - 50px (was die linke Bildkante in die Mitte des 100-Pixel-breiten Containers legt)
- 0px (linke Bildkante deckungsgleich mit der linken Containerkante)
- -100px (linke Bildkante 100px links vom Container, in diesem Beispiel bedeutet das, dass das mittlere 100px-Bildbereich in der Mitte des Containers liegt)
- -200px (linke Bildkante 200px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Bildkante deckungsgleich mit der rechten Containerkante ist)
- -250px (linke Bildkante 250px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Kante des 300px-breiten Bildes in der Mitte des Containers liegt)

Es ist erwähnenswert, dass wenn Ihre `background-size` gleich der Containergröße für eine bestimmte Achse ist, dann hat eine _prozentuale_ Position für diese Achse keine Wirkung, da die "Container-Bild-Differenz" null sein wird. Sie müssen dann absolute Werte verwenden, um einen Versatz zu erzielen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Hintergrundbildern

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element mit einem Sternbild zu erstellen. In jedem Beispiel befindet sich der Stern an einer anderen Position. Das dritte Beispiel veranschaulicht, wie man Positionen für zwei unterschiedliche Hintergrundbilder innerhalb eines Elements angibt.

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
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
