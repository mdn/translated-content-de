---
title: Speichern der benötigten Informationen — Variablen
slug: Learn/JavaScript/First_steps/Variables
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptfunktionen aus einer hohen Perspektive aussehen. In diesem Artikel gehen wir zu den wirklichen Grundlagen und schauen uns an, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundverständnis von HTML und CSS sowie
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen der JavaScript-Variablen erlangen.</td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie gebeten, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Entwicklerwerkzeuge im Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Werkzeug zugreifen können).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie beispielsweise eine Zahl, die wir in einer Rechnung verwenden könnten, oder ein String, den wir als Teil eines Satzes verwenden könnten.

### Beispiel für eine Variable

Lassen Sie uns ein Beispiel ansehen:

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

In diesem Beispiel führt das Drücken des Buttons Code aus. Zuerst ändert es den Text auf dem Button selbst. Zweitens zeigt es eine Nachricht über die Anzahl der Male an, die der Button gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer den Button drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum das so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um die Anzahl zu speichern. Es würde in etwa so aussehen:

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

Vielleicht verstehen Sie die verwendete Syntax noch nicht vollständig, aber Sie sollten das Konzept erfassen können. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft der Button geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen mehr gespeichert werden können.

Variablen ergeben einfach Sinn, und je mehr Sie über JavaScript lernen, desto natürlicher wird es Ihnen erscheinen.

Eine Besonderheit von Variablen ist, dass sie fast alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber erfahren, während Sie fortschreiten.

> [!NOTE]
> Wir sagen, dass Variablen Werte enthalten. Das ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sich Variablen wie kleine Pappkartons vorstellen, in die Sie Dinge legen können.

![Ein Screenshot von drei 3-dimensionalen Pappkartons, die Beispiele für JavaScript-Variablen demonstrieren. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen darstellen. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Eine Variable deklarieren

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen das Deklarieren der Variable. Dazu tippen Sie das Schlüsselwort `let` gefolgt von dem Namen ein, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit eigenen Namensentscheidungen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte korrekt funktionieren bei einzelnen Zeilen, aber wahrscheinlich nicht, wenn Sie mehrere Codezeilen zusammen schreiben. Versuchen Sie, sich anzugewöhnen, es hinzuzufügen.

Sie können testen, ob diese Werte nun in der Ausführungsumgebung existieren, indem Sie einfach den Variablennamen eingeben, z.B.

```js
myName;
myAge;
```

Derzeit haben sie keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` zurückerhalten. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, dies einzugeben:

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie eine Variable, die existiert, aber keinen definierten Wert hat, nicht mit einer Variable, die überhaupt nicht existiert — das sind sehr unterschiedliche Dinge. Im obigen Box-Beispiel würde das Nichtvorhandensein bedeuten, dass es keine Box (Variable) gibt, in die ein Wert gehen kann. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber sie keinen Wert enthält.

## Eine Variable initialisieren

Nachdem Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Dies tun Sie, indem Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten, tippen. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie nun, diese Zeilen in die Konsole einzugeben. Sie sollten den Wert, den Sie der Variablen zugewiesen haben, in der Konsole sehen, um es zu bestätigen. Wiederum können Sie Ihre Variablenwerte zurückgeben, indem Sie deren Namen in die Konsole eingeben — versuchen Sie dies noch einmal:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, wie folgt:

```js
let myDog = "Rover";
```

Das ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen auf zwei getrennten Zeilen auszuführen.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch eine andere Methode zur Deklaration von Variablen sehen, bei der das Schlüsselwort `var` verwendet wird:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Deshalb wurde `let` in modernen Versionen von JavaScript eingeführt, ein neues Schlüsselwort zur Erstellung von Variablen, das etwas anders funktioniert als `var` und dessen Probleme behebt.

Einige einfache Unterschiede sind unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden sie entdecken, wenn Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt schon alles über sie lesen möchten, können Sie unsere [let-Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) besuchen).

Zum Beispiel, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird immer noch funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht beim Eingeben einzelner Zeilen in eine JavaScript-Konsole, nur beim Ausführen mehrerer JavaScript-Zeilen in einem Webdokument.

Dies funktioniert wegen des **Hoistings** — lesen Sie [var hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für weitere Details zu diesem Thema.

Das Hoisting funktioniert nicht mehr mit `let`. Wenn wir im obigen Beispiel `var` durch `let` ersetzen, würde es mit einem Fehler fehlschlagen. Das ist eine gute Sache — das Deklarieren einer Variablen, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Das folgende würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das folgende würde einen Fehler in der zweiten Zeile auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Wiederum ist dies eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir Ihnen, `let` in Ihrem Code zu verwenden, anstatt `var`. Es sei denn, Sie schreiben ausdrücklich Unterstützung für sehr alte Browser, es gibt keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie bitte, jeden der Codeblöcke hier als Ganzes zu kopieren & einzufügen. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der Variablen-Neudeklarationen mit `let` und `const` erlaubt sind:
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

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert zuweisen. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Eine Randbemerkung zu Variablenbenennungsregeln

Sie können eine Variable so ziemlich nennen, wie Sie möchten, aber es gibt Einschränkungen. Generell sollten Sie darauf achten, nur lateinische Zeichen (0-9, a-z, A-Z) und den Unterstrich zu benutzen.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein können.
- Verwenden Sie keine Unterstriche zu Beginn von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um bestimmte Dinge zu bedeuten, und kann verwirrend sein.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Das ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention ist {{Glossary("camel_case", "lower camel case")}}, bei der Sie mehrere Wörter verbinden und für das gesamte erste Wort Kleinbuchstaben verwenden und dann die folgenden Wörter groß schreiben. Wir haben das für unsere Variablennamen im Artikel bisher verwendet.
- Machen Sie Variablennamen intuitiv, damit sie die Daten beschreiben, die sie enthalten. Verwenden Sie nicht nur einzelne Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitive — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, reservierte JavaScript-Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Also können Sie keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als verschiedene Codeelemente und daher erhalten Sie Fehler.

> [!NOTE]
> Sie finden eine ziemlich vollständige Liste der reservierten Schlüsselwörter, die Sie vermeiden sollten, unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie nun, einige weitere Variablen zu erstellen, mit den obigen Richtlinien im Hinterkopf.

## Variablentypen

Es gibt einige verschiedene Datentypen, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben, bevor Sie sie in kommenden Artikeln detaillierter kennenlernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Integer genannt) oder Dezimalzahlen wie 2.456 (auch Fließkommazahlen genannt). Sie müssen die Variablentypen in JavaScript nicht deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen zahlenwertigen Wert geben, schließen Sie ihn nicht in Anführungszeichen ein:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen String-Wert geben, müssen Sie ihn in einfache oder doppelte Anführungszeichen einschließen; andernfalls versucht JavaScript, es als einen anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind Wahrheitswerte — sie können zwei Werte haben, `true` oder `false`. Diese werden in der Regel verwendet, um eine Bedingung zu testen, nach der der Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre:

```js
let iAmAlive = true;
```

Während es in Wirklichkeit eher so verwendet würde:

```js
let test = 6 < 3;
```

Hierbei wird der "kleiner als"-Operator (`<`) verwendet, um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt es `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren erfahren.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte in eckigen Klammern enthält, die durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert durch deren Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des gewünschten zurückgegebenen Werts entspricht. Sie haben vielleicht bemerkt, dass Arrays in JavaScript nullbasiert sind: das erste Element befindet sich an Index 0.

Um mehr zu erfahren, sehen Sie sich unseren Artikel über [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) an.

### Objekte

In der Programmierung ist ein Objekt eine Struktur aus Code, die ein reales Objekt modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über dessen Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über deren Namen, Größe, Gewicht, welche Sprache sie spricht, wie man sie begrüßt, und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihrer Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

Weitere Informationen zu diesem Thema finden Sie im [Einführungsmodul zu JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects).

## Dynamisches Typing

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welcher Datentyp eine Variable enthält (Zahlen, Strings, Arrays, etc.).

Wenn Sie beispielsweise eine Variable deklarieren und ihr einen in Anführungszeichen eingeschlossenen Wert zuweisen, behandelt der Browser die Variable als String:

```js
let myString = "Hello";
```

Selbst wenn der in Anführungszeichen eingeschlossene Wert nur Ziffern ist, ist es trotzdem ein String — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier Zeilen oben einzeln in Ihre Konsole einzugeben, und sehen Sie, was die Ergebnisse sind. Ihnen wird auffallen, dass wir einen speziellen Operator verwenden, genannt [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) — dieser gibt den Datentyp der Variable zurück, die Sie danach eingeben. Das erste Mal sollte er `string` zurückgeben, da zu diesem Zeitpunkt die `myNumber`-Variable einen String enthält, `'500'`. Schauen Sie mal, was er beim zweiten Aufruf zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie sie bei der Deklaration initialisieren müssen
- Sie ihnen nach der Initialisierung keinen neuen Wert zuweisen können.

Beispielsweise können Sie mit `let` eine Variable ohne Initialisierung deklarieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, erhalten Sie einen Fehler:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch _Umzuweisung_ der Variable genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, erhalten Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl in JavaScript eine Konstante immer denselben Wert benennen muss, Sie den Inhalt des Werts, den sie benennt, ändern können. Das ist für einfache Typen wie Zahlen oder Booleans nicht nützlich, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts aktualisieren, hinzufügen oder entfernen, das mit `const` deklariert wurde, weil die Konstante zwar immer noch auf dasselbe Objekt zeigt, der Inhalt des Objekts sich jedoch geändert hat:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann sollte man const und wann let verwenden

Wenn man mit `const` nicht so viel machen kann wie mit `let`, warum sollte man es dann lieber verwenden? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code liest, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, wissen sie, worauf er sich bezieht.

In diesem Kurs verwenden wir folgendes Prinzip, wann `let` und wann `const` verwendet werden sollte:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, dass, wenn Sie eine Variable bei der Deklaration initialisieren können und sie später nicht neu zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie dieses Wissen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen und deren Erstellung wissen. Im nächsten Artikel werden wir uns im Detail mit Zahlen befassen und uns ansehen, wie man grundlegende Mathematik in JavaScript betreibt.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Maths", "Learn/JavaScript/First_steps")}}
