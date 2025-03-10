---
title: Nachgestellte Kommata
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("More")}}

**Nachgestellte Kommas** (manchmal auch "schlussendliche Kommas" genannt) können nützlich sein, wenn neue Elemente, Parameter oder Eigenschaften zu JavaScript-Code hinzugefügt werden. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile hinzufügen, ohne die vorher letzte Zeile zu veränder, wenn diese Zeile bereits ein nachgestelltes Komma verwendet. Dies macht die Diffs in der Versionskontrolle sauberer und das Bearbeiten des Codes möglicherweise weniger problematisch.

JavaScript hat seit jeher nachgestellte Kommas in Array-Literalen erlaubt. Nachgestellte Kommas sind jetzt auch in Objekt-Literalen, Funktionsparametern, benannten Imports, benannten Exports und mehr erlaubt.

{{Glossary("JSON", "JSON")}} jedoch verbietet alle nachgestellten Kommas.

## Beschreibung

JavaScript erlaubt nachgestellte Kommas überall dort, wo eine kommagetrennte Liste von Werten akzeptiert wird und nach dem letzten Element weitere Werte erwartet werden können. Dies schließt ein:

- [Array-Literale](#arrays)
- [Objekt-Literale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamischer Import](#nachgestellte_kommas_im_dynamischen_import)
- [Array- und Objekt-Destructuring](#nachgestellte_kommas_in_destructuring)

In all diesen Fällen ist das nachgestellte Komma völlig optional und ändert die Semantik des Programms in keiner Weise.

Es ist besonders nützlich beim Hinzufügen, Entfernen oder Umordnen von Elementen in einer Liste, die sich über mehrere Zeilen erstreckt, da es die Anzahl der zu ändernden Zeilen verringert, was sowohl beim Bearbeiten als auch beim Überprüfen der Differenz hilft.

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

Wenn mehr als ein nachgestelltes Komma verwendet wird, entsteht eine Auslassung (oder ein Loch). Ein Array mit Löchern wird als [_spärlich_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet (ein _dichtes_ Array hat keine Löcher). Beim Iterieren über Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Löcher übersprungen. Spärliche Arrays sind generell ungünstig, daher sollten Sie vermeiden, mehrere nachgestellte Kommas zu haben.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Nachgestellte Kommas in Objekt-Literalen sind ebenfalls zulässig:

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

Die folgenden Funktionsdefinitionen sind jeweils gesetzmäßig und gleichwertig zueinander. Nachgestellte Kommas haben keinen Einfluss auf die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft von Funktionsdeklarationen oder deren [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

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

Die folgenden Funktionsaufrufpaare sind gültig und gleichwertig zueinander.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Ungültige nachgestellte Kommas

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, werfen einen {{jsxref("SyntaxError")}}. Darüber hinaus sind bei Verwendung von [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) nachgestellte Kommas nicht erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Nachgestellte Kommas in Destructuring

Ein nachgestelltes Komma ist auch innerhalb eines [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Musters erlaubt:

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

Allerdings ist ein nachgestelltes Komma nach dem Rest-Element, falls vorhanden, nicht erlaubt:

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

Lassen Sie die nachgestellten Kommas weg, um JSON korrekt zu parsen:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Nachgestellte Kommas in benannten Imports und benannten Exports

Nachgestellte Kommas sind in [benannten Imports](/de/docs/Web/JavaScript/Reference/Statements/import#named_import) und [benannten Exports](/de/docs/Web/JavaScript/Reference/Statements/export) gültig.

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

### Nachgestellte Kommas im dynamischen Import

Nachgestellte Kommas sind nur in [dynamischen Imports](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn die Laufzeit auch den zweiten `options`-Parameter implementiert.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantifier-Präfix

> [!NOTE]
> Das nachgestellte Komma in einem [Quantifier](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) ändert tatsächlich dessen Semantik von "genau `n`" zu "mindestens `n`".

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
