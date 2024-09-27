---
title: "ShadowRoot: pointerLockElement-Eigenschaft"
short-title: pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Die **`pointerLockElement`** schreibgeschützte Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt das Element an, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist. Es ist `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel sich in einem anderen Baum befindet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder `null`.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pleElem = shadow.pointerLockElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
