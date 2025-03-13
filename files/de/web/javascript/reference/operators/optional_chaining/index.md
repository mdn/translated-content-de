---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Optional Chaining (`?.`)**-Operator greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt oder die aufgerufene Funktion mit diesem Operator {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck kurzgeschlossen und ergibt {{jsxref("undefined")}} anstatt einen Fehler auszulösen.

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
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.`-Operator ähnelt dem `.`-Chaining-Operator, außer dass der Ausdruck, anstatt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, mit einem Rückgabewert von `undefined` kurzgeschlossen wird. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken, wenn auf verkettete Eigenschaften zugegriffen wird und die Möglichkeit besteht, dass eine Referenz fehlen könnte. Es kann auch hilfreich sein, während der Erkundung des Inhalts eines Objekts, wenn keine bekannte Garantie besteht, welche Eigenschaften erforderlich sind.

Zum Beispiel, betrachten Sie ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne Optional Chaining erfordert das Nachschlagen eines tief verschachtelten Unterobjekts die Validierung der dazwischenliegenden Referenzen, wie:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt, dass er nicht `null` (und nicht `undefined`) ist, bevor auf den Wert von `obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie `obj.first.second` direkt ohne Prüfung von `obj.first` zugreifen.

Dies ist ein idiomatisches Muster in JavaScript, aber es wird langwierig, wenn die Kette lang ist, und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es trotzdem kurzschließen und `nestedProp` zu `0` machen, was möglicherweise nicht wünschenswert ist.

Mit dem Optional Chaining Operator (`?.`) müssen Sie jedoch nicht explizit testen und basierend auf dem Zustand von `obj.first` kurzschließen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.` weiß JavaScript, dass es implizit sicherstellen muss, dass `obj.first` nicht `null` oder `undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch kurzgeschlossen und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable tatsächlich nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht auf einem nicht deklarierten Root-Objekt verwendet werden, kann jedoch bei einem Root-Objekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining mit Funktionsaufrufen

Sie können das Optional Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann beispielsweise hilfreich sein, wenn Sie eine API verwenden, in der eine Methode möglicherweise aufgrund des Alters der Implementierung oder wegen einer Funktion, die auf dem Gerät des Benutzers nicht verfügbar ist, nicht verfügbar ist.

Die Verwendung von Optional Chaining mit Funktionsaufrufen bewirkt, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Es sei jedoch darauf hingewiesen, dass, wenn eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, die Verwendung von `?.` immer noch eine {{jsxref("TypeError")}}-Ausnahme auslösen wird: „someInterface.customMethod is not a function“.

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein könnte, müssen Sie `?.` auch in dieser Position verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um in den [_indirekten eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus zu gelangen.

### Optional Chaining mit Ausdrücken

Sie können den Optional Chaining Operator auch mit der [Bracketschreibweise](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die es erlaubt, einen Ausdruck als Eigenschaftsnamen zu übergeben:

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

Es ist ungültig, zu versuchen, das Ergebnis eines Optional Chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template Literal Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann keine optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Short-Circuiting

Wenn Sie Optional Chaining mit Ausdrücken verwenden, wird der Ausdruck nicht ausgewertet, wenn der linke Operand `null` oder `undefined` ist. Beispielsweise:

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

Dieses Short-Circuiting-Verhalten tritt jedoch nur entlang einer kontinuierlichen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe weiterhin ausgewertet.

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

Außer dass die Variable `temp` nicht erstellt wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht nach dem Wert der `name`-Eigenschaft für das Mitglied `CSS` in einer Map, wenn es kein solches Mitglied gibt. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Callbacks oder Event-Handlern

Wenn Sie Callbacks oder Abrufmethoden aus einem Objekt mit einem [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring)-Muster verwenden, haben Sie möglicherweise nicht vorhandene Werte, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben ihre Existenz getestet. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

### Stapeln des Optional Chaining Operators

Bei verschachtelten Strukturen ist es möglich, Optional Chaining mehrmals zu verwenden:

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
