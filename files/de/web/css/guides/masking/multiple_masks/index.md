---
title: Mehrere Masken deklarieren
short-title: Mehrere Masken
slug: Web/CSS/Guides/Masking/Multiple_masks
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

CSS-Maskierung ist eine Technik, bei der Bilder als Masken verwendet werden, um festzulegen, welche Bereiche eines Elements vollständig sichtbar oder teilweise transparent sind. Die CSS-Maske zeigt oder verbirgt Teile des Elements selektiv anhand des Alphakanals und in manchen Fällen anhand der Helligkeit der Farben der verwendeten Maskenbilder.

CSS-Masken funktionieren umgekehrt wie Masken auf einem Maskenball. Dort ist das Gesicht einer Person an den undurchsichtigen Stellen der Maske verborgen und dort sichtbar, wo man durch die Maske hindurchsehen kann. In CSS machen vollständig undurchsichtige Bereiche der zusammengesetzten Maskenebenen das Element sichtbar, während transparente Bereiche es verbergen.

CSS-Masken bestehen aus einer oder mehreren Maskenebenen. In diesem Leitfaden erläutern wir das Konzept der Maskenebenen und zeigen, wie Sie mit der Kurzschreibweise-Eigenschaft {{cssxref("mask")}} mehrere Maskenebenen deklarieren.

## Maskenebenen verstehen

Sie können CSS-Maskierung auf alle HTML-Elemente und die meisten SVG-Elemente anwenden. Eine Maske kann aus einer oder mehreren zusammengesetzten Maskenebenen bestehen. Mehrere Ebenen definieren Sie durch kommagetrennte Werte in der Kurzschreibweise-Eigenschaft {{cssxref("mask")}} oder der Eigenschaft {{cssxref("mask-image")}} – selbst ein Wert von `none` zählt als Ebene.

Jede Maskenebene kann ein [Maskenbild](/de/docs/Web/CSS/Reference/Properties/mask-image) enthalten, das relativ zum Ursprungsbereich der Maske positioniert wird. Das Bild kann skaliert, wiederholt und beschnitten werden. Wenn Sie mehr als ein Maskenbild einbinden, können Sie festlegen, wie die Maskenebenen zusammengesetzt oder kombiniert werden. (Diese Funktionen werden in diesem Leitfaden kurz vorgestellt. Weitere Einzelheiten und Beispiele finden Sie im [Leitfaden zu Maskierungseigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties).)

### Syntax für mehrere Maskenebenen

Die Kurzschreibweise-Eigenschaft `mask` akzeptiert eine kommagetrennte Liste von Maskenebenen. Die Syntax für jede Ebene kann die folgenden Werte enthalten:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Alle Bestandteile einer Maskenebene sind optional. Wenn Sie jedoch den Wert für `mask-image` weglassen, wird standardmäßig ein transparentes schwarzes Bild verwendet, das das Element in dieser Ebene vollständig verbirgt.

Die Kurzschreibweise-Deklaration `mask` legt Werte für alle `mask-*`-Eigenschaften fest. Jeder Bestandteil, der innerhalb einer Ebene nicht deklariert ist, erhält seinen Anfangswert. Die Eigenschaft `mask` setzt außerdem alle `mask-border-*`-Eigenschaften auf ihre Anfangswerte zurück. Eine `mask`-Deklaration, die nur einen `mask-image`-Wert enthält, legt implizit Folgendes fest:

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

### Maskenebenen mit `mask-image` definieren

Solange eine kommagetrennte Deklaration der Eigenschaft {{cssxref("mask-image")}} mindestens einen anderen Wert als `none` enthält, wird für jeden Wert in der Deklaration eine Maskenebene erstellt – auch für `none`-Werte. Dieses Verhalten gilt sowohl bei Verwendung der Eigenschaft `mask-image` als auch bei Verwendung der Kurzschreibweise `mask`. Die Maskenbilder können Gradienten, Bilder oder SVG-Quellen sein. Sie können sie mit einem [CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients), einem Rasterbild (beispielsweise einer PNG-Datei) oder einem SVG-Element {{svgelement("mask")}} definieren.

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

Der [Einführungsleitfaden zur Maskierung](/de/docs/Web/CSS/Guides/Masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor.

Die Eigenschaft `mask-image` ist mit der Eigenschaft {{cssxref("background-image")}} vergleichbar. Wie bei `background-image` werden die Bildwerte durch Kommas getrennt, wenn mehrere Maskenbilder angegeben werden.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Jedes Maskenbild in einer Deklaration mit mehreren Bildern erzeugt eine Maskenebene. Alle Beispiele in diesem Abschnitt erzeugen eine Maskenebene, mit Ausnahme der Deklaration `multiple-gradient-mask`, die zwei erzeugt.

### Maskenebenen und das Schlüsselwort `none`

Wenn `none` der einzige Wert der Eigenschaft `mask-image` ist, werden keine Maskenebenen erstellt und es findet keine Maskierung statt.

```css
.no-masks {
  mask-image: none;
}
```

Ebenso findet bei Verwendung der Kurzschreibweise `mask` keine Maskierung statt, wenn außer `none` kein Wert für `mask-image` vorhanden ist. Wird eine der folgenden Deklarationen verwendet, werden keine Maskenebenen erstellt und nichts wird verborgen:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Andernfalls wird, solange ein `mask-image` deklariert ist, das nicht auf `none` gesetzt ist, für jeden Wert in der kommagetrennten Werteliste eine Maskenebene erstellt. Das gilt auch dann, wenn in einem Eintrag der Liste der `mask-image`-Wert fehlt oder ausdrücklich auf `none` gesetzt ist. Anders ausgedrückt: Für jeden gültigen kommagetrennten Wert wird eine Ebene erstellt, sofern die gesamte Eigenschaft nicht zu `none` aufgelöst wird.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erzeugt eine Maskenebene, allerdings eine Ebene mit einem transparenten schwarzen Bild. Alle Elemente mit der Klasse `masked-element` haben fünf Maskenebenen:

Wir können die Ebenen auch mit der Kurzschreibweise `mask` erstellen:

```css
.masked-element {
  mask:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Wenn ein Wert in der kommagetrennten Werteliste ein leeres Bild ist, nicht heruntergeladen werden kann, auf ein nicht vorhandenes `<mask>`-Element verweist oder aus einem anderen Grund nicht angezeigt werden kann (oder auf `none` gesetzt ist), zählt er dennoch als Maskenbildebene. Dabei wird ein transparentes schwarzes Maskenbild gerendert, das für sich genommen keine Bereiche des Elements sichtbar macht. Wenn dies auf alle Werte zutrifft, wird das Element vollständig verborgen.

Wenn die gesamte Eigenschaft zu `none` aufgelöst wird, findet keine Maskierung statt und das Element ist vollständig sichtbar. Enthält der Wert hingegen mehrere Ebenen und ist mindestens eine davon nicht `none`, machen die `none`-Ebenen keinen Teil des Elements sichtbar. In diesem Beispiel wird der Wert nicht zu `none` aufgelöst. Da jedoch alle Bilder außer `none` ungültig sind, findet eine Maskierung statt und das Element wird vollständig verborgen.

Ein berechneter Wert ungleich `none` erzeugt einen [CSS-Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

### Wie sich Maskenebenen auf `mask-*`-Eigenschaften auswirken

Die Anzahl der Maskenebenen ist wichtig, wenn Sie einzelne `mask-*`-Eigenschaften nach einer `mask`-Deklaration oder mit höherer Spezifität als diese verwenden.

Zu den `mask-*`-Eigenschaften gehören:

- {{cssxref("mask-mode")}}: Legt den Modus jeder Maskenebene auf `alpha` oder `luminance` fest oder ermöglicht mit dem Wert `match-source`, den Modus der Quelle zu übernehmen. Der Standardwert ist `match-source`.

- {{cssxref("mask-position")}}: Diese Eigenschaft ist mit {{cssxref("background-position")}} vergleichbar und verwendet eine Syntax gemäß der [`<position>`-Syntax von `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#position). Sie legt die anfängliche Position des Maskenbilds relativ zum Ursprungsbereich der Maskenebene fest, der durch die Eigenschaft `mask-origin` definiert wird. Sie können einen, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte angeben. Der Standardwert `0% 0%` positioniert die obere linke Ecke der Maske an der oberen linken Ecke des Maskenursprungsbereichs.

- {{cssxref("mask-origin")}}: Diese Eigenschaft ist mit {{cssxref("background-origin")}} vergleichbar. Sie legt den _Positionierungsbereich der Maske_ fest, also den Bereich des Maskenursprungs, innerhalb dessen ein Maskenbild positioniert wird. Wenn beispielsweise `mask-position` auf `top left` gesetzt ist, bestimmt diese Eigenschaft, ob sich die Position auf die Außenkante des Rahmens, die Außenkante des Innenabstands oder die Außenkante des Inhalts bezieht.

- {{cssxref("mask-clip")}}: Diese Eigenschaft ist mit {{cssxref("background-clip")}} vergleichbar und bestimmt den Bereich des Elements, auf den sich eine Maske auswirkt. Sie legt fest, ob der Darstellungsbereich der Maske die Border-Box, Padding-Box oder Content-Box ist, und beschränkt den dargestellten Inhalt des Elements auf diesen Bereich. Wenn die Quelle für {{cssxref("mask-image")}} der Maskenebene ein SVG-Element `<mask>` ist, hat die Eigenschaft `mask-clip` keine Wirkung.

- {{cssxref("mask-size")}}: Diese Eigenschaft ist mit {{cssxref("background-size")}} vergleichbar und wird verwendet, um die Größe der Maskenebene festzulegen. Als Werte sind ein einzelnes Schlüsselwort (`cover`, `contain` oder `auto`), eine einzelne Längen- oder Prozentangabe oder zwei durch Leerzeichen getrennte Werte möglich, von denen jeder eine Längenangabe, eine Prozentangabe oder `auto` sein kann. Der Standardwert ist `auto`.

- {{cssxref("mask-repeat")}}: Diese Eigenschaft ist mit {{cssxref("background-repeat")}} vergleichbar und legt fest, wie das Bild der Maskenebene nach dem Skalieren und Positionieren gekachelt wird.

- {{cssxref("mask-composite")}}: Legt fest, wie eine Maske mit den darunterliegenden Maskenebenen kombiniert wird. Jede Maskenebene wird zu den zuvor zusammengesetzten Ebenen darunter hinzugefügt, von ihnen abgezogen, mit ihnen geschnitten oder von ihnen ausgeschlossen. Wie bei `mask-mode` gibt es keine entsprechende `background-*`-Eigenschaft.

Jeder `mask-*`-Wert in einer kommagetrennten Liste von `mask`-Bestandteileigenschaften gilt für eine eigene Maskenebene. Wie bereits erwähnt, können auf ein Element mehrere Maskenebenen angewendet werden. Die Anzahl der Ebenen wird durch die Anzahl der kommagetrennten Werte in den Eigenschaften `mask-image` oder `mask` bestimmt. Jeder `mask-*`-Wert wird der Reihe nach einer Maskenebene zugeordnet. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft größer ist als die Anzahl der Maskenebenen, werden überzählige Werte ignoriert. Enthält die Masken-Bestandteileigenschaft weniger Werte als Maskenebenen vorhanden sind, werden die `mask-*`-Werte wiederholt.

Weitere Informationen zu diesen einzelnen Eigenschaften finden Sie unter [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties).

## Reihenfolge der Bestandteile der Kurzschreibweise

Die Reihenfolge der Eigenschaften ist größtenteils flexibel, es gibt jedoch einige Besonderheiten und Ausnahmen.

### Regeln für die Reihenfolge von `mask-origin` und `mask-clip`

Der `mask-origin`-Wert, in der Syntax als `<origin>` aufgeführt, steht vor dem `mask-clip`-Wert, der in der Syntax als `<clip>` aufgeführt ist.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Beide akzeptieren [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box)-Schlüsselwörter. Darüber hinaus akzeptiert `mask-clip` auch `no-clip`. Daher ist die Reihenfolge der beiden wichtig, wenn Sie `mask-clip` auf einen anderen Wert als `no-clip` setzen möchten.

- Wenn ein `<geometry-box>`-Wert zusammen mit dem Schlüsselwort `no-clip` vorhanden ist, legt `<geometry-box>` den Wert von `mask-origin` fest und `mask-clip` wird auf `no-clip` gesetzt. In diesem Fall spielt die Reihenfolge keine Rolle.

- Wenn nur ein `<geometry-box>`-Wert vorhanden ist und das Schlüsselwort `no-clip` fehlt, werden sowohl `mask-origin` als auch `mask-clip` auf diesen Wert gesetzt. Da es nur einen Wert gibt, spielt die Reihenfolge auch hier keine Rolle.

- Wenn zwei `<geometry-box>`-Werte vorhanden sind, legt der erste den Bestandteil `mask-origin` und der zweite den Bestandteil `mask-clip` fest. In diesem Fall ist die Reihenfolge sehr wichtig.

Eine falsche Reihenfolge der Werte für `mask-origin` und `mask-clip` kann sich auf die Darstellung auswirken, macht die Deklaration aber nicht ungültig.

### Regeln für die Reihenfolge von `mask-size` und `mask-position`

Möglicherweise ist Ihnen der Schrägstrich zwischen `mask-position` und `mask-size` aufgefallen, die in der Syntax als `<position>` und `<size>` aufgeführt sind. Beide Eigenschaften akzeptieren ähnliche Werte.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In diesem Fall ist die Reihenfolge sehr wichtig. Wenn nur ein oder zwei {{cssxref("length-percentage")}}-Werte vorhanden sind, legen diese die Position des Bilds und nicht seine Größe fest. Wenn Sie in einer Maskenebene sowohl eine Position als auch eine Größe angeben, ohne die beiden durch einen Schrägstrich zu trennen, wird die gesamte Deklaration ungültig.

```css
mask:
  url("star.svg") bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url("circle.svg") 100px 100px / 50% repeat-x border-box padding-box alpha;
```

Wenn genau zwei `<length-percentage>`-Werte vorhanden sind, legen sie die Eigenschaft `mask-position` fest; `mask-size` erhält dann den Wert `auto`. Wenn eine Ebene sowohl `mask-size` als auch `mask-position` enthält, muss der Wert von `mask-size` nach dem Wert von `mask-position` stehen und die Werte müssen durch einen Schrägstrich (`/`) getrennt sein. Der Schrägstrich ist auch dann erforderlich, wenn `mask-size` auf einen Wert gesetzt ist, der kein gültiger Wert für `mask-position` ist.

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

Um mit der Kurzschreibweise `mask` eine `mask-size` in einer Maskenebene anzugeben, müssen Sie davor einen `mask-position`-Wert und unmittelbar danach einen Schrägstrich angeben.

> [!WARNING]
> Wenn Sie in einer Maskenebene eine Größe angeben, aber den Schrägstrich nach der Position vergessen, wird die gesamte Deklaration ungültig.

## Siehe auch

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)
