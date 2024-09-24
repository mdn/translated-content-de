---
title: Grids, logische Werte und Schreibmodi
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

In diesen Anleitungen habe ich bereits ein wichtiges Merkmal des Grid-Layouts erwähnt: die Unterstützung unterschiedlicher Schreibmodi, die in die Spezifikation eingebaut ist. In diesem Leitfaden werden wir uns mit diesem Merkmal von Grid und anderen modernen Layout-Methoden befassen und ein wenig über Schreibmodi sowie logische vs. physische Eigenschaften lernen.

## Logische und physische Eigenschaften und Werte

CSS ist voller **physischer** Positionierungs-Keywords – links und rechts, oben und unten. Wenn wir ein Element mit absoluter Positionierung platzieren, verwenden wir diese physischen Keywords als Versatzwerte, um das Element zu verschieben. Im folgenden Code-Snippet wird das Element 20 Pixel vom oberen und 30 Pixel vom linken Rand des Containers platziert:

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Element</div>
</div>
```

Eine weitere Stelle, an der Sie physische Keywords verwenden könnten, ist, wenn Sie `text-align: right` verwenden, um Text nach rechts auszurichten. Es gibt auch physische **Eigenschaften** in CSS. Wir fügen Ränder, Abstände und Umrandungen mit diesen physischen Eigenschaften wie {{cssxref("margin-left")}}, {{cssxref("padding-left")}} und so weiter hinzu.

Wir nennen diese Keywords und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie gerade betrachten. Links ist immer links, unabhängig davon, in welche Richtung Ihr Text läuft.

### Probleme mit physischen Eigenschaften

Dies kann ein Problem darstellen, wenn Sie eine Website entwickeln, die in mehreren Sprachen funktionieren muss, einschließlich Sprachen, bei denen der Text von rechts beginnt, anstatt von links. Browser sind ziemlich gut darin, mit der Textrichtung umzugehen, und Sie müssen nicht einmal in einer {{glossary("rtl")}}-Sprache arbeiten, um dies zu sehen. Im folgenden Beispiel habe ich zwei Absätze. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, der zweite Absatz hat keine `text-align`-Eigenschaft gesetzt. Ich habe `dir="rtl"` zum `html`-Element hinzugefügt, was den Schreibmodus vom Standard für ein englischsprachiges Dokument von `ltr` ändert. Sie können sehen, dass der erste Absatz linksbündig bleibt, da der `text-align`-Wert `left` ist. Der zweite jedoch wechselt die Richtung und der Text läuft von rechts nach links.

```html hidden
<p class="left">
  Mein Text ist auf <code>text-align: left</code> gesetzt. Ich werde immer linksbündig sein, selbst wenn die Textrichtung in diesem Dokument rtl ist.
</p>

<p>Ich habe keine Ausrichtung gesetzt und verwende die im Dokument eingestellte Richtung.</p>
```

```css hidden
body {
  direction: rtl;
}

p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
}

.left {
  text-align: left;
}
```

{{EmbedLiveSample("Probleme mit physischen Eigenschaften", "", 200)}}

Dies ist ein sehr einfaches Beispiel für das Problem mit physischen Werten und Eigenschaften, die in CSS verwendet werden. Sie verhindern, dass der Browser die Arbeit zur Umschaltung des Schreibmodus übernehmen kann, da sie die Annahme treffen, dass der Text von links nach rechts und von oben nach unten fließt.

### Logische Eigenschaften und Werte

Logische Eigenschaften und Werte gehen nicht von einer bestimmten Textrichtung aus. Deshalb verwenden wir im Grid-Layout das Keyword `start`, wenn wir etwas am Anfang des Containers ausrichten. Für mich, der auf Englisch arbeitet, mag `start` durchaus links sein, muss es aber nicht, und das Wort `start` impliziert keinen physischen Ort.

## Block und Inline

Sobald wir uns mit logischen, anstatt physischen Eigenschaften beschäftigen, hören wir auf, die Welt als von links nach rechts und von oben nach unten zu betrachten. Wir brauchen einen neuen Bezugspunkt, und hier wird das Verständnis der _Block- und Inline-Achsen_, die wir zuvor im Leitfaden zur _Ausrichtung_ kennengelernt haben, sehr nützlich. Wenn Sie Layouts in Bezug auf Block und Inline sehen können, machen die Funktionsweisen im Grid viel mehr Sinn.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibmodi

Ich werde eine weitere Spezifikation einführen, die ich in meinen Beispielen verwenden werde: die CSS-Schreibmodi-Spezifikation. Diese Spezifikation beschreibt, wie wir diese unterschiedlichen Schreibmodi in CSS nutzen können, nicht nur zur Unterstützung von Sprachen, die einen anderen Schreibmodus als Englisch haben, sondern auch zu kreativen Zwecken. Ich werde die {{cssxref("writing-mode")}}-Eigenschaft verwenden, um Änderungen am Schreibmodus, der auf unser Grid angewendet wird, vorzunehmen, um zu demonstrieren, wie die logischen Werte funktionieren. Wenn Sie tiefer in Schreibmodi eintauchen möchten, empfehle ich Ihnen den exzellenten Artikel von Jen Simmons über [CSS-Schreibmodi](https://24ways.org/2016/css-writing-modes/). Dieser geht tiefer in die Spezifikation ein, als wir es hier tun werden.

### `writing-mode`

Schreibmodi sind mehr als nur Links-nach-Rechts- und Rechts-nach-Links-Text, und die `writing-mode`-Eigenschaft hilft uns, Text in andere Richtungen anzuzeigen. Die {{cssxref("writing-mode")}}-Eigenschaft kann die folgenden Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb` ist der Standard für Text im Web. Es ist die Richtung, in die Sie diesen Leitfaden lesen. Die anderen Eigenschaften werden die Art und Weise ändern, wie Text in unserem Dokument fließt, und passen sich den verschiedenen Schreibmodi an, die weltweit zu finden sind. Als einfaches Beispiel habe ich unten zwei Absätze. Der erste verwendet den Standard `horizontal-tb`, und der zweite verwendet `vertical-rl`. In diesem Modus läuft der Text immer noch von links nach rechts, jedoch ist die Richtung des Textes vertikal – Inline-Text läuft nun die Seite hinunter, von oben nach unten.

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html
<div class="wrapper">
  <p style="writing-mode: horizontal-tb">
    Mein Schreibmodus ist auf den Standard <code>horizontal-tb</code> gesetzt
  </p>
  <p style="writing-mode: vertical-rl">
    Mein Schreibmodus ist auf <code>vertical-rl</code> gesetzt
  </p>
</div>
```

{{ EmbedLiveSample('writing-mode', '500', '420') }}

## Schreibmodi in Grid-Layouts

Wenn wir uns nun ein Grid-Layout-Beispiel ansehen, können wir sehen, wie das Ändern des Schreibmodus bedeutet, dass wir unsere Vorstellung davon, wo sich die Block- und Inline-Achse befinden, ändern müssen.

### Standard-Schreibmodus

Das Grid in diesem Beispiel hat drei Spalten und zwei Zeilen-Tracks. Das bedeutet, dass es drei Tracks gibt, die entlang der Block-Achse nach unten verlaufen. Im Standard-Schreibmodus platziert Grid Elemente automatisch, beginnend oben links, bewegend nach rechts, und füllt die drei Zellen auf der Inline-Achse. Es bewegt sich dann in die nächste Zeile, erstellt einen neuen Zeilen-Track und füllt weitere Elemente ein:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Element 1</div>
  <div class="item2">Element 2</div>
  <div class="item3">Element 3</div>
  <div class="item4">Element 4</div>
  <div class="item5">Element 5</div>
</div>
```

{{ EmbedLiveSample('Default_writing_mode', '500', '230') }}

### Schreibmodus setzen

Wenn wir `writing-mode: vertical-lr` zum Grid-Container hinzufügen, können wir sehen, dass die Block- und Inline-Achse nun in eine andere Richtung verläuft. Die Block- oder _Spalten_-Achse verläuft jetzt über die Seite von links nach rechts, Inline verläuft die Seite hinunter und erstellt Zeilen von oben nach unten.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Element 1</div>
  <div class="item2">Element 2</div>
  <div class="item3">Element 3</div>
  <div class="item4">Element 4</div>
  <div class="item5">Element 5</div>
</div>
```

{{ EmbedLiveSample('Setting_writing_mode', '500', '330') }}

## Logische Werte zur Ausrichtung

Mit der Fähigkeit der Block- und Inline-Achse, die Richtung zu wechseln, beginnen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn zu machen.

In diesem nächsten Beispiel verwende ich die Ausrichtung, um Elemente innerhalb eines Grids, das auf `writing-mode: vertical-lr` gesetzt ist, auszurichten. Die Eigenschaften `start` und `end` funktionieren genau so, wie sie es im Standard-Schreibmodus tun, und bleiben logisch in einer Weise, wie links und rechts oder oben und unten zum Ausrichten von Elementen es nicht tun würden. Dies geschieht, sobald wir das Grid auf die Seite gedreht haben, so wie hier:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">Element 1</div>
  <div class="item2">Element 2</div>
  <div class="item3">Element 3</div>
</div>
```

{{ EmbedLiveSample('Logical_values_for_alignment', '500', '280') }}

Wenn Sie sehen möchten, wie diese mit einem von rechts nach links sowie oben nach unten Schreibmodus funktionieren, ändern Sie `vertical-lr` zu `vertical-rl`, was ein vertikaler Schreibmodus ist, der von rechts nach links läuft.

## Automatische Platzierung und Schreibmodi

Im bereits gezeigten Beispiel können Sie sehen, wie der Schreibmodus die Richtung ändert, in die sich Elemente auf dem Grid platzieren. Elemente platzieren sich standardmäßig entlang der Inline-Achse und bewegen sich dann auf eine neue Zeile. Diese Inline-Achse verläuft jedoch möglicherweise nicht immer von links nach rechts.

## Linienbasierte Platzierung und Schreibmodi

Das Wichtigste, woran man sich bei der Platzierung von Elementen nach Liniennummern erinnern muss, ist, dass Linie 1 die Startlinie ist, unabhängig davon, welcher Schreibmodus verwendet wird. Linie -1 ist die Endlinie, unabhängig davon, welcher Schreibmodus verwendet wird.

### Linienbasierte Platzierung mit von links nach rechts Text

Im nächsten Beispiel habe ich ein Grid, das in der Standardrichtung `ltr` ist. Ich habe drei Elemente mithilfe der linienbasierten Platzierung positioniert.

- Element 1 beginnt bei Spaltenlinie 1 und erstreckt sich über einen Track.
- Element 2 beginnt bei Spaltenlinie -1 und erstreckt sich bis -3.
- Element 3 beginnt bei Spaltenlinie 1 und erstreckt sich bis Spaltenlinie 3.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Element 1</div>
  <div class="item2">Element 2</div>
  <div class="item3">Element 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_left_to_right_text', '500', '240') }}

### Linienbasierte Platzierung mit von rechts nach links Text

Wenn ich nun die {{cssxref("direction")}}-Eigenschaft mit dem Wert `rtl` zum Grid-Container hinzufüge, wird Linie 1 zur rechten Seite des Grids und Linie -1 zur linken.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Element 1</div>
  <div class="item2">Element 2</div>
  <div class="item3">Element 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_right_to_left_text', '500', '240') }}

Dies zeigt, dass wenn Sie die Richtung Ihres Textes ändern, entweder für ganze Seiten oder Teile von Seiten, und Linien verwenden: Sie möglicherweise Ihre Linien benennen möchten, wenn Sie nicht möchten, dass sich das Layout vollständig in die entgegengesetzte Richtung ändert. Bei einigen Dingen, beispielsweise wenn ein Grid Textinhalt enthält, kann diese Umschaltung genau das sein, was Sie möchten. Bei anderer Verwendung jedoch nicht.

### Die seltsame Reihenfolge der Werte in der `grid-area`-Eigenschaft

Sie können die {{cssxref("grid-area")}}-Eigenschaft verwenden, um alle vier Linien eines Grid-Bereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal sehen, sind sie oft überrascht, dass die Werte nicht in der gleichen Reihenfolge wie die Kurzform für Ränder — die im Uhrzeigersinn verläuft: oben, rechts, unten, links — angegeben werden.

Die Reihenfolge der `grid-area`-Werte ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was für Englisch, von links nach rechts, bedeutet, dass die Reihenfolge ist:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Also das Gegenteil von dem, was wir für Ränder und Abstände tun. Sobald Sie erkennen, dass `grid-area` die Welt als "Block und Inline" sieht, können Sie sich merken, dass wir die zwei Starts festlegen, dann die zwei Enden. Es wird viel logischer, sobald Sie wissen!

## Gemischte Schreibmodi und Grid-Layout

Zusätzlich zur Anzeige von Dokumenten im korrekten Schreibmodus für die Sprache, können Schreibmodi kreativ innerhalb von Dokumenten verwendet werden, die ansonsten `ltr` sind. Im nächsten Beispiel habe ich ein Grid-Layout mit einem Satz von Links an einer Seite. Ich habe Schreibmodi verwendet, um diese im Spalten-Track seitwärts zu drehen:

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em Helvetica,
    Arial,
    sans-serif;
}
.wrapper nav {
  writing-mode: vertical-lr;
}
.wrapper ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
.wrapper a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Rübengrün, Schafgarbe, Reiskorn, Rübe, Endivie, Blumenkohl, Meersalat,
      Kohlrabi, Amarant, Wasserspinat, Avocado, Daikon, Napa-Kohl, Spargel,
      Winterportulak, Grünkohl. Sellerie, Kartoffel,
      Schnitterbsen, Meerrettich, Spinat, Karotte, Soko. Lotuswurzel,
      Wasserspinat, Fenchel, Kombu, Mais, Bambussprosse, grüne Bohne,
      Mangold, Seekohl, Kürbis, Zwiebel, Kichererbse, Gram, Mais,
      Erbse. Rosenkohl, Koriander, Wasserkastanie, Kürbis, Mangold,
      Wakame, Kohlrabi, Rote Bete, Karotte, Brunnenkresse. Mais, Amarant,
      Schwarzwurzel, Bunya-Nüsse, Nori, Azuki-Bohnen, Vogelmiere, Kartoffel,
      Paprika, Artischocke.
    </p>
    <p>
      Nori-Traube, Silberrübe, Brokkoli, Kombu, Rübenblätter, Ackerbohne,
      Kartoffel, Quandong, Sellerie. Bunya-Nüsse, Schwarzäugige Erbse,
      Prärieweise, Lauch, Linsen, Rübengrün, Pastinake. Meersalat,
      Wasserkastanie, Aubergine, Winterportulak, Fenchel, Azuki-Bohnen,
      Erdnußbohne, Sierra Leone Brechbohne, Lauch, Soko, Chicoreé,
      Zichorie, Celtuce, Petersilie, Jícama, Schwarzwurzel.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
      <li><a href="">Link 3</a></li>
    </ul>
  </nav>
</div>
```

{{ EmbedLiveSample('Mixed_writing_modes_and_grid_layout', '500', '280') }}

## Physische Werte und Grid-Layout

Wir begegnen physischen Eigenschaften häufig beim Erstellen von Websites, und obwohl die Grid-Platzierungs- und Ausrichtungseigenschaften und -werte den Schreibmodi Respekt zollen, gibt es Dinge, die Sie mit Grid tun möchten, die Sie dazu zwingen, physische Eigenschaften und Werte zu verwenden. Im Leitfaden [Box-Ausrichtung und Grids](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) habe ich demonstriert, wie automatische Ränder in einem Grid-Bereich funktionieren. Eine häufige Flexbox-Technik ist es, automatisch Ränder zu verwenden, um ein Element von den anderen wegzudrücken, jedoch bindet dies das Layout auch an den physischen Raum.

Wenn Sie absolute Positionierung innerhalb eines Grid-Bereichs verwenden, dann verwenden Sie wiederum physische Versätze, um das Element innerhalb des Grid-Bereichs zu verschieben. Der entscheidende Punkt ist, sich der Spannung zwischen physischen und logischen Eigenschaften und Werten bewusst zu sein. Zum Beispiel sollten Sie beachten, dass Sie möglicherweise Ihre CSS ändern müssen, um mit einer Umstellung von `ltr` zu `rtl` umzugehen.

### Logische Eigenschaften für alles!

Unsere neuen Layout-Methoden geben uns die Möglichkeit, diese logischen Werte zur Platzierung von Elementen zu verwenden. Sobald wir jedoch anfangen, sie mit den physischen Eigenschaften zu kombinieren, die für Ränder und Abstände verwendet werden, müssen wir bedenken, dass diese physischen Eigenschaften sich nicht in Abhängigkeit vom Schreibmodus ändern.

Die [CSS-Logische-Eigenschaften-Spezifikation](https://drafts.csswg.org/css-logical/) ermöglicht es Ihnen, die [logischen Äquivalente](/de/docs/Web/CSS/CSS_logical_properties_and_values) für Eigenschaften wie {{cssxref("margin-left")}} und {{cssxref("margin-right")}} in Ihrem CSS zu verwenden. Diese Eigenschaften und Werte werden in modernen Browsern gut unterstützt. Ihr Verständnis von Block und Inline durch Grid wird Ihnen helfen, auch diese zu verstehen.
