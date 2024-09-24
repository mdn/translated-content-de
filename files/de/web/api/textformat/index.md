---
title: Textformat
slug: Web/API/TextFormat
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextFormat`** Schnittstelle repräsentiert ein spezifisches Format, das auf einen Textbereich in einer editierbaren Textregion angewendet werden soll, die mit einer {{domxref("EditContext")}} Instanz verbunden ist. Das Textformat wird durch das {{glossary("Input Method Editor")}} (IME) Fenster angefordert, mit dem der Benutzer Text komponiert.

Wenn Sie eine der standardmäßig editierbaren Regionen des Webs verwenden, wie z.B. ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element, wird die IME-Komposition bereits vom Browser und Betriebssystem für Sie verarbeitet. Zum Beispiel können beim Verwenden eines japanischen IME in einem textarea auf Windows die folgenden Textformate angewendet werden:

- Wenn Text mithilfe der Tastatur komponiert wird, haben die getippten Zeichen eine dünne, wellenförmige Unterstreichung:

  ![Ein Textbereich in Microsoft Edge auf Windows mit etwas japanischem Text, der aus dem IME-Fenster komponiert wird](./ime-squiggle-underline.png)

- Wenn der Benutzer einen Vorschlag aus der Liste der Kandidaten im IME-Fenster auswählt, wird der Text ersetzt und mit einer dicken, durchgehenden Linie unterstrichen:

  ![Ein Textbereich in Microsoft Edge auf Windows mit japanischem Text, der aus dem IME-Fenster ausgewählt wird](./ime-solid-underline.png)

Wenn Sie Ihre eigene benutzerdefinierte editierbare Region mithilfe der {{domxref("EditContext API", "", "", "nocode")}} erstellen, müssen Sie die IME-Komposition selbst handhaben. Sie sollten auf das {{domxref("EditContext/textformatupdate_event", "textformatupdate")}}-Ereignis achten, das Ihnen die Liste der Textformate gibt, die das IME-Fenster auf den zu komponierenden Text anwenden möchte. Anschließend sollten Sie das Format des in Ihrer editierbaren Region angezeigten Textes entsprechend aktualisieren.

## Konstruktor

- {{DOMxRef("TextFormat.TextFormat", "TextFormat()")}} {{experimental_inline}}
  - : Gibt eine neue `TextFormat` Instanz zurück.

## Instanz-Eigenschaften

- {{domxref("TextFormat.rangeStart")}} {{readonlyinline}} {{experimental_inline}}
  - : Die Startposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- {{domxref("TextFormat.rangeEnd")}} {{readonlyinline}} {{experimental_inline}}
  - : Die Endposition des Textbereichs, der mit dem angegebenen Textformat formatiert werden muss.
- {{domxref("TextFormat.underlineStyle")}} {{readonlyinline}} {{experimental_inline}}
  - : Der Stil der Unterstreichung, der auf den formatierten Textbereich angewendet werden muss.
- {{domxref("TextFormat.underlineThickness")}} {{readonlyinline}} {{experimental_inline}}
  - : Die Dicke der Unterstreichung, die auf den formatierten Textbereich angewendet werden muss.

## Beispiele

### Verwenden des `textformatupdate` Ereignisses

Im folgenden Beispiel wird das `textformatupdate`-Ereignis genutzt, um die verschiedenen Formate zu protokollieren, die das IME-Kompositionsfenster auf Textbereiche im editierbaren Element anwenden möchte. Beachten Sie, dass die Rückruffunktion des Ereignislisteners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Textkomposition verwendet wird.

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

## Browserkompatibilität

{{Compat}}
