---
title: Speichern der benötigten Informationen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nach der Lektüre der letzten paar Artikel sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptfunktionen auf hoher Ebene aussehen. In diesem Artikel werden wir die Grundlagen näher betrachten und uns mit den grundlegendsten Bausteinen von JavaScript beschäftigen — den Variablen.

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
          <li>Deklarieren von Variablen mit <code>let</code>, Initialisieren mit Werten und Neuzuweisung mit neuen Werten.</li>
          <li>Erstellen von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann man welche verwendet.</li>
          <li>Best Practices zur Variablenbenennung.</li>
          <li>Die verschiedenen Arten von Werten, die in Variablen gespeichert werden können — Strings, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Tool zugreifen können).

## Was ist eine Variable?

Eine Variable ist ein Behälter für einen Wert, wie eine Zahl, die wir in einer Summe verwenden könnten, oder ein String, den wir als Teil eines Satzes verwenden könnten.

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

In diesem Beispiel wird beim Drücken der Schaltfläche etwas Code ausgeführt. Erstens ändert es den Text auf der Schaltfläche selbst. Zweitens zeigt es eine Nachricht über die Anzahl der Male an, die die Schaltfläche gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer die Schaltfläche drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum das so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel ohne eine Variable schreiben würden, um die Zählung zu speichern. Es würde ungefähr so aussehen:

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

Sie verstehen vielleicht noch nicht vollständig die Syntax, die wir verwenden (noch nicht!), aber Sie sollten die Idee verstehen können. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft die Schaltfläche geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn, und je mehr Sie über JavaScript lernen, desto mehr werden sie zur zweiten Natur.

Eine besondere Sache an Variablen ist, dass sie nahezu alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar komplette Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber lernen, während Sie fortschreiten.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist eine wichtige Unterscheidung. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sie sich wie kleine Pappkartons vorstellen, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei 3-dimensionalen Pappkartons, die Beispiele für JavaScript-Variablen zeigen. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Deklarieren einer Variablen

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies Deklarieren der Variablen. Dazu geben Sie das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variable geben möchten, ein:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in der Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit Ihren eigenen Namenswahlen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code kann für einzelne Zeilen korrekt funktionieren, aber wahrscheinlich nicht, wenn Sie mehrere Codezeilen zusammen schreiben. Versuchen Sie, sich anzugewöhnen, es einzuschließen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung existieren, indem Sie einfach den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Derzeit haben sie keinen Wert; sie sind leere Behälter. Wenn Sie die Variablennamen eingeben, sollte ein Wert von `undefined` zurückgegeben werden. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — sie sind sehr unterschiedliche Dinge. In der oben gesehenen Box-Analogie würde nicht existieren bedeuten, dass es keine Box (Variable) gibt, in die ein Wert gehen kann. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber keinen Wert darin.

## Initialisieren einer Variablen

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Dies tun Sie, indem Sie den Variablennamen eingeben, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihm geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie, jetzt zu der Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten den Wert, den Sie der Variablen zugewiesen haben, in der Konsole zurückgegeben sehen, um es zu bestätigen, in jedem Fall. Wieder können Sie Ihre Variablenwerte zurückgeben, indem Sie ihren Namen in die Konsole eingeben — versuchen Sie diese erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, wie dies:

```js
let myDog = "Rover";
```

Dies werden Sie wahrscheinlich die meiste Zeit tun, da es schneller ist als die beiden Aktionen auf zwei getrennten Zeilen auszuführen.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch eine andere Möglichkeit sehen, Variablen zu deklarieren, unter Verwendung des Schlüsselworts `var`:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Deshalb wurde in modernen Versionen von JavaScript `let` erstellt, ein neues Schlüsselwort zum Erstellen von Variablen, das etwas anders funktioniert als `var`, um dessen Probleme zu beheben.

Ein paar einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden beginnen, sie zu entdecken, während Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt darüber lesen möchten, fühlen Sie sich frei, unsere [let Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) zu überprüfen).

Zum Beispiel, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` nach ihrer Initialisierung deklarieren und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies wird nicht funktionieren, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur, wenn Sie mehrere Zeilen JavaScript in einem Webdokument ausführen.

Dies funktioniert aufgrund von **Hoisting** — lesen Sie [var Hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir im obigen Beispiel `var` durch `let` ersetzen, würde es mit einem Fehler fehlschlagen. Dies ist eine gute Sache — das Deklarieren einer Variablen nach ihrer Initialisierung führt zu verwirrendem, schwer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Das Folgende würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das Folgende würde beim zweiten Aufruf einen Fehler auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch dies ist eine vernünftige Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und anderen Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstatt `var`. Sofern Sie nicht ausdrücklich Unterstützung für alte Browser schreiben, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, ziehen Sie es vor, jeden der Codeblöcke hier als Ganzes zu kopieren und einzufügen. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der Variable-Neu-Deklarationen mit `let` und `const` erlaubt sind:
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

## Aktualisieren einer Variablen

Nachdem eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihm einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Hinweis zu den Regeln zur Variablennamenvergabe

Sie können eine Variable so ziemlich alles nennen, was Sie möchten, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich darauf beschränken, nur lateinische Zeichen (0-9, a-z, A-Z) und das Unterstrich-Zeichen zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein könnten.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstruktionen verwendet, um bestimmte Dinge zu bedeuten, und kann daher verwirrend sein.
- Verwenden Sie keine Zahlen zu Beginn von Variablen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention ist {{Glossary("camel_case", "Lower Camel Case")}}, bei der Sie mehrere Wörter zusammenfügen, wobei Sie Kleinbuchstaben für das gesamte erste Wort und dann Großbuchstaben für die folgenden Wörter verwenden. Wir haben dies bisher in unseren Variablennamen in dem Artikel verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die Daten, die sie enthalten, beschreiben. Verwenden Sie nicht einfach nur einzelne Buchstaben/Zahlen oder lange Sätze.
- Variablen sind case-sensitive — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript bilden! Sie können also keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als unterschiedliche Codeelemente, und Sie erhalten Fehler.

> [!NOTE]
> Sie können eine ziemlich vollständige Liste der reservierten Schlüsselwörter, die vermieden werden sollten, unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) finden.

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

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben. In zukünftigen Artikeln werden Sie mehr im Detail darüber lernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch ganze Zahlen oder Integer genannt) oder Dezimalzahlen wie 2.456 (auch Float oder Gleitkommazahlen genannt). Sie müssen in JavaScript keine Variablentypen deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert geben, schließen Sie ihn nicht in Anführungszeichen ein:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen String-Wert geben, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als einen anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind Wahr-/Falschwerte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, wonach Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre also:

```js
let iAmAlive = true;
```

Wo es in der Realität eher so verwendet würde:

```js
let test = 6 < 3;
```

Dies verwendet den "kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie man erwarten kann, gibt es `false` zurück, weil 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einziges Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert durch ihre Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des gewünschten Wertes im Array entspricht. Sie haben vielleicht bemerkt, dass Arrays in JavaScript null-basierte Indizes verwenden: Das erste Element befindet sich an der Position 0.

### Objekte

Beim Programmieren ist ein Objekt eine Code-Struktur, die ein reales Objekt modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über ihre Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, ihre Größe, ihr Gewicht, welche Sprache sie sprechen, wie man sie begrüßt und mehr enthält.

Versuchen Sie die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie, im Gegensatz zu einigen anderen Sprachen, den Datentyp einer Variablen nicht angeben müssen (Zahlen, Strings, Arrays usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen Wert in Anführungszeichen geben, behandelt der Browser die Variable als String:

```js
let myString = "Hello";
```

Selbst wenn der Wert in Anführungszeichen nur Ziffern enthält, ist es dennoch ein String — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier obigen Zeilen einzeln in Ihre Konsole einzugeben und sehen Sie sich die Ergebnisse an. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variablen zurück, die Sie danach eingeben. Ein erstes Mal sollte er `string` zurückgeben, da zu diesem Zeitpunkt die Variable `myNumber` einen String, `'500'`, enthält. Sehen Sie, was er beim zweiten Aufruf zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie müssen sie beim Deklarieren initialisieren
- Sie können ihnen keinen neuen Wert zuweisen, nachdem Sie sie initialisiert haben.

Zum Beispiel, mit `let` können Sie eine Variable ohne Initialisierung deklarieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, erhalten Sie einen Fehler:

```js example-bad
const count;
```

Ähnlich können Sie mit `let` eine Variable initialisieren und dann einen neuen Wert zuweisen (dies wird auch als _Neuzuweisung_ der Variablen bezeichnet):

```js
let count = 1;
count = 2;
```

Wenn Sie dies mit `const` versuchen, erhalten Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass obwohl eine Konstante in JavaScript immer denselben Wert bezeichnen muss, Sie den Inhalt des Wertes, den sie bezeichnet, ändern können. Dies ist kein nützlicher Unterschied für einfache Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, da obwohl sich der Inhalt des Objekts geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann Sie `const` verwenden und wann `let`

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum würden Sie es dann vorziehen, `const` anstelle von `let` zu verwenden? In der Tat ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, teilt es jedem, der Ihren Code liest, mit, dass dieser Name niemals einem anderen Wert zugewiesen wird. Immer wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs nehmen wir folgendes Prinzip an, wann `let` und wann `const` verwendet wird:

_Verwenden Sie `const`, wann immer Sie können, und `let`, wenn Sie müssen._

Das bedeutet, dass Sie, wenn Sie eine Variable initialisieren können, wenn Sie sie deklarieren und sie später nicht erneut zuweisen müssen, es zu einer Konstante machen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_variables).

## Zusammenfassung

Inzwischen sollten Sie eine angemessene Menge über JavaScript-Variablen und wie man sie erstellt, wissen. Im nächsten Artikel konzentrieren wir uns detaillierter auf Zahlen und schauen uns an, wie man einfache Mathematik in JavaScript ausführt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
