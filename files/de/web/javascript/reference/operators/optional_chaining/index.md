---
title: Optional chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Operators")}}

Der **optional chaining (`?.`)**-Operator greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das zugegriffen wird oder die Funktion, die mit diesem Operator aufgerufen wird, {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, verzweigt der Ausdruck und wertet zu {{jsxref("undefined")}} aus, anstatt einen Fehler auszulösen.

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

Der `?.`-Operator ist wie der `.`-Verkettungsoperator, außer dass anstelle eines Fehlers, wenn ein Verweis {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, der Ausdruck mit einem Rückgabewert von `undefined` abbricht. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die gegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass ein Verweis fehlen könnte. Es kann auch hilfreich sein, den Inhalt eines Objekts zu erkunden, wenn es keine bekannte Garantie gibt, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne optional chaining erfordert das Aufsuchen einer tief verschachtelten Untereigenschaft die Validierung der dazwischenliegenden Verweise, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt, dass er nicht `null` (und nicht `undefined`) ist, bevor auf den Wert von `obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie `obj.first.second` direkt zugreifen würden, ohne `obj.first` zu testen.

Dies ist ein idiomatisches Muster in JavaScript, aber es wird wortreich, wenn die Kette lang ist, und es ist nicht sicher. Beispielsweise, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es immer noch abzweigen und `nestedProp` würde `0` werden, was möglicherweise nicht wünschenswert ist.

Mit dem optional chaining Operator (`?.`) müssen Sie jedoch nicht explizit testen und basierend auf dem Zustand von `obj.first` abzweigen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.`, erkennt JavaScript, dass es implizit überprüft, ob `obj.first` nicht `null` oder `undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch abgebrochen und gibt `undefined` zurück.

Dies entspricht dem folgenden, außer dass die temporäre Variable in der Tat nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional chaining kann nicht auf ein nicht deklariertes Wurzelobjekt angewendet werden, kann aber mit einem Wurzelobjekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional chaining mit Funktionsaufrufen

Sie können optional chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann hilfreich sein, zum Beispiel bei der Verwendung einer API, bei der eine Methode möglicherweise nicht verfügbar ist, entweder aufgrund des Alters der Implementierung oder wegen einer Funktion, die auf dem Gerät des Benutzers nicht verfügbar ist.

Die Verwendung von optional chaining mit Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird die Verwendung von `?.` dennoch eine {{jsxref("TypeError")}}-Ausnahme auslösen: "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird dennoch eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein kann, müssen Sie `?.` an dieser Stelle ebenfalls verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um in den [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus zu gelangen.

### Optional chaining mit Ausdrücken

Sie können den optional chaining Operator auch mit [Klammernnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die es Ihnen erlaubt, einen Ausdruck als Eigenschaftsnamen zu übergeben:

```js
const nestedProp = obj?.["prop" + "Name"];
```

Dies ist besonders nützlich für Arrays, da Array-Indizes mit eckigen Klammern aufgerufen werden müssen.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges optional chaining

Es ist ungültig, zu versuchen, das Ergebnis eines optional chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template literal tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann keine optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Short-circuiting

Bei der Verwendung von optional chaining mit Ausdrücken, wenn der linke Operand `null` oder `undefined` ist, wird der Ausdruck nicht ausgewertet. Zum Beispiel:

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

Dieses Verhalten des verkürzten Abzweigens tritt jedoch nur entlang einer kontinuierlichen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

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

Dieses Beispiel sucht nach dem Wert der Eigenschaft `name` für das Mitglied
`CSS` in einer Karte, wenn es kein solches Mitglied gibt. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignis-Handlern

Wenn Sie Rückrufe oder Abrufmethoden von einem Objekt mit einem [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) Muster verwenden, können nicht existierende Werte entstehen, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben deren Existenz getestet. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

### Stapeln des optional chaining-Operators

Bei verschachtelten Strukturen ist es möglich, optional chaining mehrmals zu verwenden:

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

### Kombinieren mit dem nullish coalescing operator

Der [nullish coalescing operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach optional chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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

- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
