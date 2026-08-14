---
title: Verläufe in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
l10n:
  sourceCommit: 27bb49e1849433e05c964c8a645c448f184380ce
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

Vielleicht noch spannender als nur Füllungen und Umrandungen ist die Tatsache, dass Sie auch Verläufe erstellen und diese als Füllungen oder Umrandungen anwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden getrennt von ihrem Einsatz definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut zuweisen, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

## Linearer Verlauf

Lineare Verläufe ändern sich entlang einer geraden Linie. Um einen einzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten im `<defs>`-Abschnitt Ihrer SVG-Datei.

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

Oben sehen Sie ein Beispiel eines linearen Verlaufs, der auf ein `<rect>`-Element angewendet wird. Im linearen Verlauf sind mehrere {{SVGElement('stop')}}-Knoten enthalten. Diese Knoten geben dem Verlauf an, welche Farbe er an bestimmten Positionen haben soll, indem das Attribut `offset` für die Position und `stop-color` festgelegt wird. Dies kann direkt oder über CSS zugewiesen werden. Im Beispiel wurden die beiden Methoden kombiniert. So wird dem Verlauf beispielsweise mitgeteilt, dass er mit der Farbe Rot beginnen, in der Mitte zu transparent-schwarz wechseln und mit der Farbe Blau enden soll. Sie können beliebig viele Stoppfarben einfügen, um einen Verlauf zu erstellen, der so schön oder unschön ist, wie Sie es wünschen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) ansteigen. Doppelte Werte verwenden den Stopp, der weiter unten im XML-Baum zugewiesen ist. Ebenso wie bei Füllung und Umrandung können Sie auch ein `stop-opacity`-Attribut angeben, um die Deckkraft an dieser Position festzulegen.

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn aus dem `fill`- oder `stroke`-Attribut eines Objekts referenzieren. Dies geschieht auf die gleiche Weise wie bei der Referenzierung von Elementen in CSS, nämlich mit einer `url`. In diesem Fall ist die URL nur ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um ihn anzuhängen, setzen Sie das `fill` auf `url("#Gradient1")`, und voilà! Unser Objekt ist jetzt mehrfarbig. Dasselbe können Sie auch mit `stroke` tun.

```svg
<style>
  #rect1 {
    fill: url("#Gradient1");
  }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, welche die Größe und das Erscheinungsbild des Verlaufs festlegen. Die Ausrichtung des Verlaufs wird durch zwei Punkte kontrolliert, die durch die Attribute `x1`, `x2`, `y1` und `y2` bestimmt werden. Diese Attribute definieren eine Linie, entlang derer der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal ausgerichtet, kann jedoch durch Änderung dieser Attribute gedreht werden. Gradient2 im obigen Beispiel ist so konzipiert, dass er einen vertikalen Verlauf erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut bei Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stopps von einem Verlauf in einem anderen eingeschlossen werden. Im obigen Beispiel müssten Sie nicht alle Stopps in Gradient2 erneut erstellen.
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

Radiale Verläufe sind ähnlich wie lineare, zeichnen jedoch einen Verlauf, der von einem Punkt aus strahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

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

Die hier verwendeten Stopps sind die gleichen wie zuvor, aber jetzt wird das Objekt im Zentrum rot und wechselt in alle Richtungen schrittweise zu Blau am Rand. Wie lineare Verläufe kann der `<radialGradient>`-Knoten mehrere Attribute annehmen, um seine Position und Ausrichtung zu beschreiben. Anders als bei linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste dieser Punkte definiert einen Kreis, um den der Verlauf endet. Er erfordert einen Mittelpunkt, der durch die Attribute `cx` und `cy` angegeben wird, sowie einen Radius `r`. Das Festlegen dieser drei Attribute ermöglicht es Ihnen, den Verlauf zu verschieben und seine Größe zu ändern, wie im zweiten `rect` oben gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschreibt, wo die Ränder des Verlaufs sind, beschreibt der Brennpunkt, wo sein Zentrum liegt. Dies wird mit einem Beispiel leichter verständlich.

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

  <circle cx="60" cy="60" r="50" fill="none" stroke="white" stroke-width="2" />
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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises bewegt wird, kann der Verlauf nicht korrekt gerendert werden, daher wird angenommen, dass der Punkt innerhalb des Rands des Kreises liegt. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich am gleichen Ort wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe nehmen auch einige andere Attribute an, um Transformationen zu beschreiben, die sie durchlaufen können. Das einzige andere Attribut, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut kontrolliert, was passiert, wenn der Verlauf sein Ende erreicht, aber das Objekt noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die endgültige Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` lässt den Verlauf weiterlaufen, jedoch gespiegelt in umgekehrter Richtung, beginnend mit der Farbverschiebung bei 100% und zurück zur Verschiebung bei 0%, und dann wieder nach oben. `"repeat"` lässt den Verlauf ebenfalls weiterlaufen, aber anstatt rückwärts zu gehen, springt er einfach zurück zum Anfang und läuft erneut.

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

Beide Verläufe haben auch ein Attribut namens `gradientUnits`, das beschreibt, welches Einheitensystem Sie verwenden werden, wenn Sie die Größe oder Ausrichtung des Verlaufs beschreiben. Es gibt zwei mögliche Werte, die Sie hier verwenden können: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standardwert, und das wurde bisher gezeigt. Es skaliert den Verlauf im Wesentlichen auf die Größe Ihres Objekts, sodass Sie die Koordinaten nur mit Werten von null bis eins angeben müssen, und diese werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten an. Sie müssen also wissen, wo sich Ihr Objekt befindet, und den Verlauf an derselben Stelle platzieren. Der obige radialGradient würde neu geschrieben:

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

Sie können dann auch eine weitere Transformation auf den Verlauf anwenden, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir [Transformationen noch nicht eingeführt haben](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations), lassen wir das für später.

Es gibt einige andere Einschränkungen für den Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Begrenzungsrahmen des Objekts nicht quadratisch ist, aber diese sind ziemlich komplex und müssen von jemandem erklärt werden, der sich besser auskennt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
