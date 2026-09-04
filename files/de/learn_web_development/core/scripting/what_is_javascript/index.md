---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen zum MDN-Einsteigerkurs für JavaScript!
In diesem Artikel betrachten wir JavaScript auf einer höheren Ebene und beantworten Fragen wie "Was ist es?" und "Was kann man damit machen?", und stellen sicher, dass Sie sich mit dem Zweck von JavaScript wohlfühlen.

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
          <li>Komentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren — jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen — aktuelle Inhalt Updates anzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen, usw. — können Sie sicher sein, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Ebene des Schichtkuchens aus Standard-Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir im Lernbereich bereits ausführlich behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu geben, wie zum Beispiel beim Definieren von Absätzen, Überschriften und Datentabellen, oder beim Einbetten von Bildern und Videos in die Seite.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unserem HTML-Inhalt ein Styling zu verleihen, wie zum Beispiel das Setzen von Hintergrundfarben und Schriftarten und das Layout unseres Inhalts in mehreren Spalten.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die Ihnen ermöglicht, Inhalte dynamisch zu aktualisieren, Multimedia zu steuern, Bilder zu animieren und fast alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML strukturieren und ihm einen Zweck geben:

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

Dann können wir einige CSS hinzufügen, um ihn ansprechend zu gestalten:

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

Und schließlich können wir JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Versuchen Sie, auf das Textlabel zu klicken, einen Namen in das sich öffnende Dialogfenster einzutragen und auf die Schaltfläche OK zu drücken.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr — erkunden wir dies nun detaillierter.

> [!NOTE]
> Bevor Sie weitermachen, warum springen Sie nicht mit einer Herausforderung von Scrimba an dieser frühen Stelle ein und probieren Sie es aus? Schauen Sie sich [Willkommensnachricht rendern](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an. Wenn Sie nicht wissen, wie Sie diesen Code schreiben, machen Sie sich keine Sorgen; Sie können versuchen, einige Websuchen durchzuführen, um Antworten zu finden, oder die Lösung am Ende des Scrims ansehen.

## Was kann es wirklich tun?

Die Kern-Client-seitige JavaScript-Sprache besteht aus einigen allgemeinen Programmiermerkmalen, die es Ihnen ermöglichen, Dinge zu tun wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel beispielsweise bitten wir um die Eingabe eines neuen Namens und speichern diesen Namen in einer Variablen namens `name`.
- Operationen auf Textstücken durchzuführen (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Spieler 1: " und fügen ihn mit der `name`-Variable zusammen, um das vollständige Textlabel zu erstellen, z.B. "Spieler 1: Chris".
- Code auszuführen, wenn bestimmte Ereignisse auf einer Webseite eintreten. Wir haben in unserem obigen Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis genutzt, um zu erkennen, wann die Schaltfläche geklickt wird, und anschließend den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch spannender ist, ist die Funktionalität, die auf der Client-seitigen JavaScript-Sprache aufgebaut ist. Die sogenannten **Application Programming Interfaces (APIs)** geben Ihnen zusätzliche Superkräfte, um sie in Ihrem JavaScript-Code zu verwenden.

APIs sind fertige Sätze von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwierig oder unmöglich zu implementieren wären. Sie machen dasselbe für die Programmierung, das fertige Bausätze für den Möbelbau tun — es ist viel einfacher, bereits zugeschnittene Platten zu nehmen und sie zusammenzuschrauben, um ein Regal zu bauen, als das Design selbst auszutüfteln, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die passenden Schrauben zu finden und _dann_ sie zu einem Regal zusammenzubauen.

Sie fallen allgemein in zwei Kategorien.

![Zwei Kategorien von APIs; Drittanbieter-APIs werden neben dem Browser gezeigt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser integriert und können Daten aus der umgebenden Computerumgebung auslesen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Styles auf Ihre Seite anzuwenden, usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir oben in unserem einfachen Demo gesehen haben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. Das ist, wie [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen kann.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Leute machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf einem anderen Computer anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um die Idee zu verstehen).

**Drittanbieter-APIs** sind standardmäßig nicht in den Browser integriert, und Sie müssen in der Regel deren Code und Informationen von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://bsky.network/) ermöglicht es Ihnen, z.B. Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionen zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können viel mehr darüber in unserem [Clientseitige Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr zu entdecken! Allerdings sollten Sie nicht gleich übermäßig aufgeregt sein. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram nach 24 Stunden JavaScript-Studium zu bauen — es gibt viele Grundlagen zu behandeln. Und genau deshalb sind Sie hier — lasst uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier beginnen wir tatsächlich, uns etwas Code anzusehen, und während wir dies tun, erkunden wir, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (das erste Mal besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung aus (dem Browser-Tab). Dies ist wie eine Fabrik, die Rohmaterialien aufnimmt (den Code) und ein Produkt ausgibt (die Webseite).

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erzeugen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Einsatz von JavaScript ist das dynamische Ändern von HTML und CSS, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat sein eigenes separates Bucket für die Ausführung von Code (diese Buckets werden in technischen Begriffen "Ausführungsumgebungen" genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab nicht direkt beeinflussen kann — oder auf einer anderen Website. Dies ist ein gutes Sicherheitsmaß — wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht abdecken werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen JavaScript-Block trifft, führt er ihn im Allgemeinen in Reihenfolge von oben nach unten aus. Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie die Dinge anordnen. Zum Beispiel, lassen Sie uns zu dem JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), welcher den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text einer Schaltfläche einfügt. Wir speichern dann eine Referenz zu einer Schaltfläche mit `document.querySelector` und fügen einen Ereignislistener mit `addEventListener` hinzu, so dass bei Klick auf die Schaltfläche die Funktion `updateName()` ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen, würde der Code nicht mehr funktionieren — stattdessen würden Sie eine Fehlermeldung im [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, also können wir keinen Ereignislistener hinzufügen.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber für den Moment, bedenken Sie, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext des Programmierens hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Komplierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden. Zum Beispiel werden C/C++-Programme in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichte interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres, binäres Format kompiliert, so dass er so schnell wie möglich ausgeführt werden kann. Allerdings wird JavaScript immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden diese jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitig** und **clientseitig** hören, insbesondere im Kontext der Webentwicklung. Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angesehen wird, wird der clientseitige Code der Seite heruntergeladen, dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden dessen Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)-Thema erfahren.

### Dynamischer versus statischer Code

Der Begriff **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — er bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um verschiedene Dinge unter verschiedenen Umständen zu zeigen, und neue Inhalte bei Bedarf zu generieren. Serverseitiger Code generiert dynamisch neue Inhalte auf dem Server, z.B. durch Abrufen von Daten aus einer Datenbank, während clientseitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z.B. durch Erstellen einer neuen HTML-Tabelle, diese mit vom Server angeforderten Daten füllt und die Tabelle dann auf einer Webseite anzeigt, die dem Benutzer gezeigt wird. Die Bedeutung ist leicht unterschiedlich in den beiden Kontexten, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt immer denselben Inhalt.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird ähnlich wie CSS auf Ihre HTML-Seite angewendet. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie dies funktioniert.

> [!NOTE]
> Das interaktive Tutorial von Scrimba [Einrichten unserer JavaScript-Datei](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> führt durch einige verschiedene Möglichkeiten, JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Machen Sie als erstes eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem Verzeichnis an einem geeigneten Ort.
2. Öffnen Sie die Datei in Ihrem Webbrowser und Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die eine klickbare Schaltfläche enthält.
3. Gehen Sie dann zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Körpers hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am unteren Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skript-Ladestrategien](#skript-ladestrategien) unten.)

4. Als nächstes fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf die Schaltfläche ein neuer Absatz erzeugt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitiv und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie angezeigt wird, andernfalls funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Dies funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei setzen wollten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre HTML-Beispieldatei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js Dateiendung hat, denn so wird sie als JavaScript erkannt.
2. Entfernen Sie Ihr derzeitiges {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das Folgende direkt vor dem schließenden `</head>`-Tag hinzu (auf diese Weise kann der Browser die Datei früher laden, als wenn sie am Ende ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf die Schaltfläche keine Auswirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler ähnlich `Cross-origin request blocked` sehen. Das liegt daran, dass ähnlich wie viele externe Ressourcen, JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden müssen, und `file://` URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unser empfohlener Lösung ist es, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem Server-Programm, das die `apply-javascript-external.html` und `script.js` Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skript-Ladestrategien](#skript-ladestrategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie vorher, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache im Hinblick auf die Organisation Ihres Codes und macht ihn über mehrere HTML-Dateien hinweg wiederverwendbar.
   Außerdem ist das HTML ohne große Skriptblöcke leichter lesbar.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ansehen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf JavaScript-Code stoßen, der sich direkt im HTML befindet. Es könnte so aussehen:

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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen zwei Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn die Schaltfläche gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist eine schlechte Praxis, Ihr HTML mit JavaScript zu belasten, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jeder Schaltfläche einfügen, auf die das JavaScript angewendet werden soll.

### Verwenden von addEventListener anstelle

Anstatt JavaScript in Ihr HTML einzufügen, verwenden您 einen reinen JavaScript-Konstrukt. Die `querySelectorAll()`-Funktion ermöglicht Ihnen, alle Schaltflächen auf einer Seite auszuwählen. Sie können dann durch die Schaltflächen iterieren und mit `addEventListener()` einen Handler für jede zuweisen. Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Schaltflächen funktionieren — egal wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie einige weitere Schaltflächen in die Datei ein. Wenn Sie neu laden, sollte festgestellt werden, dass alle Schaltflächen beim Klicken einen Absatz erzeugen. Toll, oder?

### Skript-Ladestrategien

Alles HTML auf einer Seite wird in der Reihenfolge geladen, in der es erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), wird Ihr Code nicht funktionieren, wenn das JavaScript geladen und analysiert wird, bevor das HTML, das Sie manipulieren möchten, geladen ist.

Es gibt einige Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML analysiert wurde:

- Im obigen Beispiel mit internem JavaScript wird das Script-Element am Ende des Körpers des Dokuments platziert und daher nur ausgeführt, nachdem der Rest des HTML-Körpers analysiert wurde.
- Im obigen Beispiel mit externem JavaScript wird das Script-Element im Kopf des Dokuments platziert, bevor der HTML-Körper analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am unteren Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit dauern, bevor der Browser überhaupt beginnt, das Skript zu laden, daher ist das Platzieren externer Skripte im Kopf normalerweise besser.)
- Wenn Sie immer noch nicht Modul-Skripte im Kopf des Dokuments verwenden möchten, was die gesamte Seite vom Anzeigen blockieren könnte und Fehler verursachen könnte, weil es vor dem Parsen des HTML ausgeführt wird:
  - Für externe Skripte sollten Sie das `defer` (oder falls das HTML nicht bereit sein muss, das `async`) Attribut im {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignislistener](/de/docs/Web/API/Document/DOMContentLoaded_event) einfügen.

  Dies ist über den Umfang des Tutorials hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, Sie müssen dies nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu dienen, Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie getan haben). Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, insbesondere für größere Anwendungen. Es gibt zwei Arten:

- Einzeilige Kommentare werden nach einem Doppelschrägstrich (`//`) geschrieben, z. B.

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

So könnten wir zum Beispiel das JavaScript des letzten Demos mit Kommentaren wie folgt annotieren:

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

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript. Wir haben mit reiner Theorie begonnen, um Ihnen eine Vorstellung davon zu geben, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag jetzt etwas entmutigend erscheinen, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten durch das Ganze führen, das wird in der Zukunft sinnvoll sein. Im nächsten Artikel werden wir direkt in die Praxis einsteigen und Sie dazu bringen, von Anfang an Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
