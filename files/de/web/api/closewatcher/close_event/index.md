---
title: "CloseWatcher: close Ereignis"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `close` Ereignis wird an einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Objekt ausgelöst, wenn eine Schließanforderung empfangen wurde und nur ausgelöst, wenn das der `close` Anforderung vorausgehende [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) Ereignis nicht abgebrochen wurde.

Der `close` Ereignishandler ist der Ort, an dem der Code zum Schließen der UI-Komponente aufgerufen werden sollte: Dies stellt sicher, dass die Komponente ordnungsgemäß geschlossen wird, entweder durch das plattformspezifische Schließsignal oder durch einen Aufruf von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `close` Ereignisses

Verwenden Sie `close`, um auf Schließanforderungen zu hören.

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
