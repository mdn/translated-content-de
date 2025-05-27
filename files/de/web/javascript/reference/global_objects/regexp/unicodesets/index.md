---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`unicodeSets`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flags, das mehr Unicode-bezogene Funktionen aktiviert. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` den gleichen Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle in der `u`-Flag-Beschreibung genannten Funktionen sowie:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Zeichenfolgen zu matchen, anstatt nur Zeichen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird erweitert, um Schnitt-, Vereinigungs- und Subtraktionssyntaxe sowie das Matchen mehrerer Unicode-Zeichen zu ermöglichen.
- Die Komplement-Syntax der Zeichenklasse `[^...]` konstruiert eine Komplement-Klasse, anstatt das Matchergebnis zu negieren, was einige verwirrende Verhaltensweisen bei der Groß-/Kleinschreibung vermeidet. Weitere Informationen finden Sie unter [Komplement-Klassen und Groß-/Kleinschreibungs-Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige Regexe im `u`-Modus werden im `v`-Modus ungültig. Insbesondere die Syntax der Zeichenklasse ist unterschiedlich, und einige Zeichen können nicht mehr wörtlich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Grapheme-Cluster nicht als einzelne Zeichen; sie sind weiterhin mehrere Codepunkte. Beispielsweise kann `/[🇺🇳]/v` weiterhin `"🇺"` matchen.

Der Set-Zugriff von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung der unicodeSets Eigenschaft

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
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
