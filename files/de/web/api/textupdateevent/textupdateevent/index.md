---
title: "TextUpdateEvent: TextUpdateEvent() Konstruktor"
short-title: TextUpdateEvent()
slug: Web/API/TextUpdateEvent/TextUpdateEvent
l10n:
  sourceCommit: d03a0af8b255b1afb8a29ca38e3f136a0155eb00
---

{{APIRef("TextUpdateEvent API")}}{{SeeCompatTable}}

Der **`TextUpdateEvent()`**-Konstruktor gibt ein neues [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent)-Objekt zurück.

## Syntax

```js-nolint
new TextUpdateEvent(type)
new TextUpdateEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Mögliche Werte: `"textupdate"`.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `updateRangeStart`
      - : Eine Zahl, die den Offset des ersten Zeichens innerhalb des bearbeitbaren Textbereichs darstellt, das aktualisiert werden muss.
    - `updateRangeEnd`
      - : Eine Zahl, die den Offset des letzten Zeichens innerhalb des bearbeitbaren Textbereichs darstellt, das aktualisiert werden muss.
    - `text`
      - : Ein String, der den Text darstellt, der eingefügt werden muss.
    - `selectionStart`
      - : Eine Zahl, die den Offset des Anfangs der Auswahl innerhalb des bearbeitbaren Textbereichs darstellt.
    - `selectionEnd`
      - : Eine Zahl, die den Offset des Endes der Auswahl innerhalb des bearbeitbaren Textbereichs darstellt.
    - `compositionStart`
      - : Eine Zahl, die den Offset des Beginns der Komposition innerhalb des bearbeitbaren Textbereichs darstellt.
    - `compositionEnd`
      - : Eine Zahl, die den Offset des Endes der Komposition innerhalb des bearbeitbaren Textbereichs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent) Schnittstelle, zu der es gehört.
