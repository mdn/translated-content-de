---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Custom Highlight API")}}

Die **`HighlightRegistry`**-Schnittstelle der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um [`Highlight`](/de/docs/Web/API/Highlight)-Objekte zu registrieren, die mit der API gestylt werden sollen.
Sie wird über [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) aufgerufen.

Eine Instanz von `HighlightRegistry` ist ein [objektähnliches `Map`-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel der Namens-String für ein benutzerdefiniertes Highlight ist und der entsprechende Wert das zugeordnete [`Highlight`](/de/docs/Web/API/Highlight)-Objekt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `HighlightRegistry`-Schnittstelle erbt keine Eigenschaften._

- [`HighlightRegistry.size`](/de/docs/Web/API/HighlightRegistry/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der derzeit registrierten `Highlight`-Objekte zurück.

## Instanzmethoden

_Die `HighlightRegistry`-Schnittstelle erbt keine Methoden_.

- [`HighlightRegistry.clear()`](/de/docs/Web/API/HighlightRegistry/clear)
  - : Entfernt alle `Highlight`-Objekte aus dem Register.
- [`HighlightRegistry.delete()`](/de/docs/Web/API/HighlightRegistry/delete)
  - : Entfernt das benannte `Highlight`-Objekt aus dem Register.
- [`HighlightRegistry.entries()`](/de/docs/Web/API/HighlightRegistry/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das jedes `Highlight`-Objekt im Register in Einfügereihenfolge enthält.
- [`HighlightRegistry.forEach()`](/de/docs/Web/API/HighlightRegistry/forEach)
  - : Ruft den angegebenen Rückruf einmal für jedes `Highlight`-Objekt im Register in Einfügereihenfolge auf.
- [`HighlightRegistry.get()`](/de/docs/Web/API/HighlightRegistry/get)
  - : Ruft das benannte `Highlight`-Objekt aus dem Register ab.
- [`HighlightRegistry.has()`](/de/docs/Web/API/HighlightRegistry/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Highlight`-Objekt im Register vorhanden ist oder nicht.
- [`HighlightRegistry.highlightsFromPoint()`](/de/docs/Web/API/HighlightRegistry/highlightsFromPoint) {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, die die benutzerdefinierten Highlights darstellen, die an einem bestimmten Punkt innerhalb des Viewports angewendet werden.
- [`HighlightRegistry.keys()`](/de/docs/Web/API/HighlightRegistry/keys)
  - : Ein Alias für [`HighlightRegistry.values()`](/de/docs/Web/API/HighlightRegistry/values).
- [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set)
  - : Fügt das angegebene `Highlight`-Objekt mit dem angegebenen Namen dem Register hinzu oder aktualisiert das benannte `Highlight`-Objekt, falls es bereits im Register existiert.
- [`HighlightRegistry.values()`](/de/docs/Web/API/HighlightRegistry/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die `Highlight`-Objekte im Register in Einfügereihenfolge ausgibt.

## Beispiele

### Ein Highlight registrieren

Das folgende Beispiel demonstriert, wie man Bereiche erstellt, ein neues `Highlight`-Objekt für sie instanziiert und das Highlight mithilfe der `HighlightRegistry` registriert, um es auf der Seite zu stylen:

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
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API)-Modul
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
