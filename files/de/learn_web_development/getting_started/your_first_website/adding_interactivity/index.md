---
title: "JavaScript: Hinzufügen von Interaktivität"
short-title: Hinzufügen von Interaktivität
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Tasten gedrückt werden oder bei der Dateneingabe in Formulare, mit dynamischer Gestaltung, mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen, und erweitert Ihr Verständnis darüber, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlegende JavaScript-Konzepte wie Variablen, Operatoren, Bedingungsanweisungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die einer Website Interaktivität verleihen kann. Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich. Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgetriebene Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf der Grundlage der Kern-JavaScript-Sprache entwickelt und damit eine große Menge an Funktionalitäten mit minimalem Aufwand freigeschaltet. Dazu gehören:

- Browser-Anwendungsprogrammierschnittstellen ({{Glossary("API", "APIs")}}), die in Webbrowsern integriert sind und Funktionen wie das dynamische Erstellen von HTML und das Setzen von CSS-Stilen, das Sammeln und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audiodateien bereitstellen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern wie YouTube oder Facebook auf Websites einzubinden.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels — als eine leichte Einführung in JavaScript — die Details darzustellen, wie sich die Kern-JavaScript-Sprache von den oben genannten Tools unterscheidet. Mehr erfahren Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der folgende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Gelegenheit, mit einigen Funktionen der Browser-API zu spielen. Viel Spaß!

## Ein "Hello world!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Fähigkeiten wachsen, werden Ihre Websites eine neue Dimension von Stärke und Kreativität erreichen.

Es ist jedoch herausfordernder, sich mit JavaScript vertraut zu machen, als mit HTML und CSS. Sie sollten klein anfangen und sich allmählich steigern. Beginnen Sie damit, zu untersuchen, wie Sie JavaScript zu Ihrer Seite hinzufügen können, um ein _Hello world!_-Beispiel zu erstellen. (_Hello world!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie unseren Kurs bisher nicht verfolgt haben, [laden Sie dieses Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie es als Ausgangspunkt.

1. Erstellen Sie in Ihrem Ordner `first-website` einen neuen Ordner namens `scripts`.
2. Erstellen Sie innerhalb des Ordners `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer Datei `index.html` und fügen Sie diesen Code in einer neuen Zeile kurz vor dem schließenden `</body>`-Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies tut die gleiche Aufgabe wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.

4. Fügen Sie diesen Code zu Ihrer Datei `scripts/main.js` hinzu:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie `index.html` in Ihrem Browser. Sie sollten etwas wie dieses sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}}-Element in die Nähe des unteren Teils der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen wurde, könnten Probleme auftreten. Das Platzieren von JavaScript in der Nähe des unteren Teils einer HTML-Seite ist eine Möglichkeit, dieser Abhängigkeit gerecht zu werden.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hello world!_ zu ändern. Wir haben dies getan, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz zu Ihrer Überschrift zu erhalten und sie dann in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element tun wollen, müssen Sie es zuerst auswählen.

Danach hat der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der `myHeading`-Variablen festgelegt (der den Inhalt der Überschrift darstellt) auf _Hello world!_.

> [!NOTE]
> Beide der in dieser Übung verwendeten Funktionen sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Crashkurs in Sprachgrundlagen

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, werden wir einige der grundlegenden Funktionen der Sprache erklären. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel versuchen Sie, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Informationen zu JavaScript-Konsolen finden Sie unter [Discover browser developer tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen damit, eine Variable mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) zu deklarieren, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Menschen glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln dafür, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Details finden Sie in [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist groß-/kleinschreibungssensitiv. Das bedeutet `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Fehler in Ihrem Code haben, überprüfen Sie die Groß-/Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Außerdem können Sie beide Operationen in derselben Zeile ausführen:

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
        Dies ist eine Textfolge, die als String bekannt ist. Um anzuzeigen, dass der Wert ein String ist, schließen Sie ihn in einfache oder doppelte Anführungszeichen ein.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen um sie herum.</td>
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
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Greifen Sie auf jedes Mitglied des Arrays so zu:<br /><code>myVariable[0]</code>, <code>myVariable[1]</code>, usw.
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

Warum benötigen wir also Variablen? Variablen sind notwendig, um alles Interessante in der Programmierung zu tun. Wenn Werte sich nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie z. B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit Code hinzugefügt werden können. Der Browser ignoriert den als Kommentare markierten Text. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstrichen platzieren, wie folgt:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren sowie einige Beispiele zum Ausprobieren in der JavaScript-Konsole.

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
      <td>Zwei Zahlen zusammenfügen oder zwei Strings kombinieren.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun, was Sie in der Grundrechenarten erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiplizieren in JS ist ein Asterisk<br />9 / 3;</code
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
        Dies führt einen Test durch, ob zwei Werte gleich und vom gleichen Datentyp sind. Es gibt ein <code>true</code>/<code>false</code> (Boolean) Ergebnis zurück.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Dies gibt den logisch gegenteiligen Wert von dem zurück, was es vorangeht. Es verwandelt ein <code>true</code> in ein <code>false</code>, usw. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht", der grundlegende Ausdruck ist <code>true</code>, aber der Vergleich ergibt <code>false</code>, weil wir es negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit unterschiedlicher Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich 3". Dies ergibt <code>false</code>, weil <code>myVariable</code> IST gleich 3:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu erkunden, aber das reicht für den Anfang. Eine komplette Liste finden Sie unter [Expressions and operators](/de/docs/Web/JavaScript/Reference/Operators).

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen bei Berechnungen führen. Seien Sie vorsichtig, dass Sie auf Ihre Variablen korrekt verweisen und die Ergebnisse erhalten, die Sie erwarten. Geben Sie beispielsweise `'35' + '25'` in Ihre Konsole ein. Warum haben Sie nicht das Ergebnis erhalten, das Sie erwartet haben? Weil die Anführungszeichen die Zahlen in Strings verwandeln. Daher haben Sie letztendlich Strings verkettet, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Anweisungen

Bedingte Anweisungen sind Code-Strukturen, die verwendet werden, um zu überprüfen, ob ein Ausdruck wahr ist oder nicht. Eine sehr gängige Form der bedingten Anweisungen ist die `if...else`-Anweisung. Beispielsweise:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, läuft der erste Block von Code. Wenn der Vergleich nicht wahr ist, läuft stattdessen der zweite Block von Code — nach dem `else`-Schlüsselwort.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Beispielsweise:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die Funktionen `document.querySelector()` und `alert()` sind im Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern — `()` — gefolgt wird, handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} an: Datenbits, die sie benötigen, um ihre Aufgabe zu erfüllen. Argumente kommen in die Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Beispielsweise lässt die Funktion `alert()` ein Popup-Fenster im Browserfenster erscheinen, aber wir müssen ihr ein Argument in Form eines Strings geben, um der Funktion zu sagen, welche Nachricht sie anzeigen soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen; testen Sie dann mit mehreren Argumenten. Beispielsweise:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung teilt dem Browser mit, die `result`-Variable aus der Funktion zurückzugeben, damit sie verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird als Variable {{Glossary("Scope", "Scoping")}} bezeichnet. (Lesen Sie mehr über [variable Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Code-Strukturen, die auf Aktivitäten im Browser hören und Code als Reaktion ausführen. Das offensichtlichste Beispiel ist die Handhabung des [Klickereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Reihe von Möglichkeiten, einen Ereignishandler an ein Element anzuhängen.
Hier wählen wir das {{htmlelement("html")}}-Element. Anschließend rufen wir seine Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, indem wir den Namen des Ereignisses, auf das gehört werden soll (`'click'`), und eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt, übergeben.

Die Funktion, die wir hier gerade an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, da sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir als _Pfeilfunktion_ bezeichnen.
Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unsere Beispielwebsite aufpeppen

Mit unserem Rückblick auf die JavaScript-Grundlagen abgeschlossen, lassen Sie uns einige neue Funktionen zu unserer Beispielseite hinzufügen.

Bevor Sie weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei — der Teil, den Sie zuvor während des "Hello world!"-Beispiels hinzugefügt haben — und speichern Sie die leere Datei. Wenn Sie dies nicht tun, kollidiert der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt lernen Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispielseite zeigen möchten. Idealerweise hat das Bild dieselbe Größe wie das zuvor hinzugefügte Bild oder ist ihm so nah wie möglich.
2. Speichern Sie dieses Bild in Ihrem Ordner `images`.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweiten und ersten Bildnamen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt, wenn Sie auf das Bild klicken, sollte es auf das andere wechseln.

Im obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Als nächstes haben Sie ihm eine Funktion für den `click`-Ereignishandler mit keinem Namen („anonyme“ Funktion) gegeben. Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion aus:

1. Der Wert des `src`-Attributs des Bildes wird abgerufen.
2. Ein Bedingter wird verwendet, um zu prüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn dies der Fall ist, ändert der Code den `src`-Wert auf den Pfad des zweiten Bildes, wodurch das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es sich bereits geändert haben muss), wird der `src`-Wert auf den ursprünglichen Bildpfad zurückgesetzt.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitenüberschrift in eine personalisierte Willkommensnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt bestehen. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit dem [Web Storage API](/de/docs/Web/API/Web_Storage_API). Außerdem fügen wir eine Option hinzu, um den Benutzernamen zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am unteren Rand der Datei, genau wie er geschrieben wurde. Dies erstellt Referenzen auf den neuen Button und die Überschrift und speichert jede in Variablen.

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die persönliche Begrüßung festzulegen. Dies wird noch nichts bewirken; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die Funktion `setUserName()` enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben, und sie in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Anschließend ruft der Code auf die `localStorage`-API zurück, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von `localStorage`, um ein Datenobjekt namens "name" zu erstellen und zu speichern, wobei wir seinen Wert auf die Variable `myName` setzen, die den Eintrag des Benutzers für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String, plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da es die App beim ersten Laden strukturiert.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Diese erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`), um zu prüfen, ob das Datenobjekt `name` bereits in localStorage gespeichert ist. Wenn nicht, wird die Funktion `setUserName()` ausgeführt, um sie zu erstellen. Wenn es existiert (d.h. der Benutzer hat bei einem vorherigen Besuch einen Benutzernamen festgelegt), holen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf einen String, plus den Namen des Benutzers, wie wir es innerhalb von `setUserName()` getan haben.

5. Fügen Sie dem Button eine `click`-Ereignishandler-Funktion hinzu, wie unten gezeigt. Wenn er angeklickt wird, läuft `setUserName()`. Auf diese Weise kann der Benutzer einen anderen Namen eingeben, indem er den Button drückt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_-Schaltfläche zu drücken. Sie sollten mit einem Titel enden, der _Mozilla is cool, null_ lautet. Dies geschieht, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie das Eingabefeld abbrechen. _null_ ist ein spezieller Wert in JavaScript, der sich auf das Fehlen eines Werts bezieht.

Versuchen Sie auch, _OK_ zu drücken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla is cool,_ lautet, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie sicherstellen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion auf diese:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als den Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr so aussieht wie das Bild unten. Sie können sich auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach Erstellung der Elemente: ein Header, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie hängen bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Jetzt, da Sie Ihre Website erstellt haben, ist der nächste Schritt, sie online zu stellen, damit andere sie überprüfen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun können — [Publishing your website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : In diesem Artikel haben wir nur die Oberfläche von JavaScript angekratzt. Sie werden später auf unserem Lernpfad viel mehr JavaScript finden, beginnend mit unserem _Dynamisches Skripting mit JavaScript_-Modul.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, begleitet von einer automatischen Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
