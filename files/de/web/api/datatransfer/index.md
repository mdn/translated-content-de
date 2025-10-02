---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um beliebige Daten zwischen Kontexten zu übertragen, wie etwa eine Drag-and-Drop-Operation oder das Lesen/Schreiben in die Zwischenablage. Es kann eines oder mehrere Datenobjekte speichern, von denen jedes eine oder mehrere Datentypen besitzt.

`DataTransfer` wurde hauptsächlich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) als die [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft entwickelt und ist weiterhin im HTML-Drag-and-Drop-Abschnitt spezifiziert. Es wird jedoch jetzt auch von anderen APIs verwendet, wie der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und der [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Andere APIs nutzen jedoch nur bestimmte Teile der Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation zu `DataTransfer` wird sich in erster Linie mit dessen Verwendung bei Drag-and-Drop-Operationen befassen. Für die Nutzung von `DataTransfer` in anderen Kontexten sollten Sie auf die Dokumentation der anderen APIs verweisen.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanzeigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Ruft die Art der aktuell ausgewählten Drag-and-Drop-Operation ab oder setzt die Operation auf einen neuen Typ. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle Typen von möglichen Operationen an. Muss einer der folgenden sein: `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized`.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Beinhaltet eine Liste aller lokalen Dateien, die beim Datentransfer verfügbar sind. Wenn die Drag-Operation das Draggen von Dateien nicht umfasst, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt zurück, welches eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Strings, welches die Formate bereitstellt, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanzmethoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Setzt die Drag-Quelle für das angegebene Element. Dies wird das Element sein, auf dem die [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden und nicht das Standardziel (der Knoten, der gezogen wurde). Spezifisch für Firefox.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die mit einem gegebenen Typ verbunden sind. Das Typ-Argument ist optional. Ist der Typ leer oder nicht angegeben, werden die Daten aller Typen entfernt. Existieren keine Daten für den angegebenen Typ oder enthält der Datentransfer keine Daten, hat diese Methode keinen Effekt.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen gegebenen Typ ab oder einen leeren String, wenn keine Daten für diesen Typ existieren oder der Datentransfer keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen gegebenen Typ. Existieren keine Daten für diesen Typ, werden sie am Ende hinzugefügt, sodass das letzte Element in der Typenliste das neue Format sein wird. Existieren bereits Daten für diesen Typ, werden die existierenden Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Setzt das Bild, das beim Draggen verwendet werden soll, wenn ein benutzerdefiniertes gewünscht ist.

## Beispiele

Jede in diesem Dokument aufgeführte Methode und Eigenschaft hat eine eigene Referenzseite, und jede Referenzseite enthält entweder direkt ein Beispiel für die Schnittstelle oder einen Link zu einem Beispiel.

### Lesen der Daten in einem Einfüge- oder Drop-Ereignis

Im folgenden Beispiel haben wir ein {{htmlelement("form")}}, das drei verschiedene Arten von Texteingaben enthält: ein Text-{{htmlelement("input")}}-Element, ein {{htmlelement("textarea")}}-Element und ein {{htmlelement("div")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt. Der Benutzer kann Text in eines dieser Elemente einfügen oder fallen lassen, und die Daten im [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)- oder [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Objekt werden angezeigt.

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
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
