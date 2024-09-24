---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`HighlightRegistry`**-Schnittstelle der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um {{domxref("Highlight")}}-Objekte zu registrieren, die mit der API gestylt werden sollen.
Sie wird über {{domxref("CSS.highlights_static", "CSS.highlights")}} zugegriffen.

Eine `HighlightRegistry`-Instanz ist ein [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel der namensgebende String für ein benutzerdefiniertes Highlight ist und der entsprechende Wert das zugehörige {{domxref("Highlight")}}-Objekt ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `HighlightRegistry`-Schnittstelle erbt keine Eigenschaften._

- {{domxref("HighlightRegistry.size")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der derzeit registrierten `Highlight`-Objekte zurück.

## Instanzmethoden

_Die `HighlightRegistry`-Schnittstelle erbt keine Methoden_.

- {{domxref("HighlightRegistry.clear()")}}
  - : Entfernt alle `Highlight`-Objekte aus dem Register.
- {{domxref("HighlightRegistry.delete()")}}
  - : Entfernt das benannte `Highlight`-Objekt aus dem Register.
- {{domxref("HighlightRegistry.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das jedes `Highlight`-Objekt im Register in der Einfügereihenfolge enthält.
- {{domxref("HighlightRegistry.forEach()")}}
  - : Ruft den angegebenen Callback einmal für jedes `Highlight`-Objekt im Register in der Einfügereihenfolge auf.
- {{domxref("HighlightRegistry.get()")}}
  - : Ruft das benannte `Highlight`-Objekt aus dem Register ab.
- {{domxref("HighlightRegistry.has()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein `Highlight`-Objekt im Register vorhanden ist oder nicht.
- {{domxref("HighlightRegistry.keys()")}}
  - : Ein Alias für {{domxref("HighlightRegistry.values()")}}.
- {{domxref("HighlightRegistry.set()")}}
  - : Fügt das angegebene `Highlight`-Objekt mit dem angegebenen Namen zum Register hinzu oder aktualisiert das benannte `Highlight`-Objekt, wenn es bereits im Register vorhanden ist.
- {{domxref("HighlightRegistry.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die `Highlight`-Objekte im Register in der Einfügereihenfolge liefert.

## Beispiele

### Ein Highlight registrieren

Das folgende Beispiel zeigt, wie Bereiche erstellt werden, ein neues `Highlight`-Objekt für sie instanziiert wird und das Highlight mithilfe der `HighlightRegistry` registriert wird, um es auf der Seite zu stylen:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
