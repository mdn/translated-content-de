---
title: Was ist JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
l10n:
  sourceCommit: f7e7b73ae9bb1e9230dd543c073d5d2ff083a61b
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Willkommen zum MDN Einsteigerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript aus einer hohen Perspektive und beantworten Fragen wie "Was ist es?" und "Was können Sie damit tun?". Zudem stellen wir sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Grundverständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was JavaScript ist, was es tun kann und wie es in eine Webseite passt, erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren. Jedes Mal, wenn eine Webseite mehr macht, als nur statische Informationen anzuzeigen — wie zum Beispiel aktuelle Inhalte zu aktualisieren, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. — können Sie sicher sein, dass JavaScript wahrscheinlich daran beteiligt ist. Es ist die dritte Schicht des Schichtkuchens der standardmäßigen Webtechnologien, von denen zwei ([HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS)) wir ausführlicher in anderen Teilen des Lernbereichs behandelt haben.

![Die drei Schichten der Standard-Webtechnologien: HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, z.B. indem wir Absätze, Überschriften und Datentabellen definieren oder Bilder und Videos in die Seite einbetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um Styling auf unsere HTML-Inhalte anzuwenden, z.B. um Hintergrundfarben und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierte Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und praktisch alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button, der "Player 1: Chris" ohne Styling zeigt](just-html.png)

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

![Button, der "Player 1: Chris" mit Styling zeigt](html-and-css.png)

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

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr — lassen Sie uns dies im Detail erkunden.

## Was kann es wirklich tun?

Die Kernsprache JavaScript auf der Clientseite besteht aus einigen gängigen Programmierfunktionen, die Sie Dinge tun lassen wie:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir beispielsweise um die Eingabe eines neuen Namens und speichern diesen Namen in einer Variable namens `name`.
- Operationen an Textstellen durchführen (bekannt als "Zeichenketten" in der Programmierung). Im obigen Beispiel nehmen wir die Zeichenkette "Player 1: " und fügen sie mit der `name`-Variable zusammen, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code ausführen als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann auf das Label geklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch aufregender ist jedoch die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte zur Verwendung in Ihrem JavaScript-Code.

APIs sind fertige Sätze von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären.
Sie tun dasselbe für die Programmierung wie fertige Möbelbausätze für den Hausbau – es ist viel einfacher, vorgefertigte Platten zu nehmen und zusammenzuschrauben, um ein Bücherregal zu bauen, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die Schrauben in der richtigen Größe zu finden und _dann_ sie zusammenzusetzen, um ein Bücherregal zu bauen.

Im Allgemeinen fallen sie in zwei Kategorien.

![Zwei Kategorien von API; 3rd-Party-APIs werden neben dem Browser und Browser-APIs im Browser angezeigt](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung preisgeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Mit der [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) können Sie HTML und CSS manipulieren, HTML erstellen, entfernen und ändern und neue Stile dynamisch auf Ihre Seite anwenden.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite erscheinen sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Mit der [Geolocation API](/de/docs/Web/API/Geolocation_API) werden geografische Informationen abgerufen.
  Dies ist der Grund, warum [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen kann.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen tun erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen Ihnen wirklich interessante Dinge mit Multimedia, wie z.B. Audio und Video direkt auf einer Webseite abzuspielen, oder Video von Ihrer Webcam zu erfassen und es auf dem Computer einer anderen Person anzuzeigen (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um eine Vorstellung zu bekommen).

> [!NOTE]
> Viele der oben genannten Demos funktionieren in einem älteren Browser nicht – beim Experimentieren ist es eine gute Idee, einen modernen Browser wie Firefox, Chrome, Edge oder Opera zu verwenden, um Ihren Code auszuführen.
> Sie müssen das [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) genauer betrachten, wenn Sie sich der Bereitstellung von Produktionscode nähern (d.h. echter Code, den echte Kunden verwenden werden).

**Drittanbieter-APIs** sind nicht standardmäßig im Browser integriert, und Sie müssen deren Code und Informationen in der Regel von irgendwo im Web abrufen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht Ihnen Dinge wie, Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionalitäten.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können viel mehr darüber in unserem Modul zu [Client-seitigen Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs) erfahren.

Es gibt noch viel mehr, was verfügbar ist! Aber lassen Sie sich jetzt nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie JavaScript 24 Stunden lang studiert haben — es gibt viele Grundlagen zu behandeln. Und genau deshalb sind Sie hier — gehen wir weiter!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich anfangen, uns etwas Code anzusehen und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz wiederholen, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem Artikel [Wie funktioniert CSS](/de/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung aus (dem Browser-Tab). Das ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code werden beim Laden der Seite zusammengeführt, um den Inhalt im Browser-Tab zu erstellen](execution.png)

Eine sehr häufige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu modifizieren, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browser-Sicherheit

Jeder Browser-Tab hat seinen eigenen separaten Container zur Ausführung von Code (diese Container werden in technischen Begriffen als "Ausführungsumgebungen" bezeichnet) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig getrennt ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Bösewichte anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere solche schlechten Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, um Code und Daten sicher zwischen verschiedenen Websites/Tabs zu senden, aber diese sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen JavaScript-Block trifft, wird dieser im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge anordnen.
Zum Beispiel, lassen Sie uns zum JavaScript-Block aus unserem ersten Beispiel zurückkehren:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus und fügen dann einen Ereignislistener mit `addEventListener` hinzu, sodass beim Klicken auf den Button der `updateName()`-Codeblock (Zeilen 5–8) ausgeführt wird. Der `updateName()`-Codeblock (diese Arten von wiederverwendbaren Codeblöcken werden als "Funktionen" bezeichnet) fragt den Benutzer nach einem neuen Namen und fügt dann diesen Namen in den Button-Text ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen würden, würde es nicht mehr funktionieren — stattdessen würden Sie im [Browser-Entwicklerkonsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einen Fehler wie `Uncaught ReferenceError: Cannot access 'button' before initialization` sehen.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, weshalb wir keinen Ereignislistener darauf hinzufügen können.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler — Sie müssen sicherstellen, dass die in Ihrem Code referenzierten Objekte existieren, bevor Sie mit ihnen arbeiten.

### Interpretierter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form transformieren, bevor der Browser ihn ausführt.
Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden.
Beispielsweise werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Ausführung des Skripts in ein schnelleres, binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Voraus gehandhabt wird.

Es gibt Vorteile bei beiden Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Server-seitiger versus Client-seitiger Code

Sie könnten auch die Begriffe **server-seitiger** und **client-seitiger** Code hören, besonders im Zusammenhang mit Webentwicklung.
Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen, dann von dem Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich über **client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt, und seine Ergebnisse werden heruntergeladen und im Browser angezeigt.
Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamische Websites – Server-seitige Programmierung](/de/docs/Learn/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl client-seitiges JavaScript als auch server-seitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um verschiedene Dinge in unterschiedlichen Umständen anzuzeigen und bei Bedarf neue Inhalte zu generieren.
Server-seitiger Code generiert dynamisch neue Inhalte auf dem Server, z.B. beim Abrufen von Daten aus einer Datenbank, während client-seitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z.B. indem eine neue HTML-Tabelle erstellt, gefüllt mit vom Server angeforderten Daten und dann die Tabelle in einer dem Benutzer angezeigten Webseite angezeigt wird.
Die Bedeutung ist in beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet — sie zeigt immer denselben Inhalt.

## Wie fügen Sie JavaScript auf Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite in ähnlicher Weise wie CSS hinzugefügt.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets und {{htmlelement("style")}}-Elemente zu verwenden, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Zuerst erstellen Sie eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite mit einem klickbaren Button erstellt.
3. Gehen Sie dann zu Ihrem Texteditor und fügen Sie Folgendes am unteren Ende Ihres Body-Bereichs hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Durch das Platzieren des JavaScripts am unteren Ende, stellen wir sicher, dass alle HTML-Elemente geladen werden. (Siehe auch [Script-Ladestrategien](#script-ladestrategien) unten.)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite etwas interessanter zu machen — fügen Sie den folgenden Code direkt unter der Linie "// JavaScript goes here" ein:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz erzeugt und unten platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag eingefügt?
> Haben Sie das JavaScript genau eingegeben wie gezeigt? **JavaScript ist fallempfindlich und sehr heikel, daher müssen Sie die Syntax genau wie angegeben eingeben, ansonsten kann es möglicherweise nicht funktionieren.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie sich sie auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei legen möchten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — achten Sie darauf, dass sie diese .js-Dateierweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag ein (auf diese Weise kann der Browser die Datei früher laden, als wenn es am Ende ist):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie innerhalb von `script.js` das folgende Skript ein:

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

4. Speichern Sie und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module von demselben [Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifizieren. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung besteht darin, dem [Leitfaden zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu folgen. Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bedient, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server starten können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Script-Ladestrategien](#script-ladestrategien) unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise ohnehin einen lokalen HTTP-Server erfordern.
5. Nun funktioniert die Webseite genau wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf das Organisieren Ihres Codes und macht ihn wiederverwendbar über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter lesbar, ohne dass große Skriptblöcke darin enthalten sind.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([sehen Sie sich sie auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Teile von eigentlichem JavaScript-Code stoßen, die sich innerhalb von HTML befinden.
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

**Bitte tun Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut an jedem Button hinzufügen, auf den das JavaScript angewendet werden soll.

### Verwenden von addEventListener stattdessen

Anstelle von JavaScript in Ihr HTML einzuschließen, verwenden Sie eine reine JavaScript-Konstruktion.
Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und mit `addEventListener()` jedem einen Handler zuweisen.
Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal wie viele auf der Seite sind oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei hinzuzufügen.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons, wenn sie geklickt werden, einen Absatz erstellen.
> Ziemlich cool, oder?

### Script-Ladestrategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, auf das Sie etwas anwenden möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTMLs ausgeführt wird:

- In dem oben genannten Beispiel für internes JavaScript wird das Skript-Element am unteren Ende des Bodys des Dokuments platziert und daher erst nach dem Rest des HTML-Bodys geparst ausgeführt.
- Im obigen Beispiel für externes JavaScript wird das Skript-Element im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bevor der Browser überhaupt anfangen kann, das Skript zu laden und zu laden, sodass das Platzieren externer Skripte im Kopf im Allgemeinen besser ist.)
- Wenn Sie dennoch nicht-modulare Skripte im Dokumentenkopf verwenden möchten, die die gesamte Seite blockieren könnten und Fehler verursachen könnten, da sie ausgeführt werden, bevor das HTML geparst wird:

  - Für externe Skripte sollten Sie das `defer` (oder wenn das HTML nicht sofort bereit ist, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignis-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Das ist über den Rahmen des Tutorials an diesem Punkt hinausgehend, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie mit HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und existieren, um Ihren Kollegen Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern können, was Sie gemacht haben).
Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, besonders bei größeren Anwendungen.
Es gibt zwei Arten:

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

So könnten wir beispielsweise das JavaScript unseres letzten Demos mit Kommentaren wie folgt annotieren:

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
> Generell sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in den Rest des Codes auf Ihrer Webseite passt, unter anderem.

JavaScript mag jetzt ein bisschen überwältigend erscheinen, aber keine Sorge — in diesem Kurs werden wir Sie Schritt für Schritt durch das Thema führen, sodass es in der Zukunft Sinn macht.
Im nächsten Artikel werden wir [direkt in die Praxis eintauchen](/de/docs/Learn/JavaScript/First_steps/A_first_splash) und Sie dazu bringen, direkt einzusteigen und Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
