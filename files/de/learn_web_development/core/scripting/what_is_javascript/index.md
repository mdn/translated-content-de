---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Kurs für Anfänger auf MDN! In diesem Artikel betrachten wir JavaScript aus einer höheren Perspektive und beantworten Fragen wie „Was ist es?“ und „Was kann man damit machen?“, um sicherzustellen, dass Sie mit dem Zweck von JavaScript vertraut sind.

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
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren. Jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, die Sie ansehen können — zeitnahe Inhaltsaktualisierungen anzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. — können Sie darauf wetten, dass JavaScript wahrscheinlich im Spiel ist. Es ist die dritte Ebene des Schichtkuchens der Standard-Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir ausführlicher in anderen Teilen des Lernbereichs behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unseren HTML-Inhalten Stil zu verleihen, beispielsweise Hintergrundfarben und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es ermöglicht, dynamisch aktualisierte Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir ein Beispiel mit einem Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button, der Player 1: Chris ohne Stil zeigt](just-html.png)

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

![Button, der Player 1: Chris mit Stil zeigt](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80) }}

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können — siehe den [Source Code](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html), oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr — lassen Sie uns genauer erkunden, was es kann.

## Was kann es wirklich tun?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge zu tun, wie:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel beispielsweise fragen wir nach einem neuen Namen, der dann in einer Variablen namens `name` gespeichert wird.
- Operationen an Textstücken (in der Programmierung als „Strings“ bezeichnet) durchführen. Im obigen Beispiel nehmen wir den String „Player 1: “ und verbinden ihn mit der `name`-Variable, um das vollständige Textlabel zu erstellen, z.B. „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten, ausführen. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Code-Bausteine, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie erledigen für die Programmierung das Gleiche, was Fertigbausätze für den Möbelbau tun — es ist viel einfacher, bereits zugeschnittene Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu machen, als das Design selbst zu entwickeln, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die passenden Schrauben zu finden und _dann_ alles zusammenzusetzen, um ein Bücherregal zu bauen.

Sie fallen generell in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs werden neben dem Browser gezeigt und Browser-APIs im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung nutzen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren: HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite erscheinen sehen oder neuer Inhalt angezeigt wird (wie wir es oben in unserem einfachen Demo gesehen haben), ist das der DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Menschen machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu verstehen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut, und Sie müssen ihren Code und Informationen normalerweise von irgendwo im Web holen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) erlaubt Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionalität.

> [!NOTE]
> Diese APIs sind fortgeschritten, und wir werden keine davon in diesem Modul behandeln. Sie können in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) viel mehr darüber erfahren.

Es gibt noch viel mehr, das zur Verfügung steht! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden JavaScript studiert haben — es gibt viele Grundlagen zu behandeln. Und deshalb sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich etwas Code betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (erstmals in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_HTML) Artikel angesprochen). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browsertab) aus. Das ist wie eine Fabrik, die Rohmaterialien (den Code) annimmt und ein Produkt (die Webseite) herausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browsertab zu erstellen, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über die Document Object Model API zu aktualisieren (wie oben erwähnt).

### Browsersicherheit

Jeder Browsertab hat einen eigenen, separaten Bereich zum Ausführen von Code (diese Bereiche werden in der Fachsprache „Ausführungsumgebungen“ genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig unabhängig ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab — oder auf einer anderen Website — nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere böse Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht abdecken werden.

### Reihenfolge der JavaScript-Ausführung

Wenn der Browser einen Block von JavaScript entdeckt, führt er ihn im Allgemeinen in Reihenfolge von oben nach unten aus. Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge platzieren. Zum Beispiel, lassen Sie uns zum Block von JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus, dann wird ein Ereignislistener daran angebracht, sodass beim Klicken des Buttons der `updateName()` Codeblock (Zeilen 5–8) ausgeführt wird. Der `updateName()` Codeblock (diese Arten von wiederverwendbaren Codebausteinen werden „Funktionen“ genannt) fragt den Benutzer nach einem neuen Namen und fügt diesen Namen in den Button-Text ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen würden, würde es nicht mehr funktionieren — stattdessen erhalten Sie eine Fehlermeldung in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignislistener daran anhängen können.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler — Sie müssen darauf achten, dass die in Ihrem Code referenzierten Objekte existieren, bevor Sie etwas mit ihnen machen.

### Interpretierter vs. kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Zusammenhang mit der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden. Beispielsweise werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung des Skripts in ein schnelleres, binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann. Dennoch gilt JavaScript immer noch als interpretierte Sprache, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht erörtern.

### Server-seitiger vs. Client-seitiger Code

Sie könnten auch die Begriffe **Server-seitiger** und **Client-seitiger** Code hören, besonders im Zusammenhang mit der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir ausdrücklich über **Client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt und dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamic Websites – Server-side programming](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl client-seitiges JavaScript als auch server-seitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um verschiedene Dinge unter verschiedenen Umständen anzuzeigen und bei Bedarf neuen Inhalt zu generieren. Server-seitiger Code erzeugt dynamisch neuen Inhalt auf dem Server, z.B. durch das Abrufen von Daten aus einer Datenbank, während client-seitiges JavaScript dynamisch neuen Inhalt im Browser auf dem Client erzeugt, z.B. indem eine neue HTML-Tabelle erstellt, mit vom Server angeforderten Daten gefüllt und dann die Tabelle in einer dem Benutzer angezeigten Webseite angezeigt wird. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt immer den gleichen Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite in ähnlicher Weise wie CSS hinzugefügt. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigem Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie das Folgende am Ende Ihres Body hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Script-Ladestrategien](#script-ladestrategien) unten.)

4. Jetzt werden wir etwas JavaScript in unser {{htmlelement("script")}}-Element hinzufügen, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der "// JavaScript goes here"-Zeile hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz erzeugt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem schließenden `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie gezeigt? **JavaScript ist case-sensitiv und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie angezeigt, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) sehen.

### Externes JavaScript

Dies funktioniert großartig, aber was ist, wenn wir unser JavaScript in einer externen Datei platzieren möchten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Muster-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js Dateierweiterung hat, da dies als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das Folgende direkt vor dem schließenden `</head>`-Tag hinzu (so kann der Browser die Datei schneller laden, als wenn sie am Ende ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken des Buttons keine Wirkung hat und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler ähnlich `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen, JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Script-Ladestrategien](#script-ladestrategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise dennoch einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Das ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und macht ihn wiederverwendbar über mehrere HTML-Dateien hinweg. Außerdem ist das HTML leichter zu lesen, ohne große Teile von Skripten darin zu haben.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) sehen.

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal Teile von tatsächlichem JavaScript-Code innerhalb von HTML finden. Es könnte so aussehen:

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

**Bitte machen Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jedem Button einschließen, auf den JavaScript angewendet werden soll.

### Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML einzuschließen, verwenden Sie einen reinen JavaScript-Konstrukt. Die `querySelectorAll()`-Funktion ermöglicht Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons iterieren und jedem einen Handler mit `addEventListener()` zuweisen. Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Das könnte etwas länger als das `onclick`-Attribut sein, aber es wird für alle Buttons funktionieren — egal wie viele auf der Seite sind, noch wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei hinzuzufügen. Wenn Sie neu laden, sollten Sie feststellen, dass jeder der Buttons bei Klick einen Absatz erstellt. Genial, oder?

### Script-Ladestrategien

Alle HTML auf einer Seite wird in der Reihenfolge geladen, in der es erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)) zu manipulieren, funktioniert Ihr Code nicht, falls das JavaScript geladen und geparst wird, bevor das HTML, mit dem Sie etwas tun wollen.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTML ausgeführt wird:

- Im oben gezeigten internen JavaScript-Beispiel wird das Skriptelement am Ende des Dokumentskörpers platziert und daher erst ausgeführt, nachdem der Rest des HTML-Körpers geparst wurde.
- Im oben gezeigten externen JavaScript-Beispiel wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Körper geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis das gesamte HTML verarbeitet ist, bevor JavaScript-Module ausgeführt werden. (Sie könnten externe Skripte auch am Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bevor der Browser überhaupt anfangen kann, das Skript zu laden und zu analysieren, weshalb das Platzieren externer Skripte im Kopf in der Regel besser ist.)
- Wenn Sie immer noch nicht-modulierte Skripte im Dokumentenkopf verwenden möchten, die die gesamte Seitendarstellung blockieren können und Fehler verursachen könnten, weil sie vor dem Parsen des HTMLs ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie nicht auf fertig geparstes HTML angewiesen sind, das `async`) Attribut auf das {{htmlelement("script")}}-Element setzen.
  - Für interne Skripte sollten Sie den Code in ein [`DOMContentLoaded` Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht über den Rahmen des Tutorials an diesem Punkt hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu dienen, Ihren Kollegen Anweisungen darüber zu geben, wie der Code funktioniert (und Ihnen, wenn Sie sechs Monate später zurückkehren und sich nicht mehr erinnern, was Sie gemacht haben). Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, besonders für größere Anwendungen. Es gibt zwei Typen:

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

Zum Beispiel könnten wir das letzte JavaScript-Demo mit Kommentaren wie folgt annotieren:

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
> Im Allgemeinen sind mehr Kommentare besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (Ihre Variablennamen sollten möglicherweise intuitiver sein) oder sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in den Rest des Codes auf Ihrer Website passt, unter anderem.

JavaScript mag jetzt etwas überwältigend erscheinen, aber keine Sorge — in diesem Kurs führen wir Sie in einfachen Schritten durch, die in Zukunft Sinn machen werden. Im nächsten Artikel werden wir direkt ins Praktische einsteigen und Sie dazu bringen, sofort loszulegen und Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
