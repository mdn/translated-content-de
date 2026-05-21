---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Ein Objekt vom Typ `bookmarks.BookmarkTreeNode` repräsentiert einen Knoten im Lesezeichenbaum, wobei jeder Knoten ein Lesezeichen, ein Lesezeichenordner oder ein Trennzeichen ist. Kindknoten sind durch einen `index` innerhalb ihrer jeweiligen übergeordneten Ordner geordnet.

## Typ

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `children` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von `bookmarks.BookmarkTreeNode`-Objekten, die die Kinder des Knotens darstellen. Die Liste ist in der Reihenfolge, in der die Kinder in der Benutzeroberfläche erscheinen, sortiert. Dieses Feld wird weggelassen, wenn der Knoten kein Ordner ist.
- `dateAdded` {{optional_inline}}
  - : Eine Zahl, die das Erstellungsdatum des Knotens in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time) darstellt.
- `dateGroupModified` {{optional_inline}}
  - : Eine Zahl, die das Datum und die Uhrzeit darstellt, an dem sich der Inhalt dieses Ordners zuletzt geändert hat, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `id`
  - : Eine {{jsxref("String")}}, die den Knoten eindeutig identifiziert. Jede ID ist innerhalb des Benutzerprofils einzigartig und bleibt über Neustarts des Browsers hinweg unverändert.
- `index` {{optional_inline}}
  - : Eine Zahl, die die nullbasierte Position dieses Knotens innerhalb seines übergeordneten Ordners darstellt, wobei null der erste Eintrag ist.
    > [!NOTE]
    > Wenn Sie mehrere Lesezeichen erstellen oder verschieben, können, da die Methoden {{WebExtAPIRef("bookmarks.create()")}} und {{WebExtAPIRef("bookmarks.move()")}} asynchron sind, die Anforderungen in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert jedes Lesezeichen-Indexes ändern oder unbekannt sein, bis alle Anforderungen abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung von Bedeutung ist, sollte die Erweiterung beim Erstellen oder Verschieben mehrerer Lesezeichen warten, bis jeder `bookmarks.create`- oder `bookmarks.move`-Aufruf abgeschlossen ist, bevor das nächste Lesezeichen erstellt oder verschoben wird. Das Warten stellt sicher, dass der Index, der jedem Lesezeichen zugeordnet ist, nicht von einem Erstellungs- oder Verschiebeaufruf beeinflusst wird, der gleichzeitig ausgeführt wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.
- `parentId` {{optional_inline}}
  - : Eine {{jsxref("String")}}, die die ID des übergeordneten Ordners angibt. Diese Eigenschaft ist im Stammknoten nicht vorhanden.
- `title`
  - : Eine {{jsxref("String")}}, die den Text enthält, der für den Knoten in Menüs und Listen von Lesezeichen angezeigt wird.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}-Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder einen Trennzeichen handelt. Standardmäßig wird `"bookmark"` verwendet, es sei denn, `url` fehlt, in diesem Fall ist der Standardwert `"folder"`.
- `unmodifiable` {{optional_inline}}
  - : Eine {{jsxref("String")}}, wie im Typ {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} beschrieben. Repräsentiert den Grund, warum der Knoten nicht geändert werden kann. Wenn der Knoten geändert werden kann, wird dies weggelassen.
- `url` {{optional_inline}}
  - : Eine {{jsxref("String")}}, die die URL für das Lesezeichen darstellt. Wenn der Knoten einen Ordner darstellt, wird diese Eigenschaft weggelassen.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNode) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.
