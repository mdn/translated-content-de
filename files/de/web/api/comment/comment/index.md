---
title: "Comment: Comment()-Konstruktor"
short-title: Comment()
slug: Web/API/Comment/Comment
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef("DOM")}}

Der **`Comment()`**-Konstruktor gibt ein neu erstelltes {{domxref("Comment")}}-Objekt zurück, das die optionale Zeichenkette als Parameter in seinem Textinhalt enthält.

## Syntax

```js-nolint
new Comment()
new Comment(content)
```

### Parameter

- `content` {{optional_inline}}
  - : Eine Zeichenkette, die den Textinhalt des Kommentars repräsentiert.

### Rückgabewert

Ein neues {{domxref("Comment")}}, das `content` enthält oder die leere Zeichenkette, wenn kein Parameter angegeben wurde.

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
- {{domxref("Document.createComment()")}} ist eine veraltete Alternative zu diesem Konstruktor.
