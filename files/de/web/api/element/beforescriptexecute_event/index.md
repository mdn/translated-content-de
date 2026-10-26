---
title: "Element: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("DOM")}}{{Non-standard_header}}

> [!WARNING]
> Dieses Ereignis war ein Vorschlag in einer frühen Version der Spezifikation. Verlassen Sie sich nicht darauf.

Das Ereignis **`beforescriptexecute`** wird ausgelöst, wenn ein Skript unmittelbar vor der Ausführung steht. Wird das Ereignis abgebrochen, wird das Skript nicht ausgeführt.

Es handelt sich um ein proprietäres Ereignis, das nur in Gecko (Firefox) verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforescriptexecute", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforescriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event)
