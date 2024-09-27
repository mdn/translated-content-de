---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das **`TextFormat`** Interface repräsentiert spezifische Formatierungen, die auf einen Textbereich in einem bearbeitbaren Textabschnitt angewendet werden sollten, der mit einer [`EditContext`](/de/docs/Web/API/EditContext) Instanz verbunden ist. Die Textformatierung wird vom [Eingabemethoden-Editor](/de/docs/Glossary/Input_Method_Editor) (IME) Fenster angefordert, mit dem der Benutzer Text erstellt.

Wenn Sie einen der Standard-bearbeitbaren Bereiche des Webs verwenden, wie beispielsweise ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element, wird die IME-Zusammensetzung vom Browser und Betriebssystem für Sie gehandhabt. Zum Beispiel können beim Einsatz des japanischen IME in einem `textarea` auf Windows die folgenden Textformatierungen angewendet werden:

- Wenn Text mit der Tastatur eingeben wird, haben die getippten Zeichen eine dünne wellenförmige Unterstreichung:

  ![Ein Textbereich in Microsoft Edge unter Windows mit japanischem Text, der aus dem IME-Fenster erstellt wird](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken durchgezogenen Linie unterstrichen:

  ![Ein Textbereich in Microsoft Edge unter Windows mit japanischem Text, der aus dem IME-Fenster ausgewählt wird](./ime-solid-underline.png)

Wenn Sie Ihren eigenen benutzerdefinierten bearbeitbaren Bereich mit der [EditContext API](/de/docs/Web/API/EditContext_API) erstellen, müssen Sie die IME-Zusammensetzung selbst behandeln. Sie sollten das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event) Ereignis überwachen, das Ihnen die Liste der Textformate gibt, die das IME-Fenster auf den zu erstellenden Text anwenden möchte. Sie sollten dann die Formatierung des angezeigten Textes in Ihrem bearbeitbaren Bereich entsprechend aktualisieren.

## Konstruktor

- [`TextFormat()`](/de/docs/Web/API/TextFormat/TextFormat) {{experimental_inline}}
  - : Gibt eine neue `TextFormat` Instanz zurück.

## Instanz-Eigenschaften

- [`TextFormat.rangeStart`](/de/docs/Web/API/TextFormat/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.rangeEnd`](/de/docs/Web/API/TextFormat/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.underlineStyle`](/de/docs/Web/API/TextFormat/underlineStyle) {{readonlyinline}} {{experimental_inline}}
  - : Der Unterstreichungsstil, der auf den formatierten Textbereich angewendet werden muss.
- [`TextFormat.underlineThickness`](/de/docs/Web/API/TextFormat/underlineThickness) {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den formatierten Textbereich angewendet werden muss.

## Beispiele

### Verwendung des `textformatupdate` Ereignisses

Im folgenden Beispiel wird das `textformatupdate` Ereignis verwendet, um die verschiedenen Formate zu protokollieren, die das IME-Zusammensetzungsfenster auf Textbereiche im bearbeitbaren Element anwenden möchte. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster verwendet wird, um Text zu erstellen.

```html
<div id="editor" style="height:200px;background:#eee;"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext(editorEl);
editorEl.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  // Get the TextFormat instances.
  const formats = e.getTextFormats();

  // Iterate over the TextFormat instances.
  for (const format of formats) {
    console.log(
      `Applying a ${format.underlineThickness} ${format.underlineStyle} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
