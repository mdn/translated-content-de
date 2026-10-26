---
title: JSON.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und erzeugt den darin beschriebenen JavaScript-Wert oder das darin beschriebene Objekt. Optional kann eine _Reviver_-Funktion angegeben werden, die das Ergebnis vor der Rückgabe verändert.

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
  - : Der String, der als JSON analysiert werden soll. Eine Beschreibung der JSON-Syntax finden Sie beim Objekt {{jsxref("JSON")}}.
- `reviver` {{optional_inline}}
  - : Falls es sich um eine Funktion handelt, legt sie fest, wie jeder durch die Analyse erzeugte Wert vor der Rückgabe verändert wird. Werte, die nicht aufrufbar sind, werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der dem Wert zugeordnete Schlüssel.
    - `value`
      - : Der durch die Analyse erzeugte Wert.
    - `context`
      - : Ein Kontextobjekt, das für den aktuell wiederherzustellenden Ausdruck relevante Informationen enthält. Für jeden Aufruf der Reviver-Funktion wird ein neues Objekt erstellt.
        - `source` {{optional_inline}}
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt. Diese Eigenschaft ist nur bei der Wiederherstellung primitiver Werte vorhanden, nicht jedoch, wenn `value` ein Objekt oder Array ist.

### Rückgabewert

Der dem angegebenen JSON-`text` entsprechende Wert: ein {{jsxref("Object")}}, {{jsxref("Array")}}, String, eine Zahl, ein boolescher Wert oder `null`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu analysierende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet ihn anschließend so aus, als wäre er ein JavaScript-Ausdruck. Nur bei einem Schlüssel namens `"__proto__"` kann ein JSON-Text einen anderen Wert darstellen als derselbe JavaScript-Ausdruck – siehe [Objektliteral-Syntax im Vergleich zu JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Parameter `reviver`

Wenn ein `reviver` angegeben ist, wird der durch die Analyse ermittelte Wert vor der Rückgabe _umgewandelt_. Dazu werden der ermittelte Wert und alle seine Eigenschaften einzeln an den `reviver` übergeben – in [Tiefensuche-Reihenfolge](https://en.wikipedia.org/wiki/Depth-first_search), beginnend bei den am tiefsten verschachtelten Eigenschaften bis hin zum ursprünglichen Wert selbst.

Der `reviver` wird mit dem Objekt, das die gerade verarbeitete Eigenschaft enthält, als `this` und mit drei Argumenten aufgerufen: `key`, `value` und `context`. Wenn Sie den `reviver` als Pfeilfunktion definieren, gibt es keine separate `this`-Bindung. Der Schlüssel ist auch bei Arrays ein String. Bei primitiven Werten enthält das Argument `context` ein Feld namens `source` mit dem ursprünglichen Quelltext dieses Werts. Gibt die `reviver`-Funktion {{jsxref("undefined")}} zurück oder liefert sie keinen Wert – etwa weil das Ende der Funktion erreicht wird –, wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft mit dem zurückgegebenen Wert neu definiert. Wenn der `reviver` nur einige Werte verändert, müssen Sie alle unveränderten Werte unverändert zurückgeben. Andernfalls werden sie aus dem Ergebnisobjekt gelöscht.

Ähnlich wie beim Parameter `replacer` von {{jsxref("JSON.stringify()")}} wird `reviver` bei Arrays und Objekten zuletzt für den Wurzelwert aufgerufen, mit einem leeren String als `key` und dem Wurzelobjekt als `value`. Bei anderen gültigen JSON-Werten wird `reviver` entsprechend einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie aus `reviver` einen anderen Wert zurückgeben, ersetzt dieser den ursprünglich analysierten Wert vollständig. Das gilt auch für den Wurzelwert. Zum Beispiel:

```js
const transformedObj = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj); // undefined
```

Es gibt keine allgemeingültige Möglichkeit, dies zu umgehen. Sie können den Fall, dass `key` ein leerer String ist, nicht gesondert behandeln, da auch JSON-Objekte leere Strings als Schlüssel enthalten können. Bei der Implementierung des Revivers müssen Sie genau wissen, welche Umwandlung für jeden Schlüssel erforderlich ist.

Beachten Sie, dass `reviver` erst nach der Analyse des Werts ausgeführt wird. Zahlen im JSON-Text wurden dann beispielsweise bereits in JavaScript-Zahlen umgewandelt und können dabei an Genauigkeit verloren haben. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und anschließend als [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder in einem anderen geeigneten Format mit beliebiger Genauigkeit wiederherzustellen.

Sie können auch über die Eigenschaft `context.source` auf den ursprünglichen JSON-Quelltext zugreifen, der den Wert darstellt, wie im Folgenden gezeigt:

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

### JSON.parse() verwenden

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Den Parameter `reviver` verwenden

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

### `reviver` zusammen mit `replacer` von JSON.stringify() verwenden

Damit ein Wert nach der Serialisierung und Deserialisierung wieder dem ursprünglichen Objekt entspricht, muss die Serialisierung die Typinformationen erhalten. Dazu können Sie beispielsweise den Parameter `replacer` von {{jsxref("JSON.stringify()")}} verwenden:

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

Da die JSON-Syntax keine Möglichkeit bietet, Typmetadaten anzugeben, müssen Sie zur Wiederherstellung von Werten, die keine einfachen Objekte sind, eine der folgenden Möglichkeiten in Betracht ziehen:

- Serialisieren Sie das gesamte Objekt als String und stellen Sie ihm eine Typkennzeichnung voran.
- Leiten Sie den Typ aus der Struktur der Daten ab, beispielsweise bei einem Array aus Arrays mit jeweils zwei Elementen.
- Leiten Sie den Typ aus dem Eigenschaftsnamen ab, wenn die Struktur der Nutzdaten feststeht. Beispielsweise könnten alle Eigenschaften namens `registry` `Map`-Objekte enthalten.

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wird ein `SyntaxError` ausgelöst.

Arrays und Objekte dürfen in JSON keine [nachgestellten Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte Anführungszeichen begrenzt sein, nicht durch einfache:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-Stringliterals schreiben, sollten Sie entweder das JavaScript-Stringliteral mit einfachen Anführungszeichen begrenzen oder die doppelten Anführungszeichen des JSON-Strings maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für das moderne Verhalten von `JSON.parse` (Parameter `context` des Revivers) in `core-js`](https://core-js.io/docs/features/ecmascript/json)
- {{jsxref("JSON.stringify()")}}
