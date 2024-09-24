---
title: "WorkerNavigator: setAppBadge()-Methode"
short-title: setAppBadge()
slug: Web/API/WorkerNavigator/setAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`setAppBadge()`**-Methode der {{domxref("WorkerNavigator")}}-Schnittstelle setzt ein Abzeichen auf das mit dieser App verbundene Symbol. Wenn der Methode ein Wert übergeben wird, wird dieser als Wert des Abzeichens festgelegt. Andernfalls wird das Abzeichen als Punkt oder einem anderen Indikator angezeigt, wie es von der Plattform definiert ist.

## Syntax

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### Parameter

- `contents` {{optional_inline}}
  - : Eine {{jsxref("number")}}, die als Wert des Abzeichens verwendet wird. Wenn `contents` `0` ist, wird das Abzeichen auf `nichts` gesetzt, was ein gelöschtes Abzeichen anzeigt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref('PermissionStatus.state')}} nicht `granted` ist.

## Beispiele

Im folgenden Beispiel wird eine Anzahl ungelesener Nachrichten an `setAppBadge()` übergeben. Das Abzeichen sollte dann `30` anzeigen.

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
