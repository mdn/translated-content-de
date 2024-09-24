---
title: Dateien per Drag and Drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML-Drag-and-Drop-Schnittstellen ermöglichen es Webanwendungen, Dateien auf einer Webseite zu ziehen und abzulegen. Dieses Dokument beschreibt, wie eine Anwendung eine oder mehrere Dateien akzeptieren kann, die aus dem _Dateimanager_ des zugrunde liegenden Betriebssystems gezogen und auf einer Webseite abgelegt werden.

Die Hauptschritte zum Ziehen und Ablegen sind das Definieren einer _Ablagezone_ (d. h. eines Zielelements für das Datei-Drop) und das Definieren von Ereignishandlern für die {{domxref("HTMLElement/drop_event", "drop")}}- und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse. Diese Schritte werden unten beschrieben, einschließlich einiger Codebeispiele. Der gesamte Quellcode ist im [MDN-Drag-and-Drop-Repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) verfügbar (Pull-Anfragen und/oder Issues sind willkommen).

Beachten Sie, dass [HTML Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) zwei verschiedene APIs definiert, um das Ziehen und Ablegen von Dateien zu unterstützen. Eine API ist die {{domxref("DataTransfer")}}-Schnittstelle und die zweite API sind die {{domxref("DataTransferItem")}}- und {{domxref("DataTransferItemList")}}-Schnittstellen. Dieses Beispiel veranschaulicht die Verwendung beider APIs (und verwendet keine Gecko-spezifischen Schnittstellen).

## Definieren Sie die Ablagezone

Das _Ziel-Element_ des {{domxref("HTMLElement/drop_event", "drop")}}-Ereignisses benötigt einen `ondrop`-Ereignishandler. Das folgende Codebeispiel zeigt, wie dies mit einem {{HTMLelement("div")}}-Element durchgeführt wird:

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Ziehen Sie eine oder mehrere Dateien in diese <i>Ablagezone</i>.</p>
</div>
```

Typischerweise wird eine Anwendung einen {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignishandler auf das Drop-Zielelement einschließen, und dieser Handler wird das Standard-Ziehen-Verhalten des Browsers deaktivieren. Um diesen Handler hinzuzufügen, müssen Sie einen {{domxref("HTMLElement.dragover_event","ondragover")}}-Ereignishandler einfügen:

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Ziehen Sie eine oder mehrere Dateien in diese <i>Ablagezone</i>.</p>
</div>
```

Zuletzt möchte eine Anwendung möglicherweise das Drop-Zielelement gestalten, um visuell anzuzeigen, dass es sich um eine Ablagezone handelt. In diesem Beispiel verwendet das Drop-Zielelement die folgende Stilgestaltung:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Hinweis:** {{domxref("HTMLElement/dragstart_event", "dragstart")}}- und {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignisse werden nicht ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird. Um zu erkennen, wann OS-Dateien in den Browser gezogen werden, verwenden Sie {{domxref("HTMLElement/dragenter_event", "dragenter")}} und {{domxref("HTMLElement/dragleave_event", "dragleave")}}.
> Das bedeutet, dass es nicht möglich ist, {{domxref("DataTransfer.setDragImage","setDragImage()")}} zu verwenden, um ein benutzerdefiniertes Ziehbild/Cursor-Overlay anzuwenden, wenn Dateien aus dem Betriebssystem gezogen werden – da der Ziehdatenspeicher nur im {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis modifiziert werden kann. Dies gilt auch für {{domxref("DataTransfer.setData","setData()")}}.

## Verarbeiten des Drops

Das {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis wird ausgelöst, wenn der Benutzer die Datei(en) fallen lässt. Im folgenden Drop-Handler wird, wenn der Browser die {{domxref("DataTransferItemList")}}-Schnittstelle unterstützt, die {{domxref("DataTransferItem.getAsFile","getAsFile()")}}-Methode verwendet, um auf jede Datei zuzugreifen; andernfalls wird die {{domxref("DataTransfer")}}-Schnittstelle mit der {{domxref("DataTransfer.files","files")}}-Eigenschaft verwendet, um auf jede Datei zuzugreifen.

Dieses Beispiel zeigt, wie der Name jeder gezogenen Datei in die Konsole geschrieben wird. In einer _echten_ Anwendung möchte eine Anwendung möglicherweise eine Datei mit der [File API](/de/docs/Web/API/File_API) verarbeiten.

Beachten Sie, dass in diesem Beispiel jedes Ziehelement, das keine Datei ist, ignoriert wird.

```js
function dropHandler(ev) {
  console.log("Datei(en) fallengelassen");

  // Standardverhalten verhindern (Verhindern, dass die Datei geöffnet wird)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Verwenden Sie die DataTransferItemList-Schnittstelle, um auf die Datei(en) zuzugreifen
    [...ev.dataTransfer.items].forEach((item, i) => {
      // Wenn abgelegte Elemente keine Dateien sind, lehnen Sie sie ab
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Verwenden Sie die DataTransfer-Schnittstelle, um auf die Datei(en) zuzugreifen
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
```

## Verhindern des Standardziehverhaltens des Browsers

Der folgende {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignishandler ruft {{domxref("Event.preventDefault","preventDefault()")}} auf, um den Standard-Ziehen-und-Ablegen-Handler des Browsers zu deaktivieren.

```js
function dragOverHandler(ev) {
  console.log("Datei(en) in der Ablagezone");

  // Standardverhalten verhindern (Verhindern, dass die Datei geöffnet wird)
  ev.preventDefault();
}
```

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
