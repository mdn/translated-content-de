---
title: "CloseWatcher: cancel-Ereignis"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `cancel`-Ereignis wird an einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt vor dem `close`-Ereignis ausgelöst, damit das `close`-Ereignis gegebenenfalls verhindert werden kann. Es wird durch alle Schließsignale (z. B. die <kbd>Esc</kbd>-Taste) sowie durch [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ausgelöst.

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

In diesem Beispiel fragen wir den Benutzer, ob er das Komponenten wirklich schließen möchte. Wenn nicht, brechen wir das Ereignis mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) ab, um zu verhindern, dass das `close`-Ereignis ausgelöst wird.

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
