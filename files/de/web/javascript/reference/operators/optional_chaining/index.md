---
title: Optional Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Operators")}}

Der **Optional-Chaining-Operator (`?.`)** greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das mit diesem Operator angesprochene Objekt oder die Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, bricht der Ausdruck ab und evaluiert zu {{jsxref("undefined")}}, anstatt einen Fehler zu werfen.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Syntax

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.` Operator funktioniert wie der `.` Verkettungsoperator, mit dem Unterschied, dass anstatt eines Fehlers, falls eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, der Ausdruck abbricht und `undefined` zurückgegeben wird. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die angegebene Funktion nicht existiert.

Das führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlen könnte. Es kann auch nützlich sein beim Erkunden des Inhalts eines Objekts, wenn es keine bekannte Garantie dafür gibt, welche Eigenschaften erforderlich sind.

Betrachten Sie zum Beispiel ein Objekt `obj`, das eine verschachtelte Struktur hat. Ohne
Optional Chaining erfordert das Nachschlagen einer tief-verschachtelten Untereigenschaft die Validierung der
dazwischen liegenden Referenzen, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird bestätigt als nicht-`null` (und
nicht-`undefined`) bevor auf den Wert von
`obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie direkt auf `obj.first.second` zugreifen würden, ohne `obj.first` zu testen.

Dies ist ein idiomatisches Muster in JavaScript, wird aber bei langen Ketten sehr ausführlich und ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy", "Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde er trotzdem abbrechen und `nestedProp` würde zu `0`, was möglicherweise unerwünscht ist.

Mit dem Optional-Chaining-Operator (`?.`) müssen Sie jedoch
nicht explizit testen und abbrechen basierend auf dem Zustand von `obj.first`, bevor
Sie versuchen, auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.` Operators anstatt nur `.`, weiß JavaScript
implizit zu prüfen, dass `obj.first` nicht `null` oder
`undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn
`obj.first` `null` oder `undefined` ist, bricht der Ausdruck
automatisch ab und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable tatsächlich nicht
erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional Chaining kann nicht bei einem nicht deklarierten Root-Objekt verwendet werden, kann jedoch mit einem Root-Objekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional Chaining mit Funktionsaufrufen

Sie können Optional-Chaining verwenden, wenn Sie versuchen, eine Methode aufzurufen, die möglicherweise nicht existiert. Dies kann hilfreich sein, beispielsweise beim Verwenden einer API, in der eine Methode möglicherweise
nicht verfügbar ist, entweder aufgrund des Alters der Implementierung oder weil eine Funktion auf dem Gerät des Benutzers nicht verfügbar ist.

Die Verwendung von Optional-Chaining mit Funktionsaufrufen führt dazu, dass der Ausdruck automatisch `undefined` zurückgibt, anstatt eine Ausnahme zu werfen, wenn die Methode nicht gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Allerdings, wenn es eine Eigenschaft mit einem solchen Namen gibt, die keine Funktion ist, wird die Verwendung von `?.` dennoch eine {{jsxref("TypeError")}} Ausnahme werfen "someInterface.customMethod is not a function".

> [!NOTE]
> Wenn `someInterface` selbst `null` oder
> `undefined` ist, wird eine {{jsxref("TypeError")}} Ausnahme dennoch
> geworfen ("someInterface is null"). Wenn Sie erwarten, dass
> `someInterface` selbst `null` oder `undefined` sein könnte,
> müssen Sie `?.` an dieser Stelle ebenfalls verwenden:
> `someInterface?.customMethod?.()`.

`eval?.()` ist der kürzeste Weg, um in den [_indirect eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) Modus zu gelangen.

### Optional Chaining mit Ausdrücken

Sie können den Optional-Chaining-Operator auch mit der [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwenden, die das Übergeben eines Ausdrucks als Eigenschaftsnamen ermöglicht:

```js
const nestedProp = obj?.["prop" + "Name"];
```

Dies ist besonders nützlich für Arrays, da Array-Indizes mit eckigen Klammern angesprochen werden müssen.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges Optional Chaining

Es ist ungültig, zu versuchen, einem Ergebnis eines Optional-Chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Vorlageliteral-Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können keine optionale Kette sein (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}} Ausdrücken kann keine optionale Kette sein (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Short-Circuiting

Wenn Sie Optional-Chaining mit Ausdrücken verwenden, wird der Ausdruck nicht ausgewertet, wenn der linke Operand `null` oder `undefined` ist. Zum Beispiel:

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

Allerdings tritt dieses Short-Circuiting-Verhalten nur bei einer kontinuierlichen "Kette" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe trotzdem ausgewertet.

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

Mit der Ausnahme, dass die `temp` Variable nicht erstellt wird.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel sucht den Wert der Eigenschaft `name` für das Mitglied
`CSS` in einer Map, wenn es kein solches Mitglied gibt. Das Ergebnis ist daher
`undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Josh", desc: "I maintain things" });

const nameBar = myMap.get("CSS")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignis-Handlern

Wenn Sie Rückruffunktionen verwenden oder Methoden aus einem Objekt holen mit
[einer Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring), können Sie nicht existierende Werte haben, die Sie nicht als
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

### Stapeln des Optional-Chaining-Operators

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

### Kombination mit dem nullish coalescing operator

Der [nullish coalescing operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach dem Optional-Chaining-Operator verwendet werden, um einen Standardwert zu erzeugen, wenn keiner gefunden wurde:

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
