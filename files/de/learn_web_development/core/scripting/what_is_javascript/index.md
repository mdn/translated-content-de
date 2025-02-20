---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim JavaScript-Kurs für Anfänger auf MDN!
In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie "Was ist das?" und "Was kann man damit machen?" und sorgen dafür, dass Sie sich mit dem Zweck von JavaScript vertraut fühlen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden Prinzipien von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ist JavaScript und wie passt es in eine Website?</li>
          <li>Was kann man mit JavaScript machen?</li>
          <li>JavaScript zu einer Webseite hinzufügen.</li>
          <li>Kommentare in JavaScript schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skript- oder Programmiersprache, mit der Sie komplexe Funktionen auf Webseiten implementieren können — immer wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen — z.B. zeitnahe Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D-/3D-Grafiken, scrollende Video-Jukeboxen usw. — können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Schicht des Schichtkuchens der Standard-Webtechnologien, von denen zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) wir in anderen Teilen des Lernbereichs ausführlicher behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, z.B. Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, die wir verwenden, um unseren HTML-Inhalt zu gestalten, z.B. um Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierende Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und fast alles andere zu tun. (Okay, nicht alles, aber es ist erstaunlich, was man mit ein paar Zeilen JavaScript-Code erreichen kann.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html live-sample___string-concat-name
<button type="button">Player 1: Chris</button>
```

![Button, der Player 1: Chris ohne Stil zeigt](just-html.png)

Dann können wir etwas CSS hinzufügen, damit er gut aussieht:

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

![Button, der Player 1: Chris mit Stil zeigt](html-and-css.png)

Und schließlich können wir etwas JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Sie können auf "Play" klicken, um das Beispiel im MDN Playground anzusehen und zu bearbeiten.
Versuchen Sie, auf das Textlabel zu klicken, um zu sehen, was passiert.

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr — lassen Sie uns im Detail erkunden, was möglich ist.

## Was kann es wirklich tun?

Die Kernsprache von clientseitigem JavaScript besteht aus einigen allgemeinen Programmierfunktionen, die Ihnen erlauben, Dinge wie Folgendes zu tun:

- Nützliche Werte in Variablen speichern. Im obigen Beispiel bitten wir z.B. darum, einen neuen Namen einzugeben und speichern diesen Namen in einer Variablen namens `name`.
- Operationen auf Textstücken (bekannt als "Strings" in der Programmierung). Im obigen Beispiel nehmen wir den String "Player 1: " und verbinden ihn mit der Variablen `name`, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code ausführen in Reaktion auf bestimmte Ereignisse, die auf einer Webseite auftreten. Im obigen Beispiel haben wir ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis verwendet, um zu erkennen, wenn das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was noch aufregender ist, ist die Funktionalität, die auf der clientseitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Sets von Code-Bausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich umzusetzen wären.
Sie tun für die Programmierung dasselbe wie fertige Möbelbausätze für den Hausbau — es ist viel einfacher, vorgefertigte Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu erstellen, als das Design selbst herauszufinden, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die richtigen Schrauben zu finden und _dann_ sie zusammenzusetzen, um ein Bücherregal zu machen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; 3rd Party APIs sind neben dem Browser gezeigt und Browser APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung freigeben oder nützliche komplexe Dinge tun. Zum Beispiel:

- Das [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuer Inhalt angezeigt wird (wie wir oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Das [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  Dies ist, wie [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte darstellen kann.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Leute machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio und Video APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. Audio und Video direkt auf einer Webseite abzuspielen oder Videos von Ihrer Webkamera zu erfassen und auf dem Computer eines anderen anzuzeigen (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut und Sie müssen in der Regel den Code und die Informationen irgendwo aus dem Web abrufen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solche Funktionalitäten.

> [!NOTE]
> Diese APIs sind fortgeschritten und werden in diesem Modul nicht behandelt. Sie können viel mehr darüber in unserem Modul [Client-seitige Web-APIs](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt noch viel mehr zu entdecken! Übertreiben Sie es aber noch nicht — Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden lang JavaScript gelernt haben — es gibt zuerst viele Grundlagen zu behandeln. Und deshalb sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie einige JavaScript in Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst gesprochen in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) Artikel). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (das HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browsing-Tab) aus. Das ist wie eine Fabrik, die Rohmaterialien (den Code) entgegennimmt und ein Produkt (die Webseite) liefert.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Anwendungsfall von JavaScript ist das dynamische Ändern von HTML und CSS, um eine Benutzeroberfläche über die Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Sicherheit im Browser

Jeder Browser-Tab hat seinen eigenen separaten Container zur Ausführung von Code (diese Container werden in technischen Begriffen "Ausführungsumgebungen" genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab — oder auf einer anderen Website — nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere derartige schlechte Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf eine sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die in diesem Kurs nicht behandelt werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen Block von JavaScript stößt, führt er ihn im Allgemeinen in der Reihenfolge von oben nach unten aus.
Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie die Dinge platzieren.
Zum Beispiel kehren wir zum Block vom JavaScript zurück, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zuerst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Dann speichern wir eine Referenz zu einem Button mit `document.querySelector` und fügen ihm mithilfe von `addEventListener` einen Ereignis-Listener hinzu, sodass bei einem Klick auf den Button die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge der Zeilen `const button = ...` und `button.addEventListener(...)` vertauschen, funktioniert der Code nicht mehr — stattdessen erhalten Sie im [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einen Fehler — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir ihm keinen Ereignis-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber vorerst beachten Sie, dass im Allgemeinen Elemente definiert sein müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompilierten Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner für den Programmierer freundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie vom Computer ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programmquellcode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Kompilierung**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres, binäres Format kompiliert, sodass er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache angesehen, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitiger** und **clientseitiger** Code hören, besonders im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Nutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden dessen Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseitens/\*\*-Apps zu aktualisieren, um in unterschiedlichen Umständen verschiedene Dinge zu zeigen, neue Inhalte nach Bedarf zu erzeugen.
Serverseitiger Code erzeugt neue Inhalte dynamisch auf dem Server, z.B. durch das Abrufen von Daten aus einer Datenbank, während clientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client erzeugt, z.B. durch das Erstellen einer neuen HTML-Tabelle, das Auffüllen mit Daten, die vom Server angefordert wurden, und das anschließende Anzeigen der Tabelle auf einer Webseite, die dem Benutzer angezeigt wird.
Die Bedeutung ist in beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet — sie zeigt immer den gleichen Inhalt.

## Wie fügen Sie JavaScript zu Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite auf ähnliche Weise wie CSS hinzugefügt.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Fügen Sie als nächstes in Ihrem Texteditor das folgende am Ende Ihres Bodys hinzu — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten in der Regel in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am unteren Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Nun fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu gestalten — fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript hier einfügen" hinzu:

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
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitiv und sehr wählerisch, also müssen Sie die Syntax exakt so eingeben, wie gezeigt, sonst könnte es nicht funktionieren.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)) ansehen.

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in eine externe Datei verschieben möchten? Lassen Sie uns das jetzt untersuchen.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie die .js-Dateierweiterung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Rand des `</body>` und fügen Sie Folgendes direkt vor dem schließenden `</head>`-Tag hinzu (so kann der Browser die Datei früher laden als wenn sie am unteren Ende steht):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler in der Art von `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module vom [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifizieren. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, einen [lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem Serverprogramm, das die `apply-javascript-external.html`- und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server verwenden können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Weitere Informationen finden Sie unter [Skriptlade-Strategien](#skriptlade-strategien). Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise ohnehin einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist in Bezug auf die Organisation Ihres Codes und seine Wiederverwendbarkeit über mehrere HTML-Dateien hinweg eine gute Sache.
   Außerdem ist das HTML ohne große Skriptblöcke leichter lesbar.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)) ansehen.

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf tatsächliche JavaScript-Codes stoßen, die sich innerhalb von HTML befinden.
Dies könnte so aussehen:

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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen inline `onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen und ineffizient — Sie müssten das Attribut `onclick="createParagraph()"` in jedem Button einfügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML aufzunehmen, verwenden Sie eine reine JavaScript-Konstruktion.
Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte etwas länger sein als das `onclick`-Attribut, aber es funktioniert für alle Buttons — egal wie viele auf der Seite sind oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie einige weitere Buttons in die Datei ein.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons bei Klick einen Absatz erstellen.
> Ordentlich, oder?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und analysiert wird, bevor das HTML geladen ist, das Sie ändern möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML analysiert wurde:

- Im internen JavaScript-Beispiel oben wird das Skript-Element am Ende des Dokuments platziert und daher nur geladen und ausgeführt, nachdem der Rest des HTML-Dokuments analysiert wurde.
- Im externen JavaScript-Beispiel oben wird das Skript-Element im Kopfbereich des Dokuments platziert, bevor der HTML-Körper analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am unteren Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, könnte es viel Zeit dauern, bevor der Browser das Skript überhaupt von der Netzwerkverbindung abrufen und laden kann, sodass das Platzieren externer Skripte im Kopfbereich normalerweise besser ist.)
- Wenn Sie immer noch nicht-Modul-Skripte im `<head>` verwenden möchten, die die gesamte Anzeige blockieren und Fehler verursachen könnten, weil sie vor dem Parsen des HTML ausgeführt werden:

  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie nicht warten müssen, bis das HTML bereit ist, das `async`-Attribut) dem `<script>`-Tag hinzufügen.
  - Für interne Skripte sollten Sie den Code in einen [`DOMContentLoaded` Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies sind Themen, die über den Rahmen des Tutorials an dieser Stelle hinausgehen, aber solange Sie nicht sehr alte Browser unterstützen müssen, müssen Sie dies nicht unbedingt tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu dienen, Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht mehr erinnern können, was Sie getan haben).
Kommentare sind sehr nützlich und sollten häufig verwendet werden, insbesondere für größere Anwendungen.
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

So könnten wir beispielsweise das JavaScript unseres letzten Demos mit Kommentaren wie folgt versehen:

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
> Im Allgemeinen sind mehr Kommentare besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Ihnen allmählich näherzubringen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript sich in den Rest des Codes auf Ihrer Website einfügt, unter anderem.

JavaScript mag im Moment noch etwas abschreckend wirken, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten daran heranführen, die nach und nach Sinn ergeben.
Im nächsten Artikel werden wir direkt ins Praktische eintauchen und Sie direkt dazu bringen, Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
