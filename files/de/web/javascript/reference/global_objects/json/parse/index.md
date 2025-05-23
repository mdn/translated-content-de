---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{JSRef}}

Die **`JSON.parse()`** statische Methode parst einen JSON-String und konstruierte den JavaScript-Wert oder das Objekt, das durch den String beschrieben wird. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation an dem resultierenden Objekt vorzunehmen, bevor es zurückgegeben wird.

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
  - : Wenn eine Funktion, bestimmt diese, wie jeder durch das Parsen ursprünglich produzierte Wert transformiert wird, bevor er zurückgegeben wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der mit dem Wert assoziiert ist.
    - `value`
      - : Der Wert, der durch das Parsen produziert wurde.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den für den aktuellen Ausdruck relevanten Zustand enthält, der wiederbelebt wird. Es ist ein neues Objekt für jeden Aufruf der Revive-Funktion. Es wird nur übergeben, wenn primitive Werte wiederbelebt werden, nicht jedoch, wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der originale JSON-String, der diesen Wert repräsentiert.

### Rückgabewert

Das entsprechende {{jsxref("Object")}}, {{jsxref("Array")}}, die Zeichenkette, Zahl, Boolean oder `null`-Wert entsprechend dem gegebenen JSON-`text`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu parsende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` parst einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet den String aus, als wäre er ein JavaScript-Ausdruck. Der einzige Fall, in dem ein JSON-Textstück einen anderen Wert als derselbe JavaScript-Ausdruck darstellt, ist, wenn der `"__proto__"`-Schlüssel verwendet wird — siehe [Objektsyntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Speziell wird der berechnete Wert und alle seine Eigenschaften (in einer [tiefen Suche](https://en.wikipedia.org/wiki/Depth-first_search), beginnend mit den am tiefsten verschachtelten Eigenschaften und fortfahrend bis zum ursprünglichen Wert selbst) einzeln durch den `reviver` geführt.

Der `reviver` wird mit dem zu verarbeitenden Objekt als `this` aufgerufen (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in welchem Fall es keine separate `this`-Bindung gibt) und mit zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert repräsentieren. Für primitive Werte wird ein zusätzliches `context`-Parameter übergeben, das den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — zum Beispiel, wenn das Ende der Funktion erreicht wird), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um der Rückgabewert zu sein. Wenn der `reviver` einige Werte transformiert und andere nicht, sollten Sie sicherstellen, dass alle nicht transformierten Werte unverändert zurückgegeben werden — andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie der `replacer`-Parameter von {{jsxref("JSON.stringify()")}}, wird für Arrays und Objekte der `reviver` zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert der `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert aus dem `reviver` zurückgeben, ersetzt dieser Wert den ursprünglich geparsten Wert vollständig. Dies gilt auch für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj1); // undefined
```

Es gibt keine generische Möglichkeit, dies zu umgehen. Sie können den Fall, in dem `key` ein leerer String ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel enthalten können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel erforderlich ist, wenn Sie den Reviver implementieren.

Beachten Sie, dass `reviver` nach dem Parsen des Wertes ausgeführt wird. Zum Beispiel werden Zahlen in JSON-Text bereits in JavaScript-Zahlen umgewandelt und können dabei an Präzision verlieren. Eine Möglichkeit, große Zahlen ohne Präzisionsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und sie als [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete Formate für beliebige Präzision wiederzubeleben.

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

### Verwendung von JSON.parse()

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Verwendung des reviver-Parameters

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

### Verwendung von reviver in Kombination mit dem replacer von JSON.stringify()

Damit ein Wert korrekt hin- und herkonvertiert wird (d.h. dass er in dasselbe ursprüngliche Objekt deserialisiert wird), muss der Serialisierungsprozess die Typinformationen bewahren. Zum Beispiel können Sie den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} zu diesem Zweck verwenden:

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

Da JSON keinen syntaktischen Raum zur Anmerkung von Typ-Metadaten hat, müssen Sie eine der folgenden Optionen in Betracht ziehen, um Werte zu wiederzubeleben, die nicht einfache Objekte sind:

- Serialisieren Sie das gesamte Objekt als String und versehen Sie es mit einem Typ-Tag.
- "Raten" Sie basierend auf der Struktur der Daten (zum Beispiel ein Array von Zweiergruppen-Arrays).
- Wenn die Struktur der Nutzlast feststeht, basierend auf dem Eigenschaftsnamen (zum Beispiel halten alle Eigenschaften namens `registry` `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wirft es einen `SyntaxError`.

Arrays und Objekte dürfen in JSON [keine abschließenden Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Zeichenketten müssen durch doppelte (nicht einfache) Anführungszeichen begrenzt sein:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-Zeichenkettenliterals schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um den JavaScript-Zeichenkettenliteral zu begrenzen, oder die doppelten Anführungszeichen, die die JSON-Zeichenkette begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (Reviver's `context`-Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
