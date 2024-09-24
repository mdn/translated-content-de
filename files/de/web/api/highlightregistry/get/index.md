---
title: "HighlightRegistry: get()-Methode"
short-title: get()
slug: Web/API/HighlightRegistry/get
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`get()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle gibt das benannte {{domxref("Highlight")}}-Objekt aus dem Register zurück.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich der Verwendung von {{jsxref("Map.get()")}}.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des `Highlight`-Objekts, das aus dem Register zurückgegeben werden soll. Der Name muss ein {{jsxref("String")}} sein.

### Rückgabewert

Das `Highlight`-Objekt, das mit dem angegebenen Namen verknüpft ist, oder {{jsxref("undefined")}}, wenn der Name im `HighlightRegistry` nicht gefunden werden kann.

## Beispiele

Das folgende Codebeispiel zeigt, wie ein neues `Highlight` erstellt, dem Register hinzugefügt und mit seinem Namen über die `get()`-Methode abgerufen wird:

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);

console.log(CSS.highlights.get("foo")); // Gibt das fooHighlight-Objekt zurück.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Markierens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
