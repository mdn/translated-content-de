---
title: "Element: webkitmouseforcewillbegin-Ereignis"
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

Safari für macOS löst das nicht standardisierte **`webkitmouseforcewillbegin`**-Ereignis an einem {{domxref("Element")}} aus, bevor das erste {{domxref("Element/mousedown_event", "mousedown")}}-Ereignis ausgelöst wird.

Dies bietet die Gelegenheit, dem System mitzuteilen, keine Standardaktionen von Force Touch auszuführen, wenn und wann der Klick zu einem [Force Touch-Ereignis](/de/docs/Web/API/Force_Touch_events) wird.

Um macOS anzuweisen, keine Standardaktionen von Force Touch auszuführen, wenn der Benutzer genügend Druck ausübt, um ein Force Touch-Ereignis zu aktivieren, rufen Sie {{domxref("Event.preventDefault", "preventDefault()")}} am `webkitmouseforcewillbegin`-Ereignisobjekt auf.

**`webkitmouseforcewillbegin`** ist ein proprietäres, WebKit-spezifisches Ereignis. Es ist Teil der [Force Touch-Ereignisse](/de/docs/Web/API/Force_Touch_events).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("webkitmouseforceup", (event) => {});

onwebkitmouseforceup = (event) => {};
```

## Ereignistyp

Ein {{domxref("MouseEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>alt</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Die Nummer der Taste, die gedrückt war (falls zutreffend), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Die Tasten, die gedrückt waren (falls vorhanden), als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Ansichtskoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Ansichtskoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position des letzten {{domxref("Element/mousemove_event", "mousemove")}}-Ereignisses.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zur Position der Innenkante des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zur Position der Innenkante des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Das sekundäre Ziel des Ereignisses, falls vorhanden.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Die X-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Die Y-Koordinate des Mauszeigers in [Bildschirmkoordinaten](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd>-Taste gedrückt war, als das Mausereignis ausgelöst wurde.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Der Typ des Geräts, das das Ereignis generiert hat (einer der `MOZ_SOURCE_*`-Konstanten).
    Dies ermöglicht es Ihnen beispielsweise zu bestimmen, ob ein Mausereignis von einer tatsächlichen Maus oder von einem Berührungsereignis generiert wurde (was die Genauigkeit beeinflussen kann, mit der Sie die dem Ereignis zugeordneten Koordinaten interpretieren).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die Menge des beim Klicken ausgeübten Drucks.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias für {{domxref("MouseEvent.clientY")}}.

## Spezifikationen

_Teil keiner Spezifikation._ Apple hat [eine Beschreibung in der Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
