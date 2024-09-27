---
title: "SyncManager: register() Methode"
short-title: register()
slug: Web/API/SyncManager/register
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

Die **`register()`** Methode des [`SyncManager`](/de/docs/Web/API/SyncManager) Interfaces registriert ein Synchronisationsereignis, das ein [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) Ereignis innerhalb des zugehörigen Service Workers auslöst, sobald die Netzwerkverbindung verfügbar ist.

## Syntax

```js-nolint
register(tag)
```

### Parameter

- `tag`
  - : Ein Bezeichner für dieses Synchronisationsereignis. Dies wird der Wert der `tag` Eigenschaft des [`SyncEvent`](/de/docs/Web/API/SyncEvent) sein, das dem [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) Ereignishandler des Service Workers übergeben wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der zu {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Service Worker nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn Hintergrundsynchronisierung vom Benutzer deaktiviert wurde.

## Beispiele

Die folgende asynchrone Funktion registriert eine Hintergrundsynchronisation aus einem Browserkontext:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
