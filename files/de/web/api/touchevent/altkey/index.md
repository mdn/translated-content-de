---
title: "TouchEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/TouchEvent/altKey
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Touch Events") }}

Die schreibgeschützte **`altKey`**-Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob die <kbd>alt</kbd> (Alternate)-Taste aktiviert ist, wenn das Touch-Ereignis erzeugt wird. Wenn die <kbd>alt</kbd>-Taste aktiviert ist, hat das Attribut den Wert `true`. Andernfalls ist es `false`.

Diese Eigenschaft ist {{ReadOnlyInline}}.

## Wert

Ein boolescher Wert, der `true` ist, wenn die <kbd>alt</kbd>-Taste für dieses Ereignis aktiviert ist, und `false`, wenn die <kbd>alt</kbd>-Taste nicht aktiviert ist.

## Beispiele

Dieses Beispiel zeigt, wie Sie auf die Key-Modifier-Eigenschaften des [`TouchEvent`](/de/docs/Web/API/TouchEvent) zugreifen können: `TouchEvent.altKey`, [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey), [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) und [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey).

Im folgenden Code-Snippet protokolliert der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler den Zustand der Modifikatortasten des Ereignisses.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Log the state of this event's modifier keys
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
