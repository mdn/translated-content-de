---
title: Pfade
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: 725d22d1e78448d87c3138565e342a84d8a56515
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

Das Element {{SVGElement('path')}} ist das mächtigste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erzeugen komplexe Formen, indem sie mehrere gerade Linien oder gekrümmte Linien kombinieren. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erstellen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig, wenn SVGs gezeichnet werden. Auch wenn es nicht empfohlen wird, komplexe Pfade mit einem XML- oder Texteditor zu erstellen, ermöglicht das Verständnis ihrer Funktionsweise, Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Siehe mehr in [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes).) Das Attribut `d` enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen bestimmten Buchstaben instanziiert (zum Beispiel durch das Erstellen einer Klasse, das Benennen und Lokalisieren). Zum Beispiel gehen wir zu den Koordinaten `x` und `y` (`10`, `10`). Der "Move To"-Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er zu einem Punkt wechseln muss. Um also zu (`10`, `10`) zu wechseln, würde der Befehl `M 10 10` lauten. Danach beginnt der Parser, nach dem nächsten Befehl zu suchen.

Alle Befehle gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z. B. _10px nach oben und 7px nach links vom letzten Punkt bewegen_).

Koordinaten im `d`-Parameter sind **immer einheitslos** und daher im Benutzerkoordinatensystem. Später werden wir lernen, wie Pfade transformiert werden können, um anderen Bedürfnissen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist der "Move To" oder `M`, wie oben beschrieben. Er nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der gewechselt werden soll. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang von Pfaden, um anzugeben, wo das Zeichnen beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht angezeigt wird, wenn ein Pfad nur normal gezeichnet wird. Zum Beispiel:

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

Es gibt drei Befehle, die Linien zeichnen. Der allgemeinste ist der "Line To"-Befehl, der mit `L` aufgerufen wird. `L` nimmt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(or)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen horizontaler und vertikaler Linien. `H` zeichnet eine horizontale Linie und `V` zeichnet eine vertikale Linie. Beide Befehle nehmen nur einen Parameter an, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Ausgangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (der gleiche Typ, der einfacher mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

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

Wir können die obige Pfaderklärung etwas verkürzen, indem wir den "Close Path"-Befehl verwenden, der mit `Z` aufgerufen wird. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfads. Er wird oft am Ende eines Pfadknotens platziert, jedoch nicht immer. Es gibt keinen Unterschied zwischen dem Großbuchstaben- und dem Kleinbuchstaben-Befehl.

```plain
Z
(or)
z
```

Unser oben genannter Pfad könnte also verkürzt werden zu:

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black" />
```

Auch die relativen Formen dieser Befehle können verwendet werden, um dasselbe Bild zu zeichnen. Relative Befehle werden durch die Verwendung von Kleinbuchstaben aufgerufen und bewegen den Cursor relativ zu seiner letzten Position, anstatt ihn zu einer genauen Koordinate zu verschieben. Da unser Rechteck 80×80 groß ist, könnte das `<path>`-Element folgendermaßen geschrieben werden:

```xml
<path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
```

Der Pfad wird zu Punkt (`10`, `10`) wechseln und sich dann horizontal um 80 Punkte nach rechts bewegen, dann 80 Punkte nach unten, dann 80 Punkte nach links und dann zurück zum Start.

In diesen Beispielen wäre es wahrscheinlich intuitiver, die Elemente {{SVGElement("polygon")}} oder {{SVGElement("polyline")}} zu verwenden. Pfade werden jedoch so oft beim Zeichnen von SVGs verwendet, dass Entwickler möglicherweise bequemer mit ihnen umgehen. Es gibt keinen echten Leistungsvorteil oder Nachteil bei der Verwendung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erstellen. Zwei dieser Kurven sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, und die dritte ist ein "Arc" oder Teil eines Kreises. Möglicherweise haben Sie bereits praktische Erfahrung mit Bézier-Kurven gemacht, indem Sie Pfadwerkzeuge in Inkscape, Illustrator oder Photoshop verwendet haben. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei sind in `<path>`-Elementen verfügbar: eine kubische Kurve, die mit `C` aufgerufen wird, und eine quadratische, die mit `Q` aufgerufen wird.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven nehmen zwei Kontrollpunkte für jeden Punkt auf. Daher müssen, um eine kubische Bézier zu erstellen, drei Koordinatensätze angegeben werden.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Koordinatensatz hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Beginn der Kurve, und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Steigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erzeugt dann eine glatte Kurve, die von der zu Beginn der Linie festgelegten Steigung zur Steigung am anderen Ende übergeht.

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

Das obige Beispiel erzeugt neun kubische Bézier-Kurven. Wenn sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal verteilt. Wenn sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten getrennt. Zu beachten ist, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und sich dann so biegt, dass sie entlang der Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können zusammengefügt werden, um erweiterte, glatte Formen zu erstellen. Oft ist der Kontrollpunkt auf der einen Seite eines Punktes das Spiegelbild des auf der anderen Seite verwendeten Kontrollpunktes, um die Steigung konstant zu halten. In diesem Fall kann eine Abkürzungsvariante der kubischen Bézier verwendet werden, die mit dem Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt denselben Kurventyp wie zuvor—aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird der erste Kontrollpunkt als Spiegelbild des vorherigen angenommen. Wenn der `S`-Befehl nicht einem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe, was der `Q`-Befehl mit denselben Parametern erzeugen würde, sondern ähnlich.

Ein Beispiel für diese Syntax ist unten gezeigt, und in der Abbildung links sind die angegebenen Kontrollpunkte in Rot und der abgeleitete Kontrollpunkt in Blau dargestellt.

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

Der andere Typ der Bézier-Kurve, die quadratische Kurve, die mit `Q` aufgerufen wird, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Steigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

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

Wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung zum Verbinden mehrerer quadratischer Bézier, die mit `T` aufgerufen wird.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den vorher verwendeten Kontrollpunkt und leitet daraus einen neuen ab. Das bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen erstellt werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder `T`-Befehl war. Andernfalls wird der Kontrollpunkt als derselbe wie der vorherige Punkt angenommen, und es werden nur Linien gezeichnet.

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

Beide Kurven erzeugen ähnliche Ergebnisse, obwohl die kubische eine größere Freiheit beim genauen Aussehen der Kurve gewährt. Die Entscheidung, welche Kurve verwendet werden soll, ist situationsabhängig und hängt von der Menge der Symmetrie ab, die die Linie hat.

### Bögen

Der andere Typ der gekrümmten Linie, die mit SVG erstellt werden kann, ist der Bogen, der mit dem Befehl `A` aufgerufen wird. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die beliebige zwei Punkte verbinden können (solange sie innerhalb des Kreisradius liegen). Entlang einer dieser Kreise gibt es zwei mögliche Wege, um die Punkte zu verbinden—sodass es in jeder Situation vier mögliche Bögen gibt.

Aufgrund dessen erfordern Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Zu Beginn nimmt das Bogenelement zwei Parameter für den x-Radius und den y-Radius auf. Falls erforderlich, sehen Sie sich {{SVGElement("ellipse")}}s an und wie sie sich verhalten. Die letzten beiden Parameter bestimmen die x- und y-Koordinaten, um den Strich zu beenden. Zusammen definieren diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Drehung des Bogens. Dies wird am besten mit einem Beispiel erklärt:

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

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite verläuft. In der Mitte wurden zwei elliptische Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Beim ersten wurde die x-Achsen-Rotation auf `0` belassen, sodass die Ellipse, um die der Bogen verläuft (in Grau gezeigt), gerade auf und ab orientiert ist. Beim zweiten Bogen wurde die x-Achsen-Rotation jedoch auf `-45` Grad eingestellt. Dies dreht die Ellipse so, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie die zweite Ellipse im Beispielbild zeigt.

Für die ungedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, weil die Linie, die vom Anfang zum Ende des Bogens verläuft, durch das Zentrum der Ellipse geht. In einem leicht modifizierten Beispiel sind die beiden Ellipsen zu sehen, die die vier verschiedenen Bögen bilden:

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

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen besteht, je nachdem, ob Sie im Uhrzeigersinn oder gegen den Uhrzeigersinn reisen. Jede Ellipse hat einen kurzen Bogen und einen langen Bogen. Die beiden Ellipsen sind einfach Spiegelbilder voneinander. Sie werden entlang der Linie gebildet, die von Start→Ende-Punkten gebildet wird.

Wenn die Start→Ende-Punkte weiter entfernt sind, als der Ellipsen-`x`- und `y`-Radius erreichen kann, werden die Radii der Ellipse minimal erweitert, sodass sie die Start→Ende-Punkte erreichen könnten. Das interaktive Codepen am Ende dieser Seite veranschaulicht dies gut. Um festzustellen, ob die Radii einer Ellipse groß genug sind, um eine Erweiterung zu erfordern, müsste ein Gleichungssystem gelöst werden, wie [dieses auf wolfram alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>). Diese Berechnung ist für die nicht gedrehte Ellipse mit Start→Ende (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radii der Ellipse zu klein sind. Diese zweite Berechnung ist für die nicht gedrehte Ellipse mit Start→Ende (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, weil die Ellipse gerade noch erweitert wurde.

Die oben erwähnten vier verschiedenen Pfade werden durch die nächsten beiden Parameterflaggen bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen, um den Pfad zu umrunden, und zwei verschiedene mögliche Pfade auf beiden Ellipsen, sodass es vier mögliche Pfade gibt. Der erste Parameter ist das `large-arc-flag`. Es bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein soll; letztlich bestimmt dieses Flag, in welche Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen bei positiven oder negativen Winkeln beginnen soll, was im Wesentlichen auswählt, um welchen der beiden Kreise gereist wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen sowie die beiden Kreise für jeden Fall.

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

Bögen sind eine einfache Möglichkeit, Stücke von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Zum Beispiel würde ein Kuchendiagramm einen anderen Bogen für jedes Stück erfordern.

Bei der Umstellung auf SVG aus dem {{HTMLElement("canvas")}} können Bögen das Schwierigste sein, aber sie sind auch viel mächtiger. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten haben, zu zeichnen. Da die Start- und Endpunkte für jeden Pfad, der um einen Kreis verläuft, derselbe Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie zu approximieren, indem die Start- und Endpunkte des Pfades leicht versetzt werden und dann mit einem anderen Pfadsegment verbunden werden. Zum Beispiel ist es möglich, einen Kreis mit einem Bogen für jede Halbkreis zu erstellen. In diesem Fall ist es oft einfacher, einen echten {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}
