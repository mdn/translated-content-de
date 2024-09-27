---
title: Nachgestellte Kommas
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("More")}}

**Nachgestellte Kommas** (manchmal "abschließende Kommas" genannt) können nützlich sein, wenn neue Elemente, Parameter oder Eigenschaften zu JavaScript-Code hinzugefügt werden. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile hinzufügen, ohne die vorherige letzte Zeile ändern zu müssen, falls diese bereits ein nachgestelltes Komma verwendet. Dies macht Versionskontroll-Differenzen übersichtlicher und die Bearbeitung des Codes kann weniger problematisch sein.

JavaScript erlaubt nachgestellte Kommas in Array-Literalen seit Beginn. Nachgestellte Kommas sind nun auch in Objektliteralen, Funktionsparametern, benannten Importen, benannten Exporten und mehr erlaubt.

[JSON](/de/docs/Glossary/JSON) jedoch verbietet alle nachgestellten Kommas.

## Beschreibung

JavaScript erlaubt nachgestellte Kommas überall dort, wo eine kommagetrennte Liste von Werten akzeptiert wird und nach dem letzten Element weitere Werte erwartet werden könnten. Dies schließt ein:

- [Array-Literale](#arrays)
- [Objektliterale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamische Import](#nachgestellte_kommas_in_dynamischem_import)
- [Array- und Objekt-Destrukturierung](#nachgestellte_kommas_in_destrukturierung)

In all diesen Fällen ist das nachgestellte Komma vollkommen optional und ändert die Semantik des Programms in keiner Weise.

Es ist besonders nützlich beim Hinzufügen, Entfernen oder Umordnen von Elementen in einer Liste, die sich über mehrere Zeilen erstreckt, da es die Anzahl der Zeilen verringert, die geändert werden müssen, was beim Bearbeiten und Überprüfen der Differenz hilft.

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

Wenn mehr als ein nachgestelltes Komma verwendet wird, entsteht eine Auslassung (oder Lücke). Ein Array mit Lücken wird als [_sparses_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) Array bezeichnet (ein _dichtes_ Array hat keine Lücken). Beim Durchlaufen von Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Lücken übersprungen. Sparse-Arrays sind im Allgemeinen ungünstig, daher sollten Sie mehrere nachgestellte Kommas vermeiden.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Nachgestellte Kommas in Objektliteralen sind ebenfalls legal:

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

Die folgenden Paare von Funktionsdefinitionen sind legal und äquivalent zueinander. Nachgestellte Kommas beeinflussen nicht die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft von Funktionsdeklarationen oder ihr [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

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

Die folgenden Paare von Funktionsaufrufen sind legal und äquivalent zueinander.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Illegale nachgestellte Kommas

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, werfen einen {{jsxref("SyntaxError")}}. Außerdem sind nachgestellte Kommas beim Verwenden von [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) nicht erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Nachgestellte Kommas in Destrukturierung

Ein nachgestelltes Komma ist auch auf der linken Seite bei der Verwendung von [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt:

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

Auch hier wird bei Verwendung eines Rest-Elements ein {{jsxref("SyntaxError")}} geworfen:

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

### Nachgestellte Kommas in benannten Importen und benannten Exporten

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

### Nachgestellte Kommas in dynamischem Import

Nachgestellte Kommas sind nur in [dynamischen Importen](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn die Laufzeit auch den zweiten `options`-Parameter implementiert.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantifier-Präfix

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
