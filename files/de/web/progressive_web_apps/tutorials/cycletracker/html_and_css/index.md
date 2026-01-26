---
title: "CycleTracker: Basis-HTML und -CSS"
short-title: Basis-HTML und -CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine Progressive Web Application, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite auszeichnen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt besteht darin, CycleTracker, einen Menstruationszyklus-Tracker, zu erstellen.
Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Bereich der Seite ist ein Formular, in das der Benutzer die Start- und Enddaten jedes Zeitraums eingeben kann. Unten befindet sich eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter enthält, um benutzereingegebene Daten anzuzeigen. Dann fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Ihnen diese Grundlagen nicht vertraut sind, ist MDN die Heimat der [Getting Started](/de/docs/Learn_web_development/Getting_started/Your_first_website)-Reihe, einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt überprüfen, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionale Webanwendung umzuwandeln. Sobald wir eine funktionierende App haben, haben wir etwas, das wir schrittweise zu einer PWA erweitern können, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser HTML der statischen Seite mit Platzhaltern für {{HTMLElement("link")}} und {{HTMLElement("script")}} für noch zu erstellende externe CSS- und JavaScript-Dateien ist:

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

Auch wenn Ihnen das HTML in `index.html` vertraut ist, empfehlen wir, diesen Abschnitt durchzulesen, bevor Sie einige [temporär fest codierte Daten](#temporärer_fest_codierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js` erstellen, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTMLs ist eine {{Glossary("doctype", "DOCTYPE")}}-Präambel, die sicherstellt, dass der Inhalt korrekt dargestellt wird.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt, wobei das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut die Hauptsprache der Seite festlegt.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für die Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` umfasst alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} festlegt, und das [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-{{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während der Inhalt des `<head>` nicht auf der Seite angezeigt wird, werden die Inhalte des `<title>` gesehen! Der innerer Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite mit einem Lesezeichen versieht. Der Titel bietet auch einen zugänglichen Namen für Benutzer von Screenreadern, die darauf angewiesen sind, zu wissen, in welchem Tab sie sich gerade befinden.

Während der Titel "Menstruationszyklus-Tracking-Anwendung" sein könnte, haben wir uns für einen verkürzten Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese beiden `<meta>`-Tags und das `<title>` für ein besseres Benutzererlebnis als die drei erforderlichen Komponenten des `<head>` betrachtet werden, die Teil jedes HTML-Dokuments sein sollten.

Für den Moment ist die letzte Komponente, die wir im `<head>` aufnehmen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-Element `<link>` wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut – und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der gebräuchlichste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden auf das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt zurückkommen, wenn wir den [Link zum Manifest](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Steuerelemente, ein Label für jedes Steuerelement und eine Senden-Schaltfläche enthalten. In Bezug auf die Steuerelemente benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieser Reihe von Formularfeldern kennzeichnet.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswahlen sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem wir verhindern, dass der Benutzer versehentlich ein unvollständiges Formular sendet.

Um ein `<label>` mit einem Steuerelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Insgesamt fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, die jeweils eine Datumsauswahl für die Start- und Enddaten des derzeit eingegebenen Menstruationszyklus sowie die zugehörigen {{HTMLelement("label")}}s der Datumsauswahlen enthalten. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular sendet; wir beschriften es mit "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einschließen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über das Erstellen von zugänglichen Webformularen zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Temporärer fest codierter Ergebnistext

Dann fügen wir einen leeren {{HTMLElement("section")}} hinzu. Dieser Container wird mit JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular sendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einem Header für den Abschnitt darzustellen.

Vorläufig codieren wir einige Inhalte innerhalb dieses `<section>` temporär fest, einschließlich eines `<h2>`-Headers und einiger vergangener Perioden, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt ist, abgesehen vom Container `<section id="past-periods"></section>`, temporär. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abschließen](#css-inhalt) und mit dem Aussehen der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden `app.js`-JavaScript-Datei hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript ausgeführt wird, nachdem das HTML-Dokument geparst wurde.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionsweisen unserer Anwendung enthalten, einschließlich der Ereignis-Handler für die `<button>`, das Speichern der gesendeten Daten im lokalen Speicher und das Anzeigen von Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt fertig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Ihnen wird auffallen, dass sie ziemlich schlicht ist. Wir werden das im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS stylen. Unser endgültiges CSS ist:

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

Wenn jede Zeile Ihnen vertraut ist, können Sie das oben stehende CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, und dann [das statische HTML und CSS abschließen](#abschluss_des_statischen_html_und_css_für_unsere_pwa). Wenn irgendetwas in dem oben genannten CSS für Sie neu ist, lesen Sie weiter für eine Erklärung.

![Helles grünes Webseitendesign mit einer großen Überschrift, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und eine Überschrift gezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um im `body` eine hellgrüne (`#eeffee`) Hintergrundfarbe zu setzen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der Legende eine weiße Hintergrundfarbe sowie eine dünne solide Linie, die mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende, sodass die Legende und die Listenelemente ein dunkleres Grün (`#ccffcc`) erhalten.

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type) Pseudo-Klassen-[Selektor](/de/docs/Web/CSS/Guides/Selectors), um jedes gerade Listenelement {{CSSXref("inherit")}} die Hintergrundfarbe seines Elternteils erben zu lassen; in diesem Fall erbt es die `white` Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir die Ausrichtung durch Einstellung von {{CSSXref("padding", "padding: 0")}} auf dem `ul` und entfernen die Listenmarkierungen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Leerraum hinzu, indem wir den `body`-{{CSSXref("margin")}} mit `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) setzen und dadurch Leerraum außerhalb unserer App proportional zur Viewport-Größe machen. Wir fügen auch ein wenig Auffüllung zu den `li` und `legend` hinzu. Schließlich, um die Ausrichtung der vergangenen Periodendaten zu verbessern, aber nicht zu beheben, setzen wir die {{CSSXref("font-family")}} des `ul` Ergebnisbereichs auf `monospace`, damit jede Glyphe die gleiche feste Breite hat.

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

Wir können das Obige kombinieren, indem wir mehrere Eigenschaften in jedem Selektor-Deklarationsblock zusammenfassen. Wir können sogar die Stile für die `li` und `legend` zusammenfassen; irrelevante Stile, wie die `list-style-type`-Deklaration in `legend`, werden ignoriert.

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

Wenn Ihnen eines der obigen CSS noch immer unbekannt vorkommt, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/Guides/Selectors) nachschlagen oder das Modul [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ob Sie das obige CSS wörtlich übernehmen, die obigen Stile nach Ihren Wünschen anpassen oder Ihr eigenes CSS von Grund auf neu schreiben, nehmen Sie all das CSS in eine neue Datei auf und speichern Sie es als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschluss des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) oder löschen Sie die gefälschten alten Periodendaten und den Header:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu verwandeln und dann mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) in eine Progressive Web App zu erweitern, werden wir zunächst [eine lokale Entwicklungsumgebung erstellen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu sehen.

Bis dahin können Sie die [statische CycleTracker-Hülle](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker HTML und CSS Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
