---
title: Deklarieren mehrerer Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{CSSRef}}

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, Bilder als Masken zu verwenden, um festzulegen, welche Bereiche eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske blendet Teile des Elements basierend auf dem Alphakanal oder teilweise auf der Helligkeit der Farben der angelegten Maskenbilder selektiv ein oder aus.

CSS-Masken sind das Gegenteil von Masken, die auf maskierten Bällen getragen werden. Auf einem maskierten Ball wird das Gesicht des Trägers überall dort verborgen, wo die Maske undurchsichtig ist, und sichtbar, wo man durch die Maske hindurchsehen kann. In CSS enthüllen die Bereiche, in denen die zusammengesetzten Maskenschichten vollständig undurchsichtig sind, das Element, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden besprechen wir das Konzept der Maskenschichten und wie man mehrere Maskenschichten mit der {{cssxref("mask")}}-Kurzschrift-Eigenschaft deklariert.

## Verständnis von Maskenschichten

Sie können CSS-Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenschichten bestehen. Sie definieren mehrere Schichten, indem Sie durch Kommas getrennte Werte in der {{cssxref("mask")}}-Kurzschrift-Eigenschaft oder der {{cssxref("mask-image")}}-Eigenschaft angeben – auch ein auf `none` gesetzter Wert zählt als Schicht.

Jede Maskenschicht kann ein [Maskenbild](/de/docs/Web/CSS/mask-image) enthalten, das relativ zur Ursprungsbox der Maske positioniert ist. Das Bild kann skaliert, wiederholt und beschnitten werden. Wenn Sie mehr als ein Maskenbild einfügen, können Sie festlegen, wie die Maskenschichten zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Für weitere Details und Beispiele siehe den [Leitfaden zu Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask`-Kurzschrift-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Maskenschichten. Die Syntax für jede Schicht kann die folgenden Werte enthalten:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image`-Wert weglassen, wird standardmäßig ein transparentes schwarzes Bild festgelegt, das das Element in dieser Schicht vollständig verbirgt.

Die `mask`-Kurzschrift-Deklaration setzt Werte für alle `mask-*`-Eigenschaften. Jede Komponente, die innerhalb einer Schicht nicht deklariert wird, erhält ihren Anfangswert. Die `mask`-Eigenschaft setzt auch alle `mask-border-*`-Eigenschaften auf ihre Anfangswerte zurück. Eine `mask`-Deklaration, die nur einen `mask-image`-Wert enthält, setzt implizit die folgenden:

```css
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;

mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

### Definieren von Maskenschichten mit `mask-image`

Solange eine durch Kommas getrennte {{cssxref("mask-image")}}-Eigenschaftsdeklaration mindestens einen anderen Wert als `none` enthält, wird für jeden Wert in der Deklaration, auch für die `none`-Werte, eine Maskenschicht erstellt. Dieses Verhalten gilt unabhängig davon, ob Sie die `mask-image`-Eigenschaft oder die `mask`-Kurzschrift verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können sie mit einem [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), einem Rasterbild (wie PNGs) oder einem SVG-{{svgelement("mask")}}-Element definieren.

```css
.gradient-mask {
  mask-image: linear-gradient(to right, black, transparent);
}

.raster-mask {
  mask-image: url(alphaImage.png);
}

.mask-element-mask {
  mask-image: url(#svg-mask);
}
```

Der [Einführungsleitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor.

Die `mask-image`-Eigenschaft ist analog zur {{cssxref("background-image")}}-Eigenschaft. So wie bei der `background-image`-Eigenschaft bei mehreren Maskenbildern die Bildwerte durch Kommas getrennt werden.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrbilddeklaration erzeugt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, außer die `multiple-gradient-mask`-Deklaration, die zwei erstellt.

### Maskenschichten und das `none`-Schlüsselwort

Wenn `none` der einzige Wert der `mask-image`-Eigenschaft ist, werden keine Maskenschichten erstellt und es erfolgt keine Maskierung.

```css
.no-masks {
  mask-image: none;
}
```

Ähnlich verhält es sich bei Verwendung der `mask`-Kurzschrift: Wenn kein `mask-image`-Wert außer `none` vorhanden ist, erfolgt keine Maskierung. Wenn eines der folgenden deklariert ist, werden keine Maskenschichten erstellt und nichts verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls wird für jeden Wert in der durch Kommas getrennten Liste der Werte eine Maskenschicht erstellt, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, sogar wenn der `mask-image`-Wert in einem Wert in der Liste weggelassen oder explizit auf `none` gesetzt wird. Anders gesagt: Eine Schicht wird für jeden gültigen durch Kommas getrennten Wert erstellt, es sei denn, die gesamte Eigenschaft löst sich in `none` auf.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente, schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` werden fünf Maskenschichten haben:

Wir können die Schichten auch mit der `mask`-Kurzschrift erstellen:

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Wenn ein Wert in der komma-separierten Liste von Werten ein leeres Bild ist, nicht heruntergeladen werden kann, auf ein nicht existierendes `<mask>`-Element verweist oder anderweitig nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt es dennoch als Maskenbildschicht und erzeugt ein transparentes, schwarzes Maskenbild ohne visuellen Effekt. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Keine Maskierung erfolgt, wenn sich die gesamte Eigenschaft in `none` auflöst, was das Element vollständig sichtbar macht. Wenn der Wert jedoch mehrere Schichten enthält und mindestens eine nicht `none` ist, enthüllen die `none`-Schichten keinen Teil des Elements (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel löst sich der Wert nicht in `none` auf; da jedoch alle nicht-`none`-Bilder ungültig sind, erfolgt eine Maskierung, und das Element wird vollständig verborgen sein.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS-Stapelhierarchiekontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenschichten `mask-*`-Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch individuelle `mask-*`-Eigenschaften nach oder mit mehr Spezifität als eine `mask`-Deklaration verwenden.

Die `mask-*`-Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` fest, oder lässt es auf den Modus der Quelle durch Festlegen des Wertes auf `match-source` standardisieren. Der Standard ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}}-Eigenschaft folgt die Syntax dem [`background-position`'s `<position>`-Syntax](/de/docs/Web/CSS/background-position#position) und legt die ursprüngliche Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht fest, die durch die `mask-origin`-Eigenschaft definiert ist. Sie können einen, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte angeben. Der Standard `0% 0%` positioniert die linke obere Ecke der Maske an der linken oberen Ecke der Maskenursprungsbox.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}}-Eigenschaft gibt sie den _Maskenpositionierungsbereich_ an, welcher der Bereich der Maskenursprungsbox ist, innerhalb dessen ein Maskenbild positioniert wird. Zum Beispiel, wenn die `mask-position` `top left` ist, definiert diese Eigenschaft, ob sie relativ zur äußeren Kante des Rahmens, der äußeren Kante des Paddings oder der äußeren Kante des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}}-Eigenschaft bestimmt es den Bereich des Elements, der von einer Maske betroffen ist. Es definiert, ob der Malbereich der Maske der Rahmen, das Padding oder die Inhaltsbox ist, und beschränkt den bemalten Inhalt des Elements auf diesen Bereich. Wenn die `mask-image`-Quelle der Maskenschicht ein SVG-`<mask>`-Element ist, hat die `mask-clip`-Eigenschaft keine Wirkung.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}}-Eigenschaft wird sie verwendet, um die Größe der Maskenschicht festzulegen. Werte können ein einzelnes Stichwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder Prozentangabe oder zwei durch Leerzeichen getrennte Werte sein – jeder kann eine Länge, Prozentsatz oder `auto` sein. Der Standard ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}}-Eigenschaft definiert dies, wie das Maskenschichtbild gekachelt wird, nachdem es skaliert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunterliegenden Maskenschichten kombiniert wird. Jede Maskenschicht wird entweder addiert, subtrahiert, eingeschlossen oder von den zuvor zusammengesetzten Maskenschichten darunter ausgeschlossen. Ähnlich wie `mask-mode` gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*`-Wert in einer durch Kommas getrennten Liste von `mask`-Komponenteneigenschaften gilt für eine separate Maskenschicht. Wie bereits erwähnt, kann ein Element mehrere Maskenschichten haben — die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in den `mask-image` oder `mask`-Eigenschaften bestimmt. Jeder `mask-*`-Wert wird mit einer Maskenschicht in Ordnung gebracht. Wenn die Anzahl der Werte in der `mask-*`-Eigenschaft größer ist als die Anzahl der Maskenschichten, werden alle überschüssigen Werte ignoriert. Wenn die Maskeneigenschaft weniger Werte hat als die Anzahl der Maskenschichten, werden die `mask-*`-Werte wiederholt.

Um mehr über diese individuellen Eigenschaften zu erfahren, siehe [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).

## Reihenfolge der Kurzschrift-Komponenteneigenschaften

Meistens ist die Reihenfolge der Eigenschaften flexibel, aber es gibt einige Besonderheiten und Ausnahmen.

### Ordnungsregeln für `mask-origin` und `mask-clip`

Der `mask-origin`-Wert, der in der Syntax als `<origin>` aufgeführt wird, kommt vor den `mask-clip`-Werten, die in der Syntax als `<clip>` aufgeführt sind.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box)-Schlüsselwörter. Zusätzlich akzeptiert `mask-clip` auch `no-clip`. Aufgrund dessen ist die Reihenfolge dieser beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>`-Wert zusammen mit dem `no-clip`-Schlüsselwort vorhanden ist, dann setzt das `<geometry-box>` den `mask-origin`-Wert, und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>`-Wert vorhanden ist und kein `no-clip`-Schlüsselwort vorliegt, werden sowohl die `mask-origin`- als auch die `mask-clip`-Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge ebenfalls keine Rolle.

- Wenn zwei `<geometry-box>`-Werte vorhanden sind, setzt der erste die `mask-origin`-Komponente und der zweite die `mask-clip`-Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Eine falsche Reihenfolge der `mask-origin`- und `mask-clip`-Werte kann das Erscheinungsbild beeinflussen, führt jedoch nicht zum Scheitern der Deklaration.

### Ordnungsregeln für `mask-size` und `mask-position`

Sie haben vielleicht bemerkt, dass zwischen `mask-position` und `mask-size`, die in der Syntax als `<position>` und `<size>` aufgeführt sind, ein Schrägstrich steht. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder ein Paar von {{cssxref("length-percentage")}}-Werten vorhanden sind, wird die Position des Bildes und nicht die Größe definiert. Das Einfügen sowohl einer Position als auch einer Größe in eine Maskenschicht ohne Schrägstrich dazwischen invalidiert die gesamte Deklaration.

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>`-Werten vorhanden ist, setzt dies die `mask-position`-Eigenschaft, und die `mask-size` ist `auto`. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der Wert der `mask-size`-Eigenschaft nach dem Wert der `mask-position`-Eigenschaft kommen und die Werte müssen durch einen Schrägstrich (`/`) getrennt sein. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position`-Wert ist.

```css example-bad
mask: url(star.svg) contain;
mask: url(star.svg) 10px 10px cover;
mask: url(star.svg) top right 100px 100px;
```

```css example-good
mask: url(star.svg) 10px 10px / cover;
mask: url(star.svg) top 100px right 100px;
mask: url(star.svg) top right / 100px 100px;
```

Um eine `mask-size` in einer Maskenschicht mit der `mask`-Kurzschrift einzuschließen, müssen Sie unmittelbar vorher einen `mask-position`-Wert mit einem Schrägstrich einfügen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einfügen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in die CSS-Clippeigenschaften](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
