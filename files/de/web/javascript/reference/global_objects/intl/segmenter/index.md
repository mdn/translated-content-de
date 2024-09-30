---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.Segmenter`**-Objekt ermöglicht eine lokalisierungsabhängige Textsegmentierung, wodurch Sie bedeutungsvolle Elemente (Grapheme, Wörter oder Sätze) aus einem String erhalten können.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Konstruktor

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : Erstellt ein neues `Intl.Segmenter`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der bereitgestellten Locales enthält, die unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Segmenter.prototype` definiert und werden von allen `Intl.Segmenter`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Intl.Segmenter`-Instanzen ist der Anfangswert der {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}}-Konstruktor.
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Segmenter"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale- und Granularitätsoptionen widerspiegeln, die während der Initialisierung dieses `Intl.Segmenter`-Objekts berechnet wurden.
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : Gibt eine neue iterierbare [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanz zurück, die die Segmente eines Strings entsprechend der Locale und Granularität dieser `Intl.Segmenter`-Instanz darstellt.

## Beispiele

### Grundlegende Verwendung und Unterschied zu String.prototype.split()

Wenn wir [`String.prototype.split(" ")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) verwenden würden, um einen Text in Wörter zu segmentieren, würden wir nicht das richtige Ergebnis erhalten, wenn die Locale des Textes keine Leerzeichen zwischen Wörtern verwendet (was bei Japanisch, Chinesisch, Thai, Laos, Khmer, Myanmar usw. der Fall ist).

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// The two sentences are not correctly segmented.
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// etc.
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
