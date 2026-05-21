---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Der `CreateDetails`-Typ wird verwendet, um die Eigenschaften eines neuen Lesezeichens, Lesezeichenordners oder Trennzeichens bei Aufruf der Methode {{WebExtAPIRef("bookmarks.create()")}} zu beschreiben.

## Typ

Ein {{jsxref("Object")}}, das eine Kombination der folgenden Felder enthält:

- `index` {{optional_inline}}
  - : Ein Integer {{jsxref("Number")}}, der die Position angibt, an der das neue Lesezeichen unter seinem übergeordneten Element platziert werden soll. Ein Wert von 0 setzt es an den Anfang der Liste.
- `parentId` {{optional_inline}}
  - : Ein {{jsxref("String")}}, das die ID des übergeordneten Ordners angibt, in den das neue Lesezeichen oder der neue Lesezeichenordner platziert werden soll. In Chrome und Firefox ist der Standard der Ordner "Weitere Lesezeichen" im Lesezeichen-Menü.
- `title` {{optional_inline}}
  - : Ein {{jsxref("String")}}, der den Titel des Lesezeichens oder den Namen des zu erstellenden Ordners spezifiziert. Wenn dies nicht spezifiziert ist, ist der Titel `""`.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}-Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder ein Trennzeichen handelt. Standardmäßig `"bookmark"`, es sei denn, `url` wird ausgelassen, in diesem Fall ist der Standard `"folder"`.
- `url` {{optional_inline}}
  - : `string`. Ein {{jsxref("String")}}, der die URL der Seite angibt, die als Lesezeichen hinzugefügt werden soll. Wenn dies weggelassen oder `null` ist, wird ein Ordner anstelle eines Lesezeichens erstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-CreateDetails) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.
