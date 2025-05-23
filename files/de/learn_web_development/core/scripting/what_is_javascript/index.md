---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Kurs für Anfänger von MDN! In diesem Artikel betrachten wir JavaScript aus einer hohen Perspektive und beantworten Fragen wie "Was ist das?" und "Was kann man damit machen?", um sicherzustellen, dass Sie sich mit dem Zweck von JavaScript vertraut machen.

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
          <li>Was ist JavaScript und wie passt es zu einer Website?</li>
          <li>Was man mit JavaScript machen kann.</li>
          <li>Hinzufügen von JavaScript zu einer Webseite.</li>
          <li>Schreiben von Kommentaren in JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine hochrangige Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – jedes Mal, wenn eine Webseite mehr tut, als nur dort zu sitzen und statische Informationen für Sie anzuzeigen – z. B. rechtzeitige Aktualisierungen des Inhalts, interaktive Karten, animierte 2D/3D-Grafiken, Video-Jukeboxen mit Bildlauf usw. – können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten der standardmäßigen Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, indem wir beispielsweise Absätze, Überschriften und Datentabellen definieren oder Bilder und Videos in die Seite einbetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unserem HTML-Inhalt Styling zu verleihen, z.B. Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön übereinander auf. Nehmen wir einen Button als Beispiel. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button, der Spieler 1: Chris ohne Styling anzeigt](just-html.png)

Dann können wir einige CSS hinzufügen, um ihn schön aussehen zu lassen:

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

![Button, der Spieler 1: Chris mit Styling anzeigt](html-and-css.png)

Und schließlich können wir JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten. Versuchen Sie, auf das Textlabel zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr als das – lassen Sie uns erkunden, was im Detail.

> [!NOTE]
> Bevor Sie weitermachen, warum nicht jetzt schon mit einer Herausforderung von Scrimba die Ärmel hochkrempeln? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) an <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Wenn Sie nicht wissen, wie Sie diesen Code schreiben, machen Sie sich keine Sorgen; Sie könnten versuchen, einige Websuchen zu machen, um Antworten zu finden, oder die Lösung am Ende des Scrims einzusehen.

## Was kann es wirklich tun?

Die grundlegende clientseitige JavaScript-Sprache besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel beispielsweise fragen wir nach einem neuen Namen, der eingegeben werden soll, und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als "Strings" bekannt) durchzuführen. Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn der Variablen `name` hinzu, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code auszuführen, wenn bestimmte Ereignisse auf einer Webseite auftreten. Wir haben in unserem Beispiel oben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch aufregender ist jedoch die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. Die sogenannten **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind vorgefertigte Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich umzusetzen wären. Sie tun dasselbe für das Programmieren, was vorgefertigte Möbelbausätze für den Hausbau tun – es ist viel einfacher, vorgefertigte Platten zu verschrauben, um ein Bücherregal zu bauen, als selbst das Design zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die passenden Schrauben zu finden und _dann_ zusammenzubauen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs sind auf der Seite des Browsers angezeigt und Browser-APIs im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Funktionen ausführen. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite angezeigt wird oder neuer Inhalt angezeigt wird (wie wir oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. Dies ist, wie [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen kann.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Die Leute machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer eines anderen anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu verstehen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut, und Sie müssen deren Code und Informationen im Allgemeinen irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere ähnliche Funktionen zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine davon in diesem Modul behandeln. Sie können viel mehr über diese in unserem [Clientseitige Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt auch noch viel mehr! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden JavaScript studiert haben – es gibt viele Grundlagen, die zuerst behandelt werden müssen. Und deshalb sind Sie hier – gehen wir weiter!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erforschen, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst in unserem Artikel über [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) angesprochen). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über die Dokumentobjektmodell-API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Eimer zum Ausführen von Code (diese Eimer werden in der Fachsprache "Ausführungsumgebungen" genannt) – das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab – oder auf einer anderen Website – nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere schlechte Dinge tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten auf sichere Weise zwischen verschiedenen Websites/Tabs auszutauschen, aber diese sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen JavaScript-Block stößt, führt er diesen normalerweise in der Reihenfolge aus, von oben nach unten. Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge anordnen. Lassen Sie uns zum Beispiel zu dem JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Wir speichern dann eine Referenz zu einem Button mit `document.querySelector` und fügen ihm mit `addEventListener` einen Ereignis-Listener hinzu, sodass beim Klicken auf den Button die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren – stattdessen würden Sie einen Fehler in der [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten – `Uncaught ReferenceError: Cannot access 'button' before initialization`. Dies bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener daran anhängen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhalten wie {{Glossary("Hoisting", "Hoisting")}}, aber bedenken Sie vorerst, dass Objekte im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt von dieser verarbeitet.

Kompilierte Sprachen werden andererseits in eine andere Form umgewandelt (kompiliert), bevor sie von dem Computer ausgeführt werden. Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmsourcecode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Compiling**, um die Leistung zu verbessern; der JavaScript-Sourcecode wird während der Verwendung des Skripts in ein schnelleres binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann. JavaScript wird jedoch weiterhin als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus gehandhabt wird.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht erörtern.

### Server-seitiger versus client-seitiger Code

Sie könnten auch die Begriffe **server-seitiger** und **client-seitiger** Code hören, insbesondere im Kontext der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt. In diesem Modul sprechen wir ausdrücklich über **client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt und seine Ergebnisse werden heruntergeladen und im Browser angezeigt. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung – Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamische Websites – Server-seitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von client-seitigem JavaScript als auch von server-seitigen Sprachen verwendet – es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um in verschiedenen Umständen unterschiedliche Dinge zu zeigen und nach Bedarf neue Inhalte zu generieren. Server-seitiger Code generiert dynamisch neue Inhalte auf dem Server, z.B. indem er Daten aus einer Datenbank abruft, während client-seitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z.B. eine neue HTML-Tabelle erstellt, diese mit vom Server angeforderten Daten füllt und dann die Tabelle in einer dem Benutzer angezeigten Webseite darstellt. Die Bedeutung ist in beiden Kontexten etwas unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügt man JavaScript zu Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite auf ähnliche Weise wie CSS hinzugefügt. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML – das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas interaktives Tutorial [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> führt Sie durch ein paar verschiedene Möglichkeiten, JavaScript Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und im Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Body-Bereichs hinzu – direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) weiter unten.)

4. Nun werden wir etwas JavaScript in unser {{htmlelement("script")}}-Element hinzufügen, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genauso eingegeben, wie es gezeigt wurde? **JavaScript ist case-sensitive und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) sehen.

### Externes JavaScript

Das funktioniert großartig, aber was ist, wenn wir unser JavaScript in eine externe Datei legen möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie die .js-Dateinamenerweiterung hat, da dies als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>` hinzu (damit der Browser die Datei früher laden kann, als wenn sie unten ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler ähnlich `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen, JavaScript-Module vom [desselben Ursprungs](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die `apply-javascript-external.html` und `script.js` Dateien auf Port `8000` bereitgestellt werden, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise ebenfalls einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Dies ist im Allgemeinen eine gute Sache hinsichtlich der Organisation Ihres Codes und der Wiederverwendbarkeit über mehrere HTML-Dateien hinweg. Außerdem ist das HTML leichter lesbar, ohne große Scriptblöcke darin vergraben.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) sehen.

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf tatsächliche JavaScript-Stücke stoßen, die sich innerhalb von HTML befinden. Es könnte etwa so aussehen:

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

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"`-Attribut für jeden Button angeben, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle

Anstatt JavaScript in Ihr HTML einzubinden, verwenden Sie ein reines JavaScript-Konstrukt. Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons schleife, einen Handler für jeden mit `addEventListener()` zuzuweisen. Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag ein wenig länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren – unabhängig davon, wie viele sich auf der Seite befinden oder hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und einige weitere Buttons in die Datei hinzuzufügen. Wenn Sie neu laden, sollten alle Buttons beim Klicken auf die Schaltfläche einen Absatz erstellen. Clever, nicht wahr?

### Strategien zum Laden von Skripten

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Dokumentobjektmodell](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und analysiert wird, bevor das HTML, das Sie manipulieren möchten.

Es gibt ein paar verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML analysiert wurde:

- Im obigen internen JavaScript-Beispiel wird das Script-Element am Ende des Body des Dokuments platziert und daher erst nach dem Rest des HTML-Bodys ausgeführt.
- Im obigen externen JavaScript-Beispiel wird das Script-Element im Kopf des Dokuments platziert, bevor der HTML-Body analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten externe Skripte auch am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bevor der Browser überhaupt mit dem Abrufen und Laden des Skripts beginnen kann, daher ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie trotzdem nicht-Modul-Skripte im Dokumentenkopf verwenden wollen, die die gesamte Seite daran hindern können, angezeigt zu werden, und Fehler verursachen könnten, weil sie vor der HTML-Analyse ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer` (oder, wenn Sie nicht benötigen, dass das HTML bereit ist, das `async`) Attribut auf das {{htmlelement("script")}}-Element setzen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded` Ereignishandler](/de/docs/Web/API/Document/DOMContentLoaded_event) verpacken.

  Dies geht über den Umfang des Tutorials an diesem Punkt hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu da sind, Ihren Kollegen Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern können, was Sie getan haben). Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, insbesondere bei größeren Anwendungen. Es gibt zwei Arten:

- Ein einzeiliger Kommentar wird nach einem Doppel-Forward-Slash (`//`) geschrieben, z.B.

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

So könnten wir zum Beispiel das JavaScript unseres letzten Demos mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (Ihre Variablennamen sollten möglicherweise intuitiver sein) oder sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben mit reiner Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in den Rest des Codes auf Ihrer Website passt, unter anderem.

JavaScript mag jetzt ein wenig entmutigend erscheinen, aber keine Sorge – in diesem Kurs führen wir Sie in einfachen Schritten durch, die im weiteren Verlauf Sinn machen werden. Im nächsten Artikel tauchen wir direkt in das Praktische ein und lassen Sie Ihre eigenen JavaScript-Beispiele erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
