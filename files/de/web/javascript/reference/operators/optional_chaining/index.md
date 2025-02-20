---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Optional Chaining (`?.`)**-Operator greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das über diesen Operator zugegriffen wird, oder die aufgerufene Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck unterbrochen und stattdessen auf {{jsxref("undefined")}} ausgewertet, anstatt einen Fehler auszulösen.

{{InteractiveExample("JavaScript Demo: Expressions - Optional chaining operator", "taller")}}

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
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.`-Operator funktioniert ähnlich wie der Verkettungsoperator `.`, mit dem Unterschied, dass der Ausdruck bei einer {{Glossary("Nullish", "nullish")}}-Referenz ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) unterbrochen wird und `undefined` zurückgibt, anstatt einen Fehler zu werfen. Wird er mit Funktionsaufrufen verwendet, gibt er `undefined` zurück, wenn die gegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlt. Er kann auch nützlich sein, um den Inhalt eines Objekts zu untersuchen, wenn es keine bekannte Garantie gibt, welche Eigenschaften erforderlich sind.

Betrachten Sie beispielsweise ein Objekt `obj`, das eine geschachtelte Struktur hat. Ohne Optional Chaining erfordert das Aufrufen einer tief geschachtelten Untereigenschaft die Validierung der Referenzen dazwischen, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt, dass er nicht-`null` (und nicht-`undefined`) ist, bevor auf den Wert von `obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie direkt auf `obj.first.second` zugreifen würden, ohne `obj.first` zu prüfen.

Dies ist ein idiomatisches Muster in JavaScript, aber es wird umständlich, wenn die Kette lang ist, und es ist nicht immer sicher. Wenn `obj.first` beispielsweise ein {{Glossary("Falsy", "Falsy")}}-Wert ist, der nicht `null` oder `undefined` ist, wie z. B. `0`, wird dennoch die Abkürzung genommen und `nestedProp` würde zu `0`, was möglicherweise nicht wünschenswert ist.

Mit dem Optional Chaining Operator (`?.`) müssen Sie jedoch nicht explizit testen und die Abkürzung basierend auf dem Zustand von `obj.first` erstellen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.` weiß JavaScript, dass es implizit prüfen muss, ob `obj.first` nicht `null` oder `undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch unterbrochen und gibt `undefined` zurück.

Dies entspricht dem folgenden, jedoch wird die temporäre Variable tatsächlich nicht erstellt:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht auf ein nicht deklariertes Root-Objekt angewendet werden, aber es kann mit einem Root-Objekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining mit Funktionsaufrufen

Sie können Optional Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann beispielsweise hilfreich sein, wenn Sie eine API verwenden, bei der eine Methode entweder aufgrund des Alters der Implementierung oder aufgrund einer Funktion, die auf dem Gerät des Benutzers nicht verfügbar ist, nicht verfügbar ist.

Die Verwendung von Optional Chaining mit Funktionsaufrufen bewirkt, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, falls die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit diesem Namen existiert, die jedoch keine Funktion ist, wird bei Verwendung von `?.` dennoch eine {{jsxref("TypeError")}}-Ausnahme ausgelöst: "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird weiterhin eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein könnte, müssen Sie `?.` an dieser Position ebenfalls verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus aufzurufen.

### Optional Chaining mit Ausdrücken

Der Optional Chaining Operator kann auch mit [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwendet werden, was das Übergeben eines Ausdrucks als Eigenschaftsnamen ermöglicht:

```js
const nestedProp = obj?.["prop" + "Name"];
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

Es ist ungültig, das Ergebnis eines Optional-Chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template Literal Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können nicht Teil einer Optional Chain sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann nicht Teil einer Optional Chain sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Short-Circuiting

Wenn Optional Chaining mit Ausdrücken verwendet wird und der linke Operand `null` oder `undefined` ist, wird der Ausdruck nicht ausgewertet. Zum Beispiel:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

Nachfolgende Zugriffe auf Eigenschaften werden ebenfalls nicht ausgewertet.

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

Dieses Short-Circuiting-Verhalten tritt jedoch nur entlang einer zusammenhängenden "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe weiterhin ausgewertet.

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

Mit der Ausnahme, dass die temporäre Variable nicht erstellt wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht nach dem Wert der `name`-Eigenschaft für das Element `CSS` in einer Map, wenn ein solches Element nicht vorhanden ist. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Callbacks oder Event-Handlern

Wenn Sie Callbacks verwenden oder Methoden eines Objekts mit [Destructuring Assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) abrufen, können Sie nicht existente Werte haben, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben deren Existenz geprüft. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

### Stacken des Optional Chaining-Operators

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

### Kombination mit dem Nullish Coalescing Operator

Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach Optional Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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
