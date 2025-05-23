---
title: Schleifen und Iteration
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen bieten eine schnelle und einfache Möglichkeit, etwas wiederholt auszuführen. Dieses Kapitel des [JavaScript-Leitfadens](/de/docs/Web/JavaScript/Guide) führt die verschiedenen Iterationsanweisungen ein, die in JavaScript verfügbar sind.

Sie können sich eine Schleife als eine computerisierte Version des Spiels vorstellen, bei dem Sie jemandem sagen, er solle _X_ Schritte in eine Richtung und dann _Y_ Schritte in eine andere Richtung machen. Zum Beispiel könnte die Idee "Gehe fünf Schritte nach Osten" so als Schleife ausgedrückt werden:

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

Es gibt viele verschiedene Arten von Schleifen, aber sie alle tun im Wesentlichen dasselbe: Sie wiederholen eine Aktion eine bestimmte Anzahl von Malen. (Beachten Sie, dass es möglich ist, dass diese Anzahl null sein könnte!)

Die verschiedenen Schleifenmechanismen bieten unterschiedliche Möglichkeiten, den Start- und Endpunkt der Schleife zu bestimmen. Es gibt verschiedene Situationen, die durch eine Art von Schleife besser bedient werden als durch andere.

Die in JavaScript bereitgestellten Anweisungen für Schleifen sind:

- [for-Anweisung](#for-anweisung)
- [do...while-Anweisung](#do...while-anweisung)
- [while-Anweisung](#while-anweisung)
- [labeled-Anweisung](#labeled-anweisung)
- [break-Anweisung](#break-anweisung)
- [continue-Anweisung](#continue-anweisung)
- [for...in-Anweisung](#for...in-anweisung)
- [for...of-Anweisung](#for...of-anweisung)

## for-Anweisung

Eine {{jsxref("Statements/for", "for")}}-Schleife wiederholt sich, bis eine angegebene Bedingung als falsch ausgewertet wird. Die JavaScript-`for`-Schleife ist der `for`-Schleife in Java und C ähnlich.

Eine `for`-Anweisung sieht wie folgt aus:

```js-nolint
for (initialization; condition; afterthought)
  statement
```

Wenn eine `for`-Schleife ausgeführt wird, passiert Folgendes:

1. Der Initialisierungsausdruck `initialization`, falls vorhanden, wird ausgeführt. Dieser Ausdruck initialisiert normalerweise einen oder mehrere Schleifenzähler, aber die Syntax erlaubt einen Ausdruck beliebiger Komplexität. Dieser Ausdruck kann auch Variablen deklarieren.
2. Der Ausdruck `condition` wird ausgewertet. Wenn der Wert von `condition` wahr ist, werden die Schleifenanweisungen ausgeführt. Andernfalls endet die `for`-Schleife. (Wenn der `condition`-Ausdruck vollständig weggelassen wird, wird die Bedingung als wahr angenommen.)
3. Die `statement` wird ausgeführt. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ }`), um diese Anweisungen zu gruppieren.
4. Falls vorhanden, wird der Aktualisierungsausdruck `afterthought` ausgeführt.
5. Die Steuerung kehrt zu Schritt 2 zurück.

### Beispiel

Im untenstehenden Beispiel enthält die Funktion eine `for`-Anweisung, die die Anzahl der ausgewählten Optionen in einer Scrollliste (ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element, das Mehrfachauswahlen zulässt) zählt.

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

Hier deklariert die `for`-Anweisung die Variable `i` und initialisiert sie mit `0`. Sie überprüft, ob `i` kleiner als die Anzahl der Optionen im `<select>`-Element ist, führt die nachfolgende `if`-Anweisung aus und erhöht `i` nach jedem Durchlauf der Schleife um 1.

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

Die {{jsxref("statements/do...while", "do...while")}}-Anweisung wiederholt sich, bis eine angegebene Bedingung als falsch bewertet wird.

Eine `do...while`-Anweisung sieht wie folgt aus:

```js-nolint
do
  statement
while (condition);
```

`statement` wird immer einmal ausgeführt, bevor die Bedingung überprüft wird. (Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.)

Wenn `condition` wahr ist, wird die Anweisung erneut ausgeführt. Am Ende jeder Ausführung wird die Bedingung überprüft. Wenn die Bedingung `false` ist, stoppt die Ausführung und die Steuerung wird an die Anweisung nach `do...while` übergeben.

### Beispiel

Im folgenden Beispiel wiederholt sich die `do`-Schleife mindestens einmal und wird erneut ausgeführt, bis `i` nicht mehr kleiner als `5` ist.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## while-Anweisung

Eine {{jsxref("Statements/while", "while")}}-Anweisung führt ihre Anweisungen aus, solange eine angegebene Bedingung als `true` bewertet wird. Eine `while`-Anweisung sieht wie folgt aus:

```js-nolint
while (condition)
  statement
```

Wenn die `condition` `false` wird, hört `statement` innerhalb der Schleife auf zu laufen und die Steuerung wird an die Anweisung übergeben, die der Schleife folgt.

Der Bedingungstest erfolgt _bevor_ die `statement` in der Schleife ausgeführt wird. Wenn die Bedingung `true` zurückgibt, wird `statement` ausgeführt und die `condition` wird erneut getestet. Wenn die Bedingung `false` zurückgibt, stoppt die Ausführung, und die Steuerung wird an die Anweisung übergeben, die `while` folgt.

Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.

### Beispiel 1

Die folgende `while`-Schleife wird so lange iteriert, wie `n` kleiner als `3` ist:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Bei jedem Durchlauf erhöht die Schleife `n` und addiert diesen Wert zu `x`. Daher nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchgang: `n` = `1` und `x` = `1`
- Nach dem zweiten Durchgang: `n` = `2` und `x` = `3`
- Nach dem dritten Durchgang: `n` = `3` und `x` = `6`

Nach dem Abschluss des dritten Durchgangs ist die Bedingung `n < 3` nicht mehr `true`, sodass die Schleife endet.

### Beispiel 2

Vermeiden Sie Endlosschleifen. Stellen Sie sicher, dass die Bedingung in einer Schleife irgendwann `false` wird - andernfalls wird die Schleife niemals enden! Die Anweisungen in der folgenden `while`-Schleife werden unendlich oft ausgeführt, da die Bedingung niemals `false` wird:

```js example-bad
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

## labeled-Anweisung

Eine {{jsxref("Statements/label", "label")}} bietet einer Anweisung einen Bezeichner, mit dem Sie in anderen Teilen Ihres Programms darauf verweisen können. Beispielsweise können Sie ein Label verwenden, um eine Schleife zu identifizieren, und dann die `break`- oder `continue`-Anweisungen verwenden, um anzugeben, ob ein Programm die Schleife unterbrechen oder seine Ausführung fortsetzen soll.

Die Syntax der labeled-Anweisung sieht wie folgt aus:

```js-nolint
label:
  statement
```

Der Wert von `label` kann jeder JavaScript-Bezeichner sein, der kein reserviertes Wort ist. Die `statement`, die Sie mit einem Label identifizieren, kann jede Anweisung sein. Für Beispiele zur Verwendung von labeled-Anweisungen siehe die weiter unten stehenden Beispiele für `break` und `continue`.

## break-Anweisung

Verwenden Sie die {{jsxref("Statements/break", "break")}}-Anweisung, um eine Schleife, einen `switch` oder in Verbindung mit einer labeled-Anweisung zu beenden.

- Wenn Sie `break` ohne Label verwenden, beendet es sofort die innerste, umschließende `while`-, `do-while`-, `for`- oder `switch`-Anweisung und überträgt die Steuerung auf die nachfolgende Anweisung.
- Wenn Sie `break` mit einem Label verwenden, beendet es die angegebene labeled-Anweisung.

Die Syntax der `break`-Anweisung sieht wie folgt aus:

```js-nolint
break;
break label;
```

1. Die erste Form der Syntax beendet die innerste, umschließende Schleife oder `switch`.
2. Die zweite Form der Syntax beendet die angegebene, umschließende labeled-Anweisung.

### Beispiel 1

Das folgende Beispiel iteriert durch die Elemente in einem Array, bis es den Index eines Elements findet, dessen Wert `theValue` ist:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Beispiel 2: Unterbrechen zu einem Label

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

Die {{jsxref("Statements/continue", "continue")}}-Anweisung kann verwendet werden, um eine `while`, `do-while`, `for` oder `label`-Anweisung neu zu starten.

- Wenn Sie `continue` ohne Label verwenden, beendet es die aktuelle Iteration der innersten, umschließenden `while`-, `do-while`- oder `for`-Anweisung und setzt die Ausführung der Schleife mit der nächsten Iteration fort. Im Gegensatz zur `break`-Anweisung beendet `continue` die Ausführung der Schleife nicht vollständig. In einer `while`-Schleife wird zur Bedingung zurückgesprungen. In einer `for`-Schleife wird zum `increment-expression` gesprungen.
- Wenn Sie `continue` mit einem Label verwenden, bezieht es sich auf die Schleifenanweisung, die mit diesem Label identifiziert ist.

Die Syntax der `continue`-Anweisung sieht wie folgt aus:

```js-nolint
continue;
continue label;
```

### Beispiel 1

Das folgende Beispiel zeigt eine `while`-Schleife mit einer `continue`-Anweisung, die ausgeführt wird, wenn der Wert von `i` gleich `3` ist. Somit nimmt `n` die Werte `1`, `3`, `7` und `12` an.

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

Wenn Sie die `continue;` auskommentieren, würde die Schleife bis zum Ende laufen und Sie würden `1,3,6,10,15` sehen.

### Beispiel 2

Eine Anweisung, die mit `checkIandJ` beschriftet ist, enthält eine Anweisung, die mit `checkJ` beschriftet ist. Wenn `continue` angetroffen wird, beendet das Programm die aktuelle Iteration von `checkJ` und beginnt die nächste Iteration. Bei jedem Mal, wenn `continue` angetroffen wird, wird `checkJ` erneut durchlaufen, bis seine Bedingung `false` zurückgibt. Bei einer Rückgabe von `false` wird der Rest der `checkIandJ`-Anweisung abgeschlossen, und `checkIandJ` wird erneut durchlaufen, bis seine Bedingung `false` zurückgibt. Bei einer Rückgabe von `false` wird das Programm bei der Anweisung nach `checkIandJ` fortgesetzt.

Wenn `continue` ein Label von `checkIandJ` hätte, würde das Programm am Anfang der `checkIandJ`-Anweisung fortfahren.

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

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert eine angegebene Variable über alle aufzählbaren Eigenschaften eines Objekts. Für jede unterschiedliche Eigenschaft führt JavaScript die angegebenen Anweisungen aus. Eine `for...in`-Anweisung sieht wie folgt aus:

```js-nolint
for (variable in object)
  statement
```

### Beispiel

Die folgende Funktion nimmt ein Objekt und den Namen des Objekts als Argument und iteriert dann über alle Eigenschaften des Objekts und gibt eine Zeichenfolge zurück, die die Eigenschaftsnamen und ihre Werte auflistet.

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

Für ein Objekt `car` mit den Eigenschaften `make` und `model`, wäre `result`:

```plain
car.make = Ford
car.model = Mustang
```

### Arrays

Obwohl es verlockend sein mag, dies als eine Möglichkeit zu verwenden, um über {{jsxref("Array")}}-Elemente zu iterieren, gibt die `for...in`-Anweisung zusätzlich zu den numerischen Indizes auch den Namen Ihrer benutzerdefinierten Eigenschaften zurück.

Daher ist es besser, eine traditionelle {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index zu verwenden, wenn Sie über Arrays iterieren, da die `for...in`-Anweisung über benutzerdefinierte Eigenschaften zusätzlich zu den Array-Elementen iteriert, falls Sie das Array-Objekt ändern (z. B. durch Hinzufügen benutzerdefinierter Eigenschaften oder Methoden).

## for...of-Anweisung

Die {{jsxref("Statements/for...of", "for...of")}}-Anweisung erstellt eine Schleife, die über [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (einschließlich {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("Functions/arguments", "arguments")}}-Objekt und so weiter) iteriert und einen benutzerdefinierten Iterationshaken mit Anweisungen aufruft, die für den Wert jeder unterschiedlichen Eigenschaft ausgeführt werden sollen.

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

Die `for...of`- und `for...in`-Anweisungen können auch mit [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwendet werden. Beispielsweise können Sie gleichzeitig über die Schlüssel und Werte eines Objekts mit {{jsxref("Object.entries()")}} schleifen.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
