---
title: "ShadowRoot: PointerLockElement-Eigenschaft"
short-title: pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Die **`pointerLockElement`**-Eigenschaft des {{domxref("ShadowRoot")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die das Element bereitstellt, das als Ziel für Mausereignisse festgelegt wird, während der Zeiger gesperrt ist.
Es ist `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Baum sich befindet.

## Wert

Ein {{domxref("Element")}} oder `null`.

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

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Zeiger-Sperre](/de/docs/Web/API/Pointer_Lock_API)
