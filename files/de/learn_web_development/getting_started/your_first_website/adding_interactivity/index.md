---
title: "JavaScript: Interaktivität hinzufügen"
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Webseiten hinzufügt. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Tasten gedrückt werden oder bei der Dateneingabe in Formulare, bei dynamischem Styling, bei Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dafür zu vertiefen, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Webseite verwenden, und Dateisystemen.
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

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Webseite hinzufügen kann. Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und benutzerfreundlich für Anfänger. Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf der Grundlage der Kernsprache JavaScript geschrieben und eine riesige Menge an Funktionalität mit minimalem Aufwand freigeschaltet. Diese beinhalten:

- In Webbrowsern integrierte Browser-Anwendungsprogrammierschnittstellen ({{Glossary("API", "APIs")}}), die Funktionalität wie das dynamische Erstellen von HTML und das Festlegen von CSS-Stilen, das Erfassen und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audio-Proben bieten.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionalitäten von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Erstellung von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels – als eine leichte Einführung in JavaScript – die Details zu präsentieren, wie sich die Kernsprache JavaScript von den oben aufgeführten Tools unterscheidet. Weitere Informationen finden Sie in unseren [Core-Modulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der folgende Abschnitt führt einige Aspekte der Kernsprache ein und bietet die Möglichkeit, mit einigen Funktionen der Browser-API zu experimentieren. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Wenn Ihre JavaScript-Fähigkeiten wachsen, werden Ihre Websites eine neue Dimension von Macht und Kreativität erreichen.

Allerdings ist es herausfordernder, sich mit JavaScript vertraut zu machen, als mit HTML und CSS. Sie sollten klein anfangen und schrittweise voranschreiten. Beginnen wir damit, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie nicht dem Rest unseres Kurses gefolgt sind, [laden Sie dieses Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie es als Ausgangspunkt.

1. Erstellen Sie innerhalb Ihres `first-website`-Ordners einen neuen Ordner namens `scripts`.
2. Erstellen Sie innerhalb des `scripts`-Ordners ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in eine neue Zeile ein, kurz vor dem schließenden `</body>`-Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Funktion wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.

4. Fügen Sie diesen Code zu Ihrer `scripts/main.js`-Datei hinzu:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas wie das folgende sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}}-Element nahe dem Ende der HTML-Datei platzieren, besteht darin, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen ist, könnten Probleme auftreten. JavaScript nahe dem Ende einer HTML-Seite zu platzieren, ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Text der Überschrift in _Hello world!_ zu ändern. Dies haben wir getan, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf Ihre Überschrift zu erhalten und sie dann in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Anschließend setzte der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der Variablen `myHeading` (die den Inhalt der Überschrift darstellt) auf _Hello world!_.

> [!NOTE]
> Beide der von Ihnen in dieser Übung verwendeten Features sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die Dokumente manipulieren kann.

## Crashkurs zu Sprachgrundlagen

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, erläutern wir einige der Kernfunktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen allen Programmiersprachen gemeinsam sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Geben Sie in diesem Artikel die Beispiel-Codezeilen in Ihre JavaScript-Konsole ein, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entwicklertools des Browsers entdecken](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen auf einer einzigen Zeile trennen müssen. Einige Leute halten es jedoch für gute Praxis, Semikolons am Ende jeder Anweisung zu verwenden. Es gibt andere Regeln, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Details finden Sie in [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können eine Variable fast beliebig benennen, es gibt jedoch einige Einschränkungen. (Siehe [diesen Abschnitt über Benennungsregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihre Variable](https://mothereff.in/js-variables) überprüfen, um zu sehen, ob sie gültig ist.

JavaScript ist groß- und kleinschreibungssensitiv. Das bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie in Ihrem Code Probleme haben, überprüfen Sie die Groß- und Kleinschreibung!

Nach der Deklaration einer Variablen können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Außerdem können Sie beide Operationen auf derselben Zeile durchführen:

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

Beachten Sie, dass Variablen Werte enthalten können, die unterschiedliche [Datentypen](/de/docs/Web/JavaScript/Data_structures) haben:

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
        Dies ist eine Textsequenz, bekannt als String. Um anzuzeigen, dass der
        Wert ein String ist, schließen Sie ihn in einfache oder doppelte
        Anführungszeichen ein.
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
        Dies ist ein True/False-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine
        Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es ermöglicht, mehrere Werte in einem
        einzelnen Verweis zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Greifen Sie auf
        jedes Mitglied des Arrays wie folgt zu:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code> usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in
        einer Variablen gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle
        obigen Beispiele auch.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um irgendetwas Interessantes in der Programmierung zu tun. Wenn Werte sich nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie z.B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit Code hinzugefügt werden können. Der Browser ignoriert als Kommentar markierten Text. Sie können Kommentare in JavaScript schreiben, genau wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, kann er hinter zwei Schrägstrichen so platziert werden:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das als Ergebnis auf zwei Werte (oder Variablen) basiert. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Diese tun das, was Sie in der Grundmathematik erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiplizieren in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie bereits gesehen: Dies weist einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom
        gleichen Datentyp sind. Es gibt ein <code>true</code>/<code>false</code>
        (Boolean) Ergebnis zurück.
      </td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>
        Dies gibt den logisch gegenteiligen Wert von dem zurück, was es
        vorangeht. Es verwandelt ein <code>true</code> in ein <code>false</code>
        u.s.w. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird,
        testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Bei "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der
          Vergleich gibt <code>false</code> zurück, weil wir es negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit unterschiedlicher
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich 3".
          Dies gibt <code>false</code> zurück, weil <code>myVariable</code>
          gleich 3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu erkunden, aber das ist fürs Erste genug. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu einigen seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Achten Sie darauf, dass Sie auf Ihre Variablen richtig verweisen und die Ergebnisse erhalten, die Sie erwarten. Beispielsweise geben Sie `'35' + '25'` in Ihrer Konsole ein. Warum erhalten Sie nicht das gewünschte Ergebnis? Weil die Anführungszeichen die Zahlen in Zeichenfolgen verwandeln, sodass Sie am Ende Zeichenfolgen verketten, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungen

Bedingungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr ist oder nicht. Eine sehr häufige Form der Bedingungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird stattdessen der zweite Codeblock – nach dem Schlüsselwort `else` – ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, der ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code immer wieder zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()` und `alert()` Funktionen sind in den Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber ihm Klammern – `()` – folgen, handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}}: Daten, die sie benötigen, um ihre Aufgabe zu erfüllen. Argumente gehen in die Klammern und werden durch Kommata getrennt, wenn es mehr als ein Argument gibt.

Zum Beispiel macht die `alert()` Funktion eine Popup-Box innerhalb des Browserfensters erscheinen, aber wir müssen ihr einen String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung teilt dem Browser mit, die `result`-Variable aus der Funktion zurückzugeben, damit sie verwendbar ist. Dies ist notwendig, da Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird Variablen-{{Glossary("Scope", "Scoping")}} genannt. (Lesen Sie mehr über [Variablen-Scoping](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignis-Handler. Dies sind Code-Strukturen, die auf Aktivität im Browser warten und Code als Reaktion darauf ausführen. Das offensichtlichste Beispiel ist die Behandlung des [klick-Ereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie auf etwas mit Ihrer Maus klicken. Um dies zu demonstrieren, geben Sie Folgendes in Ihre Konsole ein und klicken dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Anzahl von Möglichkeiten, um einen Ereignis-Handler an ein Element zu knüpfen. Hier wählen wir das {{htmlelement("html")}}-Element aus. Wir rufen dann seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, übergeben den Namen des zu überwachenden Ereignisses (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis auftritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, da sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir _Pfeilfunktion_ nennen. Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispielwebsite aufladen

Mit unserem Überblick über die Grundlagen von JavaScript, lassen Sie uns einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

Bevor Sie weiter fortfahren, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei — den Teil, den Sie zuvor im "Hallo Welt!"-Beispiel hinzugefügt haben — und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der bestehende Code mit dem neuen Code, den Sie hinzufügen möchten, in Konflikt stehen.

### Einen Bildwechsler hinzufügen

In diesem Abschnitt erfahren Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um das Display zwischen zwei Bildern zu wechseln. Diese Änderung wird beim Klicken auf das angezeigte Bild erfolgen.

1. Wählen Sie ein anderes Bild aus, das auf Ihrer Beispiel-Website gezeigt werden soll. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild haben oder so nah wie möglich sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js`-Datei hinzu, und achten Sie darauf, `firefox2.png` und beide Instanzen von `firefox-icon.png` mit Ihren zweiten und ersten Bildnamen zu ersetzen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollte sich das Bild ändern, wenn Sie darauf klicken.

Im obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Anschließend haben Sie ihm einen `click`-Ereignis-Handler ohne Namen zugewiesen (eine "anonyme" Funktion). Jedes Mal, wenn dieses Element angeklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src`-Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu prüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, sodass das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nein (was bedeutet, dass es sich bereits geändert haben muss), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

### Eine personalisierte Begrüßungsnachricht hinzufügen

Nächste, lasst uns die Seitenüberschrift in eine personalisierte Begrüßungsnachricht ändern, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Begrüßungsnachricht wird fortbestehen. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit der [Webspeicher-API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option einfügen, um den Benutzernamen zu ändern und damit auch die Begrüßungsnachricht.

1. Fügen Sie in `index.html` die folgende Zeile kurz vor dem {{htmlelement("script")}}-Element ein:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau so, wie er geschrieben ist. Dies erstellt Referenzen zum neuen Button und zur Überschrift und speichert jede in Variablen:

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

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld ähnlich wie `alert()` zeigt. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und speichert sie in einer Variablen, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als nächstes ruft der Code auf die `localStorage`-API, die uns erlaubt, Daten im Browser zu speichern und später abzurufen. Wir benutzen die `setItem()`-Funktion von `localStorage`, um ein Datenitem namens `"name"` zu erstellen und es auf den Wert der `myName`-Variablen zu setzen, der den Benutzereingabename enthält. Schließlich setzen wir die `textContent`-Eigenschaft der Überschrift auf eine Zeichenkette plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir können dies als Initialisierungscode bezeichnen, da es die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch `!`), um zu überprüfen, ob das `name`-Datenitem bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um sie zu erstellen. Wenn es existiert (d.h. der Benutzer hat während eines vorherigen Besuchs einen Benutzernamen festgelegt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen die `textContent`-Eigenschaft der Überschrift auf eine Zeichenkette plus den Namen des Benutzers, wie wir es innerhalb von `setUserName()` gemacht haben.

5. Fügen Sie dem Button eine `click`-Ereignis-Handler-Funktion hinzu, wie unten gezeigt. Wenn gedrückt, wird `setUserName()` ausgeführt. Dies ermöglicht dem Benutzer, durch Drücken auf den Button einen anderen Namen einzugeben.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie dazu auffordert, Ihren Benutzernamen einzugeben, versuchen Sie den _Abbrechen_-Button zu drücken. Sie sollten dann mit einem Titel enden, der _Mozilla ist cool, null_ liest. Dies geschieht, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der das Fehlen eines Wertes darstellt.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ liest, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion auf das Folgende:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die oben genannte Aussage nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr wie das untenstehende Bild aussieht. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: eine Kopfzeile, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Falls Sie feststecken, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Sie finden viel mehr über JavaScript in unseren [Core](/de/docs/Learn_web_development/Core) und [Erweiterungs](/de/docs/Learn_web_development/Extensions) Modulen, beginnend bei [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting).

## Siehe auch

- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
