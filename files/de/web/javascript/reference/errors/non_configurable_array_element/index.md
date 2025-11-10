---
title: "TypeError: can’t delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "can't delete non-configurable array element" tritt auf, wenn versucht wurde, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties).

## Meldung

```plain
TypeError: Cannot delete property '1' of [object Array] (V8-based)
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ging schief?

Es wurde versucht, die [Länge eines Arrays zu verkürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array), aber eines der Array-Elemente ist [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties). Beim Kürzen eines Arrays werden die Elemente jenseits der neuen Array-Länge gelöscht, was in dieser Situation fehlgeschlagen ist.

Das Attribut `configurable` kontrolliert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können.

Normalerweise sind Eigenschaften in einem durch einen [Array-Initializer](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellten Objekt konfigurierbar. Wenn jedoch beispielsweise {{jsxref("Object.defineProperty()")}} verwendet wird, ist die Eigenschaft standardmäßig nicht konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften, die durch Object.defineProperty erstellt wurden

Die {{jsxref("Object.defineProperty()")}}-Methode erstellt standardmäßig nicht konfigurierbare Eigenschaften, wenn Sie sie nicht als konfigurierbar spezifiziert haben.

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

Die Funktion {{jsxref("Object.seal()")}} kennzeichnet alle vorhandenen Elemente als nicht konfigurierbar.

```js example-bad
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Sie müssen entweder den {{jsxref("Object.seal()")}}-Aufruf entfernen oder eine Kopie davon erstellen. Im Fall einer Kopie beeinträchtigt das Verkürzen der Kopie des Arrays nicht die originale Array-Länge.

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
