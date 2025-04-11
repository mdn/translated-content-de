---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu gestalten, etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustration ersparen, und diese Lektion wird einige der Hauptpunkte hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">Bilder</a>, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">Videos</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms">Formulare</a>. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegende Gestaltung von leicht zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Reset als Basis, um schwierige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu stylen sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann - nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als solche mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Dies bedeutet, dass sie eine Größe in sowohl der horizontalen (x) als auch vertikalen (y) Dimension haben und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt werden.

## Bildergrößenanpassung

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die in einer Richtung kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei, erscheint es entweder kleiner als die Box oder überläuft die Box. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf geschieht.

Im untenstehenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist - es ist kleiner als die Box und dehnt sich nicht aus, um sie auszufüllen.
- Das andere ist größer als 200 Pixel und überläuft die Box.

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

Was können wir also gegen das Überlaufproblem tun?

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, besteht eine gängige Technik darin, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dadurch kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch bei anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur `<img>` Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere kleiner wird, um in die Box zu passen.

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel könnten Sie ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}} Eigenschaft kann Ihnen hier helfen. Bei Verwendung von `object-fit` kann das ersetzte Element auf verschiedene Weisen auf eine Box abgestimmt werden.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box ordentlich ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box beschnitten. Das zweite Beispiel verwendet `contain` als Wert: Es skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllt, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Bei der Verwendung verschiedener CSS-Layouttechniken auf ersetzten Elementen können Sie feststellen, dass sie sich leicht anders verhalten als andere Elemente. Zum Beispiel werden in einem Grid-Layout die Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Gitterflächen")}} auszufüllen. Bilder dehnen sich nicht; stattdessen werden sie am Anfang ihrer Gitterflächen ausgerichtet.

Sie können dies im Beispiel unten sehen, wo wir einen Zwei-Spalten-Zwei-Reihen-Grid-Container haben, der vier Elemente enthält. Alle `<div>` Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte zu füllen. Das Bild allerdings dehnt sich nicht.

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

Sie werden das Layout erst in einem späteren Modul studieren. Merken Sie sich vorerst nur, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhalten aufweisen, im Wesentlichen um zu vermeiden, dass sie seltsam durch das Layout gedehnt werden.

## Formularelemente

Formularelemente können bei der Gestaltung mit CSS ein einfaches Problem darstellen. Das [Web Forms-Erweiterungsmodul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligeren Aspekte der Gestaltung bestimmter Formulareingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Aspekte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerelemente werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element zu Ihrer Seite hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswähler. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu beschriften, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar die Art des Inhalts, der eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente erlauben.

## Stilisierung von Texteingabeelementen

Elemente, die Texteingabe ermöglichen, wie `<input type="text">` und die spezifischeren `<input type="email">` sowie das `<textarea>` Element sind recht einfach zu stylen und neigen dazu, sich wie andere Boxen auf Ihrer Seite zu verhalten. Das Standardstyling dieser Elemente wird sich jedoch basierend auf dem Betriebssystem und dem Browser, den Ihr Benutzer bei Besuch der Seite verwendet, unterscheiden.

Im untenstehenden Beispiel haben wir einige Texteingaben mit CSS gestaltet – Sie können sehen, dass Dinge wie Ränder, Abstände und Polster wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu zielen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Polster ändern.

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
  border: 2px solid #000;
  margin: 0 0 1em 0;
  padding: 10px;
  width: 80%;
}

input[type="submit"] {
  border: 3px solid #333;
  background-color: #999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: #fff;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  background-color: #333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> Sie sollten Vorsicht walten lassen, wenn Sie das Stil von Formularelementen ändern, um sicherzustellen, dass es für den Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formularelement ohne Ränder und Hintergrund erstellen, das fast ununterscheidbar vom umgebenden Inhalt ist, was es jedoch sehr schwer erkennbar und interaktiv macht.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher recht unterschiedlich aussehen und komplexe Formulare in einer Anzahl von Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in unterschiedlichen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt behandelt einige der häufigsten Probleme und bietet Strategien zur Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente keine Schriftstyling von Standard. Wenn Sie also sicher sein möchten, dass Ihre Formularfelder die auf den Body oder ein Elternelement festgelegte Schriftart verwenden, sollten Sie diese Regel in Ihr CSS aufnehmen.

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

In unterschiedlichen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben die `box-sizing` Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) kennengelernt und können dieses Wissen beim Styling von Formularen verwenden, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelemente zu gewährleisten.

Um Konsistenz zu gewährleisten, ist es eine gute Idee, Margen und Polster auf `0` für alle Elemente zu setzen und diese dann beim Styling bestimmter Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>` Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollbar anzeigen, wenn diese nicht benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammen in einem "Reset"

Als abschließender Schritt können wir die verschiedenen oben genannten Eigenschaften in den folgenden "Form Reset" einpacken, um eine konsistente Basis zu bieten, von der aus gearbeitet werden kann. Dies enthält alle in den letzten drei Abschnitten erwähnten Elemente:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um einen Satz von Basis-Styles für alle Projekte zu erstellen. Typischerweise machen diese ähnliche Dinge wie die oben beschriebenen, um sicherzustellen, dass alles Unterschiedliche in Browsern auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS ausführen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis in vielen Projekten verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – sehen Sie [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS begegnen werden.

Im nächsten Artikel lernen wir, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
