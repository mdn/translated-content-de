---
title: Speichern der benötigten Informationen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nach dem Lesen der letzten Artikel sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es neben anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer höheren Perspektive aussehen. In diesem Artikel werden wir uns mit den Grundlagen befassen, indem wir uns anschauen, wie man mit den grundlegenden Bausteinen von JavaScript arbeitet — den Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Variablen sind und warum sie so wichtig sind.</li>
          <li>Deklaration von Variablen mit <code>let</code>, Initialisierung mit Werten und Zuweisung neuer Werte.</li>
          <li>Erstellung von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann jede verwendet wird.</li>
          <li>Best Practices für die Benennung von Variablen.</li>
          <li>Die verschiedenen Typen von Werten, die in Variablen gespeichert werden können — Strings, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

In diesem Artikel werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu überprüfen. Wenn Sie einen Desktop-Browser verwenden, ist die beste Stelle, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um mehr darüber zu erfahren, wie Sie auf dieses Tool zugreifen).

## Was ist eine Variable?

Eine Variable ist ein Behälter für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder ein Zeichenfolge, die wir als Teil eines Satzes verwenden könnten.

### Beispiel für eine Variable

Schauen wir uns ein Beispiel an:

```html
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>
```

```js
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
```

{{ EmbedLiveSample('Variable_example', '100%', 120) }}

In diesem Beispiel wird beim Drücken des Knopfes ein Code ausgeführt. Erstens ändert es den Text auf dem Knopf selbst. Zweitens zeigt es eine Nachricht an, wie oft der Knopf gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer den Knopf drückt, erhöht sich die Zahl in der Variablen um eins.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, überlegen wir, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um die Zählung zu speichern. Es würde etwa so aussehen:

```html example-bad
<button id="button_B">Press me</button>
<h3 id="heading_B"></h3>
```

```js example-bad
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  buttonB.textContent = "Try again!";
  headingB.textContent = "1 click so far";
};
```

{{ EmbedLiveSample('Without_a_variable', '100%', 120) }}

Sie verstehen den verwendeten Syntax möglicherweise noch nicht vollständig (noch nicht!), aber Sie sollten die Idee begreifen. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft der Knopf gedrückt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn und während Sie mehr über JavaScript lernen, werden sie Ihnen zur zweiten Natur werden.

Eine besondere Sache an Variablen ist, dass sie nahezu alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber lernen, während Sie weitergehen.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist eine wichtige Unterscheidung. Variablen sind nicht die Werte selbst; sie sind Behälter für Werte. Sie können sie sich wie kleine Pappkartons vorstellen, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei 3D-Pappkartons, die Beispiele für JavaScript-Variablen demonstrieren. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Deklaration einer Variablen

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies die Deklaration der Variablen. Dazu tippen Sie das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit eigenen Namen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte für einzelne Zeilen korrekt funktionieren, aber wahrscheinlich nicht, wenn Sie mehrere Zeilen Code zusammen schreiben. Versuchen Sie, sich anzugewöhnen, es einzufügen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung existieren, indem Sie nur den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Derzeit haben sie keinen Wert; sie sind leere Behälter. Wenn Sie die Variablennamen eingeben, sollte ein Wert von `undefined` zurückgegeben werden. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — sie sind sehr unterschiedliche Dinge. In der zuvor gezeigten Analogie mit Kartons würde das Nicht-Existieren bedeuten, dass es keinen Karton (Variable) gibt, um einen Wert hineinzulegen. Kein definierter Wert würde bedeuten, dass es einen Karton gibt, aber er hat keinen Wert darin.

## Initialisierung einer Variablen

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Sie tun dies, indem Sie den Namen der Variablen eingeben, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie nun, in die Konsole zurückzugehen und diese Zeilen einzugeben. Sie sollten den Wert sehen, den Sie der Variablen zugewiesen haben, der in der Konsole bestätigt wird. Sie können erneut auf Ihre Variablenwerte zugreifen, indem Sie ihren Namen in die Konsole eingeben — versuchen Sie dies erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen auf zwei separaten Zeilen auszuführen.

## Ein Hinweis zu var

Wahrscheinlich werden Sie auch eine andere Möglichkeit sehen, Variablen zu deklarieren, bei der das Schlüsselwort `var` verwendet wird:

```js
var myName;
var myAge;
```

Als JavaScript zum ersten Mal erstellt wurde, war dies der einzige Weg, um Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde `let` in modernen JavaScript-Versionen eingeführt, ein neues Schlüsselwort zum Erstellen von Variablen, das etwas anders arbeitet als `var` und dabei dessen Probleme behebt.

Einige einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden anfangen, sie zu entdecken, während Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt darüber lesen möchten, können Sie gerne unsere [let Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) besuchen).

Zunächst einmal, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` nach ihrer Initialisierung deklarieren und es wird immer noch funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn einzelne Zeilen in eine JavaScript-Konsole eingegeben werden, sondern nur beim Ausführen mehrerer JavaScript-Zeilen in einem Webdokument.

Dies funktioniert wegen des **Hoisting** — lesen Sie [var Hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` im obigen Beispiel in `let` ändern, würde es mit einem Fehler fehlschlagen. Das ist eine gute Sache — das Deklarieren einer Variablen nach ihrer Initialisierung führt zu verwirrendem, schwer nachvollziehbarem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Folgendes würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber folgendes würde beim zweiten Versuch einen Fehler auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Stattdessen müssten Sie dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch dies ist eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen erneut zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir, in Ihrem Code `let` anstelle von `var` zu verwenden. Es sei denn, Sie schreiben ausdrücklich Unterstützung für alte Browser, es gibt keinen Grund mehr, `var` zu verwenden, da alle modernen Browser seit 2015 `let` unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie es, jeden der hier aufgeführten Codeblöcke als Ganzes zu kopieren und einzufügen. Es gibt [ein Feature in der Konsole von Chrome](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), wo Variablenneuerklärungen mit `let` und `const` erlaubt sind:
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // Als ein Input: SyntaxError: Identifier 'myName' has already been declared
>
> > let myName = "Chris";
> > let myName = "Bob";
> // Als zwei Inputs: beide erfolgreich
> ```

## Aktualisierung einer Variablen

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert zuweisen. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Exkurs zu Variablennamenregeln

Sie können eine Variable fast beliebig benennen, aber es gibt Einschränkungen. Generell sollten Sie sich darauf beschränken, lateinische Zeichen (0-9, a-z, A-Z) und den Unterstrich zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen können oder für ein internationales Publikum schwer verständlich sein könnten.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge zu bedeuten und könnte verwirrend werden.
- Verwenden Sie keine Zahlen am Anfang von Variablennamen. Dies ist nicht erlaubt und führt zu einem Fehler.
- Eine sichere Konvention, die Sie befolgen können, ist das {{Glossary("camel_case", "kleine Kamelhöckerformat")}}, bei dem Sie mehrere Wörter zusammenfügen und dabei das ganze erste Wort in Kleinbuchstaben schreiben und dann nachfolgende Wörter groß schreiben. Wir haben dies bisher in unserem Artikel für die Variablennamen verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten, die sie enthalten, beschreiben. Verwenden Sie keine Einzelbuchstaben/-zahlen oder lange Phrasen.
- Variablen sind case-sensitiv — `myage` ist also eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Also, Sie können Wörter wie `var`, `function`, `let` und `for` nicht als Variablennamen verwenden. Browser erkennen diese als verschiedene Codeelemente und Sie werden Fehler erhalten.

> [!NOTE]
> Sie können eine ziemlich vollständige Liste von reservierten Schlüsselwörtern finden, die Sie vermeiden sollten, unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

Gute Namensbeispiele:

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

Schlechte Namensbeispiele:

```plain example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongvariablenameman
```

Versuchen Sie nun, ein paar weitere Variablen zu erstellen, und beachten Sie dabei die obigen Hinweise.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben, und in zukünftigen Artikeln werden Sie mehr darüber lernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder Ganzzahlen wie 30 (auch als ganze Zahlen bezeichnet) oder Dezimalzahlen wie 2.456 (auch als Fließkommazahlen bezeichnet). Sie müssen in JavaScript keine Variablentypen deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert geben, schließen Sie keine Anführungszeichen ein:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen String-Wert geben, müssen Sie ihn in Einzel- oder Doppel-Anführungszeichen einschließen; andernfalls versucht JavaScript, ihn als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind Wahr/Falsch-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der der Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre:

```js
let iAmAlive = true;
```

Realitynmäßig würde es jedoch eher so aussehen:

```js
let test = 6 < 3;
```

In diesem Fall wird der "kleiner als"-Operator (`<`) verwendet, um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt er `false` zurück, weil 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommata getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert zugreifen, indem Sie ihre Position im Array verwenden. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des zurückgegebenen Wertes entspricht. Möglicherweise haben Sie bemerkt, dass Arrays in JavaScript nullbasiert sind: das erste Element befindet sich an Index 0.

### Objekte

In der Programmierung ist ein Object eine Struktur von Code, die ein Objekt aus dem echten Leben modelliert. Sie können ein Object haben, das eine Box darstellt und Informationen über seine Breite, Länge und Höhe enthält, oder Sie könnten ein Object haben, das eine Person darstellt und Daten über deren Namen, Größe, Gewicht, gesprochene Sprache, Begrüßung und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Strings, Arrays, usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen Wert in Anführungszeichen geben, behandelt der Browser die Variable als String:

```js
let myString = "Hello";
```

Selbst wenn der in Anführungszeichen eingeschlossene Wert nur Ziffern sind, ist es immer noch ein String — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die obigen vier Zeilen nacheinander in Ihre Konsole einzugeben, und sehen Sie sich die Ergebnisse an. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variablen zurück, die Sie danach eingeben. Beim ersten Aufruf sollte er `string` zurückgeben, da die Variable `myNumber` an diesem Punkt einen String, `'500'`, enthält. Sehen Sie nach, was er beim zweiten Aufruf zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind ähnlich wie Variablen, außer dass:

- Sie sie initialisieren müssen, wenn Sie sie deklarieren.
- Sie ihnen keinen neuen Wert zuweisen können, nachdem Sie sie initialisiert haben.

Zum Beispiel können Sie mit `let` eine Variable deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie dies mit `const` versuchen, erhalten Sie einen Fehler:

```js example-bad
const count;
```

Ähnlich können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch als _Neuzuweisung_ der Variablen bezeichnet):

```js
let count = 1;
count = 2;
```

Wenn Sie dies mit `const` versuchen, erhalten Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass obwohl eine Konstante in JavaScript immer denselben Wert bezeichnen muss, Sie den Inhalt des Wertes, den sie bezeichnet, ändern können. Dies ist keine nützliche Unterscheidung für einfache Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, weil obwohl sich der Inhalt des Objekts geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann sollte man const und wann let verwenden

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum sollten Sie es dann `let` vorziehen? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code ansieht, dass dieser Name nie einem anderen Wert zugewiesen wird. Wann immer sie diesen Namen sehen, wissen sie, worauf er sich bezieht.

In diesem Kurs wenden wir das folgende Prinzip an, wann `let` und wann `const` verwendet werden sollen:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, wenn Sie eine Variable initialisieren können, wenn Sie sie deklarieren, und sie später nicht neu zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables).

## Zusammenfassung

Mittlerweile sollten Sie eine angemessene Menge über JavaScript-Variablen wissen und wie man sie erstellt. Im nächsten Artikel werden wir uns detaillierter mit Zahlen beschäftigen und uns anschauen, wie man grundlegende Mathematik in JavaScript durchführt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
