---
title: Größenanpassung von Elementen in CSS
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics")}}

In den bisherigen Lektionen sind Sie verschiedenen Wegen begegnet, um mit CSS Elemente auf einer Webseite zu skalieren. Zu verstehen, wie groß die unterschiedlichen Features in Ihrem Design sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenanpassung definieren, die Ihnen in der Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Konzept der intrinsischen Größe verstehen.</li>
          <li>Absolute und prozentuale Größen festlegen.</li>
          <li>Maximale und minimale Breite und Höhe festlegen.</li>
          <li>Viewport-Einheiten verstehen und ihre Nützlichkeit erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als ihre **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch eine Formatierung, die wir zufällig anwenden.

Wenn Sie ein Bild auf eine Seite stellen und seine Höhe oder Breite weder durch `<img>`-Attribute noch durch CSS ändern, wird es in dieser intrinsischen Größe angezeigt. Wir haben das Bild im folgenden Beispiel mit einem Rahmen versehen, damit Sie den Umfang seiner Größe erkennen können, wie sie in der Datei definiert ist.

```html live-sample___intrinsic-image
<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image","100%", "80")}}

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} in Ihr HTML einfügen, ohne Inhalt und es mit einem Rahmen versehen, wie wir es mit dem Bild getan haben, sehen Sie eine Linie auf der Seite. Dies ist der zusammengebrochene Rahmen des `<div>`, da kein Inhalt vorhanden ist, um es offen zu halten.

In unserem Beispiel unten deckt dieser Rahmen die gesamte Breite des Containers ab, weil es sich um ein Block-Element handelt, ein Verhalten, das Ihnen vertraut vorkommen sollte. Es hat keine Höhe (oder Größe in der Block-Dimension), da kein Inhalt vorhanden ist.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text","100%", "60")}}

Im obigen Beispiel versuchen Sie, etwas Text in das leere Element hinzuzufügen. Sie werden sehen, dass sich der Rahmen öffnet, weil die Höhe des Elements durch den Inhalt definiert ist. Auch dies ist die intrinsische Größe des Elements — seine Größe ist durch seinen Inhalt definiert.

## Eine bestimmte Größe festlegen

Natürlich können wir den Elementen in unserem Design eine bestimmte Größe geben. Wenn einem Element eine Größe gegeben wird (deren Inhalt dann in diese Größe passen muss), bezeichnen wir es als **extrinsische Größe**.

Im nächsten Beispiel geben wir zwei `<div>`s spezifische {{cssxref("width")}} und {{cssxref("height")}}-Werte, und sie werden jetzt diese Größe haben, unabhängig davon, welcher Inhalt in ihnen platziert wird. Wie das rechte `<div>` demonstriert, kann eine festgelegte Höhe dazu führen, dass der Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als in das enthaltene Element passt (Sie erfahren mehr über [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) in einer nachfolgenden Lektion).

```html live-sample___height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a height set, this box has content in it which will
    need more space than the assigned height, and so we get overflow.
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", "200px")}}

Aufgrund dieses Überlaufproblems müssen wir die Höhe von Elementen mit Längen oder Prozentsätzen im Web sehr sorgfältig festlegen.

### Mit Prozenten arbeiten

In vielerlei Hinsicht funktionieren Prozentsätze wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages) besprochen haben, können sie oft mit Längen austauschbar verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie berücksichtigen, wovon er ein Prozentsatz ist. Im Fall einer Box innerhalb eines anderen Containers wird die Breite der Kindbox ein Prozentsatz der Breite des übergeordneten Containers sein.

```html live-sample___percent-width
<div class="container">
  <div class="box">I have a percentage width.</div>
</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

Dies liegt daran, dass Prozentsätze in Bezug auf die Größe des umschließenden Blocks aufgelöst werden. Ohne angewandten Prozentsatz nimmt unser `box`-`<div>` `100%` des verfügbaren Platzes ein, da es sich um ein Block-Element handelt. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raumes, den es normalerweise einnehmen würde.

Versuchen Sie, das obige Beispiel zu bearbeiten:

1. Entfernen Sie die `width`-Deklaration des `box`-`<div>`, um zu überprüfen, dass es standardmäßig `100%` der verfügbaren `width` einnimmt.
2. Machen Sie Ihre vorherige Änderung rückgängig — geben Sie dem `box`-`<div>` wieder eine `width` von `50%`.
3. Geben Sie nun dem `container`-`<div>` eine `width` von `50%`. Sie werden sehen, dass die Breite des `box`-`<div>` kleiner wird, weil sie relativ zur Breite ihres Containers ist.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, können Sie auf seltsames Verhalten stoßen.

Im folgenden Beispiel haben wir eine Box, der wir einen {{cssxref("margin")}} von 10% und ein {{cssxref("padding")}} von `10%` gegeben haben. Das `padding` und der Rand oben und unten der Box sind genauso groß wie das `padding` und der Rand links und rechts.

```html live-sample___percent-mp
<div class="box">I have margin and padding set to 10% on all sides.</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", "380px")}}

Es könnte erwartet werden, dass die prozentualen Ränder oben und unten ein Prozentsatz der Höhe des Elements sind, und die prozentualen Ränder links und rechts ein Prozentsatz der Breite des Elements sind. Dies ist jedoch nicht der Fall!

Wenn Sie Ränder und Abstände in Prozentsätzen verwenden, wird der Wert anhand der **inline size** des umgebenden Blocks berechnet — daher die Breite beim Arbeiten in einer horizontalen Sprache. In unserem Beispiel sind alle Ränder und `padding` 10% der Breite. Dies bedeutet, dass Sie gleich große Ränder und `padding` um die Box herum haben können. Dies ist ein Fakt, den man sich merken sollte, wenn man auf diese Weise Prozentsätze verwendet.

## min- und max-Größen

Zusätzlich zur Festlegung einer festen Größe können wir CSS anweisen, einem Element eine minimale oder maximale Größe zu geben. Wenn Sie eine Box haben, die eine variable Menge an Inhalt enthalten könnte, und Sie möchten, dass sie immer _mindestens_ eine bestimmte Höhe hat, können Sie das {{cssxref("min-height")}}-Attribut darauf setzen. Die Box wird immer mindestens diese Höhe haben, wird jedoch höher, wenn mehr Inhalt als der Mindesthöhe zur Verfügung steht.

Im nächsten Beispiel sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 100 Pixel. Die Box links ist 100 Pixel hoch; die Box rechts hat Inhalt, der mehr Platz benötigt, und sie ist daher höher als 100 Pixel.

```html live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set, this box has content in it which
    will need more space than the assigned height, and so it grows from the
    minimum.
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", "220px")}}

Dies ist sehr nützlich, um Überlauf zu vermeiden, wenn mit variablen Inhaltsmengen gearbeitet wird.

### `max-width` bei Bildern

Ein häufiger Gebrauch von {{cssxref("max-width")}} ist, Bilder so zu skalieren, dass sie verkleinert werden, wenn nicht genügend Platz vorhanden ist, um sie in ihrer intrinsischen Breite darzustellen, während sichergestellt wird, dass sie nicht größer als diese Breite werden.

Zum Beispiel, wenn Sie `width: 100%` auf ein Bild setzen, und seine intrinsische Breite kleiner als sein Container ist, wird das Bild gezwungen zu strecken und größer zu werden, was dazu führt, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden, und seine intrinsische Breite kleiner als sein Behälter ist, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Pixellierung vermieden wird.

Im folgenden Beispiel haben wir dasselbe Bild dreimal eingebettet:

- Das erste Bild hat `width: 100%` erhalten und befindet sich in einem Container, der größer als dieses ist, daher passt es sich der Containerbreite an.
- Das zweite Bild hat `max-width: 100%` gesetzt und dehnt sich daher nicht aus, um den Container zu füllen.
- Das dritte Kästchen enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%`; in diesem Fall sehen Sie, wie es sich verkleinert hat, um in das Kästchen zu passen.

```html live-sample___max-width
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box,
.mini-box {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.box {
  width: 200px;
}
.mini-box {
  width: 30px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

Diese Technik wird verwendet, um Bilder _responsiv_ zu machen, sodass sie auf einem kleineren Gerät entsprechend verkleinert werden. Sie sollten diese Technik jedoch nicht verwenden, um wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten angemessen dimensioniert sein, sodass sie nicht größer sind als für die größten im Design angezeigten Größen erforderlich. Übermäßig große Bilder herunterzuladen, wird Ihre Seite verlangsamen und es kann die Benutzer mehr Geld kosten, wenn sie pro Megabyte für Daten zahlen.

## Viewport-Einheiten

Der Viewport — das ist der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Website anzuzeigen — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die Einheit `vw` für Viewport-Breite und `vh` für Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht `1%` der Viewport-Höhe und `1vw` entspricht `1%` der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen, aber auch Text zu dimensionieren. Im folgenden Beispiel haben wir eine Box, deren Größe auf `20vh` und `20vw` festgelegt ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von `10vh` hat.

```html live-sample___vw-vh
<div class="box">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

Wenn Sie die `vh` und `vw`-Werte ändern, ändern sich die Größe der Box und der Schrift; wenn Sie die Größe des Viewports ändern, ändern sich auch deren Größen, da sie relativ zum Viewport dimensioniert sind. Um zu sehen, wie sich das Beispiel ändert, wenn Sie die Größe des Viewports ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie in der Größe ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Texts passiert.

Das Dimensionieren von Dingen relativ zum Viewport kann in Ihren Designs nützlich sein. Beispielsweise, wenn Sie einen vollständigen Hero-Abschnitt anzeigen möchten, bevor der Rest Ihres Inhalts gezeigt wird, wird dieser Teil Ihrer Seite `100vh` hoch sein und den Rest des Inhalts unter den Viewport schieben, sodass er erst erscheint, wenn das Dokument gescrollt wird.

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige wichtige Probleme gegeben, auf die Sie beim Dimensionieren von Dingen im Web stoßen könnten. Wenn Sie mit [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) weitermachen, wird die Größenanpassung sehr wichtig beim Meistern der verschiedenen Layout-Methoden, also ist es sinnvoll, die Konzepte hier zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir Ihnen zur CSS-Größenanpassung gegeben haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics")}}
