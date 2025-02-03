---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Anfängerkurs von MDN! In diesem Artikel betrachten wir JavaScript aus einer höheren Perspektive und beantworten Fragen wie „Was ist das?“ und „Was können Sie damit machen?“, um sicherzustellen, dass Sie den Zweck von JavaScript verstehen.

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
          <li>Was ist JavaScript und wie passt es in eine Website?</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare innerhalb von JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine hochrangige Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, die Sie sich ansehen können – etwa aktuelle Inhaltsupdates anzuzeigen, interaktive Karten, animierte 2D-/3D-Grafiken, scrollende Video-Jukeboxen, usw. – können Sie darauf wetten, dass JavaScript wahrscheinlich im Spiel ist. Es ist die dritte Ebene des Schichtkuchens der Standard-Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs viel detaillierter behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unseren Webinhalt zu strukturieren und ihm Bedeutung zu verleihen, z. B. indem wir Absätze, Überschriften und Datentabellen definieren oder Bilder und Videos in die Seite einbetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unseren HTML-Inhalt zu gestalten, z. B. um Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die Sie in die Lage versetzt, dynamisch Inhalte zu aktualisieren, Multimedia zu steuern, Bilder zu animieren und fast alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button zeigt Spieler 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn ansprechend aussehen zu lassen:

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

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können – sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) an oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr als das – lassen Sie uns im Detail erkunden, was es wirklich kann.

## Was kann es wirklich tun?

Die clientseitige JavaScript-Kernsprache besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie diese zu tun:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir zum Beispiel darum, dass ein neuer Name eingegeben wird, und speichern dann diesen Namen in einer Variablen namens `name`.
- Operationen auf Textstücken durchführen (bekannt als „Strings“ in der Programmierung). Im obigen Beispiel nehmen wir den String „Player 1: “ und fügen ihn der `name`-Variable hinzu, um das vollständige Textlabel zu erstellen, z. B. „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse ausführen, die auf einer Webseite auftreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label geklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und noch viel mehr!

Was jedoch noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. Die sogenannten **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind gebrauchsfertige Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich zu implementieren wären. Sie machen dasselbe für die Programmierung, was fertige Möbelbausätze für den Hausbau tun – es ist viel einfacher, vorgefertigte Paneele zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu erstellen, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Paneele auf die richtige Größe und Form zu schneiden, die passenden Schrauben zu finden und _dann_ alles zusammenzufügen, um ein Bücherregal zu erstellen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von APIs; externe APIs werden neben dem Browser angezeigt und Browser-APIs befinden sich im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht Ihnen die Manipulation von HTML und CSS, das Erstellen, Entfernen und Ändern von HTML, das dynamische Anwenden neuer Stile auf Ihre Seite, usw. Jedes Mal, wenn Sie beispielsweise ein Pop-up-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und ihn auf einer Karte darstellen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen Ihnen die Erstellung animierter 2D- und 3D-Grafiken. Menschen machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z. B. Audio und Video direkt in einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Schnappschuss-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um die Idee zu verstehen).

**Externe APIs** sind standardmäßig nicht im Browser integriert, und es ist im Allgemeinen erforderlich, ihren Code und ihre Informationen von irgendwo im Web abzurufen. Zum Beispiel:

- Die [Twitter API](https://developer.twitter.com/en/docs) ermöglicht es Ihnen, Dinge wie das Anzeigen Ihrer neuesten Tweets auf Ihrer Website zu tun.
- Die [Google Maps API](https://developers.google.com/maps/) und die [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionen zu verwenden.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser APIs in diesem Modul abdecken. Sie können viel mehr darüber in unserem [Module zu clientseitigen Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr, was verfügbar ist! Lassen Sie sich jedoch nicht übermäßig begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie JavaScript für 24 Stunden studiert haben – es gibt eine Menge Grundlagen zu behandeln. Und genau deshalb sind Sie hier – lassen Sie uns fortfahren!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich beginnen, uns einige Code-Beispiele anzusehen, und währenddessen erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns die Geschichte dessen, was passiert, wenn Sie eine Webseite in einem Browser laden, kurz rekapitulieren (zuerst besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung aus (den Browser-Tab). Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript ist das dynamische Ändern von HTML und CSS zur Aktualisierung einer Benutzeroberfläche über die Document Object Model API (wie oben erwähnt).

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Bucket, in dem der Code ausgeführt wird (diese Buckets werden in technischen Begriffen als „Execution Environments“ bezeichnet) – das bedeutet, dass der Code in den meisten Fällen in jedem Tab völlig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber das sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen Block JavaScript stößt, führt er ihn im Allgemeinen in der Reihenfolge von oben nach unten aus. Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen. Lassen Sie uns zum Beispiel auf den JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Art von wiederverwendbaren Codeblöcken wird **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen mit `addEventListener` einen Ereignislistener hinzu, damit die Funktion `updateName()` ausgeführt wird, wenn der Button geklickt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren - stattdessen würden Sie einen Fehler in der [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten - `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignislistener darauf hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhalten wie {{Glossary("Hoisting", "Hoisting")}}, aber für jetzt bedenken Sie, dass im Allgemeinen Elemente vor ihrer Verwendung definiert werden müssen. Dies ist eine häufige Quelle für Fehler.

### Interpretiert versus kompiliert

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird unmittelbar zurückgegeben. Sie müssen den Code nicht in eine andere Form transformieren, bevor der Browser ihn ausführt. Der Code wird in seiner programmerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden. Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichte interpretierte Programmiersprache. Der Webbrowser erhält den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **just-in-time compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung des Skripts in ein schnelleres Binärformat kompiliert, sodass er so schnell wie möglich ausgeführt werden kann. Trotzdem wird JavaScript immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit stattfindet und nicht im Voraus.

Es gibt sowohl für interpretierte als auch für kompilierte Sprachen Vorteile, aber diese werden wir jetzt nicht diskutieren.

### Server-seitiger vs. client-seitiger Code

Sie könnten auch die Begriffe **server-seitiger** und **client-seitiger** Code hören, insbesondere im Kontext der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird - bei einem Webseitenaufruf wird der client-seitige Code der Seite heruntergeladen, dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir ausdrücklich über **client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt, bevor seine Ergebnisse heruntergeladen und im Browser angezeigt werden. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung - mehr über server-seitiges JavaScript erfahren Sie in unserem Thema [Dynamische Websites – Server-seitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side).

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von client-seitigem JavaScript als auch von server-seitigen Sprachen verwendet - es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um unter verschiedenen Umständen unterschiedliche Inhalte anzuzeigen und neue Inhalte nach Bedarf zu generieren. Server-seitiger Code generiert dynamisch neue Inhalte auf dem Server, z. B. durch Abrufen von Daten aus einer Datenbank, während client-seitiges JavaScript dynamisch neue Inhalte im Browser des Clients erzeugt, z. B. indem es eine neue HTML-Tabelle erstellt, sie mit Daten vom Server füllt und dann die Tabelle auf einer dem Benutzer angezeigten Webseite darstellt. Die Bedeutung ist in beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet - sie zeigt immer denselben Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite auf ähnliche Weise hinzugefügt wie CSS. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML - das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Bodys hinzu - direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten normalerweise in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch unten [Skriptlade-Strategien](#skriptlade-strategien).)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und prüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem Schließen des `</body>`-Tags hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitive und sehr pingelig, Sie müssen die Syntax genau so eingeben, wie sie angezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) sehen ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei legen möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zunächst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie die Erweiterung .js hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Rand des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei früher laden kann als wenn sie am Ende steht):

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

4. Speichern Sie und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung zeigt, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler sehen, der in etwa `Cross-origin request blocked` lautet. Das liegt daran, dass wie viele externe Ressourcen auch JavaScript-Module von der [gleichen Herkunft](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifiziert sind. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unten unter [Skriptlade-Strategien](#skriptlade-strategien). Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Das ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und macht ihn wiederverwendbar über mehrere HTML-Dateien hinweg. Außerdem ist das HTML leichter lesbar, ohne große Skriptblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([sehen Sie es auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf kleine JavaScript-Codeblöcke treffen, die in HTML eingebettet sind. Es könnte etwa so aussehen:

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

Dieses Demo hat exakt dieselbe Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen `onclick`-Inline-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu belasten, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"`-Attribut auf jedem Button hinzufügen, auf den das JavaScript angewendet werden soll.

### Die Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML einzubetten, verwenden Sie eine reine JavaScript-Konstruktion. Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann über die Buttons schleifen und jedem einen Handler mit `addEventListener()` zuweisen. Der Code dazu sieht folgendermaßen aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dieser Code mag ein wenig länger sein als das `onclick`-Attribut, aber es funktioniert für alle Buttons - egal wie viele sich auf der Seite befinden oder hinzugefügt oder entfernt werden. Der JavaScript-Code muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie der Datei ein paar weitere Buttons hinzu. Wenn Sie die Seite neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erzeugen. Ziemlich cool, oder?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie manipulieren möchten, geladen wurde.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTML ausgeführt wird:

- Im obigen Beispiel für internes JavaScript befindet sich das Skriptelement am unteren Rand des Körpers des Dokuments und wird daher erst nach dem Rest des HTML-Körpers geparst.
- Im obigen Beispiel für externes JavaScript befindet sich das Skriptelement im Kopf des Dokuments, bevor der HTML-Körper geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis das gesamte HTML verarbeitet ist, bevor er JavaScript-Module ausführt. (Sie könnten auch externe Skripte am Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, könnte es viel Zeit dauern, bevor der Browser das Skript überhaupt abrufen und laden kann, also ist es normalerweise besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht-modulbasierte Skripte im Document-Head verwenden möchten, die die ganze Seite daran hindern könnten, angezeigt zu werden, und Fehler verursachen könnten, weil sie vor dem Parsen des HTML ausgeführt wurden:

  - Bei externen Skripten sollten Sie das `defer` (oder wenn Sie das HTML nicht bereit benötigen, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Bei internen Skripten sollten Sie den Code in einen [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht über den Umfang des Tutorials hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und existieren, um Ihren Mit-Entwicklern Hinweise darauf zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr daran erinnern können, was Sie getan haben). Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen. Es gibt zwei Typen:

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

So könnten wir zum Beispiel den JavaScript-Code unseres letzten Demos mit Kommentaren ergänzen:

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
> Im Allgemeinen sind mehr Kommentare meist besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Code-Beispiele gesehen und erfahren, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag jetzt etwas einschüchternd wirken, aber keine Sorge - in diesem Kurs werden wir Sie in einfachen Schritten durch das Thema führen, die von vornherein Sinn machen. Im nächsten Artikel werden wir direkt ins Praktische eintauchen und Sie dazu bringen, eigene JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
