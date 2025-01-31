---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: faee5f0ce0ad62bc8dfe6d9f92efd150cad582d3
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen zum MDN-Einsteigerkurs in JavaScript! In diesem Artikel betrachten wir JavaScript auf einer höheren Ebene, indem wir Fragen wie „Was ist es?“ und „Was können Sie damit machen?“ beantworten und sicherstellen, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript, und wie fügt es sich in eine Webseite ein.</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>Hinzufügen von JavaScript zu einer Webseite.</li>
          <li>Schreiben von Kommentaren innerhalb von JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine hochrangige Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren — jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Schichtkuchens der Standard-Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir nutzen, um unsere Webinhalte zu strukturieren und zu definieren, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unserem HTML-Inhalt Stile zuzuweisen, z. B. Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamische Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und vieles mehr. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button zeigt Player 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn optisch ansprechend zu gestalten:

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

![Button zeigt Player 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80) }}

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können – siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr als das — lassen Sie uns im Detail erkunden, was.

## Was kann es wirklich tun?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie die folgenden zu tun:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel fragen wir beispielsweise nach einem neuen Namen und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn der `name`-Variablen hinzu, um das komplette Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code ausführen als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Sets von Code-Bausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu realisieren wären. Sie tun dasselbe für das Programmieren wie fertige Möbelbausätze für den Hausbau — es ist viel einfacher, vorgefertigte Platten auszuwählen und zusammenzuschrauben, um ein Bücherregal zu bauen, als sich das Design selbst auszudenken, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ zusammenzubauen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien:

![Zwei Kategorien von APIs; 3rd Party APIs werden neben dem Browser und Browser APIs im Browser angezeigt](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der umgebenden Computerumgebung zugänglich machen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite erscheinen sehen oder neue Inhalte angezeigt werden (wie wir oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte darstellen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Menschen tun erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio und Video APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. Audio und Video direkt in einer Webseite abzuspielen oder Videomaterial von Ihrer Webcam zu erfassen und es auf dem Computer einer anderen Person anzuzeigen (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu verstehen).

**Third Party APIs** sind standardmäßig nicht in den Browser integriert, und Sie müssen deren Code und Informationen im Allgemeinen von einem Ort im Web abrufen. Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionalitäten zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können viel mehr darüber in unserem [Client-side web APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) herausfinden.

Es gibt auch noch viel mehr, das verfügbar ist! Sie sollten jedoch noch nicht zu aufgeregt werden. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie JavaScript für 24 Stunden studiert haben — es gibt viele Grundlagen zu behandeln. Und deshalb sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einen Blick auf einige Codeschnipsel werfen und dabei erkunden, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns die Geschichte kurz rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, läuft Ihr Code (der HTML-, CSS- und JavaScript-Code) in einer Ausführungsumgebung (dem Browser-Tab). Das ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) herausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Gebrauch von JavaScript ist das dynamische Ändern von HTML und CSS zur Aktualisierung einer Benutzeroberfläche, über die Document Object Model-API (wie oben erwähnt).

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Container zum Ausführen von Code (diese Container werden in technischen Begriffen „Ausführungsumgebungen“ genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird, und dass der Code in einem Tab den Code in einem anderen Tab — oder auf einer anderen Website — nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme — wäre dies nicht der Fall, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solcher schlechten Dinge tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber das sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen Block JavaScript stößt, wird dieser generell der Reihenfolge nach von oben nach unten ausgeführt. Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen. Lassen Sie uns zum Beispiel zu dem JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mithilfe von `document.querySelector` und fügen mit `addEventListener` einen Ereignis-Listener hinzu, sodass beim Klicken auf den Button die Funktion `updateName()` ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) sehen — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber im Moment sollten Sie im Gedächtnis behalten, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierter Code

Möglicherweise hören Sie die Begriffe **interpretiert** und **kompiliert** im Zusammenhang mit Programmierung. In interpretierten Sprachen wird der Code in der Reihenfolge von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner für den Programmierer freundlichen Textform empfangen und direkt von dort verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form transformiert (kompiliert), bevor sie vom Computer ausgeführt werden. Beispielsweise wird C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Programm-Quellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres, binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann. JavaScript gilt jedoch immer noch als interpretierte Sprache, da die Kompilierung zur Laufzeit erfolgt und nicht im Voraus.

Es gibt Vorteile beider Arten von Sprachen, aber darauf werden wir jetzt nicht eingehen.

### Serverseitiger versus clientseitiger Code

Möglicherweise hören Sie auch die Begriffe **serverseitiger** und **clientseitiger** Code, insbesondere im Kontext der Webentwicklung. Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir explizit über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden dessen Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als serverseitige Sprache verwendet werden, z.B. in der populären Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) herausfinden.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/an einer App in verschiedenen Situationen zu aktualisieren und neuen Inhalt nach Bedarf zu generieren. Serverseitiger Code generiert neue Inhalte dynamisch auf dem Server, z.B. das Abrufen von Daten aus einer Datenbank, während clientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client generiert, z.B. das Erstellen einer neuen HTML-Tabelle, das Füllen dieser mit vom Server angeforderten Daten und dann das Anzeigen der Tabelle auf einer dem Benutzer angezeigten Webseite. Die Bedeutung ist in beiden Kontexten geringfügig unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten meist zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf ähnliche Weise zu Ihrer HTML-Seite hinzugefügt wie CSS. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem Verzeichnis an einem sinnvollen Ort.
2. Öffnen Sie die Datei in Ihrem Webbrowser und Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie nun zu Ihrem Texteditor und fügen Sie das folgende am Ende Ihres Bodies hinzu — gerade vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript an das Ende setzen, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Ladestrategien für Skripte](#ladestrategien_für_skripte) unten.)

4. Jetzt werden wir etwas JavaScript in unser {{htmlelement("script")}}-Element einfügen, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der Linie „// JavaScript goes here“ ein:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz generiert und unten eingefügt wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben. Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert? Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>` eingefügt? Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitiv und sehr anspruchsvoll, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert sie möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Dies funktioniert großartig, aber was, wenn wir unser JavaScript in einer externen Datei platzieren möchten? Lassen Sie uns dies nun untersuchen.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie die .js Dateierweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Rand des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag ein (damit der Browser die Datei früher laden kann, als wenn sie am unteren Rand steht):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie in `script.js` das folgende Skript ein:

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler ähnlich wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen, JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung besteht darin, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die `apply-javascript-external.html` und `script.js` Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Ladestrategien für Skripte](#ladestrategien_für_skripte) unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise ohnehin einen lokalen HTTP-Server erfordern.
5. Nun funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und die Wiederverwendbarkeit über mehrere HTML-Dateien hinweg. Außerdem ist das HTML leichter lesbar ohne riesige Script-Blöcke, die hineingeworfen werden.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Codezeilen von tatsächlichem JavaScript stoßen werden, die innerhalb von HTML leben. Es könnte so aussehen:

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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen zwei Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jeden Button anwenden, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener stattdessen

Statt JavaScript in Ihr HTML einzuschließen, verwenden Sie eine reine JavaScript-Konstruktion. Die `querySelectorAll()`-Funktion ermöglicht Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons iterieren und einem jeden mit `addEventListener()` einen Handler zuweisen. Der Code dafür sieht folgendermaßen aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag ein wenig länger sein als das `onclick`-Attribut, aber es funktioniert für alle Buttons — unabhängig davon, wie viele sich auf der Seite befinden, oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie noch ein paar weitere Buttons in die Datei ein. Wenn Sie die Seite neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erzeugen. Ordentlich, oder?

### Ladestrategien für Skripte

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), wird Ihr Code nicht funktionieren, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie bearbeiten möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML geparst wurde:

- Im internen JavaScript-Beispiel oben wird das Skriptelement am Ende des Bodys des Dokuments platziert und daher erst ausgeführt, nachdem der Rest des HTML-Bodys geparst wurde.
- Im externen JavaScript-Beispiel oben wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis sämtliches HTML verarbeitet wurde, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bis der Browser damit beginnen kann, das Skript zu laden und zu parsen, daher ist es meistens besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht-modulare Skripte im Head-Dokument verwenden möchten, die möglicherweise die gesamte Seite am Anzeigen hindern könnten, und Fehler verursachen können, weil sie vor dem Parsen des HTMLs ausführen:

  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie das HTML nicht benötigen, um bereit zu sein, das `async`) Attribut am {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) umwickeln.

  Dies ist außerhalb des Umfangs des Tutorials an diesem Punkt, aber solange Sie nicht sehr alte Browser unterstützen müssen, müssen Sie das nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und Anweisungen für Ihre mitentwickelnden Entwickler bereitstellen, wie der Code funktioniert (und für Sie, wenn Sie zu Ihrem Code nach sechs Monaten zurückkehren und sich nicht mehr erinnern können, was Sie gemacht haben). Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen. Es gibt zwei Typen:

- Ein einzeiliger Kommentar wird nach einem doppelten Schrägstrich (`//`) geschrieben, z.B.

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

So könnten wir beispielsweise das JavaScript unseres letzten Demos mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (möglicherweise sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript. Wir haben mit reinem Theorie begonnen, um Sie an den Grund zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript sich in den restlichen Code Ihrer Website einfügt, unter anderem.

JavaScript mag jetzt etwas einschüchternd wirken, aber keine Sorge — in diesem Kurs werden wir Sie durch einfache Schritte führen, die im weiteren Verlauf Sinn ergeben werden. Im nächsten Artikel werden wir direkt in die Praxis einsteigen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
