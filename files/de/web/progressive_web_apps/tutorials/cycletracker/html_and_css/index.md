---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Um eine PWA, eine Progressive Web App, zu erstellen, müssen wir eine vollständig funktionierende Webanwendung kreieren. In diesem Abschnitt werden wir das HTML für eine statische Webseite markieren und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Bereich der Seite ist ein Formular, in dem der Benutzer die Start- und Enddaten jedes Zyklus eingibt. Der untere Bereich ist eine Liste vorheriger Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter für die Anzeige der vom Benutzer eingegebenen Daten enthält. Danach fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie damit nicht vertraut sind, ist MDN die Heimat des [Einstieg in die Webentwicklung](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt betrachten, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den statischen Inhalt, der in diesem Abschnitt erstellt wurde, in eine funktionsfähige Webanwendung umzuwandeln. Sobald wir eine funktionsfähige App haben, können wir sie schrittweise zu einer PWA erweitern, die installierbar ist und offline funktioniert.

## Statische Webinhalte

Unser statisches HTML der Webseite mit Platzhaltern für die noch zu erstellenden externen CSS- und JavaScript-Dateien ist:

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

Auch wenn Ihnen das HTML in `index.html` vertraut ist, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie einige [temporäre, fest codierte Daten](#temporär_fest_codierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js`, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) erstellen, das diese Webseite funktional macht.

Die erste Zeile des HTML ist ein {{Glossary("doctype", "Doctype")}}-Präambel, das sicherstellt, dass der Inhalt korrekt verarbeitet wird.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umfassen den gesamten Inhalt mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut, das die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser nicht sichtbar sind, außer dem `<title>`, das als Titel des Browser-Tabs angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) {{HTMLElement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während der Inhalt des `<head>` nicht auf der Seite angezeigt wird, wird der Inhalt des `<title>` gesehen! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite bookmarkt. Der Titel bietet auch einen zugänglichen Namen für Bildschirmlesegeräte, die darauf angewiesen sind, um zu wissen, auf welchem Tab sie sich gerade befinden.

Obwohl der Titel "Menstruationszyklus-Tracking-Anwendung" lauten könnte, haben wir uns für einen verkürzten Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese zwei `<meta>`-Tags und das `<title>` aus Gründen einer besseren Benutzererfahrung als erforderliche Komponenten eines HTML-Dokuments betrachtet werden.

Für den Moment ist die letzte Komponente, die wir im `<head>` einfügen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu erstellendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource zu spezifizieren. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut — und viele weitere Werte, die in keiner Spezifikation sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut betrachten, wenn wir den [Link zur Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einschließen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen wollen, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 unter Verwendung eines [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und eines {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Sendebutton enthalten. Was die Formularelemente betrifft, benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einer {{HTMLelement("legend")}} ein, das den Zweck dieser Gruppe von Formularelementen bezeichnet.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumswahlelemente sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` einem Formularelement zuzuordnen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut, das dem [`for`](/de/docs/Web/HTML/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} entspricht. Das zugeordnete Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Insgesamt fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, die jeweils einen Datumswähler für die Start- und Enddaten des aktuell eingegebenen Menstruationszyklus enthalten, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element ein, das das Formular absendet; wir bezeichnen es als "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einfügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über das Erstellen zugänglicher Webformulare zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Temporär fest codierter Ergebnistext

Wir fügen dann einen leeren {{HTMLElement("section")}}-Container ein. Dieser Container wird mit JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, werden wir JavaScript verwenden, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einem Header für den Abschnitt zu präsentieren.

Für den Moment kodieren wir zeitweilig etwas Inhalt innerhalb dieses `<section>` fest, einschließlich eines `<h2>`-Headers und ein paar vergangenen Perioden, um etwas zum Stylen zu haben, wenn wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen von dem Container `<section id="past-periods"></section>`, ist temporär. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abschließen](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu erstellenden `app.js`-JavaScript-Datei ein. Wir fügen das [`defer`](/de/docs/Web/HTML/Element/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript ausgeführt wird, nachdem das HTML-Dokument geparst wurde.

```html
<script src="app.js" defer></script>
```

Die Datei `app.js` wird alle Funktionsweisen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, Speicherung der eingereichten Daten im lokalen Speicher und Anzeige der Zyklen im Inhalt des Bodys.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt vollständig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich einfach aussieht. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS stylen. Unser endgültiges CSS ist:

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [das statische HTML und CSS](#abschließen_des_statischen_html_und_css_für_unsere_pwa) fertigstellen. Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumswählern und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und ein Header angezeigt.](html.jpg)

### Erklärung des CSS

Wir verwenden die Eigenschaft {{CSSXref("background-color")}} um eine helle grüne (`#efe`) Hintergrundfarbe auf den `body` zu setzen. Dann verwenden wir auf der ungeordneten Liste, dem Fieldset und der Legende eine weiße (`#fff`) Hintergrundfarbe, zusammen mit einem dünnen soliden Rand, der mit der Eigenschaft {{CSSXref("border")}} hinzugefügt wird. Wir überschreiben die `background-color` für die Legende, um die Legende und die Listenelemente dunkler grün (`#cfc`) zu machen.

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type) Pseudo-Klasse [Selektor](/de/docs/Web/CSS/CSS_selectors), um jedes gerade nummerierte Listenelement zu {{CSSXref("inherit")}} der Hintergrundfarbe von seinem Elternteil zu erben; in diesem Fall erbt es die `#fff` Hintergrundfarbe von der ungeordneten Liste.

```css
body {
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
li,
legend {
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir den Abstand, indem wir {{CSSXref("padding", "padding: 0")}} auf dem `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listenelemente selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig weißen Raum hinzu, indem wir den {{CSSXref("margin")}} der `body`-Elemente mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, wodurch der weiße Raum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch ein wenig Padding zu den `li` und `legend` hinzu. Schließlich, um die Ausrichtung der vergangenen Periodendaten zu verbessern, aber nicht zu beheben, setzen wir die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, wodurch jedes Glyphensymbol die gleiche feste Breite hat.

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

Wir können das oben zusammenfassen, indem wir mehrere Eigenschaften in jedem Selektor-Deklarationsblock setzen. Wir können sogar die Stile für die `li` und `legend` zusammenführen; irrelevante Stile, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Wenn Ihnen eines der oben genannten CSS immer noch unbekannt vorkommt, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)-Modul durcharbeiten.

Ob Sie das obige CSS wörtlich verwenden, die obigen Stile zu Ihrem Geschmack bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie es als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html` Datei.

### Abschließen des statischen HTML und CSS für unsere PWA

Bevor Sie weitermachen, [kommentieren Sie](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) die gefälschten vergangenen Periodendaten und den Header aus oder löschen Sie sie:

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

## Als nächstes

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App umzuwandeln und sie dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu erweitern, werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) erstellen, um unseren Fortschritt zu betrachten.

Bis dahin können Sie die [statische CycleTracker-Oberfläche](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) betrachten und den [CycleTracker HTML und CSS Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
