---
title: "HighlightRegistry: delete() Methode"
short-title: delete()
slug: Web/API/HighlightRegistry/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`delete()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle entfernt ein benanntes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt aus der `HighlightRegistry`.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, sodass dies dem Einsatz von {{jsxref("Map.delete()")}} ähnelt.

## Syntax

```js-nolint
delete(customHighlightName)
```

### Parameter

- `customHighlightName`
  - : Der Name, als {{jsxref("String")}}, des [`Highlight`](/de/docs/Web/API/Highlight)-Objekts, das aus der `HighlightRegistry` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein `Highlight`-Objekt unter dem angegebenen Namen in der `HighlightRegistry` war; andernfalls `false`.

## Beispiele

Das folgende Codebeispiel registriert ein Highlight in der Registry und löscht es dann:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
