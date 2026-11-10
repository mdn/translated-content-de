---
title: Highlight
slug: Web/API/Highlight
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("CSS Custom Highlight API")}}

Die **`Highlight`**-Schnittstelle der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) repräsentiert eine Sammlung von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Instanzen, die mithilfe der API gestaltet werden können.

Um beliebige Bereiche auf einer Seite zu gestalten, erstellen Sie ein neues `Highlight`-Objekt, fügen Sie ihm ein oder mehrere `AbstractRange`-Objekte hinzu und registrieren Sie es über die [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).

Eine `Highlight`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das ein oder mehrere `AbstractRange`-Objekte enthalten kann.

{{InheritanceDiagram}}

## Konstruktor

- [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)
  - : Gibt ein neu erstelltes `Highlight`-Objekt zurück.

## Instanzeigenschaften

_Die `Highlight`-Schnittstelle erbt keine Eigenschaften._

- [`Highlight.priority`](/de/docs/Web/API/Highlight/priority)
  - : Eine Zahl, die die Priorität dieses `Highlight`-Objekts angibt. Wenn sich mehrere Hervorhebungen überlappen, bestimmt der Browser anhand dieser Priorität, wie die überlappenden Teile gestaltet werden.
- [`Highlight.size`](/de/docs/Web/API/Highlight/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche im `Highlight`-Objekt zurück.
- [`Highlight.type`](/de/docs/Web/API/Highlight/type)
  - : Ein Aufzählungswert vom Typ {{jsxref("String")}}, der die semantische Bedeutung der Hervorhebung angibt. So können assistive Technologien diese Bedeutung berücksichtigen, wenn sie die Hervorhebung für Benutzer zugänglich machen.

## Instanzmethoden

_Die `Highlight`-Schnittstelle erbt keine Methoden._

- [`Highlight.add()`](/de/docs/Web/API/Highlight/add)
  - : Fügt dieser Hervorhebung einen neuen Bereich hinzu.
- [`Highlight.clear()`](/de/docs/Web/API/Highlight/clear)
  - : Entfernt alle Bereiche aus dieser Hervorhebung.
- [`Highlight.delete()`](/de/docs/Web/API/Highlight/delete)
  - : Entfernt einen Bereich aus dieser Hervorhebung.
- [`Highlight.entries()`](/de/docs/Web/API/Highlight/entries)
  - : Gibt ein neues Iterator-Objekt zurück, das alle Bereiche im Hervorhebungsobjekt in der Reihenfolge enthält, in der sie hinzugefügt wurden.
- [`Highlight.forEach()`](/de/docs/Web/API/Highlight/forEach)
  - : Ruft die angegebene Callback-Funktion einmal für jeden Bereich im Hervorhebungsobjekt auf, und zwar in der Reihenfolge, in der die Bereiche hinzugefügt wurden.
- [`Highlight.has()`](/de/docs/Web/API/Highlight/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Bereich im Hervorhebungsobjekt vorhanden ist.
- [`Highlight.keys()`](/de/docs/Web/API/Highlight/keys)
  - : Ein Alias für [`Highlight.values()`](/de/docs/Web/API/Highlight/values).
- [`Highlight.values()`](/de/docs/Web/API/Highlight/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Bereiche im Hervorhebungsobjekt in der Reihenfolge liefert, in der sie hinzugefügt wurden.

## Beispiele

Das folgende Beispiel zeigt, wie bestimmte Teile eines Textblocks hervorgehoben werden können.

```html-nolint
<p class="foo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  sapiente non eum facere? Nam rem hic culpa, ipsa rerum ab itaque consectetur
  molestiae dolores vitae! Quo ex explicabo tempore? Tenetur.</p>
```

Dieser JavaScript-Code erstellt [Bereiche](/de/docs/Web/API/Range), erzeugt dafür ein neues `Highlight`-Objekt und [registriert es](/de/docs/Web/API/HighlightRegistry/set), damit es auf der Seite gestaltet werden kann:

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

Der folgende CSS-Codeausschnitt zeigt, wie die registrierte benutzerdefinierte Hervorhebung mit dem Pseudoelement {{cssxref("::highlight")}} gestaltet wird:

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

### Ergebnis

{{EmbedLiveSample("examples", "100%", '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API)-Modul
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
