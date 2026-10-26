---
title: "CloseWatcher: cancel-Ereignis"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("HTML DOM")}}

Ein `cancel`-Ereignis wird für ein [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt vor dem `close`-Ereignis ausgelöst, damit bei Bedarf verhindert werden kann, dass `close` ausgelöst wird. Es wird durch alle Schließsignale (z. B. die <kbd>Esc</kbd>-Taste) sowie durch [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cancel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncancel = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `cancel`-Ereignisses

In diesem Beispiel bitten wir die Benutzer, zu bestätigen, dass sie die Komponente wirklich schließen möchten. Wenn sie dies nicht möchten, brechen wir das Ereignis mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) ab. Dadurch wird verhindert, dass das `close`-Ereignis ausgelöst wird.

```js
watcher.addEventListener("cancel", (e) => {
  if (e.cancelable && hasUnsavedData) {
    const userReallyWantsToClose = confirm("Are you sure you want to close?");
    if (!userReallyWantsToClose) {
      e.preventDefault();
    }
  }
});

// Trigger a close request manually
watcher.requestClose();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
