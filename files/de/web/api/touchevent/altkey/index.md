---
title: "TouchEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/TouchEvent/altKey
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Touch Events") }}

Die schreibgeschützte **`altKey`**-Eigenschaft der {{domxref("TouchEvent")}}-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob die <kbd>alt</kbd> (Alternate)-Taste aktiviert ist, wenn das Touch-Ereignis erstellt wird. Ist die <kbd>alt</kbd>-Taste aktiviert, hat das Attribut den Wert `true`. Andernfalls ist es `false`.

Diese Eigenschaft ist {{ReadOnlyInline}}.

## Wert

Ein boolescher Wert, der `true` ist, wenn die <kbd>alt</kbd>-Taste für dieses Ereignis aktiviert ist; und `false`, wenn die <kbd>alt</kbd>-Taste nicht aktiviert ist.

## Beispiele

Dieses Beispiel zeigt, wie auf die {{domxref("TouchEvent")}}-Schlüsselmultiplikatoreigenschaften zugegriffen wird: `TouchEvent.altKey`, {{domxref("TouchEvent.ctrlKey")}}, {{domxref("TouchEvent.metaKey")}} und {{domxref("TouchEvent.shiftKey")}}.

Im folgenden Code-Schnipsel protokolliert der {{domxref("Element/touchstart_event", "touchstart")}}-Ereignishandler den Zustand der Modifikatortasten des Ereignisses.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Protokollieren Sie den Zustand der Modifikatortasten dieses Ereignisses
    console.log(`altKey = ${e.altKey}`);
    console.log(`ctrlKey = ${e.ctrlKey}`);
    console.log(`metaKey = ${e.metaKey}`);
    console.log(`shiftKey = ${e.shiftKey}`);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
