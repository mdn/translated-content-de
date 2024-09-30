---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: c3951963f6d3397d21624cfc94a72203acad6412
---

{{JSRef}}

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und erstellt den in dem String beschriebenen JavaScript-Wert oder das Objekt. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation des resultierenden Objekts vor der Rückgabe durchzuführen.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Der String, der als JSON analysiert werden soll. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion, gibt dies vor, wie jeder beim Parsen erzeugte Wert vor der Rückgabe transformiert wird. Nicht aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der dem Wert zugeordnet ist.
    - `value`
      - : Der beim Parsen erzeugte Wert.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das Zustände enthält, die für den aktuellen Ausdruck, der wiederbelebt wird, relevant sind. Es ist ein neues Objekt bei jedem Aufruf der _reviver_-Funktion. Es wird nur beim Wiederbeleben von primitiven Werten übergeben, jedoch nicht, wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert repräsentiert.

### Rückgabewert

Das {{jsxref("Object")}}, {{jsxref("Array")}}, String, Zahl, Boolean oder `null`-Wert, der dem angegebenen JSON-`text` entspricht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu parsende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet den String aus, als ob er ein JavaScript-Ausdruck wäre. Der einzige Fall, in dem ein JSON-Text einen anderen Wert als der gleiche JavaScript-Ausdruck darstellt, ist beim Umgang mit dem `"__proto__"` Schlüssel — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Insbesondere werden der berechnete Wert und alle seine Eigenschaften (in einer [depth-first](https://en.wikipedia.org/wiki/Depth-first_search)-Weise, beginnend mit den am tiefsten verschachtelten Eigenschaften und bis hin zu dem ursprünglichen Wert selbst) einzeln durch den `reviver` geführt.

Der `reviver` wird mit dem Objekt aufgerufen, das die zu verarbeitende Eigenschaft als `this` enthält (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in diesem Fall gibt es keine separate `this`-Bindung) und zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzliches `context`-Parameter übergeben, das den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — zum Beispiel, wenn der Ausführungspfad am Ende der Funktion endet), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft so umdefiniert, dass sie der Rückgabewert ist. Wenn der `reviver` nur einige Werte und nicht andere transformiert, stellen Sie sicher, dass alle nicht transformierten Werte unverändert zurückgegeben werden — andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie das `replacer`-Parameter in {{jsxref("JSON.stringify()")}}, wird für Arrays und Objekte der `reviver` zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte arbeitet `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie vom `reviver` einen anderen Wert zurückgeben, ersetzt dieser Wert vollständig den ursprünglich analysierten Wert. Dies gilt sogar für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

Es gibt keine Möglichkeit, dies allgemein zu umgehen. Sie können den Fall, in dem `key` ein leerer String ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel enthalten können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel erforderlich ist, wenn Sie den Reviver implementieren.

Beachten Sie, dass der `reviver` nach dem Parsen des Wertes ausgeführt wird. Wenn also zum Beispiel Zahlen im JSON-Text bereits in JavaScript-Zahlen umgewandelt wurden, könnten sie dabei an Präzision verlieren. Eine Möglichkeit, große Zahlen ohne Präzisionsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und in [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete Formate mit beliebiger Genauigkeit wiederzubeleben.

Sie können auch die `context.source`-Eigenschaft verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert repräsentiert, wie unten gezeigt:

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

### Verwendung von JSON.parse()

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Verwendung des Reviver-Parameters

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

### Verwendung von Reviver in Kombination mit dem Replacer von JSON.stringify()

Damit ein Wert ordnungsgemäß rundläuft (d. h. er wird in das gleiche ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen bewahren. Zum Beispiel, können Sie dafür das `replacer`-Parameter von {{jsxref("JSON.stringify()")}} verwenden:

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
  Array.isArray(value) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

Da JSON keinen Syntaxraum für die Annotation von Typmetadaten hat, müssen Sie, um Werte wiederzubeleben, die keine einfachen Objekte sind, eine der folgenden Methoden in Betracht ziehen:

- Das gesamte Objekt in einen String serialisieren und mit einem Typ-Tag voranstellen.
- „Erraten“ basierend auf der Struktur der Daten (zum Beispiel ein Array aus Zweihand-Arrays)
- Wenn die Form des Payloads festliegt, basierend auf dem Eigenschaftsnamen (zum Beispiel halten alle Eigenschaften namens `registry` `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wird ein `SyntaxError` ausgelöst.

Arrays und Objekte können keine [trailing commas](/de/docs/Web/JavaScript/Reference/Trailing_commas) im JSON haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte (nicht einfache) Anführungszeichen begrenzt werden:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON in einem JavaScript-String-Literal schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um das JavaScript-String-Literal zu begrenzen, oder die doppelten Anführungszeichen, die den JSON-String begrenzen, escapen:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse` Verhaltens (Revivers `context` Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
