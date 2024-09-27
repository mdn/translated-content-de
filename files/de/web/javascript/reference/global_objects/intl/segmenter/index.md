---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.Segmenter`**-Objekt ermöglicht lokalisierungssensitives Textsegmentieren, indem es Ihnen erlaubt, bedeutungsvolle Einheiten (wie Grapheme, Wörter oder Sätze) aus einem String zu extrahieren.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Konstruktor

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : Erzeugt ein neues `Intl.Segmenter`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die unterstützten der angegebenen Lokalisierungen enthält, ohne auf die Standard-Lokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Segmenter.prototype` definiert und werden von allen `Intl.Segmenter`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Segmenter`-Instanzen ist der anfängliche Wert der {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}}-Konstruktor.
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Segmenter"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieser `Intl.Segmenter`-Objektes berechneten Lokalisierungs- und Granularitätsoptionen widerspiegeln.
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : Gibt eine neue iterierbare [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanz zurück, die die Segmente eines Strings gemäß der Lokalisierung und Granularität dieser `Intl.Segmenter`-Instanz darstellt.

## Beispiele

### Grundlegende Verwendung und Unterschied zu String.prototype.split()

Wenn wir [`String.prototype.split(" ")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) verwenden würden, um einen Text in Wörter zu segmentieren, würden wir nicht das korrekte Ergebnis erhalten, wenn die Lokalisierung des Textes keine Leerzeichen zwischen Wörtern verwendet (was für Japanisch, Chinesisch, Thai, Lao, Khmer, Myanmar usw. der Fall ist).

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
