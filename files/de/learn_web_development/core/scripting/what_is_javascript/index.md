---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim MDN-Einsteigerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie „Was ist es?“ und „Was können Sie damit machen?“, um sicherzustellen, dass Sie mit dem Zweck von JavaScript vertraut sind.

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
          <li>Was ist JavaScript, und wie passt es in eine Webseite?</li>
          <li>Was Sie mit JavaScript tun können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren. Jedes Mal, wenn eine Webseite mehr tut, als nur da zu sitzen und statische Informationen anzuzeigen – rechtzeitige Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollbare Video-Jukeboxen usw. – können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs viel detaillierter behandelt werden.

![Die drei Schichten standardmäßiger Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Markup-Sprache, die wir nutzen, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, z.B. Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir nutzen, um Styling auf unsere HTML-Inhalte anzuwenden, z.B. Hintergrundfarben und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was man mit ein paar Zeilen JavaScript-Code erreichen kann.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button zeigt Player 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn schön aussehen zu lassen:

```css live-sample___string-concat-name
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

![Button zeigt Player 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um ein dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten.
Versuchen Sie, auf das Textetikett zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr – lassen Sie uns genauer erkunden, was.

> [!NOTE]
> Bevor Sie weitermachen, warum nicht gleich am Anfang mit einer Herausforderung von Scrimba die Hände schmutzig machen? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie man diesen Code schreibt, machen Sie sich keine Sorgen; Sie könnten versuchen, im Web nach Antworten zu suchen oder die Lösung am Ende des Scrimmans anzusehen.

## Was kann es wirklich tun?

Die Kern-JavaScript-Sprache auf der Client-Seite besteht aus einigen allgemeinen Programmierfunktionen, die Ihnen ermöglichen, Dinge wie die folgenden zu tun:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel fordern wir beispielsweise auf, einen neuen Namen einzugeben, und speichern diesen Namen dann in einer Variablen namens `name`.
- Operationen an Textstücken durchführen (im Programmieren als "Zeichenketten" bekannt). Im obigen Beispiel nehmen wir die Zeichenkette "Player 1: " und verbinden sie mit der `name`-Variablen, um das vollständige Textetikett zu erstellen, z.B. "Player 1: Chris".
- Code als Reaktion auf bestimmte Ereignisse auf einer Webseite ausführen. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis genutzt, um zu erkennen, wann das Etikett angeklickt wird, und dann den Code auszuführen, der das Textetikett aktualisiert.
- Und vieles mehr!

Was jedoch noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufgebaut ist. Die sogenannten **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code nutzen können.

APIs sind fertige Sätze von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwierig oder unmöglich zu implementieren wären.
Sie tun für das Programmieren dasselbe wie fertige Möbelsets für den Hausbau – es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zu einem Bücherregal zusammenzuschrauben, als das Design selbst herauszufinden, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ alles zusammenzustellen, um ein Bücherregal zu erstellen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; 3rd-Party-APIs werden neben dem Browser gezeigt und Browser-APIs befinden sich im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht Ihnen die Manipulation von HTML und CSS, indem Sie HTML erstellen, entfernen und ändern, dynamisch neue Stile auf Ihre Seite anwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen, wirklich interessante Dinge mit Multimedia zu tun, z.B. Audio und Video direkt in einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (versuchen Sie unsere einfache [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut, und Sie müssen im Allgemeinen deren Code und Informationen von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten, und wir werden keine von ihnen in diesem Modul behandeln. Sie können viel mehr über diese in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr zu entdecken! Lassen Sie sich jedoch noch nicht zu sehr in Euphorie versetzen. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie JavaScript 24 Stunden lang studiert haben – es gibt eine Menge Grundlagen, die zuerst behandelt werden müssen. Und genau deswegen sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lasst uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zum ersten Mal besprochen in unserem Artikel über [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Das ist wie eine Fabrik, die Rohmaterial (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird.](execution.png)

Eine sehr häufige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche zu aktualisieren, über die Document Object Model API (wie oben erwähnt).

### Browsersicherheit

Jeder Browsertab hat seinen eigenen separaten Bereich, um Code auszuführen (diese Bereiche werden in der Fachsprache als "Ausführungsumgebungen" bezeichnet) – das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab – oder auf einer anderen Webseite – nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere unschöne Dinge tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber das sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen JavaScript-Block trifft, wird dieser in der Regel in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge anordnen.
Kehren wir zum Beispielblock zurück, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Wir speichern dann eine Referenz auf einen Button mit `document.querySelector` und fügen ihn mit `addEventListener` einem Event-Listener hinzu, sodass beim Klicken des Buttons die Funktion `updateName()` ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen, würde der Code nicht mehr funktionieren – stattdessen würden Sie einen Fehler in der [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten – `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir dem keine Ereignis-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhalten wie {{Glossary("Hoisting", "Hoisting")}}, aber für den Anfang sollten Sie berücksichtigen, dass in der Regel Elemente definiert sein müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretiert versus kompiliert

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis des Codes wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form verwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner entwicklerfreundlichen Textform empfangen und direkt aus dieser verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode des Programms erstellt wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser erhält den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus einer technischen Perspektive verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens „Just-in-time-Compiling“, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Benutzung des Skripts in ein schnelleres Binärformat kompiliert, sodass es so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vor- und Nachteile für beide Sprachtypen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitiger** und **clientseitiger** Code hören, besonders im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angesehen wird, wird der clientseitige Code der Seite heruntergeladen, ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir explizit über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, und seine Ergebnisse werden heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung – Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben – es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um unter verschiedenen Umständen unterschiedliche Dinge anzuzeigen und bei Bedarf neue Inhalte zu generieren.
Serverseitiger Code generiert dynamisch neue Inhalte auf dem Server, z.B. durch den Abruf von Daten aus einer Datenbank, während clientseitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client erzeugt, z.B. durch das Erstellen einer neuen HTML-Tabelle, das Füllen mit von dem Server angeforderten Daten und das anschließende Anzeigen der Tabelle in einer dem Benutzer zugestellten Webseite.
Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet – sie zeigt die ganze Zeit den gleichen Inhalt an.

## Wie fügt man JavaScript zu seiner Seite hinzu?

JavaScript wird ähnlich auf Ihre HTML-Seite angewendet wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML—das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas interaktives Tutorial [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> führt durch ein paar verschiedene Möglichkeiten, JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zuerst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem geeigneten Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie danach zu Ihrem Texteditor und fügen Sie das Folgende unten im Body hinzu – direkt vor dem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Um sicherzustellen, dass alle HTML-Elemente geladen sind, platzieren wir das JavaScript unten. (Siehe auch [Skriptladungsstrategien](#skriptladungsstrategien) unten.)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite etwas interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile „// JavaScript goes here“ hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – nun sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz generiert wird und darunter erscheint.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau wie angegeben eingegeben? **JavaScript ist case-sensitive und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, andernfalls funktioniert es möglicherweise nicht.**

> [!NOTE]
> Diese Version finden Sie auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei setzen möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre HTML-Beispieldatei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie diese `.js` Dateinamenerweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element unten im `</body>` und fügen Sie das Folgende direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei früher laden kann, als wenn sie unten steht):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keinen Effekt hat und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass, genau wie viele externe Ressourcen, JavaScript-Module von der [gleichen Quelle](/de/docs/Web/Security/Defenses/Same-origin_policy) geladen werden müssen wie das HTML, und `file://`-URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die `apply-javascript-external.html`- und `script.js`-Dateien auf Port `8000` bedient, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skriptladungsstrategien](#skriptladungsstrategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, dennoch möglicherweise einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und seine Wiederverwendbarkeit über mehrere HTML-Dateien. Außerdem ist das HTML einfacher zu lesen, da keine großen Skriptblöcke darin abgeladen sind.

> [!NOTE]
> Diese Version finden Sie auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Teile von tatsächlichem JavaScript-Code stoßen werden, der sich in HTML befindet. Es könnte so aussehen:

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

**Bitte tun Sie dies jedoch nicht.** Es ist eine schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient - Sie müssten das `onclick="createParagraph()"`-Attribut bei jedem Button hinzufügen, auf den JavaScript angewendet werden soll.

### Verwendung von addEventListener statt

Anstelle von JavaScript in Ihr HTML zu integrieren, verwenden Sie eine reine JavaScript-Konstruktion.
Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons schleifen und für jeden mithilfe von `addEventListener()` einen Handler zuweisen. Der Code dafür sieht folgendermaßen aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte ein bisschen länger als das `onclick`-Attribut sein, aber es wird für alle Buttons funktionieren – egal wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei hinzuzufügen. Wenn Sie die Seite neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erstellen. Toll, oder?

### Skriptladungsstrategien

Der gesamte HTML-Code einer Seite wird in der Reihenfolge geladen, in der er auftritt. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder präziser, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), wird Ihr Code nicht funktionieren, wenn das JavaScript geladen und interpretiert wird, bevor das HTML, das Sie manipulieren möchten, geladen wurde.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML geparst wurde:

- Im obigen Beispiel mit internem JavaScript wird das Skriptelement am Ende des Bodys des Dokuments platziert und daher nur ausgeführt, nachdem der Rest des HTML-Bodys geparst wurde.
- Im obigen Beispiel mit externem JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis das gesamte HTML verarbeitet wurde, bevor er JavaScript-Module ausführt. (Sie könnten externe Skripte auch am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit dauern, bis der Browser überhaupt anfangen kann, das Skript zu laden, also ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht-Modul-Skripte im Dokumentenkopf verwenden möchten, die die Anzeige der gesamten Seite blockieren könnten und Fehler verursachen können, weil sie vor dem Parsen des HTML ausgeführt werden:
  - Für externe Skripte sollten Sie das `defer` (oder, wenn nicht das HTML bereit sein muss, das `async`) Attribut im {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) umschließen.

  Das ist an diesem Punkt über den Umfang des Tutorials hinaus, aber solange Sie nicht sehr alte Browser unterstützen müssen, brauchen Sie das nicht zu tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie in HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu da sind, anderen Entwicklern (und Ihnen, wenn Sie in sechs Monaten zu Ihrem Code zurückkehren und nicht mehr wissen, was Sie gemacht haben) Anweisungen zu geben, wie der Code funktioniert.
Kommentare sind sehr nützlich, und Sie sollten sie oft benutzen, insbesondere bei größeren Anwendungen. Es gibt zwei Arten:

- Einzeilige Kommentare werden hinter einem doppelten Schrägstrich (`//`) geschrieben, z.B.

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

So könnten wir beispielsweise den JavaScript-Code unseres letzten Demos mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (Ihre Variablennamen sollten vielleicht intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript.
Wir haben mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag jetzt ein bisschen einschüchternd wirken, aber keine Sorge – in diesem Kurs werden wir Sie Schritt für Schritt durchgehen, was Ihnen alles verständlich machen wird.
Im nächsten Artikel tauchen wir direkt in die Praxis ein und bringen Sie dazu, eigene JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
