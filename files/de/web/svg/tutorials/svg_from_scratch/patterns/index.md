---
title: Muster
slug: Web/SVG/Tutorials/SVG_from_scratch/Patterns
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}

## Muster

Muster sind wohl eine der verwirrendsten Fülltypen in SVG. Sie sind jedoch auch sehr leistungsstark, also ist es wert, darüber zu sprechen und zumindest ein grundlegendes Verständnis zu erlangen. Wie Verläufe sollte das {{SVGElement('pattern')}}-Element im {{SVGElement("defs")}}-Bereich Ihrer SVG-Datei platziert werden.

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

Innerhalb des {{SVGElement("pattern")}}-Elements können Sie alle anderen Grundformen einfügen, die Sie zuvor verwendet haben, und jede von ihnen kann mit allen Stilarten, die Sie gelernt haben, einschließlich Verläufen und Transparenz, gestaltet werden. Hier haben wir einfach zwei Rechteck-Elemente innerhalb des Musters gezeichnet (die sich überlappen, wobei eines doppelt so groß wie das andere ist und zur Füllung des gesamten Musters dient), und einen Kreis.

Das Verwirrende an Mustern ist die Definition eines Einheitensystems und deren Größe. Im obigen Beispiel haben wir ein `width`- und `height`-Attribut auf dem Muster-Element definiert, um zu beschreiben, wie weit sich das Muster erstrecken soll, bevor es sich wiederholt. Es gibt auch `x`- und `y`-Attribute, falls Sie den Ausgangspunkt dieses Rechtecks innerhalb Ihrer Zeichnung versetzen möchten. Der Grund, warum sie hier verwendet wurden, wird nachfolgend beschrieben.

Ähnlich wie das `gradientUnits`-Attribut oben, haben Muster auch ein Attribut, `patternUnits`, das die Einheiten spezifiziert, die diese Attribute verwenden werden. Es ist standardmäßig auf `"objectBoundingBox"` gesetzt, wie oben, sodass ein Wert von `1` auf die `width` und `height` des Objekts, auf das Sie das Muster anwenden, skaliert wird. Da wir in diesem Fall wollten, dass das Muster sich 4 mal horizontal und vertikal wiederholt, sind die `height` und `width` auf `0.25` gesetzt. Das bedeutet, dass die `width` und `height` des Musters nur `0.25` der gesamten Boxgröße ausmacht.

Im Gegensatz zu Verläufen haben Muster ein zweites Attribut, `patternContentUnits`, das das Einheitensystem beschreibt, das innerhalb des Muster-Elements auf die Grundformen selbst angewendet wird. Dieses Attribut ist standardmäßig auf `"userSpaceOnUse"` gesetzt, dem Gegenteil des `patternUnits`-Attributs. Das bedeutet, dass, wenn Sie nicht eines oder beide dieser Attribute (`patternContentUnits` und `patternUnits`) angeben, die Formen, die Sie innerhalb Ihres Musters zeichnen, in einem anderen Koordinatensystem gezeichnet werden als das, welches das Muster-Element verwendet. Dies kann die Dinge etwas verwirrend machen, wenn Sie es von Hand schreiben.

Um dies im obigen Beispiel zum Laufen zu bringen, mussten wir die Größe unserer Box (200 Pixel) und die Tatsache berücksichtigen, dass wir wollten, dass das Muster sich 4 mal horizontal und vertikal wiederholt. Das bedeutet, dass jede Muster-Einheit ein 50×50 Quadrat war. Die beiden Rechtecke und der Kreis innerhalb des Musters wurden dann so dimensioniert, dass sie in eine 50×50 Box passen. Alles, was wir außerhalb dieser Box gezeichnet hätten, wäre nicht gezeigt worden. Das Muster musste außerdem um 10 Pixel versetzt werden, damit es in der oberen linken Ecke unserer Box beginnt, sodass die `x`- und `y`-Attribute des `patterns` auf 10÷200 = 0.05 angepasst werden mussten.

Der Haken dabei ist, dass, wenn sich die Objektgröße ändert, das Muster selbst skaliert wird, um es anzupassen, aber die Objekte darin nicht. Während wir also immer noch 4 sich wiederholende Einheiten innerhalb des Musters hätten, würden die Objekte, die dieses Muster bilden, dieselbe Größe beibehalten, und Sie enden mit großen Bereichen von Nichts zwischen ihnen. Durch Ändern des `patternContentUnits`-Attributs können wir alle Elemente ins gleiche Einheitensystem bringen:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Da der Pattern-Inhalt nun im gleichen Einheitensystem wie das Muster ist, müssen wir die Box nicht versetzen, damit das Muster an der richtigen Stelle beginnt. Und wenn die Objektgröße auf eine größere geändert wurde, würde sich das Muster automatisch so skalieren, dass es die gleiche Anzahl von Objekten und Wiederholungen innerhalb davon hat. Dies steht im Gegensatz zum `"userSpaceOnUse"`-System, bei dem, wenn das Objekt die Größe ändert, das Muster gleich bleibt und sich einfach mehrmals wiederholt, um die Box zu füllen.

Als kleine Randbemerkung scheinen Kreise in Gecko Probleme zu haben zu zeichnen, wenn ihr Radius auf weniger als `0.075` gesetzt ist (es ist derzeit unbekannt, ob dies ein Fehler im Muster-Element ist oder nicht). Um dies zu umgehen, ist es wahrscheinlich am besten, das Zeichnen in `"objectBoundingBox"`-Einheiten zu vermeiden, es sei denn, es ist notwendig.

Keiner dieser Verwendungen entspricht dem, was man normalerweise denken würde, wenn man an ein Muster denkt. Muster haben normalerweise eine feste Größe und wiederholen sich unabhängig davon, welche Form das Objekt hat. Um so etwas zu erstellen, müssen sowohl das Muster als auch seine Inhalte im aktuellen Nutzerraum gezeichnet werden, sodass sie ihre Form nicht ändern, wenn das Objekt dies tut:

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Das bedeutet natürlich, dass sich das Muster nicht skaliert, wenn Sie später Ihre Objektgröße ändern. Alle drei der vorhergehenden Beispiele werden unten auf einem Rechteck dargestellt, das leicht auf eine `height` von `300px` verlängert wurde. Ich sollte jedoch darauf hinweisen, dass es kein erschöpfendes Bild ist, und es gibt andere Optionen, je nach Anwendung.

![Drei Beispiele zeigen `patternUnits`-Werte von Standard und `userSpaceOnUse` und `patternContentUnits`-Werte von Standard und `objectBoundingBox`. Wenn beide auf Standard gesetzt sind, wird das Seitenverhältnis beibehalten und ein weißer Raum ist sichtbar. Das Setzen von `patternContentUnits` auf `objectBoundingBox` beeinflusst das Seitenverhältnis, um den weißen Raum zu entfernen. Das Setzen von `patternUnits` auf `userSpaceOnUse` hält das Seitenverhältnis bei, während der weiße Raum eliminiert wird.](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}
