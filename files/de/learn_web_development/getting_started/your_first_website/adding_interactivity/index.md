---
title: "JavaScript: Hinzufügen von Interaktivität"
short-title: Hinzufügen von Interaktivität
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: cedf5fa137fbb4e95fe6a9567b299ea2fd8c8ad5
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Dies geschieht in Spielen, beim Verhalten von Reaktionen, wenn Tasten gedrückt werden oder bei der Dateneingabe in Formularen, bei dynamischem Styling, bei Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis darüber, was möglich ist, zu vertiefen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlagen der JavaScript-Sprache wie Variablen, Operatoren, Bedingte Anweisungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, mit der Interaktivität zu einer Website hinzugefügt werden kann. Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und einsteigerfreundlich. Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfangreiche datenbankgesteuerte Apps und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf Basis der grundlegenden JavaScript-Sprache entwickelt, die eine enorme Menge an Funktionalität mit minimalem Aufwand freischalten. Dazu gehören:

- Browser Application Programming Interfaces ({{Glossary("API", "APIs")}}), die in Webbrowsern integriert sind und Funktionen wie dynamisches Erstellen von HTML und Festlegen von CSS-Stilen, Erfassen und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder Erzeugen von 3D-Grafiken und Audio-Samples bieten.
- Drittanbieter-APIs, die Entwicklern die Integration von Funktionen von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites ermöglichen.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels – als leichte Einführung in JavaScript – die Details zu präsentieren, wie sich die Kern-JavaScript-Sprache von den oben aufgeführten Tools unterscheidet. Mehr darüber erfahren Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der folgende Abschnitt führt einige Aspekte der Kernsprache ein und gibt Ihnen die Möglichkeit, ein paar Funktionen der Browser-API auszuprobieren. Viel Spaß!

## Ein "Hello world!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit zunehmenden JavaScript-Kenntnissen betreten Ihre Websites eine neue Dimension von Leistung und Kreativität.

Allerdings ist es schwieriger, sich mit JavaScript vertraut zu machen als mit HTML und CSS. Sie sollten klein anfangen und sich schrittweise weiterentwickeln. Beginnen wir damit, zu untersuchen, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hello world!_-Beispiel zu erstellen. (_Hello world!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses bisher nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem soeben heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und fügen Sie diesen Code in einer neuen Zeile direkt vor dem schließenden `</body>`-Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Aufgabe wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, damit es Einfluss auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) nehmen kann.

4. Fügen Sie diesen Code in Ihre Datei `scripts/main.js` ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie `index.html` in Ihrem Browser. Sie sollten etwas wie dies sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die obigen Anweisungen das {{htmlelement("script")}}-Element im unteren Bereich der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen ist, könnten Probleme auftreten. Das Platzieren von JavaScript am unteren Ende einer HTML-Seite ist eine Möglichkeit, dieses Abhängigkeitsverhältnis zu berücksichtigen.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Überschriftstext in _Hello world!_ zu ändern. Dies haben wir erreicht, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf die Überschrift zu erhalten und dann in einer Variablen namens `myHeading` zu speichern. Das ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Anschließend setzt der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der Variablen `myHeading` (die den Inhalt der Überschrift darstellt) auf _Hello world!_.

> [!NOTE]
> Beide der in dieser Übung verwendeten Funktionen sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Grundkurs zur Sprache

Um Ihnen ein besseres Verständnis darüber zu geben, wie JavaScript funktioniert, erklären wir einige der grundlegenden Funktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen allen Programmiersprachen gemeinsam sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Kodieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel sollten Sie versuchen, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Für weitere Details zu JavaScript-Konsolen siehe [Entdecken Sie Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), gefolgt vom Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Allerdings glauben einige Leute, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt weitere Regeln, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Informationen finden Sie in [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden beliebigen Namen geben, es gibt jedoch einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie sich unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet, dass `myVariable` nicht dasselbe ist wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nach der Deklaration einer Variablen können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Sie können auch beide Operationen in derselben Zeile ausführen:

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

Beachten Sie, dass Variablen Werte verschiedener [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) enthalten können:

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
        Dies ist eine Textfolge, die als Zeichenkette bekannt ist. Um anzuzeigen, dass der Wert eine Zeichenkette ist, umgeben Sie ihn mit einfachen oder doppelten Anführungszeichen.
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
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Greifen Sie auf jedes
        Mitglied des Arrays so zu:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, etc.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Denken Sie daran, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Auch alle
        obigen Beispiele.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um irgendetwas Interessantes in der Programmierung zu tun. Wenn Werte sich nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textschnipsel, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert den als Kommentar markierten Text. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstriche setzen, wie folgt:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Zwei Zahlen zusammenzählen oder zwei Zeichenketten kombinieren.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun, was Sie in der Grundmathematik erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiplizieren in JS ist ein Sternchen<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben: dies weist einer Variable einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte und Datentypen gleich sind. Es gibt ein
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
        Dies gibt den logisch entgegengesetzten Wert dessen zurück, was es vorgeht. Es verwandelt
        ein <code>true</code> in ein <code>false</code>, usw. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei
        Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht", der Grundausdruck ist <code>true</code>, aber der
          Vergleich ergibt <code>false</code>, weil wir ihn negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit einer anderen
          Syntax. Hier testen wir, ob <code>myVariable</code> <em>ungleich</em> 3 ist. Das ergibt <code>false</code>, weil <code>myVariable</code> doch
          gleich 3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu entdecken, aber das ist für den Moment genug. Sehen Sie [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu einigen seltsamen Ergebnissen bei der Berechnung führen. Seien Sie vorsichtig, dass Sie sich auf Ihre Variablen korrekt beziehen und die erwarteten Ergebnisse erhalten. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das Ergebnis, das Sie erwartet haben? Weil die Anführungszeichen die Zahlen in Zeichenketten verwandeln, sodass Sie am Ende Zeichenketten verkettet haben, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Anweisungen

Bedingte Anweisungen sind Codekonstrukte, die verwendet werden, um zu testen, ob ein Ausdruck wahr oder falsch ist. Eine sehr häufige Form konditioneller Anweisungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb `if ()` ist der Test. Diese verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit der Zeichenkette `chocolate` zu vergleichen und festzustellen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird der zweite Codeblock - nach dem `else`-Schlüsselwort - stattdessen ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, der ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative zum wiederholten Schreiben desselben Codes. Einige Anwendungsbeispiele für Funktionen haben Sie bereits gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die `document.querySelector()` und `alert()` Funktionen sind im Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()` — handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} entgegen: Daten, die sie für ihre Aufgabe benötigen. Argumente stehen in den Klammern, getrennt durch Kommas, falls mehr als ein Argument vorhanden ist.

Beispielsweise lässt die `alert()`-Funktion ein Popup-Fenster im Browser erscheinen, aber wir müssen ihr eine Zeichenkette als Argument geben, damit die Funktion weiß, welche Nachricht angezeigt werden soll.

Sie können auch eigene Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente annimmt und multipliziert:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Versuchen Sie, dies in der Konsole auszuführen; testen Sie es dann mit mehreren Argumenten. Zum Beispiel:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung weist den Browser an, die `result`-Variable aus der Funktion zurückzugeben, sodass sie verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird als Variablen-{{Glossary("Scope", "Bereich")}} bezeichnet. (Lesen Sie mehr über [Variablenbereich](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Codekonstruktionen, die auf Aktivität im Browser hören und Code als Antwort ausführen. Das offensichtlichste Beispiel ist die Behandlung des [Klick-Ereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das folgende in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt mehrere Möglichkeiten, einen Ereignishandler an ein Element anzuhängen. Hier wählen wir das {{htmlelement("html")}} Element aus. Wir rufen dann seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, übergeben den Namen des Ereignisses, auf das wir hören wollen (`'click'`), und eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt.

Die Funktion, die wir hier gerade an `addEventListener()` übergeben haben, wird als _anonyme Funktion_ bezeichnet, weil sie keinen Namen hat. Es gibt eine alternative Schreibweise für anonyme Funktionen, die wir _Pfeilfunktion_ nennen. Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website aufpeppen

Mit unserem Überblick über die JavaScript-Grundlagen abgeschlossen, fügen wir unserer Beispielseite einige neue Funktionen hinzu.

Bevor Sie weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei – den Teil, den Sie zuvor während des "Hello world!"-Beispiels hinzugefügt haben – und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

### Hinzufügen eines Bildwechsels

In diesem Abschnitt lernen Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung tritt auf, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispielseite präsentieren möchten. Idealerweise hat das Bild dieselbe Größe wie das von Ihnen zuvor hinzugefügte Bild oder ist ihm so nahe wie möglich.
2. Speichern Sie dieses Bild im Ordner `images`.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein, und ersetzen Sie `firefox2.png` und beide Instanzen von `firefox-icon.png` durch den Namen Ihres zweiten und ersten Bildes.

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

Im obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}} Element in `myImage` gespeichert. Als nächstes haben Sie ihm einen `click`-Ereignishandler ohne Namen gegeben (eine "anonyme" Funktion). Jedes Mal, wenn auf dieses Element geklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src`-Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu überprüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn dies zutrifft, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, wodurch das andere Bild im {{htmlelement("img")}} Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es bereits geändert wurde), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

### Hinzufügen einer personalisierten Willkommensnachricht

Als Nächstes ändern wir die Seitenüberschrift in eine personalisierte Willkommensnachricht, wenn ein Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt bestehen. Sollte der Benutzer die Seite verlassen und später zurückkehren, werden wir die Nachricht mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) speichern. Wir werden auch eine Option hinzufügen, um den Benutzernamen zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}} Element ein:

   ```html
   <button>Change user</button>
   ```

2. Fügen Sie in `main.js` den folgenden Code am Ende der Datei ein, genau so, wie er geschrieben ist. Dies erstellt Referenzen zum neuen Button und zur Überschrift, wobei jeder in Variablen gespeichert wird:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzurichten. Dies wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()` Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt) Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben, und diese in einer Variablen speichert, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als nächstes ruft der Code die `localStorage` API auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von localStorage, um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, dessen Wert auf die `myName`-Variable gesetzt wird, die die Eingabe des Benutzers für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenkette plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da er die App strukturiert, wenn sie zum ersten Mal lädt.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Diese erste Zeile dieses Blocks verwendet den Negationsoperator (logisch NOT, dargestellt durch das `!`), um zu überprüfen, ob das `name`-Datenobjekt bereits im localStorage gespeichert ist. Wenn nicht, wird die `setUserName()` Funktion ausgeführt, um es zu erstellen. Wenn es existiert (das heißt, der Benutzer hat bei einem vorherigen Besuch einen Benutzernamen angegeben), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf eine Zeichenkette plus dem Benutzernamen, wie wir es in `setUserName()` gemacht haben.

5. Fügen Sie dem Button eine `click`-Ereignishandler-Funktion hinzu, wie unten gezeigt. Wenn darauf geklickt wird, wird `setUserName()` ausgeführt. Dies ermöglicht dem Benutzer, einen anderen Namen einzugeben, indem er die Schaltfläche drückt.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die Schaltfläche _Abbrechen_ zu drücken. Sie sollten am Ende einen Titel erhalten, der _Mozilla ist cool, null_ lautet. Dies passiert, weil der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) eingestellt ist, wenn Sie die Eingabeaufforderung abbrechen. _null_ ist ein spezieller Wert in JavaScript, der sich auf das Fehlen eines Wertes bezieht.

Versuchen Sie außerdem, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ lautet, da Sie `myName` auf eine leere Zeichenkette gesetzt haben.

Um diese Probleme zu vermeiden, können Sie überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()` Funktion so:

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

In der menschlichen Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht richtig ist), dann speichern Sie den Wert im localStorage und setzen ihn als Überschriftstext.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die etwa so aussieht wie das Bild unten. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, ein großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Nachdem Sie Ihre Website fertiggestellt haben, besteht der nächste Schritt darin, sie online zu stellen, damit andere sie sich ansehen können. Wir zeigen Ihnen im nächsten Artikel, wie Sie dies tun können — [Veröffentlichen Sie Ihre Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Sie werden viel mehr JavaScript später in unserem Lernpfad finden, beginnend mit unserem _Dynamisches Scripting mit JavaScript_-Modul.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der gesamte Kurs ist für eine geringe einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
