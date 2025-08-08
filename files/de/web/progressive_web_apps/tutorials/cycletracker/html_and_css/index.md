---
title: "CycleTracker: Basis-HTML und CSS"
short-title: Basis-HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite erstellen und das Erscheinungsbild mit CSS verbessern.

Unser Projekt besteht darin, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Leitfaden](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der obere Teil der Seite ist ein Formular, in das der Benutzer die Anfangs- und Enddaten jedes Zyklus eingeben kann. Der untere Teil ist eine Liste vorheriger Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Header und einer statischen Webseite, die ein Formular und einen Platzhalter zur Anzeige von Benutzereingaben enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Um diesen Leitfaden abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content), [CSS](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) und [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat der [Einführung ins Webentwicklungs](/de/docs/Learn_web_development/Getting_started/Your_first_website)-Reihe.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und betrachten unsere Fortschritte, bevor wir [JavaScript-Funktionen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den statischen Inhalt, der in diesem Abschnitt erstellt wurde, in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir diese schrittweise in eine PWA umwandeln, die installierbar ist und offline funktioniert.

## Statische Webinhalte

Unser statisches Website-HTML, mit Platzhaltern für {{HTMLElement("link")}}- und {{HTMLElement("script")}}-Elemente für noch zu erstellende externe CSS- und JavaScript-Dateien, ist:

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

Selbst wenn Ihnen das HTML in `index.html` bekannt ist, empfehlen wir, diesen Abschnitt zu lesen, bevor Sie einige [vorübergehend fest codierte Daten](#vorübergehend_fest_codierter_ergebnistest) hinzufügen, CSS zu einem externen Stylesheet [`style.css`](#css-inhalt) hinzufügen und `app.js`, die [JavaScript-Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die diese Webseite funktionsfähig macht, erstellen.

Die erste Zeile des HTMLs ist ein {{Glossary("doctype", "Doctype")}}-Präambel, die sicherstellt, dass der Inhalt korrekt dargestellt wird.

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

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die für die Leser nicht sichtbar sind, außer dem `<title>`, das als Überschrift des Browser-Tabs angezeigt wird.

Der `<head>` beinhaltet alle [Metadaten](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichencodierungsdefinition, die die {{Glossary("Character_encoding", "Zeichenkodierung")}} definiert, und der [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) {{HTMLelement("meta")}}-Tag sein, der sicherstellt, dass die Seite in der Breite des Viewports dargestellt und nicht verkleinert wird, wenn sie auf sehr kleinen Bildschirmen geladen wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während der Inhalt des `<head>` nicht innerhalb der Seite angezeigt wird, sind die Inhalte von `<title>` sichtbar! Der Innentext des `<title>`-Elements erscheint im Browser-Tab, wenn die Seite geladen wird, in den Suchergebnissen und ist der Standardtitel, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Benutzer von Bildschirmlesegeräten, die darauf angewiesen sind, zu wissen, auf welchem Tab sie sich gerade befinden.

Obwohl der Titel "Menstrual cycle tracking application" lauten könnte, haben wir uns für einen kürzeren Namen entschieden, der diskreter ist.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese zwei `<meta>`-Tags und das `<title>` aus Gründen der Benutzerfreundlichkeit als erforderliche Komponenten jedes HTML-Dokuments betrachtet werden.

Der letzte Bestandteil, den wir derzeit in den `<head>` aufnehmen, ist ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML `<link>`-Element wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut – und viele weitere Werte, die in keiner Spezifikation enthalten sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt wieder aufgreifen, wenn wir den [Link zur Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einfügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift der Ebene 1 mit einem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und ein {{HTMLelement("form")}} ein.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular enthält Anweisungen, Formularelemente, eine Bezeichnung für jedes Formularelement und eine Schaltfläche zum Senden. Bei den Formularelementen benötigen wir, dass der Benutzer sowohl ein Start- als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} hinzu, das den Zweck dieses Satzes von Formularfeldern beschreibt.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumsauswähler sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem verhindert wird, dass der Benutzer versehentlich ein unvollständiges Formular sendet.

Um ein `<label>` einem Formularelement zuzuordnen, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, das dem [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} entspricht. Das zugehörige Label bietet jedem `<input>` einen {{Glossary("accessible_name", "zugänglichen Namen")}}.

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Zusammenfassend, innerhalb des `<fieldset>`, fügen wir zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, jeweils mit einem Datumsauswähler für das Start- und Enddatum des aktuell eingegebenen Menstruationszyklus, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumsauswähler. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular abschickt; wir beschriften es mit "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einschließen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir empfehlen Ihnen, [mehr über das Erstellen zugänglicher Webformulare zu lernen](/de/docs/Learn_web_development/Extensions/Forms).

### Vorübergehend fest codierter Ergebnistest

Wir fügen dann einen leeren {{HTMLElement("section")}} ein. Dieser Container wird mit JavaScript gefüllt werden.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular abschickt, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Perioden zusammen mit einem Header für den Abschnitt darzustellen.

Vorläufig codieren wir etwas Inhalt innerhalb dieses `<section>`, einschließlich eines `<h2>`-Headers und einiger vergangener Perioden, um etwas zu haben, das wir beim Schreiben des CSS der Seite gestalten können.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, außer dem Container `<section id="past-periods"></section>`, ist vorübergehend. Wir werden diese vorübergehenden Daten entfernen oder auskommentieren, sobald wir [das CSS fertiggestellt haben](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu erstellenden JavaScript-Datei `app.js` hinzu. Wir fügen das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript erst nach der Analyse des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, das Speichern der übermittelten Daten im lokalen Speicher und die Anzeige der Zyklen im Inhalt des Bodys.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist jetzt fertig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS gestalten. Unser finales CSS ist:

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
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
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern, dann [beenden Sie das statische HTML und CSS](#fertigstellung_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen irgendetwas im obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Helles Grün Webseite mit einem großen Header, einem Formular mit einer Legend, zwei Datumsauswählern und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und ein Header angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um dem `body` eine hellgrüne (`#efe`) Hintergrundfarbe zu geben. Dann verwenden wir auf der ungeordneten Liste, dem fieldset und der legend eine weiße Hintergrundfarbe sowie einen dünnen soliden Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die legend, wodurch die legend und die Listenelemente ein dunkleres Grün (`#cfc`) erhalten.

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudo-Klasse [Selektor](/de/docs/Web/CSS/CSS_selectors), um jedes zweite Listenelement auf {{CSSXref("inherit")}} die Hintergrundfarbe von seinem Elternteil zu setzen; in diesem Fall wird die `white` Hintergrundfarbe vom ungeordneten Liste geerbt.

```css
body {
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: white;
}
li,
legend {
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf der `ul` setzen und die Listenzeichen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf den Listenelementen selbst setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig Weißraum hinzu, indem wir das {{CSSXref("margin")}} des `body` mit den `vw` und `vh` [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) setzen, sodass der Weißraum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch ein wenig Padding zu den `li` und `legend` hinzu. Schließlich, um die Ausrichtung der vergangenheitsverständnis Daten zu verbessern, aber nicht zu beheben, setzen wir die {{CSSXref("font-family")}} des `ul`-Ergebnisses auf `monospace`, sodass jedes Zeichen die gleiche feste Breite hat.

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

Wir können die obigen Eigenschaften kombinieren, indem wir mehrere Eigenschaften in jedem Selektor-Deklarationsblock angeben. Wir können sogar die Styles für das `li` und die `legend` zusammenfassen; irrelevante Styles, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
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
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

Wenn Ihnen irgendein oben beschriebenes CSS noch immer nicht vertraut ist, können Sie die {{Glossary("Property/CSS", "CSS-Eigenschaften")}} und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder das Modul [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) durcharbeiten.

Ob Sie das obige CSS wörtlich verwenden, die obigen Stile nach Ihren Vorlieben bearbeiten oder Ihr eigenes CSS von Grund auf schreiben, schließen Sie alle Styles in eine neue Datei ein und speichern Sie sie als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im gleichen Verzeichnis wie Ihre `index.html`-Datei.

### Fertigstellung des statischen HTML und CSS für unsere PWA

Bevor Sie fortfahren, [kommentieren](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) Sie die für die vergangene Periode gefälschten Daten und den Header aus oder löschen Sie sie:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Web-App zu verwandeln und ihn dann in eine progressive Web-App mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu verbessern, werden wir eine [lokale Entwicklungsumgebung schaffen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unsere Fortschritte zu sehen.

Bis dahin können Sie das [statische CycleTracker-Gerüst](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) anzeigen und den [CycleTracker HTML and CSS Source Code](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
