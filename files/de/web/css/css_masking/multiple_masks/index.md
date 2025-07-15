---
title: Deklarieren mehrerer Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Masking ist eine Technik, die es Ihnen ermöglicht, Bilder als Masken zu verwenden, um zu definieren, welche Abschnitte eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske deckt selektiv Teile des Elements auf oder verbirgt sie, basierend auf dem Alphakanal und in einigen Fällen der Helligkeit der Farben der angewendeten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die auf Maskenbällen getragen werden. Auf einem Maskenball wird das Gesicht eines Trägers überall dort verborgen, wo die Maske undurchsichtig ist, und sichtbar, wo Sie durch die Maske sehen können. In CSS offenbaren die Bereiche, in denen die zusammengesetzten Maskenschichten vollständig undurchsichtig sind, das Element, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden diskutieren wir das Konzept von Maskenschichten und wie man mehrere Maskenschichten mit der {{cssxref("mask")}} Kurzschreibweise deklariert.

## Verständnis von Maskenschichten

Sie können CSS-Masking auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenschichten bestehen. Sie definieren mehrere Schichten, indem Sie Komma-separierte Werte in der {{cssxref("mask")}} Kurzschreibweise oder der {{cssxref("mask-image")}} Eigenschaft verwenden – selbst ein auf `none` gesetzter Wert zählt als Schicht.

Jede Maskenschicht kann ein [mask image](/de/docs/Web/CSS/mask-image) enthalten, das relativ zur Ursprungsbox der Maske positioniert ist. Das Bild kann skaliert, wiederholt und zugeschnitten werden. Wenn Sie mehr als ein Maskenbild einschließen, können Sie die Art und Weise definieren, wie die Maskenschichten kombiniert oder zusammengesetzt werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Für weitere Details und Beispiele siehe den [Leitfaden zu Masking-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask` Kurzschreibweise akzeptiert eine Komma-separierte Liste von Maskenschichten. Die Syntax für jede Schicht kann die folgenden Werte enthalten:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image` Wert weglassen, wird standardmäßig ein transparentes schwarzes Bild verwendet, das das Element in dieser Schicht vollständig ausblendet.

Die `mask` Kurzschreibweise setzt Werte für alle `mask-*` Eigenschaften. Jede Komponente, die innerhalb einer Schicht nicht deklariert wird, verwendet den Anfangswert. Die `mask` Eigenschaft setzt auch alle `mask-border-*` Eigenschaften auf ihre Anfangswerte zurück. Eine `mask`-Deklaration, die nur einen `mask-image` Wert umfasst, setzt implizit die folgenden:

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

Solange eine Komma-separierte {{cssxref("mask-image")}}-Eigenschaftsdeklaration mindestens einen Wert außer `none` enthält, wird für jeden Wert in der Deklaration eine Maskenschicht erstellt, selbst für die `none` Werte. Dieses Verhalten gilt, egal ob Sie die `mask-image` Eigenschaft oder die `mask` Kurzschreibweise verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können sie unter Verwendung eines [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), eines Rasterbildes (wie PNGs) oder eines SVG {{svgelement("mask")}} Elements definieren.

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

Der [einführende Leitfaden zum Masking](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor.

Die `mask-image` Eigenschaft ist analog zur {{cssxref("background-image")}} Eigenschaft. Genauso wie bei der `background-image` Eigenschaft werden, um mehrere Maskenbilder einzuschließen, die Bildwerte durch Kommas getrennt.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrfachbild-Deklaration erstellt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, außer die `multiple-gradient-mask` Deklaration, die zwei erstellt.

### Maskenschichten und das `none` Schlüsselwort

Wenn `none` der einzige Wert der `mask-image` Eigenschaft ist, werden keine Maskenschichten erstellt und es findet kein Masking statt.

```css
.no-masks {
  mask-image: none;
}
```

Ebenso, wenn Sie die `mask` Kurzschreibweise verwenden, tritt kein Masking auf, wenn kein `mask-image` Wert vorhanden ist außer `none`. Wenn eine der folgenden deklariert wird, werden keine Maskenschichten erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls gilt, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, wird für jeden Wert in der durch Kommas getrennten Liste der Werte eine Maskenschicht erstellt, selbst wenn der `mask-image` Wert in einem Wert der durch Kommas getrennten Liste ausgelassen oder explizit auf `none` gesetzt wird. Mit anderen Worten, für jeden gültigen kommagetrennten Wert wird eine Schicht erstellt, es sei denn, die gesamte Eigenschaft wird auf `none` aufgelöst.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` haben fünf Maskenschichten:

Wir können die Schichten auch mit der `mask` Kurzschreibweise erstellen:

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Wenn ein Wert in der kommagetrennten Liste von Werten ein leeres Bild ist, nicht heruntergeladen werden kann, auf ein `<mask>` Element verweist, das nicht existiert, oder anderweitig nicht angezeigt werden kann (oder auf `none` eingestellt ist), zählt es trotzdem als Maskenbildschicht, was zu einem transparenten schwarzen Maskenbild führt, das keinen visuellen Effekt hat. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Es findet kein Masking statt, wenn die gesamte Eigenschaft auf `none` aufgelöst wird, was das Element vollständig sichtbar macht. Auf der anderen Seite, wenn der Wert mehrere Schichten beinhaltet und mindestens eine nicht `none` ist, decken die `none` Schichten keinen Teil des Elements auf (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel wird der Wert nicht auf `none` aufgelöst, aber weil alle nicht `none` Bilder ungültig sind, findet Masking statt und das Element wird vollständig verborgen.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenschichten `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch einzelne `mask-*` Eigenschaften nach oder mit größerer Spezifität als eine `mask` Deklaration verwenden.

Die `mask-*` Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` fest oder erlaubt es, den Modus der Quelle zu verwenden, indem der Wert auf `match-source` gesetzt wird. Der Standard ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}} Eigenschaft mit einer Syntax, die der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/background-position#position) folgt, setzt die anfängliche Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, definiert durch die `mask-origin` Eigenschaft. Sie können ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte angeben. Der Standard `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke der Ursprungsbox der Maske.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}} Eigenschaft, spezifiziert es den _Maskenpositionierungsbereich_, welcher der Ursprungsboxbereich der Maske ist, innerhalb dessen ein Maskenbild positioniert wird. Zum Beispiel, wenn `mask-position` auf `top left` steht, definiert diese Eigenschaft, ob es relativ zur äußeren Kante des Randes, der äußeren Kante des Innenabstands oder der äußeren Kante des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}} Eigenschaft, bestimmt es den Bereich des Elements, der von einer Maske betroffen ist. Es definiert, ob der Maskenmalbereich die Rand-, Innenabstands- oder Inhaltsbox ist, und beschränkt den bemalten Inhalt des Elements auf diesen Bereich. Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht ein SVG `<mask>` Element ist, hat die `mask-clip` Eigenschaft keine Auswirkung.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}} Eigenschaft, wird dies verwendet, um die Maskenschicht zu skalieren. Werte können ein einzelnes Stichwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder ein Prozentsatz, oder zwei durch Leerzeichen getrennte Werte sein – jede von ihnen kann eine Länge, ein Prozentsatz oder `auto` sein. Der Standard ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}} Eigenschaft, definiert dies, wie das Maskenbild nach dem Skalieren und Positionieren gekachelt wird.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunter liegenden Maskenschichten kombiniert wird. Jede Maskenschicht wird entweder hinzugefügt, subtrahiert, eingeschlossen oder von den zuvor zusammengesetzten Maskenschichten darunter ausgeschlossen. Ähnlich wie `mask-mode`, gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*` Wert in einer Komma-separierten Liste von `mask` Komponenteneigenschaften gilt für eine separate Maskenschicht. Wie bereits erwähnt, kann ein Element mehrere Maskenschichten haben – die Anzahl der Schichten wird durch die Anzahl der Komma-getrennten Werte in den `mask-image` oder `mask` Eigenschaften bestimmt. Jeder `mask-*` Wert wird einer Maskenschicht entsprechend zugewiesen. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenschichten, werden alle überschüssigen Werte ignoriert. Wenn die Maskenkomponenteneigenschaft weniger Werte hat als die Anzahl der Maskenschichten, werden die `mask-*` Werte wiederholt.

Um mehr über diese einzelnen Eigenschaften zu erfahren, siehe [CSS mask properties](/de/docs/Web/CSS/CSS_masking/Mask_properties).

## Reihenfolge der Kurzschreibkomponenteneigenschaften

Im Allgemeinen ist die Reihenfolge der Eigenschaften flexibel, aber es gibt ein paar Eigenheiten und Ausnahmen.

### Reihenfolgeregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, der in der Syntax als `<origin>` aufgeführt ist, kommt vor den `mask-clip` Werten, die in der Syntax als `<clip>` aufgeführt sind.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box) Schlüsselwörter. Zusätzlich akzeptiert `mask-clip` auch `no-clip`. Aus diesem Grund ist die Reihenfolge dieser beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem `no-clip` Schlüsselwort vorhanden ist, dann legt das `<geometry-box>` den `mask-origin` Wert fest und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und es kein `no-clip` Schlüsselwort gibt, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge wieder keine Rolle.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, legt der erste die `mask-origin` Komponente fest und der zweite die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Die falsche Reihenfolge für die `mask-origin` und `mask-clip` Werte kann das Erscheinungsbild beeinträchtigen, wird aber nicht zum Fehler der Deklaration führen.

### Reihenfolgeregeln für `mask-size` und `mask-position`

Sie haben möglicherweise einen Schrägstrich zwischen `mask-position` und `mask-size` bemerkt, der in der Syntax als `<position>` und `<size>` aufgeführt ist. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein einzelnes oder ein Paar von {{cssxref("length-percentage")}} Werten vorhanden ist, wird es die Position des Bildes anstatt der Größe definieren. Wenn Sie sowohl eine Position als auch eine Größe in einer Maskenschicht ohne den Schrägstrich dazwischen einschließen, wird die gesamte Deklaration ungültig.

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>` Werten vorhanden ist, setzt es die `mask-position` Eigenschaft, und die `mask-size` wird `auto` sein. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen, und die Werte müssen durch einen Schrägstrich (`/`) getrennt werden. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

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

Um eine `mask-size` in einer Maskenschicht mit der `mask` Kurzschreibweise einzuschließen, müssen Sie einen `mask-position` Wert mit einem unmittelbar davor stehenden Schrägstrich einschließen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einbeziehen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS mask properties](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
