---
title: background-position
slug: Web/CSS/Reference/Properties/background-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position bezieht sich auf die durch {{cssxref("background-origin")}} festgelegte Positionsebene.

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

  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine X/Y-Koordinate, um ein Element relativ zu den Rändern eines Elementboxen zu platzieren. Es kann mit einem bis vier Werten definiert werden. Wenn zwei nicht-schlüsselwortliche Werte verwendet werden, stellt der erste Wert die horizontale Position dar und der zweite den vertikalen. Wenn nur ein Wert angegeben ist, wird der zweite Wert als `center` angenommen. Bei drei oder vier Werten sind die Längen-Prozentwerte Versätze für die vorangehenden Schlüsselwortwerte.

    **1-Wert-Syntax:** Der Wert kann sein:

    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt eine Kante an, an der das Element platziert wird. Die andere Dimension wird dann auf 50 % gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zum linken Rand an, wobei die Y-Koordinate auf 50 % gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:

    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, dann definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, dann definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, dann definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, dann definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>` Werte sind, dann definiert der erste X und der zweite Y.
    - Beachten Sie, dass: Wenn ein Wert `top` oder `bottom` ist, dann darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, dann darf der andere Wert nicht `left` oder `right` sein. Dies bedeutet z.B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Beim Paaren von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie neu ordnen kann; die Werte `top left` und `left top` führen zum gleichen Ergebnis. Beim Paaren von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der X definierende Wert sollte zuerst kommen, gefolgt von Y, so dass zum Beispiel der Wert `right 20px` gültig ist, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwortwerte, und der dritte ist der Versatz für den vorangehenden Wert:

    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, dann definiert dies X. Wenn `top` oder `bottom` angegeben sind, dann definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn er der zweite Wert ist, ist der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Versatz für den vorangehenden Schlüsselwortwert. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist nicht gültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwortwerte, die X und Y definieren. Die zweiten und vierten Werte sind Versätze für die vorangehenden X- und Y-Schlüsselwortwerte:

    - Die ersten und dritten Werte entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, dann definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben ist, dann definiert dies Y und der andere Schlüsselwortwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Bezüglich Prozentsätzen

Der prozentuale Versatz der angegebenen Position des Hintergrundbildes bezieht sich auf den Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Marke des Bildes wird auf der 0%-Marke des Containers sein. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Marke des Bildes wird auf der 100%-Marke des Containers sein. Daher zentriert ein Wert von 50% horizontal oder vertikal das Hintergrundbild, da die 50% des Bildes an der 50%-Marke des Containers sein werden. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben entfernt ist, an dem Punkt des Containers platziert wird, der 25% vom linken und 75% vom oberen Rand des Containers entfernt ist.

Im Wesentlichen wird die Dimension des Hintergrundbildes von der entsprechenden Dimension des Containers _subtrahiert_, und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Nehmen wir für ein Beispiel die X-Achse, sagen wir, wir haben ein Bild, das 300px breit ist und wir verwenden es in einem Container, der 100px breit ist, mit `background-size` auf auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

Sodass wir mit Positionsprozenten von -25%, 0%, 50%, 100%, 125% folgende Bild-zum-Container-Kantenoffset-Werte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten für unser Beispiel ist der **linke Rand** des **Bildes** vom **linken Rand** des **Containers**:

- \+ 50px (was den linken Bildrand in die Mitte des 100-Pixel-breiten Containers setzt)
- 0px (linker Bildrand fällt mit dem linken Containerrand zusammen)
- \-100px (linker Bildrand 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px große Bildbereich im Container zentriert ist)
- \-200px (linker Bildrand 200px links vom Container, in diesem Beispiel bedeutet das, dass der rechte Bildrand mit dem rechten Containerrand zusammenfällt)
- \-250px (linker Bildrand 250px links vom Container, in diesem Beispiel setzt das den rechten Rand des 300px breiten Bildes in die Mitte des Containers)

Es sei erwähnt, dass wenn Ihre `background-size` für eine gegebene Achse der Containergröße entspricht, dann wird eine _Prozentposition_ für diese Achse keinen Effekt haben, weil die "Container-Bild-Differenz" null sein wird. Sie müssen mit absoluten Werten ausgleichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Hintergrundbildern

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element zu erstellen, das ein Sternbild enthält. In jedem Beispiel befindet sich der Stern an einer anderen Position. Das dritte Beispiel zeigt, wie Positionen für zwei unterschiedliche Hintergrundbilder innerhalb eines Elements angegeben werden.

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
