---
title: "`offset-position` CSS property"
short-title: offset-position
slug: Web/CSS/Reference/Properties/offset-position
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`offset-position`** definiert die Ausgangsposition eines Elements entlang eines Pfads. Sie wird üblicherweise zusammen mit der Eigenschaft {{cssxref("offset-path")}} verwendet, um einen Bewegungseffekt zu erzeugen. Der Wert von `offset-position` bestimmt, wo das Element zu Beginn einer Bewegung entlang eines Offset-Pfads platziert wird, wenn eine `offset-path`-Funktion wie {{cssxref("basic-shape/path", "path()")}} keine eigene Startposition angibt.

Die Eigenschaft `offset-position` ist Teil eines Bewegungssystems, das auf den zu {{cssxref("offset")}} gehörenden Eigenschaften basiert, darunter {{cssxref("offset-anchor")}}, {{cssxref("offset-distance")}} und `offset-path`. Diese Eigenschaften wirken zusammen, um verschiedene Bewegungseffekte entlang eines Pfads zu erzeugen.

## Syntax

```css
/* Keyword values */
offset-position: normal;
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage> values */
offset-position: 25% 75%;

/* <length> values */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Edge offsets values */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Global values */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

### Werte

- `normal`
  - : Gibt an, dass das Element keine Offset-Startposition hat, und platziert es bei `50% 50%` des umschließenden Blocks. Dies ist der Standardwert.
- `auto`
  - : Gibt an, dass die Offset-Startposition die obere linke Ecke der Elementbox ist.
- {{cssxref("&lt;position&gt;")}}
  - : Gibt die Position als x/y-Koordinate an, um ein Element relativ zu den Rändern seiner Box zu platzieren. Die Position kann mit einem bis vier Werten definiert werden. Werden zwei Werte verwendet, die keine Schlüsselwörter sind, steht der erste für die horizontale und der zweite für die vertikale Position. Wird nur ein Wert angegeben, wird für den zweiten Wert `center` angenommen. Werden drei oder vier Werte verwendet, geben die {{cssxref("length-percentage")}}-Werte Verschiebungen relativ zu den vorangehenden Schlüsselwörtern an. Weitere Erläuterungen zu diesen Werttypen finden Sie unter {{cssxref("background-position")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausgangsposition für einen Offset-Pfad festlegen

In diesem Beispiel definiert die Eigenschaft {{cssxref("offset-path")}} den Pfad, entlang dessen sich das Element `cyan` bewegen soll. Der Wert der CSS-Funktion {{cssxref("basic-shape/path", "path()")}} ist ein [SVG-Pfad](/de/docs/Web/SVG/Reference/Attribute/d), der eine gekrümmte Linie beschreibt. Während der Animation `move` bewegt sich das Element entlang dieses Pfads.

#### HTML

```html
<div id="wrap">
  <div id="motion-demo"></div>
</div>
```

#### CSS

```css hidden
#wrap {
  width: 260px;
  height: 160px;
  border: 1px dashed black;
}
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  offset-position: left top;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('setting_initial_offset-position_for_an_offset-path', '100%', 200)}}

### Verschiedene Offset-Startpositionen vergleichen

Dieses Beispiel vergleicht visuell verschiedene Offset-Startpositionen eines Elements, wenn {{cssxref("ray()")}} als Wert für die Eigenschaft {{cssxref("offset-path")}} verwendet wird. Die Zahl innerhalb der Elementbox kennzeichnet das Element, auf das CSS angewendet wird, sowie dessen Ankerpunkt.

```html hidden
<div class="wrap">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>
    offset-position: normal;
    /* No offset-path specified */
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box1">1</div>
  <pre>
    offset-position: normal;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box2">2</div>
  <pre>
    offset-position: auto;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box3">3</div>
  <pre>
    offset-position: left top;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box4">4</div>
  <pre>
    offset-position: 30% 70%;
    offset-path: ray(120deg);
  </pre>
</div>
```

```css hidden
.wrap {
  position: relative;
  width: 80vw;
  height: 120px;
  border: 1px solid black;
  margin: 0 2em 4em 5em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: green;
  border-top: 6px dashed white;
  background-clip: border-box;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 20%;
  color: white;
}

.box0 {
  offset-position: normal;
}

.box1 {
  offset-position: normal;
  offset-path: ray(0deg);
}

.box2 {
  offset-position: auto;
  offset-path: ray(0deg);
}

.box3 {
  offset-position: left top;
  offset-path: ray(0deg);
}

.box4 {
  offset-position: 30% 70%;
  offset-path: ray(120deg);
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing various offset starting positions', '100%', 930)}}

Bei `box0` hat `offset-position` mit dem Wert `normal` oder `auto` keine Wirkung, da die Eigenschaft `offset-path` fehlt. Wenn `offset-position` den Wert `normal` hat, beginnt der Strahl in der Mitte des umschließenden Blocks (also bei `50% 50%`). Dies ist die standardmäßige Startposition eines Offset-Pfads und wird verwendet, wenn kein `offset-position` angegeben ist. Beachten Sie den Unterschied zwischen den Offset-Startpositionen `auto` und `left top`: Der Wert `auto` richtet den Ankerpunkt des Elements an dessen eigener oberer linker Ecke aus, während `left top` ihn an der oberen linken Ecke des umschließenden Blocks ausrichtet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
