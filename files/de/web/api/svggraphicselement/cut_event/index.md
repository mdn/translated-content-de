---
title: "SVGGraphicsElement: Ausschneide-Ereignis"
short-title: ausschneiden
slug: Web/API/SVGGraphicsElement/cut_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`cut`**-Ereignis wird auf einem {{domxref("SVGGraphicsElement")}} ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine "Ausschneiden"-Aktion initiiert hat.

Wenn der Benutzer versucht, eine Ausschneide-Aktion auf nicht editierbarem Inhalt durchzuführen, wird das `cut`-Ereignis dennoch ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Systemzwischenablage zu kopieren und sie aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _modifizieren_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf die [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignishandler, der die Standardaktion für "Ausschneiden" emulieren möchte, während er die Zwischenablage modifiziert, muss daher auch manuell die Auswahl aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut`-Ereignis zu konstruieren und abzuschicken, aber dies wird weder die Systemzwischenablage noch die Inhalte des Dokuments beeinflussen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/SVGGraphicsElement/copy_event), [`paste`](/de/docs/Web/API/SVGGraphicsElement/paste_event)
- Dieses Ereignis bei HTML-{{domxref("Element")}}-Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis bei {{domxref("Document")}}-Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis bei {{domxref("Window")}}-Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)
