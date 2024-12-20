---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim MDN-Einsteigerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript aus einer höheren Perspektive, indem wir Fragen wie "Was ist das?" und "Was können Sie damit tun?" beantworten und sicherstellen, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript und wie passt es in eine Website?</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – jedes Mal, wenn eine Webseite mehr tut, als einfach da zu sitzen und statische Informationen anzuzeigen, können Sie sicher sein, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Schichtkuchens aus standardmäßigen Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs viel ausführlicher behandelt haben.

![Die drei Schichten der standardmäßigen Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, mit der wir unseren Webinhalten Struktur und Bedeutung geben, indem wir beispielsweise Absätze, Überschriften und Datentabellen definieren oder Bilder und Videos in die Seite einbetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, mit der wir unsere HTML-Inhalte gestalten, indem wir beispielsweise Hintergrundfarben und Schriftarten festlegen und unsere Inhalte in mehreren Spalten anordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierten Inhalt zu erstellen, Multimedia zu steuern, Bilder zu animieren und fast alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML kennzeichnen, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button zeigt Spieler 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn optisch ansprechend zu machen:

```css
button {
  font-family: "helvetica neue", helvetica, sans-serif;
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

![Button zeigt Spieler 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir einige JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80) }}

Versuchen Sie, diese letzte Version des Textlabels anzuklicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können – sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) an oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr – lassen Sie uns erkunden, was genauer.

## Was kann es wirklich tun?

Die Kernsprache von JavaScript auf der Clientseite besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie die folgenden zu tun:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel lassen wir beispielsweise einen neuen Namen eingeben und speichern diesen dann in einer Variablen namens `name`.
- Operationen an Textstücken durchführen (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Spieler 1: " und fügen ihn mit der `name`-Variable zusammen, um das vollständige Textlabel zu erstellen, z.B. "Spieler 1: Chris".
- Code in Reaktion auf bestimmte Ereignisse auf einer Webseite ausführen. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch spannender ist jedoch die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. Sogenannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem JavaScript-Code.

APIs sind fertige Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie tun für die Programmierung das Gleiche wie fertige Möbelkits für den Hausbau – es ist viel einfacher, fertige Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu bauen, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ zusammenzubauen.

Sie fallen in der Regel in zwei Kategorien.

![Zwei Kategorien von APIs; Drittanbieter-APIs werden neben dem Browser gezeigt und Browser-APIs befinden sich im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird (wie wir es oben in unserem einfachen Beispiel gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)-APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Leute machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen wirklich interessante Dinge mit Multimedia, wie das Abspielen von Audio und Video direkt auf einer Webseite oder das Aufnehmen von Video mit Ihrer Webcam und das Anzeigen auf einem anderen Computer (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um eine Vorstellung zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht in den Browser eingebaut, und Sie müssen deren Code und Informationen in der Regel irgendwo im Internet abrufen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht Ihnen Dinge wie das Anzeigen Ihrer neuesten Tweets auf Ihrer Website.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht Ihnen die Einbettung benutzerdefinierter Karten in Ihre Website und andere Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und werden in diesem Modul nicht behandelt. Sie können viel mehr über diese in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr! Aber werden Sie noch nicht zu aufgeregt. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram nach 24 Stunden JavaScript-Studium zu erstellen – es gibt viele Grundlagen, die zuerst behandelt werden müssen. Und genau deshalb sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erforschen, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohstoffe (den Code) entgegennimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code vereint sich zum Erstellen des Inhalts im Browser-Tab, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript ist das dynamische Ändern von HTML und CSS, um eine Benutzeroberfläche zu aktualisieren, über die Document Object Model API (wie oben erwähnt).

### Browsersicherheit

Jeder Browser-Tab hat einen eigenen separaten Bereich für die Ausführung von Code (diese Bereiche werden in technischen Begriffen als "Ausführungsumgebungen" bezeichnet) – das bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig unabhängig ausgeführt wird, und der Code in einem Tab den Code in einem anderen Tab – oder auf einer anderen Website – nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen Block von JavaScript stößt, führt er ihn in der Regel in der Reihenfolge von oben nach unten aus.
Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie die Dinge platzieren.
Zum Beispiel, lassen Sie uns zum Block von JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus, dann fügen wir mit `addEventListener` einen Ereignis-Listener hinzu, sodass, wenn der Button geklickt wird, der `updateName()` Codeblock (Zeilen 5–8) ausgeführt wird. Der `updateName()` Codeblock (diese Arten von wiederverwendbaren Codeblöcken werden "Funktionen" genannt) fragt den Benutzer nach einem neuen Namen und fügt diesen dann in den Button-Text ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen würden, würde es nicht mehr funktionieren – stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten – `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener daran anhängen können.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler – Sie müssen vorsichtig sein, dass die Objekte, auf die in Ihrem Code verwiesen wird, existieren, bevor Sie versuchen, etwas mit ihnen anzustellen.

### Interpretierter vs. kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
Bei interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner programmerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden vor ihrer Ausführung durch den Computer in eine andere Form umgewandelt (kompiliert).
Zum Beispiel wird C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Programmquellecode erzeugt wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreten tatsächlich eine Technik namens **Just-in-Time-Kompilierung**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung zu einem schnelleren, binären Format kompiliert, damit er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit gehandhabt wird, anstatt im Voraus.

Es gibt Vorteile bei beiden Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger vs. clientseitiger Code

Sie könnten auch auf die Begriffe **serverseitiger** und **clientseitiger** Code stoßen, insbesondere im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann vom Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung – Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben – es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/Anwendung zu aktualisieren, um unterschiedliche Dinge unter unterschiedlichen Umständen anzuzeigen und neuen Inhalt nach Bedarf zu generieren.
Serverseitiger Code erzeugt dynamisch neue Inhalte auf dem Server, z.B. indem Daten aus einer Datenbank abgerufen werden, während clientseitiges JavaScript dynamisch neue Inhalte innerhalb des Browsers auf dem Client erzeugt, z.B. indem eine neue HTML-Tabelle erstellt, mit Daten vom Server gefüllt und dann die Tabelle in einer dem Benutzer angezeigten Webseite dargestellt wird. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierten Inhalt wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf ähnliche Weise auf Ihrer HTML-Seite angewendet wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der HTML-Welt – das {{htmlelement("script")}}-Element. Lassen Sie uns sehen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie Folgendes am unteren Rand Ihres Bodys hinzu – direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten in der Regel in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Durch das Platzieren des JavaScripts am unteren Rand stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Ladestrategien für Skripte](#ladestrategien_für_skripte) unten.)

4. Nun fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz erzeugt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist groß- und kleinschreibungssensitiv und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, ansonsten funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub sehen als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was tun, wenn wir unser JavaScript in eine externe Datei legen wollen? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie diese .js-Dateinamenerweiterung hat, da dies als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Rand des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei früher laden kann, als wenn sie am unteren Rand steht):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie in `script.js` das folgende Skript hinzu:

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

4. Speichern Sie und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen auch JavaScript-Module von demselben [Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://`-URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die `apply-javascript-external.html` und `script.js` Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Ladestrategien für Skripte](#ladestrategien_für_skripte) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise sowieso einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Das ist in der Regel gut, um Ihren Code zu organisieren und über mehrere HTML-Dateien hinweg wiederverwendbar zu machen.
   Außerdem ist das HTML leichter zu lesen, wenn keine großen Codeblöcke darin enthalten sind.

> [!NOTE]
> Sie können diese Version auf GitHub sehen als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf tatsächliche JavaScript-Codebrocken stoßen, die im HTML enthalten sind.
Es könnte so aussehen:

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

Sie können diese Version unseres Demos unten ausprobieren.

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie das jedoch nicht.** Es ist schlechtes Praktizieren, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"`-Attribut bei jedem Button hinzufügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle von Inline-Handlern

Anstelle von JavaScript in Ihrem HTML zu enthalten, verwenden Sie einen rein JavaScript-Konstrukt.
Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen, einen Handler für jeden über `addEventListener()` zuzuweisen.
Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag ein wenig länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren – egal wie viele sich auf der Seite befinden, noch wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und einige weitere Buttons in die Datei einzufügen.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erstellen.
> Ziemlich cool, oder?

### Ladestrategien für Skripte

Alle HTML-Inhalte auf einer Seite werden in der Reihenfolge geladen, in der sie erscheinen.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparsed wird, bevor das HTML, auf das Sie versuchen, etwas anzuwenden.

Es gibt einige Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTML ausgeführt wird:

- Im obigen Beispiel für internes JavaScript wird das Skript-Element am unteren Rand des Dokumentenkörpers platziert und daher nur nach dem Rest des HTML-Körpers geparsed.
- Im obigen Beispiel für externes JavaScript wird das Skript-Element im Kopf des Dokuments vor dem Parsen des HTML-Körpers platziert. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am unteren Rand des Körpers platzieren. Aber wenn viel HTML vorhanden ist und das Netzwerk langsam ist, kann es lange dauern, bis der Browser das Skript überhaupt abrufen und laden kann, daher ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie weiterhin nicht-modulare Skripte im Dokumentkopf verwenden möchten, die die gesamte Seite blockieren und Fehler verursachen könnten, weil sie vor dem Parsen des HTML ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer` (oder, wenn Sie das HTML nicht benötigen, `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded` Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) verpacken.

  Dies liegt außerhalb des Umfangs des Tutorials an diesem Punkt, aber sofern Sie keine sehr alten Browser unterstützen müssen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu gedacht sind, Ihren Mitentwicklern Anweisungen darüber zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie getan haben).
Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen.
Es gibt zwei Typen:

- Einzeilige Kommentare werden nach einem doppelten Schrägstrich (`//`) geschrieben, z.B.

  ```js
  // I am a comment
  ```

- Mehrzeilige Kommentare werden zwischen den Zeichenfolgen `/*` und `*/` geschrieben, z.B.

  ```js
  /*
    I am also
    a comment
  */
  ```

Also könnten wir zum Beispiel die JavaScript unseres letzten Demos mit Kommentaren wie folgt annotieren:

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
> Im Allgemeinen sind mehr Kommentare in der Regel besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code übermäßig kompliziert).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Sie an den Gedanken zu gewöhnen, warum Sie JavaScript verwenden würden und was für Dinge Sie damit tun können.
Unterwegs haben Sie ein paar Codebeispiele gesehen und erfahren, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag jetzt ein wenig einschüchternd erscheinen, aber keine Sorge – in diesem Kurs führen wir Sie in einfachen Schritten durch, die in Zukunft Sinn ergeben werden.
Im nächsten Artikel werden wir direkt in die Praxis eintauchen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
