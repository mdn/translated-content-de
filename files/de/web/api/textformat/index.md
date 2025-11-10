---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextFormat`**-Schnittstelle stellt ein spezifisches Format dar, das auf einen Textbereich in einer bearbeitbaren Textregion angewendet werden soll, die mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verknüpft ist. Die Textformatierung wird von dem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) Fenster angefordert, mit dem der Benutzer Text erstellt.

Beim Einsatz einer der standardmäßigen bearbeitbaren Regionen im Web, wie einem [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element, wird die IME-Zusammensetzung vom Browser und Betriebssystem übernommen. Beispielsweise können bei Verwendung eines japanischen IME in einem Textarea unter Windows die folgenden Textformate angewendet werden:

- Wenn Text mit der Tastatur eingegeben wird, haben die getippten Zeichen eine dünne wellenförmige Unterstreichung:

  ![Ein Textfeld in Microsoft Edge unter Windows mit einigen japanischen Texten, die aus dem IME-Fenster eingegeben werden](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken durchgehenden Linie unterstrichen:

  ![Ein Textfeld in Microsoft Edge unter Windows mit einigen ausgewählten japanischen Texten aus dem IME-Fenster](./ime-solid-underline.png)

Wenn Sie Ihre eigene benutzerdefinierte bearbeitbare Region mit der [EditContext API](/de/docs/Web/API/EditContext_API) erstellen, müssen Sie die IME-Zusammensetzung selbst verwalten. Sie sollten das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis abhören, das Ihnen die Liste der Textformate zur Verfügung stellt, die das IME-Fenster auf den Text anwenden möchte, der gerade erstellt wird. Sie sollten dann das Format des in Ihrer bearbeitbaren Region angezeigten Textes entsprechend aktualisieren.

## Konstruktor

- [`TextFormat()`](/de/docs/Web/API/TextFormat/TextFormat) {{experimental_inline}}
  - : Gibt eine neue `TextFormat`-Instanz zurück.

## Instanz-Eigenschaften

- [`TextFormat.rangeStart`](/de/docs/Web/API/TextFormat/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.rangeEnd`](/de/docs/Web/API/TextFormat/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- [`TextFormat.underlineStyle`](/de/docs/Web/API/TextFormat/underlineStyle) {{readonlyinline}} {{experimental_inline}}
  - : Der Stil der Unterstreichung, die auf den Formatierten Textbereich angewendet werden muss.
- [`TextFormat.underlineThickness`](/de/docs/Web/API/TextFormat/underlineThickness) {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den Formatierten Textbereich angewendet werden muss.

## Beispiele

### Verwendung des `textformatupdate`-Ereignisses

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die verschiedenen Formate zu protokollieren, die das IME-Zusammensetzungsfenster auf Textranges im bearbeitbaren Element anwenden möchte. Beachten Sie, dass der Ereignis-Listener Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Texterstellung verwendet wird.

```html
<div id="editor"></div>
```

```css hidden
#editor {
  height: 200px;
  background: #eeeeee;
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
