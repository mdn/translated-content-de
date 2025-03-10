---
title: Schleifen und Iteration
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen bieten eine schnelle und einfache Möglichkeit, etwas wiederholt auszuführen. Dieses Kapitel des [JavaScript-Leitfadens](/de/docs/Web/JavaScript/Guide) führt die verschiedenen Iterationsanweisungen ein, die in JavaScript verfügbar sind.

Sie können sich eine Schleife als eine computerisierte Version des Spiels vorstellen, bei dem Sie jemandem sagen, er solle _X_ Schritte in eine Richtung und dann _Y_ Schritte in eine andere Richtung gehen. Zum Beispiel könnte die Idee "Gehe fünf Schritte nach Osten" auf folgende Weise als Schleife ausgedrückt werden:

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

Es gibt viele verschiedene Arten von Schleifen, aber sie alle tun im Wesentlichen dasselbe: Sie wiederholen eine Aktion mehrere Male. (Beachten Sie, dass diese Anzahl auch null sein kann!)

Die verschiedenen Schleifenmechanismen bieten unterschiedliche Möglichkeiten, die Start- und Endpunkte der Schleife zu bestimmen. Es gibt verschiedene Situationen, die durch eine Art von Schleife besser bedient werden können als durch andere.

Die in JavaScript bereitgestellten Schleifenanweisungen sind:

- [for-Anweisung](#for-anweisung)
- [do...while-Anweisung](#do...while-anweisung)
- [while-Anweisung](#while-anweisung)
- [gelabelte Anweisung](#gelabelte_anweisung)
- [break-Anweisung](#break-anweisung)
- [continue-Anweisung](#continue-anweisung)
- [for...in-Anweisung](#for...in-anweisung)
- [for...of-Anweisung](#for...of-anweisung)

## for-Anweisung

Eine {{jsxref("Statements/for", "for")}}-Schleife wiederholt sich, bis eine angegebene Bedingung als falsch bewertet wird. Die JavaScript-`for`-Schleife ähnelt der `for`-Schleife in Java und C.

Eine `for`-Anweisung sieht wie folgt aus:

```js-nolint
for (initialization; condition; afterthought)
  statement
```

Wenn eine `for`-Schleife ausgeführt wird, geschieht Folgendes:

1. Der Initialisierungsausdruck `initialization`, falls vorhanden, wird ausgeführt. Dieser Ausdruck initialisiert in der Regel einen oder mehrere Schleifenzähler, aber die Syntax erlaubt einen Ausdruck beliebiger Komplexität. Dieser Ausdruck kann auch Variablen deklarieren.
2. Der Ausdruck `condition` wird ausgewertet. Wenn der Wert von `condition` true ist, werden die Schleifenanweisungen ausgeführt. Andernfalls endet die `for`-Schleife. (Wenn der Ausdruck `condition` vollständig weggelassen wird, wird die Bedingung als wahr angenommen.)
3. Die `statement` wird ausgeführt. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ }`), um diese Anweisungen zu gruppieren.
4. Falls vorhanden, wird der Aktualisierungsausdruck `afterthought` ausgeführt.
5. Die Steuerung kehrt zu Schritt 2 zurück.

### Beispiel

Im folgenden Beispiel enthält die Funktion eine `for`-Anweisung, die die Anzahl der ausgewählten Optionen in einer Scrollliste (ein [`<select>`](/de/docs/Web/HTML/Element/select)-Element, das mehrere Auswahlen erlaubt) zählt.

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

Hier erklärt die `for`-Anweisung die Variable `i` und initialisiert sie auf `0`. Sie überprüft, dass `i` geringer ist als die Anzahl der Optionen im `<select>`-Element, führt die folgende `if`-Anweisung aus und erhöht `i` um 1 nach jedem Durchlauf der Schleife.

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

Wenn `condition` `true` ist, wird die Anweisung erneut ausgeführt. Am Ende jeder Ausführung wird die Bedingung überprüft. Wenn die Bedingung `false` ist, stoppt die Ausführung und die Steuerung wechselt zur Anweisung nach `do...while`.

### Beispiel

Im folgenden Beispiel durchläuft die `do`-Schleife mindestens einmal und wiederholt sich, bis `i` nicht mehr kleiner als `5` ist.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## while-Anweisung

Eine {{jsxref("Statements/while", "while")}}-Anweisung führt ihre Anweisungen so lange aus, wie eine angegebene Bedingung als `true` bewertet wird. Eine `while`-Anweisung sieht wie folgt aus:

```js-nolint
while (condition)
  statement
```

Wenn die `condition` `false` wird, stoppt die `statement` innerhalb der Schleife und die Steuerung wechselt zur Anweisung nach der Schleife.

Der Bedingungstest erfolgt _bevor_ `statement` in der Schleife ausgeführt wird. Wenn die Bedingung `true` ergibt, wird `statement` ausgeführt, und die `condition` erneut getestet. Wenn die Bedingung `false` ergibt, stoppt die Ausführung, und die Steuerung wird zur Anweisung nach `while` weitergeleitet.

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

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n < 3` nicht mehr `true`, sodass die Schleife endet.

### Beispiel 2

Vermeiden Sie Endlosschleifen. Stellen Sie sicher, dass die Bedingung in einer Schleife irgendwann `false` wird – andernfalls wird die Schleife nie beendet! Die Anweisungen in der folgenden `while`-Schleife werden für immer ausgeführt, da die Bedingung nie `false` wird:

```js example-bad
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

## Gelabelte Anweisung

Eine {{jsxref("Statements/label", "label")}} weist einer Anweisung einen Bezeichner zu, mit dem Sie an einer anderen Stelle in Ihrem Programm darauf verweisen können. Beispielsweise können Sie ein Label verwenden, um eine Schleife zu identifizieren, und dann die `break`- oder `continue`-Anweisungen verwenden, um anzugeben, ob ein Programm die Schleife unterbrechen oder ihre Ausführung fortsetzen soll.

Die Syntax der gelabelten Anweisung sieht wie folgt aus:

```js-nolint
label:
  statement
```

Der Wert von `label` kann jeder JavaScript-Bezeichner sein, der kein reserviertes Wort ist. Die `statement`, die Sie mit einem Label identifizieren, kann jede Anweisung sein. Beispiele für die Verwendung von gelabelten Anweisungen finden Sie in den Beispielen für `break` und `continue` weiter unten.

## break-Anweisung

Verwenden Sie die {{jsxref("Statements/break", "break")}}-Anweisung, um eine Schleife, ein `switch` oder in Verbindung mit einer gelabelten Anweisung zu beenden.

- Wenn Sie `break` ohne Label verwenden, wird die nächsten umschließende `while`, `do-while`, `for` oder `switch` sofort beendet und die Steuerung auf die nächste Anweisung übertragen.
- Wenn Sie `break` mit einem Label verwenden, beendet es die angegebene gelabelte Anweisung.

Die Syntax der `break`-Anweisung sieht wie folgt aus:

```js-nolint
break;
break label;
```

1. Die erste Form der Syntax beendet die innerste umschließende Schleife oder den `switch`.
2. Die zweite Form der Syntax beendet die angegebene umschließende gelabelte Anweisung.

### Beispiel 1

Das folgende Beispiel durchläuft die Elemente in einem Array, bis es den Index eines Elements findet, dessen Wert `theValue` ist:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Beispiel 2: Brechen zu einem Label

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

- Wenn Sie `continue` ohne Label verwenden, beendet es die aktuelle Iteration der innersten umschließenden `while`, `do-while` oder `for`-Anweisung und setzt die Ausführung der Schleife mit der nächsten Iteration fort. Im Gegensatz zur `break`-Anweisung beendet `continue` nicht die Ausführung der Schleife vollständig. In einer `while`-Schleife springt es zurück zur Bedingung. In einer `for`-Schleife springt es zum `increment-expression`.
- Wenn Sie `continue` mit einem Label verwenden, bezieht es sich auf die Schleifenanweisung, die mit diesem Label identifiziert ist.

Die Syntax der `continue`-Anweisung sieht wie folgt aus:

```js-nolint
continue;
continue label;
```

### Beispiel 1

Das folgende Beispiel zeigt eine `while`-Schleife mit einer `continue`-Anweisung, die ausgeführt wird, wenn der Wert von `i` `3` ist. So nimmt `n` die Werte `1`, `3`, `7` und `12` an.

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

Eine Anweisung mit dem Label `checkIandJ` enthält eine Anweisung mit dem Label `checkJ`. Wenn `continue` auftritt, beendet das Programm die aktuelle Iteration von `checkJ` und beginnt die nächste Iteration. Jedes Mal, wenn `continue` auftritt, wiederholt sich `checkJ`, bis seine Bedingung `false` ergibt. Wenn `false` zurückgegeben wird, wird der Rest der `checkIandJ`-Anweisung abgeschlossen, und `checkIandJ` wiederholt sich, bis seine Bedingung `false` ergibt. Wenn `false` zurückgegeben wird, fährt das Programm mit der Anweisung nach `checkIandJ` fort.

Wenn `continue` ein Label von `checkIandJ` hätte, würde das Programm an der Spitze der `checkIandJ`-Anweisung fortfahren.

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
      continue checkJ;
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

Die folgende Funktion nimmt als ihr Argument ein Objekt und den Namen des Objekts. Sie durchläuft dann alle Eigenschaften des Objekts und gibt eine Zeichenkette zurück, die die Eigenschaftsnamen und deren Werte auflistet.

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

Für ein Objekt `car` mit den Eigenschaften `make` und `model` wäre `result`:

```plain
car.make = Ford
car.model = Mustang
```

### Arrays

Obwohl es verlockend sein mag, dies als eine Möglichkeit zur Iteration über {{jsxref("Array")}}-Elemente zu verwenden, gibt die `for...in`-Anweisung den Namen Ihrer benutzerdefinierten Eigenschaften zusätzlich zu den numerischen Indizes zurück.

Daher ist es besser, eine traditionelle {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index zu verwenden, wenn Sie über Arrays iterieren, da die `for...in`-Anweisung über benutzerdefinierte Eigenschaften zusätzlich zu den Array-Elementen iteriert, wenn Sie das Array-Objekt ändern (z. B. durch Hinzufügen benutzerdefinierter Eigenschaften oder Methoden).

## for...of-Anweisung

Die {{jsxref("Statements/for...of", "for...of")}}-Anweisung erstellt eine Schleife, die über [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (einschließlich {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("Functions/arguments", "arguments")}}-Objekt und so weiter) iteriert und einen benutzerdefinierten Iterationshaken aufruft, um Anweisungen für den Wert jeder unterschiedlichen Eigenschaft auszuführen.

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

Die `for...of`- und `for...in`-Anweisungen können auch mit [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwendet werden. Beispielsweise können Sie gleichzeitig über die Schlüssel und Werte eines Objekts mit {{jsxref("Object.entries()")}} iterieren.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
