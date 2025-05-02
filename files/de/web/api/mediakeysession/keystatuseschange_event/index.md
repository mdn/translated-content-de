---
title: "MediaKeySession: keystatuseschange-Ereignis"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`keystatuseschange`**-Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-API wird ausgelöst, wenn es innerhalb einer Sitzung eine Änderung der Schlüssel oder deren Status gegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("keystatuseschange", (event) => { })

onkeystatuseschange = (event) => { }
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
