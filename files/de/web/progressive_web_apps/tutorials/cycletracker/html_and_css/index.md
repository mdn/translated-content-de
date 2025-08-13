---
title: "CycleTracker: Basis-HTML und -CSS"
short-title: Basis-HTML und -CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt markieren wir das HTML für eine statische Webseite und verbessern das Erscheinungsbild mit CSS.

Unser Projekt ist die Erstellung von CycleTracker, einem Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Leitfaden](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in dem der Benutzer die Start- und Enddaten jedes Zeitraums eingeben kann. Der untere Abschnitt ist eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige der vom Benutzer eingegebenen Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Zum Absolvieren dieser Anleitung ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie damit nicht vertraut sind, ist MDN der Heimatort der [Einführung in die Webentwicklung](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und überprüfen unseren Fortschritt, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um die in diesem Abschnitt erstellten statischen Inhalte in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir diese schrittweise in eine PWA erweitern, die installierbar ist und offline funktioniert.

## Statische Webinhalte

Unser HTML für die statische Seite, mit Platzhalter-{{HTMLElement("link")}} und {{HTMLElement("script")}}-Elementen für noch zu erstellende externe CSS- und JavaScript-Dateien, ist:

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

Auch wenn Ihnen das HTML in `index.html` bekannt vorkommt, empfehlen wir, diesen Abschnitt durchzulesen, bevor Sie einige [temporär fest codierte Daten](#temporär_fest_codierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet namens [`style.css`](#css-inhalt) hinzufügen und `app.js` erstellen, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTMLs ist ein {{Glossary("doctype", "Doctype")}}-Präambel, das sicherstellt, dass die Inhalte korrekt funktionieren.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umfassen alle Inhalte, wobei das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird, für die Leser nicht sichtbar ist.

Der `<head>`-Abschnitt umfasst alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und der [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) {{HTMLelement("meta")}}-Tag, der sicherstellt, dass die Seite in der Breite des Viewports gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während die Inhalte des `<head>` nicht innerhalb der Seite angezeigt werden, sind die Inhalte des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in den Suchmaschinenergebnissen und ist der Standardtitel, wenn ein Benutzer eine Webseite bookmarkt. Der Titel bietet auch einen zugänglichen Namen für Bildschirmleser-Benutzer, die darauf angewiesen sind, um zu wissen, auf welchem Tab sie sich gerade befinden.

Obwohl der Titel "Anwendung zur Menstruationszyklusverfolgung" lauten könnte, haben wir uns für einen verkürzten und dezenteren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Auch wenn offiziell optional, sollten für eine bessere Benutzererfahrung diese beiden `<meta>`-Tags und der `<title>` als die drei Bestandteile des `<head>` angesehen werden, die als notwendig für jedes HTML-Dokument betrachtet werden sollten.

Für jetzt ist die letzte Komponente, die wir im `<head>` einfügen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource festzulegen. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut – und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt nochmals beleuchten, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält alle Inhalte, die angezeigt werden sollen, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Absende-Button. Bei den Formularelementen benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieser Menge von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswahlfelder sind {{HTMLElement("input")}}-Elemente des Typs {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugeordneten {{HTMLelement("label")}} entspricht. Das zugeordnete Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Insgesamt umfassen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente), jeweils mit einem Datumsauswahlfeld für die Start- und Enddaten des aktuell eingetragenen Menstruationszyklus, zusammen mit den zugeordneten {{HTMLelement("label")}}-Elementen der Datumsauswahlfelder. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir benennen es "Periode hinzufügen", indem wir diesen Text zwischen den öffnenden und schließenden Tags einschließen. Das `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir möchten Sie dazu ermutigen, [mehr über die Erstellung barrierefreier Webformulare zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Temporär fest codierter Ergebnistext

Anschließend fügen wir eine leere {{HTMLElement("section")}} ein. Dieser Container wird mithilfe von JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste früherer Zeiträume zusammen mit einem Header für diesen Abschnitt anzuzeigen.

Für die Zeit fügen wir vorübergehend einige Inhalte innerhalb dieser `<section>` hinzu, einschließlich eines `<h2>`-Headers und einiger früherer Zeiträume, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom Container `<section id="past-periods"></section>`, ist vorübergehend. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abschließen](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden JavaScript-Datei `app.js` ein. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript ausgeführt wird, nachdem das HTML des Dokuments geparst wurde.

```html
<script src="app.js" defer></script>
```

Die Datei `app.js` wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, das Speichern der abgesendeten Daten im Local Storage und das Anzeigen von Zyklen im Inhalt des Bodys.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun fertig! Sie können die Datei an diesem Punkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS stylen. Unser finales CSS ist:

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

Wenn Ihnen jede Zeile bekannt vorkommt, können Sie das obenstehende CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern und dann [das statische HTML und CSS beenden](#abschluss_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen irgendetwas in dem obenstehenden CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Unten sind gefälschte Daten für zwei Menstruationszyklen und ein Header zu sehen.](html.jpg)

### Erläuterung des CSS

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#eeffee`) Hintergrundfarbe auf dem `body` festzulegen. Dann nutzen wir für die ungeordnete Liste, das Fieldset und die Legende eine weiße Hintergrundfarbe sowie einen dünnen, soliden Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende und machen die Legende und die Listenelemente dunkler grün (`#ccffcc`).

Wir verwenden den [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudo-Klassen-Selektor, um jedes gerade Listenelement so zu setzen, dass es die Hintergrundfarbe seines Elternteils erbt; in diesem Fall erbt es die `weiß`-Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir die Einrückungen, indem wir {{CSSXref("padding", "padding: 0")}} auf dem `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen etwas Weißraum hinzu, indem wir den {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, sodass der Weißraum außerhalb unser App proportional zur Größe des Viewports ist. Wir fügen auch etwas Padding zu den `li` und `legend` hinzu. Schließlich verbessern wir, aber korrigieren nicht, die Ausrichtung der Daten der vergangenen Perioden, indem wir die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace` setzen, sodass jedes Zeichen die gleiche feste Breite hat.

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

Wir können das obenstehende kombinieren, indem wir mehrere Eigenschaften in jede Deklarationsblöcke der Selektoren setzen. Wir können sogar die Stile für die `li` und `legend` zusammenlegen; irrelevante Stile wie die `list-style-type`-Deklaration auf `legend` werden ignoriert.

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

Wenn Ihnen irgendetwas im obigen CSS noch unbekannt vorkommt, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das Modul [CSS Styling Basics](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Egal, ob Sie das obige CSS wörtlich verwenden, die obigen Stile an Ihre Präferenzen anpassen oder Ihr eigenes CSS von Grund auf schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschluss des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die gefälschten Daten und den Header für die vergangenen Perioden aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diese statischen Inhalte in eine Web-App zu verwandeln und sie dann mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) in eine progressive Web-App zu erweitern, werden wir eine [lokale Entwicklungsumgebung einrichten](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu überprüfen.

Bis dahin können Sie das [statische CycleTracker-Shell](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker-HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
