---
title: "Navigator: setAppBadge() Methode"
short-title: setAppBadge()
slug: Web/API/Navigator/setAppBadge
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`setAppBadge()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle setzt ein Abzeichen auf das mit dieser App verbundene Symbol. Wenn ein Wert an die Methode übergeben wird, wird dieser als Wert des Abzeichens gesetzt. Andernfalls zeigt das Abzeichen einen Punkt oder einen anderen vom Plattformentwickler definierten Indikator an.

## Syntax

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### Parameter

- `contents` {{optional_inline}}
  - : Eine {{jsxref("number")}}, die als Wert des Abzeichens verwendet wird. Wenn `contents` `0` ist, wird das Abzeichen auf `nichts` gesetzt, was auf ein gelöschtes Abzeichen hinweist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde.
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
