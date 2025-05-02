---
title: "Dokumentation: cut-Ereignis"
short-title: cut
slug: Web/API/Document/cut_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`cut`**-Ereignis wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Ausschneideaktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle überwachen, um es in den Phasen der Erfassung oder des Durchlaufens zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: cut-Ereignis](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in seine Zwischenablage ausschneidet, können Sie Ihrem [`Document`](/de/docs/Web/API/Document)-Objekt mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wie folgt einen Handler hinzufügen:

```js
document.addEventListener("cut", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncut`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `cut`-Ereignis festzulegen:

```js
document.oncut = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/Document/copy_event), [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis bei [`Element`](/de/docs/Web/API/Element) Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window) Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)
