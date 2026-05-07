---
title: "CycleTracker: Grundlegendes HTML und CSS"
short-title: Grundlegendes HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 57d4a3ab62517528c9642489e9dbdbec3e9c319e
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine Progressive Web Application, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite auszeichnen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker, einen Menstruationszyklus-Tracker, zu erstellen. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Teil der Seite ist ein Formular für den Benutzer, um die Start- und Enddaten jedes Zyklus einzugeben. Der untere Teil ist eine Liste der vorherigen Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige von Benutzereingaben enthält. Dann fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein Grundverständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat von [Getting Started](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt überprüfen, bevor wir [JavaScript-Funktionalitäten](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um die in diesem Abschnitt erstellten statischen Inhalte in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir diese schrittweise in eine PWA umwandeln, die installiert werden kann und offline funktioniert.

## Statische Webinhalte

Unser statisches Site-HTML mit Platzhaltern für {{HTMLElement("link")}} und {{HTMLElement("script")}}-Elementen für noch zu erstellende externe CSS- und JavaScript-Dateien sieht wie folgt aus:

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

Auch wenn Ihnen das HTML in `index.html` bekannt vorkommt, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie einige [temporäre festkodierte Daten](#temporäre_festkodierte_textdaten) hinzufügen, CSS in ein externes Stylesheet [`style.css`](#css-inhalt) integrieren und `app.js` erstellen, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTMLs ist ein {{Glossary("doctype", "Doctype")}} Präludium, das sicherstellt, dass die Inhalte korrekt funktionieren.

```html
<!doctype html>
```

Die übergeordneten {{HTMLelement("html")}}-Tags umfassen den gesamten Inhalt, wobei das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird, nicht sichtbar sind.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen im `<head>` sollten immer die Zeichensatzdefinition, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) {{HTMLelement("meta")}}-Tag sein, das sicherstellt, dass die Seite in der Breite des Viewports dargestellt wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite mit dem {{HTMLelement("title")}}-Element auf "Cycle Tracker". Während der Inhalt des `<head>` nicht auf der Seite angezeigt wird, ist der Inhalt des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Bildschirmleser-Benutzer, die darauf angewiesen sind zu wissen, auf welchem Tab sie sich aktuell befinden.

Obwohl der Titel "Menstruationszyklus-Tracker-Anwendung" sein könnte, haben wir uns für einen kürzeren, diskreteren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten für eine bessere Benutzererfahrung diese beiden `<meta>`-Tags und das `<title>` die drei Komponenten des `<head>` sein, die als erforderlich für jedes HTML-Dokument betrachtet werden.

Für den Moment ist die letzte Komponente, die wir im `<head>` einfügen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verbindet.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-Element `<link>` wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource festzulegen. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut — und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut behandeln, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einfügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält alle Inhalte, die wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Im `<body>` fügen wir den Namen der App als Überschrift der Stufe 1 unter Verwendung eines [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und eines {{HTMLelement("form")}} hinzu.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und eine Schaltfläche zum Absenden enthalten. Hinsichtlich der Formularelemente benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Im `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} hinzu, das den Zweck dieser Gruppe von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu verringern, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengefasst, innerhalb des `<fieldset>`, fügen wir zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, jeweils mit einem Datumsauswähler für die Start- und Enddaten des aktuell eingegebenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir beschriften es mit "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einfügen. Das `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über die Erstellung zugänglicher Webformulare zu erfahren](/de/docs/Learn_web_development/Extensions/Forms).

### Temporäre festkodierte Textdaten

Wir fügen dann einen leeren {{HTMLElement("section")}} ein. Dieser Container wird über JavaScript befüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einer Überschrift für den Abschnitt zu präsentieren.

Vorläufig kodieren wir einige Inhalte innerhalb dieses `<section>`, einschließlich einer `<h2>`-Überschrift und einiger vergangener Perioden, um etwas zu haben, das wir beim Schreiben des CSS der Seite gestalten können.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, mit Ausnahme des Containers `<section id="past-periods"></section>`, ist vorübergehend. Wir werden diese temporären Daten entfernen oder kommentieren, sobald wir mit dem [CSS abgeschlossen](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu erstellenden JavaScript-Datei `app.js` ein. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js` Datei wird alle Funktionalitäten unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, Speichern der übermittelten Daten im lokalem Speicher und Anzeige der Zyklen im Inhalt des Bodys.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt fertig! Sie können die Datei nun in Ihrem Browser öffnen, aber Sie werden bemerken, dass sie ziemlich schlicht ist. Wir werden das im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS gestalten. Unser endgültiges CSS ist:

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

Wenn Ihnen jede Zeile bekannt vorkommt, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [beenden Sie das statische HTML und CSS](#abschließen_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit großer Überschrift, einem Formular mit einer Legende, zwei Datumauswählern und einer Schaltfläche. Unten werden gefälschte Daten für zwei Menstruationszyklen und eine Überschrift angezeigt.](html.jpg)

### Erklärtes CSS

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#eeffee`) Hintergrundfarbe auf dem `body` zu setzen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der Legende eine weiße Hintergrundfarbe zusammen mit einem dünnen festen Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wurde. Wir überschreiben die `background-color` für die Legende und setzen die Legende und die Listenelemente auf ein dunkleres Grün (`#ccffcc`).

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type) Pseudo-Class [Selector](/de/docs/Web/CSS/Guides/Selectors), um jedes gerade Listenelement auf {{CSSXref("inherit")}} die Hintergrundfarbe von seinem Elternteil zu setzen; in diesem Fall, erben der `weißen` Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf das `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listenelemente selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig freien Raum hinzu, indem wir das {{CSSXref("margin")}} des `body` mit den [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) `vw` und `vh` setzen, wodurch der Freiraum außerhalb unserer App proportional zur Größe des Viewports wird. Wir fügen auch ein wenig Padding zum `li` und `legend` hinzu. Schließlich, um die Ausrichtung der Vergangene-Zeiten-Daten zu verbessern, aber nicht zu korrigieren, setzen wir die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, wodurch jeder Buchstabe die gleiche feste Breite hat.

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

Wir können das Obige kombinieren, indem wir mehrere Eigenschaften in jedem Selector-Deklarationsblock setzen. Wir können sogar die Stile für das `li` und `legend` zusammenfassen; irrelevante Stile, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

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

Wenn Ihnen immer noch etwas am obigen CSS unbekannt vorkommt, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/Guides/Selectors) nachschlagen oder das Modul [CSS Styling Basics](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Unabhängig davon, ob Sie das oben genannte CSS wörtlich verwenden, die obigen Stile nach Ihren Wünschen bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie es als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschließen des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die gefälschten Daten der vergangenen Perioden und die Überschrift aus oder löschen Sie sie:

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

## Als Nächstes

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu konvertieren und sie dann mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu einer progressiven Webanwendung zu verbessern, werden wir eine [lokale Entwicklungsumgebung einrichten](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu überprüfen.

Bis dahin können Sie die [statische CycleTracker-Shell](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) anzeigen. Sie können auch den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) in seiner aktuellen, nicht-funktionalen Form von GitHub herunterladen, bevor Sie zu den nächsten Schritten übergehen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
