---
title: "PopStateEvent: state-Eigenschaft"
short-title: state
slug: Web/API/PopStateEvent/state
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("History API") }}

Die schreibgeschützte **`state`**-Eigenschaft der {{domxref("PopStateEvent")}}-Schnittstelle repräsentiert den Zustand, der gespeichert wurde, als das Ereignis erstellt wurde.

Praktisch ist es ein Wert, der durch den Aufruf von {{domxref("history.pushState()")}} oder {{domxref("history.replaceState()")}} bereitgestellt wird.

## Wert

Ein Objekt oder `null`.

## Beispiele

Der unten stehende Code protokolliert den Wert von `state`, wenn die {{domxref("History.pushState","pushState()")}}-Methode verwendet wird, um einen Wert zum Verlauf hinzuzufügen.

```js
// Protokollieren Sie den Zustand
addEventListener("popstate", (event) => {
  console.log("State received: ", event.state);
});

// Jetzt etwas auf den Stapel schieben
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

- {{domxref("PopStateEvent()")}} Konstruktor
- {{domxref("History.state")}}
