---
title: "CloseWatcher: close-Ereignis"
short-title: close
slug: Web/API/CloseWatcher/close_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("HTML DOM")}}

Ein `close`-Ereignis wird für ein [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt ausgelöst, wenn eine Schließanforderung eingeht. Es wird nur ausgelöst, wenn das vorangegangene [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event)-Ereignis nicht abgebrochen wurde.

Im Event-Handler für `close` sollte der Code zum Schließen der UI-Komponente aufgerufen werden. So wird sichergestellt, dass die Komponente sowohl bei einem plattformspezifischen Schließsignal als auch bei einem Aufruf von [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ordnungsgemäß geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("close", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclose = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das `close`-Ereignis verwenden

Verwenden Sie das `close`-Ereignis, um auf Schließanforderungen zu reagieren.

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
