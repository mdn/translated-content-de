---
title: "Element: touchcancel-Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Touch Events")}}

Das `touchcancel`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf implementierungsspezifische Weise unterbrochen werden.

Beispiele für Situationen, die ein `touchcancel`-Ereignis auslösen:

- Ein Hardwareereignis bricht die Berührungsaktivitäten ab. Dies kann beispielsweise geschehen, wenn die Person über eine Oberfläche zum Wechseln zwischen Anwendungen oder die „Home“-Taste eines Mobilgeräts zu einer anderen Anwendung wechselt.
- Die Bildschirmausrichtung des Geräts ändert sich während einer aktiven Berührung.
- Der Browser stellt fest, dass die Berührungseingabe versehentlich begonnen wurde. Das kann beispielsweise vorkommen, wenn die Hardware Handballenerkennung unterstützt, damit eine auf dem Display aufliegende Hand bei der Verwendung eines Eingabestifts nicht versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn die Person den Bildschirm mit zu vielen Fingern gleichzeitig berührt, kann der Browser dieses Ereignis für alle vorhandenen Zeiger auslösen (auch wenn die Person den Bildschirm weiterhin berührt).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("touchcancel", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontouchcancel = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Beispiele

Codebeispiele für diese Ereignisse finden Sie auf der entsprechenden Seite: [Touch-Ereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
