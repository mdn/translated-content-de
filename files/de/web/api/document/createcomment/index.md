---
title: "Dokument: createComment()-Methode"
short-title: createComment()
slug: Web/API/Document/createComment
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

**`createComment()`** erstellt einen neuen Kommentarknoten und gibt ihn zurück.

## Syntax

```js-nolint
createComment(data)
```

### Parameter

- `data`
  - : Ein String, der die dem Kommentar hinzuzufügenden Daten enthält.

### Rückgabewert

Ein neues [`Comment`](/de/docs/Web/API/Comment)-Objekt.

## Beispiele

```js
const doc = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const comment = doc.createComment(
  "This is a not-so-secret comment in your document",
);

doc.querySelector("xml").appendChild(comment);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
