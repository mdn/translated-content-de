---
title: Datei Drag & Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Wie auf der [Einstiegsseite](/de/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage) erwähnt, modelliert die Drag and Drop API gleichzeitig drei Anwendungsfälle: Elemente innerhalb einer Seite ziehen, Daten aus einer Seite herausziehen und Daten in eine Seite hineinziehen. In diesem Tutorial demonstrieren wir den dritten Anwendungsfall: das Ziehen von Daten in eine Seite. Wir werden eine grundlegende Ablagezone implementieren, die es dem Benutzer ermöglicht, Bilddateien aus dem Dateiexplorer des Betriebssystems abzulegen und sie auf der Seite anzuzeigen. Für Benutzer, die Drag and Drop nicht nutzen können oder wollen, bieten wir auch die alternative Möglichkeit der Dateiauswahl über ein `<input>`-Element an.

## Grundlegendes Seitenlayout

Da wir auch die normale `<input>`-Dateiauswahl ermöglichen wollen, macht es Sinn, dass die Ablagezone durch ein `<input>`-Element unterstützt wird, sodass wir sowohl Dateien hineinziehen als auch darauf klicken können. Wir nutzen einen gängigen Trick, bei dem das `<input>`-Element unsichtbar gemacht wird und sein zugehöriges {{HTMLElement("label")}} zur Interaktion mit dem Benutzer verwendet wird, da `<label>`-Elemente viel einfacher zu gestalten sind. Wir fügen auch die Elemente zum Vorschau der abgelegten Bilder hinzu.

```html live-sample___file-dnd
<label id="drop-zone">
  Drop images here, or click to upload.
  <input type="file" id="file-input" multiple accept="image/*" />
</label>
<ul id="preview"></ul>
<button id="clear-btn">Clear</button>
```

Wir gestalten das Label-Element so, dass es visuell anzeigt, dass es sich um eine Ablagezone handelt, und verstecken das Datei-Input.

```css live-sample___file-dnd
body {
  font-family: "Arial", sans-serif;
}

#drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  height: 200px;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: slategray;
  cursor: pointer;
}

#file-input {
  display: none;
}

#preview {
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
  padding: 0;
}

#preview li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  width: 100%;
  height: 100px;
}

#preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
```

Da wir die `<label>`- und `<input>`-Elemente verwenden, ist kein zusätzlicher JavaScript-Code nötig, um die Dateiauswahl-UX zu implementieren. Wir konzentrieren uns jetzt auf das Ablegen der Dateien und die anschließende Verarbeitung der abgelegten Dateien.

## Die Ablageziel deklarieren

Unser Ablageziel ist das `<label>`-Element. Als _Zielelement_ hört es auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis, um die abgelegte Datei zu verarbeiten.

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("drop", dropHandler);
```

Beim Ablegen von Dateien kann der Browser diese standardmäßig verarbeiten (z. B. öffnen oder herunterladen), selbst wenn die Datei nicht in ein gültiges Ablageziel abgelegt wird. Um dieses Verhalten zu verhindern, müssen wir auch das `drop`-Ereignis auf `window` hören und es abbrechen. Wir achten darauf, das Ereignis nur zu behandeln, wenn eine Datei gezogen wird; wenn es sich um etwas anderes handelt, wie z.B. einen Link, verwenden wir weiterhin das Standardverhalten. Wenn das gezogene Element eine Nicht-Bild-Datei ist, behandeln wir das Ereignis dennoch, geben jedoch dem Benutzer eine Rückmeldung, dass es nicht erlaubt ist.

```js live-sample___file-dnd
window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});
```

Damit das `drop`-Ereignis ausgelöst wird, muss das Element auch das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis abbrechen. Da wir auf `window` für `drop` hören, müssen wir auch das `dragover`-Ereignis für das gesamte `window` abbrechen. Wir setzen auch [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) auf `none`, wenn die Datei kein Bild ist oder nicht an der richtigen Stelle gezogen wird.

```js live-sample___file-dnd
dropZone.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (fileItems.some((item) => item.type.startsWith("image/"))) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  }
});

window.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (!dropZone.contains(e.target)) {
      e.dataTransfer.dropEffect = "none";
    }
  }
});
```

> [!NOTE]
> Die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) werden nicht ausgelöst, wenn eine Datei vom Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann OS-Dateien in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Dies bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Ziehbild- oder Cursor-Overlay beim Ziehen von Dateien aus dem Betriebssystem anzuwenden — da der Drag-Datenspeicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeitung des Ablegens

Jetzt implementieren wir den `dropHandler` mithilfe der Methode [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile), um auf jede Datei zuzugreifen. Ihre Anwendung kann dann entscheiden, wie diese Datei mithilfe der [File API](/de/docs/Web/API/File_API) verarbeitet wird. Hier zeigen wir sie einfach auf der Seite an; in der Praxis möchten Sie sie wahrscheinlich letztendlich auch auf den Server hochladen.

```js live-sample___file-dnd
const preview = document.getElementById("preview");

function displayImages(files) {
  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      li.appendChild(img);
      li.appendChild(document.createTextNode(file.name));
      preview.appendChild(li);
    }
  }
}

function dropHandler(ev) {
  ev.preventDefault();
  const files = [...ev.dataTransfer.items]
    .map((item) => item.getAsFile())
    .filter((file) => file);
  displayImages(files);
}
```

## Hinzufügen des gleichen Verhaltens zum Input

Das obige ist der gesamte Datenfluss für Drag and Drop; jetzt müssen wir die `displayImages()`-Funktion auch mit dem Datei-Input verbinden.

```js live-sample___file-dnd
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
  displayImages(e.target.files);
});
```

## Löschen-Button

Abschließend fügen wir eine Möglichkeit hinzu, den Vorschaubereich zu löschen. Wir verwenden [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um den von den Bildobjekten verwendeten Speicher freizugeben.

```js live-sample___file-dnd
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  for (const img of preview.querySelectorAll("img")) {
    URL.revokeObjectURL(img.src);
  }
  preview.textContent = "";
});
```

## Ergebnis

{{EmbedLiveSample("file-dnd", "", 500)}}

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Betrieb](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
