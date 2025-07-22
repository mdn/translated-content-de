---
title: Pfade
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: 9ce0859e6ae001ec514ece9efcb3f315df5f504f
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

Das {{SVGElement('path')}} Element ist das leistungsstärkste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erstellen komplexe Formen, indem sie mehrere gerade Linien oder Kurven kombinieren. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#polyline) Elemente erstellt werden. Während `<polyline>` und `<path>` Elemente ähnlich aussehende Formen erstellen können, erfordern `<polyline>` Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig beim Zeichnen von SVGs. Während das Erstellen komplexer Pfade mit einem XML-Editor oder Texteditor nicht empfohlen wird, ermöglicht das Verständnis ihrer Funktionsweise, Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>` Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Mehr dazu in [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes).) Das `d` Attribut enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen spezifischen Buchstaben instanziiert (zum Beispiel durch das Erstellen einer Klasse, Benennen und Positionieren). Beispielsweise wollen wir zu den x und y Koordinaten (`10`, `10`) bewegen. Der "Move to" Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er zu einem Punkt verschoben werden muss. Um also zu (`10`, `10`) zu verschieben, würde der Befehl `M 10 10` verwendet. Danach beginnt der Parser, nach dem nächsten Befehl zu suchen.

Alle Befehle gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z.B. _bewegen Sie sich 10px hoch und 7px nach links vom letzten Punkt_).

Koordinaten im `d` Parameter sind **immer einheitenlos** und daher im Benutzerkoordinatensystem. Später werden wir lernen, wie Pfade transformiert werden können, um anderen Anforderungen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}} Knoten. Der erste Befehl ist das "Move To" oder `M`, das oben beschrieben wurde. Es nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der sich bewegt wird. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Der "Move To" Befehl erscheint zu Beginn von Pfaden, um anzugeben, wo das Zeichnen beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht angezeigt würde, wenn ein Pfad einfach normal gezeichnet würde. Zum Beispiel:

```html live-sample___move-to
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10" />
</svg>
```

```html hidden live-sample___move-to
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___move-to
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('move-to', 100, 130) }}

Es gibt drei Befehle, die Linien zeichnen. Der allgemeinste ist der "Line To" Befehl, genannt mit `L`. `L` nimmt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(or)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen von horizontalen und vertikalen Linien. `H` zeichnet eine horizontale Linie und `V` zeichnet eine vertikale Linie. Beide Befehle nehmen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Ausgangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (die gleiche Art, die einfacher mit einem {{SVGElement("rect")}} Element gemacht werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

```html live-sample___rectangle-lines
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
</svg>
```

```html hidden live-sample___rectangle-lines
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
    <circle cx="90" cy="90" r="3" fill="red" />
    <circle cx="90" cy="10" r="3" fill="red" />
    <circle cx="10" cy="90" r="3" fill="red" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___rectangle-lines
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('rectangle-lines', 100, 130) }}

Wir können die obige Pfaderklärung ein wenig verkürzen, indem wir den "Pfad schließen" Befehl verwenden, genannt mit `Z`. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten ungeöffneten Punkt (erster Punkt nach dem letzten `Z` Befehl, wenn es einen gibt, oder der erste Punkt im Pfad andererseits) und schließt den Pfad mit einer Linienverbindung ab. Es wird oft am Ende eines Pfadknotens platziert, aber nicht immer. Es gibt keinen Unterschied zwischen dem Groß- und Kleinschreibbefehl.

```plain
Z
(or)
z
```

Daher könnte unser oben genannter Pfad verkürzt werden zu:

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black" />
```

Die relativen Formen dieser Befehle können auch verwendet werden, um das gleiche Bild zu zeichnen. Relative Befehle werden durch Kleinbuchstaben aufgerufen, und anstatt den Cursor zu einer exakten Koordinate zu bewegen, bewegen sie ihn relativ zu seiner letzten Position. Zum Beispiel, da unser Rechteck 80×80 ist, könnte das `<path>` Element wie folgt geschrieben sein:

```xml
<path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
```

Der Pfad bewegt sich zu Punkt (`10`, `10`) und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und dann zurück zum Start.

In diesen Beispielen wäre es wahrscheinlich intuitiver, die {{SVGElement("polygon")}} oder {{SVGElement("polyline")}} Elemente zu verwenden. Pfade werden jedoch so oft beim Zeichnen von SVGs verwendet, dass Entwickler möglicherweise komfortabler beim Verwenden dieser sind. Es gibt keinen wirklichen Leistungsnachteil oder Vorteil zwischen der Verwendung des einen oder des anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erstellen. Zwei dieser Kurven sind {{Glossary("Bezier_curve", "Bézier-Kurven")}} und die dritte ist ein "Bogen" oder ein Teil eines Kreises. Sie haben möglicherweise bereits praktische Erfahrung mit Bézier-Kurven mit Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei sind in `<path>` Elementen verfügbar: eine kubische, die mit `C` aufgerufen wird, und eine quadratische, die mit `Q` aufgerufen wird.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven nehmen für jeden Punkt zwei Kontrollpunkte ein. Daher müssen drei Koordinatensätze spezifiziert werden, um eine kubische Bézier-Kurve zu erstellen.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Koordinatensatz hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Start der Kurve und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Steigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die von der am Anfang der Linie festgelegten Steigung zur Steigung am anderen Ende geht.

```html live-sample___cubic_bezier_curves
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent" />
  <path
    d="M 130 10 C 120 20, 180 20, 170 10"
    stroke="black"
    fill="transparent" />
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent" />
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent" />
  <path
    d="M 130 60 C 120 80, 180 80, 170 60"
    stroke="black"
    fill="transparent" />
  <path
    d="M 10 110 C 20 140, 40 140, 50 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 70 110 C 70 140, 110 140, 110 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 130 110 C 120 140, 180 140, 170 110"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___cubic_bezier_curves
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference"></g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___cubic_bezier_curves
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");

// prettier-ignore
const points = [
  [[10, 10], [20, 20], [40, 20], [50, 10]],
  [[70, 10], [70, 20], [110, 20], [110, 10]],
  [[130, 10], [120, 20], [180, 20], [170, 10]],
  [[10, 60], [20, 80], [40, 80], [50, 60]],
  [[70, 60], [70, 80], [110, 80], [110, 60]],
  [[130, 60], [120, 80], [180, 80], [170, 60]],
  [[10, 110], [20, 140], [40, 140], [50, 110]],
  [[70, 110], [70, 140], [110, 140], [110, 110]],
  [[130, 110], [120, 140], [180, 140], [170, 110]],
];

for (const curvePoints of points) {
  for (const p of curvePoints) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", p[0]);
    circle.setAttribute("cy", p[1]);
    circle.setAttribute("r", 1.5);
    circle.setAttribute("fill", "red");
    g.appendChild(circle);
  }
  const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", curvePoints[0][0]);
  line1.setAttribute("y1", curvePoints[0][1]);
  line1.setAttribute("x2", curvePoints[1][0]);
  line1.setAttribute("y2", curvePoints[1][1]);
  line1.setAttribute("stroke", "red");
  g.appendChild(line1);
  const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", curvePoints[2][0]);
  line2.setAttribute("y1", curvePoints[2][1]);
  line2.setAttribute("x2", curvePoints[3][0]);
  line2.setAttribute("y2", curvePoints[3][1]);
  line2.setAttribute("stroke", "red");
  g.appendChild(line2);
}

let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('cubic_bezier_curves', 190, 190) }}

Das obige Beispiel erstellt neun kubische Bézier-Kurven. Während sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal verteilt. Während sich die Kurven nach unten bewegen, entfernen sie sich weiter von den Endpunkten. Das bemerkenswerte hier ist, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und sich dann so biegt, dass sie in Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können zusammengefügt werden, um erweiterte, glatte Formen zu erstellen. Oft ist der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des Kontrollpunkts, der auf der anderen Seite verwendet wird, um die Steigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier verwendet werden, die durch den Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt denselben Kurventyp wie zuvor—aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird angenommen, dass der erste Kontrollpunkt die Spiegelung des zuvor verwendeten ist. Wenn der `S`-Befehl keinem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht das gleiche wie das, was der `Q`-Befehl mit den gleichen Parametern erzeugen würde, ist aber ähnlich.

Ein Beispiel für diese Syntax ist unten gezeigt, und in der Abbildung links sind die angegebenen Kontrollpunkte in Rot dargestellt und der abgeleitete Kontrollpunkt in Blau.

```html live-sample___shortcut_cubic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_cubic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="40" y2="10" stroke="red" />
    <line x1="65" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="125" y2="150" stroke="blue" />
    <line x1="150" y1="150" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="40" cy="10" r="3" fill="red" />
    <circle cx="65" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="125" cy="150" r="3" fill="blue" />
    <circle cx="150" cy="150" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___shortcut_cubic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_cubic_bezier', 190, 190) }}

Der andere Typ der Bézier-Kurve, die quadratische Kurve, die mit `Q` aufgerufen wird, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Steigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter an: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinatendeltas für `q` sind beide relativ zum vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(or)
q dx1 dy1, dx dy
```

```html live-sample___quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
</svg>
```

```html hidden live-sample___quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="95" y2="10" stroke="red" />
    <line x1="95" y1="10" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
    <circle cx="95" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('quadratic_bezier', 190, 190) }}

Wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung zum Verketten mehrerer quadratischer Béziers, die mit `T` aufgerufen wird.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den zuvor verwendeten Kontrollpunkt und schließt daraus einen neuen. Dies bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen erstellt werden können, indem nur Endpunkte spezifiziert werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q` oder `T` Befehl war. Andernfalls wird angenommen, dass der Kontrollpunkt derselbe wie der vorherige Punkt ist, und es werden nur Linien gezeichnet.

```html live-sample___shortcut_quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 Q 52.5 10, 95 80 T 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="52.5" y2="10" stroke="red" />
    <line x1="52.5" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="137.5" y2="150" stroke="blue" />
    <line x1="137.5" y1="150" x2="180" y2="80" stroke="blue" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="52.5" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="137.5" cy="150" r="3" fill="blue" />
    <circle cx="180" cy="80" r="3" fill="blue" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___shortcut_quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_quadratic_bezier', 190, 190) }}

Beide Kurven führen zu ähnlichen Ergebnissen, obwohl die kubische Version größere Freiheit bei der exakten Form der Kurve bietet. Die Entscheidung, welche Kurve verwendet werden soll, ist situationsabhängig und hängt von der Symmetrie der Linie ab.

### Bögen

Der andere Typ der gebogenen Linie, der mit SVG erstellt werden kann, ist der Bogen, der mit dem `A` Befehl aufgerufen wird. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für ein gegebenes x-Radius und y-Radius gibt es zwei Ellipsen, die jeden von zwei Punkten verbinden können (solange sie sich innerhalb des Radius des Kreises befinden). Entlang jeder dieser Kreise gibt es zwei mögliche Wege, die jeweils zu den Punkten führen—es gibt also in jeder Situation vier mögliche Bögen.

Aus diesem Grund erfordern Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Zu Beginn nimmt das Bogenelement zwei Parameter für den x-Radius und y-Radius an. Falls erforderlich, siehe {{SVGElement("ellipse")}}s und ihre Funktionsweise. Die letzten beiden Parameter bestimmen die x- und y-Koordinaten, um den Strich zu beenden. Zusammen definieren diese vier Werte die grundlegende Struktur des Bogens.

Der dritte Parameter beschreibt die Rotation des Bogens. Dies wird am besten mit einem Beispiel erklärt:

```html live-sample___arcs_axis_rotation
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 315
       L 110 215
       A 30 50 0 0 1 162.55 162.45
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <ellipse
      cx="136.225"
      cy="188.275"
      rx="30"
      ry="50"
      stroke="red"
      fill="none" />
    <ellipse
      cx="193.5"
      cy="131.5"
      rx="30"
      ry="50"
      stroke="red"
      fill="none"
      transform="rotate(-45)"
      transform-origin="193.5 131.5" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___arcs_axis_rotation
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation', 320, 350) }}

Das Beispiel zeigt ein `<path>` Element, das diagonal über die Seite verläuft. In der Mitte wurden zwei elliptische Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Beim ersten wurde die x-Achsen-Rotation auf `0` belassen, sodass die Ellipse, um die der Bogen verläuft (in Grau dargestellt), gerade nach oben und unten ausgerichtet ist. Für den zweiten Bogen jedoch wurde die x-Achsen-Rotation auf `-45` Grad gesetzt. Dies dreht die Ellipse so, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie durch die zweite Ellipse im Beispielbild gezeigt.

Für die ungedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, weil die Linie, die vom Start bis zum Ende des Bogens durch das Zentrum der Ellipse verläuft. In einem leicht abgeänderten Beispiel können die beiden Ellipsen gesehen werden, die die vier verschiedenen Bögen bilden:

```html live-sample___arcs_axis_rotation_2
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
  <path
    d="M 10 315
       L 110 215
       A 36 60 0 0 1 150.71 170.29
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation_2
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="150.71" cy="170.29" r="3" fill="red" />
    <circle cx="110" cy="215" r="3" fill="red" />
    <ellipse
      cx="144.931"
      cy="229.512"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
    <ellipse
      cx="115.779"
      cy="155.778"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___arcs_axis_rotation_2
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation_2', 320, 350) }}

Beachten Sie, dass jede der blauen Ellipsen durch zwei Bögen gebildet wird, abhängig davon, ob im Uhrzeigersinn oder gegen den Uhrzeigersinn gefahren wird. Jede Ellipse hat einen kurzen Bogen und einen langen Bogen. Die beiden Ellipsen sind nur Spiegelbilder voneinander. Sie sind entlang der Linie geklappt, die von den Start→Endpunkten gebildet wird.

Wenn die Start→Endpunkte weiter entfernt sind, als es der x- und y-Radius der Ellipse erreichen kann, werden die Radien der Ellipse minimal erweitert, damit sie die Start→Endpunkte erreichen kann. Das interaktive Codepen am unteren Rand dieser Seite demonstriert dies gut. Um zu bestimmen, ob die Radien einer Ellipse groß genug sind, um eine Erweiterung zu erfordern, müsste ein Gleichungssystem wie [dieses auf wolfram alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>) gelöst werden. Diese Berechnung ist für die ungedrehte Ellipse mit Start→Ende (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radien der Ellipse zu klein sind. Die zweite Berechnung ist für die ungedrehte Ellipse mit Start→Ende (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, weil die Ellipse gerade knapp erweitert wurde.

Die vier oben genannten verschiedenen Wege werden durch die nächsten zwei Parameter-Flags bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen, um die sich der Pfad bewegen kann, und zwei verschiedene mögliche Wege auf beiden Ellipsen, was vier mögliche Wege ergibt. Der erste Parameter ist das `large-arc-flag`. Es bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein sollte; letztendlich bestimmt dieses Flag, in welche Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen bei positiven Winkeln oder bei negativen beginnen soll, was im Wesentlichen bestimmt, welcher der beiden Kreise umfahren wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen, zusammen mit den zwei Kreisen für jeden Fall.

```html live-sample___arcs_flags
<svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 100 100
       A 45 45, 0, 0, 0, 145 145
       L 145 100 Z"
    fill="#00FF00A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 100
       A 45 45, 0, 1, 0, 295 145
       L 295 100 Z"
    fill="#FF0000A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 100 250
       A 45 45, 0, 0, 1, 145 295
       L 145 250 Z"
    fill="#FF00FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 250
       A 45 45, 0, 1, 1, 295 295
       L 295 250 Z"
    fill="#0000FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 45 45 L 345 45 L 345 345 L 45 345 Z M 195 45 L 195 345 M 45 195 L 345 195"
    fill="none"
    stroke="black" />
  <text x="140" y="20" font-size="20" fill="black">Large arc flag</text>
  <text
    x="-15"
    y="195"
    font-size="20"
    fill="black"
    transform="rotate(-90)"
    transform-origin="20 195">
    Sweep flag
  </text>
  <text x="120" y="40" font-size="20" fill="black">0</text>
  <text x="270" y="40" font-size="20" fill="black">1</text>
  <text x="30" y="120" font-size="20" fill="black">0</text>
  <text x="30" y="270" font-size="20" fill="black">1</text>
</svg>
```

```html hidden live-sample___arcs_flags
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="145" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="145" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="295" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="295" r="45" stroke="#888888E0" fill="none" />
  </g>
</svg>
<button>Show/hide reference points and lines</button>
```

```js hidden live-sample___arcs_flags
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_flags', 360, 390) }}

Bögen sind ein einfacher Weg, um Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise erfordert ein Kreisdiagramm für jedes Stück einen anderen Bogen.

Beim Wechsel zu SVG von {{HTMLElement("canvas")}}, können Bögen das Schwierigste sein, zu lernen, sind aber auch viel mächtiger. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten haben zu zeichnen. Da die Start- und Endpunkte für jeden Pfad, der einen Kreis umrundet, der gleiche Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die ausgewählt werden könnten, und der tatsächliche Pfad ist nicht definiert. Es ist möglich, sie zu approximieren, indem die Start- und Endpunkte des Pfads leicht verschoben werden und sie dann mit einem anderen Pfadsegment verbunden werden. Zum Beispiel ist es möglich, mit einem Bogen für jedes Halbkreis einen Kreis zu machen. Zu diesem Zeitpunkt ist es oft einfacher, einen echten {{SVGElement("circle")}} oder {{SVGElement("ellipse")}} Knoten stattdessen zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen.

```html hidden live-sample___arcs_interactive
<script src="https://cdn.rawgit.com/lingtalfi/simpledrag/master/simpledrag.js"></script>
<div class="ui">
  <div class="controls">
    Radius X: <input id="rx" type="range" min="0" max="500" /><br />
    Radius Y: <input id="ry" type="range" min="0" max="500" /><br />
    Rotation:
    <input id="rot" type="range" min="0" max="360" value="0" /><br />
    Large arc flag: <input id="laf" type="checkbox" /><br />
    Sweep flag: <input id="sf" type="checkbox" /><br />
    Arc command: <span id="arc-value"></span><br />
  </div>
  <div class="results">
    mouse: pageX <span id="page-x"></span>, pageY <span id="page-y"></span
    ><br />
    A: <span id="ax-value"></span>, <span id="ay-value"></span><br />
    B: <span id="bx-value"></span>, <span id="by-value"></span><br />
    m: <span id="m-value"></span><br />
    b(A): <span id="ba-value"></span><br />
    b(B): <span id="bb-value"></span><br />
    contextWidth: <span id="cw-value"></span><br />
  </div>
</div>

<svg width="100%" height="100%" id="svg-context">
  <path id="arc2" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc3" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc4" d="" fill="none" stroke="green" stroke-width="2"></path>

  <path
    id="arc"
    d="M100 100 A 100 100 0 1 0 200 100"
    fill="none"
    stroke="red"
    stroke-width="4"></path>

  <line
    id="line0"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line2"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>

  <circle
    id="circle2"
    cx="200"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>
</svg>
```

```css hidden live-sample___arcs_interactive
body {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #eee;
}

.ui {
  display: flex;
}

.ui > div {
  margin: 0 10px;
}

.ui .controls input {
  vertical-align: middle;
}

#circle1,
#circle2 {
  cursor: pointer;
}

svg {
  background: #ddd;
}
```

```js hidden live-sample___arcs_interactive
const svgContext = document.getElementById("svg-context");
let rect = svgContext.getBoundingClientRect(); // helper to enclose mouse coordinates into svg box

const pageXEl = document.getElementById("page-x");
const pageYEl = document.getElementById("page-y");
const mEl = document.getElementById("m-value");
const rxEl = document.getElementById("rx");
const ryEl = document.getElementById("ry");
const rotEl = document.getElementById("rot");
const lafEl = document.getElementById("laf");
const sfEl = document.getElementById("sf");
const axEl = document.getElementById("ax-value");
const ayEl = document.getElementById("ay-value");
const bxEl = document.getElementById("bx-value");
const byEl = document.getElementById("by-value");
const baEl = document.getElementById("ba-value");
const bbEl = document.getElementById("bb-value");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const line = document.getElementById("line");
const line0 = document.getElementById("line0");
const line2 = document.getElementById("line2");
const cwEl = document.getElementById("cw-value");
const arcCmdEl = document.getElementById("arc-value");
const arcEl = document.getElementById("arc");
const arc2El = document.getElementById("arc2");
const arc3El = document.getElementById("arc3");
const arc4El = document.getElementById("arc4");

function updatePaths(pageX, pageY) {
  pageXEl.textContent = pageX;
  pageYEl.textContent = pageY;

  // line between two points
  line.setAttribute("x1", circle1.getAttribute("cx"));
  line.setAttribute("y1", circle1.getAttribute("cy"));
  line.setAttribute("x2", circle2.getAttribute("cx"));
  line.setAttribute("y2", circle2.getAttribute("cy"));

  axEl.textContent = circle1.getAttribute("cx");
  ayEl.textContent = circle1.getAttribute("cy");
  bxEl.textContent = circle2.getAttribute("cx");
  byEl.textContent = circle2.getAttribute("cy");

  // y = mx + b
  let m, b, run; // m = rise/run = (y2-y1) / (x2-x1)
  if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
    run = circle2.getAttribute("cx") - circle1.getAttribute("cx");
    if (run !== 0) {
      m = (circle2.getAttribute("cy") - circle1.getAttribute("cy")) / run;
    }
  } else {
    run = circle1.getAttribute("cx") - circle2.getAttribute("cx");
    if (run !== 0) {
      m = (circle1.getAttribute("cy") - circle2.getAttribute("cy")) / run;
    }
  }

  if (run !== 0) {
    // b = y - mx
    b = circle1.getAttribute("cy") - m * circle1.getAttribute("cx");
    b2 = circle2.getAttribute("cy") - m * circle2.getAttribute("cx");
    baEl.textContent = b;
    bbEl.textContent = b2;
    mEl.textContent = m;

    // draw segment from the left vertical axis (x=0) to the left most point (A or B).
    // x=0 ----> y = b
    let leftMost, rightMost;
    if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
      leftMost = circle1;
      rightMost = circle2;
    } else {
      leftMost = circle2;
      rightMost = circle1;
    }

    line0.setAttribute("x1", 0);
    line0.setAttribute("y1", b);
    line0.setAttribute("x2", leftMost.getAttribute("cx"));
    line0.setAttribute("y2", leftMost.getAttribute("cy"));

    // draw segment from point B to the right vertical axis (x=rect.width)
    // representing the end of the svg box.
    // y = mx + b
    const y = m * rect.width + b;
    line2.setAttribute("x1", rightMost.getAttribute("cx"));
    line2.setAttribute("y1", rightMost.getAttribute("cy"));
    line2.setAttribute("x2", rect.width);
    line2.setAttribute("y2", y);

    // now update the arc
    const arcCmd = getArcCommand(
      leftMost,
      rightMost,
      lafEl.checked,
      sfEl.checked,
    );
    arcCmdEl.textContent = arcCmd;
    arcEl.setAttribute("d", arcCmd);

    // now update the other helper arcs
    const combo = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ].filter(
      (item) => !(item[0] === lafEl.checked && item[1] === sfEl.checked),
    );
    arc2El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[0][0], combo[0][1]),
    );
    arc3El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[1][0], combo[1][1]),
    );
    arc4El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[2][0], combo[2][1]),
    );
  }
}

function getArcCommand(leftMost, rightMost, lafChecked, sfChecked) {
  return `M${leftMost.getAttribute("cx")} ${leftMost.getAttribute("cy")} A ${rxEl.value} ${ryEl.value} ${rotEl.value} ${lafChecked ? "1" : "0"} ${sfChecked ? "1" : "0"} ${rightMost.getAttribute("cx")} ${rightMost.getAttribute("cy")}`;
}

function updateScreen() {
  rect = svgContext.getBoundingClientRect();
  cwEl.textContent = rect.width;
}

circle1.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

circle2.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

window.addEventListener("resize", updateScreen);

// sliders
["rx", "ry", "rot"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    updatePaths();
  });
});

// checkboxes
["laf", "sf"].forEach((id) => {
  document.getElementById(id).addEventListener("change", (e) => {
    updatePaths();
  });
});

updatePaths();
updateScreen();
```

{{EmbedLiveSample("arcs_interactive", "", 600)}}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}
