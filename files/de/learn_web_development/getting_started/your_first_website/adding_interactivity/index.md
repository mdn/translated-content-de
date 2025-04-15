---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Websites hinzufügt. Dies geschieht in Spielen, beim Verhalten von Antworten, wenn Tasten gedrückt werden, beim Dateneintrag in Formulare, bei dynamischem Styling, bei Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dafür zu vertiefen, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlegende JavaScript-Kenntnisse wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Website hinzufügen kann.
Es wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich.
Mit mehr Erfahrung werden Sie in der Lage sein, Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Anwendungen und vieles mehr zu erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools über die Kernsprache von JavaScript entwickelt und damit eine enorme Menge an Funktionalität mit minimalem Aufwand freigeschaltet. Dazu gehören:

- In Webbrowsern integrierte Browser-Programmierschnittstellen ({{Glossary("API", "APIs")}}), die Funktionen wie dynamisches Erstellen von HTML und Festlegen von CSS-Stilen, Sammeln und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder Generieren von 3D-Grafiken und Audiosamples bereitstellen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels—als eine leichte Einführung in JavaScript—die Details zu präsentieren, wie sich die Kernsprache von JavaScript von den oben genannten Tools unterscheidet. Sie können mehr in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN erfahren.

Der Abschnitt unten führt einige Aspekte der Kernsprache ein und bietet die Gelegenheit, mit einigen Funktionen der Browser-API zu spielen. Viel Spaß!

## Ein "Hallo Welt!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit zunehmenden JavaScript-Fähigkeiten betreten Ihre Websites eine neue Dimension von Leistung und Kreativität.

Allerdings ist es herausfordernder, sich mit JavaScript vertraut zu machen als mit HTML und CSS. Sie sollten klein anfangen und sich allmählich steigern. Beginnen wir damit, zu untersuchen, wie JavaScript zu Ihrer Seite hinzugefügt wird, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://de.wikipedia.org/wiki/Hallo-Welt-Programm).)

> [!WARNING]
> Wenn Sie nicht dem restlichen Kurs gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem soeben heruntergeladenen Beispielordner einen neuen Ordner mit dem Namen `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und fügen Sie diesen Code in einer neuen Zeile kurz vor dem schließenden `</body>`-Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt den gleichen Zweck wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.

4. Fügen Sie diesen Code Ihrer `scripts/main.js`-Datei hinzu:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihren Browser. Sie sollten etwas wie das Folgende sehen:

![Überschrift "Hallo Welt" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}}-Element nahe dem unteren Ende der HTML-Datei positionieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst lädt und es soll das HTML beeinflussen, das noch nicht geladen ist, könnte es zu Problemen kommen. Das Platzieren von JavaScript nahe dem Ende einer HTML-Seite ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hallo Welt!_ zu ändern. Wir haben dies erreicht, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) genutzt haben, um eine Referenz zu Ihrer Überschrift zu erhalten und sie in einer Variable namens `myHeading` zu speichern. Dies ist ähnlich dem, was wir mithilfe von CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element machen möchten, müssen Sie es zuerst auswählen.

Danach hat der Code den Wert der [`textContent`]-Eigenschaft (/de/docs/Web/API/Node/textContent) der `myHeading`-Variable (die den Inhalt der Überschrift darstellt) auf _Hallo Welt!_ gesetzt.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung genutzt haben, sind Teile der [API des Document Object Models (DOM)](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Crashkurs: Grundlagen der Sprache

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, lassen Sie uns einige der Kernfunktionen der Sprache erklären. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Versuchen Sie in diesem Artikel, die Beispielcodezeilen in die JavaScript-Konsole einzugeben, um zu sehen, was passiert. Für mehr Details zu JavaScript-Konsolen siehe [Entdecken Sie Entwicklertools im Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen damit, eine Variable mit dem [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselwort zu deklarieren, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es wird nur benötigt, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu setzen. Es gibt andere Regeln, wann Sie Semikolons verwenden sollten und wann nicht. Für mehr Details siehe [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variable nahezu jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitive. Das bedeutet, `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie den Fall!

Nach der Deklaration einer Variablen können Sie ihr einen Wert zuweisen:

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

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie ihn später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte halten können, die unterschiedliche [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) haben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Variable</th>
      <th scope="col">Erklärung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String", "String")}}</th>
      <td>
        Dies ist eine Textsequenz, bekannt als String. Um anzugeben, dass der Wert ein String ist, schließen Sie ihn in einzelne oder doppelte Anführungszeichen ein.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen um sich.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean", "Boolean")}}</th>
      <td>
        Dies ist ein wahr/falsch-Wert. Die Wörter <code>true</code> und <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen erlaubt, mehrere Werte in einer einzigen Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes Mitglied des Arrays wie folgt:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle der obigen Beispiele ebenfalls.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um irgendetwas Interessantes in der Programmierung zu tun. Wenn sich Werte nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie eine Begrüßungsnachricht personalisieren oder ein Bild in einer Galerie ändern.

### Kommentare

Kommentare sind Textschnipsel, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert als Kommentare markierten Text. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstrichen wie folgt setzen:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) produziert. In der folgenden Tabelle können Sie einige der einfachsten Operatoren sehen, zusammen mit ein paar Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Operator</th>
      <th scope="col">Erklärung</th>
      <th scope="col">Symbol(e)</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Addition</th>
      <td>Zwei Zahlen addieren oder zwei Strings kombinieren.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hallo ' + 'Welt!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun, was man in der Grundmathematik erwarten würde.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // Multiplikation in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben, weist dies einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
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
        Dies gibt den logisch entgegengesetzten Wert von dem zurück, was es vorangeht. Es verwandelt
        ein <code>true</code> in ein <code>false</code> usw. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, überprüft der Negationsoperator, ob zwei
        Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der
          Vergleich gibt <code>false</code> zurück, weil wir ihn negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" ergibt im Wesentlichen dasselbe Ergebnis mit unterschiedlicher
          Syntax. Hier überprüfen wir "ist <code>myVariable</code> NICHT gleich
          3". Dies gibt <code>false</code> zurück, weil <code>myVariable</code> GLEICH
          3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu entdecken, aber das reicht für jetzt. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Seien Sie vorsichtig, dass Sie Ihre Variablen korrekt referenzieren und die erwarteten Ergebnisse erhalten. Zum Beispiel, geben Sie `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings verwandeln, sodass Sie letztlich Strings konkateniert und nicht Zahlen addiert haben. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der zwei Zahlen.

### Bedingungsanweisungen

Bedingungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck `true` oder `false` zurückgibt. Eine sehr häufige Form von Bedingungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb des `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob sie gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird stattdessen der zweite Codeblock—nach dem `else`-Schlüsselwort—ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind ein Weg, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative, um denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungszwecke von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()` und `alert()`-Funktionen sind im Browser eingebaut.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber es wird von Klammern gefolgt—`()`—ist es wahrscheinlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} entgegen: Daten, die sie benötigen, um ihre Aufgabe zu erledigen. Argumente gehen innerhalb der Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel lässt die `alert()`-Funktion ein Pop-up-Fenster im Browserfenster erscheinen, aber wir müssen ihr einen String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung sagt dem Browser, die `result`-Variable aus der Funktion zurückzugeben, damit sie verfügbar ist. Dies ist notwendig, weil Variablen, die in Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Das nennt man Variablen-{{Glossary("Scope", "Scoping")}}. (Lesen Sie mehr über [Variablen-Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

> [!NOTE]
> Wenn Sie etwas mehr Übung beim Schreiben von Funktionen möchten, hat unser Lernpartner Scrimba mehrere interaktive Funktionsherausforderungen, auf die Sie kostenlos zugreifen können, sowie viele andere Lernthemen. Siehe [Write a function that logs the sum](https://scrimba.com/learn-javascript-c0v/~0c?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> für ein Beispiel.

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Code-Strukturen, die auf Aktivität im Browser hören und Code als Reaktion darauf ausführen. Das offensichtlichste Beispiel ist die Bearbeitung des [Klick-Ereignisses](/de/docs/Web/API/Element/click_event), das ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt mehrere Möglichkeiten, einen Ereignishandler an ein Element anzuhängen.
Hier wählen wir das {{htmlelement("html")}}-Element aus. Dann rufen wir seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, um den Namen des Ereignisses anzugeben, auf das geachtet werden soll (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis auftritt.

Die Funktion, die wir hier an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, weil sie keinen Namen hat. Es gibt eine alternative Schreibweise für anonyme Funktionen, die wir _Pfeilfunktion_ nennen.
Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website optimieren

Mit unserem Überblick über die JavaScript-Grundlagen abgeschlossen, lassen Sie uns einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

Bevor wir weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei—den Teil, den Sie zuvor im "Hallo Welt!"-Beispiel hinzugefügt haben—und speichern Sie die leere Datei. Wenn Sie das nicht tun, wird der bestehende Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt lernen Sie, wie Sie mithilfe von JavaScript und DOM-API-Funktionen den Wechsel zwischen zwei Bildern anzeigen können. Diese Änderung erfolgt, wenn ein Benutzer das angezeigte Bild anklickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispiel-Website präsentieren möchten. Im Idealfall ist das Bild genau so groß wie das Bild, das Sie zuvor hinzugefügt haben, oder so nah wie möglich.
2. Speichern Sie dieses Bild im Ordner `images`.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein, und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweite und erste Bildnamen, jeweils.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt, wenn Sie das Bild anklicken, sollte es sich auf das andere ändern.

In dem obigen Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}}-Element in `myImage` gespeichert. Als nächstes haben Sie ihm einen `click`-Ereignishandler mit einem Namen (eine "anonyme" Funktion). Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion Folgendes aus:

1. Sie ruft den Wert des `src`-Attributs des Bildes ab.
2. Sie verwendet eine Bedingung, um zu überprüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, zwingt das andere Bild, im {{htmlelement("img")}}-Element geladen zu werden.
   2. Wenn nicht (was bedeutet, dass es bereits geändert sein muss), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitenüberschrift in eine personalisierte Willkommensnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt bestehen. Wenn der Benutzer die Seite verlässt und später wieder zurückkehrt, speichern wir die Nachricht mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option hinzufügen, um den Benutzernamen zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Fügen Sie in `main.js` den folgenden Code am Ende der Datei ein, genau so, wie er geschrieben ist. Dies erstellt Referenzen zum neuen Button und zur Überschrift, die jeweils in Variablen gespeichert sind:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Diese wird noch nichts bewirken; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion kann mehr als `alert()`, indem sie den Benutzer darum bittet, Daten einzugeben, und sie in einer Variablen speichert, nachdem der Benutzer _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als nächstes wird der `localStorage` API aufgerufen, der es uns ermöglicht, Daten im Browser zu speichern und später wieder abzurufen. Wir verwenden die `setItem()`-Funktion von `localStorage`, um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, wobei der Wert auf die `myName`-Variable gesetzt wird, die die Benutzereingabe für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenfolge plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Dies könnte man Initialisierungscode nennen, da es die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Diese erste Zeile des Blocks verwendet den Negationsoperator (logisches NOT, dargestellt durch das `!`), um zu überprüfen, ob das `name`-Datenobjekt bereits in `localStorage` gespeichert ist. Falls nicht, wird die Funktion `setUserName()` ausgeführt, um es zu erstellen. Wenn es existiert (das bedeutet, der Benutzer hat bei einem früheren Besuch einen Benutzernamen festgelegt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf eine Zeichenfolge plus den Benutzernamen, wie wir es in `setUserName()` gemacht haben.

5. Fügen Sie eine `click`-Ereignishandlerfunktion zum Button hinzu, wie unten gezeigt. Wenn Sie darauf klicken, wird `setUserName()` ausgeführt. Dies erlaubt es dem Benutzer, durch Drücken des Buttons einen anderen Namen einzugeben.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_-Taste zu drücken. Sie sollten letztendlich eine Überschrift erhalten, die _Mozilla ist cool, null_ lautet. Dies passiert, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der die Abwesenheit eines Wertes bezeichnet.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten einen Titel erhalten, der _Mozilla ist cool,_ lautet, weil Sie `myName` auf eine leere Zeichenfolge gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion so:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel gefolgt sind, sollten Sie eine Seite erhalten haben, die so ähnlich aussieht wie das Bild unten. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach Erstellung von Elementen: eine Überschrift, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Da Sie nun Ihre Website erstellt haben, ist der nächste Schritt, sie online zu stellen, damit andere sie sehen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Scrimba: Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn JavaScript_-Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen JavaScript durch das Lösen von über 140 interaktiven Codierungsherausforderungen und den Bau von Projekten, einschließlich eines Spiels, einer Browsererweiterung und sogar einer mobilen App. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern unterrichtet werden.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! JavaScript in einer interaktiven Umgebung lernen, mit kurzen Lektionen und interaktiven Tests, begleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der gesamte Kurs ist für eine geringe einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
