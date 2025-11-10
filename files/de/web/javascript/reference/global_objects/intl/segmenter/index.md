---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Das **`Intl.Segmenter`**-Objekt ermöglicht eine lokalisierungssensitive Textsegmentierung, mit der Sie bedeutungsvolle Elemente (Grapheme, Wörter oder Sätze) aus einer Zeichenkette erhalten können.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// Expected output: 'Que'

console.log(iterator.next().value.segment);
// Expected output: ' '
```

## Konstruktor

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : Erstellt ein neues `Intl.Segmenter`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der angegebenen Sprachstandorte enthält, die unterstützt werden, ohne auf die Standard-Spracheinstellung der Laufzeitumgebung zurückzugreifen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.Segmenter.prototype` definiert und werden von allen `Intl.Segmenter`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Segmenter`-Instanzen ist der Anfangswert der {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}}-Konstruktor.
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Intl.Segmenter"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Sprach- und Granularitätsoptionen widerspiegeln, die während der Initialisierung dieses `Intl.Segmenter`-Objekts berechnet wurden.
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : Gibt eine neue iterierbare [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanz zurück, die die Segmente einer Zeichenkette gemäß der Spracheinstellung und Granularität dieser `Intl.Segmenter`-Instanz darstellt.

## Beispiele

### Grundlegende Verwendung und Unterschied zu String.prototype.split()

Wenn wir [`String.prototype.split(" ")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) verwenden würden, um einen Text in Wörter zu segmentieren, würden wir kein korrektes Ergebnis erhalten, wenn der Sprachraum des Textes keine Leerzeichen zwischen Wörtern verwendet (was für Japanisch, Chinesisch, Thailändisch, Laotisch, Khmer, Myanmar usw. der Fall ist).

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

## Siehe auch

- [Polyfill von `Intl.Segmenter` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-segmenter/)
- {{jsxref("Intl")}}
