---
title: "Element: afterscriptexecute Ereignis"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{Non-standard_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das **`afterscriptexecute`** Ereignis wird ausgelöst, nachdem ein Skript ausgeführt wurde.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für Gecko (Firefox) ist.

Dieses Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Spezifikationen

Gehört zu keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) Ereignis
