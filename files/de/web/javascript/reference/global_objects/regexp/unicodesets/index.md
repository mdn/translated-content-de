---
title: RegExp.prototype.unicodeSets
short-title: unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`unicodeSets`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" zum [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag, das mehr Unicode-bezogene Funktionen aktiviert. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` dasselbe Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle Funktionen, die in der Beschreibung des `u`-Flags erwähnt werden, plus:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Zeichenfolgen zu matchen, anstatt nur Zeichen.
- Die [Zeichenklassen]-Syntax(/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird dahingehend erweitert, dass sie Schnittmengen-, Vereinigungs- und Subtraktionssyntaxe sowie das Matchen mehrerer Unicode-Zeichen ermöglicht.
- Die Komplement-Syntax von Zeichenklassen `[^...]` erstellt eine Komplementklasse anstatt das Matchergebnis zu negieren, wodurch einige verwirrende Verhaltensweisen bei der Groß-/Kleinschreibung vermieden werden. Weitere Informationen finden Sie unter [Komplementklassen und Groß-/Kleinschreibungsabgleich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige `u`-Modus-Regexe werden im `v`-Modus ungültig. Insbesondere ist die Zeichenklassen-Syntax unterschiedlich und einige Zeichen können nicht mehr wörtlich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert keine Graphem-Cluster als einzelne Zeichen; sie sind nach wie vor mehrere Codepunkte. Zum Beispiel kann `/[🇺🇳]/v` immer noch `"🇺"` matchen.

Der Set-Zutritt von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
- [RegExp v Flag mit Mengenotation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
