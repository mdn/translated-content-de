---
title: Optionales Chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **operator für Optionales Chaining (`?.`)** greift auf eine Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das mit diesem Operator angesprochene Objekt oder die Funktion {{jsxref("undefined")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird der Ausdruck unterbrochen und ergibt {{jsxref("undefined")}} anstelle eines Fehlers.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Syntax

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Beschreibung

Der `?.`-Operator ist wie der `.`-Verkettungsoperator, außer dass statt eines Fehlers, wenn eine Referenz [nullish](/de/docs/Glossary/Nullish) ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}}) ist, der Ausdruck kurzgeschlossen mit einem Rückgabewert von `undefined`. Bei Funktionsaufrufen gibt er `undefined` zurück, wenn die gegebene Funktion nicht existiert.

Dies führt zu kürzeren und einfacheren Ausdrücken beim Zugriff auf verkettete Eigenschaften, wenn die Möglichkeit besteht, dass eine Referenz fehlt. Es kann auch hilfreich sein, den Inhalt eines Objekts zu erkunden, wenn keine bekannte Garantie dafür besteht, welche Eigenschaften erforderlich sind.

Betrachten Sie beispielsweise ein Objekt `obj`, das eine verschachtelte Struktur aufweist. Ohne
optionales Chaining erfordert das Nachschlagen einer tief verschachtelten Untereigenschaft die Überprüfung der
dazwischenliegenden Referenzen, wie zum Beispiel:

```js
const nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird als nicht-`null` (und
nicht-`undefined`) bestätigt, bevor auf den Wert von
`obj.first.second` zugegriffen wird. Dies verhindert den Fehler, der auftreten würde, wenn Sie
`obj.first.second` direkt ohne Überprüfung von `obj.first` aufrufen würden.

Dies ist ein idiomatisches Muster in JavaScript, wird jedoch umständlich, wenn die Kette lang ist, und es ist nicht sicher. Zum Beispiel, wenn `obj.first` ein {{Glossary("Falsy")}} Wert ist, der nicht `null` oder `undefined` ist, wie `0`, würde es trotzdem kurzgeschlossen und `nestedProp` wird `0`, was möglicherweise nicht wünschenswert ist.

Mit dem Operator für optionales Chaining (`?.`) müssen Sie jedoch nicht
explizit testen und basierend auf dem Zustand von `obj.first` kurzschließen, bevor Sie versuchen,
auf `obj.first.second` zuzugreifen:

```js
const nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators anstelle von nur `.`, weiß JavaScript
implizit zu überprüfen, ob `obj.first` nicht `null` oder
`undefined` ist, bevor versucht wird, auf `obj.first.second` zuzugreifen. Wenn
`obj.first` `null` oder `undefined` ist, wird der Ausdruck
automatisch kurzgeschlossen und gibt `undefined` zurück.

Dies entspricht dem Folgenden, außer dass die temporäre Variable nicht tatsächlich
erstellt wird:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optionales Chaining kann nicht auf einem nicht deklarierten Stammobjekt verwendet werden, aber es kann mit einem Stammobjekt mit dem Wert `undefined` verwendet werden.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optionales Chaining bei Funktionsaufrufen

Optionales Chaining kann verwendet werden, wenn versucht wird, eine Methode aufzurufen, die möglicherweise nicht existiert.
Dies kann hilfreich sein, zum Beispiel wenn Sie eine API verwenden, bei der eine Methode möglicherweise nicht verfügbar ist, entweder aufgrund des Alters der Implementierung oder weil ein Feature auf dem Gerät des Benutzers nicht verfügbar ist.

Wenn optionales Chaining bei Funktionsaufrufen verwendet wird, bewirkt dies, dass der Ausdruck automatisch
`undefined` zurückgibt, anstatt eine Ausnahme auszulösen, wenn die Methode nicht
gefunden wird:

```js
const result = someInterface.customMethod?.();
```

Wenn jedoch eine Eigenschaft mit einem solchen Namen existiert, die keine Funktion ist, wird durch die Verwendung von `?.` dennoch eine {{jsxref("TypeError")}}-Ausnahme "someInterface.customMethod is not a function" ausgelöst.

> [!NOTE]
> Wenn `someInterface` selbst `null` oder
> `undefined` ist, wird dennoch eine {{jsxref("TypeError")}}-Ausnahme ausgelöst ("someInterface is null"). Wenn Sie erwarten, dass
> `someInterface` selbst möglicherweise `null` oder `undefined`
> ist, müssen Sie `?.` auch an dieser Stelle verwenden:
> `someInterface?.customMethod?.()`.

`eval?.()` ist die kürzeste Möglichkeit, in den [_indirekten eval_](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) Modus zu wechseln.

### Optionales Chaining mit Ausdrücken

Der Operator für Optionales Chaining kann auch mit [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) verwendet werden, die das Übergeben eines Ausdrucks als Eigenschaftsnamen ermöglicht:

```js
const nestedProp = obj?.["prop" + "Name"];
```

Dies ist besonders nützlich für Arrays, da Array-Indizes mit eckigen Klammern angesprochen werden müssen.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; wenn ?. nicht verwendet wird, würde dies einen Fehler werfen: "Cannot read properties of undefined (reading '42')"
```

### Ungültiges optionales Chaining

Es ist ungültig, zu versuchen, das Ergebnis eines optionalen Chaining-Ausdrucks zuzuweisen:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Template Literal Tags](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) können nicht als optionales Chaining verwendet werden (siehe [SyntaxError: tagged template cannot be used with optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

Der Konstruktor von {{jsxref("Operators/new", "new")}}-Ausdrücken kann nicht als optionales Chaining verwendet werden (siehe [SyntaxError: new keyword cannot be used with an optional chain](/de/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### Kurzschließen

Bei der Verwendung von optionalem Chaining mit Ausdrücken, wenn der linke Operand `null` oder `undefined` ist, wird der Ausdruck nicht ausgewertet. Zum Beispiel:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0, da x nicht inkrementiert wurde
```

Nachfolgende Eigenschaftszugriffe werden ebenfalls nicht ausgewertet.

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// Dies löst keinen Fehler aus, da die Auswertung bereits beim
// ersten optionalen Chaining gestoppt wurde
```

Dies entspricht:

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

Dieses Kurzschlussverhalten tritt jedoch nur entlang einer durchgehenden "Verkettung" von Eigenschaftszugriffen auf. Wenn Sie einen Teil der Kette [gruppieren](/de/docs/Web/JavaScript/Reference/Operators/Grouping), werden nachfolgende Eigenschaftszugriffe trotzdem ausgewertet.

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

Dieses Beispiel sucht den Wert der `name`-Eigenschaft für das Mitglied
`bar` in einer Map, wenn ein solches Mitglied nicht existiert. Das Ergebnis ist daher
`undefined`.

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### Umgang mit optionalen Rückrufen oder Ereignis-Handlern

Wenn Sie Rückrufe oder Methoden aus einem Objekt mit
[einer Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) verwenden, können Sie nicht existierende Werte haben, die Sie nicht als
Funktionen aufrufen können, es sei denn, Sie haben deren Existenz getestet. Mit dem `?.` können Sie diesen zusätzlichen Test vermeiden:

```js
// Code geschrieben ohne optionales Chaining
function doSomething(onContent, onError) {
  try {
    // Etwas mit den Daten machen
  } catch (err) {
    // Überprüfen, ob onError wirklich existiert
    if (onError) {
      onError(err.message);
    }
  }
}
```

```js
// Verwendung von optionalem Chaining bei Funktionsaufrufen
function doSomething(onContent, onError) {
  try {
    // Etwas mit den Daten machen
  } catch (err) {
    onError?.(err.message); // Keine Ausnahme, wenn onError undefined ist
  }
}
```

### Stapelweise Verwendung des optionalen Chaining-Operators

Bei verschachtelten Strukturen ist es möglich, optionales Chaining mehrfach zu verwenden:

```js
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // Detaillierte Adresse ist unbekannt
  },
};
const customerCity = customer.details?.address?.city;

// Dies funktioniert auch mit optionalem Chaining bei Funktionsaufrufen
const customerName = customer.name?.getName?.(); // Methode existiert nicht, customerName ist undefined
```

### Kombination mit dem Nullish Coalescing Operator

Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) kann nach optionalem Chaining verwendet werden, um einen Standardwert zu erstellen, wenn keiner gefunden wurde:

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "Unbekannte Stadt";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nathan",
  city: "Paris",
}); // "Paris"
printCustomerCity({
  name: "Carl",
  details: { age: 82 },
}); // "Unbekannte Stadt"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
