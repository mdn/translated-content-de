---
title: "Element: touchcancel Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Touch Events")}}

Das `touchcancel` Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel` Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Touch-Aktivitäten abbricht. Dazu kann gehören, dass der Benutzer beispielsweise Anwendungen über eine App-Wechsel-Schnittstelle oder die "Home"-Taste auf einem mobilen Gerät wechselt.
- Die Bildschirmorientierung des Geräts wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührereingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware Palm-Rejection unterstützt, um zu verhindern, dass eine Hand, die auf dem Display ruht, während ein Stylus verwendet wird, versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (selbst wenn der Benutzer weiterhin den Bildschirm berührt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("touchcancel", (event) => { })

ontouchcancel = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
