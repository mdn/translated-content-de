---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Operators")}}

Der **optionale Verkettungsoperator (`?.`)** greift auf die Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das zugegriffen wird oder die Funktion, die mit diesem Operator aufgerufen wird, {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck unterbrochen und zu {{jsxref("undefined")}} ausgewertet, anstatt einen Fehler auszulösen.

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

Der `?.`-Operator ist wie der `.`-Verkettungsoperator, außer dass der Ausdruck, anstatt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, mit einem Rückgabewert von `undefined` abbricht. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlen könnte. Es kann auch hilfreich sein, wenn Sie den Inhalt eines Objekts untersuchen und nicht sicher sind, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne
optionales Chaining erfordert das Nachschlagen einer tief verschachtelten Untereigenschaft die Validierung der
zwischengeschalteten Referenzen, wie:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt, dass er nicht `null` (und
nicht `undefined`) ist, bevor der Wert von
`obj.first.second` abgerufen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie
`obj.first.second` direkt ohne Testen von `obj.first` aufrufen würden.

Dies ist ein idiomatisches Muster in JavaScript, aber es wird umständlich, wenn die Kette lang ist, und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es immer noch abbrechen und `nestedProp` zu `0` machen, was möglicherweise nicht erwünscht ist.

Mit dem optionalen Verkettungsoperator (`?.`) müssen Sie jedoch nicht explizit testen und basierend auf dem Zustand von `obj.first` abbrechen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.`, weiß JavaScript
implizit zu prüfen, ob `obj.first` nicht `null` oder
`undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn
`obj.first` `null` oder `undefined` ist, wird der Ausdruck
automatisch abgebrochen und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable tatsächlich nicht
erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optionales Chaining kann nicht auf einem nicht deklarierten Wurzelobjekt verwendet werden, kann jedoch mit einem Wurzelobjekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optionales Chaining mit Funktionsaufrufen

Sie können optionales Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann nützlich sein, zum Beispiel wenn Sie eine API verwenden, bei der eine Methode entweder wegen des Alters der Implementierung oder aufgrund einer Funktion, die auf dem Gerät des Benutzers nicht verfügbar ist, nicht vorhanden sein könnte.

Die Verwendung des optionalen Chainings bei Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme zu werfen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird die Verwendung von `?.` immer noch eine {{jsxref("TypeError")}}-Ausnahme auslösen: "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder
> `undefined` ist, wird immer noch eine {{jsxref("TypeError")}}-Ausnahme geworfen
> ("someInterface is null"). Wenn Sie erwarten, dass
> `someInterface` selbst `null` oder `undefined` sein könnte,
> müssen Sie `?.` auch an dieser Position verwenden:
> `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, in den [_indirekten eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus zu gelangen.

### Optionales Chaining mit Ausdrücken

Sie können den optionalen Verkettungsoperator auch mit der [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die es erlaubt, einen Ausdruck als Eigenschaftsnamen zu übergeben:

```js
const propName = "x";
const nestedProp = obj?.[propName];
```

Dies ist besonders nützlich für Arrays, da auf Array-Indizes mit eckigen Klammern zugegriffen werden muss.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges Optionales Chaining

Es ist ungültig, das Ergebnis eines optionalen Verkettungsausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Vorlagenliteral-Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optische Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann keine optische Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Kurzschließen (Short-circuiting)

Bei der Verwendung des optionalen Verkettungsoperators mit Ausdrücken wird, wenn der linke Operand `null` oder `undefined` ist, der Ausdruck nicht ausgewertet. Zum Beispiel:

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

Diese Kurzschlussverhalten tritt jedoch nur entlang einer durchgängigen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

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

Dieses Beispiel sucht den Wert der `name`-Eigenschaft für das Element
`CSS` in einer Karte, wenn es ein solches Element nicht gibt. Das Ergebnis ist daher
`undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignishandlern

Wenn Sie Rückrufe oder Methoden-Fetch aus einem Objekt mit einem
[Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) verwenden, haben Sie möglicherweise nicht vorhandene Werte, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben ihre Existenz getestet. Mit `?.` können Sie dieses zusätzliche Testen vermeiden:

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

### Stapeln des optionalen Verkettungsoperators

Bei verschachtelten Strukturen ist es möglich, das optionale Chaining mehrfach zu verwenden:

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

Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem optionalen Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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
