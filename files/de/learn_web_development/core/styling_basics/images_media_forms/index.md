---
title: Bilder, Medien und Formularelemente
short-title: Bilder, Medien, Formulare
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion sehen wir uns an, wie bestimmte besondere Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich bei der Gestaltung mit CSS etwas anders als gewöhnliche Boxen. Wenn Sie wissen, was möglich ist und was nicht, können Sie sich Frustration ersparen. Diese Lektion stellt einige der wichtigsten Punkte vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-<a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >Bilder</a
        >, <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Videos</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >Formulare</a
        >. CSS-<a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> sowie <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenfestlegung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie die Größe und das Layout ersetzter Elemente bestimmt werden.</li>
          <li>Grundlegende Gestaltung einfach zu gestaltender Formularelemente wie Texteingabefelder.</li>
          <li>Einen CSS-Reset als Grundlage für die Gestaltung schwieriger Elemente wie Formulare verwenden.</li>
          <li>Verstehen, dass sich nicht alle Formularelemente leicht gestalten lassen, und warum das so ist.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **{{Glossary("replaced_elements", "ersetzte Elemente")}}** bezeichnet. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite im Verhältnis zu anderen Elementen. Wie wir sehen werden, lässt sich mit CSS bei Bildern dennoch einiges bewirken.

Bestimmte ersetzte Elemente, etwa Bilder und Videos, haben außerdem ein **{{Glossary("aspect_ratio", "Seitenverhältnis")}}**. Das bedeutet, dass sie sowohl in horizontaler (x) als auch in vertikaler (y) Richtung eine Größe haben und standardmäßig mit den intrinsischen Abmessungen der Datei dargestellt werden.

## Bildgrößen festlegen

Wie Sie aus den bisherigen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in einer Box platzieren, die in einer der beiden Richtungen kleiner oder größer als die intrinsischen Abmessungen der Bilddatei ist, erscheint das Bild entweder kleiner als die Box oder ragt über sie hinaus. Sie müssen entscheiden, wie mit diesem Überlaufen umgegangen werden soll.

Im folgenden Beispiel haben wir zwei Boxen, die beide 200 Pixel groß sind:

- Die eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und wird nicht gestreckt, um sie auszufüllen.
- Das andere Bild ist größer als 200 Pixel und ragt über die Box hinaus.

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

Was können wir gegen das Überlaufen tun?

Wie wir in [Größenfestlegung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) gelernt haben, besteht eine gängige Technik darin, {{cssxref("max-width")}} für das Bild auf `100%` zu setzen. Dadurch kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch bei anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Versuchen Sie, `max-width: 100%` zur Regel für das `<img>`-Element im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, während das größere verkleinert wird, damit es in die Box passt.

### Darstellungsprobleme bei Bildern mit `object-fit` beheben

Das obige Beispiel zeigt ein weiteres Problem bei der Darstellung von Bildern in Containern. Nachdem Sie für die Bilder `max-width: 100%` festgelegt haben, füllt das zweite Bild seinen Container nicht ganz aus: Unten bleibt eine Lücke. Das liegt daran, dass bei einer festgelegten Breite die Höhe des Bildes so angepasst wird, dass sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} erhalten bleibt.

Wie können wir die Größe des Bildes so festlegen, dass es seinen Container vollständig bedeckt? Wir könnten für den Container eine feste `width` _und_ `height` festlegen und dem Bild eine `width` und `height` von jeweils `100%` geben, wie im nächsten Beispiel:

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

Allerdings wird das Bild dadurch verzerrt, weil sein Seitenverhältnis verändert wurde – es wirkt _gestreckt_. Um das zu beheben, können Sie die Eigenschaft {{cssxref("object-fit")}} verwenden. Sie legt fest, wie das Bild skaliert wird, damit es in seinen Container (das `<img>`-Element) passt. Die Eigenschaft `object-fit` kann verschiedene Werte annehmen. Die nützlichsten sind:

- `cover`: Das Bild füllt das `<img>`-Element vollständig aus und behält dabei sein Seitenverhältnis bei. Deshalb werden einige Teile des Bildes nicht angezeigt.
- `contain`: Das Bild passt vollständig in das `<img>`-Element und behält dabei sein Seitenverhältnis bei. Deshalb bleiben einige Bereiche des `<img>`-Elements frei. Dadurch entstehen Balken ober- und unterhalb oder links und rechts des Bildes.

Das nächste Beispiel zeigt die Werte `cover` und `contain` bei zwei Kopien des Bildes aus dem vorherigen Beispiel, damit Sie ihre Auswirkungen vergleichen können:

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
> Die wichtigsten Punkte sind:
>
> 1. Die Eigenschaft `object-fit` skaliert das Bild selbst, damit es in das `<img>`-Element passt, mit dem es in die Seite eingebunden wird.
> 2. Die Größe des `<img>`-Elements muss geändert werden, damit `object-fit` eine Wirkung hat.
>
> Wenn die Größe des `<img>`-Elements nicht geändert wird, wird das Bild mit seiner ursprünglichen (oder _intrinsischen_) Größe und seinem ursprünglichen Seitenverhältnis angezeigt. `object-fit` hat dann keine Wirkung.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layouttechniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. In einem Grid-Layout werden Elemente beispielsweise standardmäßig gestreckt, um ihre {{Glossary("Grid_Areas", "Grid-Bereiche")}} vollständig auszufüllen. Bilder werden nicht gestreckt, sondern am Anfang ihres Grid-Bereichs ausgerichtet.

Das sehen Sie im folgenden Beispiel: Ein Grid-Container mit zwei Spalten und zwei Zeilen enthält vier Elemente. Alle `<div>`-Elemente haben eine Hintergrundfarbe und werden so gestreckt, dass sie ihre jeweilige Zeile und Spalte ausfüllen. Das Bild wird dagegen nicht gestreckt.

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

Mit Layouts werden Sie sich erst in einem späteren Modul beschäftigen. Merken Sie sich vorerst nur, dass ersetzte Elemente innerhalb eines Layoutsystems wie Grid oder Flexbox ein anderes Standardverhalten aufweisen. Im Wesentlichen soll dadurch verhindert werden, dass das Layout sie auf ungewöhnliche Weise streckt.

## Formularelemente

Bei der Gestaltung von Formularelementen mit CSS gibt es einige Schwierigkeiten. Das [Modul zu Webformularen](/de/docs/Learn_web_development/Extensions/Forms) behandelt die anspruchsvolleren Aspekte der Gestaltung bestimmter Typen von Formulareingaben, auf die wir hier nicht eingehen. Einige wichtige Grundlagen sollten jedoch hervorgehoben werden.

Viele Formularsteuerelemente werden Ihrer Seite mit dem Element [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) hinzugefügt. Damit lassen sich einfache Formularfelder wie Texteingaben ebenso definieren wie komplexere Felder zur Auswahl von Farben oder Datumsangaben. Es gibt weitere Elemente, etwa [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) für mehrzeilige Texteingaben sowie [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) und [`<legend>`](/de/docs/Web/HTML/Reference/Elements/legend), mit denen Teile von Formularen gruppiert und beschriftet werden.

HTML enthält außerdem Attribute, mit denen Webentwickler angeben können, welche Felder erforderlich sind und welche Art von Inhalt eingegeben werden muss. Wenn Benutzer etwas Unerwartetes eingeben oder ein Pflichtfeld leer lassen, kann der Browser eine Fehlermeldung anzeigen. Browser unterscheiden sich darin, wie weit sich solche Elemente gestalten und anpassen lassen.

## Texteingabeelemente gestalten

Elemente für Texteingaben wie `<input type="text">`, das spezifischere `<input type="email">` und das Element `<textarea>` lassen sich recht einfach gestalten und verhalten sich meist wie andere Boxen auf Ihrer Seite. Ihre Standarddarstellung hängt jedoch vom Betriebssystem und Browser ab, mit denen Ihre Benutzer die Website besuchen.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestaltet. Sie sehen, dass Eigenschaften wie Rahmen, Außen- und Innenabstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen.

Bearbeiten Sie das Beispiel: Ändern Sie die Rahmen, fügen Sie den Feldern Hintergrundfarben hinzu und passen Sie Schriftarten und Innenabstände an, um das Aussehen der Steuerelemente zu verändern.

```html live-sample___form
<div class="controls">
  <div><label for="name">Name</label> <input id="name" type="text" /></div>
  <div><label for="email">Email</label> <input id="email" type="email" /></div>

  <div class="buttons"><input type="button" value="Submit" /></div>
</div>
```

```css hidden live-sample___form
body {
  font-family: sans-serif;
}
.controls > div {
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

input[type="button"] {
  border: 3px solid #333333;
  background-color: #999999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: white;
}

input[type="button"]:hover,
input[type="button"]:focus {
  background-color: #333333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> Achten Sie beim Ändern der Gestaltung von Formularelementen darauf, dass Benutzer sie weiterhin eindeutig als solche erkennen können. Sie könnten ein Eingabefeld ohne Rahmen und Hintergrund erstellen, das sich kaum vom umgebenden Inhalt unterscheidet. Dadurch wäre es jedoch sehr schwer zu erkennen und zu bedienen.

Viele komplexere Eingabetypen werden vom Betriebssystem dargestellt und lassen sich nicht mit CSS gestalten. Gehen Sie daher immer davon aus, dass Formulare für verschiedene Besucher recht unterschiedlich aussehen können, und testen Sie komplexe Formulare in mehreren Browsern.

## Verhalten von Formularen vereinheitlichen

Formularelemente verhalten sich je nach Browser und Betriebssystem unterschiedlich. Dieser Abschnitt behandelt einige der häufigsten Probleme und stellt Strategien für den Umgang damit vor.

### Vererbung und Formularelemente

In manchen Browsern erben Formularelemente die Schriftgestaltung standardmäßig nicht. Wenn Sie sicherstellen möchten, dass Ihre Formularfelder die Schriftart verwenden, die für den `body` oder ein übergeordnetes Element festgelegt wurde, sollten Sie Ihrem CSS diese Regel hinzufügen:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und box-sizing

Browser verwenden für verschiedene Formularsteuerelemente unterschiedliche Regeln zur Berechnung der Boxgröße. Sie haben die Eigenschaft `box-sizing` in [unserer Lektion zum Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) kennengelernt. Dieses Wissen können Sie bei der Gestaltung von Formularen nutzen, um beim Festlegen von Breiten und Höhen ein einheitliches Ergebnis zu erzielen.

Für ein einheitliches Verhalten empfiehlt es sich, Außen- und Innenabstände zunächst bei allen Elementen auf `0` zu setzen und sie bei der Gestaltung einzelner Steuerelemente gezielt wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie für `<textarea>`-Elemente `overflow: auto` festlegen. So verhindern Sie, dass einige ältere Browser unnötig eine Bildlaufleiste anzeigen:

```css
textarea {
  overflow: auto;
}
```

### Alles in einem „Reset“ zusammenfassen

Abschließend können wir die oben besprochenen Eigenschaften zu folgendem „Formular-Reset“ zusammenfassen. Er bietet eine einheitliche Ausgangsbasis und enthält alle Punkte aus den letzten drei Abschnitten:

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
> Viele Entwickler verwenden normalisierende Stylesheets, um einen Satz grundlegender Styles für alle Projekte bereitzustellen. Diese bewirken üblicherweise Ähnliches wie die oben beschriebenen Regeln: Unterschiede zwischen Browsern werden auf einheitliche Standardwerte gesetzt, bevor Sie das CSS selbst gestalten. Sie sind heute nicht mehr so wichtig wie früher, da Browser in der Regel einheitlicher geworden sind. Wenn Sie sich ein Beispiel ansehen möchten, werfen Sie einen Blick auf [Normalize.css](https://necolas.github.io/normalize.css/), ein sehr beliebtes Stylesheet, das vielen Projekten als Grundlage dient.

## Zusammenfassung

Diese Lektion hat einige Unterschiede aufgezeigt, denen Sie bei der Arbeit mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS begegnen werden.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Handhabung von Bildern und Formularelementen in CSS verstanden und behalten haben.

## Siehe auch

- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Fortgeschrittene Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
