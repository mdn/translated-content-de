---
title: "IdleDetector: change Ereignis"
short-title: change
slug: Web/API/IdleDetector/change_event
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Das **`change`**-Ereignis der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle wird ausgelöst, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel druckt der `change`-Callback den Status von `userState` und `screenState` in die Konsole.

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
