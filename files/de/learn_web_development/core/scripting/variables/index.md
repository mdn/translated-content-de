---
title: Speichern der benötigten Informationen — Variablen
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale auf hoher Ebene aussehen. In diesem Artikel gehen wir auf die wirklichen Grundlagen ein und betrachten, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was Variablen sind und warum sie so wichtig sind.</li>
          <li>Deklaration von Variablen mit <code>let</code>, Initialisierung mit Werten und Zuweisung neuer Werte.</li>
          <li>Erstellen von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann Sie welche verwenden sollten.</li>
          <li>Best Practices für die Benennung von Variablen.</li>
          <li>Die verschiedenen Arten von Werten, die in Variablen gespeichert werden können — Strings, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Benötigte Werkzeuge

Während dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort dafür die JavaScript-Konsole Ihres Browsers (siehe [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Tool zugreifen).

## Was ist eine Variable?

Eine Variable ist ein Behälter für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder ein String, den wir als Teil eines Satzes verwenden könnten.

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

In diesem Beispiel führt das Drücken des Buttons dazu, dass ein Code ausgeführt wird. Erstens wird der Text auf dem Button selbst geändert. Zweitens zeigt es eine Nachricht, wie oft der Button gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer den Button drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, überlegen wir, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um den Zähler zu speichern. Es würde am Ende ungefähr so aussehen:

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

Sie verstehen möglicherweise (noch) nicht vollständig die Syntax, die wir verwenden, aber Sie sollten die Idee nachvollziehen können. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft der Button geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Information gemerkt werden kann.

Variablen ergeben einfach Sinn, und wenn Sie mehr über JavaScript lernen, werden sie Ihnen in Fleisch und Blut übergehen.

Eine besondere Sache an Variablen ist, dass sie fast alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber lernen, wenn Sie weiter vorankommen.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Behälter für Werte. Sie können sich diese wie kleine Pappschachteln vorstellen, in die Sie Dinge legen können.

![Ein Screenshot von drei 3D-Pappschachteln, die Beispiele für JavaScript-Variablen demonstrieren. Jede Schachtel enthält hypothetische Werte, die verschiedene JavaScript-Datentypen darstellen. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Deklarieren einer Variablen

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, nennen wir dies das Deklarieren der Variablen. Dazu geben wir das Schlüsselwort `let` gefolgt von dem Namen ein, den Sie Ihrer Variablen geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine (oder zwei) Variable(n) mit Ihren eigenen Namenswahlen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte für einzelne Zeilen korrekt funktionieren, aber wahrscheinlich nicht, wenn Sie mehrere Codezeilen zusammen schreiben. Versuchen Sie, sich anzugewöhnen, es einzuschließen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung vorhanden sind, indem Sie einfach den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Sie haben derzeit keinen Wert; sie sind leere Behälter. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` zurückbekommen. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie es, indem Sie

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — das sind sehr unterschiedliche Dinge. In der obigen Analogie mit den Boxen würde nicht existieren bedeuten, dass es keine Box (Variable) für einen Wert gibt. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber sie hat keinen Wert darin.

## Initialisieren einer Variablen

Sobald Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen. Dies tun Sie, indem Sie den Variablennamen eingeben, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten. Beispielsweise:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie, jetzt zurück zur Konsole zu gehen und diese Zeilen einzugeben. Sie sollten in der Konsole in jedem Fall den Wert sehen, den Sie der Variablen zugewiesen haben. Sie können wieder Ihre Variablenwerte zurückgeben, indem Sie ihren Namen in die Konsole eingeben — versuchen Sie dies erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen in zwei separaten Zeilen zu machen.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch eine andere Möglichkeit sehen, Variablen zu deklarieren, indem Sie das Schlüsselwort `var` verwenden:

```js
var myName;
var myAge;
```

Als JavaScript erstmals entwickelt wurde, war dies der einzige Weg, um Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde in modernen Versionen von JavaScript `let` eingeführt, ein neues Schlüsselwort zur Erstellung von Variablen, das etwas anders funktioniert als `var` und dabei seine Probleme behebt.

Ein paar einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden sie anfangen zu entdecken, während Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt darüber lesen möchten, können Sie gerne unsere [Referenzseite zu let](/de/docs/Web/JavaScript/Reference/Statements/let) ansehen).

Für den Anfang, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird trotzdem funktionieren. Beispielsweise:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur, wenn Sie mehrere Zeilen JavaScript in einem Web-Dokument ausführen.

Dies funktioniert aufgrund von **Hoisting** — lesen Sie [var hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zum Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir im obigen Beispiel `var` durch `let` ersetzen würden, würde es mit einem Fehler fehlschlagen. Das ist eine gute Sache — indem man eine Variable deklariert, nachdem man sie initialisiert hat, führt das zu verwirrendem, schwerer verständlichem Code.

Zweitens, wenn Sie `var` verwenden, können Sie dieselbe Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie es nicht. Folgendes würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das Folgende würde bei der zweiten Zeile einen Fehler verursachen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch dies ist eine vernünftige Entscheidung der Sprache. Es gibt keinen Grund, Variablen erneut zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und anderen Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstatt `var`. Es sei denn, Sie schreiben explizit Unterstützung für alte Browser, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser seit 2015 `let` unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie das Kopieren und Einfügen jedes Codeblocks hier als Ganzes. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der Variablendeklarationen mit `let` und `const` erlaubt sind:
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

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert durch Zuweisung eines anderen Wertes ändern (oder aktualisieren). Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Eine Randbemerkung zu Variablennamensregeln

Sie können eine Variable fast nennen, wie Sie möchten, aber es gibt Einschränkungen. Allgemein sollten Sie nur lateinische Zeichen (0-9, a-z, A-Z) und den Unterstrich verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein könnten.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — das wird in bestimmten JavaScript-Konstrukten verwendet, um bestimmte Dinge zu bedeuten und könnte verwirrend werden.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Das ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention ist {{Glossary("camel_case", "lower camel case")}}, bei der Sie mehrere Wörter miteinander verbinden, wobei das ganze erste Wort klein geschrieben ist und die nachfolgenden Wörter groß geschrieben werden. Wir haben dies bisher für unsere Variablennamen im Artikel verwendet.
- Machen Sie Variablennamen intuitiv, sodass sie die enthaltenen Daten beschreiben. Verwenden Sie keine einzelnen Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitiv — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Variablennamen zu verwenden — damit meinen wir die Wörter, die die tatsächliche Syntax von JavaScript ausmachen! Sie können also keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als verschiedene Codeelemente, und daher werden Sie Fehler bekommen.

> [!NOTE]
> Eine ziemlich vollständige Liste von reservierten Schlüsselwörtern, die vermieden werden sollten, finden Sie unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie jetzt, einige weitere Variablen mit den oben genannten Hinweisen zu erstellen.

## Variablentypen

Es gibt einige verschiedene Datentypen, die wir in Variablen speichern können. In diesem Abschnitt beschreiben wir diese kurz; in zukünftigen Artikeln werden Sie mehr darüber im Detail lernen.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch als Integer bezeichnet) oder Dezimalzahlen wie 2.456 (auch als Fließkommazahlen oder Floats bezeichnet). Sie müssen keine Variablentypen in JavaScript deklarieren, im Gegensatz zu einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert zuweisen, schließen Sie keine Anführungszeichen ein:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen Stringwert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; ansonsten versucht JavaScript, es als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind true/false-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der der Code entsprechend ausgeführt wird. Ein einfacher Fall könnte also sein:

```js
let iAmAlive = true;
```

In Wirklichkeit würde es jedoch eher so verwendet werden:

```js
let test = 6 < 3;
```

Dies verwendet den "Kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt dies `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert an ihrer Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern geben einen Indexwert an, der der Position des Wertes entspricht, den Sie zurückgegeben bekommen möchten. Sie haben möglicherweise bemerkt, dass Arrays in JavaScript nullbasiert sind: Das erste Element befindet sich an Index 0.

### Objekte

In der Programmierung ist ein Objekt eine Struktur aus Code, die ein echtes Objekt modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über ihre Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, ihre Größe, ihr Gewicht, welche Sprache sie sprechen, wie man sie begrüßt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht festlegen müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Strings, Arrays usw.).

Wenn Sie zum Beispiel eine Variable deklarieren und ihr einen Wert in Anführungszeichen geben, behandelt der Browser die Variable als String:

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

Versuchen Sie, die vier obigen Zeilen nacheinander in Ihre Konsole einzugeben und sehen Sie, welche Ergebnisse Sie erhalten. Ihnen wird auffallen, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variablen zurück, die Sie danach eingeben. Das erste Mal, dass er aufgerufen wird, sollte er `string` zurückgeben, da zu diesem Zeitpunkt die Variable `myNumber` einen String, `'500'`, enthält. Schauen Sie, was er das zweite Mal zurückgibt, wenn Sie ihn aufrufen.

## Konstanten in JavaScript

Neben Variablen können Sie Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie sie beim Deklarieren initialisieren müssen
- Sie ihnen nach der Initialisierung keinen neuen Wert zuweisen können.

Zum Beispiel können Sie mit `let` eine Variable ohne Initialisierung deklarieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch _Umzuweisung_ der Variablen genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl eine Konstante in JavaScript immer denselben Wert benennen muss, Sie den Inhalt des Wertes ändern können, den sie benennt. Dies ist kein nützlicher Unterschied für einfache Typen wie Zahlen oder Booleans, aber betrachten Sie ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, da die Konstante immer noch auf dasselbe Objekt verweist, obwohl sich der Inhalt des Objekts geändert hat:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann `const` und wann `let` verwenden

Wenn Sie mit `const` nicht so viel machen können wie mit `let`, warum sollten Sie dann lieber `const` anstelle von `let` verwenden? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code ansieht, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs verwenden wir folgendes Prinzip darüber, wann man `let` und wann `const` verwendet:

_Verwenden Sie `const`, wenn Sie können, und `let`, wenn Sie müssen._

Das bedeutet, dass, wenn Sie eine Variable beim Deklarieren initialisieren können und sie später nicht erneut zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_variables).

## Zusammenfassung

Bis jetzt sollten Sie ein gutes Verständnis von JavaScript-Variablen und deren Erstellung haben. Im nächsten Artikel konzentrieren wir uns detaillierter auf Zahlen und darauf, wie man in JavaScript grundlegende Mathematik betreibt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
