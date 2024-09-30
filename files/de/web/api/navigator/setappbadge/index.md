---
title: "Navigator: setAppBadge()-Methode"
short-title: setAppBadge()
slug: Web/API/Navigator/setAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`setAppBadge()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle setzt ein Abzeichen auf das mit dieser App verbundene Symbol. Wenn ein Wert an die Methode übergeben wird, wird dieser als Wert des Abzeichens festgelegt. Andernfalls wird das Abzeichen als Punkt oder ein anderes vom System definiertes Symbol angezeigt.

## Syntax

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### Parameter

- `contents` {{optional_inline}}
  - : Eine {{jsxref("number")}}, die als Wert des Abzeichens verwendet wird. Wenn `contents` `0` ist, wird das Abzeichen auf `nichts` gesetzt, was ein gelöschtes Abzeichen anzeigt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Im folgenden Beispiel wird eine ungelesene Anzahl an `setAppBadge()` übergeben. Das Abzeichen sollte dann `30` anzeigen.

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
