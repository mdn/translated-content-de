---
title: "CycleTracker: Basis-HTML und -CSS"
short-title: Basis-HTML und -CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung erstellen. In diesem Abschnitt werden wir das HTML für eine statische Webseite markieren und das Erscheinungsbild mit CSS verbessern.

Unser Projekt besteht darin, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular für den Benutzer, um die Start- und Enddaten jedes Zeitraums einzugeben. Unten befindet sich eine Liste der früheren Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Meta-Daten im Kopfbereich und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige benutzereingegebener Daten enthält. Dann fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat des [Einstieg in die Webentwicklung](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung-Serie.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und einen Blick auf unseren Fortschritt werfen, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, werden wir etwas haben, das wir schrittweise in eine PWA umwandeln können, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser statisches HTML der Seite, mit Platzhalter für {{HTMLElement("link")}} und {{HTMLElement("script")}}-Elemente für noch zu erstellende externe CSS- und JavaScript-Dateien, ist:

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

Selbst wenn Ihnen das HTML in `index.html` bekannt ist, empfehlen wir, diesen Abschnitt durchzulesen, bevor Sie einige [temporäre hartcodierte Daten](#temporärer_hartcodierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet namens [`style.css`](#css-inhalt) hinzufügen und `app.js`, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) erstellen, das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist ein {{Glossary("doctype", "DOCTYPE")}}-Prolog, der sicherstellt, dass der Inhalt korrekt dargestellt wird.

```html
<!doctype html>
```

Die root {{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt mit dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut, das die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser nicht sichtbar sind, mit Ausnahme des `<title>`, der als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` umfasst alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) {{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Ansichtsfensters gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite mit dem {{HTMLelement("title")}}-Element auf "Cycle Tracker". Während der Inhalt des `<head>` nicht auf der Seite angezeigt wird, wird der Inhalt des `<title>` gesehen! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen ist, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite mit einem Lesezeichen versieht. Der Titel bietet auch einen zugänglichen Namen für Bildschirmleser-Benutzer, die darauf angewiesen sind, zu wissen, welchen Tab sie derzeit geöffnet haben.

Obwohl der Titel "Menstrual cycle tracking application" sein könnte, haben wir uns für einen verkürzten Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Auch wenn offiziell optional, für eine bessere Benutzererfahrung, sollten diese beiden `<meta>`-Tags und das `<title>` die drei Komponenten des `<head>` sein, die als erforderliche Komponenten eines jeden HTML-Dokuments betrachtet werden sollten.

Für den Moment ist die letzte Komponente, die wir im `<head>` aufnehmen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut und viele weitere Werte, die in keiner Spezifikation stehen. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt nochmals aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einschließen.

### Dokumentkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 unter Verwendung eines [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und eines {{HTMLelement("form")}} hinzu.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Absenden-Button enthalten. In Bezug auf die Formularelemente benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einer {{HTMLelement("legend")}} hinzu, die den Zweck dieser Gruppe von Formularelementen beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswahlen sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Alles zusammengefügt, innerhalb des `<fieldset>` fügen wir zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, jeweils mit einem Datumsfeld für die Start- und Enddaten des derzeit eingegebenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswahlen. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet, und kennzeichnen es mit "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags hinzufügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über die Erstellung von zugänglichen Webformularen zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Temporärer hartcodierter Ergebnistext

Dann fügen wir ein leeres {{HTMLElement("section")}} ein. Dieser Container wird mithilfe von JavaScript befüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste früherer Perioden zusammen mit einer Überschrift für den Abschnitt darzustellen.

Vorerst kodieren wir einige Inhalte innerhalb dieses `<section>` temporär hart, einschließlich einer `<h2>`-Überschrift und ein paar früherer Perioden, um etwas zu haben, das wir stylen können, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom Container `<section id="past-periods"></section>`, ist temporär. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS fertig gestellt haben](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir den `</body>`-Tag schließen, fügen wir einen Link zur noch zu schreibenden `app.js` JavaScript-Datei hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verschieben und sicherzustellen, dass das JavaScript erst nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die Datei `app.js` wird alle Funktionsweisen unserer Anwendung enthalten, einschließlich der Ereignis-Handler für den `<button>`, der Speicherung der übermittelten Daten im lokalen Speicher und der Anzeige der Zyklen im Inhalt des Bodies.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun komplett! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern und dann [das statische HTML und CSS fertigstellen](#abschließen_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen irgendetwas an dem obenstehenden CSS neu erscheint, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einer großen Überschrift, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Am unteren Rand werden gefälschte Daten für zwei Menstruationszyklen und eine Überschrift angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um dem `body` eine hellgrüne (`#efe`) Hintergrundfarbe zu verleihen. Dann verwenden wir bei der ungeordneten Liste, dem Fieldset und der Legende eine weiße (`#fff`) Hintergrundfarbe, zusammen mit einem dünnen, soliden Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende, wodurch die Legende und die Listenelemente ein dunkleres Grün (`#cfc`) erhalten.

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudo-Klasse [Selector](/de/docs/Web/CSS/CSS_selectors), um jedes geradzahlige Listenelement dazu zu bringen, {{CSSXref("inherit")}} die Hintergrundfarbe von seinem Elternteil zu erben; in diesem Fall, um die `#fff` Hintergrundfarbe von der ungeordneten Liste zu erben.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding durch Setzen von {{CSSXref("padding", "padding: 0")}} auf der `ul` und entfernen die Listenmarkierungen durch Setzen von {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Freiraum ein, indem wir den {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, wodurch der Freiraum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch ein wenig Padding zu den `li` und `legend` hinzu. Schließlich, um das Ausrichten der vergangenen Periodendaten zu verbessern, aber nicht zu beheben, setzen wir die {{CSSXref("font-family")}} des `ul` Ergebnisses Abschnitts auf `monospace`, wodurch jedes Zeichen die gleiche feste Breite hat.

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

Wir können die obigen Elemente kombinieren und mehrere Eigenschaften in jedem Selector-Deklarationsblock zusammenfassen. Wir können sogar die Styles für `li` und `legend` zusammenfassen; irrelevante Styles, wie die `list-style-type`-Deklaration bei `legend`, werden ignoriert.

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

Wenn Ihnen das oben angegebene CSS immer noch unbekannt erscheint, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektor](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das Modul [CSS Styling basics](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ob Sie das obige CSS wörtlich verwenden, die obigen Styles nach Ihren Wünschen bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie es als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Abschließen des statischen HTML und CSS für unsere PWA

Bevor wir weitermachen, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die gefälschten Daten und Überschriften aus oder löschen sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu konvertieren und dann in eine Progressive Web App mit einer [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu erweitern, werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) erstellen, um unseren Fortschritt zu sehen.

Bis dahin können Sie die [statische CycleTracker-Shell](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker HTML und CSS Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
