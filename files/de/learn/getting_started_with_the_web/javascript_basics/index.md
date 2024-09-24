---
title: JavaScript-Grundlagen
slug: Learn/Getting_started_with_the_web/JavaScript_basics
l10n:
  sourceCommit: f4790411c4fc4c3ce5e6c0cff2ddc7843b04736a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Ihrer Website hinzufügt. Dies geschieht in Spielen, im Verhalten von Reaktionen, wenn Knöpfe gedrückt werden oder bei der Dateneingabe in Formulare; mit dynamischen Stilen; mit Animationen usw. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen und Ihr Verständnis dessen, was möglich ist, zu vertiefen.

## Was ist JavaScript?

{{Glossary("JavaScript")}} ist eine leistungsstarke Programmiersprache, die Interaktivität zu einer Website hinzufügen kann. Es wurde von Brendan Eich erfunden.

JavaScript ist vielseitig und anfängerfreundlich. Mit mehr Erfahrung werden Sie in der Lage sein, Spiele, animierte 2D- und 3D-Grafiken, umfassende datenbankgestützte Anwendungen und vieles mehr zu erstellen!

JavaScript selbst ist relativ kompakt, aber sehr flexibel. Entwickler haben eine Vielzahl von Werkzeugen auf der Grundlage der Kern-JavaScript-Sprache geschrieben, die eine riesige Menge an Funktionalitäten mit minimalem Aufwand freischalten. Dazu gehören:

- Browser Application Programming Interfaces ({{Glossary("API","APIs")}}), die in Webbrowser integriert sind und Funktionen wie dynamisches Erstellen von HTML und Setzen von CSS-Stilen bereitstellen; Sammeln und Bearbeiten eines Videostreams von der Webcam eines Benutzers oder Erzeugen von 3D-Grafiken und Audiobeispielen.
- Von Drittanbietern bereitgestellte APIs, die es Entwicklern ermöglichen, Funktionen von anderen Inhaltsanbietern wie [Disqus](https://disqus.com/) oder Facebook in Websites zu integrieren.
- Von Drittanbietern bereitgestellte Frameworks und Bibliotheken, die Sie auf HTML anwenden können, um den Bau von Websites und Anwendungen zu beschleunigen.

Es liegt außerhalb des Umfangs dieses Artikels—als leichte Einführung in JavaScript—die Details darzustellen, wie sich die Kern-JavaScript-Sprache von den oben aufgelisteten Tools unterscheidet. Weitere Informationen finden Sie im [JavaScript-Lernbereich](/de/docs/Learn/JavaScript) von MDN sowie in anderen Teilen von MDN.

Im folgenden Abschnitt werden einige Aspekte der Kernsprache eingeführt, und es wird die Möglichkeit geboten, mit einigen Browser-API-Funktionen zu experimentieren. Viel Spaß!

## Ein "Hallo Welt!"-Beispiel

JavaScript ist eine der beliebtesten modernen Webtechnologien! Mit wachsendem Können in JavaScript werden Ihre Websites eine neue Dimension von Leistung und Kreativität erreichen.

Es ist jedoch schwieriger, mit JavaScript vertraut zu werden als mit HTML und CSS. Sie sollten klein anfangen und schrittweise vorankommen. Zu Beginn wollen wir untersuchen, wie Sie JavaScript zu Ihrer Seite hinzufügen können, um ein _Hallo Welt!_-Beispiel zu erstellen. (_Hallo Welt!_ ist [der Standard für einführende Programmierbeispiele](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Wenn Sie unserem Kurs bisher nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Gehen Sie zu Ihrer Testseite und erstellen Sie einen neuen Ordner namens `scripts`. Erstellen Sie in diesem Ordner ein neues Textdokument namens `main.js` und speichern Sie es.
2. Fügen Sie in Ihrer `index.html`-Datei diesen Code in einer neuen Zeile direkt vor dem schließenden `</body>`-Tag ein:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. Dies hat dieselbe Funktion wie das {{htmlelement("link")}}-Element für CSS. Es wendet das JavaScript auf die Seite an, so dass es einen Effekt auf das HTML (zusammen mit dem CSS und allem anderen auf der Seite) haben kann.
4. Fügen Sie diesen Code in die Datei `scripts/main.js` ein:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind. Laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas wie dieses sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

> [!NOTE]
> Der Grund, warum die Anweisungen (oben) das {{htmlelement("script")}}-Element nahe dem Ende der HTML-Datei platzieren, ist, dass **der Browser den Code in der Reihenfolge liest, in der er in der Datei erscheint**.
>
> Wenn das JavaScript zuerst geladen wird und es das noch nicht geladene HTML beeinflussen soll, kann es zu Problemen kommen. Das Platzieren von JavaScript nahe dem Ende einer HTML-Seite ist eine Möglichkeit, diese Abhängigkeit zu berücksichtigen. Um mehr über alternative Ansätze zu erfahren, schauen Sie sich [Lade-Strategien für Skripte](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies) an.

### Was ist passiert?

Der Überschriftstext wurde mit JavaScript in _Hello world!_ geändert. Sie haben dies getan, indem Sie einen Aufruf der Funktion {{domxref("Document.querySelector", "querySelector()")}} verwendet haben, um eine Referenz zu Ihrer Überschrift zu erhalten, und diese dann in einer Variablen namens `myHeading` gespeichert haben. Dies ist ähnlich zu dem, was wir mit CSS-Selektoren getan haben. Wenn Sie etwas mit einem Element machen wollen, müssen Sie es zuerst auswählen.

Danach hat der Code den Wert der `textContent`-Eigenschaft der `myHeading`-Variable eingestellt (die den Inhalt der Überschrift darstellt) zu _Hello world!_.

> [!NOTE]
> Beide der in dieser Übung verwendeten Funktionen sind Teile der [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model), die die Fähigkeit hat, Dokumente zu manipulieren.

## Crashkurs zu den Sprachgrundlagen

Um Ihnen ein besseres Verständnis davon zu geben, wie JavaScript funktioniert, lassen Sie uns einige der Kernfunktionen der Sprache erklären. Es ist erwähnenswert, dass diese Funktionen allen Programmiersprachen gemeinsam sind. Wenn Sie diese Grundlagen beherrschen, haben Sie einen Vorsprung beim Programmieren in anderen Sprachen!

> [!WARNING]
> Versuchen Sie in diesem Artikel, die Beispiel-Codezeilen in Ihre JavaScript-Konsole einzugeben, um zu sehen, was passiert. Weitere Details zu JavaScript-Konsolen finden Sie unter [Entwicklungstools des Browsers entdecken](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variablen")}} sind Container, die Werte speichern. Sie beginnen mit der Deklaration einer Variablen mit dem [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselwort, gefolgt von dem Namen, den Sie der Variablen geben:

```js
let myVariable;
```

Ein Semikolon am Ende einer Zeile zeigt an, wo eine Anweisung endet. Es ist nur erforderlich, wenn Sie Anweisungen in einer einzigen Zeile trennen müssen. Dennoch glauben manche Leute, dass es eine gute Praxis ist, Semikolons am Ende jeder Anweisung zu haben. Es gibt andere Regeln dafür, wann Sie Semikolons verwenden sollten und wann nicht. Weitere Details finden Sie unter [Ihr Leitfaden zu Semikolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Sie können einer Variablen fast jeden Namen geben, aber es gibt einige Einschränkungen. (Siehe [diesen Abschnitt über Benennungsregeln](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Wenn Sie sich unsicher sind, können Sie [den Namen Ihrer Variablen überprüfen](https://mothereff.in/js-variables), um zu sehen, ob er gültig ist.

JavaScript ist case-sensitiv. Das bedeutet, `myVariable` ist nicht dasselbe wie `myvariable`. Sollten Sie Probleme in Ihrem Code haben, überprüfen Sie die Groß- und Kleinschreibung!

Nachdem Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen:

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

Nachdem Sie einer Variablen einen Wert zugewiesen haben, können Sie sie später im Code ändern:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Beachten Sie, dass Variablen Werte haben können, die verschiedene [Datentypen](/de/docs/Web/JavaScript/Data_structures) aufweisen:

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
      <th scope="row">{{Glossary("String")}}</th>
      <td>
        Dies ist eine Textfolge, die als String bekannt ist. Um anzuzeigen, dass
        der Wert ein String ist, schließen Sie ihn in einfache oder doppelte
        Anführungszeichen ein.
      </td>
      <td><code>let myVariable = 'Bob';</code> oder <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number")}}</th>
      <td>Dies ist eine Zahl. Zahlen haben keine Anführungszeichen um sich herum.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean")}}</th>
      <td>
        Dies ist ein True/False-Wert. Die Wörter <code>true</code> und
        <code>false</code> sind spezielle Schlüsselwörter, die keine
        Anführungszeichen benötigen.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array")}}</th>
      <td>
        Dies ist eine Struktur, die es ermöglicht, mehrere Werte in einer
        einzelnen Referenz zu speichern.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Beziehen Sie
        sich auf jedes Mitglied des Arrays so:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, usw.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object")}}</th>
      <td>
        Dies kann alles sein. Alles in JavaScript ist ein Objekt und kann in
        einer Variablen gespeichert werden. Behalten Sie dies im Gedächtnis,
        während Sie lernen.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Alle
        obigen Beispiele ebenfalls.
      </td>
    </tr>
  </tbody>
</table>

Warum brauchen wir also Variablen? Variablen sind notwendig, um etwas Interessantes in der Programmierung zu tun. Wenn sich Werte nicht ändern könnten, könnten Sie nichts Dynamisches tun, wie zum Beispiel eine Begrüßungsnachricht personalisieren oder ein Bild in einer Galerie ändern.

### Kommentare

Kommentare sind Textausschnitte, die zusammen mit dem Code hinzugefügt werden können. Der Browser ignoriert Text, der als Kommentar markiert ist. Sie können Kommentare in JavaScript genauso schreiben wie in CSS:

```js
/*
Alles, was dazwischen steht, ist ein Kommentar.
*/
```

Wenn Ihr Kommentar keine Zeilenumbrüche enthält, ist es eine Option, ihn hinter zwei Schrägstriche zu setzen, wie hier:

```js
// Dies ist ein Kommentar
```

### Operatoren

Ein `{{Glossary("operator")}}` ist ein mathematisches Zeichen, das ein Ergebnis auf der Grundlage von zwei Werten (oder Variablen) erzeugt. In der folgenden Tabelle können Sie einige der einfachsten Operatoren sehen, zusammen mit einigen Beispielen zum Ausprobieren in der JavaScript-Konsole.

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
      <td>Diese tun, was Sie in der Grundmathematik erwarten würden.</td>
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
        Dies führt einen Test durch, um zu sehen, ob zwei Werte gleich und vom selben Datentyp sind. Es liefert ein
        <code>true</code>/<code>false</code> (Boolean)-Ergebnis.
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
        vorgelagert. Es verwandelt ein <code>true</code> in ein <code>false</code> usw. Wenn es
        zusammen mit dem Gleichheitsoperator verwendet wird, testet der
        Verneinungsoperator, ob zwei Werte <em>nicht</em> gleich sind.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Für "Nicht", der grundlegende Ausdruck ist <code>true</code>, aber der
          Vergleich liefert <code>false</code>, weil wir ihn verneinen:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Ungleich" gibt im Grunde dasselbe Ergebnis mit unterschiedlicher
          Syntax. Hier testen wir "ist <code>myVariable</code> NICHT gleich
          3". Dies gibt <code>false</code> zurück, da <code>myVariable</code>
          IST gleich 3:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Operatoren zu entdecken, aber das reicht fürs Erste aus. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators) für eine vollständige Liste.

> [!NOTE]
> Die Mischung von Datentypen kann zu einigen seltsamen Ergebnissen führen, wenn Berechnungen durchgeführt werden. Seien Sie vorsichtig, dass Sie sich richtig auf Ihre Variablen beziehen und die erwarteten Ergebnisse erhalten. Zum Beispiel geben Sie `'35' + '25'` in Ihrer Konsole ein. Warum erhalten Sie nicht das erwartete Ergebnis? Weil die Anführungszeichen die Zahlen in Strings umwandeln, sodass Sie Strings verkettet statt Zahlen addiert haben. Wenn Sie `35 + 25` eingeben, erhalten Sie die Summe der beiden Zahlen.

### Bedingte Ausdrücke

Bedingte Ausdrücke sind Code-Strukturen, die verwendet werden, um zu prüfen, ob ein Ausdruck wahr ist oder nicht. Eine sehr häufige Form von bedingten Ausdrücken ist die `if...else`-Anweisung. Zum Beispiel:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, ich liebe Schokoladeneis!");
} else {
  alert("Awwww, aber Schokolade ist mein Favorit…");
}
```

Der Ausdruck innerhalb der `if ()` ist der Test. Dieser verwendet den strikten Gleichheitsoperator (wie oben beschrieben), um die Variable `iceCream` mit dem String `chocolate` zu vergleichen, um zu sehen, ob die beiden gleich sind. Wenn dieser Vergleich `true` ergibt, wird der erste Codeblock ausgeführt. Wenn der Vergleich nicht wahr ist, wird stattdessen der zweite Codeblock—nach der `else`-Anweisung—ausgeführt.

### Funktionen

{{Glossary("Function", "Funktionen")}} sind eine Möglichkeit, Funktionalität zu verpacken, die Sie wiederverwenden möchten. Es ist möglich, einen Codekörper als Funktion zu definieren, der ausgeführt wird, wenn Sie den Funktionsnamen in Ihrem Code aufrufen. Dies ist eine gute Alternative dazu, denselben Code wiederholt zu schreiben. Sie haben bereits einige Verwendungen von Funktionen gesehen. Zum Beispiel:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

Diese Funktionen, `document.querySelector` und `alert`, sind in den Browser integriert.

Wenn Sie etwas sehen, das wie ein Variablenname aussieht, aber es ist gefolgt von Klammern— `()` —ist es wahrscheinlich eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "Argumente")}}: Datenstücke, die sie zur Erledigung ihrer Aufgabe benötigen. Argumente gehen in die Klammern, getrennt durch Kommas, wenn es mehr als ein Argument gibt.

Zum Beispiel macht die Funktion `alert()` ein Popup-Fenster in Ihrem Browserfenster sichtbar, aber wir müssen ihr einen String als Argument geben, um der Funktion zu sagen, welche Nachricht angezeigt werden soll.

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
> Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung teilt dem Browser mit, die Variable `result` aus der Funktion zurückzugeben, damit sie zur Verwendung verfügbar ist. Dies ist notwendig, weil Variablen, die innerhalb von Funktionen definiert werden, nur innerhalb dieser Funktionen verfügbar sind. Dies nennt man Variablen-{{Glossary("Scope", "Skopierung")}}. (Lesen Sie mehr über [Variablen-Skopierung](/de/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Ereignisse

Echte Interaktivität auf einer Website erfordert Ereignis-Handler. Dies sind Code-Strukturen, die auf Aktivität im Browser achten und Code als Antwort ausführen. Das offensichtlichste Beispiel ist das Behandeln des [Klick-Ereignisses](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn Sie auf etwas mit Ihrer Maus klicken. Um dies zu demonstrieren, geben Sie folgendes in Ihre Konsole ein und klicken Sie dann auf die aktuelle Webseite:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Autsch! Hör auf, mich zu pieksen!");
});
```

Es gibt mehrere Möglichkeiten, einem Element einen Ereignis-Handler zuzuweisen. Hier wählen wir das {{htmlelement("html")}}-Element aus. Dann rufen wir seine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion auf, übergeben den Namen des Ereignisses, auf das wir hören wollen (`'click'`), und eine Funktion, die ausgeführt wird, wenn das Ereignis auftritt.

Die Funktion, die wir soeben `addEventListener()` übergeben haben, nennt man eine _anonyme Funktion_, da sie keinen Namen hat. Es gibt eine alternative Möglichkeit, anonyme Funktionen zu schreiben, die wir als _Pfeilfunktion_ bezeichnen. Eine Pfeilfunktion nutzt `() =>` anstelle von `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Autsch! Hör auf, mich zu pieksen!");
});
```

## Unser Beispiel-Website Supercharging

Mit diesem Überblick über JavaScript-Grundlagen (siehe oben) können wir nun einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

Bevor wir weitermachen, löschen Sie den aktuellen Inhalt Ihrer `main.js`-Datei—den Teil, den Sie zuvor während des "Hello world!"-Beispiels hinzugefügt haben—und speichern Sie die leere Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen möchten, kollidieren.

### Hinzufügen eines Bildwechsels

In diesem Abschnitt lernen Sie, wie Sie mit JavaScript und DOM-API-Funktionen die Anzeige von einem von zwei Bildern wechseln können. Diese Änderung erfolgt, sobald ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein Bild aus, das Sie auf Ihrer Beispiel-Website präsentieren möchten. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild haben oder zumindest so nah wie möglich.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Benennen Sie das Bild um in _firefox2.png_.
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

5. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie jetzt auf das Bild klicken, sollte es sich in das andere ändern.

Das ist passiert. Sie haben eine Referenz zu Ihrem {{htmlelement("img")}}-Element in `myImage` gespeichert. Als Nächstes haben Sie die `onclick`-Ereignishandler-Eigenschaft auf eine Funktion ohne Namen (eine "anonyme" Funktion) gesetzt. So passiert jedes Mal, wenn dieses Element angeklickt wird:

1. Der Code ruft den Wert des `src`-Attributs des Bildes ab.
2. Der Code verwendet eine bedingte Anweisung, um zu prüfen, ob der `src`-Wert mit dem Pfad des Originalbildes übereinstimmt:

   1. Wenn er es tut, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, was dazu zwingt, dass das andere Bild im {{htmlelement("img")}}-Element geladen wird.
   2. Wenn nicht (was bedeutet, dass es bereits geändert wurde), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad, in den ursprünglichen Zustand.

### Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir den Seitentitel in eine personalisierte Willkommensnachricht, wenn der Benutzer die Website zuerst besucht. Diese Willkommensnachricht wird fortbestehen. Wenn der Benutzer die Website verlässt und später wiederkehrt, speichern wir die Nachricht mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API). Wir werden auch eine Option einfügen, um den Benutzer zu ändern und damit die Willkommensnachricht.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem {{htmlelement("script")}}-Element hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau wie er geschrieben ist. Dies nimmt Referenzen zu dem neuen Button und der Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzustellen. Dies wird noch nichts bewirken, aber das wird sich bald ändern.

   ```js
   function setUserName() {
     const myName = prompt("Bitte geben Sie Ihren Namen ein.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla ist cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die ein Dialogfenster anzeigt, ähnlich wie `alert()`. Diese `prompt()`-Funktion tut mehr als `alert()`, indem sie den Benutzer auffordert, Daten einzugeben und sie in einer Variablen zu speichern, nachdem der Benutzer auf _OK_ klickt. In diesem Fall bitten wir den Benutzer, einen Namen einzugeben. Als Nächstes ruft der Code eine API `localStorage` auf, die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die `setItem()`-Funktion von localStorage, um einen Datenpunkt namens `'name'` zu erstellen und zu speichern, dessen Wert wir auf die `myName`-Variable setzen, die den vom Benutzer eingegebenen Namen enthält. Schließlich setzen wir den `textContent` der Überschrift auf einen String plus den neu gespeicherten Namen des Benutzers.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Wir könnten dies als Initialisierungscode bezeichnen, der die App beim ersten Laden strukturiert.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla ist cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Verneinungsoperator (logisches NICHT, dargestellt durch `!`), um zu prüfen, ob die `name`-Daten vorhanden sind. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um sie zu erstellen. Wenn sie vorhanden sind (d.h., der Benutzer hat bei einem vorherigen Besuch einen Benutzernamen festgelegt), rufen wir den gespeicherten Namen mit `getItem()` ab und setzen den `textContent` der Überschrift auf einen String plus den Benutzernamen, wie wir es innerhalb von `setUserName()` getan haben.

5. Setzen Sie diesen `onclick`-Ereignishandler (unten) auf den Button. Wenn man darauf klickt, wird `setUserName()` ausgeführt. Dadurch kann der Benutzer einen anderen Namen eingeben, indem er den Button drückt.

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie nach Ihrem Benutzernamen fragt, versuchen Sie, den _Abbrechen_-Button zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ liest. Dies passiert, weil—wenn Sie das Dialogfeld abbrechen—der Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird. _Null_ ist ein spezieller Wert in JavaScript, der das Fehlen eines Wertes repräsentiert.

Versuchen Sie auch, _OK_ zu drücken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ liest, aus ziemlich offensichtlichen Gründen.

Um diese Probleme zu vermeiden, könnten Sie prüfen, ob der Benutzer keinen Leer-Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion zu diesem:

```js
function setUserName() {
  const myName = prompt("Bitte geben Sie Ihren Namen ein.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla ist cool, ${myName}`;
  }
}
```

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn er einen Wert hat (wenn die obige Anweisung nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die ungefähr wie das untenstehende Bild aussieht. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endansicht der HTML-Seite nach dem Erstellen von Elementen: ein Kopfbereich, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie steckenbleiben, können Sie Ihre Arbeit mit unserem [vollständigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben gerade an der Oberfläche von JavaScript gekratzt. Wenn Sie Spaß beim Spielen hatten und weitergehen möchten, nutzen Sie die unten aufgelisteten Ressourcen.

## Siehe auch

- [Dynamische clientseitige Skripterstellung mit JavaScript](/de/docs/Learn/JavaScript)
  - : Tauchen Sie viel tiefer in JavaScript ein.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für aufstrebende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, angeleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine geringe einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
