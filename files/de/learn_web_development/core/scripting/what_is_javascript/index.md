---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen zum MDN-Anfängerkurs für JavaScript! In diesem Artikel betrachten wir JavaScript aus einer Vogelperspektive, beantworten Fragen wie „Was ist es?“ und „Was kann man damit machen?“, und stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

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
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare innerhalb von JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren. Jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen — zeitnahe Inhaltsaktualisierungen anzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollbare Video-Jukeboxen etc. — können Sie sicher sein, dass JavaScript wahrscheinlich involviert ist. Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten standardmäßiger Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und zu definieren, zum Beispiel Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um Stil auf unsere HTML-Inhalte anzuwenden, zum Beispiel um Hintergrundfarben und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir ein Button als Beispiel. Wir können es mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button, der Spieler 1: Chris ohne Styling zeigt](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn gut aussehen zu lassen:

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

![Button, der Spieler 1: Chris mit Styling zeigt](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

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

JavaScript kann noch viel mehr – lassen Sie uns genauer erkunden.

> [!NOTE]
> Bevor Sie fortfahren, warum springen Sie nicht direkt hinein und probieren eine Herausforderung von Scrimba in diesem frühen Stadium aus? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben sollen, machen Sie sich überhaupt keine Sorgen; Sie könnten versuchen, einige Websuchen durchzuführen, um einige Antworten zu finden, oder die Lösung am Ende des Scrims ansehen.

## Was kann es wirklich tun?

Die Kernsprache JavaScript auf Client-Seite besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge zu tun wie:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel fragen wir zum Beispiel nach einem neuen Namen, der eingegeben werden soll, und speichern diesen Namen in einer Variablen namens `name`.
- Operationen auf Textstücken (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und verbinden ihn mit der `name`-Variable, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code ausführen, als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Wir haben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem obigen Beispiel verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch spannender ist, ist die Funktionalität, die auf der Client-Seite von JavaScript basiert. Diese sogenannten **Anwendungsprogrammierschnittstellen** (**APIs**) bieten Ihnen zusätzliche Superkräfte in Ihrem JavaScript-Code.

APIs sind vorgefertigte Sets von Code-Bausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich zu implementieren wären. Sie tun für die Programmierung dasselbe, was vorgefertigte Möbelkits für den Hausbau tun — es ist viel einfacher, fertige Paneele zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu bauen, als das Design selbst zu entwickeln, das richtige Holz zu finden, alle Paneele auf die richtige Größe und Form zu schneiden, die korrekt dimensionierten Schrauben zu finden und _dann_ zusammenzufügen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von APIs; 3rd party APIs sind neben dem Browser gezeigt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser eingebaut und sind in der Lage, Daten aus der Umgebung des Computerumfelds zu exponieren oder nützliche komplexe Dinge zu tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) erlaubt Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden, etc. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuen Inhalt angezeigt wird (wie wir im obigen einfachen Demo gesehen haben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Menschen machen einige erstaunliche Dinge mit diesen Web-Technologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. Audio und Video direkt in einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf einem anderen Computer anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert und Sie müssen ihren Code und Informationen in der Regel von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) erlaubt es Ihnen, Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und die [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine davon in diesem Modul behandeln. Sie können mehr über diese in unserem [Client-seitigen Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr, das verfügbar ist! Aber seien Sie noch nicht übermäßig begeistert. Sie können nicht das nächste Facebook, Google Maps oder Instagram bauen, nachdem Sie JavaScript 24 Stunden lang studiert haben — es gibt viele Grundlagen, die zuerst behandelt werden müssen. Und genau deswegen sind Sie hier — lasst uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich anfangen, uns einige Codes anzusehen und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript in Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)-Artikel). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat einen eigenen separaten Eimer, um Code darin auszuführen (diese Eimer werden technisch als "Ausführungsumgebungen" bezeichnet) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab — oder auf einer anderen Website — nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen Block von JavaScript stößt, wird dieser in der Regel in der Reihenfolge von oben nach unten ausgeführt. Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen. Zum Beispiel, lassen Sie uns zum Block von JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden als **Funktionen** bezeichnet), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Ereignis-Listener mit `addEventListener` hinzu, sodass die Funktion `updateName()` ausgeführt wird, wenn der Button angeklickt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) zurückerhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Dies bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener darauf hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber im Allgemeinen sollten Elemente definiert sein, bevor Sie sie verwenden. Dies ist eine häufige Quelle von Fehlern.

### Interpretierter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner programmiererfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden. Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem binären Format ausgeführt, welches aus dem ursprünglichen Program-Quellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner Originaltextform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik, die als **Just-in-Time-Kompilierung** bezeichnet wird, um die Leistung zu verbessern; der JavaScript-Quellcode wird zur Laufzeit in ein schnelleres binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann. JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit erfolgt und nicht im Voraus.

Es gibt Vorteile bei beiden Sprachtypen, aber wir werden diese jetzt nicht diskutieren.

### Server-seitiger versus Client-seitiger Code

Sie könnten auch die Begriffe **server-seitiger** und **client-seitiger** Code hören, insbesondere im Kontext der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angesehen wird, wird der client-seitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir explizit über **client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt, und dessen Ergebnisse werden heruntergeladen und im Browser angezeigt. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamische Websites – Server-seitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von client-seitigem JavaScript als auch von server-seitigen Sprachen verwendet — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um in unterschiedlichen Umständen verschiedene Dinge zu zeigen und bei Bedarf neuen Inhalt zu generieren. Server-seitiger Code generiert neuen Inhalt dynamisch auf dem Server, z.B. indem er Daten aus einer Datenbank abruft, während client-seitiges JavaScript neuen Inhalt im Browser auf dem Client dynamisch generiert, z.B. indem es eine neue HTML-Tabelle erstellt, sie mit Daten vom Server füllt und dann die Tabelle auf einer Webseite anzeigt, die dem Benutzer angezeigt wird. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierenden Inhalt wird als **statisch** bezeichnet — sie zeigt immer den gleichen Inhalt.

## Wie fügen Sie Ihrer Seite JavaScript hinzu?

JavaScript wird Ihrer HTML-Seite auf eine ähnliche Weise hinzugefügt wie CSS. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Machen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden feststellen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie folgendes am Ende Ihres Bodys – direkt vor Ihrem schließenden `</body>`-Tag hinzu:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem Sie das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Jetzt fügen wir etwas JavaScript innerhalb unseres {{htmlelement("script")}}-Elements hinzu, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der "// JavaScript goes here"-Zeile hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klick auf den Button ein neuer Absatz generiert wird und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es hier gezeigt wird? **JavaScript ist sehr pingelig und case-sensitiv, Sie müssen die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert prima, aber was ist, wenn wir unser JavaScript in eine externe Datei legen möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie es `script.js` — achten Sie darauf, dass es die Dateierweiterung .js hat, da es so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (auf diese Weise kann der Browser die Datei eher laden, als wenn sie am Ende steht):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Drücken des Buttons keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen, JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs zählen nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wenn das Serverprogramm läuft und die `apply-javascript-external.html`- und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skriptlade-Strategien](#skriptlade-strategien) unten für mehr Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie vorher, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und dessen Wiederverwendbarkeit über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter zu lesen, ohne große Codeblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Bits von tatsächlichem JavaScript-Code stoßen, die sich innerhalb von HTML befinden.
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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion beim Drücken des Buttons auszuführen.

**Bitte tun Sie dies jedoch nicht.** Es ist eine schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jeden Button setzen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle davon

Anstelle von JavaScript in Ihrem HTML verwenden Sie eine reine JavaScript-Konstruktion. Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons schleifen und jedem mit `addEventListener()` einen Handler zuweisen. Der Code dafür sieht folgendermaßen aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal wie viele sich auf der Seite befinden, noch wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei einzufügen.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Paragraphen erzeugen.
> Toll, nicht wahr?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genau genommen das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, mit dem Sie etwas machen möchten, geladen wird.

Es gibt verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst ausgeführt wird, nachdem das HTML geparst wurde:

- Im internen JavaScript-Beispiel oben wird das Skriptelement am Ende des Dokuments platziert und wird daher nur ausgeführt, nachdem der restliche HTML-Body geparst wurde.
- Im externen JavaScript-Beispiel oben wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bevor der Browser das Skript überhaupt starten und laden kann, daher ist es in der Regel besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch Nicht-Modul-Skripte im Dokumentkopf verwenden möchten, die möglicherweise das gesamte Laden der Seite blockieren könnten und Fehler verursachen könnten, weil sie ausgeführt werden, bevor das HTML geparst wird:

  - Für externe Skripte sollten Sie das `defer`- (oder wenn das HTML nicht bereit sein muss, das `async`) Attribut auf das {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignis-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) umschließen.

  Dies liegt außerhalb des Umfangs des Tutorials an diesem Punkt, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie mit HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu da sind, Ihren Kollegen Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie gemacht haben). Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, besonders bei größeren Anwendungen. Es gibt zwei Typen:

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

Wir könnten zum Beispiel das JavaScript unseres letzten Demos mit Kommentaren wie folgt versehen:

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
> Generell sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen aussagekräftiger sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code zu kompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben mit der Theorie begonnen, um Ihnen näher zu bringen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit machen können. Unterwegs haben Sie ein paar Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag im Moment etwas entmutigend erscheinen, aber keine Sorge — in diesem Kurs werden wir Sie Schritt für Schritt durch einfache Schritte führen, die mit der Zeit Sinn machen werden. Im nächsten Artikel werden wir direkt in die Praxis einsteigen, indem wir Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
