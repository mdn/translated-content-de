---
title: WeakMap()-Konstruktor
short-title: WeakMap()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`WeakMap()`**-Konstruktor erstellt {{jsxref("WeakMap")}}-Objekte.

## Syntax

```js-nolint
new WeakMap()
new WeakMap(iterable)
```

> [!NOTE]
> `WeakMap()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable`
  - : Ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) oder ein anderes [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols), das ein zwei-elementiges Array-ähnliches Objekt erzeugt. Dessen erstes Element wird als `WeakMap`-Schlüssel und das zweite als Wert genutzt, der dem Schlüssel zugeordnet wird. Jedes Schlüssel-Wert-Paar wird der neuen `WeakMap` hinzugefügt. `null` wird als `undefined` behandelt.

## Beispiele

### Verwendung von WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = () => {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Verbergen von Implementierungsdetails mit ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
