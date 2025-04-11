---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu stylen, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustration vermeiden, und diese Lektion wird einige der Hauptaspekte hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >Bilder</a
        >, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Videos</a
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
          <li>Verwendung eines CSS-Resets als Basis, um schwierige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente einfach zu stylen sind und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** bezeichnet. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite im Vergleich zu anderen Elementen. Wie wir jedoch sehen werden, kann CSS mit einem Bild verschiedene Dinge tun.

Bestimmte ersetzte Elemente wie Bilder und Videos werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass sie sowohl in horizontaler (x) als auch in vertikaler (y) Richtung eine Größe haben und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt werden.

## Größenanpassung von Bildern

Wie Sie aus diesen Lektionen bereits wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei in einer der Richtungen, wird es entweder kleiner als die Box dargestellt oder läuft über die Box hinaus. Sie müssen entscheiden, was mit dem Überlauf passiert.

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

Wie wir in [Größenanpassung von Objekten in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist es eine gängige Technik, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dadurch kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur Regel des `<img>`-Elements im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere kleiner wird, um in die Box zu passen.

Sie können andere Entscheidungen über Bilder in Containern treffen. Vielleicht möchten Sie beispielsweise ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hier helfen. Bei der Verwendung von `object-fit` kann das ersetzte Element auf verschiedene Weise dimensioniert werden, um in eine Box zu passen.

Im Folgenden verwendet das erste Beispiel den Wert `cover`, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten. Das zweite Beispiel verwendet `contain` als Wert: Dies verkleinert das Bild, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Letterboxing", da es nicht dasselbe Seitenverhältnis wie die Box hat.

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

Bei der Verwendung verschiedener CSS-Layout-Techniken auf ersetzten Elementen werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. In einem Grid-Layout beispielsweise werden Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Grid-Bereiche")}} auszufüllen. Bilder dehnen sich nicht; stattdessen werden sie an den Anfang ihrer Grid-Bereiche ausgerichtet.

Sie können dieses Verhalten im unteren Beispiel sehen, wo wir einen zweispaltigen, zweireihigen Grid-Container haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihen und Spalten auszufüllen. Das Bild jedoch dehnt sich nicht.

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

Sie werden das Layout erst in einem späteren Modul studieren. Bedenken Sie vorerst, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhaltensweisen haben, um zu vermeiden, dass sie vom Layout seltsam gedehnt werden.

## Formularelemente

Formularelemente können ein schwieriges Thema sein, wenn es darum geht, sie mit CSS zu stylen. Das [Web Forms Extensions Module](/de/docs/Learn_web_development/Extensions/Forms) behandelt die schwierigeren Aspekte des Stylings bestimmter Formulareingabetypen, die wir hier nicht behandeln werden. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerelemente werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element zu Ihrer Seite hinzugefügt — dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeiligen Texteingaben und auch Elemente zur Gruppierung und Beschriftung von Formularteilen wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die Webentwickler verwenden können, um anzugeben, welche Felder erforderlich sind und sogar welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Unterschiedliche Browser variieren in ihrer Flexibilität, solche Elemente zu stylen und anzupassen.

## Styling von Texteingabeelementen

Elemente, die Texteingabe zulassen, wie `<input type="text">`, und die spezifischeren `<input type="email">` und `<textarea>`-Elemente, sind relativ einfach zu stylen und verhalten sich in der Regel wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente variiert jedoch je nach Betriebssystem und Browser, mit dem der Benutzer die Seite besucht.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt — Sie können sehen, dass Dinge wie Ränder, Abstände und Polsterungen wie erwartet wirken. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten und Polsterungen ändern.

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
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formelements ändern, um sicherzustellen, dass sie für den Benutzer weiterhin als Formularelemente erkennbar sind. Sie könnten ein Formulareingabefeld ohne Ränder und Hintergrund erstellen, das fast nicht von den umliegenden Inhalten unterscheidbar ist, was es jedoch sehr schwer erkennbar und interaktiv machen würde.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind für Styling unzugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für unterschiedliche Besucher sehr unterschiedlich aussehen werden und komplexe Formulare in mehreren Browsern testen.

## Normierung von Formularverhalten

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. In diesem Abschnitt werden einige der häufigsten Probleme behandelt und Strategien zu deren Bewältigung aufgezeigt.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente die Schriftart-Stil nicht standardmäßig. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf dem Body oder einem übergeordneten Element definierte Schrift verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben die Eigenschaft `box-sizing` in [unserer Lektion zum Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) kennengelernt, und Sie können dieses Wissen beim Stylen von Formularen verwenden, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen sicherzustellen.

Für einheitliche Ergebnisse ist es eine gute Idee, die Ränder und Polsterungen auf `0` für alle Elemente zu setzen und diese dann beim Stylen bestimmter Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`-Elementen setzen, um zu verhindern, dass einige ältere Browser einen Scrollbalken anzeigen, wenn er nicht benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem "Reset" zusammenfassen

Als abschließender Schritt können wir die verschiedenen oben besprochenen Eigenschaften in dem folgenden "Formular-Reset" zusammenfassen, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies schließt alle in den letzten drei Abschnitten erwähnten Elemente ein:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Basisstilen zu erstellen, die in allen Projekten verwendet werden können. Typischerweise tun diese ähnliche Dinge wie die oben beschriebenen, um sicherzustellen, dass alles, was zwischen Browsern unterschiedlich ist, auf einen konsistenten Standard eingestellt ist, bevor Sie Ihre eigene CSS-Arbeit beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser im Allgemeinen konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis von vielen Projekten verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, denen Sie bei der Arbeit mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS begegnen werden.

Im nächsten Artikel lernen wir, wie man HTML-Tabellen stylt.

## Siehe auch

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
