---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite auszeichnen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker, einen Menstruationszyklus-Tracker, zu erstellen. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in das der Benutzer die Start- und Enddaten jeder Periode eingeben kann. Unten befindet sich eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und eine statische Webseite, die ein Formular und einen Platzhalter zum Anzeigen der vom Benutzer eingegebenen Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat des [Einstiegs](/de/docs/Learn_web_development/Getting_started/Your_first_website), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt überprüfen, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den statischen Inhalt, der in diesem Abschnitt erstellt wurde, in eine funktionelle Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir sie schrittweise zu einer PWA weiterentwickeln, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser statisches HTML der Seite, mit Platzhaltern für {{HTMLElement("link")}} und {{HTMLElement("script")}}, die für noch zu erstellende externe CSS- und JavaScript-Dateien gedacht sind, ist:

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

Auch wenn das HTML in `index.html` Ihnen bekannt ist, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie einige [temporär hartcodierte Daten](#temporärer_hartcodierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js` erstellen, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist ein {{Glossary("doctype", "doctype")}} Präambel, das sicherstellt, dass der Inhalt korrekt funktioniert.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt, wobei das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Das `<head>` enthält alle die [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen im `<head>` sollten immer die Zeichensatzdefinition sein, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Ansichtsfenster](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) {{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Ansichtsfensters gerendert wird und bei sehr kleinen Bildschirmen nicht verkleinert geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während die Inhalte des `<head>` nicht innerhalb der Seite angezeigt werden, sind die Inhalte des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Bildschirmleser, die darauf angewiesen sind, um zu wissen, auf welchem Tab sie sich derzeit befinden.

Während der Titel "Anwendung zur Nachverfolgung des Menstruationszyklus" lauten könnte, haben wir uns für einen verkürzten Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl dies offiziell optional ist, sollten diese beiden `<meta>`-Tags und das `<title>`-Element für eine bessere Benutzererfahrung als erforderliche Bestandteile jedes HTML-Dokuments betrachtet werden.

Für den Moment ist die letzte Komponente, die wir im `<head>` aufnehmen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verbindet.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-`<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut — und viele Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut betrachten, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einfügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir darstellen möchten, wenn Benutzer die Seite im Internet besuchen.

Im `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}} hinzu.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularsteuerungen, ein Label für jede Formularsteuerung und einen Absenden-Button enthalten. In Bezug auf die Formularsteuerungen müssen die Benutzer sowohl das Startdatum als auch das Enddatum für jeden eingereichten Menstruationszyklus eingeben.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} hinzu, das den Zweck dieser Gruppe von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswahlfelder sind {{HTMLElement("input")}}-Elemente des Typs {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem der Benutzer daran gehindert wird, versehentlich ein unvollständiges Formular abzusenden.

Um ein `<label>` mit einer Formularsteuerung zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengenommen fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, jeweils mit einem Datumsauswahlfeld für die Start- und Enddaten des aktuell eingegebenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswahlfelder. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir labeln es "Add period" indem wir diesen Text zwischen den öffnenden und schließenden Tags platzieren. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir empfehlen Ihnen, [mehr darüber zu lernen, wie man barrierefreie Webformulare erstellt](/de/docs/Learn_web_development/Extensions/Forms).

### Temporärer hartcodierter Ergebnistext

Dann fügen wir einen leeren {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular übermittelt, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einer Überschrift für den Abschnitt anzuzeigen.

Fürs Erste codieren wir einige Inhalte innerhalb dieses `<section>` hart, einschließlich einer `<h2>`-Überschrift und einiger vergangener Perioden, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen vom Container `<section id="past-periods"></section>`, ist temporär. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abgeschlossen haben](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir den `</body>` schließen, fügen wir einen Link zur noch zu schreibenden `app.js` JavaScript-Datei hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für das `<button>`, das Speichern der gesendeten Daten im lokalen Speicher und das Anzeigen der Zyklen im Inhalt des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt komplett! Sie können die Datei an diesem Punkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können den statischen HTML-Code jetzt mit CSS gestalten. Unser endgültiges CSS lautet:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [den statischen HTML- und CSS-Code abschließen](#den_statischen_html-_und_css-code_für_unsere_pwa_abschließen). Wenn Ihnen etwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Webseite mit hellgrünem Hintergrund, großem Header, einem Formular mit Legende, zwei Datumsauswahlfeldern und einem Button. Unten zeigt es gefälschte Daten für zwei Menstruationszyklen und eine Überschrift.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#eeffee`) Hintergrundfarbe für den `body` festzulegen. Dann verwenden wir auf der ungeordneten Liste, dem Fieldset und der Legende eine weiße Hintergrundfarbe, zusammen mit einem dünnen, festen Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende, indem wir die Legende und die Listenelemente zu einem dunkleren Grün (`#ccffcc`) machen.

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type) Pseudoklassen-[Wähler](/de/docs/Web/CSS/CSS_selectors), um jedes gerade nummerierte Listenelement auf {{CSSXref("inherit")}} die Hintergrundfarbe seines Elternteils zu setzen; in diesem Fall erben sie die `white`-Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir den Innenabstand, indem wir {{CSSXref("padding", "padding: 0")}} auf der `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen etwas weißen Raum hinzu, indem wir den `body`-{{CSSXref("margin")}} mit den `vw`- und `vh` [Ansichtseinheitsgrößen](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, sodass weißer Raum außerhalb unserer App proportional zur Größe des Ansichtsportals ist. Wir fügen auch ein wenig Puffer zum `li` und `legend` hinzu. Schließlich, um die Ausrichtung der past-periods-Daten zu verbessern, aber nicht zu beheben, setzen wir den {{CSSXref("font-family")}} des `ul`-Ergebnisabschnitts auf `monospace`, sodass jedes Symbol dieselbe feste Breite hat.

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

Wir können das Obige kombinieren, indem wir mehrere Eigenschaften in jedem Selektor-Deklarationsblock angeben. Wir können sogar die Stile für die `li` und `legend` zusammenfassen; irrelevante Stile, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

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

Wenn Ihnen immer noch etwas am obigen CSS unbekannt vorkommt, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das Modul [Basiswissen über CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ob Sie das obenstehende CSS wörtlich verwenden, die obigen Stile zu Ihrer Präferenz anpassen oder Ihr eigenes CSS von Grund auf schreiben, fügen Sie sämtliches CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im gleichen Verzeichnis wie Ihre `index.html`-Datei.

### Den statischen HTML- und CSS-Code für unsere PWA abschließen

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die gefälschten Daten für vergangene Perioden und die Überschrift aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Webanwendung zu konvertieren und diese dann mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Serviceworker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu einer progressiven Webanwendung erweitern, werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) erstellen, um unseren Fortschritt anzuzeigen.

Bis dahin können Sie die [statische CycleTracker-Hülle](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker-HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
