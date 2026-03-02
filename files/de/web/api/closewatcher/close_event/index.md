---
title: "CloseWatcher: close-Ereignis"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Ein `close`-Ereignis wird bei einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt ausgelöst, wenn eine Schließanforderung empfangen wurde und nur ausgelöst, wenn das [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event)-Ereignis, das dem `close`-Ereignis vorausging, nicht abgebrochen wurde.

Der `close`-Ereignishandler ist der Ort, an dem der Code zum Schließen der UI-Komponente aufgerufen werden sollte: Dies stellt sicher, dass die Komponente ordnungsgemäß entweder durch das plattformspezifische Schließsignal oder durch einen Aufruf von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `close`-Ereignisses

Verwenden Sie `close`, um auf Schließanforderungen zu hören.

```js
watcher.addEventListener("close", () => {
  // Close your UI component
  sidebar.hide();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
