---
title: Schleifen und Iterationen
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen bieten eine schnelle und einfache Möglichkeit, etwas wiederholt auszuführen. Dieses Kapitel des [JavaScript-Leitfadens](/de/docs/Web/JavaScript/Guide) führt die verschiedenen Iterationsanweisungen ein, die in JavaScript verfügbar sind.

Sie können sich eine Schleife als eine computergestützte Version des Spiels vorstellen, bei dem Sie jemandem sagen, er solle _X_ Schritte in eine Richtung und dann _Y_ Schritte in eine andere Richtung gehen. Zum Beispiel könnte die Idee "Gehe fünf Schritte nach Osten" auf folgende Weise als Schleife ausgedrückt werden:

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

Es gibt viele verschiedene Arten von Schleifen, aber im Wesentlichen tun sie alle dasselbe: Sie wiederholen eine Aktion eine bestimmte Anzahl von Malen. (Beachten Sie, dass es möglich ist, dass diese Anzahl null sein kann!)

Die verschiedenen Schleifenmechanismen bieten verschiedene Möglichkeiten, um die Start- und Endpunkte der Schleife zu bestimmen. Es gibt verschiedene Situationen, die durch eine Art von Schleife besser bedient werden als durch andere.

Die in JavaScript bereitgestellten Schleifenanweisungen sind:

- [for-Anweisung](#for-anweisung)
- [do...while-Anweisung](#do...while-anweisung)
- [while-Anweisung](#while-anweisung)
- [labeled-Anweisung](#labeled-anweisung)
- [break-Anweisung](#break-anweisung)
- [continue-Anweisung](#continue-anweisung)
- [for...in-Anweisung](#for...in-anweisung)
- [for...of-Anweisung](#for...of-anweisung)

## for-Anweisung

Eine {{jsxref("Statements/for", "for")}} Schleife wiederholt, bis eine bestimmte Bedingung als falsch ausgewertet wird. Die JavaScript `for`-Schleife ist der Java- und C-`for`-Schleife ähnlich.

Eine `for`-Anweisung sieht wie folgt aus:

```js-nolint
for (initialization; condition; afterthought)
  statement
```

Wenn eine `for`-Schleife ausgeführt wird, geschieht Folgendes:

1. Der Initialisierungsausdruck `initialization`, falls vorhanden, wird ausgeführt. Dieser Ausdruck initialisiert normalerweise einen oder mehrere Schleifenzähler, aber die Syntax erlaubt einen Ausdruck beliebiger Komplexität. Dieser Ausdruck kann auch Variablen deklarieren.
2. Der Ausdruck `condition` wird ausgewertet. Wenn der Wert von `condition` wahr ist, wird die Schleifenanweisung ausgeführt. Andernfalls wird die `for`-Schleife beendet. (Wenn der Ausdruck `condition` vollständig weggelassen wird, wird die Bedingung als wahr angenommen.)
3. Die `statement`-Anweisung wird ausgeführt. Um mehrere Anweisungen auszuführen, verwenden Sie eine [block statement](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ }`), um diese Anweisungen zu gruppieren.
4. Falls vorhanden, wird der Aktualisierungsausdruck `afterthought` ausgeführt.
5. Die Steuerung kehrt zu Schritt 2 zurück.

### Beispiel

Im folgenden Beispiel enthält die Funktion eine `for`-Anweisung, die die Anzahl der ausgewählten Optionen in einer Bildlaufleiste (ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select) Element, das Mehrfachauswahlen ermöglicht) zählt.

#### HTML

```html
<form name="selectForm">
  <label for="musicTypes"
    >Choose some music types, then click the button below:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Classical</option>
    <option>Opera</option>
  </select>
  <button id="btn" type="button">How many are selected?</button>
</form>
```

#### JavaScript

Hier deklariert die `for`-Anweisung die Variable `i` und initialisiert sie mit `0`. Sie überprüft, ob `i` kleiner ist als die Anzahl der Optionen im `<select>`-Element, führt die nachfolgende `if`-Anweisung aus und erhöht `i` nach jedem Durchlauf der Schleife um 1.

```js
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
```

## do...while-Anweisung

Die {{jsxref("statements/do...while", "do...while")}} Anweisung wiederholt, bis eine bestimmte Bedingung als falsch ausgewertet wird.

Eine `do...while`-Anweisung sieht wie folgt aus:

```js-nolint
do
  statement
while (condition);
```

`statement` wird immer einmal ausgeführt, bevor die Bedingung geprüft wird. (Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.)

Wenn `condition` `true` ist, wird die Anweisung erneut ausgeführt. Am Ende jeder Ausführung wird die Bedingung überprüft. Wenn die Bedingung `false` ist, stoppt die Ausführung und die Steuerung wird an die erste Anweisung nach `do...while` übergeben.

### Beispiel

Im folgenden Beispiel iteriert die `do`-Schleife mindestens einmal und wiederholt sich, bis `i` nicht mehr kleiner als `5` ist.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## while-Anweisung

Eine {{jsxref("Statements/while", "while")}}-Anweisung führt ihre Anweisungen aus, solange eine bestimmte Bedingung als `true` ausgewertet wird. Eine `while`-Anweisung sieht wie folgt aus:

```js-nolint
while (condition)
  statement
```

Wenn die `condition` `false` wird, hört die Anweisung innerhalb der Schleife auf, ausgeführt zu werden, und die Steuerung wird an die Anweisung nach der Schleife übergeben.

Der Bedingungstest erfolgt _vor_ der Ausführung der `statement` in der Schleife. Wenn die Bedingung `true` zurückgibt, wird `statement` ausgeführt und die Bedingung erneut getestet. Wenn die Bedingung `false` zurückgibt, stoppt die Ausführung und die Steuerung wird an die Anweisung nach der `while`-Anweisung übergeben.

Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.

### Beispiel 1

Die folgende `while`-Schleife iteriert, solange `n` kleiner als `3` ist:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Mit jeder Iteration erhöht die Schleife `n` und addiert diesen Wert zu `x`. Daher nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = `1` und `x` = `1`
- Nach dem zweiten Durchlauf: `n` = `2` und `x` = `3`
- Nach dem dritten Durchlauf: `n` = `3` und `x` = `6`

Nachdem der dritte Durchlauf abgeschlossen ist, ist die Bedingung `n < 3` nicht mehr `true`, und die Schleife wird beendet.

### Beispiel 2

Vermeiden Sie Endlosschleifen. Stellen Sie sicher, dass die Bedingung in einer Schleife schließlich `false` wird — andernfalls wird die Schleife nie beendet! Die Anweisungen in der folgenden `while`-Schleife werden für immer ausgeführt, weil die Bedingung nie `false` wird:

```js example-bad
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

## labeled-Anweisung

Ein {{jsxref("Statements/label", "label")}} versieht eine Anweisung mit einem Bezeichner, mit dem Sie an anderer Stelle in Ihrem Programm darauf verweisen können. Zum Beispiel können Sie ein Label verwenden, um eine Schleife zu kennzeichnen, und dann die `break`- oder `continue`-Anweisungen verwenden, um anzuzeigen, ob ein Programm die Schleife unterbrechen oder mit ihrer Ausführung fortfahren soll.

Die Syntax der labeled-Anweisung sieht wie folgt aus:

```js-nolint
label:
  statement
```

Der Wert von `label` kann ein beliebiger JavaScript-Bezeichner sein, der kein reserviertes Wort ist. Die `statement`, die Sie mit einem Label kennzeichnen, kann eine beliebige Anweisung sein. Beispiele zur Verwendung von Labeled-Anweisungen finden Sie in den Beispielen weiter unten zu `break` und `continue`.

## break-Anweisung

Verwenden Sie die {{jsxref("Statements/break", "break")}}-Anweisung, um eine `while`-, `do-while`-, `for`- oder `switch`-Schleife oder eine in Verbindung mit einer labeled-Anweisung zu beenden.

- Wenn Sie `break` ohne Label verwenden, beendet es die innerste umschließende `while`-, `do-while`-, `for`- oder `switch`-Schleife sofort und überträgt die Steuerung an die folgende Anweisung.
- Wenn Sie `break` mit einem Label verwenden, beendet es die angegebene labeled-Anweisung.

Die Syntax der `break`-Anweisung sieht so aus:

```js-nolint
break;
break label;
```

1. Die erste Form der Syntax beendet die innerste umschließende Schleife oder den `switch`.
2. Die zweite Form der Syntax beendet die angegebene umschließende labeled-Anweisung.

### Beispiel 1

Das folgende Beispiel iteriert durch die Elemente in einem Array, bis der Index eines Elements gefunden ist, dessen Wert `theValue` ist:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Beispiel 2: Unterbruch zu einem Label

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## continue-Anweisung

Die {{jsxref("Statements/continue", "continue")}}-Anweisung kann verwendet werden, um einen `while`-, `do-while`-, `for`- oder `label`-Anweisung erneut zu starten.

- Wenn Sie `continue` ohne Label verwenden, beendet es die aktuelle Iteration der innersten umschließenden `while`-, `do-while`- oder `for`-Anweisung und setzt die Ausführung der Schleife mit der nächsten Iteration fort. Im Gegensatz zur `break`-Anweisung beendet `continue` nicht die Ausführung der Schleife ganz. In einer `while`-Schleife springt es zurück zur Bedingung. In einer `for`-Schleife springt es zum `increment-expression`.
- Wenn Sie `continue` mit einem Label verwenden, bezieht es sich auf die Schleifenanweisung, die mit diesem Label identifiziert wurde.

Die Syntax der `continue`-Anweisung sieht wie folgt aus:

```js-nolint
continue;
continue label;
```

### Beispiel 1

Das folgende Beispiel zeigt eine `while`-Schleife mit einer `continue`-Anweisung, die ausgeführt wird, wenn der Wert von `i` `3` ist. Somit nimmt `n` die Werte `1`, `3`, `7` und `12` an.

```js
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12
```

Wenn Sie das `continue;` auskommentieren, würde die Schleife bis zum Ende laufen und Sie würden `1,3,6,10,15` sehen.

### Beispiel 2

Eine Anweisung mit dem Label `checkIandJ` enthält eine mit dem Label `checkJ`. Wenn `continue` aufgerufen wird, beendet das Programm die aktuelle Iteration von `checkJ` und beginnt die nächste Iteration. Jedes Mal, wenn `continue` aufgerufen wird, wird `checkJ` weiter iteriert, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, wird der Rest der `checkIandJ`-Anweisung abgeschlossen, und `checkIandJ` iteriert erneut, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, fährt das Programm mit der Anweisung hinter `checkIandJ` fort.

Wenn `continue` ein Label von `checkIandJ` hätte, würde das Programm am Anfang der `checkIandJ`-Anweisung fortsetzen.

```js
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

## for...in-Anweisung

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert eine angegebene Variable über alle aufzählbaren Eigenschaften eines Objekts. Für jede eindeutige Eigenschaft führt JavaScript die angegebenen Anweisungen aus. Eine `for...in`-Anweisung sieht wie folgt aus:

```js-nolint
for (variable in object)
  statement
```

### Beispiel

Die folgende Funktion nimmt ein Objekt und den Namen des Objekts als Argument. Sie durchläuft alle Eigenschaften des Objekts und gibt einen String zurück, der die Eigenschaftsnamen und ihre Werte auflistet.

```js
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
```

Für ein Objekt `car` mit den Eigenschaften `make` und `model`, würde `result` folgendermaßen aussehen:

```plain
car.make = Ford
car.model = Mustang
```

### Arrays

Auch wenn es verlockend sein mag, dies als Möglichkeit zu verwenden, um über {{jsxref("Array")}}-Elemente zu iterieren, gibt die `for...in`-Anweisung die Namen Ihrer benutzerdefinierten Eigenschaften zusätzlich zu den numerischen Indizes zurück.

Daher ist es besser, eine traditionelle {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index zu verwenden, wenn über Arrays iteriert wird, da die `for...in`-Anweisung zusätzlich zu den Array-Elementen auch über benutzerdefinierte Eigenschaften iteriert, falls Sie das Array-Objekt ändern (z. B. durch Hinzufügen benutzerdefinierter Eigenschaften oder Methoden).

## for...of-Anweisung

Die {{jsxref("Statements/for...of", "for...of")}}-Anweisung erstellt eine Schleife über [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (einschließlich {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("Functions/arguments", "arguments")}}-Objekt und so weiter) und ruft einen benutzerdefinierten Iterationshook mit Anweisungen auf, die für den Wert jeder eindeutigen Eigenschaft ausgeführt werden sollen.

```js-nolint
for (variable of iterable)
  statement
```

Das folgende Beispiel zeigt den Unterschied zwischen einer `for...of`-Schleife und einer {{jsxref("Statements/for...in", "for...in")}}-Schleife. Während `for...in` über Eigenschaftsnamen iteriert, iteriert `for...of` über Eigenschaftswerte:

```js
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
```

Die `for...of`- und `for...in`-Anweisungen können auch mit [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwendet werden. Zum Beispiel können Sie gleichzeitig über die Schlüssel und Werte eines Objekts mit {{jsxref("Object.entries()")}} iterieren.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
