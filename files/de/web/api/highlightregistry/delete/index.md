---
title: "HighlightRegistry: delete()-Methode"
short-title: delete()
slug: Web/API/HighlightRegistry/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`delete()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle entfernt ein benanntes {{domxref("Highlight")}}-Objekt aus der `HighlightRegistry`.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.delete()")}}.

## Syntax

```js-nolint
delete(customHighlightName)
```

### Parameter

- `customHighlightName`
  - : Der Name, als {{jsxref("String")}}, des zu entfernenden {{domxref("Highlight")}}-Objekts aus der `HighlightRegistry`.

### Rückgabewert

Gibt `true` zurück, wenn ein `Highlight`-Objekt unter dem angegebenen Namen in der `HighlightRegistry` enthalten war; andernfalls `false`.

## Beispiele

Der folgende Codeausschnitt registriert ein Highlight im Register und löscht es dann:

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

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
