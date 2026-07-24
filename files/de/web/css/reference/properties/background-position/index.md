---
title: "`background-position` CSS property"
short-title: background-position
slug: Web/CSS/Reference/Properties/background-position
l10n:
  sourceCommit: d4dc9d899ebec0e9c22a5bb9229f39f33457d8df
---

Die **`background-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest.

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

### Werte

Diese Eigenschaft wird als ein oder mehrere kommagetrennte `<position>`-Werte angegeben:

- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}}. Eine zweidimensionale Koordinate, bestehend aus ein bis zwei Versätzen und optional ein bis zwei Versatzseiten, die verwendet wird, um einen Ort relativ zu den Rändern eines Elementrahmens festzulegen.

## Beschreibung

Die `background-position`-Eigenschaft legt die Anfangsposition für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} festgelegt wird.

Der Wert wird als Liste von kommagetrennten Bildpositionen angegeben, wobei jede Bildposition mit einem bis vier Werten definiert ist. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, repräsentiert der erste Wert die horizontale Position und der zweite die vertikale Position. Wenn nur ein Wert angegeben wird, wird der zweite Wert als `center` angenommen. Wenn drei oder vier Werte verwendet werden, sind die Längen-Prozentwerte Versätze für die vorangehenden Schlüsselwortwerte.

- 1-Wert-Syntax
  - : Der Wert kann sein:
    - Der Schlüsselwert `center`, der das Bild zentriert.
    - Einer der Schlüsselwerte `top`, `left`, `bottom` oder `right`. Dies legt eine Kante fest, gegen die das Element platziert werden soll. Die andere Dimension wird dann auf 50% gesetzt, sodass das Element in der Mitte der angegebenen Kante platziert wird.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Dies gibt die X-Koordinate relativ zur linken Kante an, wobei die Y-Koordinate auf 50% gesetzt wird.

- 2-Wert-Syntax
  - : Ein Wert definiert X und der andere Y. Jeder Wert kann sein:
    - Einer der Schlüsselwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` angegeben ist, definiert dies X und der andere angegebene Wert definiert Y. Wenn `top` oder `bottom` angegeben ist, definiert dies Y und der andere Wert definiert X.
    - Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Wenn der andere Wert `left` oder `right` ist, definiert dieser Wert Y, relativ zur oberen Kante. Wenn der andere Wert `top` oder `bottom` ist, definiert dieser Wert X, relativ zur linken Kante. Wenn beide Werte `<length>` oder `<percentage>`-Werte sind, definiert der erste X und der zweite Y.
    - Beachten Sie: Wenn ein Wert `top` oder `bottom` ist, kann der andere Wert nicht `top` oder `bottom` sein. Wenn ein Wert `left` oder `right` ist, kann der andere Wert nicht `left` oder `right` sein. Das bedeutet z. B., dass `top top` und `left right` nicht gültig sind.
    - Reihenfolge: Beim Kombinieren von Schlüsselwörtern ist die Platzierung nicht wichtig, da der Browser sie neu anordnen kann; die Werte `top left` und `left top` führen zum gleichen Ergebnis. Beim Kombinieren von {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} mit einem Schlüsselwort ist die Platzierung wichtig: Der Wert, der X definiert, sollte zuerst kommen, gefolgt von Y, sodass beispielsweise der Wert `right 20px` gültig ist, während `20px right` ungültig ist. Die Werte `left 20%` und `20% bottom` sind gültig, da X- und Y-Werte klar definiert sind und die Platzierung korrekt ist.
    - Der Standardwert ist `left top` oder `0% 0%`.

- 3-Wert-Syntax
  - : Zwei Werte sind Schlüsselwörter und der dritte ist der Versatz für den vorhergehenden Wert:
    - Der erste Wert ist einer der Schlüsselwerte `top`, `left`, `bottom`, `right` oder `center`. Wenn `left` oder `right` hier angegeben sind, definiert dies X. Wenn `top` oder `bottom` angegeben sind, definiert dies Y und der andere Schlüsselwert definiert X.
    - Der {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Wert, wenn es der zweite Wert ist, ist der Versatz für den ersten Wert. Wenn es der dritte Wert ist, ist es der Versatz für den zweiten Wert.
    - Der einzelne Längen- oder Prozentsatzwert ist ein Versatz für den vorausgehenden Schlüsselwert. Die Kombination eines Schlüsselwerts mit zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Werten ist nicht gültig.

- 4-Wert-Syntax
  - : Die ersten und dritten Werte sind Schlüsselwerte, die X und Y definieren. Die zweiten und vierten Werte sind Versätze für die vorangehenden X- und Y-Schlüsselwerte:
    - Die ersten und dritten Werte sind gleich einem der Schlüsselwerte `top`, `left`, `bottom` oder `right`. Wenn `left` oder `right` für den ersten Wert angegeben ist, definiert dies X und der andere Wert definiert Y. Wenn `top` oder `bottom` für den ersten Wert angegeben ist, definiert dies Y und der andere Schlüsselwert definiert X.
    - Die zweiten und vierten Werte sind {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}-Werte. Der zweite Wert ist der Versatz für das erste Schlüsselwort. Der vierte Wert ist der Versatz für das zweite Schlüsselwort.

### Zu Prozentwerten

Der prozentuale Versatz der angegebenen Position des Hintergrundbildes ist relativ zum Container. Ein Wert von 0% bedeutet, dass die linke (oder obere) Kante des Hintergrundbildes mit der entsprechenden linken (oder oberen) Kante des Containers ausgerichtet ist, oder dass die 0%-Marke des Bildes an der 0%-Marke des Containers ist. Ein Wert von 100% bedeutet, dass die _rechte_ (oder _untere_) Kante des Hintergrundbildes mit der _rechten_ (oder _unteren_) Kante des Containers ausgerichtet ist, oder dass die 100%-Marke des Bildes an der 100%-Marke des Containers ist. Somit zentriert ein Wert von 50% das Hintergrundbild horizontal oder vertikal, da die 50%-Marke des Bildes an der 50%-Marke des Containers ist. Ähnlich bedeutet `background-position: 25% 75%`, dass der Punkt auf dem Bild, der 25% von links und 75% von oben entfernt ist, an dem Punkt des Containers platziert wird, der 25% von der linken Seite des Containers und 75% von oben entfernt ist.

Im Wesentlichen wird die Abmessung des Hintergrundbildes von der entsprechenden Containerabmessung _subtrahiert_ und ein Prozentsatz des resultierenden Werts wird als direkter Versatz von der linken (oder oberen) Kante verwendet.

```plain
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Nehmen wir die X-Achse als Beispiel, sagen wir, wir haben ein Bild, das 300px breit ist und wir verwenden es in einem Container, der 100px breit ist, mit `background-size` auf Auto gesetzt:

```plain
100px - 300px = -200px (container & image difference)
```

So dass mit Positionsprozenten von -25%, 0%, 50%, 100%, 125%, wir diese Bild-zu-Container-Kantenversatzwerte erhalten:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Also mit diesen resultierenden Werten für unser Beispiel ist die **linke Kante** des **Bildes** um den folgenden Betrag von der **linken Kante** des **Containers** versetzt:

- \+ 50px (die linke Bildkante in die Mitte des 100-Pixel-breiten Containers setzen)
- 0px (linke Bildkante zusammenfallend mit der linken Containerkante)
- \-100px (linke Bildkante 100px links vom Container, in diesem Beispiel bedeutet das, dass der mittlere 100px-Bildbereich im Container zentriert ist)
- \-200px (linke Bildkante 200px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Bildkante zusammen mit der rechten Containerkante ist)
- \-250px (linke Bildkante 250px links vom Container, in diesem Beispiel bedeutet das, dass die rechte Kante des 300px-breiten Bildes in der Mitte des Containers ist)

Es ist erwähnenswert, dass, wenn Ihre `background-size` dem Containerumfang für eine gegebene Achse entspricht, eine _prozentuale_ Position für diese Achse keine Wirkung hat, da der "Container-Bild-Unterschied" null sein wird. Sie müssen mit absoluten Werten versetzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder positionieren

Jedes dieser drei Beispiele verwendet die {{cssxref("background")}}-Eigenschaft, um ein gelbes, rechteckiges Element zu erstellen, das ein Sternbild enthält. In jedem Beispiel ist der Stern an einer anderen Position. Das dritte Beispiel zeigt, wie Positionen für zwei verschiedene Hintergrundbilder innerhalb eines Elements angegeben werden.

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
