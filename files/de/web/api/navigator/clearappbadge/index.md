---
title: "Navigator: clearAppBadge()-Methode"
short-title: clearAppBadge()
slug: Web/API/Navigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle entfernt ein Abzeichen vom Icon der aktuellen App, indem sie es auf `nothing` setzt. Der Wert `nothing` bedeutet, dass derzeit kein Abzeichen gesetzt ist und der Status des Abzeichens _gelöscht_ ist.

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

Sobald alle Nachrichten in einer Anwendung gelesen wurden, rufen Sie `clearAppBadge()` auf, um das Abzeichen zu entfernen und die Benachrichtigung zu löschen.

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
