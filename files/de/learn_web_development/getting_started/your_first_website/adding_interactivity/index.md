---
title: "JavaScript: Hinzufügen von Interaktivität"
short-title: Hinzufügen von Interaktivität
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Dies geschieht in Spielen, im Verhalten von Antworten, wenn Schaltflächen gedrückt werden oder bei der Dateneingabe in Formulare, bei dynamischem Styling, Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen, und vertieft Ihr Verständnis davon, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der Basissoftware, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>JavaScript-Grundlagen wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die einer Website Interaktivität hinzufügen kann.
Es wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich.
Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgesteuerte Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Werkzeugen über die Kerner-Sprache JavaScript geschrieben, die eine große Menge an Funktionalität bei minimalem Aufwand freischalten. Dazu gehören:

- Browser Application Programming Interfaces ({{Glossary("API", "APIs")}}), die in Web-Browsern integriert sind und Funktionalitäten wie das dynamische Erstellen von HTML und das Festlegen von CSS-Stilen, das Erfassen und Manipulieren eines Videostroms von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audio-Beispielen bieten.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionalität von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit zum Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels—als leichte Einführung in JavaScript—Details zu präsentieren, wie sich die Kerner-Sprache JavaScript von den oben genannten Werkzeugen unterscheidet. Sie können mehr in unseren [Core modules](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN erfahren.

Der untenstehende Abschnitt führt einige Aspekte der Kerner-Sprache ein und bietet eine Gelegenheit, auch mit einigen Funktionen der Browser-API zu spielen. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Kenntnisse wachsen, erreichen Ihre Websites eine neue Dimension von Leistung und Kreativität.

Es ist jedoch schwieriger, sich mit JavaScript vertraut zu machen, als mit HTML und CSS. Sie sollten klein anfangen und sich schrittweise steigern. Beginnen wir damit, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie nicht dem Rest unseres Kurses gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem eben heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code auf einer neuen Zeile ein, direkt vor dem schließenden `</body>`-Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Aufgabe wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, damit es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.

4. Fügen Sie diesen Code in Ihre `scripts/main.js`-Datei ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten so etwas wie dies sehen:

![Überschrift "Hallo Welt" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}}-Element in der Nähe des unteren Teils der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es soll das HTML betreffen, das noch nicht geladen ist, könnte es zu Problemen kommen. JavaScript in der Nähe des unteren Teils einer HTML-Seite zu platzieren, ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftentext in _Hello world!_ zu ändern. Das haben wir getan, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf Ihre Überschrift zu erhalten und diese dann in einer Variablen namens `myHeading` zu speichern. Das ähnelt dem, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas an einem Element ändern möchten, müssen Sie es zuerst auswählen.

Danach setzte der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der `myHeading`-Variablen (die den Inhalt der Überschrift repräsentiert) auf _Hello world!_.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung verwendet haben, sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Sprachgrundlagen Crashkurs

Um Ihnen ein besseres Verständnis davon zu geben, wie JavaScript funktioniert, lassen Sie uns einige der Kernfunktionen der Sprache erklären. Es ist erwähnenswert, dass diese Funktionen allen Programmiersprachen gemeinsam sind. Wenn Sie diese Grundlagen meistern, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel sollten Sie versuchen, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entdecken Sie Browser-Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselwort, gefolgt von dem Namen, den Sie der Variable geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikola am Ende jeder Anweisung zu haben. Es gibt andere Regeln, wann Sie Semikola verwenden sollten und wann nicht. Weitere Details finden Sie unter [Ihr Leitfaden zu Semikola in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können eine Variable fast beliebig benennen, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Benennungsregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript unterscheidet Groß- und Kleinschreibung. Das bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert geben:

```js
myVariable = "Bob";
```

Außerdem können Sie beide Vorgänge in derselben Zeile ausführen:

```js
let myVariable = "Bob";
```

Sie rufen den Wert ab, indem Sie den Variablennamen aufrufen:

```js
myVariable;
```

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie sie später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte mit unterschiedlichen [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) enthalten können:

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
        Dies ist eine Textsequenz, die als String bekannt ist. Um anzuzeigen, dass der Wert
        ein String ist, muss er in einfache oder doppelte Anführungszeichen eingeschlossen werden.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen um sich herum.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean", "Boolean")}}</th>
      <td>
        Dies ist ein Wahrheitswert. Die Wörter <code>true</code> und
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
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes
        Mitglied des Arrays so:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann
        in einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle
        obigen Beispiele auch.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um irgendetwas Interessantes im Programmieren zu tun. Wenn Werte sich nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie z. B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert Text, der als Kommentar markiert ist. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

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

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis auf Basis von zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren sowie einige Beispiele, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Zwei Zahlen zusammenzufügen oder zwei Strings zu kombinieren.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun, was Sie in der grundlegenden Mathematik erwarten.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiply in JS is an asterisk<br />9 / 3;</code
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
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom selben Datentyp sind. Es gibt ein
        <code>true</code>/<code>false</code> (Boolean)-Ergebnis zurück.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Dies gibt den logisch entgegengesetzten Wert des vorausgehenden Werts zurück. Es verwandelt
        ein <code>true</code> in ein <code>false</code>, etc. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei
        Werte <em>nicht</em> gleich sind.
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
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit unterschiedlicher Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich
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

Es gibt noch viele weitere Operatoren zu erforschen, aber das reicht fürs Erste. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Seien Sie vorsichtig, dass Sie Ihre Variablen richtig referenzieren und die erwarteten Ergebnisse erhalten. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings verwandeln, so dass Sie letztlich Strings verkettet haben, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Anweisungen

Bedingte Anweisungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr ist oder nicht. Eine sehr verbreitete Form von bedingten Anweisungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb des `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich wahr ist, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird stattdessen der zweite Codeblock—nach dem Schlüsselwort `else`—ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als eine Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative zum wiederholten Schreiben desselben Codes. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die Funktionen `document.querySelector()` und `alert()` sind in den Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()` — dann ist es wahrscheinlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} entgegen: Daten, die sie benötigen, um ihre Aufgabe zu erfüllen. Argumente gehen innerhalb der Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel lässt die Funktion `alert()` ein Popup-Fenster im Browserfenster erscheinen, aber wir müssen ihr als Argument einen String geben, damit die Funktion weiß, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen; dann testen Sie es mit verschiedenen Argumenten. Zum Beispiel:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung weist den Browser an, die `result`-Variable aus der Funktion zurückzugeben, so dass sie zur Verwendung zur Verfügung steht. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird als Variablen-{{Glossary("Scope", "Scoping")}} bezeichnet. (Lesen Sie mehr über [Variablen-Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Codestrukturen, die auf Aktivitäten im Browser hören und daraufhin Code ausführen. Das offensichtlichste Beispiel ist das Handling des [click events](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie Folgendes in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Reihe von Möglichkeiten, einen Ereignishandler an ein Element anzuhängen.
Hier wählen wir das {{htmlelement("html")}}-Element aus. Wir rufen dann seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf und übergeben den Namen des zu hörenden Ereignisses (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, wird eine _anonyme Funktion_ genannt, da sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir eine _Pfeilfunktion_ nennen.
Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website aufladen

Nachdem wir unsere Überprüfung der JavaScript-Grundlagen abgeschlossen haben, lassen Sie uns einige neue Funktionen zu unserer Beispielseite hinzufügen.

Bevor Sie fortfahren, löschen Sie die aktuellen Inhalte Ihrer `main.js`-Datei—den Teil, den Sie zuvor während des "Hallo Welt!"-Beispiels hinzugefügt haben—und speichern Sie die leere Datei. Andernfalls würde der bestehende Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt erfahren Sie, wie Sie JavaScript- und DOM-API-Funktionen verwenden, um zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispiel-Website zeigen möchten. Idealerweise hat das Bild die gleiche Größe wie das zuvor hinzugefügte Bild oder ist annähernd gleich groß.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein, und stellen Sie sicher, dass Sie `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweiten und ersten Bildnamen ersetzen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie jetzt auf das Bild klicken, sollte es sich in das andere Bild ändern.

Im obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Als nächstes haben Sie diesem eine `click`-Ereignishandlerfunktion ohne Namen (eine "anonyme" Funktion) zugewiesen. Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src`-Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu prüfen, ob der `src`-Wert dem Pfad des Originalbildes entspricht:

   1. Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, sodass das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es sich bereits geändert haben muss), wird der `src`-Wert wieder auf den ursprünglichen Bildpfad zurückgesetzt.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes lassen Sie uns die Seitenüberschrift in eine personalisierte Willkommensnachricht ändern, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt erhalten. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option zum Ändern des Benutzernamens und damit der Willkommensnachricht einbeziehen.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau wie er geschrieben ist. Dies erstellt Referenzen zu der neuen Schaltfläche und der Überschrift und speichert jede in Variablen:

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

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion macht mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und diese in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall fordern wir den Benutzer auf, einen Namen einzugeben. Als nächstes ruft der Code die `localStorage`-API auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von `localStorage`, um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, wobei der Wert auf die `myName`-Variable gesetzt wird, die den vom Benutzer eingegebenen Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String plus den neu gespeicherten Benutzernamen.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da er die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`), um zu überprüfen, ob das `name`-Datenobjekt bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um es zu erstellen. Wenn es existiert (also ob der Benutzer während eines vorherigen Besuchs einen Benutzernamen festgelegt hat), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf einen String plus den Benutzernamen, wie wir es in `setUserName()` getan haben.

5. Fügen Sie der Schaltfläche eine `click`-Ereignishandlerfunktion hinzu, wie unten gezeigt. Wenn sie geklickt wird, läuft `setUserName()`. Dies ermöglicht es dem Benutzer, einen anderen Namen einzugeben, indem er die Schaltfläche drückt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld angezeigt wird, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die Schaltfläche _Abbrechen_ zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ lautet. Dies passiert, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der das Fehlen eines Werts bezeichnet.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ lautet, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion darauf:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr so aussieht wie das Bild unten. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, großes zentriertes Logo, Inhalt und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Jetzt, da Sie Ihre Website erstellt haben, ist der nächste Schritt, sie online zu stellen, damit andere sie anschauen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Ihre Website veröffentlichen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Sie werden später viel mehr JavaScript in unserem Lernpfad finden, beginnend mit unserem _Dynamischen Skripting mit JavaScript_-Modul.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der komplette Kurs ist für eine geringe einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
