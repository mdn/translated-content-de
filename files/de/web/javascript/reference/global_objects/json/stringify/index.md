---
title: JSON.stringify()
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
---

Die **`JSON.stringify()`** statische Methode konvertiert einen JavaScript-Wert in einen JSON-String, wobei optional Werte ersetzt werden können, wenn eine Ersetzungsfunktion angegeben ist, oder nur die angegebenen Eigenschaften eingeschlossen werden, wenn ein Ersetzungsarray angegeben ist.

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
  - : Der Wert, der in einen JSON-String umgewandelt werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses verändert, oder ein Array von Strings und Zahlen, das angibt, welche Eigenschaften von `value` in die Ausgabe aufgenommen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Strings oder Zahlen (entweder Primitiven oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht bereitgestellt), werden alle string-basierten Eigenschaften des Objekts im resultierenden JSON-String eingeschlossen.
- `space` {{optional_inline}}
  - : Ein String oder eine Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungen, Zeilenumbruchzeichen usw.) in den Ausgabe-JSON-String einzufügen, um die Lesbarkeit zu erhöhen.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (d.h. jede Zahl größer als `10` wird behandelt, als wäre es `10`). Werte kleiner als 1 bedeuten, dass kein Leerzeichen verwendet werden soll.

    Wenn dies ein String ist, wird der String (oder die ersten 10 Zeichen des Strings, falls er länger ist) vor jedes verschachtelte Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als ein String oder eine Zahl ist (kann entweder ein Primärwert oder ein Wrapper-Objekt sein) — zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht bereitgestellt — wird kein Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den gegebenen Wert darstellt, oder undefined.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die der Wert repräsentiert. Werte werden wie folgt stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}} (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während der Stringifizierung gemäß den traditionellen Konvertierungssemantiken in die entsprechenden primitiven Werte umgewandelt. {{jsxref("Symbol")}} Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als normale Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird einen Fehler werfen. Wenn das BigInt jedoch eine `toJSON()`-Methode hat (durch Monkey Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Einschränkung stellt sicher, dass ein ordnungsgemäßes Serialisierungsverhalten (und sehr wahrscheinlich das begleitende Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Wenn solche Werte bei der Umwandlung gefunden werden, werden sie entweder weggelassen (wenn sie in einem Objekt gefunden werden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) umgewandelt (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, ebenso wie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt würden sie niemals weggelassen.)
- Arrays werden als Arrays serialisiert (umgeben von eckigen Klammern). Nur Array-Indices zwischen 0 und `length - 1` (inklusive) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text, den es enthält, serialisiert (indem auf seine `rawJSON`-Eigenschaft zugegriffen wird).
- Für andere Objekte:
  - Alle {{jsxref("Symbol")}}-Eigenschaften werden vollständig ignoriert, auch wenn der [`replacer`](#der_replacer-parameter)-Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()`-Methode hat, ist diese verantwortlich dafür, welche Daten serialisiert werden. Anstatt das Objekt zu serialisieren, wird der Wert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter, dem `key`, auf, der die gleiche Semantik wie der `key`-Parameter der [`replacer`](#der_replacer-parameter)-Funktion hat:
    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftsname
    - wenn es sich in einem Array befindet, der Index im Array, als String
    - wenn `JSON.stringify()` direkt auf diesem Objekt aufgerufen wurde, ein leerer String

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die einen String (derselbe wie bei einem Aufruf von `toString()`) zurückgibt. Somit werden sie als Strings serialisiert. Ähnlich implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was dasselbe wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgibt.

  - Es werden nur [enumerable eigene Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) besucht. Das bedeutet, daß {{jsxref("Map")}}, {{jsxref("Set")}}, usw. zu `"{}"` werden. Sie können den [`replacer`](#der_replacer-parameter)-Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus besucht wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), das eine wohl definierte Reihenfolge hat und stabil über Implementierungen hinweg ist. Zum Beispiel wird `JSON.stringify` auf demselben Objekt immer denselben String produzieren, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original produzieren (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der replacer-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften in dem Objekt an, die im resultierenden JSON-String enthalten sein sollen. Es werden nur String- und Zahlwerte berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, die stringifiziert werden. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `replacer`'s `this`-Kontext bereitgestellt.

Die `replacer`-Funktion wird auch für das anfängliche Objekt aufgerufen, das stringifiziert wird, in diesem Fall ist der `key` ein leerer String (`""`). Sie wird dann für jede Eigenschaft des Objekts oder Arrays, die stringifiziert wird, aufgerufen. Array-Indizes werden in ihrer String-Form als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird mit dem Rückgabewert des `replacer` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, einen String, ein Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe von BigInt wird ebenfalls einen Fehler werfen.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}}, oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe eingeschlossen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion auf jede Eigenschaft angewendet wird.

> [!NOTE]
> Beim Parsen von mit `replacer`-Funktionen generierten JSON würden Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter verwenden wollen, um die umgekehrte Operation durchzuführen.

Typischerweise würde der Index der Array-Elemente niemals verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` anstatt weggelassen zu werden). Die Verwendung der `replacer`-Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der space-Parameter

Der `space`-Parameter kann verwendet werden, um den Abstand im finalen String zu steuern.

- Wenn es eine Zahl ist, werden aufeinanderfolgende Ebenen in der Stringifizierung jeweils um diese Anzahl von Leerzeichen eingerückt.
- Wenn es ein String ist, werden aufeinanderfolgende Ebenen mit diesem String eingerückt.

Jede Einrückungsebene wird niemals länger als 10 sein. Zahlwerte von `space` werden auf 10 begrenzt, und Stringwerte werden auf 10 Zeichen gekürzt.

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

### Verwendung einer Funktion als replacer

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

Wenn Sie möchten, dass der `replacer` ein anfängliches Objekt von einem Schlüssel mit einer leeren String-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert geben würden), müssen Sie die Anzahl der Iterationen verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer String-Schlüssel).

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

### Verwendung eines Arrays als replacer

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

### Verwendung des space-Parameters

Rücken Sie die Ausgabe mit einem Leerzeichen ein:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tab-Zeichens ahmt das Standard-Pretty-Print-Aussehen nach:

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

### toJSON()-Verhalten

Das Definieren von `toJSON()` für ein Objekt erlaubt es, sein Serialisierungsverhalten zu überschreiben.

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

### Problem bei der Serialisierung von zirkulären Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektreferenzen unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die diese unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder selbst eine Lösung implementieren, die das Auffinden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für die binäre Serialisierung, wie z.B. [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen auch zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein vom Benutzer erstelltes Objekt speichern und es wiederherstellen möchten, selbst nachdem der Browser geschlossen wurde, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

### Well-formed JSON.stringify()

Engines, die die [wohlgeformte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogate (jeder Code-Punkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen anstelle von buchstäblichen (Ausgabe einzelner Surrogate) stringifizieren. Vor dieser Änderung konnten solche Strings nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Aber mit dieser Änderung repräsentiert `JSON.stringify()` einzelne Surrogate mit JSON-Escape-Sequenzen, die _in_ gültigem UTF-8 oder UTF-16 kodiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzelnen Surrogaten als identisch mit den einzelnen Surrogaten selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie die zwei möglichen Kodierungen dieser Code-Punkte von `JSON.stringify()` sorgfältig handhaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify` Verhaltens (Symbol, gut geformtes Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
