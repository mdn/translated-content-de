---
title: "Dokument: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: 453f1e19963409710b3466630538467db38a3f6f
---

{{APIRef("Selection API")}}

Der Browser löst das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) aus, wenn die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Document`](/de/docs/Web/API/Document) geändert wird. Eine Dokumentauswahl stellt entweder einen Bereich ausgewählten Inhalts über DOM-Knoten hinweg oder eine eingeklappte Cursorposition dar.

Dieses Ereignis ist nicht abbrechbar und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => {})

onselectionchange = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `selectionchange`-Ereignis des `Document`-Objekts wird ausgelöst, wenn:

- Ein Benutzer oder Skript eine Auswahl erstellt oder löscht.
- Der Start- oder Endpunkt eines ausgewählten Bereichs verschoben wird.
- Ein ausgewählter Bereich vollständig geändert wird.
- Eine Auswahl auf eine einzelne Cursorposition reduziert wird.

Das Ereignisobjekt selbst enthält keine aktualisierten Auswahldetails. Sie können die aktuelle Auswahl abrufen, indem Sie [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) innerhalb Ihres Ereignis-Listeners aufrufen.

Dieses Ereignis unterscheidet sich maßgeblich vom `selectionchange`-Ereignis, das bei {{HTMLElement("input")}} und {{HTMLElement("textarea")}}-Textelementen ausgelöst wird:

- Dokumentauswahlen verwenden DOM-Knotenpositionen und erfordern [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zur Inspektion. Texteingaben haben unabhängige Auswahlen innerhalb ihrer internen Textwerte, die über Zeichenoffsets inspiziert werden, die über `selectionStart`, `selectionEnd` und `selectionDirection` zugänglich sind.
- Das dokumentenbezogene `selectionchange`-Ereignis wird direkt auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst und wird nicht nach oben weitergegeben. Das Texteingabefeld `selectionchange`-Ereignis wird auf dem Input/Textarea-Element ausgelöst und wird im DOM-Baum nach oben weitergereicht.

Sehen Sie sich das [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)-Ereignis von `HTMLInputElement` und das [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis von `HTMLTextAreaElement` an, um weitere Details zu den Texteingabe-Ereignissen zu erhalten.

## Beispiele

### Grundlegende Verwendung

```js
// addEventListener version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
- [`Selection`](/de/docs/Web/API/Selection)
