---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als reguläre Boxen, wenn es darum geht, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann Frustration vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

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
        >. CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenbestimmung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie ersetzte Elemente dimensioniert und angeordnet werden.</li>
          <li>Grundlegendes Styling von einfach zu gestaltenden Formularelementen, wie Texteingaben.</li>
          <li>Verwenden eines CSS-Resets als Basis, um knifflige Elemente wie Formulare zu gestalten.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild machen kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** versehen beschrieben. Das bedeutet, dass es eine Größe in sowohl der horizontalen (x) als auch der vertikalen (y) Dimension hat und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt wird.

## Bilderdimensionierung

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die in einer Richtung kleiner oder größer ist als die eigentlichen Abmessungen der Bilddatei, erscheint es entweder kleiner als die Box oder es fließt über die Box hinaus. Sie müssen entscheiden, was mit dem Überlauf geschehen soll.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und dehnt sich nicht, um sie auszufüllen.
- Die andere ist größer als 200 Pixel und fließt über die Box hinaus.

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

Wie wir in [Dimensionierung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine gängige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur `<img>`-Elementregel im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, während das größere kleiner wird, um in die Box zu passen.

### Umgang mit Bildüberlauf mit `object-fit`

Sie können andere Entscheidungen über Bilder in Containern treffen. Zum Beispiel könnten Sie ein Bild so dimensionieren wollen, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hierbei helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Arten in eine Box eingepasst werden.

Unten wird im ersten Beispiel der Wert `cover` verwendet, der das Bild verkleinert, das Seitenverhältnis beibehält, sodass es die Box ordentlich ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box beschnitten. Das zweite Beispiel verwendet `contain` als Wert: Das skaliert das Bild herunter, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Letterboxing", da es nicht das gleiche Seitenverhältnis wie die Box hat.

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

Wenn Sie verschiedene CSS-Layout-Techniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Beispielsweise werden in einem Grid-Layout die Elemente standardmäßig so gestreckt, dass sie ihre gesamten {{Glossary("Grid_Areas", "Grid-Bereiche")}} ausfüllen. Bilder dehnen sich nicht aus; stattdessen werden sie an den Anfang ihrer Grid-Bereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen Grid-Container mit zwei Spalten und zwei Reihen haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und Spalte auszufüllen. Das Bild hingegen dehnt sich nicht aus.

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

Sie werden das Layout erst in einem späteren Modul studieren. Für den Moment sollten Sie nur bedenken, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhalten haben, um zu vermeiden, dass sie auf seltsame Weise durch das Layout gestreckt werden.

## Formularelemente

Formularelemente haben Probleme, wenn es darum geht, sie mit CSS zu gestalten. Das [Web Forms Extensions Module](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligeren Aspekte des Stylings bestimmter Formulareingabetypen, auf die wir hier nicht näher eingehen werden. Es gibt jedoch einige grundlegende Dinge, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerungen werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element zu Ihrer Seite hinzugefügt — dieses definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben, und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu kennzeichnen, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich voneinander darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Styling von Texteingabeelementen

Elemente, die Texteingaben erlauben wie `<input type="text">`, das spezifischere `<input type="email">` und das `<textarea>`-Element, sind ziemlich einfach zu gestalten und verhalten sich wie andere Boxen auf Ihrer Seite. Die Standardgestaltung dieser Elemente unterscheidet sich jedoch abhängig vom Betriebssystem und Browser, den Ihr Benutzer für den Besuch der Seite verwendet.

Im Beispiel unten haben wir einige Texteingaben mit CSS gestaltet. Sie können sehen, dass Dinge wie Ränder, Abstände und Polsterung wie erwartet funktionieren. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

Versuchen Sie, das Beispiel zu bearbeiten, um das Formular zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben für die Felder hinzufügen sowie Schriftarten und Polsterungen ändern.

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
  border: 3px solid #333;
  background-color: #999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: white;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  background-color: #333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> Sie sollten darauf achten, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass für den Benutzer weiterhin erkennbar ist, dass es sich um Formularelemente handelt. Sie könnten ein Formularelement ohne Ränder und Hintergrund erstellen, das kaum unterscheidbar von den umgebenden Inhalten ist, was es jedoch sehr schwer erkennbar und interaktiv machen würde.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für das Styling unzugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen werden und komplexe Formulare in mehreren Browsern testen.

## Normalisieren des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt behandelt einige der häufigsten Probleme und bietet Strategien zu ihrer Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente nicht standardmäßig die Schriftstilierung. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die Schrift verwenden, die im body oder in einem Elternelement definiert ist, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Über verschiedene Browser hinweg verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben die `box-sizing`-Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) kennengelernt und können dieses Wissen beim Styling von Formularen einsetzen, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Um Konsistenz zu erreichen, ist es eine gute Idee, die Abstände und Polsterungen auf `0` für alle Elemente zu setzen und diese dann bei der Gestaltung bestimmter Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser eine Scrollleiste anzeigen, wenn keine erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammenfassen in ein "Reset"

Als finalen Schritt können wir die besprochenen Eigenschaften in das folgende "Formular-Reset" verpacken, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies umfasst alle Punkte, die in den letzten drei Abschnitten erwähnt wurden:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um einen Satz von Basisstilen zu erstellen, die in allen Projekten verwendet werden. In der Regel tun diese ähnliche Dinge wie die oben beschriebenen, indem sichergestellt wird, dass alles, was zwischen den Browsern unterschiedlich ist, auf einen einheitlichen Standard gesetzt wird, bevor Sie Ihre eigene Arbeit an der CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da die Browser heutzutage in der Regel konsistenter sind. Wenn Sie jedoch ein Beispiel betrachten möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das von vielen Projekten als Basis verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie bei der Arbeit mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS antreffen werden.

Im nächsten Artikel werden wir lernen, wie man HTML-Tabellen gestaltet.

## Siehe auch

- [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
