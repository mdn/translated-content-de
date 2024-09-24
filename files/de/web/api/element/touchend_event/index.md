---
title: "Element: touchend-Ereignis"
short-title: touchend
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: 55847a077ad70782d775374c7f55679ef8d26657
---

{{APIRef}}

Das `touchend`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden. Denken Sie daran, dass es stattdessen möglich ist, ein [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("touchend", (event) => {});

ontouchend = (event) => {};
```

## Ereignistyp

Ein {{domxref("TouchEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} aller {{domxref("Touch")}}-Objekte, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} aller {{domxref("Touch")}}-Objekte, die sowohl derzeit in Kontakt mit der Berührungsoberfläche sind **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} aller {{domxref("Touch")}}-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte geben eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein nach innen gerichtetes Kneifen (herauszoomen) hin. Werte über 1.0 deuten auf ein nach außen gerichtetes Öffnen (hineinzoomen) hin. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse finden Sie auf der speziellen Seite: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
