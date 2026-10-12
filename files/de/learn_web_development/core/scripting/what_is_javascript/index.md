---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Einsteigerkurs von MDN!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive. Wir beantworten Fragen wie „Was ist das?“ und „Was kann man damit machen?“ und sorgen dafür, dass Sie den Zweck von JavaScript verstehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundkenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
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

JavaScript ist eine Skript- beziehungsweise Programmiersprache, mit der Sie komplexe Funktionen auf Webseiten umsetzen können. Immer wenn eine Webseite mehr tut, als lediglich statische Informationen anzuzeigen – etwa Inhalte zeitnah aktualisiert, interaktive Karten oder animierte 2D-/3D-Grafiken darstellt oder durch Videos blättern lässt –, ist wahrscheinlich JavaScript beteiligt.
Es bildet die dritte Schicht der Standard-Webtechnologien. Die beiden anderen Schichten ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) haben wir in anderen Teilen des Lernbereichs bereits ausführlicher behandelt.

![Die drei Schichten der Standard-Webtechnologien: HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, mit der wir Webinhalte strukturieren und ihnen Bedeutung geben. So definieren wir beispielsweise Absätze, Überschriften und Datentabellen oder binden Bilder und Videos in eine Seite ein.
- {{Glossary("CSS", "CSS")}} ist eine Sprache für Gestaltungsregeln, mit der wir unsere HTML-Inhalte gestalten. Beispielsweise legen wir Hintergrundfarben und Schriftarten fest oder ordnen Inhalte in mehreren Spalten an.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, mit der Sie dynamisch aktualisierte Inhalte erstellen, Multimedia steuern, Bilder animieren und vieles mehr tun können. (Gut, nicht alles – aber es ist erstaunlich, was sich mit wenigen Zeilen JavaScript-Code erreichen lässt.)

Die drei Schichten bauen gut aufeinander auf. Nehmen wir als Beispiel einen Button. Mit HTML können wir ihm Struktur und einen Zweck geben:

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

Dann können wir CSS hinzufügen, damit er gut aussieht:

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

Schließlich können wir mit JavaScript dynamisches Verhalten ergänzen:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Klicken Sie auf die Textbeschriftung, geben Sie im daraufhin geöffneten Dialogfeld einen Namen ein und klicken Sie auf „OK“.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr – sehen wir uns das genauer an.

> [!NOTE]
> Bevor Sie weitermachen, können Sie schon jetzt mit einer Aufgabe von Scrimba praktische Erfahrungen sammeln. Sehen Sie sich [Eine Willkommensnachricht anzeigen](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Falls Sie noch nicht wissen, wie Sie diesen Code schreiben, ist das kein Problem: Sie können im Web nach Antworten suchen oder sich am Ende der interaktiven Lektion die Lösung ansehen.

## Was kann JavaScript tatsächlich?

Die grundlegende clientseitige JavaScript-Sprache umfasst einige gängige Programmierfunktionen, mit denen Sie beispielsweise Folgendes tun können:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir etwa um die Eingabe eines neuen Namens und speichern ihn dann in einer Variablen namens `name`.
- Textteile verarbeiten (in der Programmierung „Strings“ genannt). Im obigen Beispiel verknüpfen wir den String „Player 1: “ mit der Variablen `name`, um die vollständige Textbeschriftung zu erzeugen, beispielsweise „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse auf einer Webseite ausführen. In unserem Beispiel verwenden wir ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, um einen Klick auf den Button zu erkennen und daraufhin den Code auszuführen, der die Textbeschriftung aktualisiert.
- Und vieles mehr!

Noch spannender sind allerdings die Funktionen, die auf der clientseitigen JavaScript-Sprache aufbauen. Sogenannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Möglichkeiten für Ihren JavaScript-Code.

APIs sind vorgefertigte Sammlungen von Codebausteinen. Sie ermöglichen es Entwicklern, Programme umzusetzen, deren Entwicklung sonst schwierig oder unmöglich wäre.
Für die Programmierung sind sie etwa das, was Bausätze für den Möbelbau sind: Es ist viel einfacher, bereits zugeschnittene Bretter zu einem Bücherregal zusammenzuschrauben, als das Regal selbst zu entwerfen, das passende Holz zu besorgen, alle Bretter in die richtige Form und Größe zu schneiden, passende Schrauben zu finden und _danach_ alles zusammenzubauen.

Sie lassen sich im Allgemeinen in zwei Kategorien einteilen.

![Zwei Kategorien von APIs: Drittanbieter-APIs sind neben dem Browser dargestellt, Browser-APIs im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert. Sie können Daten aus der Umgebung des Computers zugänglich machen oder nützliche, komplexe Aufgaben übernehmen. Zum Beispiel:

- Mit der [DOM-API (Document Object Model)](/de/docs/Web/API/Document_Object_Model) können Sie HTML und CSS bearbeiten: HTML erstellen, entfernen und ändern, neue Stile dynamisch auf Ihre Seite anwenden und vieles mehr.
  Wenn beispielsweise auf einer Seite ein Popup-Fenster erscheint oder neue Inhalte angezeigt werden (wie in unserem einfachen Beispiel oben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ermittelt geografische Informationen.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Mit den APIs [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) können Sie animierte 2D- und 3D-Grafiken erstellen.
  Mit diesen Webtechnologien entstehen beeindruckende Projekte – Beispiele finden Sie unter [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- Mit [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) können Sie interessante Multimedia-Funktionen umsetzen: etwa Audio und Video direkt auf einer Webseite abspielen oder ein Video Ihrer Webcam aufnehmen und auf dem Computer einer anderen Person anzeigen. Probieren Sie unsere einfache [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um eine Vorstellung davon zu bekommen.

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert. Ihren Code und ihre Informationen müssen Sie normalerweise aus dem Web beziehen. Zum Beispiel:

- Mit der [Bluesky API](https://bsky.network/) können Sie unter anderem Ihre neuesten Beiträge auf Ihrer Website anzeigen.
- Mit der [Google Maps API](https://developers.google.com/maps/) und der [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) können Sie individuell angepasste Karten in Ihre Website einbetten und weitere Funktionen nutzen.

> [!NOTE]
> Diese APIs sind fortgeschrittene Themen, die wir in diesem Modul nicht behandeln. In unserem [Modul zu clientseitigen Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren Sie wesentlich mehr darüber.

Es gibt noch viel mehr Möglichkeiten! Werden Sie aber noch nicht zu übermütig. Nach 24 Stunden JavaScript-Lernen werden Sie noch kein neues Facebook, Google Maps oder Instagram entwickeln können – zuerst müssen Sie sich mit vielen Grundlagen vertraut machen. Und genau deshalb sind Sie hier. Machen wir weiter!

## Was macht JavaScript auf Ihrer Seite?

Jetzt sehen wir uns etwas Code an und erkunden dabei, was passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Rufen wir uns kurz in Erinnerung, was beim Laden einer Webseite im Browser geschieht (wir haben dies erstmals im Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) besprochen). Wenn Sie eine Webseite in Ihrem Browser laden, wird Ihr Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) ausgeführt. Das ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und daraus ein Produkt (die Webseite) herstellt.

![HTML-, CSS- und JavaScript-Code ergeben beim Laden der Seite gemeinsam den Inhalt des Browser-Tabs](execution.png)

JavaScript wird sehr häufig dazu verwendet, HTML und CSS über die Document Object Model API dynamisch zu verändern und so eine Benutzeroberfläche zu aktualisieren (wie oben erwähnt).

### Sicherheit im Browser

Jeder Browser-Tab hat seinen eigenen, getrennten Bereich für die Ausführung von Code. Der Fachbegriff für diese Bereiche lautet „Ausführungsumgebungen“. Das bedeutet, dass der Code in den einzelnen Tabs in den meisten Fällen vollständig getrennt ausgeführt wird: Der Code in einem Tab kann den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen.
Das ist eine wichtige Sicherheitsmaßnahme. Andernfalls könnten Angreifer Code schreiben, um Informationen von anderen Websites zu stehlen oder anderen Schaden anzurichten.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten sicher zwischen verschiedenen Websites oder Tabs auszutauschen. Dabei handelt es sich jedoch um fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen JavaScript-Codeblock trifft, führt er ihn normalerweise der Reihe nach von oben nach unten aus.
Sie müssen daher auf die Reihenfolge Ihres Codes achten.
Kehren wir beispielsweise zum JavaScript-Codeblock aus unserem ersten Beispiel zurück:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Zuerst definieren wir hier einen Codeblock namens `updateName()` (solche wiederverwendbaren Codeblöcke heißen **Funktionen**). Er fragt den Benutzer nach einem neuen Namen und fügt diesen in den Text eines Buttons ein. Anschließend speichern wir mit `document.querySelector` eine Referenz auf einen Button und fügen ihm mit `addEventListener` einen Event-Listener hinzu. Dadurch wird beim Klicken auf den Button die Funktion `updateName()` ausgeführt.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen, funktioniert der Code nicht mehr. Stattdessen erscheint in der [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) der Fehler `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde und wir ihm deshalb keinen Event-Listener hinzufügen können.

> [!NOTE]
> Aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}} wird JavaScript nicht immer exakt von oben nach unten ausgeführt. Merken Sie sich vorerst aber, dass Dinge im Allgemeinen definiert sein müssen, bevor Sie sie verwenden können. Das ist eine häufige Fehlerquelle.

### Interpretierter und kompilierter Code

Im Zusammenhang mit Programmierung werden Sie möglicherweise die Begriffe **interpretiert** und **kompiliert** hören.
Bei interpretierten Sprachen wird der Code von oben nach unten ausgeführt, und das Ergebnis steht unmittelbar zur Verfügung.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Er wird in seiner für Programmierer lesbaren Textform empfangen und direkt verarbeitet.

Kompilierte Sprachen werden dagegen in eine andere Form umgewandelt (kompiliert), bevor der Computer sie ausführt.
Beispielsweise werden C/C++ in Maschinencode kompiliert, den der Computer anschließend ausführt.
Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode erzeugt wurde.

JavaScript ist eine leichtgewichtige, interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Technisch gesehen nutzen die meisten modernen JavaScript-Interpreter zur Leistungssteigerung allerdings ein Verfahren namens **Just-in-Time-Kompilierung**: Während das Skript verwendet wird, wird der JavaScript-Quellcode in ein schneller ausführbares Binärformat kompiliert.
JavaScript gilt dennoch als interpretierte Sprache, weil die Kompilierung zur Laufzeit statt im Voraus erfolgt.

Beide Arten von Sprachen haben Vorteile, auf die wir hier jedoch nicht näher eingehen.

### Serverseitiger und clientseitiger Code

Vielleicht hören Sie auch die Begriffe **serverseitiger** und **clientseitiger** Code, insbesondere im Zusammenhang mit der Webentwicklung.
Clientseitiger Code wird auf dem Computer des Benutzers ausgeführt: Beim Aufruf einer Webseite wird der clientseitige Code der Seite heruntergeladen und anschließend vom Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code wird dagegen auf dem Server ausgeführt. Seine Ergebnisse werden anschließend heruntergeladen und im Browser angezeigt.
Beliebte serverseitige Websprachen sind beispielsweise PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann ebenfalls serverseitig verwendet werden, etwa in der beliebten Node.js-Umgebung. Mehr über serverseitiges JavaScript erfahren Sie unter [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side).

### Dynamischer und statischer Code

Das Wort **dynamisch** wird sowohl für clientseitiges JavaScript als auch für serverseitige Sprachen verwendet. Es beschreibt die Fähigkeit, die Anzeige einer Webseite oder App je nach Situation zu aktualisieren und bei Bedarf neue Inhalte zu erzeugen.
Serverseitiger Code erzeugt neue Inhalte dynamisch auf dem Server, indem er beispielsweise Daten aus einer Datenbank abruft. Clientseitiges JavaScript erzeugt neue Inhalte dagegen dynamisch im Browser: Es könnte etwa eine neue HTML-Tabelle erstellen, sie mit vom Server angeforderten Daten füllen und sie anschließend auf der dem Benutzer angezeigten Webseite darstellen.
Die Bedeutung unterscheidet sich in den beiden Zusammenhängen leicht, ist aber verwandt. Beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird ähnlich wie CSS in Ihre HTML-Seite eingebunden.
Während CSS {{htmlelement("link")}}-Elemente zum Einbinden externer Stylesheets und {{htmlelement("style")}}-Elemente für interne Stylesheets verwendet, braucht JavaScript in der HTML-Welt nur ein Element: {{htmlelement("script")}}. Sehen wir uns an, wie das funktioniert.

> [!NOTE]
> Das interaktive Scrimba-Tutorial [Unsere JavaScript-Datei einrichten](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> zeigt verschiedene Möglichkeiten, JavaScript zu HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Inhalt ein:

   ```html
   <!doctype html>
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

2. Öffnen Sie die Datei in Ihrem Webbrowser und Ihrem Texteditor. Sie sehen, dass das HTML eine einfache Webseite mit einem anklickbaren Button erstellt.
3. Fügen Sie dann in Ihrem Texteditor ganz unten im body, direkt vor dem schließenden `</body>`-Tag, Folgendes ein:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite steht. Indem wir JavaScript ganz unten platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) weiter unten.)

4. Nun fügen wir innerhalb unseres {{htmlelement("script")}}-Elements JavaScript hinzu, damit die Seite etwas Interessanteres tut. Fügen Sie den folgenden Code direkt unter der Zeile „// JavaScript goes here“ ein:

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

5. Speichern Sie Ihre Datei und laden Sie die Seite im Browser neu. Wenn Sie jetzt auf den Button klicken, sollte ein neuer Absatz erzeugt und darunter eingefügt werden.

Das Beispiel sollte wie folgt aussehen:

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

Falls Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und prüfen Sie, ob Sie alles richtig gemacht haben.

- Haben Sie Ihre lokale Datei mit der Dateiendung `.html` gespeichert?
- Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag eingefügt?
- Haben Sie den JavaScript-Code genau wie gezeigt eingegeben? **JavaScript unterscheidet zwischen Groß- und Kleinschreibung und stellt strenge Anforderungen an die Syntax. Sie müssen den Code daher genau wie gezeigt eingeben, sonst funktioniert er möglicherweise nicht.**

### Externes JavaScript

Das funktioniert gut. Was aber, wenn wir unser JavaScript in einer externen Datei unterbringen möchten? Sehen wir uns das an.

1. Erstellen Sie zunächst im selben Verzeichnis wie Ihre HTML-Datei eine neue Datei. Nennen Sie sie `script.js` und achten Sie auf die Dateiendung `.js`, damit sie als JavaScript-Datei erkannt wird.
2. Entfernen Sie Ihr {{htmlelement("script")}}-Element aus der HTML-Datei und fügen Sie stattdessen direkt vor dem schließenden `</head>`-Tag Folgendes ein. So kann der Browser früher mit dem Laden der Datei beginnen, als wenn sie am Ende eingebunden wäre:

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

4. Speichern Sie die Dateien und laden Sie die Seite im Browser neu. Sie werden feststellen, dass ein Klick auf den Button keine Wirkung hat. Wenn Sie die Browserkonsole prüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Der Grund: Wie viele externe Ressourcen müssen JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden. `file://`-URLs erfüllen diese Bedingung nicht. Es gibt zwei Lösungen:
   - Wir empfehlen, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die Dateien `apply-javascript-external.html` und `script.js` über Port `8000` bereitstellt, öffnen Sie Ihren Browser und rufen Sie `http://localhost:8000` auf.
   - Falls Sie keinen lokalen Server ausführen können, können Sie `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie weiter unten unter [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten). Beachten Sie jedoch, dass für Funktionen, die wir an anderer Stelle in diesem Tutorial verwenden, möglicherweise trotzdem ein lokaler HTTP-Server erforderlich ist.

Die Webseite funktioniert genauso wie zuvor, aber unser JavaScript befindet sich nun in einer externen Datei:

```html hidden live-sample___apply-javascript-external
<button>Click me</button>
```

{{embedlivesample("apply-javascript-external", "100%", "200")}}

Externes JavaScript ist im Allgemeinen hilfreich, um Ihren Code zu organisieren und in mehreren HTML-Dateien wiederzuverwenden.
Außerdem lässt sich das HTML leichter lesen, wenn darin keine großen Skriptblöcke stehen.

### Inline-JavaScript-Handler

Manchmal werden Sie auch auf JavaScript-Code stoßen, der direkt in HTML steht.
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

Dieser Code hat genau dieselbe Funktion wie die Varianten aus den beiden vorherigen Abschnitten. Der Unterschied besteht darin, dass das {{htmlelement("button")}}-Element einen Inline-Handler `onclick` enthält, der die Funktion beim Klicken auf den Button ausführt.

**Bitte machen Sie das trotzdem nicht.** JavaScript direkt in HTML einzufügen, gilt als schlechte Praxis und ist ineffizient: Sie müssten das Attribut `onclick="createParagraph()"` jedem Button hinzufügen, für den das JavaScript gelten soll.

### Stattdessen addEventListener verwenden

Verwenden Sie eine reine JavaScript-Lösung, anstatt JavaScript in Ihr HTML einzufügen.
Mit der Funktion `querySelectorAll()` können Sie alle Buttons auf einer Seite auswählen.
Anschließend können Sie die Buttons durchlaufen und jedem mit `addEventListener()` einen Handler zuweisen.
Der entsprechende Code sieht so aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Das ist vielleicht etwas länger als das Attribut `onclick`, funktioniert aber für alle Buttons – unabhängig davon, wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Bearbeiten Sie Ihre Version von `apply-javascript.html` und fügen Sie der Datei einige weitere Buttons hinzu.
> Nach dem Neuladen sollte jeder Button beim Klicken einen Absatz erstellen.
> Praktisch, oder?

### Strategien zum Laden von Skripten

Das gesamte HTML einer Seite wird in der Reihenfolge geladen, in der es im Dokument steht.
Wenn Sie mit JavaScript Elemente auf der Seite bearbeiten möchten – genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model) –, funktioniert Ihr Code nicht, falls das JavaScript geladen und verarbeitet wird, bevor das betreffende HTML verarbeitet wurde.

Es gibt verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst nach der Verarbeitung des HTML ausgeführt wird:

- Im obigen Beispiel mit internem JavaScript steht das script-Element am Ende des body des Dokuments. Es wird daher erst ausgeführt, nachdem der übrige HTML-body verarbeitet wurde.
- Im obigen Beispiel mit externem JavaScript steht das script-Element im head des Dokuments, also vor der Verarbeitung des HTML-body. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt. Der Browser wartet mit der Ausführung von JavaScript-Modulen, bis das gesamte HTML verarbeitet wurde. (Sie könnten externe Skripte auch am Ende des body platzieren. Bei viel HTML und einer langsamen Netzwerkverbindung kann es dann allerdings lange dauern, bis der Browser überhaupt mit dem Abrufen und Laden des Skripts beginnen kann. Deshalb ist es normalerweise besser, externe Skripte im head zu platzieren.)
- Falls Sie dennoch Skripte, die keine Module sind, im head des Dokuments verwenden möchten, kann dies die Anzeige der gesamten Seite blockieren und Fehler verursachen, weil die Skripte vor der Verarbeitung des HTML ausgeführt werden:
  - Bei externen Skripten sollten Sie dem {{htmlelement("script")}}-Element das Attribut `defer` hinzufügen (oder `async`, wenn das HTML vor der Ausführung noch nicht bereitstehen muss).
  - Bei internen Skripten sollten Sie den Code in einen [Event-Listener für `DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) einschließen.

  Das geht an dieser Stelle über den Rahmen des Tutorials hinaus. Sofern Sie nicht sehr alte Browser unterstützen müssen, können Sie stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie in HTML und CSS können Sie auch in JavaScript Kommentare schreiben. Der Browser ignoriert sie. Sie dienen dazu, anderen Entwicklern zu erklären, wie der Code funktioniert – oder Ihnen selbst, falls Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern, was Sie getan haben.
Kommentare sind sehr nützlich und sollten besonders in größeren Anwendungen häufig verwendet werden.
Es gibt zwei Arten:

- Ein einzeiliger Kommentar steht hinter zwei Schrägstrichen (`//`), zum Beispiel:

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

So könnten wir etwa das JavaScript unseres letzten Beispiels mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare besser als zu wenige. Wenn Sie allerdings sehr viele Kommentare hinzufügen, um zu erklären, wofür Variablen stehen, sollten Sie vielleicht aussagekräftigere Variablennamen wählen. Müssen Sie sehr einfache Vorgänge erklären, ist Ihr Code möglicherweise unnötig kompliziert.

## Zusammenfassung

Damit haben Sie Ihren ersten Schritt in die Welt von JavaScript gemacht.
Wir haben mit etwas Theorie begonnen, damit Sie verstehen, warum Sie JavaScript verwenden und was Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und unter anderem gelernt, wie JavaScript mit dem übrigen Code Ihrer Website zusammenspielt.

JavaScript mag Ihnen im Moment etwas einschüchternd erscheinen, aber keine Sorge: In diesem Kurs führen wir Sie in einfachen, nachvollziehbaren Schritten durch das Thema.
Im nächsten Artikel geht es direkt in die Praxis: Sie werden Ihre eigenen JavaScript-Beispiele erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
