---
title: Highlight
slug: Web/API/Highlight
l10n:
  sourceCommit: 6afd6f5230eb0735348582b3519efce8994116ad
---

{{APIRef("CSS Custom Highlight API")}}

Das **`Highlight`**-Interface der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Instanzen darzustellen, die mit der API gestaltet werden sollen.

Um beliebige Bereiche auf einer Seite zu gestalten, instanziieren Sie ein neues `Highlight`-Objekt, fügen Sie ein oder mehrere `Range`-Objekte hinzu und registrieren Sie es mithilfe des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).

Eine `Highlight`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das ein oder mehrere `Range`-Objekte halten kann.

{{InheritanceDiagram}}

## Konstruktor

- [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)
  - : Gibt ein neu erstelltes `Highlight`-Objekt zurück.

## Instanz-Eigenschaften

_Das `Highlight`-Interface erbt keine Eigenschaften._

- [`Highlight.priority`](/de/docs/Web/API/Highlight/priority)
  - : Eine Zahl, die die Priorität dieses `Highlight`-Objekts angibt. Wenn sich mehrere Highlights überlappen, verwendet der Browser diese Priorität, um zu entscheiden, wie die überlappenden Teile gestaltet werden.
- [`Highlight.size`](/de/docs/Web/API/Highlight/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche im `Highlight`-Objekt zurück.
- [`Highlight.type`](/de/docs/Web/API/Highlight/type)
  - : Eine enumerierte {{jsxref("String")}}, die verwendet wird, um die semantische Bedeutung des Highlights anzugeben. Dies ermöglicht es unterstützenden Technologien, diese Bedeutung einzubeziehen, wenn das Highlight Benutzern zugänglich gemacht wird.

## Instanz-Methoden

_Das `Highlight`-Interface erbt keine Methoden_.

- [`Highlight.add()`](/de/docs/Web/API/Highlight/add)
  - : Fügt diesem Highlight einen neuen Bereich hinzu.
- [`Highlight.clear()`](/de/docs/Web/API/Highlight/clear)
  - : Entfernt alle Bereiche aus diesem Highlight.
- [`Highlight.delete()`](/de/docs/Web/API/Highlight/delete)
  - : Entfernt einen Bereich aus diesem Highlight.
- [`Highlight.entries()`](/de/docs/Web/API/Highlight/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das jeden Bereich im Highlight-Objekt in Einfüge-Reihenfolge enthält.
- [`Highlight.forEach()`](/de/docs/Web/API/Highlight/forEach)
  - : Ruft die gegebene Callback-Funktion einmal für jeden Bereich im Highlight-Objekt in Einfüge-Reihenfolge auf.
- [`Highlight.has()`](/de/docs/Web/API/Highlight/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Bereich im Highlight-Objekt vorhanden ist oder nicht.
- [`Highlight.keys()`](/de/docs/Web/API/Highlight/keys)
  - : Ein Alias für [`Highlight.values()`](/de/docs/Web/API/Highlight/values).
- [`Highlight.values()`](/de/docs/Web/API/Highlight/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Bereiche im Highlight-Objekt in Einfüge-Reihenfolge liefert.

## Beispiele

Das folgende Beispiel zeigt, wie bestimmte Teile eines Textblocks hervorgehoben werden können.

```html-nolint
<p class="foo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  sapiente non eum facere? Nam rem hic culpa, ipsa rerum ab itaque consectetur
  molestiae dolores vitae! Quo ex explicabo tempore? Tenetur.</p>
```

Dieser JavaScript-Code erstellt [Bereiche](/de/docs/Web/API/Range), instanziiert ein neues `Highlight`-Objekt für sie und [registriert es](/de/docs/Web/API/HighlightRegistry/set), um auf der Seite gestaltet zu werden:

```js
const parentNode = document.querySelector(".foo");
const textNode = parentNode.firstChild;

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(textNode, 6);
range1.setEnd(textNode, 21);

const range2 = new Range();
range2.setStart(textNode, 57);
range2.setEnd(textNode, 71);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

Das folgende CSS-Code-Snippet zeigt, wie man das registrierte benutzerdefinierte Highlight mithilfe des {{cssxref("::highlight")}}-Pseudo-Elements gestaltet:

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

### Ergebnis

{{EmbedLiveSample("example", "100%", '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
