---
title: Datei-Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag and Drop Schnittstellen ermöglichen Webanwendungen, Dateien auf eine Webseite zu ziehen und fallen zu lassen. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem zugrunde liegenden _Dateimanager_ gezogen und auf eine Webseite fallen gelassen werden.

Die Hauptschritte für Drag-and-Drop sind die Definition einer _Ablagezone_ (d.h. eines Zielelements für das Ablegen der Datei) und die Definition von Ereignishandlern für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse. Diese Schritte werden unten beschrieben, einschließlich Beispielcode-Snippets. Der vollständige Quellcode ist im [MDN's drag-and-drop repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) verfügbar (Pull-Requests und/oder Issues sind willkommen).

Beachten Sie, dass [HTML drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) zwei verschiedene APIs definiert, um das Ziehen und Ablegen von Dateien zu unterstützen. Eine API ist die [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstelle und die zweite API sind die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Schnittstellen. Dieses Beispiel veranschaulicht die Verwendung beider APIs (und verwendet keine Gecko-spezifischen Schnittstellen).

## Die Ablagezone definieren

Das _Zielelement_ des [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisses benötigt einen `ondrop` Ereignishandler. Das folgende Code-Snippet zeigt, wie dies mit einem {{HTMLelement("div")}} Element gemacht wird:

```html
<div id="drop_zone">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

```js
document.getElementById("drop_zone").addEventListener("drop", dropHandler);
```

In der Regel wird eine Anwendung einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler auf dem Ziel für das Ablegen einschließen, und dieser Handler wird das standardmäßige Drag-Verhalten des Browsers deaktivieren. Um diesen Handler hinzuzufügen, müssen Sie einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler einschließen:

```js
document
  .getElementById("drop_zone")
  .addEventListener("dragover", dragOverHandler);
```

Zuletzt möchte eine Anwendung möglicherweise das Ziel für das Ablegen stilistisch gestalten, um visuell anzuzeigen, dass das Element eine Ablagezone ist. In diesem Beispiel verwendet das Ziel für das Ablegen die folgende Stilgestaltung:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Hinweis:** [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse werden nicht ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann Betriebssystemdateien in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Das bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Bild/Zeigeroverlay beim Ziehen von Dateien aus dem Betriebssystem anzuwenden - da der Drag-Datenspeicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Den Drop verarbeiten

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) ablegt. Im folgenden Drop-Handler, wenn der Browser die [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Schnittstelle unterstützt, wird die [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) Methode verwendet, um auf jede Datei zuzugreifen; andernfalls wird die [`files`](/de/docs/Web/API/DataTransfer/files) Eigenschaft der [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstelle verwendet, um auf jede Datei zuzugreifen.

Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei in die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mit der [File API](/de/docs/Web/API/File_API) verarbeiten.

Beachten Sie, dass in diesem Beispiel jedes Drag-Element ignoriert wird, das keine Datei ist.

```js
function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
```

## Das standardmäßige Drag-Verhalten des Browsers verhindern

Der folgende [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um das standardmäßige Drag-and-Drop-Handler des Browsers zu deaktivieren.

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
