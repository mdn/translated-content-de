---
title: Speichern der benötigten Informationen — Variablen
slug: Learn/JavaScript/First_steps/Variables
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie jetzt wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer übergeordneten Ansicht aussehen. In diesem Artikel gehen wir zu den ganz grundlegenden Dingen über und betrachten, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen von JavaScript-Variablen erlangen.</td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

In diesem Artikel werden Sie aufgefordert, Codezeilen einzutippen, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist die beste Stelle zum Eingeben Ihres Beispielcodes die JavaScript-Konsole Ihres Browsers (siehe [Was sind Entwicklerwerkzeuge für Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen zum Zugriff auf dieses Werkzeug).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie zum Beispiel eine Zahl, die wir in einer Summe verwenden können, oder einen String, den wir als Teil eines Satzes verwenden könnten.

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

In diesem Beispiel wird durch das Drücken der Schaltfläche ein Code ausgeführt. Zunächst wird der Text auf der Schaltfläche selbst geändert. Zweitens wird eine Nachricht über die Anzahl der Male angezeigt, die die Schaltfläche gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer die Schaltfläche drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel ohne die Verwendung einer Variablen zur Speicherung der Zählung schreiben würden. Es würde in etwa so aussehen:

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

Sie verstehen möglicherweise noch nicht vollständig die Syntax, die wir verwenden (noch nicht!), aber Sie sollten die Idee bekommen. Ohne eine Variable haben wir keine Möglichkeit, zu wissen, wie oft die Schaltfläche geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn, und wenn Sie mehr über JavaScript lernen, werden sie zur zweiten Natur.

Eine besondere Sache bei Variablen ist, dass sie nahezu alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber lernen, während Sie fortfahren.

> [!NOTE]
> Wir sagen, dass Variablen Werte enthalten. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sich vorstellen, dass sie wie kleine Pappkartons sind, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei dreidimensionalen Pappkartons, die Beispiele für JavaScript-Variablen demonstrieren. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35 beziehungsweise.](boxes.png)

## Deklarieren einer Variable

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies Deklarieren der Variablen. Dazu tippen Sie das Schlüsselwort `let`, gefolgt vom Namen, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen mit den Namen `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit eigenen Namenswahl zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code funktioniert möglicherweise korrekt für einzelne Zeilen, aber wahrscheinlich nicht, wenn Sie mehrere Zeilen Code zusammen schreiben. Gewöhnen Sie sich an, es einzuschließen.

Sie können testen, ob diese Werte nun in der Ausführungsumgebung existieren, indem Sie einfach den Namen der Variablen eingeben, z. B.

```js
myName;
myAge;
```

Sie haben derzeit keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollte ein Wert von `undefined` zurückgegeben werden. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, Folgendes einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — sie sind sehr unterschiedliche Dinge. In der analogen Box, die Sie oben gesehen haben, würde Nicht-Existenz bedeuten, dass es keine Box (Variable) gibt, in der ein Wert abgelegt werden kann. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber ohne Wert darin.

## Initialisieren einer Variable

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Sie tun dies, indem Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`) und dann dem Wert, den Sie ihm geben möchten, eingeben. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie jetzt, in die Konsole zurückzugehen und diese Zeilen einzugeben. Sie sollten den Wert, den Sie der Variablen zugewiesen haben, in der Konsole bestätigt sehen. Erneut können Sie Ihre Variablenwerte zurückrufen, indem Sie ihre Namen in die Konsole eingeben — versuchen Sie diese erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, wie folgt:

```js
let myDog = "Rover";
```

Dies werden Sie wahrscheinlich die meiste Zeit tun, da es schneller ist als die beiden Aktionen in zwei separaten Zeilen durchzuführen.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch eine andere Möglichkeit sehen, Variablen zu deklarieren, indem Sie das Schlüsselwort `var` verwenden:

```js
var myName;
var myAge;
```

Als JavaScript zuerst erstellt wurde, war dies der einzige Weg, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Deshalb wurde in modernen Versionen von JavaScript `let` eingeführt, ein neues Schlüsselwort zur Erstellung von Variablen, das etwas anders funktioniert als `var` und seine Probleme dabei behebt.

Ein paar einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden beginnen, sie zu entdecken, während Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt mehr darüber lesen möchten, können Sie gerne unsere [Referenzseite zu let](/de/docs/Web/JavaScript/Reference/Statements/let) nachschlagen).

Zum Beispiel, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` nach der Initialisierung deklarieren und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies wird nicht funktionieren, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur wenn Sie mehrere Zeilen JavaScript in einem Webdokument ausführen.

Dies funktioniert wegen **Hoisting** — lesen Sie [Var Hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details über das Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` im obigen Beispiel in `let` ändern, würde es mit einem Fehler fehlschlagen. Dies ist eine gute Sache — deklarieren einer Variable nach ihrer Initialisierung führt zu verwirrendem, schwerer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren wie Sie möchten, aber mit `let` können Sie es nicht. Das folgende würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das folgende würde einen Fehler in der zweiten Zeile auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen das folgende tun:

```js
let myName = "Chris";
myName = "Bob";
```

Erneut ist dies eine vernünftige Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstatt `var`. Es sei denn, Sie schreiben explizit Unterstützung für alte Browser, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in Ihrer Browserkonsole ausprobieren, bevorzugen Sie es, jedes der Codeblöcke hier als Ganzes zu kopieren und einzufügen. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der Variablendeklarationen mit `let` und `const` erlaubt sind:
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

## Aktualisieren einer Variable

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihm einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in Ihrer Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Eine Randbemerkung zu Variablennamenregeln

Sie können eine Variable fast alles nennen, was Sie wollen, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie nur lateinische Zeichen (0-9, a-z, A-Z) und das Unterstrichzeichen verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein könnten.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge zu bedeuten, sodass es verwirrend werden kann.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention, an die Sie sich halten können, ist {{Glossary("camel_case", "lower camel case")}}, bei dem Sie mehrere Wörter zusammenfügen, indem Sie das gesamte erste Wort in Kleinbuchstaben und dann nachfolgende Wörter groß schreiben. Wir haben dies bisher für unsere Variablennamen im Artikel verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten beschreiben, die sie enthalten. Verwenden Sie nicht einfach nur einzelne Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitiv — daher ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Daher können Sie Wörter wie `var`, `function`, `let` und `for` nicht als Variablennamen verwenden. Browser erkennen sie als unterschiedliche Code-Elemente, und daher erhalten Sie Fehler.

> [!NOTE]
> Eine ziemlich vollständige Liste reservierter Schlüsselwörter, die zu vermeiden sind, finden Sie unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie jetzt, einige weitere Variablen mit der obigen Anleitung zu erstellen.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben; in zukünftigen Artikeln werden Sie mehr über sie im Detail lernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Ganzzahlen genannt) oder Dezimalzahlen wie 2,456 (auch Floats oder Gleitkommazahlen genannt). Sie müssen in JavaScript keine Variablentypen deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert geben, schließen Sie keine Anführungszeichen ein:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen String-Wert geben, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als einen anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind Wahr-/Falsch-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre z.B.:

```js
let iAmAlive = true;
```

In Wirklichkeit würde es jedoch mehr so verwendet werden:

```js
let test = 6 < 3;
```

Dies verwendet den "weniger als" Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt es `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert durch ihre Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des gewünschten Wertes entspricht. Sie haben möglicherweise bemerkt, dass Arrays in JavaScript nullbasiert sind: das erste Element befindet sich an Index 0.

Um mehr zu erfahren, sehen Sie sich unseren Artikel über [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) an.

### Objekte

In der Programmierung ist ein Objekt eine Struktur von Code, die ein reales Objekt modelliert. Sie können ein einfaches Objekt haben, das eine Box darstellt und Informationen über seine Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, ihre Größe, ihr Gewicht, welche Sprache sie sprechen, wie man hallo zu ihnen sagt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

Für mehr zu diesem Thema, siehe das [Modul: Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects).

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Strings, Arrays usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen in Anführungszeichen eingeschlossenen Wert geben, behandelt der Browser die Variable als einen String:

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

Versuchen Sie, die vier oben genannten Zeilen nacheinander in Ihre Konsole einzugeben und sehen Sie, was die Ergebnisse sind. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variable zurück, die Sie nach ihm eingeben. Das erste Mal, dass es aufgerufen wird, sollte es `string` zurückgeben, da zu diesem Zeitpunkt die Variable `myNumber` einen String, `'500'`, enthält. Schauen Sie, was es das zweite Mal zurückgibt, wenn Sie es aufrufen.

## Konstanten in JavaScript

Neben Variablen können Sie Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie müssen sie beim Deklarieren initialisieren
- Sie können ihnen keinen neuen Wert zuweisen, nachdem Sie sie initialisiert haben.

Zum Beispiel, mit `let` können Sie eine Variable deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, erhalten Sie einen Fehler:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch Neuzuweisung der Variable genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, erhalten Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass obwohl eine Konstante in JavaScript immer denselben Wert benennen muss, können Sie den Inhalt des Wertes, den sie benennt, ändern. Dies ist keine sinnvolle Unterscheidung für einfache Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können Eigenschaften eines mit `const` deklarierten Objekts aktualisieren, hinzufügen oder entfernen, weil, auch wenn sich der Inhalt des Objekts geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann sollte man const und wann let verwenden

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum würden Sie es dann bevorzugen, `const` anstelle von `let` zu verwenden? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, teilt es jedem, der Ihren Code ansieht, mit, dass dieser Name nie einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs übernehmen wir das folgende Prinzip darüber, wann man `let` und wann `const` verwenden sollte:

_Verwenden Sie `const`, wann immer Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, dass wenn Sie eine Variable beim Deklarieren initialisieren können und sie später nicht erneut zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen und wie man sie erstellt wissen. Im nächsten Artikel werden wir uns ausführlicher mit Zahlen beschäftigen und untersuchen, wie man grundlegende Mathematik in JavaScript durchführt.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Maths", "Learn/JavaScript/First_steps")}}
