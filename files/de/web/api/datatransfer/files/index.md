---
title: "DataTransfer: files Eigenschaft"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`files`** schreibgeschützte Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces ist eine [Liste der Dateien](/de/docs/Web/API/FileList) in der Ziehoperation. Wenn die Operation keine Dateien umfasst, ist die Liste leer.

Diese Funktion kann verwendet werden, um Dateien von einem Desktop des Nutzers in den Browser zu ziehen.

Während einer Ziehoperation kann diese Eigenschaft nur verwendet werden, um Dateien in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Events zu lesen, da dies die einzigen Zeiten sind, in denen der Ziehdaten-Store lesbar ist. Der Zugriff darauf von jedem anderen Zieh-Event ergibt eine leere Liste. Siehe [Lesen des Ziehdaten-Stores](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

Für Zwischenablageoperationen können Dateien auch im Handler für das [`paste`](/de/docs/Web/API/Element/paste_event)-Event unter Verwendung von [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) gelesen werden.

## Wert

Eine [`FileList`](/de/docs/Web/API/FileList) der Dateien in einer Ziehoperation, ein Listeneintrag für
jede Datei in der Operation. Wenn die Ziehoperation keine Dateien hatte, ist die Liste leer.

## Beispiele

### Lesen der Dateiliste

Dieses Beispiel erstellt einen grundlegenden Bereich, in den Sie Dateien ablegen können, und zeigt einige Metadaten an.

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
