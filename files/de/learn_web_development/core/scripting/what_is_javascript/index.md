---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Einsteigerkurs von MDN! In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie „Was ist es?“ und „Was können Sie damit machen?“. Wir stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

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
          <li>Was Sie mit JavaScript machen können.</li>
          <li>Hinzufügen von JavaScript zu einer Webseite.</li>
          <li>Schreiben von Kommentaren in JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, mit der Sie komplexe Funktionen auf Webseiten implementieren können — jedes Mal, wenn eine Webseite mehr tut, als nur da zu sitzen und statische Informationen anzuzeigen, z. B. aktuelle Inhaltsaktualisierungen, interaktive Karten, animierte 2D-/3D-Grafiken, scrollende Video-Jukeboxen usw., können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Standard-Webtechnologie-Schichtkuchens, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs ausführlicher behandelt werden.

![Die drei Schichten der Standard-Webtechnologien: HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unseren Webinhalt zu strukturieren und zu verstehen, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos auf der Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, mit der wir das Styling auf unseren HTML-Inhalt anwenden, beispielsweise Hintergründe und Schriftarten festlegen und unseren Inhalt in mehreren Spalten anordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, mit der dynamisch aktualisierte Inhalte erstellt, Multimedia gesteuert, Bilder animiert und so ziemlich alles andere durchgeführt werden kann. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel eine Schaltfläche. Wir können sie mit HTML auszeichnen, um ihr Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Schaltfläche zeigt Player 1: Chris ohne Styling](just-html.png)

Dann können wir einige CSS hinzufügen, damit es gut aussieht:

```css live-sample___string-concat-name
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

![Schaltfläche zeigt Player 1: Chris mit Styling](html-and-css.png)

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

JavaScript kann noch viel mehr als das — lassen Sie uns im Detail erkunden, was.

> [!NOTE]
> Bevor Sie weitermachen, warum nicht gleich mit einer Herausforderung von Scrimba in die Praxis einsteigen? Schauen Sie sich [Willkommensnachricht rendern](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben, machen Sie sich keine Sorgen; Sie könnten versuchen, einige Websuchen durchzuführen, um einige Antworten zu finden, oder die Lösung am Ende des Scrims anzusehen.

## Was kann es wirklich tun?

Die Kernsprache des clientseitigen JavaScript besteht aus einigen gängigen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel bitten wir z. B. um die Eingabe eines neuen Namens und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken durchzuführen (im Programmieren als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Player 1: " und verbinden ihn mit der `name`-Variablen, um das vollständige Textlabel zu erstellen, z. B. "Player 1: Chris".
- Code auszuführen, als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Im obigen Beispiel verwendeten wir ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, um zu erkennen, wann auf das Label geklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und noch viel mehr!

Was noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufgebaut ist. Sogenannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Codebausteine, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie tun dasselbe für die Programmierung wie vorgefertigte Möbelbausätze für den Hausbau tun — es ist viel einfacher, vorgefertigte Paneele zu nehmen und sie zu einem Bücherregal zusammenzuschrauben, als das Design selbst auszuarbeiten, das richtige Holz zu finden, alle Paneele auf die richtige Größe und Form zu schneiden, die Schrauben der richtigen Größe zu finden und _dann_ sie zusammenzubauen, um ein Bücherregal zu erstellen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von APIs: 3rd Party APIs werden neben dem Browser angezeigt, Browser APIs befinden sich im Browser](browser.png)

**Browser APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung darstellen oder nützliche komplexe Dinge tun. Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie oben in unserem einfachen Demo-Beispiel zu sehen), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und ihn auf einer Karte einzeichnen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio und Video APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z. B. Audio und Videos direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf einem anderen Computer anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um eine Vorstellung zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht in den Browser eingebaut, und Sie müssen deren Code und Informationen in der Regel irgendwo im Web abrufen. Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, z. B. Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solcher Funktionen zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten und werden in diesem Modul nicht behandelt. Sie können viel mehr darüber in unserem [Client-seitige Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr, das verfügbar ist! Seien Sie jedoch nicht zu aufgeregt. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu erstellen, nachdem Sie JavaScript 24 Stunden lang studiert haben — es gibt viele Grundlagen zu erlernen. Und deshalb sind Sie hier — lassen Sie uns fortfahren!

## Was macht JavaScript auf Ihrer Seite?

Hier beginnen wir tatsächlich damit, uns einige Codes anzusehen, und währenddessen erkunden wir, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns die Geschichte kurz zusammenfassen, was passiert, wenn Sie eine Webseite in einem Browser laden (zum ersten Mal besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browsertab) aus. Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um beim Laden der Seite den Inhalt im Browsertab zu erstellen](execution.png)

Ein sehr häufiger Anwendungsfall von JavaScript ist die dynamische Änderung von HTML und CSS zur Aktualisierung einer Benutzeroberfläche über das Document Object Model API (wie oben erwähnt).

### Browsersicherheit

Jeder Browsertab hat seinen eigenen separaten Container zum Ausführen von Code (diese Container werden technisch als „Execution Environments“ bezeichnet) — dies bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab nicht direkt beeinflussen kann — oder auf einer anderen Website. Dies ist ein gutes Sicherheitsmaß — wenn dies nicht der Fall wäre, könnten Datendiebe beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten auf sichere Weise zwischen verschiedenen Websites/Tabs zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScripts Ausführungsreihenfolge

Wenn der Browser auf einen Block von JavaScript trifft, führt er ihn im Allgemeinen in der Reihenfolge von oben nach unten aus. Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge anordnen. Zum Beispiel, lassen Sie uns zurück zum JavaScript-Block gehen, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Art von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer um einen neuen Namen bittet und diesen Namen in den Text einer Schaltfläche einfügt. Wir speichern dann eine Referenz auf eine Schaltfläche mit `document.querySelector` und fügen einen Ereignislistener hinzu, damit bei einem Klick auf die Schaltfläche die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` umkehren würden, würde der Code nicht mehr funktionieren — stattdessen erhielten Sie einen Fehler in der [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Dies bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignislistener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber beachten Sie vorerst, dass allgemein Elemente definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpreterter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Komplizierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden. Zum Beispiel werden C/C++ in Maschinen

code kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Programm-Quellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript direkt aus diesem aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Kompilierung**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres Binärformat kompiliert, damit er so schnell wie möglich ausgeführt werden kann. Trotzdem wird JavaScript immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vor- und Nachteile für beide Arten von Sprachen, aber darüber werden wir jetzt nicht diskutieren.

### Server-seitiger versus Client-seitiger Code

Sie könnten auch die Begriffe **Server-seitig** und **Client-seitig** hören, insbesondere im Kontext der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen, dann ausgeführt und im Browser angezeigt. In diesem Modul sprechen wir ausdrücklich über **Client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamische Websites - Server-seitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von client-seitigem JavaScript als auch von server-seitigen Sprachen verwendet — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um unter verschiedenen Umständen unterschiedliche Dinge anzuzeigen und neue Inhalte bei Bedarf zu generieren. Server-seitiger Code generiert dynamisch neue Inhalte auf dem Server, z. B. durch Abruf von Daten aus einer Datenbank, während client-seitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z. B. eine neue HTML-Tabelle erstellt, sie mit vom Server angeforderten Daten füllt und dann die Tabelle auf einer Webseite anzeigt, die dem Benutzer gezeigt wird. Die Bedeutung ist in den beiden Kontexten etwas unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierenden Inhalt wird als **statisch** bezeichnet — sie zeigt die ganze Zeit denselben Inhalt an.

## Wie fügen Sie Ihrer Seite JavaScript hinzu?

JavaScript wird auf Ihre HTML-Seite in einer ähnlichen Weise wie CSS angewendet. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas interaktives Tutorial [Einrichten unserer JavaScript-Datei](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> führt durch ein paar verschiedene Methoden, um JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite mit einer anklickbaren Schaltfläche erstellt.
3. Gehen Sie nun in Ihren Texteditor und fügen Sie das folgende am Ende Ihres Bodys hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge, in der er auf der Seite erscheint, geladen und ausgeführt wird. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skript-Ladestrategien](#skript-ladestrategien) unten.)

4. Nun fügen wir etwas JavaScript innerhalb unseres {{htmlelement("script")}}-Elements hinzu, damit die Seite etwas Interessanteres tut — fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass bei einem Klick auf die Schaltfläche ein neuer Absatz erzeugt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht funktioniert zu scheint, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist casesensitiv und sehr heikel, Sie müssen daher die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was ist, wenn wir unser JavaScript in eine externe Datei nehmen möchten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zunächst eine neue Datei im gleichen Verzeichnis wie Ihre Beispieldatei HTML. Nennen Sie es `script.js` — stellen Sie sicher, dass es diese .js-Dateierweiterung hat, da es so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element unten im `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag ein (auf diese Weise kann der Browser die Datei früher laden, als wenn sie am Ende wäre):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf die Schaltfläche keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler sehen, der in etwa so aussieht: `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module aus demselben [Origin](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist es, einen [lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem ausgeführten Serverprogramm und den Dateien `apply-javascript-external.html` und `script.js`, die auf Port 8000 bereitgestellt werden, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skript-Ladestrategien](#skript-ladestrategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, dennoch möglicherweise einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber wir haben jetzt unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und die Wiederverwendbarkeit über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter zu lesen, ohne große Blöcke von Skripten darin zu haben.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Stellen von tatsächlichem JavaScript-Code innerhalb von HTML stoßen können.
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

Sie können diese Version unserer Demo unten ausprobieren.

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

Diese Demo hat genau dieselbe Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn die Schaltfläche gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut in jede Schaltfläche einfügen, auf die das JavaScript angewendet werden soll.

### Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML einzuschließen, verwenden Sie eine reine JavaScript-Konstruktion.
Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Schaltflächen auf einer Seite auszuwählen.
Sie können dann durch die Schaltflächen schleifen und einen Handler für jede mit `addEventListener()` zuweisen.
Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Schaltflächen funktionieren — unabhängig davon, wie viele auf der Seite sind oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nämlich nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Schaltflächen in die Datei einzufügen.
> Wenn Sie die Seite neu laden, sollten Sie feststellen, dass alle Schaltflächen beim Klicken einen Absatz erstellen.
> Nicht schlecht, oder?

### Skript-Ladestrategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), wird Ihr Code nicht funktionieren, wenn das JavaScript geladen und analysiert wird, bevor das HTML, das Sie bearbeiten möchten, geladen ist.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur nach der Analyse des HTML ausgeführt wird:

- Im obigen Beispiel mit internem JavaScript wird das Skriptelement am Ende des Bodys des Dokuments platziert und daher nur ausgeführt, nachdem der restliche HTML-Body analysiert wurde.
- Im obigen Beispiel mit externem JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis das gesamte HTML verarbeitet wurde, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Aber wenn es viele HTML-Inhalte gibt und das Netzwerk langsam ist, kann es lange dauern, bevor der Browser das Skript überhaupt herunterladen und laden kann, sodass es in der Regel besser ist, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht als Modul behandelte Scripts im Kopf des Dokuments verwenden möchten, die die gesamte Seite blockieren könnten, und Fehler verursachen könnten, weil sie ausgeführt werden, bevor das HTML analysiert wurde:
  - Für externe Skripte sollten Sie das `defer` (oder, falls Sie das HTML nicht bereitgestellt haben müssen, das `async`)-Attribut im {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einen [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht jedoch über den Umfang des Tutorials an dieser Stelle hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu gedacht sind, Ihren Entwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht daran erinnern können, was Sie getan haben). Kommentare sind äußerst nützlich und Sie sollten sie oft verwenden, insbesondere bei größeren Anwendungen. Es gibt zwei Arten:

- Ein einzeiliger Kommentar wird nach einem doppelten Schrägstrich (`//`) geschrieben, z. B.

  ```js
  // I am a comment
  ```

- Ein mehrzeiliger Kommentar wird zwischen den Zeichenfolgen `/*` und `*/` geschrieben, z. B.

  ```js
  /*
    I am also
    a comment
  */
  ```

So könnten wir beispielsweise unser letztes Demo-JavaScript mit Kommentaren wie folgt versehen:

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
> Im Allgemeinen sind mehr Kommentare in der Regel besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript.
Wir haben mit Theorie begonnen, um Ihnen den Einstieg darin zu erleichtern, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit machen können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag im Moment etwas entmutigend wirken, aber keine Sorge — in diesem Kurs werden wir Sie durch einfache Schritte führen, die in Zukunft sinnvoll sein werden.
Im nächsten Artikel werden wir direkt in die Praxis einsteigen und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
