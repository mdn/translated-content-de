---
title: JSON.rawJSON()
short-title: rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es zu JSON serialisiert wird, wird das rohe JSON-Objekt so behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON **darstellen, das einen primitiven Wert** darstellt.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit genau dem gleichen Inhalt wie der bereitgestellte `string` zu erstellen, jedoch ohne Anführungszeichen um den String selbst. Dieses Objekt [hat `null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es nie versehentlich als reguläres Objekt durch irgendeine Art von primitiver Konvertierung serialisiert wird), und hat die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`, der bereitgestellt wurde.

Zudem verfügt es über eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es, von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur angesehen werden, ähnlich wie jede Art von [Primitiv](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten in Formate vorzuserialisieren, die `JSON.stringify` aus verschiedenen Gründen nicht selbst produzieren kann. Der typischste Anwendungsfall ist das Problem des Verlusts der Genauigkeit bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert entspricht nicht mehr exakt der ursprünglichen Zahl! Dies liegt daran, dass JavaScript für alle Zahlen das Gleitkommabereich-Format verwendet, sodass nicht alle Ganzzahlen exakt dargestellt werden können. Das Zahlenliteral `12345678901234567890` selbst wird bereits gerundet auf die nächstliegende darstellbare Zahl, wenn es von JavaScript analysiert wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zu sagen, dass das Zahlenliteral `12345678901234567890` erzeugt werden soll, da es schlichtweg keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel dazu, siehe [Verlustfreie Zahlenserialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass wir, obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er dennoch zu einer Zahl im endgültigen JSON wird. Dies geschieht, weil der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen String-Wert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` ermöglicht es Ihnen, beliebigen JSON-Text einzufügen, lässt aber nicht zu, dass ungültiges JSON erstellt wird. Alles, was durch die JSON-Syntax nicht erlaubt ist, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Darüber hinaus können Sie mit `JSON.rawJSON()` keine JSON-Objekte oder Arrays erstellen.

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

Sie können jedoch nicht `JSON.rawJSON()` verwenden, um JSON-Objekte oder Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwenden von JSON.rawJSON(), um maskierte Zeichenfolgenliterale zu erstellen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings zu JSON serialisiert werden, werden alle Zeichen, mit Ausnahme derjenigen, die nicht legal innerhalb von JSON-Stringliteralen sind (wie Zeilenumbrüche), buchstäblich gedruckt:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies mag nicht wünschenswert sein, da der Empfänger dieser Zeichenfolge Unicode möglicherweise anders handhabt. Zur Verbesserung der Interoperabilität können Sie die zu serialisierende Zeichenfolge explizit mit Escape-Sequenzen angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Rückwärtsschrägstriche im `rawJSON` tatsächlich ein einzelnes Schrägstrich-Zeichen darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
