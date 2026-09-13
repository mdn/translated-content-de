---
title: "Element: afterscriptexecute-Ereignis"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef}}{{Non-standard_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`afterscriptexecute`**-Ereignis wird ausgelöst, nachdem ein Skript ausgeführt wurde.

Es ist ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("afterscriptexecute", (event) => { })

onafterscriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event)-Ereignis
