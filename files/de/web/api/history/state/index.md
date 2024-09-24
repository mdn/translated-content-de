---
title: "History: state-Eigenschaft"
short-title: state
slug: Web/API/History/state
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

Die **`state`**-Eigenschaft der {{DOMxRef("History")}}-Schnittstelle ist schreibgeschützt und gibt einen Wert zurück, der den Zustand an der Spitze des Verlaufstapels darstellt. Dies ist eine Möglichkeit, sich den Zustand anzusehen, ohne auf ein {{domxref("Window/popstate_event", "popstate")}}-Ereignis warten zu müssen.

## Wert

Der Zustand an der Spitze des Verlaufstapels. Der Wert ist [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), bis die
Methode {{domxref("History.pushState","pushState()")}} oder
{{domxref("History.replaceState","replaceState()")}} verwendet wird.

## Beispiele

Der folgende Code protokolliert den Wert von `history.state`, bevor die Methode
{{domxref("History.pushState","pushState()")}} verwendet wird, um einen Wert in den Verlauf zu schieben.
Die nächste Zeile protokolliert den Wert erneut in der Konsole und zeigt, dass
`history.state` nun einen Wert hat.

```js
// Sollte null sein, da wir den Verlaufstapel noch nicht verändert haben
console.log("History.state vor pushState: ", history.state);

// Jetzt etwas auf den Stapel schieben
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// Jetzt hat der Zustand einen Wert.
console.log("History.state nach pushState: ", history.state);
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
