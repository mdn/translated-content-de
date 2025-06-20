---
title: JSON.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`JSON.parse()`** statische Methode analysiert einen JSON-String und erstellt den durch den String beschriebenen JavaScript-Wert oder das Objekt. Es kann eine optionale _reviver_-Funktion angegeben werden, um eine Transformation des resultierenden Objekts vorzunehmen, bevor es zurückgegeben wird.

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
  - : Der String, der als JSON analysiert werden soll. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion, gibt diese vor, wie jeder Wert, der ursprünglich durch die Analyse erzeugt wurde, vor der Rückgabe transformiert wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der mit dem Wert verknüpft ist.
    - `value`
      - : Der Wert, der durch die Analyse erzeugt wurde.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den aktuellen Zustand des gerade wiederbelebten Ausdrucks hält. Es ist ein neues Objekt bei jedem Aufruf der Reviver-Funktion. Es wird nur beim Wiederbeleben von primitiven Werten übergeben, nicht wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt.

### Rückgabewert

Das {{jsxref("Object")}}, {{jsxref("Array")}}, String, Zahl, Boolean, oder `null`-Wert, der dem gegebenen JSON-`text` entspricht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu analysierende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und bewertet den String, als wäre es ein JavaScript-Ausdruck. Der einzige Fall, in dem ein JSON-Text einen anderen Wert als der gleiche JavaScript-Ausdruck darstellt, ist bei der Behandlung des `"__proto__"` Schlüssels — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch die Analyse berechnete Wert _transformiert_, bevor er zurückgegeben wird. Insbesondere werden der berechnete Wert und alle seine Eigenschaften (in einer [Tiefensuche](https://en.wikipedia.org/wiki/Depth-first_search), beginnend mit den am tiefsten verschachtelten Eigenschaften und fortfahrend bis zum ursprünglichen Wert selbst) einzeln durch den `reviver` durchgeführt.

Der `reviver` wird mit dem Objekt, das die zu verarbeitende Eigenschaft enthält, als `this` aufgerufen (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in diesem Fall gibt es keine separate `this`-Bindung) und zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzlicher `context` Parameter übergeben, der den Quelltext dieses Wertes enthält. Wenn die `reviver` Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — zum Beispiel, wenn die Ausführung am Ende der Funktion abbricht), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um den Rückgabewert zu sein. Wenn der `reviver` nur einige Werte transformiert und nicht andere, stellen Sie sicher, dass Sie alle untransformierten Werte unverändert zurückgeben — andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich dem `replacer` Parameter von {{jsxref("JSON.stringify()")}}, wird bei Arrays und Objekten `reviver` zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert von `reviver` zurückgeben, wird dieser Wert den ursprünglich geparsten Wert vollständig ersetzen. Dies gilt sogar für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj1); // undefined
```

Es gibt keine generische Möglichkeit, dies zu umgehen. Sie können nicht speziell den Fall behandeln, wo `key` ein leerer String ist, da JSON-Objekte auch Schlüssel enthalten können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel bei der Implementierung des Revivers erforderlich ist.

Beachten Sie, dass `reviver` nach der Analyse des Wertes ausgeführt wird. Daher werden beispielsweise Zahlen im JSON-Text bereits zu JavaScript-Zahlen umgewandelt worden sein und können in diesem Prozess ihre Genauigkeit verlieren. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und sie zu [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder anderen geeigneten Formaten mit beliebiger Genauigkeit wiederzubeleben.

Sie können auch die `context.source`-Eigenschaft verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert darstellt, wie unten gezeigt:

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

Damit ein Wert korrekt Rundlauf (das heißt, er wird in das gleiche ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen beibehalten. Zum Beispiel können Sie hierfür den `replacer` Parameter von {{jsxref("JSON.stringify()")}} nutzen:

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

Da JSON keinen Syntaxraum für die Anmerkung von Typtags hat, müssen Sie, um Werte, die keine einfachen Objekte sind, wiederzubeleben, eine der folgenden Möglichkeiten in Betracht ziehen:

- Das gesamte Objekt in einen String serialisieren und mit einem Typ-Tag versehen.
- Basierend auf der Struktur der Daten "raten" (zum Beispiel ein Array von Zwei-Mitglieder-Arrays).
- Wenn die Form der Nutzlast festgelegt ist, basierend auf dem Eigenschaftsnamen (zum Beispiel enthalten alle als `registry` genannten Eigenschaften `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht mit der JSON-Grammatik übereinstimmt, wirft es einen `SyntaxError`.

Arrays und Objekte können in JSON keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen mit doppelten (nicht einzelnen) Anführungszeichen eingeschlossen werden:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-String-Literals schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um das JavaScript-String-Literal zu begrenzen, oder die doppelten Anführungszeichen, die das JSON-String begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse` Verhaltens (reviver's `context` Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
