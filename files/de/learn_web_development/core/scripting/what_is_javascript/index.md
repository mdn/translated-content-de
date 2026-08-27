---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen im MDN-Anfängerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript aus einer hohen Perspektive, beantworten Fragen wie "Was ist es?" und "Was können Sie damit tun?", und stellen sicher, dass Sie sich mit dem Zweck von JavaScript vertraut machen.

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
          <li>Was ist JavaScript und wie passt es in eine Website.</li>
          <li>Was Sie mit JavaScript tun können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren — jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, die Sie sich ansehen können — zeitgerechte Inhaltsaktualisierungen anzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. — können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten standardmäßiger Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Markup-Sprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, zum Beispiel Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache der Stilregeln, die wir verwenden, um unserem HTML-Inhalt Stil zu verleihen, etwa Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir zum Beispiel einen Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

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

Dann können wir etwas CSS hinzufügen, um ihn schön aussehen zu lassen:

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

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Versuchen Sie, auf das Textlabel zu klicken, einen Namen in das sich öffnende Dialogfeld einzugeben und auf die Schaltfläche OK zu drücken.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr als das — lassen Sie uns im Detail erkunden, was.

> [!NOTE]
> Bevor Sie weitermachen, warum tauchen Sie nicht ein und machen direkt zu Beginn eine Herausforderung von Scrimba? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie man diesen Code schreibt, machen Sie sich keine Sorgen; Sie könnten versuchen, einige Websuchen durchzuführen, um Antworten zu finden, oder die Lösung am Ende des Scrims ansehen.

## Was kann es wirklich tun?

Die Kernsprache des Client-seitigen JavaScripts besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge zu tun wie:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir beispielsweise um die Eingabe eines neuen Namens und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn der Variablen `name` hinzu, um das vollständige Textlabel zu erstellen, z. B. "Player 1: Chris".
- Code ausführen, wenn bestimmte Ereignisse auf einer Webseite auftreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis verwendet, um zu erkennen, wann der Button angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch spannender ist, ist die Funktionalität, die auf der Client-seitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) verleihen Ihrem JavaScript-Code zusätzliche Superkräfte.

APIs sind gebrauchsfertige Sets von Codebausteinen, mit denen ein Entwickler Programme implementieren kann, die ansonsten schwer oder unmöglich zu realisieren wären.
Sie tun für die Programmierung dasselbe, was fertige Möbelbausätze für den Hausbau tun — es ist viel einfacher, fertige Panels zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu bauen, als selbst das Design zu entwickeln, das richtige Holz zu finden, alle Panels auf die richtige Größe und Form zu schneiden, die korrekte Schraubengröße zu finden und _dann_ alles zusammenzusetzen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von APIs; Drittanbieter-APIs sind seitlich im Browser angezeigt und Browser-APIs befinden sich im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten von der umgebenden Computerumgebung freigeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir im obigen einfachen Beispiel gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort ausfindig machen und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen Ihnen die Erstellung animierter 2D- und 3D-Grafiken.
  Menschen machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen wirklich interessante Dinge mit Multimedia, wie das Abspielen von Audio und Video direkt auf einer Webseite oder das Erfassen von Videos Ihrer Webcam und deren Anzeige auf dem Computer einer anderen Person (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu verstehen).

**Drittanbieter-APIs** sind standardmäßig nicht in den Browser integriert und Sie müssen im Allgemeinen ihren Code und ihre Informationen von irgendwo im Web erhalten. Zum Beispiel:

- Die [Bluesky API](https://bsky.network/) ermöglicht Ihnen, beispielsweise Ihre neuesten Beiträge auf Ihrer Webseite anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen Ihnen, benutzerdefinierte Karten in Ihre Webseite einzubetten und ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine davon in diesem Modul behandeln. Sie können viel mehr darüber in unserem [module for Client-side web APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr! Aber lassen Sie sich nicht zu früh begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie JavaScript für 24 Stunden studiert haben — es gibt viele Grundlagen zu behandeln. Und deswegen sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich etwas Code betrachten und dabei untersuchen, was genau passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns die Geschichte kurz rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst angesprochen in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)-Artikel). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML, CSS und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Gebrauch von JavaScript ist das dynamische Ändern von HTML und CSS, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Raum zum Ausführen von Code (diese Räume werden in technischen Begriffen als "Ausführungsumgebungen" bezeichnet) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig getrennt ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab nicht direkt beeinflussen kann — oder auf einer anderen Webseite.
Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Webseiten zu stehlen, und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Webseiten/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen JavaScript-Block stößt, führt er ihn im Allgemeinen in der Reihenfolge von oben nach unten aus.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie die Dinge anordnen.
Schauen wir uns zum Beispiel den JavaScript-Block aus unserem ersten Beispiel an:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zunächst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), die den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Ereignislistener mit `addEventListener` hinzu, sodass die Funktion `updateName()` ausgeführt wird, wenn auf den Button geklickt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren — stattdessen würde im [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein Fehler zurückgegeben werden — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, daher können wir keinen Ereignislistener daran hinzufügen.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der von oben nach unten angegebenen Reihenfolge ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber für jetzt beachten Sie, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden. Dies ist eine häufige Fehlerquelle.

### Interpretierter vs. kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in der für den Programmierer freundlichen Textform empfangen und direkt von dieser verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode des Programms generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **just-in-time compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird in ein schnelleres Binärformat kompiliert, während das Skript verwendet wird, sodass es so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger vs. Client-seitiger Code

Sie könnten auch die Begriffe **serverseitiger** und **Client-seitiger** Code hören, insbesondere im Kontext der Webentwicklung.
Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir ausdrücklich über **Client-seitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem [Dynamische Websites – serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Thema erfahren.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl Client-seitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/Anwendung zu aktualisieren, um je nach Situation unterschiedliche Dinge zu zeigen, neue Inhalte nach Bedarf zu generieren.
Serverseitiger Code generiert dynamisch neue Inhalte auf dem Server, z. B. durch Abrufen von Daten aus einer Datenbank, während Client-seitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z. B. durch Erstellen einer neuen HTML-Tabelle, Füllen mit angeforderten Daten vom Server und dann Anzeigen der Tabelle in einer dem Benutzer angezeigten Webseite.
Die Bedeutung ist in den beiden Zusammenhängen leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und Client-seitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierenden Inhalt wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript Ihrer Seite hinzu?

JavaScript wird auf ähnliche Weise wie CSS auf Ihre HTML-Seite angewendet.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas [Einrichten unserer JavaScript-Datei](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial führt durch einige verschiedene Möglichkeiten, JavaScript zu HTML hinzuzufügen.

### Internes JavaScript

1. Machen Sie zuerst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Body hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript unten platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klick auf den Button ein neuer Absatz generiert und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und stellen Sie sicher, dass Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitiv und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es vielleicht nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) ansehen.

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei setzen wollen? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie die .js Dateierweiterung hat, da sie nur so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (so kann der Browser die Datei früher laden, als wenn es unten ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler in der Art von `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die `apply-javascript-external.html`- und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstatt `<script type="module" src="script.js"></script>` verwenden. Siehe [Skriptlade-Strategien](#skriptlade-strategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Webseite genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und macht ihn wiederverwendbar über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter zu lesen ohne große Scriptblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) ansehen.

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf JavaScript-Code stoßen werden, der sich innerhalb von HTML befindet.
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

Dieses Demo hat genau dieselbe Funktionalität wie in den beiden vorherigen Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jedem Button einfügen, auf das das JavaScript angewendet werden soll.

### Verwendung von addEventListener

Anstatt JavaScript in Ihrem HTML zu verwenden, verwenden Sie ein reines JavaScript-Konstrukt.
Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons iterieren und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dafür sieht wie folgt aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal, wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie noch ein paar mehr Buttons in die Datei ein.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Anklicken einen Absatz erstellen.
> Toll, nicht wahr?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie manipulieren möchten.

Es gibt einige Strategien, um sicherzustellen, dass Ihr JavaScript erst ausgeführt wird, nachdem das HTML geparst wurde:

- Im obigen Beispiel für internes JavaScript wird das Skriptelement am Ende des Dokuments im Body platziert und daher erst ausgeführt, nachdem der gesamte HTML-Body geparst wurde.
- Im obigen Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber weil wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor er JavaScript-Module ausführt. (Sie könnten auch externe Skripte unten im Body platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es lange dauern, bis der Browser überhaupt anfängt, das Skript abzurufen und zu laden, daher ist es normalerweise besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie dennoch nicht-modulare Skripte im Kopf des Dokuments verwenden möchten, die die Anzeige der gesamten Seite blockieren und Fehler verursachen könnten, da sie ausgeführt werden, bevor das HTML geparst wird:
  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie nicht benötigen, dass das HTML bereit ist, das `async`) Attribut am {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) einhüllen.

  Dies ist über den Umfang des Tutorials zu diesem Zeitpunkt hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und Anweisungen für Ihre Mitentwickler darüber enthalten, wie der Code funktioniert (und für Sie, wenn Sie zu Ihrem Code nach sechs Monaten zurückkehren und sich nicht mehr erinnern können, was Sie getan haben).
Kommentare sind sehr nützlich und sollten häufig verwendet werden, insbesondere für größere Anwendungen.
Es gibt zwei Arten:

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

Zum Beispiel könnten wir das JavaScript unseres letzten Demos mit Kommentaren wie folgt versehen:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (Ihre Variablennamen sollten möglicherweise intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Das war's, Ihr erster Schritt in die Welt von JavaScript.
Wir haben mit nur Theorie begonnen, um Ihnen einen Eindruck davon zu geben, warum Sie JavaScript verwenden würden und welche Arten von Dingen Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in den Rest des Codes Ihrer Website passt, unter anderem.

JavaScript mag im Moment ein bisschen entmutigend erscheinen, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten durch die Materie führen, sodass alles Sinn macht.
Im nächsten Artikel werden wir direkt in die Praxis einsteigen und Sie dazu bringen, eigene JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
