---
title: "HighlightRegistry: has()-Methode"
short-title: has()
slug: Web/API/HighlightRegistry/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`has()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob ein {{domxref("Highlight")}}-Objekt mit dem angegebenen Namen im Registry existiert.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Map.has()")}}.

## Syntax

```js-nolint
has(name)
```

### Parameter

- `name`
  - : Der Name des `Highlight`-Objekts, dessen Vorhandensein im Registry getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Highlight mit dem angegebenen Namen im Registry existiert; andernfalls `false`.

## Beispiele

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

myHighlight.has("foo"); // true
myHighlight.has("bar"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
