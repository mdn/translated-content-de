---
title: Nachgestellte Kommas
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: 560ca6eaa792b30fb2f0fae01a6ccdfde16b848a
---

{{jsSidebar("More")}}

**Nachgestellte Kommas** (manchmal auch "Finalkommas" genannt) können nützlich sein, wenn neue Elemente, Parameter oder Eigenschaften zum JavaScript-Code hinzugefügt werden. Wenn Sie eine neue Eigenschaft hinzufügen möchten, können Sie eine neue Zeile hinzufügen, ohne die vorherige letzte Zeile zu ändern, falls diese bereits ein nachgestelltes Komma verwendet. Dies macht Versionskontroll-Diffs sauberer und das Bearbeiten des Codes könnte weniger problematisch sein.

JavaScript erlaubt nachgestellte Kommas in Array-Literalen seit dem Anfang. Nachgestellte Kommas sind jetzt auch in Objekt-Literalen, Funktionsparametern, benannten Importen, benannten Exporten und mehr erlaubt.

{{Glossary("JSON", "JSON")}} verbietet jedoch alle nachgestellten Kommas.

## Beschreibung

JavaScript erlaubt nachgestellte Kommas überall dort, wo eine kommagetrennte Liste von Werten akzeptiert wird und weitere Werte nach dem letzten Element erwartet werden können. Dies schließt ein:

- [Array-Literale](#arrays)
- [Objekt-Literale](#objekte)
- [Parameterdefinitionen](#parameterdefinitionen)
- [Funktionsaufrufe](#funktionsaufrufe)
- [Benannte Importe](#benannte_importe)
- [Benannte Exporte](#benannte_exporte)
- [Dynamische Importe](#nachgestellte_kommas_im_dynamischen_import)
- [Destrukturierung von Arrays und Objekten](#nachgestellte_kommas_in_der_destrukturierung)

In all diesen Fällen ist das nachgestellte Komma vollständig optional und ändert die Semantik des Programms in keiner Weise.

Es ist besonders nützlich, wenn Elemente in einer mehrzeiligen Liste hinzugefügt, entfernt oder umgeordnet werden, da es die Anzahl der zu ändernden Zeilen reduziert, was sowohl bei der Bearbeitung als auch bei der Überprüfung des Diffs hilft.

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

Wenn mehr als ein nachgestelltes Komma verwendet wird, entsteht eine Auslassung (oder Lücke). Ein Array mit Lücken wird [_dünn_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) genannt (ein _dichtes_ Array hat keine Lücken). Beim Durchlaufen von Arrays, zum Beispiel mit {{jsxref("Array.prototype.forEach()")}} oder {{jsxref("Array.prototype.map()")}}, werden Array-Lücken übersprungen. Dünne Arrays sind in der Regel unerwünscht, daher sollten Sie mehrere nachgestellte Kommas vermeiden.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objekte

Nachgestellte Kommas in Objekt-Literalen sind ebenfalls erlaubt:

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

Die folgenden Funktionsdefinitionen sind gültig und äquivalent zueinander. Nachgestellte Kommas beeinflussen nicht die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft von Funktionsdeklarationen oder ihr [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt.

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

Die folgenden Funktionsaufrufe sind gültig und äquivalent zueinander.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Unerlaubte nachgestellte Kommas

Funktionsparameterdefinitionen oder Funktionsaufrufe, die nur ein Komma enthalten, werfen einen {{jsxref("SyntaxError")}}. Außerdem ist bei der Verwendung von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ein nachgestelltes Komma nicht erlaubt:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Nachgestellte Kommas in der Destrukturierung

Ein nachgestelltes Komma ist auch auf der linken Seite bei der Verwendung von [Destrukturierungszuweisungen](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt:

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

Auch hier wird ein {{jsxref("SyntaxError")}} ausgelöst, wenn ein Rest-Element verwendet wird:

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

### Nachgestellte Kommas im dynamischen Import

Nachgestellte Kommas sind nur in [dynamischen Importen](/de/docs/Web/JavaScript/Reference/Operators/import) erlaubt, wenn die Laufzeit auch den zweiten `options`-Parameter implementiert.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantifier prefix

> [!NOTE]
> Das nachgestellte Komma in einem [Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) ändert tatsächlich seine Semantik vom "genauen `n`" Abgleich zum "mindestens `n`" Abgleich.

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
