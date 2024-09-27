---
title: "SVGGraphicsElement: cut Ereignis"
short-title: cut
slug: Web/API/SVGGraphicsElement/cut_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`cut`** Ereignis wird auf einem [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement) ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers gestartet hat.

Wenn der Benutzer versucht, eine Ausschneideaktion auf nicht editierbarem Inhalt durchzuführen, wird das `cut` Ereignis dennoch ausgelöst, jedoch enthält das Ereignisobjekt keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Systemzwischenablage zu kopieren und aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _modifizieren_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) Eigenschaft des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignis-Handler, der die Standardaktion für "Ausschneiden" nachahmen möchte, während er die Zwischenablage modifiziert, muss auch manuell die Auswahl aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut` Ereignis zu konstruieren und auszulösen, aber dies wird die Systemzwischenablage oder den Dokumentinhalt nicht beeinflussen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignisstyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/SVGGraphicsElement/copy_event), [`paste`](/de/docs/Web/API/SVGGraphicsElement/paste_event)
- Dieses Ereignis bei HTML [`Element`](/de/docs/Web/API/Element) Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis bei [`Document`](/de/docs/Web/API/Document) Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window) Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)
