---
title: Speichern der benötigten Informationen — Variablen
slug: Learn/JavaScript/First_steps/Variables
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer hohen Perspektive aussehen. In diesem Artikel werden wir uns mit den wirklich grundlegenden Elementen von JavaScript befassen — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS, ein
        grundlegendes Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen von JavaScript-Variablen zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Entwicklerwerkzeuge des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Tool zugreifen können).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie eine Zahl, die wir in einem Rechenvorgang verwenden könnten, oder eine Zeichenkette, die wir als Teil eines Satzes verwenden könnten.

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

In diesem Beispiel führt das Drücken des Buttons etwas Code aus. Erstens ändert es den Text auf dem Button selbst. Zweitens zeigt es eine Nachricht über die Anzahl der Male, die der Button gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer den Button drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um die Anzahl zu speichern. Es würde etwa so aussehen:

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

Vielleicht verstehen Sie die verwendete Syntax nicht vollständig (noch nicht!), Aber Sie sollten die Idee begreifen. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft der Button geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn, und je mehr Sie über JavaScript lernen, desto mehr werden sie zur zweiten Natur werden.

Besonders an Variablen ist, dass sie so ziemlich alles enthalten können — nicht nur Zeichenketten und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden im weiteren Verlauf mehr darüber lernen.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist eine wichtige Unterscheidung. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sie sich wie kleine Pappschachteln vorstellen, in die Sie Dinge speichern können.

![Ein Screenshot von drei 3-dimensionalen Pappschachteln, die Beispiele von JavaScript-Variablen darstellen. Jede Schachtel enthält hypothetische Werte, die verschiedene JavaScript-Datentypen darstellen. Die Beispielwerte sind "Bob", true und 35 jeweils.](boxes.png)

## Deklarieren einer Variable

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies die Deklaration der Variablen. Dazu tippen Sie das Schlüsselwort `let`, gefolgt von dem Namen, den Sie Ihrer Variable geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Versuchen Sie danach, eine Variable (oder zwei) mit eigenen Namen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte für einzelne Zeilen korrekt funktionieren, allerdings wahrscheinlich nicht, wenn Sie mehrere Codezeilen zusammen schreiben. Versuchen Sie, es sich zur Gewohnheit zu machen, es hinzuzufügen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung existieren, indem Sie einfach den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Aktuell haben sie keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` zurückerhalten. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, Folgendes einzugeben:

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — das sind sehr unterschiedliche Dinge. In der Box-Analogie oben würde nicht existieren bedeuten, dass es keine Box (Variable) gibt, in die ein Wert passen könnte. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber sie enthält keinen Wert.

## Initialisieren einer Variable

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Sie tun dies, indem Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten, eingeben. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie jetzt, in die Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten den Wert sehen, den Sie der Variablen zugewiesen haben, der in der Konsole angezeigt wird, um dies jeweils zu bestätigen. Erneut können Sie Ihre Variablenwerte zurückgeben, indem Sie deren Namen in die Konsole eingeben — versuchen Sie diese erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen auf zwei separaten Zeilen auszuführen.

## Eine Bemerkung zu var

Sie werden wahrscheinlich auch eine andere Art sehen, Variablen zu deklarieren, indem Sie das `var` Schlüsselwort verwenden:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Methode, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde `let` in modernen Versionen von JavaScript erstellt, ein neues Schlüsselwort zur Erstellung von Variablen, das etwas anders funktioniert als `var` und dessen Probleme behebt.

Einige einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden sie entdecken, wenn Sie mehr über JavaScript erfahren (wenn Sie jetzt wirklich über sie lesen möchten, fühlen Sie sich frei, unsere [let Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) zu überprüfen).

Falls Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies wird nicht funktionieren, wenn Sie einzelne Zeilen in eine JavaScript-Konsole tippen, nur wenn Sie mehrere Zeilen JavaScript in einem Webdokument ausführen.

Dies funktioniert aufgrund des **Hoisting** — lesen Sie [var Hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für weitere Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` in dem obigen Beispiel durch `let` ersetzen würden, würde ein Fehler auftreten. Dies ist eine gute Sache — eine Variable zu deklarieren, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwerer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie dies nicht. Folgendes würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das folgende würde einen Fehler in der zweiten Zeile auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen Folgendes tun:

```js
let myName = "Chris";
myName = "Bob";
```

Dies ist wiederum eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen mehrfach zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstatt `var`. Es gibt keinen Grund mehr, `var` zu verwenden, da alle modernen Browser seit 2015 `let` unterstützen, es sei denn, Sie schreiben explizit Unterstützung für alte Browser.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie es, jeden der hier erwähnten Codeblöcke als Ganzes zu kopieren und einzufügen. Es gibt ein [Merkmal in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei dem die Neudeklaration von Variablen mit `let` und `const` erlaubt ist:
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // Als ein Eingabewert: SyntaxError: Identifier 'myName' has already been declared
>
> > let myName = "Chris";
> > let myName = "Bob";
> // Als zwei Eingaben: beide erfolgreich
> ```

## Aktualisieren einer Variablen

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in die Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Eine Anmerkung zu Variablenbenennungsregeln

Sie können eine Variable fast beliebig benennen, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich nur auf die Verwendung von lateinischen Zeichen (0-9, a-z, A-Z) und dem Unterstrich beschränken.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen könnten oder für ein internationales Publikum schwer verständlich wären.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — diese werden in bestimmten JavaScript-Konstruktionen verwendet, um spezifische Dinge zu bedeuten, und könnten verwirrend sein.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Dies ist nicht erlaubt und führt zu einem Fehler.
- Eine sichere Konvention zur Benennung ist [lower camel case](/de/docs/Glossary/camel_case), bei der Sie mehrere Wörter zusammenfügen und den ganzen ersten Wortteil in Kleinbuchstaben schreiben und die nachfolgenden Wörter großschreiben. Wir haben diese Konvention bisher in unserem Artikel für unsere Variablennamen verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten beschreiben, die sie enthalten. Verwenden Sie keine einzelnen Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitive — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, reservierte JavaScript-Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript bilden! Sie können also keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als verschiedene Codeelemente, und daher erhalten Sie Fehler.

> [!NOTE]
> Eine ziemlich vollständige Liste reservierter Schlüsselwörter, die zu vermeiden sind, finden Sie unter [Lexical grammar — keywords](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie jetzt, einige weitere Variablen mit den oben genannten Richtlinien zu erstellen.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt beschreiben wir diese kurz, und in zukünftigen Artikeln werden Sie mehr darüber erfahren.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch ganze Zahlen genannt) oder Dezimalzahlen wie 2,456 (auch Fließkommazahlen genannt). Sie müssen in JavaScript keine Variablentypen deklarieren, anders als in einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert zuweisen, fügen Sie keine Anführungszeichen hinzu:

```js
let myAge = 17;
```

### Zeichenketten

Zeichenketten sind Textteile. Wenn Sie einer Variablen einen Zeichenkettenwert zuweisen, müssen Sie sie in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, sie als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind true/false-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der Code ausgeführt wird, wie es angebracht ist. Ein einfaches Beispiel wäre also:

```js
let iAmAlive = true;
```

Während dies in Wirklichkeit mehr so verwendet würde:

```js
let test = 6 < 3;
```

Dies verwendet den "kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt es `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden im späteren Verlauf des Kurses viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert nach ihrem Standort im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des Werts entspricht, den Sie zurückgeben möchten. Vielleicht ist Ihnen aufgefallen, dass Arrays in JavaScript nullbasiert sind: Das erste Element befindet sich an Index 0.

Um mehr zu lernen, sehen Sie sich unseren Artikel über [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) an.

### Objekte

In der Programmierung ist ein Objekt eine Code-Struktur, die ein reales Objekt modelliert. Sie können ein einfaches Objekt haben, das eine Schachtel darstellt und Informationen über deren Breite, Länge und Höhe enthält, oder Sie können ein Objekt haben, das eine Person darstellt und Informationen über deren Namen, Größe, Gewicht, die Sprache, die sie sprechen, wie man sie anspricht und mehr enthält.

Versuchen Sie, die folgende Zeile in die Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

Weitere Informationen zu diesem Thema finden Sie im Modul [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects).

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Zeichenketten, Arrays usw.).

Wenn Sie beispielsweise eine Variable deklarieren und ihr einen in Anführungszeichen eingeschlossenen Wert zuweisen, behandelt der Browser die Variable als Zeichenkette:

```js
let myString = "Hello";
```

Auch wenn der in Anführungszeichen gesetzte Wert nur Ziffern enthält, ist es immer noch eine Zeichenkette — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier obigen Zeilen nacheinander in Ihre Konsole einzugeben, und sehen Sie sich die Ergebnisse an. Sie werden feststellen, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variablen zurück, die Sie danach eingeben. Beim ersten Aufruf sollte er `string` zurückgeben, da die `myNumber`-Variable zu diesem Zeitpunkt die Zeichenkette `'500'` enthält. Schauen Sie nach, was er beim zweiten Mal zurückgibt, wenn Sie ihn aufrufen.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie müssen sie initialisieren, wenn Sie sie deklarieren
- Sie können ihnen keinen neuen Wert zuweisen, nachdem Sie sie initialisiert haben.

Zum Beispiel können Sie mit `let` eine Variable Deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, wird ein Fehler angezeigt:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch _Neuzuweisung_ der Variablen genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, wird ein Fehler angezeigt:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl eine Konstante in JavaScript immer denselben Wert bezeichnen muss, Sie den Inhalt des Werts, den er bezeichnet, ändern können. Dies ist kein nützlicher Unterschied für einfache Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, weil die Konstante trotz der Änderung des Inhalts des Objekts weiterhin auf dasselbe Objekt hinweist:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann `const` und wann `let` verwenden

Wenn man mit `const` nicht so viel machen kann wie mit `let`, warum sollte man es dann statt `let` bevorzugen? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, signalisiert dies jedem, der Ihren Code liest, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn dieser Name gesehen wird, ist klar, worauf er sich bezieht.

In diesem Kurs befolgen wir das folgende Prinzip darüber, wann `let` und wann `const` verwendet werden sollte:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, wenn Sie eine Variable bei der Deklaration initialisieren können und sie später nicht neu zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen wissen und wie man sie erstellt. Im nächsten Artikel werden wir uns ausführlicher mit Zahlen beschäftigen und uns ansehen, wie man in JavaScript einfache Mathematik betreibt.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Maths", "Learn/JavaScript/First_steps")}}
