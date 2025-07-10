---
title: "String: length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/String/length
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`length`** Eigenschaft eines {{jsxref("String")}} Wertes enthält die Länge des Strings in UTF-16 Codeeinheiten.

{{InteractiveExample("JavaScript Demo: String: length", "shorter")}}

```js interactive-example
const str = "Life, the universe and everything. Answer:";

console.log(`${str} ${str.length}`);
// Expected output: "Life, the universe and everything. Answer: 42"
```

## Wert

Eine nicht-negative ganze Zahl.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Eigenschaft gibt die Anzahl der Codeeinheiten im String zurück. JavaScript verwendet die [UTF-16](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Kodierung, wobei jedes Unicode-Zeichen als eine oder zwei Codeeinheiten kodiert werden kann. Daher kann es vorkommen, dass der von `length` zurückgegebene Wert nicht mit der tatsächlichen Anzahl der Unicode-Zeichen im String übereinstimmt. Bei gängigen Schriftarten wie Latein, Kyrillisch, bekannten CJK-Zeichen usw. sollte dies kein Problem darstellen, aber wenn Sie mit bestimmten Schriftarten arbeiten, wie Emojis, [mathematischen Symbolen](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) oder seltenen chinesischen Zeichen, müssen Sie möglicherweise den Unterschied zwischen Codeeinheiten und Zeichen berücksichtigen.

Die Sprachspezifikation verlangt, dass Strings eine maximale Länge von 2<sup>53</sup> - 1 Elementen haben, was die Obergrenze für [präzise Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) darstellt. Ein String mit dieser Länge würde jedoch 16384TiB Speicher benötigen, was in kein vernünftiges Gerätespeicher passt, daher tendieren Implementierungen dazu, die Grenze zu senken, was erlaubt, dass die Länge des Strings in einer 32-Bit-Ganzzahl bequem gespeichert werden kann.

- In V8 (verwendet von Chrome und Node) beträgt die maximale Länge 2<sup>29</sup> - 24 (\~1GiB). Auf 32-Bit-Systemen beträgt die maximale Länge 2<sup>28</sup> - 16 (\~512MiB).
- In Firefox beträgt die maximale Länge 2<sup>30</sup> - 2 (\~2GiB). Vor Firefox 65 betrug die maximale Länge 2<sup>28</sup> - 1 (\~512MiB).
- In Safari beträgt die maximale Länge 2<sup>31</sup> - 1 (\~4GiB).

Wenn Sie mit großen Strings in anderen Kodierungen (wie UTF-8-Dateien oder Blobs) arbeiten, beachten Sie, dass beim Laden der Daten in einen JS-String die Kodierung immer UTF-16 wird. Die Größe des Strings kann sich von der Größe der Quelldatei unterscheiden.

```js
const str1 = "a".repeat(2 ** 29 - 24); // Success
const str2 = "a".repeat(2 ** 29 - 23); // RangeError: Invalid string length

const buffer = new Uint8Array(2 ** 29 - 24).fill("a".codePointAt(0)); // This buffer is 512MiB in size
const str = new TextDecoder().decode(buffer); // This string is 1GiB in size
```

Für einen leeren String ist `length` 0.

Die statische Eigenschaft `String.length` ist nicht mit der Länge von Strings verwandt. Sie ist die [Arity](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der `String` Funktion (grob gesagt, die Anzahl ihrer formalen Parameter) und beträgt 1.

Da `length` Codeeinheiten anstelle von Zeichen zählt, können Sie, wenn Sie die Anzahl der Zeichen erhalten möchten, zuerst den String mit seinem [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) aufteilen, der zeichenweise iteriert:

```js
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  // not mere code units
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
```

Wenn Sie Zeichen nach _Grapheme-Clustern_ zählen möchten, verwenden Sie [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter). Sie können zuerst den String, den Sie aufteilen möchten, an die [`segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) Methode übergeben und dann über das zurückgegebene `Segments` Objekt iterieren, um die Länge zu ermitteln:

```js
function getGraphemeCount(str) {
  const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
  // The Segments object iterator that is used here iterates over characters in grapheme clusters,
  // which may consist of multiple Unicode characters
  return [...segmenter.segment(str)].length;
}

console.log(getGraphemeCount("👨‍👩‍👧‍👧")); // 1
```

## Beispiele

### Grundlegende Verwendung

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long

console.log(`The empty string has a length of ${empty.length}`);
// The empty string has a length of 0
```

### Strings mit einer Länge, die nicht der Anzahl der Zeichen entspricht

```js
const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
```

### Zuordnung zur Länge

Da String ein primitiver Datentyp ist, hat der Versuch, einen Wert der `length`-Eigenschaft eines Strings zuzuweisen, keine beobachtbare Wirkung und wird im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen Fehler werfen.

```js
const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Array`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
