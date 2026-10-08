---
title: "HighlightRegistry: Methode delete()"
short-title: delete()
slug: Web/API/HighlightRegistry/delete
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("CSS Custom Highlight API")}}

Die Methode **`delete()`** der Schnittstelle [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) entfernt das benannte [`Highlight`](/de/docs/Web/API/Highlight)-Objekt aus der `HighlightRegistry`.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt. Die Methode funktioniert daher ähnlich wie {{jsxref("Map.delete()")}}.

## Syntax

```js-nolint
delete(customHighlightName)
```

### Parameter

- `customHighlightName`
  - : Der Name des [`Highlight`](/de/docs/Web/API/Highlight)-Objekts, das aus der `HighlightRegistry` entfernt werden soll, als {{jsxref("String")}}.

### Rückgabewert

Gibt `true` zurück, wenn sich ein `Highlight`-Objekt mit dem angegebenen Namen in der `HighlightRegistry` befand; andernfalls `false`.

## Beispiele

Das folgende Codebeispiel registriert ein Highlight in der Registry und löscht es anschließend:

```js
const myHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-highlight", myHighlight);

CSS.highlights.delete("foo"); // false
CSS.highlights.delete("my-highlight"); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
