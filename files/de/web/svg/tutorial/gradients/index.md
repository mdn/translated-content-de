---
title: Verläufe in SVG
slug: Web/SVG/Tutorial/Gradients
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

Vielleicht noch aufregender als nur Füllungen und Umrisse ist die Tatsache, dass Sie auch Verläufe erstellen und als Füllungen oder Umrisse anwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Diese werden getrennt von ihrem Verwendungsort definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut geben, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

## Linearer Verlauf

Lineare Verläufe ändern sich entlang einer geraden Linie. Um einen hinzuzufügen, erstellen Sie einen {{SVGElement('linearGradient')}}-Knoten innerhalb des `<defs>`-Abschnitts Ihrer SVG-Datei.

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

Oben ist ein Beispiel für einen linearen Verlauf, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufes befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten teilen dem Verlauf mit, welche Farbe er an bestimmten Positionen haben soll, indem sie ein `offset`-Attribut für die Position und ein `stop-color`-Attribut angeben. Dies kann direkt oder über CSS zugewiesen werden. Die beiden Methoden wurden für dieses Beispiel gemischt. Zum Beispiel wird dem Verlauf gesagt, dass er mit der Farbe Rot beginnen, in der Mitte in transparentes Schwarz übergehen und mit der Farbe Blau enden soll. Sie können so viele Stoppfarben einfügen, wie Sie möchten, um eine Mischung zu erstellen, die so schön oder unschön ist, wie Sie es benötigen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) steigen. Doppelte Werte verwenden den Stopp, der am weitesten unten im XML-Baum zugewiesen ist. Außerdem können wie bei Füllung und Umriss ein `stop-opacity`-Attribut festgelegt werden, um die Deckkraft an dieser Position zu bestimmen (wiederum können Sie in FF3 auch rgba-Werte dafür verwenden).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn aus dem `fill`- oder `stroke`-Attribut eines Objekts referenzieren. Dies geschieht auf die gleiche Weise wie das Referenzieren von Elementen in CSS, mittels einer `url`. In diesem Fall ist die URL nur ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" besitzt. Um es anzufügen, setzen Sie das `fill` auf `url(#Gradient1)`, und voilà! Unser Objekt ist nun mehrfarbig. Das Gleiche können Sie mit `stroke` machen.

```svg
<style>
  #rect1 { fill: url(#Gradient1); }
</style>
```

Das `<linearGradient>`-Element kann auch mehrere andere Attribute enthalten, die die Größe und das Aussehen des Verlaufs bestimmen. Die Orientierung des Verlaufs wird von zwei Punkten kontrolliert, die durch die Attribute `x1`, `x2`, `y1` und `y2` bezeichnet werden. Diese Attribute definieren eine Linie, entlang derer der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal ausgerichtet, kann jedoch durch Änderung dieser Attribute gedreht werden. Gradient2 im obigen Beispiel ist so gestaltet, dass ein vertikaler Verlauf entsteht.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut auf Verläufe anwenden. Wenn es verwendet wird, können Attribute und Stops von einem Verlauf in einem anderen einbezogen werden. Im obigen Beispiel müssten Sie nicht alle Stops in Gradient2 neu erstellen.
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
> Ich habe hier den xlink-Namespace direkt am Knoten eingefügt, obwohl Sie ihn normalerweise am oberen Rand Ihres Dokuments definieren würden. Mehr dazu, wenn wir [über Bilder sprechen](/de/docs/Web/SVG/Tutorial/Other_content_in_SVG).

## Radialer Verlauf

Radiale Verläufe sind ähnlich wie lineare, zeichnen jedoch einen Verlauf, der sich von einem Punkt aus ausbreitet. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Bereich Ihres Dokuments ein.

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

Die Stops, die hier verwendet werden, sind die gleichen wie zuvor, aber jetzt wird das Objekt in der Mitte rot sein und sich in alle Richtungen allmählich zum Rand hin zu Blau ändern. Wie lineare Verläufe kann auch der `<radialGradient>`-Knoten mehrere Attribute aufnehmen, um seine Position und Orientierung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste davon definiert einen Kreis, um den der Verlauf endet. Es erfordert einen Mittelpunkt, bezeichnet durch die Attribute `cx` und `cy`, und einen Radius, `r`. Wenn Sie diese drei Attribute setzen, können Sie den Verlauf verschieben und seine Größe ändern, wie im zweiten `rect` oben gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschrieb, wo sich die Ränder des Verlaufs befinden, beschreibt der Brennpunkt, wo sich seine Mitte befindet. Dies ist leichter mit einem Beispiel zu sehen.

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

Wenn der Brennpunkt außerhalb des früher beschriebenen Kreises verlegt wird, ist es unmöglich, den Verlauf korrekt darzustellen, sodass davon ausgegangen wird, dass der Punkt innerhalb des Kreisrandes liegt. Wird der Brennpunkt überhaupt nicht angegeben, geht man davon aus, dass er sich am selben Ort wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe benötigen einige andere Attribute, um Transformationen zu beschreiben, die sie durchlaufen können. Das einzige, das ich hier erwähnen möchte, ist das Attribut `spreadMethod`. Dieses Attribut bestimmt, was passiert, wenn der Verlauf sein Ende erreicht, das Objekt jedoch noch nicht gefüllt ist. Es kann einen von drei Werten annehmen, `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die letzte Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` bewirkt, dass der Verlauf weitergeht, jedoch in umgekehrter Richtung reflektiert, beginnend mit der Farb-Offset bei 100% und zurücklaufend zum Offset bei 0% und dann wieder nach oben. `"repeat"` lässt den Verlauf ebenfalls weiterlaufen, aber anstatt rückwärts zu gehen, springt er einfach zurück zum Anfang und läuft erneut ab.

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

Beide Verläufe haben auch ein `gradientUnits`-Attribut, das das Einheitensystem beschreibt, das Sie verwenden, um die Größe oder Orientierung des Verlaufs zu beschreiben. Hier gibt es zwei mögliche Werte: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standard, und das ist das, was bisher gezeigt wurde. Es skaliert den Verlauf im Wesentlichen auf die Größe Ihres Objekts, sodass Sie nur Koordinaten in Werten von null bis eins angeben müssen, und sie werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten an. Sie müssen also wissen, wo sich Ihr Objekt befindet, und den Verlauf an derselben Stelle platzieren. Der obere radialGradient würde umgeschrieben:

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

Sie können dann auch eine weitere Transformation auf den Verlauf anwenden, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir noch keine [Transformationen eingeführt haben](/de/docs/Web/SVG/Tutorial/Basic_Transformations), werde ich das für später belassen.

Es gibt einige andere Besonderheiten beim Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Objektbeschränkungsrahmen nicht quadratisch ist, aber diese sind ziemlich komplex und müssen auf jemanden warten, der mehr darüber weiß, um sie zu erklären.

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}
