---
title: "CycleTracker: Basis HTML und CSS"
short-title: Basis HTML und CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Um eine PWA, eine progressive Webanwendung, zu erstellen, müssen wir eine voll funktionsfähige Webanwendung entwickeln. In diesem Abschnitt werden wir das HTML für eine statische Webseite markieren und das Erscheinungsbild mit CSS verbessern.

Unser Projekt ist es, CycleTracker zu erstellen, einen Menstruationszyklus-Tracker. Der erste Schritt in diesem einführenden [PWA-Tutorial](/de/docs/Web/Progressive_web_apps/Tutorials) besteht darin, das HTML und CSS zu schreiben. Der oberste Abschnitt der Seite ist ein Formular, in das der Benutzer die Start- und Enddaten jedes Zyklus eingeben kann. Unten befindet sich eine Liste der vorherigen Menstruationszyklen.

Wir erstellen eine HTML-Datei mit Metadaten im Kopfbereich und eine statische Webseite, die ein Formular und einen Platzhalter für eingetragene Benutzerdaten enthält. Anschließend fügen wir ein externes CSS-Stylesheet hinzu, um das Erscheinungsbild der Website zu verbessern.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von [HTML](/de/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) und [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) zu haben. Wenn Sie mit diesen nicht vertraut sind, ist MDN die Heimat des [Einstiegs](/de/docs/Learn/Getting_started_with_the_web), einer Einführung in die Webentwicklung.

In den nächsten Abschnitten richten wir eine [lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) ein und werfen einen Blick auf unseren Fortschritt, bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um den in diesem Abschnitt erstellten statischen Inhalt in eine funktionale Webanwendung zu verwandeln. Sobald wir eine funktionierende App haben, können wir sie schrittweise zu einer installierbaren PWA erweitern, die offline funktioniert.

## Statischer Webinhalt

Unser statisches Seiten-HTML, mit Platzhaltern für {{HTMLElement("link")}}- und {{HTMLElement("script")}}-Elementen für noch zu erstellende externe CSS- und JavaScript-Dateien, sieht so aus:

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

Selbst wenn das HTML in `index.html` Ihnen vertraut ist, empfehlen wir, diesen Abschnitt durchzulesen, bevor wir einige [temporäre festkodierte Daten](#temporärer_festkodierter_ergebnistext) hinzufügen, CSS zu einem externen Stylesheet namens [`style.css`](#css-inhalt) hinzufügen und `app.js`, das [JavaScript der Anwendung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), das diese Webseite funktionsfähig macht.

Die erste Zeile des HTML ist ein [doctype](/de/docs/Glossary/doctype)-Prolog, der sicherstellt, dass der Inhalt korrekt dargestellt wird.

```html
<!doctype html>
```

Die Wurzel-{{HTMLelement("html")}}-Tags umschließen den gesamten Inhalt, wobei das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut die Hauptsprache der Seite definiert.

```html
<!doctype html>
<html lang="en-US">
  <!-- the <head> and <body> will go here -->
</html>
```

### Dokumentenkopf

Der {{HTMLelement("head")}} enthält maschinenlesbare Informationen über die Webanwendung, die den Lesern nicht sichtbar sind, außer dem `<title>`, das als Titel der Browser-Registerkarte angezeigt wird.

Der `<head>` enthält alle [Metadaten](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML). Die ersten beiden Informationen in Ihrem `<head>` sollten immer die Zeichensatzdefinition sein, die die [Zeichenkodierung](/de/docs/Glossary/Character_encoding) definiert, und das [viewport](/de/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}}-Tag, das sicherstellt, dass die Seite in der Breite des Viewports gerendert wird und beim Laden auf sehr kleinen Bildschirmen nicht verkleinert wird.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

Wir setzen den Titel der Seite auf "Cycle Tracker" mit dem {{HTMLelement("title")}}-Element. Während der Inhalt des `<head>` nicht innerhalb der Seite angezeigt wird, sind die Inhalte des `<title>` sichtbar! Der innere Text des `<title>`-Elements erscheint in der Browser-Registerkarte, wenn die Seite geladen wird, in Suchmaschinenergebnissen und ist der Standardtitel, wenn ein Benutzer eine Webseite als Lesezeichen speichert. Der Titel bietet auch einen zugänglichen Namen für Benutzer von Bildschirmlesegeräten, die darauf angewiesen sind zu wissen, auf welcher Registerkarte sie sich derzeit befinden.

Während der Titel "Menstrual cycle tracking application" sein könnte, haben wir uns für einen verkürzten, diskreteren Namen entschieden.

```html
<title>Cycle Tracker</title>
```

Obwohl offiziell optional, sollten diese beiden `<meta>`-Tags und das `<title>` für ein besseres Benutzererlebnis die drei Komponenten des `<head>` sein, die als notwendige Bestandteile eines jeden HTML-Dokuments betrachtet werden.

Vorläufig ist das letzte Teil, das wir im `<head>` einfügen, ein {{HTMLelement("link")}}-Element, das `style.css`, unser noch zu schreibendes Stylesheet, mit unserem HTML verknüpft.

```html
<link rel="stylesheet" href="style.css" />
```

Das HTML-Element `<link>` wird verwendet, um eine Beziehung zwischen dem aktuellen Dokument und einer externen Ressource anzugeben. Es gibt mehr als 25 definierte Werte für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut und viele weitere Werte, die in keiner Spezifikation aufgeführt sind. Der häufigste Wert, `rel="stylesheet"`, importiert eine externe Ressource als Stylesheet.

Wir werden das `<link>`-Element und sein `rel`-Attribut in einem zukünftigen Abschnitt wieder aufgreifen, wenn wir den [Link zur Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) einfügen.

### Dokumentenkörper

Das {{HTMLelement("body")}}-Element enthält den gesamten Inhalt, den wir anzeigen möchten, wenn Benutzer die Seite im Internet besuchen.

Innerhalb des `<body>` fügen wir den Namen der App als Überschrift erster Ebene ein, indem wir einen [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und ein {{HTMLelement("form")}} verwenden.

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

Das Formular wird Anweisungen, Formularelemente, ein Label für jedes Formularelement und einen Absende-Button enthalten. Bezüglich der Formularelemente benötigen wir, dass der Benutzer sowohl ein Startdatum als auch ein Enddatum für jeden eingereichten Menstruationszyklus eingibt.

Innerhalb des `<form>` fügen wir ein {{HTMLelement("fieldset")}} mit einem {{HTMLelement("legend")}} ein, das den Zweck dieser Gruppe von Formularfeldern bezeichnet.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

Die Datumseingabefelder sind {{HTMLElement("input")}}-Elemente vom Typ {{HTMLElement("input/date", "date")}}. Wir fügen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut hinzu, um Benutzerfehler zu reduzieren, indem der Benutzer daran gehindert wird, versehentlich ein unvollständiges Formular abzusenden.

Um ein `<label>` mit einem Formularelement zu assoziieren, hat jedes `<input>` ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut, das mit dem [`for`](/de/docs/Web/HTML/Attributes/for)-Attribut des zugehörigen {{HTMLelement("label")}} übereinstimmt. Das zugehörige Label gibt jedem `<input>` einen [zugänglichen Namen](/de/docs/Glossary/accessible_name).

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

Insgesamt fügen wir innerhalb des `<fieldset>` zwei Absätze ({{HTMLelement("p")}}-Elemente) ein, von denen jeder ein Datumseingabefeld für die Start- und Enddaten des aktuell eingegebenen Menstruationszyklus enthält, zusammen mit den zugehörigen {{HTMLelement("label")}}s der Datumseingabefelder. Wir fügen auch ein {{HTMLelement("button")}}-Element hinzu, das das Formular absendet; wir beschriften es als "Add period", indem wir diesen Text zwischen den öffnenden und schließenden Tags einfügen. Der `type="submit"` ist optional, da `submit` der Standardtyp für `<button>` ist.

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

Wir ermutigen Sie, [mehr über die Erstellung barrierefreier Webformulare zu lernen](/de/docs/Learn/Forms).

### Temporärer festkodierter Ergebnistext

Dann fügen wir eine leere {{HTMLElement("section")}} ein. Dieser Container wird über JavaScript befüllt.

```html
<section id="past-periods"></section>
```

Wenn der Benutzer das Formular absendet, verwenden wir JavaScript, um die Daten zu erfassen und eine Liste vergangener Zyklen zusammen mit einer Überschrift für den Abschnitt anzuzeigen.

Vorläufig kodieren wir einige Inhalte innerhalb dieser `<section>` fest, einschließlich einer `<h2>`-Überschrift und einigen vergangenen Zyklen, um etwas zum Stylen zu haben, während wir das CSS der Seite schreiben.

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

Dieser Inhalt, abgesehen von dem Container `<section id="past-periods"></section>`, ist vorläufig. Wir werden diese temporären Daten entfernen oder auskommentieren, sobald wir [das CSS abgeschlossen haben](#css-inhalt) und mit dem Erscheinungsbild der App zufrieden sind.

### JavaScript-Link

Bevor wir das `</body>` schließen, fügen wir einen Link zur noch zu schreibenden JavaScript-Datei `app.js` ein. Wir fügen das [`defer`](/de/docs/Web/HTML/Element/script#defer)-Attribut hinzu, um das Laden dieses Skripts zu verzögern und sicherzustellen, dass das JavaScript nach dem Parsen des HTML-Dokuments ausgeführt wird.

```html
<script src="app.js" defer></script>
```

Die `app.js`-Datei wird alle Funktionen unserer Anwendung enthalten, einschließlich der Ereignishandler für den `<button>`, Speichern der übermittelten Daten im lokalen Speicher und Anzeigen von Zyklen innerhalb des Inhalts des Körpers.

Die [HTML-Datei für diesen Schritt](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html) ist nun vollständig! Sie können die Datei zu diesem Zeitpunkt in Ihrem Browser öffnen, aber Sie werden feststellen, dass sie ziemlich schlicht ist. Das werden wir im nächsten Abschnitt beheben.

## CSS-Inhalt

Wir können nun das statische HTML mit CSS stylen. Unser finales CSS ist:

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

Wenn Ihnen jede Zeile vertraut ist, können Sie das obige CSS kopieren oder Ihr eigenes CSS schreiben und die Datei als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) speichern und dann [das statische HTML und CSS vervollständigen](#vervollständigung_des_statischen_html_und_css_für_unsere_pwa). Wenn Ihnen etwas am obigen CSS neu ist, lesen Sie weiter für eine Erklärung.

![Hellgrüne Webseite mit großem Kopfbalken, einem Formular mit einer Legende, zwei Datumauswahlelementen und einem Button. Unten werden gefälschte Daten für zwei Menstruationszyklen und eine Überschrift angezeigt.](html.jpg)

### CSS erklärt

Wir verwenden die {{CSSXref("background-color")}}-Eigenschaft, um auf dem `body` eine hellgrüne (`#efe`) Hintergrundfarbe zu setzen. Dann verwenden wir auf der ungeordneten Liste, dem Feldset und der Legende eine weiße (`#fff`) Hintergrundfarbe, zusammen mit einem dünnen soliden Rahmen, der mit der {{CSSXref("border")}}-Eigenschaft hinzugefügt wird. Wir überschreiben die `background-color` für die Legende und machen die Legende und die Listenelemente dunkelgrün (`#cfc`).

Wir verwenden die [`:nth-of-type(even)`](/de/docs/Web/CSS/:nth-of-type)-Pseudoklassen-[Selektor](/de/docs/Web/CSS/CSS_selectors), um jedes gerade Listenelement {{CSSXref("inherit")}} die Hintergrundfarbe von seinem Elternteil erben zu lassen; in diesem Fall die `#fff` Hintergrundfarbe von der ungeordneten Liste erben.

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

Um die ungeordnete Liste und die Listenelemente nicht wie eine Liste aussehen zu lassen, entfernen wir das Padding, indem wir {{CSSXref("padding", "padding: 0")}} auf das `ul` setzen und die Listenmarkierungen entfernen, indem wir {{CSSXref("list-style-type", "list-style-type: none")}} auf die einzelnen Listenelemente setzen.

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

Wir fügen ein wenig weißen Raum hinzu, indem wir das {{CSSXref("margin")}} des `body` mit den `vw`- und `vh`-[Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) festsetzen, wodurch der weiße Raum außerhalb unserer App proportional zur Größe des Viewports ist. Wir fügen auch ein wenig Padding zu den `li` und `legend` hinzu. Schließlich setzen wir zur Verbesserung, aber nicht zur vollständigen Korrektur, der Ausrichtung der Daten der vergangenen Perioden die {{CSSXref("font-family")}} des `ul`-Ergebnisses auf `monospace`, wodurch jedes Zeichen die gleiche feste Breite hat.

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

Wir können das Obige kombinieren, indem wir mehrere Eigenschaften in jeden Selektor-Deklarationsblock setzen. Wir können sogar die Stile für die `li` und `legend` zusammenfassen; irrelevante Stile, wie die `list-style-type`-Deklaration auf `legend`, werden ignoriert.

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

Wenn Ihnen etwas am obigen CSS immer noch unbekannt vorkommt, können Sie die [CSS-Eigenschaften](/de/docs/Glossary/Property/CSS) und [Selektoren](/de/docs/Web/CSS/CSS_selectors) nachschlagen oder den [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) Lernpfad durchgehen.

Egal, ob Sie das obige CSS direkt verwenden, die obigen Stile nach Ihren Vorlieben bearbeiten oder Ihr eigenes CSS von Grund auf neu schreiben, fügen Sie das gesamte CSS in eine neue Datei ein und speichern Sie es als [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) im gleichen Verzeichnis wie Ihre `index.html`-Datei.

### Vervollständigung des statischen HTML und CSS für unsere PWA

Bevor wir fortfahren, [kommentieren](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments) Sie die gefälschten Daten und die Überschrift der vergangenen Perioden aus oder löschen Sie diese:

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

Bevor wir die [JavaScript-Funktionalität](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) hinzufügen, um diesen statischen Inhalt in eine Webanwendung umzuwandeln und ihn dann mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) und einem [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) zu einer progressiven Web-App zu erweitern, werden wir eine [lokale Entwicklungsumgebung erstellen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), um unseren Fortschritt zu überprüfen.

Bis dahin können Sie das [statische CycleTracker-Framework](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) anschauen und den [CycleTracker HTML- und CSS-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css) von GitHub herunterladen.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
