---
title: "CloseWatcher: close-Event"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Ein `close`-Event wird auf einem [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt ausgelöst, wenn eine Anforderung zum Schließen empfangen wurde und nur dann ausgelöst, wenn das dem `close`-Event vorausgehende [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event)-Event nicht abgebrochen wurde.

Der `close`-Event-Handler ist der Ort, an dem der Code zum Schließen der UI-Komponente aufgerufen werden sollte: Dies stellt sicher, dass die Komponente ordnungsgemäß geschlossen wird, entweder durch das plattform-spezifische Schließsignal oder durch einen Aufruf von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `close`-Events

Verwenden Sie `close`, um auf Schließanforderungen zu lauschen.

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
