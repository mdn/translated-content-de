---
title: Bilder, Medien und Formularelemente
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu stylen, ein wenig anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

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
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von leicht zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Basis, um schwierige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass sie eine Größe in sowohl horizontaler (x) als auch vertikaler (y) Dimension haben und standardmäßig mit den intrinsischen Dimensionen der Datei angezeigt werden.

## Bilder skalieren

Wie Sie bereits aus den bisherigen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei in eine Richtung, wird es entweder kleiner als die Box erscheinen oder über die Box hinausragen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist - es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
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

Was können wir also gegen das Überlaufproblem tun?

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine gängige Technik, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Element/video)s oder [`<iframe>`](/de/docs/Web/HTML/Element/iframe)s.

Versuchen Sie, `max-width: 100%` zur Regel des `<img>`-Elements im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere wird kleiner, um in die Box zu passen.

Sie können auch andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann dabei helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element in einer Vielzahl von Weisen dimensioniert werden, um in eine Box zu passen.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes durch die Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies skaliert das Bild so weit herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Letterboxing", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Bei der Verwendung verschiedener CSS-Layouttechniken auf ersetzten Elementen stellen Sie möglicherweise fest, dass sie sich etwas anders verhalten als andere Elemente. In einem Rasterlayout beispielsweise werden Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Rasterbereiche")}} auszufüllen. Bilder werden nicht gedehnt; stattdessen sind sie zum Anfang ihrer Rasterbereiche ausgerichtet.

Sie können dies in dem unten stehenden Beispiel sehen, in dem wir einen Rastercontainer mit zwei Spalten und zwei Zeilen haben, in dem vier Elemente enthalten sind. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um Zeilen und Spalten auszufüllen. Das Bild jedoch dehnt sich nicht aus.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für den Moment behalten Sie im Hinterkopf, dass ersetzte Elemente, wenn sie Teil eines spezifischen Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhalten haben, im Wesentlichen um zu vermeiden, dass sie seltsam durch das Layout gestreckt werden.

## Formularelemente

Formularelemente können eine knifflige Angelegenheit sein, wenn es um das Stylen mit CSS geht. Das [Web Forms Extensions-Modul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte des Stylens bestimmter Formular-Eingabetypen, auf die wir hier nicht näher eingehen. Es gibt jedoch einige grundlegende Dinge, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerungen werden durch das [`<input>`](/de/docs/Web/HTML/Element/input)-Element zu Ihrer Seite hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeiligen Textinput, und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu kennzeichnen, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar die Art des Inhalts, die eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Unterschiedliche Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Text-Eingabeelemente stylen

Elemente, die eine Texteingabe ermöglichen, wie `<input type="text">` und die spezifischeren `<input type="email">` sowie das `<textarea>`-Element, sind recht einfach zu stylen und verhalten sich in der Regel wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente variiert jedoch basierend auf dem Betriebssystem und dem Browser, mit dem Ihr Benutzer die Seite besucht.

Im Beispiel unten haben wir einige Texteingaben mit CSS gestylt – Sie können sehen, dass Dinge wie Ränder, Abstände und Innenabstände wie erwartet anwendbar sind. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu markieren. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Innenabstände ändern.

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
> Sie sollten darauf achten, beim Ändern des Stylings von Formularelementen dafür zu sorgen, dass für den Benutzer weiterhin erkennbar ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Ränder und Hintergrund erstellen, das fast nicht von dem umgebenden Inhalt zu unterscheiden ist, was es jedoch sehr schwer erkennbar und interaktiv macht.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind nicht stylingfähig. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in einer Vielzahl von Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt beleuchtet einige der häufigsten Probleme und bietet Strategien zur Bewältigung dieser Probleme.

### Vererbung und Formularelemente

In manchen Browsern erben Formularelemente die Schriftstile standardmäßig nicht. Wenn Sie sicherstellen möchten, dass Ihre Formularfelder die auf dem Body oder einem Elternelement definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Boxmodell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und können dieses Wissen beim Stylen von Formularen verwenden, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Um Konsistenz zu erreichen, ist es eine gute Idee, Abstände und Innenabstände auf `0` bei allen Elementen zu setzen und diese dann wieder hinzuzufügen, wenn bestimmte Steuerelemente gestylt werden:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn sie nicht benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem "Reset" zusammenfassen

Als letzten Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Form-Reset" zusammenfassen, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies schließt alle in den letzten drei Abschnitten erwähnten Punkte ein:

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
> Normalisierungsstylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Basisstilen für alle Projekte zu erstellen. Typischerweise tun sie ähnliche Dinge wie oben beschrieben, um sicherzustellen, dass alles über verschiedene Browser hinweg auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit an der CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da sich Browser typischerweise konsistenter verhalten als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis von vielen Projekten verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, denen Sie begegnen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel lernen wir, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
