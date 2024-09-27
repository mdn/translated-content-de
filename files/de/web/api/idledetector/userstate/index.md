---
title: "IdleDetector: userState-Eigenschaft"
short-title: userState
slug: Web/API/IdleDetector/userState
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`userState`**-Eigenschaft des schreibgeschützten [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Interfaces gibt einen String zurück, der angibt, ob der Benutzer seit dem Aufruf von `start()` mit dem Gerät interagiert hat.

## Wert

Entweder `"active"` oder `"idle"`, wenn [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) aufgerufen wurde, oder `null` andernfalls.

## Beispiele

Im folgenden Beispiel gibt der `change`-Callback den Status von `userState` und `screenState` auf der Konsole aus.

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
