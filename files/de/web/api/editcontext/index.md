---
title: EditContext
slug: Web/API/EditContext
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext`**-Schnittstelle repräsentiert den Textbearbeitungskontext eines Elements, das durch die Verwendung der [EditContext API](/de/docs/Web/API/EditContext_API) bearbeitbar gemacht wurde.

Die [EditContext API](/de/docs/Web/API/EditContext_API) kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortschrittliche Texterfahrung unterstützen, wie beispielsweise die Komposition mit einem [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME), Emoji-Auswahl oder andere plattformabhängige UI-Oberflächen für die Bearbeitung.

## Konstruktor

- [`EditContext()`](/de/docs/Web/API/EditContext/EditContext) {{experimental_inline}}
  - : Gibt eine neue `EditContext`-Instanz zurück.

## Instanz-Eigenschaften

- [`EditContext.text`](/de/docs/Web/API/EditContext/text) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der bearbeitbare Inhalt des Elements.
- [`EditContext.selectionStart`](/de/docs/Web/API/EditContext/selectionStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des bearbeitbaren Textinhalts, der den Anfang der aktuellen Auswahl darstellt.
- [`EditContext.selectionEnd`](/de/docs/Web/API/EditContext/selectionEnd) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des bearbeitbaren Textinhalts, der das Ende der aktuellen Auswahl darstellt.
- [`EditContext.characterBoundsRangeStart`](/de/docs/Web/API/EditContext/characterBoundsRangeStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Offset innerhalb des bearbeitbaren Textinhalts, an dem die letzte IME-Komposition begann.

## Instanz-Methoden

_`EditContext` basiert auf der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle und beinhaltet deren Methoden._

- [`EditContext.attachedElements()`](/de/docs/Web/API/EditContext/attachedElements) {{experimental_inline}}
  - : Ein {{jsxref("Array")}}, das ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt enthält, welches das Element darstellt, das mit dem `EditContext`-Objekt assoziiert ist.
- [`EditContext.characterBounds()`](/de/docs/Web/API/EditContext/characterBounds) {{experimental_inline}}
  - : Die Liste von Begrenzungsrechtecken für die Zeichen im `EditContext`-Objekt.
- [`EditContext.updateText()`](/de/docs/Web/API/EditContext/updateText) {{experimental_inline}}
  - : Aktualisiert den internen Textinhalt des `EditContext`-Objekts.
- [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) {{experimental_inline}}
  - : Aktualisiert den internen Zustand der Auswahl innerhalb des bearbeitbaren Textkontexts.
- [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe des bearbeitbaren Textbereichs.
- [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds) {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe der Auswahl innerhalb des bearbeitbaren Textbereichs.
- [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds) {{experimental_inline}}
  - : Informiert das Betriebssystem über die Position und Größe der Zeichen im `EditContext`-Objekt.

## Ereignisse

- [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer Änderungen am Text oder der Auswahl vorgenommen hat.
- [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Komposition mit einem [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster erfolgt und der IME entscheidet, dass bestimmte Teile des komponierten Textes unterschiedlich formatiert werden sollten, um den Kompositionsstatus anzuzeigen.
- [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn das Betriebssystem die Größe und Position bestimmter Zeichen innerhalb des bearbeitbaren Textbereichs des `EditContext`-Objekts kennen muss, um ein IME-Fenster anzuzeigen.
- [`compositionstart`](/de/docs/Web/API/EditContext/compositionstart_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Komposition mit einem IME-Fenster beginnt.
- [`compositionend`](/de/docs/Web/API/EditContext/compositionend_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn eine Komposition mit einem IME-Fenster endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
