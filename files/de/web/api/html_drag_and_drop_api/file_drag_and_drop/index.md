---
title: Datei-Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Wie auf [der Startseite](/de/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage) erwähnt, modelliert die Drag and Drop API gleichzeitig drei Anwendungsfälle: das Ziehen von Elementen innerhalb einer Seite, das Ziehen von Daten aus einer Seite heraus und das Ziehen von Daten in eine Seite hinein. Dieses Tutorial demonstriert den dritten Anwendungsfall: das Ziehen von Daten in eine Seite. Wir implementieren eine einfache Ablagezone, die es dem Benutzer erlaubt, Bilddateien aus dem Datei-Explorer des Betriebssystems auf die Seite zu ziehen und dort anzuzeigen. Für Benutzer, die drag and drop nicht nutzen können oder wollen, bieten wir auch die alternative Funktionalität der Dateiauswahl über ein `<input>`-Element an.

## Grundlegendes Seitenlayout

Da wir auch normale `<input>`-Dateiauswahl erlauben wollen, macht es Sinn, dass die Ablagezone durch ein `<input>`-Element gestützt wird, damit wir gleichzeitig Dateien hineinziehen und es anklicken können. Wir nutzen einen häufigen Trick, indem wir das `<input>` unsichtbar machen und stattdessen das zugehörige {{HTMLElement("label")}} für die Interaktion mit den Benutzern verwenden, weil `<label>`-Elemente viel einfacher zu stylen sind. Wir fügen auch die Elemente für die Vorschau der abgelegten Bilder hinzu.

```html live-sample___file-dnd
<label id="drop-zone">
  Drop images here, or click to upload.
  <input type="file" id="file-input" multiple accept="image/*" />
</label>
<ul id="preview"></ul>
<button id="clear-btn">Clear</button>
```

Wir stylen das Label-Element, um visuell anzuzeigen, dass es sich um eine Ablagezone handelt, und verstecken das Datei-Eingabefeld.

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

Dadurch, dass wir die `<label>` und `<input>`-Elemente verwenden, ist kein zusätzliches JavaScript notwendig, um die Dateiauswahl-Benutzererfahrung zu implementieren. Wir konzentrieren uns nun auf das Ablegen von Dateien und die anschließende Verarbeitung der abgelegten Dateien.

## Deklarieren des Ablageziels

Unser Ablageziel ist das `<label>`-Element. Als _Zielelement_ lauscht es auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis, um die abgelegte Datei zu verarbeiten.

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("drop", dropHandler);
```

Beim Ablegen von Dateien kann der Browser standardmäßig mit ihnen umgehen (z.B. sie öffnen oder herunterladen), selbst wenn die Datei nicht in ein gültiges Ablageziel fallen gelassen wird. Um dieses Verhalten zu verhindern, müssen wir auch auf das `drop`-Ereignis auf `window` hören und es abbrechen. Wir achten darauf, das Ereignis nur dann zu behandeln, wenn eine Datei gezogen wird; wenn es etwas anderes ist, wie ein Link, verwenden wir das Standardverhalten. Wenn das gezogene Element eine Nicht-Bild-Datei ist, behandeln wir das Ereignis trotzdem, geben dem Benutzer jedoch Feedback, dass es nicht erlaubt ist.

```js live-sample___file-dnd
window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});
```

Damit das `drop`-Ereignis ausgelöst wird, muss das Element auch das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis abbrechen. Da wir auf `drop` auf `window` lauschen, müssen wir auch das `dragover`-Ereignis für das gesamte `window` abbrechen. Wir setzen auch [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) auf `none`, wenn die Datei kein Bild ist oder nicht an den richtigen Ort gezogen wird.

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
> [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse werden nicht ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann Dateien vom Betriebssystem in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Das bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Bild/Cursor-Overlay beim Ziehen von Dateien aus dem Betriebssystem anzuwenden — da der Drag-Datenspeicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis geändert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeitung des Ablagevorgangs

Nun implementieren wir den `dropHandler` mit der Methode [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile), um auf jede Datei zuzugreifen. Dann kann Ihre Anwendung entscheiden, wie diese Datei mit der [File API](/de/docs/Web/API/File_API) verarbeitet wird. Hier stellen wir sie einfach auf der Seite dar; in der Praxis möchten Sie sie wahrscheinlich auch irgendwann auf den Server hochladen.

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

## Dasselbe Verhalten dem Input hinzufügen

Das obige ist der gesamte Datenfluss für das Drag and Drop; nun müssen wir die Funktion `displayImages()` auch an das Datei-Eingabefeld anbinden.

```js live-sample___file-dnd
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
  displayImages(e.target.files);
});
```

## Löschen-Button

Schließlich fügen wir eine Möglichkeit hinzu, den Vorschaubereich zu löschen. Wir verwenden [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um den durch die Bildobjekte belegten Speicher freizugeben.

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
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
