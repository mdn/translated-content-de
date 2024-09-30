---
title: "Comment: Comment() Konstruktor"
short-title: Comment()
slug: Web/API/Comment/Comment
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef("DOM")}}

Der **`Comment()`** Konstruktor gibt ein neu erstelltes [`Comment`](/de/docs/Web/API/Comment)-Objekt mit dem optional übergebenen String als Textinhalt zurück.

## Syntax

```js-nolint
new Comment()
new Comment(content)
```

### Parameter

- `content` {{optional_inline}}
  - : Ein String, der den Textinhalt des Kommentars darstellt.

### Rückgabewert

Ein neues [`Comment`](/de/docs/Web/API/Comment), das `content` enthält, oder ein leerer String, wenn kein Parameter angegeben wurde.

## Beispiel

```js
const comment = new Comment("Test");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
- [`Document.createComment()`](/de/docs/Web/API/Document/createComment) ist eine veraltete Alternative zu diesem Konstruktor.
