---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält. Beim Serialisieren zu JSON wird das raw JSON-Objekt behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON **darstellend einen primitiven Wert** sein.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit demselben Inhalt wie der übergebene `string` zu erstellen, jedoch ohne Anführungszeichen um den String selbst. Dieses Objekt [hat `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (sodass es nie versehentlich als reguläres Objekt durch irgendeine Art von primitiver Konvertierung serialisiert wird) und verfügt über die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`.

Darüber hinaus verfügt es über eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es selbst als raw JSON-Objekt kennzeichnet. Dies ermöglicht, dass es durch {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} identifiziert werden kann.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein raw JSON-Objekt kann als unveränderliche, atomare Datenstruktur betrachtet werden, wie jede Art von [primitiv](/de/docs/Web/JavaScript/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine Daten außer dem raw JSON-Text. Es wird verwendet, um Daten vorab zu serialisieren in Formate, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der typischste Anwendungsfall ist das Problem des Verlusts der Genauigkeit bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau äquivalent zu der ursprünglichen Zahl! Das liegt daran, dass JavaScript die Gleitkommadarstellung für alle Zahlen verwendet und nicht alle Ganzzahlen genau darstellen kann. Das Zahlenliteral `12345678901234567890` wird bereits gerundet auf die nächste darstellbare Zahl, wenn es von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zu sagen, das Zahlenliteral `12345678901234567000` zu erzeugen, weil es einfach keinen entsprechenden JavaScript-Zahlenwert dafür gibt. Mit raw JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel siehe [Verlustfreie Nummern-Serialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er im finalen JSON dennoch eine Zahl wird. Dies liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem String-Wert in Anführungszeichen verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` erlaubt es Ihnen, beliebigen JSON-Text einzufügen, erlaubt es jedoch nicht, ungültiges JSON zu erstellen. Alles, was durch die JSON-Syntax nicht erlaubt war, ist durch `JSON.rawJSON()` ebenfalls nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Außerdem können Sie mit `JSON.rawJSON()` keine JSON-Objekte oder Arrays erstellen.

## Beispiele

### Verwenden von JSON.rawJSON(), um JSON-Ausdrücke verschiedener Typen zu erstellen

```js
const numJSON = JSON.rawJSON("123");
const strJSON = JSON.rawJSON('"Hello world"');
const boolJSON = JSON.rawJSON("true");
const nullJSON = JSON.rawJSON("null");

console.log(
  JSON.stringify({
    age: numJSON,
    message: strJSON,
    isActive: boolJSON,
    nothing: nullJSON,
  }),
);

// {"age":123,"message":"Hello world","isActive":true,"nothing":null}
```

Sie können jedoch `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwenden von JSON.rawJSON() zum Erstellen von escaped String-Literalen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings zu JSON serialisiert werden, werden alle Codepunkte, außer denen, die nicht in JSON-String-Literalen legal sind (wie Zeilenumbrüche), buchstäblich gedruckt:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies kann unerwünscht sein, da der Empfänger dieses Strings Unicode möglicherweise anders handhabt. Um die Interoperabilität zu verbessern, können Sie den zu serialisierenden String mit Escape-Sequenzen explizit angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Rückschrägstriche in der `rawJSON` tatsächlich ein einzelnes Schrägstrichzeichen darstellen, sodass der JSON-Text folgendermaßen aussieht:

```json-nolint
{"value":"\ud83d\ude04"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
