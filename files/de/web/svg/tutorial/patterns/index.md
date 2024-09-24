---
title: Muster
slug: Web/SVG/Tutorial/Patterns
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}

## Muster

Muster sind wahrscheinlich eine der verwirrenderen Füllarten in SVG. Sie sind auch sehr mächtig, daher lohnt es sich, darüber zu sprechen und zumindest ein grundlegendes Verständnis dafür zu entwickeln. Wie Gradienten sollte das {{SVGElement('pattern')}}-Element im {{SVGElement("defs")}}-Abschnitt Ihrer SVG-Datei platziert werden.

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

Im {{SVGElement("pattern")}}-Element können Sie alle grundlegenden Formen einfügen, die Sie zuvor verwendet haben, und jede dieser Formen kann mit allen zuvor erlernten Stilen gestaltet werden, einschließlich Gradienten und Transparenz. Hier haben wir einfach zwei Rechtecke innerhalb des Musters gezeichnet (die sich überlappen, wobei eines doppelt so groß ist wie das andere und verwendet wird, um das gesamte Muster auszufüllen) und einen Kreis.

Das Verwirrende an Mustern ist die Definition eines Einheitssystems und ihrer Größe. Im obigen Beispiel haben wir ein `width`- und `height`-Attribut im pattern-Element definiert, um zu beschreiben, wie weit das Muster gehen soll, bevor es sich wiederholt. Es gibt auch `x`- und `y`-Attribute, falls Sie den Startpunkt dieses Rechtecks innerhalb Ihrer Zeichnung versetzen möchten. Der Grund, warum sie hier verwendet wurden, wird unten beschrieben.

Wie das oben verwendete `gradientUnits`-Attribut haben Muster auch ein Attribut, `patternUnits`, das die Einheiten spezifiziert, die diese Attribute annehmen. Es ist standardmäßig auf `"objectBoundingBox"` eingestellt, so wie oben, also wird ein Wert von `1` auf die `width` und `height` des Objekts, auf das Sie das Muster anwenden, skaliert. Da wir in diesem Fall wollten, dass sich das Muster 4 Mal horizontal und vertikal wiederholt, sind die `height` und `width` auf `0.25` eingestellt. Das bedeutet, dass die `width` und `height` des Musters nur `0.25` der gesamten Boxgröße betragen.

Im Gegensatz zu Gradienten haben Muster ein zweites Attribut, `patternContentUnits`, das das Einheitensystem beschreibt, das innerhalb des pattern-Elements auf die grundlegenden Formen selbst angewendet wird. Dieses Attribut ist standardmäßig auf `"userSpaceOnUse"` eingestellt, das Gegenteil des `patternUnits`-Attributs. Das bedeutet, dass, wenn Sie nicht eines oder beide dieser Attribute (`patternContentUnits` und `patternUnits`) angeben, die Formen, die Sie innerhalb Ihres Musters zeichnen, in einem anderen Koordinatensystem gezeichnet werden, als das Muster-Element verwendet, was es ein wenig verwirrend machen kann, wenn Sie dies manuell schreiben.

Um dies im obigen Beispiel zum Funktionieren zu bringen, mussten wir die Größe unserer Box (200 Pixel) und die Tatsache berücksichtigen, dass wir wollten, dass sich das Muster 4 Mal horizontal und vertikal wiederholt. Das bedeutet, dass jede Muster-Einheit ein 50×50-Quadrat war. Die beiden Rechtecke und der Kreis innerhalb des Musters wurden dann so dimensioniert, dass sie in eine 50×50-Box passen. Alles, was wir außerhalb dieser Box gezeichnet hätten, wäre nicht angezeigt worden. Das Muster musste auch um 10 Pixel versetzt werden, so dass es in der oberen linken Ecke unserer Box beginnt, daher mussten die `x`- und `y`-Attribute des `pattern` auf 10÷200 = 0.05 angepasst werden.

Das Problem hierbei ist, dass, wenn sich die Größe des Objekts ändert, sich auch das Muster selbst anpasst, die Objekte darin jedoch nicht. Obwohl wir immer noch 4 sich wiederholende Einheiten innerhalb des Musters hätten, bleiben die Objekte, aus denen sich das Muster zusammensetzt, gleich groß, und Sie enden mit großen Bereichen von Nichts dazwischen. Durch Ändern des `patternContentUnits`-Attributs können wir alle Elemente in dasselbe Einheitensystem setzen:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Nun, da der Musterinhalt im selben Einheitensystem wie das Muster ist, müssen wir die Box nicht versetzen, damit das Muster an der richtigen Stelle beginnt, und wenn die Objektgröße auf eine größere geändert wird, skaliert sich das Muster automatisch so, dass es die gleiche Anzahl von Objekten und Wiederholungen enthält. Dies steht im Gegensatz zum `"userSpaceOnUse"`-System, bei dem, wenn sich die Objektgröße ändert, das Muster unverändert bleibt und sich einfach öfter wiederholt, um die Box zu füllen.

Nebenbei bemerkt, scheinen in Gecko die Kreise Schwierigkeiten zu haben, wenn ihr Radius auf weniger als `0.075` eingestellt ist (es ist derzeit unbekannt, ob dies ein Fehler im Muster-Element ist oder nicht). Um dies zu umgehen, ist es wahrscheinlich am besten, das Zeichnen in `"objectBoundingBox"`-Einheiten zu vermeiden, es sei denn, es ist unbedingt erforderlich.

Keines dieser Verwendungen entspricht dem, was man sich normalerweise unter einem Muster vorstellt. Muster haben normalerweise eine feste Größe und wiederholen sich unabhängig von der Form eines Objekts. Um etwas derartiges zu erstellen, müssen sowohl das Muster als auch seine Inhalte im aktuellen Benutzerbereich gezeichnet werden, sodass sie ihre Form nicht ändern, wenn das Objekt es tut:

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Natürlich bedeutet dies, dass das Muster nicht skaliert wird, wenn Sie die Größe Ihres Objekts später ändern. Alle drei der vorhergehenden Beispiele werden unten auf einem Rechteck gezeigt, das leicht verlängert wurde auf eine `height` von `300px`, aber ich sollte anmerken, dass es kein erschöpfendes Bild ist, und es gibt andere Optionen, abhängig von Ihrer Anwendung.

![Drei Beispiele, die die Werte von patternUnits für default und userSpaceOnUse sowie patternContentUnits für default und objectBoundingBox zeigen. Wenn beide auf default eingestellt sind, wird das Seitenverhältnis beibehalten und Leerraum ist sichtbar. Das Setzen von patternContentUnits auf objectBoundingBox beeinflusst das Seitenverhältnis, um Leerraum zu entfernen. Das Setzen von patternUnits auf userSpaceOnUse behält das Seitenverhältnis bei, während der Leerraum eliminiert wird.](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}
