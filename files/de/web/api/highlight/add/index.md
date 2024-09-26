---
title: "Highlight: add()-Methode"
short-title: add()
slug: Web/API/Highlight/add
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`add()`**-Methode des {{domxref("Highlight")}}-Interfaces fügt ein neues {{domxref("Range")}}-Objekt zu einem Highlight hinzu, das mit der {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} gestaltet werden soll.

`Highlight` ist ein objektähnliches {{jsxref("Set")}}, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.add()")}}.

## Syntax

```js-nolint
add(range)
```

### Parameter

- `range`
  - : Ein {{domxref("Range")}}-Objekt, das dem `Highlight` hinzugefügt werden soll.

### Rückgabewert

Das `Highlight`-Objekt mit dem hinzugefügten Range.

## Beispiele

Der folgende Codeausschnitt zeigt, wie zwei Ranges zu einem neuen Highlight-Objekt hinzugefügt werden:

```js
const highlight = new Highlight();

const range1 = new Range();
const range2 = new Range();

highlight.add(range1).add(range2);

console.log(highlight.size); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)