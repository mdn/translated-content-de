---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Einsteigerkurs von MDN!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive. Wir beantworten Fragen wie „Was ist das?“ und „Was kann man damit machen?“ und helfen Ihnen, den Zweck von JavaScript zu verstehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JavaScript ist und welche Rolle es auf einer Website spielt.</li>
          <li>Was Sie mit JavaScript tun können.</li>
          <li>Wie Sie JavaScript zu einer Webseite hinzufügen.</li>
          <li>Wie Sie Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine allgemeine Definition

JavaScript ist eine Skript- oder Programmiersprache, mit der Sie komplexe Funktionen auf Webseiten umsetzen können. Immer wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen – etwa Inhalte zeitnah aktualisiert, interaktive Karten oder animierte 2D-/3D-Grafiken darstellt oder durch Videos blättern lässt –, ist wahrscheinlich JavaScript beteiligt.
Es bildet die dritte Ebene der Standard-Webtechnologien. Die beiden anderen, [HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics), haben wir in anderen Teilen des Lernbereichs ausführlicher behandelt.

![Die drei Ebenen der Standard-Webtechnologien: HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, mit der wir Webinhalte strukturieren und ihnen Bedeutung geben. So können wir beispielsweise Absätze, Überschriften und Datentabellen definieren oder Bilder und Videos in eine Seite einbetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache für Gestaltungsregeln, mit denen wir HTML-Inhalte formatieren. Damit können wir beispielsweise Hintergrundfarben und Schriftarten festlegen oder Inhalte in mehreren Spalten anordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, mit der Sie dynamisch aktualisierte Inhalte erstellen, Multimedia steuern, Bilder animieren und noch vieles mehr tun können. (Gut, nicht alles – aber es ist erstaunlich, was sich mit wenigen Zeilen JavaScript-Code erreichen lässt.)

Die drei Ebenen bauen gut aufeinander auf. Nehmen wir eine Schaltfläche als Beispiel. Mit HTML können wir ihr Struktur und Zweck geben:

```css hidden live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  font-size: 1.4em;
}
```

```html live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
<button>Player 1: Chris</button>
```

{{EmbedLiveSample('string-concat-name-html', , '80')}}

Dann können wir mit etwas CSS dafür sorgen, dass sie ansprechend aussieht:

```css live-sample___string-concat-name-css live-sample___string-concat-name-js
button {
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

{{EmbedLiveSample('string-concat-name-css', , '80')}}

Und schließlich können wir mit JavaScript ein dynamisches Verhalten hinzufügen:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Klicken Sie auf die Beschriftung, geben Sie im Dialogfeld, das sich öffnet, einen Namen ein und drücken Sie auf OK.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr. Sehen wir uns das genauer an.

> [!NOTE]
> Bevor Sie weiterlesen, können Sie sich schon jetzt an einer Aufgabe von Scrimba versuchen. Schauen Sie sich [Eine Willkommensnachricht anzeigen](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Falls Sie noch nicht wissen, wie Sie den Code schreiben sollen, ist das kein Problem: Sie können im Web nach Antworten suchen oder sich am Ende des Scrims die Lösung ansehen.

## Was kann JavaScript nun wirklich?

Die clientseitige JavaScript-Sprache umfasst grundlegende Programmierfunktionen, mit denen Sie unter anderem Folgendes tun können:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir um die Eingabe eines neuen Namens und speichern ihn dann in einer Variablen namens `name`.
- Textteile bearbeiten, die in der Programmierung als „Strings“ bezeichnet werden. Im obigen Beispiel verbinden wir den String „Player 1: “ mit der Variablen `name`, um die vollständige Beschriftung zu erzeugen, beispielsweise „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse auf einer Webseite ausführen. Im obigen Beispiel haben wir ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann auf die Schaltfläche geklickt wird. Daraufhin wird der Code ausgeführt, der die Beschriftung aktualisiert.
- Und vieles mehr!

Noch spannender sind allerdings die Funktionen, die auf der clientseitigen JavaScript-Sprache aufbauen. Sogenannte **Application Programming Interfaces** (**APIs**) stellen zusätzliche Möglichkeiten bereit, die Sie in Ihrem JavaScript-Code nutzen können.

APIs sind vorgefertigte Sammlungen von Codebausteinen. Sie ermöglichen es Entwicklern, Programme umzusetzen, die sonst nur schwer oder gar nicht zu verwirklichen wären.
Sie erfüllen beim Programmieren eine ähnliche Aufgabe wie ein Möbelbausatz beim Möbelbau: Es ist viel einfacher, bereits zugeschnittene Teile zu einem Bücherregal zusammenzuschrauben, als selbst einen Entwurf anzufertigen, das passende Holz zu finden, alle Teile auf die richtige Größe und Form zuzuschneiden, Schrauben in der richtigen Größe zu besorgen und _danach_ alles zu einem Bücherregal zusammenzusetzen.

APIs lassen sich im Allgemeinen in zwei Kategorien einteilen.

![Zwei Kategorien von APIs: Drittanbieter-APIs sind außerhalb des Browsers dargestellt, Browser-APIs innerhalb des Browsers](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert. Sie können Daten aus der Umgebung des Computers bereitstellen oder nützliche, komplexe Aufgaben übernehmen. Beispiele:

- Mit der [DOM-API (Document Object Model)](/de/docs/Web/API/Document_Object_Model) können Sie HTML und CSS bearbeiten: HTML-Inhalte erstellen, entfernen und ändern, Ihrer Seite dynamisch neue Stile zuweisen und vieles mehr.
  Wenn auf einer Seite beispielsweise ein Popup-Fenster erscheint oder neue Inhalte angezeigt werden – wie in unserem einfachen Beispiel oben –, ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort ermitteln und auf einer Karte darstellen.
- Mit den APIs [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) können Sie animierte 2D- und 3D-Grafiken erstellen.
  Mit diesen Webtechnologien entstehen beeindruckende Projekte – sehen Sie sich [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/) an.
- Mit [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) können Sie interessante Multimedia-Funktionen umsetzen. Sie können beispielsweise Audio und Video direkt auf einer Webseite wiedergeben oder Videos von Ihrer Webcam aufnehmen und auf dem Computer einer anderen Person anzeigen. Probieren Sie unsere einfache [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um eine Vorstellung davon zu bekommen.

**Drittanbieter-APIs** sind standardmäßig nicht in den Browser integriert. Ihren Code und ihre Informationen müssen Sie sich in der Regel von einer anderen Stelle im Web holen. Beispiele:

- Mit der [Bluesky API](https://bsky.network/) können Sie beispielsweise Ihre neuesten Beiträge auf Ihrer Website anzeigen.
- Mit der [Google Maps API](https://developers.google.com/maps/) und der [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) können Sie angepasste Karten in Ihre Website einbetten und weitere entsprechende Funktionen nutzen.

> [!NOTE]
> Diese APIs sind fortgeschrittene Themen, die wir in diesem Modul nicht behandeln. In unserem [Modul über clientseitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren Sie mehr darüber.

Es gibt noch viel mehr Möglichkeiten! Bleiben Sie aber zunächst auf dem Boden: Nach 24 Stunden JavaScript-Lernen werden Sie noch nicht das nächste Facebook, Google Maps oder Instagram entwickeln können. Zuerst müssen Sie viele Grundlagen kennenlernen. Genau dafür sind Sie hier – machen wir weiter!

## Was tut JavaScript auf Ihrer Seite?

Jetzt sehen wir uns etwas Code an und untersuchen dabei, was tatsächlich geschieht, wenn Sie JavaScript auf Ihrer Seite ausführen.

Fassen wir kurz zusammen, was beim Laden einer Webseite in einem Browser passiert. Dieses Thema haben wir erstmals im Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) angesprochen. Wenn Sie eine Webseite in Ihrem Browser laden, wird ihr Code – HTML, CSS und JavaScript – in einer Ausführungsumgebung ausgeführt, dem Browser-Tab. Das ist vergleichbar mit einer Fabrik, die Rohmaterialien (den Code) verarbeitet und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code erzeugen beim Laden der Seite gemeinsam die Inhalte im Browser-Tab](execution.png)

JavaScript wird sehr häufig verwendet, um HTML und CSS dynamisch zu ändern und so eine Benutzeroberfläche zu aktualisieren. Dafür wird die bereits erwähnte Document Object Model API genutzt.

### Sicherheit im Browser

Jeder Browser-Tab hat seine eigene, separate Umgebung für die Ausführung von Code. Der Fachbegriff dafür lautet „Ausführungsumgebung“. In den meisten Fällen wird der Code jedes Tabs daher vollständig getrennt ausgeführt. Der Code in einem Tab kann den Code in einem anderen Tab oder auf einer anderen Website nicht unmittelbar beeinflussen.
Das ist eine wichtige Sicherheitsmaßnahme. Andernfalls könnten Angreifer Code schreiben, der Informationen von anderen Websites stiehlt oder anderen Schaden anrichtet.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten sicher zwischen verschiedenen Websites oder Tabs auszutauschen. Dabei handelt es sich jedoch um fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen JavaScript-Codeblock trifft, führt er ihn im Allgemeinen der Reihe nach von oben nach unten aus.
Deshalb müssen Sie darauf achten, in welcher Reihenfolge Sie Ihren Code schreiben.
Sehen wir uns zum Beispiel den JavaScript-Codeblock aus unserem ersten Beispiel noch einmal an:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Zuerst definieren wir einen Codeblock namens `updateName()` – solche wiederverwendbaren Codeblöcke heißen **Funktionen**. Er fragt die Person, die die Seite verwendet, nach einem neuen Namen und fügt ihn in die Beschriftung einer Schaltfläche ein. Anschließend speichern wir mithilfe von `document.querySelector` eine Referenz auf die Schaltfläche und fügen ihr mit `addEventListener` einen Event-Listener hinzu. Dadurch wird die Funktion `updateName()` ausgeführt, wenn auf die Schaltfläche geklickt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen, funktioniert der Code nicht mehr. Stattdessen erscheint in der [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) der Fehler `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das Objekt `button` noch nicht initialisiert wurde und wir ihm daher keinen Event-Listener hinzufügen können.

> [!NOTE]
> JavaScript wird nicht immer exakt von oben nach unten ausgeführt. Das liegt unter anderem an einem Verhalten namens {{Glossary("Hoisting", "Hoisting")}}. Merken Sie sich vorerst aber: Im Allgemeinen müssen Sie etwas definieren, bevor Sie es verwenden können. Verstöße gegen diese Regel sind eine häufige Fehlerquelle.

### Interpretierter und kompilierter Code

Im Zusammenhang mit Programmierung begegnen Ihnen möglicherweise die Begriffe **interpretiert** und **kompiliert**.
Bei interpretierten Sprachen wird der Code von oben nach unten ausgeführt, und das Ergebnis steht unmittelbar zur Verfügung.
Sie müssen den Code nicht erst in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner für Programmierende lesbaren Textform empfangen und direkt verarbeitet.

Kompilierte Sprachen werden dagegen in eine andere Form umgewandelt (kompiliert), bevor der Computer sie ausführt.
C/C++ wird beispielsweise in Maschinencode kompiliert, den der Computer anschließend ausführt.
Das Programm wird in einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode erzeugt wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Technisch gesehen verwenden die meisten modernen JavaScript-Interpreter zur Leistungssteigerung allerdings ein Verfahren namens **Just-in-Time-Kompilierung**: Während das Skript verwendet wird, wird der JavaScript-Quellcode in ein schneller ausführbares Binärformat kompiliert.
JavaScript gilt dennoch als interpretierte Sprache, weil die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Beide Arten von Sprachen haben Vorteile, auf die wir hier aber nicht näher eingehen.

### Serverseitiger und clientseitiger Code

Insbesondere bei der Webentwicklung begegnen Ihnen möglicherweise auch die Begriffe **serverseitiger** und **clientseitiger** Code.
Clientseitiger Code wird auf dem Computer der Person ausgeführt, die eine Webseite aufruft. Beim Aufrufen der Seite wird ihr clientseitiger Code heruntergeladen, anschließend vom Browser ausgeführt und angezeigt.
In diesem Modul beschäftigen wir uns ausdrücklich mit **clientseitigem JavaScript**.

Serverseitiger Code wird dagegen auf dem Server ausgeführt. Danach werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Zu den verbreiteten Sprachen für die serverseitige Webentwicklung gehören PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann ebenfalls serverseitig verwendet werden, beispielsweise in der beliebten Node.js-Umgebung. Weitere Informationen dazu finden Sie im Themenbereich [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side).

### Dynamischer und statischer Code

Das Wort **dynamisch** wird sowohl für clientseitiges JavaScript als auch für serverseitige Sprachen verwendet. Es beschreibt die Möglichkeit, die Anzeige einer Webseite oder App je nach Situation zu ändern und bei Bedarf neue Inhalte zu erzeugen.
Serverseitiger Code erzeugt neue Inhalte dynamisch auf dem Server, indem er beispielsweise Daten aus einer Datenbank abruft. Clientseitiges JavaScript erzeugt neue Inhalte dagegen dynamisch im Browser, etwa indem es eine neue HTML-Tabelle erstellt, sie mit vom Server angeforderten Daten füllt und dann auf der angezeigten Webseite darstellt.
Die Bedeutung ist in beiden Zusammenhängen etwas unterschiedlich, aber verwandt. Serverseitige und clientseitige Ansätze arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet: Sie zeigt stets dieselben Inhalte an.

## Wie fügen Sie Ihrer Seite JavaScript hinzu?

JavaScript wird auf ähnliche Weise wie CSS in eine HTML-Seite eingebunden.
CSS verwendet {{htmlelement("link")}}-Elemente für externe Stylesheets und {{htmlelement("style")}}-Elemente für interne Stylesheets. JavaScript benötigt in HTML dagegen nur ein Element: {{htmlelement("script")}}. Sehen wir uns an, wie es funktioniert.

> [!NOTE]
> Das interaktive Scrimba-Tutorial [Unsere JavaScript-Datei einrichten](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> zeigt verschiedene Möglichkeiten, JavaScript zu HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Inhalt ein:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Apply JavaScript example</title>
     </head>
     <body>
       <button>Click me</button>
     </body>
   </html>
   ```

2. Öffnen Sie die Datei in Ihrem Webbrowser und Ihrem Texteditor. Sie sehen eine einfache Webseite mit einer anklickbaren Schaltfläche.
3. Wechseln Sie zu Ihrem Texteditor und fügen Sie am Ende des `body`-Elements – direkt vor dem schließenden `</body>`-Tag – Folgendes hinzu:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite steht. Indem wir JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) weiter unten.)

4. Fügen wir nun innerhalb unseres {{htmlelement("script")}}-Elements JavaScript hinzu, damit die Seite etwas Interessanteres tut. Fügen Sie den folgenden Code direkt unter der Zeile „// JavaScript goes here“ ein:

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

5. Speichern Sie die Datei und aktualisieren Sie die Seite im Browser. Wenn Sie nun auf die Schaltfläche klicken, sollte ein neuer Absatz erstellt und darunter eingefügt werden.

Das Beispiel sollte so aussehen:

```html hidden live-sample___apply-javascript-internal
<button>Click me</button>

<script>
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
</script>
```

{{embedlivesample("apply-javascript-internal", "100%", "200")}}

Falls Ihr Beispiel nicht funktioniert, gehen Sie die Schritte erneut durch und prüfen Sie, ob Sie alles richtig gemacht haben.

- Haben Sie Ihre lokale Datei als `.html`-Datei gespeichert?
- Haben Sie das {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag eingefügt?
- Haben Sie das JavaScript genau wie gezeigt eingegeben? **JavaScript unterscheidet zwischen Groß- und Kleinschreibung und reagiert empfindlich auf Syntaxfehler. Sie müssen die Syntax daher exakt übernehmen, sonst funktioniert der Code möglicherweise nicht.**

### Externes JavaScript

Das funktioniert gut. Was aber, wenn wir JavaScript in einer externen Datei speichern möchten? Sehen wir uns das an.

1. Erstellen Sie zunächst im selben Verzeichnis wie Ihre HTML-Datei eine neue Datei namens `script.js`. Achten Sie darauf, dass sie die Dateiendung `.js` hat, damit sie als JavaScript-Datei erkannt wird.
2. Entfernen Sie das {{htmlelement("script")}}-Element aus der HTML-Datei und fügen Sie stattdessen direkt vor dem schließenden `</head>`-Tag Folgendes ein. So kann der Browser die Datei früher laden, als wenn das Element am Ende der Seite stünde:

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie in `script.js` das folgende JavaScript ein:

   ```js live-sample___apply-javascript-external
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. Speichern Sie die Dateien und aktualisieren Sie die Seite im Browser. Sie werden feststellen, dass ein Klick auf die Schaltfläche keine Wirkung hat. In der Browserkonsole sehen Sie einen Fehler wie `Cross-origin request blocked`. Der Grund: JavaScript-Module müssen wie viele externe Ressourcen vom [selben Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie die HTML-Datei geladen werden. `file://`-URLs erfüllen diese Voraussetzung nicht. Es gibt zwei Möglichkeiten, das Problem zu lösen:
   - Wir empfehlen, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Sobald der Server läuft und die Dateien `apply-javascript-external.html` und `script.js` über Port `8000` bereitstellt, öffnen Sie `http://localhost:8000` in Ihrem Browser.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie statt `<script type="module" src="script.js"></script>` auch `<script defer src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten). Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise ohnehin einen lokalen HTTP-Server benötigen.

Die Webseite funktioniert genauso wie zuvor, aber unser JavaScript liegt jetzt in einer externen Datei:

```html hidden live-sample___apply-javascript-external
<button>Click me</button>
```

{{embedlivesample("apply-javascript-external", "100%", "200")}}

Externes JavaScript hilft Ihnen im Allgemeinen, Ihren Code zu organisieren und in mehreren HTML-Dateien wiederzuverwenden.
Außerdem ist HTML leichter zu lesen, wenn es keine großen Skriptblöcke enthält.

### Inline-JavaScript-Handler

Manchmal werden Sie auch JavaScript-Code begegnen, der direkt in HTML steht.
Das kann etwa so aussehen:

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

Dieser Code hat genau dieselbe Funktion wie die Varianten aus den beiden vorherigen Abschnitten. Der Unterschied ist, dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, der beim Klicken auf die Schaltfläche die Funktion ausführt.

**Bitte gehen Sie dennoch nicht so vor.** JavaScript direkt in HTML einzufügen gilt als schlechte Praxis und ist ineffizient: Sie müssten jeder Schaltfläche, für die das JavaScript gelten soll, das Attribut `onclick="createParagraph()"` hinzufügen.

### Stattdessen addEventListener verwenden

Verwenden Sie eine reine JavaScript-Lösung, anstatt JavaScript in Ihr HTML einzufügen.
Mit der Funktion `querySelectorAll()` können Sie alle Schaltflächen auf einer Seite auswählen.
Anschließend können Sie die Schaltflächen durchlaufen und jeder mit `addEventListener()` einen Handler zuweisen.
Der entsprechende Code sieht so aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Das ist zwar etwas länger als das `onclick`-Attribut, funktioniert aber für alle Schaltflächen – unabhängig davon, wie viele sich auf der Seite befinden oder hinzugefügt beziehungsweise entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Bearbeiten Sie Ihre Version von `apply-javascript.html` und fügen Sie der Datei einige weitere Schaltflächen hinzu.
> Wenn Sie die Seite neu laden, sollte jede Schaltfläche beim Klicken einen Absatz erzeugen.
> Praktisch, oder?

### Strategien zum Laden von Skripten

Das gesamte HTML einer Seite wird in der Reihenfolge geladen, in der es im Dokument steht.
Wenn Sie mit JavaScript Elemente auf der Seite – genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model) – bearbeiten möchten, funktioniert Ihr Code nicht, wenn das JavaScript geladen und verarbeitet wird, bevor das betreffende HTML verarbeitet wurde.

Es gibt verschiedene Strategien, mit denen Sie sicherstellen können, dass Ihr JavaScript erst ausgeführt wird, nachdem das HTML verarbeitet wurde:

- Im obigen Beispiel mit internem JavaScript steht das Skriptelement am Ende des `body`-Elements. Es wird daher erst ausgeführt, nachdem der übrige HTML-Inhalt des `body`-Elements verarbeitet wurde.
- Im obigen Beispiel mit externem JavaScript steht das Skriptelement im `head`-Element, bevor der HTML-Inhalt des `body`-Elements verarbeitet wird. Weil wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt. Der Browser wartet mit der Ausführung des JavaScript-Moduls, bis das gesamte HTML verarbeitet wurde. (Sie könnten externe Skripte auch am Ende des `body`-Elements platzieren. Bei umfangreichem HTML und einer langsamen Netzwerkverbindung kann es dann allerdings lange dauern, bis der Browser überhaupt mit dem Abrufen und Laden des Skripts beginnt. Deshalb ist es normalerweise besser, externe Skripte im `head`-Element zu platzieren.)
- Wenn Sie im `head`-Element dennoch Skripte verwenden möchten, die keine Module sind, kann das die Anzeige der gesamten Seite blockieren und Fehler verursachen, weil der Code vor dem HTML ausgeführt wird:
  - Bei externen Skripten sollten Sie dem {{htmlelement("script")}}-Element das Attribut `defer` hinzufügen – oder `async`, wenn das HTML zur Ausführung des Skripts noch nicht bereit sein muss.
  - Bei internen Skripten sollten Sie den Code in einen [Event-Listener für `DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) einschließen.

  Das geht an dieser Stelle über den Rahmen des Tutorials hinaus. Solange Sie keine sehr alten Browser unterstützen müssen, können Sie stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS können Sie auch in JavaScript Kommentare schreiben. Der Browser ignoriert sie. Sie helfen anderen Entwicklern zu verstehen, wie der Code funktioniert – und Ihnen selbst, falls Sie nach sechs Monaten zu Ihrem Code zurückkehren und nicht mehr wissen, was Sie getan haben.
Kommentare sind sehr nützlich. Besonders bei größeren Anwendungen sollten Sie sie regelmäßig verwenden.
Es gibt zwei Arten:

- Ein einzeiliger Kommentar beginnt mit einem doppelten Schrägstrich (`//`), zum Beispiel:

  ```js
  // I am a comment
  ```

- Ein mehrzeiliger Kommentar steht zwischen `/*` und `*/`, zum Beispiel:

  ```js
  /*
    I am also
    a comment
  */
  ```

Wir könnten das JavaScript unseres letzten Beispiels also folgendermaßen mit Kommentaren versehen:

```js
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> Im Allgemeinen sind mehr Kommentare besser als zu wenige. Seien Sie aber aufmerksam, wenn Sie viele Kommentare brauchen, um zu erklären, wofür Variablen stehen – möglicherweise sollten Ihre Variablennamen aussagekräftiger sein. Auch wenn Sie sehr einfache Vorgänge erklären müssen, könnte Ihr Code unnötig kompliziert sein.

## Zusammenfassung

Damit haben Sie Ihren ersten Schritt in die Welt von JavaScript gemacht.
Wir haben mit der Theorie begonnen, damit Sie verstehen, warum Sie JavaScript verwenden und was Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und unter anderem erfahren, wie JavaScript mit dem übrigen Code Ihrer Website zusammenspielt.

JavaScript mag im Moment etwas einschüchternd wirken. Aber keine Sorge: In diesem Kurs führen wir Sie in einfachen, nachvollziehbaren Schritten durch das Thema.
Im nächsten Artikel steigen wir direkt in die Praxis ein: Sie werden eigene JavaScript-Beispiele erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
