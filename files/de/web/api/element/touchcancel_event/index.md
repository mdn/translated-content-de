---
title: "Element: touchcancel-Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `touchcancel`-Ereignis wird ausgelöst, wenn einer oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel`-Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Berührungsaktivitäten abbricht. Dies kann beispielsweise passieren, wenn der Benutzer Anwendungen über eine Anwendungsschalteroberfläche oder die "Home"-Taste auf einem mobilen Gerät wechselt.
- Die Bildschirmorientierung des Geräts wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührungseingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware palm rejection unterstützt, um zu verhindern, dass eine Hand, die beim Verwenden eines Stifts auf dem Display ruht, versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("touchcancel", (event) => {});

ontouchcancel = (event) => {};
```

## Ereignistyp

Ein {{domxref("TouchEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}}-Objekten, die einzelne Kontaktpunkte darstellen, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Strg-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}}-Objekten, die sich sowohl derzeit im Kontakt mit der Berührungsoberfläche befinden **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}}-Objekten, die alle aktuellen Kontaktpunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder dem geänderten Status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Berührungspunkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkommamultiplikator des anfänglichen Abstands zwischen den Berührungspunkten zu Beginn des Ereignisses. Werte unter 1.0 bedeuten ein Zusammenziehen (herauszoomen). Werte über 1.0 bedeuten ein Auseinanderziehen (hereinzoomen). Anfangswert: `1.0`.

## Beispiele

Code-Beispiele für diese Ereignisse sind auf der dedizierten Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
