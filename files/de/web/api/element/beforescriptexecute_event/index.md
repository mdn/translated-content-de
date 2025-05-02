---
title: "Element: beforescriptexecute Event"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`beforescriptexecute`**-Ereignis wird ausgelöst, wenn ein Skript kurz davor steht, ausgeführt zu werden. Das Abbrechen des Ereignisses verhindert die Ausführung des Skripts.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandler-Eigenschaft.

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
