---
title: "PopStateEvent: state-Eigenschaft"
short-title: state
slug: Web/API/PopStateEvent/state
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("History API") }}

Die **`state`**-Eigenschaft, die nur gelesen werden kann, des [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Interfaces repräsentiert den Zustand, der gespeichert wurde, als das Ereignis erstellt wurde.

Praktisch ist es ein Wert, der durch den Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) bereitgestellt wird.

## Wert

Ein Objekt oder `null`.

## Beispiele

Der unten stehende Code protokolliert den Wert von `state`, wenn die Methode [`pushState()`](/de/docs/Web/API/History/pushState) verwendet wird, um einen Wert in den Verlauf zu übergeben.

```js
// Log the state of
addEventListener("popstate", (event) => {
  console.log("State received: ", event.state);
});

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page1.html");
history.pushState(
  { name: "Another example" },
  "pushState example",
  "page1.html",
);
```

Dies wird protokollieren:

```plain
State received: { name: "Example" }
State received: { name: "Another example" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PopStateEvent()`](/de/docs/Web/API/PopStateEvent) Konstruktor
- [`History.state`](/de/docs/Web/API/History/state)
