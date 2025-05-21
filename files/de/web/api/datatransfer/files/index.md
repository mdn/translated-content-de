---
title: "DataTransfer: files-Eigenschaft"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: 09cc618e47efb40e15a3b6ff60557a455cf76ef8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`files`** schreibgeschützte Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten ist eine [Liste der Dateien](/de/docs/Web/API/FileList) in der Drag-Operation. Wenn die Operation keine Dateien umfasst, ist die Liste leer.

Diese Funktion kann verwendet werden, um Dateien vom Desktop eines Benutzers in den Browser zu ziehen.

> [!NOTE]
> Die `files`-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten kann nur innerhalb der [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse zugegriffen werden. Bei allen anderen Ereignissen wird die `files`-Eigenschaft leer sein, da ihr zugrunde liegender Datenspeicher sich in einem [geschützten Modus](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store) befindet.

## Wert

Eine [`Liste`](/de/docs/Web/API/FileList) der Dateien in einer Drag-Operation, wobei jeder Listeneintrag einer Datei in der Operation entspricht. Wenn die Drag-Operation keine Dateien enthielt, ist die Liste leer.

## Beispiele

Es gibt zwei Live-Beispiele für diese Schnittstelle:

- Nur Firefox: <https://jsfiddle.net/9C2EF/>
- Alle Browser: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
