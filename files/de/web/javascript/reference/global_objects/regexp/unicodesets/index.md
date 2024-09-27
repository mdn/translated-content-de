---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`unicodeSets`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" zum [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag, das mehr Unicode-bezogene Funktionen ermöglicht. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` dieselben Regexes auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle in der Beschreibung des `u`-Flags genannten Funktionen sowie:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)-Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Strings anstatt nur Zeichen zu matchen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird erweitert, um Schnittmengen-, Vereinigungs- und Subtraktionssyntax sowie das Matching mehrerer Unicode-Zeichen zu erlauben.
- Die Komplement-Syntaxzeichenklasse `[^...]` erstellt eine Komplementklasse anstatt das Matchergebnis zu negieren, wodurch einige verwirrende Verhaltensweisen beim fallunempfindlichen Matching vermieden werden. Weitere Informationen finden Sie unter [Komplementklassen und fallunempfindliches Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige Regexes im `u`-Modus werden im `v`-Modus ungültig. Insbesondere ist die Zeichenklassensyntax unterschiedlich und einige Zeichen können nicht mehr wortwörtlich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Graphemcluster nicht als einzelne Zeichen; sie sind immer noch mehrere Codepunkte. Zum Beispiel kann `/[🇺🇳]/v` immer noch `"🇺"` matchen.

Der set-Accessor von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
- [RegExp v-Flag mit Mengenotation und Eigenschaften von Strings](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
