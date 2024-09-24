---
title: "String: length"
slug: Web/JavaScript/Reference/Global_Objects/String/length
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`length`** Daten-Eigenschaft eines {{jsxref("String")}}-Wertes enthält die Länge des Strings in UTF-16-Code-Einheiten.

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## Wert

Eine nicht negative Ganzzahl.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Eigenschaft gibt die Anzahl der Code-Einheiten im String zurück. JavaScript verwendet [UTF-16](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Kodierung, wobei jedes Unicode-Zeichen als eine oder zwei Code-Einheiten kodiert werden kann. Daher ist es möglich, dass der von `length` zurückgegebene Wert nicht der tatsächlichen Anzahl von Unicode-Zeichen im String entspricht. Für gebräuchliche Schriftarten wie Latein, Kyrillisch, bekannte CJK-Zeichen usw. sollte dies kein Problem darstellen, aber wenn Sie mit bestimmten Schriften arbeiten, wie zum Beispiel Emojis, [mathematischen Symbolen](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) oder seltenen chinesischen Zeichen, müssen Sie möglicherweise den Unterschied zwischen Code-Einheiten und Zeichen berücksichtigen.

Die Sprachspezifikation erfordert, dass Strings eine maximale Länge von 2<sup>53</sup> - 1 Elementen haben, was das obere Limit für [präzise Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) darstellt. Ein String mit dieser Länge benötigt jedoch 16384TiB Speicher, was nicht in den Speicher eines angemessenen Geräts passt, so dass Implementierungen dazu neigen, die Schwelle zu senken, was ermöglicht, die Länge des Strings bequem in einem 32-Bit-Integer zu speichern.

- In V8 (verwendet von Chrome und Node) beträgt die maximale Länge 2<sup>29</sup> - 24 (\~1GiB). Auf 32-Bit-Systemen ist die maximale Länge 2<sup>28</sup> - 16 (\~512MiB).
- In Firefox beträgt die maximale Länge 2<sup>30</sup> - 2 (\~2GiB). Vor Firefox 65 betrug die maximale Länge 2<sup>28</sup> - 1 (\~512MiB).
- In Safari beträgt die maximale Länge 2<sup>31</sup> - 1 (\~4GiB).

Wenn Sie mit großen Strings in anderen Kodierungen (wie UTF-8-Dateien oder Blobs) arbeiten, beachten Sie, dass beim Laden der Daten in einen JS-String die Kodierung immer UTF-16 wird. Die Größe des Strings kann sich von der Größe der Quelldatei unterscheiden.

```js
const str1 = "a".repeat(2 ** 29 - 24); // Erfolg
const str2 = "a".repeat(2 ** 29 - 23); // RangeError: Ungültige Stringlänge

const buffer = new Uint8Array(2 ** 29 - 24).fill("a".codePointAt(0)); // Dieser Puffer ist 512MiB groß
const str = new TextDecoder().decode(buffer); // Dieser String ist 1GiB groß
```

Für einen leeren String ist `length` 0.

Die statische Eigenschaft `String.length` ist nicht mit der Länge von Strings verbunden. Sie ist die [Stelligkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der `String`-Funktion (grob gesagt die Anzahl der formalen Parameter), was 1 ist.

Da `length` Code-Einheiten statt Zeichen zählt, können Sie, wenn Sie die Anzahl der Zeichen erhalten möchten, zuerst den String mit seinem [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) teilen, der Zeichenweise iteriert:

```js
function getCharacterLength(str) {
  // Der hier verwendete String-Iterator iteriert über Zeichen,
  // nicht bloße Code-Einheiten
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
```

Wenn Sie Zeichen nach _Graphem-Clustern_ zählen möchten, verwenden Sie [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter). Sie können zuerst den String, den Sie teilen möchten, an die [`segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)-Methode übergeben und dann über das zurückgegebene `Segments`-Objekt iterieren, um die Länge zu erhalten:

```js
function getGraphemeCount(str) {
  const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
  // Der hier verwendete Segments-Objekt-Iterator iteriert über Zeichen in Graphem-Clustern,
  // die aus mehreren Unicode-Zeichen bestehen können
  return [...segmenter.segment(str)].length;
}

console.log(getGraphemeCount("👨‍👩‍👧‍👧")); // 1
```

## Beispiele

### Grundlegende Verwendung

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} ist ${x.length} Code-Einheiten lang`);
// Mozilla ist 7 Code-Einheiten lang

console.log(`Der leere String hat eine Länge von ${empty.length}`);
// Der leere String hat eine Länge von 0
```

### Strings mit einer Länge ungleich der Anzahl der Zeichen

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

### Zuweisung an length

Da ein String ein primitiver Typ ist, hat der Versuch, einem String die Eigenschaft `length` zuzuweisen, keine sichtbare Wirkung und wird im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen Fehler werfen.

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
