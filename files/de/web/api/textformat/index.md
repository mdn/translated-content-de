---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das **`TextFormat`**-Interface repräsentiert spezielle Formatierungen, die auf einen Textbereich in einem bearbeitbaren Textbereich angewendet werden sollen, der mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verbunden ist. Die Textformatierung wird vom Fenster des {{Glossary("Input_Method_Editor", "Input Method Editors")}} (IME) angefordert, mit dem der Benutzer Text erstellt.

Wenn Sie eine der standardmäßigen bearbeitbaren Bereiche des Webs verwenden, wie beispielsweise ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element, wird die IME-Zusammensetzung von Browser und Betriebssystem für Sie übernommen. Zum Beispiel, wenn Sie japanisches IME in einem Textbereich auf Windows verwenden, können die folgenden Textformate angewendet werden:

- Wenn Text mit der Tastatur eingegeben wird, haben die getippten Zeichen eine dünne wellenförmige Unterstreichung:

  ![Ein Textbereich in Microsoft Edge auf Windows mit einigen japanischen Texten, die aus dem IME-Fenster komponiert werden](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken, durchgehenden Linie unterstrichen:

  ![Ein Textbereich in Microsoft Edge auf Windows mit einigen japanischen Texten, die aus dem IME-Fenster ausgewählt werden](./ime-solid-underline.png)

Wenn Sie Ihren eigenen benutzerdefinierten bearbeitbaren Bereich erstellen, indem Sie die [EditContext API](/de/docs/Web/API/EditContext_API) verwenden, müssen Sie die IME-Zusammensetzung selbst verwalten. Sie sollten auf das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis hören, das Ihnen die Liste der Textformate gibt, die das IME-Fenster auf den zu erstellenden Text anwenden möchte. Sie sollten dann die Formatierung des im bearbeitbaren Bereich angezeigten Textes entsprechend aktualisieren.

## Konstruktor

- [`TextFormat()`](/de/docs/Web/API/TextFormat/TextFormat) {{experimental_inline}}
  - : Gibt eine neue `TextFormat`-Instanz zurück.

## Instanz-Eigenschaften

- [`TextFormat.rangeStart`](/de/docs/Web/API/TextFormat/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.rangeEnd`](/de/docs/Web/API/TextFormat/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.underlineStyle`](/de/docs/Web/API/TextFormat/underlineStyle) {{readonlyinline}} {{experimental_inline}}
  - : Der Stil der Unterstreichung, der auf den zu formatierenden Textbereich angewendet werden muss.
- [`TextFormat.underlineThickness`](/de/docs/Web/API/TextFormat/underlineThickness) {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den zu formatierenden Textbereich angewendet werden muss.

## Beispiele

### Verwendung des `textformatupdate`-Ereignisses

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die verschiedenen Formate zu protokollieren, die das IME-Zusammensetzungsfenster auf Textbereiche im bearbeitbaren Element anwenden möchte. Beachten Sie, dass der Ereignis-Listener-Rückruf in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Texteingabe verwendet wird.

```html
<div id="editor"></div>
```

```css hidden
#editor {
  height: 200px;
  background: #eee;
}
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
