---
title: RegExp.prototype.unicodeSets
short-title: unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

Die Accessor-Eigenschaft **`unicodeSets`** von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das Flag `v` mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das Flag `v` verwendet wurde; andernfalls `false`. Das Flag `v` ist ein „Upgrade“ des Flags [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode), das mehr Unicode-bezogene Funktionen aktiviert. („v“ ist im Alphabet der nächste Buchstabe nach „u“.) Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem Flag `v` erhalten Sie alle in der Beschreibung des Flags `u` genannten Funktionen sowie:

- Die Escape-Sequenz [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) kann zusätzlich verwendet werden, um Eigenschaften von Zeichenketten statt nur von Zeichen abzugleichen.
- Die Syntax für [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird erweitert, um Syntax für Schnittmenge, Vereinigung und Subtraktion sowie den Abgleich mehrerer Unicode-Zeichen zu ermöglichen.
- Die Komplementsyntax für Zeichenklassen `[^...]` erzeugt eine Komplementklasse, anstatt das Abgleichsergebnis zu negieren. Dadurch werden einige verwirrende Verhaltensweisen beim Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung vermieden. Weitere Informationen finden Sie unter [Komplementklassen und Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige reguläre Ausdrücke im `u`-Modus werden im `v`-Modus ungültig. Insbesondere unterscheidet sich die Syntax für Zeichenklassen, und einige Zeichen können nicht mehr als Literale erscheinen. Weitere Informationen finden Sie unter [Zeichenklasse im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Graphemcluster nicht als einzelne Zeichen; sie bestehen weiterhin aus mehreren Codepunkten. Beispielsweise kann `/[🇺🇳]/v` weiterhin `"🇺"` abgleichen.

Der Set-Accessor von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwenden der Eigenschaft unicodeSets

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
- [RegExp-v-Flag mit Mengennotation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
