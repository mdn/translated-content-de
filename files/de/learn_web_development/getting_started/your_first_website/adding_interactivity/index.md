---
title: "JavaScript: Interaktivität hinzufügen"
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Tasten gedrückt werden, bei der Dateneingabe in Formulare, mit dynamischem Styling, Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen, und erweitert Ihr Verständnis dessen, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlagen der JavaScript-Sprache wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die einer Website Interaktivität hinzufügen kann.
Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich.
Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Werkzeugen auf Grundlage der Kern-JavaScript-Sprache geschrieben, wodurch eine enorme Funktionalität mit minimalem Aufwand freigeschaltet wird. Dazu gehören:

- Browser-Schnittstellen ({{Glossary("API", "APIs")}}), die in Webbrowsern integriert sind und Funktionen wie das dynamische Erstellen von HTML und das Setzen von CSS-Stilen, das Sammeln und Verarbeiten eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audiodateien bereitstellen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern, wie YouTube oder Facebook, in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Erstellung von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels – als leichte Einführung in JavaScript – die Details darüber darzulegen, wie sich die Kern-JavaScript-Sprache von den oben genannten Tools unterscheidet. Mehr dazu erfahren Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen der MDN.

Der folgende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet Ihnen die Möglichkeit, ein paar Funktionen der Browser-API auszuprobieren. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit zunehmenden JavaScript-Kenntnissen werden Ihre Websites eine neue Dimension an Leistung und Kreativität erreichen.

Allerdings ist es herausfordernder, sich mit JavaScript vertraut zu machen als mit HTML und CSS. Sie sollten klein anfangen und sich allmählich steigern. Um zu beginnen, lassen Sie uns untersuchen, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für Programmierbeispiele](https://de.wikipedia.org/wiki/Hallo-Welt-Programm).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses noch nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner einen neuen Ordner mit dem Namen `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html` Datei und geben Sie diesen Code in einer neuen Zeile ein, direkt vor dem schließenden `</body>` Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt denselben Zweck wie das {{htmlelement("link")}} Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML haben kann (zusammen mit dem CSS und allem anderen auf der Seite).

4. Fügen Sie diesen Code zu Ihrer Datei `scripts/main.js` hinzu:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten so etwas sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}} Element nahe dem unteren Ende der HTML-Datei platzieren, ist, dass **der Browser Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen ist, könnten Probleme auftreten. JavaScript nahe dem Ende einer HTML-Seite zu platzieren, ist eine Möglichkeit, dieser Abhängigkeit Rechnung zu tragen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hallo Welt!_ zu ändern. Dies haben wir mit einer Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) gemacht, um eine Referenz zu Ihrer Überschrift zu erhalten und sie dann in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas an einem Element ändern möchten, müssen Sie es zuerst auswählen.

Danach setzte der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft der Variable `myHeading` (die den Inhalt der Überschrift darstellt) auf _Hallo Welt!_.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung verwendet haben, sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die in der Lage ist, Dokumente zu manipulieren.

## Schnelle Einführung in Sprachgrundlagen

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, erklären wir einige der Kernfunktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Versuchen Sie in diesem Artikel, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Für weitere Details zu JavaScript-Konsolen siehe [Entdecken Sie die Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), gefolgt von dem Namen, den Sie der Variable geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile gibt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt weitere Regeln dafür, wann Semikolons verwendet werden sollten und wann nicht. Für weitere Details siehe [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können eine Variable fast beliebig benennen, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [den Namen Ihrer Variable überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert geben:

```js
myVariable = "Bob";
```

Außerdem können Sie beide Vorgänge in derselben Zeile durchführen:

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

Beachten Sie, dass Variablen Werte mit unterschiedlichen [Datentypen](/de/docs/Web/JavaScript/Data_structures) enthalten können:

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
        Dies ist eine Folge von Text, bekannt als Zeichenkette oder String. Um zu
        signalisieren, dass der Wert ein String ist, schließen Sie ihn in
        einfache oder doppelte Anführungszeichen ein.
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
        Dies ist ein Wahr/Falsch-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine
        Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einer 
        einzigen Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf
        jedes Mitglied des Arrays so:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. In JavaScript ist alles ein Objekt und kann in einer
        Variablen gespeichert werden. Denken Sie daran, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Auch alle
        obigen Beispiele.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um in der Programmierung etwas Interessantes zu tun. Wenn sich Werte nicht ändern könnten, dann könnten Sie nichts Dynamisches tun, wie z.B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textfragmente, die zusammen mit Code hinzugefügt werden können. Der Browser ignoriert Texte, die als Kommentare gekennzeichnet sind. Sie können Kommentare in JavaScript genauso schreiben, wie Sie es in CSS tun:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstrichen hinzufügen:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren, zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Zwei Zahlen zusammenzählen oder zwei Strings kombinieren.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun das, was man in der Grundmathematik erwarten würde.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // Multiplikation in JS ist ein Sternchen<br />9 / 3;</code
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
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom selben
        Datentyp sind. Es liefert ein <code>true</code>/<code>false</code> (Boolean)
        Ergebnis.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Dies liefert den logischen gegenteiligen Wert von dem, was es vorangeht. Es
        verwandelt ein <code>true</code> in ein <code>false</code> usw. Wenn es
        zusammen mit dem Gleichheitsoperator verwendet wird, prüft der Negationsoperator,
        ob zwei Werte <em>ungleich</em> sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Bei "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der Vergleich
          ergibt <code>false</code>, da wir ihn verneinen:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" ergibt im Wesentlichen dasselbe Ergebnis mit unterschiedlichen
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich 3". Dies
          ergibt <code>false</code>, weil <code>myVariable</code> GLEICH 3 IST:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu entdecken, aber das ist für jetzt genug. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Achten Sie darauf, dass Sie Ihre Variablen richtig referenzieren und die erwarteten Ergebnisse erzielen. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings verwandeln, sodass Sie Strings konkateniert haben, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Anweisungen

Bedingte Anweisungen sind Code-Strukturen, die dazu verwendet werden, zu testen, ob ein Ausdruck wahr ist oder nicht. Eine sehr häufige Form von Bedingungen ist die `if...else` Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu prüfen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird stattdessen der zweite Codeblock nach dem Schlüsselwort `else` ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codeblock als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative zum wiederholten Schreiben desselben Codes. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()`- und `alert()`-Funktionen sind in den Browser eingebaut.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()` — handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} an: Datenelemente, die sie für ihre Aufgaben benötigen. Argumente stehen innerhalb der Klammern, getrennt durch Kommata, wenn es mehr als ein Argument gibt.

Zum Beispiel zeigt die Funktion `alert()` ein Popup-Fenster im Browserfenster an, aber wir müssen ihr ein String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen, und testen Sie es dann mit mehreren Argumenten. Zum Beispiel:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung fordert den Browser auf, die `result`-Variable aus der Funktion zurückzugeben, damit sie verwendet werden kann. Dies ist notwendig, weil in Funktionen definierte Variablen nur innerhalb dieser Funktionen verfügbar sind. Dies nennt man Variablen {{Glossary("Scope", "Scoping")}}. (Lesen Sie mehr über [Variablen-Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignis-Handler. Diese sind Code-Strukturen, die auf Aktivität im Browser hören und Code als Reaktion darauf ausführen. Das offensichtlichste Beispiel ist die Behandlung des [Klick-Ereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein und klicken dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt verschiedene Möglichkeiten, einem Element einen Ereignishandler zuzuordnen.
Hier wählen wir das {{htmlelement("html")}} Element. Dann rufen wir seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, geben den Namen des Ereignisses an, auf das gehört werden soll (`'click'`), und eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, da sie keinen Namen hat. Es gibt eine alternative Schreibweise für anonyme Funktionen, die wir _Arrow-Funktion_ nennen.
Eine Arrow-Funktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website erweitern

Nachdem wir unseren Überblick über die JavaScript-Grundlagen abgeschlossen haben, lassen Sie uns einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

Bevor Sie fortfahren, löschen Sie den aktuellen Inhalt Ihrer `main.js` Datei — das, was Sie vorher im "Hallo Welt!" Beispiel hinzugefügt haben — und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen möchten, in Konflikt geraten.

### Einen Bildwechsler hinzufügen

In diesem Abschnitt lernen Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das auf Ihrer Beispielseite vorgestellt werden soll. Ideal ist ein Bild, das dieselbe Größe wie das vorher hinzugefügte Bild hat, oder so nah wie möglich.
2. Speichern Sie dieses Bild in Ihrem `images` Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js` Datei hinzu und stellen Sie sicher, dass Sie `firefox2.png` und beide Instanzen von `firefox-icon.png` mit Ihren zweiten und ersten Bildnamen ersetzen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Nun sollte sich das Bild ändern, wenn Sie darauf klicken.

Im obigen Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}} Element in `myImage` gespeichert. Anschließend haben Sie ihm eine `click` Ereignishandler-Funktion ohne Namen (eine "anonyme" Funktion) gegeben. Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion folgende Schritte aus:

1. Sie ermittelt den Wert des `src` Attributs des Bildes.
2. Sie verwendet eine Bedingung, um zu überprüfen, ob der `src` Wert dem Pfad des ursprünglichen Bildes entspricht:
   
   1. Wenn ja, ändert der Code den `src` Wert in den Pfad des zweiten Bildes und zwingt das andere Bild dazu, im {{htmlelement("img")}} Element geladen zu werden.
   2. Wenn nein (was bedeutet, dass es sich bereits geändert haben muss), wechselt der `src` Wert zurück zum ursprünglichen Bildpfad.

### Eine personalisierte Willkommensnachricht hinzufügen

Als Nächstes lassen Sie uns die Seitenüberschrift in eine personalisierte Willkommensnachricht ändern, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht wird beibehalten. Wenn der Benutzer die Seite verlässt und später zurückkehrt, speichern wir die Nachricht mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option hinzufügen, um den Benutzernamen zu ändern und damit auch die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}} Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau so wie er geschrieben ist. Dadurch werden Referenzen zu der neuen Schaltfläche und der Überschrift erstellt, wobei jede in Variablen gespeichert wird:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Dies wird noch nichts bewirken; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()` Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt) Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()` Funktion macht mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben, und diese in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Anschließend ruft der Code die `localStorage` API auf, die uns das Speichern von Daten im Browser ermöglicht, um sie später abzurufen. Wir verwenden die Funktion `setItem()` von localStorage, um ein Datenelement mit dem Namen `"name"` zu erstellen und zu speichern, dessen Wert auf die `myName` Variable gesetzt wird, die den Namenseintrag des Benutzers enthält. Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenkette plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie nach der Funktionsdeklaration den folgenden Bedingungsblock hinzu. Wir könnten dies Initialisierungscode nennen, da er die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Dies erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch `!`), um zu überprüfen, ob das `name` Datenelement bereits in localStorage gespeichert ist. Wenn nicht, wird die Funktion `setUserName()` ausgeführt, um es zu erstellen. Wenn es existiert (d.h. der Benutzer hat bei einem vorherigen Besuch einen Benutzernamen gesetzt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf eine Zeichenkette plus den Namen des Benutzers, wie wir es innerhalb von `setUserName()` getan haben.

5. Fügen Sie der Schaltfläche eine `click` Ereignishandler-Funktion hinzu, wie unten gezeigt. Wenn sie geklickt wird, läuft `setUserName()`. Dies ermöglicht es dem Benutzer, einen anderen Namen einzugeben, indem er die Schaltfläche drückt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie auf die _Abbrechen_ Taste zu klicken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ lautet. Dies passiert, weil der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der das Fehlen eines Wertes angibt.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla is cool,_ lautet, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion zu folgendem:

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

In der menschlichen Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn obige Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen Sie ihn als den Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa so aussieht wie das Bild unten. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, ein großes zentriertes Logo, Inhalte und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel gerade einmal an der Oberfläche von JavaScript gekratzt. Sie werden viel mehr JavaScript in unseren [Kern-](/de/docs/Learn_web_development/Core) und [Erweiterungsmodulen](/de/docs/Learn_web_development/Extensions) finden, beginnend mit [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting).

## Siehe auch

- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, angeleitet durch eine automatisierte Beurteilung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine geringe einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
