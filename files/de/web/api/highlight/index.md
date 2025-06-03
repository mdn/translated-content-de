---
title: Hervorhebung
slug: Web/API/Highlight
l10n:
  sourceCommit: 4dc98c2d0eb29d966d217605a5c49565dbb3ca76
---

{{APIRef("CSS Custom Highlight API")}}

Das **`Highlight`**-Interface der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Instanzen zu repräsentieren, die mithilfe der API gestylt werden sollen.

Um beliebige Bereiche auf einer Seite zu gestalten, erstellen Sie ein neues `Highlight`-Objekt, fügen Sie ein oder mehrere `Range`-Objekte hinzu und registrieren Sie es mit dem [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).

Eine `Highlight`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das ein oder mehrere `Range`-Objekte enthalten kann.

{{InheritanceDiagram}}

## Konstruktor

- [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)
  - : Gibt ein neu erstelltes `Highlight`-Objekt zurück.

## Instanzeigenschaften

_Das `Highlight`-Interface erbt keine Eigenschaften._

- [`Highlight.priority`](/de/docs/Web/API/Highlight/priority)
  - : Eine Zahl, die die Priorität dieses `Highlight`-Objekts angibt. Wenn mehrere Hervorhebungen überlappen, verwendet der Browser diese Priorität, um zu entscheiden, wie die überlappenden Teile gestylt werden.
- [`Highlight.size`](/de/docs/Web/API/Highlight/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche im `Highlight`-Objekt zurück.
- [`Highlight.type`](/de/docs/Web/API/Highlight/type)
  - : Ein enumerierter {{jsxref("String")}}, der verwendet wird, um die semantische Bedeutung der Hervorhebung anzugeben. Dies ermöglicht es unterstützenden Technologien, diese Bedeutung einzubeziehen, wenn die Hervorhebung Benutzern präsentiert wird.

## Instanzmethoden

_Das `Highlight`-Interface erbt keine Methoden._

- [`Highlight.add()`](/de/docs/Web/API/Highlight/add)
  - : Fügt dieser Hervorhebung einen neuen Bereich hinzu.
- [`Highlight.clear()`](/de/docs/Web/API/Highlight/clear)
  - : Entfernt alle Bereiche aus dieser Hervorhebung.
- [`Highlight.delete()`](/de/docs/Web/API/Highlight/delete)
  - : Entfernt einen Bereich aus dieser Hervorhebung.
- [`Highlight.entries()`](/de/docs/Web/API/Highlight/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das jeden Bereich im Hervorhebungsobjekt in Einfügereihenfolge enthält.
- [`Highlight.forEach()`](/de/docs/Web/API/Highlight/forEach)
  - : Ruft die angegebene Rückruffunktion einmal für jeden Bereich im Hervorhebungsobjekt in Einfügereihenfolge auf.
- [`Highlight.has()`](/de/docs/Web/API/Highlight/has)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Bereich im Hervorhebungsobjekt vorhanden ist oder nicht.
- [`Highlight.keys()`](/de/docs/Web/API/Highlight/keys)
  - : Ein Alias für [`Highlight.values()`](/de/docs/Web/API/Highlight/values).
- [`Highlight.values()`](/de/docs/Web/API/Highlight/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Bereiche im Hervorhebungsobjekt in Einfügereihenfolge liefert.

## Beispiele

Das folgende Beispiel zeigt, wie bestimmte Teile eines Textblocks hervorgehoben werden können.

```html-nolint
<p class="foo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  sapiente non eum facere? Nam rem hic culpa, ipsa rerum ab itaque consectetur
  molestiae dolores vitae! Quo ex explicabo tempore? Tenetur.</p>
```

Dieser JavaScript-Code erstellt [Bereiche](/de/docs/Web/API/Range), instanziiert ein neues `Highlight`-Objekt für sie und [registriert es](/de/docs/Web/API/HighlightRegistry/set), um auf der Seite gestylt zu werden:

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

Das folgende CSS-Code-Snippet zeigt, wie das registrierte benutzerdefinierte Highlight mit Hilfe des {{cssxref("::highlight")}} Pseudoelements gestylt werden kann:

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
