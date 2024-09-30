---
title: "IdleDetector: screenState-Eigenschaft"
short-title: screenState
slug: Web/API/IdleDetector/screenState
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`screenState`** der Schnittstelle [`IdleDetector`](/de/docs/Web/API/IdleDetector) gibt einen String zurück, der anzeigt, ob der Bildschirm gesperrt ist, entweder `"locked"` oder `"unlocked"`.

## Wert

Entweder `"locked"` oder `"unlocked"`, wenn [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) aufgerufen wurde, oder `null` anderweitig.

## Beispiele

Im folgenden Beispiel gibt der `change` Callback den Status von `userState` und `screenState` in der Konsole aus.

```js
idleDetector.addEventListener("change", () => {
  const userState = idleDetector.userState;
  const screenState = idleDetector.screenState;
  console.log(`Idle change: ${userState}, ${screenState}.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
