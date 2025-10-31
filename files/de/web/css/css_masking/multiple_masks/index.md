---
title: Deklarieren von mehreren Masken
slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, Bilder als Masken zu verwenden, um zu definieren, welche Teile eines Elements vollständig sichtbar oder halbtransparent sind. Die CSS-Maske zeigt oder verbirgt selektiv Teile des Elements basierend auf dem Alpha-Kanal und in einigen Fällen der Helligkeit der Farben der angewandten Maskenbilder.

CSS-Masken sind das Gegenteil von Masken, die bei Maskenbällen getragen werden. Bei einem Maskenball wird das Gesicht des Trägers dort versteckt, wo die Maske undurchsichtig ist, und sichtbar, wo man durch die Maske sehen kann. In CSS offenbaren die Bereiche, in denen die zusammengefügten Maskenschichten vollständig undurchsichtig sind, das Element, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten. In diesem Leitfaden diskutieren wir das Konzept der Maskenschichten und wie man mehrere Maskenschichten unter Verwendung der {{cssxref("mask")}} Kurzschreibweise deklariert.

## Verständnis von Maskenschichten

Sie können CSS-Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengefügten Maskenschichten bestehen. Sie definieren mehrere Schichten mit kommagetrennten Werten in der {{cssxref("mask")}} Kurzschreibweise oder der {{cssxref("mask-image")}} Eigenschaft – selbst ein auf `none` gesetzter Wert zählt als Schicht.

Jede Maskenschicht kann ein [Maskenbild](/de/docs/Web/CSS/Reference/Properties/mask-image) enthalten, das relativ zur Ursprungsbox der Maske positioniert wird. Das Bild kann skaliert, wiederholt und ausgeschnitten werden. Wenn Sie mehr als ein Maskenbild einfügen, können Sie definieren, wie die Maskenschichten zusammengefügt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz eingeführt. Für weitere Details und Beispiele siehe den [Leitfaden zu Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).)

### Syntax für mehrere Maskenschichten

Die `mask`-Kurzschreibweise akzeptiert eine kommagetrennte Liste von Maskenschichten. Die Syntax für jede Schicht kann die folgenden Werte enthalten:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Komponenten in einer Maskenschicht sind optional. Wenn Sie jedoch den `mask-image`-Wert weglassen, wird ein transparentes schwarzes Bild als Standard verwendet, das das Element in dieser Schicht vollständig ausblendet.

Die `mask`-Kurzschreibweise setzt Werte für alle `mask-*` Eigenschaften. Jede Komponente, die innerhalb einer Schicht nicht deklariert wird, wird auf ihren Anfangswert zurückgesetzt. Die `mask` Eigenschaft setzt auch alle `mask-border-*` Eigenschaften auf ihre Anfangswerte zurück. Eine `mask` Erklärung, die nur einen `mask-image`-Wert enthält, setzt implizit Folgendes:

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

Solange eine kommagetrennte {{cssxref("mask-image")}} Eigenschaftserklärung mindestens einen anderen Wert als `none` enthält, wird eine Maskenschicht für jeden Wert in der Erklärung erstellt, selbst für die `none`-Werte. Dieses Verhalten gilt unabhängig davon, ob Sie die `mask-image` Eigenschaft oder die `mask` Kurzschreibweise verwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Sie können sie mit einem [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), einem Rasterbild (wie PNGs) oder einem SVG {{svgelement("mask")}} Element definieren.

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

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor.

Die `mask-image` Eigenschaft ist analog zur {{cssxref("background-image")}} Eigenschaft. Ebenso wie bei der `background-image` Eigenschaft, um mehrere Maskenbilder einzufügen, werden die Bildwerte durch Kommas getrennt.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Mehrfachbild-Erklärung erstellt eine Maskenschicht. Alle Beispiele in diesem Abschnitt erstellen eine Maskenschicht, mit Ausnahme der `multiple-gradient-mask` Erklärung, die zwei erstellt.

### Maskenschichten und das Schlüsselwort `none`

Wenn `none` der einzige Wert der `mask-image` Eigenschaft ist, werden keine Maskenschichten erstellt und es findet keine Maskierung statt.

```css
.no-masks {
  mask-image: none;
}
```

Ebenso, wenn Sie die `mask` Kurzschreibweise verwenden, wird keine Maskierung vorgenommen, wenn kein `mask-image` Wert außer `none` vorhanden ist. Wenn einer der folgenden deklariert wird, werden keine Maskenschichten erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, wird für jeden Wert in der kommagetrennten Werteliste eine Maskenschicht erstellt, selbst wenn der `mask-image` Wert aus einem Wert in der kommagetrennten Liste ausgelassen oder explizit auf `none` gesetzt wird. Mit anderen Worten, eine Schicht wird für jeden gültigen kommagetrennten Wert erstellt, es sei denn, die gesamte Eigenschaft wird auf `none` aufgelöst.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht, wenn auch eine transparente schwarze Bildschicht. Alle Elemente mit der Klasse `masked-element` werden fünf Maskenschichten haben:

Wir können die Schichten auch mit der `mask` Kurzschreibweise erstellen:

```css
.masked-element {
  mask:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Wenn ein Wert in der kommagetrennten Liste von Werten ein leeres Bild ist, nicht heruntergeladen werden kann, auf ein `<mask>` Element verweist, das nicht existiert, oder anderweitig nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt er dennoch als Maskenbildschicht, was ein transparentes schwarzes Maskenbild rendert, das keinen visuellen Effekt hat. Wenn alle Werte dies tun, wird das Element vollständig verborgen.

Es findet keine Maskierung statt, wenn die gesamte Eigenschaft auf `none` aufgelöst wird, wodurch das Element vollständig sichtbar wird. Auf der anderen Seite, wenn der Wert mehrere Schichten enthält und mindestens eine nicht `none` ist, offenbaren die `none` Schichten keinen Teil des Elements (oder machen keinen Teil des Elements sichtbar). In diesem Beispiel wird der Wert nicht auf `none` aufgelöst; aber weil alle nicht-`none` Bilder ungültig sind, findet eine Maskierung statt und das Element wird vollständig ausgeblendet.

Ein berechneter Wert, der nicht `none` ist, erstellt einen [CSS-Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### Wie Maskenschichten die `mask-*` Eigenschaften beeinflussen

Die Anzahl der Maskenschichten ist wichtig, wenn Sie auch einzelne `mask-*` Eigenschaften nach oder mit mehr Spezifität als eine `mask` Erklärung verwenden.

Die `mask-*` Eigenschaften umfassen:

- {{cssxref("mask-mode")}}: Setzt den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` oder ermöglicht es, sie auf den Modus der Quelle durch Setzen des Wertes auf `match-source` zu standardisieren. Der Standardwert ist `match-source`.

- {{cssxref("mask-position")}}: Analog zur {{cssxref("background-position")}} Eigenschaft mit einer Syntax, die der [`background-position`'s `<position>`-Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position) folgt, setzt sie die Anfangsposition des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, definiert durch die `mask-origin` Eigenschaft. Sie können ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte spezifizieren. Der Standardwert `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke der Ursprungsbox der Maske.

- {{cssxref("mask-origin")}}: Analog zur {{cssxref("background-origin")}} Eigenschaft, gibt sie den _Maskenpositionsbereich_ an, der der Bereich der Ursprungsbox der Maske ist, innerhalb dessen ein Maskenbild positioniert wird. Beispielsweise, wenn die `mask-position` `oben links` ist, definiert diese Eigenschaft, ob dies relativ zur Außenkante des Rahmens, der Außenkante des Innenabstands oder der Außenkante des Inhalts ist.

- {{cssxref("mask-clip")}}: Analog zur {{cssxref("background-clip")}} Eigenschaft, bestimmt sie den Bereich des Elements, der von einer Maske betroffen ist. Sie definiert, ob der zu bemalende Bereich die Rahmen-, Innenrand- oder Inhaltsbox ist, indem der gemalte Inhalt des Elements auf diesen Bereich beschränkt wird. Wenn die `{{cssxref("mask-image")}}` Quelle der Maskenschicht ein SVG-`<mask>` Element ist, hat die `mask-clip` Eigenschaft keine Wirkung.

- {{cssxref("mask-size")}}: Analog zur {{cssxref("background-size")}} Eigenschaft, wird diese verwendet, um die Maskenschicht zu skalieren. Werte können ein einzelnes Schlüsselwort (`cover`, `contain` oder `auto`), eine einzelne Länge oder ein Prozentwert oder zwei durch Leerzeichen getrennte Werte sein – jeder davon kann eine Länge, ein Prozentwert oder `auto` sein. Der Standardwert ist `auto`.

- {{cssxref("mask-repeat")}}: Analog zur {{cssxref("background-repeat")}} Eigenschaft, definiert sie, wie das Bild der Maskenschicht gekachelt wird, nachdem es skaliert und positioniert wurde.

- {{cssxref("mask-composite")}}: Definiert, wie eine Maske mit den darunter liegenden Maskenschichten kombiniert wird. Jede Maskenschicht wird zu den zuvor zusammengefügten Maskenschichten darunter entweder hinzugefügt, abgezogen, eingeschlossen oder ausgeschlossen. Ähnlich wie bei `mask-mode`, gibt es keine analoge `background-*` Eigenschaft.

Jeder `mask-*` Wert in einer kommagetrennten Liste von `mask` Komponenteneigenschaften wird auf eine separate Maskenschicht angewendet. Wie bereits erwähnt, kann ein Element mehrere Maskenschichten haben – die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte in den `mask-image` oder `mask` Eigenschaften bestimmt. Jeder `mask-*` Wert wird in der Reihenfolge mit einer Maskenschicht abgeglichen. Wenn die Anzahl der Werte in der `mask-*` Eigenschaft größer ist als die Anzahl der Maskenschichten, werden alle überschüssigen Werte ignoriert. Wenn die Maskenkomponenteneigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die `mask-*` Werte wiederholt.

Um mehr über diese einzelnen Eigenschaften zu erfahren, siehe [CSS Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties).

## Reihenfolge der Kurzschreibkomponenteneigenschaften

In den meisten Fällen ist die Reihenfolge der Eigenschaften flexibel, aber es gibt ein paar Besonderheiten und Ausnahmen.

### Reihenfolgeregeln für `mask-origin` und `mask-clip`

Der `mask-origin` Wert, in der Syntax als `<origin>` aufgeführt, kommt vor den `mask-clip` Werten, in der Syntax als `<clip>` aufgeführt.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box) Schlüsselwörter. Zusätzlich akzeptiert `mask-clip` auch `no-clip`. Aus diesem Grund ist die Reihenfolge dieser beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>` Wert zusammen mit dem `no-clip` Schlüsselwort vorhanden ist, dann setzt das `<geometry-box>` den `mask-origin` Wert, und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall ist die Reihenfolge unwichtig.

- Wenn nur ein `<geometry-box>` Wert vorhanden ist und kein `no-clip` Schlüsselwort, werden sowohl die `mask-origin` als auch die `mask-clip` Komponenten auf diesen Wert gesetzt. Da es nur einen Wert gibt, ist die Reihenfolge wieder bedeutungslos.

- Wenn zwei `<geometry-box>` Werte vorhanden sind, setzt der erste die `mask-origin` Komponente und der zweite die `mask-clip` Komponente. In diesem Fall ist die Reihenfolge sehr wichtig.

Das Festlegen der falschen Reihenfolge für die `mask-origin` und `mask-clip` Werte kann das Erscheinungsbild beeinflussen, führt jedoch nicht dazu, dass die Erklärung fehlschlägt.

### Reihenfolgeregeln für `mask-size` und `mask-position`

Sie haben möglicherweise einen Schrägstrich zwischen `mask-position` und `mask-size` bemerkt, in der Syntax als `<position>` und `<size>` aufgeführt. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein Wert oder ein Paar von {{cssxref("length-percentage")}} Werten vorhanden ist, wird es die Position des Bildes angeben und nicht die Größe. Das Einschließen sowohl einer Position als auch einer Größe in einer Maskenschicht ohne den Schrägstrich zwischen den beiden führt zur Ungültigkeit der gesamten Erklärung.

```css
mask:
  url("star.svg") bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url("circle.svg") 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn ein einzelnes Paar von `<length-percentage>` Werten vorhanden ist, setzt es die `mask-position` Eigenschaft und die `mask-size` wird auf `auto` gesetzt. Wenn eine Schicht sowohl eine `mask-size` als auch eine `mask-position` enthält, muss der `mask-size` Eigenschaftswert nach dem `mask-position` Eigenschaftswert kommen und die Werte müssen durch einen Schrägstrich (`/`) getrennt sein. Der Schrägstrich ist erforderlich, selbst wenn die `mask-size` auf einen Wert gesetzt ist, der kein gültiger `mask-position` Wert ist.

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

Um eine `mask-size` in einer Maskenschicht unter Verwendung der `mask` Kurzschreibweise einzuschließen, müssen Sie einen `mask-position` Wert mit einem Schrägstrich unmittelbar davor einschließen.

> [!WARNING]
> Wenn Sie eine Größe in einer Maskenschicht einschließen, aber den Schrägstrich nach der Position vergessen, wird die gesamte Erklärung ungültig.

## Siehe auch

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
