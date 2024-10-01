---
title: Optional chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **optionale Verkettungsoperator (`?.`)** greift auf die Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das mit diesem Operator zugegriffen wird, oder die aufgerufene Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck kurzgeschlossen und zu {{jsxref("undefined")}} ausgewertet, anstatt einen Fehler auszulösen.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Syntax

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.`-Operator ähnelt dem `.`-Verkettungsoperator, außer dass der Ausdruck beim Verküpfen mit einer {{Glossary("Nullish", "nullhaften")}} Referenz ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) kurzgeschlossen wird und `undefined` zurückgibt, anstatt einen Fehler zu verursachen. Wenn er mit Funktionsaufrufen verwendet wird, gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlen könnte. Es kann auch hilfreich sein, den Inhalt eines Objekts zu explorieren, wenn nicht eindeutig ist, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne optionales Verküpfen erfordert das Nachschlagen einer tief verschachtelten Untereigenschaft die Validierung der Zwischenreferenzen, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird als nicht-`null` (und nicht-`undefined`) bestätigt, bevor auf den Wert von `obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie `obj.first.second` direkt ohne Überprüfung von `obj.first` zugreifen würden.

Dies ist ein idiomatisches Muster in JavaScript, wird jedoch bei langen Ketten langwierig und ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsified")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde er trotzdem kurzschließen und `nestedProp` zu `0` machen, was möglicherweise nicht erwünscht ist.

Mit dem optionalen Verkettungsoperator (`?.`) müssen Sie jedoch nicht explizit testen und basierend auf dem Zustand von `obj.first` kurzschließen, bevor Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von `.` weiß JavaScript implizit, dass `obj.first` vor dem Versuch, auf `obj.first.second` zuzugreifen, nicht `null` oder `undefined` sein sollte. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch kurzgeschlossen und gibt `undefined` zurück.

Dies entspricht dem folgenden, außer dass die temporäre Variable tatsächlich nicht erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optionales Verküpfen kann nicht auf ein nicht deklariertes Stammobjekt angewendet werden, aber es kann mit einem Stammobjekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optionales Verküpfen mit Funktionsaufrufen

Sie können optionales Verküpfen verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann beispielsweise hilfreich sein, wenn Sie eine API verwenden, in der eine Methode entweder aufgrund des Alters der Implementierung oder wegen einer nicht auf dem Gerät des Benutzers verfügbaren Funktion nicht verfügbar ist.

Die Verwendung des optionalen Verkettungsoperators mit Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen vorhanden ist, die keine Funktion ist, wird das Verwenden von `?.` trotzdem eine {{jsxref("TypeError")}} Ausnahme "someInterface.customMethod is not a function" auslösen.

> [!NOTE]
> Wenn `someInterface` selbst `null` oder `undefined` ist, wird immer noch eine {{jsxref("TypeError")}} Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass `someInterface` selbst `null` oder `undefined` sein könnte, müssen Sie `?.` auch an dieser Stelle verwenden: `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um den [_indirekten eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)-Modus einzugeben.

### Optionales Verküpfen mit Ausdrücken

Sie können den optionalen Verkettungsoperator auch mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die das Übergeben eines Ausdrucks als Eigenschaftsnamen ermöglicht:

```js
const nestedProp = obj?.["prop" + "Name"];
```

Dies ist insbesondere für Arrays nützlich, da Array-Indizes mit eckigen Klammern zugegriffen werden müssen.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges optionales Verküpfen

Es ist ungültig, das Ergebnis eines optionalen Verkettungsausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template Literal Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Verkettung sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann keine optionale Verkettung sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Kurzschließen

Bei Verwendung von optionalem Verküpfen mit Ausdrücken wird der Ausdruck nicht ausgewertet, wenn der linke Operanden `null` oder `undefined` ist. Zum Beispiel:

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

Dieses Kurzschlussverhalten tritt jedoch nur entlang einer kontinuierlichen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe dennoch ausgewertet.

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

außer dass die `temp`-Variable nicht erstellt wird.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel sucht nach dem Wert der `name`-Eigenschaft für das Mitglied `bar` in einer Map, wenn es kein solches Mitglied gibt. Das Ergebnis ist daher `undefined`.

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### Umgang mit optionalen Rückrufen oder Event-Handlern

Wenn Sie Rückrufe verwenden oder Methoden aus einem Objekt mit [einer Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) abrufen, können Sie nicht existierende Werte erhalten, die Sie nicht als Funktionen aufrufen können, es sei denn, Sie haben deren Existenz getestet. Mit `?.` können Sie diesen zusätzlichen Test vermeiden:

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

Bei verschachtelten Strukturen ist es möglich, das optionale Verküpfen mehrfach zu verwenden:

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

### Kombinieren mit dem Nullkoaleszenz-Operator

Der [Nullkoaleszenz-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem optionalen Verküpfen verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

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

- [Nullkoaleszenz-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
