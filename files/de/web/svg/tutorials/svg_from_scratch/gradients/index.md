---
title: Gradients in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

Vielleicht spannender als nur Füllungen und Umrisse ist die Tatsache, dass Sie auch Verläufe erstellen und als Füllungen oder Umrisse anwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden getrennt von ihrer Verwendung definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut geben, damit andere Elemente darauf verweisen können. Verlaufdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

## Linearer Verlauf

Lineare Verläufe ändern sich entlang einer geraden Linie. Um einen einzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten innerhalb des `<defs>`-Abschnitts Ihrer SVG-Datei.

### Einfaches Beispiel

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
      fill: url(#Gradient1);
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

Oben ist ein Beispiel für einen linearen Verlauf, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufs befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten geben dem Verlauf an, welche Farbe er an bestimmten Positionen haben soll, indem sie ein `offset`-Attribut für die Position und ein `stop-color`-Attribut angeben. Dies kann direkt oder über CSS zugewiesen werden. Für die Zwecke dieses Beispiels wurden die beiden Methoden gemischt. Zum Beispiel sagt dieser Verlauf, er soll bei der Farbe Rot beginnen, in der Mitte zu transparentem Schwarz wechseln und bei der Farbe Blau enden. Sie können so viele Farbstopps einfügen, wie Sie möchten, um einen so schönen oder hässlichen Verlauf zu schaffen, wie Sie es wünschen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) auf 100% (oder 1) ansteigen. Doppelte Werte verwenden den Stopp, der am weitesten unten im XML-Baum zugewiesen ist. Außerdem können Sie, wie bei Füllung und Umriss, ein `stop-opacity`-Attribut angeben, um die Deckkraft an dieser Position festzulegen (dabei können in FF3 auch RGBA-Werte verwendet werden).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie auf ihn aus dem `fill`- oder `stroke`-Attribut eines Objekts verweisen. Dies geschieht auf die gleiche Weise, wie Sie Elemente in CSS referenzieren, indem sie eine `url` verwenden. In diesem Fall ist die URL einfach ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um ihn anzuhängen, setzen Sie `fill` auf `url(#Gradient1)`, und voilà! Unser Objekt ist jetzt mehrfarbig. Sie können dasselbe mit `stroke` tun.

```svg
<style>
  #rect1 { fill: url(#Gradient1); }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, die die Größe und das Erscheinungsbild des Verlaufs spezifizieren. Die Ausrichtung des Verlaufs wird durch zwei Punkte bestimmt, die durch die Attribute `x1`, `x2`, `y1` und `y2` angegeben werden. Diese Attribute definieren eine Linie, entlang der sich der Verlauf erstreckt. Der Verlauf ist standardmäßig horizontal ausgerichtet, kann aber durch Ändern dieser Attribute gedreht werden. Gradient2 im obigen Beispiel ist so gestaltet, dass ein vertikaler Verlauf entsteht.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut bei Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stops von einem Verlauf in einem anderen einbezogen werden. Im obigen Beispiel müssten Sie nicht alle Stops in Gradient2 neu erstellen.
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
>   xmlns:xlink="http://www.w3.org/1999/xlink"
>   href="#Gradient1" />
> ```
>
> Wir haben den xlink-Namespace hier direkt auf den Knoten aufgenommen, obwohl Sie ihn normalerweise oben in Ihrem Dokument definieren würden. Mehr dazu, wenn wir [über Bilder sprechen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG).

## Radialer Verlauf

Radiale Verläufe sind ähnlich wie lineare, aber sie zeichnen einen Verlauf, der von einem Punkt ausstrahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

### Einfaches Beispiel

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

Die hier verwendeten Stops sind dieselben wie zuvor, aber jetzt wird das Objekt in der Mitte rot und wechselt in alle Richtungen allmählich zu blau am Rand. Wie lineare Verläufe kann auch der `<radialGradient>`-Knoten mehrere Attribute enthalten, um seine Position und Ausrichtung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird wiederum durch zwei Punkte definiert, die bestimmen, wo seine Kanten liegen. Der erste dieser Punkte definiert einen Kreis, um den sich der Verlauf erstreckt. Er benötigt einen Mittelpunkt, der durch die Attribute `cx` und `cy` angegeben wird, und einen Radius, `r`. Durch das Setzen dieser drei Attribute können Sie den Verlauf verschieben und seine Größe ändern, wie am zweiten `rect` oben gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und wird durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschrieb, wo sich die Kanten des Verlaufs befinden, beschreibt der Brennpunkt, wo sich seine Mitte befindet. Dies ist leichter mit einem Beispiel zu sehen.

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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises bewegt wird, ist es unmöglich, dass der Verlauf korrekt gerendert wird. Daher wird angenommen, dass sich der Brennpunkt innerhalb der Kante des Kreises befindet. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich am selben Ort wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe nehmen auch einige andere Attribute an, um Transformationen zu beschreiben, die sie möglicherweise durchlaufen. Das einzige andere Attribut, das ich hier erwähnen möchte, ist das Attribut `spreadMethod`. Dieses Attribut steuert, was passiert, wenn der Verlauf sein Ende erreicht, das Objekt aber noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die letzte Offset-Farbe verwendet, um den Rest des Objektes zu füllen. `"reflect"` führt dazu, dass der Verlauf fortgesetzt wird, aber in umgekehrter Richtung, beginnend mit der Farbverschiebung bei 100% und zurückgehend zur Verschiebung bei 0%, und dann wieder nach oben. `"repeat"` lässt den Verlauf ebenfalls fortsetzen, aber anstatt rückwärts zu gehen, springt er einfach zurück zum Anfang und läuft erneut.

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

Beide Verläufe haben auch ein Attribut namens `gradientUnits`, das beschreibt, welches Maßeinheitensystem Sie verwenden, wenn Sie die Größe oder Ausrichtung des Verlaufs beschreiben. Hier können zwei mögliche Werte verwendet werden: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standard, daher wurde das bisher gezeigt. Es skaliert den Verlauf auf die Größe Ihres Objekts, sodass Sie die Koordinaten nur in Werten von Null bis Eins angeben müssen, und diese werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` verwendet im Wesentlichen absolute Einheiten. Damit müssen Sie wissen, wo sich Ihr Objekt befindet und den Verlauf an derselben Stelle platzieren. Der oben gezeigte radialGradient würde umgeschrieben:

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

Sie können auch eine weitere Transformation auf den Verlauf anwenden, indem Sie das Attribut `gradientTransform` verwenden, aber da wir [Transformationen noch nicht eingeführt haben](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations), werden wir das für später belassen.

Es gibt einige andere Besonderheiten im Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Objektbegrenzungsrahmen nicht quadratisch ist, aber sie sind ziemlich komplex und müssen von jemandem erklärt werden, der sich besser auskennt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
