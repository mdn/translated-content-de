---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen zum MDN Einsteigerkurs zu JavaScript! In diesem Artikel betrachten wir JavaScript aus einer höheren Perspektive, beantworten Fragen wie "Was ist es?" und "Was kann man damit machen?", und stellen sicher, dass Sie sich mit dem Zweck von JavaScript wohlfühlen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden Konzepten von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript und wie passt es zu einer Website.</li>
          <li>Was man mit JavaScript machen kann.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine hochrangige Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren — immer wenn eine Webseite mehr tut, als nur dort zu sitzen und statische Informationen anzuzeigen — aktuelle Inhalte anzeigt, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen etc. — dann können Sie darauf wetten, dass JavaScript wahrscheinlich im Spiel ist. Es ist die dritte Schicht des Schichtkuchens der Standard-Webtechnologien, zwei davon ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) haben wir in anderen Teilen des Lernbereichs ausführlicher behandelt.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unseren HTML-Inhalten Stil zu verleihen, beispielsweise Hintergrundfarben und Schriftarten einzustellen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimediainhalte zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was man mit ein paar Zeilen JavaScript-Code erreichen kann.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Knopf. Wir können ihn mit HTML kennzeichnen, um ihm Struktur und Zweck zu geben:

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

Dann können wir etwas CSS hinzufügen, um ihn ansprechend aussehen zu lassen:

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

Versuchen Sie, auf das Textlabel zu klicken, geben Sie einen Namen in das Dialogfeld ein, das geöffnet wird, und drücken Sie die OK-Taste.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr — lasst uns erkunden, was im Detail.

> [!NOTE]
> Bevor Sie fortfahren, warum nicht jetzt schon mit einem kleinen Projekt von Scrimba experimentieren? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben sollen, machen Sie sich keine Sorgen; Sie könnten einige Websuchen durchführen, um Antworten zu finden, oder die Lösung am Ende des scrim ansehen.

## Was kann es wirklich leisten?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel fordern wir zum Beispiel die Eingabe eines neuen Namens an und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als "Strings" bekannt) durchzuführen. Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn der `name`-Variable hinzu, um das vollständige Textlabel zu erstellen, z. B. "Player 1: Chris".
- Code auszuführen, als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Wir haben in unserem oben gezeigten Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann der Button angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Es ist jedoch noch viel spannender, welche Funktionalität auf der Kernsprache von clientseitigem JavaScript aufbaut. Die sogenannten **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind gebrauchsfertige Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie machen das Gleiche für die Programmierung wie Möbel-Bausätze für den Hausbau — es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zu einem Bücherregal zusammenzuschrauben, als das Design selbst zu entwickeln, das richtige Holz zu finden, alle Paneele auf die richtige Größe und Form zu schneiden, die passenden Schrauben zu finden und _dann_ zu einem Bücherregal zusammenzusetzen.

Im Allgemeinen fallen sie in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs werden neben dem Browser gezeigt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der Umgebung des Computers anzeigen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie beispielsweise ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte verorten.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Leute machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt in einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um eine Vorstellung zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert und Sie müssen deren Code und Informationen im Allgemeinen von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://bsky.network/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionen zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können in unserem [Client-seitige Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) viel mehr darüber erfahren.

Es gibt noch viele mehr! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie JavaScript für 24 Stunden studiert haben — es gibt viele Grundlagen zu behandeln. Und deshalb sind Sie hier — lassen Sie uns fortfahren!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst behandelt in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)-Artikel). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browsertab) aus. Dies ist wie eine Fabrik, die Rohmaterial (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Einsatz von JavaScript ist das dynamische Modifizieren von HTML und CSS zur Aktualisierung einer Benutzeroberfläche, über die Document Object Model API (wie oben erwähnt).

### Browser-Sicherheit

Jeder Browser-Tab hat seinen eigenen separaten Container für die Ausführung von Code (diese Container werden in technischen Begriffen "Ausführungsumgebungen" genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab - oder auf einer anderen Website - nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme — andernfalls könnten Hacker anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und ähnliche schlimme Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Webseiten/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ablauf

Wenn der Browser auf einen JavaScript-Block stößt, führt er diesen im Allgemeinen der Reihe nach von oben nach unten aus.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie die Dinge anordnen.
Nehmen wir zum Beispiel den JavaScript-Block aus unserem ersten Beispiel:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Art von wiederverwendbaren Codeblöcken wird als **Funktionen** bezeichnet), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Knopfes einfügt. Dann speichern wir eine Referenz zu einem Knopf mit `document.querySelector` und fügen einen Ereignis-Listener mit `addEventListener` hinzu, sodass beim Klicken des Knopfes die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der `const button = ...` und `button.addEventListener(...)`-Zeilen vertauschen würden, würde der Code nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener daran anhängen können.

> [!NOTE]
> Es stimmt nicht immer, dass JavaScript genau von oben nach unten ausgeführt wird, aufgrund von Verhalten wie {{Glossary("Hoisting", "Hoisting")}}, aber beachten Sie vorerst, dass im Allgemeinen Elemente definiert sein müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierter Code

Möglicherweise hören Sie die Begriffe **interpretiert** und **kompiliert** im Zusammenhang mit Programmierung.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form konvertieren, bevor der Browser ihn ausführt.
Der Code wird in seiner programmiererfreundlichen Textform empfangen und direkt aus dieser verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird in einem Binärformat ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus einer technischen Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik, die **Just-In-Time-Compiling** genannt wird, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung zu einem schnelleren, binären Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch weiterhin als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Beide Arten von Sprachen haben Vorteile, aber darauf werden wir jetzt nicht eingehen.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitig** und **clientseitig** im Zusammenhang mit der Webentwicklung hören.
Clientseitiger Code ist der Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angesehen wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir explizit über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, seine Ergebnisse werden dann heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/Anwendung zu aktualisieren, um in unterschiedlichen Umständen unterschiedliche Dinge anzuzeigen, neue Inhalte zu generieren, wie erforderlich.
Serverseitiger Code generiert neue Inhalte dynamisch auf dem Server, z. B. indem er Daten aus einer Datenbank abruft, während clientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client generiert, z. B. indem es eine neue HTML-Tabelle erstellt, sie mit Daten füllt, die vom Server angefordert wurden, und die Tabelle auf einer dem Benutzer angezeigten Webseite anzeigt.
Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite ähnlich angewendet wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie dies funktioniert.

> [!NOTE]
> Scrimba's [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial zeigt ein paar verschiedene Möglichkeiten, JavaScript Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Zuerst machen Sie eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem einzufügenden Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie sehen, dass das HTML eine einfache Webseite mit einem klickbaren Knopf erstellt.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Bodies hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Script-Ladestrategien](#script-ladestrategien) unten.)

4. Nun fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu gestalten — fügen Sie den folgenden Code direkt nach der "// JavaScript goes here"-Zeile hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — nun sollten Sie sehen, dass ein neuer Absatz generiert und unten eingefügt wird, wenn Sie den Knopf klicken.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitive und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert gut, aber was, wenn wir unser JavaScript in eine externe Datei legen möchten? Lassen Sie uns dies nun erkunden.

1. Erstellen Sie zunächst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js-Dateinamenerweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei früher laden kann, als wenn sie am Ende ist):

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

4. Speichern Sie und aktualisieren Sie Ihren Browser. Sie werden entdecken, dass das Klicken auf den Knopf keinen Effekt hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die `apply-javascript-external.html` und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen in [Script-Ladestrategien](#script-ladestrategien) weiter unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise einen lokalen HTTP-Server erfordern.
5. Nun funktioniert die Website genauso wie vorher, aber wir haben unser JavaScript in einer externen Datei. Dies ist im Allgemeinen eine gute Sache zum Organisieren Ihres Codes und zum Wiederverwenden über mehrere HTML-Dateien. Außerdem ist das HTML leichter zu lesen, ohne große Codeblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Teile von tatsächlichem JavaScript stoßen, die in HTML leben. Es könnte so aussehen:

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

Dieses Demo hat genau dieselbe Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Knopf gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist keine gute Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut zu jedem Knopf hinzufügen, auf den Sie das JavaScript anwenden möchten.

### Verwenden von addEventListener stattdessen

Anstelle des Einfügens von JavaScript in Ihr HTML, verwenden Sie ein rein JavaScript-Konstrukt. Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Knöpfe auf einer Seite auszuwählen. Sie können dann die Knöpfe durchlaufen und jedem mit `addEventListener()` einen Handler zuweisen. Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Das mag ein bisschen länger sein als das `onclick`-Attribut, aber es wird für alle Knöpfe funktionieren — egal wie viele auf der Seite sind, noch wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und einige weitere Knöpfe in die Datei hinzuzufügen. Beim erneuten Laden sollten Sie feststellen, dass alle Knöpfe beim Klicken einen Absatz erstellen. Cool, oder?

### Script-Ladestrategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, auf das Sie zugreifen möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTML ausgeführt wird:

- Im obigen Beispiel mit internem JavaScript wird das Skriptelement am Ende des Bodys des Dokuments platziert und erst dann ausgeführt, nachdem der Rest des HTML-Bodys geparst wurde.
- Im obigen Beispiel mit externem JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis aller HTML-Code verarbeitet ist, bevor er JavaScript-Module ausführt. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es lange dauern, bis der Browser das Skript überhaupt zu laden beginnt, daher ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht Modulskripte im Kopf des Dokuments verwenden möchten, die verhindern, dass die gesamte Seite angezeigt wird, und die Fehler verursachen können, weil sie vor dem Parsen des HTMLs ausgeführt werden:
  - Für externe Skripte sollten Sie das `defer` (oder wenn das HTML nicht bereit sein muss, das `async`) Attribut am {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignis-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies liegt außerhalb des Umfangs des Tutorials an diesem Punkt, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dafür da sind, Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern können, was Sie gemacht haben). Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen. Es gibt zwei Typen:

- Einzeilige Kommentare werden nach einem doppelten Schrägstrich (`//`) geschrieben, z. B.

  ```js
  // I am a comment
  ```

- Mehrzeilige Kommentare werden zwischen den Zeichenfolgen `/*` und `*/` geschrieben, z. B.

  ```js
  /*
    I am also
    a comment
  */
  ```

Zum Beispiel könnten wir das JavaScript unseres letzten Demos mit Kommentaren wie folgt erläutern:

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
> In der Regel sind mehr Kommentare besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code zu kompliziert).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript. Wir haben mit nur Theorie begonnen, um sie daran zu gewöhnen, warum man JavaScript verwenden würde und welche Art von Dingen man damit machen kann. Unterwegs sahen Sie einige Codebeispiele und lernten, wie JavaScript sich mit dem Rest des Codes auf Ihrer Website verbindet, unter anderem.

JavaScript mag jetzt ein bisschen beängstigend wirken, aber keine Sorge — in diesem Kurs werden wir es Ihnen in einfachen Schritten beibringen, die auf lange Sicht Sinn ergeben werden. Im nächsten Artikel werden wir direkt ins Praktische eintauchen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
