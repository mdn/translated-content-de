---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt speichert Daten, die zwischen Kontexten übertragen werden, beispielsweise bei einer Drag-and-Drop-Operation oder beim Lesen und Schreiben über die Zwischenablage. Es kann ein oder mehrere Datenelemente enthalten, die jeweils einem oder mehreren Datentypen angehören.

`DataTransfer` wurde ursprünglich vor allem für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) als Eigenschaft [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) entwickelt und ist weiterhin im Abschnitt zu HTML Drag and Drop spezifiziert. Inzwischen wird es jedoch auch von anderen APIs verwendet, etwa von [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Diese APIs verwenden allerdings nur bestimmte Teile der Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Diese Dokumentation behandelt hauptsächlich die Verwendung von `DataTransfer` bei Drag-and-Drop-Operationen. Informationen zur Verwendung in anderen Kontexten finden Sie in der Dokumentation der jeweiligen APIs.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt ein neues `DataTransfer`-Objekt und gibt es zurück.

## Instanzeigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Gibt den Typ der aktuell ausgewählten Drag-and-Drop-Operation zurück oder legt einen neuen Typ fest. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle zulässigen Operationstypen an. Der Wert muss `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized` sein.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die bei der Datenübertragung verfügbar sind. Wenn bei der Drag-Operation keine Dateien gezogen werden, ist diese Liste leer.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt zurück, das alle Drag-Daten auflistet.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen mit den Formaten, die beim [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanzmethoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Legt das angegebene Element als Quelle der Drag-Operation fest. Auf diesem Element werden die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) ausgelöst, statt auf dem standardmäßigen Zielelement (dem gezogenen Knoten). Firefox-spezifisch.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die einem bestimmten Typ zugeordnet sind. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten aller Typen entfernt. Sind für den angegebenen Typ keine Daten vorhanden oder enthält die Datenübertragung keine Daten, hat diese Methode keine Wirkung.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen bestimmten Typ ab. Sind für diesen Typ keine Daten vorhanden oder enthält die Datenübertragung keine Daten, wird eine leere Zeichenfolge zurückgegeben.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Legt die Daten für einen bestimmten Typ fest. Sind für den Typ noch keine Daten vorhanden, werden sie am Ende hinzugefügt, sodass das neue Format der letzte Eintrag in der Liste der Typen ist. Sind bereits Daten für den Typ vorhanden, werden sie an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Legt ein benutzerdefiniertes Bild fest, das beim Ziehen verwendet werden soll.

## Beispiele

Jede hier aufgeführte Methode und Eigenschaft hat eine eigene Referenzseite. Jede dieser Seiten enthält entweder direkt ein Beispiel für die Schnittstelle oder einen Link zu einem Beispiel.

### Daten bei einem Einfüge- oder Drop-Ereignis lesen

Im folgenden Beispiel enthält ein {{htmlelement("form")}} drei unterschiedliche Arten von Texteingaben: ein {{htmlelement("input")}}-Element für Text, ein {{htmlelement("textarea")}}-Element und ein {{htmlelement("div")}}-Element, bei dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist. Sie können Text in jedes dieser Elemente einfügen oder dort ablegen. Anschließend werden die Daten aus dem Objekt [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) beziehungsweise [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) angezeigt.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
