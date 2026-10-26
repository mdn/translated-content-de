---
title: "Element: afterscriptexecute-Ereignis"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{Non-standard_header}}

> [!WARNING]
> Dieses Ereignis wurde in einer frühen Version der Spezifikation vorgeschlagen. Verlassen Sie sich nicht darauf.

Das Ereignis **`afterscriptexecute`** wird ausgelöst, nachdem ein Skript ausgeführt wurde.

Es ist ein proprietäres Ereignis, das nur in Gecko (Firefox) verfügbar ist.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("afterscriptexecute", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onafterscriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event)
