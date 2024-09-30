---
title: CSS Custom Highlight API
slug: Web/API/CSS_Custom_Highlight_API
l10n:
  sourceCommit: 408aa6446554821aa52f4208e9431fa6b85083cf
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen beliebiger Textbereiche in einem Dokument, indem diese Bereiche mit JavaScript erstellt und mit CSS gestaltet werden.

## Konzepte und Nutzung

Das Stylen von Textbereichen auf einer Webseite kann sehr nützlich sein. Beispielsweise heben Textbearbeitungs-Web-Apps Rechtschreib- oder Grammatikfehler hervor, und Code-Editoren markieren Syntaxfehler.

Die CSS Custom Highlight API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}} durch die Bereitstellung einer Möglichkeit, beliebige [`Range`](/de/docs/Web/API/Range)-Objekte zu erstellen und zu stylen, anstatt auf browserdefinierte Bereiche beschränkt zu sein.

Mit der CSS Custom Highlight API können Sie programmgesteuert Textbereiche erstellen und hervorheben, ohne die DOM-Struktur der Seite zu beeinflussen.

Es gibt vier Schritte, um mit der CSS Custom Highlight API Textbereiche auf einer Webseite zu stylen:

1. Erstellen von [`Range`](/de/docs/Web/API/Range)-Objekten.
2. Erstellen von [`Highlight`](/de/docs/Web/API/Highlight)-Objekten für diese Bereiche.
3. Registrieren der Highlights mithilfe des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
4. Stylen der Highlights mit dem {{cssxref("::highlight", "::highlight()")}} Pseudoelement.

### Bereiche erstellen

Der erste Schritt besteht darin, die Textbereiche zu definieren, die Sie stylen möchten, indem Sie [`Range`](/de/docs/Web/API/Range)-Objekte in JavaScript erstellen. Zum Beispiel:

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

Der zweite Schritt besteht darin, [`Highlight`](/de/docs/Web/API/Highlight)-Objekte für Ihre Textbereiche zu instanziieren.

Mehrere Bereiche können einem Highlight zugeordnet werden. Wenn Sie mehrere Textstellen auf die gleiche Weise hervorheben möchten, müssen Sie ein einziges Highlight erstellen und es mit den entsprechenden Bereichen initialisieren.

```js
const highlight = new Highlight(range1, range2);
```

Aber Sie können auch so viele Highlights erstellen, wie Sie benötigen. Wenn Sie beispielsweise einen kollaborativen Texteditor erstellen, in dem jeder Benutzer eine andere Textfarbe erhält, können Sie ein Highlight pro Benutzer erstellen, wie im folgenden Code-Snippet zu sehen ist:

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

Jedes Highlight kann unterschiedlich gestylt werden.

### Highlights registrieren

Sobald Highlights erstellt wurden, registrieren Sie sie mithilfe des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry), das als [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) verfügbar ist.

Das Registry ist ein {{jsxref("Map")}}-ähnliches Objekt, das zum Registrieren der Highlights mit Namen verwendet wird, wie unten zu sehen:

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

Im obigen Code-Snippet sind die Strings `user-1-highlight` und `user-2-highlight` benutzerdefinierte Identifikatoren, die in CSS verwendet werden können, um Stile auf die registrierten Highlights anzuwenden.

Sie können so viele Highlights im Registry registrieren, wie Sie benötigen, sowie Highlights entfernen und das gesamte Registry löschen.

```js
// Remove a single highlight from the registry.
CSS.highlights.delete("user-1-highlight");

// Clear the registry.
CSS.highlights.clear();
```

### Highlights stylen

Der letzte Schritt besteht darin, die registrierten Highlights zu stylen. Dies erfolgt durch die Verwendung des {{cssxref("::highlight", "::highlight()")}} Pseudoelements. Zum Beispiel, um das `user-1-highlight` Highlight, das im vorherigen Schritt registriert wurde, zu stylen:

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

## Schnittstellen

- [`Highlight`](/de/docs/Web/API/Highlight)
  - : Diese Schnittstelle wird verwendet, um eine Sammlung von Bereichen zu repräsentieren, die in einem Dokument gestylt werden sollen.
- [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)
  - : Erreichbar über [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static), wird dieses {{jsxref("Map")}}-ähnliche Objekt verwendet, um Highlights mit benutzerdefinierten Identifikatoren zu registrieren.

## Beispiele

### Suchergebnisse hervorheben

Dieses Beispiel zeigt, wie Sie die CSS Custom Highlight API verwenden, um Suchergebnisse hervorzuheben.

#### HTML

Der folgende HTML-Code-Snippet definiert ein Suchfeld und einen Artikel mit einigen Textabsätzen:

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

JavaScript wird verwendet, um auf das `input`-Ereignis im Suchfeld zu hören. Wenn das Ereignis ausgelöst wird, sucht der Code nach übereinstimmenden Textstellen im Artikeltext. Anschließend erstellt er Bereiche für die Übereinstimmungen und verwendet die CSS Custom Highlight API, um ein `search-results` Highlight-Objekt zu erstellen und zu registrieren:

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
    .map((el) => {
      return { el, text: el.textContent.toLowerCase() };
    })
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

Schließlich wird das `::highlight()` Pseudoelement in CSS verwendet, um die Highlights zu stylen:

```css
::highlight(search-results) {
  background-color: #f06;
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

- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
- HTML [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
- CSS {{cssxref("pseudo-elements")}}
