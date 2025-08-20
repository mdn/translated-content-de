---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als normale Boxen, wenn es um die Gestaltung mit CSS geht. Zu verstehen, was möglich ist und was nicht, kann Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

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
          <li>Verständnis, wie ersetzte Elemente dimensioniert und layoutet werden.</li>
          <li>Grundlegendes Styling einfach zu stylender Formularelemente, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Basis zum Stylen schwieriger Elemente wie Formulare.</li>
          <li>Verständnis, dass nicht alle Formularelemente einfach zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** bezeichnet. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als solche mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass sie eine Größe sowohl in horizontaler (x) als auch in vertikaler (y) Richtung haben, und dass sie standardmäßig basierend auf den intrinsischen Dimensionen der Datei angezeigt werden.

## Größenanpassung von Bildern

Wie Sie bereits aus diesen Lektionen wissen, generiert alles in CSS eine Box. Wenn Sie ein Bild in eine Box platzieren, die kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei in eine Richtung, wird es entweder kleiner als die Box erscheinen oder die Box überlaufen. Sie müssen eine Entscheidung treffen, was mit dem Überlauf geschieht.

Im folgenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und streckt sich nicht, um sie zu füllen.
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

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine gängige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu sein, aber nicht größer. Diese Technik funktioniert auch bei anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, dem `<img>` Element im obigen Beispiel `max-width: 100%` hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere kleiner wird, um in die Box zu passen.

### Umgang mit Bildüberlauf mit `object-fit`

Sie können andere Entscheidungen über Bilder in Containern treffen. Zum Beispiel möchten Sie vielleicht ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hier helfen. Mit `object-fit` kann das ersetzte Element in einer Vielzahl von Weisen in eine Box eingepasst werden.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes durch die Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: dies skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Letterboxing", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Wenn Sie verschiedene CSS-Layouttechniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Zum Beispiel werden in einem Grid-Layout Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Grid-Bereiche")}} zu füllen. Bilder dehnen sich nicht; stattdessen werden sie am Anfang ihrer Grid-Bereiche ausgerichtet.

Dies können Sie im folgenden Beispiel sehen, wo wir einen zweispaltigen, zweireihigen Grid-Container haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte zu füllen. Das Bild jedoch dehnt sich nicht.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für den Moment behalten Sie einfach im Hinterkopf, dass ersetzte Elemente, wenn sie Teil eines spezifischen Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhaltensweisen haben, im Wesentlichen um zu vermeiden, dass sie auf seltsame Weise durch das Layout gedehnt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, mit CSS gestylt zu werden. Das Modul [Erweiterungen für Webformulare](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligsten Aspekte der Gestaltung bestimmter Formular-Eingabetypen, die wir hier nicht vertiefen werden. Es gibt jedoch einige grundlegende Aspekte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularelemente werden Ihrer Seite durch das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumspickern. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben, und auch Elemente, die zur Strukturierung und Beschriftung von Formularteilen verwendet werden, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind, und sogar, welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich dabei darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Texteingabeelementen

Elemente, die Texteingaben erlauben, wie `<input type="text">`, das spezifischere `<input type="email">`, und das `<textarea>`-Element sind ziemlich einfach zu stylen und neigen dazu, sich wie andere Boxen auf Ihrer Seite zu verhalten. Das Standardstyling dieser Elemente wird jedoch je nach Betriebssystem und Browser, den Ihr Benutzer für den Besuch der Website verwendet, unterschiedlich sein.

Im Beispiel unten haben wir einige Texteingaben mit CSS gestylt. Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu zielen.

Versuchen Sie, das Beispiel zu bearbeiten, um das Erscheinungsbild des Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriften sowie Abstände ändern.

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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es für den Benutzer offensichtlich bleibt, dass es sich um Formularelemente handelt. Sie könnten ein Formularelement ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar vom umgebenden Inhalt ist, was es jedoch sehr schwer erkennbar und nutzbar machen würde.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für das Styling unzugänglich. Deshalb sollten Sie immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in einer Reihe von Browsern testen.

## Normierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt untersucht einige der häufigsten Probleme und bietet Strategien zu deren Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstile. Wenn Sie also sicherstellen wollen, dass Ihre Formularfelder die auf dem Body oder auf einem Elternelement definierte Schrift verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und Box-Größenbestimmung

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Größenbestimmungsregeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Lektion zum Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und können dieses Wissen beim Styling von Formularen nutzen, um ein konsistentes Erlebnis bei der Einstellung von Breiten und Höhen auf Formularelementen zu gewährleisten.

Für Konsistenz ist es eine gute Idee, Ränder und Abstände auf `0` für alle Elemente zu setzen und sie dann beim Stylen bestimmter Steuerungen wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine notwendig ist:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem "Reset" zusammenfassen

Als abschließenden Schritt können wir die verschiedenen oben diskutierten Eigenschaften in den folgenden "Formular-Reset" einbinden, um eine konsistente Basis zu schaffen. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

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
> Normierende Stylesheets werden von vielen Entwicklern verwendet, um einen Satz von Basisstilen zu erstellen, die in allen Projekten verwendet werden. Typischerweise tun sie ähnliche Dinge wie die oben beschriebenen, indem sie sicherstellen, dass alles, was sich in Browsern unterscheidet, auf einen konsistenten Standard gesetzt wird, bevor Sie mit Ihrer eigenen Arbeit an der CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel ansehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis bei vielen Projekten verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS antreffen werden.

Im nächsten Artikel werden wir lernen, wie man HTML-Tabellen gestaltet.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
