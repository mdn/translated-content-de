---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Möglichkeit, sie mit CSS zu stylen, etwas anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >Bilder</a
        >, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Video</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >Formulare</a
        >. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenänderung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von leicht zu stylenden Formularelementen wie Texteingaben.</li>
          <li>Verwendung eines CSS-Reset als Grundlage zum Stylen von schwierigen Elementen wie Formularen.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente wie Bilder und Videos werden auch als mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** versehen beschrieben. Dies bedeutet, dass es eine Größe in sowohl horizontaler (x) als auch vertikaler (y) Dimension hat und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt wird.

## Bilder skalieren

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einsetzen, die in einer Richtung kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei, wird es entweder kleiner als die Box erscheinen oder über den Rand der Box hinaus ragen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, jeweils 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
- Die andere ist größer als 200 Pixel und ragt über die Box hinaus.

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

Wie wir in [Größenänderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine gängige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur Regel des `<img>`-Elements im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere wird kleiner, um in die Box zu passen.

### Umgang mit Bildüberlauf durch `object-fit`

Sie können andere Entscheidungen in Bezug auf Bilder in Behältern treffen. Zum Beispiel möchten Sie ein Bild möglicherweise so skalieren, dass es eine Box vollständig abdeckt.

Die Eigenschaft {{cssxref("object-fit")}} kann Ihnen hier helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Weise an eine Box angepasst werden.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box ordentlich ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", da es nicht das gleiche Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box ausfüllt, jedoch das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente in Layouts

Bei der Verwendung verschiedener CSS-Layouttechniken für ersetzte Elemente werden Sie möglicherweise feststellen, dass sie sich leicht anders verhalten als andere Elemente. Zum Beispiel werden in einem Grid-Layout die Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Grid-Bereiche")}} auszufüllen. Bilder dehnen sich nicht; stattdessen sind sie am Anfang ihrer Grid-Bereiche ausgerichtet.

Dieses Verhalten können Sie im folgenden Beispiel sehen, in dem wir einen zweispaltigen, zweizeiligen Grid-Container mit vier darin enthaltenen Elementen haben. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich, um die Zeile und die Spalte auszufüllen. Das Bild jedoch dehnt sich nicht.

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

Sie werden das Layout erst in einem späteren Modul studieren. Vorerst sollten Sie nur beachten, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhaltensweisen aufweisen, um zu vermeiden, dass sie vom Layout seltsam verzerrt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es um das Styling mit CSS geht. Das [Web Forms Extensions-Modul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligeren Aspekte des Stylings bestimmter Formulareingabetypen, auf die wir hier nicht näher eingehen werden. Es gibt jedoch einige grundlegende Dinge, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularelemente werden auf Ihrer Seite über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element hinzugefügt — dies definiert einfache Eingabefelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben sowie Elemente, die zum Enthalten und Benennen von Teilen von Formularen wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend) verwendet werden.

HTML enthält auch Attribute, die Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar, welcher Inhaltstyp eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Unterschiedliche Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Text-Eingabeelemente stylen

Elemente, die Texteingaben zulassen wie `<input type="text">`, das spezifischere `<input type="email">` und das `<textarea>`-Element, sind recht einfach zu stylen und verhalten sich in der Regel wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente wird sich jedoch je nach Betriebssystem und Browser unterscheiden, das Ihr Benutzer zur Seite besucht.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt. Sie können sehen, dass Dinge wie Rahmen, Ränder und Innenabstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu targetieren.

Versuchen Sie, das Beispiel zu bearbeiten, um das Aussehen des Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten sowie Innenabstände ändern.

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
  margin: 0 0 1em 0;
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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es für den Benutzer offensichtlich bleibt, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar vom umliegenden Inhalt ist, aber das würde es sehr schwer erkennbar und interaktiv machen.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für das Styling nicht zugänglich. Daher sollten Sie immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Normalisieren des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt behandelt einige der häufigsten Probleme und bietet Strategien zu deren Lösung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstilierung. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf dem `<body>` oder einem übergeordneten Element definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Über verschiedene Browser hinweg verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die Eigenschaft `box-sizing` in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und können dieses Wissen beim Styling von Formularen nutzen, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen von Formularelementen zu gewährleisten.

Für Konsistenz ist es eine gute Idee, `margin` und `padding` auf `0` bei allen Elementen zu setzen und diese dann beim Stylen bestimmter Steuerungen wieder hinzuzufügen:

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

Zusätzlich zu den obigen Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass ältere Browser eine Bildlaufleiste anzeigen, wenn keine erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammenfassen zu einem "Reset"

Als letzter Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Form-Reset" zusammenfassen, um eine konsistente Grundlage zu schaffen. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

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
> Normalisierung von Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Basisstilen für alle Projekte zu erstellen. Sie tun in der Regel ähnliche Dinge wie die oben beschriebenen, um sicherzustellen, dass alles, was zwischen Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit an der CSS durchführen. Sie sind nicht mehr so wichtig wie früher, da Browser üblicherweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis für viele Projekte verwendet wird.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Ihnen beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS begegnen werden.

Im nächsten Artikel lernen wir, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Formstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
