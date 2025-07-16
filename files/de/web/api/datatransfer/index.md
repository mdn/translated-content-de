---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um alle Daten zu halten, die zwischen Kontexten übertragen werden, wie z.B. bei einem Drag-and-Drop-Vorgang oder Lese-/Schreibvorgängen in der Zwischenablage. Es kann ein oder mehrere Datenelemente enthalten, von denen jedes eine oder mehrere Datentypen haben kann.

`DataTransfer` wurde hauptsächlich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) als die [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft entworfen und wird immer noch im HTML Drag-and-Drop-Abschnitt spezifiziert. Es wird jedoch jetzt auch von anderen APIs verwendet, wie [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Andere APIs verwenden allerdings nur bestimmte Teile seiner Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation von `DataTransfer` wird hauptsächlich die Nutzung bei Drag-and-Drop-Operationen behandeln. Für die Verwendung von `DataTransfer` in diesen anderen Kontexten sollten Sie die Dokumentation der jeweils anderen APIs zu Rate ziehen.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanzeigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Holt den Typ der derzeit ausgewählten Drag-and-Drop-Operation oder setzt die Operation auf einen neuen Typ. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle möglichen Operationstypen an. Muss einer der folgenden Werte sein: `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized`.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die im Datentransfer verfügbar sind. Wenn der Drag-Vorgang nicht das Ziehen von Dateien beinhaltet, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt zurück, das eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen, das die Formate angibt, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanzmethoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Setzt die Drag-Quelle für das gegebene Element. Dies wird das Element sein, auf dem die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) ausgelöst werden, und nicht das Standardziel (der Knoten, der gezogen wurde). Firefox-spezifisch.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten des gegebenen Typs. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten für alle Typen entfernt. Wenn keine Daten für den angegebenen Typ existieren oder der Datentransfer keine Daten enthält, hat diese Methode keine Auswirkungen.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen gegebenen Typ ab oder gibt eine leere Zeichenfolge zurück, wenn keine Daten für diesen Typ existieren oder der Datentransfer keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen gegebenen Typ. Wenn keine Daten für den Typ existieren, werden sie am Ende hinzugefügt, sodass das letzte Element in der Typenliste das neue Format ist. Wenn bereits Daten für den Typ existieren, werden die bestehenden Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Setzt das Bild, das für das Ziehen verwendet werden soll, wenn ein benutzerdefiniertes Bild gewünscht ist.

## Beispiele

Jede in diesem Dokument aufgeführte Methode und Eigenschaft hat ihre eigene Referenzseite, und jede Referenzseite enthält entweder direkt ein Beispiel der Schnittstelle oder einen Link zu einem Beispiel.

### Lesen der Daten in einem Einfüge- oder Abwurfevent

Im folgenden Beispiel haben wir ein {{htmlelement("form")}}, das drei verschiedene Arten von Texteingaben enthält: ein Text-{{htmlelement("input")}}-Element, ein {{htmlelement("textarea")}}-Element und ein {{htmlelement("div")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt. Der Benutzer kann Text in eines dieser Elemente einfügen oder ablegen, und die Daten im [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) oder [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Objekt werden angezeigt.

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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
