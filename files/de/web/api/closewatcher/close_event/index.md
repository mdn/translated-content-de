---
title: "CloseWatcher: close Event"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `close`-Ereignis wird bei einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt ausgelöst, wenn eine Schließanforderung empfangen wurde und nur ausgelöst, wenn das [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event)-Ereignis, das dem `close`-Ereignis vorausgegangen ist, nicht abgebrochen wurde.

Der `close`-Ereignishandler ist der Ort, an dem der Code zum Schließen der UI-Komponente aufgerufen werden sollte: Dies stellt sicher, dass die Komponente ordnungsgemäß entweder vom plattformabhängigen Schließsignal oder durch einen Aufruf von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwenden des `close`-Ereignisses

Verwenden Sie das `close`, um auf Schließanforderungen zu lauschen.

```js
watcher.addEventListener("close", () => {
  // Close your UI component
  sidebar.hide();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
