---
title: "CloseWatcher: close Ereignis"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `close` Ereignis wird bei einem {{domxref("CloseWatcher")}} Objekt ausgelöst, wenn eine Schließe-Anforderung empfangen wurde und wird nur ausgelöst, wenn das vorhergehende {{domxref("CloseWatcher.cancel_event", "cancel")}} Ereignis nicht abgebrochen wurde.

Der `close` Ereignishandler ist der Ort, an dem der Code zum Schließen der UI-Komponente aufgerufen werden sollte: Dies stellt sicher, dass die Komponente ordnungsgemäß geschlossen wird, entweder durch das plattform-spezifische Schließsignal oder durch einen Aufruf von {{domxref("CloseWatcher.requestClose()")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein {{domxref("Event")}}.

## Beispiele

### Verwendung des `close` Ereignisses

Verwenden Sie `close`, um auf Schließe-Anforderungen zu hören.

```js
watcher.addEventListener("close", () => {
  // Schließen Sie Ihre UI-Komponente
  sidebar.hide();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
