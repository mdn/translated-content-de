---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Bei der Serialisierung in JSON wird das rohe JSON-Objekt so behandelt, als wäre es bereits ein JSON-Stück. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss ein gültiges JSON **darstellen, das einen primitiven Wert repräsentiert**.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit demselben Inhalt wie der bereitgestellte `string` zu erstellen, ohne Anführungszeichen um den string selbst. Dieses Objekt [hat `null` Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (sodass es nie versehentlich als reguläres Objekt durch irgendeine Art primitive Konvertierung serialisiert wird) und hat die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`, der bereitgestellt wurde.

Außerdem besitzt es eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es, dass es von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} identifiziert wird.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder ein Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als unveränderliche, atomare Datenstruktur angesehen werden, ähnlich wie jeder [primitive](/de/docs/Web/JavaScript/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten in Formate vorzuserialisieren, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der typischste Anwendungsfall ist das Problem mit dem Verlust der Genauigkeit bei Fließkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr exakt gleichwertig mit der ursprünglichen Zahl! Dies liegt daran, dass JavaScript Fließkommadarstellung für alle Zahlen verwendet, sodass es nicht alle Ganzzahlen exakt darstellen kann. Der Zahlliteral `12345678901234567890` selbst wird bereits auf die nächste darstellbare Zahl gerundet, wenn er von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` mitzuteilen, den Zahlliteral `12345678901234567000` zu erzeugen, weil es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel dazu siehe [Verlustfreie Zahlenserialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass obwohl wir einen String zu `JSON.rawJSON()` übergeben haben, er dennoch eine Zahl im finalen JSON wird. Dies liegt daran, dass der String den wortwörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen String-Wert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` erlaubt es Ihnen, beliebigen JSON-Text einzufügen, erlaubt es jedoch nicht, ungültiges JSON zu erstellen. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Zudem können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen.

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

Sie können jedoch nicht `JSON.rawJSON()` verwenden, um JSON-Objekte oder -Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON() zur Erstellung von maskierten String-Literalen

Neben Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings in JSON serialisiert werden, werden alle Codepunkte, außer denen, die in JSON-Stringliteralen nicht legal sind (wie Zeilenumbrüche), buchstäblich ausgegeben:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies kann unerwünscht sein, weil der Empfänger dieses Strings Unicode möglicherweise anders behandelt. Um die Interoperabilität zu verbessern, können Sie den zu serialisierenden String explizit mit Escape-Sequenzen angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie die doppelten Backslashes im `rawJSON`, die tatsächlich einen einzelnen Schrägstrich darstellen, sodass der JSON-Text aussieht wie:

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
