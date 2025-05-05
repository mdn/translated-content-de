---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite markieren und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker, einen Menstruationszyklus-Tracker, zu erstellen. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in dem der Benutzer die Anfangs- und Enddaten jeder Periode eingeben kann. Unten befindet sich eine Liste der vorherigen Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfabschnitt und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige der vom Benutzer eingegebenen Daten enthält. Dann fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie mit diesen Themen nicht vertraut sind, ist MDN die Heimat der Reihe [Erste Schritte](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt begutachten, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um die in diesem Abschnitt erstellten statischen Inhalte in eine funktionale Webanwendung umzuwandeln. Sobald wir eine funktionierende App haben, können wir sie schrittweise zu einer PWA ausbauen, die installierbar ist und offline funktioniert.

## Statische Webinhalte

Unser statisches HTML der Seite, mit Platzhaltern für {{HTMLElement("link")}} und {{HTMLElement("script")}} für noch zu erstellende externe CSS- und JavaScript-Dateien, sieht wie folgt aus:

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

Auch wenn Ihnen das HTML in `index.html` bekannt ist, empfehlen wir, diesen Abschnitt durchzulesen, bevor Sie einige [temporäre fest einprogrammierte Daten](#temporärer_fest_einprogrammierter_ergebnisteil) hinzufügen, CSS zu einem externen Stylesheet in [`style.css`](#css-inhalt) hinzufügen und `app.js` erstellen, das die [JavaScript-Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) enthält, die diese Webseite funktionsfähig macht.

Die erste Zeile des HTMLs ist eine {{Glossary("doctype", "DOCTYPE")}}-Präambel, die sicherstellt, dass der Inhalt korrekt funktioniert.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt mit dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für den Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen im `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element)-{{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während die Inhalte des `<head>` nicht innerhalb der Seite angezeigt werden, sind die Inhalte des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in den Suchergebnissen und ist der Standardtitel, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen barrierefreien Namen für Benutzer von Bildschirmlesegeräten, die darauf angewiesen sind, zu wissen, in welchem Tab sie sich gerade befinden.

Obwohl der Titel "Menstruationszyklus-Tracking-Anwendung" sein könnte, haben wir uns für einen kürzeren und dezenteren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten für eine bessere Benutzererfahrung diese beiden `<meta>`-Tags und das `<title>` als die drei Komponenten des `<head>` betrachtet werden, die in jedem HTML-Dokument als erforderlich angesehen werden sollten.

Für den Moment ist die letzte Komponente, die wir im `<head>` einfügen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut – und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einfügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält alle Inhalte, die angezeigt werden sollen, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` inkludieren wir den Namen der App als Überschrift der Stufe 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}}.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und eine Schaltfläche zum Absenden enthalten. Bezüglich der Formularelemente benötigen wir, dass der Benutzer sowohl ein Anfangsdatum als auch ein Enddatum für jeden übermittelten Menstruationszyklus eingibt.

Innerhalb des `<form>` inkludieren wir ein {{HTMLelement("fieldset")}} mit einer {{HTMLelement("legend")}}, die den Zweck dieses Formularelementsatzes beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswahlen sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir inkludieren das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "barrierefreien Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengeführt, innerhalb des `<fieldset>`, inkludieren wir zwei Absätze ({{HTMLelement("p")}}-Elemente), von denen jeder eine Datumsauswahl für das Anfangs- und Enddatum des gerade eingegebenen Menstruationszyklus enthält, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswahlen. Wir inkludieren auch ein {{HTMLelement("button")}}-Element, das das Formular absendet; wir beschriften es mit "Add period", indem wir diesen Text zwischen den Öffnungs- und Schließtags einfügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir empfehlen Ihnen, [mehr über die Erstellung barrierefreier Webformulare zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Temporärer fest einprogrammierter Ergebnisteil

Wir inkludieren dann einen leeren {{HTMLElement("section")}}. Dieser Container wird mit JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, werden wir JavaScript verwenden, um die Daten zu erfassen und eine Liste früherer Perioden zusammen mit einem Header für den Abschnitt anzuzeigen.

Für den Moment programmieren wir vorübergehend einige Inhalte innerhalb dieses `<section>` fest, einschließlich eines `<h2>`-Headers und einiger früherer Perioden, um etwas zu haben, das wir beim Schreiben des CSS der Seite stylen können.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom Container `<section id="past-periods"></section>`, ist temporär. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS fertigstellen](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, inkludieren wir einen Link zur noch nicht geschriebenen `app.js`-JavaScript-Datei. Wir hinzufügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript ausgeführt wird, nachdem das HTML-Dokument geparst wurde.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung umfassen, einschließlich der Event-Handler für das `<button>`, das Speichern der übermittelten Daten im lokalen Speicher und das Anzeigen der Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt abgeschlossen! Sie können die Datei an dieser Stelle in Ihrem Browser öffnen, aber Ihnen wird auffallen, dass sie ziemlich schlicht aussieht. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können jetzt das statische HTML mit CSS gestalten. Unser endgültiges CSS ist:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das oben stehende CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [das statische HTML und CSS abschließen](#abschluss_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einer großen Kopfzeile, einem Formular mit einer Legende, zwei Datumsauswahlelementen und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und eine Kopfzeile angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#efe`) Hintergrundfarbe für den `body` festzulegen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der Legende eine weiße (`#fff`) Hintergrundfarbe, zusammen mit einem dünnen soliden Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende, machen die Legende und die Listenelemente ein dunkleres Grün (`#cfc`).

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudoklasse [Selektor](/de/docs/Web/CSS/CSS_selectors), um jedes gerade nummerierte Listenelement auf {{CSSXref("inherit")}} die Hintergrundfarbe von seinem Elternteil erben zu lassen; in diesem Fall erbt es die `#fff` Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf dem `ul` setzen, und entfernen die Listenmarker, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listenelemente selbst anwenden.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Leerraum hinzu, indem wir den `body`'s {{CSSXref("margin")}} mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, wodurch der Leerraum außerhalb unserer App proportional zur Größe des Viewports wird. Wir fügen auch ein wenig Padding zu den `li` und `legend` hinzu. Schließlich setzen wir, um die Ausrichtung der vergangene Periodendaten zu verbessern, aber nicht zu korrigieren, die {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, wodurch jedes Glyph dieselbe feste Breite hat.

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

Wir können die obenstehenden kombinieren, indem wir mehrere Eigenschaften in jeden Selektordeckungsblock setzen. Wir können sogar die Stile für `li` und `legend` zusammenführen; irrelevante Stile, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

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

Wenn eines der oben genannten CSS für Sie immer noch neu aussieht, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das [Grundlagenmodul für CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Unabhängig davon, ob Sie das obenstehende CSS wörtlich verwenden, die oben genannten Stile nach Ihrem Geschmack bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschluss des statischen HTML und CSS für unsere PWA

Bevor wir weitermachen, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die gefälschten früheren Periodendaten und die Kopfzeile aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu konvertieren und dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu erweitern, werden wir [eine lokale Entwicklungsumgebung erstellen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu betrachten.

Bis dahin können Sie die [statische CycleTracker-Schale](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
