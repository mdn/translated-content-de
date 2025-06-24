---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim MDN JavaScript-Kurs für Anfänger!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie „Was ist es?“ und „Was können Sie damit machen?“, und stellen sicher, dass Sie mit der Zweckmäßigkeit von JavaScript vertraut sind.

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
          <li>Was ist JavaScript und wie passt es in eine Website.</li>
          <li>Was Sie mit JavaScript tun können.</li>
          <li>Hinzufügen von JavaScript zu einer Webseite.</li>
          <li>Schreiben von Kommentaren in JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, die Sie sich ansehen können – z.B. die Anzeige rechtzeitiger Inhaltsaktualisierungen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. – können Sie sicher sein, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Ebene des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Ebenen der standardmäßigen Webtechnologien: HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, z.B. Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos auf der Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unser HTML-Inhalte zu stylen, z.B. Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Ebenen bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button mit der Aufschrift Player 1: Chris ohne Stil](just-html.png)

Dann können wir etwas CSS hinzufügen, um es hübsch aussehen zu lassen:

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

![Button mit der Aufschrift Player 1: Chris mit Stil](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten.
Versuchen Sie, auf das Textlabel zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann viel mehr als das tun – lassen Sie uns genauer betrachten, was das ist.

> [!NOTE]
> Bevor Sie fortfahren, warum nicht direkt loslegen und sich mit einer frühen Herausforderung von Scrimba die Hände schmutzig machen? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben sollen, machen Sie sich keine Sorgen; Sie könnten versuchen, einige Websuchen durchzuführen, um Antworten zu finden, oder die Lösung am Ende des Scrims zu betrachten.

## Was kann es wirklich tun?

Die Kernsprache von JavaScript auf der Client-Seite besteht aus einigen gängigen Programmiermerkmalen, die es Ihnen ermöglichen, Dinge zu tun wie:

- Nützliche Werte in Variablen zu speichern. In dem obigen Beispiel fragen wir beispielsweise nach einem neuen Namen, der eingegeben und dann in einer Variablen namens `name` gespeichert wird.
- Operationen mit Textstücken (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn mit der Variablen `name` zusammen, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code in Reaktion auf bestimmte Ereignisse auf einer Webseite auszuführen. Wir verwendeten ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem obigen Beispiel, um zu erkennen, wann das Label geklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch aufregender ist, sind die Funktionalitäten, die auf der Kernsprache von JavaScript auf Client-Seite aufbauen. Die sogenannten **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind vorgefertigte Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären.
Sie machen dasselbe für die Programmierung, was vorgefertigte Möbelsets für den Hausbau tun – es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu bauen, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die korrekten Schrauben zu finden und _dann_ sie zusammenzufügen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von APIs; 3rd Party APIs werden neben dem Browser und Browser APIs im Browser angezeigt](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der umliegenden Computerumgebung freigeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht Ihnen das Manipulieren von HTML und CSS, das Erstellen, Entfernen und Ändern von HTML, das dynamische Anwenden neuer Stile auf Ihre Seite usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie oben in unserem einfachen Demo gesehen), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen tun erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio and Video APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite zu spielen oder Video von Ihrer Webcam aufzunehmen und es auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um eine Vorstellung davon zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert, und Sie müssen im Allgemeinen deren Code und Informationen von irgendwo im Web abrufen. Beispielsweise:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) erlaubt es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solche Funktionalitäten.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine davon in diesem Modul behandeln. Sie können viel mehr über diese in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt auch noch viel mehr zu entdecken! Lassen Sie sich jedoch noch nicht zu sehr ins Schwitzen bringen. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie 24 Stunden JavaScript studiert haben – es gibt viele Grundlagen zu klären. Und deshalb sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich anfangen, uns etwas Code anzusehen und beim Durchgehen herausfinden, was tatsächlich passiert, wenn Sie ein Stück JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte zusammenfassen, was passiert, wenn Sie eine Webseite in einem Browser laden (erstmals im [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) Artikel behandelt wurde). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (des Browser-Tabs) aus.
Das ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) produziert.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um beim Laden der Seite die Inhalte im Browser-Tab zu erstellen](execution.png)

Eine sehr häufige Verwendung von JavaScript ist das dynamische Modifizieren von HTML und CSS, um über die Document Object Model API (wie oben erwähnt) Benutzeroberflächen zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Speicherort für die Ausführung von Code (diese Speicherorte werden technisch als "Ausführungsumgebungen" bezeichnet) – dies bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab nicht direkt beeinflussen kann – oder auf einer anderen Website. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere solche schlechten Dinge zu tun.

> [!NOTE]
> Es gibt Wege, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen Block JavaScript stößt, wird er im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen.
Lassen Sie uns beispielsweise zum JavaScript-Block unseres ersten Beispiels zurückkehren:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zunächst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden als **Funktionen** bezeichnet), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Event-Listener hinzu, der beim Klicken auf den Button die Funktion `updateName()` ausführt.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` ändern würden, würde der Code nicht mehr funktionieren - stattdessen würden Sie einen Fehler in der [Entwicklungskonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Event-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber im Moment sollten Sie daran denken, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompiliertem Code

Möglicherweise hören Sie die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner für Programmierer verständlichen Textform empfangen und direkt von dort aus verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden.
Beispielsweise werden C/C++ in Maschinencode kompiliert, der dann von der Computer ausgeführt wird.
Das Programm wird aus einer Binärform ausgeführt, die aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik, die als **just-in-time compiling** bezeichnet wird, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung des Skripts in ein schnelleres Binärformat kompiliert, sodass er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Möglicherweise hören Sie auch die Begriffe **serverseitig** und **clientseitig** im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir explizit über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, beispielsweise in der beliebten Node.js-Umgebung – Sie können mehr über serverseitiges JavaScript in unserem [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)-Thema erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben—es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um unterschiedliche Dinge in verschiedenen Umständen zu zeigen und neue Inhalte bei Bedarf zu generieren.
Serverseitiger Code generiert neue Inhalte dynamisch auf dem Server, z.B. durch Abruf von Daten aus einer Datenbank, während clientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client generiert, z.B. durch Erstellen einer neuen HTML-Tabelle, die mit vom Server geforderten Daten gefüllt und dann in einer dem Benutzer angezeigten Webseite angezeigt wird.
Die Bedeutung ist in den beiden Kontexten etwas unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet – sie zeigt immer den gleichen Inhalt an.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf Ihrer HTML-Seite auf ähnliche Weise wie CSS angewendet.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML – das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial führt durch einige verschiedene Möglichkeiten, JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispiel-Datei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Bodies hinzu - direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am unteren Rand platzieren, stellen wir sicher, dass alle HTML-Elemente geladen werden. (Siehe auch [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) unten.)

4. Jetzt fügen wir einige JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – nun sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz generiert und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html` Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wurde? **JavaScript ist case-sensitive und sehr pingelig, daher müssen Sie die Syntax genau wie gezeigt eingeben, ansonsten kann es nicht funktionieren.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) einsehen ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei einfügen wollten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js Dateierweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie Folgendes direkt vor dem schließenden `</head>`-Tag hinzu (auf diese Weise kann der Browser die Datei früher laden als wenn sie am Ende ist):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie im `script.js` das folgende Skript hinzu:

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden entdecken, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler in der Art von `Cross-origin request blocked` sehen. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module von derselben [origin](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem Serverprogramm, das die `apply-javascript-external.html` und `script.js` Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie stattdessen `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) unten für weitere Information. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise dennoch einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen gut in Bezug auf die Organisation Ihres Codes und macht ihn wiederverwendbar über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter zu lesen, ohne große Skriptblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) einsehen ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Stücke von tatsächlichem JavaScript-Code stoßen werden, die in HTML eingebettet sind.
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

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient – Sie müssten das Attribut `onclick="createParagraph()"` für jeden Button einschließen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML einzufügen, verwenden Sie eine reine JavaScript-Konstruktion.
Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und mit `addEventListener()` einem jeden einen Handler zuweisen.
Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal, wie viele sich auf der Seite befinden oder hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei einzufügen.
> Beim Neuladen sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erzeugen.
> Toll, nicht wahr?

### Strategien zum Laden von Skripten

Der gesamte HTML auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie ändern möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst ausgeführt wird, nachdem das HTML geparst wurde:

- Im obigen Beispiel für internes JavaScript wird das Skriptelement am unteren Rand des Bodys des Dokuments platziert und daher erst nach dem übrigen HTML-Body ausgeführt.
- Im obigen Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) betrachtet und der Browser wartet, bis alle HTML verarbeitet sind, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bis der Browser das Skript überhaupt abrufen und laden kann, also ist das Platzieren externer Skripte im Kopf normalerweise besser.)
- Wenn Sie dennoch nicht-Modul-Skripte im Dokumentkopf verwenden möchten, die die gesamte Seite daran hindern könnten, angezeigt zu werden, und Fehler verursachen könnten, weil sie vor dem Parsen des HTMLs ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer` (oder, wenn Sie nicht benötigen, dass das HTML bereit ist, das `async`) Attribut am {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einbinden.

  Dies geht über den Rahmen des Tutorials hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden, und Existieren, um Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und nicht mehr wissen, was Sie gemacht haben).
Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen.
Es gibt zwei Typen:

- Ein Einzelzeilenkommentar wird nach einem Doppel-Slash (`//`) geschrieben, z.B.

  ```js
  // I am a comment
  ```

- Ein Mehrzeilenkommentar wird zwischen den Zeichenketten `/*` und `*/` geschrieben, z.B.

  ```js
  /*
    I am also
    a comment
  */
  ```

So könnten wir beispielsweise das JavaScript unseres letzten Demos wie folgt mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript.
Wir haben mit nur Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden und welche Art von Dingen Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript zum Rest des Codes auf Ihrer Website passt, unter anderem.

JavaScript mag jetzt etwas einschüchternd wirken, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten führen, die im weiteren Verlauf sinnvoll sind.
Im nächsten Artikel werden wir direkt ins Praktische eintauchen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
