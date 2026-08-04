---
title: Gradients in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
l10n:
  sourceCommit: a988fe7e721539634bad936da7259ffbad37d0e5
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

Vielleicht noch aufregender als nur Füllungen und Konturen ist die Tatsache, dass Sie auch Gradienten erstellen und als Füllungen oder Konturen verwenden können.

Es gibt zwei Arten von SVG-Gradienten: linear und radial. Diese werden getrennt von der Stelle definiert, an der sie verwendet werden, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Gradienten ein `id`-Attribut geben, damit andere Elemente darauf verweisen können. Gradientendefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

## Linearer Gradient

Lineare Gradienten verändern sich entlang einer geraden Linie. Um einen einzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten im `<defs>`-Abschnitt Ihrer SVG-Datei.

### Grundlegendes Beispiel

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Oben ist ein Beispiel für einen linearen Gradient, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Gradienten befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten geben dem Gradient an, welche Farbe er an bestimmten Positionen haben soll, indem sie ein `offset`-Attribut für die Position und ein `stop-color`-Attribut angeben. Dies kann direkt oder über CSS zugewiesen werden. Die beiden Methoden wurden in diesem Beispiel gemischt. Zum Beispiel sagt dieser Gradient, dass er mit der Farbe Rot beginnen soll, in der Mitte zu transparent-schwarz wechseln und mit der Farbe Blau enden soll. Sie können so viele Stop-Farben wie gewünscht einfügen, um einen Verlauf zu erstellen, der so schön oder abscheulich ist, wie Sie es benötigen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) steigen. Doppelte Werte verwenden den Stop, der weiter unten im XML-Baum zugewiesen ist. Ebenso wie bei Füllung und Kontur können Sie ein `stop-opacity`-Attribut angeben, um die Deckkraft an dieser Position festzulegen (wiederum können Sie in FF3 auch rgba-Werte verwenden, um dies zu tun).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Gradient zu verwenden, müssen Sie ihn von einem `fill`- oder `stroke`-Attribut eines Objekts referenzieren. Dies erfolgt genauso wie das Referenzieren von Elementen in CSS, mit einer `url`. In diesem Fall ist die URL nur ein Verweis auf unseren Gradienten, der die kreative ID "Gradient1" hat. Um ihn anzuhängen, setzen Sie den `fill` auf `url("#Gradient1")`, und voilà! Unser Objekt ist jetzt mehrfarbig. Sie können dasselbe mit `stroke` tun.

```svg
<style>
  #rect1 {
    fill: url("#Gradient1");
  }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, die die Größe und das Erscheinungsbild des Gradienten bestimmen. Die Ausrichtung des Gradienten wird durch zwei Punkte gesteuert, die durch die Attribute `x1`, `x2`, `y1` und `y2` bezeichnet werden. Diese Attribute definieren eine Linie, entlang der der Gradient verläuft. Der Gradient ist standardmäßig horizontal ausgerichtet, kann jedoch durch Änderung dieser Attribute rotiert werden. Der Gradient2 im obigen Beispiel ist so gestaltet, dass er einen vertikalen Gradient erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können das `href`-Attribut auch bei Gradienten verwenden. Wenn es verwendet wird, können Attribute und Stops von einem Gradient auf einen anderen übernommen werden. Im obigen Beispiel müssten Sie nicht alle Stops in Gradient2 neu erstellen.
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

## Radialer Gradient

Radiale Gradienten sind ähnlich wie lineare, aber sie zeichnen einen Verlauf, der von einem Punkt aus strahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

### Grundlegendes Beispiel

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Die verwendeten Stops sind hier dieselben wie zuvor, aber nun wird das Objekt in der Mitte rot sein und sich in alle Richtungen allmählich zu Blau am Rand ändern. Wie lineare Gradienten kann auch der `<radialGradient>`-Knoten mehrere Attribute annehmen, um seine Position und Ausrichtung zu beschreiben. Allerdings ist es im Gegensatz zu linearen Gradienten etwas komplexer. Der radiale Gradient wird wieder durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste dieser Punkte definiert einen Kreis, um den der Gradient endet. Es erfordert einen Mittelpunkt, der durch die Attribute `cx` und `cy` bezeichnet wird, sowie einen Radius, `r`. Durch das Festlegen dieser drei Attribute können Sie den Gradient verschieben und seine Größe ändern, wie im oberen zweiten `rect` gezeigt.

Der zweite Punkt wird der Brennpunkt genannt und ist durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschrieb, wo die Ränder des Gradienten waren, beschreibt der Brennpunkt, wo seine Mitte ist. Dies ist leichter mit einem Beispiel zu erkennen.

### Mittelpunkt und Brennpunkt

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises verschoben wird, ist es unmöglich, den Gradient korrekt darzustellen, sodass der Punkt angenommen wird, innerhalb des Kreises zu liegen. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich an derselben Stelle wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Gradienten nehmen außerdem einige andere Attribute an, um Transformationen zu beschreiben, die sie möglicherweise durchlaufen. Das einzige andere, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut steuert, was passiert, wenn der Gradient sein Ende erreicht, das Objekt jedoch noch nicht gefüllt ist. Es kann einen von drei Werten annehmen, `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Gradient sein Ende erreicht, wird die letzte Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` bewirkt, dass der Gradient weiterläuft, jedoch umgekehrt reflektiert, beginnend mit der Farbe bei einem Offset von 100 % und zurücklaufend zu einem Offset von 0 %, und dann wieder hoch. `"repeat"` lässt den Gradient ebenfalls weiterlaufen, aber anstatt rückwärts zu gehen, springt er einfach zurück zum Anfang und läuft erneut.

### spreadMethod

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

Beide Gradienten haben auch ein Attribut namens `gradientUnits`, das das Einheitensystem beschreibt, das Sie verwenden werden, wenn Sie die Größe oder Ausrichtung des Gradienten beschreiben. Es gibt zwei mögliche Werte, die Sie hier verwenden können: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standard, daher wurde bisher das gezeigt. Es skaliert den Gradient im Wesentlichen auf die Größe Ihres Objekts, sodass Sie nur Koordinaten in Werten von null bis eins angeben müssen, und sie werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten. Sie müssen also wissen, wo Ihr Objekt ist, und den Gradient an derselben Stelle platzieren. Der obige `radialGradient` würde umgeschrieben:

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

Sie können dann auch eine weitere Transformation auf den Gradient anwenden, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir [Transformationen noch nicht eingeführt haben](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations), werden wir das für später aufheben.

Es gibt noch einige weitere Vorbehalte im Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Objektbegrenzungsrahmen nicht quadratisch ist, aber die sind ziemlich komplex und müssen von jemandem mit mehr Wissen erklärt werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
