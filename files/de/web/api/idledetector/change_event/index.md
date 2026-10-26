---
title: "IdleDetector: change-Ereignis"
short-title: change
slug: Web/API/IdleDetector/change_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`change`**-Ereignis der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle wird ausgelöst, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onchange = (event) => { }
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
