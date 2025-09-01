---
title: Datei Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 9b31cf251f5764723185ff953ca42147af8363f3
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag and Drop Schnittstellen ermöglichen es Webanwendungen, Dateien auf einer Webseite zu ziehen und abzulegen. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem Dateimanager der zugrunde liegenden Plattform gezogen und auf einer Webseite abgelegt werden.

Die Hauptschritte für Drag-and-Drop sind das Definieren einer _Ablagezone_ (d.h. ein Zielelement für das Ablegen der Datei) und das Definieren von Ereignis-Handlern für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse. Diese Schritte werden unten beschrieben, einschließlich Codebeispielen.

## Definition der Ablagezone

Das HTML definiert die Ablagezone als ein {{htmlelement("div")}} und einen Ausgabebereich ({{htmlelement("pre")}}), der später gefüllt wird.

```html live-sample___file-dnd
<div id="drop-zone">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
<pre id="output"></pre>
```

Als _Zielelement_ hört es auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis, um die abgelegte Datei zu verarbeiten.

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");
const output = document.getElementById("output");

dropZone.addEventListener("drop", dropHandler);
```

Damit das `drop` Ereignis ausgelöst wird, muss das Element auch das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis abbrechen. Hier brechen wir das Ereignis auf `window` ab (was auch das Ereignis betrifft, das auf `dropZone` gefeuert wird, da es nach oben blubbert), weil wir auch das `drop` Ereignis auf `window` hören möchten, um die Standardaktion des Browsers zu verhindern, die Datei zu öffnen, wenn sie nicht in der Ablagezone abgelegt wurde.

```js live-sample___file-dnd
window.addEventListener("dragover", (e) => {
  e.preventDefault();
});
window.addEventListener("drop", (e) => {
  e.preventDefault();
});
```

Schließlich möchte eine Anwendung möglicherweise das Ziel-Ablageelement stylen, um visuell anzuzeigen, dass das Element eine Ablagezone ist. In diesem Beispiel verwendet das Ziel-Ablageelement folgendes Styling:

```css live-sample___file-dnd
#drop-zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

```css hidden live-sample___file-dnd
div {
  margin: 0em;
  padding: 2em;
}
```

> [!NOTE]
> [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse werden nicht ausgelöst, wenn eine Datei vom Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann OS-Dateien in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Dies bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Bild/Cursor-Overlay anzuwenden, wenn Dateien vom Betriebssystem gezogen werden — da der Drag-Daten-Store nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeitung des Ablagevorgangs

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) ablegt. Im folgenden Handler für das Ablegen wird die Methode [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) verwendet, um auf jede Datei zuzugreifen. Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei in die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mithilfe der [File API](/de/docs/Web/API/File_API) verarbeiten.

Beachten Sie, dass in diesem Beispiel alle Ziehelemente, die keine Dateien sind, ignoriert werden.

```js live-sample___file-dnd
function dropHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  let result = "";
  // Use DataTransferItemList interface to access the file(s)
  [...ev.dataTransfer.items].forEach((item, i) => {
    // If dropped items aren't files, reject them
    if (item.kind === "file") {
      const file = item.getAsFile();
      result += `• file[${i}].name = ${file.name}\n`;
    }
  });
  output.textContent = result;
}
```

## Ergebnis

{{EmbedLiveSample("file-dnd", "", 300)}}

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
