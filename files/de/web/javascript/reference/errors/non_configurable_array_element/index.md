---
title: "TypeError: nicht konfigurierbares Array-Element kann nicht gelöscht werden"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "nicht konfigurierbares Array-Element kann nicht gelöscht werden" tritt auf, wenn versucht wurde, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist.

## Nachricht

```plain
TypeError: Cannot delete property '1' of [object Array] (V8-based)
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties). Beim Verkürzen eines Arrays werden die Elemente, die über die neue Array-Länge hinausgehen, gelöscht, was in dieser Situation fehlschlug.

Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht und ob ihre Attribute (mit Ausnahme von `writable`) geändert werden können.

Normalerweise sind Eigenschaften in einem Objekt, das durch einen [Array-Initialisierer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellt wurde, konfigurierbar. Wenn jedoch zum Beispiel {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften erstellt durch Object.defineProperty

Die {{jsxref("Object.defineProperty()")}} erstellt standardmäßig nicht konfigurierbare Eigenschaften, wenn Sie sie nicht explizit als konfigurierbar festgelegt haben.

```js example-bad
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Sie müssen die Elemente als konfigurierbar festlegen, wenn Sie das Array verkürzen möchten.

```js example-good
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### Versiegelte Arrays

Die {{jsxref("Object.seal()")}}-Funktion markiert alle vorhandenen Elemente als nicht konfigurierbar.

```js example-bad
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Sie müssen entweder den {{jsxref("Object.seal()")}}-Aufruf entfernen oder eine Kopie davon erstellen. Im Fall einer Kopie verändert das Verkürzen der Kopie des Arrays nicht die ursprüngliche Array-Länge.

```js example-good
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

// Kopieren Sie das ursprüngliche Array, um die Kopie zu verkürzen
const copy = Array.from(arr);
copy.length = 1;
// arr.length === 3
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Array/length", "length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
