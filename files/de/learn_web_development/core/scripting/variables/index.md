---
title: Informationen speichern, die Sie benötigen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: bb05c1965f25afbcb3780a3435cbed99c4ffcad4
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien nutzen und wie seine Hauptfunktionen auf hoher Ebene aussehen. In diesem Artikel werden wir uns mit den wirklich grundlegenden Dingen befassen und anschauen, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Variablen sind und warum sie so wichtig sind.</li>
          <li>Variablen mit <code>let</code> deklarieren, sie mit Werten initialisieren und mit neuen Werten zuweisen.</li>
          <li>Konstanten mit <code>const</code> erstellen.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann Sie welche verwenden sollten.</li>
          <li>Best Practices zur Benennung von Variablen.</li>
          <li>Die verschiedenen Arten von Werten, die in Variablen gespeichert werden können — Zeichenfolgen, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

In diesem Artikel werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist die beste Stelle, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen darüber, wie Sie auf dieses Tool zugreifen).

## Was ist eine Variable?

Eine Variable ist ein Behälter für einen Wert, wie eine Zahl, die wir in einer Summe verwenden könnten, oder eine Zeichenfolge, die wir als Teil eines Satzes verwenden könnten.

### Variablenbeispiel

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

In diesem Beispiel wird durch Drücken der Schaltfläche ein Code ausgeführt. Erstens ändert sich der Text auf der Schaltfläche selbst. Zweitens zeigt es eine Nachricht über die Anzahl der Male an, die die Schaltfläche gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer die Schaltfläche drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zur Speicherung des Zählers zu verwenden. Es würde ungefähr so aussehen:

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

Möglicherweise verstehen Sie die Syntax, die wir verwenden, noch nicht vollständig, aber Sie sollten die Idee erfassen können. Ohne eine Variable haben wir keine Möglichkeit herauszufinden, wie oft die Schaltfläche angeklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen sind einfach sinnvoll, und je mehr Sie über JavaScript lernen, desto mehr werden sie zur Selbstverständlichkeit.

Eine besondere Eigenschaft von Variablen ist, dass sie so ziemlich alles enthalten können — nicht nur Zeichenfolgen und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber erfahren, während Sie sich weiterentwickeln.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist eine wichtige Unterscheidung. Variablen sind nicht die Werte selbst; sie sind Behälter für Werte. Sie können sie sich wie kleine Kartons vorstellen, in denen Sie Dinge lagern können.

![Ein Screenshot von drei dreidimensionalen Kartons, die Beispiele für JavaScript-Variablen zeigen. Jeder Kasten enthält hypothetische Werte, die verschiedene JavaScript-Datentypen darstellen. Die Beispielwerte sind "Bob", true und 35 entsprechend.](boxes.png)

## Eine Variable deklarieren

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt nennen wir dies das Deklarieren der Variablen. Dazu geben wir das Schlüsselwort `let` gefolgt von dem Namen ein, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit Ihren eigenen Namenswahlen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code funktioniert möglicherweise korrekt für einzelne Zeilen, wird aber wahrscheinlich nicht funktionieren, wenn Sie mehrere Zeilen Code zusammen schreiben. Versuchen Sie, sich daran zu gewöhnen, es einzufügen.

Sie können testen, ob diese Werte nun in der Ausführungsumgebung existieren, indem Sie nur den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Sie haben derzeit keinen Wert; sie sind leere Behälter. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` zurückbekommen. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — sie sind sehr unterschiedliche Dinge. In der Karton-Analogie, die Sie oben gesehen haben, würde nicht existieren bedeuten, dass es keine Kiste (Variable) gibt, in die ein Wert hineingelegt werden könnte. Kein definierter Wert würde bedeuten, dass es eine Kiste gibt, aber sie hat keinen Wert darin.

## Initialisieren einer Variable

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Sie tun dies, indem Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie nun, zu Ihrer Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten in jedem Fall den von Ihnen zugewiesenen Wert der Variablen in der Konsole zurückgegeben sehen, um dies zu bestätigen. Sie können Ihre Variablenwerte auch zurückgeben, indem Sie ihren Namen in die Konsole eingeben — versuchen Sie dies erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen in zwei separaten Zeilen zu tun.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch eine andere Methode sehen, um Variablen zu deklarieren, und zwar mit dem Schlüsselwort `var`:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Deshalb wurde `let` in modernen Versionen von JavaScript geschaffen, ein neues Schlüsselwort zum Erstellen von Variablen, das etwas anders funktioniert als `var` und dabei seine Probleme behebt.

Ein paar einfache Unterschiede werden unten erklärt. Wir werden nicht auf alle Unterschiede jetzt eingehen, aber Sie werden beginnen, sie zu entdecken, wenn Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt darüber lesen möchten, können Sie gerne auf unserer [let Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) nachschauen).

Zum einen: Wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben und es wird immer noch funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies wird nicht funktionieren, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur, wenn Sie mehrere Zeilen JavaScript in einem Web-Dokument ausführen.

Dies funktioniert aufgrund von **Hoisting** — lesen Sie [var hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` im obigen Beispiel durch `let` ersetzen würden, würde es mit einem Fehler fehlschlagen. Das ist eine gute Sache — das Deklarieren einer Variablen, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwerer verständlichem Code.

Zweitens können Sie mit `var` so oft eine Variable deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Das Folgende würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das Folgende würde einen Fehler in der zweiten Zeile werfen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch das ist eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstatt `var`. Es sei denn, Sie schreiben ausdrücklich Unterstützung für alte Browser, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie es, jeden der hier enthaltenen Codeblöcke als Ganzes zu kopieren und einzufügen. Es gibt ein [Feature in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei dem Variable-Neuerklärungen mit `let` und `const` erlaubt sind:
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // Als eine Eingabe: SyntaxError: Identifier 'myName' has already been declared
>
> > let myName = "Chris";
> > let myName = "Bob";
> // Als zwei Eingaben: beide erfolgreich
> ```

## Eine Variable aktualisieren

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Exkurs zu den Variablennamensregeln

Sie können eine Variable so ziemlich nennen, wie Sie wollen, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich darauf beschränken, nur lateinische Zeichen (0-9, a-z, A-Z) und das Unterstrichzeichen zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder schwer zu verstehen für ein internationales Publikum sein können.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge anzuzeigen, sodass es verwirrend werden kann.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention, an die man sich halten sollte, ist {{Glossary("camel_case", "lower camel case")}}, bei dem man mehrere Wörter zusammenfügt, die insgesamt klein geschrieben sind, und dann nachfolgende Wörter groß schreibt. Wir haben dies für unsere Variablennamen im Artikel bisher verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten beschreiben, die sie enthalten. Verwenden Sie nicht einfach nur einzelne Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitive — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Sie können also keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als unterschiedliche Codebestandteile, und so erhalten Sie Fehler.

> [!NOTE]
> Sie können eine ziemlich vollständige Liste der reservierten Schlüsselwörter, die Sie vermeiden sollten, unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) finden.

Gute Namen Beispiele:

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

Schlechte Namen Beispiele:

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

Versuchen Sie jetzt, ein paar weitere Variablen zu erstellen, und achten Sie dabei auf die oben genannten Richtlinien.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt beschreiben wir diese kurz, und in zukünftigen Artikeln werden Sie mehr darüber im Detail lernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Ganzzahlen genannt) oder Dezimalzahlen wie 2.456 (auch Gleitkommazahlen oder Fließkommazahlen genannt). Sie müssen im Gegensatz zu einigen anderen Programmiersprachen in JavaScript keine Variablentypen deklarieren. Wenn Sie einer Variablen einen Zahlenwert zuweisen, schließen Sie keine Anführungszeichen ein:

```js
let myAge = 17;
```

### Zeichenfolgen

Zeichenfolgen sind Textstücke. Wenn Sie einer Variablen einen Zeichenfolgenwert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als einen anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind wahr/falsch Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der der Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre also:

```js
let iAmAlive = true;
```

Während es in der Realität eher so verwendet wird:

```js
let test = 6 < 3;
```

Hierbei wird der "kleiner als"-Operator (`<`) verwendet, um zu testen, ob 6 kleiner als 3 ist. Wie erwartet gibt es `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren erfahren.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckigen Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert durch ihren Standort innerhalb des Arrays zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des Wertes entspricht, den Sie zurückgegeben haben möchten. Vielleicht haben Sie bemerkt, dass Arrays in JavaScript nullbasiert sind: Das erste Element befindet sich an Index 0.

### Objekte

In der Programmierung ist ein Objekt eine Struktur von Code, die ein Objekt aus dem echten Leben modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über seine Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, ihre Größe, ihr Gewicht, welche Sprache sie sprechen, wie man sie grüßt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die in dem Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Zeichenfolgen, Arrays usw.).

Wenn Sie zum Beispiel eine Variable deklarieren und ihr einen in Anführungszeichen gesetzten Wert zuweisen, behandelt der Browser die Variable als Zeichenfolge:

```js
let myString = "Hello";
```

Auch wenn der in Anführungszeichen gesetzte Wert nur Ziffern enthält, ist es noch eine Zeichenfolge — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier obigen Zeilen nacheinander in Ihre Konsole einzugeben und sehen Sie sich die Ergebnisse an. Sie werden feststellen, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variable zurück, die Sie danach eingeben. Das erste Mal, wenn er aufgerufen wird, sollte er `string` zurückgeben, da zu diesem Zeitpunkt die `myNumber`-Variable eine Zeichenfolge, `'500'`, enthält. Schauen Sie nach, was er das zweite Mal, wenn Sie ihn aufrufen, zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind ähnlich wie Variablen, außer dass:

- Sie müssen sie initialisieren, wenn Sie sie deklarieren.
- Sie können ihnen nach der Initialisierung keinen neuen Wert zuweisen.

Zum Beispiel können Sie mit `let` eine Variable deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, sehen Sie einen Fehler:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch als _Neuzuordnung_ der Variable bezeichnet):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, sehen Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass obwohl eine Konstante in JavaScript immer denselben Wert benennen muss, können Sie den Inhalt des Wertes, den sie benennt, ändern. Dies ist für einfache Typen wie Zahlen oder Booleans nicht nützlich, aber denken Sie über ein Objekt nach:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, denn auch wenn sich der Inhalt des Objekts geändert hat, verweist die Konstante immer noch auf dasselbe Objekt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann sollte man const und wann sollte man let verwenden?

Wenn Sie mit `const` nicht so viel tun können, wie mit `let`, warum sollten Sie es dann lieber verwenden als `let`? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code anschaut, dass dieser Name niemals einem anderen Wert zugewiesen werden wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs befolgen wir das folgende Prinzip darüber, wann `let` und wann `const` verwendet werden sollte:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, dass, wenn Sie eine Variable initialisieren können, wenn Sie sie deklarieren, und sie später nicht neu zuweisen müssen, sollten Sie sie zu einer Konstante machen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables).

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen wissen und wie man sie erstellt. Im nächsten Artikel konzentrieren wir uns näher auf Zahlen und schauen genauer, wie man grundlegende Mathematik in JavaScript durchführt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
