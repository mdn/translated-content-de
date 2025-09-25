---
title: "Element: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`beforescriptexecute`**-Ereignis wird ausgelöst, wenn ein Skript ausgeführt werden soll. Das Abbrechen des Ereignisses verhindert die Ausführung des Skripts.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event)-Ereignis
