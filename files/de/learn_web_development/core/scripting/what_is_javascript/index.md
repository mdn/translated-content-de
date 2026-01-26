---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 09b05cde696fbf1fe4061a41f048a8274f858700
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim MDN-JavaScript-Kurs für Anfänger! In diesem Artikel betrachten wir JavaScript aus einer höheren Perspektive, beantworten Fragen wie „Was ist es?“ und „Was können Sie damit tun?“, und stellen sicher, dass Sie sich mit dem Zweck von JavaScript wohlfühlen.

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
          <li>Was ist JavaScript und wie passt es in eine Website?</li>
          <li>Was kann man mit JavaScript machen?</li>
          <li>Hinzufügen von JavaScript zu einer Webseite.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – immer dann, wenn eine Webseite mehr tut, als nur statische Informationen zum Anschauen anzuzeigen – z. B. aktuelle Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. – können Sie sicher sein, dass wahrscheinlich JavaScript beteiligt ist.
Es ist die dritte Schicht des Schichtmodells der Standard-Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, z. B. das Definieren von Absätzen, Überschriften und Datentabellen oder das Einbetten von Bildern und Videos auf der Seite.
- {{Glossary("CSS", "CSS")}} ist eine Sprache der Stilregeln, die wir verwenden, um unserem HTML-Inhalt Stil zu verleihen, z. B. das Festlegen von Hintergrundfarben und Schriftarten und das Anordnen unseres Inhalts in mehreren Spalten.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierten Inhalt zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

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

Dann können wir einige CSS hinzufügen, um es schön aussehen zu lassen:

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

Versuchen Sie, auf das Textetikett zu klicken, einen Namen in das sich öffnende Dialogfeld einzugeben und die OK-Schaltfläche zu drücken.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr — lassen Sie uns im Detail erkunden, was es alles kann.

> [!NOTE]
> Bevor Sie fortfahren, warum springen Sie nicht mit einer Herausforderung von Scrimba ein und machen Ihre Hände schon früh schmutzig? Schauen Sie sich [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben sollen, machen Sie sich keine Sorgen; Sie könnten versuchen, einige Websuchen durchzuführen, um einige Antworten zu finden, oder die Lösung am Ende des Scrims zu sehen.

## Was kann es wirklich tun?

Das Kern-JavaScript-Clientseitensprache besteht aus einigen häufig vorkommenden Programmiereigenschaften, die es Ihnen ermöglichen, Dinge zu tun wie:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir beispielsweise um die Eingabe eines neuen Namens und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als „Strings“ bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und verbinden ihn mit der `name`-Variable, um das vollständige Textetikett zu erstellen, z. B. "Player 1: Chris".
- Code ausführen als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis verwendet, um zu erkennen, wann auf das Etikett geklickt wird, und dann den Code auszuführen, der das Textetikett aktualisiert.
- Und vieles mehr!

Was jedoch noch spannender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache basiert. Sogenannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche "Superkräfte", die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die andernfalls schwer oder unmöglich zu implementieren wären.
Sie tun für die Programmierung dasselbe, was fertiggestellte Möbelbausätze für den Hausbau tun — es ist viel einfacher, vorgefertigte Platten zu nehmen und zusammenzuschrauben, um ein Bücherregal zu bauen, als selbst das Design auszuarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ zusammenzubauen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs werden neben dem Browser angezeigt und Browser-APIs befinden sich im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, indem Sie HTML erstellen, entfernen und ändern, dynamisch neue Stile auf Ihre Seite anwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite erscheinen sehen oder einige neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte darstellen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen tun erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z. B. Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um eine Vorstellung zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert, und Sie müssen im Allgemeinen ihren Code und Informationen von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge zu tun, wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Webseite einzubetten und andere ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten, und wir werden keine davon in diesem Modul behandeln. Sie können viel mehr darüber in unserem [Client-side web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr, was verfügbar ist! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden lang JavaScript studiert haben — es gibt viele Grundlagen, die zuerst abgedeckt werden müssen. Und deshalb sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes ansehen und dabei erkunden, was genau passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte zusammenfassen, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) besprochen). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (den HTML-, CSS- und JavaScript-Code) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML, CSS und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Anwendungsfall von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Bereich zum Ausführen von Code (diese Bereiche werden in der technischen Sprache „Ausführungsumgebungen“ genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Hacker beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere solche schlechten Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten auf sichere Weise zwischen verschiedenen Websites/Tabs zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser einen Block JavaScript findet, wird er im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen.
Zum Beispiel kehren wir zurück zu dem JavaScript-Block, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock mit dem Namen `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Anschließend speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Ereignis-Listener mit `addEventListener` hinzu, sodass beim Klicken auf den Button die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren — stattdessen würde in der [Entwicklungskonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein Fehler zurückgegeben werden — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignis-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer der Fall, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber denken Sie zunächst daran, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner programmiererfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode des Programms erzeugt wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Kompilierung**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung des Skripts in ein schnelleres, binäres Format kompiliert, sodass es so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Sprachtypen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitig** und **clientseitig** im Kontext der Webentwicklung hören.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, und seine Ergebnisse werden heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von clientseitigem JavaScript als auch von serverseitigen Sprachen verwendet — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App so zu aktualisieren, dass in verschiedenen Situationen unterschiedliche Dinge angezeigt werden, neue Inhalte werden nach Bedarf generiert.
Serverseitiger Code generiert dynamisch neue Inhalte auf dem Server, z. B. indem Daten aus einer Datenbank abgerufen werden, während clientseitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z. B. indem eine neue HTML-Tabelle erstellt, mit vom Server angeforderten Daten gefüllt und dann die Tabelle auf einer dem Benutzer angezeigten Webseite angezeigt wird.
Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt die ganze Zeit denselben Inhalt.

## Wie fügt man JavaScript zu seiner Seite hinzu?

JavaScript wird auf Ihre HTML-Seite in ähnlicher Weise angewendet wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns sehen, wie das funktioniert.

> [!NOTE]
> Scrimba's [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial geht auf ein paar verschiedene Möglichkeiten ein, JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Machen Sie zuerst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie es in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie das folgende am Ende Ihres Bodys hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript unten platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Script-Lading-Strategien](#script-lade-strategien) unten.)

4. Nun fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, damit die Seite etwas Interessanteres tut — fügen Sie den folgenden Code direkt unterhalb der Zeile "// JavaScript goes here" ein:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz erzeugt wird, der darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist _case sensitive_ und sehr anspruchsvoll, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert sie möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei stecken wollten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js-Dateierweiterung hat, da dies die Art ist, wie sie als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element unten im `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (so kann der Browser die Datei früher laden, als wenn sie unten ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler etwas in der Art von `Cross-origin request blocked`. Dies liegt daran, dass wie viele externe Ressourcen auch JavaScript-Module vom [gleichen Ursprungsort](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu lösen:
   - Unsere empfohlene Lösung ist, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bedient, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Script loading strategies](#script-lade-strategien). Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache zur Organisation Ihres Codes und um ihn wiederverwendbar für mehrere HTML-Dateien zu machen.
   Außerdem ist das HTML leichter zu lesen, ohne dass große Codeblöcke darin steht.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal Codefragmente von tatsächlichem JavaScript im HTML vorfinden.
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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, damit die Funktion ausgeführt wird, wenn der Button gedrückt wird.

**Bitte machen Sie dies jedoch nicht.** Es ist eine schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jeden Button setzen, auf den Sie das JavaScript anwenden möchten.

### Verwendung von addEventListener stattdessen

Anstelle von JavaScript in Ihr HTML einzubetten, verwenden Sie eine reine JavaScript-Konstruktion.
Die Funktion `querySelectorAll()` erlaubt es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann die Buttons durchlaufen, und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dazu ist unten dargestellt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dieser Code mag etwas länger sein als das `onclick`-Attribut, aber es funktioniert für alle Buttons — egal wie viele auf der Seite sind, noch wie viele hinzugefügt oder entfernt werden.
Der JavaScript-Code muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei hinzuzufügen.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erstellen.
> Nützlich, nicht wahr?

### Script-Lade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und analysiert wird, bevor das HTML, das Sie manipulieren möchten.

Es gibt ein paar verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML analysiert wurde:

- In dem oben verwendeten Beispiel für internes JavaScript wird das Skriptelement am unteren Rand des Dokuments platziert und somit erst nach dem Rest des HTML-Körpers ausgeführt.
- Im obigen Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Körper analysiert wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor er JavaScript-Module ausführt. (Sie könnten externe Skripte auch am unteren Ende des Dokuments platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es lange dauern, bevor der Browser überhaupt beginnen kann, das Skript zu holen und zu laden, daher ist das Platzieren externer Skripte im Kopf in der Regel besser.)
- Wenn Sie weiterhin Nicht-Modul-Skripte im Kopf des Dokuments verwenden möchten, die die Anzeige der gesamten Seite blockieren und Fehler verursachen könnten, weil sie ausgeführt werden, bevor das HTML analysiert ist:
  - Für externe Skripte sollten Sie das `defer` (oder wenn das HTML nicht fertig sein muss, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignis-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht über den Umfang des Tutorials hinaus, aber solange Sie nicht sehr alte Browser unterstützen müssen, müssen Sie dies nicht tun und können statt dessen `<script type="module">` verwenden.

## Kommentare

Wie beim HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden, um Anweisungen an Ihre Mitentwickler, wie der Code funktioniert, zu geben (und an Sie, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern, was Sie getan haben).
Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, besonders bei größeren Anwendungen.
Es gibt zwei Arten:

- Ein einzeiliger Kommentar wird nach einem doppelten Schrägstrich (`//`) geschrieben, z. B.

  ```js
  // I am a comment
  ```

- Ein mehrzeiliger Kommentar wird zwischen den Strings `/*` und `*/` geschrieben, z. B.

  ```js
  /*
    I am also
    a comment
  */
  ```

Wir könnten also das JavaScript unseres letzten Demos mit Kommentaren folgendermaßen annotieren:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code zu kompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Sie daran zu gewöhnen, warum man JavaScript verwenden würde und welche Art von Dingen man damit machen kann.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag jetzt ein bisschen entmutigend wirken, aber keine Sorge — in diesem Kurs werden wir Sie durch einfache Schritte führen, die in Zukunft Sinn machen werden.
Im nächsten Artikel werden wir direkt in die Praxis eintauchen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele direkt zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
