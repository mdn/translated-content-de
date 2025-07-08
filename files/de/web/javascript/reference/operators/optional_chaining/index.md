---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Optional Chaining (`?.`)**-Operator greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das zugegriffen wird, oder die Funktion, die mit diesem Operator aufgerufen wird, {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck kurzgeschlossen und ergibt {{jsxref("undefined")}} anstelle eines Fehlers.

{{InteractiveExample("JavaScript Demo: Optional chaining (?.) operator", "taller")}}

```js interactive-example
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## Syntax

```js-nolint
obj?.prop
obj?.[expr]
func?.(args)
```

## Beschreibung

Der `?.`-Operator ist wie der `.`-Chaining-Operator, mit dem Unterschied, dass anstatt eines Fehlers, wenn ein Verweis {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, der Ausdruck mit einem Rückgabewert von `undefined` kurzgeschlossen wird. Bei Funktionsaufrufen wird `undefined` zurückgegeben, wenn die angegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass ein Verweis fehlen könnte. Es kann auch hilfreich sein, den Inhalt eines Objekts zu untersuchen, wenn keine Garantie besteht, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj` mit einer verschachtelten Struktur. Ohne Optional Chaining erfordert das Nachschlagen einer tief verschachtelten Untereigenschaft die Validierung der zwischengeschalteten Verweise wie folgt:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt, nicht-`null` (und nicht-`undefined`) zu sein, bevor der Wert von `obj.first.second` aufgerufen wird. Dies verhindert den Fehler, der entstehen würde, wenn Sie `obj.first.second` direkt ohne Prüfung von `obj.first` aufrufen würden.

Dies ist ein idiomatisches Muster in JavaScript, wird jedoch langatmig, wenn die Kette lang ist, und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}}-Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es immer noch zum Kurzschluss kommen und `nestedProp` würde zu `0`, was möglicherweise nicht wünschenswert ist.

Mit dem Optional Chaining Operator (`?.`) müssen Sie jedoch nicht explizit testen und darauf basierend auf den Zustand von `obj.first` verzichten, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.` weiß JavaScript, dass es implizit prüfen soll, ob `obj.first` nicht `null` oder `undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch kurzgeschlossen und `undefined` zurückgegeben.

Dies ist gleichbedeutend mit dem Folgenden, außer dass die temporäre Variable in der Tat nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht auf einem nicht deklarierten Stammobjekt verwendet werden, aber es kann mit einem Stammobjekt verwendet werden, dessen Wert `undefined` ist.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining bei Funktionsaufrufen

Sie können Optional Chaining verwenden, wenn versucht wird, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann hilfreich sein, zum Beispiel wenn Sie eine API verwenden, bei der eine Methode möglicherweise nicht verfügbar ist, entweder wegen des Alters der Implementierung oder weil eine Funktion nicht auf dem Gerät des Benutzers verfügbar ist.

Die Verwendung von Optional Chaining mit Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird die Verwendung von `?.` immer noch eine {{jsxref("TypeError")}}-Ausnahme auslösen: "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird immer noch eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein könnte, müssen Sie `?.` auch an dieser Position verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um in den [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus einzutreten.

### Optional Chaining mit Ausdrücken

Sie können den Optional Chaining Operator auch mit der [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die es ermöglicht, einen Ausdruck als Eigenschaftsnamen zu übergeben:

```js
const propName = "x";
const nestedProp = obj?.[propName];
```

Dies ist besonders nützlich für Arrays, da Array-Indizes mit eckigen Klammern zugegriffen werden müssen.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges Optional Chaining

Es ist ungültig, zu versuchen, das Ergebnis eines Optional-Chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Vorlagenliteraltags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können nicht eine Optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann nicht eine Optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Kurzschluss

Bei der Verwendung von Optional Chaining mit Ausdrücken, wenn der linke Operand `null` oder `undefined` ist, wird der Ausdruck nicht ausgewertet. Zum Beispiel:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

Nachfolgende Eigenschaftszugriffe werden ebenfalls nicht ausgewertet.

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// This does not throw, because evaluation has already stopped at
// the first optional chain
```

Dies entspricht:

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

Dieses Kurzschlussverhalten tritt jedoch nur innerhalb einer durchgehenden "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

```js
const potentiallyNullObj = null;
const prop = (potentiallyNullObj?.a).b;
// TypeError: Cannot read properties of undefined (reading 'b')
```

Dies entspricht:

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

Außer dass die `temp`-Variable nicht erstellt wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht den Wert der `name`-Eigenschaft für das Mitglied `CSS` in einer Map, wenn es kein solches Mitglied gibt. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignishandlern

Wenn Sie Rückrufe verwenden oder Methoden von einem Objekt mit einem [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring)-Muster abrufen, haben Sie möglicherweise nicht existierende Werte, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben deren Existenz getestet. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

```js
// Code written without optional chaining
function doSomething(onContent, onError) {
  try {
    // Do something with the data
  } catch (err) {
    // Testing if onError really exists
    if (onError) {
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
    // Do something with the data
  } catch (err) {
    onError?.(err.message); // No exception if onError is undefined
  }
}
```

### Stapelung des Optional Chaining Operators

Mit verschachtelten Strukturen ist es möglich, Optional Chaining mehrmals zu verwenden:

```js
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // Detailed address is unknown
  },
};
const customerCity = customer.details?.address?.city;

// This also works with optional chaining function call
const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
```

### Kombination mit dem Nullish Coalescing Operator

Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem Optional Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "Unknown city";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nathan",
  city: "Paris",
}); // "Paris"
printCustomerCity({
  name: "Carl",
  details: { age: 82 },
}); // "Unknown city"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
