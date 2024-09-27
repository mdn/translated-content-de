---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein Objekt des Typs `bookmarks.BookmarkTreeNode` repräsentiert einen Knoten im Lesezeichenbaum, wobei jeder Knoten ein Lesezeichen, ein Lesezeichenordner oder ein Trenner ist. Kindknoten sind entsprechend ihrer `index` innerhalb ihrer jeweiligen übergeordneten Ordner geordnet.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `children` {{optional_inline}}
  - : Ein {{jsxref("array")}} von `bookmarks.BookmarkTreeNode` Objekten, die die Kinder des Knotens darstellen. Die Liste ist entsprechend der Reihenfolge geordnet, in der die Kinder in der Benutzeroberfläche angezeigt werden. Dieses Feld wird weggelassen, wenn der Knoten kein Ordner ist.
- `dateAdded` {{optional_inline}}
  - : Eine Zahl, die das Erstellungsdatum des Knotens in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time) darstellt.
- `dateGroupModified` {{optional_inline}}
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, wann die Inhalte dieses Ordners zuletzt geändert wurden, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `id`
  - : Eine {{jsxref("string")}}, die den Knoten eindeutig identifiziert. Jede ID ist innerhalb des Benutzerprofils eindeutig und bleibt über Neustarts des Browsers hinweg unverändert.
- `index` {{optional_inline}}
  - : Eine Zahl, die die nullbasierte Position dieses Knotens innerhalb seines übergeordneten Ordners darstellt, wobei null den ersten Eintrag repräsentiert.
    > [!NOTE]
    > Wenn Sie mehrere Lesezeichen erstellen oder verschieben, da die Methoden {{WebExtAPIRef("bookmarks.create()")}} und {{WebExtAPIRef("bookmarks.move()")}} asynchron sind, können die Anfragen in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert jedes Lesezeichen-Index ändern oder unbekannt sein, bis alle Anfragen abgeschlossen sind. Wenn der Index, der mit einem Lesezeichen verbunden ist, für Ihre Erweiterung von Bedeutung ist, sollte die Erweiterung beim Erstellen oder Verschieben mehrerer Lesezeichen darauf warten, dass jeder `bookmarks.create` oder `bookmarks.move` Aufruf abgeschlossen wird, bevor das nächste Lesezeichen erstellt oder verschoben wird. Das Warten stellt sicher, dass der mit jedem Lesezeichen verbundene Index nicht durch einen parallel ausgeführten Erstellung- oder Verschiebungsvorgang beeinflusst wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.
- `parentId` {{optional_inline}}
  - : Eine {{jsxref("string")}}, die die ID des übergeordneten Ordners angibt. Diese Eigenschaft ist im Stammknoten nicht vorhanden.
- `title`
  - : Eine {{jsxref("string")}}, die den Text enthält, der für den Knoten in Menüs und Lesezeichenlisten angezeigt wird.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder einen Trenner handelt. Standardmäßig ist es `"bookmark"`, es sei denn, `url` wird weggelassen, in welchem Fall es zu `"folder"` wird.
- `unmodifiable` {{optional_inline}}
  - : Eine {{jsxref("string")}} wie vom Typ {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} beschrieben. Repräsentiert den Grund, warum der Knoten nicht geändert werden kann. Wenn der Knoten geändert werden kann, wird dies weggelassen.
- `url` {{optional_inline}}
  - : Eine {{jsxref("string")}}, die die URL für das Lesezeichen darstellt. Wenn der Knoten einen Ordner repräsentiert, wird diese Eigenschaft weggelassen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNode). Diese Dokumentation leitet sich aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code ab.
