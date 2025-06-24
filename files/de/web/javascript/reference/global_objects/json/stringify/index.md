---
title: JSON.stringify()
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** konvertiert einen JavaScript-Wert in einen JSON-String. Dabei können optional Werte ersetzt werden, wenn eine `replacer`-Funktion angegeben wird, oder es können optional nur die angegebenen Eigenschaften einbezogen werden, wenn ein `replacer`-Array angegeben ist.

{{InteractiveExample("JavaScript Demo: JSON.stringify()", "taller")}}

```js interactive-example
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'
```

## Syntax

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Parameter

- `value`
  - : Der Wert, der in einen JSON-String konvertiert werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses ändert, oder ein Array von Zeichenfolgen und Zahlen, das die Eigenschaften von `value` angibt, die in die Ausgabe einbezogen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenfolgen oder Zahlen (entweder primitive oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werte, vollständig ignoriert. Wenn `replacer` kein Array oder eine Funktion ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle mit Zeichenfolgen versehenen Eigenschaften des Objektes in den resultierenden JSON-String einbezogen.
- `space` {{optional_inline}}

  - : Eine Zeichenfolge oder Zahl, die zum Einfügen von Leerzeichen (einschließlich Einrückungen, Zeilenumbrüche usw.) in den Ausgabestring zur besseren Lesbarkeit verwendet wird.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die für Einrückungen verwendet werden sollen; sie ist auf maximal 10 begrenzt (d.h. jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen.

    Wenn es eine Zeichenfolge ist, wird die Zeichenfolge (oder die ersten 10 Zeichen, wenn sie länger ist) vor jedes geschachtelte Objekt oder Array eingefügt.

    Wenn `space` weder eine Zeichenfolge noch eine Zahl ist (kann entweder ein primitiver Wert oder ein Wrapper-Objekt sein) — zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält einen Zirkularverweis.
    - Ein {{jsxref("BigInt")}}-Wert wird entdeckt.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert darstellt. Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} und {{jsxref("BigInt")}} (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden in die entsprechenden primitiven Werte während der Stringifizierung umgewandelt, in Übereinstimmung mit den traditionellen Konversionssemantiken. {{jsxref("Symbol")}} Objekte (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als gewöhnliche Objekte behandelt.
- Ein Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird einen Fehler auslösen. Wenn das BigInt jedoch eine `toJSON()`-Methode hat (durch Ändern des Prototyps: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Einschränkung stellt sicher, dass ein geeignetes Serialisierungsverhalten (und sehr wahrscheinlich das zugehörige Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}} Werte sind keine gültigen JSON-Werte. Wenn solch ein Wert während der Konvertierung angetroffen wird, werden sie entweder weggelassen (wenn sie in einem Objekt gefunden werden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn bei "rein" Werten wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` eingereicht wird.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt, würden sie niemals weggelassen werden.)
- Arrays werden als Arrays serialisiert (in eckige Klammern eingeschlossen). Nur die Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle Eigenschaften, die durch {{jsxref("Symbol")}}-Schlüssel gekennzeichnet sind, werden vollständig ignoriert, selbst beim Verwenden des [`replacer`](#der_`replacer`-parameter) Parameters.

  - Wenn der Wert eine `toJSON()`-Methode hat, ist diese dafür verantwortlich, zu definieren, welche Daten serialisiert werden. Anstatt das Objekt zu serialisieren, wird der Wert, der von der `toJSON()`-Methode bei einem Aufruf zurückgegeben wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter, dem `key`, auf, der die gleiche Bedeutung wie der `key`-Parameter der [`replacer`](#der_`replacer`-parameter) Funktion hat:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftsname
    - wenn es sich in einem Array befindet, der Index im Array, als Zeichenfolge
    - wenn `JSON.stringify()` direkt auf diesem Objekt aufgerufen wurde, eine leere Zeichenfolge

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die eine Zeichenfolge zurückgibt (wie der Aufruf von `toString()`). Somit werden sie als Zeichenfolgen serialisiert. Ähnlich implementieren {{jsxref("Date")}}-Objekte `toJSON()`, das gleiches Ergebnis wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgibt.

  - Es werden nur [enumerable eigene Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) besucht. Dies bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}}, etc. zu `"{}"` werden. Sie können den [`replacer`](#der_`replacer`-parameter) Parameter verwenden, um sie zu etwas nützlicherem zu serialisieren.

    Eigenschaften werden unter Verwendung des gleichen Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) durchlaufen, der eine gut definierte Reihenfolge hat und über Implementierungen hinweg stabil ist. Zum Beispiel würde das Aufrufen von `JSON.stringify` auf demselben Objekt immer den gleichen String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der `replacer`-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollen. Es werden nur Zeichenfolgen und Zahlen beachtet; Symbolschlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, der stringifiziert wird. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this` Kontext des `replacer` bereitgestellt.

Die `replacer`-Funktion wird auch für das anfängliche Objekt aufgerufen, das stringifiziert wird, wobei der `key` eine leere Zeichenfolge (`""`) ist. Sie wird dann für jede Eigenschaft im Objekt oder Array aufgerufen, das stringifiziert wird. Array-Indizes werden in ihrer Zeichenform als `key` angegeben. Der aktuelle Eigenschaftswert wird durch den Rückgabewert von `replacer` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, Zeichenfolge, Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt wird ebenfalls einen Fehler auslösen.)
- Wenn Sie eine {{jsxref("Function")}}, {{jsxref("Symbol")}}, oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe einbezogen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion auf jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Beim Parsen von mit `replacer`-Funktionen generiertem JSON möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die umgekehrte Operation durchzuführen.

Typischerweise würden sich die Indizes der Arrayelemente nie verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` anstatt weggelassen zu werden). Die Verwendung der `replacer`-Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der `space`-Parameter

Der `space`-Parameter kann verwendet werden, um den Abstand im endgültigen String zu steuern.

- Wenn es sich um eine Zahl handelt, wird jede nachfolgende Ebene beim Stringifizieren um so viele Leerzeichen eingerückt.
- Wenn es sich um eine Zeichenfolge handelt, werden nachfolgende Ebenen um diese Zeichenfolge eingerückt.

Jede Einrückungsebene wird nie länger als 10 sein. Zahlenwerte von `space` werden auf 10 begrenzt, und Zeichenfolgen werden auf 10 Zeichen gekürzt.

## Beispiele

### Verwendung von JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Verwendung einer Funktion als `replacer`

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

Wenn Sie möchten, dass der `replacer` ein anfängliches Objekt von einem Schlüssel mit einer Eigenschaft eines leeren Strings unterscheidet (da beide den leeren String als Schlüssel und potenziell ein Objekt als Wert ergeben würden), müssen Sie die Anzahl der Iterationen nachverfolgen (wenn es über die erste Iteration hinausgeht, handelt es sich um einen echten leeren Zeichenfolgenschlüssel).

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Omit all properties with name "" (except the initial object)
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Verwendung eines Arrays als `replacer`

```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### Verwendung des `space`-Parameters

Rücken Sie die Ausgabe mit einem Leerzeichen ein:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tabulators imitiert das standardmäßige Pretty-Print-Erscheinungsbild:

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

<!-- markdownlint-enable MD010 -->

### `toJSON()`-Verhalten

Das Definieren von `toJSON()` für ein Objekt ermöglicht das Überschreiben seines Serialisierungsverhaltens.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Now I am a nested object under key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]);
// '["Now I am a nested object under key '0'"]'
```

### Problem bei der Serialisierung von Zirkularverweisen

Da das [JSON-Format](https://www.json.org/) Objektverweise nicht unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit Zirkularverweisen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um Zirkularverweise zu serialisieren, können Sie eine Bibliothek verwenden, die dies unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine eigene Lösung implementieren, die erfordert, dass die zyklischen Verweise durch serialisierbare Werte gefunden und ersetzt (oder entfernt) werden.

Wenn Sie `JSON.stringify()` zum tiefenkopieren eines Objekts verwenden möchten, sollten Sie stattdessen [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das Zirkularreferenzen unterstützt. JavaScript-Engine-APIs für die binäre Serialisierung, wie zum Beispiel [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls Zirkularreferenzen.

### Verwendung von JSON.stringify() mit localStorage

Wenn Sie ein Objekt speichern möchten, das von Ihrem Benutzer erstellt wurde, und es auch nach dem Schließen des Browsers wiederherstellen möchten, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

```js
// Creating an example of JSON
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

### Wohlgeformte JSON.stringify()

Engines, die die [wohlgeformte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogate (jedes Codepunkt von U+D800 bis U+DFFF) unter Verwendung von Unicode-Escape-Sequenzen anstatt wörtlich (Ausgabe einzelner Surrogate) stringifizieren. Vor dieser Änderung konnten solche Strings nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` einzelne Surrogate mit JSON-Escape-Sequenzen dar, die _können_ in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzelnen Surrogaten als identisch mit den Surrogaten selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie sorgfältig die zwei möglichen Codierungen dieser Codepunkte durch `JSON.stringify()` behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill of modern `JSON.stringify` behavior (symbol, well-formed unicode, raw JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
