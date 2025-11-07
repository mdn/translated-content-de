---
title: Deklaration mehrerer Masken
short-title: Mehrere Masken
slug: Web/CSS/Guides/Masking/Multiple_masks
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, Bilder als Masken zu verwenden, um zu definieren, welche Abschnitte eines Elements vollständig sichtbar oder halb undurchsichtig sind. Die CSS-Maske deckt selektiv Teile des Elements auf oder verbirgt sie, basierend auf dem Alphakanal und in einigen Fällen auf der Helligkeit der Farben der angewendeten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die auf Maskenbällen getragen werden. Bei einem Maskenball wird das Gesicht des Trägers dort verborgen, wo die Maske undurchsichtig ist, und sichtbar, wo Sie durch die Maske sehen können. In CSS decken die Bereiche, in denen die zusammengesetzten Maskenschichten vollständig undurchsichtig sind, das Element auf, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden besprechen wir das Konzept der Maskenschichten und wie mehrere Maskenschichten mit der {{cssxref("mask")}} Kurzschreibweise deklariert werden.

## Verständnis von Maskenschichten

Sie können die CSS-Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenschichten bestehen. Sie definieren mehrere Schichten, indem Sie in der {{cssxref("mask")}} Kurzschreibweise oder der {{cssxref("mask-image")}} Eigenschaft kommagetrennte Werte verwenden – selbst ein Wert, der auf `none` gesetzt ist, zählt als Schicht.

Jede Maskenschicht kann ein [Maskenbild](/de/docs/Web/CSS/Reference/Properties/mask-image) enthalten, das relativ zur Ursprungsbox der Maske positioniert ist. Das Bild kann dimensioniert, wiederholt und zugeschnitten werden. Wenn Sie mehr als ein Maskenbild einschließen, können Sie die Art und Weise definieren, wie die Maskenschichten zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Weitere Details und Beispiele finden Sie im [Leitfaden zu Maskierungseigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask` Kurzschreibweise akzeptiert eine kommagetrennte Liste von Maskenschichten. Die Syntax für jede Schicht kann die folgenden Werte umfassen:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image` Wert weglassen, standardisiert er auf ein transparentes schwarzes Bild, das das Element in dieser Schicht vollständig verbirgt.

Die `mask` Kurzschreibweise legt Werte für alle `mask-*` Eigenschaften fest. Jede nicht deklarierte Komponente innerhalb einer Schicht erhält ihren Initialwert. Die `mask` Eigenschaft setzt auch alle `mask-border-*` Eigenschaften auf ihre Anfangswerte zurück. Eine `mask` Deklaration, die nur einen `mask-image` Wert enthält, setzt implizit folgendes:

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

### Definition von Maskenschichten mit `mask-image`

Solange eine kommagetrennte {{cssxref("mask-image")}} Eigenschaftsdeklaration mindestens einen Wert enthält, der nicht `none` ist, wird für jeden Wert in der Deklaration eine Maskenschicht erstellt, selbst für die `none` Werte. Dieses Verhalten gilt, ob Sie die `mask-image` Eigenschaft oder die `mask` Kurzschreibweise verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können sie mit einem [CSS-Verlauf](/de/docs/Web/CSS/Guides/Images/Using_gradients), einem Rasterbild (wie PNGs) oder einem SVG {{svgelement("mask")}} Element definieren.

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

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/Guides/Masking) führt die verschiedenen Typen von Maskenbildern und ihre Modi ein.

Die `mask-image` Eigenschaft ist analog zur {{cssxref("background-image")}} Eigenschaft. Genau wie bei der `background-image` Eigenschaft werden, um mehrere Maskenbilder einzuschließen, die Bildwerte durch Kommas getrennt.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrfachbilddeklaration erstellt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, mit Ausnahme der `multiple-gradient-mask` Deklaration, die zwei erstellt.

### Maskenschichten und das Schlüsselwort `none`

Wenn `none` der einzige Wert der `mask-image` Eigenschaft ist, werden keine Maskenschichten erstellt und es findet keine Maskierung statt.

```css
.no-masks {
  mask-image: none;
}
```

Ähnlich verhält es sich bei der Verwendung der `mask` Kurzschreibweise: Wenn kein `mask-image` Wert außer `none` vorhanden ist, findet keine Maskierung statt. Wenn eines der folgenden deklariert wird, werden keine Maskenschichten erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls, solange eine `mask-image` deklariert ist, die nicht auf `none` gesetzt ist, wird für jeden Wert in der kommagetrennten Liste von Werten eine Maskenschicht erstellt, selbst wenn der `mask-image` Wert in einem Wert der kommagetrennten Liste weggelassen oder explizit auf `none` gesetzt wird. Mit anderen Worten, für jeden gültigen kommagetrennten Wert wird eine Schicht erstellt, es sei denn, die gesamte Eigenschaft löst sich zu `none` auf.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` werden fünf Maskenschichten haben:

Wir können auch die Schichten mit der `mask` Kurzschreibweise erstellen:

```css
.masked-element {
  mask:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Wenn ein Wert in der kommagetrennten Liste von Werten ein leeres Bild ist, das Herunterladen fehlschlägt, auf ein nicht existierendes `<mask>` Element verweist oder anderweitig nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt es immer noch als eine Maskenbildschicht und rendert ein transparentes schwarzes Maskenbild, das keinen visuellen Effekt hat. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Es findet keine Maskierung statt, wenn die gesamte Eigenschaft sich zu `none` auflöst, was das Element vollständig sichtbar macht. Andererseits, wenn der Wert mehrere Schichten umfasst und mindestens eine nicht `none` ist, decken die `none` Schichten keinen Teil des Elements auf (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel löst sich der Wert nicht zu `none` auf; aber da alle nicht-`none` Bilder ungültig sind, erfolgt eine Maskierung, und das Element wird vollständig verborgen.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

### Wie Maskenschichten `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch einzelne `mask-*` Eigenschaften nach oder mit größerer Spezifität als eine `mask` Deklaration verwenden.

Die `mask-*` Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` fest oder lässt ihn auf den Modus der Quelle standardisieren, indem der Wert auf `match-source` gesetzt wird. Der Standard ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}} Eigenschaft mit einer Syntax, die dem [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position) folgt, setzt sie die Anfangsposition des Maskenbildes relativ zur Ursprungsbox der Maske, die durch die `mask-origin` Eigenschaft definiert ist. Sie können einen, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte angeben. Die Standardeinstellung `0% 0%` positioniert die obere linke Ecke der Maske in der oberen linken Ecke der Ursprungsbox.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}} Eigenschaft gibt sie den _Maskenpositionierungsbereich_ an, der die Ursprungsbox der Maske ist, innerhalb derer ein Maskenbild positioniert wird. Zum Beispiel, wenn die `mask-position` `oben links` ist, definiert diese Eigenschaft, ob dies relativ zur äußeren Grenze des Rands, der äußeren Grenze der Auffüllung oder der äußeren Grenze des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}} Eigenschaft bestimmt sie den Bereich des Elements, der von einer Maske betroffen ist. Sie definiert, ob der Maskenmalbereich die Randbox, die Auffüllungsbox oder die Inhaltsbox ist und beschränkt den bemalten Inhalt des Elements auf diesen Bereich. Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht ein SVG `<mask>` Element ist, hat die `mask-clip` Eigenschaft keine Wirkung.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}} Eigenschaft, wird diese verwendet, um die Maskenschicht zu dimensionieren. Die Werte können ein einzelnes Schlüsselwort (`cover`, `contain`, oder `auto`), eine einzelne Länge oder Prozentsatz, oder zwei durch Leerzeichen getrennte Werte sein – von denen jeder eine Länge, Prozentsatz oder `auto` sein kann. Die Standardeinstellung ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}} Eigenschaft, definiert sie, wie das Maskenbild gekachelt wird, nachdem es dimensioniert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunter liegenden Maskenschichten kombiniert wird. Jede Maskenschicht wird entweder zu den zuvor zusammengesetzten Maskenschichten darunter hinzugefügt, von ihnen abgezogen, mit ihnen einbezogen oder von ihnen ausgeschlossen. Ähnlich wie `mask-mode` gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*` Wert in einer kommagetrennten Liste von `mask` Komponenteneigenschaften bezieht sich auf eine separate Maskenschicht. Wie bereits gesagt, kann ein Element mehrere angewendete Maskenschichten haben – die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte in den `mask-image` oder `mask` Eigenschaften bestimmt. Jeder `mask-*` Wert wird mit einer Maskenschicht in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenschichten, werden alle überzähligen Werte ignoriert. Wenn die Maskenkomponenteigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die `mask-*` Werte wiederholt.

Um mehr über diese einzelnen Eigenschaften zu erfahren, siehe [CSS Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties).

## Reihenfolge der Kurzschreibkomponenteneigenschaften

Meistens ist die Reihenfolge der Eigenschaften flexibel, es gibt jedoch einige Besonderheiten und Ausnahmen.

### Reihenfolgeregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, in der Syntax als `<origin>` aufgeführt, kommt vor den `mask-clip` Werten, die in der Syntax als `<clip>` aufgeführt sind.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box) Schlüsselwörter. Darüber hinaus akzeptiert `mask-clip` auch `no-clip`. Daher ist die Reihenfolge dieser beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem `no-clip` Schlüsselwort vorhanden ist, setzt das `<geometry-box>` den `mask-origin` Wert und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und es kein `no-clip` Schlüsselwort gibt, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge wiederum keine Rolle.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, setzt der erste die `mask-origin` Komponente und der zweite die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Das Festlegen der falschen Reihenfolge für die `mask-origin` und `mask-clip` Werte kann das Erscheinungsbild beeinflussen, führt aber nicht dazu, dass die Deklaration fehlschlägt.

### Reihenfolgeregeln für `mask-size` und `mask-position`

Vielleicht haben Sie den Schrägstrich zwischen `mask-position` und `mask-size` bemerkt, in der Syntax als `<position>` und `<size>` aufgeführt. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder ein Paar von {{cssxref("length-percentage")}} Werten vorhanden ist, wird es die Position des Bildes anstelle der Größe definieren. Das Einfügen sowohl einer Position als auch einer Größe in eine Maskenschicht ohne den Schrägstrich zwischen den beiden macht die gesamte Deklaration ungültig.

```css
mask:
  url("star.svg") bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url("circle.svg") 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>` Werten vorhanden ist, wird es die `mask-position` Eigenschaft setzen, und die `mask-size` wird `auto` sein. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen, und die Werte müssen durch einen Schrägstrich (`/`) getrennt werden. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

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

Um eine `mask-size` in einer Maskenschicht mit der `mask` Kurzschreibweise einzuschließen, müssen Sie einen `mask-position` Wert mit einem Schrägstrich unmittelbar davor einfügen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einschließen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
