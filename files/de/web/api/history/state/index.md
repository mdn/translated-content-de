---
title: "History: state-Eigenschaft"
short-title: state
slug: Web/API/History/state
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

Die **`state`** schreibgeschützte Eigenschaft der [`History`](/de/docs/Web/API/History)-Schnittstelle gibt einen Wert zurück, der den Zustand an der Spitze des Verlaufstapels darstellt. Dies ist eine Möglichkeit, den Zustand zu betrachten, ohne auf ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis warten zu müssen.

## Wert

Der Zustand an der Spitze des Verlaufstapels. Der Wert ist [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), bis die Methode [`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState) verwendet wird.

## Beispiele

Der untenstehende Code protokolliert den Wert von `history.state` bevor die Methode [`pushState()`](/de/docs/Web/API/History/pushState) verwendet wird, um einen Wert in den Verlauf zu schieben. Die nächste Zeile protokolliert den Wert erneut in die Konsole und zeigt, dass `history.state` nun einen Wert hat.

```js
// Should be null because we haven't modified the history stack yet
console.log("History.state before pushState: ", history.state);

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// Now state has a value.
console.log("History.state after pushState: ", history.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
- [`History.pushState()`](/de/docs/Web/API/History/pushState)
- [`History.replaceState()`](/de/docs/Web/API/History/replaceState)
- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state)
