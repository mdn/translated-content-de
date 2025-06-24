---
title: Datei-Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag-and-Drop-Schnittstellen ermöglichen es Webanwendungen, Dateien auf eine Webseite zu ziehen und fallen zu lassen. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem _Dateimanager_ der zugrunde liegenden Plattform gezogen und auf einer Webseite abgelegt werden.

Die Hauptschritte zum Ziehen und Ablegen bestehen darin, eine _Ablagezone_ zu definieren (d.h. ein Zielelement für das Ablegen der Datei) und Ereignis-Handler für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse zu definieren. Diese Schritte werden unten beschrieben, einschließlich Beispiel-Code-Snippets. Der vollständige Quellcode ist im [MDN Drag-and-Drop-Repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) verfügbar (Pull-Requests und/oder Probleme sind willkommen).

Beachten Sie, dass [HTML Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) zwei verschiedene APIs definiert, um das Ziehen und Ablegen von Dateien zu unterstützen. Eine API ist das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interface und die zweite API sind die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)- und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstellen. Dieses Beispiel veranschaulicht die Verwendung beider APIs (und verwendet keine spezifischen Gecko-Schnittstellen).

## Definieren Sie die Ablagezone

Das _Zielelement_ des [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses benötigt einen `ondrop`-Ereignis-Handler. Das folgende Code-Snippet zeigt, wie dies mit einem {{HTMLelement("div")}}-Element gemacht wird:

```html
<div id="drop_zone">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

```js
document.getElementById("drop_zone").addEventListener("drop", dropHandler);
```

Typischerweise wird eine Anwendung einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis-Handler auf dem Ablageziel-Element einschließen und dieser Handler wird das Standard-Zieh-Verhalten des Browsers deaktivieren. Um diesen Handler hinzuzufügen, müssen Sie einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis-Handler einschließen:

```js
document
  .getElementById("drop_zone")
  .addEventListener("dragover", dragOverHandler);
```

Schließlich möchte eine Anwendung möglicherweise das Ablageziel-Element gestalten, um visuell anzuzeigen, dass das Element eine Ablagezone ist. In diesem Beispiel verwendet das Ablageziel-Element die folgende Formatierung:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> [!NOTE]
> Die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse werden nicht ausgelöst, wenn eine Datei vom Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann Betriebssystemdateien in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Dies bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Image/Cursor-Overlay anzuwenden, wenn Dateien vom Betriebssystem gezogen werden — weil der Drag-Daten-Speicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeiten des Ablagevorgangs

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) ablegt. Im folgenden Ablage-Handler, wenn der Browser die [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstelle unterstützt, wird die Methode [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) verwendet, um auf jede Datei zuzugreifen; andernfalls wird die [`files`](/de/docs/Web/API/DataTransfer/files)-Eigenschaft der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle verwendet, um auf jede Datei zuzugreifen.

Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei in die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mit der [File API](/de/docs/Web/API/File_API) verarbeiten.

Beachten Sie, dass in diesem Beispiel jedes Ziehelement, das keine Datei ist, ignoriert wird.

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

## Deaktivieren des Standard-Zieh-Verhaltens des Browsers

Der folgende [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis-Handler ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Standard-Zieh-und-Ablege-Handler des Browsers zu deaktivieren.

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
