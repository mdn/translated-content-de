---
title: Logische Eigenschaften für Fließverhalten und Positionierung
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Zuordnungen für die physikalischen Werte von {{cssxref("float")}} und {{cssxref("clear")}}, sowie für die Positionierungseigenschaften, die bei [positioniertem Layout](/de/docs/Web/CSS/Guides/Positioned_layout) verwendet werden. Dieser Leitfaden zeigt, wie diese verwendet werden können.

## Zuordnungen von Eigenschaften und Werten

Die folgende Tabelle zeigt die {{Glossary("logical_properties", "logischen Eigenschaften")}} und Werte, die in diesem Leitfaden besprochen werden, zusammen mit ihren {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Wertzuordnungen. Sie gehen von einem horizontalen {{cssxref("writing-mode")}} mit einer Links-nach-Rechts-Richtung aus.

| Logische Eigenschaft oder Wert     | Physikalische Eigenschaft oder Wert |
| ---------------------------------- | ----------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left          |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right         |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left          |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right         |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}                 |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}                |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}                  |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}               |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left     |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right    |

Zusätzlich zu diesen zugeordneten Eigenschaften gibt es einige zusätzliche Kurzschreibweisen, die durch die Möglichkeit entstehen, Block- und Inline-Dimensionen anzusprechen. Diese haben keine Zuordnung zu physikalischen Eigenschaften, abgesehen von der {{cssxref("inset")}}-Eigenschaft.

| Logische Eigenschaft        | Zweck                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Setzt gleichzeitig beide oben genannten Einfügewerte für die Inline-Dimension.         |
| {{cssxref("inset-block")}}  | Setzt gleichzeitig beide oben genannten Einfügewerte für die Block-Dimension.          |
| {{cssxref("inset")}}        | Setzt alle vier Einfügewerte gleichzeitig mit physikalischer Zuordnung mehrerer Werte. |

## Beispiel für Float und Clear

Die physikalischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das Modul für CSS-logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Im folgenden Beispiel wird das erste Feld mit `float: left` gefloatet und das zweite mit `float: inline-start`. Wenn Sie `direction: rtl` auf den `.inner`-Selektor anwenden, bleibt das linksgestapelte Feld immer auf der linken Seite, während das `inline-start`-gestapelte Element der `direction` des Textes folgt. Sie können dies mit `writing-mode: vertical-rl` kombinieren, um den Unterschied im Block-Layout in Kombination mit den `direction`-Werten zu sehen.

```html live-sample___float
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale.
  </div>
  <div class="inner">
    <div class="logical box"></div>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale.
  </div>
</div>
```

```css hidden live-sample___float
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___float
.inner {
  /* direction: rtl; */
  /* writing-mode: vertical-rl; */
}

.physical {
  float: left;
}

.logical {
  float: inline-start;
}
```

{{EmbedLiveSample("float", "", "220px")}}

## Beispiel: Einfüge-Eigenschaften für positioniertes Layout

Die CSS-Positionierung ermöglicht es uns im Allgemeinen, ein Element relativ zu seinem umgebenden Block zu positionieren – wir setzen im Wesentlichen das Element relativ zu seiner normalen Flussposition ein. Um ein Element relativ zum Ansichtsfenster zu positionieren, verwenden Sie die physikalischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass sich die Positionierung auf den Textfluss in Ihrem Schreibmodus bezieht, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften nehmen eine Länge oder einen Prozentsatz als Wert und beziehen sich auf die Bildschirmabmessungen des Benutzers.

Im untenstehenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um das blaue Feld mit absoluter Positionierung innerhalb des Bereichs mit der grau gepunkteten Grenze zu positionieren, der `position: relative` hat. Ändern Sie die `writing-mode`-Eigenschaft auf `vertical-rl` oder fügen Sie `direction: rtl` hinzu und sehen Sie, wie das flussnahe Feld mit der Textausrichtung bleibt.

```html live-sample___positioning-inset
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
  </div>
  <div class="inner">
    <div class="logical box"></div>
  </div>
</div>
```

```css hidden live-sample___positioning-inset
.container {
  display: flex;
}

.inner {
  width: 200px;
  height: 200px;
  position: relative;
  border: 2px dotted grey;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___positioning-inset
.inner {
  writing-mode: horizontal-tb;
}

.physical {
  position: absolute;
  top: 20px;
  right: 0;
}

.logical {
  position: absolute;
  inset-block-start: 20px;
  inset-inline-end: 0;
}
```

{{EmbedLiveSample("positioning-inset", "", "250px")}}

## Neue Kurzschreibweisen für zwei und vier Werte

Wie bei anderen Eigenschaften im Modul haben wir Kurzschreibweisen, die es ermöglichen, zwei oder vier Werte auf einmal zu setzen.

- {{cssxref("inset")}} — setzt alle vier Seiten zusammen mit physikalischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Einfügungen.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Einfügungen.

## Beispiel: Logische Werte für Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte, die sich auf die Textrichtung beziehen – anstelle von `left` und `right` können Sie `start` und `end` verwenden. Im untenstehenden Beispiel ist `text-align: right` im ersten Block eingestellt und `text-align: end` im zweiten.

Wenn Sie den Wert von `direction` auf `rtl` ändern, sehen Sie, dass die Ausrichtung für den ersten Block rechts bleibt, aber im zweiten zum logischen Ende auf der linken Seite wechselt.

```html live-sample___text-align
<div class="container">
  <div class="inner physical">Aligned text</div>
  <div class="inner logical">Aligned text</div>
</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}

.inner {
  width: 200px;
  border: 2px dotted grey;
  padding: 10px;
}
```

```css live-sample___text-align
.inner {
  direction: ltr;
}

.physical {
  text-align: right;
}

.logical {
  text-align: end;
}
```

{{EmbedLiveSample("text-align")}}

Dies funktioniert konsistenter, wenn Box-Ausrichtung verwendet wird, die Start und Ende anstelle von physikalischen Richtungen für die Ausrichtung verwendet.
