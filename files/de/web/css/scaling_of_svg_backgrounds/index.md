---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Angesichts der Flexibilität von SVG-Bildern gibt es viel zu beachten, wenn man sie als Hintergrundbilder mit der {{ cssxref("background-image") }} Eigenschaft verwendet, und noch mehr, wenn man sie auch mit der {{ cssxref("background-size") }} Eigenschaft skaliert. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern bei Verwendung dieser Eigenschaften gehandhabt wird.

## Der Algorithmus, in Kürze

Der Algorithmus lässt sich größtenteils mit diesen vier Regeln zusammenfassen. Es gibt einige Sonderfälle, die nicht von diesen Regeln abgedeckt werden, aber dies deckt die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (d.h. sein Breite-Höhe-Verhältnis konstant ist, wie 16:9, 4:3, 2.39:1, 1:1, usw.), bleibt das gerenderte Größenverhältnis erhalten.
3. Wenn das Bild eine Größe angibt und diese Größe nicht durch "constrain" oder "cover" modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in der gleichen Größe wie der Hintergrundbereich gerendert.

Es ist zu beachten, dass der Größenalgorithmus nur auf die Dimensionen und Proportionen des Bildes achtet oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild gleicher Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) zu strecken – zum Beispiel, um es über den Seitenhintergrund zu strecken – stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispiele für Quellbilder

Bevor wir uns die Ergebnisse der Verwendung verschiedener Arten von Quellbildern ansehen und wie sie aussehen, wenn sie mit {{ cssxref("background-size") }} verwendet werden, wäre es hilfreich, sich einige Beispielquellbilder mit unterschiedlichen Dimensionen und Größeneinstellungen anzusehen.

In jedem Fall zeigen wir, wie das Quellbild in einem 150x150-Rahmen gerendert aussieht, und geben einen Link zur SVG-Quelle an.

### Ohne Dimensionen und Proportionen

Dieses Bild ist sowohl dimensions- als auch proportionslos. Es ist ihm egal, welche Größe es hat, noch ist es darauf bedacht, ein bestimmtes Seitenverhältnis beizubehalten. Das wäre ein guter Verlaufshintergrund, der unabhängig von der Größe Ihres Bildschirms und seines Seitenverhältnisses funktioniert.

![no-dimensions-or-ratio.png](no-dimensions-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg)

### Eine angegebene Dimension und proportionslos

Dieses Bild gibt eine Breite von 100 Pixeln an, aber keine Höhe oder ein intrinsisches Verhältnis. Dies ist im Grunde ein dünner Tapetenstreifen, der über die gesamte Höhe eines Blocks gedehnt werden könnte.

![100px-wide-no-height-or-ratio.png](100px-wide-no-height-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg)

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass sein Breite-Höhe-Verhältnis immer 3:4 ist, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. durch explizite Angabe sowohl der Breite als auch der Höhe, die nicht diesem Verhältnis entsprechen).

Dies ist sehr ähnlich wie die Angabe einer bestimmten Breite und Höhe, da, wenn man eine Dimension und ein Verhältnis hat, die andere Dimension impliziert ist, aber es ist immer noch ein nützliches Beispiel.

![100px-height-3x4-ratio.png](100px-height-3x4-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg)

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Denken Sie dabei an ein Programmsymbol. Es ist immer quadratisch und kann in jeder Größe verwendet werden, z.B. 32x32, 128x128 oder 512x512.

![no-dimensions-1x1-ratio.png](no-dimensions-1x1-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg)

## Skalierungsbeispiele

Nun lassen Sie uns einige Beispiele dafür sehen, was passiert, wenn wir verschiedene Skalierungen auf diese Bilder anwenden. In jedem der unten stehenden Beispiele sind die umgebenden Rechtecke 300 Pixel breit und 200 Pixel hoch. Darüber hinaus sind die Hintergründe für Klarheit mit {{ cssxref("background-repeat") }} auf no-repeat gesetzt.

> [!NOTE]
> Die unten gezeigten Screenshots zeigen die **erwartete** Darstellung. Nicht alle Browser rendern diese derzeit korrekt.

### Festlegung fester Längen für beide Dimensionen

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen festzulegen, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder ein Seitenverhältnis festgelegt hat.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Angenommen, dieses CSS:

![fixed-no-dimensions-or-ratio.png](fixed-no-dimensions-or-ratio.png)

Das gerenderte Ergebnis würde folgendermaßen aussehen:

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Angenommen, dieses CSS:

![fixed-100px-wide-no-height-or-ratio.png](fixed-100px-wide-no-height-or-ratio.png)

Das gerenderte Ergebnis würde folgendermaßen aussehen:

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Angenommen, dieses CSS:

![fixed-100px-height-3x4-ratio.png](fixed-100px-height-3x4-ratio.png)

Das gerenderte Ergebnis würde folgendermaßen aussehen:

#### Quelle: Keine angegebene Breite oder Höhe mit intrinsischem Verhältnis

Angenommen, dieses CSS:

![fixed-no-dimensions-1x1-ratio.png](fixed-no-dimensions-1x1-ratio.png)

Das gerenderte Ergebnis würde folgendermaßen aussehen:

### Verwendung von "contain" oder "cover"

Die Angabe von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es dennoch den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne dass es durch den Hintergrundbereich abgeschnitten wird.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe allein zu den `cover`-/Fit-Kriterien. Wenn jedoch kein intrinsisches Verhältnis angegeben ist, reichen `cover`/fit nicht aus, sodass die großen/kleinen Einschränkungen die resultierende Größe wählen.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: Das Hintergrundbild wird über den gesamten Hintergrundbereich gerendert. Dies erfüllt die größte-oder-kleinste-Einschränkung.

![no-dimensions-or-ratio-contain.png](no-dimensions-or-ratio-contain.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Ähnlich verhält es sich, wenn das Bild eine Dimension angibt, jedoch kein intrinsisches Verhältnis hat, gilt Regel 4, und das Bild wird skaliert, um den gesamten Hintergrundbereich abzudecken.

![100px-wide-no-height-or-ratio-contain.png](100px-wide-no-height-or-ratio-contain.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: Wir versuchen, ein etwaiges intrinsisches Verhältnis zu erhalten (während wir `contain` oder `cover` respektieren). Zum Beispiel bedeutet das Beibehalten eines 3:4 intrinsischen Seitenverhältnisses für eine 300x200 Box mit `contain`, dass ein 150x200 Hintergrund gezeichnet wird.

##### contain-Fall

![100px-height-3x4-ratio-contain.png](100px-height-3x4-ratio-contain.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Beachten Sie, wie das gesamte Bild gerendert wird und möglichst gut in die Box passt, ohne dass etwas davon abgeschnitten wird.

##### cover-Fall

![100px-height-3x4-ratio-cover.png](100px-height-3x4-ratio-cover.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Hier wird das 3:4 Verhältnis beibehalten, während das Bild so gestreckt wird, dass es die gesamte Box ausfüllt. Dies führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Quelle: Keine Dimensionen mit intrinsischem Verhältnis

Bei der Verwendung eines Bildes ohne intrinsische Dimensionen, aber mit einem intrinsischen Verhältnis, funktioniert es ähnlich.

##### contain-Fall

![no-dimensions-1x1-ratio-contain.png](no-dimensions-1x1-ratio-contain.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Beachten Sie, dass das Bild so dimensioniert ist, dass es die kleinste Dimension ausfüllt und gleichzeitig das 1:1 Seitenverhältnis beibehält.

##### cover-Fall

![no-dimensions-1x1-ratio-cover.png](no-dimensions-1x1-ratio-cover.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Hier wird das Bild so dimensioniert, dass es die größte Dimension ausfüllt. Das 1:1 Seitenverhältnis wurde beibehalten, obwohl dies bei diesem Quellbild schwer zu erkennen sein kann.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass die Darstellung jedes bereitgestellte intrinsische Verhältnis beibehalten muss.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn weder ein intrinsisches Verhältnis noch Dimensionen vom Quellbild angegeben werden, tritt Regel 4 in Kraft, und das Bild wird gerendert, um den Hintergrundbereich auszufüllen.

![auto-no-dimensions-or-ratio.png](auto-no-dimensions-or-ratio.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

#### Quelle: Eine Dimension und kein intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis angegeben wird, aber mindestens eine Dimension angegeben wird, tritt Regel 3 in Kraft, und wir rendern das Bild unter Beachtung dieser Dimensionen.

![auto-100px-wide-no-height-or-ratio.png](auto-100px-wide-no-height-or-ratio.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Beachten Sie hier, dass die im Quell-SVG angegebene Breite von 100 Pixeln beachtet wird, während die Höhe den Hintergrundbereich ausfüllt, da sie nicht angegeben ist (weder explizit noch durch ein intrinsisches Verhältnis).

#### Quelle: Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert dies beide Dimensionen. Eine Dimension und ein Verhältnis zu kennen, entspricht, wie bereits erwähnt, dem expliziten Festlegen beider Dimensionen.

![auto-100px-height-3x4-ratio.png](auto-100px-height-3x4-ratio.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

Da dieses Bild eine explizite Höhe von 100 Pixeln hat, setzt das 3:4 Verhältnis seine Breite explizit auf 75 Pixel, sodass es im `auto` Fall so gerendert wird.

#### Quelle: Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben wird, aber keine Dimensionen, wird Regel 4 angewendet – außer dass auch Regel 2 gilt. Das Bild wird also wie im `contain` Fall gerendert.

![auto-no-dimensions-1x1-ratio.png](auto-no-dimensions-1x1-ratio.png)

Das gerenderte Ergebnis sieht folgendermaßen aus:

### Verwendung von "auto" und einer spezifischen Länge

Gemäß Regel 1 werden angegebene Dimensionen immer verwendet, sodass wir unsere Regeln nur anwenden müssen, um die zweite Dimension zu bestimmen.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder kein intrinsisches Verhältnis hat, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto` Dimension zu bestimmen.

![1auto-no-dimensions-or-ratio.png](1auto-no-dimensions-or-ratio.png)

Hier wird die Breite unter Verwendung der Breite des Hintergrundbereichs gemäß Regel 4 ermittelt, während die Höhe die im CSS angegebene 140px ist.

#### Quelle: Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine angegebene Dimension hat, aber kein intrinsisches Verhältnis, wird diese angegebene Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

![100px-wide-no-height-or-ratio-length-auto.png](100px-wide-no-height-or-ratio-length-auto.png)

Hier überschreiben die im CSS angegebenen 200 Pixel die im SVG angegebenen 100 Pixel Breite gemäß Regel 1. Da kein intrinsisches Verhältnis oder keine Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe des gerenderten Bildes.

![100px-wide-no-height-or-ratio-auto-length.png](100px-wide-no-height-or-ratio-auto-length.png)

In diesem Fall wird die Breite im CSS als auto angegeben, somit werden die im SVG angegebenen 100 Pixel Breite gemäß Regel 3 gewählt. Die Höhe wird im CSS auf 125px festgelegt, somit wird diese gemäß Regel 1 gewählt.

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wird diese Dimension aus dem SVG auf den gerenderten Hintergrund angewendet, es sei denn, sie wird durch das CSS spezifisch überschrieben. Wenn ein intrinsisches Verhältnis ebenfalls angegeben ist, wird dies verwendet, um die andere Dimension zu bestimmen.

![1auto-100px-height-3x4-ratio.png](1auto-100px-height-3x4-ratio.png)

In diesem Fall verwenden wir die Breite des Bildes, die im CSS auf 150px gesetzt ist. Daher wird Regel 1 angewendet. Das intrinsische 3:4 Seitenverhältnis legt dann die Höhe für den `auto` Fall fest.

#### Quelle: Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn keine Dimensionen im SVG angegeben sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension zu wählen, gemäß Regel 2.

![1auto-no-dimensions-1x1-ratio.png](1auto-no-dimensions-1x1-ratio.png)

Die Breite wird durch das CSS auf 150px festgelegt. Der `auto` Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1 Seitenverhältnisses auf ebenfalls 150px berechnet, was das obige Bild ergibt.

## Siehe auch

- {{cssxref("background-size")}}
- Blog-Beitrag: [Properly resizing vector image backgrounds](https://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
