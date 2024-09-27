---
title: JavaScript-Grundlagen
slug: Learn/Getting_started_with_the_web/JavaScript_basics
l10n:
  sourceCommit: 9e8b77593a626b1e0765494e4928b8f4a5c2d9bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Ihrer Webseite hinzufügt. Dies geschieht in Spielen, im Verhalten von Antworten, wenn Tasten gedrückt werden, oder bei der Dateneingabe in Formulare; mit dynamischem Styling; mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dafür zu vertiefen, was möglich ist.

## Was ist JavaScript?

[JavaScript](/de/docs/Glossary/JavaScript) ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Webseite hinzufügen kann. Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich. Mit mehr Erfahrung werden Sie in der Lage sein, Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgesteuerte Apps und vieles mehr zu erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Werkzeugen auf der Grundlage der Kernsprache JavaScript geschrieben, die eine riesige Menge an Funktionalität mit minimalem Aufwand freischalten. Dazu gehören:

- Anwendungsprogrammierschnittstellen ([APIs](/de/docs/Glossary/API)) im Browser, die Funktionalitäten wie das dynamische Erstellen von HTML und das Setzen von CSS-Stilen, das Sammeln und Verarbeiten eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Tonmustern bereitstellen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionalitäten von anderen Inhaltsanbietern in Websites zu integrieren, wie [Disqus](https://disqus.com/) oder Facebook.
- Drittanbieter-Frameworks und Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Sites und Anwendungen zu beschleunigen.

Es ist außerhalb des Umfangs dieses Artikels – als leichte Einführung in JavaScript – die Details, wie sich die Kernsprache JavaScript von den oben genannten Werkzeugen unterscheidet, zu präsentieren. Sie können mehr darüber im [JavaScript-Lernbereich](/de/docs/Learn/JavaScript) von MDN sowie in anderen Teilen von MDN erfahren.

Der Abschnitt unten führt einige Aspekte der Kernsprache ein und bietet die Möglichkeit, mit einigen Funktionen der Browser-API zu spielen. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit zunehmenden JavaScript-Kenntnissen erhalten Ihre Websites eine neue Dimension von Leistung und Kreativität.

Allerdings ist es schwieriger, sich in JavaScript wohlzufühlen, als in HTML und CSS. Möglicherweise müssen Sie klein anfangen und sich allmählich steigern. Um zu beginnen, lassen Sie uns untersuchen, wie man JavaScript zu Ihrer Seite hinzufügt, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie dieses Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie es als Ausgangspunkt.

1. Gehen Sie zu Ihrer Testseite und erstellen Sie einen neuen Ordner namens `scripts`. Erstellen Sie innerhalb des Scripts-Ordners ein neues Textdokument namens `main.js` und speichern Sie es.
2. Geben Sie in Ihrer `index.html`-Datei diesen Code in einer neuen Zeile ein, unmittelbar vor dem schließenden `</body>`-Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. Dies übernimmt die gleiche Funktion wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es einen Effekt auf das HTML haben kann (zusammen mit dem CSS und allem anderen auf der Seite).
4. Fügen Sie diesen Code in die Datei `scripts/main.js` ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind. Laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas ähnliches sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die Anleitungen (oben) das {{htmlelement("script")}}-Element in den unteren Bereich der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es soll das HTML beeinflussen, das noch nicht geladen ist, könnte es Probleme geben. Das Platzieren von JavaScript in den unteren Bereich einer HTML-Seite ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen. Um mehr über alternative Ansätze zu erfahren, lesen Sie [Strategien zum Laden von Skripten](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies).

### Was ist passiert?

Der Überschriftstext hat sich mit JavaScript in _Hallo Welt!_ geändert. Dies haben Sie erreicht, indem Sie eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf Ihre Überschrift zu erhalten und sie in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element machen wollen, müssen Sie es zuerst auswählen.

Anschließend hat der Code den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft der Variablen `myHeading` (die den Inhalt der Überschrift darstellt) auf _Hallo Welt!_ gesetzt.

> [!NOTE]
> Beide in dieser Übung verwendeten Funktionen sind Bestandteile des [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), das über die Fähigkeit verfügt, Dokumente zu manipulieren.

## Sprachgrundlagen im Schnellkurs

Um Ihnen ein besseres Verständnis dafür zu vermitteln, wie JavaScript funktioniert, erklären wir einige der Kernfunktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen allen Programmiersprachen gemeinsam sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel versuchen Sie, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Für weitere Details zu JavaScript-Konsolen, siehe [Entdecken von Browser-Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

[Variablen](/de/docs/Glossary/Variable) sind Container, die Werte speichern. Sie beginnen damit, eine Variable mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) zu deklarieren, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln dafür, wann Sie Semikolons verwenden sollten und wann nicht. Für weitere Details siehe [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können eine Variable nahezu beliebig benennen, es gibt jedoch einige Einschränkungen. (Siehe [dieser Abschnitt über Benennungsregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Sie können auch beide Operationen in einer einzigen Zeile durchführen:

```js
let myVariable = "Bob";
```

Sie können den Wert abrufen, indem Sie den Variablennamen aufrufen:

```js
myVariable;
```

Nachdem Sie einer Variable einen Wert zugewiesen haben, können Sie ihn später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte unterschiedlicher [Datentypen](/de/docs/Web/JavaScript/Data_structures) enthalten können:

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
      <th scope="row">[String](/de/docs/Glossary/String)</th>
      <td>
        Dies ist eine Textfolge, die als String bekannt ist. Um zu kennzeichnen, dass
        der Wert ein String ist, umschließen Sie ihn in einfache oder doppelte Anführungszeichen.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">[Number](/de/docs/Glossary/Number)</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen um sich herum.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">[Boolean](/de/docs/Glossary/Boolean)</th>
      <td>
        Dies ist ein Wahr/Falsch-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">[Array](/de/docs/Glossary/Array)</th>
      <td>
        Dies ist eine Struktur, die es ermöglicht, mehrere Werte in einer einzigen
        Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Greifen Sie auf
        jedes Element des Arrays so zu:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code> usw.
      </td>
    </tr>
    <tr>
      <th scope="row">[Object](/de/docs/Glossary/Object)</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann
        in einer Variable gespeichert werden. Behalten Sie dies im Hinterkopf, während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />All die
        oben genannten Beispiele auch.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um in der Programmierung etwas Interessantes zu tun. Wenn sich Werte nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie z.B. eine Begrüßungsnachricht personalisieren oder ein Bild in einer Bildergalerie ändern.

### Kommentare

Kommentare sind Textschnipsel, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert Texte, die als Kommentare markiert sind. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, besteht die Möglichkeit, ihn hinter zwei Schrägstrichen zu setzen, wie hier:

```js
// This is a comment
```

### Operatoren

Ein `[operator](/de/docs/Glossary/operator)` ist ein mathematisches Symbol, das auf der Grundlage von zwei Werten (oder Variablen) ein Ergebnis erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Zwei Zahlen zusammenzählen oder zwei Strings zusammenführen.</td>
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
      <td>Wie Sie bereits gesehen haben: dies weist einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom selben Datentyp sind. Es gibt ein
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
        Dies gibt den logisch entgegengesetzten Wert von dem zurück, was es vorangeht. Es wandelt
        ein <code>true</code> in ein <code>false</code> usw. um. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird,
        testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Bei "Nicht" ist der Basisausdruck <code>true</code>, aber der
          Vergleich ergibt <code>false</code>, da wir ihn negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" ergibt im Grunde dasselbe Ergebnis mit anderem
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich
          3?". Dies gibt <code>false</code> zurück, weil <code>myVariable</code> gleich
          3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu erkunden, aber das ist erst einmal genug. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu einigen seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Achten Sie darauf, dass Sie auf Ihre Variablen richtig verweisen und die Ergebnisse erhalten, die Sie erwarten. Geben Sie zum Beispiel `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings umwandeln. Sie haben folglich Strings anstatt Zahlen zusammengeführt. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Anweisungen

Bedingte Anweisungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr oder falsch ist. Eine sehr häufige Form von bedingten Anweisungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dies verwendet den strikt Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird der zweite Codeblock – nach dem `else`-Schlüsselwort – stattdessen ausgeführt.

### Funktionen

[Funktionen](/de/docs/Glossary/Function) sind eine Möglichkeit, Funktionalitäten zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Diese Funktionen, `document.querySelector` und `alert`, sind im Browser eingebaut.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, dem aber Klammern folgen — `()` — handelt es sich wahrscheinlich um eine Funktion. Funktionen nehmen oft [Argumente](/de/docs/Glossary/Argument) an: Daten, die sie benötigen, um ihre Aufgabe zu erledigen. Argumente gehen innerhalb der Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel lässt die `alert()`-Funktion ein Popup-Fenster innerhalb des Browserfensters erscheinen, aber wir müssen ihr einen String als Argument geben, um der Funktion zu sagen, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente annimmt und sie multipliziert:

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung teilt dem Browser mit, die `result`-Variable aus der Funktion zurückzugeben, sodass sie verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies nennt man Variablen-[Sichtbarkeit](/de/docs/Glossary/Scope). (Lesen Sie mehr über [Variablen-Sichtbarkeit](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignis-Handler. Dies sind Code-Strukturen, die auf Aktivität im Browser hören und im Gegenzug Code ausführen. Das offensichtlichste Beispiel ist das Behandeln von [Klickereignissen](/de/docs/Web/API/Element/click_event), die vom Browser ausgelöst werden, wenn Sie auf etwas mit Ihrer Maus klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein, klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Reihe von Möglichkeiten, einen Ereignis-Handler an ein Element anzuhängen. Hier wählen wir das {{htmlelement("html")}}-Element. Dann rufen wir seine Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, wobei wir den Namen des Ereignisses (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt, übergeben.

Die Funktion, die wir hier gerade an `addEventListener()` übergeben haben, nennt man eine _anonyme Funktion_, weil sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir _Pfeilfunktion_ nennen. Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unser Beispiel-Website aufmotzen

Mit diesem Überblick über die Grundlagen von JavaScript, lassen Sie uns ein paar neue Funktionen zu unserer Beispiel-Website hinzufügen.

Bevor Sie fortfahren, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei — den Teil, den Sie vorher während des "Hallo Welt!"-Beispiels hinzugefügt haben — und speichern Sie die leere Datei. Andernfalls wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen möchten, in Konflikt geraten.

### Ein Bildwechsler hinzufügen

In diesem Abschnitt lernen Sie, wie Sie JavaScript und DOM-API-Funktionen verwenden, um die Anzeige von einem von zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein Bild aus, das Sie auf Ihrer Beispielseite zeigen möchten. Idealerweise hat das Bild dieselbe Größe wie das zuvor hinzugefügte Bild oder ist so nah wie möglich.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Benennen Sie das Bild in _firefox2.png_ um.
4. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein.

   ```js
   const myImage = document.querySelector("img");

   myImage.onclick = () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollten Sie, wenn Sie auf das Bild klicken, sehen, dass es sich in das andere Bild ändert.

Dies ist passiert. Sie haben eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Als nächstes haben Sie die `onclick`-Ereignis-Handler-Eigenschaft auf eine Funktion ohne Namen (eine "anonyme" Funktion) gesetzt. Jedes Mal, wenn dieses Element geklickt wird:

1. Ruft der Code den Wert des `src`-Attributs des Bildes ab.
2. Der Code verwendet eine Bedingungsanweisung, um zu überprüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:

   1. Wenn dies der Fall ist, ändert der Code den `src`-Wert auf den Pfad des zweiten Bildes, wodurch das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es sich bereits geändert haben muss), kehrt der `src`-Wert zurück zum ursprünglichen Bildpfad, zum ursprünglichen Zustand.

### Eine personalisierte Willkommensnachricht hinzufügen

Als nächstes ändern wir den Seitentitel in eine personalisierte Willkommensnachricht, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht bleibt bestehen. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option hinzufügen, um den Benutzer zu ändern und somit auch die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau wie er geschrieben ist. Dies nimmt Referenzen auf den neuen Button und die Überschrift und speichert jeden in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Dies wird noch nichts tun, aber dies wird sich bald ändern.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion macht mehr als `alert()`, sie fordert den Benutzer auf, Daten einzugeben, und speichert sie in einer Variablen, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als nächstes ruft der Code eine API `localStorage` auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von localStorage, um ein Datenobjekt namens `'name'` zu erstellen und zu speichern, dessen Wert wir auf die Variable `myName` gesetzt haben, die den Benutzereintrag für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies Initialisierungscode nennen, da es die App strukturiert, wenn sie erstmals geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`), um zu überprüfen, ob die `name`-Daten existieren. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um sie zu erstellen. Falls sie existieren (d.h. der Benutzer einen Benutzernamen bei einem früheren Besuch gesetzt hat), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf einen String plus den Namen des Benutzers, wie wir es in `setUserName()` getan haben.

5. Setzen Sie diesen `onclick`-Ereignis-Handler (unten) auf den Button. Wenn darauf geklickt wird, wird `setUserName()` ausgeführt. Dadurch kann der Benutzer einen anderen Namen eingeben, indem er auf die Schaltfläche drückt.

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_-Taste zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ lautet. Dies passiert, weil—wenn Sie das Eingabefeld abbrechen—der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gespeichert wird. _Null_ ist ein spezieller Wert in JavaScript, der auf das Fehlen eines Wertes verweist.

Versuchen Sie auch, ohne einen Namen einzugeben, auf _OK_ zu klicken. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ lautet, aus ziemlich offensichtlichen Gründen.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion auf diese:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von vorne aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht wahr ist), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa dem Bild unten entspricht. Sie können sich auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach der Erstellung von Elementen: ein Header, ein großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben nur an der Oberfläche von JavaScript gekratzt. Wenn es Ihnen Spaß gemacht hat zu spielen und Sie weitergehen möchten, nutzen Sie die unten aufgeführten Ressourcen.

## Siehe auch

- [Dynamische klientseitige Programmierung mit JavaScript](/de/docs/Learn/JavaScript)
  - : Tauchen Sie viel tiefer in JavaScript ein.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geleitet durch eine automatische Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine kleine einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
