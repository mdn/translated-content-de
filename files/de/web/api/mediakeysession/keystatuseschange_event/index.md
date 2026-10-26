---
title: "MediaKeySession: keystatuseschange-Ereignis"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`keystatuseschange`**-Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-API wird ausgelöst, wenn sich die Schlüssel oder deren Status innerhalb einer Sitzung ändern.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("keystatuseschange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onkeystatuseschange = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
