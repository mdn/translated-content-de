---
title: "Element: webkitmouseforceup Ereignis"
short-title: webkitmouseforceup
slug: Web/API/Element/webkitmouseforceup_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Das nicht-standardisierte **`webkitmouseforceup`** Ereignis wird von Safari an einem {{domxref("Element")}} zu einem bestimmten Zeitpunkt nach dem {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} Ereignis ausgelöst, wenn der Druck auf die Taste ausreichend verringert wurde, um den "force click" zu beenden.

**`webkitmouseforceup`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der [Force Touch Events](/de/docs/Web/API/Force_Touch_events) Funktionalität.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("webkitmouseforceup", (event) => {});

onwebkitmouseforceup = (event) => {};
```

## Ereignistyp

Ein {{domxref("MouseEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd> Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Die Nummer der Taste, die gedrückt wurde (falls zutreffend), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt wurden (falls vorhanden), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Ansichtsfensterkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Ansichtsfensterkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Steuerung</kbd> Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Meta</kbd> Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}} Ereignisses.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}} Ereignisses.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Auffüllkante des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Auffüllkante des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Das sekundäre Ziel für das Ereignis, falls vorhanden.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>Umschalt</kbd> Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Gerätetyp, der das Ereignis erzeugt hat (einer der `MOZ_SOURCE_*` Konstanten).
    Damit können Sie beispielsweise feststellen, ob ein Mausereignis durch eine tatsächliche Maus oder durch ein Berührungsereignis erzeugt wurde (was die Genauigkeit der Interpretation der mit dem Ereignis verbundenen Koordinaten beeinflussen könnte).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die beim Klicken ausgeübte Druckmenge.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientY")}}.

## Spezifikationen

_Nicht Teil einer Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
