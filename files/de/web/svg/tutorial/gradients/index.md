---
title: Verläufe in SVG
slug: Web/SVG/Tutorial/Gradients
l10n:
  sourceCommit: 99eff5c722427ca5cb15f5193f5e33d598294ba2
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

Vielleicht noch spannender als nur Füllungen und Umrisse ist die Tatsache, dass Sie auch Verläufe erstellen und als Füllungen oder Umrisse verwenden können.

Es gibt zwei Arten von SVG-Verläufen: linear und radial. Sie werden separat von ihrem Einsatzort definiert, was die Wiederverwendbarkeit fördert. Sie **müssen** jedem Verlauf ein `id`-Attribut geben, damit andere Elemente darauf verweisen können. Verlaufsdefinitionen können in einem {{SVGElement('defs')}}-Element oder einem {{SVGElement('svg')}}-Element platziert werden.

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

Oben ist ein Beispiel für einen linearen Verlauf zu sehen, der auf ein `<rect>`-Element angewendet wird. Innerhalb des linearen Verlaufs gibt es mehrere {{SVGElement('stop')}}-Knoten. Diese Knoten geben dem Verlauf an, welche Farbe er an bestimmten Positionen haben soll, indem ein `offset`-Attribut für die Position und ein `stop-color`-Attribut angegeben werden. Dies kann direkt oder über CSS zugewiesen werden. Die beiden Methoden wurden in diesem Beispiel gemischt. Zum Beispiel weist dieser Verlauf an, mit der Farbe Rot zu beginnen, in der Mitte zu transparentem Schwarz überzugehen und mit der Farbe Blau zu enden. Sie können so viele Stopp-Farben einfügen, wie Sie möchten, um einen Übergang zu erstellen, der so wunderschön oder furchtbar ist, wie Sie es benötigen, aber die Offsets sollten immer von 0% (oder 0, wenn Sie das %-Zeichen weglassen möchten) bis 100% (oder 1) ansteigen. Doppelte Werte verwenden den Stopp, der am weitesten unten im XML-Baum zugewiesen ist. Auch wie bei Füllung und Umriss können Sie ein `stop-opacity`-Attribut angeben, um die Opazität an dieser Position festzulegen (wiederum können Sie in FF3 auch rgba-Werte dafür verwenden).

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Um einen Verlauf zu verwenden, müssen Sie ihn im `fill` oder `stroke`-Attribut eines Objekts referenzieren. Dies erfolgt auf die gleiche Weise wie die Referenzierung von Elementen in CSS, indem Sie eine `url` verwenden. In diesem Fall ist die URL nur eine Referenz auf unseren Verlauf, der die kreative ID "Gradient1" hat. Um ihn anzuhängen, setzen Sie `fill` auf `url(#Gradient1)`, und voilà! Unser Objekt ist jetzt mehrfarbig. Das Gleiche können Sie mit `stroke` tun.

```svg
<style>
  #rect1 { fill: url(#Gradient1); }
</style>
```

Das `<linearGradient>`-Element nimmt auch mehrere andere Attribute an, die die Größe und das Erscheinungsbild des Verlaufs angeben. Die Orientierung des Verlaufs wird durch zwei Punkte gesteuert, die durch die Attribute `x1`, `x2`, `y1` und `y2` angegeben werden. Diese Attribute definieren eine Linie, entlang derer der Verlauf verläuft. Der Verlauf ist standardmäßig horizontal orientiert, kann aber durch Ändern dieser Punkte gedreht werden. Gradient2 im obigen Beispiel ist so gestaltet, dass er einen vertikalen Verlauf erzeugt.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> [!NOTE]
> Sie können auch das `href`-Attribut bei Verläufen verwenden. Wenn es verwendet wird, können Attribute und Stops von einem Verlauf in einen anderen aufgenommen werden. Im obigen Beispiel müssten Sie die Stops in Gradient2 nicht neu erstellen.
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
> Wir haben hier den xlink-Namespace direkt auf dem Knoten eingeschlossen, obwohl Sie ihn normalerweise oben im Dokument definieren würden. Mehr dazu, wenn wir über [Bilder sprechen](/de/docs/Web/SVG/Tutorial/Other_content_in_SVG).

## Radialer Verlauf

Radiale Verläufe sind linearen Verläufen ähnlich, aber sie zeichnen einen Verlauf, der von einem Punkt ausstrahlt. Um einen zu erstellen, fügen Sie ein {{SVGElement('radialGradient')}}-Element in den `<defs>`-Abschnitt Ihres Dokuments ein.

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

Die hier verwendeten Stops sind die gleichen wie zuvor, aber jetzt wird das Objekt in der Mitte rot sein und in alle Richtungen allmählich zu Blau am Rand wechseln. Wie lineare Verläufe kann der `<radialGradient>`-Knoten mehrere Attribute annehmen, um seine Position und Orientierung zu beschreiben. Im Gegensatz zu linearen Verläufen ist es jedoch etwas komplexer. Der radiale Verlauf wird erneut durch zwei Punkte definiert, die bestimmen, wo seine Ränder sind. Der erste dieser Punkte definiert einen Kreis, um den herum der Verlauf endet. Er erfordert einen Mittelpunkt, der durch die Attribute `cx` und `cy` festgelegt wird, und einen Radius, `r`. Durch das Festlegen dieser drei Attribute können Sie den Verlauf verschieben und seine Größe ändern, wie im obigen zweiten `rect` gezeigt.

Der zweite Punkt wird als Brennpunkt bezeichnet und wird durch die Attribute `fx` und `fy` definiert. Während der erste Punkt beschreibt, wo die Ränder des Verlaufs sind, beschreibt der Brennpunkt, wo seine Mitte ist. Dies lässt sich besser anhand eines Beispiels verdeutlichen.

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

Wenn der Brennpunkt außerhalb des zuvor beschriebenen Kreises bewegt wird, ist es unmöglich, den Verlauf korrekt darzustellen, sodass angenommen wird, dass der Punkt sich innerhalb des Kreisrandes befindet. Wenn der Brennpunkt überhaupt nicht angegeben wird, wird angenommen, dass er an derselben Stelle wie der Mittelpunkt ist.

Sowohl lineare als auch radiale Verläufe nehmen auch einige andere Attribute an, um Transformationen zu beschreiben, die sie möglicherweise durchlaufen. Das einzige andere Attribut, das ich hier erwähnen möchte, ist das `spreadMethod`-Attribut. Dieses Attribut steuert, was passiert, wenn der Verlauf sein Ende erreicht, das Objekt aber noch nicht gefüllt ist. Es kann einen von drei Werten annehmen: `"pad"`, `"reflect"` oder `"repeat"`. `"pad"` ist das, was Sie bisher gesehen haben. Wenn der Verlauf sein Ende erreicht, wird die letzte Offset-Farbe verwendet, um den Rest des Objekts zu füllen. `"reflect"` bewirkt, dass der Verlauf weiterläuft, aber in umgekehrter Richtung gespiegelt, beginnend mit dem Farboffset bei 100% und zurück zum Offset bei 0%, und dann wieder zurück. `"repeat"` lässt den Verlauf ebenfalls fortsetzen, aber anstatt zurückzugehen, springt er einfach zum Anfang und läuft erneut ab.

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

Beide Verlaufsarten haben auch ein Attribut namens `gradientUnits`, das beschreibt, welches Einheitensystem verwendet wird, um die Größe oder Orientierung des Verlaufs zu beschreiben. Es gibt zwei mögliche Werte, die hier verwendet werden können: `"userSpaceOnUse"` oder `"objectBoundingBox"`. `"objectBoundingBox"` ist der Standardwert, daher wurde er bisher gezeigt. Es skaliert im Wesentlichen den Verlauf auf die Größe Ihres Objekts, sodass Sie nur Koordinaten in Werten von null bis eins angeben müssen, und sie werden automatisch auf die Größe Ihres Objekts skaliert. `userSpaceOnUse` nimmt im Wesentlichen absolute Einheiten. Sie müssen also wissen, wo sich Ihr Objekt befindet, und den Verlauf an derselben Stelle platzieren. Der oben gezeigte radialGradient würde umgeschrieben:

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

Sie können dann auch eine weitere Transformation auf den Verlauf anwenden, indem Sie das `gradientTransform`-Attribut verwenden, aber da wir [Transformationen noch nicht eingeführt haben](/de/docs/Web/SVG/Tutorial/Basic_Transformations), werden wir dies auf später verschieben.

Es gibt einige andere Einschränkungen, um mit `gradientUnits="objectBoundingBox"` umzugehen, wenn das Objektbegrenzungsfeld nicht quadratisch ist, aber diese sind ziemlich komplex und müssen auf jemanden warten, der sich damit auskennt, um sie zu erklären.

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}
