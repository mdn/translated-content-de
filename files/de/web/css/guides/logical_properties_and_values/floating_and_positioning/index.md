---
title: Logische Eigenschaften für Floaten und Positionierung
short-title: Für Floaten und Positionierung
slug: Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Zuordnungen für die physischen Werte von {{cssxref("float")}} und {{cssxref("clear")}}, sowie für die Positionierungseigenschaften, die mit [positioniertem Layout](/de/docs/Web/CSS/Guides/Positioned_layout) verwendet werden. Dieser Leitfaden zeigt, wie Sie diese verwenden können.

## Zuordnete Eigenschaften und Werte

Die folgende Tabelle beschreibt die in diesem Leitfaden besprochenen {{Glossary("logical_properties", "logischen Eigenschaften")}} und Werte zusammen mit deren Zuordnungen zu {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werten. Sie gehen von einem horizontalen {{cssxref("writing-mode")}} mit einer von links nach rechts gerichteten Richtung aus.

| Logische Eigenschaft oder Wert     | Physische Eigenschaft oder Wert  |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

Neben diesen zugeordneten Eigenschaften gibt es einige zusätzliche Kurzform-Eigenschaften, die es ermöglichen, Block- und Inline-Dimensionen anzusprechen. Diese haben keine Zuordnung zu physikalischen Eigenschaften, abgesehen von der {{cssxref("inset")}}-Eigenschaft.

| Logische Eigenschaft        | Zweck                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Setzt beide obigen Inset-Werte für die Inline-Dimension gleichzeitig.                  |
| {{cssxref("inset-block")}}  | Setzt beide obigen Inset-Werte für die Block-Dimension gleichzeitig.                   |
| {{cssxref("inset")}}        | Setzt alle vier Inset-Werte gleichzeitig mit physikalischer Zuordnung von Mehrwehrten. |

## Beispiel für Float und Clear

Die physischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das CSS-Modul für logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Im folgenden Beispiel wird das erste Kästchen mit `float: left` gefloatet, und das zweite mit `float: inline-start`.
Wenn Sie `direction: rtl` auf den `.inner`-Selektor anwenden, bleibt das links gefloatete Kästchen immer auf der linken Seite, während das `inline-start`-gefloatete Element der `direction` des Textes folgt.
Sie können dies mit `writing-mode: vertical-rl` kombinieren, um den Unterschied des Block-Layouts in Verbindung mit `direction`-Werten zu sehen.

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

## Beispiel: Inset-Eigenschaften für positioniertes Layout

Die CSS-Positionierung erlaubt es uns generell, ein Element in einer Weise relativ zu seinem enthaltenden Block zu positionieren – wir setzen das Element im Wesentlichen relativ zu seiner normalen Flussposition ein. Um ein Element relativ zum Viewport zu positionieren, verwenden Sie die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass sich die Positionierung auf den Fluss des Textes in Ihrem Schreibmodus bezieht, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften nehmen eine Länge oder einen Prozentsatz als Wert an und beziehen sich auf die Bildschirmdimensionen des Benutzers.

Im folgenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um das blaue Kästchen mit absoluter Positionierung innerhalb des Bereichs mit der grauen gestrichelten Umrandung zu positionieren, welche `position: relative` hat. Ändern Sie die `writing-mode`-Eigenschaft zu `vertical-rl` oder fügen Sie `direction: rtl` hinzu und sehen Sie, wie das der Flussrichtung zugeordnete Kästchen mit der Textausrichtung verbleibt.

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

## Neue Kurzformen für zwei und vier Werte

Wie bei anderen Eigenschaften im Modul haben wir Kurzform-Eigenschaften, die es ermöglichen, zwei oder vier Werte gleichzeitig zu setzen.

- {{cssxref("inset")}} — setzt alle vier Seiten zusammen mit physikalischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Insets.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Insets.

## Beispiel: Logische Werte für Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte, die sich auf die Textausrichtung beziehen – anstelle von `left` und `right` können Sie `start` und `end` verwenden. Im folgenden Beispiel wird `text-align: right` im ersten Block und `text-align: end` im zweiten Block gesetzt.

Wenn Sie den Wert von `direction` auf `rtl` ändern, sehen Sie, dass die Ausrichtung beim ersten Block auf der rechten Seite bleibt, aber im zweiten Block zum logischen Ende auf die linke Seite geht.

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

Dies funktioniert konsistenter, wenn Sie Box-Ausrichtung verwenden, die Start und Ende anstelle von physischen Richtungen für die Ausrichtung nutzt.
