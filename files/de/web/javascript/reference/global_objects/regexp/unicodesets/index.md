---
title: RegExp.prototype.unicodeSets
short-title: unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Accessor-Eigenschaft **`unicodeSets`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob für diesen regulären Ausdruck das `v`-Flag verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicodeSets")}}

```js interactive-example
const regex1 = /[α-ω]/u;
const regex2 = /[\p{Lowercase}&&\p{Script=Greek}]/v;

console.log(regex1.unicodeSets);
// Expected output: false

console.log(regex2.unicodeSets);
// Expected output: true
```

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls ist der Wert `false`. Das `v`-Flag ist eine Erweiterung des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flags, die weitere Unicode-bezogene Funktionen ermöglicht. („v“ ist im Alphabet der nächste Buchstabe nach „u“.) Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die gleichzeitige Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag stehen alle in der Beschreibung des `u`-Flags genannten Funktionen zur Verfügung sowie zusätzlich:

- Die Escape-Sequenz [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) kann nicht nur zum Abgleich von Zeicheneigenschaften, sondern auch zum Abgleich von Eigenschaften von Zeichenfolgen verwendet werden.
- Die Syntax für [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) unterstützt zusätzlich Schnittmengen, Vereinigungen und Differenzen sowie den Abgleich mehrerer Unicode-Zeichen.
- Die Komplement-Syntax für Zeichenklassen `[^...]` erstellt eine Komplementklasse, statt das Abgleichergebnis zu negieren. Dadurch werden einige verwirrende Verhaltensweisen beim Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung vermieden. Weitere Informationen finden Sie unter [Komplementklassen und Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige reguläre Ausdrücke, die im `u`-Modus gültig sind, werden im `v`-Modus ungültig. Insbesondere unterscheidet sich die Syntax für Zeichenklassen, und einige Zeichen dürfen nicht mehr wörtlich vorkommen. Weitere Informationen finden Sie unter [Zeichenklassen im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Graphemcluster nicht als einzelne Zeichen; sie bestehen weiterhin aus mehreren Codepunkten. Beispielsweise kann `/[🇺🇳]/v` weiterhin mit `"🇺"` übereinstimmen.

Der Setter-Accessor von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.unicodeSets === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Man würde erwarten, dass der Getter einen `TypeError` auslöst, wenn der `this`-Wert keine `RegExp`-Instanz ist.)

## Beispiele

### Verwendung der unicodeSets-Eigenschaft

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
- [RegExp-v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
