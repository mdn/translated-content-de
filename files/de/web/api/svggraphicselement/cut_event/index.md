---
title: "SVGGraphicsElement: cut-Ereignis"
short-title: cut
slug: Web/API/SVGGraphicsElement/cut_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("SVG")}}

Das **`cut`**-Ereignis wird auf einem [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement) ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Wenn der Benutzer versucht, eine Ausschneide-Aktion auf nicht bearbeitbaren Inhalten durchzuführen, wird das `cut`-Ereignis dennoch ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Zwischenablage zu kopieren und aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _modifizieren_, indem [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufgerufen wird und die Standardaktion durch die Verwendung von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignishandler, der die Standardaktion für "Ausschneiden" emulieren und gleichzeitig die Zwischenablage modifizieren möchte, muss daher auch manuell die Auswahl aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut`-Ereignis zu erstellen und zu senden, aber dies wird weder die Systemzwischenablage noch den Inhalt des Dokuments beeinflussen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/SVGGraphicsElement/copy_event), [`paste`](/de/docs/Web/API/SVGGraphicsElement/paste_event)
- Dieses Ereignis auf HTML [`Element`](/de/docs/Web/API/Element)-Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document)-Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window)-Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)
