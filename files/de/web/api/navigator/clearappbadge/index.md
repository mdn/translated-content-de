---
title: "Navigator: clearAppBadge()-Methode"
short-title: clearAppBadge()
slug: Web/API/Navigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces entfernt eine Plakette auf dem Icon der aktuellen App, indem sie auf `nothing` gesetzt wird. Der Wert `nothing` zeigt an, dass derzeit keine Plakette gesetzt ist, und der Status der Plakette ist _gelöscht_.

## Syntax

```js-nolint
clearAppBadge()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Sobald alle Nachrichten in einer Anwendung gelesen wurden, rufen Sie `clearAppBadge()` auf, um die Plakette zu löschen und die Benachrichtigung zu entfernen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
