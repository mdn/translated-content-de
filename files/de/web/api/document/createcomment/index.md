---
title: "Document: createComment()-Methode"
short-title: createComment()
slug: Web/API/Document/createComment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`createComment()`** erstellt einen neuen Kommentar-Knoten und gibt
ihn zurück.

## Syntax

```js-nolint
createComment(data)
```

### Parameter

- `data`
  - : Ein String, der die hinzuzufügenden Daten zum Kommentar enthält.

### Rückgabewert

Ein neues [`Comment`](/de/docs/Web/API/Comment)-Objekt.

## Beispiele

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const comment = docu.createComment(
  "This is a not-so-secret comment in your document",
);

docu.querySelector("xml").appendChild(comment);

console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
