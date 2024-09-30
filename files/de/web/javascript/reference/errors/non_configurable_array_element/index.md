---
title: "TypeError: can't delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „can't delete non-configurable array element“ tritt auf, wenn versucht wurde, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties).

## Nachricht

```plain
TypeError: Cannot delete property '1' of [object Array] (V8-based)
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties). Beim Verkürzen eines Arrays werden die Elemente, die über die neue Array-Länge hinausgehen, gelöscht, was in diesem Fall fehlschlug.

Das `configurable`-Attribut steuert, ob die Eigenschaft vom Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können.

Normalerweise sind Eigenschaften in einem Objekt, das durch einen [Array-Initializer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellt wurde, konfigurierbar. Wenn jedoch zum Beispiel {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften, die durch Object.defineProperty erstellt wurden

Die {{jsxref("Object.defineProperty()")}} erstellt standardmäßig nicht konfigurierbare Eigenschaften, sofern Sie sie nicht als konfigurierbar angegeben haben.

```js example-bad
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Sie müssen die Elemente als konfigurierbar festlegen, wenn Sie beabsichtigen, das Array zu verkürzen.

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

Sie müssen entweder den Aufruf von {{jsxref("Object.seal()")}} entfernen oder eine Kopie davon machen. Im Falle einer Kopie verändert das Verkürzen der Kopie des Arrays nicht die ursprüngliche Array-Länge.

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

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Array/length", "length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
