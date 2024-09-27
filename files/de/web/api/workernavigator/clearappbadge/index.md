---
title: "WorkerNavigator: clearAppBadge() Methode"
short-title: clearAppBadge()
slug: Web/API/WorkerNavigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle löscht ein Abzeichen auf dem Symbol der aktuellen App, indem es auf `nothing` gesetzt wird. Der Wert `nothing` bedeutet, dass derzeit kein Abzeichen gesetzt ist, und der Status des Abzeichens ist _gelöscht_.

## Syntax

```js-nolint
clearAppBadge()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit {{jsxref("undefined")}} erfüllt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Sobald alle Nachrichten in einer Anwendung gelesen wurden, rufen Sie `clearAppBadge()` auf, um das Abzeichen zu löschen und die Benachrichtigung zu entfernen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
