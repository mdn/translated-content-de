---
title: Gradients in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

Vielleicht aufregender als nur Füllungen und Umrandungen ist die Tatsache, dass Sie auch Verläufe erstellen und als Füllungen oder Umrandungen anwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden getrennt von ihrem Einsatzort definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut zuweisen, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

## Linearer Verlauf

Lineare Verläufe ändern sich entlang einer geraden Linie. Um einen einzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten im `<defs>`-Abschnitt Ihrer SVG-Datei.

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

Oben sehen Sie ein Beispiel für einen linearen Verlauf, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufs befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten spezifizieren durch ein `offset`-Attribut, wo die Farbe an bestimmten Positionen sein soll, sowie ein `stop-color`-Attribut. Dies kann direkt oder über CSS zugewiesen werden. Für dieses Beispiel wurden beide Methoden vermischt. Zum Beispiel gibt dieser Verlauf an, mit der Farbe Rot zu beginnen, in der Mitte in transparentes Schwarz überzugehen und mit der Farbe Blau zu enden. Sie können so viele Stoppfarben einfügen, wie Sie möchten, um einen verlockenden oder abschreckenden Farbverlauf zu erstellen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) zunehmen. Doppelte Werte nutzen den Stopp, der am weitesten unten im XML-Baum zugewiesen ist. Außerdem können Sie wie bei Füllung und Umrandung ein `stop-opacity`-Attribut spezifizieren, um die Opazität an dieser Position festzulegen (wiederum, in FF3 können Sie auch rgba-Werte verwenden, um dies zu tun).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn von einem Objekt's `fill`- oder `stroke`-Attribut referenzieren. Dies geschieht auf die gleiche Weise, wie Sie Elemente in CSS referenzieren, indem Sie eine `url` verwenden. In diesem Fall ist die URL lediglich ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um ihn anzubringen, setzen Sie die `fill` auf `url("#Gradient1")`, und voilà! Unser Objekt ist nun mehrfarbig. Dasselbe können Sie mit `stroke` tun.

```svg
<style>
  #rect1 {
    fill: url("#Gradient1");
  }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, die die Größe und das Erscheinungsbild des Verlaufs spezifizieren. Die Ausrichtung des Verlaufs wird durch zwei Punkte gesteuert, die durch die Attribute `x1`, `x2`, `y1` und `y2` bezeichnet werden. Diese Attribute definieren eine Linie, entlang derer der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal ausgerichtet, kann jedoch durch Ändern dieser Attribute gedreht werden. Gradient2 im obigen Beispiel ist so ausgelegt, dass er einen vertikalen Verlauf erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut auf Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stops von einem Verlauf in einen anderen übernommen werden. Im obigen Beispiel müssten Sie nicht alle Stops in Gradient2 neu erstellen.
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
> Wir haben hier den xlink-Namespace direkt am Knoten eingefügt, obwohl Sie ihn normalerweise am Anfang Ihres Dokuments definieren würden. Mehr dazu, wenn wir [über Bilder sprechen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG).

## Radialer Verlauf

Radiale Verläufe sind linearen ähnlich, zeichnen jedoch einen Verlauf, der sich von einem Punkt aus ausbreitet. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

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

Die hier verwendeten Stops sind die gleichen wie zuvor, aber jetzt wird das Objekt im Zentrum rot sein und in alle Richtungen allmählich zu Blau am Rand wechseln. Wie lineare Verläufe kann der `<radialGradient>`-Knoten mehrere Attribute annehmen, um seine Position und Ausrichtung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste dieser Punkte definiert einen Kreis, um den der Verlauf endet. Dazu ist ein Mittelpunkt erforderlich, der durch die Attribute `cx` und `cy` bezeichnet wird, sowie ein Radius, `r`. Die Einstellung dieser drei Attribute ermöglicht es Ihnen, den Verlauf zu verschieben und seine Größe zu ändern, wie beim zweiten `rect` oben gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschrieben hat, wo die Ränder des Verlaufs waren, beschreibt der Brennpunkt, wo dessen Mitte ist. Dies ist leichter mit einem Beispiel zu erkennen.

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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises verschoben wird, ist es unmöglich, den Verlauf korrekt darzustellen. Daher wird angenommen, dass der Punkt innerhalb des Randes des Kreises liegt. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich an der gleichen Stelle wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe nehmen einige andere Attribute an, um Transformationen zu beschreiben, die sie möglicherweise durchlaufen können. Das einzige andere Attribut, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut steuert, was passiert, wenn der Verlauf sein Ende erreicht, das Objekt jedoch noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die letzte Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` bewirkt, dass der Verlauf weitergeht, jedoch in umgekehrter Reflexion, beginnend mit dem Offset bei 100% und zurückgehend zum Offset bei 0%, und dann wieder nach oben. `"repeat"` lässt den Verlauf ebenfalls weiterlaufen, aber statt zurückzugehen, springt er einfach wieder an den Anfang und läuft erneut.

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

Beide Verläufe haben auch ein Attribut namens `gradientUnits`, das das Einheitensystem beschreibt, das Sie verwenden möchten, wenn Sie die Größe oder Ausrichtung des Verlaufs beschreiben. Es gibt zwei mögliche Werte, die hier verwendet werden können: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standard. Deshalb wurde das bisher gezeigt. Es skaliert den Verlauf im Wesentlichen auf die Größe Ihres Objekts, sodass Sie nur Koordinatenwerte von null bis eins angeben müssen, die automatisch auf die Größe Ihres Objekts skaliert werden. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten an. Daher müssen Sie wissen, wo sich Ihr Objekt befindet, und den Verlauf an der gleichen Stelle platzieren. Der oben angegebene radialGradient würde umgeschrieben werden:

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

Sie können dann auch eine weitere Transformation auf den Verlauf anwenden, indem Sie das `gradientTransform`-Attribut verwenden. Da wir jedoch noch keine [Transformationen eingeführt](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations) haben, belassen wir es im Moment dabei.

Es gibt einige andere Vorbehalte zum Umgang mit `gradientUnits="objectBoundingBox"`, wenn das Objektbegrenzungsfeld nicht quadratisch ist, aber sie sind ziemlich komplex und müssen auf jemanden warten, der besser Bescheid weiß, um sie zu erklären.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
