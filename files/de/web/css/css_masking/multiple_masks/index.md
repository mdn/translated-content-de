---
title: Deklarieren mehrerer Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

CSS-Masking ist eine Technik, die es ermöglicht, Bilder als Masken zu verwenden, um zu definieren, welche Bereiche eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske offenbart oder verbirgt Teile des Elements selektiv basierend auf dem Alpha-Kanal und in einigen Fällen der Helligkeit der Farben der angewandten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die auf Maskenbällen getragen werden. Bei einem Maskenball wird das Gesicht des Trägers dort verborgen, wo die Maske undurchsichtig ist und ist sichtbar, wo man durch die Maske sehen kann. In CSS enthüllen die Bereiche, in denen die zusammengesetzten Maskenschichten vollständig undurchsichtig sind, das Element, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden behandeln wir das Konzept der Maskenschichten und wie man mehrere Maskenschichten mit der {{cssxref("mask")}} Kurzschreibweise deklariert.

## Verständnis der Maskenschichten

Sie können CSS-Masking auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenschichten bestehen. Sie definieren mehrere Schichten, indem Sie durch Kommas getrennte Werte in der {{cssxref("mask")}}-Kurzschreibweise oder der {{cssxref("mask-image")}}-Eigenschaft verwenden – selbst ein auf `none` gesetzter Wert zählt als Schicht.

Jede Maskenschicht kann ein [Maskenbild](/de/docs/Web/CSS/mask-image) enthalten, das relativ zur Ursprungsbox der Maske positioniert ist. Das Bild kann skaliert, wiederholt und ausgeschnitten werden. Wenn Sie mehr als ein Maskenbild einfügen, können Sie definieren, wie die Maskenschichten zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Weitere Details und Beispiele finden Sie im [Masken-Eigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask`-Kurzschreibweise akzeptiert eine durch Kommas getrennte Liste von Maskenschichten. Die Syntax für jede Schicht kann folgende Werte umfassen:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image`-Wert weglassen, wird er standardmäßig auf ein transparentes schwarzes Bild gesetzt, das das Element in dieser Schicht vollständig verbirgt.

Die `mask`-Kurzschreibweise setzt Werte für alle `mask-*`-Eigenschaften. Jede nicht innerhalb einer Schicht deklarierte Komponente wird auf ihren Anfangswert zurückgesetzt. Die `mask`-Eigenschaft setzt auch alle `mask-border-*`-Eigenschaften auf ihre Anfangswerte zurück. Eine `mask`-Deklaration, die nur einen `mask-image`-Wert enthält, setzt implizit Folgendes:

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

Solange eine durch Kommas getrennte {{cssxref("mask-image")}}-Eigenschaftsdeklaration mindestens einen Wert außer `none` enthält, wird für jeden Wert in der Deklaration eine Maskenschicht erstellt, selbst für die `none`-Werte. Dieses Verhalten gilt, unabhängig davon, ob Sie die `mask-image`-Eigenschaft oder die `mask`-Kurzschreibweise verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können diese mit einem [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), einem Rasterbild (wie PNGs) oder einem SVG {{svgelement("mask")}}-Element definieren.

```css
.gradient-mask {
  mask-image: linear-gradient(to right, black, transparent);
}

.raster-mask {
  mask-image: url("alphaImage.png");
}

.mask-element-mask {
  mask-image: url("#svg-mask");
}
```

Der [Einführungsleitfaden zum Masking](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor.

Die `mask-image`-Eigenschaft ist analog zur {{cssxref("background-image")}}-Eigenschaft. Ebenso wie bei der `background-image`-Eigenschaft werden, um mehrere Maskenbilder einzubeziehen, die Bildwerte durch Kommas getrennt.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrfachbild-Deklaration erstellt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, außer der `multiple-gradient-mask`-Deklaration, die zwei erstellt.

### Maskenschichten und das Schlüsselwort `none`

Wenn `none` der einzige Wert der `mask-image`-Eigenschaft ist, werden keine Maskenschichten erstellt und es erfolgt kein Masking.

```css
.no-masks {
  mask-image: none;
}
```

In ähnlicher Weise, wenn Sie die `mask`-Kurzschreibweise verwenden und kein `mask-image`-Wert außer `none` vorhanden ist, erfolgt kein Masking. Wenn eines der folgenden deklariert wird, werden keine Maskenschichten erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

In allen anderen Fällen wird, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, für jeden Wert in der durch Kommas getrennten Liste von Werten eine Maskenschicht erstellt, selbst wenn der `mask-image`-Wert von einem Wert in der durch Kommas getrennten Liste ausgelassen wurde oder explizit auf `none` gesetzt ist. Mit anderen Worten, eine Schicht wird für jeden gültigen durch Kommas getrennten Wert erstellt, es sei denn, die gesamte Eigenschaft wird auf `none` aufgelöst.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Das Schlüsselwort `none` in einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` werden fünf Maskenschichten haben:

Wir können die Schichten auch mit der `mask`-Kurzschreibweise erstellen:

```css
.masked-element {
  mask:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Wenn ein Wert in der durch Kommas getrennten Liste von Werten ein leeres Bild ist, nicht heruntergeladen werden kann, ein nicht existentes `<mask>`-Element referenziert oder auf andere Weise nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt es immer noch als Maskenbild-Schicht und rendert eine transparente schwarze Maskenbildschicht, die keinen visuellen Effekt hat. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Es erfolgt kein Masking, wenn die gesamte Eigenschaft auf `none` aufgelöst wird, was das Element vollständig sichtbar macht. Auf der anderen Seite, wenn der Wert mehrere Schichten umfasst und mindestens eine davon nicht `none` ist, enthüllen die `none`-Schichten keinen Teil des Elements (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel wird der Wert nicht auf `none` aufgelöst; aber da alle nicht `none`-Bilder ungültig sind, erfolgt Masking und das Element wird vollständig verborgen.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS-Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenschichten die `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch individuelle `mask-*` Eigenschaften nach oder mit höherer Spezifität als eine `mask`-Deklaration verwenden.

Die `mask-*` Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenschicht entweder auf `alpha` oder `luminance` fest oder erlaubt ihm, in den Modus der Quelle zu wechseln, indem der Wert auf `match-source` gesetzt wird. Die Standardoption ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}}-Eigenschaft, wobei die Syntax der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/background-position#position) folgt, legt sie die Ausgangsposition des Maskenbildes relativ zur Ursprungsbox der Maskenschicht fest, die durch die `mask-origin`-Eigenschaft definiert wird. Sie können einen, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte angeben. Das Standardwert `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke der Ursprungsbox der Maske.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}}-Eigenschaft gibt sie den _Maskierungspositionierungsbereich_ an, der der Ursprungsboxbereich der Maske ist, innerhalb dessen ein Maskenbild positioniert wird. Zum Beispiel, wenn `mask-position` `top left` ist, definiert diese Eigenschaft, ob es relativ zur Außenkante des Rahmens, zur Außenkante der Polsterung oder zur Außenkante des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}}-Eigenschaft bestimmt sie den Bereich des Elements, der von einer Maske betroffen ist. Sie definiert, ob der Maskierungsbereich der Rahmen, die Polsterung oder der Inhaltsbereich ist und schränkt den gemalten Inhalt des Elements auf diesen Bereich ein. Wenn die {{cssxref("mask-image")}}-Quelle der Maskenschicht ein SVG `<mask>`-Element ist, hat die `mask-clip`-Eigenschaft keine Wirkung.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}}-Eigenschaft wird diese verwendet, um die Maskenschicht zu dimensionieren. Werte können ein einzelnes Schlüsselwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder ein Prozentsatz oder zwei durch Leerzeichen getrennte Werte sein–jeder dieser Werte kann eine Länge, ein Prozentsatz oder `auto` sein. Der Standardwert ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}}-Eigenschaft definiert sie, wie das Maskenbild der Schicht gekachelt wird, nachdem es dimensioniert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den Maskenschichten darunter kombiniert wird. Jede Maskenschicht wird entweder zu den zuvor zusammengesetzten Maskenschichten darunter hinzugefügt, davon subtrahiert, eingeschlossen oder ausgeschlossen. Ähnlich wie `mask-mode` gibt es keine analoge `background-*`-Eigenschaft.

Jeder `mask-*` Wert in einer durch Kommas getrennten Liste von `mask` Komponenteneigenschaften gilt für eine separate Maskenschicht. Wie bereits erwähnt, kann ein Element mehrere angewandte Maskenschichten haben — die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in den `mask-image`- oder `mask`-Eigenschaften bestimmt. Jeder `mask-*` Wert wird einer Maskenschicht in der Reihenfolge zugeordnet. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenschichten, werden alle überschüssigen Werte ignoriert. Wenn die Maskenkomponenteneigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die `mask-*` Werte wiederholt.

Um mehr über diese individuellen Eigenschaften zu erfahren, siehe [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).

## Reihenfolge von Kurzschreib-Komponenteneigenschaften

Meistens ist die Reihenfolge der Eigenschaften flexibel, es gibt jedoch einige Besonderheiten und Ausnahmen.

### Ordnungsregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, in der Syntax als `<origin>` aufgeführt, kommt vor den `mask-clip` Werten, die in der Syntax als `<clip>` aufgeführt sind.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box) Schlüsselwörter. Zusätzlich akzeptiert `mask-clip` auch `no-clip`. Aus diesem Grund ist die Reihenfolge dieser beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem `no-clip` Schlüsselwort vorhanden ist, setzt das `<geometry-box>` den `mask-origin` Wert, und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und kein `no-clip` Schlüsselwort existiert, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge erneut keine Rolle.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, setzt der erste die `mask-origin` Komponente und der zweite die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Eine falsche Reihenfolge für die `mask-origin` und `mask-clip` Werte einstellen kann das Erscheinungsbild betreffen, wird jedoch nicht dazu führen, dass die Deklaration fehlschlägt.

### Ordnungsregeln für `mask-size` und `mask-position`

Sie haben möglicherweise bemerkt, dass zwischen `mask-position` und `mask-size` ein Schrägstrich aufgeführt ist, in der Syntax als `<position>` und `<size>`. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder ein Paar von {{cssxref("length-percentage")}} Werten vorhanden ist, wird es die Position des Bildes anstelle der Größe definieren. Wenn sowohl eine Position als auch eine Größe in einer Maskenschicht angegeben sind, ohne den Schrägstrich zwischen den beiden zu verwenden, wird die gesamte Deklaration ungültig.

```css
mask:
  url("star.svg") bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url("circle.svg") 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einziges Paar von `<length-percentage>` Werten vorhanden ist, setzt es die `mask-position` Eigenschaft, und die `mask-size` wird `auto` sein. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen und die Werte müssen durch einen Schrägstrich (`/`) getrennt werden. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

```css example-bad
mask: url("star.svg") contain;
mask: url("star.svg") 10px 10px cover;
mask: url("star.svg") top right 100px 100px;
```

```css example-good
mask: url("star.svg") 10px 10px / cover;
mask: url("star.svg") top 100px right 100px;
mask: url("star.svg") top right / 100px 100px;
```

Um eine `mask-size` in einer Maskenschicht mit der `mask`-Kurzschreibweise einzubeziehen, müssen Sie einen `mask-position` Wert mit einem Schrägstrich direkt davor einfügen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einschließen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
