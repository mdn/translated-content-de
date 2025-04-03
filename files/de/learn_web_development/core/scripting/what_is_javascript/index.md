---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen zum MDN-Anfängerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive, beantworten Fragen wie „Was ist es?“ und „Was können Sie damit tun?“, und stellen sicher, dass Sie sich mit dem Zweck von JavaScript wohl fühlen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden Kenntnissen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript, und wie passt es zu einer Website?</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare innerhalb von JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – immer wenn eine Webseite mehr tut, als nur dort zu sein und statische Informationen anzuzeigen – beispielsweise um zeitnahe Inhaltsaktualisierungen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. anzuzeigen – können Sie davon ausgehen, dass JavaScript wahrscheinlich im Spiel ist. Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs viel ausführlicher behandelt haben.

![Die drei Schichten standardmäßiger Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und zu definieren, beispielsweise um Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir zur Anwendung von Stilen auf unsere HTML-Inhalte verwenden, beispielsweise um Hintergrundfarben und Schriftarten einzustellen und unseren Inhalt in mehreren Spalten darzustellen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu verleihen:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button zeigt Player 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS einfügen, damit er gut aussieht:

```css live-sample___string-concat-name
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

![Button zeigt Player 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf „Play“ klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten.
Versuchen Sie, auf das Textlabel zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann viel mehr als das – lassen Sie uns im Detail erkunden, was es tun kann.

## Was kann es wirklich tun?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel fragen wir beispielsweise nach einem neuen Namen und speichern diesen Namen in einer Variablen namens `name`.
- Operationen mit Textstücken durchzuführen (im Programmieren als „Strings“ bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn mit der `name`-Variablen zusammen, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten, auszuführen. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch spannender ist jedoch die Funktionalität, die auf der Kernsprache des clientseitigen JavaScript aufbaut. So genannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem JavaScript-Code.

APIs sind Fertigbausteine aus Code, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie tun für die Programmierung das Gleiche, was fertige Möbelbausätze für den Hausbau tun – es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu machen, als selbst das Design zu entwickeln, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ sie zusammenzusetzen, um ein Bücherregal zu machen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; 3rd Party APIs sind neben dem Browser gezeigt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der umgebenden Computerumgebung freigeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Das [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern sowie neue Stile zu Ihrer Seite dynamisch anzuwenden usw.
  Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird (wie wir es oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Das [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu machen, wie das Abspielen von Audio und Video direkt in einer Webseite oder das Aufnehmen von Video von Ihrer Webcam und das Anzeigen auf dem Computer einer anderen Person (Probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

**APIs von Drittanbietern** sind standardmäßig nicht im Browser integriert und Sie müssen ihren Code und Informationen im Allgemeinen von irgendwo im Web abrufen. Beispielsweise:

- Das [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie das Anzeigen Ihrer neuesten Posts auf Ihrer Website zu tun.
- Das [Google Maps API](https://developers.google.com/maps/) und das [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden in diesem Modul keines davon behandeln. Sie können viel mehr darüber in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr da draußen! Aber seien Sie vorerst noch nicht zu aufgeregt. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie 24 Stunden JavaScript studiert haben – es gibt eine Menge Grundlagen zu behandeln. Und deshalb sind Sie hier – lassen Sie uns weitermachen!

## Was tut JavaScript auf Ihrer Seite?

Hier werden wir uns tatsächlich etwas Code ansehen und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte wiederholen, was passiert, wenn Sie eine Webseite in einem Browser laden (zum ersten Mal in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)-Artikel besprochen). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohmaterialien (den Code) annimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Anwendungsfall von JavaScript ist die dynamische Änderung von HTML und CSS zum Aktualisieren einer Benutzeroberfläche über das Document Object Model API (wie oben erwähnt).

### Browser-Sicherheit

Jeder Browser-Tab hat seinen eigenen separaten Container zur Ausführung von Code (diese Container werden in technischen Begriffen "Ausführungsumgebungen" genannt) – dies bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere schlimme Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsordnung

Wenn der Browser auf einen Block JavaScript stößt, wird dieser im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie die Dinge anordnen.
Lassen Sie uns beispielsweise zu dem Block JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten wiederverwendbarer Codeblöcke werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen diesem mithilfe von `addEventListener` einen Event-Listener hinzu, damit beim Klicken auf den Button die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren – stattdessen würde Ihnen ein Fehler in der [Browserentwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) zurückgegeben werden – `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Event-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten läuft, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber vorerst bedenken Sie, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter vs. kompilierter Code

Sie könnten in Kontexten der Programmierung auf die Begriffe **interpretiert** und **kompiliert** stoßen.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner entwicklerfreundlichen Textform empfangen und direkt von dort verarbeitet.

Kompilierte Sprachen hingegen werden vor ihrer Ausführung vom Computer in eine andere Form umgewandelt (kompiliert). Beispielsweise werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmiersourcecode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript direkt von dort aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **just-in-time compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird in ein schnelleres, binäres Format kompiliert, während das Skript verwendet wird, sodass es so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile bei beiden Sprachtypen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger vs. clientseitiger Code

Sie könnten auch auf die Begriffe **serverseitiger** und **clientseitiger** Code stoßen, insbesondere im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als serverseitige Sprache verwendet werden, beispielsweise in der beliebten Node.js-Umgebung – Sie können mehr über serverseitiges JavaScript in unserem [Dynamische Webseiten – serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Thema erfahren.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben – es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App in verschiedenen Umständen zu aktualisieren und bei Bedarf neuen Inhalt zu generieren.
Serversseitiger Code generiert dynamisch neuen Inhalt auf dem Server, z.B. zieht Daten aus einer Datenbank, während clientseitiges JavaScript dynamisch neuen Inhalt im Browser auf dem Client generiert, z.B. erstellt eine neue HTML-Tabelle, füllt sie mit vom Server angeforderten Daten und zeigt dann die Tabelle in einer Webseite an, die dem Benutzer angezeigt wird.
Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf Ihrer HTML-Seite ähnlich wie CSS angewendet.
Während CSS {{htmlelement("link")}} Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}} Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML – das {{htmlelement("script")}} Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Machen Sie zuerst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem Verzeichnis irgendwo sinnvoll.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie Folgendes am unteren Ende Ihres Bodys hinzu – direkt vor Ihrem schließenden `</body>` Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am unteren Rand platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Nun werden wir etwas JavaScript innerhalb unseres {{htmlelement("script")}} Elements hinzufügen, um die Seite etwas interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz generiert und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und prüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html` Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}} Element direkt vor dem `</body>` Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitive und sehr pingelig, also müssen Sie die Syntax genau so eingeben, wie gezeigt, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) sehen.

### Externes JavaScript

Das funktioniert großartig, aber was ist, wenn wir unser JavaScript in einer externen Datei haben möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie diese .js-Dateierweiterung hat, da dies die Erkennung als JavaScript-Datei erleichtert.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}} Element am unteren Rand des `</body>` und fügen Sie das Folgende direkt vor dem schließenden `</head>` Tag hinzu (damit der Browser mit dem Laden der Datei früher beginnen kann, als wenn sie am unteren Rand steht):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Auswirkungen hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler wie `Cross-origin request blocked` sehen. Das liegt daran, dass JavaScript-Module wie viele externe Ressourcen vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht dafür. Es gibt zwei Möglichkeiten, dieses Problem zu beheben:
   - Unsere empfohlene Lösung besteht darin, einen [lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen hierzu finden Sie unter [Skriptlade-Strategien](#skriptlade-strategien). Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber wir haben unser JavaScript in einer externen Datei.
   Dies ist in Bezug auf die Organisation Ihres Codes und dessen Wiederverwendbarkeit über mehrere HTML-Dateien hinweg im Allgemeinen eine gute Sache.
   Außerdem ist das HTML leichter lesbar, ohne große Codeblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) sehen.

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal tatsächlich JavaScript-Code innerhalb von HTML sehen werden.
Es könnte etwa so aussehen:

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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen zwei Abschnitten, außer dass das {{htmlelement("button")}} Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist eine schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"` Attribut bei jedem Button einfügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener statt dessen

Anstatt JavaScript in Ihr HTML aufzunehmen, verwenden Sie eine reine JavaScript-Konstruktion.
Die `querySelectorAll()`-Funktion erlaubt es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und mit `addEventListener()` einem jeden einen Handler zuweisen.
Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren – egal, wie viele auf der Seite sind oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie ein paar weitere Buttons in die Datei ein.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons, wenn angeklickt, einen Absatz erstellen.
> Ziemlich cool, oder?

### Skriptlade-Strategien

Der gesamte HTML-Inhalt auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und analysiert wird, bevor das HTML, mit dem Sie etwas tun wollen.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML analysiert wurde:

- Im obigen Beispiel des internen JavaScripts wird das Skriptelement am unteren Rand des Dokuments platziert und daher erst ausgeführt, nachdem der gesamte HTML-Körper analysiert wurde.
- Im obigen Beispiel des externen JavaScripts wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Körper analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet ist, bevor er JavaScript-Module ausführt. (Sie können auch externe Skripte am unteren Rand des Körpers platzieren. Wenn jedoch viel HTML vorhanden und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bis der Browser überhaupt mit dem Abrufen und Laden des Skripts beginnen kann, daher ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht-modulbasierte Skripte im Dokumentkopf verwenden möchten, die die gesamte Seite blockieren könnten und können, Fehler verursachen, weil sie ausgeführt werden, bevor das HTML analysiert ist:

  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie nicht benötigen, dass das HTML bereit ist, das `async`) Attribut auf das {{htmlelement("script")}} Element setzen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignis-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht über den Umfang des Tutorials hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie das nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, in Ihrem JavaScript-Code Kommentare zu schreiben, die vom Browser ignoriert werden und dazu da sind, Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie getan haben).
Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen.
Es gibt zwei Arten:

- Ein einzeiliger Kommentar wird hinter einem doppelten Schrägstrich (`//`) geschrieben, z.B.

  ```js
  // I am a comment
  ```

- Ein mehrzeiliger Kommentar wird zwischen den Zeichenfolgen `/*` und `*/` geschrieben, z.B.

  ```js
  /*
    I am also
    a comment
  */
  ```

Zum Beispiel könnten wir das letzte Demo-JavaScript mit Kommentaren wie folgt annotieren:

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
> Im Allgemeinen sind mehr Kommentare in der Regel besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie sich dabei ertappen, viele Kommentare hinzuzufügen, um zu erklären, was Variablen sind (Ihre Variablennamen sollten vielleicht intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben mit rein theoretischem Wissen begonnen, um Ihnen schon mal ein Gefühl dafür zu geben, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Codebeispiele gesehen und erfahren, wie JavaScript zusammen mit dem Rest des Codes auf Ihrer Website funktioniert, unter anderen Dingen.

JavaScript mag im Moment ein bisschen einschüchternd wirken, aber keine Sorge – in diesem Kurs werden wir Sie in einfachen Schritten durch das Thema führen, die im weiteren Verlauf Sinn ergeben. Im nächsten Artikel werden wir direkt in die Praxis einsteigen und Sie dazu bringen, sofort eigene JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
