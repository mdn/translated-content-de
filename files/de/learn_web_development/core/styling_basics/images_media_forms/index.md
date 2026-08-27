---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als reguläre Boxen in Bezug auf die Möglichkeit, sie mit CSS zu stylen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der Hauptpunkte hervorheben, die Sie wissen müssen.

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
          <li>Grundlegende Stilisierung von leicht zu stylenden Formularelementen, wie Texteingaben.</li>
          <li>Verwendung eines CSS-Resets als Basis, um knifflige Elemente wie Formulare zu stylen.</li>
          <li>Verstehen, dass nicht alle Formularelemente leicht zu stylen sind, und warum.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Dies bedeutet, dass sie eine Größe in sowohl horizontaler (x) als auch vertikaler (y) Dimension haben und standardmäßig mit den intrinsischen Dimensionen der Datei angezeigt werden.

## Bildgrößenanpassung

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die in einer Richtung kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei, wird es entweder kleiner als die Box angezeigt oder die Box überschranken. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und dehnt sich nicht, um sie auszufüllen.
- Die andere ist größer als 200 Pixel und überschreitet die Box.

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

Wie wir in [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, ist eine häufige Technik, die {{cssxref("max-width")}} des Bildes auf `100%` zu setzen. Dadurch kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)s oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)s.

Versuchen Sie, `max-width: 100%` zur Regel des `<img>`-Elements im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere wird kleiner, um in die Box zu passen.

### Umgang mit Anzeigefehlern bei Bildern mit `object-fit`

Das obige Beispiel zeigt noch ein weiteres Problem beim Anzeigen von Bildern innerhalb von Containern. Sie werden feststellen, dass, nachdem Sie `max-width: 100%` auf die Bilder angewendet haben, das zweite Bild seinen Container nicht ganz ausfüllt; unten bleibt eine Lücke. Dies liegt daran, dass die Angabe einer festen Breite für ein Bild dazu führt, dass seine Höhe so eingestellt wird, dass sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Wie können wir das Bild so dimensionieren, dass es seinen Container vollständig abdeckt? Wir könnten den Container mit einer festen `width` _und_ `height` versehen und dann dem Bild eine `width` und `height` von `100%` geben, wie im nächsten Beispiel gezeigt:

```html live-sample___object-fit1
<div class="box">
  <img
    alt="balloons"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit1
.box {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
  margin: 20px;
}

img {
  width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("object-fit1", "", "250px")}}

Allerdings ist das Bild verzerrt, da sein Seitenverhältnis geändert wurde — es sieht _gestreckt_ aus. Um dies zu beheben, können Sie die Eigenschaft {{cssxref("object-fit")}} verwenden, die festlegt, wie das Bild in seinen Container (das `<img>`-Element) skaliert wird. Die `object-fit`-Eigenschaft kann einige verschiedene Werte annehmen, von denen die nützlichsten folgende sind:

- `cover`: Das Bild füllt das `<img>`-Element vollständig aus, während es sein Seitenverhältnis beibehält, daher werden einige Teile des Bildes nicht angezeigt.
- `contain`: Das Bild passt vollständig in das `<img>`-Element, während es sein Seitenverhältnis beibehält, daher werden einige Teile des `<img>`-Elements nicht ausgefüllt. Dies führt zu „Letterboxing“ oder „Pillarboxing“.

Das nächste Beispiel zeigt die Werte `cover` und `contain`, die auf zwei Kopien des im vorherigen Beispiel gezeigten Bildes festgelegt sind, damit Sie sehen können, was ihre Auswirkungen sind:

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

> [!NOTE]
> Wichtige Erkenntnisse hier sind:
>
> 1. Die `object-fit`-Eigenschaft skaliert das Bild selbst, um in das `<img>`-Element zu passen, das es auf der Seite einbettet.
> 2. Das `<img>`-Element muss skaliert werden, damit `object-fit` eine Wirkung hat.
>
> Wenn das `<img>`-Element nicht skaliert wird, wird das Bild in seiner ursprünglichen (oder _intrinsischen_) Größe und im Seitenverhältnis angezeigt, daher hat `object-fit` keine Wirkung.

## Ersetzte Elemente im Layout

Bei der Verwendung verschiedener CSS-Layout-Techniken auf ersetzten Elementen stellen Sie möglicherweise fest, dass sie sich etwas anders als andere Elemente verhalten. Zum Beispiel werden in einem Rasterlayout Elemente standardmäßig gedehnt, um ihre gesamten {{Glossary("Grid_Areas", "Rasterbereiche")}} auszufüllen. Bilder dehnen sich nicht; stattdessen werden sie am Anfang ihrer Rasterbereiche ausgerichtet.

Im folgenden Beispiel sehen Sie, wie dies geschieht, wo wir einen zweispaltigen, zweireihigen Rastercontainer haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich aus, um die Reihe und die Spalte auszufüllen. Das Bild hingegen dehnt sich nicht aus.

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

Sie werden sich mit dem Layout erst in einem späteren Modul beschäftigen. Für den Moment sollten Sie im Hinterkopf behalten, dass ersetzte Elemente, wenn sie Teil eines bestimmten Layoutsystems wie Grid oder Flexbox werden, unterschiedliche Standardverhaltensweisen haben, im Wesentlichen um zu vermeiden, dass sie durch das Layout seltsam verzerrt werden.

## Formularelemente

Formularelemente bereiten beim Styling mit CSS Probleme. Das Modul [Web Forms Extensions](/de/docs/Learn_web_development/Extensions/Forms) behandelt die kniffligeren Aspekte des Stylings bestimmter Formular-Eingabetypen, auf die wir hier nicht eingehen werden. Es gibt jedoch einige grundlegende Aspekte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularelemente werden über das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element zu Ihrer Seite hinzugefügt — dies definiert einfache Formfelder wie Texteingaben sowie komplexere Felder wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben, und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu beschriften, wie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind, und sogar die Art des erforderlichen Inhalts. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser variieren darin, wie viel Styling und Anpassung sie für solche Elemente zulassen.

## Text-Eingabeelemente stylen

Elemente, die die Texteingabe erlauben, wie `<input type="text">`, das spezifischere `<input type="email">` und das `<textarea>`-Element, sind recht einfach zu stylen und verhalten sich in der Regel wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente wird jedoch abhängig vom Betriebssystem und Browser, mit dem Ihr Benutzer die Seite besucht, unterschiedlich sein.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt. Sie können sehen, dass Dinge wie Ränder, Abstände und Polsterungen wie erwartet angewendet werden. Wir verwenden Attribut-Selektoren, um die verschiedenen Eingabetypen anzusprechen.

Versuchen Sie, das Beispiel zu bearbeiten, um das Aussehen des Formulars zu ändern, indem Sie die Ränder anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten sowie Polsterungen ändern.

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
> Sie sollten beim Ändern des Stylings von Formularelementen darauf achten, dass es dem Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Ränder und Hintergrund erstellen, das fast ununterscheidbar von den umgebenden Inhalten ist, was es jedoch sehr schwer erkennbar und schwierig zu bedienen macht.

Viele der komplexeren Eingabetypen werden vom Betriebssystem gerendert und sind nicht zugänglich zum Stylen. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher ganz unterschiedlich aussehen und komplexe Formulare in mehreren Browsern testen.

## Normalisierung des Formularverhaltens

Formularelemente verhalten sich in verschiedenen Browsern und Betriebssystemen unterschiedlich. Dieser Abschnitt betrachtet einige der häufigsten Probleme und bietet Strategien zu deren Bewältigung.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftart-Stile. Daher sollten Sie diese Regel zu Ihrem CSS hinzufügen, wenn Sie sicherstellen möchten, dass Ihre Formulareingabefelder die auf dem Body oder einem übergeordneten Element definierte Schriftart verwenden.

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

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gelernt und Sie können dieses Wissen beim Stylen von Formularen verwenden, um eine konsistente Erfahrung beim Festlegen von Breiten und Höhen auf Formularelementen sicherzustellen.

Für Konsistenz ist es eine gute Idee, Margen und Auspolsterungen auf `0` für alle Elemente festzulegen und sie dann beim Stylen bestimmter Steuerungen wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie `overflow: auto` auf `<textarea>`-Elementen festlegen, um zu verhindern, dass einige ältere Browser eine Bildlaufleiste anzeigen, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammenführen in einem "Reset"

Als letzten Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden „Formular-Reset“ einbinden, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

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
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um eine Reihe von Baseline-Stilen zu erstellen, die in allen Projekten verwendet werden können. Typischerweise machen sie ähnliche Dinge wie die oben beschriebenen, und sorgen dafür, dass alles, was zwischen den Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da die Browser in der Regel konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel anschauen möchten, werfen Sie einen Blick auf [Normalize.css](https://necolas.github.io/normalize.css/), was ein sehr beliebtes Stylesheet ist, das als Basis in vielen Projekten verwendet wird.

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die bereitgestellten Informationen über den Umgang mit Bildern und Formularelementen in CSS verstanden und behalten haben.

## Siehe auch

- [Stylen von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittenes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
