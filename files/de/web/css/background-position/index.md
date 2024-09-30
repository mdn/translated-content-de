---
title: background-position
slug: Web/CSS/background-position
l10n:
  sourceCommit: 663057e96a123256672f72fcecc921faa464251c
---

{{CSSRef}}

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsschicht, die durch {{cssxref("background-origin")}} festgelegt wird.

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

  - : Eine {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine x/y-Koordinate, um ein Objekt relativ zu den Rändern eines Element-Box anzuordnen. Es kann mit einem bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite die vertikale Position. Wenn nur ein Wert angegeben ist, wird der zweite Wert als `center` angenommen. Bei drei oder vier Werten sind die Längen-Prozentwerte Versätze für die vorangehenden Schlüsselwortwerte.

    **Syntax mit einem Wert:** Der Wert kann sein:

    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt an, an welcher Kante das Objekt platziert werden soll. Die andere Dimension wird dann auf 50 % gesetzt, sodass das Objekt in der Mitte der angegebenen Kante platziert wird.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zur linken Kante an, wobei die Y-Koordinate auf 50 % gesetzt wird.

    **Syntax mit zwei Werten:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:

    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, definiert dies X und der andere angegebene Wert Y. Wenn `top` oder `bottom` angegeben ist, definiert dies Y und der andere Wert X.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>`-Werte sind, definiert der erste X und der zweite Y.
    - Beachten Sie, dass: Wenn ein Wert `top` oder `bottom` ist, darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, darf der andere Wert nicht `left` oder `right` sein. Das heißt, z. B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Bei der Kombination von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie neu ordnen kann; die Werte `top left` und `left top` führen zum gleichen Ergebnis. Bei der Kombination von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y. Zum Beispiel ist der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **Syntax mit drei Werten:** Zwei Werte sind Schlüsselwortwerte und der dritte ist der Versatz für den vorangehenden Wert:

    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, definiert dies X. Wenn `top` oder `bottom` angegeben sind, definiert dies Y und der andere Schlüsselwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Wert ist, wenn er der zweite Wert ist, der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Versatz für den vorhergehenden Schlüsselwert. Die Kombination eines Schlüsselwortes mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist ungültig.

    **Syntax mit vier Werten:** Die ersten und dritten Werte sind Schlüsselwortwerte, die X und Y definieren. Die zweiten und vierten Werte sind Versätze für die vorhergehenden X- und Y-Schlüsselwerten:

    - Die ersten und dritten Werte entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben sind, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben sind, definiert dies Y und der andere Schlüsselwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Zur Verwendung von Prozentsätzen

Der prozentuale Versatz der Position des angegebenen Hintergrundbildes ist relativ zum Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Marke des Bildes wird auf der 0%-Marke des Containers sein. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder die 100%-Marke des Bildes wird auf der 100%-Marke des Containers sein. Ein Wert von 50% horizontal oder vertikal zentriert das Hintergrundbild, da die 50%-Marke des Bildes an der 50%-Marke des Containers ist. Ebenso bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben ist, an dem Punkt des Containers platziert wird, der 25% von der linken und 75% von der oberen Kante des Containers ist.

Im Wesentlichen passiert Folgendes: Die Größe des Hintergrundbildes wird von der entsprechenden Größe des Containers _subtrahiert_, und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Verwenden wir die X-Achse als Beispiel, sagen wir, wir haben ein Bild, das 300px breit ist, und wir verwenden es in einem Container, der 100px breit ist, mit `background-size` auf auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

So dass wir mit Positionsprozentsätzen von -25%, 0%, 50%, 100%, 125% diese Bild-zu-Container-Kanten-Versatzwerte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten in unserem Beispiel ist die **linke Kante** des **Bildes** um so viel von der **linken Kante** des **Containers** versetzt:

- \+ 50px (was die linke Bildkante in die Mitte des 100-Pixel-breiten Containers bringt)
- 0px (linke Bildkante fällt mit der linken Container-Kante zusammen)
- \-100px (linke Bildkante 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px große Bildbereich im Container zentriert ist)
- \-200px (linke Bildkante 200px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Bildkante mit der rechten Container-Kante zusammenfällt)
- \-250px (linke Bildkante 250px links vom Container, in diesem Beispiel versetzt das die rechte Kante des 300px breiten Bildes in die Mitte des Containers)

Es ist erwähnenswert, dass wenn Ihre `background-size` für eine gegebene Achse der Containergröße entspricht, eine _prozentuale_ Position für diese Achse keine Auswirkung hat, da der "Container-Bild-Unterschied" null sein wird. Sie müssen dann mit absoluten Werten versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder positionieren

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element mit einem Sternbild zu erstellen. In jedem Beispiel ist der Stern an einer anderen Position. Das dritte Beispiel zeigt, wie Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angegeben werden.

#### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
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
.exampleone {
  background: url("startransparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* Multiple background images: Each image is matched with the
   corresponding position, from first specified to last. */
.examplethree {
  background-image: url("startransparent.gif"), url("catfront.png");
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
