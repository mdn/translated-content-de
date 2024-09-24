---
title: "Element: touchstart-Ereignis"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das `touchstart`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf die Berührungsoberfläche gesetzt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("touchstart", (event) => {});

ontouchstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("TouchEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die einzelne Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Strg-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die sowohl momentan mit der Berührungsoberfläche in Kontakt sind **als auch** auf demselben Element begonnen wurden, das das Ziel des Ereignisses ist.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche repräsentieren, unabhängig von Ziel oder geändertem Status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung in der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommapunkt-Multiplikator des ursprünglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Einkneifen (Herauszoomen) hin. Werte über 1.0 deuten auf ein Auseinanderkneifen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der dedizierten Seite verfügbar: [Berührungsereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
