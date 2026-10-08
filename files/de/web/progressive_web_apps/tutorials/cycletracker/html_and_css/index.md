---
title: "CycleTracker: Grundlegendes HTML und CSS"
short-title: Grundlegendes HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine Progressive Web App, zu erstellen, benötigen wir zunächst eine voll funktionsfähige Webanwendung. In diesem Abschnitt erstellen wir das HTML-Markup für eine statische Webseite und gestalten sie mit CSS.

Unser Projekt ist CycleTracker, eine Anwendung zur Erfassung von Menstruationszyklen. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, HTML und CSS zu schreiben. Im oberen Bereich der Seite befindet sich ein Formular, in das Benutzerinnen das Anfangs- und Enddatum jeder Menstruation eintragen können. Im unteren Bereich werden frühere Menstruationszyklen aufgelistet.

Wir erstellen eine HTML-Datei mit Metadaten im Dokumentkopf und einer statischen Webseite, die ein Formular sowie einen Platzhalter für die Anzeige eingegebener Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Für dieses Tutorial sind Grundkenntnisse in [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) hilfreich. Falls Sie damit noch nicht vertraut sind, finden Sie bei MDN mit [Getting Started](/de/docs/Learn_web_development/Getting_started/Your_first_website) eine Einführungsreihe zur Webentwicklung.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und sehen uns unseren bisherigen Fortschritt an. Danach ergänzen wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), um aus den hier erstellten statischen Inhalten eine funktionsfähige Webanwendung zu machen. Sobald die Anwendung funktioniert, können wir sie schrittweise zu einer PWA erweitern, die installierbar ist und offline funktioniert.

## Statische Webinhalte

Das HTML unserer statischen Website enthält als Platzhalter {{HTMLElement("link")}}- und {{HTMLElement("script")}}-Elemente für die noch zu erstellenden externen CSS- und JavaScript-Dateien:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Period tracker</h1>
    <form>
      <fieldset>
        <legend>Enter your period start and end date</legend>
        <p>
          <label for="start-date">Start date</label>
          <input type="date" id="start-date" required />
        </p>
        <p>
          <label for="end-date">End date</label>
          <input type="date" id="end-date" required />
        </p>
      </fieldset>
      <p>
        <button type="submit">Add Period</button>
      </p>
    </form>
    <section id="past-periods"></section>
    <script src="app.js" defer></script>
  </body>
</html>
```

Kopieren Sie dieses HTML und speichern Sie es in einer Datei namens `index.html`.

## HTML-Inhalt

Auch wenn Ihnen das HTML in `index.html` vertraut ist, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie [vorübergehend fest codierte Daten](#vorübergehend_fest_codierter_ergebnistext) hinzufügen, CSS in ein externes Stylesheet namens [`style.css`](#css-inhalt) schreiben und `app.js` erstellen – das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist eine {{Glossary("doctype", "Doctype")}}-Deklaration, die dafür sorgt, dass sich der Inhalt korrekt verhält.

```html
<!doctype html>
```

Die {{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt. Das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) legt die Hauptsprache der Seite fest.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentkopf

Das {{HTMLelement("head")}}-Element enthält maschinenlesbare Informationen über die Webanwendung, die für Leserinnen und Leser nicht sichtbar sind. Eine Ausnahme ist der `<title>`, der als Titel des Browser-Tabs angezeigt wird.

Der `<head>` enthält sämtliche [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Angaben in Ihrem `<head>` sollten immer die Zeichensatzdefinition, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} festlegt, und das [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-{{HTMLelement("meta")}}-Tag sein. Letzteres sorgt dafür, dass die Seite in der Breite des Viewports dargestellt und beim Laden auf sehr kleinen Bildschirmen nicht verkleinert wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Mit dem {{HTMLelement("title")}}-Element legen wir „Cycle Tracker“ als Seitentitel fest. Der Inhalt des `<head>` wird zwar nicht auf der Seite angezeigt, der Inhalt des `<title>` ist jedoch sichtbar: Sein Text erscheint nach dem Laden der Seite im Browser-Tab und in Suchmaschinenergebnissen. Er wird außerdem standardmäßig als Titel verwendet, wenn jemand ein Lesezeichen für die Webseite anlegt. Für Personen, die Screenreader verwenden, stellt der Titel zudem einen zugänglichen Namen bereit, anhand dessen sie erkennen können, auf welchem Tab sie sich gerade befinden.

Wir hätten den Titel auch „Anwendung zur Erfassung von Menstruationszyklen“ nennen können, haben uns aber für einen kürzeren, unauffälligeren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Obwohl sie formal optional sind, sollten diese beiden `<meta>`-Tags und der `<title>` im Interesse einer besseren Benutzererfahrung als unverzichtbare Bestandteile jedes HTML-Dokuments betrachtet werden.

Als letztes Element fügen wir dem `<head>` vorerst ein {{HTMLelement("link")}}-Element hinzu. Es verknüpft `style.css`, unser noch zu schreibendes Stylesheet, mit dem HTML-Dokument.

```html
<link rel="stylesheet" href="style.css" />
```

Mit dem HTML-Element `<link>` wird eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource angegeben. Für das Attribut [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) gibt es mehr als 25 definierte Werte – und viele weitere, die in keiner Spezifikation stehen. Der häufigste Wert, `rel="stylesheet"`, bindet eine externe Ressource als Stylesheet ein.

Auf das `<link>`-Element und sein Attribut `rel` kommen wir in einem späteren Abschnitt zurück, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentkörper

Das {{HTMLelement("body")}}-Element enthält alle Inhalte, die beim Besuch der Website angezeigt werden sollen.

Innerhalb des `<body>` fügen wir den Namen der Anwendung als Überschrift erster Ebene mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) sowie ein {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularsteuerelemente, eine Beschriftung für jedes Steuerelement und eine Schaltfläche zum Absenden. Die Benutzerin muss für jeden erfassten Menstruationszyklus sowohl ein Anfangs- als auch ein Enddatum eingeben können.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieser Gruppe von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Steuerelemente zur Datumsauswahl sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) hinzu, um Eingabefehler zu vermeiden: So kann ein unvollständiges Formular nicht versehentlich abgesendet werden.

Um ein `<label>` einem Formularsteuerelement zuzuordnen, besitzt jedes `<input>` ein Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id), dessen Wert mit dem Attribut [`for`](/de/docs/Web/HTML/Reference/Attributes/for) des zugehörigen {{HTMLelement("label")}} übereinstimmt. Durch dieses Label erhält jedes `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengefasst fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) ein. Jeder enthält ein Steuerelement zur Auswahl des Anfangs- beziehungsweise Enddatums des gerade eingegebenen Menstruationszyklus und das zugehörige {{HTMLelement("label")}}. Außerdem fügen wir ein {{HTMLelement("button")}}-Element zum Absenden des Formulars hinzu. Seine Beschriftung „Add period“ steht zwischen dem öffnenden und dem schließenden Tag. `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
    <p>
      <label for="start-date">Start date</label>
      <input type="date" id="start-date" required />
    </p>
    <p>
      <label for="end-date">End date</label>
      <input type="date" id="end-date" required />
    </p>
  </fieldset>
  <p>
    <button type="submit">Add Period</button>
  </p>
</form>
```

Wir empfehlen Ihnen, sich näher mit der [Erstellung zugänglicher Webformulare](/de/docs/Learn_web_development/Extensions/Forms) zu beschäftigen.

### Vorübergehend fest codierter Ergebnistext

Als Nächstes fügen wir ein leeres {{HTMLElement("section")}}-Element ein. Dieser Container wird später mit JavaScript befüllt.

```html
<section id="past-periods"></section>
```

Wenn das Formular abgesendet wird, erfassen wir die Daten mit JavaScript und zeigen eine Liste früherer Menstruationen zusammen mit einer Überschrift für den Abschnitt an.

Vorerst schreiben wir einige Inhalte fest in dieses `<section>`-Element: eine `<h2>`-Überschrift und einige frühere Menstruationen. So haben wir beim Schreiben des CSS Inhalte, deren Darstellung wir gestalten können.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Mit Ausnahme des Containers `<section id="past-periods"></section>` sind diese Inhalte nur vorübergehend. Sobald wir [das CSS fertiggestellt](#css-inhalt) haben und mit dem Erscheinungsbild der Anwendung zufrieden sind, entfernen oder kommentieren wir die vorübergehenden Daten aus.

### JavaScript-Verknüpfung

Vor dem schließenden `</body>` fügen wir einen Verweis auf die noch zu schreibende JavaScript-Datei `app.js` ein. Mit dem Attribut [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer) verschieben wir die Ausführung des Skripts, sodass das JavaScript erst ausgeführt wird, nachdem das HTML des Dokuments geparst wurde.

```html
<script src="app.js" defer></script>
```

Die Datei `app.js` wird die gesamte Anwendungslogik enthalten, darunter die Event-Handler für den `<button>`, das Speichern der übermittelten Daten im lokalen Speicher und die Anzeige der Zyklen im Inhalt des Dokumentkörpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun fertig! Sie können die Datei jetzt in Ihrem Browser öffnen, werden aber feststellen, dass sie noch recht schlicht aussieht. Das ändern wir im nächsten Abschnitt.

## CSS-Inhalt

Nun können wir das statische HTML mit CSS gestalten. Unser fertiges CSS lautet:

```css
body {
  margin: 1vh 1vw;
  background-color: #eeffee;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: white;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #ccffcc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern. Anschließend können Sie [das statische HTML und CSS fertigstellen](#das_statische_html_und_css_für_unsere_pwa_fertigstellen). Falls Ihnen etwas am obigen CSS neu ist, lesen Sie für eine Erklärung weiter.

![Hellgrüne Webseite mit einer großen Überschrift und einem Formular mit Legende, zwei Steuerelementen zur Datumsauswahl und einer Schaltfläche. Im unteren Bereich sind Beispieldaten für zwei Menstruationszyklen sowie eine Überschrift zu sehen.](html.jpg)

### CSS erklärt

Mit der Eigenschaft {{CSSXref("background-color")}} geben wir dem `body` eine hellgrüne Hintergrundfarbe (`#eeffee`). Für die ungeordnete Liste, das Fieldset und die Legende verwenden wir einen weißen Hintergrund und fügen mit der Eigenschaft {{CSSXref("border")}} einen dünnen, durchgezogenen Rahmen hinzu. Für die Legende überschreiben wir `background-color`, sodass sie ebenso wie die Listeneinträge ein dunkleres Grün (`#ccffcc`) erhält.

Mit dem Pseudoklassen-[Selektor](/de/docs/Web/CSS/Guides/Selectors) [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type) legen wir fest, dass jeder Listeneintrag mit gerader Nummer die Hintergrundfarbe seines Elternelements mit {{CSSXref("inherit")}} übernimmt. In diesem Fall erbt er die Hintergrundfarbe `white` von der ungeordneten Liste.

```css
body {
  background-color: #eeffee;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: white;
}
li,
legend {
  background-color: #ccffcc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Damit die ungeordnete Liste und ihre Einträge nicht wie eine Liste aussehen, entfernen wir den Innenabstand des `ul` mit {{CSSXref("padding", "padding: 0")}} und die Listenmarkierungen der Einträge mit {{CSSXref("list-style-type", "list-style-type: none")}}.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Für etwas Abstand legen wir den {{CSSXref("margin")}} des `body` mit den [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) `vw` und `vh` fest. Dadurch passt sich der freie Raum um unsere Anwendung an die Größe des Viewports an. Außerdem geben wir `li` und `legend` etwas Innenabstand. Um die Ausrichtung der Daten zu früheren Menstruationen zu verbessern – wenn auch nicht vollständig zu korrigieren –, setzen wir die {{CSSXref("font-family")}} des Ergebnisbereichs `ul` auf `monospace`. Dadurch hat jedes Zeichen dieselbe feste Breite.

```css
body {
  margin: 1vh 1vw;
}
ul {
  font-family: monospace;
}
li,
legend {
  padding: 0.2em 0.5em;
}
```

Wir können diese Regeln zusammenfassen und in jedem Deklarationsblock eines Selektors mehrere Eigenschaften angeben. Die Stile für `li` und `legend` können wir sogar gemeinsam definieren: Nicht zutreffende Stile, etwa die Deklaration `list-style-type` für `legend`, werden ignoriert.

```css
body {
  margin: 1vh 1vw;
  background-color: #eeffee;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: white;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #ccffcc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Falls Ihnen Teile des obigen CSS noch unvertraut sind, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/Guides/Selectors) nachschlagen oder das Modul [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ganz gleich, ob Sie das obige CSS unverändert übernehmen, die Stile nach Ihren Vorstellungen anpassen oder eigenes CSS von Grund auf schreiben: Speichern Sie das gesamte CSS in einer neuen Datei namens [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre Datei `index.html`.

### Das statische HTML und CSS für unsere PWA fertigstellen

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die Beispieldaten zu früheren Menstruationen und die Überschrift aus oder löschen Sie sie:

```html
<section id="past-periods">
  <!--
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
  -->
</section>
```

## Nächste Schritte

Bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um aus diesen statischen Inhalten eine Webanwendung zu machen und sie anschließend mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu einer Progressive Web App zu erweitern, [richten wir eine lokale Entwicklungsumgebung ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection). Dort können wir uns unseren Fortschritt ansehen.

Bis dahin können Sie sich das [statische Grundgerüst von CycleTracker](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen. Sie können auch den [HTML- und CSS-Quellcode von CycleTracker](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) in seinem derzeitigen, noch nicht funktionsfähigen Zustand von GitHub herunterladen, bevor Sie mit den nächsten Schritten fortfahren.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
