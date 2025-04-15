---
title: Speichern der Informationen, die Sie benötigen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nach dem Lesen der letzten Artikel sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer hohen Perspektive aussehen. In diesem Artikel befassen wir uns mit den wirklich grundlegenden Bausteinen von JavaScript — den Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden Konzepten von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was Variablen sind und warum sie so wichtig sind.</li>
          <li>Deklaration von Variablen mit <code>let</code>, Initialisierung mit Werten und Neuvergabe mit neuen Werten.</li>
          <li>Erstellen von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann man jede verwendet.</li>
          <li>Best Practices für das Benennen von Variablen.</li>
          <li>Die verschiedenen Arten von Werten, die in Variablen gespeichert werden können — Strings, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Browserentwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Werkzeug zugreifen können).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder einen String, den wir als Teil eines Satzes verwenden könnten.

### Variablenbeispiel

Betrachten wir ein Beispiel:

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

In diesem Beispiel führt das Drücken der Schaltfläche einige Codezeilen aus. Erstens, es ändert den Text auf der Schaltfläche selbst. Zweitens zeigt es eine Nachricht an, wie oft die Schaltfläche gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer die Schaltfläche drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um die Zählung zu speichern. Es würde ungefähr so aussehen:

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

Sie könnten die verwendete Syntax noch nicht vollständig verstehen, aber Sie sollten die Idee begreifen können. Ohne eine Variable wissen wir nicht, wie oft die Schaltfläche geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn, und je mehr Sie über JavaScript lernen, desto mehr werden sie zur zweiten Natur werden.

Eine besondere Sache an Variablen ist, dass sie fast alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber erfahren, während Sie weiterlernen.

> [!NOTE]
> Wir sagen, dass Variablen Werte enthalten. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sich vorstellen, dass sie wie kleine Kartons sind, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei dreidimensionalen Kartons, die Beispiele für JavaScript-Variablen darstellen. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35 jeweils.](boxes.png)

## Deklarieren einer Variablen

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies das Deklarieren der Variablen. Dazu tippen Sie das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine (oder zwei) Variable(n) mit Ihren eigenen Namensentscheidungen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte für einzelne Zeilen korrekt funktionieren, aber wahrscheinlich nicht, wenn Sie mehrere Codezeilen zusammen schreiben. Versuchen Sie, sich anzugewöhnen, es zu verwenden.

Sie können testen, ob diese Werte nun in der Ausführungsumgebung existieren, indem Sie einfach den Variablennamen eingeben, z.B.

```js
myName;
myAge;
```

Derzeit haben sie keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie den Wert `undefined` zurückerhalten. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung – versuchen Sie, follgende Zeilen einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — sie sind sehr unterschiedliche Dinge. In der oben gesehenen Box-Analogiebedeutet nicht existieren, dass es keine Box (Variable) für einen Wert gibt. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber sie hat keinen Wert darin.

## Initialisieren einer Variablen

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Sie tun dies, indem Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihm geben möchten, eingeben. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie, jetzt zu Ihrer Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten den Wert, den Sie der Variable zugewiesen haben, zur Bestätigung in der Konsole sehen. Erneut können Sie Ihre Variablenwerte durch Eingabe ihres Namens in die Konsole zurückgeben – versuchen Sie es erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Das ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist als die beiden Aktionen auf zwei getrennten Zeilen auszuführen.

## Eine Anmerkung zu var

Sie sehen wahrscheinlich auch eine andere Methode, um Variablen zu deklarieren, mit dem Schlüsselwort `var`:

```js
var myName;
var myAge;
```

Als JavaScript erstmals entwickelt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde `let` in modernen Versionen von JavaScript erstellt, ein neues Schlüsselwort zur Erstellung von Variablen, das etwas anders als `var` funktioniert und dabei seine Probleme behebt.

Ein paar einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden anfangen, sie zu entdecken, während Sie mehr über JavaScript erfahren (wenn Sie wirklich jetzt darüber lesen möchten, zögern Sie nicht, unsere [Let Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) zu überprüfen).

Zu Beginn, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur, wenn Sie mehrere Zeilen von JavaScript in einem Webdokument ausführen.

Dies funktioniert aufgrund der **Hebung** — lesen Sie [Var Hebung](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zu diesem Thema.

Hebung funktioniert nicht mehr mit `let`. Wenn wir im obigen Beispiel `var` zu `let` ändern, würde es mit einem Fehler fehlschlagen. Dies ist eine gute Sache — das Deklarieren einer Variablen, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie wollen, aber mit `let` können Sie das nicht. Folgendes würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber folgendes würde einen Fehler in der zweiten Zeile werfen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Wiederum ist dies eine vernünftige Sprachentscheidung. Es gibt keinen Grund, Variablen erneut zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir Ihnen, `let` in Ihrem Code zu verwenden, anstatt `var`. Es sei denn, Sie schreiben explizit Unterstützung für uralte Browser, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie es, jeden der Codeblöcke hier als Ganzes zu kopieren und einzufügen. Es gibt ein [Feature in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei dem Variablenerklärungen mit `let` und `const` erlaubt sind:
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // Als eine Eingabe: Syntaxfehler: Bezeichner 'myName' wurde bereits deklariert
>
> > let myName = "Chris";
> > let myName = "Bob";
> // Als zwei Eingaben: beide erfolgreich
> ```

## Aktualisieren einer Variablen

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Exkurs zu den Benennungsregeln für Variablen

Sie können eine Variable fast so nennen, wie Sie möchten, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich darauf beschränken, nur lateinische Zeichen (0-9, a-z, A-Z) und das Unterstrichzeichen zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein können.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge zu bedeuten und könnte verwirrend werden.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention, an der man sich halten kann, ist {{Glossary("camel_case", "lower camel case")}}, wobei Sie mehrere Wörter zusammenfügen und den gesamten ersten Buchstaben in Kleinbuchstaben schreiben und anschließend die folgenden Wörter großschreiben. Wir haben dies für unsere Variablennamen im Artikel bisher verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten beschreiben, die sie enthalten. Verwenden Sie keine einzelnen Buchstaben/Zahlen oder große lange Sätze.
- Variablen sind case-sensitiv — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, reservierte JavaScript-Wörter als Variablennamen zu verwenden — damit meinen wir die Wörter, die die tatsächliche Syntax von JavaScript ausmachen! Also, Sie können keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als unterschiedliche Code-Elemente und daher erhalten Sie Fehlermeldungen.

> [!NOTE]
> Sie finden eine ziemlich vollständige Liste von reservierten Schlüsselwörtern, die Sie vermeiden sollten, unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie nun, ein paar weitere Variablen zu erstellen, und halten Sie sich dabei an die obigen Richtlinien.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben, in zukünftigen Artikeln werden Sie mehr darüber erfahren.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Integer genannt) oder Dezimalzahlen wie 2.456 (auch Gleitkommazahlen oder Fließkommazahlen genannt). Sie müssen keine Variablentypen in JavaScript deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert zuweisen, setzen Sie keine Anführungszeichen:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen String-Wert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als einen anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind wahr/falsch-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, wonach der Code bei Bedarf ausgeführt wird. Zum Beispiel ein einfacher Fall könnte sein:

```js
let iAmAlive = true;
```

In Wirklichkeit würde es jedoch eher so verwendet:

```js
let test = 6 < 3;
```

Dies verwendet den "kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt es `false` zurück, weil 6 nicht kleiner als 3 ist! Sie werden später im Kurs noch viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert anhand seiner Position im Array zugreifen. Versuchen Sie die folgenden Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des Wertes entspricht, den Sie zurückgeben möchten. Sie haben möglicherweise bemerkt, dass Arrays in JavaScript nullbasiert indiziert sind: Das erste Element befindet sich an Index 0.

### Objekte

In der Programmierung ist ein Objekt eine Struktur aus Code, die ein realitätsnahes Objekt modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über seine Breitev enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über deren Namen, Größe, Gewicht, die Sprache, die sie sprechen, wie man sie begrüßt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie, im Gegensatz zu einigen anderen Sprachen, nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Strings, Arrays usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen Wert in Anführungszeichen geben, behandelt der Browser die Variable als String:

```js
let myString = "Hello";
```

Selbst wenn der in Anführungszeichen eingeschlossene Wert nur Ziffern enthält, ist er immer noch ein String — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier oben genannten Zeilen nacheinander in Ihre Konsole einzugeben und sehen Sie, welche Ergebnisse herauskommen. Sie werden feststellen, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der nach ihm eingegebenen Variablen zurück. Beim ersten Aufruf sollte `string` zurückgegeben werden, da zu diesem Zeitpunkt die Variable `myNumber` einen String enthält, `'500'`. Schauen Sie nach, was er beim zweiten Aufruf zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind wie Variablen, mit den folgenden Unterschieden:

- Sie müssen sie beim Deklarieren initialisieren.
- Sie können ihnen nach der Initialisierung keinen neuen Wert zuweisen.

Zum Beispiel, wenn Sie `let` verwenden, können Sie eine Variable ohne Initialisierung deklarieren:

```js
let count;
```

Wenn Sie dies mit `const` versuchen, werden Sie einen Fehler sehen:

```js example-bad
const count;
```

Ähnlich können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch _neuzuweisen_ genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass obwohl eine Konstante in JavaScript immer denselben Wert benennen muss, Sie den Inhalt des Wertes, den sie benennt, ändern können. Dies ist kein nützlicher Unterschied bei einfachen Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines mit `const` deklarierten Objekts aktualisieren, hinzufügen oder entfernen, weil, obwohl sich der Inhalt des Objekts geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann Sie const und wann let verwenden sollten

Wenn Sie mit `let` mehr tun können als mit `const`, warum sollten Sie dann `const` statt `let` bevorzugen? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, signalisiert es jedem, der Ihren Code ansieht, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, wissen sie, was er bedeutet.

In diesem Kurs befolgen wir das folgende Prinzip, wann `let` und wann `const` verwendet werden soll:

_Verwenden Sie `const`, wann immer Sie können und `let`, wenn Sie müssen._

Das bedeutet, dass wenn Sie eine Variable beim Deklarieren initialisieren können und sie später nicht neu zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables).

Schauen Sie sich auch [Übungszeit - Teil 3: let und const](https://scrimba.com/learn-javascript-c0v/~059?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba an: Eine interaktive Herausforderung mit mehreren Tests zu `let` und `const`.

## Zusammenfassung

Bis jetzt sollten Sie ein angemessenes Verständnis von JavaScript-Variablen haben und wissen, wie Sie sie erstellen. Im nächsten Artikel werden wir uns eingehender mit Zahlen befassen und untersuchen, wie man grundlegende Mathematik in JavaScript durchführt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
