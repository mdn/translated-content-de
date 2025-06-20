---
title: RegExp.prototype.unicodeSets
short-title: unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`unicodeSets`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicodeSets")}}

```js interactive-example
const regex1 = /[\p{Lowercase}&&\p{Script=Greek}]/;
const regex2 = /[\p{Lowercase}&&\p{Script=Greek}]/v;

console.log(regex1.unicodeSets);
// Expected output: false

console.log(regex2.unicodeSets);
// Expected output: true
```

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flags, das mehr Unicode-bezogene Funktionen ermöglicht. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` denselben Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle in der Beschreibung des `u`-Flags erwähnten Funktionen sowie:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Zeichenfolgen zu matchen, anstatt nur Zeichen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird erweitert, um Schnittmengen-, Vereinigungs- und Subtraktions-Syntaxen sowie das Matchen mehrerer Unicode-Zeichen zu ermöglichen.
- Die Komplementärsyntax von Zeichenklassen `[^...]` konstruiert eine Komplementärklasse, anstatt das Matchergebnis zu negieren, um einige verwirrende Verhaltensweisen beim nicht case-sensitiven Matching zu vermeiden. Weitere Informationen finden Sie unter [Komplementärklassen und nicht case-sensitives Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige Regexe im `u`-Modus werden im `v`-Modus ungültig. Insbesondere ist die Syntax der Zeichenklassen unterschiedlich und einige Zeichen können nicht mehr wörtlich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert keine Graphem-Cluster als einzelne Zeichen; sie sind immer noch mehrere Code-Punkte. Zum Beispiel kann `/[🇺🇳]/v` immer noch `"🇺"` matchen.

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
- [RegExp v-Flag mit Mengenotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
