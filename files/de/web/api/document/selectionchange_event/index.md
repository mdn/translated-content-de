---
title: "Dokument: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: 81a7c1667ff8881e40435fa7fc7e968f9b6cd622
---

{{APIRef("Selection API")}}

Der Browser löst das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) aus, wenn die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Document`](/de/docs/Web/API/Document) geändert wird. Eine Dokumentauswahl repräsentiert entweder einen Bereich ausgewählten Inhalts über DOM-Knoten oder eine eingeklappte Cursorposition.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => {})

onselectionchange = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `Document`-Objekt `selectionchange`-Ereignis wird ausgelöst, wenn:

- Ein Benutzer oder Skript eine Auswahl erstellt oder löscht.
- Der Anfangs- oder Endpunkt eines ausgewählten Bereichs verschoben wird.
- Ein ausgewählter Bereich vollständig geändert wird.
- Eine Auswahl auf eine einzige Cursorposition zusammenbricht.

Das Ereignisobjekt selbst enthält keine aktualisierten Auswahldetails. Sie können die aktuelle Auswahl abrufen, indem Sie [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) innerhalb Ihres Ereignislisteners aufrufen.

> [!NOTE]
> Wenn Sie die Auswahl programmgesteuert ändern, beispielsweise durch Aufruf von [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse), wird die Auswahl sofort aktualisiert, aber das `selectionchange`-Ereignis wird als Aufgabe in die Warteschlange eingereiht. Seine Listener werden später ausgeführt, nachdem das aktuelle Skript die Ausführung beendet hat. Dies steht in Kontrast zu Ereignissen wie `focus` und `click`, deren Listener synchron ausgeführt werden, wenn sie durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Dieses Ereignis unterscheidet sich deutlich vom `selectionchange`-Ereignis, das bei {{HTMLElement("input")}} und {{HTMLElement("textarea")}} Textsteuerungen ausgelöst wird:

- Dokumentauswahlen verwenden DOM-Knotenpositionen und erfordern zur Überprüfung [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection). Texteingaben behalten unabhängige Auswahlen innerhalb ihrer internen Textwerte bei und verwenden Zeichenoffsets, die über `selectionStart`, `selectionEnd` und `selectionDirection` überprüft werden.
- Das dokumentenweite `selectionchange`-Ereignis wird direkt am [`Document`](/de/docs/Web/API/Document) ausgelöst und wird nicht weitergeleitet. Das `selectionchange`-Ereignis bei Texteingaben wird am Eingabe-/Textarea-Element ausgelöst und wird im DOM-Baum nach oben weitergeleitet.

Siehe das [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)-Ereignis von `HTMLInputElement` und das [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis von `HTMLTextAreaElement` für weitere Details zu den Texteingabe-Ereignissen.

## Beispiele

### Grundlegende Nutzung

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
