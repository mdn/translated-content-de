---
title: "DataTransfer: files-Eigenschaft"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`files`**-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten ist eine [Liste der Dateien](/de/docs/Web/API/FileList) im Drag-Vorgang. Wenn der Vorgang keine Dateien umfasst, ist die Liste leer.

Dieses Feature kann verwendet werden, um Dateien vom Desktop eines Benutzers in den Browser zu ziehen.

> [!NOTE]
> Die `files`-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten kann nur innerhalb des `drop`-Ereignisses zugegriffen werden. Bei allen anderen Ereignissen ist die `files`-Eigenschaft leer — da ihr zugrunde liegender Datenspeicher sich im [geschützten Modus](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store) befindet.

## Wert

Eine {{domxref("FileList","Liste")}} der Dateien in einem Drag-Vorgang, ein Listenelement für jede Datei im Vorgang. Wenn der Drag-Vorgang keine Dateien hatte, ist die Liste leer.

## Beispiele

Es gibt zwei Live-Beispiele zu diesem Interface:

- Nur Firefox: <https://jsfiddle.net/9C2EF/>
- Alle Browser: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
