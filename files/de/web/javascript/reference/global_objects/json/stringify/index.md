---
title: JSON.stringify()
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`JSON.stringify()`** wandelt einen JavaScript-Wert in einen JSON-String um. Optional können Werte durch eine `replacer`-Funktion ersetzt oder über ein `replacer`-Array nur bestimmte Eigenschaften in die Ausgabe aufgenommen werden.

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
  - : Eine Funktion, die das Verhalten bei der Umwandlung in einen String verändert, oder ein Array aus Strings und Zahlen, das festlegt, welche Eigenschaften von `value` in die Ausgabe aufgenommen werden. Ist `replacer` ein Array, werden alle Elemente dieses Arrays, die weder Strings noch Zahlen sind (als primitive Werte oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Ist `replacer` weder eine Funktion noch ein Array (z. B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle Eigenschaften des Objekts mit String-Schlüsseln in den resultierenden JSON-String aufgenommen.
- `space` {{optional_inline}}
  - : Ein String oder eine Zahl, mit der zur besseren Lesbarkeit Leerraum (einschließlich Einrückungen, Zeilenumbrüchen usw.) in den ausgegebenen JSON-String eingefügt wird.

    Ist dies eine Zahl, gibt sie die Anzahl der für die Einrückung verwendeten Leerzeichen an, begrenzt auf 10 (das heißt, jede Zahl größer als `10` wird wie `10` behandelt). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden.

    Ist dies ein String, wird der String (oder, falls er länger ist, seine ersten 10 Zeichen) vor jedem verschachtelten Objekt oder Array eingefügt.

    Ist `space` weder ein String noch eine Zahl (jeweils als primitiver Wert oder Wrapper-Objekt möglich) – beispielsweise [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben –, wird kein Leerraum verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` wandelt einen Wert in die JSON-Notation um, die diesen Wert darstellt. Werte werden folgendermaßen in Strings umgewandelt:

- {{jsxref("Boolean")}}-, {{jsxref("Number")}}-, {{jsxref("String")}}- und {{jsxref("BigInt")}}-Objekte (erzeugbar mit [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden bei der Umwandlung entsprechend den üblichen Konvertierungsregeln in ihre jeweiligen primitiven Werte umgewandelt. {{jsxref("Symbol")}}-Objekte (erzeugbar mit [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden wie gewöhnliche Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, löst eine Ausnahme aus. Verfügt der BigInt-Wert jedoch über eine `toJSON()`-Methode (durch Monkey-Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Ergebnis der Serialisierung liefern. Diese Einschränkung stellt sicher, dass ein geeignetes Verhalten für die Serialisierung (und sehr wahrscheinlich auch für die zugehörige Deserialisierung) stets ausdrücklich vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}-, {{jsxref("Function")}}- und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Werden solche Werte bei der Umwandlung angetroffen, werden sie entweder ausgelassen (wenn sie in einem Objekt vorkommen) oder durch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ersetzt (wenn sie in einem Array vorkommen). `JSON.stringify()` kann `undefined` zurückgeben, wenn „reine“ Werte wie bei `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}} sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werden alle als `null` behandelt. (Anders als die Werte im vorherigen Punkt werden sie jedoch niemals ausgelassen.)
- Arrays werden als Arrays serialisiert (in eckige Klammern eingeschlossen). Nur Array-Indizes von 0 bis einschließlich `length - 1` werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle, mit {{jsxref("JSON.rawJSON()")}} erzeugte Raw-JSON-Objekt wird als der darin enthaltene unveränderte JSON-Text serialisiert (durch Zugriff auf seine Eigenschaft `rawJSON`).
- Für andere Objekte gilt:
  - Alle Eigenschaften mit {{jsxref("Symbol")}}-Schlüsseln werden vollständig ignoriert, auch wenn der Parameter [`replacer`](#der_parameter_`replacer`) verwendet wird.

  - Verfügt der Wert über eine `toJSON()`-Methode, bestimmt diese, welche Daten serialisiert werden. Statt des Objekts wird der Wert serialisiert, den die aufgerufene `toJSON()`-Methode zurückgibt. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`. Dieser hat dieselbe Bedeutung wie der Parameter `key` der Funktion [`replacer`](#der_parameter_`replacer`):
    - wenn dieses Objekt der Wert einer Eigenschaft ist: der Name der Eigenschaft
    - wenn es sich in einem Array befindet: der Index im Array als String
    - wenn `JSON.stringify()` direkt mit diesem Objekt aufgerufen wurde: ein leerer String

    Alle {{jsxref("Temporal")}}-Objekte implementieren die Methode `toJSON()`, die einen String zurückgibt (denselben wie ein Aufruf von `toString()`). Daher werden sie als Strings serialisiert. Ebenso implementieren {{jsxref("Date")}}-Objekte `toJSON()`, das denselben Wert wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgibt.

  - Es werden nur [eigene aufzählbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) berücksichtigt. Das bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}} usw. zu `"{}"` werden. Mit dem Parameter [`replacer`](#der_parameter_`replacer`) können Sie sie in eine nützlichere Darstellung serialisieren.

    Die Eigenschaften werden mit demselben Algorithmus wie bei [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) durchlaufen. Seine Reihenfolge ist eindeutig festgelegt und über Implementierungen hinweg stabil. Beispielsweise erzeugt `JSON.stringify` für dasselbe Objekt stets denselben String, und `JSON.parse(JSON.stringify(obj))` erzeugt ein Objekt mit derselben Schlüsselreihenfolge wie das Original (vorausgesetzt, das Objekt lässt sich vollständig als JSON serialisieren).

### Der Parameter `replacer`

Der Parameter `replacer` kann eine Funktion oder ein Array sein.

Bei einem Array geben seine Elemente die Namen der Objekteigenschaften an, die in den resultierenden JSON-String aufgenommen werden sollen. Nur String- und Zahlenwerte werden berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion erhält `replacer` zwei Parameter: den `key` und den `value`, der in einen String umgewandelt wird. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext von `replacer` bereitgestellt.

Die Funktion `replacer` wird auch für das anfängliche Objekt aufgerufen, das in einen String umgewandelt wird. In diesem Fall ist `key` ein leerer String (`""`). Anschließend wird sie für jede Eigenschaft des umzuwandelnden Objekts oder Arrays aufgerufen. Array-Indizes werden als String in `key` übergeben. Der aktuelle Eigenschaftswert wird für die Umwandlung durch den Rückgabewert von `replacer` ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, einen String, einen booleschen Wert oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe eines BigInt-Werts löst ebenfalls eine Ausnahme aus.)
- Wenn Sie {{jsxref("Function")}}, {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe aufgenommen.
- Wenn Sie ein anderes Objekt zurückgeben, wird dieses rekursiv in einen String umgewandelt, wobei die Funktion `replacer` für jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Wenn Sie JSON parsen, das mit `replacer`-Funktionen erzeugt wurde, sollten Sie wahrscheinlich den Parameter [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) verwenden, um die umgekehrte Operation auszuführen.

Normalerweise verschieben sich die Indizes von Array-Elementen nicht (selbst wenn ein Element einen ungültigen Wert wie eine Funktion hat, wird es zu `null`, statt ausgelassen zu werden). Mit der Funktion `replacer` können Sie die Reihenfolge der Array-Elemente steuern, indem Sie ein anderes Array zurückgeben.

### Der Parameter `space`

Mit dem Parameter `space` lässt sich der Leerraum im endgültigen String steuern.

- Ist er eine Zahl, wird jede weitere Verschachtelungsebene bei der Umwandlung um entsprechend viele Leerzeichen eingerückt.
- Ist er ein String, wird jede weitere Verschachtelungsebene mit diesem String eingerückt.

Eine Einrückungsebene ist niemals länger als 10 Zeichen. Zahlenwerte für `space` werden auf 10 begrenzt und String-Werte auf 10 Zeichen gekürzt.

## Beispiele

### JSON.stringify verwenden

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

### Eine Funktion als `replacer` verwenden

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

Wenn `replacer` zwischen dem anfänglichen Objekt und einer Eigenschaft mit einem leeren String als Schlüssel unterscheiden soll (da in beiden Fällen ein leerer String als Schlüssel und möglicherweise ein Objekt als Wert übergeben wird), müssen Sie die Anzahl der Aufrufe mitzählen (nach dem ersten Aufruf handelt es sich um einen tatsächlichen leeren String-Schlüssel).

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

### Ein Array als `replacer` verwenden

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

### Den Parameter `space` verwenden

Die Ausgabe mit einem Leerzeichen einrücken:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tabulatorzeichens ahmt das übliche Erscheinungsbild einer formatierten Ausgabe nach:

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

### Verhalten von toJSON()

Wenn Sie `toJSON()` für ein Objekt definieren, können Sie dessen Serialisierungsverhalten überschreiben.

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

Da das [JSON-Format](https://www.json.org/) keine Objektreferenzen unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die diese unterstützt (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford), oder selbst eine Lösung implementieren. Dazu müssen Sie die zirkulären Referenzen finden und durch serialisierbare Werte ersetzen (oder sie entfernen).

Wenn Sie `JSON.stringify()` verwenden, um eine tiefe Kopie eines Objekts zu erstellen, können Sie stattdessen [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. Auch JavaScript-Engine-APIs für die binäre Serialisierung, beispielsweise [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen zirkuläre Referenzen.

### JSON.stringify() mit localStorage verwenden

Wenn Sie ein von Ihren Benutzern erstelltes Objekt speichern und seine Wiederherstellung auch nach dem Schließen des Browsers ermöglichen möchten, zeigt das folgende Beispiel eine mögliche Anwendung von `JSON.stringify()`:

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

Engines, die die [Spezifikation für wohlgeformtes JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) implementieren, wandeln isolierte Surrogat-Codepunkte (jeden Codepunkt von U+D800 bis U+DFFF) mithilfe von Unicode-Escape-Sequenzen in Strings um, statt sie wörtlich auszugeben (und damit isolierte Surrogat-Codepunkte auszugeben). Vor dieser Änderung konnten solche Strings nicht als gültiges UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` isolierte Surrogat-Codepunkte jedoch durch JSON-Escape-Sequenzen dar, die als gültiges UTF-8 oder UTF-16 kodiert werden _können_:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte abwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren. Diese behandeln Unicode-Escape-Sequenzen für isolierte Surrogat-Codepunkte genauso wie die isolierten Surrogat-Codepunkte selbst. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt auswerten, müssen Sie die beiden möglichen Kodierungen dieser Codepunkte durch `JSON.stringify()` sorgfältig berücksichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für das moderne Verhalten von `JSON.stringify` (Symbol, wohlgeformtes Unicode, Raw JSON) in `core-js`](https://core-js.io/docs/features/ecmascript/json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
