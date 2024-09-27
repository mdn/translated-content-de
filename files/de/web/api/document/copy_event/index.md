---
title: "Dokument: copy Ereignis"
short-title: copy
slug: Web/API/Document/copy_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`copy`** Ereignis wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel für dieses Ereignis ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Kopieraktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle abhören, um es in den Capture- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: copy Ereignis](/de/docs/Web/API/Element/copy_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in die Zwischenablage kopiert, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document) Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

Alternativ können Sie die `Document.oncopy` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `copy` Ereignis zu etablieren:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Document/cut_event), [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) Zielen: [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Zielen: [`copy`](/de/docs/Web/API/Window/copy_event)
