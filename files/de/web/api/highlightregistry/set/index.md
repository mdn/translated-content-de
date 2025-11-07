---
title: "HighlightRegistry: set() Methode"
short-title: set()
slug: Web/API/HighlightRegistry/set
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Custom Highlight API")}}

Die **`set()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle fügt ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt mit dem angegebenen Namen zum Register hinzu oder aktualisiert es.

`HighlightRegistry` ist ein dem {{jsxref("Map")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Nutzung von {{jsxref("Map.set()")}}.

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

### Nutzung von set()

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### Nutzung von set() mit Verkettung

Da die `set()`-Methode das Register zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
