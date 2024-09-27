---
title: Was ist JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Willkommen beim MDN JavaScript-Anfängerkurs!
In diesem Artikel betrachten wir JavaScript auf einer hohen Ebene, beantworten Fragen wie „Was ist es?“ und „Was kann man damit machen?“, und stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was JavaScript ist, was es kann und wie es sich in eine Website einfügt.
      </td>
    </tr>
  </tbody>
</table>

## Eine hochrangige Definition

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren — jedes Mal, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen — wie z.B. aktuelle Inhaltsaktualisierungen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen etc. — können Sie darauf wetten, dass JavaScript wahrscheinlich beteiligt ist.
Es ist die dritte Ebene des Schichtenkuchens der standardmäßigen Web-Technologien, zwei davon ([HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS)) haben wir in anderen Teilen des Lernbereichs viel detaillierter behandelt.

![Die drei Ebenen der standardmäßigen Web-Technologien: HTML, CSS und JavaScript](cake.png)

- [HTML](/de/docs/Glossary/HTML) ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, z.B. durch die Definition von Absätzen, Überschriften und Datentabellen oder das Einbetten von Bildern und Videos in die Seite.
- [CSS](/de/docs/Glossary/CSS) ist eine Sprache von Stilregeln, die wir verwenden, um Stil auf unsere HTML-Inhalte anzuwenden, z.B. um Hintergrundfarben und Schriftarten festzulegen und unseren Inhalt in mehreren Spalten anzuordnen.
- [JavaScript](/de/docs/Glossary/JavaScript) ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierte Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und vieles mehr. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Ebenen bauen schön aufeinander auf. Lassen Sie uns einen Button als Beispiel nehmen. Wir können ihn mit HTML markieren, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button zeigt Spieler 1: Chris ohne Styling](just-html.png)

Dann können wir etwas CSS hinzufügen, um ihn schön aussehen zu lassen:

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

![Button zeigt Spieler 1: Chris mit Styling](html-and-css.png)

Und schließlich können wir JavaScript hinzufügen, um dynamisches Verhalten zu implementieren:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80) }}

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html) an oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr leisten — lassen Sie uns genauer erkunden, was.

## Was kann es wirklich tun?

Die Kernsprache JavaScript auf der Client-Seite besteht aus einigen allgemeinen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel beispielsweise bitten wir darum, einen neuen Namen einzugeben und speichern diesen Namen in einer Variablen namens `name`.
- Operationen an Textstücken (in der Programmierung als „Strings“ bekannt) auszuführen. Im obigen Beispiel nehmen wir den String "Player 1: " und kombinieren ihn mit der `name`-Variablen, um das vollständige Textlabel zu erstellen, z.B. "Player 1: Chris".
- Code als Reaktion auf bestimmte Ereignisse auszuführen, die auf einer Webseite auftreten. Wir haben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem obigen Beispiel verwendet, um zu erkennen, wann das Label angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was noch spannender ist, ist die Funktionalität, die auf der client-seitigen JavaScript-Sprache aufbaut. So genannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind fertige Sets von Code-Bausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich zu implementieren wären. Sie tun für die Programmierung dasselbe, was fertige Möbelbausätze für den Hausbau tun — es ist viel einfacher, fertige Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu machen, als selbst das Design zu entwickeln, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zuzuschneiden, die richtigen Schrauben zu finden und _dann_ sie zusammenzusetzen, um ein Bücherregal zu machen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; 3rd Party APIs sind auf der Seite des Browsers gezeigt und Browser APIs im Browser](browser.png)

**Browser APIs** sind in Ihrem Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplizierte Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, neue Stile dynamisch auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neuen Inhalt angezeigt bekommen (wie wir oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte plotten.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D- und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Web-Technologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio und Video APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie Audio und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam zu erfassen und auf dem Computer einer anderen Person anzuzeigen (versuchen Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/), um die Idee zu bekommen).

> [!NOTE]
> Viele der obigen Demos funktionieren nicht in einem älteren Browser — beim Experimentieren ist es eine gute Idee, einen modernen Browser wie Firefox, Chrome, Edge oder Opera zu verwenden, um Ihren Code auszuführen.
> Sie müssen [Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) genauer in Betracht ziehen, wenn Sie sich der Bereitstellung von Produktionscode (d.h. echtem Code, den echte Kunden verwenden werden) nähern.

**Third Party APIs** sind standardmäßig nicht im Browser eingebaut und Sie müssen ihren Code und Informationen in der Regel von irgendwo im Web abrufen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglichen es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können viel mehr darüber in unserem [Client-side web APIs Modul](/de/docs/Learn/JavaScript/Client-side_web_APIs) erfahren.

Es gibt noch viel mehr, das ebenfalls verfügbar ist! Aber bitte seien Sie noch nicht übermäßig begeistert. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu entwickeln, nachdem Sie JavaScript 24 Stunden lang studiert haben — es gibt viele Grundlagen, die zuerst behandelt werden müssen. Und deshalb sind Sie hier — gehen wir weiter!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich etwas Code ansehen und dabei erkunden, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns die Geschichte kurz rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst in unserem Artikel [Wie funktioniert CSS](/de/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work) besprochen). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung aus (dem Browser-Tab). Dies ist wie eine Fabrik, die Rohmaterial (den Code) aufnimmt und ein Produkt ausgibt (die Webseite).

![HTML-, CSS- und JavaScript-Code kommen zusammen, um den Inhalt im Browser-Tab zu erstellen, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Gebrauch von JavaScript ist die dynamische Modifikation von HTML und CSS zur Aktualisierung einer Benutzeroberfläche durch die Document Object Model API (wie oben erwähnt).

### Sicherheit des Browsers

Jeder Browser-Tab hat seinen eigenen separaten Eimer zum Ausführen von Code (diese Eimer werden in technischen Begriffen „Ausführungsumgebungen“ genannt) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab nicht direkt den Code in einem anderen Tab — oder auf einer anderen Website — beeinflussen kann.
Das ist eine gute Sicherheitsmaßnahme — wenn das nicht der Fall wäre, könnten Piraten anfangen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechten Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Reihenfolge der JavaScript-Ausführung

Wenn der Browser einen Block von JavaScript antrifft, führt er ihn im Allgemeinen in der Reihenfolge aus, von oben nach unten.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen.
Lassen Sie uns zum Beispiel zu dem JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus und fügen ihm dann mit `addEventListener` einen Ereignis-Listener hinzu, damit beim Klicken auf den Button der `updateName()` Codeblock (Zeilen 5–8) ausgeführt wird. Der `updateName()` Codeblock (diese Arten von wiederverwendbaren Codeblöcken werden „Funktionen“ genannt) fragt den Benutzer nach einem neuen Namen und fügt dann diesen Namen in den Button-Text ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen würden, würde es nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) erhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Dies bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir ihm keinen Ereignis-Listener hinzufügen können.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler — Sie müssen sicherstellen, dass die Objekte, auf die in Ihrem Code verwiesen wird, existieren, bevor Sie versuchen, etwas mit ihnen zu tun.

### Interpretiert versus kompiliert

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
In interpretierten Sprachen wird der Code von oben nach unten ausgeführt, und das Ergebnis der Codeausführung wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form transformieren, bevor der Browser ihn ausführt.
Der Code wird in seiner für den Programmierer freundlichen Textform empfangen und direkt von dort verarbeitet.

Kompilierte Sprachen hingegen werden in eine andere Form umgewandelt (kompiliert), bevor sie von der Maschine ausgeführt werden.
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann von der Maschine ausgeführt wird.
Das Programm wird aus einem binären Format ausgeführt, das aus dem ursprünglichen Programm-Quellcode erstellt wurde.

JavaScript ist eine leichte interpretierte Programmiersprache.
Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik, die als **Just-in-Time-Kompilierung** bekannt ist, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Nutzung des Skripts in ein schnelleres binäres Format kompiliert, damit er so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht vor der Ausführung erfolgt.

Es gibt Vorteile bei beiden Arten von Sprachen, aber wir werden sie jetzt nicht diskutieren.

### Serverseitiger versus clientseitiger Code

Sie könnten auch die Begriffe **serverseitig** und **clientseitig** hören, besonders im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Nutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt.
In diesem Modul sprechen wir ausdrücklich von **clientseitigem JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, dann werden seine Ergebnisse heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, ASP.NET und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, z.B. in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [Dynamische Websites – Server-side-Programmierung](/de/docs/Learn/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl clientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um je nach Kontext unterschiedliche Dinge anzuzeigen und bei Bedarf neue Inhalte zu generieren.
Serverseitiger Code generiert neue Inhalte dynamisch auf dem Server, z.B. indem er Daten aus einer Datenbank abruft, während clientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client generiert, z.B. indem es eine neue HTML-Tabelle erstellt, sie mit vom Server angeforderten Daten füllt und die Tabelle dann in einer dem Benutzer angezeigten Webseite anzeigt.
Die Bedeutung ist in den beiden Kontexten etwas unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt immer denselben Inhalt an.

## Wie fügen Sie Ihrer Seite JavaScript hinzu?

JavaScript wird auf ähnliche Weise auf Ihre HTML-Seite angewendet wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Zuerst machen Sie eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen klickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie das Folgende am unteren Ende Ihres Body ein — direkt vor Ihrem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem wir das JavaScript am unteren Rand platzieren, stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptladungsstrategien](#skriptladungsstrategien) unten.)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, damit die Seite etwas Interessanteres tut — fügen Sie den folgenden Code direkt unterhalb der "// JavaScript goes here"-Zeile ein:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass beim Klicken auf den Button ein neuer Absatz erstellt und darunter platziert wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und überprüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag eingefügt?
> Haben Sie das JavaScript genau so eingegeben, wie es gezeigt wird? **JavaScript ist case-sensitive und sehr pingelig, daher müssen Sie die Syntax genau so eingeben, wie sie gezeigt wird, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub ansehen als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert großartig, aber was, wenn wir unser JavaScript in einer externen Datei haben wollten? Lassen Sie uns dies jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Beispieldatei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie diese .js-Dateiendung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element am unteren Ende des `</body>` und fügen Sie das Folgende direkt vor dem schließenden `</head>`-Tag hinzu (so kann der Browser die Datei früher laden, als wenn sie am Ende steht):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler in der Art von `Cross-origin request blocked` sehen. Das liegt daran, dass JavaScript-Module wie viele externe Ressourcen von der [gleichen Herkunft](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://`-URLs qualifizieren sich nicht. Es gibt zwei Lösungen, um dieses Problem zu beheben:
   - Unsere empfohlene Lösung ist, das [Leitfaden zur Einrichtung eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu befolgen. Mit dem laufenden Serverprogramm, das die Dateien `apply-javascript-external.html` und `script.js` auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server betreiben können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skriptladungsstrategien](#skriptladungsstrategien) unten für weitere Informationen. Beachten Sie jedoch, dass die in anderen Teilen des Tutorials verwendeten Funktionen möglicherweise dennoch einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache in Bezug auf die Organisation Ihres Codes und das Wiederverwendbar machen über mehrere HTML-Dateien hinweg.
   Außerdem ist das HTML einfacher zu lesen, ohne riesige Codeblöcke darin versteckt zu haben.

> [!NOTE]
> Sie können diese Version auf GitHub sehen als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline JavaScript-Handler

Beachten Sie, dass Sie manchmal auf Stücke von tatsächlichem JavaScript-Code treffen werden, der in HTML eingebettet ist.
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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen inline `onclick`-Handler enthält, um die Funktion auszuführen, wenn der Button gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verunreinigen, und es ist ineffizient — Sie müssten das Attribut `onclick="createParagraph()"` auf jedem Button einfügen, auf den das JavaScript angewendet werden soll.

### Verwendung von addEventListener anstelle dessen

Statt JavaScript in Ihrem HTML zu inkludieren, verwenden Sie eine reine JavaScript-Konstruktion.
Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies könnte ein wenig länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — unabhängig davon, wie viele auf der Seite sind oder wie viele hinzugefügt oder entfernt werden.
Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und ein paar weitere Buttons in die Datei einzufügen.
> Wenn Sie erneut laden, sollten Sie feststellen, dass alle Buttons beim Klicken einen Absatz erstellen.
> Ziemlich cool, oder?

### Skriptladungsstrategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer, das [Document Object Model](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie manipulieren möchten, geladen ist.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML geparst wurde:

- Im obigen Beispiel mit internem JavaScript wird das Skriptelement am Ende des Body des Dokuments platziert und wird daher erst ausgeführt, nachdem der Rest des HTML-Bodys geparst wurde.
- Im obigen Beispiel mit externem JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Aber weil wir `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Sie könnten auch externe Skripte am Ende des Bodys platzieren. Wenn jedoch viel HTML vorhanden ist und das Netzwerk langsam ist, kann es lange dauern, bis der Browser überhaupt mit dem Abrufen und Laden des Skripts beginnen kann, sodass das Platzieren externer Skripte im Kopf normalerweise besser ist.)
- Wenn Sie immer noch nicht-modulare Skripte im Dokumentkopf verwenden möchten, die die gesamte Seite blockieren könnten und Fehler verursachen könnten, weil sie vor dem Parsen des HTML ausgeführt werden:

  - Für externe Skripte sollten Sie das Attribut `defer` (oder wenn Sie nicht das fertige HTML benötigen, das Attribut `async`) auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einen [`DOMContentLoaded` Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) einwickeln.

  Dies ist über den Umfang des Tutorials an dieser Stelle hinaus, aber sofern Sie sehr alte Browser nicht unterstützen müssen, müssen Sie das nicht tun und können stattdessen einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und dazu dienen, Ihren Mitentwicklern Anweisungen darüber zu geben, wie der Code funktioniert (und Ihnen, wenn Sie auf Ihren Code nach sechs Monaten zurückkommen und sich nicht mehr erinnern können, was Sie getan haben).
Kommentare sind sehr nützlich und Sie sollten sie oft verwenden, besonders bei größeren Anwendungen.
Es gibt zwei Typen:

- Einzeilige Kommentare werden nach einem Doppelschrägstrich (`//`) geschrieben, z.B.

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

So könnten wir zum Beispiel die JavaScript-Demo mit Kommentaren wie folgt kommentieren:

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
> Im Allgemeinen sind mehr Kommentare in der Regel besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen müssen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit tun können.
Auf dem Weg haben Sie ein paar Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, neben anderen Dingen.

JavaScript mag im Moment ein bisschen herausfordernd erscheinen, aber machen Sie sich keine Sorgen — in diesem Kurs werden wir Sie Schritt für Schritt durch es führen, so dass es im weiteren Verlauf Sinn machen wird.
Im nächsten Artikel werden wir [direkt in die Praxis eintauchen](/de/docs/Learn/JavaScript/First_steps/A_first_splash) und Sie dazu bringen, eigene JavaScript-Beispiele zu erstellen.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
