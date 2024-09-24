---
title: offset-path
slug: Web/CSS/offset-path
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`offset-path`** [CSS](/de/docs/Web/CSS) Eigenschaft legt einen Pfad fest, dem ein Element folgen soll und bestimmt die Positionierung des Elements innerhalb des Pfad-Elterncontainers oder des SVG-Koordinatensystems. Der Pfad ist eine Linie, eine Kurve oder eine geometrische Form, entlang der das Element positioniert oder bewegt wird.

Die Eigenschaft `offset-path` wird in Kombination mit den Eigenschaften {{cssxref("offset-distance")}}, {{cssxref("offset-rotate")}} und {{cssxref("offset-anchor")}} verwendet, um die Position und Ausrichtung des Elements entlang eines Pfades zu steuern.

{{EmbedInteractiveExample("pages/css/offset-path.html")}}

## Syntax

```css
/* Vorgabe */
offset-path: none;

/* Liniensegment */
offset-path: ray(45deg closest-side contain);
offset-path: ray(contain 150deg at center center);
offset-path: ray(45deg);

/* URL */
offset-path: url(#myCircle);

/* Grundform */
offset-path: circle(50% at 25% 25%);
offset-path: ellipse(50% 50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path("M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200");
offset-path: rect(5px 5px 160px 145px round 20%);
offset-path: xywh(0 5px 100% 75% round 15% 0);

/* Koordinatenbox */
offset-path: content-box;
offset-path: padding-box;
offset-path: border-box;
offset-path: fill-box;
offset-path: stroke-box;
offset-path: view-box;

/* Globale Werte */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: revert-layer;
offset-path: unset;
```

### Werte

Die `offset-path` Eigenschaft kann als Wert einen `<offset-path>` Wert annehmen, einen [`<coord-box>`](/de/docs/Web/CSS/box-edge#values) Wert, oder beides, oder das Schlüsselwort `none`. Der `<offset-path>` Wert ist eine {{cssxref("ray","ray()")}} Funktion, ein {{cssxref("url_value", "&lt;url&gt;")}} Wert, oder ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Wert.

- `none`

  - : Gibt an, dass das Element keinem Offset-Pfad folgt. Der Wert `none` entspricht dem Element, das keine [Offset-Transformation](/de/docs/Web/CSS/offset) besitzt. Die Bewegung des Elements wird in diesem Fall durch seine Standardpositions-Eigenschaften bestimmt, wie {{cssxref("top")}} und {{cssxref("left")}}, anstatt durch einen Offset-Pfad. Dies ist der Standardwert.

- `<offset-path>`

  - : Eine `ray()` Funktion, ein `<url>` Wert oder ein `<basic-shape>` Wert, der den geometrischen Offset-Pfad angibt. Wenn weggelassen, ist die Pfadform für den `<coord-box>` Wert `inset(0 round X)`, wobei `X` der Wert von {{cssxref("border-radius")}} des Elements ist, das den [umgebenden Block](/de/docs/Web/CSS/Containing_block) erzeugt.

    - {{cssxref("ray","ray()")}}

      - : Definiert eine Linie, die an einer festgelegten Position beginnt, eine festgelegte Länge hat und im angegebenen Winkel verläuft. Die `ray()` Funktion akzeptiert bis zu vier Parameter – einen {{CSSxRef("angle")}}, einen optionalen Größenwert, das optionale Schlüsselwort `contain` und einen optionalen `at <position>`.

    - {{cssxref("url_value", "&lt;url&gt;")}}

      - : Gibt die ID eines [SVG-Formelements](/de/docs/Web/SVG/Tutorial/Basic_Shapes) an. Der Pfad ist die Form des SVG-Elements {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, oder {{SVGElement("rect")}}, das durch seine `id` in der `url()` Funktion referenziert wird. Wenn die URL kein Formelement referenziert oder anderweitig ungültig ist, lautet der aufgelöste Wert für den Offset-Pfad `path("M0,0")` (was ein gültiger `<basic-shape>` Wert ist).

    - {{cssxref("basic-shape")}}

      - : Gibt den Offset-Pfad als äquivalenten Pfad einer [CSS-Grundformfunktion](/de/docs/Web/CSS/basic-shape) an, wie {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/path","path()")}}, {{cssxref("basic-shape/polygon","polygon()")}}, {{cssxref("basic-shape/rect","rect()")}}, oder {{cssxref("basic-shape/xywh","xywh()")}}. Beispielsweise, wenn die `<basic_shape>` eine `ellipse()` Funktion ist, dann ist der Pfad die Umrisslinie der Ellipse, beginnend am rechtesten Punkt der Ellipse, im Uhrzeigersinn eine volle Rotation ausführend. Für `ellipse()` und `circle()`, die den Parameter `at <position>` akzeptieren, wenn `<position>` weggelassen wird, ist die Position standardmäßig `center`, es sei denn, das Element hat eine {{cssxref("offset-position")}} angegeben. In diesem Fall wird der `offset-position` Wert für den Parameter `at <position>` verwendet. Komplexere Formen können unter Verwendung der {{cssxref("basic-shape/shape","shape()")}} Funktion definiert werden.

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)

  - : Gibt die Größeninformationen der [Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) an, die den Pfad enthält. Die Referenzbox wird von dem Element abgeleitet, das den umgebenden Block für dieses Element erstellt. Dieser Parameter ist optional. Wenn nicht angegeben, ist der Standardwert `border-box` in CSS-Kontexten. In SVG-Kontexten wird der Wert als `view-box` behandelt. Wenn `ray()` oder `<basic-shape>` verwendet werden, um den Offset-Pfad zu definieren, liefert der `<coord-box>` Wert die Referenzbox für den Strahl oder die `<basic-shape>`, jeweils. Wenn `<url>` verwendet wird, um den Offset-Pfad zu definieren, liefert der `<coord-box>` Wert das Ansichtsfenster und das Benutzerkoordinatensystem für das Formelement, wobei der Ursprung (`0 0`) in der oberen linken Ecke liegt und die Größe `1px` beträgt.

## Beschreibung

Die `offset-path` Eigenschaft definiert einen Pfad, dem ein animiertes Element folgen kann. Ein Offset-Pfad ist entweder ein bestimmter Pfad mit einem oder mehreren Unterpfaden oder die Geometrie einer nicht-stilierten Grundform. Die genaue Position des Elements auf dem Offset-Pfad wird durch die {{cssxref("offset-distance")}} Eigenschaft bestimmt. Jede Form oder jeder Pfad muss eine Anfangsposition für den berechneten Wert von `0` für {{cssxref("offset-distance")}} definieren und eine anfängliche Richtung, die die Drehung des Objekts zur Anfangsposition spezifiziert.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `motion-path`. Sie wurde in `offset-path` umbenannt, da die Eigenschaft statische Positionen beschreibt, nicht Bewegung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines offset-path mit Box-Kanten Positionierung

Dieses Beispiel zeigt die Verwendung verschiedener `<coord-box>` Werte in der Eigenschaft `offset-path`.

```html hidden
<div class="box blueBox"></div>
<div class="box redBox"></div>
<div class="box greenBox"></div>
```

```css hidden
body {
  width: 300px;
  height: 200px;
  border-radius: 50px;
  border: dashed aqua;
  border-width: 25px;
  padding: 25px;
  margin: 50px;
}
```

```css
.box {
  width: 40px;
  height: 20px;
  animation: move 8000ms infinite ease-in-out;
}

.blueBox {
  background-color: blue;
  offset-path: border-box;
  offset-distance: 5%;
}

.greenBox {
  background-color: green;
  offset-path: padding-box;
  offset-distance: 8%;
}

.redBox {
  background-color: red;
  offset-path: content-box;
  offset-distance: 12%;
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

In diesem Beispiel wurden die Werte für Rand, Rahmen und Abstände absichtlich groß gewählt, um die Platzierung der blauen, grünen und roten Rechtecke auf ihren jeweiligen `<coord-box>` Kanten: border-box, padding-box und content-box zu demonstrieren.

![Das blaue Rechteck sitzt am äußeren Rand der border-box, das grüne Rechteck befindet sich am inneren Rand der border, welcher der äußere Rand der padding-box ist, und das rote Rechteck ist am äußeren Rand der content-box.](offset-path-coord-box.png)

#### Ergebnis

{{EmbedLiveSample('Creating an offset-path using box-edge positioning', '100%', 400)}}

### Erstellen eines offset-path mit path()

In diesem Beispiel erzeugt das {{svgelement("svg")}}-Element ein Haus mit einem Schornstein und definiert auch zwei Hälften einer Schere. Das Haus und der Schornstein bestehen aus Rechtecken und Polygonen, und die Scherenhälften werden durch zwei verschiedene Pfadelemente dargestellt. Im CSS-Code wird die `offset-path` Eigenschaft verwendet, um einen Pfad für die beiden Scherenhälften anzugeben. Dieser durch CSS definierte Pfad ist identisch mit dem, der durch das `<path>`-Element im SVG repräsentiert wird, welches die Kontur des Hauses einschließlich des Schornsteins ist.

```html live-sample___offset_path_path
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="700"
  height="450"
  viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595" y="423" width="610" height="377" fill="blue" />
  <polygon points="506,423 900,190 1294,423" fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300" fill="red" />
  <path
    id="house"
    d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
    fill="none"
    stroke="black"
    stroke-width="13"
    stroke-linejoin="round"
    stroke-linecap="round" />
  <path
    id="firstScissorHalf"
    class="scissorHalf"
    d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
    transform="translate(0,0)"
    fill="green"
    stroke="black"
    stroke-width="5"
    stroke-linejoin="round"
    stroke-linecap="round"
    fill-rule="evenodd" />
  <path
    id="secondScissorHalf"
    class="scissorHalf"
    d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
    transform="translate(0,0)"
    fill="forestgreen"
    stroke="black"
    stroke-width="5"
    stroke-linejoin="round"
    stroke-linecap="round"
    fill-rule="evenodd" />
</svg>
```

```css live-sample___offset_path_path
.scissorHalf {
  offset-path: path(
    "M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190"
  );
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
  to {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

Ohne die `offset-path` Eigenschaft würden die beiden Hälften der Schere standardmäßig in der oberen linken Ecke der Leinwand positioniert. Durch die Verwendung von `offset-path` sind die beiden Scherenhälften mit dem Startpunkt des SVG-Pfades ausgerichtet und können sich entlang dieses bewegen.

{{EmbedLiveSample('offset_path_path', '100%', '450')}}

### Erstellen eines offset-path mit url()

Dieses Beispiel zeigt, wie auf eine SVG-Form verwiesen werden kann, um die Form des Pfades zu definieren, den ein Element folgen kann. Der grüne Kreis (definiert durch `.target`) folgt dem Pfad eines Rechtecks, das definiert wird, indem die ID der SVG-Form (`svgRect`) an die `offset-path` Eigenschaft durch die Verwendung von `url()` übergeben wird.

Das SVG-Rechteck, das die Pfadform definiert, wird hier nur gezeigt, um visuell zu demonstrieren, dass der grüne Kreis tatsächlich dem durch dieses Rechteck definierten Pfad folgt.

```html live-sample___offset_path_url
<div class="outer">
  <div class="target"></div>
</div>
  <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" >
    <rect id="svgRect" x="50" y="50" width="200" height="100" />
  </svg>
</div>
```

```css hidden live-sample___offset_path_url
.outer {
  position: absolute;
}
```

```css live-sample___offset_path_url
.target {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  offset-path: url(#svgRect);
  offset-anchor: auto;
  animation: move 5s linear infinite;
}

#svgRect {
  fill: antiquewhite;
  stroke: black;
  stroke-width: 2;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('live-sample___offset_path_url', '100%', '250')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG \<path>](/de/docs/Web/SVG/Tutorial/Paths)
- {{cssxref("basic-shape/path","path()")}}
- Weitere Demos:
  - [Beispiele mit verschiedenen Formwerten](https://codepen.io/team/css-tricks/pen/WZdKMq) auf Codepen von CSS-Tricks
  - [Bewegung eines Dreiecks entlang eines gekrümmten Pfades](https://codepen.io/ericwilligers/pen/jMbJPp) auf Codepen von Eric Willigers
  - [Bewegung eines Paars Scheren entlang der Form eines Hauses](https://codepen.io/ericwilligers/pen/bwVZNa) auf Codepen von Eric Willigers
  - [Bewegung mehrerer Augenpaare](https://jsfiddle.net/ericwilligers/r1snqdan/) auf JSFiddle von Eric Willigers
