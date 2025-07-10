---
title: JSON.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und erstellt den JavaScript-Wert oder das JavaScript-Objekt, das durch den String beschrieben wird. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation des resultierenden Objekts durchzuführen, bevor es zurückgegeben wird.

{{InteractiveExample("JavaScript Demo: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Der String, der als JSON geparst werden soll. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion angegeben ist, definiert diese, wie jeder Wert, der ursprünglich durch das Parsen erzeugt wird, vor der Rückgabe transformiert wird. Nicht aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der dem Wert zugeordnet ist.
    - `value`
      - : Der durch das Parsen erzeugte Wert.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den Zustand enthält, der für den aktuellen Ausdruck relevant ist, der wiederhergestellt wird. Es ist ein neues Objekt für jeden Aufruf der Reviver-Funktion. Es wird nur beim Wiederherstellen von primitiven Werten übergeben, aber nicht, wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt.

### Rückgabewert

Das entsprechende {{jsxref("Object")}}, {{jsxref("Array")}}, der String, die Nummer, der boolesche Wert oder der `null`-Wert zur angegebenen JSON `text`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu parsende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und bewertet den String, als wäre es ein JavaScript-Ausdruck. Der einzige Fall, in dem ein Stück JSON-Text einen anderen Wert als der gleiche JavaScript-Ausdruck darstellt, ist beim Umgang mit dem Schlüssel `"__proto__"` — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Genau gesagt, laufen der berechnete Wert und alle seine Eigenschaften (in einer [Tiefensuche](https://en.wikipedia.org/wiki/Depth-first_search)-Reihenfolge, beginnend mit den am tiefsten geschachtelten Eigenschaften und fortfahrend bis zum ursprünglichen Wert selbst) einzeln durch den `reviver`.

Der `reviver` wird mit dem Objekt, das die verarbeitete Eigenschaft enthält, als `this` aufgerufen (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in diesem Fall gibt es keine separate `this`-Bindung) und zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzlicher `context`-Parameter übergeben, der den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — z.B. wenn die Ausführung am Ende der Funktion endet), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um den zurückgegebenen Wert zu sein. Wenn der `reviver` nur einige Werte transformiert und andere nicht, müssen Sie sicherstellen, dass alle nicht transformierten Werte unverändert zurückgegeben werden — andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie der `replacer`-Parameter von {{jsxref("JSON.stringify()")}}, wird bei Arrays und Objekten der `reviver` zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert der `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert als `reviver` zurückgeben, wird dieser Wert den ursprünglich geparsten Wert vollständig ersetzen. Dies gilt sogar für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj1); // undefined
```

Es gibt keine Möglichkeit, dies allgemein zu umgehen. Sie können den Fall, in dem der `key` ein leerer String ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel mit leeren Strings enthalten können. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel bei der Implementierung des Revivers erforderlich ist.

Beachten Sie, dass der `reviver` ausgeführt wird, nachdem der Wert geparst wurde. Beispielsweise werden Zahlen im JSON-Text bereits in JavaScript-Zahlen umgewandelt und können dabei an Genauigkeit verlieren. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und sie in [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete beliebige Präzisionsformate wiederherzustellen.

Sie können auch die Eigenschaft `context.source` verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert darstellt, wie unten gezeigt:

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // Ignore the value because it has already lost precision
    return BigInt(context.source);
  }
  return value;
});
```

## Beispiele

### Nutzung von JSON.parse()

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Nutzung des reviver-Parameters

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // return value * 2 for numbers
      : value, // return everything else unchanged
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### Nutzung von reviver in Verbindung mit dem replacer von JSON.stringify()

Damit ein Wert ordnungsgemäß zurückgegeben wird (d.h. er wird in das ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen bewahren. Zum Beispiel können Sie den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} zu diesem Zweck verwenden:

```js
// Maps are normally serialized as objects with no properties.
// We can use the replacer to specify the entries to be serialized.
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) && value.every(Array.isArray) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

Da JSON keine syntaktische Möglichkeit bietet, Typ-Metadaten zu annotieren, müssen Sie eine der folgenden Methoden berücksichtigen, um Werte wiederherzustellen, die keine einfachen Objekte sind:

- Serialisieren Sie das gesamte Objekt zu einem String und versehen Sie es mit einem Typ-Tag.
- "Raten" Sie basierend auf der Struktur der Daten (z.B. ein Array von Zweier-Arrays)
- Wenn die Struktur der Nutzdaten fest ist, basierend auf dem Eigenschaftsnamen (z.B. halten alle Eigenschaften namens `registry` `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wirft es einen `SyntaxError`.

Arrays und Objekte dürfen im JSON keine [abgeschlossenen Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte (nicht einfache) Anführungszeichen begrenzt sein:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-Stringliterals schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um den JavaScript-Stringliteral zu begrenzen, oder die doppelten Anführungszeichen maskieren, die den JSON-String begrenzen:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (reviver's `context`-Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
