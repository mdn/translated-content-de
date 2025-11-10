---
title: "ContentVisibilityAutoStateChangeEvent: ContentVisibilityAutoStateChangeEvent() Konstruktor"
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Containment")}}

Der **`ContentVisibilityAutoStateChangeEvent()`** Konstruktor erstellt eine neue Instanz eines [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent) Objekt.

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
      - : Ein boolescher Wert, der auf `true` gesetzt ist, wenn der User Agent [den Inhalt des Elements überspringt](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents), oder `false` andernfalls.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `ContentVisibilityAutoStateChangeEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignisses ausgelöst wird.

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

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
