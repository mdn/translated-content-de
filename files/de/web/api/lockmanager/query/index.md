---
title: "LockManager: query()-Methode"
short-title: query()
slug: Web/API/LockManager/query
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`query()`**-Methode des [`LockManager`](/de/docs/Web/API/LockManager)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit einem Objekt aufgelöst wird, das Informationen über gehaltene und ausstehende Sperren enthält.

## Syntax

```js-nolint
query()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt aufgelöst wird, das einen Schnappschuss des [`LockManager`](/de/docs/Web/API/LockManager)-Zustands enthält.
Das Objekt hat die folgenden Eigenschaften:

- `held`
  - : Ein Array von `LockInfo`-Objekten für gehaltene Sperren.
- `pending`
  - : Ein Array von `LockInfo`-Objekten für ausstehende Sperranfragen.

Das `LockInfo`-Objekt kann die folgenden Eigenschaften haben:

- `name`
  - : Der Name, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als die Sperre angefordert wurde.
- `mode`
  - : Der Zugriffsmodus, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als die Sperre angefordert wurde. Der Modus ist entweder `"exclusive"` oder `"shared"`.
- `clientId`
  - : Die eindeutige Identität des Kontexts, in dem [`LockManager.request()`](/de/docs/Web/API/LockManager/request) aufgerufen wird. Dies ist derselbe Wert wie [`Client.id`](/de/docs/Web/API/Client/id).

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) folgenden Typs abgelehnt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Umgebungsdokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Sperrmanager für die aktuelle Umgebung nicht erhalten werden kann.

## Beispiele

```js
const state = await navigator.locks.query();
for (const lock of state.held) {
  console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
}
for (const request of state.pending) {
  console.log(`requested lock: name ${request.name}, mode ${request.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
