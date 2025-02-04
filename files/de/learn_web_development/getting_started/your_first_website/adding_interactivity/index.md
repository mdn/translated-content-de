---
title: "JavaScript: Interaktivität hinzufügen"
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 12c76ea107c3caacd28c39e33b9ab2dd879f0855
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Websites hinzufügt. Dies geschieht in Spielen, beim Auslösen von Antworten, wenn Tasten gedrückt werden, oder bei der Dateneingabe in Formulare, mit dynamischem Styling, mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis darüber zu erweitern, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlagen der Javascript-Sprache wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Website hinzufügen kann.
Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich.
Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgesteuerte Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf Basis der Kern-JavaScript-Sprache geschrieben, die eine enorme Menge an Funktionen mit minimalem Aufwand freischalten. Dazu gehören:

- Browser-Anwendungsprogrammierschnittstellen ({{Glossary("API", "APIs")}}), die in Webbrowser integriert sind und Funktionen wie das dynamische Erstellen von HTML und das Einstellen von CSS-Stilen, das Erfassen und Manipulieren eines Video-Streams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audio-Samples bieten.
- Drittanbieter-APIs, mit denen Entwickler Funktionalitäten von anderen Content-Anbietern wie YouTube oder Facebook in ihre Websites integrieren können.
- Drittanbieter-Frameworks und Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels - als leichte Einführung in JavaScript - die Details darzustellen, wie sich die Kernausführung von JavaScript von den oben genannten Tools unterscheidet. Mehr erfahren Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der unten stehende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Möglichkeit, mit einigen Funktionen der Browser-APIs zu experimentieren. Viel Spaß!

## Ein "Hello world!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Fähigkeiten wachsen, werden Ihre Websites in eine neue Dimension von Kraft und Kreativität eintreten.

Es ist jedoch herausfordernder, sich mit JavaScript vertraut zu machen, als mit HTML und CSS. Sie sollten klein anfangen und allmählich Fortschritte machen. Um zu beginnen, lassen Sie uns untersuchen, wie Sie JavaScript auf Ihre Seite hinzufügen, um ein _Hello world!_ Beispiel zu erstellen. (_Hello world!_ ist [der Standard für einführende Programmiertests](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses noch nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem Ordner `first-website` einen neuen Ordner namens `scripts`.
2. Erstellen Sie innerhalb des Ordners `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer Datei `index.html` und geben Sie diesen Code in einer neuen Zeile ein, kurz vor dem schließenden `</body>` Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt dieselbe Aufgabe, wie das {{htmlelement("link")}} Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es einen Effekt auf das HTML haben kann (zusammen mit dem CSS und allem anderen auf der Seite).

4. Fügen Sie diesen Code Ihrer Datei `scripts/main.js` hinzu:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas sehen, das so aussieht:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}} Element in der Nähe des unteren Endes der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es HTML beeinflussen soll, das noch nicht geladen ist, könnte es Probleme geben. JavaScript nahe dem Ende einer HTML-Seite zu platzieren, ist eine Möglichkeit, dieser Abhängigkeit Rechnung zu tragen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Text der Überschrift in _Hello world!_ zu ändern. Dies haben wir erreicht, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz zu Ihrer Überschrift zu erhalten, und sie in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren getan haben. Wenn Sie etwas mit einem Element machen wollen, müssen Sie es zuerst auswählen.

Danach hat der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der `myHeading`-Variablen (die den Inhalt der Überschrift darstellt) auf _Hello world!_ gesetzt.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung verwendet haben, sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Grundlagen der Sprache - Schnellkurs

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, erklären wir einige der Kernfunktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Codieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel sollten Sie versuchen, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entdecken Sie Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen, indem Sie eine Variable mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) deklarieren, gefolgt vom Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile markiert das Ende einer Anweisung. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Menschen glauben jedoch, dass es gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln, wann man Semikolons verwenden sollte und wann nicht. Weitere Details finden Sie unter [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Sehen Sie sich diesen Abschnitt über Namensregeln an](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie sich unsicher sind, können Sie Ihren [Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß-/Kleinschreibung!

Nach der Deklaration einer Variablen können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Sie können diese beiden Operationen auch in derselben Zeile durchführen:

```js
let myVariable = "Bob";
```

Sie rufen den Wert ab, indem Sie den Variablennamen aufrufen:

```js
myVariable;
```

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie diesen später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte verschiedener [Datentypen](/de/docs/Web/JavaScript/Data_structures) halten können:

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
        Dies ist eine Textfolge, bekannt als Zeichenkette. Um anzuzeigen, dass der Wert eine Zeichenkette ist, umgeben Sie ihn mit einfachen oder doppelten Anführungszeichen.
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
        Dies ist ein Wahr-/Falsch-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einer einzigen Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes Element des Arrays wie folgt:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle obigen Beispiele auch.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir Variablen? Variablen sind notwendig, um in der Programmierung etwas Interessantes zu tun. Wenn Werte sich nicht ändern könnten, dann könnten Sie nichts Dynamisches machen, wie z. B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textschnipsel, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert Text, der als Kommentar markiert ist. Sie können Kommentare in JavaScript schreiben, genau wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn wie folgt hinter zwei Schrägstrichen platzieren:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das auf Basis zweier Werte (oder Variablen) ein Ergebnis liefert. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren sowie einige Beispiele zum Ausprobieren in der JavaScript-Konsole.

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
      <td>Addiert zwei Zahlen oder kombiniert zwei Zeichenfolgen.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese machen das, was Sie von ihnen in der Grundmathematik erwarten.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // Multiplikation in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben: dient dies zur Zuweisung eines Wertes zu einer Variablen.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Es wird ein Test durchgeführt, um festzustellen, ob zwei Werte gleich und vom selben Datentyp sind. Es ergibt ein
        <code>true</code>/<code>false</code> (Boolean) Ergebnis.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Diese liefert den logisch gegenteiligen Wert von dem, was sie vorangeht. Es verwandelt
        ein <code>true</code> in ein <code>false</code>, usw. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der Vergleich gibt <code>false</code> zurück, da wir ihn negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" ergibt im Wesentlichen dasselbe Ergebnis mit anderer Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich 3". Dies ergibt <code>false</code>, da <code>myVariable</code> GLEICH 3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu erkunden, aber das reicht für jetzt. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu merkwürdigen Ergebnissen bei Berechnungen führen. Achten Sie darauf, dass Sie Ihre Variablen richtig referenzieren und die erwarteten Ergebnisse erzielen. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Zeichenfolgen verwandeln, sodass Sie am Ende Zeichenfolgen zusammenfügen statt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungen

Bedingungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr zurückgibt oder nicht. Eine sehr häufige Form von Bedingungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck in `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit der Zeichenkette `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` ergibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird der zweite Codeblock – nach dem `else`-Schlüsselwort – stattdessen ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalitäten zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()`- und `alert()`-Funktionen sind im Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()` — ist es wahrscheinlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} entgegen: Bits von Daten, die sie für ihre Aufgabe benötigen. Argumente gehen in die Klammern, durch Kommas getrennt, wenn es mehr als ein Argument gibt.

Zum Beispiel lässt die `alert()`-Funktion ein Popup-Fenster innerhalb des Browserfensters erscheinen, aber wir müssen ihr eine Zeichenfolge als Argument geben, um der Funktion zu sagen, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen; testen Sie dann mit verschiedenen Argumenten. Zum Beispiel:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung sagt dem Browser, die `result`-Variable aus der Funktion zurückzugeben, sodass sie verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird {{Glossary("Scope", "Scoping von Variablen")}} genannt. (Lesen Sie mehr über [Scoping von Variablen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignis-Handler. Dies sind Code-Strukturen, die auf Aktivitäten im Browser hören und Code als Reaktion darauf ausführen. Das offensichtlichste Beispiel ist das Behandeln des [Click-Events](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie auf etwas mit Ihrer Maus klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein und klicken dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt verschiedene Möglichkeiten, einen Ereignis-Handler an ein Element anzuhängen.
Hier wählen wir das {{htmlelement("html")}}-Element aus. Wir rufen dann ihre [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf und übergeben den Namen des zu hörenden Ereignisses (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, ist eine _anonyme Funktion_, da sie keinen Namen hat. Es gibt eine alternative Schreibweise für anonyme Funktionen, die wir einen _Pfeilfunktion_ nennen.
Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website aufladen

Mit unserem Überblick über die JavaScript-Grundlagen abgeschlossen, lassen Sie uns einige neue Funktionen zu unserem Beispiel-Website hinzufügen.

Bevor Sie weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei — den Teil, den Sie vorher während des „Hello world!“-Beispiels hinzugefügt haben — und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen, in Konflikt geraten.

### Einen Bildwechsler hinzufügen

In diesem Abschnitt lernen Sie, wie Sie mit JavaScript und DOM-API-Funktionen den Wechsel zwischen zwei Bildern ermöglichen. Dieser Wechsel erfolgt, wenn ein Nutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispiel-Website zeigen möchten. Idealerweise sollte das Bild dieselbe Größe wie das Bild haben, das Sie zuvor hinzugefügt haben, oder zumindest ähnlich groß sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code in Ihrer `main.js`-Datei hinzu und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihren zweiten und ersten Bildnamen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt, wenn Sie auf das Bild klicken, sollte es sich in das andere verändern.

In dem obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Als Nächstes haben Sie ihm eine `click`-Ereignis-Handler-Funktion zugewiesen, ohne einen Namen (eine "anonyme" Funktion). Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src`-Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu überprüfen, ob der `src`-Wert gleich dem Pfad des Originalbildes ist:

   1. Wenn es ist, ändert der Code den `src`-Wert auf den Pfad des zweiten Bildes, wodurch das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn es nicht der Fall ist (d. h., es muss bereits geändert worden sein), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

### Eine personalisierte Begrüßungsnachricht hinzufügen

Als Nächstes ändern wir die Seitenüberschrift in eine personalisierte Begrüßungsnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Begrüßungsnachricht bleibt bestehen. Falls der Benutzer die Site verlässt und später zurückkehrt, speichern wir die Nachricht mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option enthalten, um den Benutzernamen zu ändern und damit die Begrüßungsnachricht.

1. Fügen Sie in `index.html` die folgende Zeile unmittelbar vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Fügen Sie in `main.js` den folgenden Code am unteren Rand der Datei genau so hinzu, wie er geschrieben ist. Dies erstellt Referenzen für die neue Schaltfläche und die Überschrift und speichert sie jeweils in Variablen.

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzustellen. Dies wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und sie in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall fragen wir den Benutzer, einen Namen einzugeben. Als Nächstes ruft der Code die `localStorage`-API auf, die es uns ermöglicht, Daten im Browser zu speichern und sie später abzurufen. Wir verwenden die Methode `setItem()` der lokalen Speicherung, um ein Datenelement namens `"name"` zu erstellen und zu speichern, wobei wir seine Wertigkeit auf die `myName`-Variable setzen, die die Namenvorgabe des Benutzers enthält. Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenkette und den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da es die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NOT, dargestellt durch das `!`), um zu überprüfen, ob das `name`-Datenelement bereits im `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um sie zu erstellen. Wenn es existiert (d. h., der Benutzer einen Namen bei einem vorherigen Besuch gesetzt hat), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf eine Zeichenkette und den Benutzernamen setzen, wie wir es innerhalb von `setUserName()` getan haben.

5. Fügen Sie eine `click` Ereignis-Handler-Funktion der Schaltfläche hinzu, wie unten gezeigt. Wenn sie angeklickt wird, wird `setUserName()` ausgeführt. Dadurch kann der Benutzer einen anderen Namen eingeben, indem er auf die Schaltfläche klickt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfenster erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_-Schaltfläche zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ sagt. Dies passiert, weil der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Aufforderung abbrechen. _Null_ ist ein spezieller Wert in JavaScript, der sich auf das Fehlen eines Wertes bezieht.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ sagt, da Sie `myName` auf eine leere Zeichenkette gesetzt haben.

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

In menschlicher Sprache bedeutet das: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen Sie ihn als den Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende eine Seite haben, die wie das Bild unten aussieht. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: eine Kopfzeile, zentriertes großes Logo, Inhalt und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Jetzt, da Sie Ihre Website fertiggestellt haben, ist der nächste Schritt, sie online zu stellen, damit andere sie ansehen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Im weiteren Verlauf unseres Lernpfads finden Sie viel mehr JavaScript, beginnend mit unserem Modul _Dynamisches Skripting mit JavaScript_.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, angeleitet von einer automatisierten Beurteilung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine geringe Einmalzahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
