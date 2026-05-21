---
title: "Navigator: setAppBadge()-Methode"
short-title: setAppBadge()
slug: Web/API/Navigator/setAppBadge
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Badging API")}}{{securecontext_header}}

Die **`setAppBadge()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces setzt ein Abzeichen auf dem mit dieser App verknüpften Symbol. Wenn der Methode ein Wert übergeben wird, wird dieser als Wert des Abzeichens festgelegt. Andernfalls wird das Abzeichen als Punkt oder ein anderer Indikator angezeigt, wie es von der Plattform definiert ist.

## Syntax

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### Parameter

- `contents` {{optional_inline}}
  - : Eine {{jsxref("Number")}}, die als Wert des Abzeichens verwendet wird. Wenn `contents` `0` ist, dann wird das Abzeichen auf `nichts` gesetzt, was ein gelöschtes Abzeichen anzeigt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit {{jsxref("undefined")}} auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.

## Beispiele

Im Beispiel unten wird `setAppBadge()` eine ungelesene Anzahl übergeben. Das Abzeichen sollte dann `30` anzeigen.

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abzeichen für App-Icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
