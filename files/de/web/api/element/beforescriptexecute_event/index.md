---
title: "Element: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("DOM")}}{{Non-standard_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`beforescriptexecute`**-Ereignis wird ausgelöst, wenn ein Skript ausgeführt werden soll. Das Abbrechen des Ereignisses verhindert die Ausführung des Skripts.

Es ist ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) Ereignis
