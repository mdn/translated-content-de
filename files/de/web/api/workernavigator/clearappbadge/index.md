---
title: "WorkerNavigator: clearAppBadge()-Methode"
short-title: clearAppBadge()
slug: Web/API/WorkerNavigator/clearAppBadge
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces entfernt ein Abzeichen vom Symbol der aktuellen App, indem es auf `nothing` gesetzt wird. Der Wert `nothing` zeigt an, dass derzeit kein Abzeichen gesetzt ist und der Status des Abzeichens _gelöscht_ ist.

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
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Sobald alle Nachrichten in einer Anwendung gelesen wurden, rufen Sie `clearAppBadge()` auf, um das Abzeichen zu entfernen und die Benachrichtigung zu löschen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
