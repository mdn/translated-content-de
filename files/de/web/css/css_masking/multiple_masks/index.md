---
title: Deklaration mehrerer Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 1ed73e7c02a9afd99c86719cc850254ffe2f7661
---

{{CSSRef}}

CSS-Maskierung ist eine Technik, mit der Sie Bilder als Masken verwenden können, um zu definieren, welche Abschnitte eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske zeigt oder verbirgt selektiv Teile des Elements basierend auf dem Alphakanal und in einigen Fällen auf der Helligkeit der Farben der angewendeten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die bei Maskenbällen getragen werden. Bei einem Maskenball wird das Gesicht des Trägers verborgen, wo immer die Maske undurchsichtig ist, und sichtbar, wo man durch die Maske sehen kann. In CSS offenbaren die Bereiche, in denen die zusammengesetzten Maskenebenen vollständig undurchsichtig sind, das Element, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenebenen. In diesem Leitfaden erörtern wir das Konzept der Maskenebenen und wie man mehrere Maskenebenen mit der {{cssxref("mask")}} Kurzschreibweise deklariert.

## Verständnis von Maskenebenen

Sie können CSS-Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenebenen bestehen. Sie definieren mehrere Ebenen, indem Sie durch Kommas getrennte Werte in der {{cssxref("mask")}} Kurzschreibweise oder der {{cssxref("mask-image")}} Eigenschaft verwenden – selbst ein auf `none` eingestellter Wert zählt als Ebene.

Jede Maskenebene kann ein [Maskenbild](#the-mask-image-property) enthalten, das relativ zur Ursprungskiste der Maske positioniert ist. Das Bild kann skaliert, wiederholt und zugeschnitten werden. Wenn Sie mehr als ein Maskenbild einschließen, können Sie festlegen, wie die Maskenebenen zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz eingeführt. Weitere Details und Beispiele finden Sie im [Masken-Eigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenebenen

Die Eigenschaft `mask` akzeptiert eine durch Kommas getrennte Liste von Maskenebenen. Die Syntax für jede Ebene kann die folgenden Werte umfassen:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenebene sind optional. Wenn Sie jedoch den `mask-image`-Wert weglassen, wird standardmäßig ein transparentes schwarzes Bild verwendet, das das Element in dieser Ebene vollständig verbirgt.

Die Deklaration der Kurzschreibweise von `mask` setzt Werte für alle `mask-*` Eigenschaften. Jede in einer Ebene nicht deklarierte Komponente wird auf ihren Anfangswert zurückgesetzt. Die `mask` Eigenschaft setzt auch alle `mask-border-*` Eigenschaften auf ihre Anfangswerte zurück. Eine `mask` Deklaration, die nur einen `mask-image`-Wert enthält, setzt implizit Folgendes:

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

### Definition von Maskenebenen mit `mask-image`

Solange eine durch Kommas getrennte Deklaration der {{cssxref("mask-image")}} Eigenschaft mindestens einen anderen Wert als `none` enthält, wird für jeden Wert in der Deklaration, auch für die `none` Werte, eine Maskenebene erstellt. Dieses Verhalten gilt sowohl für die Verwendung der `mask-image`-Eigenschaft als auch für die Kurzschreibweise `mask`. Diese Maskenbilder können Verlaufsbilder, Bilder oder SVG-Quellen sein. Sie können sie mit einem [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), einem [Rasterbild](/de/docs/Web/CSS/CSS_masking/Masking#with_impoorted_images) (wie PNGs) oder einem SVG-{{svgelement("mask")}}-Element definieren.

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

Der [einleitende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor.

Die `mask-image` Eigenschaft ist analog zur {{cssxref("background-image")}} Eigenschaft. Wie bei der `background-image` Eigenschaft werden die Bildwerte durch Kommas getrennt, um mehrere Maskenbilder einzuschließen.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrfachbild-Deklaration erstellt eine Maskenebene. Alle Beispiele in diesem Abschnitt erstellen eine Maskenebene, mit Ausnahme der `multiple-gradient-mask` Deklaration, die zwei erstellt.

### Maskenebenen und das Schlüsselwort `none`

Wenn `none` der einzige Wert der `mask-image`-Eigenschaft ist, werden keine Maskenebenen erstellt und es erfolgt keine Maskierung.

```css
.no-masks {
  mask-image: none;
}
```

Ebenso gilt beim Verwenden der Kurzschreibweise `mask`, dass keine Maskierung erfolgt, wenn kein anderer `mask-image`-Wert als `none` vorhanden ist. Wenn eines der folgenden deklariert ist, werden keine Maskenebenen erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls wird, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, eine Maskenebene für jeden Wert in der durch Kommas getrennten Liste von Werten erstellt, selbst wenn der `mask-image` Wert in einem durch Kommas getrennten Wert weggelassen wird oder explizit auf `none` gesetzt ist. Mit anderen Worten, eine Ebene wird für jeden gültigen durch Komma getrennten Wert erstellt, es sei denn, die gesamte Eigenschaft wird zu `none` aufgelöst.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenebene, wenn auch eine transparente schwarze Bildebene. Alle Elemente mit der Klasse `masked-element` werden fünf Maskenebenen haben:

Wir können die Ebenen auch mit der Kurzschreibweise `mask` erstellen:

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Wenn ein Wert in der durch Kommas getrennten Liste von Werten ein leeres Bild ist, der Download fehlschlägt, ein `<mask>` Element referenziert, das nicht existiert, oder anderweitig nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt es dennoch als Maskenbildebene, die ein transparentes schwarzes Maskenbild darstellt, das keine visuelle Wirkung hat. Wenn alle Werte dies tun, wird das Element vollständig verdeckt.

Es erfolgt keine Maskierung, wenn die gesamte Eigenschaft zu `none` aufgelöst wird, wodurch das Element vollständig sichtbar wird. Andererseits, wenn der Wert mehrere Ebenen enthält und mindestens eine nicht `none` ist, enthüllen die `none`-Ebenen keinen Teil des Elements (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel wird der Wert nicht zu `none` aufgelöst; aber da alle nicht-`none` Bilder ungültig sind, erfolgt eine Maskierung und das Element wird vollständig verborgen.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS-Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenebenen `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenebenen ist wichtig, wenn Sie auch einzelne `mask-*` Eigenschaften nach oder mit mehr Spezifität als eine `mask`-Deklaration verwenden.

Zu den `mask-*` Eigenschaften gehören:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenebene auf entweder `alpha` oder `luminance` fest oder erlaubt es, auf den Modus der Quelle zurückzugreifen, indem der Wert auf `match-source` gesetzt wird. Der Standard ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}} Eigenschaft mit einer Syntax, die der [Syntax der `<position>` der `background-position`](/de/docs/Web/CSS/background-position#position) folgt, legt sie die Ausgangsposition des Maskenbildes relativ zur Ursprungskiste der Maskenebene fest, die durch die `mask-origin` Eigenschaft definiert wird. Sie können einen, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte angeben. Der Standard `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke der Ursprungskiste der Maske.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}} Eigenschaft, sie spezifiziert den _Maskenpositionierungsbereich_, also den Bereich der Ursprungskiste der Maske, innerhalb dessen ein Maskenbild positioniert ist. Zum Beispiel, wenn die `mask-position` `oben links` ist, definiert diese Eigenschaft, ob dies relativ zum äußeren Rand der Grenze, des Polsters oder des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}} Eigenschaft, bestimmt sie den Bereich des Elements, das von einer Maske betroffen ist. Es definiert, ob der Malbereich der Maske die Grenze, das Polster oder die Inhaltebox ist und schränkt den bemalten Inhalt des Elements auf diesen Bereich ein. Wenn die Maskenquelle der {{cssxref("mask-image")}} ein SVG-`<mask>`-Element ist, hat die Eigenschaft `mask-clip` keinen Effekt.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}} Eigenschaft, wird diese verwendet, um die Maskenebene zu skalieren. Die Werte können ein einzelnes Schlüsselwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder Prozentsatz oder zwei mit Leerzeichen getrennte Werte sein–jeder davon kann eine Länge, Prozentsatz oder `auto` sein. Der Standard ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}} Eigenschaft, definiert sie, wie das Bild der Maskenebene gekachelt wird, nachdem es skaliert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunter liegenden Maskenebenen kombiniert wird. Jede Maskenebene wird entweder hinzugefügt, subtrahiert, einbezogen oder von den zuvor zusammengesetzten Maskenebenen darunter ausgeschlossen. Ähnlich wie bei `mask-mode`, gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*`-Wert in einer durch Kommas getrennten Liste von `mask`-Komponenteneigenschaften gilt für eine separate Maskenebene. Wie bereits erwähnt, kann ein Element mehrere angewandte Maskenebenen haben — die Anzahl der Ebenen wird durch die Anzahl der durch Kommas getrennten Werte in den `mask-image` oder `mask` Eigenschaften bestimmt. Jeder `mask-*`-Wert wird einer Maskenebene in der Reihenfolge zugeordnet. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenebenen, werden alle überschüssigen Werte ignoriert. Wenn die `mask`-Komponenteneigenschaft weniger Werte als die Anzahl der Maskenebenen hat, werden die `mask-*` Werte wiederholt.

Um mehr über diese einzelnen Eigenschaften zu erfahren, sehen Sie sich die [CSS-Eigenschaften für Masken](/de/docs/Web/CSS/CSS_masking/Mask_properties) an.

## Reihenfolge der Kurzschreib-Komponenteneigenschaften

Im Großen und Ganzen ist die Reihenfolge der Eigenschaften flexibel, aber es gibt ein paar Besonderheiten und Ausnahmen.

### Reihenfolgeregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, in der Syntax als `<origin>` angegeben, kommt vor den `mask-clip` Werten, in der Syntax als `<clip>` angegeben.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box) Schlüsselwörter. Zusätzlich nimmt `mask-clip` auch `no-clip` an. Aufgrund dessen spielt die Reihenfolge dieser beiden eine Rolle, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem Schlüsselwort `no-clip` vorhanden ist, dann setzt das `<geometry-box>` den `mask-origin` Wert, und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und es kein `no-clip` Schlüsselwort gibt, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge erneut keine Rolle.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, setzt der erste die `mask-origin` Komponente und der zweite setzt die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Eine falsche Reihenfolge der `mask-origin` und `mask-clip` Werte kann das Erscheinungsbild beeinflussen, führt jedoch nicht dazu, dass die Deklaration fehlschlägt.

### Reihenfolgeregeln für `mask-size` und `mask-position`

Sie haben möglicherweise einen Schrägstrich zwischen `mask-position` und `mask-size` bemerkt, in der Syntax als `<position>` und `<size>` angegeben. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder ein Paar von {{cssxref("length-percentage")}} Werten vorhanden ist, wird die Position des Bildes definiert anstatt der Größe. Das Einbeziehen sowohl einer Position als auch einer Größe in eine Maskenebene ohne den Schrägstrich zwischen den beiden ungültig wird die gesamte Deklaration ungültig machen.

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>` Werten vorhanden ist, setzt es die `mask-position` Eigenschaft, und die `mask-size` wird `auto` sein. Wenn eine Ebene sowohl eine `mask-size` als auch eine `mask-position` beinhaltet, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen und die Werte müssen durch einen Schrägstrich (`/`) getrennt werden. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

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

Um eine `mask-size` in einer Maskenebene mit der `mask` Kurzschreibweise einzubeziehen, müssen Sie einen `mask-position` Wert mit einem Schrägstrich unmittelbar davor einfügen.

> [!WARNING]
> Wenn Sie eine Größe in eine Maskenebene einfügen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS Maskierungs-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
