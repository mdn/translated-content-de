---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: e439cd79166dbfd9bbe3a003abaf5898ae165509
---

{{JSRef}}

Die **`unicodeSets`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicodeSets")}}

```js interactive-example
const regex1 = new RegExp("[\\p{Lowercase}&&\\p{Script=Greek}]");
const regex2 = new RegExp("[\\p{Lowercase}&&\\p{Script=Greek}]", "v");

console.log(regex1.unicodeSets);
// Expected output: false

console.log(regex2.unicodeSets);
// Expected output: true
```

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde, andernfalls `false`. Das `v`-Flag ist ein "Upgrade" des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flags, das zusätzliche Unicode-bezogene Funktionen ermöglicht. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle im `u`-Flag beschriebenen Funktionen sowie:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)-Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Strings anstelle von nur einzelnen Zeichen zu matchen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird aufgerüstet, um Schnittmengen-, Vereinigungs- und Subtraktions-Syntaxen sowie das Matching mehrerer Unicode-Zeichen zu ermöglichen.
- Die Komplement-Syntax der Zeichenklasse `[^...]` erstellt eine Komplement-Klasse anstelle der Negation des Match-Ergebnisses, wodurch einige verwirrende Verhaltensweisen bei der Groß-/Kleinschreibung-agnostischen Übereinstimmung vermieden werden. Weitere Informationen finden Sie unter [Komplementklassen und groß-/kleinschreibungsagnostisches Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige im `u`-Modus gültige Regexe werden im `v`-Modus ungültig. Insbesondere ist die Zeichenklassen-Syntax unterschiedlich, und einige Zeichen können nicht mehr wörtlich erscheinen. Weitere Informationen finden Sie unter [Zeichenklassen im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Grapheme-Cluster nicht als einzelne Zeichen; sie bleiben weiterhin mehrere Codepunkte. Zum Beispiel kann `/[🇺🇳]/v` weiterhin `"🇺"` matchen.

Der Set-Accessor von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
- [RegExp v-Flag mit Notation für Mengen und Eigenschaften von Strings](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
