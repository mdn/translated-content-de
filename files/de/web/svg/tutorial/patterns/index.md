---
title: Patterns
slug: Web/SVG/Tutorial/Patterns
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}

## Patterns

Muster sind zweifellos eine der verwirrendsten Füllarten in SVG. Sie sind auch sehr mächtig, daher lohnt es sich, darüber zu sprechen und zumindest ein grundlegendes Verständnis zu erlangen. Wie Gradienten sollte das {{SVGElement('pattern')}}-Element in den {{SVGElement("defs")}}-Bereich Ihrer SVG-Datei eingefügt werden.

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

Innerhalb des {{SVGElement("pattern")}}-Elements können Sie alle anderen einfachen Formen einfügen, die Sie bereits verwendet haben, und jede von ihnen kann mit allen Stilen gestaltet werden, die Sie gelernt haben, einschließlich Gradienten und Transparenz. Hier haben wir einfach zwei Rechteckelemente innerhalb des Musters gezeichnet (die sich überlappen, wobei eines doppelt so groß ist wie das andere und verwendet wird, um das gesamte Muster auszufüllen) und einen Kreis.

Das Verwirrende an Mustern ist die Definition eines Einheitensystems und ihrer Größe. Im obigen Beispiel haben wir ein `width`- und `height`-Attribut im Musterelement definiert, um zu beschreiben, wie weit das Muster reichen soll, bevor es sich erneut wiederholt. Es gibt auch `x`- und `y`-Attribute, wenn Sie den Startpunkt dieses Rechtecks innerhalb Ihrer Zeichnung verschieben möchten. Der Grund, warum sie hier verwendet wurden, wird unten beschrieben.

Wie beim oben verwendeten `gradientUnits`-Attribut haben Muster auch ein Attribut `patternUnits`, das die Einheiten spezifiziert, die diese Attribute annehmen. Es ist standardmäßig auf `"objectBoundingBox"` gesetzt, wie oben, sodass ein Wert von `1` auf die `width` und `height` des Objekts skaliert wird, auf das Sie das Muster anwenden. Da wir in diesem Fall wollten, dass sich das Muster 4 Mal horizontal und vertikal wiederholt, sind `height` und `width` auf `0.25` gesetzt. Dies bedeutet, dass die `width` und `height` des Musters nur `0.25` der gesamten Boxgröße entsprechen.

Im Gegensatz zu Gradienten haben Muster ein zweites Attribut, `patternContentUnits`, das das Einheitensystem beschreibt, das innerhalb des Musterelements auf den grundlegenden Formen verwendet wird. Dieses Attribut ist standardmäßig auf `"userSpaceOnUse"` gesetzt, was das Gegenteil des `patternUnits`-Attributs ist. Das bedeutet, dass, wenn Sie nicht eines oder beide dieser Attribute (`patternContentUnits` und `patternUnits`) spezifizieren, die Formen, die Sie in Ihrem Muster zeichnen, in einem anderen Koordinatensystem gezeichnet werden, als das Musterelement verwendet, was es ein wenig verwirrend machen kann, wenn Sie dies von Hand schreiben.

Um dies im obigen Beispiel zu realisieren, mussten wir die Größe unserer Box (200 Pixel) und die Tatsache berücksichtigen, dass wir das Muster 4 Mal horizontal und vertikal wiederholen wollten. Das bedeutet, dass jede Mustereinheit ein 50×50 Quadrat war. Die beiden Rechtecke und der Kreis im Muster wurden dann so dimensioniert, dass sie in eine 50×50 Box passen. Alles, was wir außerhalb dieser Box gezeichnet hätten, wäre nicht angezeigt worden. Das Muster musste auch um 10 Pixel verschoben werden, damit es in der oberen linken Ecke unserer Box beginnt, weshalb die `x`- und `y`-Attribute des `pattern` auf 10÷200 = 0.05 angepasst werden mussten.

Der Haken dabei ist, dass, wenn sich die Größe des Objekts ändert, das Muster selbst angepasst wird, um es anzupassen, aber die Objekte innerhalb des Musters nicht. Während wir also immer noch 4 wiederholende Einheiten im Muster hätten, würden die Objekte, die das Muster bilden, gleich groß bleiben, und Sie würden große Bereiche von nichts dazwischen haben. Durch Ändern des `patternContentUnits`-Attributs können wir alle Elemente in dasselbe Einheitensystem setzen:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Da sich nun der Inhalt des Musters im gleichen Einheitensystem wie das Muster befindet, müssen wir die Box nicht mehr verschieben, damit das Muster an der richtigen Stelle beginnt, und wenn die Objektgröße in eine größere geändert wird, würde sich das Muster automatisch anpassen, sodass es die gleiche Anzahl von Objekten und Wiederholungen darin hätte. Dies steht im Gegensatz zum `"userSpaceOnUse"`-System, bei dem, wenn sich die Größe des Objekts ändert, das Muster gleich bleiben würde und sich einfach mehrmals wiederholen würde, um die Box zu füllen.

Eine kleine Randbemerkung: In Gecko scheinen Kreise Probleme zu haben, wenn ihr Radius auf weniger als `0.075` gesetzt wird (ob dies ein Fehler im Musterelement ist, ist derzeit unbekannt). Um dies zu umgehen, ist es wahrscheinlich am besten, das Zeichnen in `"objectBoundingBox"`-Einheiten zu vermeiden, es sei denn, Sie müssen.

Keine dieser Verwendungen ist das, was man normalerweise denkt, wenn man an ein Muster denkt. Muster haben normalerweise eine feste Größe und wiederholen sich unabhängig davon, welche Form ein Objekt hat. Um so etwas zu erstellen, müssen sowohl das Muster als auch seine Inhalte im aktuellen Benutzerbereich gezeichnet werden, damit sie ihre Form nicht ändern, wenn das Objekt dies tut:

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Natürlich bedeutet dies, dass das Muster nicht skaliert wird, wenn Sie Ihre Objektgröße später ändern. Alle drei der vorherigen Beispiele werden unten auf einem Rechteck gezeigt, das leicht auf eine `height` von `300px` verlängert wurde, aber ich sollte erwähnen, dass dies kein erschöpfendes Bild ist, und es gibt je nach Anwendung weitere Optionen.

![Drei Beispiele zeigen patternUnits-Werte von Standard und userSpaceOnUse sowie patternContentUnits-Werte von Standard und objectBoundingBox. Wenn beide auf Standard gesetzt sind, wird das Seitenverhältnis beibehalten, wobei ein leerer Raum sichtbar ist. Wenn patternContentUnits auf objectBoundingBox gesetzt wird, wird das Seitenverhältnis geändert, um den weißen Raum zu entfernen. Wenn patternUnits auf userSpaceOnUse gesetzt wird, wird das Seitenverhältnis beibehalten, während der weiße Raum entfernt wird.](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}
