---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: cf875eab81b15cf96feec979aa4353e6ec17518c
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Dies geschieht in Spielen, im Verhalten von Antworten, wenn Tasten gedrückt werden oder bei der Dateneingabe in Formulare, mit dynamischem Styling, mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dafür zu vertiefen, was alles möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zweck und Funktion von JavaScript.</li>
          <li>Grundlagen der JavaScript-Sprache wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Website hinzufügen kann. Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich. Mit mehr Erfahrung werden Sie in der Lage sein, Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Apps und vieles mehr zu erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf der Grundlage der Kern-JavaScript-Sprache geschrieben, die eine enorme Menge an Funktionalität mit minimalem Aufwand freischalten. Dazu gehören:

- Browser-spezifische Anwendungsprogrammierschnittstellen ({{Glossary("API", "APIs")}}), die in Webbrowsern integriert sind und Funktionen wie dynamische Erstellung von HTML und das Setzen von CSS-Stilen, das Erfassen und Verarbeiten eines Videostreams von der Webcam eines Benutzers oder das Generieren von 3D-Grafiken und Audiobeispielen bieten.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Anbietern in Websites zu integrieren, wie YouTube oder Facebook.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um das Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Rahmens dieses Artikels—als leichter Einstieg in JavaScript—die Einzelheiten zu erklären, wie sich die Kern-JavaScript-Sprache von den oben genannten Tools unterscheidet. Mehr darüber erfahren Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der folgende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Möglichkeit, mit einigen Browser-API-Funktionen zu experimentieren. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Fähigkeiten wachsen, werden Ihre Websites eine neue Dimension an Leistung und Kreativität erreichen.

Jedoch ist es anspruchsvoller, sich in JavaScript wohl zu fühlen, als es bei HTML und CSS der Fall ist. Sie sollten klein anfangen und schrittweise Fortschritte machen. Um zu beginnen, sehen Sie sich an, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie nicht mit dem Rest unseres Kurses fortfahren, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem Ordner `first-website` oder im gerade heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer Datei `index.html` und fügen Sie diesen Code in einer neuen Zeile, direkt vor dem schließenden `</body>` Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Aufgabe wie das {{htmlelement("link")}} Element für CSS. Es wendet das JavaScript auf die Seite an, damit es Auswirkungen auf das HTML (sowie das CSS und alles andere auf der Seite) hat.

4. Fügen Sie diesen Code in Ihre Datei `scripts/main.js` ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie `index.html` in Ihrem Browser. Sie sollten etwas wie das Folgende sehen:

![Überschrift "hallo welt" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}} Element in der Nähe des unteren Endes der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen wurde, könnten Probleme auftreten. JavaScript in der Nähe des unteren Endes einer HTML-Seite zu platzieren, ist eine Möglichkeit, dieser Abhängigkeit Rechnung zu tragen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hallo Welt!_ zu ändern. Dies taten wir, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendeten, um eine Referenz zu Ihrer Überschrift zu erhalten, und diese dann in einer Variablen namens `myHeading` speicherten. Dies ähnelt dem, was wir mit CSS-Selektoren getan haben. Wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Anschließend legte der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft der Variablen `myHeading` fest, welche den Inhalt der Überschrift darstellt, auf _Hallo Welt!_.

> [!NOTE]
> Beide der in dieser Übung verwendeten Funktionen sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Kurzlehrgang: Grundlagen der Sprache

Um Ihnen ein besseres Verständnis darüber zu geben, wie JavaScript funktioniert, erklären wir einige der grundlegenden Merkmale der Sprache. Es ist erwähnenswert, dass diese Merkmale in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Versuchen Sie in diesem Artikel, die Beispielzeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Einzelheiten zu JavaScript-Konsolen finden Sie unter [Entwicklertools des Browsers entdecken](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Schlüsselwort, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen auf einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Einzelheiten finden Sie unter [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Benennungsregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [den Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript unterscheidet zwischen Groß- und Kleinschreibung. Das bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Auch können Sie diese beiden Operationen in der gleichen Zeile durchführen:

```js
let myVariable = "Bob";
```

Sie rufen den Wert ab, indem Sie den Namen der Variablen angeben:

```js
myVariable;
```

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie ihn später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte unterschiedlicher [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) speichern können:

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
        Dies ist eine Textfolge, die als String bekannt ist. Um anzuzeigen, dass der Wert ein String ist, setzen Sie ihn in einfache oder doppelte Anführungszeichen.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen stehen nicht in Anführungszeichen.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean", "Boolean")}}</th>
      <td>
        Dies ist ein Wahr/Falsch-Wert. Die Wörter <code>true</code> und <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einer einzigen Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes Mitglied des Arrays wie folgt:<br /><code>myVariable[0]</code>, <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle obigen Beispiele ebenfalls.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um irgendetwas Interessantes in der Programmierung zu machen. Wenn sich Werte nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie z.B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit Code hinzugefügt werden können. Der Browser ignoriert Text, der als Kommentar markiert ist. Sie können Kommentare in JavaScript genauso schreiben, wie Sie es in CSS tun:

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

Ein {{Glossary("operator", "Operator")}} ist ein mathematisches Symbol, das ein Ergebnis auf der Grundlage von zwei Werten (oder Variablen) liefert. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Zwei Zahlen zusammenzählen oder zwei Strings verbinden.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese machen, was Sie in der grundlegenden Mathematik erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // Multiplizieren in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben: Das weist einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und von demselben Datentyp sind. Es gibt ein
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
        Dies gibt den logisch entgegengesetzten Wert von dem zurück, was es vorgeht. Es dreht ein <code>true</code> in ein <code>false</code> usw.. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der Vergleich gibt <code>false</code> zurück, weil wir es negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit einer anderen Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich 3". Dies gibt <code>false</code> zurück, da <code>myVariable</code> doch gleich 3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu erkunden, aber dies ist vorerst genug. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Achten Sie darauf, dass Sie richtig auf Ihre Variablen verweisen und die erwarteten Ergebnisse erhalten. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings umwandeln, so dass Sie Strings verknüpfen, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungen

Bedingungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr oder nicht wahr ergibt. Eine sehr verbreitete Form von Bedingungen ist die `if...else` Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Diese verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, läuft der erste Block von Code. Wenn der Vergleich nicht wahr ist, läuft der zweite Block von Code—nach dem Schlüsselwort `else`—stattdessen.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalitäten zu bündeln, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative zum wiederholten Schreiben desselben Codes. Sie haben bereits einige Verwendungsbeispiele für Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()` und `alert()` Funktionen sind im Browser eingebaut.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber gefolgt von Klammern — `()` — ist, handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}}, also Informationen, die sie benötigen, um ihre Aufgabe zu erledigen. Argumente kommen innerhalb der Klammern, getrennt durch Kommas, wenn mehr als ein Argument vorhanden ist.

Zum Beispiel lässt die `alert()` Funktion ein Popup-Fenster im Browserfenster erscheinen, aber wir müssen ihr ein String als Argument geben, um der Funktion zu sagen, welche Nachricht angezeigt werden soll.

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung sagt dem Browser, dass die `result` Variable aus der Funktion zurückgegeben werden muss, damit sie zur Verwendung zur Verfügung steht. Dies ist notwendig, da Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies nennt man Variablen{{Glossary("Scope", "Sichtbarkeit")}}. (Lesen Sie mehr über [Variablen-Sichtbarkeit](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandter. Dies sind Code-Strukturen, die auf Aktivitäten im Browser hören und Code als Reaktion ausführen. Das offensichtlichste Beispiel ist die Behandlung des [Klickereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit Ihrer Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie Folgendes in Ihre Konsole ein und klicken dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Reihe von Möglichkeiten, einen Ereignishandler an ein Element anzuhängen. Hier wählen wir das {{htmlelement("html")}} Element aus. Wir rufen dann seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Funktion auf, übergeben ihr den Namen des zu hörenden Ereignisses (`'click'`) und eine Funktion, die beim Auftreten des Ereignisses ausgeführt werden soll.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, da sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die als _Pfeilfunktion_ bezeichnet wird. Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispielwebsite erweitern

Mit unserem Überblick über die JavaScript-Grundlagen abgeschlossen, fügen wir unserer Beispielseite einige neue Funktionen hinzu.

Bevor Sie weitergehen, löschen Sie den aktuellen Inhalt Ihrer Datei `main.js`—den Teil, den Sie zuvor während des "Hallo Welt!" Beispiels hinzugefügt haben—und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

### Einen Bildwechsler hinzufügen

In diesem Abschnitt lernen Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um die Anzeige zwischen zwei Bildern abzuwechseln. Diese Änderung erfolgt, wenn ein Benutzer das angezeigte Bild anklickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispielseite verwenden möchten. Idealerweise hat das Bild die gleiche Größe wie das zuvor hinzugefügte Bild oder ist möglichst nah daran.
2. Speichern Sie dieses Bild in Ihrem `images` Ordner.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js` Datei ein und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweiten und ersten Bildnamen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie jetzt auf das Bild klicken, sollte es zum anderen wechseln.

Im obigen Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}} Element in `myImage` gespeichert. Als Nächstes haben Sie ihm einen `click` Ereignishandler ohne Namen (eine "anonyme" Funktion) gegeben. Jedes Mal, wenn auf dieses Element geklickt wird, tut die Funktion Folgendes:

1. Sie ruft den Wert des `src` Attributs des Bildes ab.
2. Sie verwendet eine Bedingung, um zu überprüfen, ob der `src` Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Falls ja, ändert der Code den `src` Wert in den Pfad des zweiten Bildes, sodass das andere Bild innerhalb des {{htmlelement("img")}} Elements geladen wird.
   2. Falls nicht (d.h. es muss sich bereits geändert haben), wechselt der `src` Wert zurück zum ursprünglichen Bildpfad.

### Eine personalisierte Willkommensnachricht hinzufügen

Als Nächstes ändern wir die Seitenüberschrift in eine personalisierte Willkommensnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt erhalten. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit Hilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir bieten auch eine Option, um den Benutzernamen zu ändern und damit auch die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}} Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau wie er geschrieben ist. Dies erstellt Referenzen zur neuen Schaltfläche und zur Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzurichten. Dies wird vorerst nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()` Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt) Funktion, die ein Dialogfeld anzeigt, ähnlich `alert()`. Diese `prompt()` Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben, und sie in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Anschließend ruft der Code die `localStorage` API auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()` Funktion von localStorage, um ein Datenelement namens `"name"` zu erstellen und zu speichern, wobei wir seinen Wert auf die `myName` Variable setzen, die die Eingabe des Benutzers für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String, plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da es die App strukturiert, wenn sie erstmals geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`), um zu überprüfen, ob das `name` Datenelement bereits in `localStorage` gespeichert ist. Falls nicht, wird die `setUserName()` Funktion ausgeführt, um es zu erstellen. Falls es existiert (d.h. der Benutzer hat während eines vorherigen Besuchs einen Benutzernamen festgelegt), rufen wir den gespeicherten Namen mittels `getItem()` ab und setzen den `textContent` der Überschrift auf einen String, plus den Benutzernamen, wie wir es in `setUserName()` gemacht haben.

5. Fügen Sie eine `click` Ereignishandler-Funktion zur Schaltfläche hinzu, wie unten gezeigt. Wenn geklickt wird, läuft `setUserName()`. Dies ermöglicht dem Benutzer, durch Drücken der Schaltfläche einen anderen Namen einzugeben.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_ Schaltfläche zu drücken. Sie sollten mit einem Titel enden, der _Mozilla is cool, null_ lautet. Dies geschieht, weil der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der sich auf das Fehlen eines Wertes bezieht.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla is cool,_ lautet, da Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()` Funktion auf Folgendes:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr so aussieht wie das Bild unten. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: eine Überschrift, ein großes zentriertes Logo, Inhalt und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie feststecken, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Jetzt, da Sie Ihre Website fertiggestellt haben, besteht der nächste Schritt darin, sie online zu stellen, damit andere sie sich ansehen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Wir haben in diesem Artikel gerade erst an der Oberfläche von JavaScript gekratzt. Sie finden später in unserem Lernpfad noch viel mehr JavaScript, beginnend mit unserem _Dynamisches Skripting mit JavaScript_ Modul.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für aufstrebende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der komplette Kurs ist gegen eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
