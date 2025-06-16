---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Fähigkeit, sie mit CSS zu stylen, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

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
        >. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von einfach zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwenden eines CSS-Resets als Basis für das Styling von schwierigen Elementen wie Formularen.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** bezeichnet. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** versehen beschrieben. Das bedeutet, dass es eine Größe sowohl in den horizontalen (x) als auch vertikalen (y) Dimensionen hat und standardmäßig unter Verwendung der intrinsischen Abmessungen der Datei angezeigt wird.

## Bildergrößenanpassung

Wie Sie aus diesen Lektionen bereits wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box platzieren, die in einer Richtung kleiner oder größer als die intrinsischen Abmessungen der Bilddatei ist, wird es entweder kleiner als die Box erscheinen oder aus der Box herausfließen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht aus, um sie auszufüllen.
- Das andere ist größer als 200 Pixel und fließt aus der Box heraus.

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

Wie wir im [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine häufige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es, dass das Bild kleiner als die Box wird, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur `<img>` Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere kleiner wird, um in die Box zu passen.

### Überlauf von Bildern mit `object-fit` handhaben

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie vielleicht ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}} Eigenschaft kann Ihnen dabei helfen. Beim Verwenden von `object-fit` kann das ersetzte Element auf verschiedene Weise an eine Box angepasst werden.

Unten verwendet das erste Beispiel den Wert `cover`, der das Bild auf die Größe reduziert und das Seitenverhältnis beibehält, sodass es die Box ordentlich ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes durch die Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: dies skaliert das Bild nach unten, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", da es nicht das gleiche Seitenverhältnis wie die Box hat.

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

Sie könnten auch den Wert `fill` ausprobieren, der die Box ausfüllt, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layout-Techniken auf ersetzte Elemente anwenden, können Sie feststellen, dass sie sich geringfügig anders verhalten als andere Elemente. In einem Grid-Layout zum Beispiel werden Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Gitterbereiche")}} auszufüllen. Bilder werden nicht gestreckt; stattdessen werden sie am Anfang ihrer Gitterbereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen Grid-Container mit zwei Spalten und zwei Reihen haben, der vier Elemente enthält. Alle `<div>` Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte auszufüllen. Das Bild jedoch dehnt sich nicht aus.

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

Sie werden sich mit Layouts erst in einem späteren Modul befassen. Für den Moment sollten Sie nur im Hinterkopf behalten, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhaltensweisen aufweisen, um zu vermeiden, dass sie vom Layout seltsam gestreckt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, mit CSS gestylt zu werden. Das [Web Forms Extensions Modul](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte des Stylens bestimmter Formulareingabetypen, auf die wir hier nicht weiter eingehen werden. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularelemente werden durch das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element auf Ihrer Seite hinzugefügt — dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farbe und Datumsauswahl. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeiligen Texteingaben und auch Elemente zur Gruppierung und Beschriftung von Teilen von Formularen wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar die Art der einzugebenden Inhalte. Wenn der Nutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Texteingabeelementen

Elemente, die Texteingabe erlauben wie `<input type="text">`, das spezifischere `<input type="email">`, und das `<textarea>` Element, sind relativ einfach zu stylen und verhalten sich in der Regel wie andere Boxen auf Ihrer Seite. Das Standard-Styling dieser Elemente unterscheidet sich jedoch je nach Betriebssystem und Browser, den Ihr Nutzer zur Site besucht.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt. Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände genauso angewendet werden, wie Sie es erwarten würden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

Versuchen Sie, das Beispiel zu bearbeiten, um das Erscheinungsbild des Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und die Schriftarten und Abstände ändern.

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
> Sie sollten darauf achten, das Styling von Formularelementen zu ändern, um sicherzustellen, dass es für den Nutzer offensichtlich bleibt, dass sie Formularelemente sind. Sie könnten ein Formularelement ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar vom umgebenden Inhalt ist, aber dies würde es sehr schwer machen, es zu erkennen und mit ihm zu interagieren.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für das Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt befasst sich mit einigen der häufigsten Probleme und bietet Strategien zu deren Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstil-Eigenschaften. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf dem Body oder einem übergeordneten Element definierte Schrift verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) über die `box-sizing` Eigenschaft gelernt, und Sie können dieses Wissen beim Stylen von Formularen verwenden, um ein konsistentes Erlebnis zu gewährleisten, wenn Sie Breiten und Höhen auf Formularelementen festlegen.

Für Konsistenz ist es eine gute Idee, Ränder und Abstände auf `0` für alle Elemente zu setzen und diese bei der Gestaltung bestimmter Steuerungen wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie `overflow: auto` auf `<textarea>` Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn sie nicht erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammenfassen in einem "Reset"

Als letzten Schritt können wir die verschiedenen oben diskutierten Eigenschaften in den folgenden "Formular-Reset" einpacken, um eine konsistente Basis zu schaffen. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von grundlegenden Stilen für alle Projekte zu erstellen. Typischerweise tun sie ähnliche Dinge wie oben beschrieben und stellen sicher, dass alles, was über verschiedene Browser hinweg unterschiedlich ist, auf einen konsistenten Standard gesetzt ist, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser in der Regel konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel ansehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis für viele Projekte verwendet wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie bei der Arbeit mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS begegnen werden.

Im nächsten Artikel werden wir lernen, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
