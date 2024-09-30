---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`unicodeSets`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flags, das mehr Unicode-bezogene Funktionen ermöglicht. ("v" ist der nächste Buchstabe nach "u" im Alphabet.) Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle in der `u`-Flag-Beschreibung erwähnten Funktionen, plus:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)-Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Strings anstatt nur von Zeichen zu matchen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird aufgewertet, um Schnittmengen-, Vereinigungs- und Subtraktions-Syntaxen zu ermöglichen sowie mehrere Unicode-Zeichen zu matchen.
- Die Komplement-Syntax der Zeichenklasse `[^...]` konstruiert eine Komplementklasse anstatt das Match-Ergebnis zu negieren, um einige verwirrende Verhaltensweisen bei der Groß- und Kleinschreibung zu vermeiden. Weitere Informationen finden Sie unter [Komplementklassen und unterscheidungslose Übereinstimmungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige `u`-Modus-Reguläre Ausdrücke werden im `v`-Modus ungültig. Insbesondere ist die Syntax der Zeichenklassen unterschiedlich und einige Zeichen können nicht mehr buchstäblich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Graphem-Cluster nicht als einzelne Zeichen; sie sind weiterhin mehrere Codepunkte. Zum Beispiel kann `/[🇺🇳]/v` weiterhin `"🇺"` matchen.

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
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
