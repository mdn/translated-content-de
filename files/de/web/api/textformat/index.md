---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextFormat`**-Schnittstelle repräsentiert spezifische Formatierungen, die auf einen Textbereich in einer editierbaren Textregion angewendet werden sollen, die an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angeschlossen ist. Die Textformatierung wird vom [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster angefordert, mit dem der Benutzer Text verfasst.

Wenn Sie eine der standardmäßigen editierbaren Regionen des Webs verwenden, wie z.B. ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Element, wird die IME-Komposition von Browser und Betriebssystem für Sie gehandhabt. Zum Beispiel können bei Verwendung eines japanischen IME in einem Textbereich unter Windows die folgenden Textformate angewendet werden:

- Wenn Text mit der Tastatur eingegeben wird, haben die getippten Zeichen eine dünne gewellte Unterstreichung:

  ![Ein Textbereich in Microsoft Edge auf Windows mit etwas japanischem Text, der im IME-Fenster verfasst wird](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken durchgezogenen Linie unterstrichen:

  ![Ein Textbereich in Microsoft Edge auf Windows mit etwas japanischem Text, der aus dem IME-Fenster ausgewählt wird](./ime-solid-underline.png)

Wenn Sie Ihre eigene benutzerdefinierte editierbare Region mithilfe der [EditContext API](/de/docs/Web/API/EditContext_API) erstellen, müssen Sie die IME-Komposition selbst verwalten. Sie sollten auf das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis lauschen, das Ihnen die Liste der Textformate gibt, die das IME-Fenster auf den verfassten Text anwenden möchte. Sie sollten dann die Formatierung des Textes, der in Ihrer editierbaren Region dargestellt wird, entsprechend aktualisieren.

## Konstruktor

- [`TextFormat()`](/de/docs/Web/API/TextFormat/TextFormat) {{experimental_inline}}
  - : Gibt eine neue `TextFormat`-Instanz zurück.

## Instanz-Eigenschaften

- [`TextFormat.rangeStart`](/de/docs/Web/API/TextFormat/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem gegebenen Textformat formatiert werden muss.
- [`TextFormat.rangeEnd`](/de/docs/Web/API/TextFormat/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem gegebenen Textformat formatiert werden muss.
- [`TextFormat.underlineStyle`](/de/docs/Web/API/TextFormat/underlineStyle) {{readonlyinline}} {{experimental_inline}}
  - : Der Stil der Unterstreichung, die auf den zu formatierenden Textbereich angewendet werden muss.
- [`TextFormat.underlineThickness`](/de/docs/Web/API/TextFormat/underlineThickness) {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den zu formatierenden Textbereich angewendet werden muss.

## Beispiele

### Verwenden des `textformatupdate`-Ereignisses

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die verschiedenen Formate zu protokollieren, die das IME-Zusammenstellungsfenster auf Textbereiche im editierbaren Element anwenden möchte. Beachten Sie, dass die Ereignis-Listener-Rückruffunktion in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster verwendet wird, um Text zu verfassen.

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
