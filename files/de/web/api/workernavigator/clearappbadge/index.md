---
title: "WorkerNavigator: clearAppBadge()-Methode"
short-title: clearAppBadge()
slug: Web/API/WorkerNavigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`clearAppBadge()`**-Methode der {{domxref("WorkerNavigator")}}-Schnittstelle entfernt ein Abzeichen auf dem Symbol der aktuellen App, indem es auf `nichts` gesetzt wird. Der Wert `nichts` bedeutet, dass kein Abzeichen derzeit gesetzt ist, und der Status des Abzeichens ist _gelöscht_.

## Syntax

```js-nolint
clearAppBadge()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} nicht `granted` ist.

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

- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
