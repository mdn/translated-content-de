---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Websites hinzufügt. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Tasten gedrückt werden, oder bei der Dateneingabe in Formularen, mit dynamischem Styling, mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und zu verstehen, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Bezug auf Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlagen der JavaScript-Sprache wie Variablen, Operatoren, Bedingungsanweisungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Website hinzufügen kann. Es wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich. Mit mehr Erfahrung werden Sie in der Lage sein, Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Anwendungen und vieles mehr zu erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf Basis der Kernprogrammiersprache JavaScript entwickelt, die eine enorme Funktionalität mit minimalem Aufwand freisetzen. Dazu gehören:

- Browser Application Programming Interfaces ({{Glossary("API", "APIs")}}), die in Webbrowsern integriert sind und Funktionen wie das dynamische Erstellen von HTML und Einstellen von CSS-Stilen, das Sammeln und Manipulieren eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audio-Samples bereitstellen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Aufbau von Websites und Anwendungen zu beschleunigen.

Es ist nicht der Umfang dieses Artikels – als leichter Einstieg in JavaScript – die Details zu präsentieren, wie die Kernprogrammiersprache JavaScript sich von den oben genannten Tools unterscheidet. Sie können mehr in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN erfahren.

Der folgende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Gelegenheit, mit einigen Funktionen von Browser-APIs zu spielen. Viel Spaß!

## Ein "Hello world!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Kenntnisse wachsen, werden Ihre Websites eine neue Dimension von Leistung und Kreativität erreichen.

Allerdings ist es anspruchsvoller, sich mit JavaScript vertraut zu machen, als sich mit HTML und CSS wohlzufühlen. Sie sollten klein beginnen und sich schrittweise steigern. Um zu beginnen, schauen wir uns an, wie man JavaScript auf Ihre Seite hinzufügt, um ein _Hello world!_ Beispiel zu erstellen. (_Hello world!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie unserem Kurs bisher nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website` Ordner oder dem soeben heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument mit dem Namen `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html` Datei und fügen Sie diesen Code in einer neuen Zeile direkt vor dem schließenden `</body>` Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt denselben Zweck wie das {{htmlelement("link")}} Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.

4. Fügen Sie diesen Code in Ihre `scripts/main.js` Datei ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas wie folgt sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}} Element in der Nähe des Endes der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen ist, könnte es Probleme geben. Das Platzieren von JavaScript nahe dem Ende einer HTML-Seite ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hello world!_ zu ändern. Wir haben dies getan, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf Ihre Überschrift zu erhalten und sie dann in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren getan haben. Wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Anschließend hat der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft der `myHeading` Variable (die den Inhalt der Überschrift darstellt) auf _Hello world!_ festgelegt.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung verwendet haben, sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Grundlagen der Sprache im Crash-Kurs

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, erklären wir einige der grundlegenden Merkmale der Sprache. Es ist wichtig zu wissen, dass diese Merkmale allen Programmiersprachen gemein sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Geben Sie in diesem Artikel die Beispielcodezeilen in Ihre JavaScript-Konsole ein, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entwicklerwerkzeuge im Browser entdecken](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Schlüsselwort, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute halten es jedoch für eine gute Praxis, Semikolons am Ende jeder Anweisung zu setzen. Es gibt andere Regeln, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Details finden Sie unter [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variable nahezu jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Dies bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Außerdem können Sie beide Operationen in derselben Zeile durchführen:

```js
let myVariable = "Bob";
```

Sie rufen den Wert ab, indem Sie den Variablennamen aufrufen:

```js
myVariable;
```

Nachdem Sie einer Variable einen Wert zugewiesen haben, können Sie ihn später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte unterschiedlicher [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) haben können:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Variable</th>
      <th scope="col">Erläuterung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String", "String")}}</th>
      <td>
        Dies ist eine Zeichenfolge, die als Zeichenfolge bekannt ist. Um anzugeben, dass der Wert
        eine Zeichenfolge ist, schließen Sie sie in einfache oder doppelte Anführungszeichen ein.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean", "Boolean")}}</th>
      <td>
        Dies ist ein True/False-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einer einzigen
        Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Greifen Sie auf jedes
        Mitglied des Arrays so zu:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, etc.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann
        in einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle oben genannten Beispiele ebenfalls.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir Variablen? Variablen sind notwendig, um in der Programmierung etwas Interessantes zu tun. Wenn sich Werte nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie eine Begrüßungsnachricht personalisieren oder ein Bild ändern, das in einer Bildergalerie angezeigt wird.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert als Kommentar markierten Text. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstrichen notieren:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren, zusammen mit einigen Beispielen zum Ausprobieren in der JavaScript-Konsole.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Operator</th>
      <th scope="col">Erläuterung</th>
      <th scope="col">Symbol(e)</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Addition</th>
      <td>Fügt zwei Zahlen zusammen oder kombiniert zwei Strings.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun das, was Sie in der grundlegenden Mathematik erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiplizieren in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben: Dies weist einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strenge Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom gleichen Datentyp sind. Es gibt ein
        <code>true</code>/<code>false</code> (Boolean) Ergebnis zurück.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Dies gibt den logischen gegenteiligen Wert dessen zurück, was es vorhergeht. Es verwandelt
        ein <code>true</code> in ein <code>false</code>, etc.. Wenn es zusammen
        mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei
        Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht", der grundlegende Ausdruck ist <code>true</code>, aber der
          Vergleich ergibt <code>false</code>, weil wir es negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" ergibt im Wesentlichen dasselbe Ergebnis mit einer anderen
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich
          3". Dies gibt <code>false</code> zurück, weil <code>myVariable</code> IST
          gleich 3:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu erkunden, aber das reicht erstmal. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu unerwarteten Ergebnissen bei Berechnungen führen. Seien Sie vorsichtig, dass Sie auf Ihre Variablen korrekt verweisen und die erwarteten Ergebnisse erzielen. Zum Beispiel, geben Sie `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings verwandeln, sodass Sie letztendlich Strings verketten statt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungsanweisungen

Bedingungsanweisungen sind Code-Strukturen, die testen, ob ein Ausdruck wahr ist oder nicht. Eine sehr häufige Form von Bedingungsanweisungen ist die `if...else` Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb des `if ()` ist der Test. Hierbei wird der strikte Gleichheitsoperator (wie oben beschrieben) verwendet, um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird der zweite Codeblock – nach dem `else` Schlüsselwort – stattdessen ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu paketieren, die Sie wiederverwenden möchten. Es ist möglich, einen Codeblock als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative zum wiederholten Schreiben desselben Codes. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()` und `alert()` Funktionen sind im Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()`, ist es wahrscheinlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}}: Datenbits, die sie zur Ausführung ihrer Aufgabe benötigen. Argumente gehen in Klammern, getrennt durch Kommas, wenn mehr als ein Argument vorhanden ist.

Zum Beispiel macht die `alert()` Funktion ein Pop-up-Fenster im Browserfenster erscheinen, aber wir müssen ihr einen String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen; testen Sie dann mit mehreren Argumenten. Zum Beispiel:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung fordert den Browser auf, die `result` Variable aus der Funktion zurückzugeben, sodass sie nutzbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird Variablen-Scoping genannt. (Lesen Sie mehr über [Variablen-Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

> [!NOTE]
> Wenn Sie mehr Übung im Schreiben von Funktionen wünschen, bietet unser Lernpartner Scrimba mehrere interaktive Funktionen-Herausforderungen, die Sie kostenlos nutzen können, sowie viele andere Lernthemen. Siehe [Eine Funktion schreiben, die die Summe protokolliert](https://scrimba.com/learn-javascript-c0v/~0c?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> als Beispiel.

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Code-Strukturen, die auf Aktivitäten im Browser warten und daraufhin Code ausführen. Das offensichtlichste Beispiel ist die Behandlung des [Click-Events](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit Ihrer Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das folgende in Ihrer Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt mehrere Möglichkeiten, einen Ereignishandler an ein Element anzuhängen. Hier wählen wir das {{htmlelement("html")}} Element aus. Dann rufen wir seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Funktion auf, geben den Namen des zu hörenden Ereignisses (`'click'`) und eine Funktion an, die ausgeführt wird, wenn das Ereignis eintritt.

Die Funktion, die wir gerade `addEventListener()` übergeben haben, ist eine _anonyme Funktion_, weil sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir _Arrow-Funktion_ nennen. Eine Arrow-Funktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website mit mehr Funktionen versehen

Mit unserem Rückblick auf die Grundlagen von JavaScript abgeschlossen, fügen wir unserer Beispiel-Website einige neue Funktionen hinzu.

Bevor wir weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js` Datei - das Stück, das Sie zuvor im "Hello world!" Beispiel hinzugefügt haben - und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt stehen.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt lernen Sie, wie Sie JavaScript- und DOM-API-Funktionen verwenden, um zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das auf Ihrer Beispiel-Website gezeigt werden soll. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild haben oder so nah wie möglich daran.
2. Speichern Sie dieses Bild in Ihrem `images` Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js` Datei hinzu und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweiten und ersten Bildnamen:

   ```js
   const myImage = document.querySelector("img");

   myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollte, wenn Sie das Bild anklicken, es in das andere Bild wechseln.

Im obigen Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}} Element in `myImage` gespeichert. Anschließend gaben Sie ihm einen `click` Ereignishandler mit keinem Namen (eine "anonyme" Funktion). Jedes Mal, wenn auf dieses Element geklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src` Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu prüfen, ob der `src` Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn ja, ändert der Code den `src` Wert in den Pfad des zweiten Bildes, sodass das andere Bild im {{htmlelement("img")}} Element geladen wird.
   2. Wenn nicht (das bedeutet, es muss sich bereits geändert haben), wechselt der `src` Wert zurück zum Pfad des ursprünglichen Bildes.

### Hinzufügen einer personalisierten Willkommensnachricht

Als Nächstes ändern wir die Seitenüberschrift in eine personalisierte Willkommensnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt erhalten. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit Hilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir fügen auch eine Option hinzu, um den Benutzernamen zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor das {{htmlelement("script")}} Element ein:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau so, wie er geschrieben ist. Dies erstellt Referenzen auf die neue Schaltfläche und die Überschrift, die jeweils in Variablen gespeichert werden:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Dies wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()` Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt) Funktion, die ein Dialogfenster anzeigt, ähnlich wie `alert()`. Diese `prompt()` Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben, und sie in einer Variablen speichert, nachdem der Benutzer auf _OK_ klickt. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Anschließend ruft der Code die `localStorage` API auf, mit der wir Daten im Browser speichern und später abrufen können. Wir verwenden die Funktion `setItem()` von localStorage, um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, dessen Wert auf die `myName` Variable festgelegt wird, die den Benutzereintrag für den Namen enthält. Schließlich setzen wir die `textContent` der Überschrift auf eine Zeichenfolge plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten diesen Initialisierungscode nennen, da er die App beim ersten Laden strukturiert.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Diese erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NOT, dargestellt durch das `!`), um zu überprüfen, ob das `name` Datenobjekt bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()` Funktion ausgeführt, um es zu erstellen. Wenn es existiert (das bedeutet, dass der Benutzer während eines früheren Besuchs einen Benutzernamen festgelegt hat), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen die `textContent` der Überschrift auf eine Zeichenfolge plus den Benutzernamen, wie wir es innerhalb von `setUserName()` getan haben.

5. Fügen Sie der Schaltfläche eine `click` Ereignishandler-Funktion hinzu, wie unten gezeigt. Wenn sie geklickt wird, läuft `setUserName()`. Dadurch kann der Benutzer einen anderen Namen eingeben, indem er die Schaltfläche drückt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_ Schaltfläche zu drücken. Sie sollten mit einem Titel enden, der _Mozilla is cool, null_ lautet. Dies geschieht, weil der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der sich auf das Fehlen eines Wertes bezieht.

Auch versuchen Sie, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla is cool,_ lautet, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()` Funktion auf diese:

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
```

In Menschensprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr wie das folgende Bild aussieht. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, ein groß zentriertes Logo, Inhalte und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Jetzt, da Sie Ihre Website erstellt haben, ist der nächste Schritt, sie online zu stellen, damit andere sie betrachten können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Veröffentlichen Sie Ihre Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Scrimba: Lernen Sie JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn JavaScript_ Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt JavaScript durch das Lösen von mehr als 140 interaktiven Programmierherausforderungen, den Bau von Projekten einschließlich eines Spiels, einer Browsererweiterung und sogar einer mobilen App. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern gelehrt werden.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
