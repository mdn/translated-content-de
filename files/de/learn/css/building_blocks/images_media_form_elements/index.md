---
title: Bilder, Medien und Formularelemente
slug: Learn/CSS/Building_blocks/Images_media_form_elements
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Möglichkeit, sie mit CSS zu gestalten, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie sich einige Elemente ungewöhnlich verhalten, wenn sie mit
        CSS gestaltet werden.
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite im Verhältnis zu anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als solche mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Das bedeutet, dass sie eine Größe sowohl in der horizontalen (x) als auch in der vertikalen (y) Dimension haben und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt werden.

## Bilder skalieren

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box legen, die in einer Richtung kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei, wird es entweder kleiner als die Box angezeigt oder überläuft die Box. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passieren soll.

Im folgenden Beispiel haben wir zwei Boxen, die jeweils 200 Pixel groß sind:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
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

Also, was können wir gegen das Überlaufproblem tun?

Wie wir in [unserer vorherigen Lektion](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) gelernt haben, besteht eine häufige Technik darin, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dies ermöglicht, dass das Bild kleiner als die Box ist, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie `<video>` oder `<iframe>`.

Versuchen Sie, `max-width: 100%` auf das `<img>` Element im obigen Beispiel anzuwenden. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere kleiner wird, um in die Box zu passen.

Sie können auch andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel können Sie ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Hierbei kann die {{cssxref("object-fit")}} Eigenschaft hilfreich sein. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Arten dimensioniert werden, um in eine Box zu passen.

Unten haben wir den Wert `cover` verwendet, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box beschnitten.

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

Wenn wir `contain` als Wert verwenden, wird das Bild verkleinert, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", wenn es nicht das gleiche Seitenverhältnis wie die Box hat.

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllt, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layout-Techniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Beispielsweise werden in einem Grid-Layout Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Gitterbereiche")}} zu füllen. Bilder dehnen sich nicht; stattdessen werden sie am Anfang ihrer Gitterbereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen Gitter-Container mit zwei Spalten und zwei Reihen haben, in dem sich vier Elemente befinden. Alle `<div>` Elemente haben eine Hintergrundfarbe und dehnen sich, um die Reihe und Spalte zu füllen. Das Bild dehnt sich jedoch nicht.

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

Wenn Sie diesen Lektionen in der Reihenfolge folgen, haben Sie sich das Layout möglicherweise noch nicht angesehen. Merken Sie sich einfach, dass ersetzte Elemente, wenn sie Teil eines Grid- oder Flex-Layouts werden, unterschiedliche Standardverhalten aufweisen, im Wesentlichen um zu vermeiden, dass sie durch das Layout seltsam gedehnt werden.

Um das Bild dazu zu zwingen, sich zu dehnen, um die Gitterzelle zu füllen, in der es sich befindet, müssten Sie etwas wie das Folgende tun:

```css
img {
  width: 100%;
  height: 100%;
}
```

Dies würde jedoch das Bild verzerren, was wahrscheinlich nicht das ist, was Sie tun möchten.

## Formularelemente

Formularelemente können ein heikles Thema sein, wenn es darum geht, sie mit CSS zu gestalten. Das [Web Forms Modul](/de/docs/Learn/Forms) enthält detaillierte Leitfäden zu den schwierigeren Aspekten der Gestaltung dieser Elemente, die ich hier nicht vollständig wiedergeben werde. Es gibt jedoch einige wichtige Grundlagen, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularelemente werden über das [`<input>`](/de/docs/Web/HTML/Element/input) Element zu Ihrer Seite hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlfelder. Es gibt einige zusätzliche Elemente, wie z. B. [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeilige Texteingaben sowie Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu beschriften, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer unerwartete Eingaben macht oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser erlauben unterschiedliche Mengen an Styling und Anpassung solcher Elemente.

### Gestaltung von Texteingabeelementen

Elemente, die Texteingaben zulassen, wie `<input type="text">` und die spezifischeren `<input type="email">` sowie das `<textarea>` Element sind recht einfach zu gestalten und verhalten sich tendenziell wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente unterscheidet sich jedoch je nach Betriebssystem und Browser des Benutzers, der die Seite besucht.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestaltet – Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriften und Abstände ändern.

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
> Sie sollten darauf achten, beim Ändern des Stylings von Formularelementen sicherzustellen, dass es für den Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formularelement ohne Rahmen und Hintergrund erstellen, das fast nicht von dem umgebenden Inhalt zu unterscheiden ist, aber das würde es sehr schwer erkennbar und ausfüllbar machen.

Wie in den Lektionen [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) erklärt, werden viele der komplexeren Eingabetypen vom Betriebssystem gerendert und sind für ein Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen werden und komplexe Formulare in verschiedenen Browsern testen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstile. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf den Body oder ein Elternelement angewendete Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Über die verschiedenen Browser hinweg verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing` Eigenschaft in [unserer Lektion zum Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) gelernt und Sie können dieses Wissen beim Stylen von Formularen nutzen, um eine konsistente Erfahrung beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Für Konsistenz ist es eine gute Idee, Abstände und Polsterungen auf `0` für alle Elemente zu setzen und diese dann beim Stylen bestimmter Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`s setzen, um zu verhindern, dass IE eine Scrollleiste anzeigt, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem "Reset" zusammenfassen

Als letzter Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Formular-Reset" einpacken, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies umfasst alle in den letzten drei Abschnitten erwähnten Elemente:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Basisstilen zu erstellen, die in allen Projekten verwendet werden. Typischerweise tun diese ähnliche Dinge wie die oben beschriebenen und stellen sicher, dass alles, was sich über verschiedene Browser hinweg unterscheidet, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, das ein sehr beliebtes Stylesheet ist, das als Basis von vielen Projekten verwendet wird.

Für weitere Informationen zur Gestaltung von Formularen, schauen Sie sich die beiden Artikel im HTML-Abschnitt dieser Leitfäden an.

- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweiterte Formulargestaltung](/de/docs/Learn/Forms/Advanced_form_styling)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bilder- und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, die Sie beim Arbeiten mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS finden werden.

Im nächsten Artikel werden wir lernen, [HTML-Tabellen zu stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
