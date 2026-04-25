---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("CSS Custom Highlight API")}}

Das **`HighlightRegistry`**-Interface der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um [`Highlight`](/de/docs/Web/API/Highlight)-Objekte zu registrieren, die mithilfe der API gestylt werden sollen. Es wird über [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) aufgerufen.

Eine `HighlightRegistry`-Instanz ist ein [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel eine Zeichenkette für einen benutzerdefinierten Highlight darstellt und der entsprechende Wert das zugehörige [`Highlight`](/de/docs/Web/API/Highlight)-Objekt ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Das `HighlightRegistry`-Interface erbt keine Eigenschaften._

- [`HighlightRegistry.size`](/de/docs/Web/API/HighlightRegistry/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der derzeit registrierten `Highlight`-Objekte zurück.

## Instanzmethoden

_Das `HighlightRegistry`-Interface erbt keine Methoden._

- [`HighlightRegistry.clear()`](/de/docs/Web/API/HighlightRegistry/clear)
  - : Entfernen Sie alle `Highlight`-Objekte aus dem Register.
- [`HighlightRegistry.delete()`](/de/docs/Web/API/HighlightRegistry/delete)
  - : Entfernen Sie das benannte `Highlight`-Objekt aus dem Register.
- [`HighlightRegistry.entries()`](/de/docs/Web/API/HighlightRegistry/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das jedes `Highlight`-Objekt im Register in Einfügereihenfolge enthält.
- [`HighlightRegistry.forEach()`](/de/docs/Web/API/HighlightRegistry/forEach)
  - : Ruft für jedes `Highlight`-Objekt im Register den angegebenen Callback in Einfügereihenfolge auf.
- [`HighlightRegistry.get()`](/de/docs/Web/API/HighlightRegistry/get)
  - : Holen Sie das benannte `Highlight`-Objekt aus dem Register.
- [`HighlightRegistry.has()`](/de/docs/Web/API/HighlightRegistry/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Highlight`-Objekt im Register vorhanden ist oder nicht.
- [`HighlightRegistry.highlightsFromPoint()`](/de/docs/Web/API/HighlightRegistry/highlightsFromPoint)
  - : Gibt ein Array von Objekten zurück, die die benutzerdefinierten Highlights darstellen, die an einem bestimmten Punkt im Ansichtsfenster angewendet wurden.
- [`HighlightRegistry.keys()`](/de/docs/Web/API/HighlightRegistry/keys)
  - : Ein Alias für [`HighlightRegistry.values()`](/de/docs/Web/API/HighlightRegistry/values).
- [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set)
  - : Fügt das angegebene `Highlight`-Objekt mit dem angegebenen Namen in das Register ein oder aktualisiert das benannte `Highlight`-Objekt, falls es bereits im Register existiert.
- [`HighlightRegistry.values()`](/de/docs/Web/API/HighlightRegistry/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die `Highlight`-Objekte im Register in Einfügereihenfolge liefert.

## Beispiele

### Registrieren eines Highlights

Das folgende Beispiel zeigt, wie Bereiche erstellt, ein neues `Highlight`-Objekt für diese instanziiert und das Highlight mithilfe des `HighlightRegistry` registriert wird, um es auf der Seite zu stylen:

#### HTML

```html
<p id="foo">CSS Custom Highlight API</p>
```

#### CSS

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

#### JavaScript

```js
const text = document.getElementById("foo").firstChild;

if (!CSS.highlights) {
  text.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(text, 0);
range1.setEnd(text, 3);

const range2 = new Range();
range2.setStart(text, 21);
range2.setEnd(text, 24);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

#### Ergebnis

{{ EmbedLiveSample("Registering a highlight") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
- [CSS Custom Highlight API: Die Zukunft des Highlightens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
