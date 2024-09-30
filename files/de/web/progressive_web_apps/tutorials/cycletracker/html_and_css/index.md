---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite erstellen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Bereich der Seite ist ein Formular, in dem der Benutzer die Start- und Enddaten jedes Zyklus eingeben kann. Unten ist eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige der vom Benutzer eingegebenen Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) und [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) zu haben. Wenn Sie damit nicht vertraut sind, ist MDN die Heimat von [Erste Schritte](/de/docs/Learn/Getting_started_with_the_web), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und werfen einen Blick auf unseren Fortschritt, bevor wir der statischen Seite, die in diesem Abschnitt erstellt wurde, [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um daraus eine funktionale Webanwendung zu machen. Sobald wir eine funktionierende App haben, können wir diese schrittweise in eine PWA verwandeln, die installiert werden kann und offline funktioniert.

## Statische Webinhalte

Unser statisches Seiten-HTML, mit Platzhalter-{{HTMLElement("link")}}- und {{HTMLElement("script")}}-Elementen für noch zu erstellende externe CSS- und JavaScript-Dateien, sieht folgendermaßen aus:

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

Kopieren Sie dieses HTML und speichern Sie es in einer Datei mit dem Namen `index.html`.

## HTML-Inhalt

Auch wenn Ihnen das HTML in `index.html` vertraut ist, empfehlen wir Ihnen, diesen Abschnitt durchzulesen, bevor Sie einige [vorübergehend fest codierte Daten](#vorübergehend_fest_codierter_ergebniste) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js` erstellen, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist ein [DOCTYPE](/de/docs/Glossary/doctype)-Präambel, die sicherstellt, dass der Inhalt korrekt funktioniert.

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

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift im Browser-Tab angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die [Zeichenkodierung](/de/docs/Glossary/Character_encoding) definiert, und das [Viewport](/de/docs/Web/HTML/Viewport_meta_tag)-{{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Ansichtsfensters gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Obwohl der Inhalt des `<head>` nicht auf der Seite angezeigt wird, sind die Inhalte des `<title>` sichtbar! Der Text im `<title>`-Element erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchergebnissen und ist der Standardtitel, wenn ein Nutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Screenreader-Benutzer, die darauf angewiesen sind, um zu wissen, auf welchem Tab sie sich befinden.

Obwohl der Titel "Menstruationszyklus-Tracking-Anwendung" lauten könnte, haben wir uns für einen gekürzten Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese beiden `<meta>`-Tags und das `<title>` aus Gründen der besseren Benutzererfahrung als erforderliche Komponenten jedes HTML-Dokuments betrachtet werden.

Zurzeit ist die letzte Komponente, die wir im `<head>` einbeziehen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu erstellendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut – und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt noch einmal aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den Benutzer sehen sollen, wenn sie die Seite im Internet besuchen.

Innerhalb des `<body>` enthalten wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und einem {{HTMLelement("form")}}.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Senden-Button. Bezüglich der Formularelemente müssen Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingeben.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} hinzu, der den Zweck dieser Gruppe von Formularfeldern kennzeichnet.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem wir verhindern, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label gibt jedem `<input>` einen [barrierefreien Namen](/de/docs/Glossary/accessible_name).

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammenfassend fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) hinzu, jeweils mit einem Datumswähler für die Start- und Enddaten des aktuell eingegebenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir beschriften es mit "Add period", indem wir diesen Text zwischen den Eröffnungs- und Schlusstags einfügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir empfehlen Ihnen, mehr über [barrierefreie Webformulare](/de/docs/Learn/Forms) zu lernen.

### Vorübergehend fest codierter Ergebniste

Wir fügen dann ein leeres {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript befüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einem Header für den Abschnitt anzuzeigen.

Für den Moment kodieren wir einige Inhalte in diesem `<section>` vorübergehend fest, einschließlich eines `<h2>`-Headers und einiger vergangener Perioden, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom `<section id="past-periods"></section>`-Container, ist vorübergehend. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir das CSS abgeschlossen haben und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu erstellenden JavaScript-Datei `app.js` hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Element/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript nach dem Parsen des HTML des Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die Datei `app.js` wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, das Speichern der Daten im lokalen Speicher und das Anzeigen der Zyklen innerhalb des Inhalts des Bodys.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun vollständig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie recht schlicht ist. Das werden wir im nächsten Abschnitt verbessern.

## CSS-Inhalt

Wir können jetzt das statische HTML mit CSS stylen. Unser finales CSS ist:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern und dann das [statische HTML und CSS abschließen](#beenden_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einer großen Überschrift, einem Formular mit einer Legende, zwei Datumswählern und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und eine Überschrift angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#efe`) Hintergrundfarbe auf dem `body` festzulegen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset, und der Legende eine weiße (`#fff`) Hintergrundfarbe, zusammen mit einem dünnen festen Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende und machen die Legende und die Listenelemente dunkler grün (`#cfc`).

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudo-Klasse [Selector](/de/docs/Web/CSS/CSS_selectors), um jedes gerade nummerierte Listenelement so einzustellen, dass es den Hintergrundfarbe von seinem Elternteil {{CSSXref("inherit")}} erbt; in diesem Fall erbt es die `#fff` Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir den Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf dem `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig weißen Raum hinzu, indem wir den {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Ansichtspunkte-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, wodurch der weiße Raum außerhalb unserer App proportional zur Größe des Ansichtsfensters wird. Wir fügen auch dem `li` und der Legende ein wenig Padding hinzu. Schließlich setzen wir, um die Anzeige der Daten vergangener Perioden zu verbessern, ohne sie zu beheben, die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, wodurch jedes Glyph dieselbe feste Breite hat.

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

Wir können das oben kombinieren, indem wir mehrere Eigenschaften in jedem Selektor-Deklarationsblock einfügen. Wir können sogar die Stile für das `li` und die Legende zusammenfassen; irrelevante Stile, wie die `list-style-type`-Deklaration auf der Legende, werden ignoriert.

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

Wenn Ihnen eines der obigen CSS weiterhin unbekannt vorkommt, können Sie die [CSS-Eigenschaften](/de/docs/Glossary/Property/CSS) und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder den Lernpfad des [Einstiegs in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) durcharbeiten.

Egal, ob Sie das obige CSS wortwörtlich verwenden, die oben genannten Stile nach Ihrem Geschmack bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, inkludieren Sie alle CSS in eine neue Datei und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Beenden des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments) Sie die gefälschten Daten vergangener Perioden und den Header aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu verwandeln und diese dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service-Arbeiter](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu erweitern, werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) erstellen, um unseren Fortschritt zu sehen.

Bis dahin können Sie die [statische CycleTracker-Hülle](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker-HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
