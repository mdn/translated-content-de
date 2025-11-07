---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine progressive Web-Anwendung, zu erstellen, müssen wir eine voll funktionsfähige Web-Anwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite erstellen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklen-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in das der Benutzer die Start- und Enddaten jedes Zyklus eingibt. Der untere Abschnitt ist eine Liste der vorherigen Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopf und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige der vom Benutzer eingegebenen Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Falls dies nicht der Fall ist, finden Sie auf MDN unter [Erste Schritte](/de/docs/Learn_web_development/Getting_started/Your_first_website) eine Einführung in die Webentwicklung.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und werfen einen Blick auf unseren Fortschritt, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionsfähige Web-Anwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir diese schrittweise in eine PWA erweitern, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser statisches HTML der Webseite mit Platzhalter-{{HTMLElement("link")}}- und {{HTMLElement("script")}}-Elementen für noch zu erstellende externe CSS- und JavaScript-Dateien sieht folgendermaßen aus:

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

Selbst wenn Ihnen das HTML in `index.html` vertraut ist, empfehlen wir Ihnen, diesen Abschnitt durchzulesen, bevor Sie einige [temporäre fest kodierte Daten](#temporäre_fest_codierte_ergebnis-texte) hinzufügen, CSS zu einem externen Stylesheet namens [`style.css`](#css-inhalt) hinzufügen und `app.js`, [die JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), erstellen, die diese Webseite funktionsfähig macht.

Die erste Zeile des HTMLs ist ein {{Glossary("doctype", "DOCTYPE")}}-Präambel, die sicherstellt, dass der Inhalt korrekt angezeigt wird.

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

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Web-Anwendung, die für die Leser nicht sichtbar sind, abgesehen von dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten zwei Informationen im `<head>` sollten immer die Definition der Zeichencodierung, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) {{HTMLelement("meta")}}-Tag sein, das sicherstellt, dass die Seite in der Breite des Ansichtsfensters gerendert wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während der Inhalt des `<head>` nicht auf der Seite angezeigt wird, ist der Inhalt des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Nutzer von Bildschirmlesegeräten, die darauf angewiesen sind, zu wissen, auf welchem Tab sie sich aktuell befinden.

Obwohl der Titel auch "Anwendung zur Verfolgung des Menstruationszyklus" lauten könnte, haben wir uns für einen kürzeren, dezenteren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sind diese beiden `<meta>`-Tags und der `<title>` für eine bessere Benutzererfahrung die drei Komponenten des `<head>`, die als erforderliche Bestandteile eines HTML-Dokuments betrachtet werden sollten.

Der letzte Bestandteil, den wir im `<head>` aufnehmen, ist ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu erstellendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource zu spezifizieren. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut - und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der am häufigsten verwendete Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir angezeigt haben möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularsteuerungen, eine Bezeichnung für jede Formularsteuerung und eine Schaltfläche zum Senden. Bei den Formularsteuerungen benötigen wir, dass der Benutzer sowohl ein Start- als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieses Formularfeldes beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular absendet.

Um ein `<label>` mit einer Formularsteuerung zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Insgesamt enthalten wir im `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente), jeweils mit einem Datumswähler für die Start- und Enddaten des gerade eingetragenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir bezeichnen es mit "Periode hinzufügen", indem wir diesen Text zwischen den Anfangs- und Endtags einfügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über das Erstellen von zugänglichen Webformularen zu erfahren](/de/docs/Learn_web_development/Extensions/Forms).

### Temporäre fest codierte Ergebnis-Texte

Wir fügen dann einen leeren {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript befüllt werden.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einem Header für den Abschnitt anzuzeigen.

Für den Moment kodieren wir vorübergehend einige Inhalte innerhalb dieses `<section>`, einschließlich eines `<h2>`-Headers und einiger vergangener Perioden, um etwas zu haben, das wir stylen können, während wir das CSS der Seite schreiben.

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

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden `app.js`-JavaScript-Datei ein. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass JavaScript nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für das `<button>`, das Speichern der abgesendeten Daten im lokalen Speicher und die Anzeige von Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt vollständig! Sie können die Datei an dieser Stelle in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS gestalten. Unser endgültiges CSS sieht folgendermaßen aus:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das oben stehende CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [das statische HTML und CSS fertigstellen](#fertigstellung_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit großem Header, einem Formular mit Legende, zwei Datumswählern und einer Schaltfläche. Unten sind gefälschte Daten für zwei Menstruationszyklen und ein Header dargestellt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um dem `body` eine hellgrüne (`#eeffee`) Hintergrundfarbe zu geben. Dann verwenden wir beim ungeordneten Listen, `fieldset` und `legend` eine weiße Hintergrundfarbe, zusammen mit einem dünnen durchgezogenen Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für das `legend`, indem wir das Legendenelement und die Listenelemente in einem dunkleren Grün (`#ccffcc`) gestalten.

Wir verwenden die Pseudo-Klasse [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type), um jedes gerade nummerierte Listenelement die Hintergrundfarbe seines Elternelements mit {{CSSXref("inherit")}} zu übernehmen; in diesem Fall wird die `white` Hintergrundfarbe von der ungeordneten Liste übernommen.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir den Abstand, indem wir {{CSSXref("padding", "padding: 0")}} auf die `ul` setzen, und entfernen die Listenmarkierungen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listenpunkte selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Weißraum hinzu, indem wir das `body`'s {{CSSXref("margin")}} mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) setzen und so den Weißraum außerhalb unserer App proportional zur Größe des Viewports machen. Wir fügen auch etwas Polsterung zum `li` und `legend` hinzu. Schließlich, um die Ausrichtung der Daten der vergangenen Perioden zu verbessern (wenn auch nicht zu beheben), setzen wir die {{CSSXref("font-family")}} des `ul`-Ergebnissabschnitts auf `monospace`, sodass jedes Zeichen die gleiche feste Breite hat.

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

Wir können das obige kombinieren und mehrere Eigenschaften in jedem Selektor-Deklarationsblock zusammenfassen. Wir können sogar die Styles für `li` und `legend` zusammenfassen; irrelevante Styles wie die `list-style-type`-Deklaration auf `legend` werden ignoriert.

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

Wenn Ihnen von dem oben genannten CSS noch etwas unbekannt erscheint, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/Guides/Selectors) nachschlagen oder das Modul [CSS Styling basics](/de/docs/Learn_web_development/Core/Styling_basics) durchgehen.

Egal, ob Sie das obige CSS wörtlich verwenden, die obigen Styles nach Ihren Wünschen bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie alle CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Fertigstellung des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren Sie aus](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) oder löschen Sie die gefälschten vergangenen Periodendaten und den Header:

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

Bevor Sie die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu verwandeln und ihn dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Serviceworker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu verbessern, werden wir [eine lokale Entwicklungsumgebung erstellen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu betrachten.

Bis dahin können Sie die [statische CycleTracker-Hülle](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) anzeigen und den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
