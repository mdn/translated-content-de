---
title: Pfade
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: 27bb49e1849433e05c964c8a645c448f184380ce
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

Das {{SVGElement('path')}}-Element ist das leistungsstärkste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erzeugen komplexe Formen, indem mehrere gerade oder gebogene Linien kombiniert werden. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erzeugen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig, wenn Sie SVGs zeichnen. Während es nicht empfohlen wird, komplexe Pfade mit einem XML-Editor oder Texteditor zu erstellen, ermöglicht das Verständnis ihrer Funktionsweise das Identifizieren und Beheben von Anzeigeproblemen in SVGs.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Siehe mehr in [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes).) Das `d`-Attribut enthält eine Folge von Kommandos und Parametern, die von diesen Kommandos genutzt werden.

Jedes der Kommandos wird durch einen spezifischen Buchstaben instanziiert (z.B. die Erstellung einer Klasse, deren Benennung und Platzierung). Zum Beispiel, lassen Sie uns zu den x- und y-Koordinaten (`10`, `10`) gehen. Das "Verschiebe zu"-Kommando wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben trifft, weiß er, dass er zu einem Punkt verschieben muss. Um also zu (`10`, `10`) zu verschieben, wäre das Kommando `M 10 10`. Danach beginnt der Parser mit dem Lesen des nächsten Kommandos.

Alle Kommandos gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z.B. _verschiebe 10px nach oben und 7px nach links vom letzten Punkt_).

Koordinaten im `d`-Parameter sind **immer einheitenlos** und somit im Benutzerkoordinatensystem. Später lernen wir, wie Pfade transformiert werden können, um anderen Anforderungen gerecht zu werden.

## Linienkommandos

Es gibt fünf Linienkommandos für {{SVGElement("path")}}-Knoten. Das erste Kommando ist das "Verschiebe zu" oder `M`, das oben beschrieben wurde. Es nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der verschoben werden soll. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Das "Verschiebe zu"-Kommando erscheint am Anfang von Pfaden, um anzugeben, wo das Zeichnen beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht sichtbar wäre, wenn ein Pfad einfach normal gezeichnet würde. Zum Beispiel:

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

Es gibt drei Kommandos, die Linien zeichnen. Das allgemeinste ist das "Linie zu"-Kommando, das mit `L` aufgerufen wird. `L` benötigt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(or)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen von horizontalen und vertikalen Linien. `H` zeichnet eine horizontale Linie und `V` eine vertikale Linie. Beide Kommandos benötigen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Anfang ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (die gleiche Art, die einfacher mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

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

Wir können die obige Pfadangabe ein wenig verkürzen, indem wir das Kommando "Pfad schließen", aufgerufen mit `Z`, verwenden. Dieses Kommando zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten ungeschlossenen Punkt (erster Punkt nach dem letzten `Z`-Kommando, wenn es eines gibt, oder der erste Punkt im Pfad ansonsten) und schließt den Pfad mit einer Linienverbindung ab. Es wird oft am Ende eines Pfadknotens platziert, obwohl nicht immer. Es gibt keinen Unterschied zwischen dem Großbuchstaben- und dem Kleinbuchstabenkürzel.

```plain
Z
(or)
z
```

Unser obiger Pfad könnte also verkürzt werden zu:

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="none" stroke="black" />
```

Die relativen Formen dieser Kommandos können ebenfalls verwendet werden, um das gleiche Bild zu zeichnen. Relative Kommandos werden durch die Verwendung von Kleinbuchstaben aufgerufen, und anstatt den Cursor zu einer genauen Koordinate zu bewegen, bewegen sie ihn relativ zu seiner letzten Position. Da unser Rechteck 80×80 ist, könnte das `<path>`-Element etwa so geschrieben werden:

```xml
<path d="M 10 10 h 80 v 80 h -80 Z" fill="none" stroke="black" />
```

Der Pfad wird zu Punkt (`10`, `10`) verschoben und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und dann zurück zum Anfang.

In diesen Beispielen wäre es wahrscheinlich intuitiver, die {{SVGElement("polygon")}}- oder {{SVGElement("polyline")}}-Elemente zu verwenden. Pfade werden jedoch so häufig beim Zeichnen von SVGs verwendet, dass Entwickler sich möglicherweise wohler fühlen, sie stattdessen zu verwenden. Es gibt keinen wirklichen Leistungsnachteil oder -vorteil bei der Verwendung des einen oder des anderen.

## Kurvenkommandos

Es gibt drei verschiedene Kommandos, die verwendet werden können, um sanfte Kurven zu erstellen. Zwei dieser Kurven sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, und die dritte ist ein "Bogen" oder ein Teil eines Kreises. Sie haben möglicherweise bereits praktische Erfahrungen mit Bézier-Kurven gemacht, indem Sie Pfadwerkzeuge in Inkscape, Illustrator oder Photoshop verwendet haben. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei sind in `<path>`-Elementen verfügbar: eine kubische, aufgerufen mit `C`, und eine quadratische, aufgerufen mit `Q`.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Béziers benötigen zwei Kontrollpunkte für jeden Punkt. Daher müssen zur Erstellung einer kubischen Bézier drei Koordinatensätze angegeben werden.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Das letzte Koordinatenset hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Beginn der Kurve, und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Steigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die sich von der am Anfang der Linie festgelegten Steigung zur Steigung am anderen Ende fortsetzt.

```html live-sample___cubic_bezier_curves
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="none" />
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="none" />
  <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="none" />
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="none" />
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="none" />
  <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="none" />
  <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="none" />
  <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="none" />
  <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="none" />
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

Das obige Beispiel erstellt neun kubische Bézier-Kurven. Während sich die Kurven nach rechts bewegen, sind die Kontrollpunkte horizontal weiter auseinandergezogen. Während sich die Kurven nach unten bewegen, trennen sie sich weiter von den Endpunkten. Es ist wichtig zu beachten, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und sich dann so biegt, dass sie in Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können zusammengefügt werden, um erweiterte, glatte Formen zu erzeugen. Oft ist der Kontrollpunkt auf einer Seite eines Punktes ein Spiegelbild des auf der anderen Seite verwendeten Kontrollpunkts, um die Steigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier verwendet werden, bezeichnet durch den Befehl `S` (oder `s`).

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt die gleiche Art von Kurve wie zuvor—aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird der erste Kontrollpunkt als Spiegelbild des zuvor verwendeten angenommen. Wenn der `S`-Befehl nicht einem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe wie das, was der `Q`-Befehl mit denselben Parametern erzeugt hätte, ist aber ähnlich.

Ein Beispiel für diese Syntax wird unten gezeigt, und in der Abbildung links werden die angegebenen Kontrollpunkte rot und der abgeleitete Kontrollpunkt blau dargestellt.

```html live-sample___shortcut_cubic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    stroke="black"
    fill="none" />
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

Die andere Art von Bézier-Kurve, die quadratische Kurve genannt mit `Q`, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Steigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinaten-Deltas für `q` sind beide relativ zum vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(or)
q dx1 dy1, dx dy
```

```html live-sample___quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="none" />
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

Wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung zum Aneinanderreihen mehrerer quadratischer Béziers, aufgerufen mit `T`.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den vorherigen verwendeten Kontrollpunkt und leitet daraus einen neuen ab. Das bedeutet, dass nach dem ersten Kontrollpunkt relativ komplexe Formen erzeugt werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder ein `T`-Befehl war. Andernfalls wird davon ausgegangen, dass der Kontrollpunkt mit dem vorherigen Punkt übereinstimmt, und es werden nur Linien gezeichnet.

```html live-sample___shortcut_quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="none" />
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

Beide Kurven ergeben ähnliche Ergebnisse, obwohl die kubische größerer Freiheit erlaubt, wie genau die Kurve aussieht. Die Wahl, welche Kurve verwendet werden soll, ist abhängig von der Situation und der Symmetrie, die die Linie aufweist.

### Bögen

Die andere Art der gekrümmten Linie, die mit SVG erstellt werden kann, ist der Bogen, aufgerufen mit dem `A`-Befehl. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x- und y-Radius gibt es zwei Ellipsen, die jeden Punkt miteinander verbinden können (solange sie innerhalb des Radius des Kreises liegen). Entlang solcher Kreise gibt es zwei mögliche Wege, um die Punkte zu verbinden – in jeder Situation stehen also vier mögliche Bögen zur Verfügung.

Deshalb erfordern Bögen eine ganze Reihe von Parametern:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Zu Beginn nimmt das Bogen-Element zwei Parameter für den x- und y-Radius auf. Bei Bedarf, schauen Sie sich {{SVGElement("ellipse")}}s an und wie sie sich verhalten. Die letzten beiden Parameter geben die x- und y-Koordinaten an, um den Stiftstrich zu beenden. Diese vier Werte zusammen definieren die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Drehung des Bogens. Dies lässt sich am besten mit einem Beispiel erklären:

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

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite verläuft. In dessen Mitte wurden zwei elliptische Bögen herausgeschnitten (x-Radius = `30`, y-Radius = `50`). Im ersten ist die x-Achsen-Drehung bei `0` belassen, sodass die Ellipse, um die der Bogen verläuft (in Grau dargestellt), direkt nach oben und unten ausgerichtet ist. Beim zweiten Bogen ist jedoch die x-Achsen-Drehung auf `-45` Grad eingestellt. Diese dreht die Ellipse so, dass sie mit ihrer kleinen Achse entlang der Pfadrichtung ausgerichtet ist, wie durch die zweite Ellipse im Beispielbild gezeigt.

Für die nicht gedrehte Ellipse im obigen Bild gibt es nur zwei unterschiedliche Bögen und nicht vier zur Auswahl, da die Linie, die vom Start- zum Endpunkt des Bogens gezogen wird, durch das Zentrum der Ellipse verläuft. In einem leicht modifizierten Beispiel sind die beiden Ellipsen zu sehen, die die vier verschiedenen Bögen bilden:

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
      fill="none"
      stroke="red" />
    <ellipse
      cx="115.779"
      cy="155.778"
      rx="36"
      ry="60"
      fill="none"
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

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen gebildet wird, abhängig davon, ob man im Uhrzeigersinn oder gegen den Uhrzeigersinn reist. Jede Ellipse hat einen kurzen und einen langen Bogen. Die zwei Ellipsen sind nur Spiegelbilder voneinander. Sie sind entlang der Linie umgedreht, die von den Start- zu den Endpunkten gebildet wird.

Wenn die Start- zu Endpunkte weiter voneinander entfernt sind, als die Ellipse's `x`- und `y`-Radius reichen können, werden die Radien der Ellipse minimal erweitert, sodass sie die Start- zu Endpunkte erreichen könnten. Der interaktive Codepen am Ende dieser Seite zeigt dies gut. Um festzustellen, ob die Radien einer Ellipse groß genug sind, um eine Erweiterung zu benötigen, müsste ein Gleichungssystem gelöst werden, wie [dies auf wolfram alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>). Diese Berechnung ist für die nicht gedrehte Ellipse mit Start- zu End (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radien der Ellipse zu klein sind. Diese zweite Berechnung ist für die nicht gedrehte Ellipse mit Start- zu End (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, weil die Ellipse gerade so erweitert wurde.

Die vier verschiedenen oben genannten Pfade werden durch die nächsten beiden Parameter-Flags bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen für den Pfad zu reisen und zwei verschiedene mögliche Pfade auf beiden Ellipsen zu reisen umgeben und zwei verschiedene mögliche Pfadmöglichkeiten auf beiden Ellipsen zu umfahren, was vier mögliche Pfade ergibt. Der erste Parameter ist das `large-arc-flag`. Er bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein soll; letztendlich bestimmt dieses Flag, in welche Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Er bestimmt, ob der Bogen beginnt, sich in positiven oder negativen Winkeln zu bewegen, was letztlich bestimmt, welcher der beiden Kreise umfahren wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen sowie die beiden Kreise für jeden Fall.

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

Bögen sind eine einfache Möglichkeit, Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Tortendiagramm einen anderen Bogen für jedes Stück erfordern.

Wenn Sie von {{HTMLElement("canvas")}} zu SVG wechseln, können Bögen die schwierigste Lektion sein, aber sie sind auch viel leistungsstärker. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen schwer zeichnen können. Da die Start- und Endpunkte für jeden Pfad, der sich um einen Kreis dreht, denselben Punkt bilden, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden können, und der eigentliche Pfad ist undefiniert. Es ist möglich, sie anzunähern, indem die Start- und Endpunkte des Pfades leicht versetzt werden und dann mit einem anderen Pfadsegment verbunden werden. Beispielsweise ist es möglich, einen Kreis mit einem Bogen für jede Halbkugel zu erstellen. An diesem Punkt ist es oft einfacher, einen echten {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Diese interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen.

```html hidden live-sample___arcs_interactive
<script src="https://cdn.jsdelivr.net/gh/lingtalfi/simpledrag@2.2.0/simpledrag.js"></script>
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
  background: #eeeeee;
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
  background: #dddddd;
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
