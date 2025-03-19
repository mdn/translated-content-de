---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten, etwas anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann einiges an Frustration ersparen, und diese Lektion wird einige der Hauptpunkte hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images">Bilder</a>, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">Videos</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms">Formulare</a>. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und gestaltet werden.</li>
          <li>Grundlegendes Styling von leicht zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Grundlage, um schwierige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass es eine Größe sowohl in horizontaler (x) als auch vertikaler (y) Dimension hat und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt wird.

## Bilder dimensionieren

Wie Sie bereits aus diesen Lektionen wissen, generiert alles in CSS eine Box. Wenn Sie ein Bild in eine Box platzieren, die in eine Richtung kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei, wird es entweder kleiner als die Box angezeigt oder überläuft die Box. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im untenstehenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und füllt sie nicht aus.
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

Versuchen Sie, `max-width: 100%` zur Regel für das `<img>`-Element im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, das größere jedoch kleiner wird, um in die Box zu passen.

Sie können auch andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie möglicherweise ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hierbei helfen. Bei der Verwendung von `object-fit` kann das ersetzte Element auf verschiedene Arten dimensioniert werden, um in eine Box zu passen.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und dabei das Seitenverhältnis beibehält, so dass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box beschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies skaliert das Bild so weit herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Briefkasten-Effekt", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box ausfüllen wird, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layouttechniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders als andere Elemente verhalten. Zum Beispiel werden in einem Grid-Layout Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Gitternetzbereiche")}} auszufüllen. Bilder werden nicht gestreckt; stattdessen werden sie am Anfang ihrer Gitternetzbereiche ausgerichtet.

Dies kann man im Beispiel unten sehen, in dem wir einen Gitter-Container mit zwei Spalten und zwei Reihen haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte auszufüllen. Das Bild dehnt sich jedoch nicht aus.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für den Moment sollten Sie sich nur merken, dass ersetzte Elemente, wenn sie Teil eines spezifischen Layout-Systems wie Grid oder Flexbox werden, unterschiedliche Standardverhalten haben, um zu vermeiden, dass sie seltsam durch das Layout verzerrt werden.

## Formularelemente

Formularelemente können eine knifflige Angelegenheit sein, wenn es um das Styling mit CSS geht. Das [Web Forms-Erweiterungsmodul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte des Stylings bestimmter Formulareingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Punkte, die es wert sind, hier hervorgehoben zu werden.

Viele Formularsteuerungen werden auf Ihrer Seite durch das [`<input>`](/de/docs/Web/HTML/Element/input)-Element hinzugefügt — dies definiert einfache Formularfelder wie Texteingaben, bis hin zu komplexeren Feldern wie Farb- und Datumswähler. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeilige Texteingaben, und auch Elemente zur Gruppierung und Beschriftung von Teilen von Formularen, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar die Art des Inhalts, der eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Texteingabeelementen

Elemente, die die Eingabe von Text erlauben, wie `<input type="text">`, und die spezifischeren `<input type="email">`, sowie das `<textarea>`-Element sind recht einfach zu stylen und neigen dazu, sich genau wie andere Boxen auf Ihrer Seite zu verhalten. Die Standardgestaltung dieser Elemente hängt jedoch vom Betriebssystem und Browser ab, den der Benutzer verwendet, um die Seite zu besuchen.

Im untenstehenden Beispiel haben wir einige Texteingaben mit CSS gestaltet — Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände alle angewendet werden, wie Sie es erwarten würden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzuzielen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Rahmen ändern, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Abstände ändern.

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
> Sie sollten darauf achten, beim Ändern des Stylings von Formularelementen sicherzustellen, dass es für den Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast nicht von dem drumherum befindlichen Inhalt zu unterscheiden ist, aber dies würde es sehr schwer erkennbar und bedienbar machen.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind nicht zugänglich für Styling. Sie sollten daher immer davon ausgehen, dass Formulare bei verschiedenen Besuchern unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt betrachtet einige der häufigsten Probleme und bietet Strategien zu deren Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstile. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf dem Body oder einem Elternelement definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Formularelemente verwenden in verschiedenen Browsern unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Boxmodell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt, und Sie können dieses Wissen verwenden, wenn Sie Formulare gestalten, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Der Konsistenz halber ist es eine gute Idee, Ränder und Abstände auf `0` auf allen Elementen zu setzen und diese dann beim Stylen bestimmter Steuerelemente hinzufügen:

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

Zusätzlich zu den oben erwähnten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser einen Scrollbalken anzeigen, wenn kein Bedarf dafür besteht:

```css
textarea {
  overflow: auto;
}
```

### Alles zu einem "Reset" zusammenfassen

Als letzten Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Formular-Reset" einfügen, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

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
> Normalisierung-Stylesheets werden von vielen Entwicklern verwendet, um einen Satz von Basis-Styles zu erstellen, die in allen Projekten verwendet werden können. Typischerweise tun sie ähnliche Dinge wie die oben beschriebenen, indem sie sicherstellen, dass alles, was in verschiedenen Browsern unterschiedlich ist, zunächst auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit zum CSS hinzufügen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr populäres Stylesheet ist, das als Basis in vielen Projekten verwendet wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS antreffen werden.

Im nächsten Artikel werden wir lernen, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Styling von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
