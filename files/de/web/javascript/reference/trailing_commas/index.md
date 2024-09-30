---
title: Nachgestellte Kommata
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("More")}}

**Nachgestellte Kommata** (manchmal "Schlusskommata" genannt) können nützlich sein, wenn Sie neue Elemente, Parameter oder Eigenschaften zu JavaScript-Code hinzufügen. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile hinzufügen, ohne die vorherige letzte Zeile ändern zu müssen, falls diese Zeile bereits ein nachgestelltes Komma verwendet. Dies macht Versionskontroll-Diffs übersichtlicher und das Bearbeiten von Code könnte weniger problematisch sein.

JavaScript erlaubt nachgestellte Kommata in Array-Literalen seit Beginn. Nachgestellte Kommata sind jetzt auch in Objektliteralen, Funktionsparametern, benannten Imports, benannten Exports und mehr erlaubt.

[JSON](/de/docs/Glossary/JSON) erlaubt jedoch keine nachgestellten Kommata.

## Beschreibung

JavaScript erlaubt nachgestellte Kommata überall dort, wo eine kommagetrennte Liste von Werten akzeptiert wird und mehr Werte nach dem letzten Element erwartet werden können. Dazu gehören:

- [Array-Literale](#arrays)
- [Objektliterale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamischer Import](#nachgestellte_kommata_beim_dynamischen_import)
- [Array- und Objekt-Destructuring](#nachgestellte_kommata_beim_destructuring)

In all diesen Fällen ist das nachgestellte Komma völlig optional und ändert in keiner Weise die Semantik des Programms.

Es ist besonders nützlich beim Hinzufügen, Entfernen oder Neuordnen von Elementen in einer Liste, die sich über mehrere Zeilen erstreckt, da es die Anzahl der zu ändernden Zeilen reduziert, was sowohl das Bearbeiten als auch das Überprüfen des Diffs erleichtert.

```diff
  [
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]
```

## Beispiele

### Nachgestellte Kommata in Literalen

#### Arrays

JavaScript ignoriert nachgestellte Kommata in Array-Literalen:

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

Wenn mehr als ein nachgestelltes Komma verwendet wird, wird eine Elision (oder Lücke) erzeugt. Ein Array mit Lücken wird als [_spärlich_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet (ein _dichtes_ Array hat keine Lücken). Beim Iterieren von Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Lücken übersprungen. Spärliche Arrays sind im Allgemeinen ungünstig, daher sollten Sie vermeiden, mehrere nachgestellte Kommata zu haben.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Nachgestellte Kommata in Objektliteralen sind ebenfalls zulässig:

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### Nachgestellte Kommata in Funktionen

Nachgestellte Kommata sind auch in Funktionsparameterlisten erlaubt.

#### Parameterdefinitionen

Die folgenden Funktionsdefinitionen sind rechtlich und gleichwertig zueinander. Nachgestellte Kommata beeinflussen nicht die Eigenschaft [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) von Funktionsdeklarationen oder deren [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Das nachgestellte Komma funktioniert auch mit [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Klassen oder Objekte:

```js-nolint
class C {
  one(a,) {}
  two(a, b,) {}
}

const obj = {
  one(a,) {},
  two(a, b,) {},
};
```

#### Funktionsaufrufe

Die folgenden Funktionsaufrufe sind rechtlich und gleichwertig zueinander.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Ungültige nachgestellte Kommata

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, werfen einen {{jsxref("SyntaxError")}}. Außerdem sind bei Verwendung von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) keine nachgestellten Kommata erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Nachgestellte Kommata beim Destructuring

Ein nachgestelltes Komma ist auch auf der linken Seite erlaubt, wenn die [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet wird:

```js-nolint
// array destructuring with trailing comma
[a, b,] = [1, 2];

// object destructuring with trailing comma
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

Auch hier wird bei Verwendung eines Rest-Elements ein {{jsxref("SyntaxError")}} ausgelöst:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Nachgestellte Kommata in JSON

Da JSON auf einer sehr eingeschränkten Untermenge der JavaScript-Syntax basiert, sind **nachgestellte Kommata in JSON nicht erlaubt**.

Beide Zeilen werfen ein `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Lassen Sie die nachgestellten Kommata weg, um das JSON korrekt zu parsen:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Nachgestellte Kommata in benannten Importen und benannten Exporten

Nachgestellte Kommata sind in [benannten Importen](/de/docs/Web/JavaScript/Reference/Statements/import#named_import) und [benannten Exporten](/de/docs/Web/JavaScript/Reference/Statements/export) zulässig.

#### Benannte Importe

```js-nolint
import {
  A,
  B,
  C,
} from "D";

import { X, Y, Z, } from "W";

import { A as B, C as D, E as F, } from "Z";
```

#### Benannte Exporte

```js-nolint
export {
  A,
  B,
  C,
};

export { A, B, C, };

export { A as B, C as D, E as F, };
```

### Nachgestellte Kommata beim dynamischen Import

Nachgestellte Kommata sind nur bei [dynamischen Importen](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn die Laufzeit auch den zweiten `options`-Parameter implementiert.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantifizierer-Präfix

> [!NOTE]
> Das nachgestellte Komma in einem [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) ändert tatsächlich seine Semantik von "genau `n`" zu "mindestens `n`".

```js
/x{2}/; // Exactly 2 occurrences of "x"; equivalent to /xx/
/x{2,}/; // At least 2 occurrences of "x"; equivalent to /xx+/
/x{2,4}/; // 2 to 4 occurrences of "x"; equivalent to /xxx?x?/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
