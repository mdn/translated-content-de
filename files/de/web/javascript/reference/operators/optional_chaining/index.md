---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Optional-Chaining-Operator (`?.`)** greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das zugegriffen wird, oder die Funktion, die mit diesem Operator aufgerufen wird, {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird die Auswertung des Ausdrucks abgebrochen und er ergibt {{jsxref("undefined")}}, statt einen Fehler auszulösen.

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

### Parameter

- `obj`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 17 (Zugriff und Aufruf) oder höher.
- `prop`
  - : Der [Bezeichnername](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) der Eigenschaft, auf die zugegriffen werden soll.
- `expr`
  - : Ein Ausdruck mit beliebiger [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), der nur ausgewertet wird, wenn `obj` weder `null` noch `undefined` ist. Sein Wert wird in einen Eigenschaftsschlüssel umgewandelt (einen [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder ein Symbol).
- `func`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 17 (Zugriff und Aufruf) oder höher, der eine Funktion, `null` oder `undefined` ergibt.
- `args`
  - : Die Argumente, die an `func` übergeben werden. Sie werden nur ausgewertet, wenn `func` weder `null` noch `undefined` ist. Jedes Argument kann ein [Spread-Argument](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher sein.

### Rückgabewert

`undefined`, wenn `obj` oder `func` `null` oder `undefined` ist. Andernfalls das Ergebnis des Eigenschaftszugriffs oder Funktionsaufrufs.

## Beschreibung

Der Operator `?.` ähnelt dem Verkettungsoperator `.`, bricht die Auswertung eines Ausdrucks jedoch mit dem Rückgabewert `undefined` ab, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, statt einen Fehler auszulösen. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Dadurch werden Ausdrücke für den Zugriff auf verkettete Eigenschaften kürzer und einfacher, wenn eine Referenz möglicherweise fehlt. Der Operator kann auch nützlich sein, wenn Sie den Inhalt eines Objekts untersuchen und nicht bekannt ist, welche Eigenschaften vorhanden sein müssen.

Betrachten Sie beispielsweise ein verschachteltes Objekt `obj`. Ohne Optional Chaining müssen Sie beim Zugriff auf eine tief verschachtelte Untereigenschaft die dazwischenliegenden Referenzen prüfen:

```js
const nestedProp = obj.first && obj.first.second;
```

Bevor auf den Wert von `obj.first.second` zugegriffen wird, wird geprüft, ob `obj.first` weder `null` noch `undefined` ist. Dadurch wird der Fehler verhindert, der bei einem direkten Zugriff auf `obj.first.second` ohne Prüfung von `obj.first` auftreten würde.

Dieses Muster ist in JavaScript üblich, wird bei langen Ketten jedoch umständlich und ist nicht zuverlässig. Wenn `obj.first` beispielsweise einen {{Glossary("Falsy", "Falsy-Wert")}} hat, der weder `null` noch `undefined` ist, etwa `0`, wird die Auswertung trotzdem abgebrochen und `nestedProp` erhält den Wert `0`. Das ist möglicherweise nicht erwünscht.

Mit dem Optional-Chaining-Operator (`?.`) müssen Sie den Wert von `obj.first` dagegen nicht ausdrücklich prüfen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Wenn Sie `?.` statt `.` verwenden, prüft JavaScript implizit, ob `obj.first` weder `null` noch `undefined` ist, bevor es auf `obj.first.second` zugreift. Ist `obj.first` `null` oder `undefined`, wird die Auswertung des Ausdrucks automatisch abgebrochen und `undefined` zurückgegeben.

Dies entspricht dem Folgenden, mit dem Unterschied, dass die temporäre Variable tatsächlich nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht mit einem nicht deklarierten Wurzelobjekt verwendet werden, wohl aber mit einem Wurzelobjekt, dessen Wert `undefined` ist.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining bei Funktionsaufrufen

Sie können Optional Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Das ist beispielsweise bei einer API hilfreich, in der eine Methode aufgrund des Alters der Implementierung oder wegen einer Funktion, die auf dem Gerät der Benutzerin oder des Benutzers nicht verfügbar ist, fehlen kann.

Bei Funktionsaufrufen bewirkt Optional Chaining, dass der Ausdruck automatisch `undefined` zurückgibt, statt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit diesem Namen existiert, die keine Funktion ist, löst die Verwendung von `?.` weiterhin eine {{jsxref("TypeError")}}-Ausnahme aus: „someInterface.customMethod is not a function“.

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird weiterhin eine {{jsxref("TypeError")}}-Ausnahme ausgelöst („someInterface is null“). Falls `someInterface` selbst `null` oder `undefined` sein kann, müssen Sie `?.` auch an dieser Stelle verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist die kürzeste Möglichkeit, den Modus für [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) zu verwenden.

### Optional Chaining mit Ausdrücken

Sie können den Optional-Chaining-Operator auch mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden. So lässt sich ein Ausdruck als Eigenschaftsname angeben:

```js
const propName = "x";
const nestedProp = obj?.[propName];
```

Dies ist besonders bei Arrays nützlich, da auf Array-Indizes mit eckigen Klammern zugegriffen werden muss.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültige Verwendung von Optional Chaining

Dem Ergebnis eines Optional-Chaining-Ausdrucks kann kein Wert zugewiesen werden:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Tags für Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor in einem {{jsxref("new")}}-Ausdruck kann keine optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Kurzschlussauswertung

Wenn Sie Optional Chaining mit Ausdrücken verwenden, wird der Ausdruck nicht ausgewertet, falls der linke Operand `null` oder `undefined` ist. Beispiel:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

Auch nachfolgende Eigenschaftszugriffe werden nicht ausgewertet.

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

Diese Kurzschlussauswertung gilt jedoch nur innerhalb einer durchgehenden „Kette“ von Eigenschaftszugriffen. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe weiterhin ausgewertet.

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

Allerdings wird die Variable `temp` nicht erstellt.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht in einer Map nach dem Wert der Eigenschaft `name` des Eintrags `CSS`, obwohl dieser Eintrag nicht existiert. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Callbacks oder Event-Handlern

Wenn Sie Callbacks verwenden oder Methoden aus einem Objekt mittels [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) entnehmen, können Werte fehlen, die Sie nicht ohne vorherige Prüfung als Funktionen aufrufen können. Mit `?.` können Sie diese zusätzliche Prüfung vermeiden:

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

### Mehrfache Verwendung des Optional-Chaining-Operators

Bei verschachtelten Strukturen können Sie Optional Chaining mehrfach verwenden:

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

### Kombination mit dem Nullish-Coalescing-Operator

Nach Optional Chaining können Sie den [Nullish-Coalescing-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) verwenden, um einen Standardwert festzulegen, wenn kein Wert gefunden wurde:

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

- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
