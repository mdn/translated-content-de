---
title: "Element: afterscriptexecute event"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`afterscriptexecute`**-Ereignis wird ausgelöst, nachdem ein Skript ausgeführt wurde.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("afterscriptexecute", (event) => { })

onafterscriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) Ereignis
