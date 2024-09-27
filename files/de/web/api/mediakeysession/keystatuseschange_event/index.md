---
title: "MediaKeySession: keystatuseschange Ereignis"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`keystatuseschange`** Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) API wird ausgelöst, wenn sich die Schlüssel oder deren Status innerhalb einer Sitzung geändert haben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keystatuseschange", (event) => {});

onkeystatuseschange = (event) => {};
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
