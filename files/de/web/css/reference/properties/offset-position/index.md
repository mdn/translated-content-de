---
title: offset-position
slug: Web/CSS/Reference/Properties/offset-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`offset-position`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Anfangsposition eines Elements entlang eines Pfades. Diese Eigenschaft wird typischerweise in Kombination mit der {{cssxref("offset-path")}} Eigenschaft verwendet, um einen Bewegungseffekt zu erzeugen. Der Wert von `offset-position` bestimmt, wo das Element initial platziert wird, um sich entlang eines Versatzpfades zu bewegen, wenn eine `offset-path` Funktion wie {{cssxref("basic-shape/path", "path()")}} keine eigene Startposition festlegt.

Die `offset-position` Eigenschaft ist Teil eines Bewegungssystems basierend auf {{cssxref("offset")}} Bestandteileigenschaften, einschließlich {{cssxref("offset-anchor")}}, {{cssxref("offset-distance")}} und `offset-path`. Diese Eigenschaften arbeiten zusammen, um verschiedene Bewegungseffekte entlang eines Pfades zu erzeugen.

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
  - : Gibt an, dass das Element keine Anfangsversatzposition hat und das Element bei `50% 50%` des umschließenden Blocks platziert. Dies ist der Standardwert.
- `auto`
  - : Gibt an, dass die Anfangsversatzposition die obere linke Ecke des Box des Elements ist.
- {{cssxref("&lt;position&gt;")}}
  - : Gibt die Position als x/y-Koordinate an, um ein Element relativ zu seinen Boxkanten zu platzieren. Die Position kann mit einem bis vier Werten definiert werden. Wenn zwei Nicht-Keyword-Werte verwendet werden, stellt der erste Wert die horizontale Position dar und der zweite die vertikale Position. Wenn nur ein Wert angegeben wird, wird der zweite Wert als `center` angenommen. Wenn drei oder vier Werte verwendet werden, sind die {{cssxref("length-percentage")}} Werte Versätze für die vorherigen Schlüsselwortwerte. Weitere Erklärungen zu diesen Werttypen finden Sie unter {{cssxref("background-position")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der anfänglichen offset-position für einen offset-path

In diesem Beispiel wird die {{cssxref("offset-path")}} Eigenschaft verwendet, um den Pfad zu definieren, entlang dem sich das `cyan` Element bewegen soll. Der Wert der {{cssxref("basic-shape/path", "path()")}} CSS Funktion ist ein [SVG-Datenpfad](/de/docs/Web/SVG/Reference/Attribute/d), der einen gekrümmten Pfad beschreibt. Das Element bewegt sich während der `move` Animation entlang dieses gekrümmten Pfads.

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

{{EmbedLiveSample('Setting_initial_offset_position_for_an_offset-path', '100%', 200)}}

### Vergleich verschiedener initialer Offset-Startpositionen

Dieses Beispiel vergleicht visuell verschiedene Anfangs-Offset-Startpositionen eines Elements, wenn {{cssxref("ray", "ray()")}} verwendet wird, um einen Wert für die {{cssxref("offset-path")}} Eigenschaft anzugeben. Die Zahl innerhalb des Elementrahmens zeigt das Element, auf das CSS angewendet wird, sowie den Ankerpunkt des Elements.

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

In `box0` bedeutet das Fehlen der `offset-path` Eigenschaft, dass ein `offset-position` von entweder `normal` oder `auto` keine Wirkung hat. Wenn `offset-position` `normal` ist, beginnt der Strahl im Zentrum des umschließenden Blocks (d.h. `50% 50%`). Dies ist die Standard-Startposition eines Offset-Pfads und wird verwendet, wenn keine `offset-position` angegeben ist. Beachten Sie den Unterschied zwischen den Offset-Startpositionen `auto` und `left top`. Der Wert `auto` richtet den Ankerpunkt des Elements an seiner eigenen oberen linken Ecke aus, während der Wert `left top` den Ankerpunkt des Elements auf die obere linke Ecke des umschließenden Blocks ausrichtet.

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
