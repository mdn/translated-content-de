---
title: "CycleTracker: Basis HTML und CSS"
short-title: Basis HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite auszeichnen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in dem der Benutzer die Start- und Enddaten jedes Zeitraums eingeben kann. Unten befindet sich eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige von Benutzereingaben enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, grundlegende Kenntnisse in [HTML](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) und [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat von [Getting Started](/de/docs/Learn/Getting_started_with_the_web), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt überprüfen, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionale Webanwendung umzuwandeln. Sobald wir eine funktionierende App haben, können wir sie Schritt für Schritt in eine PWA umwandeln, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser statisches Website-HTML, mit Platzhaltern für die noch zu erstellenden externen CSS- und JavaScript-Dateien, ist:

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

Selbst wenn das HTML in `index.html` Ihnen bekannt ist, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie einige [temporäre fest codierte Daten](#temporärer_fest_codierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet in `style.css` hinzufügen und `app.js`, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionstüchtig macht, erstellen.

Die erste Zeile des HTMLs ist ein {{glossary("doctype")}}-Präambel, das sicherstellt, dass sich der Inhalt korrekt verhält.

```html
<!doctype html>
```

Die root-{{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut, das die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für die Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die [Zeichenkodierung](/de/docs/Glossary/Character_encoding) definiert, und das [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports angezeigt wird und beim Laden auf sehr kleinen Bildschirmen nicht verkleinert wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite mit dem {{HTMLelement("title")}}-Element auf "Cycle Tracker". Während der Inhalt des `<head>` nicht innerhalb der Seite angezeigt wird, ist der Inhalt des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite mit einem Lesezeichen versieht. Der Titel bietet auch einen zugänglichen Namen für Benutzer von Bildschirmlesegeräten, die darauf angewiesen sind, zu wissen, auf welchem Tab sie sich derzeit befinden.

Während der Titel "Menstruationszyklus-Tracking-Anwendung" lauten könnte, haben wir einen verkürzten Namen gewählt, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese beiden `<meta>`-Tags und das `<title>` aus Gründen der besseren Benutzererfahrung als erforderliche Komponenten jedes HTML-Dokuments betrachtet werden.

Der letzte Bestandteil, den wir derzeit im `<head>` einbeziehen, ist ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verbindet.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource zu spezifizieren. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut—und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt nochmals aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift erster Stufe mit einem [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und ein {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularelemente, ein Etikett für jedes Formularelement und eine Schaltfläche zum Absenden. Was die Formularelemente betrifft, müssen wir den Benutzer bitten, sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus einzugeben.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einer {{HTMLelement("legend")}} hinzu, die den Zweck dieses Satzes von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugeordnete Etikett bietet jedem `<input>` einen {{glossary("accessible name")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengefasst, innerhalb des `<fieldset>` fügen wir zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, jeweils mit einem Datumswähler für die Start- und Enddaten des derzeit eingetragenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}n der Datumswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element ein, das das Formular absendet; wir beschriften es mit "Add Period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einschließen. Das `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir empfehlen Ihnen, [mehr über die Erstellung zugänglicher Webformulare zu erfahren](/de/docs/Learn/Forms).

### Temporärer fest codierter Ergebnistext

Dann fügen wir eine leere {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript ausgefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste der vergangenen Perioden sowie einen Header für den Abschnitt anzuzeigen.

Für den Moment codieren wir vorübergehend einige Inhalte innerhalb dieses `<section>`, einschließlich eines `<h2>` Headers und einiger vergangener Perioden, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom Container `<section id="past-periods"></section>`, ist vorübergehend. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abgeschlossen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) haben und mit dem Aussehen der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden `app.js`-JavaScript-Datei hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Element/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript ausgeführt wird, nachdem das HTML-Dokument geparst wurde.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, das Speichern der übermittelten Daten im lokalen Speicher und der Anzeige der Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun vollständig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können das statische HTML nun mit CSS gestalten. Unser endgültiges CSS ist:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das obenstehende CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern und dann [das statische HTML und CSS abschließen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection). Wenn irgendetwas in dem obenstehendem CSS neu für Sie ist, lesen Sie für eine Erklärung weiter.

![Helles grünes Webpage mit einem großen Header, einem Formular mit einer Legende, zwei Datumswählern und einem Knopf. Unten werden falsche Daten für zwei Menstruationszyklen und ein Header angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die Eigenschaft {{CSSXref("background-color")}}, um eine hellgrüne (`#efe`) Hintergrundfarbe auf dem `body` festzulegen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der Legende eine weiße (`#fff`) Hintergrundfarbe sowie eine dünne durchgehende Linie, die mit der Eigenschaft {{CSSXref("border")}} hinzugefügt wurde. Wir überschreiben die `background-color` für die Legende, wodurch die Legende und die Listeneinträge ein dunkleres Grün (`#cfc`) haben.

Wir verwenden die Pseudo-Klasse [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type) [Selector](/de/docs/Web/CSS/CSS_selectors), um jeden gerade nummerierten Listeneintrag so einzustellen, dass er die Hintergrundfarbe von seinem übergeordneten Element {{CSSXref("inherit")}}; in diesem Fall erbt er die #fff Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listeneinträge nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf das `ul` setzen, und entfernen die Listenmarker, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listeneinträge selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Platz hinzu, indem wir den {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, wobei der weiße Raum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch ein wenig Padding zu den `li`- und `legend`-Elementen hinzu. Schließlich setzen wir zur Verbesserung, aber nicht zur Behebung, der Ausrichtung der past-periods-Daten die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, wobei jedes Glyph denselben festen Breitenwert hat.

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

Wir können das oben Gesagte zusammenfassen, indem wir mehrere Eigenschaften in jedes Selector-Deklarationsblock setzen. Wir können sogar die Stile für `li` und `legend` zusammenfassen; irrelevante Stile, wie zum Beispiel die Declaration `list-style-type` für `legend`, werden ignoriert.

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

Wenn Ihnen eines der obigen CSS-Elemente noch fremd erscheint, können Sie sich die [CSS-Eigenschaften](/de/docs/Glossary/Property/CSS) und [Selektoren](/de/docs/Web/CSS/CSS_selectors) ansehen oder den [Einführungskurs in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) durcharbeiten.

Ob Sie das obige CSS unverändert verwenden, die obigen Stile Ihren Vorlieben anpassen oder Ihr eigenes CSS von Grund auf neu schreiben, schließen Sie alle CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschluss des statischen HTML und CSS für unsere PWA

Bevor wir fortfahren, [kommentieren Sie die gefälschten Daten zum letzten Zeitraum aus oder löschen Sie sie](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments):

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Webanwendung umzuwandeln, und sie dann zu einer progressiven Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) verbessern, werden wir eine [lokale Entwicklungsumgebung einrichten](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu prüfen.

Bis dahin können Sie die [statische CycleTracker-Shell](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
