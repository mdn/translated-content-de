---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen im MDN-Anfängerkurs für JavaScript!
In diesem Artikel werden wir JavaScript auf einer hohen Ebene betrachten, Fragen wie „Was ist es?“ und „Was kann man damit machen?“ beantworten und sicherstellen, dass Sie sich mit dem Zweck von JavaScript vertraut fühlen.

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
          <li>Was ist JavaScript und wie fügt es sich in eine Website ein.</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare innerhalb von JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – jedes Mal, wenn eine Webseite mehr macht, als nur dort zu sitzen und statische Informationen für Sie anzuzeigen – aktuelle Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. zu zeigen – können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Schicht des Schichtkuchens standardmäßiger Webtechnologien, von denen sich zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten der standardmäßigen Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Markup-Sprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unser HTML-Inhalte stilistisch zu gestalten, beispielsweise Hintergrundfarben und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, Inhalte dynamisch zu aktualisieren, Multimedia zu steuern, Bilder zu animieren und praktisch alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir einen Button als Beispiel. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

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

Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu sehen und zu bearbeiten.
Versuchen Sie, auf die Textbeschriftung zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr – lassen Sie uns im Detail erkunden, was möglich ist.

## Was kann es wirklich tun?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmiermerkmalen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel bitten wir zum Beispiel darum, einen neuen Namen einzugeben, und speichern diesen Namen dann in einer Variablen namens `name`.
- Operationen an Textstücken (im Programmieren als „Strings“ bekannt) auszuführen. Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn mit der `name`-Variable zusammen, um die vollständige Textbeschriftung zu erstellen, z.B. "Player 1: Chris".
- Code als Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten, auszuführen. Wir haben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem obigen Beispiel verwendet, um zu erkennen, wann auf das Label geklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch aufregender ist jedoch die auf der clientseitigen JavaScript-Sprache aufgebaute Funktionalität. So genannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind vorgefertigte Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich umzusetzen wären.
Sie tun für die Programmierung dasselbe, was vorgefertigte Möbel-Bausätze für das Hausbauen tun – es ist viel einfacher, fertig geschnittene Paneele zu nehmen und zusammenzuschrauben, um ein Bücherregal zu bauen, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die passenden Schrauben zu finden und _dann_ alles zusammenzusetzen, um ein Bücherregal zu bauen.

APIs fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; 3rd Party APIs sind neben dem Browser, und Browser APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus der umgebenden Computerumgebung freigeben oder nützliche komplexe Aufgaben ausführen. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML dynamisch zu erstellen, zu entfernen und zu ändern, neue Stile auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird (wie wir es oben in unserem einfachen Demo-Beispiel gesehen haben), ist das DOM im Einsatz.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API)- und [WebGL](/de/docs/Web/API/WebGL_API)-APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Web-Technologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webkamera zu greifen und es auf dem Computer einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert und Sie müssen in der Regel deren Code und Informationen irgendwo aus dem Internet abrufen. Beispiel:

- Die [Bluesky API](https://docs.bsky.app/) ermöglicht es Ihnen, Dinge wie Ihre neuesten Posts auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und die [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und ähnliche Funktionen zu nutzen.

> [!NOTE]
> Diese APIs sind fortgeschritten, und wir werden keine von ihnen in diesem Modul behandeln. Weitere Informationen hierzu finden Sie in unserem [Modul für clientseitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs).

Es gibt noch viel mehr! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram nach 24 Stunden Studium von JavaScript zu bauen – es gibt eine Menge Grundlagen, die zuerst behandelt werden müssen. Und deshalb sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir uns tatsächlich einige Codes ansehen und dabei untersuchen, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem Artikel [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung aus (dem Browser-Tab). Dies ist wie eine Fabrik, die Rohmaterialien (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um beim Laden der Seite den Inhalt im Browser-Tab zu erstellen](execution.png)

Eine sehr häufige Verwendung von JavaScript ist das dynamische Ändern von HTML und CSS, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browser-Sicherheit

Jeder Browser-Tab hat seinen eigenen separaten Bucket zum Ausführen von Code (diese Buckets werden in technischen Begriffen „Ausführungsumgebungen“ genannt) – das bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Webseite nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechten Dinge tun.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten sicher zwischen verschiedenen Websites/Tabs zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln.

### JavaScript-Ablaufromme

Wenn der Browser auf einen JavaScript-Block stößt, wird dieser im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen.
Nehmen wir zum Beispiel den JavaScript-Block, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Art von wiederverwendbaren Codeblöcken wird als **Funktionen** bezeichnet), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen einen Ereignislistener mit `addEventListener` hinzu, damit beim Klicken auf den Button die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen würden, würde der Code nicht mehr funktionieren – stattdessen erhalten Sie einen Fehler im [Entwicklerkonsolenbrowser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) – `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Ereignislistener daran anhängen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber für den Moment sollten Sie bedenken, dass Objekte im Allgemeinen definiert werden müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretiert gegen kompilierten Code

Vielleicht hören Sie die Begriffe **interpretierter** und **kompilierter** Code im Zusammenhang mit der Programmierung.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Codeausführung wird sofort zurückgegeben.
Man muss den Code nicht vorab in eine andere Form transformieren, bevor ihn der Browser ausführt.
Der Code wird in seiner programmiererfreundlichen Textform empfangen und direkt aus dieser verarbeitet.

Kompilierte Sprachen hingegen werden vor dem Ausführen vom Computer in eine andere Form transformiert (kompiliert).
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Quellcode des Programms erzeugt wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Compilation**, um die Leistung zu verbessern; der JavaScript-Quellcode wird beim Ausführen des Skripts in ein schnelleres, binäres Format kompiliert, damit er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Vorfeld erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger gegen clientseitiger Code

Vielleicht hören Sie auch die Begriffe **serverseitiger** und **clientseitiger** Code, besonders im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird – wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann vom Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden die Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung – Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer gegen statischen Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben – es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um in unterschiedlichen Situationen verschiedene Dinge anzuzeigen und bei Bedarf neue Inhalte zu generieren.
Serverseitiger Code generiert dynamisch neue Inhalte auf dem Server, z.B. indem er Daten aus einer Datenbank abruft, während clientseitiges JavaScript dynamisch neue Inhalte im Browser des Clients generiert, z.B. indem es eine neue HTML-Tabelle erstellt, sie mit vom Server angeforderten Daten füllt und dann die Tabelle auf einer dem Benutzer angezeigten Webseite anzeigt.
Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamische Aktualisierung von Inhalten wird als **statisch** bezeichnet – sie zeigt immer denselben Inhalt an.

## Wie fügt man JavaScript zu Ihrer Seite hinzu?

JavaScript wird auf Ihre HTML-Seite in ähnlicher Weise wie CSS angewendet.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt des HTML – das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Machen Sie zuerst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite mit einem klickbaren Button erstellt.
3. Gehen Sie nun zu Ihrem Texteditor und fügen Sie Folgendes am Ende Ihres Körpers ein – direkt vor Ihrem abschließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Script-Ladestrategien](#script-ladestrategien) unten.)

4. Nun fügen wir ein wenig JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen – fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser – jetzt sollten Sie sehen, dass durch Klicken auf den Button ein neuer Absatz erstellt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht funktioniert, gehen Sie die Schritte erneut durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie gezeigt? **JavaScript ist case-sensitiv und sehr pingelig, also müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) sehen ([siehe auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was ist, wenn wir unser JavaScript in einer externen Datei speichern möchten? Lassen Sie es uns jetzt erforschen.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` – stellen Sie sicher, dass sie diese Dateierweiterung .js hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Ende des `</body>` und fügen Sie das folgende direkt vor dem abschließenden `</head>`-Tag ein (damit der Browser die Datei früher laden kann als wenn sie unten ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen auch JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifizieren. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist das [Einrichten eines lokalen Testservers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Script-Ladestrategien](#script-ladestrategien) unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise sowieso einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und dessen Wiederverwendbarkeit über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML leichter lesbar ohne riesige Script-Abschnitte darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([siehe auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf tatsächliche JavaScript-Codefragmente stoßen, die innerhalb von HTML leben.
Es könnte ungefähr so aussehen:

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

**Bitte machen Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient – Sie müssten das `onclick="createParagraph()"`-Attribut zu jedem Button hinzufügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle

Anstatt JavaScript in Ihr HTML einzuschließen, verwenden Sie eine reine JavaScript-Konstruktion.
Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dazu wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag ein wenig länger aussehen als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren – egal wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und einige weitere Buttons in die Datei einzufügen.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erstellen.
> Hübsch, oder?

### Script-Ladestrategien

Der gesamte HTML-Inhalt auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und verarbeitet wird, bevor das HTML verarbeitet wird, das Sie bearbeiten möchten.

Es gibt einige unterschiedliche Strategien, um sicherzustellen, dass Ihr JavaScript erst nach dem Parsen des HTMLs ausgeführt wird:

- Im obigen Beispiel für internes JavaScript wird das Script-Element am Ende des Körper-Dokuments platziert und daher erst ausgeführt, nachdem der gesamte HTML-Körper geparst wurde.
- Im obigen Beispiel für externes JavaScript wird das Script-Element im Kopf des Dokuments platziert, bevor der HTML-Körper geparst wird. Aber weil wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass der gesamte HTML-Inhalt verarbeitet wird, bevor er JavaScript-Module ausführt. (Sie könnten auch externe Scripts am Ende des Körpers platzieren. Aber wenn es eine Menge HTML gibt und das Netzwerk langsam ist, kann es lange dauern, bis der Browser überhaupt beginnen kann, das Script abzurufen und zu laden, daher ist das Platzieren externer Scripts im Kopf des Dokuments normalerweise besser.)
- Wenn Sie immer noch Nicht-Modul-Scripts im Dokumentenkopf verwenden möchten, die die gesamte Seite blockieren können und Fehler verursachen können, weil sie ausgeführt werden, bevor das HTML geparst wird:

  - Für externe Scripts sollten Sie das `defer` (oder wenn das HTML nicht bereit sein muss, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Scripts sollten Sie den Code in einen [`DOMContentLoaded`-Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies geht über den Rahmen des Tutorials hinaus, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden, um Ihren Kollegen Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie in sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern, was Sie getan haben).
Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, besonders bei größeren Anwendungen.
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

So könnten wir zum Beispiel das JavaScript unseres letzten Demos mit Kommentaren annotieren:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie viele Kommentare hinzufügen, um Variablen zu erklären (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihre ersten Schritte in die Welt von JavaScript.
Wir haben mit reiner Theorie begonnen, um Ihnen einen Überblick darüber zu geben, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit machen können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in Ihr restliches Code auf Ihrer Website passt, unter anderem Dinge.

JavaScript mag jetzt etwas entmutigend erscheinen, aber keine Sorge – in diesem Kurs werden wir Sie in einfachen Schritten durch das Ganze führen, das Sie auf dem weiteren Weg nachvollziehen können.
Im nächsten Artikel werden wir direkt praktisch werden und Sie dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
