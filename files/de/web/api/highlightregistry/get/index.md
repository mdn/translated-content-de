---
title: "HighlightRegistry: get() Methode"
short-title: get()
slug: Web/API/HighlightRegistry/get
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`get()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Interfaces liefert das benannte [`Highlight`](/de/docs/Web/API/Highlight) Objekt aus dem Register zurück.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.get()")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des `Highlight` Objekts, das aus dem Register zurückgegeben werden soll. Der Name muss ein {{jsxref("String")}} sein.

### Rückgabewert

Das `Highlight` Objekt, das mit dem angegebenen Namen verknüpft ist, oder {{jsxref("undefined")}}, wenn der Name im `HighlightRegistry` nicht gefunden werden kann.

## Beispiele

Das folgende Codebeispiel zeigt, wie ein neues `Highlight` erstellt, dem Register hinzugefügt und anschließend mithilfe der `get()` Methode über seinen Namen abgerufen werden kann:

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

console.log(CSS.highlights.get("foo")); // Returns the fooHighlight object.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Texthighlightings im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
