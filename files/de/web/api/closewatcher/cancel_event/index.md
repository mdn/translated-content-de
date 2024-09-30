---
title: "CloseWatcher: cancel Event"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `cancel`-Ereignis wird an einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt vor dem `close`-Ereignis ausgelöst, sodass `close` verhindert werden kann, falls notwendig. Es wird durch alle Schließsignale (z.B. die <kbd>Esc</kbd>-Taste) sowie durch [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwenden des `cancel`-Ereignisses

In diesem Beispiel fragen wir den Benutzer, ob er das Schließen der Komponente wirklich bestätigen möchte. Wenn nicht, brechen wir das Ereignis mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) ab, was das Auslösen des `close`-Ereignisses verhindert.

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
