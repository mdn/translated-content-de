---
title: Was ist JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Willkommen beim MDN-Einsteigerkurs für JavaScript!
In diesem Artikel werden wir JavaScript aus einer höheren Perspektive betrachten, Fragen wie "Was ist das?" und "Was kann man damit machen?" beantworten und sicherstellen, dass Sie mit dem Zweck von JavaScript vertraut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit JavaScript zu erlangen, zu verstehen, was es kann und wie
        es in eine Website passt.
      </td>
    </tr>
  </tbody>
</table>

## Eine Definition auf hoher Ebene

JavaScript ist eine Skript- oder Programmiersprache, die es Ihnen ermöglicht, komplexe Funktionen auf Webseiten zu implementieren – wann immer eine Webseite mehr tut, als nur dort zu stehen und statische Informationen anzuzeigen – wie z. B. zeitnahe Inhaltsaktualisierungen anzuzeigen, interaktive Karten, animierte 2D/3D-Grafiken, scrollende Video-Jukeboxen usw. – können Sie darauf wetten, dass JavaScript vermutlich beteiligt ist.
Es ist die dritte Schicht des Schichtenkuchens der Standard-Webtechnologien, von denen wir zwei ([HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS)) in anderen Teilen des Lernbereichs viel ausführlicher behandelt haben.

![Die drei Schichten der Standard-Webtechnologien; HTML, CSS und JavaScript](cake.png)

- {{glossary("HTML")}} ist die Markup-Sprache, die wir verwenden, um unsere Webinhalte zu strukturieren und ihnen eine Bedeutung zu geben, zum Beispiel Absätze, Überschriften und Datentabellen zu definieren oder Bilder und Videos in die Seite einzubetten.
- {{glossary("CSS")}} ist eine Sprache für Stilregeln, die wir verwenden, um Styling auf unsere HTML-Inhalte anzuwenden, zum Beispiel Hintergründe und Schriftarten festzulegen und unsere Inhalte in mehreren Spalten zu layouten.
- {{glossary("JavaScript")}} ist eine Skriptsprache, die es Ihnen ermöglicht, dynamisch aktualisierte Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere. (Okay, nicht alles, aber es ist erstaunlich, was Sie mit ein paar Zeilen JavaScript-Code erreichen können.)

Die drei Schichten bauen schön aufeinander auf. Nehmen wir als Beispiel einen Button. Wir können ihn mit HTML auszeichnen, um ihm Struktur und Zweck zu geben:

```html
<button type="button">Player 1: Chris</button>
```

![Button mit der Aufschrift Player 1: Chris ohne Styling](just-html.png)

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

![Button mit der Aufschrift Player 1: Chris und Styling](html-and-css.png)

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

Versuchen Sie, auf diese letzte Version des Textlabels zu klicken, um zu sehen, was passiert (beachten Sie auch, dass Sie dieses Demo auf GitHub finden können — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html), oder [führen Sie es live aus](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript kann noch viel mehr als das — lassen Sie uns im Detail erkunden, was.

## Was kann es wirklich tun?

Die Kernsprache von JavaScript auf der Client-Seite besteht aus einigen gebräuchlichen Programmierfunktionen, die es Ihnen ermöglichen, Dinge wie Folgendes zu tun:

- Nützliche Werte in Variablen speichern. In dem obigen Beispiel zum Beispiel bitten wir um die Eingabe eines neuen Namens und speichern diesen Namen dann in einer Variablen namens `name`.
- Operationen auf Textstücken (in der Programmierung als "Strings" bezeichnet) durchführen. Im obigen Beispiel nehmen wir den String "Player 1: " und fügen ihn mit der `name`-Variablen zusammen, um das vollständige Textlabel zu erstellen, z. B. "Player 1: Chris".
- Code ausführen, als Reaktion darauf, dass bestimmte Ereignisse auf einer Webseite auftreten. Wir haben ein {{domxref("Element/click_event", "click")}}-Ereignis in unserem obigen Beispiel verwendet, um zu erkennen, wann das Label angeklickt wurde, und dann den Code auszuführen, der das Textlabel aktualisiert.
- Und vieles mehr!

Was jedoch noch aufregender ist, ist die Funktionalität, die auf der Client-seitigen JavaScript-Sprache aufbaut. Sogenannte **Application Programming Interfaces** (**APIs**) bieten Ihnen zusätzliche Superkräfte, die Sie in Ihrem JavaScript-Code verwenden können.

APIs sind vorgefertigte Sets von Codebausteinen, die es einem Entwickler ermöglichen, Programme zu implementieren, die sonst schwer oder unmöglich zu implementieren wären.
Sie tun für die Programmierung dasselbe, was Möbelbausätze für das Heimwerken tun — es ist viel einfacher, vorgeschnittene Platten zu nehmen und sie zusammenzuschrauben, um ein Bücherregal zu bauen, als selbst das Design zu erarbeiten, das richtige Holz zu finden, alle Platten auf die richtige Größe und Form zu schneiden, die passenden Schrauben zu finden und _dann_ alles zusammenzusetzen, um ein Bücherregal zu bauen.

Sie fallen im Allgemeinen in zwei Kategorien.

![Zwei Kategorien von API; Drittanbieter-APIs werden neben dem Browser und Browser-APIs im Browser angezeigt](browser.png)

**Browser-APIs** sind in Ihren Webbrowser eingebaut und können Daten aus der umgebenden Computerumgebung bereitstellen oder nützliche komplexe Dinge tun. Zum Beispiel:

- Die [DOM (Document Object Model) API](/de/docs/Web/API/Document_Object_Model) ermöglicht es Ihnen, HTML und CSS zu manipulieren, HTML zu erstellen, zu entfernen und zu ändern, dynamisch neue Stile auf Ihre Seite anzuwenden usw.
  Jedes Mal, wenn Sie ein Popup-Fenster auf einer Seite sehen oder neue Inhalte angezeigt werden (wie wir es oben in unserem einfachen Demo gesehen haben), ist dies das DOM in Aktion.
- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ruft geografische Informationen ab.
  Dies ist, wie [Google Maps](https://www.google.com/maps) in der Lage ist, Ihren Standort zu finden und auf einer Karte zu plotten.
- Die [Canvas](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es Ihnen, animierte 2D und 3D-Grafiken zu erstellen.
  Menschen machen erstaunliche Dinge mit diesen Webtechnologien — siehe [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) und [webglsamples](https://webglsamples.org/).
- [Audio- und Video-APIs](/de/docs/Web/Media/Audio_and_video_delivery) wie {{domxref("HTMLMediaElement")}} und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es Ihnen, wirklich interessante Dinge mit Multimedia zu tun, wie z.B. Audio- und Video direkt auf einer Webseite abzuspielen oder Video von Ihrer Webcam aufzunehmen und es auf dem Rechner einer anderen Person anzuzeigen (probieren Sie unser einfaches [Snapshot-Demo](https://chrisdavidmills.github.io/snapshot/) aus, um die Idee zu verstehen).

> [!NOTE]
> Viele der oben genannten Demos funktionieren nicht in einem älteren Browser — beim Experimentieren ist es eine gute Idee, einen modernen Browser wie Firefox, Chrome, Edge oder Opera zu verwenden, um Ihren Code auszuführen.
> Sie müssen [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) detaillierter in Betracht ziehen, wenn Sie näher daran sind, Produktionscode bereitzustellen (d. h. echten Code, den echte Kunden verwenden werden).

**Drittanbieter-APIs** sind standardmäßig nicht im Browser eingebaut, und im Allgemeinen müssen Sie deren Code und Informationen von irgendwo im Web beziehen. Zum Beispiel:

- Die [Twitter API](https://developer.x.com/en/docs) ermöglicht es Ihnen, Dinge wie Ihre neuesten Tweets auf Ihrer Website anzuzeigen.
- Die [Google Maps API](https://developers.google.com/maps/) und [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) ermöglicht es Ihnen, benutzerdefinierte Karten in Ihre Website einzubetten und andere ähnliche Funktionen.

> [!NOTE]
> Diese APIs sind fortgeschritten und wir werden keine dieser in diesem Modul behandeln. Sie können viel mehr über diese in unserem [Client-side web APIs module](/de/docs/Learn/JavaScript/Client-side_web_APIs) erfahren.

Es gibt auch viel mehr verfügbar! Aber noch nicht zu aufgeregt werden. Sie werden nicht in der Lage sein, das nächste Facebook, Google Maps oder Instagram zu bauen, nachdem Sie 24 Stunden lang JavaScript studiert haben – es gibt eine Menge Grundlegendes zu behandeln. Und deshalb sind Sie hier — lassen Sie uns weitermachen!

## Was macht JavaScript auf Ihrer Seite?

Hier werden wir tatsächlich einige Codes betrachten und dabei erkunden, was tatsächlich passiert, wenn Sie JavaScript auf Ihrer Seite ausführen.

Lassen Sie uns kurz die Geschichte rekapitulieren, was passiert, wenn Sie eine Webseite in einem Browser laden (zuerst besprochen in unserem Artikel [How CSS works](/de/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work)). Wenn Sie eine Webseite in Ihrem Browser laden, führen Sie Ihren Code (HTML, CSS und JavaScript) in einer Ausführungsumgebung (dem Browser-Tab) aus. Dies ist wie eine Fabrik, die Rohstoffe (den Code) aufnimmt und ein Produkt (die Webseite) ausgibt.

![HTML-, CSS- und JavaScript-Code kommen zusammen, um beim Laden der Seite den Inhalt im Browser-Tab zu erstellen](execution.png)

Eine sehr gängige Verwendung von JavaScript besteht darin, HTML und CSS dynamisch zu ändern, um eine Benutzeroberfläche zu aktualisieren, über die Document Object Model API (wie oben erwähnt).

### Browsersicherheit

Jeder Browser-Tab hat seinen eigenen separaten Bereich für die Ausführung von Code (diese Bereiche werden in Fachbegriffen als "Ausführungsumgebungen" bezeichnet) — das bedeutet, dass im Allgemeinen der Code in jedem Tab vollständig separat ausgeführt wird und der Code in einem Tab den Code in einem anderen Tab oder auf einer anderen Website nicht direkt beeinflussen kann.
Dies ist eine gute Sicherheitsmaßnahme — wenn dies nicht der Fall wäre, könnten Piraten damit beginnen, Code zu schreiben, um Informationen von anderen Websites zu stehlen, und andere solch schlechte Dinge.

> [!NOTE]
> Es gibt Möglichkeiten, Code und Daten zwischen verschiedenen Websites/Tabs auf sichere Weise auszutauschen, aber dies sind fortgeschrittene Techniken, die wir in diesem Kurs nicht behandeln werden.

### JavaScript-Ausführungsreihenfolge

Wenn der Browser auf einen Block JavaScript trifft, wird er im Allgemeinen in der Reihenfolge von oben nach unten ausgeführt.
Das bedeutet, dass Sie vorsichtig sein müssen, in welcher Reihenfolge Sie Dinge anordnen.
Lassen Sie uns beispielsweise zum Block JavaScript zurückkehren, den wir in unserem ersten Beispiel gesehen haben:

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Hier wählen wir zuerst einen Button mit `document.querySelector` aus, dann fügen wir ihm mit `addEventListener` einen Ereignis-Listener hinzu, sodass beim Klicken auf den Button der Codeblock `updateName()` (Zeilen 5–8) ausgeführt wird. Der Codeblock `updateName()` (diese Art von wiederverwendbaren Codeblöcken nennt man "Funktionen") fordert den Benutzer auf, einen neuen Namen einzugeben, und fügt dann diesen Namen in den Button-Text ein, um die Anzeige zu aktualisieren.

Wenn Sie die Reihenfolge der ersten beiden Codezeilen vertauschen, würde es nicht mehr funktionieren — stattdessen erhalten Sie einen Fehler in der [Browser-Entwicklerkonsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) zurück — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Das bedeutet, dass das `button`-Objekt noch nicht initialisiert wurde, daher können wir keinen Event-Listener hinzufügen.

> [!NOTE]
> Dies ist ein sehr häufiger Fehler — Sie müssen sicherstellen, dass die in Ihrem Code referenzierten Objekte existieren, bevor Sie versuchen, etwas mit ihnen zu machen.

### Interpretierter gegenüber kompilierter Code

Sie könnten die Begriffe **interpretiert** und **kompiliert** im Kontext der Programmierung hören.
Bei interpretierten Sprachen wird der Code von oben nach unten ausgeführt und das Ergebnis der Ausführung des Codes wird sofort zurückgegeben.
Sie müssen den Code nicht in eine andere Form umwandeln, bevor der Browser ihn ausführt.
Der Code wird in seiner benutzerfreundlichen Textform empfangen und direkt daraus verarbeitet.

Kompilierte Sprachen hingegen werden vor der Ausführung auf dem Computer in eine andere Form umgewandelt (kompiliert).
Zum Beispiel werden C/C++ in Maschinencode kompiliert, der dann vom Computer ausgeführt wird.
Das Programm wird in einem binären Format ausgeführt, das aus dem ursprünglichen Programmiersource-Code generiert wurde.

JavaScript ist eine leichtgewichtige interpretierte Programmiersprache.
Der Webbrowser erhält den JavaScript-Code in seiner ursprünglichen Textform und führt das Skript von dort aus.
Aus technischer Sicht verwenden die meisten modernen JavaScript-Interpreter tatsächlich eine Technik namens **Just-in-time-Compilierung**, um die Leistung zu verbessern; der JavaScript-Sourcecode wird in ein schnelleres, binäres Format kompiliert, während das Skript verwendet wird, sodass es so schnell wie möglich ausgeführt werden kann.
JavaScript wird jedoch immer noch als interpretierte Sprache betrachtet, da die Kompilierung zur Laufzeit und nicht im Voraus erfolgt.

Es gibt bei beiden Sprachtypen Vor- und Nachteile, aber diese wollen wir derzeit nicht diskutieren.

### Serverseitiger vs. clientseitiger Code

Sie könnten auch die Begriffe **serverseitiger** und **clientseitiger** Code hören, insbesondere im Kontext der Webentwicklung.
Clientseitiger Code ist Code, der auf dem Computer des Benutzers ausgeführt wird — wenn eine Webseite angezeigt wird, wird der clientseitige Code der Seite heruntergeladen, dann ausgeführt und im Browser angezeigt.
In diesem Modul sprechen wir ausdrücklich über **clientseitiges JavaScript**.

Serverseitiger Code hingegen wird auf dem Server ausgeführt und seine Ergebnisse werden heruntergeladen und im Browser angezeigt.
Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, ASP.NET und sogar JavaScript!
JavaScript kann auch als serverseitige Sprache verwendet werden, zum Beispiel in der beliebten Node.js-Umgebung — Sie können mehr über serverseitiges JavaScript in unserem Thema [dynamische Websites – Serverseitige Programmierung](/de/docs/Learn/Server-side) erfahren.

### Dynamischer vs. statischer Code

Das Wort **dynamisch** wird sowohl zur Beschreibung von clientseitigem JavaScript als auch von serverseitigen Sprachen verwendet — es bezieht sich auf die Fähigkeit, die Anzeige einer Webseite/App zu aktualisieren, um unter verschiedenen Umständen verschiedene Dinge anzuzeigen und bei Bedarf neue Inhalte zu generieren.
Serverside-Code generiert dynamisch neue Inhalte auf dem Server, z.B. indem Daten aus einer Datenbank gezogen werden, während clientseitiges JavaScript dynamisch neue Inhalte im Browser auf dem Client generiert, z.B. indem eine neue HTML-Tabelle erstellt wird, die mit vom Server angeforderten Daten gefüllt wird, und die Tabelle dann in einer dem Benutzer angezeigten Webseite angezeigt wird.
Die Bedeutung ist in den beiden Kontexten etwas unterschiedlich, aber verwandt, und beide Ansätze (serverseitig und clientseitig) arbeiten in der Regel zusammen.

Eine Webseite ohne dynamisch aktualisierte Inhalte wird als **statisch** bezeichnet — sie zeigt den immer gleichen Inhalt an.

## Wie fügen Sie JavaScript Ihrer Seite hinzu?

JavaScript wird Ihrer HTML-Seite auf ähnliche Weise zugefügt wie CSS.
Während CSS {{htmlelement("link")}}-Elemente verwendet, um externe Stylesheets anzuwenden, und {{htmlelement("style")}}-Elemente, um interne Stylesheets auf HTML anzuwenden, benötigt JavaScript nur einen Freund in der Welt von HTML — das {{htmlelement("script")}}-Element. Lassen Sie uns lernen, wie das funktioniert.

### Internes JavaScript

1. Erstellen Sie zunächst eine lokale Kopie unserer Beispieldatei [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Speichern Sie sie in einem sinnvollen Verzeichnis.
2. Öffnen Sie die Datei in Ihrem Webbrowser und in Ihrem Texteditor. Sie werden sehen, dass das HTML eine einfache Webseite erstellt, die einen anklickbaren Button enthält.
3. Gehen Sie als nächstes zu Ihrem Texteditor und fügen Sie am Ende Ihres Bodys — direkt vor Ihrem abschließenden `</body>`-Tag — folgendes hinzu:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Beachten Sie, dass der Code in Ihren Webdokumenten generell in der Reihenfolge geladen und ausgeführt wird, in der er auf der Seite erscheint. Indem Sie das JavaScript an das Ende setzen, stellen Sie sicher, dass alle HTML-Elemente geladen sind. (Siehe auch [Script-Ladestrategien](#script-ladestrategien) unten.)

4. Jetzt fügen wir etwas JavaScript in unser {{htmlelement("script")}}-Element ein, um die Seite interessanter zu machen — fügen Sie folgenden Code direkt unter die "// JavaScript goes here"-Zeile hinzu:

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

5. Speichern Sie Ihre Datei und aktualisieren Sie den Browser — jetzt sollten Sie sehen, dass, wenn Sie auf den Button klicken, ein neuer Absatz generiert und unten hinzugefügt wird.

> [!NOTE]
> Wenn Ihr Beispiel scheinbar nicht funktioniert, gehen Sie die Schritte erneut durch und prüfen Sie, ob Sie alles richtig gemacht haben.
> Haben Sie Ihre lokale Kopie des Startcodes als `.html`-Datei gespeichert?
> Haben Sie Ihr {{htmlelement("script")}}-Element direkt vor dem `</body>`-Tag hinzugefügt?
> Haben Sie das JavaScript genau so eingegeben, wie gezeigt? **JavaScript ist case-sensitive und sehr genau, daher müssen Sie die Syntax genau so eingeben, wie gezeigt, sonst funktioniert es möglicherweise nicht.**

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### Externes JavaScript

Das funktioniert prima, aber was, wenn wir unser JavaScript in eine externe Datei legen wollten? Lassen Sie uns das jetzt erkunden.

1. Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre Muster-HTML-Datei. Nennen Sie sie `script.js` — achten Sie darauf, dass sie diese .js-Dateiendung hat, da sie so als JavaScript erkannt wird.
2. Entfernen Sie Ihr aktuelles {{htmlelement("script")}}-Element unten im `</body>` und fügen Sie folgendes direkt vor dem schließenden `</head>`-Tag hinzu (damit der Browser die Datei früher laden kann, als wenn sie am Ende ist):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Fügen Sie in `script.js` folgendes Skript hinzu:

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

4. Speichern und aktualisieren Sie Ihren Browser. Sie werden feststellen, dass das Klicken auf den Button keine Wirkung zeigt, und wenn Sie die Konsole Ihres Browsers überprüfen, werden Sie einen Fehler sehen, der etwa lautet `Cross-origin request blocked`. Das liegt daran, dass wie viele externe Ressourcen JavaScript-Module von derselben [Origin](/de/docs/Web/Security/Same-origin_policy) wie das HTML geladen werden müssen, und `file://`-URLs nicht qualifizieren. Es gibt zwei Lösungen für dieses Problem:
   - Unsere empfohlene Lösung ist es, der [Anleitung zum Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu folgen. Mit dem laufenden Serverprogramm, das die `apply-javascript-external.html` und `script.js`-Dateien auf Port `8000` bereitstellt, öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:8000`.
   - Wenn Sie keinen lokalen Server betreiben können, können Sie auch `<script defer src="script.js"></script>` anstelle von `<script type="module" src="script.js"></script>` verwenden. Siehe [Script-Ladestrategien](#script-ladestrategien) unten für mehr Informationen. Aber beachten Sie, dass Features, die wir in anderen Teilen des Tutorials verwenden, ohnehin einen lokalen HTTP-Server erfordern können.
5. Jetzt funktioniert die Website genauso wie zuvor, aber jetzt haben wir unser JavaScript in einer externen Datei.
   Dies ist im Allgemeinen eine gute Sache, um Ihren Code zu organisieren und ihn über mehrere HTML-Dateien hinweg wiederverwendbar zu machen.
   Außerdem ist das HTML lesbarer, ohne große Skripte darin abzuladen.

> [!NOTE]
> Sie können diese Version auf GitHub als [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) und [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline-JavaScript-Handler

Beachten Sie, dass Sie manchmal auf JavaScript-Code stoßen werden, der direkt im HTML steht.
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

Dieses Demo hat genau die gleiche Funktionalität wie in den vorherigen beiden Abschnitten, außer dass das {{htmlelement("button")}}-Element einen Inline-`onclick`-Handler enthält, um die Funktion beim Drücken des Buttons auszuführen.

**Bitte tun Sie dies jedoch nicht.** Es ist schlechte Praxis, Ihr HTML mit JavaScript zu verschmutzen, und es ist ineffizient — Sie müssten das Attribut `onclick="createParagraph()"` zu jedem Button hinzufügen, auf den JavaScript angewendet werden soll.

### Die Verwendung von addEventListener stattdessen

Verwenden Sie statt JavaScript in Ihr HTML einzubetten, eine reine JavaScript-Konstruktion.
Die Funktion `querySelectorAll()` ermöglicht es Ihnen, alle Buttons auf einer Seite auszuwählen.
Sie können dann durch die Buttons schleifen und jedem mit `addEventListener()` einen Handler zuweisen.
Der Code dafür ist unten gezeigt:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Dies mag etwas länger sein als das `onclick`-Attribut, aber es wird für alle Buttons funktionieren — egal wie viele auf der Seite sind, noch wie viele hinzugefügt oder entfernt werden.
Der JavaScript-Code muss nicht verändert werden.

> [!NOTE]
> Versuchen Sie Ihre Version von `apply-javascript.html` zu bearbeiten und fügen Sie einige weitere Buttons in die Datei ein.
> Wenn Sie neu laden, sollten Sie feststellen, dass alle Buttons beim Klick einen Absatz erstellen.
> Ziemlich cool, oder?

### Script-Ladestrategien

Der gesamte HTML-Code auf einer Seite wird in der Reihenfolge geladen, in der er erscheint.
Wenn Sie JavaScript verwenden, um Elemente auf der Seite zu manipulieren (oder genauer gesagt, das [Document Object Model](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), funktioniert Ihr Code nicht, wenn das JavaScript geladen und analysiert wird, bevor das HTML, mit dem Sie etwas machen wollen.

Es gibt einige verschiedene Strategien, um sicherzustellen, dass Ihr JavaScript nur nach dem Parsen des HTML ausgeführt wird:

- Im Beispiel mit internem JavaScript oben ist das Skriptelement am unteren Rand des Dokuments platziert, und wird daher nur nach dem Parsen des gesamten HTML-Bodys ausgeführt.
- Im Beispiel mit externem JavaScript oben ist das Skriptelement im Kopf des Dokuments platziert, bevor der HTML-Body geparst wird. Da wir jedoch `<script type="module">` verwenden, wird der Code als [Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und der Browser wartet, bis der gesamte HTML-Prozess abgeschlossen ist, bevor er JavaScript-Module ausführt. (Sie könnten auch externe Skripte am unteren Rand des Bodys platzieren. Aber wenn es viele HTML gibt und das Netzwerk langsam ist, könnte es viel Zeit in Anspruch nehmen, bevor der Browser das Skript überhaupt laden und ausführen kann, daher ist es im Allgemeinen besser, externe Skripte im Kopf zu platzieren.)
- Wenn Sie immer noch nicht-module Skripte im Kopf des Dokuments verwenden möchten, die die gesamte Anzeige der Seite blockieren und Fehler verursachen könnten, weil sie ausgeführt werden, bevor das HTML analysiert wird:

  - Für externe Skripte sollten Sie das `defer` (oder wenn das HTML nicht bereit sein muss, das `async`) Attribut auf dem {{htmlelement("script")}}-Element hinzufügen.
  - Für interne Skripte sollten Sie den Code in einem [DOMContentLoaded-Event-Listener](/de/docs/Web/API/Document/DOMContentLoaded_event) umschließen.

  Dies liegt außerhalb des Umfangs des Tutorials an dieser Stelle, aber es sei denn, Sie müssen sehr alte Browser unterstützen, müssen Sie dies nicht tun und können einfach `<script type="module">` verwenden.

## Kommentare

Wie bei HTML und CSS ist es möglich, Kommentare in Ihren JavaScript-Code zu schreiben, die vom Browser ignoriert werden und existieren, um Ihren Mitentwicklern Anweisungen darüber zu geben, wie der Code funktioniert (und Ihnen selbst, wenn Sie nach sechs Monaten zu Ihrem Code zurückkehren und nicht mehr wissen, was Sie getan haben).
Kommentare sind sehr nützlich, und Sie sollten sie oft verwenden, insbesondere bei größeren Anwendungen.
Es gibt zwei Typen:

- Einzeiler-Kommentare werden nach einem doppelten Schrägstrich (`//`) geschrieben, z.B.

  ```js
  // Ich bin ein Kommentar
  ```

- Mehrzeilige Kommentare werden zwischen den Zeichenfolgen `/*` und `*/` geschrieben, z.B.

  ```js
  /*
    Ich bin auch
    ein Kommentar
  */
  ```

Zum Beispiel könnten wir das JavaScript unseres letzten Demos mit Kommentaren wie folgt kommentieren:

```js
// Funktion: erstellt einen neuen Absatz und hängt ihn am Ende des HTML-Bodys an.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. Holen Sie sich Referenzen zu allen Buttons auf der Seite in einem Array-Format.
  2. Schleifen Sie durch alle Buttons und fügen Sie jedem einen Klick-Ereignis-Listener hinzu.

  Wenn ein beliebiger Button gedrückt wird, wird die createParagraph()-Funktion ausgeführt.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> Im Allgemeinen sind mehr Kommentare in der Regel besser als weniger, aber Sie sollten vorsichtig sein, wenn Sie feststellen, dass Sie viele Kommentare hinzufügen, um zu erklären, was Variablen sind (vielleicht sollten Ihre Variablennamen intuitiver sein) oder um sehr einfache Vorgänge zu erklären (vielleicht ist Ihr Code überkomplex).

## Zusammenfassung

Da haben Sie es, Ihren ersten Schritt in die Welt von JavaScript.
Wir haben nur mit Theorie begonnen, um Sie daran zu gewöhnen, warum Sie JavaScript verwenden würden und welche Art von Dingen Sie damit machen können.
Unterwegs haben Sie einige Codebeispiele gesehen und gelernt, wie JavaScript in den restlichen Code auf Ihrer Website passt, neben anderen Dingen.

JavaScript mag im Moment etwas entmutigend erscheinen, aber keine Sorge — in diesem Kurs werden wir Sie in einfachen Schritten durchführen, die in Zukunft Sinn ergeben werden.
Im nächsten Artikel werden wir [direkt in das Praktische eintauchen](/de/docs/Learn/JavaScript/First_steps/A_first_splash), sodass Sie Ihre eigenen JavaScript-Beispiele erstellen können.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
