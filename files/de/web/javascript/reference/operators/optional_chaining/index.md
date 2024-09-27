---
title: Optional chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **Optional Chaining (`?.`)**-Operator greift auf die Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das mittels dieses Operators aufgerufene Objekt oder die Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck abgebrochen und ergibt {{jsxref("undefined")}} anstelle eines Fehlers.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Syntax

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.`-Operator ähnelt dem `.`-Verkettungsoperator, außer dass er keinen Fehler verursacht, wenn eine Referenz [nullish](/de/docs/Glossary/Nullish) ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist. Stattdessen wird der Ausdruck mit einem Rückgabewert von `undefined` abgebrochen. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlt. Es kann auch hilfreich sein, den Inhalt eines Objekts zu erkunden, wenn nicht garantiert ist, welche Eigenschaften erforderlich sind.

Zum Beispiel, betrachten Sie ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne
Optional Chaining erfordert das Suchen eines tief verschachtelten Untereigenschafts das Validieren der Referenzen dazwischen, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird als nicht-`null` (und
nicht-`undefined`) bestätigt, bevor auf den Wert von
`obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie direkt auf `obj.first.second` zugreifen würden, ohne `obj.first` zu testen.

Dies ist ein idiomatisches Muster in JavaScript, aber es wird umständlich, wenn die Kette lang ist, und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein [Falsy](/de/docs/Glossary/Falsy) Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es dennoch abkürzen und `nestedProp` zu `0` machen, was möglicherweise nicht wünschenswert ist.

Mit dem Optional Chaining Operator (`?.`) müssen Sie jedoch nicht explizit den Zustand von `obj.first` testen und abbrechen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.`, weiß JavaScript, dass es implizit prüfen soll, dass `obj.first` nicht `null` oder `undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch abgebrochen und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable tatsächlich nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht auf einem nicht deklarierten Root-Objekt verwendet werden, aber kann mit einem Root-Objekt mit Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining bei Funktionsaufrufen

Sie können Optional Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann hilfreich sein, zum Beispiel bei der Verwendung einer API, bei der eine Methode möglicherweise nicht verfügbar ist, sei es aufgrund des Alters der Implementierung oder weil eine Funktion auf dem Gerät des Benutzers nicht verfügbar ist.

Die Verwendung von Optional Chaining bei Funktionsaufrufen bewirkt, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird die Verwendung von `?.` weiterhin eine {{jsxref("TypeError")}}-Ausnahme "someInterface.customMethod is not a function" auslösen.

> [!NOTE]
> Wenn `someInterface` selbst `null` oder
> `undefined` ist, wird eine {{jsxref("TypeError")}}-Ausnahme dennoch
> ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass
> `someInterface` selbst `null` oder `undefined`
> sein kann, müssen Sie `?.` auch an dieser Stelle verwenden:
> `someInterface?.customMethod?.()`.

`eval?.()` ist die kürzeste Möglichkeit, den [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus zu betreten.

### Optional Chaining mit Ausdrücken

Sie können den Optional Chaining Operator auch mit der [Bracket Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die es ermöglicht, einen Ausdruck als Eigenschaftsnamen zu übergeben:

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

Es ist ungültig, dem Ergebnis eines Optional Chaining-Ausdrucks einen Wert zuzuweisen:

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

### Short-Circuiting

Bei Verwendung von Optional Chaining mit Ausdrücken wird der Ausdruck nicht ausgewertet, wenn der linke Operand `null` oder `undefined` ist. Zum Beispiel:

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

Diese Short-Circuiting-Verhaltensweise tritt jedoch nur entlang einer durchgehenden "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

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

Dieses Beispiel sucht nach dem Wert der `name`-Eigenschaft für das Mitglied
`bar` in einer Map, wenn es ein solches Mitglied nicht gibt. Das Ergebnis ist daher
`undefined`.

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### Umgang mit optionalen Rückruffunktionen oder Ereignis-Handlern

Wenn Sie Rückruffunktionen verwenden oder Methoden aus einem Objekt mit
[einem destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) abrufen, können Sie nicht vorhandene Werte haben, die Sie nicht als
Funktionen aufrufen können, es sei denn, Sie haben ihre Existenz getestet. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

### Stacking des Optional Chaining Operators

Bei verschachtelten Strukturen ist es möglich, Optional Chaining mehrere Male zu verwenden:

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

Der [nullish coalescing operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem Optional Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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
