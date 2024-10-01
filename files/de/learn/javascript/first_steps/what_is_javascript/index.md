---
title: Was ist JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Willkommen beim MDN-Einsteigerkurs für JavaScript! In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive, beantworten Fragen wie „Was ist es?“ und „Was können Sie damit machen?“ und stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was JavaScript ist, was es kann und wie es in
        eine Website passt.
      </td>
    </tr>
  </tbody>
</table>

## Eine allgemeine Definition

JavaScript ist eine Skript- oder Programmiersprache, mit der Sie komplexe Funktionen auf Webseiten implementieren können – jedes Mal, wenn eine Webseite mehr tut, als nur da zu sitzen und statische Informationen für Sie anzuzeigen – rechtzeitige Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. – können Sie wetten, dass JavaScript wahrscheinlich beteiligt ist. Es ist die dritte Schicht des Schichtkuchens der Standard-Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS)) in anderen Teilen des Lernbereichs viel ausführlicher behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unseren Webinhalten Struktur zu verleihen und ihnen Bedeutung zu geben, beispielsweise Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache mit Stilregeln, mit der wir HTML-Inhalte gestalten, beispielsweise das Festlegen von Hintergrundfarben und Schriftarten sowie das Anordnen unserer Inhalte in mehrere Spalten.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, mit der Sie Inhalte dynamisch aktualisieren, Multimedia steuern, Bilder animieren und so ziemlich alles andere tun können. (Nun ja, nicht alles, aber es ist erstaunlich, was Sie mit nur wenigen Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen gut aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button zeigt Player 1: Chris ohne Styling](just-html.png)

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

![Button zeigt Player 1: Chris mit Styling](html-and-css.png)

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

Versuchen Sie, auf diese letzte Version der Textmarke zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) an oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr tun — lassen Sie uns genauer erkunden, was.

## Was kann es wirklich?

Die Kernsprache von JavaScript im Client-Bereich besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel beispielsweise fordern wir die Eingabe eines neuen Namens an und speichern dann diesen Namen in einer Variablen namens `name`.
- Operationen mit Textstücken (in der Programmierung als „Strings“ bekannt) durchzuführen. Im obigen Beispiel nehmen wir den String „Player 1: “ und fügen ihn mit der Variablen `name` zusammen, um das vollständige Textlabel zu erstellen, z. B. „Player 1: Chris“.
- Code als Reaktion auf bestimmte Ereignisse auf einer Webseite auszuführen. Wir haben in unserem obigen Beispiel ein [`Klick`](/de/docs/Web/API/Element/click_event)-Ereignis verwendet, um zu erkennen, wann das Label angeklickt wird und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Noch aufregender sind jedoch die Funktionen, die auf der clientseitigen JavaScript-Sprache aufbauen. Die sogenannten **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie tun das Gleiche für die Programmierung, wie es Möbelbaukästen für das Wohnungsbau tun — es ist viel einfacher, bereits zugeschnittene Platten zu nehmen und zusammenzuschrauben, um ein Bücherregal zu machen, als selbst das Design auszuarbeiten, das richtige Holz zu finden, alle Platten in die richtige Größe und Form zu schneiden, die Schrauben in der richtigen Größe zu finden und _dann_ zusammenzuschrauben, um ein Bücherregal zu machen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs werden neben dem Browser gezeigt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Beispielsweise:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) erlaubt es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw. Jedes Mal, wenn ein Popup-Fenster auf einer Seite erscheint oder neuer Inhalt angezeigt wird (wie wir es oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte anzeigen.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Mit diesen Webtechnologien machen Leute erstaunliche Dinge — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio und Video APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam aufzunehmen und auf einem anderen Computer anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um die Idee zu bekommen).

> [!NOTE]
> Viele der oben genannten Demos funktionieren in einem älteren Browser nicht — beim Experimentieren ist es eine gute Idee, einen modernen Browser wie Firefox, Chrome, Edge oder Opera zu verwenden, um Ihren Code auszuführen. Sie müssen das Thema [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) genauer betrachten, wenn Sie der Produktion von Code (d.h. echtem Code, den echte Kunden verwenden werden) näher kommen.

**Drittanbieter-APIs** sind nicht standardmäßig im Browser integriert und Sie müssen ihren Code und Informationen in der Regel von irgendwo im Web abrufen. Beispielsweise:

- Die [Twitter API](https://developer.twitter.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere ähnliche Funktionen bereitzustellen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden in diesem Modul keine dieser APIs behandeln. Weitere Informationen zu diesen APIs finden Sie in unserem [Clientseitige Web-APIs-Modul](/de/docs/Learn/JavaScript/Client-side_web_APIs).

Es gibt noch viel mehr, aber lassen Sie sich noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden JavaScript studiert haben – es gibt viele Grundlagen, die Sie zuerst abdecken müssen. Und deshalb sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich etwas Code betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte wiederholen, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst erwähnt in unserem Artikel [Wie funktioniert CSS?](/de/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (im Browser-Tab) aus. Das ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Eine sehr häufige Verwendung von JavaScript ist die dynamische Änderung von HTML und CSS, um die Benutzeroberfläche über die Document Object Model API zu aktualisieren (wie oben erwähnt).

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Eimer zur Ausführung von Code (diese Eimer werden technisch als "Ausführungsumgebungen" bezeichnet) – das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme – wenn dies nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser einen Block von JavaScript sieht, führt er ihn im Allgemeinen der Reihe nach aus, von oben nach unten. Das bedeutet, dass Sie darauf achten müssen, in welcher Reihenfolge Sie Dinge platzieren. Zum Beispiel, lassen Sie uns zum Block von JavaScript aus unserem ersten Beispiel zurückkehren:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus und hängen dann einen Ereignislistener daran an, damit beim Klicken des Buttons der `updateName()`-Codeblock (Zeilen 5–8) ausgeführt wird. Der Codeblock `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden „Funktionen“ genannt) fordert den Benutzer auf, einen neuen Namen einzugeben und fügt diesen Namen dann in den Buttontext ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen würden, würde es nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) erhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, also können wir keinen Ereignislistener daran anhängen.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler — Sie müssen darauf achten, dass die in Ihrem Code referenzierten Objekte existieren, bevor Sie versuchen, etwas mit ihnen zu machen.

### Interpretierter vs. kompiliertem Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. Bei interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner programmgerechten Textform empfangen und direkt davon verarbeitet.

Kompilierte Sprachen hingegen werden vor ihrer Ausführung durch den Computer in eine andere Form umgewandelt (kompiliert). Beispielsweise werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird in einem binären Format ausgeführt, das aus dem ursprünglichen Quellcode des Programms generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus. Technisch gesehen verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-Time-Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres, binäres Format kompiliert, damit er so schnell wie möglich ausgeführt werden kann. JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht vor der Zeit erfolgt.

Beide Sprachtypen haben ihre Vorteile, aber wir werden sie jetzt nicht diskutieren.

### Server-seitiger vs. client-seitiger Code

Sie könnten auch die Begriffe **serverseitig** und **clientseitig** hören, besonders im Kontext der Webentwicklung. Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und vom Browser angezeigt. In diesem Modul sprechen wir explizit über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt. Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, ASP.NET und sogar JavaScript! JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der populären Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Serversseitige Programmierung](/de/docs/Learn/Server-side) herausfinden.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird sowohl verwendet, um clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um in verschiedenen Umständen unterschiedliche Dinge zu zeigen und neuen Inhalt nach Bedarf zu generieren. Serverseitiger Code generiert dynamisch neuen Inhalt auf dem Server, zum Beispiel durch das Abrufen von Daten aus einer Datenbank, während clientseitiges JavaScript dynamisch neuen Inhalt im Browser auf dem Client generiert, zum Beispiel durch das Erstellen einer neuen HTML-Tabelle, das Füllen dieser mit vom Server angeforderten Daten und das Anzeigen der Tabelle auf einer dem Benutzer gezeigten Webseite. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierten Inhalt wird als **statisch** bezeichnet — sie zeigt die ganze Zeit denselben Inhalt.

## Wie fügen Sie Ihrer Seite JavaScript hinzu?

JavaScript wird Ihrer HTML-Seite auf ähnliche Weise wie CSS hinzugefügt. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Machen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie am Ende Ihres Body — direkt vor Ihrem schließenden `</body>`-Tag — Folgendes hinzu:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am Ende platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) unten.)

4. Jetzt fügen wir unser {{htmlelement("script")}}-Element hinzu, um die Seite interessanter zu gestalten — fügen Sie den folgenden Code direkt unter der Linie "// JavaScript goes here" hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass jedes Mal, wenn Sie den Button klicken, ein neuer Paragraph generiert und unten platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben. Haben Sie Ihre lokale Kopie des Anfangscodes als `.html`-Datei gespeichert? Haben Sie Ihr {{htmlelement("script")}}-Element direkt before dem `</body>`-Tag hinzugefügt? Haben Sie das JavaScript genauso eingegeben, wie angezeigt? **JavaScript ist besonders auf Groß- und Kleinschreibung und Syntax empfindlich und muss genau so eingegeben werden, wie gezeigt, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in einer externen Datei speichern möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre HTML-Beispieldatei. Nennen Sie sie `script.js` — achten Sie darauf, dass sie diese .js-Dateiendung hat, da das als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Ende des `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (auf diese Weise kann der Browser die Datei früher laden als wenn sie am Boden ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, wird ein Fehler angezeigt, wie z.B. `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen, JavaScript-Module aus dem [gleichen Ursprung](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen und `file://`-URLs nicht qualifiziert sind. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist der [Leitfaden zur Einrichtung eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu folgen. Mit dem aktiven Serverprogramm und den Dateien `apply-javascript-external.html` und `script.js`, die auf Port `8000` bereitgestellt werden, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Für weitere Informationen siehe [Strategien zum Laden von Skripten](#strategien_zum_laden_von_skripten) unten. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server benötigen.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Dies ist im Allgemeinen eine gute Sache im Hinblick auf die Organisation Ihres Codes und die Wiederverwendbarkeit über mehrere HTML-Dateien hinweg. Plus, das HTML ist einfacher zu lesen, ohne große Chunks von Skript darin zu haben.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ansehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal Teile von aktuellem JavaScript-Code in HTML vorfinden. Es könnte etwa so aussehen:

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

Dieses Demo hat genau dieselbe Funktionalität wie in den vorhergehenden beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler beinhaltet, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie das jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das `onclick="createParagraph()"`-Attribut auf jeden Button anwenden, auf den JavaScript wirken soll.

### Verwendung von addEventListener stattdessen

Anstatt JavaScript in Ihr HTML einzufügen, verwenden Sie einen reinen JavaScript-Konstruktion. Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons schleifen und mit `addEventListener()` einen Handler für jeden zuweisen. Der Code dafür sieht wie folgt aus:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal wie viele sich auf der Seite befinden, oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie einige weitere Buttons in die Datei ein. Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons bei einem Klick einen Paragraphen erstellen. Ziemlich ordentlich, nicht wahr?

### Strategien zum Laden von Skripten

Der gesamte HTML-Inhalt auf einer Seite wird in der Reihenfolge geladen, in der er erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), wird Ihr Code nicht funktionieren, wenn das JavaScript geladen und analysiert wird, bevor das HTML, mit dem Sie etwas machen möchten.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur läuft, nachdem das HTML analysiert wurde:

- Im obigen Beispiel für internes JavaScript wird das Skriptelement am unteren Ende des Body-Dokuments platziert und daher erst nach dem Analysieren des restlichen HTML-Bodys ausgeführt.
- Im obigen Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body analysiert wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor er JavaScript-Module ausführt. (Sie könnten externe Skripte auch am unteren Ende des Bodys platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bevor der Browser überhaupt anfangen kann, das Skript zu holen und zu laden, sodass das Platzieren externer Scripts im Kopf im Allgemeinen besser ist.)
- Wenn Sie dennoch Nicht-Modul-Skripte im Dokumentkopf verwenden möchten, was die gesamte Seitendarstellung blockieren und Fehler verursachen könnte, weil es ausgeführt wird, bevor das HTML analysiert ist:

  - Für externe Skripte sollten Sie das `defer` (oder falls Sie es nicht benötigen, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Ereignishandler](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies liegt jenseits des Umfangs des Tutorials an diesem Punkt, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie das nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und Anweisungen an Ihre Kollegen enthalten, die erklären, wie der Code funktioniert (und für Sie, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und sich nicht erinnern können, was Sie getan haben). Kommentare sind sehr nützlich und sollten häufig verwendet werden, insbesondere für größere Anwendungen. Es gibt zwei Typen:

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

Beispielsweise könnten wir das letzte JavaScript-Demo mit Kommentaren wie folgt kommentieren:

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
> Im Allgemeinen sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (möglicherweise sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Vorgänge zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben nur mit der Theorie begonnen, um Sie allmählich an die Gründe zu gewöhnen, warum Sie JavaScript verwenden könnten, und welche Art von Dingen Sie damit machen können. Auf dem Weg dorthin haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Webseite zusammenpasst, unter anderen Dingen.

JavaScript mag jetzt noch etwas einschüchternd erscheinen, aber keine Sorge – in diesem Kurs werden wir Sie in einfachen Schritten führen, die im weiteren Verlauf Sinn machen werden. Im nächsten Artikel werden wir [direkt in die Praxis einsteigen](/de/docs/Learn/JavaScript/First_steps/A_first_splash) und Sie dazu bringen, direkt einzutauchen und Ihre eigenen JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
