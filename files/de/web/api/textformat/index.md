---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextFormat`** Schnittstelle repräsentiert spezifische Formatierungen, die auf einen Textbereich in einem bearbeitbaren Textbereich angewendet werden sollen, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist. Die Textformatierung wird vom {{Glossary("Input_Method_Editor", "Eingabemethodeneditor (IME)")}} angefordert, mit dem der Benutzer Text verfasst.

Wenn Sie eine der standardmäßigen bearbeitbaren Bereiche des Webs verwenden, wie etwa ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element, wird die IME-Komposition vom Browser und Betriebssystem für Sie verwaltet. Beispielsweise können bei der Verwendung des japanischen IME in einem Textbereich unter Windows die folgenden Textformate angewendet werden:

- Wenn Text mit der Tastatur verfasst wird, haben die eingegebenen Zeichen eine dünne wellige Unterstreichung:

  ![Ein Textbereich in Microsoft Edge unter Windows mit japanischem Text, der aus dem IME-Fenster verfasst wird](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken durchgezogenen Linie unterstrichen:

  ![Ein Textbereich in Microsoft Edge unter Windows mit japanischem Text, der aus dem IME-Fenster ausgewählt wird](./ime-solid-underline.png)

Beim Erstellen eines eigenen benutzerdefinierten bearbeitbaren Bereichs mit der [EditContext API](/de/docs/Web/API/EditContext_API) müssen Sie die IME-Komposition selbst verwalten. Sie sollten das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis überwachen, das Ihnen die Liste der Textformate liefert, die das IME-Fenster auf den verfassten Text anwenden möchte. Sie sollten dann die Formatierung des im bearbeitbaren Bereich angezeigten Textes entsprechend aktualisieren.

## Konstruktor

- [`TextFormat()`](/de/docs/Web/API/TextFormat/TextFormat) {{experimental_inline}}
  - : Gibt eine neue `TextFormat`-Instanz zurück.

## Instanz-Eigenschaften

- [`TextFormat.rangeStart`](/de/docs/Web/API/TextFormat/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.rangeEnd`](/de/docs/Web/API/TextFormat/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.underlineStyle`](/de/docs/Web/API/TextFormat/underlineStyle) {{readonlyinline}} {{experimental_inline}}
  - : Der Stil der Unterstreichung, die auf den formatierten Textbereich angewendet werden muss.
- [`TextFormat.underlineThickness`](/de/docs/Web/API/TextFormat/underlineThickness) {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den formatierten Textbereich angewendet werden muss.

## Beispiele

### Verwendung des `textformatupdate`-Ereignisses

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die verschiedenen Formate zu protokollieren, die das IME-Kompositionsfenster auf Textbereiche im bearbeitbaren Element anwenden möchte. Beachten Sie, dass der Callback des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Textverfassung verwendet wird.

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
