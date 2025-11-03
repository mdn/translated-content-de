---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um Daten zu speichern, die zwischen Kontexten übertragen werden, wie z.B. bei Drag-and-Drop-Operationen oder Lese-/Schreibvorgängen in der Zwischenablage. Es kann einen oder mehrere Datenobjekte enthalten, von denen jedes eine oder mehrere Datentypen hat.

`DataTransfer` wurde ursprünglich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) als [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft konzipiert und ist immer noch im HTML-Drag-and-Drop-Bereich spezifiziert. Es wird jedoch jetzt auch von anderen APIs genutzt, wie etwa [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Allerdings nutzen andere APIs nur bestimmte Teile seiner Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation zu `DataTransfer` wird hauptsächlich seine Verwendung bei Drag-and-Drop-Operationen besprechen, und Sie sollten in der Dokumentation der anderen APIs nachsehen, wie `DataTransfer` in diesen Kontexten genutzt wird.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanz-Eigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Ruft die Art der derzeit ausgewählten Drag-and-Drop-Operation ab oder setzt die Operation auf einen neuen Typ. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Bietet alle möglichen Arten von Operationen. Muss einer von `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized` sein.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die beim Datentransfer verfügbar sind. Wenn die Drag-Operation nicht das Ziehen von Dateien umfasst, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, das eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen, die die Formate angeben, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis gesetzt wurden.

## Instanz-Methoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Setzt die Drag-Quelle für das angegebene Element. Dies wird das Element sein, bei dem [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden, und nicht das Standardziel (das zu ziehende Element). Spezifisch für Firefox.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die mit einem bestimmten Typ assoziiert sind. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten, die mit allen Typen assoziiert sind, entfernt. Wenn es keine Daten für den angegebenen Typ gibt oder der Datentransfer keine Daten enthält, hat diese Methode keine Wirkung.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen bestimmten Typ ab oder eine leere Zeichenfolge, wenn keine Daten für diesen Typ existieren oder der Datentransfer keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen bestimmten Typ. Wenn keine Daten für den Typ vorhanden sind, werden sie am Ende hinzugefügt, sodass das letzte Element in der Typenliste das neue Format ist. Wenn Daten für den Typ bereits vorhanden sind, werden die vorhandenen Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Setzt das Bild, das beim Ziehen verwendet werden soll, falls ein kundenspezifisches Bild erwünscht ist.

## Beispiele

Jede in diesem Dokument aufgelistete Methode und Eigenschaft hat ihre eigene Referenzseite, und jede Referenzseite enthält entweder direkt ein Beispiel der Schnittstelle oder hat einen Link zu einem Beispiel.

### Lesen der Daten in einem Einfüge- oder Drop-Ereignis

Im folgenden Beispiel haben wir ein {{htmlelement("form")}}, das drei verschiedene Arten von Texteingaben enthält: ein Text-{{htmlelement("input")}}-Element, ein {{htmlelement("textarea")}}-Element und ein {{htmlelement("div")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt. Der Benutzer kann Text in eines dieser Elemente einfügen oder ziehen, und die Daten im [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) oder [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Objekt werden angezeigt.

#### HTML

```html
<form>
  <fieldset>
    <legend>&lt;input /></legend>
    <input type="text" />
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">Operation type</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Content type</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;textarea /></legend>
    <textarea></textarea>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">Operation type</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Content type</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;div contenteditable /></legend>
    <div contenteditable></div>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">Operation type</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Content type</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <p class="center">
    <input type="reset" />
  </p>
</form>
```

#### CSS

```css
.center {
  text-align: center;
}

form > fieldset > * {
  vertical-align: top;
}
form input,
form textarea,
form [contenteditable] {
  min-width: 15rem;
  padding: 0.25rem;
}
[contenteditable] {
  appearance: textfield;
  display: inline-block;
  min-height: 1rem;
  border: 1px solid;
}

form table {
  display: inline-table;
}
table ol {
  text-align: left;
}
```

#### JavaScript

```js
const form = document.querySelector("form");

function displayData(event) {
  if (event.type === "drop") event.preventDefault();

  const cells = event.target.nextElementSibling.querySelectorAll("td");
  cells[0].textContent = event.type;
  const transfer = event.clipboardData || event.dataTransfer;
  const ol = document.createElement("ol");
  cells[1].textContent = "";
  cells[1].appendChild(ol);
  for (const item of transfer.items) {
    const li = document.createElement("li");
    li.textContent = `${item.kind} ${item.type}`;
    ol.appendChild(li);
  }
}

form.addEventListener("paste", displayData);
form.addEventListener("drop", displayData);
form.addEventListener("reset", () => {
  for (const cell of form.querySelectorAll("[contenteditable], td")) {
    cell.textContent = "";
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Lesen der Daten in einem Einfüge- oder Drop-Ereignis", "", 400, , , , , "allow-forms")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Daten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
