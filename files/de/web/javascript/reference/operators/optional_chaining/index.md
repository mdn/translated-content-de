---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der **Optional Chaining (`?.`)**-Operator greift auf eine Objekteigenschaft zu oder ruft eine Funktion auf. Wenn das mit diesem Operator aufgerufene Objekt oder die Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck abgebrochen und zu {{jsxref("undefined")}} ausgewertet, anstatt einen Fehler auszulösen.

{{InteractiveExample("JavaScript Demo: Optional Chaining (?.) operator", "taller")}}

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

Der `?.`-Operator ähnelt dem `.`-Chaining-Operator, außer dass er anstelle eines Fehlers, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, den Ausdruck mit einem Rückgabewert von `undefined` abbricht. Beim Einsatz bei Funktionsaufrufen gibt er `undefined` zurück, wenn die gegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlt. Es kann auch hilfreich sein, den Inhalt eines Objekts zu erkunden, wenn nicht garantiert werden kann, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne Optional Chaining erfordert das Aufsuchen einer tief verschachtelten Untereigenschaft die Validierung der dazwischenliegenden Referenzen, wie etwa:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird auf nicht-`null` (und nicht-`undefined`) überprüft, bevor der Wert von `obj.first.second` aufgerufen wird. Dies verhindert den Fehler, der auftritt, wenn Sie `obj.first.second` direkt ohne Überprüfung von `obj.first` aufrufen würden.

Dies ist ein idiomatisches Muster in JavaScript, aber bei langen Ketten wird es umständlich und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es trotzdem abbrechen und `nestedProp` zu `0` machen, was möglicherweise nicht erwünscht ist.

Mit dem Optional Chaining-Operator (`?.`) müssen Sie jedoch nicht explizit testen und basierend auf dem Zustand von `obj.first` abkürzen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.`, weiß JavaScript, dass es implizit überprüfen muss, ob `obj.first` nicht `null` oder `undefined` ist, bevor es versucht, `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, bricht der Ausdruck automatisch ab und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable tatsächlich nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht auf ein nicht deklariertes Wurzelobjekt angewendet werden, kann aber auf ein Wurzelobjekt mit dem Wert `undefined` angewendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining bei Funktionsaufrufen

Sie können Optional Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann hilfreich sein, zum Beispiel bei der Verwendung einer API, bei der eine Methode entweder aufgrund des Alters der Implementierung oder wegen einer Funktion, die auf dem Gerät des Benutzers nicht verfügbar ist, nicht verfügbar sein könnte.

Die Verwendung von Optional Chaining bei Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme zu werfen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird die Verwendung von `?.` dennoch eine {{jsxref("TypeError")}}-Ausnahme auslösen: "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird dennoch eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein könnte, müssen Sie `?.` an dieser Stelle ebenfalls verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um in den [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) Modus zu gelangen.

### Optional Chaining mit Ausdrücken

Sie können den Optional Chaining-Operator auch mit [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die das Übergeben eines Ausdrucks als Eigenschaftsname ermöglicht:

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

### Ungültiges Optional Chaining

Es ist ungültig, dem Ergebnis eines Optional Chaining-Ausdrucks einen Wert zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template Literal-Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("new")}}-Ausdrücken kann keine optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Short-Circuiting

Wenn das optionale Chaining mit Ausdrücken verwendet wird und der linke Operand `null` oder `undefined` ist, wird der Ausdruck nicht ausgewertet. Zum Beispiel:

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

Dies ist gleichwertig mit:

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

Dieses Short-Circuiting-Verhalten tritt jedoch nur entlang einer kontinuierlichen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

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

Außer, dass die `temp`-Variable nicht erstellt wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht nach dem Wert der `name`-Eigenschaft für das Mitglied `CSS` in einer Map, wenn es kein solches Mitglied gibt. Daher ist das Ergebnis `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignis-Handlern

Wenn Sie Rückrufe verwenden oder Methoden aus einem Objekt mit einem [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) Muster abrufen, haben Sie möglicherweise nicht vorhandene Werte, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben deren Existenz überprüft. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

### Stapeln des Optional Chaining-Operators

Bei verschachtelten Strukturen ist es möglich, Optional Chaining mehrfach zu verwenden:

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

### Kombination mit dem Nullish Coalescing-Operator

Der [Nullish Coalescing-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem Optional Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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

- [Nullish Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
