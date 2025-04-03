---
title: "CloseWatcher: cancel event"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `cancel`-Ereignis wird an einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt vor dem `close`-Ereignis ausgelöst, sodass `close` daran gehindert werden kann, auszulösen, falls erforderlich. Es wird durch alle Schließsignale ausgelöst (z. B. die <kbd>Esc</kbd>-Taste) sowie durch [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `cancel`-Ereignisses

In diesem Beispiel fragen wir den Benutzer, ob er das Schließen der Komponente wirklich möchte, und falls nicht, brechen wir das Ereignis mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) ab, was verhindert, dass das `close`-Ereignis ausgelöst wird.

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
