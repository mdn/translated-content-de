---
title: "HighlightRegistry: Methode set()"
short-title: set()
slug: Web/API/HighlightRegistry/set
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{APIRef("CSS Custom Highlight API")}}

Die Methode **`set()`** des Interfaces [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) fügt ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt mit dem angegebenen Namen zur Registry hinzu oder aktualisiert es.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ähnelt dies der Verwendung von {{jsxref("Map.set()")}}.

## Syntax

```js-nolint
set(name, highlight)
```

### Parameter

- `name`
  - : Der Name des hinzuzufügenden oder zu aktualisierenden `Highlight`-Objekts. Der Name muss ein {{jsxref("String")}} sein.
- `highlight`
  - : Das hinzuzufügende oder zu aktualisierende `Highlight`-Objekt. Dies muss eine Instanz des Interfaces [`Highlight`](/de/docs/Web/API/Highlight) sein.

### Rückgabewert

Das `HighlightRegistry`-Objekt.

## Beispiele

### Verwendung von set()

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### Verwendung von set() mit Verkettung

Da die Methode `set()` die Registry zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
- Modul [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
