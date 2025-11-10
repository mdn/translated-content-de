---
title: Nachgestellte Kommas
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**Nachgestellte Kommas** (manchmal auch "Schlusskommas" genannt) können nützlich sein, wenn Sie neue Elemente, Parameter oder Eigenschaften zu JavaScript-Code hinzufügen. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile einfügen, ohne die bisher letzte Zeile zu ändern, sofern diese bereits ein nachgestelltes Komma verwendet. Dies macht Versionskontroll-Diffs sauberer, und das Bearbeiten von Code kann weniger problematisch sein.

JavaScript erlaubt seit jeher nachgestellte Kommas in Array-Literalen. Nachgestellte Kommas sind jetzt auch in Objekt-Literalen, Funktionsparametern, benannten Importen, benannten Exporten und mehr erlaubt.

{{Glossary("JSON", "JSON")}} hingegen verbietet alle nachgestellten Kommas.

## Beschreibung

JavaScript erlaubt nachgestellte Kommas überall dort, wo eine durch Kommas getrennte Liste von Werten akzeptiert wird und nach dem letzten Element weitere Werte erwartet werden können. Dies schließt ein:

- [Array-Literale](#arrays)
- [Objekt-Literale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamische Importe](#nachgestellte_kommas_bei_dynamischen_importen)
- [Array- und Objekt-Destrukturierung](#nachgestellte_kommas_in_destrukturierungen)

In all diesen Fällen ist das nachgestellte Komma völlig optional und ändert die Semantik des Programms in keiner Weise.

Es ist besonders nützlich beim Hinzufügen, Entfernen oder Umordnen von Elementen in einer Liste, die sich über mehrere Zeilen erstreckt, da es die Anzahl der zu ändernden Zeilen reduziert, was sowohl beim Bearbeiten als auch beim Überprüfen des Diffs hilft.

```diff
  [
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]
```

## Beispiele

### Nachgestellte Kommas in Literalen

#### Arrays

JavaScript ignoriert nachgestellte Kommas in Array-Literalen:

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

Wenn mehr als ein nachgestelltes Komma verwendet wird, entsteht eine Auslassung (oder Lücke). Ein Array mit Lücken wird als [_sparsame_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) (ein _dichtes_ Array hat keine Lücken) bezeichnet. Beim Durchlaufen von Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Lücken übersprungen. Sparse Arrays sind im Allgemeinen ungünstig, daher sollten Sie mehrere nachgestellte Kommas vermeiden.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Nachgestellte Kommas in Objekt-Literalen sind ebenfalls legal:

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### Nachgestellte Kommas in Funktionen

Nachgestellte Kommas sind auch in Funktionsparameterlisten erlaubt.

#### Parameterdefinitionen

Die folgenden Funktionsdefinitionen sind legal und gleichwertig zueinander. Nachgestellte Kommas beeinflussen weder die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft von Funktionsdeklarationen noch deren [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Das nachgestellte Komma funktioniert auch bei [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Klassen oder Objekte:

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

Die folgenden Funktionsaufrufe sind legal und gleichwertig zueinander.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Ungültige nachgestellte Kommas

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, werfen einen {{jsxref("SyntaxError")}}. Darüber hinaus sind beim Verwenden von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) nachgestellte Kommas nicht erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Nachgestellte Kommas in Destrukturierungen

Ein nachgestelltes Komma ist auch innerhalb eines [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Musters erlaubt:

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

Jedoch ist ein nachgestelltes Komma nach dem Rest-Element, falls vorhanden, nicht erlaubt:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Nachgestellte Kommas in JSON

Da JSON auf einem sehr eingeschränkten Subset der JavaScript-Syntax basiert, **sind nachgestellte Kommas in JSON nicht erlaubt**.

Beide Zeilen werfen einen `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Lassen Sie die nachgestellten Kommas weg, um das JSON korrekt zu parsen:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Nachgestellte Kommas in benannten Importen und Exporten

Nachgestellte Kommas sind in [benannten Importen](/de/docs/Web/JavaScript/Reference/Statements/import#named_import) und [benannten Exporten](/de/docs/Web/JavaScript/Reference/Statements/export) gültig.

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

### Nachgestellte Kommas bei dynamischen Importen

Nachgestellte Kommas sind nur in [dynamischen Importen](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn der Laufzeit auch der zweite `options`-Parameter implementiert ist.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantifier-Präfix

> [!NOTE]
> Das nachgestellte Komma in einem [Quantifier](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) ändert tatsächlich seine Semantik von "genau `n`" zu "mindestens `n`".

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
