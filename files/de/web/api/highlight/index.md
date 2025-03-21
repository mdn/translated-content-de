---
title: Highlight
slug: Web/API/Highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`Highlight`**-Schnittstelle der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Instanzen darzustellen, die mithilfe der API gestylt werden sollen.

Um beliebige Bereiche auf einer Seite zu stylen, instanziieren Sie ein neues `Highlight`-Objekt, fügen ihm ein oder mehrere `Range`-Objekte hinzu und registrieren Sie es mithilfe des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).

Eine `Highlight`-Instanz ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das ein oder mehrere `Range`-Objekte enthalten kann.

{{InheritanceDiagram}}

## Konstruktor

- [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)
  - : Gibt ein neu erstelltes `Highlight`-Objekt zurück.

## Instanz-Eigenschaften

_Die `Highlight`-Schnittstelle erbt keine Eigenschaften._

- [`Highlight.priority`](/de/docs/Web/API/Highlight/priority)
  - : Eine Zahl, die die Priorität dieses `Highlight`-Objekts angibt. Wenn mehrere Highlights überlappen, verwendet der Browser diese Priorität, um zu entscheiden, wie die überlappenden Teile gestylt werden.
- [`Highlight.size`](/de/docs/Web/API/Highlight/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche im `Highlight`-Objekt zurück.
- [`Highlight.type`](/de/docs/Web/API/Highlight/type)
  - : Ein enumerierter {{jsxref("String")}}, der verwendet wird, um die semantische Bedeutung des Highlights zu spezifizieren. Dies ermöglicht es unterstützender Technologie, diese Bedeutung einzuschließen, wenn das Highlight den Benutzern offenbart wird.

## Instanz-Methoden

_Die `Highlight`-Schnittstelle erbt keine Methoden._

- [`Highlight.add()`](/de/docs/Web/API/Highlight/add)
  - : Fügt diesem Highlight einen neuen Bereich hinzu.
- [`Highlight.clear()`](/de/docs/Web/API/Highlight/clear)
  - : Entfernt alle Bereiche aus diesem Highlight.
- [`Highlight.delete()`](/de/docs/Web/API/Highlight/delete)
  - : Entfernt einen Bereich aus diesem Highlight.
- [`Highlight.entries()`](/de/docs/Web/API/Highlight/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das jeden Bereich im Highlight-Objekt in Einfügereihenfolge enthält.
- [`Highlight.forEach()`](/de/docs/Web/API/Highlight/forEach)
  - : Ruft den angegebenen Rückruf einmal für jeden Bereich im Highlight-Objekt in Einfügereihenfolge auf.
- [`Highlight.has()`](/de/docs/Web/API/Highlight/has)
  - : Gibt einen Boolean zurück, der angibt, ob ein Bereich im Highlight-Objekt vorhanden ist oder nicht.
- [`Highlight.keys()`](/de/docs/Web/API/Highlight/keys)
  - : Ein Alias für [`Highlight.values()`](/de/docs/Web/API/Highlight/values).
- [`Highlight.values()`](/de/docs/Web/API/Highlight/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Bereiche im Highlight-Objekt in Einfügereihenfolge liefert.

## Beispiele

Das folgende Beispiel demonstriert, wie man Bereiche erstellt, ein neues `Highlight`-Objekt für sie instanziiert und es registriert, damit es auf der Seite gestylt wird:

```js
const parentNode = document.getElementById("foo");

// Create a couple of ranges.
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

// Create a custom highlight for these ranges.
const highlight = new Highlight(range1, range2);

// Register the ranges in the HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

Das folgende CSS-Codebeispiel zeigt, wie man das registrierte benutzerdefinierte Highlight mithilfe des {{cssxref("::highlight")}}-Pseudo-Elements stylt:

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Textbereich-Highlightings im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
