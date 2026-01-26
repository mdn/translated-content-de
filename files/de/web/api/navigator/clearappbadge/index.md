---
title: "Navigator: clearAppBadge() Methode"
short-title: clearAppBadge()
slug: Web/API/Navigator/clearAppBadge
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle löscht ein Badge auf dem Icon der aktuellen App, indem es auf `nichts` gesetzt wird. Der Wert `nichts` bedeutet, dass derzeit kein Badge gesetzt ist, und der Status des Badges ist _gelöscht_.

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
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Sobald alle Nachrichten in einer Anwendung gelesen wurden, rufen Sie `clearAppBadge()` auf, um das Badge zu löschen und die Benachrichtigung zu entfernen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
