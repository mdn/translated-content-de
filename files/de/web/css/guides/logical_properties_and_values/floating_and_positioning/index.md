---
title: Logische Eigenschaften für Floating und Positionierung
short-title: Für Floating und Positionierung
slug: Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Zuordnungen für die physikalischen Werte von {{cssxref("float")}} und {{cssxref("clear")}}, sowie für die Positionierungseigenschaften, die mit dem [Positionierten Layout](/de/docs/Web/CSS/Guides/Positioned_layout) verwendet werden. Dieser Leitfaden gibt einen Überblick darüber, wie diese verwendet werden.

## Zuordnete Eigenschaften und Werte

Die folgende Tabelle beschreibt die in diesem Leitfaden diskutierten {{Glossary("logical_properties", "logischen Eigenschaften")}} und Werte sowie deren Zuordnung zu {{Glossary("physical_properties", "physikalischen Eigenschaften")}} und Werten. Sie gehen von einem horizontalen {{cssxref("writing-mode")}} mit einer Richtung von links nach rechts aus.

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

Zusätzlich zu diesen zugeordneten Eigenschaften gibt es einige zusätzliche Kurzschrift-Eigenschaften, die möglich sind, indem Block- und Inline-Dimensionen adressiert werden. Diese haben keine Zuordnung zu physikalischen Eigenschaften, abgesehen von der {{cssxref("inset")}}-Eigenschaft.

| Logische Eigenschaft        | Zweck                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| {{cssxref("inset-inline")}} | Setzt gleichzeitig beide der oben genannten Einfügewerte für die inline-Dimension.         |
| {{cssxref("inset-block")}}  | Setzt gleichzeitig beide der oben genannten Einfügewerte für die block-Dimension.          |
| {{cssxref("inset")}}        | Setzt alle vier Einfügewerte gleichzeitig mit physikalischer Zuordnung bei Mehrfachwerten. |

## Beispiel: Float und Clear

Die physikalischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das Modul für CSS logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Im folgenden Beispiel wird die erste Box mit `float: left` gefloatet und die zweite mit `float: inline-start`.
Wenn Sie `direction: rtl` auf den `.inner`-Selektor anwenden, bleibt die nach links gefloatete Box immer links, während das `inline-start`-Element der `direction` des Textes folgt.
Sie können dies mit `writing-mode: vertical-rl` kombinieren, um den Unterschied des Block-Layouts in Kombination mit `direction`-Werten zu sehen.

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

Die CSS-Positionierung ermöglicht es uns im Allgemeinen, ein Element relativ zu seinem enthaltenden Block zu positionieren — wir setzen das Element im Wesentlichen relativ zu seinem normalen Fluss ein. Um ein Element relativ zum Viewport zu positionieren, verwenden Sie die physikalischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass die Positionierung mit dem Textfluss in Ihrem Schreibmodus zusammenhängt, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften nehmen eine Länge oder einen Prozentsatz als Wert an und beziehen sich auf die Bildschirmabmessungen des Benutzers.

Im untenstehenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um die blaue Box mit absoluter Positionierung innerhalb des Bereichs mit der grauen gepunkteten Umrandung zu positionieren, die `position: relative` hat. Ändern Sie die Eigenschaft `writing-mode` in `vertical-rl`, oder fügen Sie `direction: rtl` hinzu, und sehen Sie, wie die in Fluss positionierte Box sich mit der Textrichtung bewegt.

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

## Neue Zwei- und Vier-Wert-Kurzformen

Wie bei anderen Eigenschaften im Modul gibt es Kurzschrift-Eigenschaften, die die Möglichkeit bieten, gleichzeitig zwei oder vier Werte einzustellen.

- {{cssxref("inset")}} — setzt alle vier Seiten gleichzeitig mit physikalischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Einfügungen.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Einfügungen.

## Beispiel: Logische Werte für Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte in Bezug auf die Textrichtung — anstatt `left` und `right` zu verwenden, können Sie `start` und `end` verwenden. Im untenstehenden Beispiel wird `text-align: right` im ersten Block gesetzt und `text-align: end` im zweiten.

Wenn Sie den Wert von `direction` auf `rtl` ändern, werden Sie feststellen, dass die Ausrichtung im ersten Block rechts bleibt, im zweiten jedoch zum logischen Ende auf der linken Seite wechselt.

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

Dies funktioniert konsistenter, wenn Box-Ausrichtung verwendet wird, die Start und Ende anstelle von physikalischen Richtungen zur Ausrichtung verwendet.
