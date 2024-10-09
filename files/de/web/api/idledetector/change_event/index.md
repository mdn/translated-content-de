---
title: "IdleDetector: change Ereignis"
short-title: change
slug: Web/API/IdleDetector/change_event
l10n:
  sourceCommit: a28ce291736be0291feb822083b92c6f4385d57c
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`change`**-Ereignis der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle wird ausgelöst, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

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
