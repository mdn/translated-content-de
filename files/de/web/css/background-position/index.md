---
title: background-position
slug: Web/CSS/background-position
l10n:
  sourceCommit: 663057e96a123256672f72fcecc921faa464251c
---

{{CSSRef}}

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die von {{cssxref("background-origin")}} festgelegt wird.

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> Werte */
background-position: 25% 75%;

/* <length> Werte */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Mehrere Bilder */
background-position:
  0 0,
  center;

/* Randversatzwerte */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Globale Werte */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: revert-layer;
background-position: unset;
```

Die `background-position` Eigenschaft wird als ein oder mehrere `<position>` Werte angegeben, getrennt durch Kommata.

### Werte

- `<position>`

  - : Ein {{cssxref("&lt;position&gt;")}}. Eine Position definiert eine x/y Koordinate, um ein Element relativ zu den Rändern eines Box-Elements zu platzieren. Sie kann mit einem bis vier Werten definiert werden. Wenn zwei nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite die vertikale Position. Wenn nur ein Wert angegeben ist, wird angenommen, dass der zweite Wert `center` ist. Wenn drei oder vier Werte verwendet werden, sind die Längenprozentsätze Versätze für die vorhergehenden Schlüsselwortwerte.

    **1-Wert-Syntax:** Der Wert kann sein:

    - Der Schlüsselwortwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Dies gibt eine Kante an, gegen die das Element platziert wird. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies spezifiziert die X-Koordinate relativ zur linken Kante, wobei die Y-Koordinate auf 50% gesetzt wird.

    **2-Wert-Syntax:** Ein Wert definiert X und der andere definiert Y. Jeder Wert kann sein:

    - Einer der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wird `left` oder `right` angegeben, definiert dies X und der andere angegebene Wert definiert Y. Wird `top` oder `bottom` angegeben, definiert dies Y und der andere Wert definiert X.
    - Eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>` Werte sind, definiert der erste X und der zweite Y.
    - Hinweis: Wenn ein Wert `top` oder `bottom` ist, darf der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, darf der andere Wert nicht `left` oder `right` sein. Dies bedeutet, dass z. B. `top top` und `left right` ungültig sind.
    - Reihenfolge: Beim Kombinieren von Schlüsselwörtern ist die Reihenfolge nicht wichtig, da der Browser sie neu ordnen kann; die Werte `top left` und `left top` führen zum gleichen Ergebnis. Beim Kombinieren von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Reihenfolge wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y, also ist der Wert `right 20px` gültig, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

    **3-Wert-Syntax:** Zwei Werte sind Schlüsselwortwerte und der dritte ist der Versatz für den vorhergehenden Wert:

    - Der erste Wert ist einer der Schlüsselwortwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, definiert dies X. Wenn `top` oder `bottom` angegeben sind, definiert dies Y und der andere Schlüsselwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert, wenn er der zweite Wert ist, ist der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Längen- oder Prozentwert ist ein Versatz für den Schlüsselwert, der ihm vorausgeht. Die Kombination eines Schlüsselworts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werten ist ungültig.

    **4-Wert-Syntax:** Die ersten und dritten Werte sind Schlüsselwortwerte, die X und Y definieren. Die zweiten und vierten Werte sind Versätze für die vorhergehenden X- und Y-Schlüsselwerte:

    - Die ersten und dritten Werte entsprechen einem der Schlüsselwortwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben wird, definiert dies Y und der andere Schlüsselwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Bezüglich Prozentsätze

Der prozentuale Versatz der angegebenen Hintergrundbildposition ist relativ zum Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbilds mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder die 0%-Marke des Bildes wird auf der 0%-Marke des Containers liegen. Ein Wert von 100% bedeutet, dass die rechte (oder untere) Kante des Hintergrundbildes mit der rechten (oder unteren) Kante des Containers ausgerichtet ist, oder die 100%-Marke des Bildes wird auf der 100%-Marke des Containers liegen. Somit zentriert ein Wert von 50% horizontal oder vertikal das Hintergrundbild, da die 50% des Bildes an der 50%-Marke des Containers liegen werden. Ähnlich bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% vom linken und 75% vom oberen Rand entfernt ist, an der Stelle des Containers platziert wird, die 25% vom linken und 75% vom oberen Rand des Containers entfernt ist.

Im Wesentlichen passiert, dass die Hintergrundbilddimension von der entsprechenden Containerdimension _abgezogen_ wird und dann ein Prozentsatz des resultierenden Wertes als direkter Versatz vom linken (oder oberen) Rand verwendet wird.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Anhand der X-Achse als Beispiel, nehmen wir an, wir haben ein Bild, das 300px breit ist und es in einem Container verwenden, der 100px breit ist, mit `background-size` auf auto gesetzt:

```plain
100px - 300px = -200px (Differenz zwischen Container und Bild)
```

So dass wir mit Positionsprozenten von -25%, 0%, 50%, 100%, 125% die folgenden Bild-zu-Container-Rand-Versatzwerte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Mit diesen resultierenden Werten für unser Beispiel ist die **linke Kante** des **Bildes** vom **linken Rand** des **Containers** versetzt um:

- \+ 50px (die linke Bildkante wird in der Mitte des 100-Pixel-breiten Containers platziert)
- 0px (linke Bildkante fällt mit der linken Containerkante zusammen)
- \-100px (linke Bildkante 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px Bereich des Bildes im Container zentriert ist)
- \-200px (linke Bildkante 200px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Bildkante mit der rechten Containerkante zusammenfällt)
- \-250px (linke Bildkante 250px links vom Container, in diesem Beispiel wird die rechte Kante des 300px breiten Bildes in der Mitte des Containers platziert)

Erwähnenswert ist, dass wenn Ihre `background-size` der Containergröße für eine gegebene Achse entspricht, dann hat eine _prozentuale_ Position für diese Achse keine Wirkung, da die "Container-Bild-Differenz" null ist. Sie müssen dann mit absoluten Werten versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder positionieren

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}} Eigenschaft, um ein gelbes, rechteckiges Element mit einem Sternbild zu erstellen. In jedem Beispiel ist der Stern an einer anderen Position. Das dritte Beispiel veranschaulicht, wie man Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angibt.

#### HTML

```html
<div class="exampleone">Beispiel Eins</div>
<div class="exampletwo">Beispiel Zwei</div>
<div class="examplethree">Beispiel Drei</div>
```

#### CSS

```css
/* Gemeinsame Eigenschaften für alle <div>s */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* Diese Beispiele verwenden die `background` Kurzschreibweise */
.exampleone {
  background: url("startransparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* Mehrere Hintergrundbilder: Jedes Bild wird mit der
   entsprechenden Position, von der ersten bis zur letzten angegebenen, abgestimmt. */
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
