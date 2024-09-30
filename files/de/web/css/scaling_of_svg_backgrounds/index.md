---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Angesichts der Flexibilität von SVG-Bildern gibt es einiges zu beachten, wenn Sie sie als Hintergrundbilder mit der Eigenschaft {{ cssxref("background-image") }} verwenden, und noch mehr, wenn Sie sie auch mit der Eigenschaft {{ cssxref("background-size") }} skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern gehandhabt wird, wenn diese Eigenschaften verwendet werden.

## Der Algorithmus, zusammengefasst

Der Algorithmus lässt sich größtenteils mit diesen vier Regeln zusammenfassen. Es gibt einige Grenzfälle, die nicht von diesen Regeln abgedeckt werden, aber das deckt die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d. h. Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis (d. h. sein Breite:Höhe-Verhältnis ist konstant, wie zum Beispiel 16:9, 4:3, 2.39:1, 1:1 und so weiter) hat, wird die gerenderte Größe dieses Verhältnis beibehalten.
3. Wenn das Bild eine Größe angibt und diese Größe nicht durch "constrain" oder "cover" modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keine der obigen Fälle zutrifft, wird das Bild in derselben Größe wie der Hintergrundbereich gerendert.

Es ist zu beachten, dass der Größenalgorithmus sich nur um die Dimensionen und Proportionen des Bildes kümmert oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild derselben Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) zu strecken—zum Beispiel, um es über den Seitenhintergrund zu strecken—stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispiele für Quellbilder

Bevor wir uns die Ergebnisse der Verwendung verschiedener Arten von Quellbildern ansehen und wie sie aussehen, wenn sie mit {{ cssxref("background-size") }} verwendet werden, wäre es hilfreich, sich einige Beispielquellenbilder anzusehen, die unterschiedliche Dimensionen und Größeneinstellungen haben.

In jedem Fall zeigen wir, wie das Quellbild in einer 150x150-Box gerendert aussieht, und bieten einen Link zur SVG-Quelle an.

### Ohne Dimensionen und Proportionen

Dieses Bild hat weder Dimensionen noch Proportionen. Es ist ihm egal, welche Größe es hat, und es kümmert sich nicht darum, ein bestimmtes Seitenverhältnis beizubehalten. Es wäre ein guter Verlauf für den Desktop-Hintergrund, der unabhängig von Ihrer Bildschirmgröße und deren Seitenverhältnis funktioniert.

![no-dimensions-or-ratio.png](no-dimensions-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg)

### Eine angegebene Dimension und unverhältnismäßig

Dieses Bild gibt eine Breite von 100 Pixeln, aber keine Höhe oder intrinsisches Verhältnis an. Dies ist im Grunde ein dünner Streifen Tapete, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

![100px-wide-no-height-or-ratio.png](100px-wide-no-height-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg)

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln, aber keine Breite an. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass sein Breite:Höhe-Verhältnis immer 3:4 ist, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d. h. durch explizite Angabe sowohl von Breite als auch Höhe, die nicht in diesem Verhältnis sind).

Dies ist sehr ähnlich wie das Angeben einer spezifischen Breite und Höhe, da, wenn Sie eine Dimension und ein Verhältnis haben, die andere Dimension impliziert wird, aber es ist immer noch ein nützliches Beispiel.

![100px-height-3x4-ratio.png](100px-height-3x4-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg)

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Denken Sie daran, wie ein Programmsymbol. Es ist immer quadratisch und in jeder Größe verwendbar, beispielsweise 32x32, 128x128 oder 512x512.

![no-dimensions-1x1-ratio.png](no-dimensions-1x1-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg)

## Skalierungsbeispiele

Sehen wir uns nun einige Beispiele dafür an, was passiert, wenn wir diese Bilder unterschiedlich skalieren. In jedem der nachstehenden Beispiele sind die umgebenden Rechtecke 300 Pixel breit und 200 Pixel hoch. Zusätzlich sind die Hintergründe mit {{ cssxref("background-repeat") }} auf no-repeat gesetzt für Klarheit.

> [!NOTE]
> Die folgenden Screenshots zeigen das **erwartete** Rendern. Nicht alle Browser rendern diese derzeit korrekt.

### Festgelegte Längen für beide Dimensionen angeben

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten: Das Bild wird immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Bei folgendem CSS:

```css
background: url(no-dimensions-or-ratio.svg);
background-size: 125px 175px;
```

Sähe die gerenderte Ausgabe so aus:

![fixed-no-dimensions-or-ratio.png](fixed-no-dimensions-or-ratio.png)

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Bei folgendem CSS:

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 250px 150px;
```

Sähe die gerenderte Ausgabe so aus:

![fixed-100px-wide-no-height-or-ratio.png](fixed-100px-wide-no-height-or-ratio.png)

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Bei folgendem CSS:

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 275px 125px;
```

Sähe die gerenderte Ausgabe so aus:

![fixed-100px-height-3x4-ratio.png](fixed-100px-height-3x4-ratio.png)

#### Quelle: Keine angegebene Breite oder Höhe mit intrinsischem Verhältnis

Bei folgendem CSS:

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 250px 100px;
```

Sähe die gerenderte Ausgabe so aus:

![fixed-no-dimensions-1x1-ratio.png](fixed-no-dimensions-1x1-ratio.png)

### Verwenden von contain oder cover

Die Angabe von `cover` für {{ cssxref("background-size") }} sorgt dafür, dass das Bild so klein wie möglich bleibt und dennoch den gesamten Hintergrundbereich abdeckt. `contain` hingegen sorgt dafür, dass das Bild so groß wie möglich wird, ohne vom Hintergrundbereich abgeschnitten zu werden.

Für ein Bild mit einem intrinsischen Verhältnis entspricht genau eine Größe den Kriterien für `cover`/fit allein. Wenn kein intrinsisches Verhältnis angegeben ist, ist `cover`/fit nicht ausreichend, sodass die großen/kleinen Einschränkungen die resultierende Größe wählen.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: Das Hintergrundbild wird so gerendert, dass es den gesamten Hintergrundbereich abdeckt. Dies erfüllt die größte-oder-kleinste Einschränkung.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: contain;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![no-dimensions-or-ratio-contain.png](no-dimensions-or-ratio-contain.png)

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Ähnlich wie wenn das Bild eine angegebene Dimension, aber kein intrinsisches Verhältnis hat, gilt Regel 4, und das Bild wird skaliert, um den gesamten Hintergrundbereich zu bedecken.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: contain;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![100px-wide-no-height-or-ratio-contain.png](100px-wide-no-height-or-ratio-contain.png)

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: Wir versuchen, ein intrinsisches Verhältnis (bei gleichzeitiger Beachtung von `contain` oder `cover`) zu bewahren. Beispielsweise bedeutet die Beibehaltung eines 3:4 intrinsischen Seitenverhältnisses für eine 300x200-Box mit `contain`, dass ein 150x200-Hintergrund gezeichnet wird.

##### contain-Fall

```css
background: url(100px-height-3x4-ratio.svg);
background-size: contain;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![100px-height-3x4-ratio-contain.png](100px-height-3x4-ratio-contain.png)

Beachten Sie, dass das gesamte Bild gerendert wird und so gut wie möglich in die Box passt, ohne dass ein Teil des Bildes abgeschnitten wird.

##### cover-Fall

```css
background: url(100px-height-3x4-ratio.svg);
background-size: cover;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![100px-height-3x4-ratio-cover.png](100px-height-3x4-ratio-cover.png)

Hier bleibt das 3:4-Verhältnis erhalten, während das Bild so gespannt wird, dass es die gesamte Box ausfüllt. Dies führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Quelle: Keine Dimensionen mit intrinsischem Verhältnis

Bei Verwendung eines Bildes mit keinen intrinsischen Dimensionen, aber einem intrinsischen Verhältnis funktioniert es ähnlich.

##### contain-Fall

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: contain;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![no-dimensions-1x1-ratio-contain.png](no-dimensions-1x1-ratio-contain.png)

Beachten Sie, dass das Bild so dimensioniert ist, dass es sich an die kleinste Dimension anpasst und dabei das 1:1-Verhältnis beibehält.

##### cover-Fall

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: cover;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![no-dimensions-1x1-ratio-cover.png](no-dimensions-1x1-ratio-cover.png)

Hier wird das Bild so dimensioniert, dass es die größte Dimension ausfüllt. Das 1:1-Seitenverhältnis wurde beibehalten, auch wenn es bei diesem Quellbild schwierig zu erkennen sein kann.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass das Rendering jedes angegebene intrinsische Verhältnis beibehalten muss.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn vom Quellbild weder ein intrinsisches Verhältnis noch Dimensionen angegeben werden, tritt Regel 4 in Kraft und das Bild wird so gerendert, dass es den Hintergrundbereich ausfüllt.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto auto;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![auto-no-dimensions-or-ratio.png](auto-no-dimensions-or-ratio.png)

#### Quelle: Eine Dimension und kein intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis angegeben wird, aber mindestens eine Dimension, tritt Regel 3 in Kraft und das Bild wird unter Einhaltung dieser Dimensionen gerendert.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto auto;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![auto-100px-wide-no-height-or-ratio.png](auto-100px-wide-no-height-or-ratio.png)

Beachten Sie hier, dass die im Quell-SVG angegebene Breite von 100 Pixeln beachtet wird, während die Höhe den Hintergrundbereich ausfüllt, da sie nicht (weder explizit noch durch ein intrinsisches Verhältnis) angegeben ist.

#### Quelle: Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert dies beide Dimensionen. Das Wissen über eine Dimension und ein Verhältnis ist, wie bereits erwähnt, dasselbe wie das explizite Festlegen beider Dimensionen.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: auto auto;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![auto-100px-height-3x4-ratio.png](auto-100px-height-3x4-ratio.png)

Da dieses Bild eine explizite Höhe von 100 Pixeln hat, wird die Breite über das 3:4-Verhältnis explizit auf 75 Pixel festgelegt, wodurch es im `auto`-Fall so gerendert wird.

#### Quelle: Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben ist, aber keine Dimensionen, wird Regel 4 angewendet — es sei denn, Regel 2 gilt ebenfalls. Das Bild wird daher genauso gerendert wie im `contain`-Fall.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: auto auto;
```

Die gerenderte Ausgabe sieht wie folgt aus:

![auto-no-dimensions-1x1-ratio.png](auto-no-dimensions-1x1-ratio.png)

### Verwendung von "auto" und einer bestimmten Länge

Gemäß Regel 1 werden angegebene Dimensionen immer verwendet, sodass wir unsere Regeln nur verwenden müssen, um die zweite Dimension zu bestimmen.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto`-Dimension zu bestimmen.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto 150px;
```

![1auto-no-dimensions-or-ratio.png](1auto-no-dimensions-or-ratio.png)

Hier wird die Breite gemäß Regel 4 unter Verwendung der Breite des Hintergrundbereichs bestimmt, während die Höhe die in der CSS festgelegten 140px beträgt.

#### Quelle: Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine Dimension angibt, aber kein intrinsisches Verhältnis, wird diese angegebene Dimension gemäß Regel 3 verwendet, wenn diese Dimension in der CSS auf `auto` gesetzt ist.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 200px auto;
```

![100px-wide-no-height-or-ratio-length-auto.png](100px-wide-no-height-or-ratio-length-auto.png)

Hier überschreiten die im CSS angegebenen 200px die im SVG angegebenen 100px Breite gemäß Regel 1. Da kein intrinsisches Verhältnis oder Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto 125px;
```

![100px-wide-no-height-or-ratio-auto-length.png](100px-wide-no-height-or-ratio-auto-length.png)

In diesem Fall wird die Breite im CSS als auto angegeben, sodass die im SVG angegebene Breite von 100px gemäß Regel 3 gewählt wird. Die Höhe wird im CSS auf 125px festgelegt, daher wird diese gemäß Regel 1 ausgewählt.

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, gilt Regel 1, wobei diese Dimension aus dem SVG in den gerenderten Hintergrund übernommen wird, es sei denn, sie wird speziell durch das CSS überschrieben. Wenn auch ein intrinsisches Verhältnis angegeben ist, wird dies verwendet, um die andere Dimension zu bestimmen.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 150px auto;
```

![1auto-100px-height-3x4-ratio.png](1auto-100px-height-3x4-ratio.png)

In diesem Fall verwenden wir die im CSS angegebene Breite des Bildes, die auf 150px festgelegt ist, sodass Regel 1 angewendet wird. Das intrinsische 3:4-Verhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Quelle: Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn im SVG keine Dimensionen angegeben sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension auszuwählen, gemäß Regel 2.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 150px auto;
```

![1auto-no-dimensions-1x1-ratio.png](1auto-no-dimensions-1x1-ratio.png)

Die Breite wird durch das CSS auf 150px festgelegt. Der `auto`-Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1-Seitenverhältnisses ebenfalls auf 150px berechnet, was zu dem obigen Bild führt.

## Siehe auch

- {{cssxref("background-size")}}
- Blogartikel: [Properly resizing vector image backgrounds](https://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
