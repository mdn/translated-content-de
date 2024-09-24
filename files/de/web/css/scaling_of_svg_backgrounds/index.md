---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Angesichts der Flexibilität von SVG-Bildern gibt es viele Dinge zu beachten, wenn Sie sie als Hintergrundbilder mit der {{ cssxref("background-image") }}-Eigenschaft verwenden, und noch mehr, wenn Sie sie zusätzlich mit der {{ cssxref("background-size") }}-Eigenschaft skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern gehandhabt wird, wenn diese Eigenschaften verwendet werden.

## Der Algorithmus, zusammengefasst

Der Algorithmus lässt sich größtenteils durch diese vier Regeln zusammenfassen. Es gibt einige Sonderfälle, die nicht durch diese Regeln abgedeckt sind, aber sie decken die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (das heißt, Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis (d.h. ein konstantes Breite:Höhe-Verhältnis wie 16:9, 4:3, 2.39:1, 1:1 usw.) hat, wird die gerenderte Größe dieses Verhältnis beibehalten.
3. Wenn das Bild eine Größe angibt und die Größe nicht durch fits oder cover geändert wird, gewinnt die angegebene Größe.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in der gleichen Größe wie der Hintergrundbereich gerendert.

Es ist bemerkenswert, dass der Größenalgorithmus nur an den Dimensionen und Proportionen des Bildes interessiert ist, oder an deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird wie ein Rasterbild derselben Größe behandelt.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{glossary("aspect ratio")}} zu strecken – zum Beispiel, um es über den Seitenhintergrund zu strecken – stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispielquellenbilder

Bevor wir uns die Ergebnisse der Verwendung verschiedener Arten von Quellenbildern ansehen und sehen, wie sie aussehen, wenn sie mit {{ cssxref("background-size") }} verwendet werden, wäre es hilfreich, sich einige Beispielquellenbilder anzusehen, die unterschiedliche Dimensionen und Größeneinstellungen haben.

In jedem Fall zeigen wir, wie das Quellenbild in einem 150x150-Feld gerendert aussieht, und bieten einen Link zur SVG-Quelle.

### Ohne Dimensionen und Proportionen

Dieses Bild ist sowohl dimensionslos als auch proportionlos. Es ist ihm egal, welche Größe es hat, noch darauf, ein bestimmtes Seitenverhältnis beizubehalten. Dies wäre ein guter Verlaufshintergrund für den Desktop, der unabhängig von Ihrer Bildschirmgröße und ihrem Seitenverhältnis funktioniert.

![no-dimensions-or-ratio.png](no-dimensions-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg)

### Eine angegebene Dimension und ohne Proportion

Dieses Bild gibt eine Breite von 100 Pixel an, aber keine Höhe oder intrinsisches Verhältnis. Grundsätzlich handelt es sich um einen schmalen Tapetenstreifen, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

![100px-wide-no-height-or-ratio.png](100px-wide-no-height-or-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg)

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixel an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass das Verhältnis von Breite zu Höhe immer 3:4 ist, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (das heißt, durch explizites Angeben von Breite und Höhe, die nicht diesem Verhältnis entsprechen).

Dies ist sehr ähnlich wie das Angeben einer bestimmten Breite und Höhe, da man, sobald man eine Dimension und ein Verhältnis kennt, die andere Dimension impliziert ist, aber es ist dennoch ein nützliches Beispiel.

![100px-height-3x4-ratio.png](100px-height-3x4-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg)

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Denken Sie dabei an ein Programmsymbol. Es ist immer quadratisch und kann in jeder Größe verwendet werden, wie zum Beispiel 32x32, 128x128 oder 512x512.

![no-dimensions-1x1-ratio.png](no-dimensions-1x1-ratio.png)

[SVG-Quelle](https://mdn.dev/archives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg)

## Skalierungsbeispiele

Jetzt sehen wir einige Beispiele dafür, was passiert, wenn wir diese Bilder unterschiedlich skalieren. In jedem der folgenden Beispiele sind die umgebenden Rechtecke 300 Pixel breit und 200 Pixel hoch. Darüber hinaus haben die Hintergründe aus Gründen der Klarheit {{ cssxref("background-repeat") }} auf no-repeat gesetzt.

> [!NOTE]
> Die unten gezeigten Screenshots zeigen das **erwartete** Rendering. Nicht alle Browser rendern diese derzeit korrekt.

### Festlegen fester Längen für beide Dimensionen

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten wird das Bild immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Bei dieser CSS-Angabe:

```css
background: url(no-dimensions-or-ratio.svg);
background-size: 125px 175px;
```

wird das gerenderte Ergebnis folgendermaßen aussehen:

![fixed-no-dimensions-or-ratio.png](fixed-no-dimensions-or-ratio.png)

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Bei dieser CSS-Angabe:

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 250px 150px;
```

wird das gerenderte Ergebnis folgendermaßen aussehen:

![fixed-100px-wide-no-height-or-ratio.png](fixed-100px-wide-no-height-or-ratio.png)

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Bei dieser CSS-Angabe:

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 275px 125px;
```

wird das gerenderte Ergebnis folgendermaßen aussehen:

![fixed-100px-height-3x4-ratio.png](fixed-100px-height-3x4-ratio.png)

#### Quelle: Keine angegebene Breite oder Höhe mit intrinsischem Verhältnis

Bei dieser CSS-Angabe:

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 250px 100px;
```

wird das gerenderte Ergebnis folgendermaßen aussehen:

![fixed-no-dimensions-1x1-ratio.png](fixed-no-dimensions-1x1-ratio.png)

### Verwenden von contain oder cover

Die Angabe von `cover` für {{ cssxref("background-size") }} sorgt dafür, dass das Bild so klein wie möglich gemacht wird, während es immer noch den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne dass es vom Hintergrundbereich abgeschnitten wird.

Bei einem Bild mit einem intrinsischen Verhältnis passt genau eine Größe zu den `cover`/fit-Kriterien allein. Aber wenn kein intrinsisches Verhältnis angegeben ist, reicht `cover`/fit nicht aus, und die großen/kleinen Einschränkungen bestimmen die resultierende Größe.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, daher übernimmt Regel 4: Das Hintergrundbild wird so gerendert, dass es den gesamten Hintergrundbereich abdeckt. Dies erfüllt die größte-oder-kleinste Einschränkung.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: contain;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![no-dimensions-or-ratio-contain.png](no-dimensions-or-ratio-contain.png)

#### Quelle: Eine angegebene Dimension, kein intrinsisches Verhältnis

Ähnlicherweise, wenn das Bild eine Dimension angegeben hat, aber kein intrinsisches Verhältnis, gilt Regel 4 und das Bild wird skaliert, um den gesamten Hintergrundbereich abzudecken.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: contain;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![100px-wide-no-height-or-ratio-contain.png](100px-wide-no-height-or-ratio-contain.png)

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: Wir versuchen, jedes intrinsische Verhältnis (unter Beachtung von `contain` oder `cover`) beizubehalten. Beispielsweise bedeutet das Beibehalten eines 3:4-Intrinsik-Verhältnisses für ein 300x200-Feld mit `contain`, dass ein 150x200-Hintergrund gezeichnet wird.

##### contain-Fall

```css
background: url(100px-height-3x4-ratio.svg);
background-size: contain;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![100px-height-3x4-ratio-contain.png](100px-height-3x4-ratio-contain.png)

Beachten Sie, dass das gesamte Bild gerendert wird, wobei es so gut wie möglich in das Feld passt, ohne dass Teile davon abgeschnitten werden.

##### cover-Fall

```css
background: url(100px-height-3x4-ratio.svg);
background-size: cover;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![100px-height-3x4-ratio-cover.png](100px-height-3x4-ratio-cover.png)

Hier wird das 3:4-Verhältnis beibehalten, während das Bild weiterhin gestreckt wird, um das gesamte Feld zu füllen. Das führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Quelle: Keine Dimensionen mit intrinsischem Verhältnis

Beim Verwenden eines Bildes ohne intrinsische Dimensionen, aber mit intrinsischem Verhältnis, funktioniert dies ähnlich.

##### contain-Fall

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: contain;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![no-dimensions-1x1-ratio-contain.png](no-dimensions-1x1-ratio-contain.png)

Beachten Sie, dass das Bild auf die kleinste Dimension angepasst wird, während das 1:1-Seitenverhältnis beibehalten wird.

##### cover-Fall

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: cover;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![no-dimensions-1x1-ratio-cover.png](no-dimensions-1x1-ratio-cover.png)

Hier wird das Bild so skaliert, dass es die größte Dimension ausfüllt. Das 1:1-Verhältnis wurde beibehalten, obwohl es bei diesem Quellenbild schwierig zu sehen sein kann.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, sagt Regel 2, dass das Rendering jedes angegebene intrinsische Verhältnis beibehalten muss.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis oder Dimensionen vom Quellenbild angegeben sind, tritt Regel 4 in Kraft, und das Bild wird skaliert, um den Hintergrundbereich zu füllen.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto auto;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![auto-no-dimensions-or-ratio.png](auto-no-dimensions-or-ratio.png)

#### Quelle: Eine Dimension und kein intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis angegeben wird, aber mindestens eine Dimension, tritt Regel 3 in Kraft, und das Bild wird entsprechend dieser Dimensionen gerendert.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto auto;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![auto-100px-wide-no-height-or-ratio.png](auto-100px-wide-no-height-or-ratio.png)

Beachten Sie hier, dass die Breite, die in der SVG-Quelle mit 100 Pixeln angegeben ist, eingehalten wird, während die Höhe den Hintergrundbereich füllt, da sie nicht angegeben ist (weder explizit noch durch ein intrinsisches Verhältnis).

#### Quelle: Eine Dimension und ein intrinsisches Verhältnis

Wenn ein intrinsisches Verhältnis mit einer festen Dimension vorhanden ist, fixiert das beide Dimensionen. Die Kenntnis einer Dimension und eines Verhältnisses ist, wie bereits erwähnt, dasselbe wie das explizite Angeben beider Dimensionen.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: auto auto;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![auto-100px-height-3x4-ratio.png](auto-100px-height-3x4-ratio.png)

Da dieses Bild explizit eine Höhe von 100 Pixeln hat, wird das 3:4-Verhältnis explizit auf 75 Pixel eingestellt, sodass es im `auto`-Fall so gerendert wird.

#### Quelle: Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben wird, aber keine Dimensionen, wird Regel 4 angewendet - außer dass Regel 2 ebenfalls Anwendung findet. Das Bild wird daher genauso gerendert wie im `contain`-Fall.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: auto auto;
```

Das gerenderte Ergebnis sieht folgendermaßen aus:

![auto-no-dimensions-1x1-ratio.png](auto-no-dimensions-1x1-ratio.png)

### Verwenden von "auto" und einer spezifischen Länge

Laut Regel 1 werden angegebene Dimensionen immer verwendet, daher müssen wir unsere Regeln nur anwenden, um die zweite Dimension zu bestimmen.

#### Quelle: Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto`-Dimension zu bestimmen.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto 150px;
```

![1auto-no-dimensions-or-ratio.png](1auto-no-dimensions-or-ratio.png)

Hier wird die Breite mithilfe der Breite des Hintergrundbereichs gemäß Regel 4 bestimmt, während die Höhe die im CSS angegebene 140px beträgt.

#### Quelle: Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine Dimension angegeben hat, aber kein intrinsisches Verhältnis gibt diese angegebene Dimension an, wird sie nach Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 200px auto;
```

![100px-wide-no-height-or-ratio-length-auto.png](100px-wide-no-height-or-ratio-length-auto.png)

Hier überschreiben die im CSS angegebenen 200px die in der SVG angegebenen 100px Breite, gemäß Regel 1. Da kein intrinsisches Verhältnis oder eine Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe des gerenderten Bildes.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto 125px;
```

![100px-wide-no-height-or-ratio-auto-length.png](100px-wide-no-height-or-ratio-auto-length.png)

In diesem Fall wird die Breite im CSS als auto angegeben, sodass die in der SVG angegebenen 100px Breite nach Regel 3 ausgewählt werden. Die Höhe ist im CSS auf 125px festgelegt, daher wird diese nach Regel 1 ausgewählt.

#### Quelle: Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wendet Regel 1 diese Dimension aus der SVG auf den gerenderten Hintergrund an, es sei denn, sie wird speziell durch das CSS überschrieben. Wenn auch ein intrinsisches Verhältnis angegeben wird, wird dieses verwendet, um die andere Dimension zu bestimmen.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 150px auto;
```

![1auto-100px-height-3x4-ratio.png](1auto-100px-height-3x4-ratio.png)

In diesem Fall verwenden wir die im CSS angegebene Breite des Bildes, die auf 150px festgelegt ist, sodass Regel 1 angewendet wird. Das intrinsische 3:4-Seitenverhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Quelle: Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn in der SVG keine Dimensionen angegeben sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension auszuwählen, gemäß Regel 2.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 150px auto;
```

![1auto-no-dimensions-1x1-ratio.png](1auto-no-dimensions-1x1-ratio.png)

Die Breite wird durch das CSS auf 150px gesetzt. Der `auto`-Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1-Seitenverhältnisses auf 150px berechnet, was zu dem obigen Bild führt.

## Siehe auch

- {{cssxref("background-size")}}
- Blog-Beitrag: [Properly resizing vector image backgrounds](https://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
