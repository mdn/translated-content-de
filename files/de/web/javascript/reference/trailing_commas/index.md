---
title: Abschließende Kommas
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("More")}}

**Abschließende Kommas** (manchmal „finale Kommas“ genannt) können nützlich sein, wenn man neue Elemente, Parameter oder Eigenschaften in JavaScript-Code hinzufügt. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile hinzufügen, ohne die zuvor letzte Zeile zu ändern, wenn diese Zeile bereits ein abschließendes Komma verwendet. Dies macht Versionskontroll-Diffs übersichtlicher und das Bearbeiten des Codes kann weniger mühsam sein.

JavaScript erlaubt abschließende Kommas in Array-Literalen seit dem Anfang. Abschließende Kommas sind nun auch in Objekt-Literalen, Funktionsparametern, benannten Importen, benannten Exporten und mehr erlaubt.

[JSON](/de/docs/Glossary/JSON) hingegen verbietet alle abschließenden Kommas.

## Beschreibung

JavaScript erlaubt abschließende Kommas überall dort, wo eine Liste von Werten akzeptiert wird, die durch Kommata getrennt sind und mehr Werte nach dem letzten Element erwartet werden können. Dies umfasst:

- [Array-Literale](#arrays)
- [Objekt-Literale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamischer Import](#abschließende_kommas_im_dynamischen_import)
- [Array- und Objektdestrukturierung](#abschließende_kommas_in_der_destrukturierung)

In all diesen Fällen ist das abschließende Komma vollkommen optional und ändert in keiner Weise die Semantik des Programms.

Es ist besonders nützlich, wenn Elemente in einer Liste, die sich über mehrere Zeilen erstreckt, hinzugefügt, entfernt oder neu angeordnet werden, da es die Anzahl der zu ändernden Zeilen reduziert, was sowohl das Bearbeiten als auch das Überprüfen des Diffs erleichtert.

```diff
  [
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]
```

## Beispiele

### Abschließende Kommas in Literalen

#### Arrays

JavaScript ignoriert abschließende Kommas in Array-Literalen:

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

Wenn mehr als ein abschließendes Komma verwendet wird, entsteht eine Auslassung (oder ein Loch). Ein Array mit Löchern wird als [_spärlich_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet (ein _dichtes_ Array hat keine Löcher). Beim Iterieren über Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Löcher übersprungen. Spärliche Arrays sind im Allgemeinen ungünstig, daher sollten Sie mehrere abschließende Kommas vermeiden.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Abschließende Kommas in Objekt-Literalen sind ebenfalls zulässig:

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### Abschließende Kommas in Funktionen

Abschließende Kommas sind auch in Funktionsparameterlisten erlaubt.

#### Parameterdefinitionen

Die folgenden Funktionsdefinitionen sind legal und gleichwertig zueinander. Abschließende Kommas beeinflussen nicht die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft von Funktionsdeklarationen oder ihr [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Das abschließende Komma funktioniert auch bei [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für Klassen oder Objekte:

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

#### Ungültige abschließende Kommas

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, führen zu einem {{jsxref("SyntaxError")}}. Darüber hinaus sind bei Verwendung von [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) abschließende Kommas nicht erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Abschließende Kommas in der Destrukturierung

Ein abschließendes Komma ist auch auf der linken Seite beim [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt:

```js-nolint
// Array-Destrukturierung mit abschließendem Komma
[a, b,] = [1, 2];

// Objekt-Destrukturierung mit abschließendem Komma
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

Auch hier, bei Verwendung eines Restelements, wird ein {{jsxref("SyntaxError")}} ausgelöst:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Abschließende Kommas in JSON

Da JSON auf einem sehr eingeschränkten Subset der JavaScript-Syntax basiert, **sind abschließende Kommas in JSON nicht erlaubt**.

Beide Zeilen führen zu einem `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Lassen Sie die abschließenden Kommas weg, um das JSON korrekt zu parsen:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Abschließende Kommas in benannten Importen und Exporten

Abschließende Kommas sind in [benannten Importen](/de/docs/Web/JavaScript/Reference/Statements/import#named_import) und [benannten Exporten](/de/docs/Web/JavaScript/Reference/Statements/export) gültig.

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

### Abschließende Kommas im dynamischen Import

Abschließende Kommas sind nur in [dynamischen Importen](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn die Laufzeit auch den zweiten `options`-Parameter implementiert.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantorenpräfix

> [!NOTE]
> Das abschließende Komma in einem [Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) ändert tatsächlich seine Semantik von „genau `n`“ zu „mindestens `n`“.

```js
/x{2}/; // Genau 2 Vorkommen von "x"; entspricht /xx/
/x{2,}/; // Mindestens 2 Vorkommen von "x"; entspricht /xx+/
/x{2,4}/; // 2 bis 4 Vorkommen von "x"; entspricht /xxx?x?/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Anleitung
