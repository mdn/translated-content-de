---
title: CSS Custom Highlight API
slug: Web/API/CSS_Custom_Highlight_API
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

Die CSS Custom Highlight API bietet einen Mechanismus, um beliebige Textbereiche in einem Dokument zu gestalten: Mit JavaScript werden die Bereiche erstellt und mit CSS gestaltet.

## Konzepte und Verwendung

Die Gestaltung von Textbereichen auf einer Webseite kann sehr nützlich sein. Beispielsweise heben Webanwendungen zur Textbearbeitung Rechtschreib- oder Grammatikfehler hervor, während Code-Editoren Syntaxfehler hervorheben.

Die CSS Custom Highlight API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}. Sie ermöglicht es, beliebige [`Range`](/de/docs/Web/API/Range)-Objekte zu erstellen und zu gestalten, statt auf vom Browser definierte Bereiche beschränkt zu sein.

Mit der CSS Custom Highlight API können Sie Textbereiche programmgesteuert erstellen und hervorheben, ohne die DOM-Struktur der Seite zu verändern.

Um Textbereiche auf einer Webseite mit der CSS Custom Highlight API zu gestalten, sind vier Schritte erforderlich:

1. [`Range`](/de/docs/Web/API/Range)-Objekte erstellen.
2. [`Highlight`](/de/docs/Web/API/Highlight)-Objekte für diese Bereiche erstellen.
3. Die Highlights mithilfe der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registrieren.
4. Die Highlights mithilfe des Pseudoelements {{cssxref("::highlight", "::highlight()")}} gestalten.

### Bereiche erstellen

Definieren Sie zunächst die Textbereiche, die Sie gestalten möchten, indem Sie in JavaScript [`Range`](/de/docs/Web/API/Range)-Objekte erstellen. Zum Beispiel:

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

Erstellen Sie anschließend [`Highlight`](/de/docs/Web/API/Highlight)-Objekte für Ihre Textbereiche.

Einem Highlight können mehrere Bereiche zugeordnet werden. Wenn Sie mehrere Textstellen auf dieselbe Weise hervorheben möchten, erstellen Sie ein einzelnes Highlight und initialisieren es mit den entsprechenden Bereichen.

```js
const highlight = new Highlight(range1, range2);
```

Sie können aber auch so viele Highlights erstellen, wie Sie benötigen. Wenn Sie beispielsweise einen kollaborativen Texteditor entwickeln, in dem jede Person eine andere Textfarbe erhält, können Sie für jede Person ein eigenes Highlight erstellen, wie der folgende Codeausschnitt zeigt:

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

Jedes Highlight kann anders gestaltet werden.

### Highlights registrieren

Nachdem Sie die Highlights erstellt haben, registrieren Sie sie über die [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry), die als [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) verfügbar ist.

Die Registry ist ein {{jsxref("Map")}}-ähnliches Objekt, mit dem Highlights unter Namen registriert werden, wie hier gezeigt:

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

Im obigen Codeausschnitt sind die Zeichenfolgen `user-1-highlight` und `user-2-highlight` benutzerdefinierte Bezeichner. Mit ihnen können Sie in CSS Stile auf die registrierten Highlights anwenden.

Sie können beliebig viele Highlights in der Registry registrieren, einzelne Highlights entfernen oder die gesamte Registry leeren.

```js
// Remove a single highlight from the registry.
CSS.highlights.delete("user-1-highlight");

// Clear the registry.
CSS.highlights.clear();
```

### Highlights gestalten

Zum Schluss gestalten Sie die registrierten Highlights mit dem Pseudoelement {{cssxref("::highlight", "::highlight()")}}. So gestalten Sie beispielsweise das im vorherigen Schritt registrierte Highlight `user-1-highlight`:

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

### Barrierefreiheit

Benutzerdefinierte Highlights verleihen der Dokumentstruktur nicht von sich aus eine semantische Bedeutung. Das Attribut [`type`](/de/docs/Web/API/Highlight/type) macht Semantik, etwa Rechtschreib- oder Grammatikfehler, für unterstützende Technologien zugänglich. Die Unterstützung kann jedoch je nach Plattform und verwendetem Typ variieren.

Wenn die Kompatibilität mit unterstützenden Technologien wichtig ist, sollten Sie semantische HTML-Elemente wie {{HTMLElement("mark")}} verwenden oder zusätzliche barrierefreie Hinweise für Highlights bereitstellen, die wichtige Informationen vermitteln.

## Schnittstellen

- [`Highlight`](/de/docs/Web/API/Highlight)
  - : Diese Schnittstelle repräsentiert eine Sammlung von Bereichen, die in einem Dokument gestaltet werden sollen.
- [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)
  - : Dieses über [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) zugängliche, {{jsxref("Map")}}-ähnliche Objekt dient dazu, Highlights mit benutzerdefinierten Bezeichnern zu registrieren.

## Beispiele

### Suchergebnisse hervorheben

Dieses Beispiel zeigt, wie Sie mit der CSS Custom Highlight API Suchergebnisse hervorheben.

#### HTML

Der folgende HTML-Codeausschnitt definiert ein Suchfeld und einen Artikel mit einigen Textabsätzen:

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

#### CSS

Das Pseudoelement `::highlight()` wird in CSS verwendet, um die durch das nachfolgende JavaScript registrierten Highlights zu gestalten:

```css
::highlight(search-results) {
  background-color: #ff0066;
  color: white;
}
```

#### JavaScript

JavaScript überwacht das `input`-Ereignis des Suchfelds. Wenn das Ereignis ausgelöst wird, sucht der Code im Artikeltext nach Übereinstimmungen mit dem eingegebenen Text. Anschließend erstellt er Bereiche für die Übereinstimmungen und verwendet die CSS Custom Highlight API, um ein Highlight-Objekt namens `search-results` zu erstellen und zu registrieren:

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

#### Ergebnis

Das Ergebnis sehen Sie unten. Geben Sie Text in das Suchfeld ein, um Übereinstimmungen im Artikel hervorzuheben:

{{ EmbedLiveSample('Highlighting search results', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- CSS-{{cssxref("pseudo-elements")}}
- Modul [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/) auf CSS-Tricks (2022)
