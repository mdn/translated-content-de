---
title: JavaScript-Grundlagen
slug: Learn/Getting_started_with_the_web/JavaScript_basics
l10n:
  sourceCommit: 9e8b77593a626b1e0765494e4928b8f4a5c2d9bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Ihrer Website hinzufügt. Dies geschieht in Spielen, im Verhalten von Antworten, wenn Schaltflächen gedrückt werden oder bei der Dateneingabe in Formulare; mit dynamischem Styling; mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dafür zu vertiefen, was möglich ist.

## Was ist JavaScript?

[JavaScript](/de/docs/Glossary/JavaScript) ist eine leistungsstarke Programmiersprache, die einer Website Interaktivität hinzufügen kann. Es wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und einsteigerfreundlich. Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgesteuerte Anwendungen und vieles mehr erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf Basis der Kern-JavaScript-Sprache entwickelt, die eine große Menge an Funktionalität mit minimalem Aufwand freischalten. Dazu gehören:

- Browseranwendungsprogrammierschnittstellen ([APIs](/de/docs/Glossary/API)), die in Webbrowser integriert sind und Funktionen wie das dynamische Erstellen von HTML und das Festlegen von CSS-Stilen bieten; das Erfassen und Manipulieren eines Videostreams von der Webcam eines Benutzers oder das Generieren von 3D-Grafiken und Audiobeispielen.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern wie [Disqus](https://disqus.com/) oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Rahmens dieses Artikels – als leichten Einstieg in JavaScript – die Details darüber zu präsentieren, wie sich die Kern-JavaScript-Sprache von den oben aufgeführten Tools unterscheidet. Sie können mehr im MDN [JavaScript-Lernbereich](/de/docs/Learn/JavaScript) sowie in anderen Teilen von MDN lernen.

Der untenstehende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Möglichkeit, sich auch mit einigen Funktionen von Browser-APIs zu beschäftigen. Viel Spaß!

## Ein "Hallo Welt!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Während Ihre JavaScript-Fähigkeiten wachsen, werden Ihre Websites eine neue Dimension von Leistung und Kreativität erreichen.

Sich mit JavaScript vertraut zu machen, ist jedoch herausfordernder als mit HTML und CSS. Sie müssen möglicherweise klein anfangen und sich schrittweise verbessern. Beginnen wir damit, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hallo Welt!_ Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Gehen Sie zu Ihrer Test-Website und erstellen Sie einen neuen Ordner mit dem Namen `scripts`. Erstellen Sie innerhalb des Scripts-Ordners ein neues Textdokument namens `main.js` und speichern Sie es.
2. Geben Sie in Ihrer `index.html`-Datei diesen Code in einer neuen Zeile unmittelbar vor dem schließenden `</body>`-Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. Dies erfüllt denselben Zweck wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, sodass es Auswirkungen auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.
4. Fügen Sie diesen Code in die Datei `scripts/main.js` ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind. Laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas Ähnliches wie dies sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die Anweisungen oben das {{htmlelement("script")}}-Element nahe am Ende der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst lädt und es angenommen wird, dass es das HTML beeinflusst, das noch nicht geladen wurde, könnte es zu Problemen kommen. Das Platzieren von JavaScript nahe am Ende einer HTML-Seite ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen. Um mehr über alternative Ansätze zu erfahren, siehe [Script-Ladestrategien](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies).

### Was ist passiert?

Der Text der Überschrift wurde mit JavaScript in _Hello world!_ geändert. Sie haben dies erreicht, indem Sie eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwendet haben, um eine Referenz auf Ihre Überschrift zu erhalten und dann in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich zu dem, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Anschließend setzte der Code den Wert der `textContent`-Eigenschaft der `myHeading`-Variable (die den Inhalt der Überschrift repräsentiert) auf _Hello world!_.

> [!NOTE]
> Beide der Funktionen, die Sie in dieser Übung verwendet haben, sind Teile des [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), das die Fähigkeit hat, Dokumente zu manipulieren.

## Grundlagen der Sprache Crash-Kurs

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, lassen Sie uns einige der Kernfunktionen der Sprache erklären. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen meistern, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> In diesem Artikel sollten Sie versuchen, die Beispielcodes in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Für weitere Details zu JavaScript-Konsolen siehe [Entdecken Sie die Entwickler-Tools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

[Variablen](/de/docs/Glossary/Variable) sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Einige Leute glauben jedoch, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln dafür, wann man Semikolons verwenden sollte und wann nicht. Weitere Details finden Sie in [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie sich unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet, `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

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

Beachten Sie, dass Variablen Werte mit unterschiedlichen [Datentypen](/de/docs/Web/JavaScript/Data_structures) haben können:

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
      <td>Dies ist eine Textfolge, die als String bekannt ist. Um anzuzeigen, dass der Wert ein String ist, schließen Sie ihn in einfache oder doppelte Anführungszeichen ein.</td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">[Number](/de/docs/Glossary/Number)</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">[Boolean](/de/docs/Glossary/Boolean)</th>
      <td>Dies ist ein Wahr/Falsch-Wert. Die Wörter <code>true</code> und <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.</td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">[Array](/de/docs/Glossary/Array)</th>
      <td>Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einer einzigen Referenz zu speichern.</td>
      <td><code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes Mitglied des Arrays so:<br /><code>myVariable[0]</code>, <code>myVariable[1]</code> usw.</td>
    </tr>
    <tr>
      <th scope="row">[Object](/de/docs/Glossary/Object)</th>
      <td>Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Denken Sie daran, während Sie lernen.</td>
      <td><code>let myVariable = document.querySelector('h1');</code><br />All die obigen Beispiele ebenfalls.</td>
    </tr>
  </tbody>
</table>

Warum brauchen wir Variablen? Variablen sind notwendig, um etwas Interessantes in der Programmierung zu machen. Wenn Werte sich nicht ändern könnten, dann könnten Sie nichts Dynamisches tun, wie z.B. eine Begrüßungsnachricht personalisieren oder ein in einer Bildgalerie angezeigtes Bild ändern.

### Kommentare

Kommentare sind Textschnipsel, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert Text, der als Kommentare markiert ist. Sie können Kommentare in JavaScript genau wie in CSS schreiben:

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

Ein `[Operator](/de/docs/Glossary/operator)` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) liefert. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren, zusammen mit einigen Beispielen, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td><code>6 + 9;<br />'Hallo ' + 'Welt!';</code></td>
    </tr>
    <tr>
      <th scope="row">Subtraktion, Multiplikation, Division</th>
      <td>Diese tun, was Sie im grundlegenden Mathematikunterricht erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td><code>9 - 3;<br />8 * 2; // Multiplikation in JS ist ein Sternchen<br />9 / 3;</code></td>
    </tr>
    <tr>
      <th scope="row">Zuweisung</th>
      <td>Wie Sie bereits gesehen haben: Dies weist einer Variablen einen Wert zu.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strikte Gleichheit</th>
      <td>Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom gleichen Datentyp sind. Es liefert ein <code>true</code>/<code>false</code> (Boolean) Ergebnis zurück.</td>
      <td><a href="/de/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td><code>let myVariable = 3;<br />myVariable === 4;</code></td>
    </tr>
    <tr>
      <th scope="row">Nicht, Ungleich</th>
      <td>Dies liefert den logischen Gegenteilswert dessen, was es voransteht. Es verwandelt ein <code>true</code> in ein <code>false</code> usw. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei Werte <em>nicht</em> gleich sind.</td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>Für "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der Vergleich liefert <code>false</code> zurück, weil wir ihn negieren:</p>
        <p><code>let myVariable = 3;<br />!(myVariable === 3);</code></p>
        <p>"Ungleich" liefert im Grunde dasselbe Ergebnis mit unterschiedlicher Syntax. Hier testen wir, ob <code>myVariable</code> NICHT gleich 3 ist. Dies liefert <code>false</code> zurück, weil <code>myVariable</code> IST gleich 3:</p>
        <p><code>let myVariable = 3;<br />myVariable !== 3;</code></p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu erkunden, aber das reicht für jetzt. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Das Mischen von Datentypen kann zu seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Achten Sie darauf, dass Sie Ihre Variablen korrekt ansprechen und die Ergebnisse erhalten, die Sie erwarten. Geben Sie beispielsweise `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das Ergebnis, das Sie erwartet haben? Weil die Anführungszeichen die Zahlen in Strings verwandeln, sodass Sie Strings verkettet haben, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungen

Bedingungen sind Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck wahr oder nicht ist. Eine sehr häufige Form von Bedingungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht zutrifft, wird stattdessen der zweite Codeblock – nach dem Schlüsselwort `else` – ausgeführt.

### Funktionen

[Funktionen](/de/docs/Glossary/Function) sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, der beim Aufruf des Funktionsnamens in Ihrem Code ausgeführt wird. Dies ist eine gute Alternative, um denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Diese Funktionen, `document.querySelector` und `alert`, sind in den Browser eingebaut.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber Klammern folgen – `()` – ist es wahrscheinlich eine Funktion. Funktionen nehmen oft [Argumente](/de/docs/Glossary/Argument) an: Datenteile, die sie für ihre Aufgabe benötigen. Argumente kommen in die Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel lässt die Funktion `alert()` ein Pop-up-Fenster im Browserfenster erscheinen, aber wir müssen ihr einen String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

Sie können auch Ihre eigenen Funktionen definieren. Im nächsten Beispiel erstellen wir eine einfache Funktion, die zwei Zahlen als Argumente nimmt und sie multipliziert:

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung weist den Browser an, die Variable `result` aus der Funktion zurückzugeben, sodass sie verfügbar ist, um sie zu verwenden. Dies ist notwendig, weil Variablen, die in Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies nennt man Variablen[Skopierung](/de/docs/Glossary/Scope). (Lesen Sie mehr über [Variablen-Skopierung](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Code-Strukturen, die auf Aktivitäten im Browser lauschen und als Reaktion darauf Code ausführen. Das offensichtlichste Beispiel ist die Behandlung des [Klickereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit Ihrer Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie Folgendes in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt eine Reihe von Möglichkeiten, einem Element einen Ereignishandler zuzuweisen. Hier wählen wir das {{htmlelement("html")}}-Element aus. Dann rufen wir dessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, geben den Namen des zu hörenden Ereignisses (`'click'`) ein und eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, wird eine _anonyme Funktion_ genannt, weil sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir _Pfeilfunktion_ nennen. Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unsere Beispiel-Website aufpeppen

Mit diesem Überblick über die JavaScript-Grundlagen (oben) fügen wir unserer Beispiel-Website einige neue Funktionen hinzu.

Bevor Sie fortfahren, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei – den Teil, den Sie zuvor während des "Hallo Welt!"-Beispiels hinzugefügt haben – und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, kollidieren.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt lernen Sie, wie Sie JavaScript- und DOM-API-Funktionen verwenden, um die Anzeige eines von zwei Bildern zu ändern. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein Bild aus, das Sie auf Ihrer Beispiel-Website präsentieren möchten. Idealerweise sollte das Bild die gleiche Größe haben wie das zuvor hinzugefügte Bild oder möglichst ähnlich sein.
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

5. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollten Sie beim Klicken auf das Bild sehen, dass es zum anderen wechselt.

Das ist passiert. Sie haben in `myImage` eine Referenz auf Ihr {{htmlelement("img")}}-Element gespeichert. Als nächstes haben Sie seine `onclick`-Ereignishandler-Eigenschaft auf eine Funktion ohne Namen (eine "anonyme" Funktion) gesetzt. Jedes Mal, wenn auf dieses Element geklickt wird:

1. Der Code ruft den Wert des `src`-Attributs des Bildes ab.
2. Der Code verwendet eine Bedingung, um zu überprüfen, ob der `src`-Wert dem Pfad des Originalbildes entspricht:

   1. Wenn ja, ändert der Code den `src`-Wert zum Pfad des zweiten Bildes, sodass das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es sich bereits geändert haben muss), wechselt der `src`-Wert zurück zum Pfad des Originalbildes, in den ursprünglichen Zustand.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes wollen wir den Seitentitel in eine personalisierte Willkommensnachricht ändern, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht wird bestehen bleiben. Sollte der Benutzer die Seite verlassen und später zurückkehren, speichern wir die Nachricht mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option einschließen, um den Benutzer zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` direkt vor dem {{htmlelement("script")}}-Element die folgende Zeile hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` diesen Code am unteren Rand der Datei, exakt so, wie er geschrieben ist. Dies nimmt Referenzen auf die neue Schaltfläche und die Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Diese wird noch nichts tun, aber das ändert sich bald.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfenster anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und diese in einer Variablen zu speichern, nachdem der Benutzer auf _OK_ geklickt hat. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als nächstes ruft der Code eine API `localStorage` auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von localStorage, um ein Datenobjekt namens `'name'` zu erstellen und zu speichern, wobei der Wert auf die `myName`-Variable gesetzt wird, die den Eintrag des Benutzers für den Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie nach der Funktionsdeklaration den folgenden Bedingungsblock hinzu. Wir könnten dies Initialisierungscode nennen, da es die App strukturiert, wenn sie das erste Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`), um zu überprüfen, ob die `name`-Daten existieren. Wenn nicht, führt die `setUserName()`-Funktion aus, um sie zu erstellen. Wenn es existiert (das heißt, der Benutzer hat während eines vorherigen Besuchs einen Benutzernamen festgelegt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf einen String plus den Benutzernamen, wie wir es in `setUserName()` getan haben.

5. Setzen Sie diesen `onclick`-Ereignishandler (unten) auf die Schaltfläche. Wenn darauf geklickt wird, führt `setUserName()` aus. Dies ermöglicht es dem Benutzer, einen anderen Namen einzugeben, indem er die Schaltfläche drückt.

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Benutzernamen einzugeben, versuchen Sie, die _Abbrechen_-Taste zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ lesen. Dies passiert, weil – wenn Sie den Prompt abbrechen – der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird. _Null_ ist ein spezieller Wert in JavaScript, der das Fehlen eines Wertes bezeichnet.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ liest, aus ziemlich offensichtlichen Gründen.

Um diese Probleme zu vermeiden, könnten Sie überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion auf dies:

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

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: eine Überschrift, ein großes zentriertes Logo, Inhalt und eine Schaltfläche](website-screen-scripted.png)

Falls Sie irgendwo feststecken, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben nur einen kleinen Teil von JavaScript behandelt. Wenn Ihnen das Spielen Spaß gemacht hat und Sie weiter machen möchten, nutzen Sie die unten aufgeführten Ressourcen.

## Siehe auch

- [Dynamisches clientseitiges Skripting mit JavaScript](/de/docs/Learn/JavaScript)
  - : Tauchen Sie viel tiefer in JavaScript ein.
- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, begleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine kleine Einmalzahlung verfügbar.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
