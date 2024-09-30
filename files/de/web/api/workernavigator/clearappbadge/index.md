---
title: "WorkerNavigator: clearAppBadge()-Methode"
short-title: clearAppBadge()
slug: Web/API/WorkerNavigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces entfernt alle Abzeichen auf dem Icon der aktuellen App, indem es auf `nichts` gesetzt wird. Der Wert `nichts` bedeutet, dass derzeit kein Abzeichen gesetzt ist, und der Status des Abzeichens ist _gelöscht_.

## Syntax

```js-nolint
clearAppBadge()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Sobald alle Nachrichten in einer Anwendung gelesen wurden, kann `clearAppBadge()` aufgerufen werden, um das Abzeichen zu löschen und die Benachrichtigung zu entfernen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abzeichen für App-Icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
