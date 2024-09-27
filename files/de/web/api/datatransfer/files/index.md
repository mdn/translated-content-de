---
title: "DataTransfer: files-Eigenschaft"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Die **`files`** schreibgeschützte Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten ist eine [Liste der Dateien](/de/docs/Web/API/FileList) in der Ziehung-Operation. Falls die Operation keine Dateien umfasst, ist die Liste leer.

Diese Funktion kann verwendet werden, um Dateien vom Desktop eines Benutzers in den Browser zu ziehen.

> [!NOTE]
> Die `files`-Eigenschaft von [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekten kann nur innerhalb des `drop`-Ereignisses zugegriffen werden. Für alle anderen Ereignisse wird die `files`-Eigenschaft leer sein, da der zugrunde liegende Datenspeicher in einem [geschützten Modus](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store) ist.

## Wert

Eine [`Liste`](/de/docs/Web/API/FileList) der Dateien in einer Ziehung-Operation, ein Listenelement für jede Datei in der Operation. Wenn die Ziehung-Operation keine Dateien enthielt, ist die Liste leer.

## Beispiele

Es gibt zwei Live-Beispiele für dieses Interface:

- Nur Firefox: <https://jsfiddle.net/9C2EF/>
- Alle Browser: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
