---
title: "Dokument: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Selection API")}}

Der Browser löst das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) aus, wenn sich die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Document`](/de/docs/Web/API/Document) ändert. Eine Dokumentauswahl stellt entweder einen Bereich ausgewählter Inhalte über mehrere DOM-Knoten hinweg oder eine zusammengefallene Cursorposition dar.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectionchange", (event) => {})
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectionchange = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `selectionchange`-Ereignis des `Document`-Objekts wird ausgelöst, wenn:

- Ein Benutzer oder ein Skript eine Auswahl erstellt oder aufhebt.
- Sich der Anfangs- oder Endpunkt eines ausgewählten Bereichs verschiebt.
- Sich ein ausgewählter Bereich vollständig ändert.
- Eine Auswahl auf eine einzelne Cursorposition zusammenfällt.

Das Ereignisobjekt selbst enthält keine Angaben zur aktualisierten Auswahl. Sie können die aktuelle Auswahl abrufen, indem Sie in Ihrem Event-Listener [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) aufrufen.

> [!NOTE]
> Wenn Sie die Auswahl programmgesteuert ändern, beispielsweise durch Aufrufen von [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse), wird die Auswahl sofort aktualisiert. Das `selectionchange`-Ereignis wird jedoch als Task in eine Warteschlange gestellt. Seine Listener werden erst später ausgeführt, nachdem das aktuelle Skript beendet ist. Dies unterscheidet sich von Ereignissen wie `focus` und `click`, deren Listener synchron ausgeführt werden, wenn sie durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) beziehungsweise [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Dieses Ereignis unterscheidet sich deutlich vom `selectionchange`-Ereignis, das bei den Texteingabefeldern {{HTMLElement("input")}} und {{HTMLElement("textarea")}} ausgelöst wird:

- Dokumentauswahlen verwenden Positionen von DOM-Knoten und müssen mit [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) untersucht werden. Texteingabefelder verwalten unabhängige Auswahlen innerhalb ihrer internen Textwerte. Deren Zeichenpositionen lassen sich über `selectionStart`, `selectionEnd` und `selectionDirection` untersuchen.
- Das `selectionchange`-Ereignis auf Dokumentebene wird direkt auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst und breitet sich nicht aus. Das `selectionchange`-Ereignis eines Texteingabefelds wird auf dem input- oder textarea-Element ausgelöst und breitet sich im DOM-Baum nach oben aus.

Weitere Informationen zu den Ereignissen von Texteingabefeldern finden Sie beim [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)-Ereignis von `HTMLInputElement` und beim [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis von `HTMLTextAreaElement`.

## Beispiele

### Grundlegende Verwendung

```js
// addEventListener version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange version (but note that this replaces other event listeners
// added using onselectionchange, if any)
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
