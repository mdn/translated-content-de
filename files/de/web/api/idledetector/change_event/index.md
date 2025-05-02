---
title: "IdleDetector: change Ereignis"
short-title: change
slug: Web/API/IdleDetector/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`change`** Ereignis der [`IdleDetector`](/de/docs/Web/API/IdleDetector) Schnittstelle wird ausgelöst, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel gibt der `change` Rückruf den Status von `userState` und `screenState` in der Konsole aus.

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
