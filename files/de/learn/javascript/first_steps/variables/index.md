---
title: Speichern der benötigten Informationen — Variablen
slug: Learn/JavaScript/First_steps/Variables
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Nach dem Lesen der letzten Artikel sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale auf hoher Ebene aussehen. In diesem Artikel gehen wir auf die grundlegenden Grundlagen ein und betrachten, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — Variablen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, und
        ein Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen von JavaScript-Variablen erlangen.</td>
    </tr>
  </tbody>
</table>

## Werkzeuge, die Sie benötigen

Im Verlauf dieses Artikels werden Sie aufgefordert, Codezeilen einzugeben, um Ihr Verständnis des Inhalts zu testen. Wenn Sie einen Desktop-Browser verwenden, ist die JavaScript-Konsole Ihres Browsers der beste Ort, um Ihren Beispielcode einzugeben (siehe [Was sind Entwicklerwerkzeuge im Browser?](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) für weitere Informationen zum Zugriff auf dieses Werkzeug).

## Was ist eine Variable?

Eine Variable ist ein Container für einen Wert, wie eine Zahl, die wir in einer Berechnung verwenden könnten, oder eine Zeichenkette, die wir als Bestandteil eines Satzes verwenden könnten.

### Variablenbeispiel

Schauen wir uns ein Beispiel an:

```html
<button id="button_A">Drücken Sie mich</button>
<h3 id="heading_A"></h3>
```

```js
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Versuchen Sie es erneut!";
  headingA.textContent = `${count} Klicks bisher`;
  count += 1;
};
```

{{ EmbedLiveSample('Variable_example', '100%', 120) }}

In diesem Beispiel wird beim Drücken der Taste ein Code ausgeführt. Erstens ändert sich der Text auf der Taste selbst. Zweitens wird eine Nachricht angezeigt, die die Anzahl der Male zeigt, die die Taste gedrückt wurde. Die Zahl wird in einer Variablen gespeichert. Jedes Mal, wenn der Benutzer die Taste drückt, wird die Zahl in der Variablen um eins erhöht.

### Ohne eine Variable

Um zu verstehen, warum dies so nützlich ist, denken wir darüber nach, wie wir dieses Beispiel schreiben würden, ohne eine Variable zu verwenden, um die Anzahl zu speichern. Es würde in etwa so aussehen:

```html example-bad
<button id="button_B">Drücken Sie mich</button>
<h3 id="heading_B"></h3>
```

```js example-bad
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  buttonB.textContent = "Versuchen Sie es erneut!";
  headingB.textContent = "1 Klick bisher";
};
```

{{ EmbedLiveSample('Without_a_variable', '100%', 120) }}

Sie verstehen möglicherweise nicht vollständig die Syntax, die wir verwenden (noch nicht!), aber Sie sollten die Idee verstehen können. Ohne eine Variable haben wir keine Möglichkeit zu wissen, wie oft die Taste geklickt wurde. Die Nachricht an den Benutzer wird schnell irrelevant, wenn keine Informationen gespeichert werden können.

Variablen machen einfach Sinn, und während Sie mehr über JavaScript lernen, werden sie zur zweiten Natur werden.

Eine besondere Sache an Variablen ist, dass sie fast alles enthalten können — nicht nur Zeichenketten und Zahlen. Variablen können auch komplexe Daten und sogar ganze Funktionen enthalten, um erstaunliche Dinge zu tun. Sie werden mehr darüber lernen, während Sie fortfahren.

> [!NOTE]
> Wir sagen, Variablen enthalten Werte. Dies ist ein wichtiger Unterschied. Variablen sind nicht die Werte selbst; sie sind Container für Werte. Sie können sie sich wie kleine Pappkartons vorstellen, in denen Sie Dinge speichern können.

![Ein Screenshot von drei dreidimensionalen Pappkartons, die Beispiele für JavaScript-Variablen demonstrieren. Jeder Karton enthält hypothetische Werte, die verschiedene JavaScript-Datentypen darstellen. Die Beispielwerte sind "Bob", true und 35 jeweils.](boxes.png)

## Deklarieren einer Variable

Um eine Variable zu verwenden, müssen Sie sie zuerst erstellen — genauer gesagt, nennen wir dies Deklarieren der Variable. Dazu tippen Sie das Schlüsselwort `let` gefolgt von dem Namen, den Sie Ihrer Variable geben möchten:

```js
let myName;
let myAge;
```

Hier erstellen wir zwei Variablen mit den Namen `myName` und `myAge`. Versuchen Sie, diese Zeilen in die Konsole Ihres Webbrowsers einzugeben. Danach versuchen Sie, eine Variable (oder zwei) mit Ihren eigenen Namen zu erstellen.

> [!NOTE]
> In JavaScript sollten alle Codeanweisungen mit einem Semikolon (`;`) enden — Ihr Code kann für einzelne Zeilen korrekt funktionieren, wahrscheinlich jedoch nicht, wenn Sie mehrere Codezeilen gemeinsam schreiben. Versuchen Sie, sich daran zu gewöhnen, es einzuschließen.

Sie können testen, ob diese Werte jetzt in der Ausführungsumgebung existieren, indem Sie nur den Namen der Variablen eingeben, z.B.

```js
myName;
myAge;
```

Sie haben derzeit keinen Wert; sie sind leere Container. Wenn Sie die Variablennamen eingeben, sollten Sie einen Wert von `undefined` erhalten. Wenn sie nicht existieren, erhalten Sie eine Fehlermeldung — versuchen Sie, folgendes einzugeben

```js
scoobyDoo;
```

> [!NOTE]
> Verwechseln Sie nicht eine Variable, die existiert, aber keinen definierten Wert hat, mit einer Variable, die überhaupt nicht existiert — das sind sehr unterschiedliche Dinge. In der obigen Box-Analogie würde "nicht existieren" bedeuten, dass es keinen Karton (Variable) gibt, in den ein Wert hineinpasst. "Kein definierter Wert" würde bedeuten, dass es einen Karton gibt, aber er keinen Wert enthält.

## Initialisieren einer Variable

Nachdem Sie eine Variable deklariert haben, können Sie sie mit einem Wert initialisieren. Dazu geben Sie den Variablennamen ein, gefolgt von einem Gleichheitszeichen (`=`), gefolgt von dem Wert, den Sie ihm geben möchten. Zum Beispiel:

```js
myName = "Chris";
myAge = 37;
```

Versuchen Sie jetzt, in die Konsole zurückzukehren und diese Zeilen einzugeben. Sie sollten in jedem Fall den Wert sehen, den Sie der Variablen zugewiesen haben, der in der Konsole zurückgegeben wird, um dies zu bestätigen. Wieder können Sie Ihre Variablenwerte durch Eingabe ihres Namens in die Konsole zurückgeben lassen — versuchen Sie es erneut:

```js
myName;
myAge;
```

Sie können eine Variable gleichzeitig deklarieren und initialisieren, wie folgt:

```js
let myDog = "Rover";
```

Dies ist wahrscheinlich das, was Sie die meiste Zeit tun werden, da es schneller ist als die beiden Aktionen in zwei separaten Zeilen auszuführen.

## Ein Hinweis zu var

Sie werden wahrscheinlich auch eine andere Möglichkeit finden, Variablen zu deklarieren, indem Sie das Schlüsselwort `var` verwenden:

```js
var myName;
var myAge;
```

Als JavaScript zuerst erstellt wurde, war dies die einzige Möglichkeit, Variablen zu deklarieren. Das Design von `var` ist verwirrend und fehleranfällig. Daher wurde `let` in modernen Versionen von JavaScript erstellt, ein neues Schlüsselwort zum Erstellen von Variablen, das etwas anders funktioniert als `var` und dabei seine Probleme löst.

Ein paar einfache Unterschiede sind unten erklärt. Wir werden jetzt nicht auf alle Unterschiede eingehen, aber Sie werden beginnen, sie zu entdecken, während Sie mehr über JavaScript lernen (wenn Sie wirklich jetzt darüber lesen möchten, können Sie gerne unsere [let-Referenzseite](/de/docs/Web/JavaScript/Reference/Statements/let) besuchen).

Zum Beispiel, wenn Sie ein mehrzeiliges JavaScript-Programm schreiben, das eine Variable deklariert und initialisiert, können Sie tatsächlich eine Variable mit `var` deklarieren, nachdem Sie sie initialisiert haben, und es wird trotzdem funktionieren. Zum Beispiel:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Dies funktioniert nicht, wenn einzelne Zeilen in eine JavaScript-Konsole eingegeben werden, sondern nur, wenn mehrere Zeilen JavaScript in einem Webdokument ausgeführt werden.

Dies funktioniert aufgrund von **Hoisting** — lesen Sie [var hoisting](/de/docs/Web/JavaScript/Reference/Statements/var#hoisting) für weitere Details zu diesem Thema.

Das Hoisting funktioniert mit `let` nicht mehr. Wenn wir `var` im obigen Beispiel in `let` ändern würden, würde es mit einem Fehler fehlschlagen. Dies ist eine gute Sache — eine Variable nach ihrer Initialisierung zu deklarieren, führt zu verwirrendem, schwerer verständlichem Code.

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

Stattdessen müssten Sie dies tun:

```js
let myName = "Chris";
myName = "Bob";
```

Auch dies ist eine vernünftige Sprachentscheidung. Es gibt keinen Grund, Variablen erneut zu deklarieren — es macht die Dinge nur verwirrender.

Aus diesen und weiteren Gründen empfehlen wir, `let` in Ihrem Code anstelle von `var` zu verwenden. Es gibt keinen Grund mehr, `var` zu verwenden, es sei denn, Sie schreiben ausdrücklich Unterstützung für sehr alte Browser, da alle modernen Browser `let` seit 2015 unterstützen.

> [!NOTE]
> Wenn Sie diesen Code in der Konsole Ihres Browsers ausprobieren, bevorzugen Sie, jeden der Codeblöcke hier als Ganzes zu kopieren und einzufügen. Es gibt eine [Funktion in der Chrome-Konsole](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), bei der Variablenneuerklärungen mit `let` und `const` erlaubt sind:
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

Sobald eine Variable mit einem Wert initialisiert wurde, können Sie diesen Wert ändern (oder aktualisieren), indem Sie ihm einen anderen Wert geben. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
myName = "Bob";
myAge = 40;
```

### Ein Exkurs über Variablennamenregeln

Sie können einer Variablen fast jeden beliebigen Namen geben, aber es gibt Einschränkungen. Im Allgemeinen sollten Sie sich darauf beschränken, lateinische Zeichen (0-9, a-z, A-Z) und den Unterstrich zu verwenden.

- Sie sollten keine anderen Zeichen verwenden, da sie Fehler verursachen oder für ein internationales Publikum schwer zu verstehen sein können.
- Verwenden Sie keine Unterstriche am Anfang von Variablennamen — dies wird in bestimmten JavaScript-Konstrukten verwendet, um spezifische Dinge zu bedeuten, also kann es verwirrend werden.
- Verwenden Sie keine Zahlen am Anfang von Variablen. Dies ist nicht erlaubt und verursacht einen Fehler.
- Eine sichere Konvention, an die Sie sich halten können, ist {{Glossary("camel_case", "lower camel case")}}, bei der Sie mehrere Wörter zusammenfügen, wobei der gesamte erste Buchstabe klein geschrieben wird und nachfolgende Wörter großgeschrieben werden. Wir haben dies bisher für unsere Variablennamen im Artikel verwendet.
- Machen Sie Variablennamen intuitiv, damit sie die Daten beschreiben, die sie enthalten. Verwenden Sie nicht nur einzelne Buchstaben/Zahlen oder lange Phrasen.
- Variablen sind case-sensitiv — also ist `myage` eine andere Variable als `myAge`.
- Ein letzter Punkt: Sie müssen auch vermeiden, JavaScript-Reservierte Wörter als Ihre Variablennamen zu verwenden — damit meinen wir die Wörter, die die eigentliche Syntax von JavaScript ausmachen! Also können Sie keine Wörter wie `var`, `function`, `let` und `for` als Variablennamen verwenden. Browser erkennen sie als verschiedene Codeelemente und Sie erhalten daher Fehler.

> [!NOTE]
> Sie können eine ziemlich vollständige Liste reservierter Schlüsselwörter, die vermieden werden sollten, im Text [Lexikalische Grammatik — Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) finden.

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

Versuchen Sie jetzt, ein paar weitere Variablen zu erstellen, wobei Sie die obigen Richtlinien beachten.

## Variablentypen

Es gibt einige verschiedene Arten von Daten, die wir in Variablen speichern können. In diesem Abschnitt werden wir diese kurz beschreiben, und in zukünftigen Artikeln werden Sie mehr darüber erfahren.

### Zahlen

Sie können Zahlen in Variablen speichern, entweder ganze Zahlen wie 30 (auch Ganzzahlen genannt) oder Dezimalzahlen wie 2,456 (auch Fließkommazahlen oder Gleitkommazahlen genannt). Sie müssen keine Variablentypen in JavaScript deklarieren, anders als in einigen anderen Programmiersprachen. Wenn Sie einer Variablen einen Zahlenwert zuweisen, verwenden Sie keine Anführungszeichen:

```js
let myAge = 17;
```

### Zeichenketten

Zeichenketten sind Textstücke. Wenn Sie einer Variablen einen Zeichenkettenwert zuweisen, müssen Sie ihn in einfache oder doppelte Anführungszeichen setzen; andernfalls versucht JavaScript, ihn als anderen Variablennamen zu interpretieren.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

### Boolsche Werte

Boolsche Werte sind wahr/falsch Werte — sie können zwei Werte haben, `true` oder `false`. Diese werden im Allgemeinen verwendet, um eine Bedingung zu testen, nach der der Code entsprechend ausgeführt wird. Ein einfaches Fallbeispiel wäre also:

```js
let iAmAlive = true;
```

Während es in der Realität mehr so verwendet würde:

```js
let test = 6 < 3;
```

Dies verwendet den "Kleiner als"-Operator (`<`), um zu testen, ob 6 kleiner als 3 ist. Wie Sie vielleicht erwarten, liefert es `false`, weil 6 nicht kleiner als 3 ist! Sie werden später im Kurs viel mehr über solche Operatoren lernen.

### Arrays

Ein Array ist ein einzelnes Objekt, das mehrere Werte enthält, die in eckigen Klammern eingeschlossen und durch Kommas getrennt sind. Versuchen Sie, die folgenden Zeilen in Ihre Konsole einzugeben:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Sobald diese Arrays definiert sind, können Sie auf jeden Wert anhand ihrer Position im Array zugreifen. Versuchen Sie es mit diesen Zeilen:

```js
myNameArray[0]; // sollte 'Chris' zurückgeben
myNumberArray[2]; // sollte 40 zurückgeben
```

Die eckigen Klammern geben einen Indexwert an, der der Position des zurückzugebenden Wertes entspricht. Sie haben möglicherweise bemerkt, dass Arrays in JavaScript null-indiziert sind: Das erste Element steht an Index 0.

Um mehr zu erfahren, lesen Sie unseren Artikel über [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays).

### Objekte

In der Programmierung ist ein Objekt eine Code-Struktur, die ein reales Objekt modelliert. Sie können ein einfaches Objekt haben, das eine Box darstellt und Informationen über seine Breite, Länge und Höhe enthält, oder Sie könnten ein Objekt haben, das eine Person darstellt und Daten über ihren Namen, ihre Höhe, ihr Gewicht, die Sprache, die sie sprechen, wie man sie begrüßt und mehr enthält.

Versuchen Sie, die folgende Zeile in Ihre Konsole einzugeben:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Um die im Objekt gespeicherten Informationen abzurufen, können Sie die folgende Syntax verwenden:

```js
dog.name;
```

Mehr zu diesem Thema finden Sie im Modul [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects).

## Dynamische Typisierung

JavaScript ist eine "dynamisch typisierte Sprache", was bedeutet, dass Sie, im Gegensatz zu einigen anderen Sprachen, nicht spezifizieren müssen, welchen Datentyp eine Variable enthalten wird (Zahlen, Zeichenketten, Arrays usw.).

Zum Beispiel, wenn Sie eine Variable deklarieren und ihr einen Wert in Anführungszeichen geben, behandelt der Browser die Variable als Zeichenkette:

```js
let myString = "Hello";
```

Selbst wenn der in Anführungszeichen gesetzte Wert nur Ziffern enthält, ist er immer noch eine Zeichenkette — keine Zahl — also seien Sie vorsichtig:

```js
let myNumber = "500"; // ups, das ist immer noch eine Zeichenkette
typeof myNumber;
myNumber = 500; // viel besser — jetzt ist das eine Zahl
typeof myNumber;
```

Versuchen Sie, die vier Zeilen oben nacheinander in Ihre Konsole einzugeben, und sehen Sie, was die Ergebnisse sind. Sie werden bemerken, dass wir einen speziellen Operator namens [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwenden — dies gibt den Datentyp der Variablen zurück, die Sie danach eingeben. Das erste Mal, wenn es aufgerufen wird, sollte es `string` zurückgeben, da zu diesem Zeitpunkt die `myNumber`-Variable eine Zeichenkette, `'500'`, enthält. Schauen Sie, was es das zweite Mal zurückgibt, wenn Sie es aufrufen.

## Konstanten in JavaScript

Neben Variablen können Sie Konstanten deklarieren. Diese sind ähnlich wie Variablen, außer dass:

- Sie müssen sie beim Deklarieren initialisieren
- Sie können ihnen nach der Initialisierung keinen neuen Wert zuweisen.

Wenn Sie zum Beispiel `let` verwenden, können Sie eine Variable ohne Initialisierung deklarieren:

```js
let count;
```

Wenn Sie versuchen, dies mit `const` zu tun, sehen Sie einen Fehler:

```js example-bad
const count;
```

Ebenso können Sie mit `let` eine Variable initialisieren und ihr dann einen neuen Wert zuweisen (dies wird auch Neukonfigurieren der Variablen genannt):

```js
let count = 1;
count = 2;
```

Wenn Sie versuchen, dies mit `const` zu tun, sehen Sie einen Fehler:

```js example-bad
const count = 1;
count = 2;
```

Beachten Sie, dass, obwohl eine Konstante in JavaScript immer denselben Wertnamen haben muss, Sie den Inhalt des Wertes ändern können, den sie benennt. Dies ist keine nützliche Unterscheidung für einfache Typen wie Zahlen oder Boolsche Werte, aber betrachte ein Objekt:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

Sie können die Eigenschaften eines Objekts, das mit `const` deklariert wurde, aktualisieren, hinzufügen oder entfernen, da, obwohl sich der Inhalt des Objekts geändert hat, die Konstante immer noch auf dasselbe Objekt zeigt:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

## Wann `const` und wann `let` verwenden

Wenn Sie mit `const` nicht so viel tun können wie mit `let`, warum sollten Sie es dann bevorzugen, `const` anstelle von `let` zu verwenden? Tatsächlich ist `const` sehr nützlich. Wenn Sie `const` verwenden, um einem Wert einen Namen zu geben, signalisiert es jedem, der Ihren Code betrachtet, dass dieser Name niemals auf einen anderen Wert zugewiesen werden wird. Jedes Mal, wenn sie diesen Namen sehen, werden sie wissen, worauf er sich bezieht.

In diesem Kurs übernehmen wir das folgende Prinzip, wann `let` und wann `const` zu verwenden ist:

_Verwenden Sie `const`, wenn Sie können, und verwenden Sie `let`, wenn Sie müssen._

Das bedeutet, dass, wenn Sie eine Variable initialisieren können, wenn Sie sie deklarieren, und sie später nicht erneut zuweisen müssen, machen Sie sie zu einer Konstante.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Variablen](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## Zusammenfassung

Bis jetzt sollten Sie ein ausreichendes Verständnis über JavaScript-Variablen und deren Erstellung haben. Im nächsten Artikel werden wir uns genauer mit Zahlen befassen und uns anschauen, wie man grundlegende Mathematik in JavaScript durchführt.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Maths", "Learn/JavaScript/First_steps")}}
