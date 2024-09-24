---
title: Verläufe in SVG
slug: Web/SVG/Tutorial/Gradients
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

Vielleicht noch spannender als nur Füllungen und Striche ist die Tatsache, dass Sie auch Verläufe erstellen und anwenden können, entweder als Füllungen oder Striche.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden getrennt von ihrem Einsatzort definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut geben, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

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

Oben sehen Sie ein Beispiel für einen linearen Verlauf, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufs befinden sich mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten legen fest, welche Farbe der Verlauf an bestimmten Positionen haben soll, indem sie ein `offset`-Attribut für die Position und ein `stop-color`-Attribut festlegen. Dies kann direkt oder über CSS zugewiesen werden. Die beiden Methoden wurden in diesem Beispiel vermischt. Zum Beispiel wird hier dem Verlauf mitgeteilt, dass er mit der Farbe Rot beginnen, in der Mitte zu transparentem Schwarz wechseln und mit der Farbe Blau enden soll. Sie können so viele Stop-Farben einfügen, wie Sie möchten, um einen Verlauf zu erzeugen, der so schön oder schrecklich ist, wie Sie es benötigen. Die Offsets sollten jedoch stets von 0% (oder 0, wenn Sie das % Zeichen weglassen möchten) bis 100% (oder 1) zunehmen. Bei doppelten Werten wird der Stop verwendet, der am weitesten unten im XML-Baum zugewiesen ist. Wie bei Füllung und Strich können Sie auch ein `stop-opacity`-Attribut angeben, um die Opazität an dieser Position festzulegen (wiederum, in FF3 können Sie auch rgba-Werte verwenden, um dies zu tun).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn aus dem `fill`- oder `stroke`-Attribut eines Objekts referenzieren. Dies geschieht auf die gleiche Weise, wie Sie Elemente in CSS referenzieren, indem Sie eine `url` verwenden. In diesem Fall ist die URL lediglich ein Verweis auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um ihn anzufügen, setzen Sie das `fill` auf `url(#Gradient1)`, und voilà! Unser Objekt ist jetzt mehrfarbig. Sie können dasselbe mit `stroke` tun.

```svg
<style>
  #rect1 { fill: url(#Gradient1); }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, die die Größe und das Erscheinungsbild des Verlaufs festlegen. Die Orientierung des Verlaufs wird durch zwei Punkte gesteuert, die durch die Attribute `x1`, `x2`, `y1` und `y2` angezeigt werden. Diese Attribute definieren eine Linie, entlang der der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal orientiert, kann jedoch durch Änderung dieser Werte gedreht werden. Gradient2 im obigen Beispiel ist so gestaltet, dass es einen vertikalen Verlauf erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut bei Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stops von einem Verlauf in einen anderen übernommen werden. Im obigen Beispiel müssten Sie nicht alle Stops in Gradient2 neu erstellen.
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
> Ich habe den xlink-Namensraum hier direkt am Knoten eingefügt, obwohl Sie ihn normalerweise am Anfang Ihres Dokuments definieren würden. Mehr darüber, wenn wir über [Bilder sprechen](/de/docs/Web/SVG/Tutorial/Other_content_in_SVG).

## Radialer Verlauf

Radiale Verläufe sind ähnlich wie lineare, zeichnen jedoch einen Verlauf, der von einem Punkt ausstrahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Bereich Ihres Dokuments ein.

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

Die hier verwendeten Stops sind die gleichen wie zuvor, aber nun wird das Objekt in der Mitte rot und ändert sich in alle Richtungen allmählich zu blau am Rand. Wie lineare Verläufe kann auch der `<radialGradient>`-Knoten mehrere Attribute annehmen, um Position und Ausrichtung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Kanten sind. Der erste dieser Punkte definiert einen Kreis, um den herum der Verlauf endet. Er erfordert einen Mittelpunkt, der durch die Attribute `cx` und `cy` angegeben wird, und einen Radius, `r`. Das Festlegen dieser drei Attribute ermöglicht es Ihnen, den Verlauf zu verschieben und seine Größe zu ändern, wie im zweiten `rect` oben gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und wird durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschreibt, wo die Kanten des Verlaufs liegen, beschreibt der Brennpunkt, wo seine Mitte ist. Dies ist leichter anhand eines Beispiels zu erkennen.

### Zentrum und Brennpunkt

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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises verschoben wird, ist es unmöglich, den Verlauf korrekt darzustellen, daher wird angenommen, dass sich der Punkt innerhalb des Kreises befindet. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er sich an derselben Stelle wie der Mittelpunkt befindet.

Sowohl lineare als auch radiale Verläufe nehmen auch noch einige andere Attribute an, um Transformationen zu beschreiben, die sie durchlaufen können. Das einzige andere Attribut, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut kontrolliert, was passiert, wenn der Verlauf zu seinem Ende kommt, das Objekt jedoch noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf zu seinem Ende kommt, wird die letzte Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` sorgt dafür, dass der Verlauf fortgesetzt wird, aber gespiegelt in umgekehrter Richtung, beginnend mit der Farbe des Offsets bei 100% und zurück zum Offset bei 0%, und dann wieder nach oben. `"repeat"` lässt den Verlauf ebenfalls fortsetzen, jedoch statt rückwärts zu gehen, springt er einfach zurück zum Anfang und läuft erneut.

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

Beide Verläufe haben auch ein Attribut namens `gradientUnits`, das das Einheitensystem beschreibt, das Sie verwenden werden, wenn Sie die Größe oder Ausrichtung des Verlaufs beschreiben. Es gibt zwei mögliche Werte, die Sie hier verwenden können: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standardwert, daher wurde er bislang gezeigt. Er skaliert den Verlauf im Wesentlichen auf die Größe Ihres Objekts, sodass Sie nur Koordinaten in Werten von null bis eins angeben müssen, und diese werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten. Daher müssen Sie wissen, wo sich Ihr Objekt befindet, und den Verlauf an derselben Stelle platzieren. Der radialGradient oben würde so umgeschrieben werden:

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

Dann können Sie dem Verlauf eine weitere Transformation hinzufügen, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir [Transformationen noch nicht eingeführt haben](/de/docs/Web/SVG/Tutorial/Basic_Transformations), werde ich das für später lassen.

Es gibt einige andere Einschränkungen im Umgang mit `gradientUnits="objectBoundingBox"`, wenn der Objektbegrenzungsrahmen nicht quadratisch ist, aber sie sind ziemlich komplex und müssen warten, bis jemand Wissenderes sie erklärt.

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}
