---
title: "ContentVisibilityAutoStateChangeEvent: ContentVisibilityAutoStateChangeEvent()-Konstruktor"
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Der **`ContentVisibilityAutoStateChangeEvent()`**-Konstruktor erstellt eine neue Instanz des {{domxref("ContentVisibilityAutoStateChangeEvent")}}-Objekts.

## Syntax

```js-nolint
new ContentVisibilityAutoStateChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events repräsentiert. Im Fall von `ContentVisibilityAutoStateChangeEvent` ist dies immer `event`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `skipped`
      - : Ein Wahrheitswert (boolean), der auf `true` gesetzt ist, wenn der Benutzeragent [die Inhalte des Elements überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents), oder `false` andernfalls.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `ContentVisibilityAutoStateChangeEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}-Events aufgerufen wird.

```js
canvasElem.addEventListener("contentvisibilityautostatechange", (event) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} Event
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
