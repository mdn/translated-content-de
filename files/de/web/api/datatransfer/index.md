---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um Daten zu speichern, die zwischen Kontexten übertragen werden, wie z.B. eine Drag-and-Drop-Operation oder das Lesen/Schreiben in die Zwischenablage. Es kann einen oder mehrere Datenelemente enthalten, von denen jedes eine oder mehrere Datentypen hat.

`DataTransfer` wurde hauptsächlich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entworfen, als die [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, und wird immer noch im HTML-Drag-and-Drop-Abschnitt spezifiziert, aber es wird jetzt auch von anderen APIs verwendet, wie z.B. [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Allerdings verwenden andere APIs nur bestimmte Teile seiner Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation zu `DataTransfer` wird sich hauptsächlich mit seiner Verwendung bei Drag-and-Drop-Operationen beschäftigen, und Sie sollten die Dokumentation der anderen APIs für die Verwendung von `DataTransfer` in diesen Kontexten konsultieren.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanz-Eigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Ruft den Typ der aktuell ausgewählten Drag-and-Drop-Operation ab oder setzt die Operation auf einen neuen Typ. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle möglichen Operationstypen an. Muss einer von `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized` sein.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die bei der Datenübertragung verfügbar sind. Wenn die Drag-Operation das Ziehen von Dateien nicht beinhaltet, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt zurück, das eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen, die die Formate angeben, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanz-Methoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Legt die Drag-Quelle für das gegebene Element fest. Dies wird das Element sein, auf dem [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden, und nicht das Standardziel (das verschobene Knoten). Firefox-spezifisch.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die mit einem gegebenen Typ verbunden sind. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die mit allen Typen verbundenen Daten entfernt. Wenn Daten für den angegebenen Typ nicht existieren oder die Datenübertragung keine Daten enthält, hat diese Methode keine Wirkung.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen gegebenen Typ ab oder einen leeren String, wenn Daten für diesen Typ nicht existieren oder die Datenübertragung keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen gegebenen Typ. Wenn Daten für den Typ nicht existieren, wird es am Ende hinzugefügt, so dass das letzte Element in der Typenliste das neue Format sein wird. Wenn Daten für den Typ bereits existieren, werden die vorhandenen Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Setzt das Bild, das zum Ziehen verwendet wird, wenn ein benutzerdefiniertes gewünscht ist.

## Beispiele

Jede in diesem Dokument aufgeführte Methode und Eigenschaft hat ihre eigene Referenzseite und jede Referenzseite enthält entweder direkt ein Beispiel für die Schnittstelle oder einen Link zu einem Beispiel.

### Lesen der Daten in einem Einfüge- oder Drop-Ereignis

Im folgenden Beispiel haben wir ein {{htmlelement("form")}} mit drei verschiedenen Arten von Texteingaben: ein Text-{{htmlelement("input")}}-Element, ein {{htmlelement("textarea")}}-Element und ein {{htmlelement("div")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt. Der Benutzer kann Text in eines dieser Elemente einfügen oder ziehen, und die Daten im [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) oder [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Objekt werden angezeigt.

#### HTML

```html
<form>
  <fieldset>
    <legend>&lt;input /></legend>
    <input type="text" />
    <table class="center">
      <tr>
        <th scope="row">Operation type</th>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Content type</th>
        <td></td>
      </tr>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;textarea /></legend>
    <textarea></textarea>
    <table class="center">
      <tr>
        <th scope="row">Operation type</th>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Content type</th>
        <td></td>
      </tr>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;div contenteditable /></legend>
    <div contenteditable></div>
    <table class="center">
      <tr>
        <th scope="row">Operation type</th>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Content type</th>
        <td></td>
      </tr>
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

{{EmbedLiveSample("Reading the data in a paste or drop event", "", 400, , , , , "allow-forms")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
