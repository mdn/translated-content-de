---
title: offset-position
slug: Web/CSS/offset-position
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`offset-position`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Anfangsposition eines Elements entlang eines Pfades. Diese Eigenschaft wird typischerweise in Kombination mit der {{cssxref("offset-path")}} Eigenschaft verwendet, um einen Bewegungseffekt zu erzeugen. Der Wert von `offset-position` bestimmt, wo das Element initial platziert wird, um sich entlang eines Offset-Pfades zu bewegen, wenn eine `offset-path` Funktion wie {{cssxref("basic-shape/path", "path()")}} keine eigene Startposition spezifiziert.

Die `offset-position`-Eigenschaft ist Teil eines Bewegungssystems, das auf {{cssxref("offset")}}-Bestandteileigenschaften basiert, einschließlich {{cssxref("offset-anchor")}}, {{cssxref("offset-distance")}} und `offset-path`. Diese Eigenschaften arbeiten zusammen, um verschiedene Bewegungseffekte entlang eines Pfades zu erzeugen.

## Syntax

```css
/* Schlüsselwortwerte */
offset-position: normal;
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage>-Werte */
offset-position: 25% 75%;

/* <length>-Werte */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Randabstandswerte */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Globale Werte */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

### Werte

- `normal`
  - : Gibt an, dass das Element keine Offset-Startposition hat und das Element bei `50% 50%` des umschließenden Blocks platziert. Dies ist der Standardwert.
- `auto`
  - : Gibt an, dass die Offset-Startposition die obere linke Ecke des Element-Box ist.
- {{cssxref("&lt;position&gt;")}}
  - : Gibt die Position als x/y-Koordinate an, um ein Element relativ zu seinen Boxrändern zu platzieren. Die Position kann unter Verwendung von einem bis vier Werten definiert werden. Wenn zwei Nicht-Schlüsselwort-Werte verwendet werden, stellt der erste Wert die horizontale Position und der zweite die vertikale dar. Wenn nur ein Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn drei oder vier Werte verwendet werden, sind die {{cssxref("length-percentage")}}-Werte Offsets für die vorangehenden Schlüsselwortwerte. Für eine genauere Erklärung dieser Wertetypen siehe {{cssxref("background-position")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der anfänglichen offset-position für einen offset-path

In diesem Beispiel wird die {{cssxref("offset-path")}} Eigenschaft verwendet, um den Pfad zu definieren, entlang dem sich das `cyane` Element bewegen soll. Der Wert der {{cssxref("basic-shape/path", "path()")}} CSS-Funktion ist ein [SVG-Datenpfad](/de/docs/Web/SVG/Attribute/d), der einen gekrümmten Pfad beschreibt. Das Element bewegt sich entlang dieses gekrümmten Pfads während der `move` Animation.

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

### Vergleich verschiedener Anfangspositionen

Dieses Beispiel vergleicht visuell verschiedene anfängliche Offset-Startpositionen eines Elements, wenn {{cssxref("ray", "ray()")}} verwendet wird, um einen Wert für die {{cssxref("offset-path")}} Eigenschaft anzugeben. Die Zahl innerhalb der Element-Box gibt das Element an, auf das CSS angewendet wird, sowie den Ankerpunkt des Elements.

```html hidden
<div class="wrap">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>
    offset-position: normal;
    /* Kein offset-path angegeben */
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

In `box0`, bedeutet das Fehlen der `offset-path` Eigenschaft, dass eine `offset-position` von entweder `normal` oder `auto` keinen Effekt hat. Wenn `offset-position` `normal` ist, beginnt der Strahl in der Mitte des umschließenden Blocks (also `50% 50%`). Dies ist die Standard-Startposition eines Offset-Pfades und wird verwendet, wenn keine `offset-position` spezifiziert ist. Beachten Sie den Unterschied zwischen den Offset-Startpositionen `auto` und `left top`. Der Wert `auto` richtet den Ankerpunkt des Elements auf seine eigene obere linke Ecke aus, während der Wert `left top` den Ankerpunkt des Elements auf die obere linke Ecke des umschließenden Blocks ausrichtet.

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