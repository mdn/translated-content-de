---
title: EditContext
slug: Web/API/EditContext
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext`**-Schnittstelle repräsentiert den Textbearbeitungskontext eines Elements, das durch die Verwendung der {{domxref("EditContext API", "", "", "nocode")}} bearbeitbar gemacht wurde.

Die {{domxref("EditContext API", "", "", "nocode")}} kann genutzt werden, um reichhaltige Texteditoren im Web zu erstellen, die fortgeschrittene Texteingabeerlebnisse unterstützen, wie zum Beispiel die Zusammensetzung über ein {{glossary("Input Method Editor")}} (IME), Emoji-Auswahl oder andere plattformspezifische, bearbeitungsbezogene Benutzeroberflächen.

## Konstruktor

- {{domxref("EditContext.EditContext", "EditContext()")}} {{experimental_inline}}
  - : Gibt eine neue Instanz von `EditContext` zurück.

## Instanz-Eigenschaften

- {{domxref("EditContext.text")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Der editierbare Inhalt des Elements.
- {{domxref("EditContext.selectionStart")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des editierbaren Textinhalts, an dem die aktuelle Auswahl beginnt.
- {{domxref("EditContext.selectionEnd")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des editierbaren Textinhalts, an dem die aktuelle Auswahl endet.
- {{domxref("EditContext.characterBoundsRangeStart")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des editierbaren Textinhalts, an dem die letzte IME-Zusammensetzung begonnen hat.

## Instanz-Methoden

_`EditContext` basiert auf der {{domxref("EventTarget")}}-Schnittstelle und umfasst deren Methoden._

- {{domxref("EditContext.attachedElements()")}} {{experimental_inline}}
  - : Ein {{jsxref("Array")}} enthaltend ein {{domxref("HTMLElement")}}-Objekt, das das mit dem `EditContext`-Objekt assoziierte Element ist.
- {{domxref("EditContext.characterBounds()")}} {{experimental_inline}}
  - : Die Liste der Begrenzungsrechtecke für die Zeichen im `EditContext`-Objekt.
- {{domxref("EditContext.updateText()")}} {{experimental_inline}}
  - : Aktualisiert den internen Textinhalt des `EditContext`-Objekts.
- {{domxref("EditContext.updateSelection()")}} {{experimental_inline}}
  - : Aktualisiert den internen Zustand der Auswahl innerhalb des editierbaren Textkontexts.
- {{domxref("EditContext.updateControlBounds()")}} {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe des editierbaren Textbereichs.
- {{domxref("EditContext.updateSelectionBounds()")}} {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe der Auswahl innerhalb des editierbaren Textbereichs.
- {{domxref("EditContext.updateCharacterBounds()")}} {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe der Zeichen im `EditContext`-Objekt.

## Ereignisse

- {{domxref("EditContext.textupdate_event", "textupdate")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer Änderungen am Text oder der Auswahl vorgenommen hat.
- {{domxref("EditContext.textformatupdate_event", "textformatupdate")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Zusammensetzung mit einem {{glossary("Input Method Editor")}} (IME)-Fenster stattfindet und das IME entscheidet, dass bestimmte Teile des zu komponierenden Textes unterschiedlich formatiert werden sollten, um den Zustand der Zusammensetzung anzuzeigen.
- {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn das Betriebssystem die Größe und Position bestimmter Zeichen innerhalb des editierbaren Textbereichs des `EditContext`-Objekts wissen muss, um ein IME-Fenster anzuzeigen.
- {{domxref("EditContext.compositionstart_event", "compositionstart")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Zusammensetzung mit einem IME-Fenster beginnt.
- {{domxref("EditContext.compositionend_event", "compositionend")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Zusammensetzung mit einem IME-Fenster endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
