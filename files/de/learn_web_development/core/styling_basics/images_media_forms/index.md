---
title: Bilder, Medien und Formularelemente
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als normale Boxen in Bezug auf Ihre Fähigkeit, sie mit CSS zu stylen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >Bilder</a
        >, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Videos</a
        >, und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >Formulare</a
        >. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von einfach zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Grundlage, um schwierige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu stylen sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite relativ zu anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild machen kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass es eine Größe in sowohl der horizontalen (x) als auch der vertikalen (y) Dimension hat und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt wird.

## Bildgrößenanpassung

Wie Sie aus diesen Lektionen bereits wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box setzen, die kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei in einer der beiden Richtungen, erscheint es entweder kleiner als die Box oder läuft über die Box hinaus. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
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

Was können wir also gegen das Überlaufproblem tun?

Wie wir bei [Größeneinheiten im CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, besteht eine häufige Technik darin, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dadurch wird das Bild kleiner als die Box und nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Element/video)s oder [`<iframe>`](/de/docs/Web/HTML/Element/iframe)s.

Versuchen Sie, `max-width: 100%` zur `<img>`-Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass sich das kleinere Bild nicht verändert, aber das größere wird kleiner, um in die Box zu passen.

Sie können auch andere Entscheidungen über Bilder in Containern treffen. Zum Beispiel möchten Sie möglicherweise ein Bild auf eine Größe bringen, die eine Box vollständig abdeckt.

Die Eigenschaft {{cssxref("object-fit")}} kann Ihnen dabei helfen. Bei der Verwendung von `object-fit` kann das ersetzte Element so dimensioniert werden, dass es eine Box auf verschiedene Weisen ausfüllt.

Unten nutzt das erste Beispiel den Wert `cover`, der das Bild so verkleinert, dass es das Seitenverhältnis beibehält und die Box sauber ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten. Das zweite Beispiel nutzt `contain` als Wert: Dies skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dadurch entsteht ein "Letterboxing", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, welcher die Box ausfüllt, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layout-Techniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich leicht anders als andere Elemente verhalten. Zum Beispiel werden in einem Rasterlayout Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Rasterbereiche")}} zu füllen. Bilder strecken sich nicht; stattdessen werden sie an den Anfang ihrer Rasterbereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen zweispaltigen, zweireihigen Rastercontainer mit vier Elementen haben. Alle `<div>`-Elemente haben eine Hintergrundfarbe und strecken sich, um die ganze Reihe und Spalte zu füllen. Das Bild jedoch streckt sich nicht.

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

Sie werden sich mit dem Layout erst in einem späteren Modul befassen. Beachten Sie aber, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layout-Systems wie Raster oder Flexbox werden, unterschiedliche Standardverhalten aufweisen, hauptsächlich um zu vermeiden, dass sie durch das Layout seltsam gedehnt werden.

## Formularelemente

Formularelemente können ein kniffliges Thema sein, wenn es um das Styling mit CSS geht. Das [Web Forms-Erweiterungsmodul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligeren Aspekte des Stylings bestimmter Formular-Eingabetypen, auf die wir hier nicht näher eingehen werden. Es gibt jedoch einige wesentliche Grundlagen, die es wert sind, in diesem Abschnitt hervorgehoben zu werden.

Viele Formularelemente werden durch das [`<input>`](/de/docs/Web/HTML/Element/input)-Element auf Ihrer Seite hinzugefügt — dieses definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumswähler. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeilige Texteingaben und auch Elemente, die zum Gruppieren und Beschriften von Formularteilen verwendet werden, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind, und sogar die Art der Inhalte, die eingegeben werden müssen. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Text-Eingabeelementen

Elemente, die Texteingaben zulassen, wie `<input type="text">`, und die spezifischeren `<input type="email">`, und das `<textarea>`-Element sind ziemlich einfach zu stylen und verhalten sich tendenziell wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente unterscheidet sich jedoch abhängig vom Betriebssystem und dem Browser, den der Benutzer verwendet, um die Seite zu besuchen.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt — Sie können sehen, dass Dinge wie Rahmen, Abstände und Auffüllungen wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu selektieren. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Umrandungen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Abstände ändern.

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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es dem Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar von dem umgebenden Inhalt ist, jedoch würde dies die Erkennung und Interaktion sehr erschweren.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind dem Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. In diesem Abschnitt werden einige der häufigsten Probleme behandelt und Strategien zu deren Bewältigung vorgestellt.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente die Schriftstile standardmäßig nicht. Wenn Sie daher sicherstellen möchten, dass Ihre Formularfelder die im body oder einem übergeordneten Element definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Über verschiedene Browser hinweg nutzen Formularelemente unterschiedliche Box-Sizing-Regeln für unterschiedliche Widgets. Sie haben über die Eigenschaft `box-sizing` in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und können dieses Wissen beim Stylen von Formularen einsetzen, um ein konsistentes Erlebnis beim Setzen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Für Konsistenz ist es eine gute Idee, Abstände und Auffüllungen auf `0` für alle Elemente zu setzen und diese dann bei der Gestaltung bestimmter Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben erwähnten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elemente setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles in ein „Reset“ zusammenfassen

Als letzten Schritt können wir die verschiedenen oben diskutierten Eigenschaften in den folgenden „Formular-Reset“ einpacken, um eine konsistente Basis zu schaffen. Dies schließt alle in den letzten drei Abschnitten genannten Punkte ein:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Basisstilen zu erstellen, die in allen Projekten verwendet werden. Typischerweise tun sie Ähnliches wie das oben Beschriebene, indem sie sicherstellen, dass alles, was zwischen den Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie an Ihrer eigenen Arbeit am CSS arbeiten. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch einen Blick auf ein Beispiel werfen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Grundlage für viele Projekte genutzt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Images and form elements](/de/docs/Learn_web_development/Core/Styling_basics/Images_tasks).

## Zusammenfassung

In dieser Lektion wurden einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel lernen wir, wie HTML-Tabellen gestylt werden.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Formularstyle](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
