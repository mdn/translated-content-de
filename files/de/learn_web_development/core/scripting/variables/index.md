---
title: Speicherung der benötigten Informationen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting")}}

Nachdem Sie die letzten Artikel gelesen haben, sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es neben anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer höheren Perspektive aussehen. In diesem Artikel widmen wir uns den wirklichen Grundlagen und schauen uns an, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

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
          <li>Deklaration von Variablen mit <code>let</code>, Initialisierung mit Werten und Neuzuweisung mit neuen Werten.</li>
          <li>Erstellung von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann Sie welche verwenden sollten.</li>
          <li>Beste Praktiken zur Benennung von Variablen.</li>
          <li>Die verschiedenen Arten von Werten, die in Variablen gespeichert werden können — Zeichenfolgen, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Entwickler-Werkzeuge im Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen zum Zugriff auf dieses Tool).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder eine Zeichenfolge, die wir als Teil eines Satzes verwenden könnten.

### Beispiel für eine Variable

Sehen wir uns ein Beispiel an:

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

In diesem Beispiel führt das Drücken der Schaltfläche etwas Code aus. Zuerst wird der Text auf der Schaltfläche selbst geändert. Zweitens zeigt es eine Nachricht mit der Anzahl der Male, die die Schaltfläche gedrückt wurde. Die Zahl wird in einer Variable gespeichert. Jedes Mal, wenn der Benutzer die Schaltfläche drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne Variable

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

Vielleicht verstehen Sie die verwendete Syntax (noch) nicht vollständig, aber Sie sollten eine Idee bekommen. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft die Schaltfläche geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn und je mehr Sie über JavaScript lernen, desto mehr werden sie zur zweiten Natur.

Eine Besonderheit von Variablen ist, dass sie fast alles enthalten können — nicht nur Zeichenfolgen und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden im Laufe der Zeit mehr darüber erfahren.

> [!NOTE]
> Wir sagen, dass Variablen Werte enthalten. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sich diese wie kleine Pappkartons vorstellen, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei dreidimensionalen Pappkartons, die Beispiele für JavaScript-Variablen zeigen. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Deklaration einer Variable

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen das Deklaration der Variable. Dazu tippen wir das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variable geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen namens `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit Namen Ihrer Wahl zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code könnte korrekt funktionieren bei einzelnen Zeilen, aber wahrscheinlich nicht, wenn Sie mehrere Zeilen Code zusammen schreiben. Versuchen Sie sich anzugewöhnen, es zu verwenden.

Sie können testen, ob diese Werte nun in der Ausführungsumgebung existieren, indem Sie einfach den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Derzeit haben sie keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` zurückerhalten. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, dies einzugeben:

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie eine Variable, die existiert, aber keinen definierten Wert hat, nicht mit einer Variable, die überhaupt nicht existiert — das sind sehr unterschiedliche Dinge. In der oben gezeigten Karton-Analogie würde das Nichtexistieren bedeuten, dass es keinen Karton (Variable) gibt, in den ein Wert eingelegt werden kann. Kein definierter Wert würde bedeuten, dass es zwar einen Karton gibt, er aber keinen Wert enthält.

## Initialisierung einer Variable

Sobald Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Dazu tippen Sie den Variablennamen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie jetzt, in die Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten den Wert, den Sie der Variablen zugewiesen haben, in der Konsole zurückerhalten, um ihn in jedem Fall zu bestätigen. Erneut können Sie Ihre Variablenwerte abrufen, indem Sie deren Namen in die Konsole eingeben — versuchen Sie diese erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Das ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen in zwei separaten Zeilen zu erledigen.

## Eine Anmerkung zu var

Sie werden wahrscheinlich auch auf eine andere Möglichkeit stoßen, Variablen zu deklarieren, wobei das Schlüsselwort `var` verwendet wird:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. So wurde `let` in modernen Versionen von JavaScript erstellt, ein neues Schlüsselwort für die Erstellung von Variablen, das etwas anders funktioniert als `var` und seine Probleme im Prozess behebt.

Einige einfache Unterschiede werden unten erklärt. Wir werden nicht auf alle Unterschiede jetzt eingehen, aber Sie werden sie entdecken, während Sie mehr über JavaScript lernen (wenn Sie jetzt wirklich darüber lesen möchten, können Sie sich gerne unsere [Referenzseite zu let](/de/docs/Web/JavaScript/Reference/Statements/let) ansehen).

Zunächst einmal, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` nach ihrer Initialisierung deklarieren, und es wird immer noch funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, sondern nur, wenn Sie mehrere JavaScript-Zeilen in einem Webdokument ausführen.

Das funktioniert wegen des **Hoisting** — lesen Sie [var hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für weitere Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` im obigen Beispiel durch `let` ersetzen, würde es mit einem Fehler fehlschlagen. Das ist eine gute Sache — eine Variable zu deklarieren, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwerer zu verstehendem Code.

Zweitens, wenn Sie `var` verwenden, können Sie die gleiche Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Das folgende würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das folgende würde im zweiten Zeile einen Fehler auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten dies stattdessen tun:

```js
let myName = "Chris";
myName = "Bob";
```

Wiederum ist dies eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir Ihnen, `let` in Ihrem Code zu verwenden, anstatt `var`. Sofern Sie nicht explizit Unterstützung für alte Browser schreiben, gibt es keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, sollten Sie jeden der hier aufgeführten Codeblöcke lieber als Ganzes kopieren und einfügen. Es gibt ein [Feature in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei dem Variablendeklarationen mit `let` und `const` erlaubt sind:
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

## Aktualisierung einer Variable

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihr einen anderen Wert zuweisen. Versuchen Sie, die folgenden Zeilen in Ihrer Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Exkurs zu den Regeln der Variablennamen

Sie können eine Variable fast beliebig benennen, aber es gibt Einschränkungen. In der Regel sollten Sie sich darauf beschränken, nur lateinische Zeichen (0-9, a-z, A-Z) und den Unterstrich zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer verständlich sein können.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — diese werden in bestimmten JavaScript-Konstrukten verwendet, um bestimmte Dinge zu bedeuten, was verwirrend sein kann.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Das ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention ist {{Glossary("camel_case", "Kamel-Notation")}}, bei der Sie mehrere Wörter zusammenfügen, wobei Sie das gesamte erste Wort klein schreiben und dann die nachfolgenden Wörter großschreiben. Wir haben diese für unsere Variablennamen im Artikel bisher verwendet.
- Machen Sie Variablennamen eingängig, sodass sie die Daten beschreiben, die sie enthalten. Verwenden Sie keine Einzelbuchstaben/Zahlen oder lange Redewendungen.
- Variablen sind case-sensitiv — das heißt, `myage` ist eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript-Reservierte Wörter als Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Sie können also keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als verschiedene Codeelemente und Sie erhalten Fehler.

> [!NOTE]
> Eine ziemlich vollständige Liste von reservierten Schlüsselwörtern, die Sie vermeiden sollten, finden Sie unter [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

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

Versuchen Sie jetzt, ein paar weitere Variablen zu erstellen, und achten Sie dabei auf die oben genannten Hinweise.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt beschreiben wir diese kurz, dann werden Sie in zukünftigen Artikeln mehr darüber erfahren.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Ganzzahlen genannt) oder Dezimalzahlen wie 2.456 (auch Gleitkommazahlen genannt). Anders als in einigen anderen Programmiersprachen müssen Sie in JavaScript keine Variablentypen deklarieren. Wenn Sie einer Variablen einen Zahlenwert geben, verwenden Sie keine Anführungszeichen:

```js
let myAge = 17;
```

### Zeichenfolgen

Zeichenfolgen sind Textstücke. Wenn Sie einer Variablen einen Zeichenfolgenwert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind Wahr/Falsch-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden allgemein verwendet, um eine Bedingung zu testen, nach der Code entsprechend ausgeführt wird. Ein einfaches Beispiel wäre:

```js
let iAmAlive = true;
```

Während es in der Realität eher so verwendet würde:

```js
let test = 6 < 3;
```

Dies verwendet den "Kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, gibt es `false` zurück, da 6 nicht kleiner als 3 ist! Sie werden später im Kurs mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckigen Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihrer Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert nach ihrer Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern spezifizieren einen Indexwert, der der Position des gewünschten Wertes entspricht. Sie haben vielleicht bemerkt, dass Arrays in JavaScript nullbasiert sind: Das erste Element befindet sich an Index 0.

### Objekte

In der Programmierung ist ein Objekt eine Code-Struktur, die ein reales Objekt modelliert. Sie können ein Objekt haben, das eine Box repräsentiert und Informationen über ihre Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person repräsentiert und Daten über ihren Namen, ihre Größe, ihr Gewicht, welche Sprache sie sprechen, wie man sie auf etwas hinweist und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen beim Deklarieren einer Variable nicht angeben müssen, welche Art von Daten sie enthalten wird (Zahlen, Zeichenfolgen, Arrays usw.).

Wenn Sie beispielsweise eine Variable deklarieren und ihr einen in Anführungszeichen eingeschlossenen Wert zuweisen, behandelt der Browser die Variable als Zeichenfolge:

```js
let myString = "Hello";
```

Selbst wenn der in Anführungszeichen eingeschlossene Wert nur Ziffern ist, handelt es sich immer noch um eine Zeichenfolge — nicht um eine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier oben genannten Zeilen nacheinander in Ihre Konsole einzugeben und sehen Sie, was die Ergebnisse sind. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variable zurück, die Sie nach ihm eingeben. Beim ersten Aufruf sollte er `string` zurückgeben, da zu diesem Zeitpunkt die Variable `myNumber` eine Zeichenfolge `'500'` enthält. Schauen Sie, was er beim zweiten Aufruf zurückgibt.

## Konstanten in JavaScript

Neben Variablen können Sie auch Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie sie beim Deklarieren initialisieren müssen.
- Sie ihnen keinen neuen Wert zuweisen können, nachdem Sie sie initialisiert haben.

Zum Beispiel können Sie mit `let` eine Variable deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count;
```

In ähnlicher Weise können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch _Neuzuordnung_ der Variablen genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl eine Konstante in JavaScript immer denselben Wert benennen muss, Sie den Inhalt des Wertes ändern können, den sie benennt. Dies ist keine nützliche Unterscheidung für einfache Typen wie Zahlen oder Booleans, aber überlegen Sie sich ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines mit `const` deklarierten Objekts aktualisieren, hinzufügen oder entfernen, da, obwohl der Inhalt des Objekts geändert wurde, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann verwendet man const und wann let

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum würden Sie es dann lieber verwenden als `let`? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code betrachtet, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs halten wir uns an das folgende Prinzip darüber, wann `let` und wann `const` verwendet werden soll:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, dass, wenn Sie eine Variable beim Deklarieren initialisieren können und sie später nicht erneut zuweisen müssen, machen Sie sie zu einer Konstante.

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen und deren Erstellung wissen. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting")}}
