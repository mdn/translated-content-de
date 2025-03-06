---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein JSON-Textstück enthält. Wenn es in JSON serialisiert wird, wird das rohe JSON-Objekt so behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON sein, das einen primären Wert darstellt.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit demselben Inhalt wie die bereitgestellte `string` zu erstellen, ohne Anführungszeichen um die Zeichenkette selbst. Dieses Objekt [hat `null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist gefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (sodass es niemals versehentlich als reguläres Objekt durch irgendeine Art von primitiver Umwandlung serialisiert wird), und es besitzt folgende Eigenschaft:

- `rawJSON`
  - : Die ursprüngliche bereitgestellte JSON-`string`.

Darüber hinaus hat es eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es, von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die `string` kein gültiges JSON ist oder wenn sie ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als unveränderliche, atomare Datenstruktur angesehen werden, ähnlich wie jede Art von [Primitivwert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten "vorab zu serialisieren" in Formate, die `JSON.stringify` aus verschiedenen Gründen selbst nicht erzeugen kann. Der typischste Anwendungsfall ist das Problem des Verlusts von Präzision bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau äquivalent zur ursprünglichen Zahl! Dies liegt daran, dass JavaScript Gleitpunktdarstellungen für alle Zahlen verwendet, sodass es nicht alle Ganzzahlen genau darstellen kann. Das Zahlenliteral `12345678901234567890` selbst wird bereits auf die nächste darstellbare Zahl gerundet, wenn es von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` anzuweisen, das Zahlenliteral `12345678901234567890` zu erzeugen, da es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Ein vollständigeres Beispiel hierfür finden Sie unter [Verlustfreie Nummernserialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass obwohl wir `JSON.rawJSON()` eine Zeichenkette übergeben haben, sie im endgültigen JSON zu einer Zahl wird. Dies liegt daran, dass die Zeichenkette den unveränderten JSON-Text darstellt. Wenn Sie eine Zeichenkette serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen Zeichenkettenwert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` erlaubt es Ihnen, beliebigen JSON-Text einzufügen, erlaubt jedoch nicht die Erstellung von ungültigem JSON. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Darüber hinaus können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen.

## Beispiele

### Verwendung von JSON.rawJSON(), um JSON-Ausdrücke verschiedener Typen zu erstellen

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

Allerdings können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON(), um maskierte Zeichenkettenliterale zu erstellen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Zeichenketten. Wenn Zeichenketten in JSON serialisiert werden, werden alle Codepunkte bis auf diejenigen, die in JSON-Zeichenkettenliteralen nicht legal sind (wie Zeilenumbrüche), buchstäblich gedruckt:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies könnte unerwünscht sein, da der Empfänger dieser Zeichenkette Unicode möglicherweise anders behandelt. Um die Interoperabilität zu verbessern, können Sie die zu serialisierende Zeichenkette mit Escape-Sequenzen explizit angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Backslashes im `rawJSON` tatsächlich einen einzelnen Schrägstrich darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
