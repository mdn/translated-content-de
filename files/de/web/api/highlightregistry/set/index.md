---
title: "HighlightRegistry: set() Methode"
short-title: set()
slug: Web/API/HighlightRegistry/set
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`set()`** Methode der {{domxref("HighlightRegistry")}} Schnittstelle fügt ein {{domxref("Highlight")}} Objekt mit dem angegebenen Namen in das Register ein oder aktualisiert es.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.set()")}}.

## Syntax

```js-nolint
set(name, highlight)
```

### Parameter

- `name`
  - : Der Name des `Highlight` Objekts, das hinzugefügt oder aktualisiert werden soll. Der Name muss ein {{jsxref("String")}} sein.
- `highlight`
  - : Das `Highlight` Objekt, das hinzugefügt oder aktualisiert werden soll. Dies muss eine Instanz der {{domxref("Highlight")}} Schnittstelle sein.

### Rückgabewert

Das `HighlightRegistry` Objekt.

## Beispiele

### Verwendung von set()

```js
const fooHighlight = new Highlight();
CSS.highlights.set("foo", fooHighlight);
```

### Verwendung von set() mit Verkettung

Da die `set()` Methode das Register zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
