---
title: Verläufe in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

Vielleicht aufregender als nur Füllungen und Striche ist die Tatsache, dass Sie auch Verläufe erstellen und als Füllungen oder Striche anwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden getrennt von der Stelle definiert, an der sie verwendet werden, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut vergeben, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in ein {{SVGElement('defs')}}-Element oder in ein {{SVGElement('svg')}}-Element eingefügt werden.

## Lineare Verläufe

Lineare Verläufe ändern sich entlang einer geraden Linie. Um einen einzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten innerhalb des `<defs>`-Abschnitts Ihrer SVG-Datei.

### Einfaches Beispiel

```html
<svg width="120" height="240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <style>
    #rect1 {
      fill: url("#Gradient1");
    }
    .stop1 {
      stop-color: red;
    }
    .stop2 {
      stop-color: black;
      stop-opacity: 0;
    }
    .stop3 {
      stop-color: blue;
    }
  </style>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>
```

{{ EmbedLiveSample('Linear_Gradient','120','280') }}

Oben ist ein Beispiel eines linearen Verlaufs, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufs befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten geben dem Verlauf an, welche Farbe er an bestimmten Positionen haben sollte, indem sie ein `offset`-Attribut für die Position und ein `stop-color`-Attribut angeben. Dies kann direkt oder über CSS zugewiesen werden. Die beiden Methoden wurden zu Demonstrationszwecken gemischt. Zum Beispiel sagt dieser Verlauf dem Farbverlauf, dass er mit der Farbe Rot beginnen, in der Mitte zu transparentem Schwarz wechseln und mit der Farbe Blau enden soll. Sie können so viele Stoppfarben einfügen, wie Sie möchten, um einen Verlauf zu erstellen, der so schön oder schrecklich ist, wie Sie es benötigen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) ansteigen. Doppelte Werte verwenden den Stopp, der am weitesten unten im XML-Baum zugewiesen ist. Außerdem können Sie, wie bei Füllung und Strich, ein `stop-opacity`-Attribut angeben, um die Opazität an dieser Position festzulegen (wiederum können Sie in FF3 auch rgba-Werte verwenden, um dies zu tun).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn von einem Objekt aus dem `fill`- oder `stroke`-Attribut referenzieren. Dies geschieht genauso wie bei der Referenzierung von Elementen in CSS, unter Verwendung einer `url`. In diesem Fall ist die URL nur ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um es anzuhängen, setzen Sie die `fill`-Eigenschaft auf `url("#Gradient1")`, und voilà! Unser Objekt ist jetzt mehrfarbig. Dasselbe können Sie mit `stroke` tun.

```svg
<style>
  #rect1 {
    fill: url("#Gradient1");
  }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute, die die Größe und das Erscheinungsbild des Verlaufs angeben. Die Orientierung des Verlaufs wird durch zwei Punkte gesteuert, die durch die Attribute `x1`, `x2`, `y1` und `y2` bezeichnet werden. Diese Attribute definieren eine Linie, entlang der der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal orientiert, kann aber durch Ändern dieser Attribute gedreht werden. Gradient2 im obigen Beispiel ist so konzipiert, dass er einen vertikalen Verlauf erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut bei Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stopps von einem Verlauf in einem anderen enthalten sein. Im obigen Beispiel müssten Sie nicht alle Stopps in Gradient2 erneut erstellen.
>
> ```html
> <linearGradient id="Gradient1">
>   <stop id="stop1" offset="0%" />
>   <stop id="stop2" offset="50%" />
>   <stop id="stop3" offset="100%" />
> </linearGradient>
> <linearGradient
>   id="Gradient2"
>   x1="0"
>   x2="0"
>   y1="0"
>   y2="1"
>   href="#Gradient1" />
> ```

## Radialer Verlauf

Radiale Verläufe ähneln linearen, zeichnen jedoch einen Verlauf, der von einem Punkt aus strahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

### Einfaches Beispiel

```html
<svg width="120" height="240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```

{{ EmbedLiveSample('Basic_example_2','120','280') }}

Die hier verwendeten Stopps sind dieselben wie zuvor, aber jetzt wird das Objekt in der Mitte rot sein und in alle Richtungen allmählich am Rand blau. Wie lineare Verläufe kann der `<radialGradient>`-Knoten mehrere Attribute enthalten, um seine Position und Ausrichtung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste dieser Punkte definiert einen Kreis, um den der Verlauf endet. Es erfordert einen Mittelpunkt, der durch die Attribute `cx` und `cy` sowie einen Radius `r` festgelegt wird. Durch das Festlegen dieser drei Attribute können Sie den Verlauf verschieben und seine Größe ändern, wie im zweiten `rect` oben gezeigt ist.

Der zweite Punkt wird als Brennpunkt bezeichnet und wird durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschreibt, wo die Ränder des Verlaufs sind, beschreibt der Brennpunkt, wo dessen Mitte ist. Dies ist einfacher mit einem Beispiel zu sehen.

### Zentrum und Brennpunkt

```html
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ EmbedLiveSample('Center_and_focal_point','120','160') }}

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises verschoben wird, kann der Verlauf nicht korrekt gerendert werden, sodass angenommen wird, dass er innerhalb des Randes des Kreises liegt. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich an derselben Stelle wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe haben auch einige andere Attribute, um Transformationen zu beschreiben, die sie durchlaufen können. Das einzige andere, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut steuert, was passiert, wenn der Verlauf sein Ende erreicht, das Objekt jedoch noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die endgültige Off-Farben verwendet, um den Rest des Objekts zu füllen. `"reflect"` verursacht, dass der Verlauf sich fortsetzt, aber in umgekehrter Richtung reflektiert, beginnend mit dem Farb-Offset bei 100% und zurück zum Offset bei 0% und dann wieder nach oben. `"repeat"` ermöglicht es auch, dass der Verlauf sich fortsetzt, aber anstatt rückwärts zu gehen, springt er einfach zurück zum Anfang und beginnt erneut.

### spreadMethod

```html
<svg width="220" height="220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="GradientPad"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="pad">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientRepeat"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="repeat">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientReflect"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientPad)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientRepeat)" />
  <rect
    x="120"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientReflect)" />

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">
    Pad
  </text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Repeat
  </text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Reflect
  </text>
</svg>
```

{{ EmbedLiveSample('spreadMethod','220','260') }}

Beide Verläufe haben auch ein Attribut namens `gradientUnits`, das das Einheitensystem beschreibt, das Sie verwenden werden, um die Größe oder Orientierung des Verlaufs zu beschreiben. Hier gibt es zwei mögliche Werte: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standardwert, daher wurde das bisher gezeigt. Es skaliert den Verlauf im Wesentlichen auf die Größe Ihres Objekts, sodass Sie nur Koordinaten in Werten von null bis eins angeben müssen, und sie werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` verwendet im Wesentlichen absolute Einheiten. Daher müssen Sie wissen, wo sich Ihr Objekt befindet, und den Verlauf an derselben Stelle platzieren. Der oben erwähnte radialGradient würde wie folgt umgeschrieben:

```html
<radialGradient
  id="Gradient"
  cx="60"
  cy="60"
  r="50"
  fx="35"
  fy="35"
  gradientUnits="userSpaceOnUse"></radialGradient>
```

Sie können dann auch eine andere Transformation auf den Verlauf anwenden, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir noch keine [Transformationen eingeführt](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations) haben, lassen wir das für später.

Es gibt einige andere Besonderheiten im Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Objekt-Begrenzungsrahmen nicht quadratisch ist, aber sie sind ziemlich komplex und müssen auf jemanden warten, der mehr Wissen darüber hat, um sie zu erklären.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
