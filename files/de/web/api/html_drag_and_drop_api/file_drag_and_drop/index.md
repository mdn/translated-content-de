---
title: Datei ziehen und ablegen
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag and Drop-Schnittstellen ermöglichen es Webanwendungen, Dateien auf einer Webseite zu ziehen und abzulegen. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem _Dateimanager_ des zugrunde liegenden Systems gezogen und auf eine Webseite abgelegt werden.

Die Hauptschritte zum Ziehen und Ablegen bestehen darin, eine _Ablagezone_ (d.h. ein Ziel-Element für das Ablegen der Datei) zu definieren und Ereignishandler für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse zu definieren. Diese Schritte werden unten beschrieben, einschließlich Beispiel-Codeausschnitten. Der vollständige Quellcode ist im [MDN's Drag-and-Drop Repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) verfügbar (Pull-Anfragen und/oder Probleme sind willkommen).

Beachten Sie, dass das [HTML Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) zwei verschiedene APIs definiert, um das Ziehen und Ablegen von Dateien zu unterstützen. Eine API ist die [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstelle und die zweite API sind die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Schnittstellen. Dieses Beispiel illustriert die Verwendung beider APIs (und verwendet keine Gecko-spezifischen Schnittstellen).

## Definition der Ablagezone

Das _Ziel-Element_ des [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisses benötigt einen `ondrop`-Ereignishandler. Der folgende Codeausschnitt zeigt, wie dies mit einem {{HTMLelement("div")}} Element erfolgt:

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Typischerweise wird eine Anwendung einen [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler auf das Ablagezonen-Element einfügen, und dieser Handler wird das Standard-Ziehverhalten des Browsers deaktivieren. Um diesen Handler hinzuzufügen, müssen Sie einen [`ondragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler einfügen:

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Schließlich möchte eine Anwendung möglicherweise das Ablagezonen-Element so stylen, dass es visuell als Ablagezone erkennbar ist. In diesem Beispiel verwendet das Ablagezonen-Element folgendes Styling:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Hinweis:** [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse werden nicht ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann Dateien vom Betriebssystem in den Browser gezogen werden, verwenden Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event).
> Das bedeutet, dass es nicht möglich ist, [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) zu verwenden, um ein benutzerdefiniertes Drag-Bild/Cursor-Overlay anzuwenden, wenn Dateien aus dem Betriebssystem gezogen werden — weil der Drag-Daten-Speicher nur im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis modifiziert werden kann. Dies gilt auch für [`setData()`](/de/docs/Web/API/DataTransfer/setData).

## Verarbeitung des Drops

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) ablegt. Im folgenden Drop-Handler wird, wenn der Browser die [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Schnittstelle unterstützt, die [`getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile) Methode verwendet, um auf jede Datei zuzugreifen; andernfalls wird die [`files`](/de/docs/Web/API/DataTransfer/files) Eigenschaft der [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstelle verwendet, um auf jede Datei zuzugreifen.

Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei auf die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mit der [File API](/de/docs/Web/API/File_API) verarbeiten.

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

Der folgende [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignishandler ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um den Standard-Zieh-und Ablegen-Handler des Browsers zu deaktivieren.

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Zug-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
