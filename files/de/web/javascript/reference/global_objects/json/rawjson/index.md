---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{JSRef}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es in JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als ob es bereits ein Stück JSON wäre. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON sein, das einen primitiven Wert darstellt.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit dem exakt gleichen Inhalt wie der angegebene `string` zu erstellen, ohne Anführungszeichen um den String selbst. Dieses Objekt [hat das `null`-Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es niemals versehentlich durch irgendeine Art von primitiver Konvertierung als reguläres Objekt serialisiert wird), und hat folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`.

Zudem hat es eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als ein rohes JSON-Objekt markiert. Dies ermöglicht es, dass es von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} identifiziert werden kann.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur wie jede Art von [Primitive](/de/docs/Web/JavaScript/Data_structures#primitive_values) angesehen werden. Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten zu "prä-serialisieren" in Formate, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der häufigste Anwendungsfall ist das Problem des Präzisionsverlusts bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau gleich dem ursprünglichen Wert! Das liegt daran, dass JavaScript zur Darstellung aller Zahlen das Gleitkommadarstellungsverfahren verwendet und daher nicht alle Ganzzahlen exakt darstellen kann. Das Zahlenliteral `12345678901234567890` wird bereits beim Parsen durch JavaScript auf die nächst repräsentierbare Zahl gerundet.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zu verwenden, um das Zahlenliteral `12345678901234567000` zu erzeugen, da es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie direkt angeben, wie `JSON.stringify()` einen bestimmten Wert serialisieren soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Ein vollständigeres Beispiel finden Sie unter [Verlustfreie Zahl-Serialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass, obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er in der endgültigen JSON dennoch eine Zahl wird. Dies liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem String-Wert in Anführungszeichen verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` ermöglicht es Ihnen, beliebigen JSON-Text einzufügen, erlaubt jedoch nicht die Erstellung ungültiger JSON. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Darüber hinaus können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen.

## Beispiele

### Verwendung von JSON.rawJSON() zur Erstellung von JSON-Ausdrücken verschiedener Typen

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

Jedoch können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON() zur Erstellung von escaped String-Literalen

Neben Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings in JSON serialisiert werden, werden alle Codepunkte, außer denen, die in JSON-String-Literals nicht erlaubt sind (wie zum Beispiel Zeilenumbrüche), wörtlich ausgegeben:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies kann unerwünscht sein, da der Empfänger dieses Strings möglicherweise Unicode unterschiedlich behandelt. Um die Interoperabilität zu verbessern, können Sie explizit angeben, dass der String mit Escape-Sequenzen serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Backslashes im `rawJSON` tatsächlich ein einzelnes Schrägstrich-Zeichen darstellen, sodass der JSON-Text folgendermaßen aussieht:

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
