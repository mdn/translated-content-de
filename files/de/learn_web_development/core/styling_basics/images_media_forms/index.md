---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: b4f137d4d70f66de2b5b979f719a4dd4229fd6e6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu gestalten, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Punkte hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">Bilder</a>, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">Video</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms">Formulare</a>. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegende Gestaltung von einfach zu gestaltenden Formularelementen, wie Texteingabefeldern.</li>
          <li>Verwendung eines CSS-Resets als Basis, um schwierige Elemente wie Formulare zu gestalten.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu gestalten sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Dies bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite inmitten anderer Elemente. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente wie Bilder und Videos werden auch als mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben betrachtet. Dies bedeutet, dass sie eine Größe in den horizontalen (x) und vertikalen (y) Dimensionen haben und standardmäßig mit den intrinsischen Dimensionen der Datei angezeigt werden.

## Bilder dimensionieren

Wie Sie bereits aus diesen Lektionen wissen, generiert alles in CSS eine Box. Wenn Sie ein Bild in eine Box platzieren, die kleiner oder größer als die intrinsischen Dimensionen der Bilddatei in einer der Richtungen ist, wird es entweder kleiner als die Box erscheinen oder über die Box hinausragen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
- Die andere ist größer als 200 Pixel und überläuft die Box.

```html live-sample___size
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="balloons"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___size
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  width: 200px;
}

img {
}
```

{{EmbedLiveSample("size", "", "250px")}}

Was können wir gegen das Überlaufproblem tun?

Wie wir in [Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, besteht eine häufige Technik darin, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dadurch kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` der `<img>` Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, das größere jedoch kleiner wird, um in die Box zu passen.

### Anzeigeprobleme bei Bildern mit `object-fit` behandeln

Das obige Beispiel deckt ein weiteres Set von Problemen bei der Anzeige von Bildern in Containern auf. Sie werden bemerken, dass nach dem Setzen von `max-width: 100%` auf die Bilder das zweite Bild seinen Container nicht ganz ausfüllt; es bleibt ein Spalt am Boden. Dies liegt daran, dass die Breite eines Bildes so eingestellt wird, dass sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird, wenn eine bestimmte Breite angegeben wird.

Wie können wir das Bild so dimensionieren, dass es seinen Container vollständig abdeckt? Wir könnten den Container so einstellen, dass er eine feste `width` _und_ `height` hat, und dann dem Bild eine `width` und `height` von `100%` geben, wie im nächsten Beispiel gezeigt:

```html live-sample___object-fit1
<div class="box">
  <img
    alt="balloons"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit1
.box {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
  margin: 20px;
}

img {
  width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("object-fit1", "", "250px")}}

Allerdings ist das Bild verzerrt, da sein Seitenverhältnis geändert wurde — es sieht _gestreckt_ aus. Um dies zu beheben, können Sie die Eigenschaft {{cssxref("object-fit")}} verwenden, die festlegt, wie das Bild für seinen Container (dem `<img>`-Element) skaliert wird. Die `object-fit`-Eigenschaft kann einige verschiedene Werte annehmen, von denen die nützlichsten sind:

- `cover`: Das Bild füllt das `<img>`-Element vollständig aus und behält dabei sein Seitenverhältnis bei, daher werden einige Teile des Bildes nicht angezeigt.
- `contain`: Das Bild passt vollständig in das `<img>`-Element und behält dabei sein Seitenverhältnis bei, daher werden einige Teile des `<img>`-Elements nicht ausgefüllt. Dies führt zu "letterboxing" oder "pillarboxing".

Das nächste Beispiel zeigt die `cover`- und `contain`-Werte auf zwei Kopien des im vorherigen Beispiel gezeigten Bildes, sodass Sie sehen können, welche Auswirkungen sie haben:

```html live-sample___object-fit
<div class="wrapper">
  <div class="box">
    <img
      alt="balloons"
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
  <div class="box">
    <img
      alt="balloons"
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___object-fit
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("object-fit", "", "250px")}}

> [!NOTE]
> Die wichtigsten Erkenntnisse hier sind:
>
> 1. Die Eigenschaft `object-fit` skaliert das Bild selbst, um in das `<img>`-Element zu passen, das es auf der Seite einbettet.
> 2. Das `<img>` muss skaliert werden, damit `object-fit` irgendeine Wirkung hat.
>
> Wenn das `<img>`-Element nicht skaliert wird, wird das Bild in seiner Originalgröße (oder _intrinsischen_ Größe) und seinem Seitenverhältnis angezeigt, daher hat `object-fit` keine Wirkung.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layout-Techniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders als andere Elemente verhalten. Beispielsweise werden in einem Gitterlayout Elemente standardmäßig so gedehnt, dass sie ihre gesamten {{Glossary("Grid_Areas", "Gitterflächen")}} ausfüllen. Bilder dehnen sich nicht aus; stattdessen sind sie auf den Anfang ihrer Gitterflächen ausgerichtet.

Sie können dies im folgenden Beispiel sehen, in dem wir einen zweispaltigen, zweireihigen Gittercontainer haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte zu füllen. Das Bild dehnt sich jedoch nicht aus.

```html live-sample___layout
<div class="wrapper">
  <img
    alt="star"
    src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css live-sample___layout
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px;
}

.wrapper > div {
  background-color: rebeccapurple;
  border-radius: 0.5em;
}
```

{{EmbedLiveSample("layout", "", "220px")}}

Sie werden das Layout erst in einem späteren Modul studieren. Für jetzt, denken Sie einfach daran, dass ersetzte Elemente, wenn sie Teil eines spezifischen Layoutsystems wie Grid oder Flexbox werden, ein anderes Standardverhalten haben, im Grunde um zu vermeiden, dass sie seltsamerweise durch das Layout gedehnt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, sie mit CSS zu gestalten. Das [Web Forms Extensions Modul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte der Gestaltung bestimmter Formular-Eingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerelemente werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element zu Ihrer Seite hinzugefügt — dies definiert einfache Formfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumswählern. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Textinput, und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu kennzeichnen, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die Webentwicklern ermöglichen anzugeben, welche Felder erforderlich sind und sogar, welcher Art der Inhalt sein muss, der eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich jedoch darin, wie viel Gestaltung und Anpassung sie für solche Elemente zulassen.

## Textinput-Elemente gestalten

Elemente, die Texteingaben ermöglichen, wie `<input type="text">`, die spezifischeren `<input type="email">` und das `<textarea>`-Element, sind ziemlich einfach zu gestalten und verhalten sich meist wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente wird jedoch abhängig vom Betriebssystem und Browser, mit dem Ihr Benutzer die Seite besucht, unterschiedlich sein.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestaltet. Sie können sehen, dass Dinge wie Rahmen, Abstände und Innenabstände so angewendet werden, wie Sie es erwarten würden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

Versuchen Sie, das Beispiel zu bearbeiten, um das Aussehen des Formulars zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Innenabstände ändern.

```html live-sample___form
<form>
  <div><label for="name">Name</label> <input id="name" type="text" /></div>
  <div><label for="email">Email</label> <input id="email" type="email" /></div>

  <div class="buttons"><input type="submit" value="Submit" /></div>
</form>
```

```css hidden live-sample___form
body {
  font-family: sans-serif;
}
form > div {
  display: flex;
}

label {
  width: 10em;
}

.buttons {
  justify-content: center;
}
```

```css live-sample___form
input[type="text"],
input[type="email"] {
  border: 2px solid black;
  margin-bottom: 1em;
  padding: 10px;
  width: 80%;
}

input[type="submit"] {
  border: 3px solid #333333;
  background-color: #999999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: white;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  background-color: #333333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es weiterhin offensichtlich für den Benutzer ist, dass sie Formularelemente sind. Sie könnten ein Formulareingabefeld ohne Ränder und Hintergrund erstellen, das fast ununterscheidbar von dem umgebenden Inhalt ist, aber das würde es sehr schwer machen, es zu erkennen und damit zu interagieren.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für das Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für unterschiedliche Besucher ziemlich unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Formularverhalten normalisieren

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt widmet sich einigen der häufigsten Probleme und bietet Strategien, um damit umzugehen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftartstil. Daher, wenn Sie sicherstellen möchten, dass Ihre Formularfelder die auf dem body oder einem Elternelement definierte Schriftart verwenden, sollten Sie diese Regel in Ihr CSS aufnehmen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und box-sizing

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben die Eigenschaft `box-sizing` in [unserer Lektion zum Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) kennengelernt und Sie können dieses Wissen beim Gestalten von Formularen nutzen, um eine konsistente Erfahrung beim Einstellen von Breiten und Höhen von Formularelementen zu gewährleisten.

Um Konsistenz zu erreichen, ist es eine gute Idee, Abstände und Innenabstände auf `0` bei allen Elementen zu setzen und diese dann beim Gestalten bestimmter Steuerelemente wieder hinzuzufügen:

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Weitere nützliche Einstellungen

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elemente setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammen in ein "Reset" bringen

Als letzten Schritt können wir die besprochenen Eigenschaften in den folgenden "Formular-Reset" einpacken, um eine konsistente Basis zu schaffen, von der aus Sie arbeiten können. Dies umfasst alle in den letzten drei Abschnitten erwähnten Elemente:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> [!NOTE]
> Normalisierungsstile werden von vielen Entwicklern verwendet, um einen Satz von Basisstilen für alle Projekte zu erstellen. Typischerweise tun diese ähnliche Dinge wie die oben beschriebenen, indem sie sicherstellen, dass alles, was sich zwischen Browsern unterscheidet, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser heute typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel ansehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis für viele Projekte genutzt wird.

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS antreffen werden.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die bereitgestellten Informationen zum Umgang mit Bildern und Formularelementen in CSS verstanden und behalten haben.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
