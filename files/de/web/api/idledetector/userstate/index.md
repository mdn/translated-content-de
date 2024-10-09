---
title: "IdleDetector: userState-Eigenschaft"
short-title: userState
slug: Web/API/IdleDetector/userState
l10n:
  sourceCommit: a28ce291736be0291feb822083b92c6f4385d57c
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`userState`**-Eigenschaft des nur-lesbaren [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Interfaces gibt einen String zurück, der anzeigt, ob der Benutzer seit dem Aufruf von `start()` mit dem Gerät interagiert hat.

## Wert

Entweder `"active"` oder `"idle"`, wenn [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) aufgerufen wurde, oder `null` andernfalls.

## Beispiele

Im folgenden Beispiel gibt der `change`-Callback den Status von `userState` und `screenState` in der Konsole aus.

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
