---
title: Deklarieren mehrerer Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS-Masking ist eine Technik, mit der Sie Bilder als Masken verwenden können, um festzulegen, welche Bereiche eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske legt selektiv Teile des Elements frei oder verbirgt sie, basierend auf dem Alphakanal und in einigen Fällen der Helligkeit der Farben der angewendeten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die auf Kostümbällen getragen werden. Auf einem Maskenball wird das Gesicht des Trägers überall dort versteckt, wo die Maske undurchsichtig ist und sichtbar, wo Sie durch die Maske hindurchsehen können. In CSS legen die Bereiche, in denen die zusammengesetzten Maskenschichten vollständig undurchsichtig sind, das Element frei, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden besprechen wir das Konzept der Maskenschichten und wie mehrere Maskenschichten mithilfe der {{cssxref("mask")}} Kurzschreibweise deklariert werden.

## Verständnis von Maskenschichten

Sie können Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenschichten bestehen. Sie definieren mehrere Schichten, indem Sie kommagetrennte Werte in der {{cssxref("mask")}} Kurzschreibweise oder der {{cssxref("mask-image")}} Eigenschaft verwenden – selbst ein auf `none` gesetzter Wert zählt als Schicht.

Jede Maskenschicht kann ein [mask image](/de/docs/Web/CSS/Reference/Properties/mask-image) enthalten, das relativ zu der Ursprungsbox der Maske positioniert ist. Das Bild kann skaliert, wiederholt und beschnitten werden. Wenn Sie mehr als ein Maskenbild einfügen, können Sie die Art und Weise definieren, wie die Maskenschichten zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Weitere Details und Beispiele finden Sie im [Maskierungs-Eigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask` Kurzschreibweise akzeptiert eine kommagetrennte Liste von Maskenschichten. Die Syntax für jede Schicht kann die folgenden Werte enthalten:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image` Wert weglassen, ist das Standardbild ein transparentes schwarzes Bild, das das Element in dieser Schicht vollständig verbirgt.

Die `mask` Kurzschreibweise setzt Werte für alle `mask-*` Eigenschaften. Jede Komponente, die innerhalb einer Schicht nicht deklariert wird, wird auf ihren Standardwert zurückgesetzt. Die `mask` Eigenschaft setzt auch alle `mask-border-*` Eigenschaften auf ihre Standardwerte zurück. Eine `mask`-Deklaration, die nur einen `mask-image`-Wert enthält, setzt implizit Folgendes:

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

Solange eine kommagetrennte {{cssxref("mask-image")}} Eigenschaftsdeklaration mindestens einen Wert enthält, der nicht `none` ist, wird für jeden Wert in der Deklaration eine Maskenschicht erstellt, selbst für die `none` Werte. Dieses Verhalten gilt, unabhängig davon, ob Sie die `mask-image` Eigenschaft oder die `mask` Kurzschreibweise verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können sie mithilfe eines [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), eines Rasterbilds (wie PNGs) oder eines SVG {{svgelement("mask")}} Elements definieren.

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

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor.

Die `mask-image` Eigenschaft ist analog zur {{cssxref("background-image")}} Eigenschaft. Genau wie bei der `background-image` Eigenschaft, um mehrere Maskenbilder einzubeziehen, werden die Bildwerte durch Kommas getrennt.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrbilddeklaration erstellt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, außer der `multiple-gradient-mask` Deklaration, die zwei erstellt.

### Maskenschichten und das Schlüsselwort `none`

Wenn `none` der einzige Wert der `mask-image` Eigenschaft ist, werden keine Maskenschichten erstellt und es erfolgt keine Maskierung.

```css
.no-masks {
  mask-image: none;
}
```

Ebenso, wenn Sie die `mask` Kurzschreibweise verwenden, erfolgt keine Maskierung, wenn kein `mask-image` Wert vorhanden ist, der nicht `none` ist. Wenn eines der folgenden deklariert wird, werden keine Maskenschichten erstellt und nichts wird versteckt:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls, solange ein `mask-image` vorhanden ist, das nicht auf `none` gesetzt ist, wird für jeden Wert in der kommagetrennten Werteliste eine Maskenschicht erstellt, selbst wenn der `mask-image` Wert in einem Wert in der kommagetrennten Liste weggelassen wird oder explizit auf `none` gesetzt wird. Mit anderen Worten, eine Schicht wird für jeden gültigen kommagetrennten Wert erstellt, es sei denn, die gesamte Eigenschaft löst sich zu `none` auf.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` haben fünf Maskenschichten:

Wir können die Schichten auch mit der `mask` Kurzschreibweise erstellen:

```css
.masked-element {
  mask:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Wenn ein Wert in der kommagetrennten Liste ein leeres Bild ist, das Herunterladen fehlschlägt, es sich auf ein `<mask>` Element bezieht, das nicht existiert, oder anderweitig nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt es dennoch als Maskenbildschicht und rendert ein transparentes schwarzes Maskenbild, das keinen visuellen Effekt hat. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Es erfolgt keine Maskierung, wenn die gesamte Eigenschaft sich zu `none` auflöst, was das Element vollständig sichtbar macht. Andererseits, wenn der Wert mehrere Schichten umfasst und mindestens eine davon nicht `none` ist, legen die `none` Schichten keinen Teil des Elements frei (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel löst sich der Wert nicht zu `none` auf; Da jedoch alle nicht-`none` Bilder ungültig sind, erfolgt eine Maskierung und das Element wird vollständig verborgen.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS-Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenschichten `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch einzelne `mask-*` Eigenschaften nach oder mit größerer Spezifität als eine `mask` Deklaration verwenden.

Die `mask-*` Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Setzt den Modus jeder Maskenschicht entweder auf `alpha` oder `luminance` oder ermöglicht es, dass sie auf den Modus der Quelle zurückgreifen, indem der Wert auf `match-source` gesetzt wird. Der Standardwert ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}} Eigenschaft mit einer Syntax, die der [Syntax `<position>` von `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#position) folgt, legt sie die Anfangsposition des Maskenbildes relativ zum Ursprungsfeld der Maskenschicht fest, definiert durch die `mask-origin` Eigenschaft. Sie können ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte angeben. Die Standardeinstellung `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke des Ursprungsfelds der Maske.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}} Eigenschaft, sie spezifiziert den _Maskenpositionsbereich_, der das Ursprungsfeld der Maske ist, innerhalb dessen ein Maskenbild positioniert wird. Beispielsweise, wenn `mask-position` `top left` ist, definiert diese Eigenschaft, ob dies relativ zur äußeren Kante des Rahmens, zur äußeren Kante des Paddings oder zur äußeren Kante des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}} Eigenschaft, bestimmt sie den Bereich des Elements, der von einer Maske betroffen ist. Sie definiert, ob der maskierte Malbereich die Rahmen, das Padding oder die Inhaltsbox ist und beschränkt den bemalten Inhalt des Elements auf diesen Bereich. Wenn die `mask-image` Quelle der Maskenschicht ein SVG `<mask>` Element ist, hat die `mask-clip` Eigenschaft keine Auswirkungen.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}} Eigenschaft, wird sie verwendet, um die Maskenschicht zu skalieren. Werte können ein einzelnes Schlüsselwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder ein einzelner Prozentsatz oder zwei durch Leerzeichen getrennte Werte sein – jeder davon kann eine Länge, ein Prozentsatz oder `auto` sein. Der Standardwert ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}} Eigenschaft, definiert sie, wie das Maskenbild gekachelt wird, nachdem es skaliert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunter liegenden Maskenschichten kombiniert wird. Jede Maskenschicht wird entweder zu den vorher zusammengesetzten Maskenschichten hinzugefügt, subtrahiert, inkludiert oder ausgeschlossen. Ähnlich wie bei `mask-mode`, gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*` Wert in einer kommagetrennten Liste von `mask` Komponentenwerten wird auf eine separate Maskenschicht angewendet. Wie zuvor erwähnt, kann ein Element mehrere Maskenschichten haben — die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte in den `mask-image` oder `mask` Eigenschaften bestimmt. Jeder `mask-*` Wert wird der Reihe nach einer Maskenschicht zugeordnet. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenschichten, werden überschüssige Werte ignoriert. Wenn die Maskenkomponenteneigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die `mask-*` Werte wiederholt.

Um mehr über diese einzelnen Eigenschaften zu erfahren, siehe [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).

## Reihenfolge der Kurzschreibkomponenteneigenschaften

In den meisten Fällen ist die Reihenfolge der Eigenschaften flexibel, aber es gibt einige Eigenheiten und Ausnahmen.

### Reihenfolgeregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, in der Syntax als `<origin>` aufgeführt, kommt vor den `mask-clip` Werten, die in der Syntax als `<clip>` aufgeführt sind.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) Schlüsselwörter. Zusätzlich akzeptiert `mask-clip` auch `no-clip`. Deshalb spielt die Reihenfolge dieser beiden eine Rolle, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem `no-clip` Schlüsselwort vorhanden ist, wird der `<geometry-box>` Wert auf `mask-origin` gesetzt, und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und es kein `no-clip` Schlüsselwort gibt, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge ebenfalls keine Rolle.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, setzt der erste die `mask-origin` Komponente und der zweite die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Das Festlegen der falschen Reihenfolge für die `mask-origin` und `mask-clip` Werte kann das Erscheinungsbild beeinflussen, wird jedoch nicht dazu führen, dass die Deklaration fehlschlägt.

### Reihenfolgeregeln für `mask-size` und `mask-position`

Möglicherweise haben Sie einen Schrägstrich zwischen `mask-position` und `mask-size` bemerkt, in der Syntax als `<position>` und `<size>` aufgeführt. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder ein Paar {{cssxref("length-percentage")}} Werte vorhanden sind, wird die Position des Bildes und nicht die Größe definiert. Wenn sowohl eine Position als auch eine Größe in einer Maskenschicht enthalten sind, ohne den Schrägstrich dazwischen, wird die gesamte Deklaration ungültig.

```css
mask:
  url("star.svg") bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url("circle.svg") 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>` Werten vorhanden ist, setzt es die `mask-position` Eigenschaft, und die `mask-size` wird `auto` sein. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen und die Werte müssen durch einen Schrägstrich (`/`) getrennt werden. Der Schrägstrich ist erforderlich, auch wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

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

Um eine `mask-size` in einer Maskenschicht mithilfe der `mask` Kurzschreibweise einzuschließen, müssen Sie einen `mask-position` Wert mit einem unmittelbar davor befindlichen Schrägstrich einfügen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einfügen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in CSS-Zuschnitt](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
