---
title: "DataTransfer: files-Eigenschaft"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`files`**-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten ist eine [Liste der Dateien](/de/docs/Web/API/FileList) in der Drag-Operation. Wenn die Operation keine Dateien umfasst, ist die Liste leer.

Diese Funktion kann verwendet werden, um Dateien vom Desktop eines Benutzers in den Browser zu ziehen.

> [!NOTE]
> Die `files`-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten kann nur innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse zugegriffen werden. Für alle anderen Ereignisse wird die `files`-Eigenschaft leer sein, da ihr zugrunde liegendes Datenlager sich im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) befindet.

## Wert

Ein [`FileList`](/de/docs/Web/API/FileList) der Dateien in einer Drag-Operation, ein Listenelement für jede Datei in der Operation. Hatte die Drag-Operation keine Dateien, ist die Liste leer.

## Beispiele

### Lesen der Dateienliste

Dieses Beispiel erstellt einen einfachen Bereich, in den Sie Dateien ziehen können, und zeigt einige Metadaten an.

```html
<pre id="output">Drop files here from your file system.</pre>
```

```css
#output {
  min-height: 200px;
  border: 1px solid black;
  padding: 1em;
}
```

```js
const output = document.getElementById("output");

function log(text) {
  output.innerText += text;
}

output.addEventListener("dragenter", (e) => {
  e.stopPropagation();
  e.preventDefault();
  output.textContent = "";
});
output.addEventListener("dragover", (e) => {
  e.stopPropagation();
  e.preventDefault();
});
output.addEventListener("drop", (e) => {
  e.stopPropagation();
  e.preventDefault();
  const files = event.dataTransfer.files;
  log(`File Count: ${files.length}\n`);

  for (const file of files) {
    log(`  File: ${file}, ${file.name}, ${file.size} bytes\n`);
  }
});
```

{{EmbedLiveSample("reading_the_files_list", "", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
