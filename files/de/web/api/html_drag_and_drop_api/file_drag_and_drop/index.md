---
title: Dateizugriff per Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML-Drag-and-Drop-Schnittstellen ermöglichen es Webanwendungen, Dateien per Drag-and-Drop auf einer Webseite zu verwenden. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem Dateimanager der zugrunde liegenden Plattform gezogen und auf einer Webseite abgelegt werden.

Die Hauptschritte für Drag-and-Drop sind das Definieren einer _Ablagezone_ (d. h. eines Zielelements für das Ablegen von Dateien) und das Definieren von Event-Handlern für die Ereignisse [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event). Diese Schritte werden unten beschrieben, einschließlich Beispielcodeausschnitten. Der vollständige Quellcode ist im [MDN-Drag-and-Drop-Repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) verfügbar (Pull-Requests und/oder Issues sind willkommen).

Beachten Sie, dass [HTML Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) zwei verschiedene APIs definiert, um das Ziehen und Ablegen von Dateien zu unterstützen. Eine API ist das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interface und die zweite API ist das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Interface. Dieses Beispiel illustriert die Verwendung beider APIs (und verwendet keine gecko-spezifischen Schnittstellen).

## Definieren Sie die Ablagezone

Das _Zielelement_ des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses benötigt einen `ondrop`-Event-Handler. Der folgende Codeausschnitt zeigt, wie dies mit einem {{HTMLelement("div")}}-Element gemacht wird:

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Typischerweise wird eine Anwendung einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Event-Handler auf dem Ablageziel-Element enthalten, und dieser Handler wird das Standard-Drag-Verhalten des Browsers deaktivieren. Um diesen Handler hinzuzufügen, müssen Sie einen [`ondragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Event-Handler enthalten:

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Schließlich möchte eine Anwendung das Ablageziel-Element möglicherweise stylen, um visuell anzuzeigen, dass das Element eine Ablagezone ist. In diesem Beispiel verwendet das Ablageziel-Element die folgende Stilgebung:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Note:** Die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) werden nicht ausgelöst, wenn eine Datei vom Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann OS-Dateien in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Das bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Bild/Cursor-Overlay anzuwenden, wenn Dateien vom Betriebssystem gezogen werden — weil der Drag-Daten-Speicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeiten der Ablage

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) ablegt. Im folgenden Ablage-Handler wird, wenn der Browser das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Interface unterstützt, die Methode [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) verwendet, um auf jede Datei zuzugreifen; andernfalls wird die [`files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces verwendet, um auf jede Datei zuzugreifen.

Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei in die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mit der [File API](/de/docs/Web/API/File_API) verarbeiten.

In diesem Beispiel wird beachtet, dass jedes Drag-Element, das keine Datei ist, ignoriert wird.

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

## Verhindern des Standard-Drag-Verhaltens des Browsers

Der folgende [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Event-Handler ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Standard-Drag-and-Drop-Handler des Browsers zu deaktivieren.

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Vorgänge ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
