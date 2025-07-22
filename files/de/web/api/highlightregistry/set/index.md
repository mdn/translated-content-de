---
title: "HighlightRegistry: set() Methode"
short-title: set()
slug: Web/API/HighlightRegistry/set
l10n:
  sourceCommit: 6afd6f5230eb0735348582b3519efce8994116ad
---

{{APIRef("CSS Custom Highlight API")}}

Die **`set()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle fügt ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt mit dem angegebenen Namen dem Registry hinzu oder aktualisiert es.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.set()")}}.

## Syntax

```js-nolint
set(name, highlight)
```

### Parameter

- `name`
  - : Der Name des `Highlight`-Objekts, das hinzugefügt oder aktualisiert werden soll. Der Name muss ein {{jsxref("String")}} sein.
- `highlight`
  - : Das `Highlight`-Objekt, das hinzugefügt oder aktualisiert werden soll. Dies muss eine Instanz der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle sein.

### Rückgabewert

Das `HighlightRegistry`-Objekt.

## Beispiele

### Verwendung von set()

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### Verwendung von set() mit Verkettung

Da die `set()`-Methode die Registry zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights
  .set("foo", fooHighlight)
  .set("bar", barHighlight)
  .set("baz", bazHighlight);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS custom highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
