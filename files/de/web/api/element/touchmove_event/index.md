---
title: "Element: touchmove-Ereignis"
short-title: touchmove
slug: Web/API/Element/touchmove_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das `touchmove`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte über die Berührungsfläche bewegt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("touchmove", (event) => {});

ontouchmove = (event) => {};
```

## Ereignistyp

Ein {{domxref("TouchEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die einzelne Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen Touch-Ereignis und diesem geändert haben.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die derzeit mit der Berührungsfläche in Kontakt sind **und** auch auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder Änderungsstatus.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommamultiplikator des ursprünglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Zusammenziehen (Auszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen (Einzoomen) an. Anfangswert: `1.0`.

## Beispiele

Code-Beispiele für diese Ereignisse finden Sie auf der speziellen Seite: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
- {{domxref("Element/mousemove_event", "mousemove")}}
