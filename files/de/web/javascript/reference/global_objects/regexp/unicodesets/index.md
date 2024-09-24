---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`unicodeSets`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt an, ob das `v`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

## Beschreibung

`RegExp.prototype.unicodeSets` hat den Wert `true`, wenn das `v`-Flag verwendet wurde; andernfalls `false`. Das `v`-Flag ist ein "Upgrade" des [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) Flags, das mehr Unicode-bezogene Funktionen aktiviert. („v“ ist der nächste Buchstabe nach „u“ im Alphabet.) Da `u` und `v` dieselben Ausdrücke auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}. Mit dem `v`-Flag erhalten Sie alle Funktionen, die in der Beschreibung des `u`-Flags erwähnt werden, plus:

- Die [`\p`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Escape-Sequenz kann zusätzlich verwendet werden, um Eigenschaften von Zeichenketten zu vergleichen, anstatt nur Zeichen.
- Die [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)-Syntax wird auf Intersection-, Union- und Subtraktion-Syntax sowie auf das Matching mehrerer Unicode-Zeichen erweitert.
- Die Zeichenklassen-Ergänzungs-Syntax `[^...]` erstellt eine Ergänzungsklasse, anstatt das Matchergebnis zu negieren, und vermeidet einige verwirrende Verhaltensweisen beim case-insensitive Matching. Weitere Informationen finden Sie unter [Ergänzungsklassen und case-insensitive Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Einige gültige Regexes im `u`-Modus werden im `v`-Modus ungültig. Insbesondere ist die Zeichenklassen-Syntax unterschiedlich und einige Zeichen können nicht mehr wörtlich erscheinen. Weitere Informationen finden Sie unter [`v`-Modus Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> Der `v`-Modus interpretiert Graphem-Cluster nicht als einzelne Zeichen; sie bleiben mehrere Codepunkte. Zum Beispiel kann `/[🇺🇳]/v` immer noch `"🇺"` matchen.

Die Set-Zugriffsfunktion von `unicodeSets` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung der unicodeSets-Eigenschaft

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

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
- [RegExp v-Flag mit Set-Notation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
