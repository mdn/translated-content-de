---
title: "ContentVisibilityAutoStateChangeEvent: ContentVisibilityAutoStateChangeEvent()-Konstruktor"
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Der **`ContentVisibilityAutoStateChangeEvent()`**-Konstruktor erstellt eine neue [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)-Objektinstanz.

## Syntax

```js-nolint
new ContentVisibilityAutoStateChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `ContentVisibilityAutoStateChangeEvent` ist dies immer `event`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `skipped`
      - : Ein boolescher Wert, der auf `true` gesetzt wird, wenn der User-Agent [den Inhalt des Elements überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents), andernfalls `false`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `ContentVisibilityAutoStateChangeEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignisses aufgerufen wird.

```js
canvasElem.addEventListener("contentvisibilityautostatechange", (event) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
