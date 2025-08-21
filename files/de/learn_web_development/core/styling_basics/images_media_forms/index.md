---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Möglichkeiten, sie mit CSS zu gestalten, ein wenig anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen vermeiden, und diese Lektion wird einige der Hauptpunkte hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-<a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">Bilder</a>, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">Videos</a>, und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms">Formulare</a>. CSS-<a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegende Gestaltung leicht zu stylender Formularelemente, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Basis, um schwierige Elemente wie Formulare zu gestalten.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu gestalten sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, kann CSS mit einem Bild verschiedene Dinge machen.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Dies bedeutet, dass es eine Größe in beiden horizontalen (x) und vertikalen (y) Dimensionen hat und standardmäßig mit den inhärenten Abmessungen der Datei angezeigt wird.

## Größe von Bildern

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box platzieren, die in eine Richtung kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei, wird es entweder kleiner als die Box angezeigt oder überläuft die Box. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und streckt sich nicht, um sie zu füllen.
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

Was können wir gegen das Überlaufproblem tun?

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist es eine gängige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es, dass das Bild kleiner als die Box wird, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur `<img>`-Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere wird kleiner, um in die Box zu passen.

### Umgang mit Bildüberlauf mit `object-fit`

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie möglicherweise ein Bild so dimensionieren, dass es die Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hierbei helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Arten in eine Box eingepasst werden.

Im Folgenden verwendet das erste Beispiel den Wert `cover`, das das Bild verkleinert und dabei das Seitenverhältnis beibehält, sodass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies skaliert das Bild so weit herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", da es nicht das gleiche Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllen wird, aber das Seitenverhältnis nicht beibehalten wird.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layouttechniken bei ersetzten Elementen verwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Beispielsweise werden in einem Rasterlayout Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Rasterbereiche")}} zu füllen. Bilder werden jedoch nicht gestreckt; stattdessen sind sie am Anfang ihrer Rasterbereiche ausgerichtet.

Sie können dieses Verhalten im folgenden Beispiel sehen, wo wir einen zweispaltigen, zweireihigen Rastercontainer haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und strecken sich, um die Reihe und Spalte zu füllen. Das Bild hingegen streckt sich nicht.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für jetzt sollten Sie sich merken, dass ersetzte Elemente, wenn sie Teil eines spezifischen Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhalten haben, um im Wesentlichen zu vermeiden, dass sie durch das Layout seltsam gestreckt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, sie mit CSS zu gestalten. Das [Web-Formular-Erweiterungsmodul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte der Gestaltung bestimmter Formulareingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerungen werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element auf Ihre Seite hinzugefügt – dieses definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben, und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu beschreiben, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält zudem Attribute, die Webentwickler nutzen können, um anzugeben, welche Felder erforderlich sind und sogar die Art des Inhalts, der eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Unterschiedliche Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Texteingabeelementen

Elemente, die Texteingaben wie `<input type="text">`, das spezifischere `<input type="email">` und das `<textarea>`-Element erlauben, sind recht einfach zu gestalten und verhalten sich tendenziell wie andere Boxen auf Ihrer Seite. Das Standard-Styling dieser Elemente unterscheidet sich jedoch je nach Betriebssystem und Browser, mit dem Ihr Benutzer die Website aufruft.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestaltet. Sie können sehen, dass Dinge wie Ränder, Abstände und Innenabstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es dem Benutzer immer noch offensichtlich ist, dass sie Formularelemente sind. Sie könnten ein Formulareingabefeld ohne Ränder und Hintergrund erstellen, das kaum vom umgebenden Inhalt zu unterscheiden ist, aber dies würde es sehr schwierig machen, es zu erkennen und damit zu interagieren.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind nicht für das Styling zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen werden und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt behandelt einige der häufigsten Probleme und bietet Strategien, um mit ihnen umzugehen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftart-Styling. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die im body oder einem Elternelement definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und Box-Modell

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Modell-Regeln für unterschiedliche Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und können dieses Wissen beim Styling von Formularen anwenden, um eine konsistente Erfahrung bei der Festlegung von Breiten und Höhen auf Formularelementen zu gewährleisten.

Aus Konsistenzgründen ist es eine gute Idee, Abstände und Innenabstände auf `0` für alle Elemente zu setzen und diese dann beim Styling bestimmter Steuerungen wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elemente setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem "Reset" zusammenfassen

Als letzten Schritt können wir die verschiedenen oben diskutierten Eigenschaften in den folgenden "Form-Reset" zusammenfassen, um eine konsistente Basis zu schaffen. Dies umfasst alle in den letzten drei Abschnitten genannten Punkte:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Grundstilen zu erstellen, die in allen Projekten verwendet werden können. Typischerweise tun sie ähnliche Dinge wie oben beschrieben, um sicherzustellen, dass alles, was zwischen Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser normalerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel ansehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis von vielen Projekten verwendet wird.

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel werden wir Ihnen einige Tests anbieten, mit denen Sie überprüfen können, wie gut Sie die Informationen zu Bild- und Formularelementen in CSS verstanden und behalten haben.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
