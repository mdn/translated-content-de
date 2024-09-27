---
title: "CloseWatcher: cancel Ereignis"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `cancel`-Ereignis wird auf einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt vor dem `close`-Ereignis ausgelöst, damit das `close`-Ereignis bei Bedarf verhindert werden kann. Es wird durch alle Schließsignale ausgelöst (z. B. die <kbd>Esc</kbd>-Taste) sowie durch [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `cancel`-Ereignisses

In diesem Beispiel fragen wir den Benutzer, ob er das Element wirklich schließen möchte. Wenn nicht, brechen wir das Ereignis mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) ab, was verhindert, dass das `close`-Ereignis ausgelöst wird.

```js
watcher.addEventListener("cancel", (e) => {
  if (e.cancelable && hasUnsavedData) {
    const userReallyWantsToClose = confirm("Are you sure you want to close?");
    if (!userReallyWantsToClose) {
      e.preventDefault();
    }
  }
};

// Trigger a close request manually
watcher.requestClose();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
