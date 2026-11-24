---
title: "TypeError: can't delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Die JavaScript-Ausnahme „can't delete non-configurable array element“ tritt auf, wenn versucht wird, [die Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), obwohl eines seiner Elemente [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot delete property '1' of [object Array] (V8-based)
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, [die Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), obwohl eines seiner Elemente [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist. Beim Verkürzen eines Arrays werden die Elemente jenseits der neuen Array-Länge gelöscht. Das ist in diesem Fall fehlgeschlagen.

Das Attribut `configurable` steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können.

Eigenschaften in einem Objekt, das mit einem [Array-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Array_initializer) erstellt wurde, sind normalerweise konfigurierbar. Bei Verwendung von {{jsxref("Object.defineProperty()")}} ist eine Eigenschaft jedoch standardmäßig nicht konfigurierbar.

## Beispiele

### Mit Object.defineProperty erstellte nicht konfigurierbare Eigenschaften

{{jsxref("Object.defineProperty()")}} erstellt standardmäßig nicht konfigurierbare Eigenschaften, wenn Sie nicht ausdrücklich angeben, dass sie konfigurierbar sein sollen.

```js example-bad
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Wenn Sie das Array verkürzen möchten, müssen Sie die Elemente als konfigurierbar festlegen.

```js example-good
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### Versiegelte Arrays

Die Funktion {{jsxref("Object.seal()")}} markiert alle vorhandenen Elemente als nicht konfigurierbar.

```js example-bad
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Sie müssen entweder den Aufruf von {{jsxref("Object.seal()")}} entfernen oder eine Kopie des Arrays erstellen. Wenn Sie die Kopie verkürzen, ändert sich die Länge des ursprünglichen Arrays nicht.

```js example-good
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

// Copy the initial array to shorten the copy
const copy = Array.from(arr);
copy.length = 1;
// arr.length === 3
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Guide/Data_structures#properties)
- {{jsxref("Array/length", "length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
