---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 001a6992ec60f0dccd073a3db223c320835188ad
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf ihre Styling-Möglichkeiten mit CSS etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >Bilder</a
        >, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Video</a
        >, und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >Formulare</a
        >. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie Ersatzelemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von einfach zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Grundlage zum Stylen kniffliger Elemente wie Formulare.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu stylen sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersatzelemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "Ersatzelemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild machen kann.

Bestimmte Ersatzelemente, wie Bilder und Videos, werden auch als solche mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass sie eine Größe in den horizontalen (x) und vertikalen (y) Dimensionen haben und standardmäßig mit den intrinsischen Dimensionen der Datei angezeigt werden.

## Bilder skalieren

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einsetzen, die in eine der beiden Richtungen kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei, erscheint es entweder kleiner als die Box oder läuft über die Box hinaus. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und füllt sie nicht aus.
- Die andere ist größer als 200 Pixel und läuft über die Box hinaus.

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

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine gängige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch mit anderen Ersatzelementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur Regel des `<img>`-Elements im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, das größere jedoch kleiner wird, um in die Box zu passen.

### Bildüberlauf mit `object-fit` handhaben

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie möglicherweise ein Bild in der Größe so anpassen, dass es eine Box vollständig bedeckt.

Die Eigenschaft {{cssxref("object-fit")}} kann Ihnen dabei helfen. Wenn Sie `object-fit` verwenden, kann das Ersatzelement auf verschiedene Weise so dimensioniert werden, dass es in eine Box passt.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild herunterdimensioniert, wobei das Seitenverhältnis beibehalten wird, sodass es ordentlich die Box füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Balkenbildung", da es nicht das gleiche Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllen wird, aber das Seitenverhältnis nicht beibehält.

## Ersatzelemente im Layout

Wenn Sie verschiedene CSS-Layout-Techniken auf Ersatzelemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Zum Beispiel werden in einem Gitterlayout die Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Gitterbereich")}} auszufüllen. Bilder werden nicht gestreckt; stattdessen sind sie am Anfang ihres Gitterbereichs ausgerichtet.

Sie können dies im folgenden Beispiel sehen, in dem wir einen Gittercontainer mit zwei Spalten und zwei Reihen haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und die Spalte zu füllen. Das Bild dehnt sich jedoch nicht aus.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für den Moment sollten Sie nur im Hinterkopf behalten, dass Ersatzelemente, wenn sie Teil eines bestimmten Layoutsystems wie Gitter oder Flexbox werden, unterschiedliche Standardverhalten haben, im Wesentlichen um zu verhindern, dass sie durch das Layout seltsam gedehnt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, sie mit CSS zu stylen. Das [Web Forms Extensions-Modul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte beim Styling bestimmter Formulareingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Dinge, die es wert sind, in diesem Abschnitt hervorgehoben zu werden.

Viele Formularelemente werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element zu Ihrer Seite hinzugefügt — dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeiligen Texteingaben und auch Elemente, die zum Darstellen und Beschriften von Teilen von Formularen wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend) verwendet werden.

HTML enthält auch Attribute, die es Webentwicklern ermöglichen anzugeben, welche Felder erforderlich sind und sogar welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich voneinander in Bezug auf den Umfang der Stil- und Anpassungsmöglichkeiten für solche Elemente.

## Styling von Texteingabeelementen

Elemente, die Texteingaben zulassen, wie `<input type="text">`, die spezifischeren `<input type="email">`, und das `<textarea>`-Element, sind recht einfach zu stylen und neigen dazu, sich wie andere Boxen auf Ihrer Seite zu verhalten. Das Standardstyling dieser Elemente wird jedoch je nach Betriebssystem und Browser, den Ihr Benutzer zur Seite besucht, unterschiedlich sein.

Im untenstehenden Beispiel haben wir einige Texteingaben mit CSS gestylt. Sie können sehen, dass Dinge wie Rahmen, Ränder und Innenabstände wie erwartet gelten. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

Versuchen Sie, das Beispiel zu bearbeiten, um die Darstellung des Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriften sowie Innenabstände ändern.

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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es für den Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formularelement ohne Rahmen und Hintergrund erstellen, das fast nicht von den umliegenden Inhalten zu unterscheiden ist, aber dies würde es sehr schwer machen, es zu erkennen und damit zu interagieren.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind nicht für das Styling zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen werden, und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt betrachtet einige der häufigsten Probleme und bietet Strategien zu deren Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftarteneinstellungen. Daher sollten Sie, wenn Sie sicherstellen möchten, dass Ihre Formularfelder die auf dem body oder einem übergeordneten Element definierte Schriftart verwenden, diese Regel zu Ihrem CSS hinzufügen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und Box-Sizing

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt, und Sie können dieses Wissen beim Styling von Formularen nutzen, um eine konsistente Erfahrung beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Um Konsistenz zu erreichen, ist es eine gute Idee, Ränder und Innenabstände auf `0` bei allen Elementen zu setzen und sie dann beim Stylen bestimmter Steuerelemente wieder hinzuzufügen:

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

### Andere nützliche Einstellungen

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammenfassen in einem "Reset"

Als letzten Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Formular-Reset" einwickeln, um eine konsistente Basis zu schaffen. Dies umfasst alle in den letzten drei Abschnitten erwähnten Artikel:

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
> Normalisierungsstileheets werden von vielen Entwicklern verwendet, um eine Reihe von Grundstilen zu erstellen, die in allen Projekten verwendet werden können. In der Regel tun sie ähnliche Dinge wie die oben beschriebenen, indem sie sicherstellen, dass alles, was in Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS ausführen. Sie sind nicht mehr so wichtig wie früher, da Browser in der Regel konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis von vielen Projekten verwendet wird.

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über den Umgang mit Bildern und Formularelementen in CSS gegeben haben, verstanden und behalten haben.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
