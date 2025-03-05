---
title: "Element: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: c15dc43c147bba7bdbaf2754831c59e5f44b98d2
---

{{APIRef}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`beforescriptexecute`**-Ereignis wird ausgelöst, wenn ein Skript ausgeführt werden soll. Das Abbrechen des Ereignisses verhindert, dass das Skript ausgeführt wird.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) Ereignis
