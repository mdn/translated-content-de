---
title: Was ist JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 387f257e452a39d8d068649effae397e9179fd96
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

Willkommen beim MDN-Einsteigerkurs für JavaScript! In diesem Artikel betrachten wir JavaScript aus einer übergeordneten Perspektive und beantworten Fragen wie "Was ist das?" und "Was kann man damit machen?", um sicherzustellen, dass Sie sich mit dem Zweck von JavaScript wohlfühlen.

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
          <li>Was ist JavaScript, und wie passt es in eine Website.</li>
          <li>Was Sie mit JavaScript machen können.</li>
          <li>Wie man JavaScript zu einer Webseite hinzufügt.</li>
          <li>Wie man Kommentare in JavaScript schreibt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine übergeordnete Definition

JavaScript ist eine Skriptsprache oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – immer dann, wenn eine Webseite mehr tut, als nur statische Informationen anzuzeigen, die Sie sich ansehen können – z. B. zeitnahe Inhaltsaktualisierungen anzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw., können Sie darauf wetten, dass wahrscheinlich JavaScript beteiligt ist. Es ist die dritte Schicht des Layer-Kuchens standardmäßiger Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn_web_development/Core/Structuring_content) und [CSS](/de/docs/Learn_web_development/Core/Styling_basics)) in anderen Teilen des Lernbereichs viel detaillierter behandelt haben.

![Die drei Schichten der standardmäßigen Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{Glossary("HTML", "HTML")}} ist die Auszeichnungssprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen Bedeutung zu verleihen, z. B. Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{Glossary("CSS", "CSS")}} ist eine Sprache von Stilregeln, mit der wir unseren HTML-Inhalten Styling zuweisen, z. B. Hintergrundfarben und Schriftarten festlegen und unsere Inhalte in mehreren Spalten anordnen.
- {{Glossary("JavaScript", "JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, Inhalte dynamisch zu aktualisieren, Multimedia zu steuern, Bilder zu animieren und noch vieles mehr. (Okay, nicht alles, aber es ist erstaunlich, was man mit ein paar Zeilen JavaScript-Code erreichen kann.)

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

Dann können wir etwas CSS hinzufügen, um ihn schön aussehen zu lassen:

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

Versuchen Sie, auf das Textlabel zu klicken, einen Namen in das sich öffnende Dialogfeld einzugeben und die OK-Schaltfläche zu drücken.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript kann noch viel mehr – lassen Sie uns erkunden, was alles möglich ist.

> [!NOTE]
> Bevor wir weitermachen, warum nicht gleich in eine Herausforderung von Scrimba eintauchen? Schauen Sie sich [Ein Willkommensnachricht rendern](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) an <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Wenn Sie nicht wissen, wie Sie diesen Code schreiben, keine Sorge; Sie könnten versuchen, einige Websuchen durchzuführen, um Antworten zu finden, oder die Lösung am Ende des Skriptums ansehen.

## Was kann es wirklich tun?

Die Kernsprache JavaScript auf der Client-Seite besteht aus einigen üblichen Programmierfeatures, die es Ihnen ermöglichen, Dinge wie:

- Nützliche Werte in Variablen zu speichern. Im obigen Beispiel fragen wir z.B. nach einem neuen Namen, der dann in einer Variablen namens `name` gespeichert wird.
- Operationen an Textteilen (in der Programmierung als "Strings" bekannt). Im obigen Beispiel nehmen wir den String "Spieler 1: " und fügen ihn der Variablen `name` hinzu, um das vollständige Textlabel zu erstellen, z. B. "Spieler 1: Chris".
- Code als Reaktion auf bestimmte Ereignisse ausführen, die auf einer Webseite auftreten. Wir haben ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis in unserem obigen Beispiel verwendet, um zu erkennen, wann der Button angeklickt wird, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was noch aufregender ist, ist die auf der Client-Seiten-JavaScript-Sprache aufbauende Funktionalität. Sogenannte **Application Programming Interfaces** (**APIs**) geben Ihnen zusätzliche Superkräfte, um sie in Ihrem JavaScript-Code zu verwenden.

APIs sind fertige Sätze von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die ansonsten schwer oder unmöglich zu implementieren wären. Sie machen für die Programmierung dasselbe wie fertig geschnittene Möbelkits für den Hausbau – es ist viel einfacher, fertige Platten zu nehmen und sie zu einem Bücherregal zusammenzuschrauben, als das Design selbst zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die Schrauben der richtigen Größe zu finden und _dann_ alles zusammen zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs sind neben dem Browser dargestellt und Browser-APIs sind im Browser](browser.png)

**Browser-APIs** sind in Ihrem Webbrowser integriert und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Das [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw. Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist das das DOM in Aktion.
- Das [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab. So kann [Google Maps](https://www.google.com/maps) Ihren Standort finden und auf einer Karte plotten.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen Ihnen, animierte 2D- und 3D-Grafiken zu erstellen. Menschen machen erstaunliche Dinge mit diesen Webtechnologien – siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Guides/Audio_and_video_delivery) wie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. das Abspielen von Audio und Video direkt auf einer Webseite oder das Erfassen von Video von Ihrer Webcam und das Anzeigen auf dem Computer einer anderen Person (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um die Idee zu bekommen).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser integriert und Sie müssen ihren Code und Informationen in der Regel von irgendwo im Web abrufen. Beispielsweise:

- Das [Bluesky API](https://docs.bsky.app/) ermöglicht Ihnen, Dinge wie die Anzeige Ihrer neuesten Beiträge auf Ihrer Website zu tun.
- Das [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere solche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten, und wir werden keines dieser Themen in diesem Modul behandeln. Sie können viel mehr über diese in unserem [Client-side Web APIs module](/de/docs/Learn_web_development/Extensions/Client-side_APIs) erfahren.

Es gibt auch noch viel mehr! Lassen Sie sich jedoch noch nicht zu sehr begeistern. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie JavaScript für 24 Stunden studiert haben – es gibt viele Grundlagen zu lösen. Und deswegen sind Sie hier – lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier schauen wir uns tatsächlich einige Codebeispiele an und erkunden, was tatsächlich passiert, wenn Sie etwas JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)-Artikel). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Das ist wie eine Fabrik, die Rohmaterialien (den Code) annimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code werden in den Browser-Tab geladen und zur Erstellung von Inhalten verwendet, wenn die Seite geladen wird](execution.png)

Ein sehr häufiger Einsatz von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche über das Document Object Model API (wie oben erwähnt) zu aktualisieren.

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Bereich, um Code auszuführen ("execution environments" in technischen Begriffen) — das bedeutet, dass in den meisten Fällen der Code in jedem Tab völlig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab — oder auf einer anderen Website — nicht direkt beeinflussen kann. Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten damit beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solche schlechte Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise zu senden, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### Ausführungsreihenfolge von JavaScript

Wenn der Browser auf einen JavaScript-Block stößt, wird er in der Regel von oben nach unten ausgeführt. Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen. Beispielsweise, lassen Sie uns auf den JavaScript-Block zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Hier definieren wir zunächst einen Codeblock namens `updateName()` (diese Arten von wiederverwendbaren Codeblöcken werden **Funktionen** genannt), der den Benutzer nach einem neuen Namen fragt und diesen Namen in den Text eines Buttons einfügt. Wir speichern dann eine Referenz zu einem Button mit `document.querySelector` und fügen diesem einen Event-Listener hinzu, indem wir `addEventListener` verwenden, sodass, wenn der Button geklickt wird, die `updateName()`-Funktion ausgeführt wird.

Wenn Sie die Reihenfolge von `const button = ...` und `button.addEventListener(...)` umkehren würden, würde der Code nicht mehr funktionieren — stattdessen würden Sie einen Fehler in der [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erhalten — `Uncaught ReferenceError: Cannot access 'button' before initialization`. Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, sodass wir keinen Event-Listener hinzufügen können.

> [!NOTE]
> Es ist nicht immer wahr, dass JavaScript genau in der Reihenfolge von oben nach unten ausgeführt wird, aufgrund von Verhaltensweisen wie {{Glossary("Hoisting", "Hoisting")}}, aber bedenken Sie zunächst, dass Elemente im Allgemeinen definiert sein müssen, bevor Sie sie verwenden können. Dies ist eine häufige Fehlerquelle.

### Interpretierter versus kompiliertem Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören. In interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung wird sofort zurückgegeben. Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt. Der Code wird in seiner für Programmierer verständlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden (kompiliert) in eine andere Form umgewandelt, bevor sie vom Computer ausgeführt werden. Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird. Das Programm wird aus einem Binärformat ausgeführt, das aus dem ursprünglichen Programmiersourcecode generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache. Der Webbrowser empfängt den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript daraus aus. Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Compiling**, um die Leistung zu verbessern; der JavaScript-Quellcode wird während der Verwendung des Skripts in ein schnelleres Binärformat kompiliert, sodass es so schnell wie möglich ausgeführt werden kann. JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit, und nicht im Voraus, gehandhabt wird.

Es gibt Vorteile für beide Arten von Sprachen, aber wir werden sie jetzt nicht besprechen.

### Serverseitiger versus klientseitiger Code

Sie könnten auch die Begriffe **serverseitiger** und **klientseitiger** Code hören, besonders im Kontext der Webentwicklung. Klientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der klientseitige Code der Seite heruntergeladen und dann vom Browser ausgeführt und angezeigt. In diesem Modul sprechen wir ausdrücklich über **klientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt, und die Ergebnisse werden dann heruntergeladen und im Browser angezeigt. Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C#, und sogar JavaScript! JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema zur [dynamischen Websites – serverseitige Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) erfahren.

### Dynamischer versus statischer Code

Das Wort **dynamisch** wird verwendet, um sowohl klientseitiges JavaScript als auch serverseitige Sprachen zu beschreiben — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/Anwendung zu aktualisieren, um unterschiedliche Dinge unter verschiedenen Umständen anzuzeigen, und bei Bedarf neue Inhalte zu generieren. Serversprachiger Code generiert neue Inhalte dynamisch auf dem Server, beispielsweise indem er Daten aus einer Datenbank abruft, während klientseitiges JavaScript neue Inhalte dynamisch im Browser auf dem Client generiert, z. B. durch das Erstellen einer neuen HTML-Tabelle, das Befüllen mit Daten, die vom Server angefordert wurden, und dann das Anzeigen der Tabelle auf einer Webseite, die dem Benutzer gezeigt wird. Die Bedeutung ist in den beiden Kontexten leicht unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und klientseitig) arbeiten normalerweise zusammen.

Eine Webseite ohne dynamisch aktualisierende Inhalte wird als **statisch** bezeichnet — sie zeigt die gleichen Inhalte immer an.

## Wie fügen Sie JavaScript in Ihre Seite ein?

JavaScript wird auf Ihrer HTML-Seite ähnlich wie CSS angewendet. Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden und {{htmlelement("style")}}-Elemente verwendet, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

> [!NOTE]
> Scrimbas interaktives Tutorial [Einrichten unserer JavaScript-Datei](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> führt durch ein paar unterschiedliche Wege, JavaScript zu Ihrem HTML hinzuzufügen.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem vernünftigen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie als Nächstes zu Ihrem Texteditor und fügen Sie das folgende am Ende Ihres Bodies hinzu — unmittelbar vor dem schließenden `</body>`-Tag:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten im Allgemeinen in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Durch das Platzieren des JavaScript am Ende stellen wir sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Skriptlade-Strategien](#skriptlade-strategien) unten.)

4. Nun fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen — fügen Sie den folgenden Code direkt unter der Zeile "// JavaScript goes here" ein:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass jedes Mal, wenn Sie auf den Button klicken, ein neuer Paragraph erzeugt und unten hinzugefügt wird.

> [!NOTE]
> Wenn Ihr Beispiel nicht zu funktionieren scheint, gehen Sie die Schritte noch einmal durch und prüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie der Ausgangscode als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element unmittelbar vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie angegeben? **JavaScript ist case-sensitiv und sehr wählerisch, also müssen Sie die Syntax genau so eingeben, wie gezeigt, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert gut, aber was ist, wenn wir unser JavaScript in eine externe Datei verschieben möchten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre Beispiel-HTML-Datei. Nennen Sie sie `script.js` — stellen Sie sicher, dass sie die .js-Dateiendung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element unten in dem `</body>` und fügen Sie das folgende direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei eher laden kann, als wenn sie unten ist):

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung hat, und wenn Sie die Konsole Ihres Browsers überprüfen, sehen Sie einen Fehler wie `Cross-origin request blocked`. Dies liegt daran, dass wie viele externe Ressourcen JavaScript-Module vom [selben Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das HTML geladen werden müssen, und `file://`-URLs zählen nicht dazu. Es gibt zwei Lösungen, dieses Problem zu beheben:
   - Unsere empfohlene Lösung besteht darin, [einen lokalen Testserver einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Mit dem Serverprogramm, das die `apply-javascript-external.html`- und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server ausführen können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Skriptlade-Strategien](#skriptlade-strategien) unten für weitere Informationen. Beachten Sie jedoch, dass Funktionen, die wir in anderen Teilen des Tutorials verwenden, möglicherweise trotzdem einen lokalen HTTP-Server erfordern.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei. Dies ist in Bezug auf die Organisation Ihres Codes und die Wiederverwendbarkeit über mehrere HTML-Dateien hinweg im Allgemeinen vorteilhaft. Außerdem ist das HTML besser lesbar, ohne große Scriptblöcke darin.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf JavaScript-Code stoßen, der sich direkt im HTML befindet. Es könnte etwa so aussehen:

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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorhergehenden beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion zu starten, wenn der Button gedrückt wird.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu vermischen, und es ist ineffizient — Sie müssten den `onclick="createParagraph()"`-Attribut in jedem Button einfügen, auf den das JavaScript angewendet werden soll.

### Verwenden von addEventListener stattdessen

Statt JavaScript in Ihr HTML aufzunehmen, verwenden Sie eine reine JavaScript-Konstruktion. Die `querySelectorAll()`-Funktion ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen. Sie können dann durch die Buttons schleifen und jedem einen Handler mithilfe von `addEventListener()` zuweisen. Der Code dafür wird unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal wie viele sich auf der Seite befinden oder wie viele hinzugefügt oder entfernt werden. Das JavaScript muss nicht geändert werden.

> [!NOTE]
> Versuchen Sie, Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie ein paar weitere Buttons in die Datei ein. Wenn Sie die Seite neu laden, sollten Sie feststellen, dass alle Buttons beim Anklicken einen Paragraphen erzeugen. Nützlich, nicht wahr?

### Skriptlade-Strategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er auf der Seite erscheint. Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und geparst wird, bevor das HTML, das Sie manipulieren möchten, geladen ist.

Es gibt ein paar verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur ausgeführt wird, nachdem das HTML geparst wurde:

- Im obigen Beispiel für internes JavaScript wird das Skriptelement am Ende des Körpers des Dokuments platziert und daher erst ausgeführt, nachdem der Rest des HTML-Körpers geparst wurde.
- Im obigen Beispiel für externes JavaScript wird das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Körper geparst wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet darauf, dass das gesamte HTML verarbeitet wird, bevor JavaScript-Module ausgeführt werden. (Man könnte auch externe Skripte am Ende des Körpers platzieren. Aber wenn es viel HTML gibt und das Netzwerk langsam ist, kann es viel Zeit in Anspruch nehmen, bis der Browser überhaupt damit beginnt, das Skript herunterzuladen und zu laden, daher ist das Platzieren externer Skripte im Kopfbereich normalerweise besser.)
- Wenn Sie immer noch nicht-modulartige Skripte im Dokumentkopf verwenden möchten, die die ganze Seite blockieren könnten und Fehler verursachen könnten, weil sie vor dem Parsen des HTMLs ausgeführt werden:
  - Für externe Skripte sollten Sie das `defer` (oder wenn Sie das HTML nicht bereithaben müssen, das `async`) Attribut im {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [`DOMContentLoaded`-Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) umwickeln.

  Dies liegt außerhalb des Umfangs des Tutorials an diesem Punkt, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und existieren, um Ihren Mitentwicklern Anweisungen zu geben, wie der Code funktioniert (und Ihnen, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und nicht mehr wissen, was Sie getan haben).
Kommentare sind sehr nützlich, und Sie sollten sie häufig verwenden, insbesondere bei größeren Anwendungen. Es gibt zwei Typen:

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

So könnten wir beispielsweise das JavaScript aus unserem letzten Demo mit Kommentaren versehen:

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
> Generell sind mehr Kommentare normalerweise besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein), oder um sehr einfache Operationen zu erklären (vielleicht ist Ihr Code überkompliziert).

## Zusammenfassung

Da haben Sie es, Ihr erster Schritt in die Welt von JavaScript. Wir haben nur mit Theorie begonnen, um Ihnen zu erklären, warum Sie JavaScript nutzen würden und welche Art von Dingen Sie damit tun können. Unterwegs haben Sie ein paar Codebeispiele gesehen und gelernt, wie JavaScript mit dem Rest des Codes auf Ihrer Website zusammenpasst, unter anderem.

JavaScript mag im Moment etwas abschreckend wirken, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten durch das Programm führen, das in Zukunft Sinn machen wird. Im nächsten Artikel stürzen wir uns direkt ins Praktische und Sie werden gleich loslegen und Ihre eigenen JavaScript-Beispiele erstellen.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
