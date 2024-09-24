---
title: "PerformanceObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/PerformanceObserver/disconnect
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`disconnect()`**-Methode der {{domxref('PerformanceObserver')}}-Schnittstelle wird verwendet, um den Performance-Observer daran zu hindern, weitere {{domxref("PerformanceEntry","Leistungseintrag", '', 'true')}}-Ereignisse zu empfangen.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Stoppen eines Performance-Observers

Das folgende Beispiel trennt den Performance-Observer, um zu verhindern, dass weitere Leistungseintragsereignisse empfangen werden.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Bearbeiten von "measure"-Ereignissen
    // …
    // Deaktivieren weiterer Performance-Ereignisse
    observer.disconnect();
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
