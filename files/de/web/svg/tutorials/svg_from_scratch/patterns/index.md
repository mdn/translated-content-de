---
title: Muster
slug: Web/SVG/Tutorials/SVG_from_scratch/Patterns
l10n:
  sourceCommit: fd216f3c4358f24fef043d32b28d6e980a78afc0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}

## Muster

Muster sind vermutlich eine der verwirrendsten Füllarten, die in SVG verwendet werden können. Sie sind auch sehr mächtig, daher lohnt es sich, darüber zu sprechen und zumindest ein grundlegendes Verständnis zu erlangen. Wie Verläufe sollte das {{SVGElement('pattern')}}-Element im {{SVGElement("defs")}}-Abschnitt Ihrer SVG-Datei platziert werden.

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

Im Inneren des {{SVGElement("pattern")}}-Elements können Sie alle der zuvor verwendeten Grundformen einschließen, und jede davon kann mit den Stilen, die Sie zuvor gelernt haben, einschließlich Verläufe und Opazität, gestylt werden. Hier haben wir nur zwei Rechteck-Elemente innerhalb des Musters gezeichnet (die sich überlappen, wobei eines doppelt so groß ist wie das andere und verwendet wird, um das gesamte Muster auszufüllen) und einen Kreis.

Das Verwirrende an Mustern ist die Definition eines Einheitensystems und ihrer Größe. Im obigen Beispiel haben wir ein `width`- und `height`-Attribut für das Musterelement definiert, um zu beschreiben, wie weit das Muster gehen soll, bevor es sich selbst wiederholt. Es gibt auch `x`- und `y`-Attribute, wenn Sie den Startpunkt dieses Rechtecks innerhalb Ihrer Zeichnung versetzen möchten. Warum diese hier verwendet wurden, wird unten beschrieben.

Wie beim oben verwendeten `gradientUnits`-Attribut haben auch Muster ein Attribut `patternUnits`, das die Einheit spezifiziert, die diese Attribute annehmen werden. Es ist standardmäßig auf `"objectBoundingBox"` gesetzt, wie oben beschrieben, sodass ein Wert von `1` auf die `width` und `height` des Objekts skaliert wird, auf das Sie das Muster anwenden. Da wir in diesem Fall wollten, dass das Muster horizontal und vertikal viermal wiederholt wird, sind `height` und `width` auf `0.25` gesetzt. Das bedeutet, dass die `width` und `height` des Musters nur `0.25` der Gesamtgröße des Rahmens betragen.

Im Gegensatz zu Verläufen haben Muster ein zweites Attribut, `patternContentUnits`, das das Einheitensystem beschreibt, das innerhalb des Musterelements, auf den Grundformen selbst, verwendet wird. Dieses Attribut ist standardmäßig auf `"userSpaceOnUse"` gesetzt, das Gegenteil des `patternUnits`-Attributs. Das bedeutet, dass, sofern Sie nicht eines oder beide dieser Attribute (`patternContentUnits` und `patternUnits`) festlegen, die Formen, die Sie innerhalb Ihres Musters zeichnen, in einem anderen Koordinatensystem als das Musterelement selbst gezeichnet werden, was die Sache etwas verwirrend machen kann, wenn Sie dies von Hand schreiben.

Um dies im obigen Beispiel zum Laufen zu bringen, mussten wir die Größe unseres Rahmens (200 Pixel) und die Tatsache berücksichtigen, dass wir das Muster horizontal und vertikal viermal wiederholen wollten. Das bedeutet, dass jede Muster-Einheit ein 50×50 Quadrat war. Die beiden Rechtecke und der Kreis innerhalb des Musters wurden dann so dimensioniert, dass sie in ein 50×50 Kästchen passen. Alles, was wir außerhalb dieses Kästchens gezeichnet hätten, wäre nicht gezeigt worden. Das Muster musste auch um 10 Pixel versetzt werden, damit es in der oberen linken Ecke unseres Rahmens beginnt, sodass die `x`- und `y`-Attribute des `pattern` auf 10÷200 = 0.05 eingestellt werden mussten.

Der Haken dabei ist, dass, wenn sich die Größe des Objekts ändert, sich das Muster selbst anpasst, aber die Objekte darin nicht. Während wir immer noch vier wiederholte Einheiten innerhalb des Musters hätten, würden die Objekte, die dieses Muster bilden, gleich groß bleiben, und Sie hätten große Bereiche von Nichts zwischen ihnen. Indem wir das `patternContentUnits`-Attribut ändern, können wir alle Elemente in dasselbe Einheitensystem setzen:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Da die Musterinhalte jetzt im selben Einheitensystem wie das Muster sind, müssen wir den Rahmen nicht mehr versetzen, damit das Muster an der richtigen Stelle beginnt, und wenn die Objektgröße auf eine größere geändert würde, würde sich das Muster automatisch so skalieren, dass es dieselbe Anzahl von Objekten und Wiederholungen enthält. Dies steht im Gegensatz zum `"userSpaceOnUse"`-System, bei dem, wenn sich die Objektgröße ändert, das Muster gleich bleibt und sich einfach mehrmals wiederholt, um das Kästchen auszufüllen.

Keiner dieser Verwendungen entspricht dem, was man normalerweise denkt, wenn man an ein Muster denkt. Muster haben normalerweise eine festgelegte Größe und wiederholen sich unabhängig von der Form eines Objekts. Um so etwas zu schaffen, müssen sowohl das Muster als auch sein Inhalt im aktuellen Nutzerraum gezeichnet werden, sodass sie sich nicht ändern, wenn sich das Objekt tut:

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Natürlich bedeutet dies, dass sich das Muster nicht skaliert, wenn Sie später die Größe Ihres Objekts ändern. Alle drei vorhergehenden Beispiele werden unten auf einem Rechteck gezeigt, das leicht auf eine `height` von `300px` verlängert wurde, aber ich sollte darauf hinweisen, dass dies kein erschöpfendes Bild ist und es andere Optionen gibt, je nach Ihrer Anwendung.

![Drei Beispiele, die die Werte von patternUnits als Standard und userSpaceOnUse und patternContentUnits als Standard und objectBoundingBox zeigen. Wenn beide auf Standard gesetzt sind, wird das Seitenverhältnis mit sichtbarem Weißraum beibehalten. Das Setzen von patternContentUnits auf objectBoundingBox beeinflusst das Seitenverhältnis, um den Weißraum zu entfernen. Das Setzen von patternUnits auf userSpaceOnUse behält das Seitenverhältnis bei, während der Weißraum entfernt wird.](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}
