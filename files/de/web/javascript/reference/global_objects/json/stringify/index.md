---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** wandelt einen JavaScript-Wert in eine JSON-Zeichenkette um. Optional können Werte ersetzt werden, wenn eine Ersetzungsfunktion angegeben wird, oder es werden nur die angegebenen Eigenschaften einbezogen, wenn ein Ersetzungsarray angegeben wird.

{{EmbedInteractiveExample("pages/js/json-stringify.html", "taller")}}

## Syntax

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Parameter

- `value`
  - : Der Wert, der in eine JSON-Zeichenkette umgewandelt werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses verändert, oder ein Array von Zeichenketten und Zahlen, das die einzubeziehenden Eigenschaften von `value` im Ausgabewert angibt. Wenn `replacer` ein Array ist, werden alle Elemente, die keine Zeichenketten oder Zahlen sind (entweder primitive oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werte, vollständig ignoriert. Wenn `replacer` weder eine Funktion noch ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle string-basierten Eigenschaften des Objekts in die resultierende JSON-Zeichenkette aufgenommen.
- `space` {{optional_inline}}

  - : Eine Zeichenkette oder Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungen, Zeilenumbrüche usw.) in die Ausgabewertzeichenkette einzufügen, um die Lesbarkeit zu erhöhen.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichenzeichen an, die als Einrückung verwendet werden soll, begrenzt auf 10 (d.h. jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass kein Leerzeichen verwendet werden soll.

    Wenn dies eine Zeichenkette ist, wird die Zeichenkette (oder die ersten 10 Zeichen der Zeichenkette, wenn sie länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als eine Zeichenkette oder Zahl ist (kann ein primitives oder ein Wrapper-Objekt sein) — z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — wird kein Leerzeichen verwendet.

### Rückgabewert

Eine JSON-Zeichenkette, die den gegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` wandelt einen Wert in das JSON-Notation um, die der Wert darstellt. Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}} (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während der Stringifizierung in die entsprechenden primären Werte umgewandelt, entsprechend der traditionellen Umwandlungssemantik. {{jsxref("Symbol")}}-Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als normale Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, führt zu einem Fehler. Hat das BigInt jedoch eine `toJSON()`-Methode (durch "Monkey Patching": `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis liefern. Diese Einschränkung stellt sicher, dass ein korrektes Serialisierungsverhalten (und sehr wahrscheinlich das begleitende Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}} Werte sind keine gültigen JSON-Werte. Wenn solche Werte bei der Umwandlung angetroffen werden, werden sie entweder weggelassen (wenn sie sich in einem Objekt befinden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) umgewandelt (wenn sie sich in einem Array befinden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt würden sie niemals ausgelassen werden.)
- Arrays werden als Arrays serialisiert (eingeschlossen durch eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle Roh-JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-Schlüsseleigenschaften werden vollständig ignoriert, selbst wenn der [`replacer`](#der_replacer-parameter)-Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()`-Methode hat, ist sie verantwortlich dafür, welche Daten serialisiert werden. Anstelle des Objekts werden die von der `toJSON()`-Methode zurückgegebenen Werte bei ihrem Aufruf serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter, dem `key`, auf, der die gleiche Semantik wie der `key`-Parameter der [`replacer`](#der_replacer-parameter)-Funktion hat:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftsname
    - wenn es in einem Array ist, der Index im Array als Zeichenkette
    - wenn `JSON.stringify()` direkt für dieses Objekt aufgerufen wurde, eine leere Zeichenkette

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die eine Zeichenkette zurückgibt (dieselbe wie beim Aufruf von `toString()`). Daher werden sie als Zeichenketten serialisiert. Ähnlich implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was dasselbe zurückgibt wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).

  - Es werden nur [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) besucht. Das bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}}, usw. zu `"{}"` werden. Sie können den [`replacer`](#der_replacer-parameter)-Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) besucht, der eine wohl definierte Reihenfolge hat und über Implementierungen hinweg stabil ist. Beispielsweise wird `JSON.stringify()` auf dasselbe Objekt immer denselben string darstellen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original produzieren (vorausgesetzt, das Objekt ist komplett JSON-serialisierbar).

### Der replacer-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die in der resultierenden JSON-Zeichenkette enthalten sein sollen. Nur Zeichenketten- und Zahlenwerte werden berücksichtigt; Symbolschlüssel werden ignoriert.

Als Funktion nimmt sie zwei Parameter: den `key` und den `value`, der stringifiziert wird. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext des `replacer` angegeben.

Die `replacer`-Funktion wird auch für das initiale Objekt aufgerufen, das stringifiziert wird, in diesem Fall ist der `key` eine leere Zeichenkette (`""`). Sie wird dann für jede Eigenschaft im Objekt oder Array aufgerufen, das stringifiziert wird. Array-Indizes werden in ihrer Zeichenform als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird durch den Rückgabewert des `replacer` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, Zeichenkette, booleschen Wert oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe eines BigInt führt ebenfalls zu einem Fehler.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in der Ausgabe enthalten sein.
- Wenn Sie ein anderes Objekt zurückgeben, wird dieses Objekt rekursiv stringifiziert und die `replacer`-Funktion bei jeder Eigenschaft aufgerufen.

> [!NOTE]
> Beim Parsen von JSON, das mit `replacer`-Funktionen generiert wurde, möchten Sie vermutlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter verwenden, um die umgekehrte Operation durchzuführen.

Typischerweise verschieben sich Array-Element-Indizes nie (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` statt ignoriert). Mit der `replacer`-Funktion können Sie die Reihenfolge der Array-Elemente steuern, indem Sie ein anderes Array zurückgeben.

### Der space-Parameter

Der `space`-Parameter kann verwendet werden, um den Abstand im Endstring zu steuern.

- Wenn es eine Zahl ist, werden aufeinanderfolgende Ebenen in der Stringifizierung jeweils um diese Anzahl von Leerzeichen eingezogen.
- Wenn es eine Zeichenkette ist, werden aufeinanderfolgende Ebenen mit dieser Zeichenkette eingezogen.

Jede Einrückungsebene wird nie länger als 10 sein. Zahlenwerte für `space` sind auf 10 begrenzt und Zeichenkettenwerte werden auf 10 Zeichen gekürzt.

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

Wenn Sie möchten, dass der `replacer` ein initiales Objekt von einem Schlüssel mit leerer Zeichenketten-Eigenschaft unterscheiden kann (da beide den leeren String als Schlüssel und potenziell ein Objekt als Wert ergeben würden), müssen Sie die Anzahl der Iterationen verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer String-Schlüssel).

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

Die Verwendung eines Tabulatorzeichen imitiert die standardmäßige hübsche Druckdarstellung:

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

Definieren von `toJSON()` für ein Objekt erlaubt das Überschreiben seines Serialisierungsverhaltens.

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

### Problem bei der Serialisierung zirkulärer Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektverweise unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die diese unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine eigene Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zyklische Referenzen unterstützt. JavaScript-Engine-APIs für binäre Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

Falls Sie ein von Ihrem Benutzer erstelltes Objekt speichern möchten und sicherstellen, dass es wiederhergestellt werden kann, selbst nachdem der Browser geschlossen wurde, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

### Wohlgeformtes JSON.stringify()

Engines, die die [wohlgeformte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, stringifizieren einzeln stehende Surrogate (jeder Codepunkt von U+D800 bis U+DFFF) unter Verwendung von Unicode-Escapesequenzen anstelle von wörtlichem (von einzeln stehenden Surrogaten). Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Aber mit dieser Änderung stellt `JSON.stringify()` einzeln stehende Surrogate mithilfe von JSON-Escapesequenzen dar, die _in gültigem UTF-8 oder UTF-16 kodiert werden können_:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzeln stehenden Surrogaten als identisch mit den Surrogaten selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie die beiden möglichen Codierungen dieser Codepunkte durch `JSON.stringify()` sorgfältig behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify`-Verhaltens (Symbol, wohlgeformtes Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
