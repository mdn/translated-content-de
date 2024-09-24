---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** konvertiert einen JavaScript-Wert in einen JSON-String, wobei optional Werte ersetzt werden können, wenn eine Ersetzungsfunktion angegeben ist, oder optional nur die angegebenen Eigenschaften enthalten sind, wenn ein Ersetzungsarray angegeben ist.

{{EmbedInteractiveExample("pages/js/json-stringify.html", "taller")}}

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
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses ändert, oder ein Array von Zeichenfolgen und Zahlen, das Eigenschaften von `value` angibt, die in die Ausgabe aufgenommen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenfolgen oder Zahlen (entweder primitive oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle zeichenfolgenschlüsseligen Eigenschaften des Objekts im resultierenden JSON-String aufgenommen.
- `space` {{optional_inline}}

  - : Eine Zeichenfolge oder Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückung, Zeilenumbruchzeichen usw.) in den Ausgabe-JSON-String einzufügen, um die Lesbarkeit zu verbessern.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (das heißt, jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen.

    Wenn dies eine Zeichenfolge ist, wird die Zeichenfolge (oder die ersten 10 Zeichen der Zeichenfolge, wenn sie länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als eine Zeichenfolge oder Zahl ist (kann entweder ein primitiver oder ein Wrapper-Objekt sein) — beispielsweise [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder undefined.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zyklische Referenz.
    - Ein {{jsxref("BigInt")}} Wert wird gefunden.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert repräsentiert. Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}} (erhältlich mittels [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden während der Stringifizierung in die entsprechenden primitiven Werte konvertiert, gemäß der traditionellen Konvertierungssemantik. {{jsxref("Symbol")}} Objekte (erhältlich mittels [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als einfache Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird fehlschlagen. Wenn das BigInt jedoch über eine `toJSON()`-Methode verfügt (durch Monkey-Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis liefern. Diese Einschränkung stellt sicher, dass ein ordnungsgemäßes Serialisierungsverhalten (und sehr wahrscheinlich damit verbundenes Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}} Werte sind keine gültigen JSON-Werte. Wenn während der Konvertierung solche Werte gefunden werden, werden sie entweder weggelassen (wenn sie in einem Objekt gefunden werden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt würden sie niemals weggelassen werden.)
- Arrays werden als Arrays serialisiert (eingeschlossen in eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wird, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-schlüssigen Eigenschaften werden vollständig ignoriert, selbst wenn der [`replacer`](#der_ersetzungsparameter) Parameter verwendet wird.

  - Wenn der Wert über eine `toJSON()`-Methode verfügt, ist es verantwortlich, zu definieren, welche Daten serialisiert werden. Anstatt das Objekt zu serialisieren, wird der Wert serialisiert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird. `JSON.stringify()` ruft `toJSON` mit einem Parameter, dem `key`, auf, der dieselbe Semantik hat wie der `key`-Parameter der [`replacer`](#der_ersetzungsparameter)-Funktion:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Name der Eigenschaft
    - wenn es sich in einem Array befindet, der Index im Array, als Zeichenfolge
    - wenn `JSON.stringify()` direkt auf dieses Objekt aufgerufen wurde, eine leere Zeichenfolge

    {{jsxref("Date")}}-Objekte implementieren die [`toJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) Methode, die eine Zeichenfolge zurückgibt (die gleiche wie [`date.toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)). Daher werden sie als Zeichenfolgen stringifiziert.

  - Es werden nur [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) besucht. Das bedeutet, {{jsxref("Map")}}, {{jsxref("Set")}}, usw. werden zu `"{}"`. Sie können den [`replacer`](#der_ersetzungsparameter) Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus besucht wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), der eine gut definierte Reihenfolge hat und über Implementierungen hinweg stabil ist. Zum Beispiel wird `JSON.stringify` für dasselbe Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der Ersetzungsparameter

Der `replacer` Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollen. Es werden nur Zeichenfolgen- und Zahlenwerte berücksichtigt; Symbolschlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, die stringifiziert werden. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this` Kontext des `replacer` bereitgestellt.

Die `replacer`-Funktion wird auch für das anfänglich stringifizierte Objekt aufgerufen, wobei in diesem Fall der `key` eine leere Zeichenfolge (`""`) ist. Sie wird dann für jede Eigenschaft des stringifizierten Objekts oder Arrays aufgerufen. Array-Indizes werden als Zeichenfolgen in ihrer String-Form als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird durch den Rückgabewert des `replacer` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, Zeichenfolge, booleanischen Wert oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt wird auch einen Fehler auslösen.)
- Wenn Sie eine {{jsxref("Function")}}, {{jsxref("Symbol")}}, oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe aufgenommen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion für jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Beim Parsen von JSON, das mit `replacer`-Funktionen erzeugt wurde, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die Umkehroperation durchzuführen.

Normalerweise würde sich der Array-Index von Array-Elementen niemals ändern (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` anstatt weggelassen). Die Verwendung der `replacer`-Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der space Parameter

Der `space` Parameter kann verwendet werden, um den Abstand im endgültigen String zu steuern.

- Wenn es eine Zahl ist, werden in der Stringifizierung die aufeinanderfolgenden Ebenen jeweils um diese Anzahl Leerzeichen eingerückt.
- Wenn es eine Zeichenfolge ist, werden die aufeinanderfolgenden Ebenen um diese Zeichenfolge eingerückt.

Jede Ebene der Einrückung wird niemals länger als 10 Zeichen sein. Zahlwerte von `space` werden auf 10 begrenzt und Zeichenfolgenwerte auf 10 Zeichen gekürzt.

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

// Stringbasierte Array-Elemente sind nicht aufzählbar und ergeben in JSON keinen Sinn
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Standard-Datenstrukturen
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

// Symbole:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "ein Symbol";
  }
});
// undefined

// Nicht-auflistbare Eigenschaften:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt-Werte führen zu einem Fehler
JSON.stringify({ x: 2n });
// TypeError: BigInt-Wert kann nicht in JSON serialisiert werden
```

### Verwendung einer Funktion als Ersetzer

```js
function replacer(key, value) {
  // Herausfiltern von Eigenschaften
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

Wenn Sie möchten, dass der `replacer` ein anfängliches Objekt von einem Schlüssel mit einer leeren Zeichenfolgen-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel geben und potenziell ein Objekt als Wert), müssen Sie die Anzahl der Iterationen verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer String-Schlüssel).

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Lassen Sie alle Eigenschaften mit dem Namen "" aus (außer dem anfänglichen Objekt)
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Verwendung eines Arrays als Ersetzer

```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', nur die "week" und "month" Eigenschaften behalten
```

### Verwendung des space Parameters

Die Ausgabe mit einem Leerzeichen einrücken:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Verwenden eines Tabulators, um das Standardformat des Schönen-Druckens zu imitieren:

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

### toJSON() Verhalten

Durch die Definition von `toJSON()` für ein Objekt kann das Serialisierungsverhalten überschrieben werden.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Jetzt bin ich ein verschachteltes Objekt unter key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Jetzt bin ich ein verschachteltes Objekt unter key 'obj'"}'

JSON.stringify([obj]);
// '["Jetzt bin ich ein verschachteltes Objekt unter key '0'"]'
```

### Problem mit der Serialisierung von zyklischen Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektreferenzen unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zyklischen Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Die Serialisierung zyklischer Referenzen löst "TypeError: zyklischer Objektwert" aus
JSON.stringify(circularReference);
```

Um zyklische Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine Lösung selbst implementieren, bei der die zyklischen Referenzen durch serialisierbare Werte gefunden und ersetzt (oder entfernt) werden.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/structuredClone) verwenden, das zyklische Referenzen unterstützt. JavaScript Engine APIs für die binäre Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zyklische Referenzen.

### Verwendung von JSON.stringify() mit localStorage

Wenn Sie ein Objekt speichern möchten, das von Ihrem Benutzer erstellt wurde, und es erlauben möchten, es wiederherzustellen, selbst nachdem der Browser geschlossen wurde, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

```js
// Erstellen eines JSON-Beispiels
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

// Konvertieren der JSON-Zeichenfolge mit JSON.stringify()
// und dann Speichern mit localStorage unter dem Namen der Sitzung
localStorage.setItem("session", JSON.stringify(session));

// Beispiel dafür, wie man die durch JSON.stringify() generierte Zeichenfolge,
// die in localStorage gespeichert wurde, wieder in ein JSON-Objekt umwandeln kann
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Jetzt enthält die Variable restoredSession das Objekt, das in localStorage gespeichert wurde
console.log(restoredSession);
```

### Wohlgeformtes JSON.stringify()

Engines, die die [Spezifikation für wohlgeformtes JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogatzeichen (jedes Code-Punkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen anstatt wörtlich (ausgebende einzelne Surrogatzeichen) stringifizieren. Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültiges UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Aber mit dieser Änderung stellt `JSON.stringify()` einzelne Surrogatzeichen mit JSON-Escape-Sequenzen dar, die _in_ gültiges UTF-8 oder UTF-16 kodiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte abwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzelnen Surrogatzeichen als identisch mit den einzelnen Surrogatzeichen selbst behandeln werden. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie sorgfältig mit den zwei möglichen Codierungen dieser Code-Punkte von `JSON.stringify()` umgehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify`-Verhaltens (Symbol, wohlgeformte Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
