---
title: Schleifen und Iteration
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: 58b4c5864f0019c559a7530260a49189197b27f3
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen bieten eine schnelle und einfache Möglichkeit, etwas wiederholt auszuführen. In diesem Kapitel des [JavaScript-Leitfadens](/de/docs/Web/JavaScript/Guide) werden die verschiedenen Iterationsanweisungen eingeführt, die in JavaScript verfügbar sind.

Sie können sich eine Schleife als eine computerisierte Version des Spiels vorstellen, bei dem Sie jemandem sagen, dass er _X_ Schritte in eine Richtung und dann _Y_ Schritte in eine andere Richtung gehen soll. Zum Beispiel könnte die Idee "Gehe fünf Schritte nach Osten" auf folgende Weise als Schleife ausgedrückt werden:

```js
for (let step = 0; step < 5; step++) {
  // Läuft 5 Mal, mit den Werten von step 0 bis 4.
  console.log("Einen Schritt nach Osten gehen");
}
```

Es gibt viele verschiedene Arten von Schleifen, aber sie tun im Wesentlichen dasselbe: Sie wiederholen eine Aktion eine bestimmte Anzahl von Malen. (Es ist zu beachten, dass diese Anzahl auch null sein kann!)

Die verschiedenen Schleifenmechanismen bieten unterschiedliche Möglichkeiten, Start- und Endpunkte der Schleife zu bestimmen. Es gibt verschiedene Situationen, die durch eine Art von Schleife leichter bedient werden können als durch andere.

Die in JavaScript verfügbaren Schleifenanweisungen sind:

- [for-Anweisung](#for-anweisung)
- [do...while-Anweisung](#do...while-anweisung)
- [while-Anweisung](#while-anweisung)
- [labeled-Anweisung](#labeled-anweisung)
- [break-Anweisung](#break-anweisung)
- [continue-Anweisung](#continue-anweisung)
- [for...in-Anweisung](#for...in-anweisung)
- [for...of-Anweisung](#for...of-anweisung)

## for-Anweisung

Eine {{jsxref("Statements/for", "for")}}-Schleife wiederholt sich, bis eine angegebene Bedingung zu false ausgewertet wird. Die JavaScript `for`-Schleife ähnelt der `for`-Schleife in Java und C.

Eine `for`-Anweisung sieht folgendermaßen aus:

```js-nolint
for (initialization; condition; afterthought)
  statement
```

Wenn eine `for`-Schleife ausgeführt wird, geschieht Folgendes:

1. Der initialisierende Ausdruck `initialization`, falls vorhanden, wird ausgeführt. Dieser Ausdruck initialisiert normalerweise einen oder mehrere Schleifenzähler, aber die Syntax erlaubt einen Ausdruck beliebiger Komplexität. Dieser Ausdruck kann auch Variablen deklarieren.
2. Der Ausdruck `condition` wird ausgewertet. Wenn der Wert von `condition` wahr ist, werden die Schleifenanweisungen ausgeführt. Andernfalls endet die `for`-Schleife. (Wenn der Ausdruck `condition` vollständig weggelassen wird, wird die Bedingung als wahr angenommen.)
3. Die `statement` wird ausgeführt. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ }`), um diese Anweisungen zu gruppieren.
4. Falls vorhanden, wird der Aktualisierungsausdruck `afterthought` ausgeführt.
5. Die Steuerung kehrt zu Schritt 2 zurück.

### Beispiel

Im folgenden Beispiel enthält die Funktion eine `for`-Anweisung, die die Anzahl der ausgewählten Optionen in einer Scrollliste (ein [`<select>`](/de/docs/Web/HTML/Element/select)-Element, das Mehrfachauswahlen erlaubt) zählt.

#### HTML

```html
<form name="selectForm">
  <label for="musicTypes"
    >Wählen Sie einige Musikarten aus und klicken Sie dann auf die Schaltfläche unten:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Klassisch</option>
    <option>Oper</option>
  </select>
  <button id="btn" type="button">Wie viele sind ausgewählt?</button>
</form>
```

#### JavaScript

Hier deklariert die `for`-Anweisung die Variable `i` und initialisiert sie mit `0`. Sie überprüft, ob `i` kleiner als die Anzahl der Optionen im `<select>`-Element ist, führt die folgende `if`-Anweisung aus und inkrementiert `i` um 1 nach jedem Durchlauf der Schleife.

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
  console.log(`Sie haben ${countSelected(musicTypes)} Option(en) ausgewählt.`);
});
```

## do...while-Anweisung

Die {{jsxref("statements/do...while", "do...while")}}-Anweisung wiederholt sich, bis eine angegebene Bedingung zu false ausgewertet wird.

Eine `do...while`-Anweisung sieht folgendermaßen aus:

```js-nolint
do
  statement
while (condition);
```

`statement` wird immer einmal ausgeführt, bevor die Bedingung geprüft wird. (Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.)

Wenn `condition` `true` ist, wird die Anweisung erneut ausgeführt. Am Ende jeder Ausführung wird die Bedingung geprüft. Wenn die Bedingung `false` ist, wird die Ausführung gestoppt und die Steuerung an die Anweisung nach `do...while` weitergegeben.

### Beispiel

Im folgenden Beispiel wird die `do`-Schleife mindestens einmal durchlaufen und wiederholt, bis `i` nicht mehr kleiner als `5` ist.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## while-Anweisung

Eine {{jsxref("Statements/while", "while")}}-Anweisung führt ihre Anweisungen aus, solange eine angegebene Bedingung zu `true` ausgewertet wird. Eine `while`-Anweisung sieht folgendermaßen aus:

```js-nolint
while (condition)
  statement
```

Wenn die `condition` `false` wird, wird die `statement` innerhalb der Schleife nicht mehr ausgeführt und die Steuerung wird an die Anweisung nach der Schleife weitergegeben.

Der Bedingungstest erfolgt _vor_ der Ausführung der `statement` in der Schleife. Wenn die Bedingung `true` zurückgibt, wird die `statement` ausgeführt und die `condition` wird erneut getestet. Wenn die Bedingung `false` zurückgibt, wird die Ausführung gestoppt und die Steuerung an die Anweisung nach `while` weitergegeben.

Um mehrere Anweisungen auszuführen, verwenden Sie eine Blockanweisung (`{ }`), um diese Anweisungen zu gruppieren.

### Beispiel 1

Die folgende `while`-Schleife wird durchlaufen, solange `n` kleiner als `3` ist:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Bei jedem Durchlauf inkrementiert die Schleife `n` und addiert diesen Wert zu `x`. Deshalb nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = `1` und `x` = `1`
- Nach dem zweiten Durchlauf: `n` = `2` und `x` = `3`
- Nach dem dritten Durchlauf: `n` = `3` und `x` = `6`

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n < 3` nicht mehr `true`, sodass die Schleife endet.

### Beispiel 2

Vermeiden Sie Endlosschleifen. Stellen Sie sicher, dass die Bedingung in einer Schleife schließlich `false` wird - andernfalls wird die Schleife nie enden! Die Anweisungen in der folgenden `while`-Schleife werden für immer ausgeführt, da die Bedingung nie `false` wird:

```js example-bad
// Endlosschleifen sind schlecht!
while (true) {
  console.log("Hallo, Welt!");
}
```

## labeled-Anweisung

Eine {{jsxref("Statements/label", "label")}} bietet einer Anweisung eine Kennung, die Ihnen erlaubt, sie an anderer Stelle in Ihrem Programm zu referenzieren. Zum Beispiel können Sie ein Label verwenden, um eine Schleife zu identifizieren, und dann die `break`- oder `continue`-Anweisungen verwenden, um anzugeben, ob ein Programm die Schleife unterbrechen oder seine Ausführung fortsetzen soll.

Die Syntax der labeled-Anweisung sieht wie folgt aus:

```js-nolint
label:
  statement
```

Der Wert von `label` kann jeder JavaScript-Bezeichner sein, der kein reserviertes Wort ist. Die `statement`, die Sie mit einem Label identifizieren, kann jede Anweisung sein. Beispiele zur Verwendung von labeled-Anweisungen finden Sie in den Beispielen zu `break` und `continue` unten.

## break-Anweisung

Verwenden Sie die {{jsxref("Statements/break", "break")}}-Anweisung, um eine Schleife, `switch` oder in Verbindung mit einer labeled-Anweisung zu beenden.

- Wenn Sie `break` ohne ein Label verwenden, beendet es die innerste, umschließende `while`, `do-while`, `for` oder `switch`-Anweisung sofort und überträgt die Steuerung an die folgende Anweisung.
- Wenn Sie `break` mit einem Label verwenden, beendet es die spezifizierte labeled-Anweisung.

Die Syntax der `break`-Anweisung sieht so aus:

```js-nolint
break;
break label;
```

1. Die erste Form der Syntax beendet die innerste, umschließende Schleife oder `switch`.
2. Die zweite Form der Syntax beendet die spezifizierte, umschließende labeled-Anweisung.

### Beispiel 1

Im folgenden Beispiel wird durch die Elemente eines Arrays iteriert, bis der Index eines Elements gefunden wird, dessen Wert `theValue` ist:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Beispiel 2: Abbrechen zu einem Label

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Äußere Schleifen:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Innere Schleifen:", z);
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

- Wenn Sie `continue` ohne ein Label verwenden, beendet es die aktuelle Iteration der innersten, umschließenden `while`, `do-while` oder `for`-Anweisung und setzt die Ausführung der Schleife mit der nächsten Iteration fort. Im Gegensatz zur `break`-Anweisung beendet `continue` nicht die Ausführung der Schleife vollständig. In einer `while`-Schleife springt sie zurück zur Bedingung. In einer `for`-Schleife springt sie zum `increment-expression`.
- Wenn Sie `continue` mit einem Label verwenden, bezieht es sich auf die Schleifenanweisung, die mit diesem Label identifiziert wird.

Die Syntax der `continue`-Anweisung sieht wie folgt aus:

```js-nolint
continue;
continue label;
```

### Beispiel 1

Das folgende Beispiel zeigt eine `while`-Schleife mit einer `continue`-Anweisung, die ausgeführt wird, wenn der Wert von `i` `3` ist. Folglich nimmt `n` die Werte `1`, `3`, `7` und `12` an.

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

Wenn Sie das `continue;` auskommentieren, würde die Schleife bis zum Ende laufen und Sie würden `1, 3, 6, 10, 15` sehen.

### Beispiel 2

Eine Anweisung, die als `checkiandj` bezeichnet ist, enthält eine Anweisung, die als `checkj` bezeichnet ist. Wenn `continue` auftritt, beendet das Programm die aktuelle Iteration von `checkj` und beginnt mit der nächsten Iteration. Jedes Mal, wenn `continue` auftritt, wird `checkj` erneut ausgeführt, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, wird der Rest der `checkiandj`-Anweisung ausgeführt und `checkiandj` wird erneut ausgeführt, bis seine Bedingung `false` zurückgibt. Wenn `false` zurückgegeben wird, führt das Programm die Anweisung nach `checkiandj` weiter aus.

Wenn `continue` ein Label von `checkiandj` hätte, würde das Programm an der Spitze der `checkiandj`-Anweisung weitermachen.

```js
let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "ist ungerade.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

## for...in-Anweisung

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung durchläuft eine angegebene Variable über alle aufzählbaren Eigenschaften eines Objekts. Für jede unterschiedliche Eigenschaft führt JavaScript die angegebenen Anweisungen aus. Eine `for...in`-Anweisung sieht wie folgt aus:

```js-nolint
for (variable in object)
  statement
```

### Beispiel

Die folgende Funktion nimmt ein Objekt und den Namen des Objekts als Argument. Sie durchläuft dann alle Eigenschaften des Objekts und gibt einen String zurück, der die Eigenschaftsnamen und ihre Werte auflistet.

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

Deshalb ist es besser, eine traditionelle {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index zu verwenden, wenn Sie über Arrays iterieren, weil die `for...in`-Anweisung über benutzerdefinierte Eigenschaften zusätzlich zu den Array-Elementen iteriert, falls Sie das Array-Objekt modifizieren (wie das Hinzufügen benutzerdefinierter Eigenschaften oder Methoden).

## for...of-Anweisung

Die {{jsxref("Statements/for...of", "for...of")}}-Anweisung erstellt eine Schleife, die über [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (einschließlich {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("Functions/arguments", "arguments")}}-Objekt und so weiter) iteriert und einen benutzerdefinierten Iterationsmechanismus mit Anweisungen aufruft, die für den Wert jeder verschiedenen Eigenschaft ausgeführt werden sollen.

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

Die `for...of`- und `for...in`-Anweisungen können auch mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet werden. Zum Beispiel können Sie gleichzeitig über die Schlüssel und Werte eines Objekts mit {{jsxref("Object.entries()")}} iterieren.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
