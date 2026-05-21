---
title: Schleifen und Iteration
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen bieten eine schnelle und einfache Möglichkeit, etwas wiederholt zu tun. Dieses Kapitel des [JavaScript-Leitfadens](/de/docs/Web/JavaScript/Guide) führt in die verschiedenen Iterationsanweisungen ein, die in JavaScript verfügbar sind.

Sie können sich eine Schleife als eine computerisierte Version des Spiels vorstellen, bei dem Sie jemandem sagen, er solle _X_ Schritte in eine Richtung machen und dann _Y_ Schritte in eine andere. Beispielsweise könnte die Idee "Gehen Sie fünf Schritte nach Osten" auf diese Weise als Schleife ausgedrückt werden:

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

Es gibt viele verschiedene Arten von Schleifen, aber im Wesentlichen tun sie alle dasselbe: Sie wiederholen eine Aktion eine bestimmte Anzahl von Malen. (Beachten Sie, dass diese Zahl auch null sein könnte!)

Die verschiedenen Schleifenmechanismen bieten unterschiedliche Möglichkeiten, die Start- und Endpunkte der Schleife zu bestimmen. In verschiedenen Situationen ist eine bestimmte Art von Schleife möglicherweise besser geeignet als andere.

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

Eine {{jsxref("Statements/for", "for")}}-Schleife wird wiederholt, bis eine angegebene Bedingung als falsch ausgewertet wird. Die JavaScript-`for`-Schleife ähnelt der Java- und C-`for`-Schleife.

Eine `for`-Anweisung sieht folgendermaßen aus:

```js-nolint
for (initialization; condition; afterthought)
  statement
```

Wenn eine `for`-Schleife ausgeführt wird, geschieht Folgendes:

1. Der initialisierende Ausdruck `initialization`, sofern vorhanden, wird ausgeführt. Dieser Ausdruck initialisiert in der Regel einen oder mehrere Schleifenzähler, aber die Syntax erlaubt einen Ausdruck beliebiger Komplexität. Dieser Ausdruck kann auch Variablen deklarieren.
2. Der Ausdruck `condition` wird ausgewertet. Wenn der Wert von `condition` wahr ist, werden die Schleifenanweisungen ausgeführt. Andernfalls endet die `for`-Schleife. (Wenn der `condition`-Ausdruck vollständig weggelassen wird, wird angenommen, dass die Bedingung wahr ist.)
3. Die `statement` wird ausgeführt. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ }`), um diese Anweisungen zu gruppieren.
4. Wenn vorhanden, wird der Aktualisierungsausdruck `afterthought` ausgeführt.
5. Die Kontrolle kehrt zu Schritt 2 zurück.

### Beispiel

Im folgenden Beispiel enthält die Funktion eine `for`-Anweisung, die die Anzahl der ausgewählten Optionen in einer Auswahlliste zählt (ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element, das Mehrfachauswahlen erlaubt).

#### HTML

```html
<form name="selectForm">
  <label for="musicTypes"
    >Choose some music types, then click the button below:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&amp;B</option>
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

Hier deklariert die `for`-Anweisung die Variable `i` und initialisiert sie mit `0`. Es wird überprüft, ob `i` kleiner als die Anzahl der Optionen im `<select>`-Element ist, die nachfolgende `if`-Anweisung wird ausgeführt, und `i` wird nach jedem Durchlauf der Schleife um 1 erhöht.

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

Die {{jsxref("Statements/do...while", "do...while")}}-Anweisung wird wiederholt, bis eine angegebene Bedingung als falsch ausgewertet wird.

Eine `do...while`-Anweisung sieht folgendermaßen aus:

```js-nolint
do
  statement
while (condition);
```

`statement` wird immer einmal ausgeführt, bevor die Bedingung
überprüft wird. (Um mehrere Anweisungen auszuführen, verwenden Sie eine Block-Anweisung (`{ }`), um diese Anweisungen zu gruppieren.)

Wenn `condition` wahr ist, wird die Anweisung erneut ausgeführt. Am Ende jeder Ausführung wird die Bedingung überprüft. Wenn die Bedingung falsch ist, stoppt die Ausführung und die Kontrolle wird an die Anweisung nach `do...while` übergeben.

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

Eine {{jsxref("Statements/while", "while")}}-Anweisung führt ihre Anweisungen so lange aus, wie eine angegebene Bedingung als `true` ausgewertet wird. Eine `while`-Anweisung sieht folgendermaßen aus:

```js-nolint
while (condition)
  statement
```

Wenn die `condition` falsch wird, stoppt das `statement` innerhalb der Schleife und die Kontrolle wird an die Anweisung nach der Schleife übergeben.

Der Bedingungstest erfolgt _bevor_ `statement` in der Schleife
ausgeführt wird. Wenn die Bedingung `true` zurückgibt, wird `statement` ausgeführt und die `condition` erneut geprüft. Wenn die Bedingung `false` zurückgibt, stoppt die Ausführung, und die Kontrolle wird an die Anweisung nach `while` übergeben.

Um mehrere Anweisungen auszuführen, verwenden Sie eine Block-Anweisung (`{ }`), um diese Anweisungen zu gruppieren.

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

Bei jedem Durchlauf erhöht die Schleife `n` und fügt diesen Wert zu `x` hinzu. Daher nehmen `x` und `n` folgende Werte an:

- Nach dem ersten Durchlauf: `n` = `1` und `x` = `1`
- Nach dem zweiten Durchlauf: `n` = `2` und `x` = `3`
- Nach dem dritten Durchlauf: `n` = `3` und `x` = `6`

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n < 3` nicht mehr `true`, sodass die Schleife beendet wird.

### Beispiel 2

Vermeiden Sie Endlosschleifen. Stellen Sie sicher, dass die Bedingung in einer Schleife letztendlich `false` wird – andernfalls wird die Schleife niemals enden! Die Anweisungen in der folgenden `while`-Schleife werden für immer ausgeführt, weil die Bedingung niemals `false` wird:

```js example-bad
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

## labeled-Anweisung

Eine {{jsxref("Statements/label", "label")}} bietet einer Anweisung eine Kennzeichnung, mit der Sie sich an anderer Stelle im Programm darauf beziehen können. Beispielsweise können Sie ein Label verwenden, um eine Schleife zu identifizieren, und dann die `break`- oder `continue`-Anweisungen verwenden, um anzugeben, ob ein Programm die Schleife unterbrechen oder fortsetzen soll.

Die Syntax der labeled-Anweisung sieht folgendermaßen aus:

```js-nolint
label:
  statement
```

Der Wert von `label` kann jeder JavaScript-Bezeichner sein, der kein reserviertes Wort ist. Die `statement`, die Sie mit einem Label identifizieren, kann eine beliebige Anweisung sein. Für Beispiele zur Verwendung von labeled-Anweisungen siehe die Beispiele von `break` und `continue` unten.

## break-Anweisung

Verwenden Sie die {{jsxref("Statements/break", "break")}}-Anweisung, um eine Schleife, `switch` oder in Verbindung mit einer labeled-Anweisung zu beenden.

- Wenn Sie `break` ohne Label verwenden, wird die unmittelbar umschlossene `while`, `do-while`, `for` oder `switch` sofort beendet und die Kontrolle geht zur folgenden Anweisung über.
- Wenn Sie `break` mit einem Label verwenden, wird die angegebene labeled-Anweisung beendet.

Die Syntax der `break`-Anweisung sieht folgendermaßen aus:

```js-nolint
break;
break label;
```

1. Die erste Form der Syntax beendet die unmittelbar umschlossene Schleife oder `switch`.
2. Die zweite Form der Syntax beendet die angegebene umschlossene labeled-Anweisung.

### Beispiel 1

Das folgende Beispiel iteriert durch die Elemente eines Arrays, bis es den Index eines Elements mit dem Wert `theValue` findet:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Beispiel 2: Abbruch zu einem Label

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

- Wenn Sie `continue` ohne Label verwenden, wird die aktuelle Iteration der unmittelbar umschlossenen `while`, `do-while` oder `for`-Anweisung beendet und die Ausführung der Schleife mit der nächsten Iteration fortgesetzt. Im Gegensatz zur `break`-Anweisung beendet `continue` nicht die Ausführung der Schleife vollständig. In einer `while`-Schleife springt es zurück zur Bedingung. In einer `for`-Schleife springt es zum `increment-expression`.
- Wenn Sie `continue` mit einem Label verwenden, bezieht es sich auf die Schleifenanweisung mit diesem Label.

Die Syntax der `continue`-Anweisung sieht folgendermaßen aus:

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

Wenn Sie `continue;` auskommentieren, würde die Schleife bis zum Ende laufen und Sie würden `1,3,6,10,15` sehen.

### Beispiel 2

Eine Anweisung mit dem Label `checkIandJ` enthält eine Anweisung mit dem Label `checkJ`. Wenn `continue` aufgerufen wird, beendet das Programm die aktuelle Iteration von `checkJ` und beginnt die nächste Iteration. Jedes Mal, wenn `continue` aufgerufen wird, wird `checkJ` erneut durchlaufen, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, wird der Rest der `checkIandJ`-Anweisung abgeschlossen, und `checkIandJ` wird erneut durchlaufen, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, wird das Programm bei der Anweisung nach `checkIandJ` fortgesetzt.

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

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert eine angegebene Variable über alle aufzählbaren Eigenschaften eines Objekts. Für jede eindeutige Eigenschaft führt JavaScript die angegebenen Anweisungen aus. Eine `for...in`-Anweisung sieht folgendermaßen aus:

```js-nolint
for (variable in object)
  statement
```

### Beispiel

Die folgende Funktion nimmt als Argument ein Objekt und den Namen des Objekts. Sie iteriert dann über alle Eigenschaften des Objekts und gibt einen String zurück, der die Eigenschaftsnamen und ihre Werte auflistet.

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

Obwohl es verlockend sein mag, dies als eine Möglichkeit zu verwenden, um über {{jsxref("Array")}}-Elemente zu iterieren, wird die `for...in`-Anweisung die Namen Ihrer benutzerdefinierten Eigenschaften zusätzlich zu den numerischen Indizes zurückgeben.

Daher ist es besser, eine traditionelle {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index zu verwenden, wenn Sie über Arrays iterieren, da die `for...in`-Anweisung über benutzerdefinierte Eigenschaften zusätzlich zu den Array-Elementen iteriert, wenn Sie das Array-Objekt modifizieren (z.B. durch Hinzufügen von benutzerdefinierten Eigenschaften oder Methoden).

## for...of-Anweisung

Die {{jsxref("Statements/for...of", "for...of")}}-Anweisung erstellt eine Schleife, die über [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (einschließlich {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("Functions/arguments", "arguments")}}-Objekt und so weiter) iteriert, und einen benutzerdefinierten Iterations-Hook mit Anweisungen aufruft, die für den Wert jeder eindeutigen Eigenschaft ausgeführt werden sollen.

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

Die `for...of` und `for...in`-Anweisungen können auch mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwendet werden. Zum Beispiel können Sie gleichzeitig über die Schlüssel und Werte eines Objekts mit {{jsxref("Object.entries()")}} iterieren.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
