---
title: Die Informationen speichern, die Sie benötigen — Variablen
short-title: Variables
slug: Learn_web_development/Core/Scripting/Variables
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Nach dem Lesen der letzten Artikel sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale auf hoher Ebene aussehen. In diesem Artikel werden wir die grundlegenden Grundlagen behandeln und untersuchen, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

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
          <li>Deklarieren von Variablen mit <code>let</code>, Initialisieren mit Werten und erneutes Zuweisen neuer Werte.</li>
          <li>Erstellen von Konstanten mit <code>const</code>.</li>
          <li>Der Unterschied zwischen Variablen und Konstanten und wann man welche verwendet.</li>
          <li>Best Practices zur Benennung von Variablen.</li>
          <li>Die unterschiedlichen Arten von Werten, die in Variablen gespeichert werden können — Strings, Zahlen, Booleans, Arrays und Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Laufe dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist der beste Ort, um Ihren Beispielcode einzugeben, die JavaScript-Konsole Ihres Browsers (siehe [Was sind Entwicklerwerkzeuge für Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen, wie Sie auf dieses Werkzeug zugreifen können).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder ein String, den wir als Teil eines Satzes verwenden könnten.

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

In diesem Beispiel führt das Drücken des Knopfes dazu, dass ein Code ausgeführt wird. Erstens wird der Text auf dem Knopf selbst geändert. Zweitens wird eine Nachricht darüber angezeigt, wie oft der Knopf gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer den Knopf drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zum Speichern der Anzahl zu verwenden. Es würde in etwa so aussehen:

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

Möglicherweise verstehen Sie die von uns verwendete Syntax (noch) nicht vollständig, aber Sie sollten eine Idee davon bekommen können. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft der Knopf geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen ergeben einfach Sinn, und wenn Sie mehr über JavaScript lernen, werden sie zur zweiten Natur.

Eine besondere Sache an Variablen ist, dass sie fast alles enthalten können — nicht nur Strings und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden im Laufe der Zeit mehr darüber lernen.

> [!NOTE]
> Wir sagen, dass Variablen Werte enthalten. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sich diese wie kleine Pappkartons vorstellen, in denen Sie Dinge aufbewahren können.

![Ein Screenshot von drei dreidimensionalen Pappkartons, die Beispiele für JavaScript-Variablen anzeigen. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen repräsentieren. Die Beispielwerte sind "Bob", true und 35.](boxes.png)

## Deklarieren einer Variable

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, wir nennen dies die Deklaration der Variable. Dazu tippen Sie das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variable geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen mit den Namen `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine (oder zwei) Variablen mit Ihren eigenen Namenswahlen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code funktioniert möglicherweise korrekt für einzelne Zeilen, aber wahrscheinlich nicht, wenn Sie mehrere Zeilen Code zusammen schreiben. Versuchen Sie, sich an den Gebrauch zu gewöhnen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung existieren, indem Sie einfach den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Sie haben derzeit keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie den Wert `undefined` zurückbekommen. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie Folgendes einzugeben:

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die gar nicht existiert — sie sind sehr unterschiedliche Dinge. Im oben gezeigten Boxenanalogon würde nicht existieren bedeuten, dass es keine Box (Variable) gibt, in die ein Wert hineingehen kann. Kein definierter Wert würde bedeuten, dass es eine Box gibt, aber sie hat keinen Wert darin.

## Initialisieren einer Variable

Sobald Sie eine Variable deklariert haben, können Sie ihr einen Wert zuweisen. Sie machen dies, indem Sie den Variablennamen tippen, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihr geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie jetzt, in die Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten den von Ihnen zugewiesenen Wert für jede Variable in der Konsole zurückgeben sehen, um dies in jedem Fall zu bestätigen. Auch können Sie Ihre Variablenwerte zurückgeben, indem Sie ihren Namen in die Konsole eingeben — versuchen Sie diese noch einmal:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, so:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist, als die beiden Aktionen auf zwei separate Zeilen zu verteilen.

## Eine Bemerkung zu var

Sie werden wahrscheinlich auch eine andere Möglichkeit sehen, Variablen zu deklarieren, indem Sie das `var`-Schlüsselwort verwenden:

```js
var myName;
var myAge;
```

Als JavaScript erstmals erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde `let` in modernen Versionen von JavaScript eingeführt, ein neues Schlüsselwort zum Erstellen von Variablen, das etwas anders funktioniert als `var` und dessen Probleme im Prozess behebt.

Einige einfache Unterschiede werden unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden sie nach und nach entdecken, wenn Sie mehr über JavaScript lernen (wenn Sie jetzt wirklich darüber lesen möchten, können Sie gerne unsere [let-Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) anschauen).

Anfangs, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn Sie einzelne Zeilen in eine JavaScript-Konsole eingeben, nur beim Ausführen mehrerer Zeilen von JavaScript in einem Webdokument.

Dies funktioniert wegen **Hoisting** — lesen Sie [var Hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für mehr Details zu diesem Thema.

Hoisting funktioniert nicht mehr mit `let`. Wenn wir `var` in dem obigen Beispiel durch `let` ersetzen, würde es mit einem Fehler fehlschlagen. Das ist gut so — eine Variable zu deklarieren, nachdem Sie sie initialisiert haben, führt zu verwirrendem, schwerer verständlichen Code.

Zweitens, wenn Sie `var` verwenden, können Sie die gleiche Variable so oft deklarieren, wie Sie möchten, aber mit `let` können Sie das nicht. Folgendes würde funktionieren:

```js
var myName = "Chris";
var myName = "Bob";
```

Aber das Folgende würde einen Fehler in der zweiten Zeile auslösen:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Sie müssten stattdessen dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch dies ist eine sinnvolle Sprachentscheidung. Es gibt keinen Grund, Variablen neu zu deklarieren — das macht die Sache nur verwirrender.

Aus diesen und anderen Gründen empfehlen wir, `let` in Ihrem Code zu verwenden, anstelle von `var`. Es sei denn, Sie schreiben explizit Unterstützung für alte Browser, es gibt keinen Grund mehr, `var` zu verwenden, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, kopieren und fügen Sie am besten jedes der Codeblöcke hier als Ganzes ein. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der variable Deklarationen mit `let` und `const` erlaubt sind:
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

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihm einen anderen Wert zuweisen. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Eine Anmerkung zu den Regeln für die Variablenbenennung

Sie können eine Variable so ziemlich nennen, wie Sie möchten, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich auf die Verwendung von lateinischen Zeichen (0-9, a-z, A-Z) und dem Unterstrich beschränken.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder von einem internationalen Publikum schwer zu verstehen sein könnten.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge zu bedeuten und könnte verwirrend werden.
- Verwenden Sie keine Zahlen am Anfang von Variablennamen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Ein sicheres Konventionsbeispiel ist {{Glossary("camel_case", "lower camel case")}}, bei dem Sie

sonit zusammenhängend mehrere Wörter verwenden, indem Sie das gesamte erste Wort klein schreiben und dann die nachfolgenden Wörter großschreiben. Wir haben dies bisher für unsere Variablennamen im Artikel verwendet.

- Machen Sie Variablennamen intuitiv, damit sie die Daten beschreiben, die sie enthalten. Verwenden Sie nicht nur einzelne Buchstaben/Zahlen oder lange Sätze.
- Variablen sind case-sensitiv — daher ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript reservierte Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Also, Sie können keine Wörter wie `var`, `function`, `let`, und `for` als Variablennamen verwenden. Browser erkennen sie als unterschiedliche Codeelemente, daher bekommen Sie Fehler.

> [!NOTE]
> Sie können eine relativ vollständige Liste reservierter Schlüsselwörter, die Sie vermeiden sollten, unter [Lexical grammar — keywords](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) finden.

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

Versuchen Sie, jetzt mit den obigen Richtlinien einige weitere Variablen zu erstellen.

## Variable Typen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben, bevor Sie in zukünftigen Artikeln mehr darüber erfahren.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch als Ganzzahlen bezeichnet) oder Dezimalzahlen wie 2.456 (auch als Fließkommazahlen oder Gleitkommazahlen bezeichnet). Im Gegensatz zu einigen anderen Programmiersprachen müssen Sie Variablentypen in JavaScript nicht deklarieren. Wenn Sie einer Variablen einen Zahlenwert zuweisen, benutzen Sie keine Anführungszeichen:

```js
let myAge = 17;
```

### Strings

Strings sind Textstücke. Wenn Sie einer Variablen einen string-Wert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Booleans

Booleans sind wahr/falsch-Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden allgemein verwendet, um eine Bedingung zu testen, woraufhin entsprechender Code ausgeführt wird. Ein einfaches Beispiel wäre:

```js
let iAmAlive = true;
```

In der Realität würde es eher so verwendet werden:

```js
let test = 6 < 3;
```

Dies verwendet den "kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie erwarten würden, gibt das `false` zurück, weil 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren erfahren.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckige Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert durch deren Position im Array zugreifen. Versuchen Sie diese Zeilen:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Die eckigen Klammern spezifizieren einen Indexwert, der der Position des Wertes entspricht, den Sie zurückgeben möchten. Sie haben vielleicht bemerkt, dass Arrays in JavaScript nullindiziert sind: das erste Element befindet sich bei Index 0.

### Objekte

In der Programmierung ist ein Objekt eine Struktur von Code, die ein reales Objekt modelliert. Sie können ein Objekt haben, das eine Box darstellt und Informationen über dessen Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, Größe, Gewicht, welche Sprache sie spricht, wie man sie begrüßt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie im Gegensatz zu einigen anderen Sprachen nicht angeben müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, strings, Arrays, usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen Wert in Anführungszeichen zuweisen, behandelt der Browser die Variable als String:

```js
let myString = "Hello";
```

Selbst wenn der Wert, der in Anführungszeichen eingeschlossen ist, nur Ziffern sind, ist es immer noch ein string — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Versuchen Sie, die vier Zeilen oben nacheinander in Ihre Konsole einzugeben, und beobachten Sie die Ergebnisse. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dieser gibt den Datentyp der Variable zurück, die Sie danach eingeben. Das erste Mal, dass er aufgerufen wird, sollte `string` zurückgeben, da zu diesem Zeitpunkt die Variable `myNumber` einen string, `'500'`, enthält. Sehen Sie nach, was er beim zweiten Mal zurückgibt, wenn Sie ihn aufrufen.

## Konstanten in JavaScript

Zusätzlich zu Variablen können Sie Konstanten deklarieren. Diese sind wie Variablen, außer dass:

- Sie müssen sie initialisieren, wenn Sie sie deklarieren.
- Sie können ihnen keinen neuen Wert zuweisen, nachdem Sie sie initialisiert haben.

Beispielsweise können Sie mit `let` eine Variale deklarieren, ohne sie zu initialisieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count;
```

In ähnlicher Weise können Sie mit `let` eine Variable initialisieren und dann einen neuen Wert zuweisen (dies wird auch _neu zuweisen_ der Variablen genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, werden Sie einen Fehler sehen:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl eine Konstante in JavaScript immer denselben Wert bezeichnen muss, Sie den Inhalt des Wertes, den sie bezeichnet, ändern können. Dies ist für einfachere Typen wie Zahlen oder Booleans nicht nützlich, aber überlegen Sie sich ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines mit `const` deklarierten Objekts aktualisieren, hinzufügen oder entfernen, da, obwohl der Inhalt des Objekts sich geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann sollte man const und wann sollte man let verwenden

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum sollten Sie es dann lieber als `let` verwenden? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einen Wert zu benennen, sagt es jedem, der Ihren Code betrachtet, dass dieser Name niemals einem anderen Wert zugewiesen wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs verfolgen wir das folgende Prinzip, wann `let` und wann `const` verwendet werden soll:

_Verwenden Sie `const`, wenn Sie können, und `let`, wenn Sie müssen._

Das bedeutet, wenn Sie eine Variable initialisieren können, wenn Sie sie deklarieren, und sie später nicht neu zuweisen müssen, machen Sie sie zu einer Konstanten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Variablen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables).

## Zusammenfassung

Bis jetzt sollten Sie eine angemessene Menge über JavaScript-Variablen wissen und wie man sie erstellt. Im nächsten Artikel konzentrieren wir uns auf Zahlen im Detail und schauen, wie man grundlegende Mathematik in JavaScript ausführt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
