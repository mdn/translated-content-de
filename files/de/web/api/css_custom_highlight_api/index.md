---
title: CSS Custom Highlight API
slug: Web/API/CSS_Custom_Highlight_API
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

Die CSS Custom Highlight API bietet einen Mechanismus zum Stilisieren beliebiger Textranges auf einem Dokument, indem JavaScript zur Erstellung der Ranges und CSS zur Stilgestaltung verwendet wird.

## Konzepte und Verwendung

Das Stilisieren von Textranges auf einer Webseite kann sehr nützlich sein. Beispielsweise heben Textbearbeitungs-Webanwendungen Rechtschreib- oder Grammatikfehler hervor, und Code-Editoren heben Syntaxfehler hervor.

Die CSS Custom Highlight API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}. Sie bietet eine Möglichkeit, beliebige [`Range`](/de/docs/Web/API/Range)-Objekte zu erstellen und zu stilisieren, anstatt auf browserdefinierte Ranges beschränkt zu sein.

Mit der CSS Custom Highlight API können Sie programmgesteuert Textranges erstellen und hervorheben, ohne die DOM-Struktur auf der Seite zu beeinflussen.

Es gibt vier Schritte, um Textranges auf einer Webseite mit der CSS Custom Highlight API zu stilisieren:

1. Erstellen von [`Range`](/de/docs/Web/API/Range)-Objekten.
2. Erstellen von [`Highlight`](/de/docs/Web/API/Highlight)-Objekten für diese Ranges.
3. Registrieren der Highlights mit dem [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
4. Stilisieren der Highlights mit dem {{cssxref("::highlight", "::highlight()")}}-Pseudoelement.

### Ranges erstellen

Der erste Schritt besteht darin, die Textranges zu definieren, die Sie stilisieren möchten, indem Sie [`Range`](/de/docs/Web/API/Range)-Objekte in JavaScript erstellen. Zum Beispiel:

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);
```

### Highlights erstellen

Der zweite Schritt besteht darin, [`Highlight`](/de/docs/Web/API/Highlight)-Objekte für Ihre Textranges zu instanziieren.

Mehrere Ranges können mit einem Highlight assoziiert werden. Wenn Sie mehrere Textstücke auf die gleiche Weise hervorheben möchten, müssen Sie ein einziges Highlight erstellen und es mit den entsprechenden Ranges initialisieren.

```js
const highlight = new Highlight(range1, range2);
```

Es können jedoch auch so viele Highlights erstellt werden, wie benötigt werden. Wenn Sie beispielsweise einen kollaborativen Texteditor erstellen, bei dem jeder Benutzer eine andere Textfarbe erhält, können Sie pro Benutzer ein Highlight erstellen, wie im folgenden Codebeispiel gezeigt:

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

Jedes Highlight kann unterschiedlich gestylt werden.

### Highlights registrieren

Sobald die Highlights erstellt wurden, registrieren Sie diese mit dem [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry), das als [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) verfügbar ist.

Das Register ist ein {{jsxref("Map")}}-ähnliches Objekt, das zur Registrierung von Highlights nach Namen verwendet wird, wie unten gezeigt:

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

In dem obigen Codebeispiel sind die Strings `user-1-highlight` und `user-2-highlight` benutzerdefinierte Identifikatoren, die in CSS verwendet werden können, um Stile auf die registrierten Highlights anzuwenden.

Sie können so viele Highlights wie nötig im Register registrieren sowie Highlights entfernen und das gesamte Register leeren.

```js
// Remove a single highlight from the registry.
CSS.highlights.delete("user-1-highlight");

// Clear the registry.
CSS.highlights.clear();
```

### Highlights stylen

Der letzte Schritt besteht darin, die registrierten Highlights zu stilisieren. Dies erfolgt mit dem {{cssxref("::highlight", "::highlight()")}}-Pseudoelement. Beispielsweise um das `user-1-highlight` hervorzuheben, das im vorherigen Schritt registriert wurde:

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

## Schnittstellen

- [`Highlight`](/de/docs/Web/API/Highlight)
  - : Diese Schnittstelle wird verwendet, um eine Sammlung von Ranges darzustellen, die auf einem Dokument gestylt werden sollen.
- [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)
  - : Zugriff über [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static), dieses {{jsxref("Map")}}-ähnliche Objekt wird verwendet, um Highlights mit benutzerdefinierten Identifikatoren zu registrieren.

## Beispiele

### Hervorhebung von Suchergebnissen

Dieses Beispiel zeigt, wie die CSS Custom Highlight API verwendet wird, um Suchergebnisse hervorzuheben.

#### HTML

Der untenstehende HTML-Code-Schnipsel definiert ein Suchfeld und einen Artikel mit ein paar Textabsätzen:

```html
<label>Search within text <input id="query" type="text" /></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis laborum molestiae labore,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo. Dolorem
    eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
    laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, tempore perferendis! Ab porro neque esse
    voluptas libero necessitatibus fugiat, ex, minus atque deserunt veniam
    molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda
    quos architecto. Doloremque deleniti non exercitationem rerum quam alias
    harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est
    quibusdam id ipsa.
  </p>
</article>
```

#### JavaScript

JavaScript wird verwendet, um auf das `input`-Ereignis im Suchfeld zu hören. Wenn das Ereignis ausgelöst wird, lokalisiert der Code Übereinstimmungen für den eingegebenen Text im Artikeltext. Anschließend erstellt er Ranges für die Übereinstimmungen und verwendet die CSS Custom Highlight API, um ein `search-results` Highlight-Objekt zu erstellen und zu registrieren:

```js
const query = document.getElementById("query");
const article = document.querySelector("article");

// Find all text nodes in the article. We'll search within
// these text nodes.
const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

// Listen to the input event to run the search.
query.addEventListener("input", () => {
  // If the CSS Custom Highlight API is not supported,
  // display a message and bail-out.
  if (!CSS.highlights) {
    article.textContent = "CSS Custom Highlight API not supported.";
    return;
  }

  // Clear the HighlightRegistry to remove the
  // previous search results.
  CSS.highlights.clear();

  // Clean-up the search query and bail-out if
  // if it's empty.
  const str = query.value.trim().toLowerCase();
  if (!str) {
    return;
  }

  // Iterate over all text nodes and find matches.
  const ranges = allTextNodes
    .map((el) => ({ el, text: el.textContent.toLowerCase() }))
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }

      // Create a range object for each instance of
      // str we found in the text node.
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });

  // Create a Highlight object for the ranges.
  const searchResultsHighlight = new Highlight(...ranges.flat());

  // Register the Highlight object in the registry.
  CSS.highlights.set("search-results", searchResultsHighlight);
});
```

#### CSS

Schließlich wird das `::highlight()`-Pseudoelement in CSS verwendet, um die Highlights zu gestalten:

```css
::highlight(search-results) {
  background-color: #ff0066;
  color: white;
}
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Geben Sie Text in das Suchfeld ein, um Übereinstimmungen im Artikel hervorzuheben:

{{ EmbedLiveSample('Highlighting search results', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textranges im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
- HTML-Attribut [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- CSS {{cssxref("pseudo-elements")}}
- [CSS Custom Highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
