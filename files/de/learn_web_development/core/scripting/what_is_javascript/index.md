---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen im MDN-Anfängerkurs für JavaScript! In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie „Was ist es?“ und „Was kann man damit machen?“ und stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript und wie fügt es sich in eine Website ein?</li>
          <li>Was kann man mit JavaScript machen?</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Schreiben von Kommentaren innerhalb von JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten umzusetzen – jedes Mal, wenn eine Webseite mehr macht, als nur statische Informationen anzuzeigen – zeitnahe Inhaltsaktualisierungen, interaktive Karten, animierte 2D/3D-Grafiken, Videojukeboxen mit Scrollfunktion usw. – können Sie wetten, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Standard-Webtechnologien-Layer-Cakes, zwei davon ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) haben wir in anderen Teilen des Lernbereichs ausführlicher behandelt.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Markup-Sprache, die wir verwenden, um unseren Webinhalt zu strukturieren und Bedeutung zu verleihen, zum Beispiel Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos auf der Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um Styling auf unseren HTML-Inhalt anzuwenden, wie zum Beispiel Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten zu layouten.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und nahezu alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir einen Button als Beispiel. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button zeigt Player 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn schön aussehen zu lassen:

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

![Button zeigt Player 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf „Play“ klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten. Versuchen Sie, auf das Textlabel zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr – lassen Sie uns genauer erforschen, was.

## Was kann es wirklich leisten?

Die Kern-Clientseitige JavaScript-Sprache besteht aus einigen gängigen Programmierfunktionen, die es Ihnen erlauben:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel bitten wir zum Beispiel um die Eingabe eines neuen Namens und speichern diesen dann in einer Variablen namens `name`.
- Operationen an Textstücken (bekannt als "Strings" in der Programmierung) durchzuführen. Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn zur `name`-Variablen hinzu, um das vollständige Textlabel zu erstellen, z.B. „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse auf einer Webseite auszuführen. Wir haben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem Beispiel oben verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was noch aufregender ist, ist jedoch die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind gebrauchsfertige Sets von Codebausteinen, mit denen ein Entwickler Programme implementieren kann, die sonst schwer oder unmöglich zu implementieren wären. Sie tun dasselbe für das Programmieren, was fertige Möbel-Bausätze für den Hausbau tun – es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu machen, als das Design selbst herauszuarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die passenden Schrauben zu finden und _dann_ zusammenzubauen, um ein Bücherregal zu machen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; APIs von Drittanbietern sind neben dem Browser zu sehen und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihren Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung freigeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) erlaubt es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie oben gesehen in unserem einfachen Demo), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. Auf diese Weise kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Menschen tun erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio and Video APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam aufzunehmen und auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu verstehen).

**APIs von Drittanbietern** sind standardmäßig nicht im Browser enthalten, und Sie müssen ihren Code und ihre Informationen im Allgemeinen von irgendwo im Web abrufen. Zum Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Beiträge auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden in diesem Modul keine davon abdecken. Sie können viel mehr darüber in unserem [Clientseitige Web-APIs-Modul](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr zu entdecken! Lassen Sie sich jedoch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram nach 24 Stunden JavaScript-Studium zu erstellen – es gibt viele Grundlagen, die zuerst abgedeckt werden müssen. Und genau deshalb sind Sie hier – lasst uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich beginnen, ein bisschen Code zu betrachten, und dabei erkunden, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Erinnern wir uns kurz an die Geschichte, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) Artikel behandelt). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Gebrauch von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jede Browser-Registerkarte hat ihren eigenen separaten Bereich zum Ausführen von Code (diese Bereiche werden in technischen Begriffen als "Ausführungsumgebungen" bezeichnet) – das bedeutet, dass in den meisten Fällen der Code in jeder Registerkarte vollständig separat ausgeführt wird und der Code in einer Registerkarte den Code in einer anderen Registerkarte – oder auf einer anderen Website – nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen und solche schlechten Dinge zu tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten sicher zwischen verschiedenen Websites/Registerkarten zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen JavaScript-Block stößt, wird dieser im Allgemeinen der Reihe nach ausgeführt, von oben nach unten. Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie die Dinge setzen. Lassen Sie uns zum Beispiel zu dem Block von JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zunächst einen Codeblock namens `updateName()` (diese Art von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen in den Text eines Buttons einfügt. Anschließend speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Event-Listener hinzu, damit beim Klicken auf den Button die Funktion `updateName()` ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` tauschen würden, würde der Code nicht mehr funktionieren – stattdessen würden Sie einen Fehler in der [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten – `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, daher können wir ihm keinen Event-Listener hinzufügen.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten läuft, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber denken Sie jetzt daran, dass Elemente im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretiert versus kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt von dort verarbeitet.

Kompilierte Sprachen andererseits werden in eine andere Form umgewandelt (kompiliert), bevor sie von der Maschine ausgeführt werden. Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann von der Maschine ausgeführt wird. Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Quellcode des Programms generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus aus. Technisch gesehen verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Compiling** zur Leistungsverbesserung; der JavaScript-Quellcode wird in ein schnelleres, binäres Format kompiliert, während das Skript verwendet wird, damit es so schnell wie möglich ausgeführt werden kann. JavaScript wird jedoch immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht vor der Zeit erfolgt.

Es gibt Vorteile für beide Sprachtypen, aber wir werden sie jetzt nicht diskutieren.

### Server-seitiger versus Client-seitiger Code

Sie könnten auch die Begriffe **server-seitiger** und **client-seitiger** Code hören, insbesondere im Kontext der Webentwicklung. Client-seitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der client-seitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir explizit über **client-seitiges JavaScript**.

Server-seitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte server-seitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript! JavaScript kann auch als server-seitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung – Sie können mehr über server-seitiges JavaScript in unserem Thema [Dynamische Webseiten – Server-seitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl client-seitiges JavaScript als auch server-seitige Sprachen zu beschreiben – es bezieht sich auf die Möglichkeit, die Anzeige einer Webseite/App zu aktualisieren, um unterschiedliche Dinge unter verschiedenen Umständen zu zeigen und bei Bedarf neuen Inhalt zu generieren. Server-seitiger Code generiert dynamisch neuen Inhalt auf dem Server, z.B. durch Abrufen von Daten aus einer Datenbank, während client-seitiges JavaScript dynamisch neuen Inhalt im Browser des Clients generiert, z.B. durch Erstellen einer neuen HTML-Tabelle, Füllen dieser mit Daten, die vom Server angefordert wurden, und anschließendes Anzeigen der Tabelle in einer Webseite, die dem Benutzer angezeigt wird. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (server-seitig und client-seitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierenden Inhalt wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügt man JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf Ihre HTML-Seite in ähnlicher Weise wie CSS angewendet. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML – das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Machen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie jetzt zu Ihrem Texteditor und fügen Sie die folgende Zeile am Ende Ihres Bodys hinzu – kurz vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Durch das Platzieren von JavaScript am Ende stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Nun fügen wir etwas JavaScript innerhalb unseres {{htmlelement("script")}}-Elements hinzu, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz generiert und unten platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte erneut durch und prüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Ausgangscodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es angezeigt wird? **JavaScript ist case-sensitiv und sehr anspruchsvoll, daher müssen Sie die Syntax genau so eingeben, wie es gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) (auch [live ansehen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) sehen.

### Externes JavaScript

Das funktioniert großartig, aber was ist, wenn wir unser JavaScript in eine externe Datei einfügen möchten? Lassen Sie uns dies nun erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie diese .js-Dateinamenserweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am Ende des `</body>` und fügen Sie das folgende kurz vor dem Schluss-`</head>`-Tag hinzu (so kann der Browser die Datei früher laden, als wenn sie am Ende ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler sehen, der in etwa `Cross-origin request blocked` lautet. Das liegt daran, dass JavaScript-Module wie viele externe Ressourcen von [derselben Herkunft](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifizieren. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bedient, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Skriptlade-Strategien](#skriptlade-strategien) unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Webseite genau so wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Das ist in der Regel eine gute Sache in Bezug auf die Organisation Ihres Codes und macht es wiederverwendbar über mehrere HTML-Dateien hinaus. Außerdem ist das HTML einfacher zu lesen, ohne große Mengen an Skript.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) (auch [live ansehen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) sehen.

### Inline JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Codebits von echtem JavaScript stoßen, die innerhalb von HTML leben. Es könnte so aussehen:

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

Diese Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"`-Attribut in jeden Button einfügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle

Anstatt JavaScript in Ihrem HTML zu haben, verwenden Sie ein reines JavaScript-Konstrukt. Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Dann können Sie die Buttons durchlaufen und jedem mit `addEventListener()` einen Handler zuweisen. Der Code dafür sieht folgendermaßen aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Das mag etwas länger als das `onclick`-Attribut sein, aber es wird für alle Buttons funktionieren – egal wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie ein paar weitere Buttons in die Datei ein. Wenn Sie aktualisieren, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erzeugen. Toll, oder?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie verändern möchten, geladen ist.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript erst ausgeführt wird, nachdem das HTML geparst wurde:

- Im oben genannten Beispiel für internes JavaScript wird das Skriptelement am Ende des Körpers des Dokuments platziert und daher erst nach dem Rest des HTML-Körpers ausgeführt.
- Im oben genannten Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Körper geparst wird. Aber da wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es lange dauern, bis der Browser mit dem Abrufen und Laden des Skripts beginnen kann, daher ist das Platzieren externer Skripte im Kopf in der Regel besser.)
- Wenn Sie immer noch nicht-moduläre Skripte im Dokumentenkopf verwenden möchten, die die gesamte Seite am Anzeigen hindern und Fehler verursachen könnten, weil sie vor dem Parsen des HTML ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer`-Attribut (oder wenn Sie nicht auf das HTML warten müssen, das `async`-Attribut) auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einen [`DOMContentLoaded`-Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einschließen.

  Dies liegt außerhalb des Geltungsbereichs des Tutorials an dieser Stelle, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es auch möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und existieren, um Ihren Mitentwicklern Anweisungen darüber zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie getan haben). Kommentare sind sehr nützlich und sollten häufig verwendet werden, insbesondere bei größeren Anwendungen. Es gibt zwei Arten:

- Einzeilenkommentare werden nach einem doppelten Schrägstrich (`//`) geschrieben, z. B.

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

So könnten wir zum Beispiel das letzte JavaScript-Demo mit Kommentaren versehen:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript. Wir haben nur mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit machen können. Dabei haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenhängt, unter anderem.

JavaScript mag jetzt noch etwas überwältigend erscheinen, aber keine Sorge – in diesem Kurs werden wir es Ihnen in einfachen Schritten näherbringen, die in Zukunft Sinn ergeben werden. Im nächsten Artikel werden wir direkt in die Praxis eintauchen, Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
