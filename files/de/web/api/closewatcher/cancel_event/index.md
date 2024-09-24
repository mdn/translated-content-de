---
title: "CloseWatcher: Abbrechen-Ereignis"
short-title: Abbrechen
slug: Web/API/CloseWatcher/cancel_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `cancel`-Ereignis wird an einem {{domxref("CloseWatcher")}}-Objekt vor dem `close`-Ereignis ausgelöst, sodass das `close`-Ereignis bei Bedarf verhindert werden kann. Es wird durch alle Schließsignale (z. B. die <kbd>Esc</kbd>-Taste) sowie {{domxref("CloseWatcher.requestClose()")}} ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein {{domxref("Event")}}.

## Beispiele

### Verwendung des `cancel`-Ereignisses

In diesem Beispiel bitten wir den Benutzer zu bestätigen, dass er die Komponente wirklich schließen möchte. Wenn er dies nicht möchte, brechen wir das Ereignis mit {{domxref("Event.preventDefault()")}} ab, was verhindert, dass das `close`-Ereignis ausgelöst wird.

```js
watcher.addEventListener("cancel", (e) => {
  if (e.cancelable && hasUnsavedData) {
    const userReallyWantsToClose = confirm("Are you sure you want to close?");
    if (!userReallyWantsToClose) {
      e.preventDefault();
    }
  }
};

// Lösen Sie eine Schließanfrage manuell aus
watcher.requestClose();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
