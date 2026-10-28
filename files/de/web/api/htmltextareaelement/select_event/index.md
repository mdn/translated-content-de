---
title: "HTMLTextAreaElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Das **`select`**-Ereignis der Schnittstelle [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) wird ausgelöst, wenn die Ausdehnung oder Richtung der Auswahl programmgesteuert geändert wird oder wenn der Benutzer Text auswählt.

Allgemeine Informationen zu diesem Ereignis finden Sie unter [`HTMLInputElement`: `select`-Ereignis](/de/docs/Web/API/HTMLInputElement/select_event).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("select", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
