---
title: "JavaScript: Hinzufügen von Interaktivität"
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites Interaktivität verleiht. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Tasten gedrückt werden oder bei der Dateneingabe in Formularen, mit dynamischem Styling, mit Animationen usw. Dieser Artikel hilft Ihnen beim Einstieg in JavaScript und vertieft Ihr Verständnis dessen, was möglich ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Grundlagen der JavaScript-Sprache wie Variablen, Operatoren, Bedingungsanweisungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine leistungsstarke Programmiersprache, die einer Website Interaktivität hinzufügen kann.
Sie wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich.
Mit mehr Erfahrung können Sie Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Anwendungen und vieles mehr erstellen!

JavaScript an sich ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Tools auf Basis der Kern-JavaScript-Sprache geschrieben, die eine enorme Menge an Funktionalität mit minimalem Aufwand freischalten. Dazu gehören:

- In Web-Browsern integrierte Browser-APIs ({{Glossary("API", "APIs")}}), die Funktionalitäten wie das dynamische Erstellen von HTML und das Setzen von CSS-Stilen, das Erfassen und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder das Erzeugen von 3D-Grafiken und Audiosamples bieten.
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionalitäten von anderen Inhaltsanbietern wie YouTube oder Facebook in Websites zu integrieren.
- Drittanbieter-Frameworks und -Bibliotheken, die Sie auf HTML anwenden können, um die Arbeit beim Erstellen von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Rahmens dieses Artikels - als eine leichte Einführung in JavaScript - die Details darzustellen, wie sich die Kern-JavaScript-Sprache von den oben genannten Tools unterscheidet. Weitere Informationen finden Sie in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) sowie in anderen Teilen von MDN.

Der folgende Abschnitt stellt einige Aspekte der Kernsprache vor und bietet die Gelegenheit, auch mit einigen Funktionen der Browser-API zu spielen. Viel Spaß!

## Ein "Hello world!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit wachsender JavaScript-Kompetenz werden Ihre Websites eine neue Dimension von Kraft und Kreativität erreichen.

Allerdings ist das Gewöhnen an JavaScript anspruchsvoller als das Gewöhnen an HTML und CSS. Sie sollten klein anfangen und allmählich voranschreiten. Zu Beginn betrachten wir, wie Sie JavaScript zu Ihrer Seite hinzufügen, um ein _Hello world!_-Beispiel zu erstellen. (_Hello world!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie innerhalb Ihres `first-website`-Ordners einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument mit dem Namen `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in eine neue Zeile ein, direkt vor dem schließenden `</body>`-Tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Funktion wie das {{htmlelement("link")}}-Element für CSS. Es überträgt das JavaScript auf die Seite, sodass es Auswirkungen auf das HTML (sowie das CSS und alles andere auf der Seite) haben kann.

4. Fügen Sie diesen Code in Ihre `scripts/main.js`-Datei ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas Folgendes sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum das obige Beispiel das {{htmlelement("script")}}-Element nahe dem Ende der HTML-Datei platziert, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das HTML beeinflussen soll, das noch nicht geladen wurde, kann es zu Problemen kommen. Die Platzierung von JavaScript am Ende einer HTML-Seite ist eine Möglichkeit, dieser Abhängigkeit gerecht zu werden.

### Was ist passiert?

Wir haben JavaScript verwendet, um den Text der Überschrift in _Hello world!_ zu ändern. Das haben wir erreicht, indem wir eine Funktion namens [`querySelector()`](/de/docs/Web/API/Document/querySelector) benutzt haben, um einen Verweis auf Ihre Überschrift zu erhalten und sie in einer Variablen namens `myHeading` zu speichern. Dies ist ähnlich wie das, was wir mit CSS-Selektoren gemacht haben. Wenn Sie etwas mit einem Element machen wollen, müssen Sie es zuerst auswählen.

Danach setzte der Code den Wert der Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) der Variablen `myHeading` (die den Inhalt der Überschrift repräsentiert) auf _Hello world!_.

> [!NOTE]
> Beide Funktionen, die Sie in dieser Übung verwendet haben, sind Teil der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), mit der Dokumente manipuliert werden können.

## Schnelleinführung in die Sprachgrundlagen

Um Ihnen ein besseres Verständnis dafür zu geben, wie JavaScript funktioniert, erklären wir einige der Kernfunktionen der Sprache. Es ist erwähnenswert, dass diese Funktionen in allen Programmiersprachen üblich sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Codieren in anderen Sprachen!

> [!WARNING]
> Versuchen Sie in diesem Artikel, die Beispielcodezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entdecken Sie Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen damit, eine Variable mit dem Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) zu deklarieren, gefolgt vom Namen, den Sie der Variable geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es wird nur benötigt, wenn Sie Anweisungen in einer Zeile trennen müssen. Allerdings glauben einige Leute, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln dafür, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Details finden Sie in [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Namensregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie unsicher sind, können Sie [Ihren Variablennamen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet, `myVariable` ist nicht dasselbe wie `myvariable`. Wenn Sie Probleme in Ihrem Code haben, überprüfen Sie die Großschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

```js
myVariable = "Bob";
```

Sie können beide Operationen auch in derselben Zeile durchführen:

```js
let myVariable = "Bob";
```

Den Wert erhalten Sie, indem Sie den Variablennamen aufrufen:

```js
myVariable;
```

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie ihn später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte mit unterschiedlichen [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) speichern können:

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
        Dies ist eine Folge von Text, bekannt als ein String. Um anzuzeigen, dass der Wert
        ein String ist, schließen Sie ihn in einfache oder doppelte Anführungszeichen ein.
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
        Dies ist ein Wahr/Falsch-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "Array")}}</th>
      <td>
        Dies ist eine Struktur, die es Ihnen ermöglicht, mehrere Werte in einem einzigen
        Verweis zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie sich auf jedes
        Mitglied des Arrays wie folgt:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann
        in einer Variablen gespeichert werden. Behalten Sie dies beim Lernen im Hinterkopf.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle obigen
        Beispiele ebenfalls.
      </td>
    </tr>
  </tbody>
</table>

Warum benötigen wir Variablen? Variablen sind notwendig, um in der Programmierung etwas Interessantes zu machen. Wenn Werte sich nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie beispielsweise eine Begrüßungsnachricht personalisieren oder ein in einer Bildergalerie angezeigtes Bild ändern.

### Kommentare

Kommentare sind Textfragmente, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert als Kommentare markierten Text. Sie können Kommentare in JavaScript schreiben, ebenso wie in CSS:

```js
/*
Everything in between is a comment.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, können Sie ihn hinter zwei Schrägstrichen setzen wie folgt:

```js
// This is a comment
```

### Operatoren

Ein `{{Glossary("operator", "Operator")}}` ist ein mathematisches Symbol, das ein Ergebnis basierend auf zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren sowie einige Beispiele, die Sie in der JavaScript-Konsole ausprobieren können.

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
      <td>Diese tun, was Sie in der Grundmathematik erwarten würden.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // Multiplikation in JS mit einem Sternchen<br />9 / 3;</code
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
        Dies gibt den logischen Gegenteilswert dessen zurück, was es vorausgeht. Es verwandelt
        ein <code>true</code> in ein <code>false</code> usw.. Wenn es zusammen mit dem Gleichheitsoperator verwendet wird, testet der Negationsoperator, ob zwei
        Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht" ist der grundlegende Ausdruck <code>true</code>, aber der
          Vergleich gibt <code>false</code> zurück, weil wir es negieren:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" liefert im Grunde dasselbe Ergebnis mit unterschiedlicher
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich
          3". Dies gibt <code>false</code> zurück, weil <code>myVariable</code> gleich
          3 ist:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Operatoren zu erkunden, aber das ist fürs Erste genug. Eine vollständige Liste finden Sie unter [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators).

> [!NOTE]
> Die Mischung von Datentypen kann zu seltsamen Ergebnissen bei Berechnungen führen. Achten Sie darauf, dass Sie auf Ihre Variablen korrekt verweisen und die erwarteten Ergebnisse erhalten. Geben Sie beispielsweise `'35' + '25'` in Ihre Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings verwandeln, sodass Sie am Ende Strings zusammenfügen, anstatt Zahlen zu addieren. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingungsanweisungen

Bedingungsanweisungen sind Code-Strukturen, die verwendet werden, um zu prüfen, ob ein Ausdruck wahr ist oder nicht. Eine sehr verbreitete Form von Bedingungsanweisungen ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` zurückgibt, wird der erste Block von Code ausgeführt. Wenn der Vergleich nicht zutrifft, wird der zweite Block von Code - nach dem Schlüsselwort `else` - stattdessen ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Code-Block als Funktion zu definieren, die ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code immer wieder zu schreiben. Sie haben bereits einige Verwendungszwecke von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Die Funktionen `document.querySelector()` und `alert()` sind im Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber von Klammern gefolgt wird — `()` — ist es vermutlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}} entgegen: Datenstücke, die sie benötigen, um ihre Aufgabe zu erfüllen. Argumente gehen in die Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel macht die `alert()`-Funktion ein Pop-Up-Fenster im Browserfenster erscheinen, aber wir müssen ihr ein String als Argument geben, um der Funktion mitzuteilen, welche Nachricht angezeigt werden soll.

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung teilt dem Browser mit, die Variable `result` aus der Funktion zu extrahieren, damit sie zur Verwendung verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert sind, nur innerhalb dieser Funktionen verfügbar sind. Dies wird als Variablen-{{Glossary("Scope", "Gültigkeitsbereich")}} bezeichnet. (Lesen Sie mehr über [Variablen-Gültigkeitsbereich](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignishandler. Dies sind Code-Strukturen, die auf Aktivität im Browser lauschen und Code als Reaktion darauf ausführen. Das offensichtlichste Beispiel ist das Behandeln des [Klick-Ereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie mit der Maus auf etwas klicken. Um dies zu demonstrieren, geben Sie das Folgende in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

Es gibt verschiedene Möglichkeiten, einem Element einen Ereignishandler zuzuordnen.
Hier wählen wir das {{htmlelement("html")}}-Element aus. Wir rufen dann seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, übergeben den Namen des zu überwachenden Ereignisses (`'click'`) und eine Funktion, die ausgeführt wird, wenn das Ereignis auftritt.

Die Funktion, die wir gerade an `addEventListener()` übergeben haben, nennt man eine _anonyme Funktion_, weil sie keinen Namen hat. Es gibt eine alternative Schreibweise für anonyme Funktionen, die wir _Pfeilfunktion_ nennen.
Eine Pfeilfunktion verwendet `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Unsere Beispiel-Website erweitern

Mit unserem Überblick über die JavaScript-Grundlagen abgeschlossen, fügen wir unserer Beispielseite einige neue Funktionen hinzu.

Bevor Sie fortfahren, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei — den Teil, den Sie zuvor während des "Hello world!"-Beispiels hinzugefügt haben — und speichern Sie die leere Datei. Andernfalls wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

### Hinzufügen eines Bildwechslers

In diesem Abschnitt lernen Sie, wie Sie JavaScript- und DOM-API-Funktionen verwenden, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das auf Ihrer Beispiel-Website gezeigt werden soll. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild haben oder so nah wie möglich.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code in Ihre `main.js`-Datei ein und stellen Sie sicher, dass Sie `firefox2.png` und beide Instanzen von `firefox-icon.png` durch Ihre zweiten und ersten Bildnamen ersetzen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollte beim Klicken auf das Bild ein Bildwechsel stattfinden.

Im obigen Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in `myImage` gespeichert. Als Nächstes haben Sie ihm eine anonyme `click`-Ereignishandlerfunktion zugewiesen. Jedes Mal, wenn auf dieses Element geklickt wird, führt die Funktion Folgendes aus:

1. Ruft den Wert des `src`-Attributs des Bildes ab.
2. Verwendet eine Bedingung, um zu prüfen, ob der `src`-Wert gleich dem Pfad des ursprünglichen Bildes ist:

   1. Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes und zwingt so dazu, dass das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (das heißt, es muss sich bereits geändert haben), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitentitel in eine personalisierte Willkommensnachricht, wenn der Benutzer die Website zum ersten Mal besucht. Diese Willkommensnachricht bleibt bestehen. Sollte der Nutzer die Website verlassen und später wiederkehren, speichern wir die Nachricht mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option hinzufügen, um den Benutzernamen zu ändern, und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am unteren Ende der Datei, genau so, wie er geschrieben ist. Dadurch werden Referenzen zum neuen Button und zur Überschrift erstellt, die jeweils in Variablen gespeichert werden:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Dies wird noch nichts bewirken; wir werden die Funktion später im Code aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfeld einblendet, ähnlich wie `alert()`. Diese `prompt()`-Funktion entfaltet mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und diese in einer Variablen zu speichern, nachdem der Benutzer auf _OK_ klickt. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als Nächstes ruft der Code die `localStorage`-API auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von localStorage, um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, wobei es auf die `myName`-Variable gesetzt wird, die den Benutzereintrag für den Namen enthält. Schließlich setzen wir die `textContent` der Überschrift auf einen String plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie diesen Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies als Initialisierungscode bezeichnen, da es die App strukturiert, wenn sie zum ersten Mal geladen wird.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Diese erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch `!`), um zu prüfen, ob das `name`-Datenobjekt bereits im localStorage gespeichert ist. Falls nicht, wird die `setUserName()`-Funktion ausgeführt, um es zu erstellen. Falls es existiert (das heißt, der Benutzer hat bei einem früheren Besuch einen Benutzernamen gesetzt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen die `textContent` der Überschrift auf einen String plus den Benutzernamen, wie wir es in `setUserName()` gemacht haben.

5. Fügen Sie dem Button eine `click`-Ereignishandlerfunktion hinzu, wie unten gezeigt. Wenn darauf geklickt wird, wird `setUserName()` ausgeführt. Dies ermöglicht dem Nutzer, durch Drücken des Buttons einen anderen Namen einzugeben.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und die Dialogbox erhalten, die Sie zur Eingabe Ihres Benutzernamens auffordert, versuchen Sie, die _Abbrechen_-Schaltfläche zu drücken. Sie sollten einen Titel erhalten, der _Mozilla is cool, null_ lautet. Dies geschieht, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. Null ist ein spezieller Wert in JavaScript, der auf das Fehlen eines Werts verweist.

Versuchen Sie auch, _OK_ zu drücken, ohne einen Namen einzugeben. Sie sollten einen Titel erhalten, der _Mozilla is cool,_ lautet, weil Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, können Sie prüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion wie folgt:

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

In menschlicher Sprache bedeutet das: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` wieder von Anfang an aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht wahr ist), dann speichern Sie den Wert im localStorage und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende mit einer Seite dastehen, die ungefähr so aussieht wie das Bild unten. Sie können sich auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach Erstellung der Elemente: ein Header, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie steckenbleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Nachdem Sie Ihre Website jetzt fertiggestellt haben, besteht der nächste Schritt darin, sie online zu bringen, damit andere sie ansehen können. Wir zeigen Ihnen, wie Sie dies in unserem nächsten Artikel tun — [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

## Siehe auch

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)
  - : Wir haben in diesem Artikel nur die Oberfläche von JavaScript angekratzt. Später auf unserem Lernpfad finden Sie viel mehr JavaScript, beginnend mit unserem Modul _Dynamisches Skripting mit JavaScript_.
- [Lernen Sie JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der komplette Kurs ist gegen eine einmalige geringe Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
