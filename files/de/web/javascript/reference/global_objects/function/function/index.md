---
title: Funktion()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`Function()`**-Konstruktor erstellt {{jsxref("Function")}}-Objekte. Der direkte Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheits- und ähnlichen (aber weit weniger signifikanten) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval`, das Zugang zum lokalen Gültigkeitsbereich haben kann, erzeugt der `Function`-Konstruktor jedoch Funktionen, die nur im globalen Gültigkeitsbereich ausgeführt werden.

{{EmbedInteractiveExample("pages/js/function-constructor.html", "shorter")}}

## Syntax

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> **Note:** `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Varianten erzeugen eine neue `Function`-Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}

  - : Namen, die von der Funktion als formale Argumentnamen verwendet werden sollen. Jeder Name muss ein String sein, der einem gültigen JavaScript-Parameter entspricht (entweder ein einfacher [Bezeichner](/de/docs/Glossary/Identifier), ein [rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder ein [destrukturierter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder eine Liste solcher Strings, die durch Kommata getrennt sind.

    Da die Parameter auf die gleiche Weise wie Funktionsausdrücke analysiert werden, sind Leerzeichen und Kommentare zulässig. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist auch korrekt, obwohl es sehr verwirrend zu lesen ist.)

- `functionBody`
  - : Ein String, der die JavaScript-Anweisungen enthält, die die Funktionsdefinition ausmachen.

## Beschreibung

`Function`-Objekte, die mit dem `Function`-Konstruktor erstellt wurden, werden analysiert, wenn die Funktion erstellt wird. Dies ist weniger effizient als das Erstellen einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und deren Aufruf innerhalb Ihres Codes, da solche Funktionen mit dem Rest des Codes analysiert werden.

Alle an die Funktion übergebenen Argumente, außer dem letzten, werden als die Namen der Bezeichner der Parameter in der zu erstellenden Funktion in der Reihenfolge ihrer Übergabe behandelt. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei der Quellcode wie folgt zusammengesetzt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist durch den Aufruf der Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) der Funktion beobachtbar.

Im Gegensatz zu normalen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird jedoch der Name `anonymous` nicht zum Gültigkeitsbereich des `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Gültigkeitsbereich hat. Wenn sich `functionBody` nicht im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet (der Körper selbst muss die Direktive `"use strict"` haben, da er die Striktheit nicht vom Kontext erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

Beachten Sie, dass die beiden dynamischen Teile des zusammengestellten Quellcodes — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat analysiert werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert versuchsinjektionsähnliche Manipulationen.

```js
new Function("/*", "*/) {");
// SyntaxError: Unerwartetes Ende des Argument-Strings
// Wird nicht zu "function anonymous(/*) {*/) {}"
```

## Beispiele

### Argumente mit dem Funktionskonstruktor angeben

Der folgende Code erstellt ein `Function`-Objekt, das zwei Argumente entgegennimmt.

```js
// Beispiel kann direkt in Ihrer JavaScript-Konsole ausgeführt werden

// Erstellen einer Funktion, die zwei Argumente annimmt und die Summe dieser Argumente zurückgibt
const adder = new Function("a", "b", "return a + b");

// Funktion aufrufen
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionskörper verwendet werden, `return a + b`.

### Erstellen eines Funktionsobjekts aus einer Funktionsdeklaration oder einem Funktionsausdruck

```js
// Der Funktionskonstruktor kann mehrere Anweisungen aufnehmen, die durch ein Semikolon getrennt sind. Funktionsausdrücke erfordern eine Rückkehranweisung mit dem Namen der Funktion

// Beachten Sie, dass new Function aufgerufen wird. Dies ist so, dass wir die Funktion, die wir erstellt haben, direkt danach aufrufen können
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// Funktion aufrufen
sumOfArray([1, 2, 3, 4]);
// 10

// Wenn Sie new Function zum Erstellungszeitpunkt nicht aufrufen, können Sie die Methode Function.call() verwenden, um sie aufzurufen
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// Funktion aufrufen
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Funktionsdeklarationen erfordern keine Rückkehranweisung
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// Funktion aufrufen
sayHello("world");
// Hello, world
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Funktionen", "", 1)}}
