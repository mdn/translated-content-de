---
title: Hervorhebung
slug: Web/API/Highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`Highlight`**-Schnittstelle der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird verwendet, um eine Sammlung von {{domxref("Range")}}-Instanzen zu repräsentieren, die mit der API gestylt werden sollen.

Um beliebige Bereiche einer Seite zu stylen, instanziieren Sie ein neues `Highlight`-Objekt, fügen Sie ein oder mehrere `Range`-Objekte hinzu und registrieren Sie es mithilfe des {{domxref("HighlightRegistry")}}.

Eine `Highlight`-Instanz ist ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das ein oder mehrere `Range`-Objekte enthalten kann.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Highlight.Highlight()", "Highlight()")}}
  - : Gibt ein neu erstelltes `Highlight`-Objekt zurück.

## Instanz-Eigenschaften

_Die `Highlight`-Schnittstelle erbt keine Eigenschaften._

- {{domxref("Highlight.priority")}}
  - : Eine Zahl, die die Priorität dieses `Highlight`-Objekts angibt. Wenn mehrere Hervorhebungen sich überschneiden, verwendet der Browser diese Priorität, um zu entscheiden, wie die überlappenden Teile gestylt werden.
- {{domxref("Highlight.size")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche im `Highlight`-Objekt zurück.
- {{domxref("Highlight.type")}}
  - : Ein enumerierter {{jsxref("String")}}, der verwendet wird, um die semantische Bedeutung der Hervorhebung zu spezifizieren. Dies ermöglicht es unterstützenden Technologien, diese Bedeutung beim Anzeigen der Hervorhebung gegenüber Benutzern einzubeziehen.

## Instanz-Methoden

_Die `Highlight`-Schnittstelle erbt keine Methoden_.

- {{domxref("Highlight.add()")}}
  - : Fügt diesem Highlight einen neuen Bereich hinzu.
- {{domxref("Highlight.clear()")}}
  - : Entfernt alle Bereiche aus diesem Highlight.
- {{domxref("Highlight.delete()")}}
  - : Entfernt einen Bereich aus diesem Highlight.
- {{domxref("Highlight.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das jeden Bereich im Highlight-Objekt in Einfügungsreihenfolge enthält.
- {{domxref("Highlight.forEach()")}}
  - : Ruft den gegebenen Callback einmal für jeden Bereich im Highlight-Objekt in Einfügungsreihenfolge auf.
- {{domxref("Highlight.has()")}}
  - : Gibt ein Boolean zurück, das angibt, ob ein Bereich im Highlight-Objekt vorhanden ist oder nicht.
- {{domxref("Highlight.keys()")}}
  - : Ein Alias für {{domxref("Highlight.values()")}}.
- {{domxref("Highlight.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Bereiche im Highlight-Objekt in Einfügungsreihenfolge liefert.

## Beispiele

Das folgende Beispiel zeigt, wie Bereiche erstellt, ein neues `Highlight`-Objekt dafür instanziiert und registriert werden, um auf der Seite gestylt zu werden:

```js
const parentNode = document.getElementById("foo");

// Erstellen Sie ein paar Bereiche.
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

// Erstellen Sie eine benutzerdefinierte Hervorhebung für diese Bereiche.
const highlight = new Highlight(range1, range2);

// Registrieren Sie die Bereiche im HighlightRegistry.
CSS.highlights.set("my-custom-highlight", highlight);
```

Das folgende CSS-Code-Snippet zeigt, wie die registrierte benutzerdefinierte Hervorhebung mithilfe des {{cssxref("::highlight")}} Pseudo-Elements gestylt werden kann:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
