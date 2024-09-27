---
title: Muster
slug: Web/SVG/Tutorial/Patterns
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}

## Muster

Muster sind wohl einer der verwirrendsten Fülltypen, die in SVG verwendet werden. Sie sind auch sehr mächtig, daher lohnt es sich, darüber zu sprechen und zumindest ein grundlegendes Verständnis zu erlangen. Wie Verläufe sollte das {{SVGElement('pattern')}}-Element im {{SVGElement("defs")}}-Bereich Ihrer SVG-Datei platziert werden.

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>
```

{{ EmbedLiveSample('Patterns','220','240') }}

Innerhalb des {{SVGElement("pattern")}}-Elements können Sie jede der zuvor verwendeten Grundformen einfügen, und jede von ihnen kann mit allen zuvor erlernten Stilen gestylt werden, einschließlich Verläufen und Transparenz. Hier haben wir einfach zwei Rechtecke innerhalb des Musters gezeichnet (die sich überlappen, wobei eines doppelt so groß ist wie das andere und zur Füllung des gesamten Musters verwendet wird) und einen Kreis.

Das Verwirrende an Mustern ist die Definition eines Einheitensystems und deren Größe. Im obigen Beispiel haben wir ein `width`- und `height`-Attribut auf dem Pattern-Element definiert, um zu beschreiben, wie weit das Muster gehen soll, bevor es sich selbst wiederholt. Es gibt auch `x`- und `y`-Attribute, wenn Sie den Startpunkt dieses Rechtecks irgendwo in Ihrer Zeichnung verschieben möchten. Der Grund, warum sie hier verwendet wurden, wird unten beschrieben.

Wie beim `gradientUnits`-Attribut oben haben Muster auch ein Attribut `patternUnits`, das die Einheiten angibt, die diese Attribute verwenden. Es ist standardmäßig auf `"objectBoundingBox"` gesetzt, wie oben, sodass ein Wert von `1` auf die `width` und `height` des Objekts skaliert wird, auf das Sie das Muster anwenden. Da wir in diesem Fall wollten, dass das Muster 4 Mal horizontal und vertikal wiederholt wird, sind `height` und `width` auf `0.25` gesetzt. Das bedeutet, dass die `width` und `height` des Musters nur `0.25` der Gesamtgröße des Rahmens betragen.

Im Gegensatz zu Verläufen haben Muster ein zweites Attribut, `patternContentUnits`, das das Einheitensystem beschreibt, das innerhalb des pattern-Elements auf die Grundformen selbst angewendet wird. Dieses Attribut ist standardmäßig auf `"userSpaceOnUse"` gesetzt, das Gegenteil des `patternUnits`-Attributs. Das bedeutet, dass, wenn Sie keines oder beide dieser Attribute (`patternContentUnits` und `patternUnits`) angeben, die Formen, die Sie innerhalb Ihres Musters zeichnen, in einem anderen Koordinatensystem gezeichnet werden, als das Pattern-Element verwendet, was es ein wenig verwirrend machen kann, wenn Sie dies von Hand schreiben.

Um dies im obigen Beispiel funktional zu machen, mussten wir die Größe unseres Rahmens (200 Pixel) berücksichtigen und die Tatsache, dass wir wollten, dass sich das Muster 4 Mal horizontal und vertikal wiederholt. Das bedeutet, dass jede Mustereinheit ein 50×50 Quadrat war. Die zwei Rechtecke und der Kreis innerhalb des Musters wurden dann so dimensioniert, dass sie in einen 50×50-Rahmen passten. Alles, was wir außerhalb dieses Rahmens gezeichnet hätten, wäre nicht sichtbar gewesen. Das Muster musste auch um 10 Pixel versetzt werden, sodass es in der oberen linken Ecke unseres Rahmens beginnt, daher mussten die `x`- und `y`-Attribute des `pattern` auf 10÷200 = 0.05 angepasst werden.

Das zu beachtende Problem ist hier, dass, wenn sich die Größe des Objekts ändert, sich das Muster selbst anpasst, aber die Objekte innerhalb bleiben gleich. Während wir also immer noch 4 sich wiederholende Einheiten innerhalb des Musters hätten, würden die Objekte, die dieses Muster bilden, gleich groß bleiben, und Sie enden mit großen leeren Flächen dazwischen. Durch das Ändern des `patternContentUnits`-Attributs können wir alle Elemente in dasselbe Einheitensystem setzen:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Da sich der Inhalt des Musters nun im selben Einheitensystem wie das Muster befindet, müssen wir den Rahmen nicht versetzen, damit das Muster an der richtigen Stelle beginnt, und wenn die Objektgröße auf eine größere geändert wird, würde sich das Muster automatisch so skalieren, dass es dieselbe Anzahl von Objekten und Wiederholungen in sich enthält. Dies steht im Gegensatz zum `"userSpaceOnUse"`-System, wo sich das Muster nicht ändert, wenn das Objekt die Größe ändert und es sich nur häufiger wiederholt, um den Rahmen zu füllen.

Ein kleiner Hinweis am Rande, in Gecko scheinen Kreise Probleme zu haben, wenn ihr Radius auf weniger als `0.075` gesetzt ist (es ist derzeit unbekannt, ob dies ein Fehler im Pattern-Element ist oder nicht). Um das zu umgehen, ist es wahrscheinlich am besten, das Zeichnen in `"objectBoundingBox"`-Einheiten zu vermeiden, es sei denn, es muss sein.

Keiner dieser Einsätze entspricht dem, was man normalerweise denkt, wenn man an ein Muster denkt. Muster haben normalerweise eine feste Größe und wiederholen sich unabhängig von der Form eines Objekts. Um so etwas zu erstellen, müssen sowohl das Muster als auch seine Inhalte im aktuellen userSpace gezeichnet werden, damit sie sich nicht ändern, wenn das Objekt es tut:

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Natürlich bedeutet das, dass sich das Muster nicht skaliert, wenn Sie später die Größe Ihres Objekts ändern. Alle drei der vorangegangenen Beispiele werden unten auf einem Rechteck gezeigt, das leicht verlängert wurde, um eine `height` von `300px` zu erreichen, aber ich sollte erwähnen, dass es kein vollständiges Bild ist, und es gibt andere Möglichkeiten, die je nach Anwendung zur Verfügung stehen.

![Drei Beispiele, die patternUnits-Werte von default und userSpaceOnUse und patternContentUnits-Werte von default und objectBoundingBox zeigen. Wenn beide auf default gesetzt sind, bleibt das Seitenverhältnis erhalten, wobei sichtbarer Leerraum vorhanden ist. Das Einstellen von patternContentUnits auf objectBoundingBox wirkt sich auf das Seitenverhältnis aus, um den Leerraum zu entfernen. Das Einstellen von patternUnits auf userSpaceOnUse behält das Seitenverhältnis bei, während der Leerraum eliminiert wird.](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}
