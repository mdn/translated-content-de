---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine Progressive Web App, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung bauen. In diesem Abschnitt werden wir das HTML für eine statische Webseite markieren und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Abschnitt der Seite ist ein Formular, in dem der Benutzer die Start- und Enddaten jedes Zyklus eingeben kann. Unten befindet sich eine Liste früherer Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopf und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige der von Nutzern eingegebenen Daten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Seite zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie damit nicht vertraut sind, bietet MDN die [Einstiegsseite](/de/docs/Learn_web_development/Getting_started/Your_first_website) an, eine Einführung in die Webentwicklung.

In den nächsten Abschnitten werden wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) einrichten und unseren Fortschritt betrachten, bevor wir [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionsfähige App haben, können wir sie schrittweise in eine PWA weiterentwickeln, die installierbar ist und offline funktioniert.

## Statischer Webinhalt

Unser statisches HTML der Webseite, mit Platzhaltern für {{HTMLElement("link")}} und {{HTMLElement("script")}} Elemente für noch zu erstellende externe CSS- und JavaScript-Dateien:

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

Auch wenn Ihnen das HTML in der Datei `index.html` bekannt ist, empfehlen wir, diesen Abschnitt durchzulesen, bevor Sie einige [temporäre fest codierte Daten](#temporärer_fest_codierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js`, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) erstellen, das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist ein {{Glossary("doctype", "doctype")}}-Präambel, die sicherstellt, dass der Inhalt korrekt funktioniert.

```html
<!doctype html>
```

Die Wurzel {{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt mit dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, das die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` beinhaltet alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition umfassen, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und das [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) {{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports dargestellt wird und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir legen den Titel der Seite mit dem {{HTMLelement("title")}}-Element auf "Cycle Tracker" fest. Während der Inhalt von `<head>` nicht innerhalb der Seite angezeigt wird, sind die Inhalte von `<title>` zu sehen! Der innere Text des `<title>`-Elements erscheint, wenn die Seite geladen wird, im Browser-Tab, in Suchmaschinen-Ergebnissen und ist der Standardtitel, der verwendet wird, wenn ein Benutzer eine Webseite bookmarkt. Der Titel bietet auch einen zugänglichen Namen für Screenreader-Nutzer, die darauf angewiesen sind, um zu wissen, auf welchem Tab sie sich aktuell befinden.

Während der Titel "Menstruationszyklus-Tracking-Anwendung" lauten könnte, haben wir uns für einen kürzeren und unauffälligeren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Auch wenn sie offiziell optional sind, sollten diese beiden `<meta>`-Tags und das `<title>` aus Gründen der Benutzerfreundlichkeit als die drei erforderlichen Komponenten eines jeden HTML-Dokuments angesehen werden.

Für den Moment fügen wir als letzte Komponente im `<head>` ein {{HTMLelement("link")}}-Element hinzu, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML `<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource festzulegen. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut—und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert `rel="stylesheet"` importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt erneut durchsuchen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) hinzufügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen wollen, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Stufe 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einem {{HTMLelement("form")}} hinzu.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Absende-Button enthalten. In Bezug auf Formularelemente benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieses Satzes von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem der Benutzer daran gehindert wird, versehentlich ein unvollständiges Formular abzusenden.

Um ein `<label>` mit einem Formularelement zu verknüpfen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} entspricht. Die zugeordnete Beschriftung versorgt jedes `<input>` mit einem {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammengefasst, innerhalb des `<fieldset>`, fügen wir zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, die jeweils einen Datumsauswähler für die Start- und Enddaten des derzeit eingegebenen Menstruationszyklus enthalten, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir bezeichnen es mit "Add period", indem wir diesen Text zwischen die öffnenden und schließenden Tags einfügen. Das `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über die Erstellung von zugänglichen Webformularen zu erfahren](/de/docs/Learn_web_development/Extensions/Forms).

### Temporärer fest codierter Ergebnistext

Wir fügen dann einen leeren {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript gefüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste der vergangenen Perioden zusammen mit einem Header für den Abschnitt darzustellen.

Für den Moment kodieren wir vorübergehend einigen Inhalt innerhalb dieses `<section>` fest, einschließlich eines `<h2>`-Headers und einiger vergangener Perioden, um etwas zu haben, das wir stylen können, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, außer dem Container `<section id="past-periods"></section>`, ist vorübergehend. Wir entfernen oder kommentieren diese temporären Daten aus, sobald wir [das CSS abgeschlossen haben](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden `app.js`-JavaScript-Datei hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignis-Handler für den `<button>`, das Speichern der abgesendeten Daten im lokalen Speicher und das Anzeigen der Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt komplett! Sie können die Datei an dieser Stelle in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Wir werden das im nächsten Abschnitt beheben.

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

Falls Ihnen jede Zeile bekannt ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [das statische HTML und CSS fertigstellen](#fertigstellung_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen irgendetwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit einem großen Header, einem Formular mit Legende, zwei Datumsauswählern und einem Button. Unten werden falsche Daten für zwei Menstruationszyklen und ein Header angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um eine hellgrüne (`#eeffee`) Hintergrundfarbe auf dem `body` festzulegen. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der Legende eine weiße Hintergrundfarbe, zusammen mit einem dünnen, soliden Rand, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir setzen die `background-color` für die Legende außer Kraft und machen die Legende und die Listenelemente dunkelgrün (`#ccffcc`).

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type)-Pseudo-Klassen [Selektor](/de/docs/Web/CSS/CSS_selectors), um jedes gerade nummerierte Listenelement auf {{CSSXref("inherit")}} die Hintergrundfarbe seines Elternteils zu setzen; in diesem Fall erbt es die `white` Hintergrundfarbe von der ungeordneten Liste.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir den Rand, indem wir {{CSSXref("padding", "padding: 0")}} auf dem `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die Listenelemente selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig weißen Raum hinzu, indem wir die {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) setzen, wodurch der weiße Raum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch etwas Polsterung zu den `li` und `legend` hinzu. Schließlich, um die Ausrichtung der vergangenen Periodendaten zu verbessern, aber nicht zu korrigieren, setzen wir die {{CSSXref("font-family")}} der `ul`-Ergebnisabschnitt auf `monospace`, wodurch jedes Glyphe dieselbe feste Breite hat.

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

Falls Ihnen immer noch etwas im obenstehenden CSS unbekannt ist, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das Modul [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ob Sie das obige CSS wortwörtlich verwenden, die obigen Stile nach Ihren Vorlieben bearbeiten oder Ihr eigenes CSS von Grund auf schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im selben Verzeichnis wie Ihre `index.html`-Datei.

### Fertigstellung des statischen HTML und CSS für unsere PWA

Bevor Sie weitermachen, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die falschen Daten und den Header für vergangene Perioden aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu verwandeln und dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service-Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) aufzurüsten, werden wir [eine lokale Entwicklungsumgebung einrichten](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu sehen.

Bis dahin können Sie das [statische CycleTracker-Shell](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) ansehen und den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
